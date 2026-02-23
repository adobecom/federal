import { sanitize, icons } from "../../Utils/Utils";
import { linkscard } from "../LinksCard/Render";
import { productlist } from "../ProductList/Render";
import { featuredcards } from "../FeaturedCard/Render";
import "./gnav-cards.css";
import { GnavCards, MegaMenu, MegaMenuContent } from "./Parse";

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
    case "GnavCards":
      popupContent = gnavCards(data);
      break;
    default: data satisfies never;
  }
  return `${popupHeader}${popupContent}`;
}

const gnavCards = ({
  sections
}: GnavCards): HTML => `
  <ul class="feds-gnav-cards">
    ${sections.map((section) => {
      switch (section.type) {
        case "FeaturedCard":
          return `<li>${featuredcards(section)}</li>`;
        case "LinksCard":
          return `<li>${linkscard(section)}</li>`;
        default: section satisfies never;
      }
      return "";
    }).join("")}
  </ul>
`;
