import { link } from "../Link/Render";
import { Card, FeaturedCards } from "./Parse";
import { secondaryCTA } from "../CTA/Render";

import './featured-cards.css';

export const featuredcards = ({
  cards
}: FeaturedCards): HTML => `
  <ul class="featured-cards">
    ${cards.map(c => `<li>${card(c)}</li>`).join('')}
  </ul>
`;


const card = ({
  title,
  subtitle,
  eyeBrow,
  footerCTA,
  bodyLink,
}: Card): HTML => `
  <article class="card">
    <div>
      <div class="featured-eyebrow">${eyeBrow}</div>
      <h4>${title}</h4>
      <div class="featured-subtitle">${subtitle}</div>
      ${link(bodyLink)}
    </div>
    <div class="footer-container">
      ${secondaryCTA(footerCTA)}
    </div>
  </article>
`.trim();
