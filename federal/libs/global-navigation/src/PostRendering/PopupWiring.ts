import {
  closePopup,
  togglePopup,
  isPopupOpen,
  triggerForPopupId,
  IS_OPEN_CLASS,
} from "../Utils/Utils";

const MENU_WRAPPER_ID = 'feds-menu-wrapper';

// Click-to-toggle + aria reflection for every popup. Mutual exclusion only
// applies between mega-menu popups; the hamburger does NOT close them
// (light-dismiss owns that, matching original popover behaviour).
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
          .querySelectorAll<HTMLElement>(`.feds-popup.${IS_OPEN_CLASS}`)
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
        // Ignore bubbled transitionend from descendants (e.g. .feds-link).
        if (event.target !== popup) return;
        if (!isPopupOpen(popup)) popup.classList.remove('feds-menu-active');
      });
    }
  });
};

// Outside-click dismiss. Popups are reparented to <nav> (see renderGnav), so a
// click inside an open popup is NOT contained by the menu-wrapper in the DOM
// sense; we treat "inside any open gnav element" as inside both, otherwise
// the popup back-button would dismiss the menu-wrapper.
export const initLightDismiss = (mountpoint: HTMLElement): void => {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (mountpoint.querySelector(`.${IS_OPEN_CLASS}`) === null) return;
    const openPopups = mountpoint.querySelectorAll<HTMLElement>(
      `.feds-popup.${IS_OPEN_CLASS}, .feds-menu-wrapper.${IS_OPEN_CLASS}`,
    );
    if ([...openPopups].some(open => open.contains(target))) return;
    openPopups.forEach(popup => {
      const trigger = triggerForPopupId(mountpoint, popup.id);
      if (trigger?.contains(target) === true) return;
      closePopup(popup);
    });
  });
};
