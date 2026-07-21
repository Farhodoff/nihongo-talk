export const ADMIN_EMAILS = [
    'fsoyilov@gmail.com'
];

export const isAdminEmail = (email?: string | null): boolean => {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase().trim());
};
