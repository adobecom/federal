import { isDesktop } from "../Utils/Utils";

type CleanupFunction = () => void

export const initClickListeners = (
  gnav: HTMLElement
): CleanupFunction => {
  const tabButtons = [...gnav.querySelectorAll('.tabs button[role="tab"]')];
  const tabPanels = [...gnav.querySelectorAll('.tab-content ul')];
  const tabButtonClickCallbacks = tabButtons.map((button, i) => (): void => {

      const popover = tabPanels[i].closest(':popover-open');
      const oldHeight = popover?.clientHeight ?? 0;

      tabButtons.forEach(tabButton => {
        tabButton.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(tabPanel => {
        tabPanel.setAttribute('hidden', 'true');
      });
      tabPanels[i]?.removeAttribute('hidden');
      button.setAttribute('aria-selected', 'true');
      
      if (!isDesktop.matches) return;
      const newHeight = popover?.clientHeight ?? 0;

      popover?.animate([
        { height: `${oldHeight}px` },
        { height: `${newHeight}px` }
      ],
      {
        duration: 350,
        iterations: 1,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      });

    }
  );
  tabButtons.forEach((button, i) => {
    button.addEventListener('click', tabButtonClickCallbacks[i]);
  });
  return () => {
    tabButtons.forEach((button, i) => {
      button.removeEventListener('click', tabButtonClickCallbacks[i]);
    });
  };
};
