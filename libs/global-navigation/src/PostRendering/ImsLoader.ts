import { getMiloConfig, getMetadata, loadScript } from '../Utils/Utils';

const PAGE_URL = new URL(window.location.href);

let imsLoaded: Promise<void> | undefined;

/**
 * Loads and initializes Adobe IMS library
 */
export async function loadIms(): Promise<void> {
  imsLoaded = imsLoaded || new Promise<void>((resolve, reject) => {
    const config = getMiloConfig();
    const {
      locale, imsClientId, imsScope, env, base, adobeid, imsTimeout,
    } = config;
    
    if (!imsClientId) {
      reject(new Error('Missing IMS Client ID'));
      return;
    }
    
    const [unavMeta, ahomeMeta, imsGuest] = [
      getMetadata('universal-nav')?.trim(), 
      getMetadata('adobe-home-redirect'), 
      getMetadata('ims-guest-token')
    ];
    
    const defaultScope = `AdobeID,openid,gnav${
      unavMeta && unavMeta !== 'off' 
        ? ',pps.read,firefly_api,additional_info.roles,read_organizations,account_cluster.read' 
        : ''
    }`;
    
    const timeout = setTimeout(
      () => reject(new Error('IMS timeout')), 
      imsTimeout || 5000
    );
    
    window.adobeid = {
      client_id: imsClientId,
      scope: imsScope || defaultScope,
      locale: locale?.ietf?.replace('-', '_') || 'en_US',
      redirect_uri: ahomeMeta === 'on'
        ? `https://www${env.name !== 'prod' ? '.stage' : ''}.adobe.com${locale.prefix}` 
        : undefined,
      autoValidateToken: true,
      environment: env.ims,
      useLocalStorage: false,
      onReady: () => {
        resolve();
        clearTimeout(timeout);
      },
      onError: reject,
      ...(imsGuest === 'on' && {
        api_parameters: { check_token: { guest_allowed: true } },
        enableGuestAccounts: true,
        enableGuestTokenForceRefresh: true,
      }),
      ...adobeid,
    };
    
    const path = PAGE_URL.searchParams.get('useAlternateImsDomain')
      ? 'https://auth.services.adobe.com/imslib/imslib.min.js'
      : `${base}/deps/imslib.min.js`;
      
    loadScript(path);
  }).then(() => {
    // After IMS is loaded
  }).catch((e) => {
    // Reset imsLoaded on failure to allow retry
    imsLoaded = undefined;
    throw e;
  });

  return imsLoaded;
}
