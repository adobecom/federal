const blockConfig = {
  name: 'global-footer',
  targetEl: 'footer',
  metaName: 'footer-source',
  type: 'Footer'
}

async function loadBlock() {
  const miloLibs = new URLSearchParams(window.location.search).get('miloLibs') || 'https://stage--milo--adobecom.hlx.page/libs';
  const federalRepo = 'https://stage--federal--adobecom.hlx.page';
  const { bootstrapBlock } = await import(`${federalRepo}/scripts/utils.js`);
  const { locales } = await import(`${federalRepo}/constants/constants.js`);
  const clientConfig = { locales, miloLibs, ...window.fedsGlobalConfig };

  bootstrapBlock(clientConfig, blockConfig);
}

loadBlock();
