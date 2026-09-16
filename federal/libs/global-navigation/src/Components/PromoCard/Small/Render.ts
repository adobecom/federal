import { PromoCardSmall, PromoCardSmallData } from "./Parse";
import { secondaryCTA } from "../../CTA/Render";
import { sanitize, federateUrl } from "../../../Utils/Utils";

export const promoCardSmall = ({ card }: PromoCardSmall): HTML =>
  renderCard(card);

const renderCard = ({
  title,
  titleHtml,
  body,
  bodyHtml,
  cta,
  bgImageAlt,
  bgImageSrc,
}: PromoCardSmallData): HTML => `
  <article class="promo-card-small" daa-lh="promo-card-small">
  ${
    bgImageSrc
      ? `<picture class="promo-card__bg">
            <img
            loading="lazy"
            src="${federateUrl(bgImageSrc)}"
            alt="${bgImageAlt}"
            class="promo-card__bg-image"
          >
          </picture>`
      : ""
  }
  <div class="promo-card-small__content">
      <div class="promo-card-small__text">
        <h2 id="title-${sanitize(title)}" class="promo-card-small__title" role="heading" aria-level="2">
          ${titleHtml}
        </h2>
        ${body ? `<p class="promo-card-small__body">${bodyHtml}</p>` : ""}
      </div>
      ${cta === null
        ? ""
        : `<div class="promo-card-small__cta">
             ${secondaryCTA({ ...cta, ariaAttrs: { 'aria-describedby': `title-${sanitize(title)}` } })}
           </div>`}
    </div>
  </article>
`.trim();
