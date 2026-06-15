import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import {
  PrimaryCTA,
  SecondaryCTA,
  parsePrimaryCTA,
  parseSecondaryCTA,
} from "../CTA/Parse";
import { alternative } from "../../Utils/Utils";

export type PromoBarVariant = 'minimized' | 'maximized' | 'maximized-release';

export type PromoBarContent = {
  icon: string | null;
  iconAlt: string | null;
  productName: string | null;
  headline: string | null;
  body: string | null;
  cta: PrimaryCTA | SecondaryCTA | null;
  bgImage: string | null;
};

export type PromoBar = {
  type: 'PromoBar';
  variant: PromoBarVariant;
  theme: 'light' | 'dark';
  bgColor: string | null;
  columns: PromoBarContent[];
};

const ERRORS = {
  elementNull: "Error when parsing PromoBar. Element is null",
};

const parseVariant = (classList: DOMTokenList): PromoBarVariant => {
  if (classList.contains('maximized-release')) return 'maximized-release';
  if (classList.contains('maximized')) return 'maximized';
  return 'minimized';
};

const parseIconLink = (cell: Element): { icon: string | null; iconAlt: string | null } => {
  // Icon is authored as <p><a href="...svg">https://...svg | Alt Text</a></p>
  // The pipe separates the full URL from the alt text in the link text.
  const iconAnchor = [...cell.querySelectorAll(':scope > p > a')].find((a) => {
    const href = a.getAttribute('href') ?? '';
    return /\.(svg|png|jpg|jpeg|webp)(\?.*)?$/i.test(href);
  }) ?? null;
  if (iconAnchor === null) return { icon: null, iconAlt: null };

  const href = iconAnchor.getAttribute('href') ?? null;
  const linkText = iconAnchor.textContent ?? '';
  const pipeIdx = linkText.indexOf(' | ');
  const iconAlt = pipeIdx !== -1 ? linkText.slice(pipeIdx + 3).trim() : null;
  return { icon: href, iconAlt };
};

const parseContent = (cell: Element): PromoBarContent => {
  const { icon, iconAlt } = parseIconLink(cell);

  const pictures = [...cell.querySelectorAll('picture')];
  // Last <picture> is a bg image only when there are 2+ pictures;
  // with just one it is the icon.
  const bgPicture = pictures.length > 1
    ? pictures[pictures.length - 1]
    : null;
  const bgImg = bgPicture?.querySelector('img') ?? null;
  const bgImage = bgImg?.getAttribute('src')
    ?? bgImg?.getAttribute('srcset')?.split('?')[0]
    ?? null;

  const productName = cell.querySelector('h5')?.textContent?.trim() ?? null;

  // Headline: first <p> with a <strong> that isn't a pure CTA row.
  // Pure CTA: <p><strong><a>…</a></strong></p> with no surrounding text.
  const headlineEl = [...cell.querySelectorAll(':scope > p')].find((p) => {
    if (p.querySelector('strong') === null) return false;
    if (p.querySelector('em > a') !== null) return false;
    // Exclude pure-CTA rows: <strong> contains only an <a> and no other text.
    const strong = p.querySelector('strong');
    const isCtaRow = strong !== null
      && strong.querySelector('a') !== null
      && (strong.textContent ?? '').trim()
        === (strong.querySelector('a')?.textContent ?? '').trim();
    return !isCtaRow;
  }) ?? null;
  const headline = headlineEl?.innerHTML?.trim() ?? null;

  // Body <p>: has visible text, not the icon row, not the CTA row,
  // not the tracking-header row, and not a headline-only strong.
  const bodyEl = [...cell.querySelectorAll('p')].find((p) => {
    if (
      p.querySelector('picture') !== null
      && (p.textContent?.trim() ?? '') === ''
    ) return false;
    if (p.querySelector('em > a') !== null) return false;
    if (p.querySelector('strong > a') !== null) return false;
    if (p.querySelector('strong.tracking-header') !== null) return false;
    if (
      p.querySelector('strong') !== null
      && p.querySelector('a') === null
    ) return false;
    if (p.closest('h5') !== null) return false;
    return (p.textContent?.trim() ?? '').length > 0;
  }) ?? null;
  const body = bodyEl?.innerHTML?.trim() ?? null;

  // CTA row: a <p> whose only content is <strong><a> or <em><a>.
  const ctaP = [...cell.querySelectorAll(':scope > p')].find((p) =>
    p.querySelector('strong > a') !== null || p.querySelector('em > a') !== null
  ) ?? null;
  let cta: PrimaryCTA | SecondaryCTA | null = null;
  try {
    const [parsed] = alternative(parsePrimaryCTA)
      .or(parseSecondaryCTA)
      .eval(ctaP);
    cta = parsed;
  } catch (_) {
    cta = null;
  }

  return { icon, iconAlt, productName, headline, body, cta, bgImage };
};

export const parsePromoBar = (
  element: Element | null,
): Parsed<PromoBar, RecoverableError> => {
  if (element === null)
    throw new IrrecoverableError(ERRORS.elementNull);

  const variant = parseVariant(element.classList);
  const theme: 'light' | 'dark' = element.classList.contains('dark')
    ? 'dark'
    : 'light';

  const bgColor = element
    .querySelector(':scope > div:first-child > div')
    ?.textContent?.trim() ?? null;

  const contentCells = [
    ...element.querySelectorAll(':scope > div + div > div'),
  ];
  const columns = contentCells.map(parseContent);

  return [
    { type: 'PromoBar', variant, theme, bgColor, columns },
    [],
  ];
};
