export const SUPER_ADMIN_EMAIL = 'fsoyilov@gmail.com';

export const DEFAULT_ADMIN_EMAILS = [
    'fsoyilov@gmail.com',
    'fsoyilovv@gmail.com',
    'soyilovfarhod157@gmail.com'
];

const ADMIN_STORAGE_KEY = 'kaizen_dynamic_admins';

// Helper to get dynamically assigned admins from localStorage
export const getDynamicAdminEmails = (): string[] => {
    try {
        const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error('Error reading dynamic admins:', e);
    }
    return [];
};

// Check if user is Super Admin (fsoyilov@gmail.com)
export const isSuperAdmin = (email?: string | null): boolean => {
    if (!email) return false;
    return email.toLowerCase().trim() === SUPER_ADMIN_EMAIL;
};

// Check if user is Admin or Super Admin
export const isAdminEmail = (email?: string | null): boolean => {
    if (!email) return false;
    const e = email.toLowerCase().trim();
    if (e === SUPER_ADMIN_EMAIL) return true;
    if (DEFAULT_ADMIN_EMAILS.includes(e)) return true;
    
    const dynamicAdmins = getDynamicAdminEmails();
    return dynamicAdmins.includes(e);
};

// Super Admin action: Grant Admin role to user email
export const grantAdminRole = (email: string): void => {
    if (!email) return;
    const cleanEmail = email.toLowerCase().trim();
    const current = getDynamicAdminEmails();
    if (!current.includes(cleanEmail)) {
        current.push(cleanEmail);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(current));
    }
};

// Super Admin action: Revoke Admin role from user email
export const revokeAdminRole = (email: string): void => {
    if (!email) return;
    const cleanEmail = email.toLowerCase().trim();
    const current = getDynamicAdminEmails().filter(e => e !== cleanEmail);
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(current));
};
