import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import { parseSecondaryCTA, SecondaryCTA } from "../CTA/Parse";

export type PromoCardSmall = {
  type: "PromoCardSmall";
  card: PromoCardSmallData;
};

export type PromoCardSmallData = {
  title: string;
  body: string;
  cta: SecondaryCTA | null;
};

const ERRORS = {
  MissingContentSection: "Promo card small is missing content section",
  MissingTitleElement: "Promo card small is missing title element",
  MissingTitleText: "Promo card small is missing title text",
};

export const parsePromoCardSmall = (
  element: Element
): Parsed<PromoCardSmall, RecoverableError> => {
  const errors = new Set<RecoverableError>();

  const titleElement = element.querySelector('p:not(:has(strong > a, em > a))') ?? null;
  if (titleElement === null)
    throw new IrrecoverableError(ERRORS.MissingTitleElement);

  const title = titleElement.textContent?.trim() ?? "";
  if (title === "")
    errors.add(new RecoverableError(ERRORS.MissingTitleText));

  const bodyElement = element.querySelectorAll('p:not(:has(strong > a, em > a))')[1] ?? null;
  const body = bodyElement?.textContent?.trim() ?? "";

  const [cta, ctaErrors] =
  (() : Parsed<SecondaryCTA | null, RecoverableError> => {
    try {
      return parseSecondaryCTA(element) as
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
        body,
        cta,
      },
    },
    [...errors],
  ];
};
