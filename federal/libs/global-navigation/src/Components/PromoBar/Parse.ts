import { IrrecoverableError, RecoverableError } from "../../Error/Error";
import { Link, parseLink } from "../Link/Parse";

export type PromoBar = {
  type: 'PromoBar';
  eyebrowIcon: string | null;
  eyebrowText: string | null;
  headlineLeft: string;
  headlineRight: string | null;
  bodyCopy: string | null;
  cta: Link | null;
  theme: 'light' | 'dark';
};

const ERRORS = {
  elementNull: "Error when parsing PromoBar. Element is null",
  noHeadline: "Error when parsing PromoBar. No headline found",
};

export const parsePromoBar = (
  element: Element | null,
): Parsed<PromoBar, RecoverableError> => {
  if (element === null)
    throw new IrrecoverableError(ERRORS.elementNull);

  const errors: RecoverableError[] = [];

  // Theme: if the block has a 'dark' class variant
  const theme: 'light' | 'dark' = element.classList.contains('dark') ? 'dark' : 'light';

  // The block is authored as rows of <div>s inside the block container.
  // Row 0 (optional): eyebrow — icon src | eyebrow text
  // Row 1: left headline | right sub-headline
  // Row 2 (optional): body copy
  // Row 3 (optional): CTA link
  const rows = [...element.querySelectorAll(':scope > div')];

  let eyebrowIcon: string | null = null;
  let eyebrowText: string | null = null;
  let headlineLeft = '';
  let headlineRight: string | null = null;
  let bodyCopy: string | null = null;
  let cta: Link | null = null;

  // Determine row mapping by inspecting content
  let rowIndex = 0;

  // Check for eyebrow row: contains an image or icon src
  const firstRowCells = rows[rowIndex]
    ? [...rows[rowIndex].querySelectorAll(':scope > div')]
    : [];

  const hasIcon = firstRowCells.some(
    cell => cell.querySelector('img') !== null || cell.textContent?.trim().startsWith('http')
  );

  if (hasIcon && rows.length > 1) {
    const iconCell = firstRowCells[0];
    const textCell = firstRowCells[1];
    const img = iconCell?.querySelector('img');
    eyebrowIcon = img?.getAttribute('src') ?? iconCell?.textContent?.trim() ?? null;
    eyebrowText = textCell?.textContent?.trim() ?? null;
    rowIndex++;
  }

  // Headline row
  if (rows[rowIndex]) {
    const headlineCells = [...rows[rowIndex].querySelectorAll(':scope > div')];
    headlineLeft = headlineCells[0]?.innerHTML?.trim() ?? '';
    headlineRight = headlineCells[1]?.innerHTML?.trim() ?? null;
    rowIndex++;
  }

  if (!headlineLeft) {
    errors.push(new RecoverableError(ERRORS.noHeadline));
  }

  // Body copy row (optional — single cell with no anchor)
  if (rows[rowIndex]) {
    const cells = [...rows[rowIndex].querySelectorAll(':scope > div')];
    const hasAnchor = cells.some(c => c.querySelector('a') !== null);
    if (!hasAnchor) {
      bodyCopy = cells[0]?.innerHTML?.trim() ?? null;
      rowIndex++;
    }
  }

  // CTA row
  if (rows[rowIndex]) {
    const cells = [...rows[rowIndex].querySelectorAll(':scope > div')];
    const anchor = cells[0]?.querySelector('a') ?? null;
    if (anchor !== null) {
      const [parsedLink, linkErrors] = parseLink(anchor);
      cta = parsedLink;
      errors.push(...linkErrors);
    }
  }

  return [
    {
      type: 'PromoBar',
      eyebrowIcon,
      eyebrowText,
      headlineLeft,
      headlineRight,
      bodyCopy,
      cta,
      theme,
    },
    errors,
  ];
};
