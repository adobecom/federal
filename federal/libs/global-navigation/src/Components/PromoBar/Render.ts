import { primaryCTA, secondaryCTA } from "../CTA/Render";
import { PrimaryCTA, SecondaryCTA } from "../CTA/Parse";
import { PromoBar, PromoBarContent, PromoBarViewport } from "./Parse";
import { federateUrl } from "../../Utils/Utils";

const iconHTML = (
  src: string | null,
  alt: string | null,
): HTML => src !== null
  ? `<img class="feds-promo-bar-icon" src="${federateUrl(src)}" alt="${alt ?? ''}" width="40" height="40" loading="lazy">`
  : '';

const ctaHTML = (cta: PrimaryCTA | SecondaryCTA | null): HTML => {
  if (cta === null) return '';
  return cta.type === 'PrimaryCTA' ? primaryCTA(cta) : secondaryCTA(cta);
};

const bgStyle = (bgColor: string | null): string =>
  bgColor !== null ? ` style="background-color:${bgColor}"` : '';

const viewportClass = (viewports: PromoBarViewport[]): string =>
  viewports.map((v) => `feds-promo-bar-slot--${v}`).join(' ');

// ─── Minimized ──────────────────────────────────────────────────────────
const minimizedSlot = (
  col: PromoBarContent,
  viewports: PromoBarViewport[],
): HTML => `
<div class="feds-promo-bar-slot ${viewportClass(viewports)}">
  <div class="feds-promo-bar-inner">
    ${iconHTML(col.icon, col.iconAlt)}
    <p class="feds-promo-bar-text">${col.headline ?? ''}</p>
    ${ctaHTML(col.cta)}
  </div>
</div>`.trim();

const renderMinimized = ({ theme, bgColor, slots }: PromoBar): HTML => `
<div
  class="feds-promo-bar feds-promo-bar--minimized feds-promo-bar--${theme}"
  ${bgStyle(bgColor)}
  role="region"
  aria-label="Promotion"
  daa-lh="promo-bar"
>
  ${slots.map(({ content, viewports }) => minimizedSlot(content, viewports)).join('')}
</div>`.trim();

// ─── Maximized ──────────────────────────────────────────────────────────
const maximizedSlot = (
  col: PromoBarContent,
  viewports: PromoBarViewport[],
): HTML => `
<div class="feds-promo-bar-slot ${viewportClass(viewports)}">
  <div class="feds-promo-bar-inner">
    <div class="feds-promo-product-container">
      ${iconHTML(col.icon, col.iconAlt)}
      ${col.productName !== null ? `<p class="feds-promo-bar-product">${col.productName}</p>` : ''}
    </div>
    ${col.headline !== null ? `<p class="feds-promo-bar-headline">${col.headline}</p>` : ''}
    ${col.body !== null ? `<p class="feds-promo-bar-body">${col.body}</p>` : ''}
    ${ctaHTML(col.cta)}
  </div>
</div>`.trim();

const renderMaximized = ({ theme, bgColor, slots }: PromoBar): HTML => `
<div
  class="feds-promo-bar feds-promo-bar--maximized feds-promo-bar--${theme}"
  ${bgStyle(bgColor)}
  role="region"
  aria-label="Promotion"
  daa-lh="promo-bar"
>
  ${slots.map(({ content, viewports }) => maximizedSlot(content, viewports)).join('')}
</div>`.trim();

// ─── Maximized-release ──────────────────────────────────────────────────
const maximizedReleaseSlot = (
  col: PromoBarContent,
  viewports: PromoBarViewport[],
): HTML => {
  return `
<div class="feds-promo-bar-slot ${viewportClass(viewports)}">
  <div class="feds-promo-bar-inner">
    <div class="feds-promo-bar-column">
      ${iconHTML(col.icon, col.iconAlt)}
      ${col.productName !== null ? `<p class="feds-promo-bar-product">${col.productName}</p>` : ''}
      ${col.headline !== null ? `<p class="feds-promo-bar-headline">${col.headline}</p>` : ''}
      ${col.body !== null ? `<p class="feds-promo-bar-body">${col.body}</p>` : ''}
      ${ctaHTML(col.cta)}
    </div>
    ${col.bgImage !== null ? `<picture class="feds-promo-bar-bg"><img loading="lazy" src="${federateUrl(col.bgImage)}" alt=""></picture>` : ''}
  </div>
</div>`.trim();
};

const renderMaximizedRelease = (
  { theme, bgColor, slots }: PromoBar,
): HTML => `
<div
  class="feds-promo-bar feds-promo-bar--maximized-release feds-promo-bar--${theme}"
  ${bgStyle(bgColor)}
  role="region"
  aria-label="Promotion"
  daa-lh="promo-bar"
>
  ${slots.map(({ content, viewports }) => maximizedReleaseSlot(content, viewports)).join('')}
</div>`.trim();

// ─── Entry point ────────────────────────────────────────────────────────
export const promoBar = (data: PromoBar): HTML => {
  switch (data.variant) {
    case 'maximized':         return renderMaximized(data);
    case 'maximized-release': return renderMaximizedRelease(data);
    default:                  return renderMinimized(data);
  }
};
