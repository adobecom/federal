import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import { Link, parseLink } from "../Link/Parse";
import { parseSecondaryCTA, SecondaryCTA } from "../CTA/Parse";
import { isMerchLink } from "../../Utils/Utils";

export type FeaturedCard = {
  type: "FeaturedCard";
  card: Card;
};

export type Card = {
  type: "Card";
  title: string;
  subtitle: string;
  eyeBrow: string;
  bodyLink: Link;
  footerCTA: SecondaryCTA;
  priceText: string;
  priceHref: string;
  isPriceMerchLink: boolean;
};

export const parseFeaturedCard = (
  element: HTMLElement | Element
): Parsed<FeaturedCard, RecoverableError> => {
  const [card, errors] = parseCard(element);
  return [
    {
      type: "FeaturedCard",
      card,
    },
    errors
  ];
};

const parseCard = (
  element: Element
): Parsed<Card, RecoverableError> => {
  const eyeBrowElement = element.querySelector('h5') || null;
  if (!eyeBrowElement)
    throw new RecoverableError("Eye brow element not found");
  const titleElement = element.querySelector('h4') || null;
  const subtitleElement = titleElement?.nextElementSibling || null;
  if (!titleElement)
    throw new IrrecoverableError("Expected title");
  if (!subtitleElement)
    throw new IrrecoverableError("Expected subtitle");

  // Optional OST/M@S price link, authored inline within the description.
  // When present it is rendered as an `a.merch` anchor and resolved into a
  // live price by the merch post-render step (see PostRendering/MerchLinks).
  const priceAnchor = subtitleElement.querySelector('a');
  const priceHref = priceAnchor?.getAttribute('href') ?? '';
  const isPriceMerchLink = priceHref !== '' && isMerchLink(priceHref);
  const priceText = isPriceMerchLink ? (priceAnchor?.textContent?.trim() ?? '') : '';

  // Keep the descriptive copy but strip the merch anchor's flattened text so
  // it is not duplicated. Cards without a merch link keep the original text.
  let subtitle = subtitleElement.textContent ?? '';
  if (isPriceMerchLink) {
    const subtitleClone = subtitleElement.cloneNode(true) as HTMLElement;
    subtitleClone.querySelectorAll('a').forEach((anchor) => {
      if (isMerchLink(anchor.getAttribute('href') ?? '')) anchor.remove();
    });
    subtitle = subtitleClone.textContent?.trim() ?? '';
  }

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
      subtitle,
      bodyLink: cardLink,
      footerCTA,
      eyeBrow: eyeBrowElement.textContent ?? '',
      priceText,
      priceHref,
      isPriceMerchLink,
    },
    [...ctaErrors, ...linkErrors]
  ];
};

