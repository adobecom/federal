import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import { Link, parseLink } from "../Link/Parse";
import { parseListAndAccumulateErrors } from "../../Utils/Utils";
import { parseSecondaryCTA, SecondaryCTA } from "../CTA/Parse";

export type LinksCard = {
  type: "LinksCard";
  card: LinksCardItem;
};

export type LinksCardItem = {
  type: "LinksCardItem";
  title: string;
  links: Array<Link & { highlight?: boolean }>;
  footerCTA: SecondaryCTA | null;
};

export const parseLinksCard = (
  element: HTMLElement | Element
): Parsed<LinksCard, RecoverableError> => {
  const [card, errors] = parseCard(element);
  return [
    {
      type: "LinksCard",
      card,
    },
    errors
  ];
};

const parseCard = (
  element: Element
): Parsed<LinksCardItem, RecoverableError> => {
  const titleElement = element.querySelector('h2, h3, h4') || null;
  const footerCtaAnchor = element.querySelector('em > a');
  const linkElements = [...element.querySelectorAll('a')]
    .filter((anchor) => anchor !== footerCtaAnchor);
  if (linkElements.length === 0) {
    throw new IrrecoverableError("Expected at least one link");
  }
  const [links, linkErrors] = parseListAndAccumulateErrors(
    linkElements,
    (anchor) => {
      const [parsedLink, errors] = parseLink(anchor);
      const link: Link & { highlight?: boolean } = parsedLink;
      link.highlight = anchor.parentElement?.tagName === 'STRONG'
        && anchor.parentElement?.parentElement?.tagName === 'H6';
      return [link, errors];
    }
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
  if (footerCTA) {
    footerCTA.daaLl = `${titleElement?.textContent ?? ''} - ${footerCTA?.daaLl}`;
  }
  return [
    {
      type: "LinksCardItem",
      title: titleElement?.textContent ?? "",
      links,
      footerCTA,
    },
    [...linkErrors, ...ctaErrors]
  ];
};

