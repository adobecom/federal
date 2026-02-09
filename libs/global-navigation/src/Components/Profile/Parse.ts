import type { ParsedProfileData } from './types';
import { escapeHTML } from '../../Utils/Utils';

export const parseProfileHTML = (rawHTML: string): ParsedProfileData => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = rawHTML;
  
  // Look for second child div - indicates dropdown menu exists
  const dropdownElem = tempDiv.querySelector(':scope > div > div:nth-child(2)');
  
  // Extract sign-in anchor text if it exists in dropdown
  const signInAnchor = dropdownElem?.querySelector('[href$="?sign-in=true"]');
  const rawText = signInAnchor?.textContent?.trim() ?? null;
  
  return {
    hasDropdown: dropdownElem !== null,
    dropdownHTML: dropdownElem?.innerHTML ?? null,
    signInText: rawText ? escapeHTML(rawText) : null,
  };
};