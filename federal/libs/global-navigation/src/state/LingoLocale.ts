// LingoLocaleConfig singleton — federal-specific locale override
// introduced upstream. Behaviour preserved from the original closure:
// `set` always replaces (no init guard, accepts undefined) and the
// getter never throws, returning `undefined` until set.

import { createSingleton } from './createSingleton';
import type { LingoLocaleConfig } from '../types/MiloConfig';

const singleton = createSingleton<LingoLocaleConfig | undefined>({
  name: 'LingoLocaleConfig',
  onReinit: 'replace',
});

export const setLingoLocaleConfig = singleton.set;
// peek (not get) so reads return undefined instead of throwing.
export const getLingoLocaleConfig = singleton.peek;
export const __resetLingoLocaleConfigForTests = singleton.reset;
