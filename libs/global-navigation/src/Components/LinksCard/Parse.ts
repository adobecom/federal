import {
  IrrecoverableError,
  Link,
  parseLink,
  RecoverableError
} from "../../test-exports";
import { parseListAndAccumulateErrors } from "../../Utils/Utils";
import { parseSecondaryCTA, SecondaryCTA } from "../CTA/Parse";

export type LinksCard = {
  type: "LinksCard";
  cards: List<LinksCardItem>;
};

export type LinksCardItem = {
  type: "LinksCardItem";
  title: string;
  links: List<Link>;
  footerCTA: SecondaryCTA | null;
};

export const parseLinksCard = (
  element: HTMLElement | Element
): Parsed<LinksCard, RecoverableError> => {
  const [
    cards,
    errors
  ] = parseListAndAccumulateErrors([...element.children], parseCard);
  return [
    {
      type: "LinksCard",
      cards,
    },
    errors
  ];
};

const parseCard = (
  element: Element
): Parsed<LinksCardItem, RecoverableError> => {
  const titleElement = element.querySelector('h1, h2, h3') || null;
  if (!titleElement) {
    throw new IrrecoverableError("Expected links card title");
  }

  const footerCtaAnchor = element.querySelector('em > a');
  const linkElements = [...element.querySelectorAll('a')]
    .filter((anchor) => anchor !== footerCtaAnchor);
  if (linkElements.length === 0) {
    throw new IrrecoverableError("Expected at least one link");
  }
  const [links, linkErrors] = parseListAndAccumulateErrors(
    linkElements,
    parseLink
  );

  const [footerCTA, ctaErrors]
    = (() : Parsed<SecondaryCTA | null, RecoverableError> => {
      try {
        return parseSecondaryCTA(element) as Parsed<
          SecondaryCTA,
          RecoverableError
        >;
      } catch (_error) {
        return [null, []];
      }
    })();

  return [
    {
      type: "LinksCardItem",
      title: titleElement.textContent ?? "",
      links,
      footerCTA,
    },
    [...linkErrors, ...ctaErrors]
  ];
};
