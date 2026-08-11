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

// A column qualifies for the links grid only when every card in it is a
// links-card. Columns that mix in a promo/featured card are left untouched.
const isLinksOnlyColumn = (column: GnavColumn): boolean =>
  column.cards.length > 0
  && column.cards.every((card) => card.type === "LinksCard");

const renderColumn = (
  column: GnavColumn,
  megaMenuTitle: string,
): HTML =>
  `<li>${column.cards.map((card) => renderCard(card, megaMenuTitle)).join("")}</li>`;

export const gnavCards = ({
  sections,
  megaMenuTitle,
}: GnavCards): HTML => {
  const items: HTML[] = [];
  let linksRun: GnavColumn[] = [];

  // Consecutive links-only columns collapse into a single grid group so their
  // cards can lay out three-per-row. A non-links column ends the current run.
  const flushLinksRun = (): void => {
    if (linksRun.length === 0) return;
    const cards = linksRun
      .flatMap((column) => column.cards)
      .map((card) => renderCard(card, megaMenuTitle))
      .join("");
    items.push(`<li class="feds-gnav-column--links-grid">${cards}</li>`);
    linksRun = [];
  };

  sections.forEach((column) => {
    if (isLinksOnlyColumn(column)) {
      linksRun.push(column);
      return;
    }
    flushLinksRun();
    items.push(renderColumn(column, megaMenuTitle));
  });
  flushLinksRun();

  return `
  <div class="feds-gnav-cards">
    ${items.join("")}
  </div>
`;
};
