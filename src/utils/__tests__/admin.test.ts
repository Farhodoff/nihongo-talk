import { describe, it, expect } from 'vitest';
import { isAdminEmail, isSuperAdmin, isEnglishTrackAllowed, DEFAULT_ADMIN_EMAILS, SUPER_ADMIN_EMAILS } from '../admin';

describe('Admin Email Security & English Track Gating Tests', () => {
    it('returns false for null or undefined email', () => {
        expect(isAdminEmail(null)).toBe(false);
        expect(isAdminEmail(undefined)).toBe(false);
        expect(isAdminEmail('')).toBe(false);
        expect(isSuperAdmin(null)).toBe(false);
        expect(isEnglishTrackAllowed(null)).toBe(false);
    });

    it('returns false for non-admin user emails', () => {
        expect(isAdminEmail('guest@example.com')).toBe(false);
        expect(isAdminEmail('user@gmail.com')).toBe(false);
        expect(isAdminEmail('attacker_soyilov@evil.com')).toBe(false);
        expect(isSuperAdmin('regular_student@gmail.com')).toBe(false);
        expect(isEnglishTrackAllowed('regular_student@gmail.com')).toBe(false);
    });

    it('returns true strictly for configured admin emails', () => {
        DEFAULT_ADMIN_EMAILS.forEach(email => {
            expect(isAdminEmail(email)).toBe(true);
            expect(isAdminEmail(email.toUpperCase())).toBe(true);
            expect(isAdminEmail(`  ${email}  `)).toBe(true);
        });
    });

    it('identifies super admin strictly as fsoyilov@gmail.com and grants English track access exclusively', () => {
        expect(SUPER_ADMIN_EMAILS).toEqual(['fsoyilov@gmail.com']);
        expect(isSuperAdmin('fsoyilov@gmail.com')).toBe(true);
        expect(isSuperAdmin('FSOYILOV@GMAIL.COM')).toBe(true);
        expect(isSuperAdmin('  fsoyilov@gmail.com  ')).toBe(true);
        expect(isEnglishTrackAllowed('fsoyilov@gmail.com')).toBe(true);

        // Removed aliases must NOT be super admins
        expect(isSuperAdmin('fsayilov.ml@gmail.com')).toBe(false);
        expect(isSuperAdmin('f.sayilov.ml@gmail.com')).toBe(false);
        expect(isSuperAdmin('fsoyilov.ml@gmail.com')).toBe(false);
        expect(isEnglishTrackAllowed('fsayilov.ml@gmail.com')).toBe(false);
        expect(isEnglishTrackAllowed('f.sayilov.ml@gmail.com')).toBe(false);

        // Non-super admin cannot access English track
        expect(isEnglishTrackAllowed('student@gmail.com')).toBe(false);
        expect(isEnglishTrackAllowed('john.doe@gmail.com')).toBe(false);
    });
});
