import { IrrecoverableError, RecoverableError } from "../../../Error/Error";
import { parseSecondaryCTA, SecondaryCTA } from "../../CTA/Parse";
import { isMerchLink, isMasLink } from "../../../Utils/Utils";

export type PromoCardSmall = {
  type: "PromoCardSmall";
  card: PromoCardSmallData;
};

export type PromoCardSmallData = {
  title: string;
  titleHtml: string;
  body: string;
  bodyHtml: string;
  cta: SecondaryCTA | null;
  bgImageAlt: string;
  bgImageSrc: string;
};

// An OST/M@S price/field link must survive parse as a live anchor so
// PostRendering/MerchLinks can resolve it in place; textContent dropped it.
const hasCommerceAnchor = (element: Element | null): boolean =>
  element !== null
  && [...element.querySelectorAll('a[href]')].some((anchor) => {
    const href = anchor.getAttribute('href') ?? '';
    return isMerchLink(href) || isMasLink(href);
  });

const ERRORS = {
  MissingContentSection: "Promo card small is missing content section",
  MissingTitleElement: "Promo card small is missing title element",
  MissingTitleText: "Promo card small is missing title text",
  MissingBackgroundImageSection: "Promo card is missing background image section",
  MissingBackgroundImage: "Promo card is missing background image",
  MissingBackgroundImageAlt: "Promo card background image is missing alt text",
  MissingBackgroundImageSrc: "Promo card background image is missing src",
};

export const parsePromoCardSmall = (
  element: Element
): Parsed<PromoCardSmall, RecoverableError> => {
  const errors = new Set<RecoverableError>();
  const [bgImageSection, contentSection] = element.querySelectorAll(':scope > div');

  if (bgImageSection === undefined)
    throw new IrrecoverableError(ERRORS.MissingBackgroundImageSection);

  // A section may contain more than one <picture> (e.g. a decorative one
  // alongside the actual background image); the last is the bg image.
  const bgPictures = [...bgImageSection.querySelectorAll(':scope picture:not(:scope p picture)')];
  const bgImageElement: HTMLImageElement | null = bgPictures[bgPictures.length - 1]?.querySelector('img') ?? null;
  if (bgImageElement === null)
    errors.add(new RecoverableError(ERRORS.MissingBackgroundImage));

  const bgImageAlt = bgImageElement?.getAttribute('alt') ?? "";
  if (bgImageAlt === "")
    errors.add(new RecoverableError(ERRORS.MissingBackgroundImageAlt));

  const bgImageSrc = bgImageElement?.getAttribute('src') ?? "";
  if (bgImageSrc === "")
    errors.add(new RecoverableError(ERRORS.MissingBackgroundImageSrc));

  if (contentSection === undefined)
    throw new IrrecoverableError(ERRORS.MissingContentSection);

  const titleElement = contentSection.querySelector('p:not(:has(strong > a, em > a))') ?? null;
  if (titleElement === null)
    throw new IrrecoverableError(ERRORS.MissingTitleElement);

  const title = titleElement.textContent?.trim() ?? "";
  if (title === "")
    errors.add(new RecoverableError(ERRORS.MissingTitleText));
  // Keep plain text as-is; preserve HTML only for a price/field anchor.
  const titleHtml = hasCommerceAnchor(titleElement)
    ? titleElement.innerHTML.trim()
    : title;

  const bodyElement = contentSection.querySelectorAll('p:not(:has(strong > a, em > a))')[1] ?? null;
  const body = bodyElement?.textContent?.trim() ?? "";
  const bodyHtml = hasCommerceAnchor(bodyElement)
    ? (bodyElement?.innerHTML.trim() ?? "")
    : body;

  const [cta, ctaErrors] =
  (() : Parsed<SecondaryCTA | null, RecoverableError> => {
    try {
      return parseSecondaryCTA(contentSection) as
        Parsed<SecondaryCTA, RecoverableError>;
    } catch (_error) {
      return [null, []];
    }
  })();
  ctaErrors.forEach(e => errors.add(e));
  if (cta) {
    cta.daaLl = `${title} - ${cta.daaLl}`;
  }

  return [
    {
      type: "PromoCardSmall",
      card: {
        title,
        titleHtml,
        body,
        bodyHtml,
        cta,
        bgImageAlt,
        bgImageSrc,
      },
    },
    [...errors],
  ];
};
