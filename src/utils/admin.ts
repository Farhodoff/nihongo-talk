export const SUPER_ADMIN_EMAIL = 'fsoyilov@gmail.com';

export const SUPER_ADMIN_EMAILS = [
    'fsoyilov@gmail.com'
];

export const DEFAULT_ADMIN_EMAILS = [
    'fsoyilov@gmail.com',
    'admin@nihongo-talk.jp'
];

// Check if user is Super Admin
export const isSuperAdmin = (email?: string | null, role?: string | null): boolean => {
    if (role === 'superadmin') return true;
    if (!email) return false;
    const e = email.toLowerCase().trim();
    return SUPER_ADMIN_EMAILS.includes(e);
};

// English / IELTS track is currently in private preview and only available to Super Admin
export const isEnglishTrackAllowed = (email?: string | null): boolean => {
    return isSuperAdmin(email);
};

// Check if user is Admin or Super Admin
export const isAdminEmail = (email?: string | null, role?: string | null): boolean => {
    if (role === 'admin' || role === 'superadmin') return true;
    if (!email) return false;
    const e = email.toLowerCase().trim();
    if (DEFAULT_ADMIN_EMAILS.includes(e)) return true;
    return false;
};

// Helper for user object
export const isUserAdmin = (user?: any): boolean => {
    if (!user) return false;
    const role = user.role || user.user_metadata?.role || user.app_metadata?.role;
    return isAdminEmail(user.email, role);
};

// Dynamic role grant — updates profiles.role in Supabase DB
export const grantAdminRole = async (email: string): Promise<boolean> => {
    if (!email) return false;
    try {
        const { supabase } = await import('../lib/supabase');
        const { error } = await supabase
            .from('profiles')
            .update({ role: 'admin', updated_at: new Date().toISOString() })
            .eq('email', email.toLowerCase().trim());
        if (error) {
            console.warn('[Admin] grantAdminRole DB error:', error.message);
            return false;
        }
        console.info(`[Admin] Admin role granted to ${email} in DB`);
        return true;
    } catch (e: any) {
        console.warn('[Admin] grantAdminRole exception:', e?.message);
        return false;
    }
};

export const revokeAdminRole = async (email: string): Promise<boolean> => {
    if (!email) return false;
    // Never allow revoking superadmin
    if (isSuperAdmin(email)) {
        console.warn('[Admin] Cannot revoke superadmin role');
        return false;
    }
    try {
        const { supabase } = await import('../lib/supabase');
        const { error } = await supabase
            .from('profiles')
            .update({ role: 'user', updated_at: new Date().toISOString() })
            .eq('email', email.toLowerCase().trim());
        if (error) {
            console.warn('[Admin] revokeAdminRole DB error:', error.message);
            return false;
        }
        console.info(`[Admin] Admin role revoked from ${email} in DB`);
        return true;
    } catch (e: any) {
        console.warn('[Admin] revokeAdminRole exception:', e?.message);
        return false;
    }
};

