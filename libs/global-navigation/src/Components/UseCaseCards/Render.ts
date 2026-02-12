import { link } from "../Link/Render";
import { linkGroup } from "../LinkGroup/Render";
import { Card, UseCaseCards } from "./Parse";
import { secondaryCTA } from "../CTA/Render";

import './use-case-cards.css';

export const usecasecards = ({
  cards
}: UseCaseCards): HTML => `
  <ul class="use-case-cards">
    ${cards.map(c => `<li>${card(c)}</li>`).join('')}
  </ul>
`;


const card = ({
  title,
  subtitle,
  links,
  footerCTA
}: Card): HTML => `
  <article class="card">
    <h4>${title}</h4>
    <h6>${link(subtitle)}</h6>
    <div class="link-container">
      <ul class="links">
        ${links.map(link => `<li>${linkGroup(link)}</li>`).join('')}
      </ul>
      ${secondaryCTA(footerCTA)}
    </div>
  </article>
`.trim();
