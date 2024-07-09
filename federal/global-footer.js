const blockConfig = {
  name: 'global-footer',
  targetEl: 'footer',
  metaName: 'footer-source',
  label: 'Footer'
}

async function loadBlock() {
  const miloLibs = window.fedsGlobalConfig?.miloLibs || 'https://stage--milo--adobecom.hlx.page';
  const federalRepo = 'https://bootstraper--federal--adobecom.hlx.page';

  //Relative path can't be used, as the script will run on consumer's app
  const { bootstrapBlock } = await import(`${federalRepo}/scripts/utils.js`);
  const { locales } = await import(`${federalRepo}/constants/constants.js`);
  const clientConfig = { locales, miloLibs: `${miloLibs}/libs`, ...window.fedsGlobalConfig }

  bootstrapBlock(clientConfig, blockConfig);
}

loadBlock();
