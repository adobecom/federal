import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import {
  fetchAndProcessPlainHTML,
  inlineNestedFragments,
  parseListAndAccumulateErrors,
  replaceDotMedia,
} from "../../Utils/Utils";
import { LinksCard, parseLinksCard } from "../LinksCard/Parse";
import { parseFeaturedCard, FeaturedCard } from "../FeaturedCard/Parse";
import { parsePromoCard, PromoCard } from "../PromoCard/Parse";
import { GnavCards, GnavColumn } from "../MegaMenu/Parse";

export type SmallMenu = {
  type: "SmallMenu";
  title: string;
  content: Promise<Parsed<GnavCards, RecoverableError>>;
};

export const parseSmallMenu = (
  element: Element | null
): Parsed<SmallMenu, RecoverableError> => {
  const errors = new Set<RecoverableError>();
  if (element === null)
    throw new IrrecoverableError(ERRORS.elementNull);

  const title = element.querySelector('h2')?.textContent ?? "";
  if (title === "")
    errors.add(new RecoverableError(ERRORS.noTitle));

  const content = (async ():
                   Promise<Parsed<GnavCards, RecoverableError>> => {
    try {
      const fragment: HTMLAnchorElement | null = element.querySelector('a');
      const fragmentURL = new URL(fragment?.href ?? "");
      const initialFragment = await fetchAndProcessPlainHTML(fragmentURL);
      if (initialFragment instanceof IrrecoverableError)
        throw new Error(initialFragment.message);
      const smallMenuFragment = await inlineNestedFragments(initialFragment);
      if (smallMenuFragment instanceof IrrecoverableError)
        throw new Error(smallMenuFragment.message);
      replaceDotMedia(fragmentURL.href, smallMenuFragment);
      return parseSmallMenuCards(smallMenuFragment, title);
    } catch (e) {
        // @ts-expect-error errors usually have a message
        throw new IrrecoverableError(e?.message);
    }
  })();

  return [
    {
      type: "SmallMenu",
      title,
      content,
    },
    [
      ...errors
    ]
  ];
};

const ERRORS = {
  elementNull: "Element is null",
  noTitle: "Small Menu has no Title",
};

const parseSmallMenuCards = (
  fragment: Element | HTMLElement,
  megaMenuTitle: string,
): Parsed<GnavCards, RecoverableError> => {
  const columnDivs = [...fragment.children];
  if (columnDivs.length === 0) {
    throw new IrrecoverableError(
      "No small menu items found (did you forget to add them correctly?)"
    );
  }

  const [sections, errors]
    = parseListAndAccumulateErrors(columnDivs,
      (columnDiv) => parseSmallMenuColumn(columnDiv));
  if (sections.length === 0) {
    throw new IrrecoverableError("Failed to parse small menu card sections");
  }
  return [
    {
      type: "GnavCards",
      megaMenuTitle,
      sections,
    },
    errors
  ];
};

const parseSmallMenuColumn = (
  columnDiv: Element
): Parsed<GnavColumn, RecoverableError> => {
  const cardElements = [...columnDiv.querySelectorAll('.featured-card, .links-card, .promo-card')];
  if (cardElements.length === 0) {
    throw new IrrecoverableError(
      "Column contains no cards (did you forget to label them correctly?)"
    );
  }

  const [cards, errors]
    = parseListAndAccumulateErrors(cardElements,
      (card) => parseSmallMenuCardSection(card));
  if (cards.length === 0) {
    throw new IrrecoverableError("Failed to parse cards in column");
  }

  return [
    {
      type: "GnavColumn",
      cards,
    },
    errors
  ];
};

const parseSmallMenuCardSection = (
  section: Element
): Parsed<FeaturedCard | LinksCard | PromoCard, RecoverableError> => {
  if (section.classList.contains('featured-card')) {
    return parseFeaturedCard(section);
  }
  if (section.classList.contains('links-card')) {
    return parseLinksCard(section);
  }
  if (section.classList.contains('promo-card')) {
    return parsePromoCard(section);
  }
  throw new IrrecoverableError("Unsupported small menu card section");
};
