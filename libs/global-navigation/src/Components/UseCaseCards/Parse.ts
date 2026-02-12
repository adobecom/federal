import { IrrecoverableError, Link, parseLink, RecoverableError } from "../../test-exports";
import { getNextSiblings, parseListAndAccumulateErrors } from "../../Utils/Utils";
import { parseSecondaryCTA, SecondaryCTA } from "../CTA/Parse";
import { LinkGroup, parseLinkGroup } from "../LinkGroup/Parse";

export type UseCaseCards = {
  type: "UseCaseCards";
  cards: List<Card>;
};

export type Card = {
  type: "Card";
  title: string;
  subtitle: Link;
  links: List<LinkGroup>;
  footerCTA: SecondaryCTA;
};

export const parseUseCaseCards = (
  element: HTMLElement | Element
): Parsed<UseCaseCards, RecoverableError> => {
  const [
    cards,
    errors
  ] = parseListAndAccumulateErrors([...element.children], parseCard);
  console.log(cards);
  return [
    {
      type: "UseCaseCards",
      cards,
    },
    errors
  ];
};

const parseCard = (
  element: Element
): Parsed<Card, RecoverableError> => {
  const h2 = element.firstElementChild;
  if (h2?.nodeName !== 'H2')
    throw new IrrecoverableError('expected h2');
  const title = h2.textContent ?? '';
  
  const subtitleElement = h2.nextElementSibling?.firstElementChild;
  if (!subtitleElement)
    throw new IrrecoverableError("expected subtitle href");
  const [subtitle, subtitleErrors] = parseLink(subtitleElement);

  const linkGroups = getNextSiblings(h2.nextElementSibling).filter(e => e.classList.contains('link-group'));
  const [
    links,
    linkErrors
  ] = parseListAndAccumulateErrors(linkGroups, parseLinkGroup);

  const [
    footerCTA,
    ctaErrors
  ] = parseSecondaryCTA(element) as Parsed<SecondaryCTA, RecoverableError>;
  
  return [
    {
      type: "Card",
      title,
      subtitle,
      links,
      footerCTA,
    },
    [...subtitleErrors, ...linkErrors, ...ctaErrors]
  ];
};
