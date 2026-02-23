import { sanitize, icons } from "../../Utils/Utils";
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
  data: MegaMenuContent,
  popupId: string,
  title: string,
): HTML => {
  const popupHeader = `
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${sanitize(popupId)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${icons.arrowBack}
      </button>
      <span class="feds-popup-title">${title}</span>
    </div>
  `.trim();

  let popupContent: HTML = '';
  switch (data.type) {
    case "ProductList":
      popupContent = productlist(data);
      break;
    case "UseCaseCards":
      popupContent = usecasecards(data);
      break;
    case "Panels":
      popupContent = panels(data);
      break;
    default: data satisfies never;
  }
  return `${popupHeader}${popupContent}`;
}
