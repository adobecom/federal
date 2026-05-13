import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import { parsePrimaryCTA, PrimaryCTA } from "../CTA/Parse";

export type PromoCardSmall = {
  type: "PromoCardSmall";
  card: PromoCardSmallData;
};

export type PromoCardSmallData = {
  bgImageAlt: string;
  bgImageSrc: string;
  title: string;
  body: string;
  cta: PrimaryCTA | null;
};

const ERRORS = {
  MissingBackgroundImageSection: "Promo card small is missing background image section",
  MissingBackgroundImage: "Promo card small is missing background image",
  MissingBackgroundImageAlt: "Promo card small background image is missing alt text",
  MissingBackgroundImageSrc: "Promo card small background image is missing src",
  MissingContentSection: "Promo card small is missing content section",
  MissingTitleElement: "Promo card small is missing title element",
  MissingTitleText: "Promo card small is missing title text",
};

export const parsePromoCardSmall = (
  element: Element
): Parsed<PromoCardSmall, RecoverableError> => {
  const [bgImageSection, contentSection] = element.querySelectorAll(':scope > div');
  const errors = new Set<RecoverableError>();

  if (bgImageSection === undefined)
    throw new IrrecoverableError(ERRORS.MissingBackgroundImageSection);

  const bgImageElement: HTMLImageElement | null = bgImageSection.querySelector(':scope picture img') ?? null;
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

  const bodyElement = contentSection.querySelectorAll('p:not(:has(strong > a, em > a))')[1] ?? null;
  const body = bodyElement?.textContent?.trim() ?? "";

  const [cta, ctaErrors] = (() : Parsed<PrimaryCTA | null, RecoverableError> => {
    try {
      return parsePrimaryCTA(contentSection) as Parsed<PrimaryCTA, RecoverableError>;
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
        bgImageAlt,
        bgImageSrc,
        title,
        body,
        cta,
      },
    },
    [...errors],
  ];
};
