import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import {
  fetchAndProcessPlainHTML,
  inlineNestedFragments,
  parseListAndAccumulateErrors
} from "../../Utils/Utils";
import { LinksCard, parseLinksCard } from "../LinksCard/Parse";
import { parseProductList, ProductList } from "../ProductList/Parse";
import { parseFeaturedCard, FeaturedCard } from "../FeaturedCard/Parse";


export type MegaMenu = {
  type: "MegaMenu";
  title: string;
  content: Promise<Parsed<MegaMenuContent, RecoverableError>>;
};

export type MegaMenuContent = ProductList
                            | GnavCards;

export type GnavCards = {
  type: "GnavCards";
  sections: List<FeaturedCard | LinksCard>;
};

export const parseMegaMenu = (
  element: Element | null
): Parsed<MegaMenu, RecoverableError> => {
  const errors = new Set<RecoverableError>();
  if (element === null)
    throw new IrrecoverableError(ERRORS.elementNull);

  const title = element.querySelector('h2')?.textContent ?? "";
  if (title === "")
    errors.add(new RecoverableError(ERRORS.noTitle))

  const content = (async (): 
                   Promise<Parsed<MegaMenuContent, RecoverableError>> => {
    try {
      const fragment: HTMLAnchorElement | null = element.querySelector('a');
      const fragmentURL = new URL(fragment?.href ?? "");
      const initialFragment =
        await fetchAndProcessPlainHTML(fragmentURL);
      if (initialFragment instanceof IrrecoverableError)
        throw new Error(initialFragment.message);
      const megaMenuFragment = await inlineNestedFragments(initialFragment);
      if (megaMenuFragment instanceof IrrecoverableError)
        throw new Error(megaMenuFragment.message);
      if (element.classList.contains('product-list'))
        return parseProductList(megaMenuFragment);
      return parseGnavCards(megaMenuFragment);
    } catch (e) {
        // @ts-expect-error errors usually have a message
        throw new IrrecoverableError(e?.message);
    }
  })();

  if (content instanceof IrrecoverableError)
    throw content;

  return [
    {
      type: "MegaMenu",
      title,
      content,
    },
    [
      ...errors
    ]
  ]
};

const ERRORS = {
  elementNull: "Element is null",
  noTitle: "Large Menu has no Title",
};

const parseGnavCards = (
  fragment: Element | HTMLElement
): Parsed<GnavCards, RecoverableError> => {
  const directCardSections = [...fragment.children]
    .filter((el) =>
      el.classList.contains('featured-card')
      || el.classList.contains('links-card')
    );
  const cardSections = directCardSections.length > 0
    ? directCardSections
    : [...fragment.querySelectorAll('.featured-card, .links-card')];
  if (cardSections.length === 0) {
    throw new IrrecoverableError(
      "Unrecognized mega menu item (did you forget to label it correctly?)"
    );
  }
  const [sections, errors]
    = parseListAndAccumulateErrors(cardSections, parseGnavCardSection);
  if (sections.length === 0) {
    throw new IrrecoverableError("Failed to parse gnav cards sections");
  }
  return [
    {
      type: "GnavCards",
      sections,
    },
    errors
  ];
};

const parseGnavCardSection = (
  section: Element
): Parsed<FeaturedCard | LinksCard, RecoverableError> => {
  if (section.classList.contains('featured-card')) {
    return parseFeaturedCard(section);
  }
  if (section.classList.contains('links-card')) {
    return parseLinksCard(section);
  }
  throw new IrrecoverableError("Unsupported gnav cards section");
};
