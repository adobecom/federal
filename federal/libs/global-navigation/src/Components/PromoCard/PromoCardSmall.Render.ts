import { PromoCardSmall, PromoCardSmallData } from "./PromoCardSmall.Parse";
import { primaryCTA } from "../CTA/Render";
import { federateUrl, sanitize } from "../../Utils/Utils";

export const promoCardSmall = ({ card }: PromoCardSmall): HTML => renderCard(card);

const renderCard = ({
  bgImageAlt,
  bgImageSrc,
  title,
  body,
  cta,
}: PromoCardSmallData): HTML => `
  <article class="promo-card-small" daa-lh="promo-card-small">
    ${bgImageSrc
      ? `<picture class="promo-card-small__bg">
           <img
             loading="lazy"
             src="${federateUrl(bgImageSrc)}"
             alt="${bgImageAlt}"
             class="promo-card-small__bg-image"
           >
         </picture>`
      : ""}
    <div class="promo-card-small__content">
      <div class="promo-card-small__text">
        <h2 id="title-${sanitize(title)}" class="promo-card-small__title" role="heading" aria-level="2">
          ${title}
        </h2>
        ${body ? `<p class="promo-card-small__body">${body}</p>` : ""}
      </div>
      ${cta === null
        ? ""
        : `<div class="promo-card-small__cta">
             ${primaryCTA({ ...cta, ariaAttrs: { 'aria-describedby': `title-${sanitize(title)}` } })}
           </div>`}
    </div>
  </article>
`.trim();
