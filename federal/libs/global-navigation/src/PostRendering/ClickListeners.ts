import { isDesktop } from "../Utils/Utils";
import { IS_OPEN_CLASS, closePopup } from "./PopupWiring";

type CleanupFunction = () => void

/** Height in px added to the popover background pseudo-element
 *  to cover the nav bar */
const POPOVER_BG_HEIGHT_OFFSET_PX = 72;

/**
 * Drive the height of `nav::after` (the rounded backdrop frame) by
 * setting the `--feds-popup-bg-height` custom property on the host
 * <header>. The CSS rule at `styles/styles.css` consumes the variable
 * via `height: var(--feds-popup-bg-height)`. This sidesteps the
 * CSSOM-walk approach that used to inspect `document.adoptedStyleSheets`
 * and break the moment the CSS selector text was refactored.
 *
 * Falls back to writing on the gnav element itself when the gnav is
 * not wrapped in a <header> (e.g. test harnesses), since custom
 * properties inherit through the DOM tree.
 */
const setPopoverBgHeight = (gnav: HTMLElement, value: string): void => {
  const header = gnav.closest('header');
  (header ?? gnav).style.setProperty('--feds-popup-bg-height', value);
};

export const initClickListeners = (
  gnav: HTMLElement
): CleanupFunction => {
  const skipLink = gnav.querySelector<HTMLAnchorElement>('.feds-skip-link');
  const onSkipLinkClick = (e: MouseEvent): void => {
    const mainContent = document.querySelector('#main-content');
    if (mainContent instanceof HTMLElement) {
      e.preventDefault();
      if (!mainContent.hasAttribute('tabindex')) {
        mainContent.setAttribute('tabindex', '-1');
      }
      setTimeout(() => {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };
  skipLink?.addEventListener('click', onSkipLinkClick);

  const tabButtons = [...gnav.querySelectorAll<HTMLButtonElement>('.tabs button[role="tab"]')];
  const tabPanels = [...gnav.querySelectorAll('.tab-content ul')];
  const tabButtonClickCallbacks = tabButtons.map((button, i) => (): void => {

      const popup = tabPanels[i].closest(`.feds-popup.${IS_OPEN_CLASS}`);

      tabButtons.forEach(tabButton => {
        tabButton.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(tabPanel => {
        tabPanel.setAttribute('hidden', 'true');
      });
      tabPanels[i]?.removeAttribute('hidden');
      button.setAttribute('aria-selected', 'true');

      if (!popup) return;
      if (!isDesktop.matches) return;

      const newHeight = popup?.clientHeight ?? 0;
      setPopoverBgHeight(gnav, `${newHeight + POPOVER_BG_HEIGHT_OFFSET_PX}px`);

    }
  );

  const tabButtonFocusCallbacks = tabButtons.map((button) => (): void => {
    if (isDesktop.matches) return;
    if (!button.matches(':focus-visible')) return;
    const firstTabOffsetLeft = tabButtons[0]?.offsetLeft ?? 0;
    requestAnimationFrame(() => {
      const container = button.closest<HTMLElement>('.tabs');
      if (container) {
        container.scrollLeft = button.offsetLeft - firstTabOffsetLeft;
      }
    });
  });

  tabButtons.forEach((button, i) => {
    button.addEventListener('click', tabButtonClickCallbacks[i]);
    button.addEventListener('focus', tabButtonFocusCallbacks[i]);
  });

  const tabList = gnav.querySelector<HTMLElement>('.tabs[role="tablist"]');
  const updateTablistOrientation = (): void => {
    if (!tabList) return;
    if (isDesktop.matches) {
      tabList.setAttribute('aria-orientation', 'vertical');
    } else {
      tabList.removeAttribute('aria-orientation');
    }
  };
  updateTablistOrientation();
  isDesktop.addEventListener('change', updateTablistOrientation);

  animations(gnav);

  return () => {
    skipLink?.removeEventListener('click', onSkipLinkClick);
    tabButtons.forEach((button, i) => {
      button.removeEventListener('click', tabButtonClickCallbacks[i]);
      button.removeEventListener('focus', tabButtonFocusCallbacks[i]);
    });
    isDesktop.removeEventListener('change', updateTablistOrientation);
  };
};

const animations = (gnav: HTMLElement): void => {
  const mainMenuButtons = [...gnav.querySelectorAll<HTMLElement>('.feds-gnav-items > li > button')];
  const fedsGnavItems = gnav.querySelector('.feds-gnav-items');

  const resizeObserver = new ResizeObserver(entries => {
    if (entries.length < 1) return;
    const openPopup = gnav.querySelector(`.feds-popup.${IS_OPEN_CLASS}`);
    if (!openPopup) {
      setPopoverBgHeight(gnav, '100%');
      return;
    }
    const resetPopoverHeight = openPopup.clientHeight < 1;
    const height = resetPopoverHeight
      ? '100%'
      : `${openPopup.clientHeight + POPOVER_BG_HEIGHT_OFFSET_PX}px`;
    setPopoverBgHeight(gnav, height);
  });

  mainMenuButtons.forEach(button => {
    const popup = button.nextElementSibling;
    if (!popup) return;
    resizeObserver.observe(popup);
    popup.addEventListener('toggle', (event: Event) => {
      const newState = (event as ToggleEvent).newState;
      if (newState !== 'open' && !gnav.querySelector(`.feds-popup.${IS_OPEN_CLASS}`)) {
        setPopoverBgHeight(gnav, '100%');
        if (isDesktop.matches) return;
        // Bandaid for using escape for closing the popup in mobile
        fedsGnavItems?.classList.remove('subscreen-opening');
        fedsGnavItems?.classList.add('subscreen-closing');
      } else {
        // in case the resize observer fails
        setPopoverBgHeight(gnav, `${popup.clientHeight + POPOVER_BG_HEIGHT_OFFSET_PX}px`);
        // On mobile (horizontal tabs), scroll active tab to the left edge
        if (!isDesktop.matches) {
          const tabsList = popup.querySelector<HTMLElement>('.tabs');
          const activeTab = popup.querySelector<HTMLElement>('button[role="tab"][aria-selected="true"]');
          const firstTab = tabsList?.querySelector<HTMLElement>('button[role="tab"]');
          if (tabsList && activeTab && firstTab) {
            tabsList.scrollLeft = activeTab.offsetLeft
              - tabsList.offsetLeft
              - firstTab.offsetLeft;
          }
        }
      }
    });
  });

  // Mobile subscreen animations

  mainMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (isDesktop.matches) return;
      if (!fedsGnavItems) return;
      const popup = button.nextElementSibling;
      if (!(popup instanceof HTMLElement)) return;
      fedsGnavItems.classList.remove('subscreen-closing');
      fedsGnavItems.classList.add('subscreen-opening');
      popup.querySelector('.feds-popup-back-button')?.addEventListener('click', () => {
        fedsGnavItems.classList.remove('subscreen-opening');
        fedsGnavItems.classList.add('subscreen-closing');
        setTimeout(() => closePopup(popup), 240);
      });
    });
  });
  isDesktop.addEventListener('change', () => {
    fedsGnavItems?.classList.remove('subscreen-opening');
    fedsGnavItems?.classList.remove('subscreen-closing');
  });
  gnav.querySelector('.feds-nav-toggle')?.addEventListener('click', () => {
    fedsGnavItems?.classList.remove('subscreen-opening');
    fedsGnavItems?.classList.remove('subscreen-closing');
  });
}
