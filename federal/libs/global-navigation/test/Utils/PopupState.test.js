import { expect } from '@esm-bundle/chai';
import {
  IS_OPEN_CLASS,
  isPopupOpen,
  openPopup,
  closePopup,
  togglePopup,
  closePopovers,
  triggerForPopupId,
  popupForTriggerId,
} from '../../src/Utils/Utils';

describe('Popup state primitives', () => {
  let host;
  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });
  afterEach(() => {
    host.remove();
  });

  describe('isPopupOpen', () => {
    it('returns false for null / undefined', () => {
      expect(isPopupOpen(null)).to.equal(false);
      expect(isPopupOpen(undefined)).to.equal(false);
    });

    it('returns false for an element without the open class', () => {
      const el = document.createElement('div');
      expect(isPopupOpen(el)).to.equal(false);
    });

    it('returns true when the open class is present', () => {
      const el = document.createElement('div');
      el.classList.add(IS_OPEN_CLASS);
      expect(isPopupOpen(el)).to.equal(true);
    });
  });

  describe('openPopup / closePopup', () => {
    it('adds and removes the open class', () => {
      const el = document.createElement('div');
      openPopup(el);
      expect(el.classList.contains(IS_OPEN_CLASS)).to.equal(true);
      closePopup(el);
      expect(el.classList.contains(IS_OPEN_CLASS)).to.equal(false);
    });

    it('is idempotent (no double-dispatch on repeat calls)', () => {
      const el = document.createElement('div');
      const events = [];
      el.addEventListener('toggle', (e) => events.push(e));
      openPopup(el);
      openPopup(el); // no-op
      openPopup(el); // no-op
      closePopup(el);
      closePopup(el); // no-op
      expect(events.length).to.equal(2);
      expect(events[0].newState).to.equal('open');
      expect(events[0].oldState).to.equal('closed');
      expect(events[1].newState).to.equal('closed');
      expect(events[1].oldState).to.equal('open');
    });

    it('safely no-ops on null / undefined', () => {
      expect(() => openPopup(null)).to.not.throw();
      expect(() => closePopup(null)).to.not.throw();
      expect(() => openPopup(undefined)).to.not.throw();
      expect(() => closePopup(undefined)).to.not.throw();
    });
  });

  describe('togglePopup', () => {
    it('alternates state with each call', () => {
      const el = document.createElement('div');
      togglePopup(el);
      expect(isPopupOpen(el)).to.equal(true);
      togglePopup(el);
      expect(isPopupOpen(el)).to.equal(false);
      togglePopup(el);
      expect(isPopupOpen(el)).to.equal(true);
    });

    it('safely no-ops on null / undefined', () => {
      expect(() => togglePopup(null)).to.not.throw();
      expect(() => togglePopup(undefined)).to.not.throw();
    });
  });

  describe('toggle event shape', () => {
    it('exposes ToggleEvent semantics (newState/oldState)', () => {
      const el = document.createElement('div');
      let captured = null;
      el.addEventListener('toggle', (e) => { captured = e; });
      openPopup(el);
      expect(captured).to.not.equal(null);
      expect(captured.type).to.equal('toggle');
      expect(captured.newState).to.equal('open');
      expect(captured.oldState).to.equal('closed');
      // Per Popover API spec, popover toggle events do not bubble.
      expect(captured.bubbles).to.equal(false);
    });

    it('fires a closing event with newState=closed', () => {
      const el = document.createElement('div');
      el.classList.add(IS_OPEN_CLASS);
      let captured = null;
      el.addEventListener('toggle', (e) => { captured = e; });
      closePopup(el);
      expect(captured.newState).to.equal('closed');
      expect(captured.oldState).to.equal('open');
    });
  });

  describe('closePopovers', () => {
    it('closes any open .feds-popup and the menu wrapper', () => {
      host.innerHTML = `
        <div id="feds-menu-wrapper" class="feds-menu-wrapper is-open feds-menu-active"></div>
        <div id="p1" class="feds-popup is-open"></div>
        <div id="p2" class="feds-popup is-open"></div>
        <div id="p3" class="feds-popup"></div>
      `;
      closePopovers(host);
      expect(host.querySelectorAll(`.${IS_OPEN_CLASS}`).length).to.equal(0);
      expect(host.querySelector('#feds-menu-wrapper').classList.contains('feds-menu-active'))
        .to.equal(false);
    });

    it('is a no-op when nothing is open', () => {
      host.innerHTML = `<div class="feds-popup"></div>`;
      expect(() => closePopovers(host)).to.not.throw();
    });
  });

  describe('triggerForPopupId / popupForTriggerId', () => {
    it('finds the trigger by aria-controls', () => {
      host.innerHTML = `
        <button id="t1" aria-controls="p1"></button>
        <div id="p1" class="feds-popup"></div>
      `;
      const trigger = triggerForPopupId(host, 'p1');
      expect(trigger).to.not.equal(null);
      expect(trigger.id).to.equal('t1');
    });

    it('finds the popup by id', () => {
      host.innerHTML = `<div id="p1" class="feds-popup"></div>`;
      const popup = popupForTriggerId(host, 'p1');
      expect(popup).to.not.equal(null);
      expect(popup.id).to.equal('p1');
    });

    it('returns null for empty id', () => {
      expect(triggerForPopupId(host, '')).to.equal(null);
      expect(popupForTriggerId(host, '')).to.equal(null);
      expect(popupForTriggerId(host, null)).to.equal(null);
    });

    it('safely handles ids that need CSS escaping', () => {
      // Real-world ids in this codebase come from sanitised titles, but the
      // helpers MUST be robust to any character that could otherwise produce
      // a malformed selector (whitespace, brackets, quotes).
      const weirdId = 'feds-popup id with spaces and "quotes"';
      const popup = document.createElement('div');
      popup.id = weirdId;
      popup.className = 'feds-popup';
      const trigger = document.createElement('button');
      trigger.setAttribute('aria-controls', weirdId);
      host.appendChild(trigger);
      host.appendChild(popup);

      expect(triggerForPopupId(host, weirdId)).to.equal(trigger);
      expect(popupForTriggerId(host, weirdId)).to.equal(popup);
    });
  });
});
