/**
 * Action generators for the gnav Bombadil spec.
 *
 * Only `gnavActionMix` is re-exported from `./spec.ts`. Bombadil's pool is
 * therefore exactly this one weighted mix, which gives us precise control
 * over the action distribution. The defaults (`clicks`, `scroll`, `waitOnce`)
 * are NOT re-exported because the default whole-page `clicks` generator
 * adds noise (random `<a>` / `<button>` clicks anywhere on the page) that
 * drowned out our gnav-targeted clicks — the gnav was getting roughly half
 * its click budget consumed by hits on the page body, leaving little
 * coverage for the hamburger / localnav-bar / popup-back-button gateway
 * paths.
 *
 * Action distribution at a glance (see `gnavActionMix` below):
 *   gnavClicks ~ 50%   — biased toward gateway elements (hamburger /
 *                         localnav-bar / popup-back-button) so we land
 *                         on the menu-opening paths even when the gnav
 *                         is in compact/mobile mode where those are
 *                         briefly-visible.
 *   escapeKey  ~ 18%   — high so we recover from stuck "popup open"
 *                         states and re-expose gateway elements.
 *   tabKey     ~ 15%   — exercises focus traps and tab cycles.
 *   arrowKeys  ~ 10%   — exercises Keyboard/index.ts arrow handlers.
 *   spaceKey   ~  5%   — Space-to-activate on focused buttons / links.
 *   waitOnce   ~  2%   — lets async transitions settle.
 *
 * Reload / Back / Forward are deliberately omitted: they navigate away
 * from the test URL and lose the local random-walk context.
 */

import {
  actions,
  extract,
  from,
  weighted,
  type Action,
} from "@antithesishq/bombadil";

import { type Tree } from "@antithesishq/bombadil/actions";
import { waitOnce } from "@antithesishq/bombadil/defaults/actions";

import { NAV_SEL } from "./extractors.ts";

// ── Key codes ─────────────────────────────────────────────────────
// Bombadil's `PressKey` uses raw key codes.
const KEY = {
  Tab: 9,
  Enter: 13,
  Shift: 16,
  Escape: 27,
  Space: 32,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
} as const;

// ── Keyboard action generators ────────────────────────────────────

/** Press a single arrow key. Drives the keyboard navigation code paths
 *  in `Keyboard/index.ts` (handleTopBar, handleTabs, handleCards, etc.). */
export const arrowKeys = actions(() => {
  const code = from([KEY.ArrowLeft, KEY.ArrowRight, KEY.ArrowUp, KEY.ArrowDown])
    .generate();
  return [{ PressKey: { code } }];
});

/** Press Escape. This should close the open popup OR collapse the
 *  mobile subscreen. The escape-recovery property in `spec.ts` will
 *  catch any state where Escape stops working. */
export const escapeKey = actions(() => [{ PressKey: { code: KEY.Escape } }]);

/** Press Tab. Exercises the localnav bar trap, the popup focus trap,
 *  and the panel/tab navigation. */
export const tabKey = actions(() => [{ PressKey: { code: KEY.Tab } }]);

/** Press Space on a focused element. Buttons and `.feds-link`s in the
 *  gnav use Space-to-activate (`handleCtaSpace` in Keyboard/index.ts). */
export const spaceKey = actions(() => [{ PressKey: { code: KEY.Space } }]);

// ── Gnav-targeted click generator ─────────────────────────────────
//
// `gnavClickTargets` snapshots every clickable gnav element along with
// a category that drives weighting. The categories matter because:
//
//   - "gateway" elements (hamburger / localnav-bar) are the ONLY way
//     into the mobile/compact subtree. They're typically a small
//     fraction of the total candidate count (1-2 of ~15-20), but
//     without clicking them the entire menu-wrapper code path goes
//     unexplored.
//   - "back" elements (popup-back-button) are the recovery path inside
//     an open popup on mobile/compact. Same problem: 1-2 of many.
//   - "trigger" elements are anchors with `aria-controls` (mega-menu /
//     small-menu). Their click handlers in `ClickListeners.ts` call
//     `e.preventDefault()`, so clicking them toggles the popup
//     without navigating away.
//   - "tab" elements are `[role='tab']` triggers inside open popups.
//
// LEAF LINKS (regular `.feds-link` / `.feds-primary-cta` /
// `.feds-secondary-cta` without `aria-controls`) are deliberately
// EXCLUDED. They're real `<a>` elements whose `href` points to other
// product pages — clicking them navigates the browser away from the
// test origin. On the upp preview deploy used as our target, those
// destinations 404 and Bombadil terminates with "no actions
// available". For testing the gnav's own behaviour we don't need to
// exercise leaf-link navigation; we just need to exercise the
// gnav-controlled state transitions.
//
// `gnavClickTargets` is internal to actions because it serves only as
// input to `gnavClicks`; it's not part of the gnav's observable state.

type ClickCategory = "gateway" | "back" | "trigger" | "tab";
type ClickTarget = {
  name: string;
  category: ClickCategory;
  weight: number;
  x: number;
  y: number;
};

const WEIGHT_BY_CATEGORY: Record<ClickCategory, number> = {
  gateway: 8,  // hamburger, localnav-bar — the menu entry points
  back: 6,     // popup-back-button — recovery inside popups
  trigger: 3,  // mega-menu / small-menu anchors w/ aria-controls
  tab: 2,      // tab triggers inside open popups
};

/** Decide whether to include the element as a click target and which
 *  category to weight it under. Returns null to skip. */
const categorize = (el: HTMLElement): ClickCategory | null => {
  if (
    el.classList.contains("feds-nav-toggle") ||
    el.classList.contains("feds-localnav-bar")
  ) return "gateway";
  if (el.classList.contains("feds-popup-back-button")) return "back";
  // Anchors with aria-controls are popup triggers — their click handler
  // calls preventDefault, so clicking them is navigation-safe. Anchors
  // WITHOUT aria-controls are leaf links and would navigate away.
  if (
    (el.classList.contains("mega-menu") ||
      el.classList.contains("small-menu")) &&
    el.hasAttribute("aria-controls")
  ) return "trigger";
  if (el.getAttribute("role") === "tab") return "tab";
  return null;
};

const gnavClickTargets = extract((state): ClickTarget[] => {
  const nav = state.document.querySelector(NAV_SEL);
  if (nav === null) return [];
  const candidates = [
    ...nav.querySelectorAll<HTMLElement>(
      ".feds-nav-toggle, .feds-localnav-bar, .feds-popup-back-button, " +
      ".mega-menu, .small-menu, [role='tab']",
    ),
  ];
  const innerHeight = state.window.innerHeight ?? 768;
  return candidates
    .flatMap((el): ClickTarget[] => {
      const category = categorize(el);
      if (category === null) return [];
      const r = el.getBoundingClientRect();
      // Visible and in-viewport — clicks are at absolute (x, y) so we
      // can't click items below the fold.
      if (r.width <= 0 || r.height <= 0) return [];
      if (r.top < 0 || r.top >= innerHeight) return [];
      // Prefer class-based names for gateway / back / trigger so they're
      // identifiable in trace dumps; fall back to text for tabs.
      const className = [...el.classList].find((c) => c.startsWith("feds-")) ??
        [...el.classList][0] ?? el.tagName.toLowerCase();
      const text = el.textContent?.trim().slice(0, 30) ?? "";
      const name = category === "tab" ? (text || className) : className;
      return [{
        name,
        category,
        weight: WEIGHT_BY_CATEGORY[category],
        x: r.left + r.width / 2,
        y: r.top + r.height / 2,
      }];
    });
});

/**
 * Click a visible gnav element. Returns a weighted `Tree<Action>` rather
 * than picking a random candidate via `Math.random()`, so Bombadil's
 * own RNG drives the choice — which means runs are reproducible from
 * the trace file AND the weights above actually translate into a
 * non-uniform branch distribution that Bombadil's shrinking respects.
 */
export const gnavClicks = actions((): Tree<Action> | Action[] => {
  const ts = gnavClickTargets.current;
  if (ts.length === 0) return [];
  const branches: [number, Tree<Action>][] = ts.map((t) => [
    t.weight,
    {
      value: {
        Click: { name: `${t.category}:${t.name}`, point: { x: t.x, y: t.y } },
      },
    },
  ]);
  return { branches };
});

// ── Weighted mix (the only export Bombadil sees) ──────────────────

/** The single action pool. Tuned so that the gnav's menu-opening paths
 *  (gateway clicks + Escape recovery) get the bulk of the budget. */
export const gnavActionMix = weighted([
  [10, gnavClicks],
  [4, escapeKey],
  [3, tabKey],
  [2, arrowKeys],
  [1, spaceKey],
  [1, waitOnce],
]);
