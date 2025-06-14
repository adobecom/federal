import loadPrivacyBanner from '../privacy/privacy-banner.js';
import loadPrivacyModal from '../privacy/privacy-modal.js';

export function initPrivacy(config, getMetadata, loadBlock) {
  loadPrivacyBanner(config, getMetadata);
  document.addEventListener('adobePrivacy:OpenModal', () => {
    loadPrivacyModal(config, getMetadata, loadBlock);
  });
}
export default initPrivacy;