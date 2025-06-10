import loadPrivacyBanner from '../privacy-banner/privacy-banner.js';
import loadPrivacyModal from './privacy-modal.js';

/**
 * Initialize the privacy flow (banner + modal event binding)
 *
 * @param {object} config         - Milo/federal config
 * @param {function} createTag    - Milo createTag
 * @param {function} getMetadata  - Milo getMetadata
 * @param {function} loadBlock    - Milo loadBlock
 * @param {function} loadStyle    - Milo loadStyle
 */
export function initPrivacy(config, createTag, getMetadata, loadBlock, loadStyle) {
  loadPrivacyBanner(config, createTag, getMetadata, loadStyle);
  document.addEventListener('adobePrivacy:OpenModal', () => {
    loadPrivacyModal(config, createTag, getMetadata, loadBlock, loadStyle);
  });
}
export default initPrivacy;