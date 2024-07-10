const blockConfig = {
  name: 'global-footer',
  targetEl: 'footer',
  metaName: 'footer-source',
  label: 'Footer',
  appendType: 'appendChild'
}

async function loadBlock() {
  const fedsBranch = new URLSearchParams(window.location.search).get('fedsBranch') || 'stage';
  const { fedsGlobalConfig = {} } = window;
  const miloLibs = fedsGlobalConfig.miloLibs || 'https://stage--milo--adobecom.hlx.page';
  const federalRepo = `https://${fedsBranch}--federal--adobecom.hlx.page`;

  //Relative path can't be used, as the script will run on consumer's app
  const { bootstrapBlock } = await import(`${federalRepo}/scripts/utils.js`);
  const { locales } = await import(`${federalRepo}/constants/constants.js`);
  const clientConfig = {
    origin: federalRepo,
    contentRoot: fedsGlobalConfig.contentRoot || '/federal/globalNav',
    miloLibs: `${miloLibs}/libs`,
    pathname: `/${fedsGlobalConfig.locale || ''}`,
    locales: fedsGlobalConfig.locales || locales,
    url: fedsGlobalConfig.footerUrl,
  }

  bootstrapBlock(clientConfig, blockConfig);
}

loadBlock();
