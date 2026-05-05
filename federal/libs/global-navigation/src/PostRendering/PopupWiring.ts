import {
  closePopup,
  togglePopup,
  isPopupOpen,
  triggerForPopupId,
  FEDS_OPEN_CLASS,
} from "../Utils/Utils";

const MENU_WRAPPER_ID = 'feds-menu-wrapper';

// Single wiring pass for every popup-like element in the gnav (mega-menu
// popups + the mobile menu-wrapper). Replaces the native `popovertarget`
// (click-to-toggle) and `:popover-open` ARIA reflection that the popover
// API gave us for free.
//
// Two concerns are colocated on purpose:
//   1. Click-to-toggle on the trigger, with mutual exclusion among mega-menu
//      popups (the hamburger does NOT close mega-menus — light-dismiss handles
//      that case after the fact, matching the original popover behaviour).
//   2. ARIA / analytics reflection driven by our synthetic `toggle` event.
//
// Keeping both in one place means the trigger lookup happens exactly once per
// popup and there's a single source of truth for "what does interacting with
// this popup imply".
export const wirePopups = (mountpoint: HTMLElement): void => {
  const popups = mountpoint
    .querySelectorAll<HTMLElement>(`.feds-popup, #${MENU_WRAPPER_ID}`);

  popups.forEach(popup => {
    const trigger = triggerForPopupId(mountpoint, popup.id);
    if (trigger === null) return;
    const isMenuWrapper = popup.id === MENU_WRAPPER_ID;

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const willOpen = !isPopupOpen(popup);
      if (willOpen && !isMenuWrapper) {
        mountpoint
          .querySelectorAll<HTMLElement>(`.feds-popup.${FEDS_OPEN_CLASS}`)
          .forEach(other => {
            if (other !== popup) closePopup(other);
          });
      }
      togglePopup(popup);
    });

    popup.addEventListener('toggle', () => {
      const open = isPopupOpen(popup);
      trigger.setAttribute('aria-expanded', String(open));
      trigger.setAttribute(
        'daa-ll',
        isMenuWrapper
          ? (open ? 'hamburgermenu|close' : 'hamburgermenu|open')
          : (open ? 'header|Close' : 'header|Open'),
      );
      if (isMenuWrapper && open) popup.classList.add('feds-menu-active');
    });

    if (isMenuWrapper) {
      popup.addEventListener('transitionend', (event) => {
        // transitionend bubbles and fires once per transitioned property.
        // Filter to transitions on the menu-wrapper itself so we don't react
        // to nested transitions (e.g. on .feds-link) and so we run the
        // cleanup at most once per closing animation.
        if (event.target !== popup) return;
        if (!isPopupOpen(popup)) popup.classList.remove('feds-menu-active');
      });
    }
  });
};

// Replaces the implicit "auto" popover light-dismiss. A click anywhere outside
// an open popup AND outside its trigger closes that popup.
//
// Subtlety: popups are reparented to <nav> at render time so they escape
// transformed containing blocks (see renderGnav). After reparenting, a popup
// is NOT a DOM descendant of the menu-wrapper even though it's still
// logically part of the menu-wrapper's UI. A click inside any open popup
// must therefore also count as "inside" the menu-wrapper for the purpose
// of light-dismiss, otherwise clicking e.g. the popup's back button would
// dismiss the parent menu-wrapper.
export const initLightDismiss = (mountpoint: HTMLElement): void => {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    // Fast path: most clicks on the page are not relevant to gnav. Bail
    // before doing any DOM work when nothing is open.
    if (mountpoint.querySelector(`.${FEDS_OPEN_CLASS}`) === null) return;
    const openPopups = mountpoint.querySelectorAll<HTMLElement>(
      `.feds-popup.${FEDS_OPEN_CLASS}, .feds-menu-wrapper.${FEDS_OPEN_CLASS}`,
    );
    // If the click landed inside ANY open element of the gnav UI (a popup or
    // the menu-wrapper), no light-dismiss applies. Per-element trigger and
    // back-button handlers are responsible for any state changes.
    const insideAnyOpen = [...openPopups]
      .some(open => open.contains(target));
    if (insideAnyOpen) return;
    openPopups.forEach(popup => {
      const trigger = triggerForPopupId(mountpoint, popup.id);
      if (trigger?.contains(target) === true) return;
      closePopup(popup);
    });
  });
};
