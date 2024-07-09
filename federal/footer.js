const miloLibs = 'https://main--milo--adobecom.hlx.page/libs';
const federalRepo = 'https://bootstraper--federal--adobecom.hlx.page';

const defaultConfig =  {
  miloLibs,
  url: 'https://main--milo--adobecom.hlx.page/drafts/blaishram/my-footer',
};

const blockConfig = {
  name: 'global-footer',
  targetEl: 'footer',
  metaName: 'footer-source',
}

async function loadBlock() {
  const { bootstrapBlock } = await import(`${federalRepo}/scripts/utils.js`);
  const { locales } = await import(`${federalRepo}/constants/constants.js`);
  const clientConfig = { locales, ...defaultConfig, ...window.fedsGlobalConfig }

  bootstrapBlock(clientConfig, blockConfig);
}

loadBlock();
