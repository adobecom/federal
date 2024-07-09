const blockConfig = {
  name: 'global-footer',
  targetEl: 'footer',
  metaName: 'footer-source',
}

async function loadBlock() {
  const miloLibs = 'https://stage--milo--adobecom.hlx.page/libs';
  const federalRepo = 'https://bootstraper--federal--adobecom.hlx.page';

  //Relative path can't be used, as the script will run on consumer's app
  const { bootstrapBlock } = await import(`${federalRepo}/scripts/utils.js`);
  const { locales } = await import(`${federalRepo}/constants/constants.js`);
  const clientConfig = { locales, miloLibs, ...window.fedsGlobalConfig }

  bootstrapBlock(clientConfig, blockConfig);
}

loadBlock();
