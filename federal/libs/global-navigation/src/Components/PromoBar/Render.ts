import { localizeHref } from "../../Utils/Utils";
import { PromoBar } from "./Parse";

const eyebrowHTML = (
  icon: string | null,
  text: string | null,
): HTML => {
  if (!icon && !text) return '';
  const iconEl = icon
    ? icon.startsWith('http') || icon.startsWith('/')
      ? `<img class="feds-promo-bar-eyebrow-icon" src="${icon}" alt="" aria-hidden="true" width="24" height="24">`
      : `<span class="feds-promo-bar-eyebrow-icon" aria-hidden="true">${icon}</span>`
    : '';
  const textEl = text ? `<span class="feds-promo-bar-eyebrow-text">${text}</span>` : '';
  return `<div class="feds-promo-bar-eyebrow">${iconEl}${textEl}</div>`;
};

export const promoBar = ({
  eyebrowIcon,
  eyebrowText,
  headlineLeft,
  headlineRight,
  bodyCopy,
  cta,
  theme,
}: PromoBar): HTML => {
  const ctaHTML = cta
    ? `<a href="${localizeHref(cta.href)}" class="feds-promo-bar-cta" daa-ll="promo-bar|${cta.text}">${cta.text}</a>`
    : '';

  const bodyHTML = bodyCopy
    ? `<p class="feds-promo-bar-body">${bodyCopy}</p>`
    : '';

  const rightColHTML = (headlineRight || ctaHTML)
    ? `<div class="feds-promo-bar-right">
        ${headlineRight ? `<p class="feds-promo-bar-headline-right">${headlineRight}</p>` : ''}
        ${bodyHTML}
        ${ctaHTML}
      </div>`
    : '';

  return `
<div class="feds-promo-bar feds-promo-bar--${theme}" role="region" aria-label="Promotion">
  <div class="feds-promo-bar-inner">
    <div class="feds-promo-bar-left">
      ${eyebrowHTML(eyebrowIcon, eyebrowText)}
      <p class="feds-promo-bar-headline-left">${headlineLeft}</p>
    </div>
    ${rightColHTML}
  </div>
  <button
    class="feds-promo-bar-close"
    type="button"
    aria-label="Dismiss promotion"
    daa-ll="promo-bar|dismiss"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor" width="10" height="10" aria-hidden="true">
      <path d="M9.7071 1.7071a1 1 0 0 0-1.4142-1.4142L5 3.5858 1.7071.2929A1 1 0 0 0 .2929 1.7071L3.5858 5 .2929 8.2929a1 1 0 1 0 1.4142 1.4142L5 6.4142l3.2929 3.2929a1 1 0 0 0 1.4142-1.4142L6.4142 5l3.2929-3.2929Z"/>
    </svg>
  </button>
</div>
`.trim();
};
