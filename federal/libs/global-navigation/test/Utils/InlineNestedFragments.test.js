import { expect } from '@esm-bundle/chai';
import {
  inlineNestedFragments,
  setLingoLocaleConfig,
  setLocalizeLink,
  setPersonalizationConfig,
} from '../../src/Utils/Utils';
import { setPlaceholders } from '../../src/Utils/Placeholders';

/**
 * inlineNestedFragments — mep-lingo content-swap tests.
 *
 * When an inline fragment link is flagged `#_mep-lingo` and a lingo region is
 * active, the region-prefixed variant is fetched first and the base fragment is
 * used as a fallback when the regional variant is absent. Fragments without the
 * flag, or when no region is active, take the base path unchanged (no regression).
 *
 * SINGLETON NOTE: setPersonalizationConfig and setPlaceholders are one-time
 * initializers; run this file in isolation for deterministic results.
 */
describe('inlineNestedFragments — mep-lingo content-swap', () => {
  let originalFetch;
  let fetchedUrls;

  const REGIONAL_HTML = '<div class="regional">regional</div>';
  const BASE_HTML = '<div class="base">base</div>';
  const FRAG = 'https://main--federal--adobecom.aem.page/federal/x/featured';

  const mount = (href) => {
    const el = document.createElement('div');
    el.innerHTML = `<a href="${href}">frag</a>`;
    return el;
  };

  before(() => {
    setPlaceholders(Promise.resolve(new Map()));
    setLocalizeLink((link) => link);
    setPersonalizationConfig({ commands: [], handleCommands: async () => {} });
  });

  beforeEach(() => {
    fetchedUrls = [];
    originalFetch = window.fetch;
  });

  afterEach(() => {
    window.fetch = originalFetch;
    setLingoLocaleConfig(undefined);
  });

  it('fetches the region-prefixed variant first when mep-lingo + region are set', async () => {
    setLingoLocaleConfig({ ietf: 'en-NZ', prefix: '/nz' });
    window.fetch = async (url) => {
      fetchedUrls.push(url);
      return { ok: true, text: async () => (url.includes('/nz/') ? REGIONAL_HTML : BASE_HTML) };
    };

    const el = mount(`${FRAG}#_inline#_mep-lingo`);
    await inlineNestedFragments(el);

    expect(fetchedUrls[0]).to.contain('/nz/');
    expect(el.querySelector('.regional')).to.exist;
  });

  it('falls back to the base fragment when the regional variant is missing', async () => {
    setLingoLocaleConfig({ ietf: 'en-NZ', prefix: '/nz' });
    window.fetch = async (url) => {
      fetchedUrls.push(url);
      if (url.includes('/nz/')) return { ok: false };
      return { ok: true, text: async () => BASE_HTML };
    };

    const el = mount(`${FRAG}#_inline#_mep-lingo`);
    await inlineNestedFragments(el);

    expect(fetchedUrls.some((u) => u.includes('/nz/'))).to.be.true;
    expect(fetchedUrls.some((u) => !u.includes('/nz/'))).to.be.true;
    expect(el.querySelector('.base')).to.exist;
  });

  it('uses the base path when mep-lingo is flagged but no region is active', async () => {
    setLingoLocaleConfig(undefined);
    window.fetch = async (url) => {
      fetchedUrls.push(url);
      return { ok: true, text: async () => BASE_HTML };
    };

    const el = mount(`${FRAG}#_inline#_mep-lingo`);
    await inlineNestedFragments(el);

    expect(fetchedUrls.every((u) => !u.includes('/nz/'))).to.be.true;
    expect(el.querySelector('.base')).to.exist;
  });

  it('uses the base path for a plain inline fragment (no mep-lingo) — regression guard', async () => {
    setLingoLocaleConfig({ ietf: 'en-NZ', prefix: '/nz' });
    window.fetch = async (url) => {
      fetchedUrls.push(url);
      return { ok: true, text: async () => BASE_HTML };
    };

    const el = mount(`${FRAG}#_inline`);
    await inlineNestedFragments(el);

    expect(fetchedUrls.every((u) => !u.includes('/nz/'))).to.be.true;
    expect(el.querySelector('.base')).to.exist;
  });
});
