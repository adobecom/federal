import type { ProfileData } from './types';
import { getMiloConfig } from '../../Utils/Utils';
import { RecoverableError } from '../../Error/Error';

export const fetchProfileData = async (): Promise<[ProfileData | null, Set<RecoverableError>]> => {
    const errors = new Set<RecoverableError>();
    try {
        // Safety check: IMS loaded?
        if (!window.adobeIMS) {
            errors.add(new RecoverableError('ProfileData: Adobe IMS not loaded'));
            return [null, errors];
        }

        // Get access token
        const accessToken = window.adobeIMS.getAccessToken();
        if (!accessToken?.token) {
            errors.add(new RecoverableError('ProfileData: No access token available'));
            return [null, errors];
        }

        // Get environment configuration
        const config = getMiloConfig();
        const adobeIO = config.env?.adobeIO;

        if (!adobeIO) {
            errors.add(new RecoverableError('ProfileData: Adobe IO hostname not configured'));
            return [null, errors];
        }

        // Fetch from Adobe IO profile endpoint and IMS profile concurrently
        const headers = new Headers({
            Authorization: `Bearer ${accessToken.token}`
        });

        const [response, imsProfile] = await Promise.all([
            fetch(`https://${adobeIO}/profile`, { headers }),
            window.adobeIMS.getProfile()
        ]);

        // Error handling
        if (response.status !== 200) {
            errors.add(new RecoverableError(`ProfileData: Failed to fetch profile data with status ${response.status}`));
            return [null, errors];
        }

        // Parse response
        const data = await response.json();
        const { sections, user } = data;

        if (!user?.avatar) {
            errors.add(new RecoverableError('ProfileData: Invalid response - missing avatar'));
            return [null, errors];
        }

        return [{
            avatar: user.avatar,
            displayName: imsProfile.displayName,
            email: imsProfile.email,
            sections: sections || {},
        }, errors];
    } catch (error) {
        errors.add(new RecoverableError('ProfileData: Exception fetching profile data'));
        return [null, errors];
    }
};

export const extractLocalMenu = (rawElem: string): string => {
    // Create temporary DOM to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = rawElem;

    // Find h5 element and get its parent (matches original logic)
    const h5Element = temp.querySelector('h5');
    const localMenu = h5Element?.parentElement;

    return localMenu ? localMenu.innerHTML : '';
};

export const truncateEmail = (email: string): string => {
    const maxChars = 12;
    const [username, domain] = email.split('@');

    if (!domain) return email; // Invalid email format

    const [domainName, ...tldParts] = domain.split('.');
    const tld = tldParts.join('.');

    const truncatedUsername = username.length > maxChars
        ? `${username.slice(0, maxChars)}…`
        : username;

    const truncatedDomain = domainName.length > maxChars
        ? `${domainName.slice(0, maxChars)}…`
        : domainName;

    return `${truncatedUsername}@${truncatedDomain}.${tld}`;
};

export const getLanguage = (): string => {
    try {
        const config = getMiloConfig();
        const ietf = config.locale?.ietf || 'en-US';

        // Handle non-standard locales
        const nonStandardMap: Record<string, string> = { 'no-NO': 'nb' };
        if (nonStandardMap[ietf]) {
            return nonStandardMap[ietf];
        }

        // Extract language from IETF tag (e.g., 'en-US' -> 'en')
        return ietf.split('-')[0];
    } catch {
        return 'en';
    }
};

export const buildAccountUrl = (path: string = ''): string => {
    try {
        const config = getMiloConfig();
        const baseUrl = config.env?.account || 'account.adobe.com';
        return `https://${baseUrl}${path}`;
    } catch {
        return `https://account.adobe.com${path}`;
    }
};

export const buildAdminConsoleUrl = (path: string = ''): string => {
    try {
        const config = getMiloConfig();
        const baseUrl = config.env?.adminconsole || 'adminconsole.adobe.com';
        return `https://${baseUrl}${path}`;
    } catch {
        return `https://adminconsole.adobe.com${path}`;
    }
};
