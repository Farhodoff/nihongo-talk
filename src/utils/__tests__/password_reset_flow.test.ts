import { describe, it, expect, vi, beforeEach } from 'vitest';
import { supabase } from '../../lib/supabase';

describe('Password Reset Flow Lifecycle & Security Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('1. Request Reset Password Email', () => {
    it('validates email format before triggering Supabase resetPasswordForEmail', async () => {
      const resetPasswordForEmailSpy = vi
        .spyOn(supabase.auth, 'resetPasswordForEmail')
        .mockResolvedValue({
          data: {},
          error: null,
        } as any);

      const handleRequestReset = async (rawEmail: string) => {
        const cleanEmail = rawEmail.trim();
        if (!cleanEmail || !cleanEmail.includes('@')) {
          throw new Error("Iltimos, to'g'ri email manzilini kiriting");
        }
        return await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: 'https://kaiwa.live/auth/reset-password',
        });
      };

      // Test empty or whitespace email
      await expect(handleRequestReset('   ')).rejects.toThrow(
        "Iltimos, to'g'ri email manzilini kiriting",
      );
      expect(resetPasswordForEmailSpy).not.toHaveBeenCalled();

      // Test email without @
      await expect(handleRequestReset('invalid-email-no-at')).rejects.toThrow(
        "Iltimos, to'g'ri email manzilini kiriting",
      );
      expect(resetPasswordForEmailSpy).not.toHaveBeenCalled();

      // Test valid email with whitespace padding
      const result = await handleRequestReset('   student@kaiwa.live   ');
      expect(result.error).toBeNull();
      expect(resetPasswordForEmailSpy).toHaveBeenCalledWith('student@kaiwa.live', {
        redirectTo: 'https://kaiwa.live/auth/reset-password',
      });
    });

    it('properly surfaces Supabase rate limit or provider errors when requesting reset', async () => {
      vi.spyOn(supabase.auth, 'resetPasswordForEmail').mockResolvedValue({
        data: null,
        error: { message: 'Over email rate limit', name: 'AuthApiError', status: 429 },
      } as any);

      const { error } = await supabase.auth.resetPasswordForEmail('student@kaiwa.live', {
        redirectTo: 'https://kaiwa.live/auth/reset-password',
      });

      expect(error).not.toBeNull();
      expect(error?.message).toBe('Over email rate limit');
    });
  });

  describe('2. Recovery Mode Detection from URL and Auth Events', () => {
    const detectResetPasswordMode = (pathname: string, hash: string, search: string) => {
      return (
        pathname.includes('reset-password') ||
        hash.includes('type=recovery') ||
        search.includes('type=recovery')
      );
    };

    it('detects recovery mode from path /auth/reset-password', () => {
      expect(detectResetPasswordMode('/auth/reset-password', '', '')).toBe(true);
    });

    it('detects recovery mode from path /reset-password', () => {
      expect(detectResetPasswordMode('/reset-password', '', '')).toBe(true);
    });

    it('detects recovery mode from URL hash #type=recovery', () => {
      expect(
        detectResetPasswordMode(
          '/auth',
          '#access_token=token&type=recovery&refresh_token=refresh',
          '',
        ),
      ).toBe(true);
    });

    it('detects recovery mode from URL search query ?type=recovery', () => {
      expect(detectResetPasswordMode('/auth', '', '?type=recovery&code=supabase-code')).toBe(true);
    });

    it('does NOT trigger recovery mode on standard login or registration pages', () => {
      expect(detectResetPasswordMode('/login', '', '')).toBe(false);
      expect(detectResetPasswordMode('/register', '', '')).toBe(false);
      expect(detectResetPasswordMode('/auth', '', '?mode=login')).toBe(false);
    });
  });

  describe('3. New Password Submission & Validation', () => {
    const handleNewPasswordSubmission = async (password: string, confirmPassword: string) => {
      if (!password || password.length < 6) {
        throw new Error("Yangi parol kamida 6 ta belgidan iborat bo'lishi kerak");
      }
      if (password !== confirmPassword) {
        throw new Error('Kiritilgan parollar bir-biriga mos kelmadi');
      }
      return await supabase.auth.updateUser({ password });
    };

    it('rejects passwords shorter than 6 characters', async () => {
      const updateUserSpy = vi.spyOn(supabase.auth, 'updateUser');

      await expect(handleNewPasswordSubmission('12345', '12345')).rejects.toThrow(
        "Yangi parol kamida 6 ta belgidan iborat bo'lishi kerak",
      );
      expect(updateUserSpy).not.toHaveBeenCalled();
    });

    it('rejects mismatched password and confirmPassword', async () => {
      const updateUserSpy = vi.spyOn(supabase.auth, 'updateUser');

      await expect(handleNewPasswordSubmission('Secret123!', 'Secret123?')).rejects.toThrow(
        'Kiritilgan parollar bir-biriga mos kelmadi',
      );
      expect(updateUserSpy).not.toHaveBeenCalled();
    });

    it('successfully updates user password with valid matching input', async () => {
      const updateUserSpy = vi.spyOn(supabase.auth, 'updateUser').mockResolvedValue({
        data: { user: { id: 'usr-1', email: 'student@kaiwa.live' } as any },
        error: null,
      } as any);

      const result = await handleNewPasswordSubmission('NewSecurePass2026!', 'NewSecurePass2026!');
      expect(updateUserSpy).toHaveBeenCalledWith({ password: 'NewSecurePass2026!' });
      expect(result.error).toBeNull();
      expect(result.data.user?.email).toBe('student@kaiwa.live');
    });

    it('handles Supabase password update errors gracefully', async () => {
      vi.spyOn(supabase.auth, 'updateUser').mockResolvedValue({
        data: { user: null },
        error: {
          message: 'Auth session missing or expired',
          name: 'AuthSessionMissingError',
          status: 400,
        },
      } as any);

      const result = await handleNewPasswordSubmission('NewSecurePass2026!', 'NewSecurePass2026!');
      expect(result.error).not.toBeNull();
      expect(result.error?.message).toBe('Auth session missing or expired');
    });
  });
});
