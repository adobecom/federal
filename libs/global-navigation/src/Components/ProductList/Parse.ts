import { IrrecoverableError, RecoverableError } from "../../test-exports";
import { getNextSiblings, parseListAndAccumulateErrors } from "../../Utils/Utils";
import { LinkGroup, parseLinkGroup } from "../LinkGroup/Parse";

export type ProductList = {
  type: "ProductList";
  categories: List<ProductCategory>;
};

export type ProductCategory = {
  type: "ProductCategory";
  name: string;
  daaLh: string | null;
  daaLl: string | null;
  links: List<LinkGroup>;
}

export const parseProductList = (
  element: HTMLElement | Element,
): Parsed<ProductList, RecoverableError> => {
  const unparsedCategories = [...element.querySelectorAll('li > div')];
  const [
    categories,
    errors
  ] = parseListAndAccumulateErrors(unparsedCategories, parseProductCategory);
  return [
    {
      type: "ProductList",
      categories,
    },
    errors
  ]
};

const parseProductCategory = (
  element: Element
): Parsed<ProductCategory, RecoverableError> => {
  const h2 = element.firstElementChild;
  if (h2?.nodeName !== 'H2')
    throw new IrrecoverableError("Expected H2");

  const name = h2.textContent ?? '';
  const daaLh = h2.getAttribute("daa-lh");
  const daaLl = h2.getAttribute("daa-ll");
  const linkGroups = getNextSiblings(h2);
  const [
    links,
    errors
  ] = parseListAndAccumulateErrors(linkGroups, parseLinkGroup);
  return [
    {
      type: "ProductCategory",
      name,
      daaLh,
      daaLl,
      links,
    },
    errors
  ]
};
