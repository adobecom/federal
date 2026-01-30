import type { RenderSignedInProfileParams } from './types';
import {
    truncateEmail,
    getLanguage,
    buildAccountUrl,
    buildAdminConsoleUrl
} from './ProfileData';
import './profile.css';

export const renderSignedInProfile = (params: RenderSignedInProfileParams): string => {
    const {
        avatar,
        displayName,
        email,
        sections,
        placeholders,
        localMenuHTML,
    } = params;

    const lang = getLanguage();
    const truncatedEmail = truncateEmail(email);

    // Profile button with avatar
    const buttonHTML = `
    <button 
      class="feds-profile-button" 
      popovertarget="feds-profile-menu"
      aria-label="${displayName}"
      daa-ll="Account">
      <img 
        class="feds-profile-img" 
        src="${avatar}" 
        alt="${placeholders.get('profile-avatar') || 'Profile avatar'}">
    </button>
  `;

    // Profile dropdown menu
    const dropdownHTML = `
    <div id="feds-profile-menu" class="feds-profile-menu" popover>
      <a 
        href="${buildAccountUrl(`?lang=${lang}`)}" 
        class="feds-profile-header"
        daa-ll="${placeholders.get('view-account') || 'View Account'}"
        aria-label="${placeholders.get('view-account') || 'View Account'}">
        <img 
          class="feds-profile-img" 
          src="${avatar}" 
          tabindex="0"
          alt="${placeholders.get('profile-avatar') || 'Profile avatar'}"
          data-profile-url="${buildAccountUrl(`profile?lang=${lang}`)}">
        <div class="feds-profile-details">
          <p class="feds-profile-name">${displayName}</p>
          <p class="feds-profile-email">${truncatedEmail}</p>
          <p class="feds-profile-account">${placeholders.get('view-account') || 'View Account'}</p>
        </div>
      </a>
      
      ${localMenuHTML ? `<div class="feds-local-menu">${localMenuHTML}</div>` : ''}
      
      <ul class="feds-profile-actions">
        ${sections?.manage?.items?.team?.id
            ? `<li><a class="feds-profile-action" href="${buildAdminConsoleUrl('/team')}">${placeholders.get('manage-teams') || 'Manage Teams'}</a></li>`
            : ''}
        ${sections?.manage?.items?.enterprise?.id
            ? `<li><a class="feds-profile-action" href="${buildAdminConsoleUrl('')}">${placeholders.get('manage-enterprise') || 'Manage Enterprise'}</a></li>`
            : ''}
        <li>
          <a href="#" class="feds-profile-action" data-signout-trigger daa-ll="${placeholders.get('sign-out') || 'Sign Out'}">
            ${placeholders.get('sign-out') || 'Sign Out'}
          </a>
        </li>
      </ul>
    </div>
  `;

    return buttonHTML + dropdownHTML;
};
