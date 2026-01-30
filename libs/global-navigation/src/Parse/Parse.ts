import { Component, parseComponent } from "../Components/Component";
import { parseProductEntryCTA, ProductEntryCTA } from "../Components/CTA/Parse";
import { Link, parseLink } from "../Components/Link/Parse";
import { IrrecoverableError, RecoverableError } from "../Error/Error";
import { parseListAndAccumulateErrors } from "../Utils/Utils";
import { setStoredProfile } from "../PostRendering/ProfileDecorator";

export type GlobalNavigationData = {
  breadcrumbs: List<Link>;
  components: List<Component>;
  productCTA: ProductEntryCTA | null;
  localnav: boolean;
  hasProfile: boolean;
  errors: List<RecoverableError>;
  unavEnabled: boolean;
};

export const parseNavigation = (
  mainNav: HTMLElement,
  unavEnabled: boolean
): GlobalNavigationData | IrrecoverableError => {
  // Extract and store profile if UNAV is disabled
  let hasProfile = false;
  const mainNavChildren = [...mainNav.children];
  const profileWrapper = mainNavChildren.find(child => 
    child.querySelector('.profile')
  );
  
  if (profileWrapper) {
    const profileElement = profileWrapper.querySelector('.profile');
    if (profileElement) {
      // Store profile HTML in memory via ProfileDecorator on in case of UNAV disabled
      if (!unavEnabled) {
        setStoredProfile(profileElement.outerHTML);
      }
      // Remove profile wrapper from mainNav to avoid parsing as component
      profileWrapper.remove();
      hasProfile = true;
    }
  }
  
  const [breadcrumbs, breadcrumbErrors]
    = parseListAndAccumulateErrors(
      [...document.querySelectorAll('.breadcrumbs ul > li > a') ?? []],
      parseLink
    );
  const [components, componentErrors] 
    = parseListAndAccumulateErrors(
      [...mainNav.children],
      parseComponent
    ); 
  const productEntryElement = mainNav.querySelector('.product-entry-cta');
  const [productCTA, productCtaErrors]
    = (
  (): Parsed<ProductEntryCTA | null, RecoverableError> => {
    try {
      return parseProductEntryCTA(productEntryElement);
    } catch (_) {
      return [null, []];
    }
  })();
  const localnav = components
    .filter((component): boolean =>
            component.type === "MegaMenu" &&
            component.isSection).length === 1;
  const errors = [
    breadcrumbErrors,
    componentErrors,
    productCtaErrors,
  ].flat();

  return {
    breadcrumbs,
    components,
    productCTA,
    localnav,
    hasProfile,
    errors,
    unavEnabled,
  }
};
