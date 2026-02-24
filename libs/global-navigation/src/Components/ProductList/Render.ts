import { linkGroup } from "../LinkGroup/Render";
import { getAnalyticsAttrs } from "../../Utils/Utils";
import { ProductCategory, ProductList } from "./Parse";

import './productlist.css';

export const productlist = ({ categories }: ProductList): HTML => {
  const tabs = `
    <ul class="tabs" role="tablist">
      ${categories.map(renderTab).join('')}
    </ul>
  `.trim();
  const tabcontent = `
    <ul class="tab-content">
      ${categories.map(({ links }: ProductCategory, i: number) => `
      <li>
        <ul
          id="${i}"
          role="tabpanel"
          ${i === 0 ? '' : 'hidden'}
        >
          ${links.map(link => `<li>${linkGroup(link)}</li>`).join('')}
        </ul>
      </li>
      `.trim()).join('')}
    </ul>
  `.trim();
  return `
    <div class="product-list">
      ${tabs}
      ${tabcontent}
    </div>
  `.trim();
};

const renderTab = (
  {
    name,
    daaLh,
    daaLl,
  }: ProductCategory,
  i: number
): string => `
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(i === 0).toString()}"
          aria-controls="${i}"
          ${getAnalyticsAttrs(daaLh, daaLl)}
          >
            ${name}
          </button>
      </li>
  `.trim();

