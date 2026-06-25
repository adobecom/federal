// Placeholders singleton — replaces the closure-based singleton that
// used to live at src/Utils/Placeholders.ts:99-117.
//
// Sync helper, not createAsyncSingleton: the producer hands over a
// Promise, not a future value.

import { createSingleton } from './createSingleton';

const singleton = createSingleton<Promise<Map<string, string>>>({
  name: 'Placeholders',
  onReinit: 'ignore',
});

export const setPlaceholders = singleton.set;
export const getPlaceholders = singleton.get;
export const peekPlaceholders = singleton.peek;
export const __resetPlaceholdersForTests = singleton.reset;
