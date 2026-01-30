/**
 * Window augmentations for Adobe ecosystem APIs
 * 
 * These Window properties are set by Adobe's CDN-loaded libraries:
 * - adobeIMS: Identity Management System
 * - adobeid: IMS client configuration
 * - adobeProfile: User profile service
 * - alloy: Adobe Experience Platform Web SDK
 * - UniversalNav: Universal Navigation component
 * 
 * Used across: UNAV, Profile, Theme management, Analytics
 */

import type { AlloyIdentityData, UnavConfig } from '../PostRendering/Unav/Unav.types';
import { Lana } from '../Utils/Log';

declare global {
  interface Window {
    /** User Profile Service */
    adobeProfile?: {
      getUserProfile: () => Promise<unknown>;
    };

    /** Adobe Identity Management System */
    adobeIMS?: {
      initialized?: boolean;
      signIn: (context: object) => void;
      signOut: () => void;
      isSignedInUser: () => boolean;
      getAccessToken: () => { token: string };
      getProfile: () => Promise<{ displayName: string; email: string }>;
    };

    /** IMS Client Configuration */
    adobeid?: {
      client_id: string;
      scope: string;
      locale: string;
      redirect_uri?: string;
      autoValidateToken: boolean;
      environment?: string;
      useLocalStorage: boolean;
      onReady: () => void;
      onError: (error: Error) => void;
      api_parameters?: {
        check_token?: {
          guest_allowed: boolean;
        };
      };
      enableGuestAccounts?: boolean;
      enableGuestTokenForceRefresh?: boolean;
      [key: string]: unknown;
    };

    /** Adobe Experience Platform Web SDK (Alloy) */
    alloy?: (command: string) => Promise<AlloyIdentityData>;

    lana?: Lana;
    
    /** Universal Navigation Component */
    UniversalNav?: {
      (config: UnavConfig): Promise<void>;
      reload: (config: UnavConfig) => void;
      changeTheme?: (theme: 'light' | 'dark') => void;
    };
  }
}

export { };
