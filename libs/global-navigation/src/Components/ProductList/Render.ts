import { linkGroup } from "../LinkGroup/Render";
import { link } from "../Link/Render";
import { getAnalyticsAttrs } from "../../Utils/Utils";
import { ProductCategory, ProductList } from "./Parse";

import './productlist.css';

export const productlist = ({ categories, links }: ProductList): HTML => {
  const tabs = `
    <ul class="tabs" role="tablist">
      ${categories.map(renderTab).join('')}
       ${links.map((item) => `<li class="product-links">${link(item)}</li>`).join('')}
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
  }: ProductCategory,
  i: number
): string => `
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(i === 0).toString()}"
          aria-controls="${i}"
          ${getAnalyticsAttrs(daaLh, '')}
          >
            ${name}
          </button>
      </li>
  `.trim();

