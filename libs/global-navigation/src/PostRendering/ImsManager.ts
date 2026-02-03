/**
 * IMS Manager - Orchestrates IMS initialization and post-IMS rendering
 */

import { loadIms } from './ImsLoader';
import { loadUnav } from './Unav/Unav.loader';
import { setUserProfile } from './Unav/Unav.utils';
import { RecoverableError } from '../Error/Error';
import { lanaLog } from '../Utils/Log';
import type { ProfileType } from '../Components/Profile/types';

/**
 * Result of IMS initialization with UNAV/profile tasks
 */
export type ImsResult = {
  reloadUnav: () => void;
  errors: Set<RecoverableError>;
};

const yieldToMain = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

export type ImsManagerOptions = {
  profileType: ProfileType;
  mountpoint?: HTMLElement;
  decorateProfile?: () => Promise<Set<RecoverableError>>;
};

export const imsReady = async (options: ImsManagerOptions): Promise<ImsResult> => {
  const { profileType, mountpoint, decorateProfile } = options;

  if (!window.adobeIMS?.isSignedInUser() || profileType !== 'Unav') {
    setUserProfile({});
  }

  if (profileType === 'Unav' && mountpoint) {
    try {
      await yieldToMain();
      const unav = await loadUnav(mountpoint);
      
      if (unav instanceof RecoverableError) {
        lanaLog(unav.message);
        return {
          reloadUnav: () => {},
          errors: new Set([unav]),
        };
      }
      
      return {
        reloadUnav: unav.reloadUnav,
        errors: unav.errors,
      };
    } catch (e) {
      return {
        reloadUnav: () => {},
        errors: new Set([new RecoverableError('Failed to load UNAV')]),
      };
    }
  }
  
  if (decorateProfile) {
    try {
      await yieldToMain();
      const profileErrors = await decorateProfile();
      return {
        reloadUnav: () => {},
        errors: profileErrors,
      };
    } catch (e) {
      return {
        reloadUnav: () => {},
        errors: new Set([new RecoverableError('An unexpected error occurred in decorateProfile')]),
      };
    }
  }
  
  // Return defaults for non-UNAV case
  return {
    reloadUnav: () => {},
    errors: new Set(),
  };
};

export const ims = async (options: ImsManagerOptions): Promise<ImsResult> => {
  // If IMS is already initialized, directly call imsReady
  if (window.adobeIMS?.initialized) {
    return imsReady(options);
  }

  try {
    // Otherwise, load IMS first
    await loadIms();
    return imsReady(options);
  } catch (e) {
    // Special handling for IMS timeout
    if (e instanceof Error && e.message === 'IMS timeout') {
      window.addEventListener('onImsLibInstance', () => imsReady(options));
      // Return defaults since we're waiting for event
      return {
        reloadUnav: () => {},
        errors: new Set(),
      };
    }
    return {
      reloadUnav: () => {},
      errors: new Set([new RecoverableError('Failed to load IMS')]),
    };
  }
};
