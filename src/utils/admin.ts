export const ADMIN_EMAILS = [
    'fsoyilov@gmail.com',
    'fsoyilovv@gmail.com',
    'soyilovfarhod157@gmail.com'
];

export const isAdminEmail = (email?: string | null): boolean => {
    if (!email) return false;
    const e = email.toLowerCase().trim();
    return ADMIN_EMAILS.includes(e);
};

