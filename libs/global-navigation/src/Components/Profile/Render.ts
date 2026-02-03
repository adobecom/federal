import './profile.css';
import { findSignInAnchor } from './Parse';

export const renderSignInButton = (signInLabel: string): string => `
  <button 
    class="feds-signIn" 
    daa-ll="${signInLabel}"
    data-signin-trigger
  >
    ${signInLabel}
  </button>
`;

export const renderSignInWithDropdown = (
  signInLabel: string, 
  dropdownContent: string
): string => {
  const dropdownId = 'feds-signIn-dropdown';
  
  return `
    <button 
      class="feds-signIn" 
      daa-ll="${signInLabel}"
      aria-expanded="false"
      aria-haspopup="true"
      popovertarget="${dropdownId}"
    >
      ${signInLabel}
    </button>
    <div 
      id="${dropdownId}" 
      popover 
      class="feds-signIn-dropdown"
    >
      ${dropdownContent}
    </div>
  `;
};

export const processDropdownContent = (dropdownHTML: string): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = dropdownHTML;
  
  const signInAnchor = findSignInAnchor(tempDiv);
  if (signInAnchor) {
    const signInText = signInAnchor.textContent || '';
    const buttonHTML = `<button class="feds-signIn" data-signin-trigger>${signInText}</button>`;
    signInAnchor.outerHTML = buttonHTML;
  }
  
  return tempDiv.innerHTML;
};

export const renderSignIn = (
  signInLabel: string,
  hasDropdown: boolean,
  dropdownHTML: string | null
): string => {
  if (!hasDropdown) {
    return renderSignInButton(signInLabel);
  }
  
  const processedDropdown = processDropdownContent(dropdownHTML || '');
  return renderSignInWithDropdown(signInLabel, processedDropdown);
};
