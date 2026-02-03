/**
 * Profile type determines which profile implementation to use
 */
export type ProfileType = 'Unav' | 'FedsProfile' | 'Empty';

/**
 * Team or Enterprise management section
 */
export type ManagementItem = {
    id: string;
};

/**
 * Management sections returned from Adobe IO profile API
 */
export type ProfileSections = {
    manage?: {
        items?: {
            team?: ManagementItem;
            enterprise?: ManagementItem;
        };
    };
};

/**
 * Complete profile data from Adobe IO API
 */
export type ProfileData = {
    /** URL to user's avatar image */
    avatar: string;
    /** User's display name */
    displayName: string;
    /** User's email address */
    email: string;
    /** Management sections (team/enterprise access) */
    sections: ProfileSections;
};

/**
 * Parameters for rendering signed-in profile component
 */
export type RenderSignedInProfileParams = {
    /** URL to user's avatar image */
    avatar: string;
    /** User's display name */
    displayName: string;
    /** User's email address */
    email: string;
    /** Management sections for conditional rendering */
    sections: ProfileSections;
    /** Localized placeholder strings */
    placeholders: Map<string, string>;
    /** HTML content for local menu section */
    localMenuHTML: string;
};
