import { isDesktop, openPanel, closePanel } from "../Utils/Utils";

type CleanupFunction = () => void

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

  // Hamburger toggle for mobile menu wrapper
  const navToggle = gnav.querySelector<HTMLButtonElement>('.feds-nav-toggle');
  const menuWrapper = gnav.querySelector<HTMLElement>('#feds-menu-wrapper');
  const onNavToggleClick = (): void => {
    if (!menuWrapper) return;
    if (menuWrapper.classList.contains('is-open')) {
      closePanel(menuWrapper);
    } else {
      // Close any open mega menu first
      const openPopup = gnav.querySelector<HTMLElement>('.feds-popup.is-open');
      if (openPopup) closePanel(openPopup);
      openPanel(menuWrapper);
    }
  };
  navToggle?.addEventListener('click', onNavToggleClick);

  // Mega menu trigger buttons
  const mainMenuButtons = [
    ...gnav.querySelectorAll<HTMLButtonElement>('.feds-gnav-items > li > .mega-menu'),
  ];
  const onMegaMenuButtonClick = (button: HTMLButtonElement): void => {
    const popupId = button.getAttribute('aria-controls') ?? '';
    if (popupId === '') return;
    const popup = gnav.querySelector<HTMLElement>(`#${CSS.escape(popupId)}`);
    if (!popup) return;
    if (popup.classList.contains('is-open')) {
      closePanel(popup);
    } else {
      // Close any other open popup (replaces popover="auto" auto-dismiss)
      gnav.querySelectorAll<HTMLElement>('.feds-popup.is-open').forEach(p => {
        if (p !== popup) closePanel(p);
      });
      openPanel(popup);
    }
  };
  const megaMenuClickCallbacks = mainMenuButtons.map(
    (button) => (): void => onMegaMenuButtonClick(button)
  );
  mainMenuButtons.forEach((button, i) => {
    button.addEventListener('click', megaMenuClickCallbacks[i]);
  });

  // Outside-click dismissal (replaces popover="auto" light-dismiss)
  const onDocumentClick = (e: MouseEvent): void => {
    if (!(e.target instanceof Element)) return;
    // Dismiss open mega menus when clicking outside the nav
    if (!gnav.contains(e.target)) {
      gnav.querySelectorAll<HTMLElement>('.feds-popup.is-open').forEach(p => closePanel(p));
      return;
    }
    // Dismiss when clicking inside nav but not inside any open popup or trigger
    const clickedInsidePopup = e.target.closest('.feds-popup');
    const clickedTrigger = e.target.closest('.mega-menu[aria-controls]');
    if (!clickedInsidePopup && !clickedTrigger) {
      gnav.querySelectorAll<HTMLElement>('.feds-popup.is-open').forEach(p => closePanel(p));
    }
  };
  document.addEventListener('click', onDocumentClick, true);

  const tabButtons = [...gnav.querySelectorAll<HTMLButtonElement>('.tabs button[role="tab"]')];
  const tabPanels = [...gnav.querySelectorAll('.tab-content ul')];
  const tabButtonClickCallbacks = tabButtons.map((button, i) => (): void => {

      const popup = tabPanels[i].closest('.feds-popup.is-open');

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
      const popoverBackgroundRule = getPopoverBackgroundRule()
      if (!popoverBackgroundRule) return;

      const newHeight = popup?.clientHeight ?? 0;
      popoverBackgroundRule.style.height = `${newHeight + 72}px`;

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
    navToggle?.removeEventListener('click', onNavToggleClick);
    mainMenuButtons.forEach((button, i) => {
      button.removeEventListener('click', megaMenuClickCallbacks[i]);
    });
    document.removeEventListener('click', onDocumentClick, true);
    tabButtons.forEach((button, i) => {
      button.removeEventListener('click', tabButtonClickCallbacks[i]);
      button.removeEventListener('focus', tabButtonFocusCallbacks[i]);
    });
    isDesktop.removeEventListener('change', updateTablistOrientation);
  };
};

const getPopoverBackgroundRule = (): CSSStyleRule | undefined =>
  [...document.adoptedStyleSheets
    .flatMap(sheet => [...sheet.cssRules] as (CSSStyleRule | undefined)[])]
    .find(rule =>
          (rule)?.selectorText === 'header.global-navigation nav::after');


const animations = (gnav: HTMLElement): void => {
  const mainMenuButtons = [...gnav.querySelectorAll('.feds-gnav-items > li > button')];
  const fedsGnavItems = gnav.querySelector('.feds-gnav-items');

  // popover height animations
  const popoverBackgroundRule = getPopoverBackgroundRule();
  const resizeObserver = new ResizeObserver(entries => {
    if (!popoverBackgroundRule) return;
    if (entries.length < 1) return;
    const openPopup = gnav.querySelector('.feds-popup.is-open');
    if (!openPopup) {
      popoverBackgroundRule.style.height = '100%';
      return;
    }
    const resetPopoverHeight = openPopup.clientHeight < 1;
    const height = resetPopoverHeight
      ? '100%'
      : `${openPopup.clientHeight + 72}px`;
    popoverBackgroundRule.style.height = height;
  });

  mainMenuButtons.forEach(button => {
    if (!popoverBackgroundRule) return;
    const popup = button.nextElementSibling;
    if (!popup) return;
    resizeObserver.observe(popup);
    popup.addEventListener('gnav:toggle', () => {
      const isOpen = popup.classList.contains('is-open');
      if (!isOpen && !gnav.querySelector('.feds-popup.is-open')) {
        popoverBackgroundRule.style.height = '100%';
        if (isDesktop.matches) return;
        // Bandaid for using escape for closing the popup in mobile
        fedsGnavItems?.classList.remove('subscreen-opening');
        fedsGnavItems?.classList.add('subscreen-closing');
      } else if (isOpen) {
        // in case the resize observer fails
        popoverBackgroundRule.style.height = `${popup.clientHeight + 72}px`;
        // On mobile (horizontal tabs), scroll active tab to the left edge
        if (!isDesktop.matches) {
          const tabsList = (popup as HTMLElement).querySelector<HTMLElement>('.tabs');
          const activeTab = (popup as HTMLElement)
            .querySelector<HTMLElement>('button[role="tab"][aria-selected="true"]');
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
      if (!popup) return;
      fedsGnavItems.classList.remove('subscreen-closing');
      fedsGnavItems.classList.add('subscreen-opening');
      popup.querySelector('.feds-popup-back-button')?.addEventListener('click', () => {
        fedsGnavItems.classList.remove('subscreen-opening');
        fedsGnavItems.classList.add('subscreen-closing');
        setTimeout(() => closePanel(popup as HTMLElement), 240);
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
