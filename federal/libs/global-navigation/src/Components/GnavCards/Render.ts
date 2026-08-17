import { featuredcards } from "../FeaturedCard/Render";
import { linkscard } from "../LinksCard/Render";
import { promoCard } from "../PromoCard/Standard/Render";
import { promoCardSmall } from "../PromoCard/Small/Render";
import { GnavCards, GnavColumn } from "../MegaMenu/Parse";

const renderCard = (card: GnavColumn["cards"][number], megaMenuTitle: string): HTML => {
  switch (card.type) {
    case "FeaturedCard":
      return featuredcards(card, megaMenuTitle);
    case "LinksCard":
      return linkscard(card);
    case "PromoCard":
      return promoCard(card);
    case "PromoCardSmall":
      return promoCardSmall(card);
    default: card satisfies never;
  }
  return "";
};

export const gnavCards = ({
  sections,
  megaMenuTitle,
}: GnavCards): HTML => {
  // Every card across all columns is laid out together in a single grid group.
  const cards = sections.flatMap((column) => column.cards);
  // Up to five cards sit in a single row; beyond that they split across two
  // balanced rows (columns = half the cards, rounded up).
  const columns = cards.length > 5
    ? Math.ceil(cards.length / 2)
    : cards.length;
  const renderedCards = cards
    .map((card) => renderCard(card, megaMenuTitle))
    .join("");

  return `
  <div class="feds-gnav-cards">
    <li class="feds-gnav-column--links-grid" style="--links-grid-columns: ${columns}">${renderedCards}</li>
  </div>
`;
};
