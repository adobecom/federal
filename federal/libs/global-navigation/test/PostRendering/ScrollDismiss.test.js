import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { initScrollDismiss } from '../../src/PostRendering/ScrollDismiss.ts';
import { wirePopups, isPopupOpen } from '../../src/PostRendering/PopupWiring.ts';

describe('navigation scroll dismissal', () => {
  let mountpoint;
  let cleanup;
  let drawer;
  let popup;
  let drawerTrigger;
  let popupTrigger;
  let stylesheet;
  let scrollX;
  let scrollY;
  let originalLenis;

  before(async () => {
    stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('../../src/styles/styles.css', import.meta.url).href;
    await new Promise((resolve, reject) => {
      stylesheet.onload = resolve;
      stylesheet.onerror = reject;
      document.head.append(stylesheet);
    });
  });

  after(() => stylesheet.remove());

  beforeEach(() => {
    scrollX = 0;
    scrollY = 350;
    sinon.stub(window, 'scrollX').get(() => scrollX);
    sinon.stub(window, 'scrollY').get(() => scrollY);
    originalLenis = window.lenis;
    window.lenis = undefined;
    mountpoint = document.createElement('header');
    mountpoint.className = 'global-navigation is-compact';
    mountpoint.innerHTML = `
      <nav>
        <button class="feds-nav-toggle" aria-controls="feds-menu-wrapper"></button>
        <div id="feds-menu-wrapper" class="feds-menu-wrapper">
          <button aria-controls="test-popup"></button>
          <div id="test-popup" class="feds-popup"><div class="content"></div></div>
        </div>
      </nav>`;
    document.body.append(mountpoint);
    wirePopups(mountpoint);
    cleanup = initScrollDismiss(mountpoint);
    drawer = mountpoint.querySelector('#feds-menu-wrapper');
    popup = mountpoint.querySelector('#test-popup');
    drawerTrigger = mountpoint.querySelector('[aria-controls="feds-menu-wrapper"]');
    popupTrigger = mountpoint.querySelector('[aria-controls="test-popup"]');
  });

  afterEach(() => {
    cleanup();
    mountpoint.remove();
    sinon.restore();
    window.lenis = originalLenis;
  });

  it('closes a desktop popup and reflects its collapsed state', () => {
    popupTrigger.click();
    expect(isPopupOpen(popup)).to.equal(true);
    scrollY += 10;
    window.dispatchEvent(new Event('scroll'));
    expect(isPopupOpen(popup)).to.equal(false);
    expect(popupTrigger.getAttribute('aria-expanded')).to.equal('false');
    expect(popupTrigger.getAttribute('daa-ll')).to.equal('header|Open');
  });

  it('closes the drawer and its nested popup on document scroll', () => {
    drawerTrigger.click();
    popupTrigger.click();
    scrollY += 10;
    document.dispatchEvent(new Event('scroll', { bubbles: true }));
    expect(isPopupOpen(drawer)).to.equal(false);
    expect(isPopupOpen(popup)).to.equal(false);
    expect(drawerTrigger.getAttribute('aria-expanded')).to.equal('false');
    expect(popupTrigger.getAttribute('aria-expanded')).to.equal('false');
  });

  it('dismisses reopened menus on subsequent scrolls without a threshold', () => {
    for (let i = 0; i < 2; i += 1) {
      drawerTrigger.click();
      expect(isPopupOpen(drawer)).to.equal(true);
      scrollY += 10;
      window.dispatchEvent(new Event('scroll'));
      expect(isPopupOpen(drawer)).to.equal(false);
    }
  });

  it('ignores queued page scroll events at the position where the popup opened', () => {
    scrollY = 300;
    popupTrigger.click();
    [window, document].forEach(target => {
      target.dispatchEvent(new Event('scroll', { bubbles: true }));
      expect(isPopupOpen(popup)).to.equal(true);
      expect(popupTrigger.getAttribute('aria-expanded')).to.equal('true');
    });

    scrollY -= 1;
    document.dispatchEvent(new Event('scroll', { bubbles: true }));
    expect(isPopupOpen(popup)).to.equal(false);
  });

  it('cancels existing smooth-scroll momentum when a popup or drawer opens', () => {
    const scrollTo = sinon.spy();
    window.lenis = { start: sinon.spy(), stop: sinon.spy(), scrollTo };
    [drawerTrigger, popupTrigger].forEach(trigger => {
      trigger.click();
      expect(scrollTo.lastCall.args).to.deep.equal([
        scrollY, { immediate: true, force: true },
      ]);
      window.dispatchEvent(new Event('scroll'));
    });
    expect(scrollTo.callCount).to.equal(2);
    expect(isPopupOpen(drawer)).to.equal(true);
    expect(isPopupOpen(popup)).to.equal(true);
    expect(window.lenis.stop.called).to.equal(false);

    scrollY += 10;
    window.dispatchEvent(new Event('scroll'));
    expect(isPopupOpen(drawer)).to.equal(false);
    expect(isPopupOpen(popup)).to.equal(false);
    expect(scrollTo.callCount).to.equal(2);
  });

  it('dismisses menus on horizontal page scrolling', () => {
    popupTrigger.click();
    scrollX += 1;
    window.dispatchEvent(new Event('scroll'));
    expect(isPopupOpen(popup)).to.equal(false);
  });

  it('does not dismiss menus when their contents scroll', () => {
    drawerTrigger.click();
    popupTrigger.click();
    [drawer, popup, popup.querySelector('.content')].forEach(element => {
      element.dispatchEvent(new Event('scroll', { bubbles: true }));
      expect(isPopupOpen(drawer)).to.equal(true);
      expect(isPopupOpen(popup)).to.equal(true);
    });
  });

  it('does not emit redundant toggle events when already closed', () => {
    let toggles = 0;
    popup.addEventListener('toggle', () => { toggles += 1; });
    scrollY += 10;
    window.dispatchEvent(new Event('scroll'));
    expect(toggles).to.equal(0);
  });

  it('can remove the scroll listener', () => {
    popupTrigger.click();
    cleanup();
    scrollY += 10;
    window.dispatchEvent(new Event('scroll'));
    expect(isPopupOpen(popup)).to.equal(true);
  });

  it('removes the momentum-cancellation listeners on cleanup', () => {
    const scrollTo = sinon.spy();
    window.lenis = { start: sinon.spy(), stop: sinon.spy(), scrollTo };
    cleanup();
    drawerTrigger.click();
    popupTrigger.click();
    expect(scrollTo.called).to.equal(false);
  });

  it('lets the page scroll with the localnav bar expanded and closes it fully', () => {
    mountpoint.querySelector('nav').classList.add('localnav');
    drawerTrigger.className = 'feds-localnav-bar';
    drawerTrigger.click();
    expect(isPopupOpen(drawer)).to.equal(true);
    expect(getComputedStyle(document.body).overflowY).not.to.equal('hidden');

    scrollY += 10;
    document.dispatchEvent(new Event('scroll', { bubbles: true }));
    expect(isPopupOpen(drawer)).to.equal(false);
    expect(drawer.classList.contains('feds-menu-active')).to.equal(false);
    expect(drawerTrigger.getAttribute('aria-expanded')).to.equal('false');
    expect(drawerTrigger.getAttribute('daa-ll')).to.equal('localnav-bar|Open');
  });

  it('keeps the page locked while a localnav submenu is open', () => {
    mountpoint.querySelector('nav').classList.add('localnav');
    drawerTrigger.className = 'feds-localnav-bar';
    drawerTrigger.click();
    popupTrigger.click();
    expect(getComputedStyle(document.body).overflowY).to.equal('hidden');
    popup.dispatchEvent(new Event('scroll', { bubbles: true }));
    expect(isPopupOpen(drawer)).to.equal(true);
    expect(isPopupOpen(popup)).to.equal(true);
  });

  it('keeps the page locked for a regular compact navigation drawer', () => {
    drawerTrigger.click();
    expect(getComputedStyle(document.body).overflowY).to.equal('hidden');
  });
});
