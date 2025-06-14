import loadPrivacyBanner from '../privacy/privacy-banner.js';
import loadPrivacyModal from '../privacy/privacy-modal.js';

export function initPrivacy(config, createTag, getMetadata, loadBlock) {
  loadPrivacyBanner(config, createTag, getMetadata);
  document.addEventListener('adobePrivacy:OpenModal', () => {
    loadPrivacyModal(config, createTag, getMetadata, loadBlock);
  });
}
export default initPrivacy;