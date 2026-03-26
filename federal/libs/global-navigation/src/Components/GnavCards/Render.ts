import { featuredcards } from "../FeaturedCard/Render";
import { linkscard } from "../LinksCard/Render";
import { promoCard } from "../PromoCard/Render";
import { GnavCards, GnavColumn } from "../MegaMenu/Parse";

const renderCard = (card: GnavColumn["cards"][number], menuTitle: string): HTML => {
  switch (card.type) {
    case "FeaturedCard":
      return featuredcards(card, menuTitle);
    case "LinksCard":
      return linkscard(card);
    case "PromoCard":
      return promoCard(card);
    default: card satisfies never;
  }
  return "";
};

export const gnavCards = ({
  sections
}: GnavCards, menuTitle: string): HTML => `
  <div class="feds-gnav-cards">
    ${sections.map((column) => 
      `<li>${column.cards.map((card) => renderCard(card, menuTitle)).join("")}</li>`
    ).join("")}
  </div>
`;
