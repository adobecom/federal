import './profile.css';
import { ParsedProfileData } from './types';
import { escapeHTML } from '../../Utils/Utils';

export const renderSignInButton = (signInLabel: string): string => {
  const escapedLabel = escapeHTML(signInLabel);
  return `
  <button 
    class="feds-signIn" 
    daa-ll="${escapedLabel}"
    data-signin-trigger
  >
    ${escapedLabel}
  </button>
`;
};

export const renderSignInWithDropdown = (
  signInLabel: string, 
  dropdownContent: string
): string => {
  const dropdownId = 'feds-signIn-dropdown';
  const escapedLabel = escapeHTML(signInLabel);
  
  return `
    <button 
      class="feds-signIn" 
      daa-ll="${escapedLabel}"
      aria-expanded="false"
      aria-haspopup="true"
      popovertarget="${dropdownId}"
    >
      ${escapedLabel}
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

export const processDropdownContent = (dropdownHTML: string, signInText: string | null): string => {
  if (!signInText) return dropdownHTML;
  
  // Replace sign-in anchor dropdown menu with button
  return dropdownHTML.replace(
    /<a[^>]*href="[^"]*\?sign-in=true"[^>]*>.*?<\/a>/,
    `<button class="feds-signIn" data-signin-trigger>${signInText}</button>`
  );
};

export const renderSignIn = (
  signInLabel: string,
  parsedProfileData: ParsedProfileData,
): string => {
  const { hasDropdown, dropdownHTML, signInText } = parsedProfileData;
  if (!hasDropdown) {
    return renderSignInButton(signInLabel);
  }
  
  const processedDropdown = processDropdownContent(dropdownHTML || '', signInText);
  return renderSignInWithDropdown(signInLabel, processedDropdown);
};
