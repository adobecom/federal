// UserProfile singleton — replaces the bespoke promise plumbing that
// used to live at src/PostRendering/Unav/Unav.utils.ts:59-86. Uses
// `createAsyncSingleton` to express the producer-consumer pattern:
// the consumer awaits a promise while the producer (either the real
// profile callback or the 5-second timeout fallback) supplies the
// value.
//
// First-write-wins semantics are preserved via `onReinit: 'ignore'`
// — if the timeout fallback fires first, a late real-profile callback
// is silently ignored, matching previous behaviour.

import { createAsyncSingleton } from './createAsyncSingleton';
import type { UserProfile } from '../PostRendering/Unav/Unav.types';

const PROFILE_RESOLUTION_TIMEOUT_MS = 5000;

const singleton = createAsyncSingleton<UserProfile>({
  name: 'UserProfile',
  onReinit: 'ignore',
  timeout: {
    ms: PROFILE_RESOLUTION_TIMEOUT_MS,
    fallback: (): UserProfile => ({}),
  },
});

export const setUserProfile = singleton.set;
export const getUserProfile = singleton.get;
export const peekUserProfile = singleton.peek;
export const __resetUserProfileForTests = singleton.reset;
