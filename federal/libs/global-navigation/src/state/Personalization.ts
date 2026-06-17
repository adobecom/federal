// PersonalizationConfig singleton — replaces the closure-based
// singleton that used to live at src/Utils/Utils.ts:167-188.
// Behaviour preserved: silent no-op on re-init, throw on
// uninitialised get.

import { createSingleton } from './createSingleton';
import type { PersonalizationConfig } from '../types/MiloConfig';

const singleton = createSingleton<PersonalizationConfig>({
  name: 'PersonalizationConfig',
  onReinit: 'ignore',
});

export const setPersonalizationConfig = singleton.set;
export const getPersonalizationConfig = singleton.get;
export const peekPersonalizationConfig = singleton.peek;
export const __resetPersonalizationConfigForTests = singleton.reset;
