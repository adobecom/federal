/**
 * Profile Decorator - Handles profile component decoration based on auth state
 */

import { getPlaceholders } from '../Utils/Placeholders';
import { getSignInContext } from './Unav/Unav.config';
import { parseProfileHTML } from '../Components/Profile/Parse';
import { renderSignIn } from '../Components/Profile/Render';
import { RecoverableError } from '../Error/Error';

type ProfileStorageFunctions = [
  (html: string | null) => void,
  () => string | null
];

export const [setStoredProfile, getStoredProfile] = ((): ProfileStorageFunctions => {
  let storedProfileHTML: string | null = null;

  return [
    (html: string | null): void => {
      storedProfileHTML = html;
    },
    (): string | null => storedProfileHTML,
  ];
})();

const attachSignInEvents = (container: HTMLElement): void => {
  const signInButtons = container.querySelectorAll('[data-signin-trigger]');

  signInButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // Safety check: IMS loaded?
      if (!window.adobeIMS) {
        // TODO: Implement Lana Logic for sign in if IMS is not available
        // console.error('ProfileDecorator: Adobe IMS not loaded, cannot sign in');
        return;
      }

      // Get sign-in context from config
      const context = getSignInContext();

      // Trigger IMS sign-in
      window.adobeIMS.signIn(context);
    });
  });
};

const decorateSignIn = async (
  rawElem: string,
  decoratedElem: HTMLElement
): Promise<Set<RecoverableError>> => {
  const errors = new Set<RecoverableError>();
  const placeholders = await getPlaceholders();
  const signInLabel = placeholders.get('sign-in') || 'Sign In';

  // Optional: Warn if placeholder missing
  if (!placeholders.has('sign-in')) {
    // This is not a blocking error, so we can just log it.
    // We could create a non-fatal RecoverableError if we wanted to track it.
  }

  const profileData = parseProfileHTML(rawElem);

  const signInHTML = renderSignIn(
    signInLabel,
    profileData.hasDropdown,
    profileData.dropdownHTML
  );

  decoratedElem.innerHTML = signInHTML;

  attachSignInEvents(decoratedElem);

  return errors;
};

const decorateSignedInProfile = async (
  rawElem: string,
  decoratedElem: HTMLElement
): Promise<Set<RecoverableError>> => {
  const errors = new Set<RecoverableError>();

  const { fetchProfileData, extractLocalMenu } = await import('../Components/Profile/ProfileData');
  const [profileData, fetchErrors] = await fetchProfileData();

  fetchErrors.forEach(error => errors.add(error));

  if (!profileData) {
    return errors;
  }

  const placeholders = await getPlaceholders();

  const localMenuHTML = extractLocalMenu(rawElem);

  const { renderSignedInProfile } = await import('../Components/Profile/RenderProfile');
  const profileHTML = renderSignedInProfile({
    avatar: profileData.avatar,
    displayName: profileData.displayName,
    email: profileData.email,
    sections: profileData.sections,
    placeholders,
    localMenuHTML,
  });

  decoratedElem.innerHTML = profileHTML;

  const { attachProfileEvents } = await import('../Components/Profile/ProfileEvents');
  attachProfileEvents(decoratedElem);

  return errors;
};

export const decorateProfile = async (mountpoint: HTMLElement): Promise<Set<RecoverableError>> => {
  // Get stored profile HTML
  const rawElem = getStoredProfile();
  if (!rawElem) return new Set();

  // Find the placeholder container
  const decoratedElem = mountpoint.querySelector('.feds-profile') as HTMLElement;
  if (!decoratedElem) return new Set();

  // Check authentication state
  const isSignedInUser = window?.adobeIMS?.isSignedInUser();

  if (!isSignedInUser) {
    // User NOT signed in → show sign-in button
    return decorateSignIn(rawElem, decoratedElem);
  }

  // User IS signed in → show profile menu
  return decorateSignedInProfile(rawElem, decoratedElem);
};

