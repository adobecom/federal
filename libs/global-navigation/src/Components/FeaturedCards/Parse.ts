import { IrrecoverableError, Link, parseLink, RecoverableError } from "../../test-exports";
import { parseListAndAccumulateErrors } from "../../Utils/Utils";
import { parseSecondaryCTA, SecondaryCTA } from "../CTA/Parse";

export type FeaturedCards = {
  type: "FeaturedCards";
  cards: List<Card>;
};

export type Card = {
  type: "Card";
  title: string;
  subtitle: string;
  eyeBrow: string;
  bodyLink: Link;
  footerCTA: SecondaryCTA;
};

export const parseFeaturedCards = (
  element: HTMLElement | Element
): Parsed<FeaturedCards, RecoverableError> => {
  const [
    cards,
    errors
  ] = parseListAndAccumulateErrors([...element.children], parseCard);
  return [
    {
      type: "FeaturedCards",
      cards,
    },
    errors
  ];
};

const parseCard = (
  element: Element
): Parsed<Card, RecoverableError> => {
  const eyeBrowElement = element.querySelector('h3') || null;
  if (!eyeBrowElement)
    throw new RecoverableError("Eye brow element not found");
  const titleElement = element.querySelector('h1') || null;
  const subtitleElement = titleElement?.nextElementSibling || null;
  if (!titleElement)
    throw new IrrecoverableError("Expected title");
  if (!subtitleElement)
    throw new IrrecoverableError("Expected subtitle");
  const linkElement
    = subtitleElement.nextElementSibling?.firstElementChild || null;
  if (!linkElement) {
    throw new IrrecoverableError("Expected card link after subtitle");
  }

  const [cardLink, linkErrors] = parseLink(linkElement);

  const [
    footerCTA,
    ctaErrors
  ] = parseSecondaryCTA(element) as Parsed<SecondaryCTA, RecoverableError>;
  
  return [
    {
      type: "Card",
      title: titleElement.textContent ?? '',
      subtitle: subtitleElement.textContent ?? '',
      bodyLink: cardLink,
      footerCTA,
      eyeBrow: eyeBrowElement.textContent ?? '',
    },
    [...ctaErrors, ...linkErrors]
  ];
};
