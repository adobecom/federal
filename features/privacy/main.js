import { initPrivacy } from './privacy-standalone.js';
import { setLibs, getLibs } from '../../scripts/utils.js';
import privacyState from './privacy-state.js';

setLibs('/libs'); 
const miloLibs = getLibs();

const utilsModule = await import(`${miloLibs}/utils/utils.js`);
const { getConfig, getMetadata, loadBlock } = utilsModule;

const config = getConfig ? getConfig() : {
    privacyId: '7a5eb705-95ed-4cc4-a11d-0cc5760e93db', // or your test domain's OneTrust ID
    codeRoot: '/libs',
    miloLibs
  };
// Start privacy flow automatically!
initPrivacy(config, getMetadata, loadBlock);
