/**
 * Bombadil specification for the federal global navigation.
 *
 * This file expresses how the gnav should behave, in ALL possible
 * states, as a set of temporal-logic properties (`always`, `eventually`,
 * `next`, `implies`) over cells extracted from the live DOM. Bombadil
 * explores the gnav by issuing random clicks/keypresses/scrolls/resizes
 * and checks each property after every captured state.
 *
 * The spec deliberately reads like a behavioural manual: each property
 * has a short name that maps to a sentence about the gnav. If a property
 * is violated, Bombadil prints the property's name and the action that
 * produced the violation.
 *
 * File layout:
 *   - `./extractors.ts` — DOM cells (state observations)
 *   - `./actions.ts`    — custom keyboard / click action generators
 *   - `./spec.ts`       — this file: the properties + re-exports
 *
 * Bombadil only inspects the exports of THIS file, so every action
 * generator we want exercised is re-exported below.
 */

import { always, eventually, next, now } from "@antithesishq/bombadil";

import {
  ariaControlsTargets,
  hamburgerExists,
  hasHostHeader,
  headerScrolledClass,
  isDesktopViewport,
  isLocalnavMode,
  lastActionIsEscape,
  localnavTabIndices,
  menuWrapperOpen,
  navExists,
  openInGnavCount,
  openMegaMenuPopupCount,
  popupSnap,
  scrollY,
  skipLinkExists,
  tabsState,
  trapFocusLinkExists,
} from "./extractors.ts";

// ── Default properties ────────────────────────────────────────────
// `noUnhandledPromiseRejections` is deliberately omitted. The Milo
// runtime that ships with the gnav lazy-loads third-party scripts
// (Adobe martech, marketingtech, unav) that can fail to fetch in CI,
// surfacing as promise rejections that have nothing to do with the
// gnav. Bombadil does not expose the underlying rejection list on the
// typed `State`, so we cannot easily allowlist-filter the default
// property; instead we rely on `noUncaughtExceptions` (sync exceptions)
// plus our own gnav-shaped properties for everything we care about.
export {
  noUncaughtExceptions,
  noConsoleErrors,
} from "@antithesishq/bombadil/defaults/properties";

// ── Action generators (re-exported so Bombadil picks them up) ─────
// Only `gnavActionMix` is exposed: it's a `weighted(...)` combination of
// every keyboard / click generator we want in the action pool. Exposing
// the individual generators (or the default whole-page `clicks`)
// alongside the mix would cause Bombadil to pick between N generators
// uniformly at random, which dilutes the weighting and lets the
// whole-page `clicks` (random `<a>` / `<button>` hits anywhere on the
// document) consume our action budget — leaving the hamburger /
// localnav-bar / popup-back-button paths uncovered.
export { gnavActionMix } from "./actions.ts";

// ───────────────────────────────────────────────────────────────────
// PROPERTIES
// ───────────────────────────────────────────────────────────────────
// Each property reads as a sentence: <name> should <hold over time>.

/* ── 1. Structural invariants ─────────────────────────────────── */
//
// The gnav mounts asynchronously (it fetches its source HTML), so the
// FIRST captured states will not have a `<nav>` element. We express
// each invariant as: "once the gnav has mounted, the property must
// hold for the remainder of the run". `navExists` is the gating
// signal: every structural property is `!navExists.current || P` so
// they hold vacuously before the mount.

/** The gnav `<nav>` must mount within 15s and never disappear after. */
export const gnavAlwaysMounted =
  eventually(() => navExists.current).within(15, "seconds");

/** A skip-to-main-content link is an accessibility baseline; it must
 *  exist for every captured state once the gnav is up. */
export const skipLinkAlwaysPresent =
  always(() => !navExists.current || skipLinkExists.current);

/** The focus-trap sentinel anchor (`.trap-focus-gnav`) keeps Tab from
 *  leaving the mobile menu. It must exist whenever the gnav is mounted. */
export const trapFocusLinkAlwaysPresent =
  always(() => !navExists.current || trapFocusLinkExists.current);

/** The hamburger button is the only way to open the mobile menu; it
 *  must always be in the DOM once mounted (CSS handles its visibility
 *  per breakpoint). */
export const hamburgerAlwaysPresent =
  always(() => !navExists.current || hamburgerExists.current);

/** Every `aria-controls` attribute on the gnav must reference an
 *  existing element — otherwise the popup wiring (PopupWiring.ts) will
 *  silently fail to find triggers, and assistive tech will be misled. */
export const ariaControlsTargetsExist = always(() =>
  ariaControlsTargets.current.every((t) => t.exists),
);

/* ── 2. Mutual exclusion of mega-menu popups ─────────────────── */

/** PopupWiring.ts: clicking a mega-menu trigger closes every OTHER
 *  open `.feds-popup` (the hamburger is exempt). Therefore at most one
 *  `.feds-popup.is-open` element should ever exist simultaneously. */
export const atMostOneMegaMenuOpen = always(() =>
  openMegaMenuPopupCount.current <= 1
);

/* ── 3. ARIA correctness ─────────────────────────────────────── */

/** `aria-expanded` on every trigger must reflect the popup's `is-open`
 *  state. This is the contract assistive technology relies on, and a
 *  desync = silent a11y bug. */
export const ariaExpandedMatchesOpenState = always(() =>
  popupSnap.current.every((p) =>
    p.triggers.every((t) => t.ariaExpanded === String(p.isOpen))
  )
);

/** `daa-ll` (analytics label) must match the open/close state of the
 *  popup with the right verb. Three trigger shapes, three label sets:
 *    - hamburger:    hamburgermenu|open  / hamburgermenu|close
 *    - localnav-bar: localnav-bar|Open   / localnav-bar|Close
 *    - everything else: header|Open      / header|Close
 *  Wrong analytics labels = wrong analytics dashboards, so we lift
 *  this to a hard invariant. */
export const daaLlMatchesOpenState = always(() =>
  popupSnap.current.every((popup) =>
    popup.triggers.every((trigger) => {
      const isHamburger = trigger.classes.includes("feds-nav-toggle");
      const isLocalnavBar = trigger.classes.includes("feds-localnav-bar");
      const expected = (() => {
        if (isHamburger)
          return popup.isOpen ? "hamburgermenu|close" : "hamburgermenu|open";
        if (isLocalnavBar)
          return popup.isOpen ? "localnav-bar|Close" : "localnav-bar|Open";
        return popup.isOpen ? "header|Close" : "header|Open";
      })();
      return trigger.daaLl === expected;
    })
  )
);

/** Inside every OPEN popup that has tabs, exactly one tab is
 *  `aria-selected="true"`, and its matching panel is NOT hidden. */
export const exactlyOneTabSelectedPerOpenPopup = always(() =>
  tabsState.current.every((t) =>
    t.tabCount === 0 || (t.selectedCount === 1 && t.selectedPanelHidden === false)
  )
);

/* ── 4. Header scroll-state coordination ────────────────────── */
//
// The header's `feds-header-scrolled` class is toggled by
// `initHeaderScrollState` in Main.ts. Its semantics:
//   add    iff  scrolledPast > 20px  AND  menu-wrapper is NOT open
//   remove iff  menu-wrapper IS open OR  scrolledPast <= 20px
//
// Important: the code only inspects `#feds-menu-wrapper`, NOT arbitrary
// `.feds-popup`s. We mirror that here. (A stronger property would also
// require mega-menu popups to suppress the class — that's an open
// design question; the current spec follows the code as-written.)

/** Whenever `feds-header-scrolled` is on, the menu-wrapper must be closed. */
export const scrolledImpliesMenuWrapperClosed = always(
  now(() => headerScrolledClass.current).implies(
    now(() => !menuWrapperOpen.current),
  ),
);

/** When we are scrolled past the threshold and the menu-wrapper is
 *  closed, the header should EVENTUALLY (within 1s) carry
 *  `feds-header-scrolled`. The eventual-bound accounts for the rAF
 *  debounce in `onScroll`. Guarded on the gnav having mounted and on
 *  a `<header class="global-navigation">` actually existing (otherwise
 *  the property is vacuously true — there is nothing to update). */
export const scrollPastThresholdEventuallyScrolls = always(
  now(() => navExists.current && hasHostHeader.current)
    .and(now(() => scrollY.current > 20))
    .and(now(() => !menuWrapperOpen.current))
    .implies(eventually(() => headerScrolledClass.current).within(1, "seconds")),
);

/* ── 5. Tab-index / focus management ────────────────────────── */

/** When the localnav bar is CLOSED (and we're in localnav mode in a
 *  mobile viewport), every focusable item inside the bar must carry
 *  `tabindex="-1"`. Otherwise Tab would walk into invisible items.
 *
 *  See `Keyboard/index.ts:65` (`applyBarTabIndex`). */
export const localnavClosed_itemsAreNotTabStops = always(() => {
  if (isDesktopViewport.current) return true; // desktop: items always live
  if (!isLocalnavMode.current) return true;   // non-localnav: no special rule
  if (menuWrapperOpen.current) return true;   // open bar: items live (next prop)
  const s = localnavTabIndices.current;
  return s === null || s.withMinusOne === s.total;
});

/** When the localnav bar is OPEN in a mobile viewport, items must be
 *  Tab-stops again — no item may have `tabindex="-1"`. */
export const localnavOpen_itemsAreTabStops = always(() => {
  if (isDesktopViewport.current) return true;
  if (!isLocalnavMode.current) return true;
  if (!menuWrapperOpen.current) return true;
  const s = localnavTabIndices.current;
  return s === null || s.withMinusOne === 0;
});

/* ── 6. Compact-overflow stability ──────────────────────────── */
//
// The `.is-compact` class on the header is the OUTPUT of a
// `ResizeObserver` whose threshold is computed from the rendered
// widths of `.feds-brand-wrapper`, `.feds-gnav-items`, `.feds-utilities`
// and `.feds-product-entry-cta`. We considered a property of the form
// "header is compact iff content > clientWidth", but the production
// formula has timing- and content-dependent nuances (placeholders,
// late-arriving merch links, scrollbar accounting) that make any
// symbolic re-statement at the spec level flaky. We leave this concern
// to visual regression tests instead.

/* ── 7. Recovery on Escape ──────────────────────────────────── */
//
// Escape closes the currently-open popup OR the mobile menu-wrapper —
// but only when focus is INSIDE the gnav (the keydown listener in
// `Keyboard/index.ts` is bound to the gnav element). Furthermore the
// `handleEscape` implementation only pops the TOPMOST open thing —
// if BOTH a mega-menu popup AND the menu-wrapper are open, one
// Escape only closes the popup, leaving the wrapper open.
//
// We deliberately express this as a SHARP step-wise invariant rather
// than `always(now(P).implies(eventually(Q).within(N)))`. The
// "eventually within N" formulation causes Bombadil to accumulate
// violation evidence across every consecutive failing state, producing
// runaway "...and as of 00:00.000... and as of 00:00.000..." reports
// when the user-action stream is dense (which it always is on the
// gnav, because random Tab/Click/Escape sequences quickly re-open
// menus). The step-wise form below has stable, single-state reports.

/** SHARP INVARIANT: pressing Escape may not strictly INCREASE the
 *  number of open elements. Anything else (decrease, stay-the-same)
 *  is allowed. Uses the now/next pattern from the Bombadil manual's
 *  counter state-machine example. */
export const escapeNeverIncreasesOpenCount = always(now(() => {
  const before = openInGnavCount.current;
  return next(() =>
    !lastActionIsEscape.current || openInGnavCount.current <= before
  );
}));
