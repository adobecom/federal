// Test exports - exports components and utilities for testing
export { parseLinkGroup } from './Components/LinkGroup/Parse';
export { linkGroup } from './Components/LinkGroup/Render';
export { IrrecoverableError, RecoverableError } from './Error/Error';
export { parseLink } from './Components/Link/Parse';
export type { LinkGroup, LinkGroupHeader, LinkGroupLink, LinkGroupBlue } from './Components/LinkGroup/Parse';
export type { Link } from './Components/Link/Parse';
export { parseBrand } from './Components/Brand/Parse';
export { brand } from './Components/Brand/Render';

// Utils exports for testing
export { setMiloConfig, getMiloConfig, getMetadata, loadScript, loadStyles } from './Utils/Utils';
export { setPlaceholders } from './Utils/Placeholders';
export { loadIms } from './PostRendering/ImsLoader';
export { ims, imsReady } from './PostRendering/ImsManager';
export type { ImsManagerOptions, ImsResult } from './PostRendering/ImsManager';
export type { MiloConfig } from './Utils/Utils';

// UNAV test exports
export {
  getUnavWidthCSS,
  getUniversalNavLocale,
  getDevice,
  getVisitorGuid,
  setUserProfile,
  getUserProfile,
  SIGNED_OUT_ICONS,
  LANGMAP,
} from './PostRendering/Unav/Unav.utils';
export { getUnavComponents } from './PostRendering/Unav/Unav.config';
export { loadUnav } from './PostRendering/Unav/Unav.loader';
export type { Unav } from './PostRendering/Unav/Unav.loader';
export { decorateProfile, setStoredProfile, getStoredProfile } from './PostRendering/ProfileDecorator';
export { parseProfileHTML } from './Components/Profile/Parse';
export type { ProfileData } from './Components/Profile/types';
export { renderSignIn, renderSignInButton, renderSignInWithDropdown } from './Components/Profile/Render';
export { renderSignedInProfile } from './Components/Profile/RenderProfile';
export { fetchProfileData } from './Components/Profile/ProfileData';
export { attachProfileEvents } from './Components/Profile/ProfileEvents';
