import { expect } from '@esm-bundle/chai';
import { fetchProfileData, setMiloConfig } from '../../../dist/test-exports.js';

describe('ProfileData', () => {
  let originalFetch;
  let originalAdobeIMS;

  beforeEach(() => {
    originalFetch = window.fetch;
    originalAdobeIMS = window.adobeIMS;
    setMiloConfig({
      locale: { prefix: '' },
      env: { name: 'test', adobeIO: 'test.adobe.io' },
    });
  });

  afterEach(() => {
    window.fetch = originalFetch;
    window.adobeIMS = originalAdobeIMS;
  });

  it('should fetch profile data successfully', async () => {
    window.adobeIMS = {
      getAccessToken: () => ({ token: 'test-token' }),
      getProfile: () => ({ displayName: 'Test User', email: 'test@adobe.com' }),
    };

    window.fetch = async (url, options) => {
      return new Response(JSON.stringify({
        user: { avatar: 'https://example.com/avatar.png' },
        sections: {},
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    };

    const [data, errors] = await fetchProfileData();

    expect(errors.size).to.equal(0);
    expect(data).to.deep.equal({
      avatar: 'https://example.com/avatar.png',
      displayName: 'Test User',
      email: 'test@adobe.com',
      sections: {},
    });
  });

  it('should return an error if IMS is not loaded', async () => {
    window.adobeIMS = undefined;
    const [data, errors] = await fetchProfileData();
    expect(data).to.be.null;
    expect(errors.size).to.equal(1);
    const error = [...errors][0];
    expect(error.message).to.equal('ProfileData: Adobe IMS not loaded');
  });

  it('should return an error if access token is not available', async () => {
    window.adobeIMS = {
      getAccessToken: () => null,
    };
    const [data, errors] = await fetchProfileData();
    expect(data).to.be.null;
    expect(errors.size).to.equal(1);
    const error = [...errors][0];
    expect(error.message).to.equal('ProfileData: No access token available');
  });

  it('should return an error if fetch fails', async () => {
    window.adobeIMS = {
      getAccessToken: () => ({ token: 'test-token' }),
      getProfile: () => Promise.resolve({ displayName: 'Test User', email: 'test@adobe.com' }),
    };
    window.fetch = async () => new Response('Not Found', { status: 404 });
    const [data, errors] = await fetchProfileData();
    expect(data).to.be.null;
    expect(errors.size).to.equal(1);
    const error = [...errors][0];
    expect(error.message).to.equal('ProfileData: Failed to fetch profile data with status 404');
  });

  it('should return an error for invalid JSON response', async () => {
    window.adobeIMS = {
        getAccessToken: () => ({ token: 'test-token' }),
        getProfile: () => ({ displayName: 'Test User', email: 'test@adobe.com' }),
    };
    window.fetch = async () => new Response('{"user": {}}', { status: 200 }); // Missing avatar
    const [data, errors] = await fetchProfileData();
    expect(data).to.be.null;
    expect(errors.size).to.equal(1);
    const error = [...errors][0];
    expect(error.message).to.equal('ProfileData: Invalid response - missing avatar');
  });

  it('should handle exceptions during fetch', async () => {
    window.adobeIMS = {
      getAccessToken: () => ({ token: 'test-token' }),
      getProfile: () => Promise.resolve({ displayName: 'Test User', email: 'test@adobe.com' }),
    };
    window.fetch = () => Promise.reject(new Error('Network error'));
    const [data, errors] = await fetchProfileData();
    expect(data).to.be.null;
    expect(errors.size).to.equal(1);
    const error = [...errors][0];
    expect(error.message).to.equal('ProfileData: Exception fetching profile data');
  });
});
