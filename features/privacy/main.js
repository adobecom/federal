import loadPrivacyBanner from './privacy-banner.js';
import loadPrivacyModal from './privacy-modal.js';

document.getElementById('show-privacy-banner').onclick = loadPrivacyBanner;
document.getElementById('show-privacy-modal').onclick = loadPrivacyModal;

document.addEventListener('adobePrivacy:OpenModal', loadPrivacyModal);
