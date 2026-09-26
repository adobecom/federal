import { getMiloConfig, isMerchLink, isMasLink, isMasFieldLink, getMerchDecorators } from '../Utils/Utils';
import { RecoverableError } from '../Error/Error';

type MerchModule = {
  default?: (link: HTMLAnchorElement) => unknown;
};

// gnav styling classes that must survive Milo's commerce decoration: button
// pills (`feds-primary-cta`/`feds-secondary-cta`) and plain nav links
// (`feds-link`/`feds-link--highlight`). The CTA/link CSS targets these on the
// `<li>`'s direct child, so they have to end up on the resolved anchor.
const NAV_STYLING_CLASSES = [
  'feds-primary-cta',
  'feds-secondary-cta',
  'feds-link',
  'feds-link--highlight',
];

// Stashed on the `<li>` host (which stays put through Milo's in-place
// `el.replaceWith(<mas-field>)`) so the async `mas:ready` handler can recover
// the authored gnav classes / analytics id after decoration, regardless of when
// Milo swapped the `<a>` for a `<mas-field>`. Also scopes the document-level
// `mas:ready` handler to top-level nav CTAs only — card/promo mas-fields never
// get these attributes, so their in-place decoration is left untouched.
const NAV_CLASSES_ATTR = 'data-feds-nav-classes';
const NAV_DAA_LL_ATTR = 'data-feds-nav-daa-ll';

// Dispatched (on `document`) after a top-level nav merch CTA finishes resolving
// and its final width is in place. `initCompactOverflow` re-runs its existing
// width measurement on this, so the nav recovers from the compact/mobile layout
// it (correctly) chose while the CTA still held its long unresolved
// placeholder text — the same re-measure a manual resize triggers. It changes
// no DOM, styling, or animation; it only re-measures.
export const NAV_MERCH_RESOLVED_EVENT = 'feds:nav-merch-resolved';

const notifyNavMerchResolved = (): void => {
  document.dispatchEvent(new CustomEvent(NAV_MERCH_RESOLVED_EVENT));
};

// Applied at render time (Main.ts) to a top-level nav CTA `<li>` whose link
// resolves asynchronously through M@S, and removed here once it resolves. CSS
// hides pending items (`display:none`), so the long unresolved placeholder text
// (`Mas-field: ACOM-CC / …`) never paints and never inflates the overflow
// measurement that decides desktop vs. compact — the item simply appears, at
// its final short width, only after it's decorated.
const NAV_PENDING_CLASS = 'feds-nav-merch-pending';

// Reveal a pending nav CTA `<li>` and re-measure the nav. Idempotent: only the
// first call (while still pending) removes the class and fires the re-measure.
const revealNavCta = (host: HTMLElement | null): void => {
  if (host === null || !host.classList.contains(NAV_PENDING_CLASS)) return;
  host.classList.remove(NAV_PENDING_CLASS);
  notifyNavMerchResolved();
};

/**
 * Move the stashed gnav classes / analytics id onto a resolved `<mas-field>`'s
 * inner `<a>` and unwrap the wrapper, so the button/link CSS — which targets
 * `ul.feds-gnav-items > li > .feds-*` — applies to a plain anchor rather than
 * the custom element. This mirrors Milo's own gnav
 * (`libs/blocks/global-navigation/utilities/menu/menu.js` `watchPromoCtas`:
 * `mf.replaceWith(link)`), reading the classes from the stable `<li>` host so
 * it works no matter when Milo performed the (async, in-place) replacement.
 */
const unwrapResolvedMasField = (masField: HTMLElement): void => {
  const host = masField.closest('li');
  const attr = host?.getAttribute(NAV_CLASSES_ATTR) ?? null;
  if (host === null || attr === null) return;
  const link = masField.querySelector('a');
  if (link === null) return;
  const preserved = attr.split(' ').filter((c) => c !== '');
  if (preserved.length > 0) link.classList.add(...preserved);
  const daaLl = host.getAttribute(NAV_DAA_LL_ATTR);
  if (daaLl !== null) link.setAttribute('daa-ll', daaLl);
  masField.replaceWith(link);
  host.removeAttribute(NAV_CLASSES_ATTR);
  host.removeAttribute(NAV_DAA_LL_ATTR);
  revealNavCta(host);
};

// Inline M@S field links resolve asynchronously into a `<mas-field>` that fires
// `mas:ready` on completion. One document-level listener for the whole nav,
// scoped by the `<li>` marker attribute so only top-level nav CTAs unwrap.
let masReadyWatched = false;
const watchMasReadyOnce = (): void => {
  if (masReadyWatched) return;
  masReadyWatched = true;
  document.addEventListener('mas:ready', (event: Event) => {
    const target = event.target as HTMLElement | null;
    if (target?.tagName === 'MAS-FIELD') unwrapResolvedMasField(target);
  });
};

// Top-level nav items are the only links that render as a bare `<a>` directly
// inside `<li>` (no block ancestor) and whose CTA/link CSS needs the class on
// that direct child. Only these get the `mas:ready` unwrap; card / promo /
// breadcrumb merch links live in block markup and keep Milo's in-place
// decoration untouched.
const isTopLevelNavLink = (link: HTMLAnchorElement): boolean =>
  link.matches('ul.feds-gnav-items > li > a');

/**
 * Milo's merch block replaces the authored `<a>` in place with its own
 * checkout-link / price element or an inline `<mas-field>`
 * (`el.replaceWith(...)`), dropping whatever classes the original anchor had.
 * So re-apply the authored gnav class after resolution, matching how each link
 * resolves:
 *
 * - Card / promo / breadcrumb links, and OST/price nav links (synchronous,
 *   non-`<mas-field>` return): apply the CTA class onto the returned element.
 *   This is the original in-place behaviour, unchanged.
 * - Inline `<mas-field>` nav CTAs (async): Milo's inline-CTA path
 *   (`decorateInlineCtas` -> `getBlockSize`) assumes a `<p>`/`<div>` ancestor
 *   and can't style a bare nav `<a>`, so instead stash the authored classes /
 *   analytics id on the stable `<li>` host and let the `mas:ready` handler move
 *   them onto the resolved inner `<a>` and unwrap the `<mas-field>` — exactly
 *   how Milo's own gnav handles promo CTAs (`watchPromoCtas`). Nothing about
 *   the authored render, resolution timing, or animation changes; only the
 *   anchor gains its class.
 */
const preserveNavClasses = (
  link: HTMLAnchorElement,
  decorate: (link: HTMLAnchorElement) => unknown,
): void => {
  const navClasses = [...link.classList]
    .filter((c) => NAV_STYLING_CLASSES.includes(c));

  // Non-top-level links (cards/promos/breadcrumbs) keep the original in-place
  // path: apply the CTA class to the decorator's return value.
  if (!isTopLevelNavLink(link) || navClasses.length === 0) {
    const ctaClasses = navClasses
      .filter((c) => c === 'feds-primary-cta' || c === 'feds-secondary-cta');
    void Promise.resolve(decorate(link)).then((result) => {
      if (ctaClasses.length === 0) return;
      if (result instanceof HTMLElement) result.classList.add(...ctaClasses);
    });
    return;
  }

  const host = link.closest('li');
  const daaLl = link.getAttribute('daa-ll');
  host?.setAttribute(NAV_CLASSES_ATTR, navClasses.join(' '));
  if (daaLl !== null) host?.setAttribute(NAV_DAA_LL_ATTR, daaLl);
  watchMasReadyOnce();

  void Promise.resolve(decorate(link)).then((result) => {
    // OST/price nav CTA: a non-`<mas-field>` element that never fires
    // `mas:ready`, so tag it directly and drop the stash.
    if (result instanceof HTMLElement && result.tagName !== 'MAS-FIELD') {
      result.classList.add(...navClasses);
      host?.removeAttribute(NAV_CLASSES_ATTR);
      host?.removeAttribute(NAV_DAA_LL_ATTR);
      revealNavCta(host);
      return;
    }
    // Decoration settled (Milo's own timeouts guarantee this) — so the authored
    // long-text `<a>` has already been swapped for the `<mas-field>`. If the
    // field resolved, unwrap it to the styled anchor; either way reveal now, so
    // the item is never left hidden and never revealed while it still holds the
    // long placeholder text. `mas:ready` may have already unwrapped it (this
    // then no-ops).
    const masField = host?.querySelector('mas-field');
    if (masField instanceof HTMLElement
      && masField.querySelector('a') !== null) {
      unwrapResolvedMasField(masField);
    } else {
      revealNavCta(host);
    }
  }).catch(() => {
    // Milo's inline-CTA decoration can throw for a bare nav `<a>` after the
    // `<mas-field>` content is already in place; unwrap it if resolved,
    // otherwise reveal so a failed field never stays hidden. Runs post-settle,
    // so the long placeholder text is already gone.
    const masField = host?.querySelector('mas-field');
    if (masField instanceof HTMLElement
      && masField.querySelector('a') !== null) {
      unwrapResolvedMasField(masField);
    } else {
      revealNavCta(host);
    }
  });
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
        merchLinks.forEach((link) => {
          preserveNavClasses(link, decorateMerchLink);
        });
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
        masLinks.forEach((link) => { decorateMasLink(link); });
      }
    }
  } catch (error) {
    errors.add(new RecoverableError(`Error initializing merch links: ${error}`));
  }

  return errors;
};
