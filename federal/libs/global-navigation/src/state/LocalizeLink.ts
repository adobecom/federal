// LocalizeLink singleton — replaces the closure-based singleton that
// used to live at src/Utils/Utils.ts:195-205. Behaviour preserved:
// `setLocalizeLink` replaces on every call (no init guard); the
// initial value is the identity function so `getLocalizeLink` never
// throws even before any explicit `set`. The `localizeHref` helper
// (formerly at src/Utils/Utils.ts:207-214) is co-located here.

import { createSingleton } from './createSingleton';
import type { LocalizeLink } from '../types/MiloConfig';

const identityLocalizeLink: LocalizeLink = (link: string): string => link;

const singleton = createSingleton<LocalizeLink>({
  name: 'LocalizeLink',
  onReinit: 'replace',
});

// Initialise with the identity-function default so consumers never
// see an uninitialised-state throw.
singleton.set(identityLocalizeLink);

export const setLocalizeLink = singleton.set;
export const getLocalizeLink = singleton.get;
export const peekLocalizeLink = singleton.peek;
export const __resetLocalizeLinkForTests = (): void => {
  singleton.reset();
  // Restore the identity-function default so subsequent reads do not
  // throw between the reset and the next explicit set.
  singleton.set(identityLocalizeLink);
};

/**
 * Localises an `href`. Resolves relative paths against the current
 * origin before delegating to the configured `localizeLink`.
 *
 * Falls back to the original `href` if localization throws.
 */
export const localizeHref = (href: string): string => {
  try {
    const absoluteHref = href.startsWith('/')
      ? `${window.location.origin}${href}`
      : href;
    return getLocalizeLink()(absoluteHref);
  } catch {
    return href;
  }
};
