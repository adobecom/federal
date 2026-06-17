// Lifted from src/Utils/Utils.ts as part of the
// extract-input-type-and-singletons migration. The MiloConfig
// singleton at src/state/MiloConfig.ts passes this validator to
// `createSingleton`.

import type { MiloConfig } from '../types/MiloConfig';

const isPlainObject = (x: unknown): boolean =>
  x !== null && x !== undefined && typeof x === 'object';

/**
 * Validates MiloConfig structure at runtime.
 *
 * @param config - Configuration object to validate
 * @returns true if valid, false otherwise
 */
export const isValidMiloConfig = (
  config: unknown,
): config is MiloConfig => {
  if (!isPlainObject(config)) return false;
  const cfg = config as MiloConfig;

  // Validate locale structure
  if (!isPlainObject(cfg.locale)) return false;
  const locale = cfg.locale as Record<string, unknown>;
  if (typeof locale.prefix !== 'string') return false;

  // Validate env structure
  if (!isPlainObject(cfg.env)) return false;
  const env = cfg.env as Record<string, unknown>;
  if (typeof env.name !== 'string') return false;

  // Validate optional unav structure
  if (cfg.unav !== undefined) {
    if (!isPlainObject(cfg.unav)) return false;
    const unav = cfg.unav as Record<string, unknown>;

    // Validate unav.profile if present
    if (unav.profile !== undefined) {
      if (!isPlainObject(unav.profile)) return false;
      const profile = unav.profile as Record<string, unknown>;

      // Validate signInCtaStyle if present
      if (profile.signInCtaStyle !== undefined) {
        if (
          profile.signInCtaStyle !== 'primary'
          && profile.signInCtaStyle !== 'secondary'
        ) {
          return false;
        }
      }

      // Validate messageEventListener if present
      if (
        profile.messageEventListener !== undefined
        && typeof profile.messageEventListener !== 'function'
      ) {
        return false;
      }
    }
  }

  // Validate optional jarvis structure
  if (cfg.jarvis !== undefined) {
    if (!isPlainObject(cfg.jarvis)) return false;
    const jarvis = cfg.jarvis as Record<string, unknown>;

    // id is required if jarvis object exists
    if (typeof jarvis.id !== 'string') return false;
  }

  return true;
};
