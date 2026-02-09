import type { RenderSignedInProfileParams } from './types';
import {
    truncateEmail,
    getLanguage,
    buildAccountUrl,
    buildAdminConsoleUrl
} from './ProfileData';
import { escapeHTML } from '../../Utils/Utils';
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
    
    // Escape user-controlled data
    const escapedAvatar = escapeHTML(avatar);
    const escapedDisplayName = escapeHTML(displayName);
    const escapedEmail = escapeHTML(truncatedEmail);
    const escapedAvatarAlt = escapeHTML(placeholders.get('profile-avatar') || 'Profile avatar');

    // Profile button with avatar
    const buttonHTML = `
    <button 
      class="feds-profile-button" 
      popovertarget="feds-profile-menu"
      aria-label="${escapedDisplayName}"
      daa-ll="Account">
      <img 
        class="feds-profile-img" 
        src="${escapedAvatar}" 
        alt="${escapedAvatarAlt}">
    </button>
  `;

    const escapedViewAccount = escapeHTML(placeholders.get('view-account') || 'View Account');
    const escapedProfileUrl = escapeHTML(buildAccountUrl(`profile?lang=${lang}`));
    const escapedAccountUrl = escapeHTML(buildAccountUrl(`?lang=${lang}`));

    // Profile dropdown menu
    const dropdownHTML = `
    <div id="feds-profile-menu" class="feds-profile-menu" popover>
      <a 
        href="${escapedAccountUrl}" 
        class="feds-profile-header"
        daa-ll="${escapedViewAccount}"
        aria-label="${escapedViewAccount}">
        <img 
          class="feds-profile-img" 
          src="${escapedAvatar}" 
          tabindex="0"
          alt="${escapedAvatarAlt}"
          data-profile-url="${escapedProfileUrl}">
        <div class="feds-profile-details">
          <p class="feds-profile-name">${escapedDisplayName}</p>
          <p class="feds-profile-email">${escapedEmail}</p>
          <p class="feds-profile-account">${escapedViewAccount}</p>
        </div>
      </a>
      
      ${localMenuHTML ? `<div class="feds-local-menu">${localMenuHTML}</div>` : ''}
      
      <ul class="feds-profile-actions">
        ${sections?.manage?.items?.team?.id
            ? `<li><a class="feds-profile-action" href="${escapeHTML(buildAdminConsoleUrl('/team'))}">${escapeHTML(placeholders.get('manage-teams') || 'Manage Teams')}</a></li>`
            : ''}
        ${sections?.manage?.items?.enterprise?.id
            ? `<li><a class="feds-profile-action" href="${escapeHTML(buildAdminConsoleUrl(''))}">${escapeHTML(placeholders.get('manage-enterprise') || 'Manage Enterprise')}</a></li>`
            : ''}
        <li>
          <a href="#" class="feds-profile-action" data-signout-trigger daa-ll="${escapeHTML(placeholders.get('sign-out') || 'Sign Out')}">
            ${escapeHTML(placeholders.get('sign-out') || 'Sign Out')}
          </a>
        </li>
      </ul>
    </div>
  `;

    return buttonHTML + dropdownHTML;
};
