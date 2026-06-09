/**
 * State extractors (cells) for the gnav Bombadil spec.
 *
 * Every value here is a `Cell<T>` produced by `extract(...)`. Bombadil
 * re-runs each extractor on every captured browser state, so they must
 * be pure, fast, and return JSON-serialisable data.
 *
 * Properties live in `./spec.ts` and read from these cells via
 * `<cell>.current`. Action generators live in `./actions.ts` and may
 * also import from here when they need to look at the DOM.
 */

import { extract, type State } from "@antithesishq/bombadil";

// ── Shared selectors ──────────────────────────────────────────────
// Exported so action generators in `./actions.ts` use the same shape.
export const NAV_SEL =
  "header.global-navigation nav, header nav.localnav, header nav";
export const MENU_WRAPPER_SEL = "#feds-menu-wrapper";
export const POPUP_SEL = ".feds-popup";
export const IS_OPEN = "is-open";

// ── Navigation guard ──────────────────────────────────────────────
//
// Bombadil delivers clicks as synthetic events at absolute (x, y)
// coordinates that were recorded at extract-time, NOT at click-time.
// In a dynamic gnav (where popups expand / collapse between actions)
// the actual element under those coordinates at click-time can be
// different from the element we categorised. If the click lands on a
// real leaf-link anchor (`<a href="/products/...">`) the browser
// navigates the page to a non-existent path under the test origin,
// Chrome shows an error page, and Bombadil terminates with
// "no actions available".
//
// To prevent that, the FIRST time an extractor is invoked we install
// a capture-phase document-level click listener that:
//
//   * lets popup triggers (anchors with `aria-controls`) through —
//     they have their own `event.preventDefault()` handler in
//     `PopupWiring.ts`;
//   * blocks every other anchor's default action.
//
// The guard is idempotent (gated on a window-level flag) and is
// reinstalled automatically after a page reload because the flag
// lives on the new window.

const installNavigationGuard = (state: State): void => {
  const w = state.window as unknown as { __gnavBombadilGuard?: boolean };
  if (w.__gnavBombadilGuard === true) return;
  w.__gnavBombadilGuard = true;
  state.document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (target === null) return;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (anchor === null) return;
      // Popup triggers handle their own preventDefault — leave them be.
      if (anchor.hasAttribute("aria-controls")) return;
      // Anchors with no href don't navigate anyway.
      if (!anchor.hasAttribute("href")) return;
      event.preventDefault();
    },
    { capture: true },
  );
};

// ── Existence / structure ─────────────────────────────────────────

/** Does a gnav `<nav>` element exist in the page?
 *  Side effect: also installs the navigation guard (see above). This
 *  extractor is read by every structural property, so the guard is
 *  installed before the first action is delivered. */
export const navExists = extract((state) => {
  installNavigationGuard(state);
  return state.document.querySelector(NAV_SEL) !== null;
});

/** Does the skip-to-main-content link exist? */
export const skipLinkExists = extract((state) =>
  state.document.querySelector(`${NAV_SEL} .feds-skip-link`) !== null
);

/** Does the focus-trap sentinel at the end of the gnav exist? */
export const trapFocusLinkExists = extract((state) =>
  state.document.querySelector(`${NAV_SEL} a.trap-focus-gnav`) !== null
);

/** Does the hamburger / nav-toggle button exist? */
export const hamburgerExists = extract((state) =>
  state.document.querySelector(`${NAV_SEL} .feds-nav-toggle`) !== null
);

/** Host-header presence cell — used to gate scroll-state assertions
 *  that only make sense when a `<header class="global-navigation">`
 *  actually exists. */
export const hasHostHeader = extract((state) =>
  state.document.querySelector("header.global-navigation") !== null,
);

// ── Open-state ────────────────────────────────────────────────────

/** How many `.feds-popup.is-open` mega-menu popups are open right now? */
export const openMegaMenuPopupCount = extract((state) =>
  state.document.querySelectorAll(`${POPUP_SEL}.${IS_OPEN}`).length
);

/** Is the mobile menu-wrapper (`#feds-menu-wrapper.is-open`) open? */
export const menuWrapperOpen = extract((state) => {
  const el = state.document.querySelector(MENU_WRAPPER_SEL);
  return el !== null && el.classList.contains(IS_OPEN);
});

/** Is anything inside the gnav `.is-open` right now? */
export const anyOpenInGnav = extract((state) =>
  state.document.querySelector(`${NAV_SEL} .${IS_OPEN}`) !== null
);

/** Total number of open elements (popups + menu-wrapper), counted
 *  separately. Used by `escapeNeverIncreasesOpenCount`. */
export const openInGnavCount = extract((state) => {
  const nav = state.document.querySelector(NAV_SEL);
  if (nav === null) return 0;
  return nav.querySelectorAll(`.${IS_OPEN}`).length;
});

// ── Header / scroll / viewport ────────────────────────────────────

/** Does the host `<header>` carry the `feds-header-scrolled` class? */
export const headerScrolledClass = extract((state) => {
  const header = state.document.querySelector("header.global-navigation");
  return header !== null && header.classList.contains("feds-header-scrolled");
});

/** Window scroll position (Y axis). */
export const scrollY = extract((state) => state.window.scrollY ?? 0);

/** Is the viewport in "desktop" range (≥1024px)? */
export const isDesktopViewport = extract((state) =>
  (state.window.innerWidth ?? 0) >= 1024
);

/** Is the host `<header>` marked compact (`.is-compact`)? Currently
 *  unreferenced; kept for ad-hoc properties (see section 2f of spec). */
export const headerIsCompact = extract((state) => {
  const header = state.document.querySelector("header.global-navigation");
  return header !== null && header.classList.contains("is-compact");
});

// ── Popup snapshot (id + open + triggers) ─────────────────────────

export type TriggerSnap = {
  classes: string[];
  ariaExpanded: string | null;
  daaLl: string | null;
};

export type PopupSnap = {
  id: string;
  isOpen: boolean;
  triggers: TriggerSnap[];
};

/** Snapshot of every popup's `(id, isOpen)` plus its triggers'
 *  `aria-expanded` and `daa-ll`. Used by the aria-correctness
 *  properties (`ariaExpandedMatchesOpenState`, `daaLlMatchesOpenState`). */
export const popupSnap = extract((state): PopupSnap[] => {
  const nav = state.document.querySelector(NAV_SEL);
  if (nav === null) return [];
  const popups = [
    ...nav.querySelectorAll<HTMLElement>(`${POPUP_SEL}, ${MENU_WRAPPER_SEL}`),
  ];
  return popups
    .filter((p) => p.id !== "")
    .map((p) => {
      // Match PopupWiring's selector: `[aria-controls="<popup-id>"]`.
      const escId = (window as unknown as { CSS: typeof CSS }).CSS.escape(p.id);
      const triggers = [
        ...nav.querySelectorAll<HTMLElement>(`[aria-controls="${escId}"]`),
      ];
      return {
        id: p.id,
        isOpen: p.classList.contains(IS_OPEN),
        triggers: triggers.map((t) => ({
          classes: [...t.classList],
          ariaExpanded: t.getAttribute("aria-expanded"),
          daaLl: t.getAttribute("daa-ll"),
        })),
      };
    });
});

// ── ARIA / tabs / localnav focus ──────────────────────────────────

/** All `aria-controls` values currently in the gnav, with whether their
 *  target element exists. */
export const ariaControlsTargets = extract((state) => {
  const nav = state.document.querySelector(NAV_SEL);
  if (nav === null) return [];
  return [...nav.querySelectorAll<HTMLElement>("[aria-controls]")]
    .map((el) => {
      const id = el.getAttribute("aria-controls") ?? "";
      return { id, exists: id !== "" && state.document.getElementById(id) !== null };
    });
});

/** Tabs state per popup: how many `aria-selected="true"` tabs exist,
 *  and is the corresponding panel `hidden`? */
export const tabsState = extract((state) => {
  const popups = [
    ...state.document.querySelectorAll<HTMLElement>(`${POPUP_SEL}.${IS_OPEN}`),
  ];
  return popups.map((p) => {
    const tabs = [...p.querySelectorAll<HTMLElement>('.tabs [role="tab"]')];
    const selected = tabs.filter((t) => t.getAttribute("aria-selected") === "true");
    const panels = [...p.querySelectorAll<HTMLElement>(".tab-content ul")];
    // Index of the selected tab within all tabs, used to find the matching
    // panel by position (same convention as ClickListeners.ts).
    const selectedIndex = tabs.findIndex((t) =>
      t.getAttribute("aria-selected") === "true"
    );
    return {
      tabCount: tabs.length,
      selectedCount: selected.length,
      selectedIndex,
      panelCount: panels.length,
      selectedPanelHidden:
        selectedIndex >= 0 && panels[selectedIndex] !== undefined
          ? panels[selectedIndex].hasAttribute("hidden")
          : null,
    };
  });
});

/** Number of items in the localnav bar that should be Tab-stops, vs. how
 *  many actually carry `tabindex="-1"`. */
export const localnavTabIndices = extract((state) => {
  const list = state.document.querySelector<HTMLElement>(
    `#feds-menu-wrapper .feds-gnav-items`
  );
  if (list === null) return null;
  const stops = [
    ...list.querySelectorAll<HTMLElement>(
      ":scope > li > .feds-link, " +
      ":scope > li > .feds-primary-cta, " +
      ":scope > li > .feds-secondary-cta"
    ),
  ];
  return {
    total: stops.length,
    withMinusOne: stops.filter((s) => s.getAttribute("tabindex") === "-1").length,
  };
});

/** Is the gnav running in "localnav" mode? (the hamburger then targets
 *  the first mega-menu popup, not `#feds-menu-wrapper`.) */
export const isLocalnavMode = extract((state) => {
  const hamburger = state.document.querySelector<HTMLElement>(
    `${NAV_SEL} .feds-nav-toggle`
  );
  if (hamburger === null) return false;
  const ctrl = hamburger.getAttribute("aria-controls") ?? "";
  return ctrl !== "" && ctrl !== "feds-menu-wrapper";
});

// ── Last-action ──────────────────────────────────────────────────

/** Was the action that produced THIS state an Escape keypress?
 *  Bombadil exposes the action that led to the current state as
 *  `state.lastAction`. */
export const lastActionIsEscape = extract((state) => {
  const a = state.lastAction;
  return typeof a === "object" && a !== null && "PressKey" in a &&
    (a as { PressKey: { code: number } }).PressKey.code === 27;
});
