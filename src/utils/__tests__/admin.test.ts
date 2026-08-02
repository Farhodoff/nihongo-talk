import { describe, it, expect } from 'vitest';
import { isAdminEmail, ADMIN_EMAILS } from '../admin';

describe('Admin Email Security Tests', () => {
    it('returns false for null or undefined email', () => {
        expect(isAdminEmail(null)).toBe(false);
        expect(isAdminEmail(undefined)).toBe(false);
        expect(isAdminEmail('')).toBe(false);
    });

    it('returns false for non-admin user emails', () => {
        expect(isAdminEmail('guest@example.com')).toBe(false);
        expect(isAdminEmail('user@gmail.com')).toBe(false);
        expect(isAdminEmail('attacker_soyilov@evil.com')).toBe(false);
    });

    it('returns true strictly for configured admin emails', () => {
        ADMIN_EMAILS.forEach(email => {
            expect(isAdminEmail(email)).toBe(true);
            expect(isAdminEmail(email.toUpperCase())).toBe(true);
            expect(isAdminEmail(`  ${email}  `)).toBe(true);
        });
    });
});
