import { sanitize } from "../../Utils/Utils";
import { panels } from "../Panels/Render";
import { productlist } from "../ProductList/Render";
import { usecasecards } from "../UseCaseCards/Render";
import { MegaMenu, MegaMenuContent } from "./Parse";

export const megaMenu = ({
  title,
}: MegaMenu): HTML => `
  <button type="button"
          aria-controls="${sanitize(title)}"
          class="mega-menu feds-link"
          popovertarget="${sanitize(title)}"
  >
    ${title}
  </button>
  <div id="${sanitize(title)}" popover class="feds-popup">
  </div>
`;

export const popup = (
  data: MegaMenuContent
): HTML => {
  switch (data.type) {
    case "ProductList": return productlist(data);
    case "UseCaseCards": return usecasecards(data);
    case "Panels": return panels(data);
    default: data satisfies never;
  }
  return '';
}
