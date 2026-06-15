import { primaryCTA, secondaryCTA } from "../CTA/Render";
import { PrimaryCTA, SecondaryCTA } from "../CTA/Parse";
import { PromoBar, PromoBarContent } from "./Parse";
import { federateUrl } from "../../Utils/Utils";

const iconHTML = (
  src: string | null,
  alt: string | null,
): HTML => src !== null
  ? `<img class="feds-promo-bar-icon" src="${federateUrl(src)}" alt="${alt ?? ''}" width="40" height="40" aria-hidden="true">`
  : '';

const ctaHTML = (cta: PrimaryCTA | SecondaryCTA | null): HTML => {
  if (cta === null) return '';
  return cta.type === 'PrimaryCTA' ? primaryCTA(cta) : secondaryCTA(cta);
};

const bgStyle = (bgColor: string | null): string =>
  bgColor !== null ? ` style="background-color:${bgColor}"` : '';

// ─── Minimized ──────────────────────────────────────────────────────────
const renderMinimized = ({ theme, bgColor, columns }: PromoBar): HTML => {
  const col = columns[0];
  if (col === undefined) return '';
  return `
<div
  class="feds-promo-bar feds-promo-bar--minimized feds-promo-bar--${theme}"
  ${bgStyle(bgColor)}
  role="region"
  aria-label="Promotion"
  daa-lh="promo-bar"
>
  <div class="feds-promo-bar-inner">
    ${iconHTML(col.icon, col.iconAlt)}
    <p class="feds-promo-bar-text">${col.headline ?? ''}</p>
    ${ctaHTML(col.cta)}
  </div>
</div>`.trim();
};

// ─── Maximized ──────────────────────────────────────────────────────────
const renderMaximized = ({ theme, bgColor, columns }: PromoBar): HTML => {
  const col = columns[0];
  if (col === undefined) return '';
  return `
<div
  class="feds-promo-bar feds-promo-bar--maximized feds-promo-bar--${theme}"
  ${bgStyle(bgColor)}
  role="region"
  aria-label="Promotion"
  daa-lh="promo-bar"
>
  <div class="feds-promo-bar-inner">
    <div class="feds-promo-bar-left">
      <div class="feds-promo-product-container">
        ${iconHTML(col.icon, col.iconAlt)}
        ${col.productName !== null ? `<p class="feds-promo-bar-product">${col.productName}</p>` : ''}
      </div>
        ${col.headline !== null ? `<p class="feds-promo-bar-headline">${col.headline}</p>` : ''}
      </div>
    <div class="feds-promo-bar-right">
      ${col.body !== null ? `<p class="feds-promo-bar-body">${col.body}</p>` : ''}
      ${ctaHTML(col.cta)}
    </div>
  </div>
</div>`.trim();
};

// ─── Maximized-release ──────────────────────────────────────────────────
const renderColumn = (col: PromoBarContent): HTML => {
  const colBgStyle = col.bgImage !== null
    ? ` style="background-image:url('${col.bgImage}')"`
    : '';
  return `
<div class="feds-promo-bar-column"${colBgStyle}>
  ${iconHTML(col.icon, col.iconAlt)}
  ${col.productName !== null ? `<p class="feds-promo-bar-product">${col.productName}</p>` : ''}
  ${col.headline !== null ? `<p class="feds-promo-bar-headline">${col.headline}</p>` : ''}
  ${col.body !== null ? `<p class="feds-promo-bar-body">${col.body}</p>` : ''}
  ${ctaHTML(col.cta)}
</div>`.trim();
};

const renderMaximizedRelease = (
  { theme, bgColor, columns }: PromoBar,
): HTML => `
<div
  class="feds-promo-bar feds-promo-bar--maximized-release feds-promo-bar--${theme}"
  ${bgStyle(bgColor)}
  role="region"
  aria-label="Promotion"
  daa-lh="promo-bar"
>
  <div class="feds-promo-bar-inner">
    ${columns.map(renderColumn).join('')}
  </div>
</div>`.trim();

// ─── Entry point ────────────────────────────────────────────────────────
export const promoBar = (data: PromoBar): HTML => {
  switch (data.variant) {
    case 'maximized':         return renderMaximized(data);
    case 'maximized-release': return renderMaximizedRelease(data);
    default:                  return renderMinimized(data);
  }
};
