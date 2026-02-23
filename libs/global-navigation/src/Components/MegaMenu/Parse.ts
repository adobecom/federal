import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import { fetchAndProcessPlainHTML, inlineNestedFragments } from "../../Utils/Utils";
import { LinksCard, parseLinksCard } from "../LinksCard/Parse";
import { Panels, parsePanels } from "../Panels/Parse";
import { parseProductList, ProductList } from "../ProductList/Parse";
import { parseFeaturedCards, FeaturedCards } from "../FeaturedCards/Parse";


export type MegaMenu = {
  type: "MegaMenu";
  title: string;
  content: Promise<Parsed<MegaMenuContent, RecoverableError>>;
};

export type MegaMenuContent = ProductList
                            | FeaturedCards
                            | LinksCard
                            | Panels;

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
      if (element.classList.contains('featured-cards'))
        return parseFeaturedCards(megaMenuFragment); 
      if (element.classList.contains('links-card'))
        return parseLinksCard(megaMenuFragment);
      if (element.classList.contains('panels'))
        return parsePanels(megaMenuFragment)

      throw new IrrecoverableError("unrecognized mega menu item (did you forget to label it correctly?");
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
