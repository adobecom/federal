import { expect } from '@esm-bundle/chai';
import { wirePopups, initLightDismiss } from '../../src/PostRendering/PopupWiring';
import { IS_OPEN_CLASS, isPopupOpen } from '../../src/Utils/Utils';

// Builds the minimal DOM that `renderGnav` produces post-content-fill, with
// .feds-popup elements reparented to be direct children of <nav>.
const buildGnav = () => {
  const host = document.createElement('div');
  host.innerHTML = `
    <nav data-lenis-prevent>
      <div class="feds-backdrop" aria-hidden="true"></div>
      <ul role="presentation">
        <li class="feds-brand-wrapper">
          <a class="feds-brand" href="#"></a>
          <button
            class="feds-nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="feds-menu-wrapper"
          ></button>
        </li>
        <li id="feds-menu-wrapper" class="feds-menu-wrapper">
          <ul class="feds-gnav-items">
            <li>
              <button
                class="feds-link"
                type="button"
                aria-expanded="false"
                aria-controls="feds-popup-a"
              >A</button>
            </li>
            <li>
              <button
                class="feds-link"
                type="button"
                aria-expanded="false"
                aria-controls="feds-popup-b"
              >B</button>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Popups reparented to <nav> (mirrors renderGnav). -->
      <div id="feds-popup-a" class="feds-popup"></div>
      <div id="feds-popup-b" class="feds-popup"></div>
    </nav>
  `;
  document.body.appendChild(host);
  return host;
};

describe('wirePopups', () => {
  let host;
  let triggerA;
  let triggerB;
  let popupA;
  let popupB;
  let menuWrapper;
  let navToggle;

  beforeEach(() => {
    host = buildGnav();
    wirePopups(host);
    triggerA = host.querySelector('[aria-controls="feds-popup-a"]');
    triggerB = host.querySelector('[aria-controls="feds-popup-b"]');
    popupA = host.querySelector('#feds-popup-a');
    popupB = host.querySelector('#feds-popup-b');
    menuWrapper = host.querySelector('#feds-menu-wrapper');
    navToggle = host.querySelector('.feds-nav-toggle');
  });
  afterEach(() => host.remove());

  it('clicking a trigger toggles its popup open and closed', () => {
    triggerA.click();
    expect(isPopupOpen(popupA)).to.equal(true);
    triggerA.click();
    expect(isPopupOpen(popupA)).to.equal(false);
  });

  it('reflects open state via aria-expanded on the trigger', () => {
    triggerA.click();
    expect(triggerA.getAttribute('aria-expanded')).to.equal('true');
    triggerA.click();
    expect(triggerA.getAttribute('aria-expanded')).to.equal('false');
  });

  it('updates daa-ll analytics on mega-menu toggle', () => {
    triggerA.click();
    expect(triggerA.getAttribute('daa-ll')).to.equal('header|Close');
    triggerA.click();
    expect(triggerA.getAttribute('daa-ll')).to.equal('header|Open');
  });

  it('updates daa-ll analytics on hamburger toggle', () => {
    navToggle.click();
    expect(navToggle.getAttribute('daa-ll')).to.equal('hamburgermenu|close');
    navToggle.click();
    expect(navToggle.getAttribute('daa-ll')).to.equal('hamburgermenu|open');
  });

  it('opening a mega-menu closes any other open mega-menu (mutual exclusion)', () => {
    triggerA.click();
    expect(isPopupOpen(popupA)).to.equal(true);
    triggerB.click();
    expect(isPopupOpen(popupA)).to.equal(false);
    expect(isPopupOpen(popupB)).to.equal(true);
  });

  it('opening the menu-wrapper does NOT close open mega-menu popups', () => {
    triggerA.click();
    navToggle.click();
    expect(isPopupOpen(popupA)).to.equal(true);
    expect(isPopupOpen(menuWrapper)).to.equal(true);
  });

  it('marks menu-wrapper feds-menu-active on open', () => {
    navToggle.click();
    expect(menuWrapper.classList.contains('feds-menu-active')).to.equal(true);
  });

  it('clears feds-menu-active when a transitionend fires after close', () => {
    navToggle.click(); // open
    navToggle.click(); // close
    expect(isPopupOpen(menuWrapper)).to.equal(false);
    menuWrapper.dispatchEvent(new Event('transitionend', { bubbles: true }));
    expect(menuWrapper.classList.contains('feds-menu-active')).to.equal(false);
  });

  it('ignores transitionend bubbling from descendants', () => {
    navToggle.click();
    const link = host.querySelector('.feds-link');
    link.dispatchEvent(new Event('transitionend', { bubbles: true }));
    expect(menuWrapper.classList.contains('feds-menu-active')).to.equal(true);
  });
});

describe('initLightDismiss', () => {
  let host;
  let triggerA;
  let popupA;
  let menuWrapper;

  beforeEach(() => {
    host = buildGnav();
    wirePopups(host);
    initLightDismiss(host);
    triggerA = host.querySelector('[aria-controls="feds-popup-a"]');
    popupA = host.querySelector('#feds-popup-a');
    menuWrapper = host.querySelector('#feds-menu-wrapper');
    popupA.appendChild(Object.assign(document.createElement('button'), {
      className: 'feds-popup-back-button',
      textContent: 'Back',
    }));
    popupA.appendChild(Object.assign(document.createElement('a'), {
      href: '#',
      textContent: 'Inner link',
    }));
  });
  afterEach(() => host.remove());

  const clickAt = (el) => {
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  };

  it('closes open popups on a click outside', () => {
    triggerA.click();
    expect(isPopupOpen(popupA)).to.equal(true);
    clickAt(document.body);
    expect(isPopupOpen(popupA)).to.equal(false);
  });

  it('does NOT close when clicking inside the open popup', () => {
    triggerA.click();
    const innerLink = popupA.querySelector('a');
    clickAt(innerLink);
    expect(isPopupOpen(popupA)).to.equal(true);
  });

  it('back-button click in a reparented popup does not dismiss the menu-wrapper', () => {
    // Popups are reparented out of the menu-wrapper; light-dismiss must treat
    // popup-internal clicks as "inside" the wrapper too.
    const navToggle = host.querySelector('.feds-nav-toggle');
    navToggle.click();
    triggerA.click();
    clickAt(popupA.querySelector('.feds-popup-back-button'));
    expect(isPopupOpen(menuWrapper)).to.equal(true);
  });

  it('clicking the trigger of an open popup closes it cleanly', () => {
    triggerA.click();
    triggerA.click();
    expect(isPopupOpen(popupA)).to.equal(false);
    expect(popupA.classList.contains(IS_OPEN_CLASS)).to.equal(false);
  });
});
