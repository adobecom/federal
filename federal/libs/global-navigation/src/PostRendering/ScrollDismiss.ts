import { closePopovers } from "../Utils/Utils";
import { isPopupOpen } from "./PopupWiring";

export const initScrollDismiss = (mountpoint: HTMLElement): (() => void) => {
  let lastScrollX = window.scrollX;
  let lastScrollY = window.scrollY;
  const popups = mountpoint.querySelectorAll<HTMLElement>(
    '.feds-popup, #feds-menu-wrapper',
  );

  const onToggle = (event: Event): void => {
    if (!(event.currentTarget instanceof HTMLElement)
      || !isPopupOpen(event.currentTarget)) return;
    // Cancel pre-click inertia without blocking subsequent page scrolling.
    window.lenis?.scrollTo?.(window.scrollY, { immediate: true, force: true });
    lastScrollX = window.scrollX;
    lastScrollY = window.scrollY;
  };

  const onScroll = (event: Event): void => {
    // Element scrolling must not dismiss a scrollable menu or drawer.
    if (event.target !== document && event.target !== window) return;
    // A scroll event queued before opening can arrive at the same position.
    if (window.scrollX === lastScrollX
      && window.scrollY === lastScrollY) return;
    lastScrollX = window.scrollX;
    lastScrollY = window.scrollY;
    closePopovers(mountpoint);
  };

  popups.forEach(popup => popup.addEventListener('toggle', onToggle));
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => {
    popups.forEach(popup => popup.removeEventListener('toggle', onToggle));
    window.removeEventListener('scroll', onScroll);
  };
};
