import { featuredcards } from "../FeaturedCard/Render";
import { linkscard } from "../LinksCard/Render";
import { GnavCards } from "../MegaMenu/Parse";

import "./gnav-cards.css";

export const gnavCards = ({
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
