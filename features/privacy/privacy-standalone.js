import loadPrivacyBanner from '../privacy/privacy-banner.js';
import loadPrivacyModal from '../privacy/privacy-modal.js';

export function initPrivacy(config, createTag, getMetadata, loadBlock, loadStyle) {
  loadPrivacyBanner(config, createTag, getMetadata, loadStyle);
  document.addEventListener('adobePrivacy:OpenModal', () => {
    loadPrivacyModal(config, createTag, getMetadata, loadBlock, loadStyle);
  });
}
export default initPrivacy;