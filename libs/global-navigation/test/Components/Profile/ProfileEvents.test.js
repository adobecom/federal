import { expect } from '@esm-bundle/chai';
import { attachProfileEvents } from '../../../dist/test-exports.js';

describe('ProfileEvents', () => {
  let container;
  let originalAdobeIMS;
  let originalDispatchEvent;

  beforeEach(() => {
    // Mock container with profile elements
    container = document.createElement('div');
    container.innerHTML = `
      <div id="feds-profile-menu">
        <img data-profile-url="https://example.com/profile" />
      </div>
      <a href="#" data-signout-trigger>Sign Out</a>
    `;
    document.body.appendChild(container);

    // Mock window objects
    originalAdobeIMS = window.adobeIMS;
    originalDispatchEvent = window.dispatchEvent;
  });

  afterEach(() => {
    // Clean up
    document.body.removeChild(container);
    window.adobeIMS = originalAdobeIMS;
    window.dispatchEvent = originalDispatchEvent;
  });

  it('should trigger IMS sign-out on click', () => {
    let signOutCalled = false;
    window.adobeIMS = {
      signOut: () => {
        signOutCalled = true;
      },
    };

    let eventDispatched = false;
    let eventName = '';
    window.dispatchEvent = (event) => {
        eventDispatched = true;
        eventName = event.type;
    };

    attachProfileEvents(container);
    container.querySelector('[data-signout-trigger]').click();
    
    expect(signOutCalled).to.be.true;
    expect(eventDispatched).to.be.true;
    expect(eventName).to.equal('feds:signOut');
  });

  it('should navigate to profile URL on avatar click', () => {
    let assignedUrl = '';
    const mockLocation = {
      assign: (url) => {
        assignedUrl = url;
      },
    };

    attachProfileEvents(container, mockLocation);
    container.querySelector('[data-profile-url]').click();

    expect(assignedUrl).to.equal('https://example.com/profile');
  });

  it('should not throw an error if elements are missing', () => {
    const emptyContainer = document.createElement('div');
    // The main assertion is that this does not throw
    expect(() => attachProfileEvents(emptyContainer)).to.not.throw();
  });

  it('should not navigate if avatar is missing data-profile-url', () => {
    let assignCalled = false;
    const mockLocation = {
        assign: () => {
            assignCalled = true;
        },
    };
    
    // Remove the attribute
    container.querySelector('[data-profile-url]').removeAttribute('data-profile-url');

    attachProfileEvents(container, mockLocation);
    container.querySelector('img').click();

    expect(assignCalled).to.be.false;
  });
});
