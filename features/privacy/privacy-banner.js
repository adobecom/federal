// privacy-banner.js

import privacyState from './privacy-state.js';
import getUserLocation from './utilities/helpers/getUserLocation.js';
import isInSensitiveGroup from './utilities/helpers/isInSensitiveGroup.js';
import isGPCEnabled from './utilities/helpers/isGPCEnabled.js';
import { setLibs, getLibs } from '../../scripts/utils.js';

setLibs('/libs'); // <-- This is critical!
const miloLibs = getLibs();

// Helper: fetch OneTrust config
async function getOneTrustConfig(otDomainId) {
  if (!otDomainId) return null;
  try {
    const resp = await fetch(`https://cdn.cookielaw.org/consent/${otDomainId}/${otDomainId}.json`, { cache: 'no-cache' });
    if (!resp.ok) return null;
    return await resp.json();
  } catch {
    return null;
  }
}

function isGdprEnforcedCountry(location, config) {
  if (!location?.country || !config?.RuleSet) return true;
  const country = location.country.toLowerCase();
  const rules = config.RuleSet.filter((rule) =>
    Array.isArray(rule.Countries) && rule.Countries.includes(country) && !rule.Global);
  return !!rules.length;
}

async function getInitialConsent({ isGdpr, userProfileTags = [] }) {
  if (isGdpr) return ['C0001'];
  if (isGPCEnabled()) return ['C0001', 'C0002', 'C0003'];
  const [isSensitive] = isInSensitiveGroup(userProfileTags);
  if (isSensitive) return ['C0001', 'C0002', 'C0003'];
  return ['C0001', 'C0002', 'C0003', 'C0004'];
}

async function fetchBannerData(config) {
  const url1 = `${config.contentRoot ?? ''}/privacy/privacy-banner.json`;
  const url2 = 'https://stage--federal--adobecom.aem.page/federal/dev/snehal/privacy/privacy-banner.json';
  try {
    let resp = await fetch(url1, { cache: 'no-cache' });
    if (!resp.ok) resp = await fetch(url2, { cache: 'no-cache' });
    if (resp.ok) {
      const json = await resp.json();
      if (json?.data?.[0]) return json.data[0];
    }
  } catch {}
  return {
    title: 'DefaultTitle',
    description: 'DefaultDescription',
  };
}

// ---- MAIN EXPORT ----
export default async function loadPrivacyModal() {
  console.log(miloLibs);
  const { getConfig, loadStyle, createTag } = await import(`${miloLibs}/utils/utils.js`);
  const config = getConfig();

  // Use local CSS, not miloLibs
  loadStyle('./privacy-banner.css');

  if (document.querySelector('.privacy-banner')) return;
  if (privacyState.hasExistingConsent()) return;

  // GEO/CONFIG/PROFILE/GPC LOGIC
  const otDomainId = config.privacyId || (config.privacy && config.privacy.otDomainId);
  const location = await getUserLocation();
  const otConfig = await getOneTrustConfig(otDomainId);
  const isGdpr = isGdprEnforcedCountry(location, otConfig);

  // Fetch user tags/profile as needed
  const userProfileTags = [];
  const initialConsent = await getInitialConsent({ isGdpr, userProfileTags });

  if (!isGdpr && !privacyState.hasExistingConsent()) {
    privacyState.setImplicitConsent();
  }
  const showBanner = isGdpr;
  if (!showBanner) {
    privacyState.setImplicitConsent();
    return;
  }

  if (!privacyState.hasExistingConsent()) {
    privacyState.setConsent(['C0001']);
  }

  const bannerData = await fetchBannerData(config);

  // --- Banner UI ---
  const banner = createTag('div', { class: 'privacy-banner', role: 'region', 'aria-label': 'Cookie banner' });
  const wrap = createTag('div', { class: 'privacy-banner-wrap' });

  const content = createTag('div', { class: 'privacy-banner-content' });
  content.append(
    createTag('h2', { class: 'privacy-banner-title' }, bannerData.title),
    createTag('div', { class: 'privacy-banner-desc' }, bannerData.description)
  );

  const btnRow = createTag('div', { class: 'privacy-banner-actions' });
  const btnSettings = createTag('button', { class: 'privacy-banner-btn settings', type: 'button' }, 'Cookie Settings');
  const btnGroup = createTag('div', { class: 'privacy-banner-action-group' });
  const btnReject = createTag('button', { class: 'privacy-banner-btn reject', type: 'button' }, "Don't Enable");
  const btnAccept = createTag('button', { class: 'privacy-banner-btn accept', type: 'button' }, 'Enable all');
  btnGroup.append(btnReject, btnAccept);
  btnRow.append(btnSettings, btnGroup);

  wrap.append(content, btnRow);
  banner.append(wrap);

  btnAccept.onclick = () => {
    privacyState.setConsent(initialConsent);
    banner.remove();
  };
  btnReject.onclick = () => {
    privacyState.setConsent(['C0001']);
    banner.remove();
  };
  btnSettings.onclick = () => {
    document.dispatchEvent(new CustomEvent('adobePrivacy:OpenModal'));
    banner.remove();
  };

  document.body.append(banner);
}
