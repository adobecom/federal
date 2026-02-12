import { component } from "./Components/Component";
import { productEntryCTA } from "./Components/CTA/Render";
import { IrrecoverableError, RecoverableError } from "./Error/Error";
import { GlobalNavigationData, parseNavigation } from "./Parse/Parse";
import { initClickListeners } from "./PostRendering/ClickListeners";
import { initKeyboardNav } from "./PostRendering/Keyboard";
import { loadUnav } from "./PostRendering/Unav/Unav";
import { getInitialHTML } from "./PreRendering/FetchAssets";
import { renderListItems, setMiloConfig, MiloConfig, setPersonalizationConfig, PersonalizationConfig } from "./Utils/Utils";
import './styles/styles.css';
import { combineWithFederalPlaceholders, setPlaceholders } from "./Utils/Placeholders";
import { lanaLog } from "./Utils/Log";
import { popup } from "./Components/MegaMenu/Render";

// TODO implement Analytcs

type GlobalNavigation = {
  closeEverything: () => void;
  reloadUnav: () => void;
  getGnavTopPosition: () => number;
  setGnavTopPosition: (_: number) => void;
  errors: Set<RecoverableError>;
};

export type Input = {
  gnavSource: URL;
  asideSource: URL | null;
  gnavTop?: number;
  isLocalNav: boolean;
  mountpoint: HTMLElement;
  unavEnabled: boolean;
  placeholders: Promise<Map<string, string>>;
  miloConfig?: MiloConfig;
  getStageDomainMap: (domainmap: unknown[], env: string) =>
    { [key: string]: string }
  // for now we only support inBlock commands.
  // Since MEP on gnav is relatively rare we'll
  // keep it at this and see if any problems crop up.
  // The Milo gnav MEP implementation is a little
  // more entangled than what we have here.
  // For example we're not dealing with adding manifestId to the body
  // and so on. But the whole idea behind this refactor is
  // that we want to reduce coupling.
  // So we'll keep it at this for now and re-evaluate at a
  // later date.
  personalization: PersonalizationConfig;
};

export const main = async (
  input: Input
): Promise<GlobalNavigation | IrrecoverableError> => {
  // TODO: implement a function that verifies that Input
  // is the correct type up front.

  const {
    gnavSource,
    mountpoint,
    unavEnabled,
    miloConfig,
    personalization
  } = input;

  if (!(gnavSource instanceof URL)) {
    lanaLog(`gnavSource is invalid: ${gnavSource}`)
    throw new IrrecoverableError("gnavSource needs to be a URL object");
  }

  try {
    setMiloConfig(miloConfig);
  } catch (error) {
    lanaLog(`Failed to initialize MiloConfig: ${error}`);
    throw new IrrecoverableError(`Failed to initialize MiloConfig: ${error}`);
  }
  
  setPersonalizationConfig(personalization);
  
  // We kick off the request for the federal placeholders in parallel
  setPlaceholders(combineWithFederalPlaceholders(input));

  const initial = await getInitialHTML(input)
  if (initial instanceof IrrecoverableError) {
    lanaLog(initial.message);
    throw initial;
  }
  const { mainNav, aside: _aside } = initial;
  if (mainNav instanceof IrrecoverableError) {
    lanaLog(mainNav.message);
    throw mainNav;
  }

  const gnavData = parseNavigation(mainNav, unavEnabled);
  if (gnavData instanceof IrrecoverableError) {
    lanaLog(gnavData.message);
    throw gnavData;
  }
  
  // TODO: Implement Aside
  
  await renderGnav(gnavData)(mountpoint);

  return postRenderingTasks(input);
};


export const renderGnav = (
  data: GlobalNavigationData
) => async (
mountpoint: HTMLElement
): Promise<HTMLElement> => {
  const navHTML = renderGnavString(data);
  mountpoint.innerHTML = navHTML;
  mountpoint.classList.add('site-pivot');
  const megaMenus = [
    ...mountpoint.querySelectorAll('.mega-menu ~ .feds-popup')
  ]
  megaMenus.forEach(mm => {
    mm.innerHTML = '';
  });
  const mmPromises = data.components
    .filter(com => com.type === "MegaMenu")
    .map(com => com.content);
  const _errors_ = await Promise.all(mmPromises.map(async (mmPromise, idx) => {
    const [content, errors] = await mmPromise;
    megaMenus[idx].innerHTML = popup(content);
    return errors;
  }).flat());
  return mountpoint;
};

export const renderGnavString = ({
  components,
  productCTA,
  unavEnabled,
}: GlobalNavigationData
): string => `
<nav>
  <ul>
    ${((): string => {
      const brandComponent = components.find((c) =>
        c.type === "Brand"
      ) ?? null;
      const menuComponents = components.filter((c) => c.type !== "Brand");
      const toggleButton = `
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim();

      const brandHTML = brandComponent ? component(brandComponent) : "";
      const menuItemsHTML = renderListItems(menuComponents, component);

      return `
        <li class="feds-brand-wrapper">
          ${toggleButton}
          ${brandHTML}
        </li>
        <li
          id="feds-menu-wrapper"
          popover
          class="feds-menu-wrapper"
          aria-hidden="true"
        >
          <ul class="feds-gnav-items">
            ${menuItemsHTML}
          </ul>
        </li>
      `.trim();
    })()}
  </ul>
  ${productCTA === null ? '' : productEntryCTA(productCTA)}
  ${unavEnabled ? '<div class="feds-utilities"></div>' : ''}
</nav>
`;


export const postRenderingTasks = async (
  input: Input,
): Promise<GlobalNavigation | IrrecoverableError> => {
  const errors = new Set<RecoverableError>();
  const unav = await loadUnav(input.mountpoint);
  if (unav instanceof RecoverableError) {
    errors.add(unav);
    lanaLog(unav.message);
  }
  else 
    unav.errors.forEach((error: RecoverableError) => errors.add(error));
  initClickListeners(input.mountpoint);
  initKeyboardNav(input.mountpoint);
  
  const reloadUnav
    = unav instanceof RecoverableError
    ? (): void => {}
    : unav.reloadUnav;

  return {
    closeEverything,
    reloadUnav,
    errors,
    setGnavTopPosition: (_): void => {},
    getGnavTopPosition: (): number => 0,
  };
};

const closeEverything = (): void => {
};

