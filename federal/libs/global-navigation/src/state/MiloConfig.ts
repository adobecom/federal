// MiloConfig singleton — replaces the closure-based singleton that
// used to live at src/Utils/Utils.ts:798-823. Behaviour preserved:
// silent no-op on re-init, throw on uninitialised get, structural
// validation on set.

import { createSingleton } from './createSingleton';
import { isValidMiloConfig } from './isValidMiloConfig';
import type { MiloConfig } from '../types/MiloConfig';

const singleton = createSingleton<MiloConfig>({
  name: 'MiloConfig',
  validate: isValidMiloConfig,
  onReinit: 'ignore',
});

export const setMiloConfig = singleton.set;
export const getMiloConfig = singleton.get;
export const peekMiloConfig = singleton.peek;
export const __resetMiloConfigForTests = singleton.reset;
