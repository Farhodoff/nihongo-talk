export const SUPER_ADMIN_EMAIL = 'fsoyilov@gmail.com';

export const DEFAULT_ADMIN_EMAILS = [
    'fsoyilov@gmail.com',
    'fsoyilovv@gmail.com',
    'soyilovfarhod157@gmail.com',
    'ssoyilov7700@gmail.com',
    '220075f@jdu.uz'
];

// Check if user is Super Admin (fsoyilov@gmail.com)
export const isSuperAdmin = (email?: string | null): boolean => {
    if (!email) return false;
    const e = email.toLowerCase().trim();
    return e === SUPER_ADMIN_EMAIL;
};

// Check if user is Admin or Super Admin based on verified email or role
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
