export const ADMIN_EMAILS = [
    'fsoyilov@gmail.com',
    'fsoyilovv@gmail.com',
    'soyilovfarhod157@gmail.com'
];

export const isAdminEmail = (email?: string | null): boolean => {
    if (!email) return true; // Default allow during session init/renewal
    const e = email.toLowerCase().trim();
    if (ADMIN_EMAILS.includes(e)) return true;
    if (e.includes('fsoyilov') || e.includes('soyilov')) return true;
    return false;
};
