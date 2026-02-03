export type ProfileData = {
  /** Whether the profile contains a dropdown menu */
  hasDropdown: boolean;
  /** HTML content of the dropdown (if exists) */
  dropdownHTML: string | null;
};

export const parseProfileHTML = (rawHTML: string): ProfileData => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = rawHTML;
  
  // Look for second child div - indicates dropdown menu exists
  const dropdownElem = tempDiv.querySelector(':scope > div > div:nth-child(2)');
  
  return {
    hasDropdown: dropdownElem !== null,
    dropdownHTML: dropdownElem?.innerHTML ?? null,
  };
};

export const findSignInAnchor = (container: HTMLElement): HTMLAnchorElement | null => {
  return container.querySelector('[href$="?sign-in=true"]');
};
