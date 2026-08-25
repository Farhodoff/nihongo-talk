export const SUPER_ADMIN_EMAIL = 'fsoyilov@gmail.com';

export const SUPER_ADMIN_EMAILS = [
    SUPER_ADMIN_EMAIL
];

export const DEFAULT_ADMIN_EMAILS = [
    'fsoyilov@gmail.com'
];

// Check if user is Super Admin (strictly fsoyilov@gmail.com)
export const isSuperAdmin = (email?: string | null): boolean => {
    if (!email) return false;
    const e = email.toLowerCase().trim();
    return e === SUPER_ADMIN_EMAIL;
};

// English / IELTS track is currently in private preview and only available to Super Admin
export const isEnglishTrackAllowed = (email?: string | null): boolean => {
    return isSuperAdmin(email);
};

// Check if user is Admin or Super Admin (default admin strictly fsoyilov@gmail.com)
export const isAdminEmail = (email?: string | null, role?: string | null): boolean => {
    if (role === 'admin' || role === 'superadmin') return true;
    if (!email) return false;
    const e = email.toLowerCase().trim();
    if (e === SUPER_ADMIN_EMAIL) return true;
    if (DEFAULT_ADMIN_EMAILS.includes(e)) return true;
    return false;
};

// Helper for user object
export const isUserAdmin = (user?: { email?: string | null; role?: string | null } | null): boolean => {
    if (!user) return false;
    return isAdminEmail(user.email, user.role);
};

// Dynamic role grant placeholder (delegates to backend DB role)
export const grantAdminRole = async (email: string): Promise<void> => {
    if (!email) return;
    console.info(`[Admin] Admin role requested for ${email}`);
};

export const revokeAdminRole = async (email: string): Promise<void> => {
    if (!email) return;
    console.info(`[Admin] Admin role revoke requested for ${email}`);
};

