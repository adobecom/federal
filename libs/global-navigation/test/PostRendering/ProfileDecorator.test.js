import { expect } from '@esm-bundle/chai';
import { decorateProfile, setStoredProfile, setMiloConfig, setPlaceholders } from '../../../dist/test-exports.js';

describe('ProfileDecorator', () => {
  let mountpoint;
  let originalAdobeIMS;
  let originalFetch;

  beforeEach(() => {
    // Create a mock DOM environment
    mountpoint = document.createElement('div');
    const profilePlaceholder = document.createElement('div');
    profilePlaceholder.className = 'feds-profile';
    mountpoint.appendChild(profilePlaceholder);
    document.body.appendChild(mountpoint);

    // Mock dependencies
    originalAdobeIMS = window.adobeIMS;
    originalFetch = window.fetch;
    setMiloConfig({
      locale: { prefix: '' },
      env: { name: 'test', adobeIO: 'test.adobe.io' },
    });
    setPlaceholders(new Map([
        ['sign-in', 'Sign In'],
        ['profile-avatar', 'Profile avatar'],
        ['view-account', 'View Account'],
        ['sign-out', 'Sign Out'],
    ]));
    // Store some basic profile HTML that has a dropdown structure
    setStoredProfile('<div><div class="feds-profile-dropdown"></div></div>');
  });

  afterEach(() => {
    // Clean up
    document.body.removeChild(mountpoint);
    window.adobeIMS = originalAdobeIMS;
    window.fetch = originalFetch;
    setMiloConfig(null);
    setStoredProfile(null);
  });

  it('should decorate the sign-in button for a signed-out user', async () => {
    window.adobeIMS = {
      isSignedInUser: () => false,
    };

    const errors = await decorateProfile(mountpoint);
    expect(errors.size).to.equal(0);

    const signInButton = mountpoint.querySelector('button.feds-signIn');
    expect(signInButton).to.exist;
    expect(signInButton.textContent).to.contain('Sign In');
  });

  it('should decorate the profile menu for a signed-in user', async () => {
    window.adobeIMS = {
      isSignedInUser: () => true,
      getAccessToken: () => ({ token: 'test-token' }),
      getProfile: () => ({ displayName: 'Test User', email: 'test@adobe.com' }),
    };

    window.fetch = async () => new Response(JSON.stringify({
      user: { avatar: 'https://example.com/avatar.png' },
      sections: {},
    }), { status: 200 });

    const errors = await decorateProfile(mountpoint);
    expect(errors.size).to.equal(0);

    const displayName = mountpoint.querySelector('.feds-profile-name');
    expect(displayName).to.exist;
    expect(displayName.textContent).to.contain('Test User');
  });

  it('should return an error if fetching profile data fails for a signed-in user', async () => {
    window.adobeIMS = {
      isSignedInUser: () => true,
      getAccessToken: () => ({ token: 'test-token' }),
    };

    window.fetch = async () => new Response('Server Error', { status: 500 });

    const errors = await decorateProfile(mountpoint);
    expect(errors.size).to.equal(1);
    const error = [...errors][0];
    expect(error.message).to.include('Failed to fetch profile data');
  });

  it('should do nothing if the profile placeholder is not found', async () => {
    // Remove the placeholder
    mountpoint.innerHTML = '';
    
    const errors = await decorateProfile(mountpoint);
    // This will now return an empty set instead of undefined
    expect(errors).to.exist;
    expect(errors.size).to.equal(0);
  });
});
