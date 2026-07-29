import { getMiloConfig, loadStyle } from '../Utils/Utils';
import { RecoverableError } from '../Error/Error';

/**
 * Initializes the brand-concierge-global block by loading/applying the
 * Milo brand-concierge-global block to the authored `.brand-concierge-global`
 * element(s) found in the gnav content.
 * @param mountpoint - The global navigation container element
 * @returns Set of RecoverableErrors encountered during initialization
 */
export const initBrandConciergeGlobal = async (
  mountpoint: HTMLElement
): Promise<Set<RecoverableError>> => {
  const errors = new Set<RecoverableError>();
  const brandConciergeGlobalBlocks = mountpoint.querySelectorAll<HTMLElement>(
    '.brand-concierge-global'
  );

  if (brandConciergeGlobalBlocks.length === 0) return errors;

  try {
    const config = getMiloConfig();
    const { base } = config;

    if (base === '') {
      errors.add(
        new RecoverableError(
          'base not found in config, cannot initialize brand-concierge-global'
        )
      );
      return errors;
    }

    loadStyle(`${base}/blocks/brand-concierge-global/brand-concierge-global.css`);

    // Dynamically import the brand-concierge-global module from Milo
    type BrandConciergeGlobalModule = {
      default?: (block: HTMLElement) => void;
    };
    const brandConciergeGlobalModule = await import(
      `${base}/blocks/brand-concierge-global/brand-concierge-global.js`
    ) as BrandConciergeGlobalModule;
    const init = brandConciergeGlobalModule.default;

    if (init === undefined) {
      errors.add(new RecoverableError('init not found in brand-concierge-global module'));
      return errors;
    }

    brandConciergeGlobalBlocks.forEach((block) => {
      init(block);
    });

  } catch (error) {
    errors.add(new RecoverableError(`Error initializing brand-concierge-global: ${error}`));
  }

  return errors;
};
