import { getMetadata, getMiloConfig } from '../../Utils/Utils';

type CDTRange = {
  start: number;
  end: number;
};

// Canonical date-time format: "YYYY-MM-DDTHH:MM:SS" (optional ".sss" millis).
// No timezone offset — interpreted as the visitor's local time. This is the
// only accepted format; it parses identically across all modern browsers,
// unlike named zones (e.g. "PST") which are non-standard and browser-specific.
const LOCAL_DATETIME_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?$/;

// Maximum supported countdown window. The visual display uses a 2-digit day
// field ("DD:HH:MM:SS"), so windows longer than 99 days are rejected to keep
// the layout aligned.
const MAX_WINDOW_DAYS = 99;
const MAX_WINDOW_MS = MAX_WINDOW_DAYS * 24 * 60 * 60 * 1_000;

/**
 * Parses a "YYYY-MM-DDTHH:MM:SS" local-time string.
 * Returns null when the string is empty or does not match the canonical format.
 */
function parseLocalDateTime(value: string): number | null {
  const trimmed = value.trim();
  if (!LOCAL_DATETIME_RE.test(trimmed)) return null;
  const ms = Date.parse(trimmed);
  return Number.isNaN(ms) ? null : ms;
}

/**
 * Parses the `gnav-promo-countdown` meta tag.
 * Expected format: "YYYY-MM-DDTHH:MM:SS,YYYY-MM-DDTHH:MM:SS" (start,end),
 * local time. Returns null when the metadata is absent, malformed, reversed,
 * or the window exceeds the 99-day maximum.
 */
function getCDTRange(): CDTRange | null {
  const meta = getMetadata('gnav-promo-countdown');
  if (meta === null) return null;

  const parts = meta.split(',');
  if (parts.length !== 2) return null;

  const start = parseLocalDateTime(parts[0]);
  const end = parseLocalDateTime(parts[1]);

  if (start === null || end === null || start > end) return null;
  if (end - start > MAX_WINDOW_MS) return null;
  return { start, end };
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** Returns remaining time as "DD:HH:MM:SS" for the visual display. */
function formatTime(diffMs: number): string {
  const totalSeconds = Math.floor(diffMs / 1000);
  const days    = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours   = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Returns a human-readable label for screen readers, e.g.
 * "3 days, 5 hours, 22 minutes, 15 seconds remaining".
 * Only read when the user navigates to the element — role="timer"
 * carries implicit aria-live="off" so it never auto-announces.
 * Note: strings are English — swap with your i18n solution if needed.
 */
function formatAccessibleLabel(diffMs: number): string {
  const totalSeconds = Math.floor(diffMs / 1000);
  const d = Math.floor(totalSeconds / (60 * 60 * 24));
  const h = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const m = Math.floor((totalSeconds % (60 * 60)) / 60);
  const s = totalSeconds % 60;
  const parts: string[] = [];
  if (d > 0) parts.push(`${d} ${d === 1 ? 'day' : 'days'}`);
  if (h > 0) parts.push(`${h} ${h === 1 ? 'hour' : 'hours'}`);
  if (m > 0) parts.push(`${m} ${m === 1 ? 'minute' : 'minutes'}`);
  parts.push(`${s} ${s === 1 ? 'second' : 'seconds'}`);
  return `${parts.join(', ')} remaining`;
}

/**
 * Resolves the effective "now" timestamp.
 *
 * Supports ?instant="YYYY-MM-DDTHH:MM:SS" (local time) for QA/demo purposes in
 * non-prod environments. If MiloConfig is not initialised, fails safe by
 * treating the environment as prod so ?instant cannot be used to spoof the
 * window. A malformed ?instant value is ignored (falls back to real time).
 */
function resolveNow(): number {
  let isProd: boolean;
  try {
    isProd = getMiloConfig().env.name === 'prod';
  } catch {
    // Config not initialised — fail safe: treat as prod (ignore ?instant).
    isProd = true;
  }
  if (isProd) return Date.now();

  const instantStr = new URL(window.location.href).searchParams.get('instant');
  if (instantStr === null) return Date.now();
  const instant = parseLocalDateTime(instantStr);
  return instant !== null ? instant : Date.now();
}

/**
 * Starts a per-second countdown inside `container`.
 * Calls `onEnd` once when the end time is reached, and self-stops if
 * `container` is detached early (e.g. gnav re-render) to avoid leaking an
 * interval that ticks against an orphaned node.
 *
 * The displayed value is derived from wall-clock time, so it stays accurate
 * across tab-throttling; `baseNow` seeds the effective "now" and may be a
 * ?instant override in non-prod.
 *
 * @param container - The `.feds-cdt` element whose text/label is updated
 * @param endTime   - The end timestamp (ms)
 * @param baseNow   - The effective "now" (wall-clock or ?instant value)
 * @param onEnd     - Called once when the end time is reached, to tear down
 *                    the countdown UI
 * @returns a function that stops the timer.
 */
function startTimer(
  container: HTMLElement,
  endTime: number,
  baseNow: number,
  onEnd: () => void,
): () => void {
  const ONE_SECOND_MS = 1_000;
  const wallStart = Date.now();
  const handle: { id?: ReturnType<typeof setInterval> } = {};

  const stop = (): void => clearInterval(handle.id);
  const getCurrentTime = (): number => baseNow + (Date.now() - wallStart);

  function tick(): void {
    // Bar removed by other code — stop ticking against a detached node.
    if (!container.isConnected) {
      stop();
      return;
    }
    const diff = endTime - getCurrentTime();
    if (diff <= 0) {
      stop();
      onEnd();
      return;
    }
    container.textContent = formatTime(diff);
    container.setAttribute('aria-label', formatAccessibleLabel(diff));
  }

  tick();
  handle.id = setInterval(tick, ONE_SECOND_MS);
  return stop;
}

/**
 * Initialises the promo countdown timer inside a `.feds-promo-bar-inner` slot.
 *
 * Reads `gnav-promo-countdown` metadata (format: "start,end").
 * If the current time falls within the range, wraps the existing icon and a
 * new `.feds-cdt` countdown in a `.feds-promo-bar-icon-cdt` container and
 * inserts it immediately before `insertBeforeEl`.
 *
 * When the end time is reached the countdown is torn down and the original
 * promo-bar structure is restored: the icon is moved back to its position
 * (directly before the text) and the countdown wrapper is removed, leaving
 * the standard icon / text / CTA layout without the timer.
 *
 * @param inner          - A `.feds-promo-bar-inner` element
 * @param insertBeforeEl - The element before which the wrapper is injected
 *                         (the `.feds-promo-bar-text` paragraph)
 * @param isDark         - Whether the parent promo bar uses the dark theme
 */
export function initPromoCountdown(
  inner: HTMLElement,
  insertBeforeEl: HTMLElement,
  isDark: boolean,
): void {
  const range = getCDTRange();
  if (range === null) return;

  // Idempotency guard — never inject a second timer into the same slot.
  if (inner.querySelector('.feds-cdt') !== null) return;

  const now = resolveNow();
  if (now < range.start || now > range.end) return;

  const cdtEl = document.createElement('div');
  cdtEl.className = 'feds-cdt heading-6';
  cdtEl.setAttribute('role', 'timer');
  if (isDark) cdtEl.classList.add('feds-cdt--dark');

  const wrapper = document.createElement('div');
  wrapper.className = 'feds-promo-bar-icon-cdt';

  const iconEl = inner.querySelector<HTMLElement>('.feds-promo-bar-icon');
  if (iconEl !== null) wrapper.append(iconEl);
  wrapper.append(cdtEl);

  inner.insertBefore(wrapper, insertBeforeEl);

  // On end: restore the original icon / text / CTA structure without the
  // countdown — move the icon back before the text, then drop the wrapper.
  startTimer(cdtEl, range.end, now, () => {
    if (iconEl !== null) inner.insertBefore(iconEl, wrapper);
    wrapper.remove();
  });
}
