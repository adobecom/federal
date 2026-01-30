/**
 * Profile Event Handlers
 */
export const attachProfileEvents = (container: HTMLElement, location: Location = window.location): void => {
    const dropdown = container.querySelector('#feds-profile-menu') as HTMLElement;
    const signOutLink = container.querySelector('[data-signout-trigger]') as HTMLAnchorElement;
    const avatarImg = dropdown?.querySelector('[data-profile-url]') as HTMLImageElement;

    // Sign out handler
    if (signOutLink) {
        signOutLink.addEventListener('click', (e) => {
            e.preventDefault();

            // Dispatch custom event for analytics/cleanup
            window.dispatchEvent(new Event('feds:signOut'));

            // Sign out via IMS
            if (window?.adobeIMS) {
                window?.adobeIMS?.signOut();
            } else {
                // TODO: Implement Lana Logic for sign out if IMS is not available
                // console.error('ProfileEvents: Adobe IMS not available for sign out');
            }
        });
    }

    // Avatar click handler - navigate to profile page
    if (avatarImg) {
        avatarImg.addEventListener('click', (e) => {
            e.preventDefault();
            const url = avatarImg.getAttribute('data-profile-url');
            if (url) {
                location.assign(url);
            }
        });
    }
};
