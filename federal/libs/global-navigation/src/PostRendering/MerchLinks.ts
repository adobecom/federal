import {
  getMiloConfig,
  isMerchLink,
  isMasLink,
  isMasFieldLink,
  getMerchDecorators,
} from '../Utils/Utils';
import { RecoverableError } from '../Error/Error';

type MerchModule = {
  default?: (link: HTMLAnchorElement) => unknown;
};

export const MERCH_RESOLVED_EVENT = 'feds:merch-resolved';

const PENDING_MERCH_ATTR = 'data-feds-merch-pending';
const MILO_VISUAL_CLASS = /^(?:con-button|outline|button-.+)$/;

const notifyMerchResolved = (mountpoint: HTMLElement): void => {
  mountpoint.dispatchEvent(new CustomEvent(MERCH_RESOLVED_EVENT));
};

/**
 * Milo's merch block replaces the authored `<a>` outright with its own
 * checkout-link/price element (`el.replaceWith(merch)`), which drops
 * whatever classes the original anchor had. CTA-authored merch links rely on
 * `feds-primary-cta`/`feds-secondary-cta` for gnav button styling, so those
 * need to survive onto the replacement element.
 */
const preserveCtaClasses = (
  link: HTMLAnchorElement,
  decorate: (link: HTMLAnchorElement) => unknown,
): Promise<void> => {
  const federalClasses = [...link.classList]
    .filter((className) => className.startsWith('feds-'));
  return Promise.resolve(decorate(link)).then((result) => {
    if (federalClasses.length === 0 || !(result instanceof HTMLElement)) return;
    const resolvedLink = result instanceof HTMLAnchorElement
      ? result
      : result.querySelector<HTMLAnchorElement>('a');
    (resolvedLink ?? result).classList.add(...federalClasses);
  });
};

/** Resolve top-level MAS fields in their authored paragraph context. */
const decorateTopLevelMasField = async (
  link: HTMLAnchorElement,
  decorate: (link: HTMLAnchorElement) => unknown,
  mountpoint: HTMLElement,
): Promise<void> => {
  const federalClasses = [...link.classList]
    .filter((className) => className.startsWith('feds-'));
  const originalAttrs = [...link.attributes]
    .filter(({ name }) =>
      name === 'daa-ll'
      || name === 'target'
      || name.startsWith('aria-')
      || name.startsWith('data-feds-')
    );

  link.setAttribute(PENDING_MERCH_ATTR, '');

  const staging = document.createElement('div');
  staging.hidden = true;
  const paragraph = document.createElement('p');
  const clone = link.cloneNode(true) as HTMLAnchorElement;
  clone.removeAttribute(PENDING_MERCH_ATTR);

  const wrapper = link.classList.contains('feds-primary-cta')
    ? document.createElement('strong')
    : link.classList.contains('feds-secondary-cta')
      ? document.createElement('em')
      : null;
  if (wrapper === null) paragraph.append(clone);
  else {
    wrapper.append(clone);
    paragraph.append(wrapper);
  }
  staging.append(paragraph);
  document.body.append(staging);

  let complete = false;
  const cleanup = (): void => {
    document.removeEventListener('mas:ready', onMasReady);
    staging.remove();
  };
  const revealOriginal = (): void => {
    link.removeAttribute(PENDING_MERCH_ATTR);
    notifyMerchResolved(mountpoint);
  };
  const finish = (candidate: unknown): boolean => {
    if (complete) return true;
    const resolvedLink = candidate instanceof HTMLAnchorElement
      ? candidate
      : candidate instanceof Element
        ? candidate.querySelector<HTMLAnchorElement>('a')
        : staging.querySelector<HTMLAnchorElement>('a');
    if (resolvedLink === null || resolvedLink === clone) return false;

    [...resolvedLink.classList].forEach((className) => {
      if (MILO_VISUAL_CLASS.test(className) || className === 'merch') {
        resolvedLink.classList.remove(className);
      }
    });
    resolvedLink.classList.add(...federalClasses);
    originalAttrs.forEach(({ name, value }) => {
      resolvedLink.setAttribute(name, value);
    });
    resolvedLink.removeAttribute(PENDING_MERCH_ATTR);

    complete = true;
    link.replaceWith(resolvedLink);
    cleanup();
    notifyMerchResolved(mountpoint);
    return true;
  };
  function onMasReady(event: Event): void {
    const target = event.target;
    if (!(target instanceof Element) || !staging.contains(target)) return;
    finish(target);
  }
  document.addEventListener('mas:ready', onMasReady);

  try {
    const result = await Promise.resolve(decorate(clone));
    if (finish(result)) return;
    // Keep late mas-field results connected until mas:ready.
    if (staging.querySelector('mas-field') !== null) return;
    cleanup();
    revealOriginal();
  } catch (error) {
    cleanup();
    revealOriginal();
    throw error;
  }
};

/**
 * Loads the relevant Milo commerce block for each link in the nav:
 * - `a.merch` (OST / miniplans): Milo `merch` block
 * - `mas.adobe.com` studio links: Milo `merch-card-autoblock` block
 * @param mountpoint - The global navigation container element
 * @returns Set of RecoverableErrors encountered during initialization
 */
export const initMerchLinks = async (
  mountpoint: HTMLElement
): Promise<Set<RecoverableError>> => {
  const errors = new Set<RecoverableError>();

  // Product-card commerce links (price/discount) are authored inside the card's
  // single <a>, where a nested <a> is invalid. Parse leaves them as non-anchor
  // placeholders; convert them back to anchors so the resolution below handles
  // them in place.
  mountpoint.querySelectorAll<HTMLElement>('.feds-commerce-placeholder')
    .forEach((placeholder) => {
      const href = placeholder.getAttribute('data-commerce-href') ?? '';
      if (href === '') return;
      const link = document.createElement('a');
      link.href = href;
      link.innerHTML = placeholder.innerHTML;
      if (isMerchLink(href)) link.classList.add('merch');
      placeholder.replaceWith(link);
    });

  // Tag OST and inline M@S field links so the `a.merch` path resolves them to
  // an inline value (mirrors Milo's `decorateAutoBlock` downgrade). Lets cards
  // preserve a price/field anchor without re-implementing the tagging.
  mountpoint.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    if (isMerchLink(link.href) || isMasFieldLink(link.href)) {
      link.classList.add('merch');
    }
  });

  const merchLinks = mountpoint.querySelectorAll<HTMLAnchorElement>('a.merch');
  // Match C1 by resolving every top-level MAS field in authored context.
  const stagedMasFieldLinks = [...merchLinks]
    .filter((link) =>
      isMasFieldLink(link.href)
      && link.matches('ul.feds-gnav-items > li > a')
    );
  // Keep authored labels out of the initial compact measurement.
  stagedMasFieldLinks.forEach((link) => {
    link.setAttribute(PENDING_MERCH_ATTR, '');
  });
  // Full M@S cards only; field links (tagged above) never build a merch-card.
  const masLinks = [...mountpoint.querySelectorAll<HTMLAnchorElement>('a[href]')]
    .filter((link) => isMasLink(link.href) && !isMasFieldLink(link.href));

  if (merchLinks.length === 0 && masLinks.length === 0) return errors;

  try {
    const injected = getMerchDecorators();
    // base is only needed for the fallback import; injected decorators skip it.
    const needsBase = (merchLinks.length > 0 && !injected.merch)
      || (masLinks.length > 0 && !injected.masCard);
    const base = needsBase ? getMiloConfig().base : '';

    if (needsBase && base === '') {
      stagedMasFieldLinks.forEach((link) => {
        link.removeAttribute(PENDING_MERCH_ATTR);
      });
      errors.add(
        new RecoverableError(
          'base not found in config, cannot initialize merch links'
        )
      );
      return errors;
    }

    // OST / miniplans + inline M@S field links: Milo `merch` block
    if (merchLinks.length > 0) {
      const decorateMerchLink = injected.merch
        ?? (await import(`${base}/blocks/merch/merch.js`) as MerchModule).default;
      if (decorateMerchLink === undefined) {
        errors.add(new RecoverableError('decorateMerchLink not found in merch module'));
      } else {
        await Promise.all([...merchLinks].map((link) =>
          stagedMasFieldLinks.includes(link)
            ? decorateTopLevelMasField(link, decorateMerchLink, mountpoint)
            : preserveCtaClasses(link, decorateMerchLink)
        ));
      }
    }

    // Full M@S cards: Milo `merch-card-autoblock` block
    if (masLinks.length > 0) {
      const decorateMasLink = injected.masCard
        ?? (await import(
          `${base}/blocks/merch-card-autoblock/merch-card-autoblock.js`
        ) as MerchModule).default;
      if (decorateMasLink === undefined) {
        errors.add(new RecoverableError('default export not found in merch-card-autoblock module'));
      } else {
        await Promise.all(masLinks.map((link) =>
          Promise.resolve(decorateMasLink(link)).then(() => {
            notifyMerchResolved(mountpoint);
          })
        ));
      }
    }
  } catch (error) {
    stagedMasFieldLinks.forEach((link) => {
      if (!link.isConnected) return;
      link.removeAttribute(PENDING_MERCH_ATTR);
    });
    errors.add(new RecoverableError(`Error initializing merch links: ${error}`));
  }

  return errors;
};
