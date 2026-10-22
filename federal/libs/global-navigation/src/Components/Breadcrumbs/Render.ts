import { Breadcrumbs } from "./Parse";

// Breadcrumbs are read from the page DOM, whose links the host has already
// decorated (localized, DNT-handled), so hrefs are rendered as-is.
export const breadcrumbs = ({ items }: Breadcrumbs): HTML => `
<ul class="feds-breadcrumbs">
  ${items.map((item) =>
    typeof item === 'string'
      ? `<li><span>${item}</span></li>`
      : `<li><a href="${item.href}">${item.text}</a></li>`
  ).join('')}
</ul>
`.trim();
