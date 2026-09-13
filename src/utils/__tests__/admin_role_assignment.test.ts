import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  isAdminEmail,
  isSuperAdmin,
  isUserAdmin,
  grantAdminRole,
  revokeAdminRole,
  getAdminAuditLogs,
  saveLocalAuditLog,
  getLocalAuditLogs,
  SUPER_ADMIN_EMAIL,
  DEFAULT_ADMIN_EMAILS,
} from '../admin';

// Mock supabase client
vi.mock('../../lib/supabase', () => {
  const rpcMock = vi.fn();
  const fromMock = vi.fn();
  return {
    supabase: {
      rpc: rpcMock,
      from: fromMock,
    },
  };
});

describe('Admin Role Assignment & Authorization Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  });

  describe('1. Role & Email Gatekeeping', () => {
    it('recognizes superadmin fsoyilov@gmail.com regardless of case or whitespace', () => {
      expect(SUPER_ADMIN_EMAIL).toBe('fsoyilov@gmail.com');
      expect(DEFAULT_ADMIN_EMAILS).toContain('fsoyilov@gmail.com');
      expect(isSuperAdmin('fsoyilov@gmail.com')).toBe(true);
      expect(isSuperAdmin('FSOYILOV@GMAIL.COM')).toBe(true);
      expect(isSuperAdmin('  fsoyilov@gmail.com  ')).toBe(true);
      expect(isAdminEmail('fsoyilov@gmail.com')).toBe(true);
    });

    it('rejects regular users from superadmin privileges', () => {
      expect(isSuperAdmin('student@example.com')).toBe(false);
      expect(isSuperAdmin('someone_else@study.com', 'admin')).toBe(false);
      expect(isSuperAdmin('student@example.com', 'authenticated')).toBe(false);
    });

    it('recognizes appointed admin by role even when email is not hardcoded', () => {
      expect(isAdminEmail('new_admin@study.com', 'admin')).toBe(true);
      expect(isAdminEmail('new_admin@study.com', 'superadmin')).toBe(true);
      expect(isAdminEmail('new_admin@study.com', 'user')).toBe(false);
    });

    it('handles Supabase auth "authenticated" role gracefully without masking user_metadata or email check', () => {
      // Supabase sets role='authenticated' by default on all logged in users
      expect(isAdminEmail('fsoyilov@gmail.com', 'authenticated')).toBe(true);
      expect(isAdminEmail('student@gmail.com', 'authenticated')).toBe(false);

      // isUserAdmin should check user_metadata or app_metadata when raw role is 'authenticated'
      const userWithMetaRole = {
        email: 'appointed@domain.com',
        role: 'authenticated',
        user_metadata: { role: 'admin' },
      };
      expect(isUserAdmin(userWithMetaRole)).toBe(true);

      const userWithAppMetaRole = {
        email: 'appointed2@domain.com',
        role: 'authenticated',
        app_metadata: { role: 'admin' },
      };
      expect(isUserAdmin(userWithAppMetaRole)).toBe(true);

      const normalStudent = {
        email: 'student@domain.com',
        role: 'authenticated',
        user_metadata: {},
      };
      expect(isUserAdmin(normalStudent)).toBe(false);
    });
  });

  describe('2. grantAdminRole logic with attribution and audit logs', () => {
    it('attempts set_user_admin_role RPC first and saves audit trail on success', async () => {
      const { supabase } = await import('../../lib/supabase');
      (supabase.rpc as any).mockResolvedValueOnce({
        data: { success: true, user_id: 'uuid-123', role: 'admin' },
        error: null,
      });

      const success = await grantAdminRole('target@domain.com', 'uuid-123', 'fsoyilov@gmail.com');
      expect(success).toBe(true);
      expect(supabase.rpc).toHaveBeenCalledWith('set_user_admin_role', {
        target_user_id: 'uuid-123',
        target_email: 'target@domain.com',
        make_admin: true,
        assigned_by_email: 'fsoyilov@gmail.com',
      });

      const localLogs = getLocalAuditLogs();
      expect(localLogs.length).toBeGreaterThan(0);
      expect(localLogs[0].action).toBe('GRANT_ADMIN');
      expect(localLogs[0].target_email).toBe('target@domain.com');
      expect(localLogs[0].performed_by_email).toBe('fsoyilov@gmail.com');
    });

    it('falls back to direct profiles table update/upsert if RPC fails', async () => {
      const { supabase } = await import('../../lib/supabase');
      (supabase.rpc as any).mockResolvedValueOnce({
        data: null,
        error: { message: 'function set_user_admin_role does not exist' },
      });

      const selectMock = vi.fn().mockResolvedValueOnce({
        data: [{ id: 'uuid-456', role: 'admin' }],
        error: null,
      });
      const eqMock = vi.fn().mockReturnValue({ select: selectMock });
      const updateMock = vi.fn().mockReturnValue({ eq: eqMock });
      (supabase.from as any).mockReturnValue({ update: updateMock });

      const success = await grantAdminRole('fallback@domain.com', 'uuid-456', 'super@admin.com');
      expect(success).toBe(true);
      expect(supabase.from).toHaveBeenCalledWith('profiles');
      expect(updateMock).toHaveBeenCalledWith(
        expect.objectContaining({
          role: 'admin',
          admin_assigned_by: 'super@admin.com',
        }),
      );
    });
  });

  describe('3. revokeAdminRole logic', () => {
    it('strictly prevents revoking superadmin role', async () => {
      const { supabase } = await import('../../lib/supabase');
      const success = await revokeAdminRole(SUPER_ADMIN_EMAIL);
      expect(success).toBe(false);
      expect(supabase.rpc).not.toHaveBeenCalled();
    });

    it('successfully revokes admin role from appointed admin via RPC and records audit log', async () => {
      const { supabase } = await import('../../lib/supabase');
      (supabase.rpc as any).mockResolvedValueOnce({
        data: { success: true, user_id: 'uuid-789', role: 'user' },
        error: null,
      });

      const success = await revokeAdminRole(
        'appointed@domain.com',
        'uuid-789',
        'fsoyilov@gmail.com',
      );
      expect(success).toBe(true);
      expect(supabase.rpc).toHaveBeenCalledWith('set_user_admin_role', {
        target_user_id: 'uuid-789',
        target_email: 'appointed@domain.com',
        make_admin: false,
        assigned_by_email: 'fsoyilov@gmail.com',
      });

      const logs = getLocalAuditLogs();
      expect(logs.length).toBeGreaterThan(0);
      expect(logs[0].action).toBe('REVOKE_ADMIN');
      expect(logs[0].target_email).toBe('appointed@domain.com');
    });
  });

  describe('4. getAdminAuditLogs logic', () => {
    it('fetches audit logs via RPC or falls back to local storage seamlessly', async () => {
      const { supabase } = await import('../../lib/supabase');
      (supabase.rpc as any).mockResolvedValueOnce({
        data: [
          {
            id: 'audit-test-1',
            action: 'GRANT_ADMIN',
            target_user_id: 'uuid-1',
            target_email: 'newadmin@nihongo.jp',
            performed_by_email: 'fsoyilov@gmail.com',
            created_at: '2026-09-13T20:00:00.000Z',
          },
        ],
        error: null,
      });

      const logs = await getAdminAuditLogs();
      expect(logs.length).toBe(1);
      expect(logs[0].target_email).toBe('newadmin@nihongo.jp');
      expect(logs[0].action).toBe('GRANT_ADMIN');
    });

    it('persists and retrieves entries via saveLocalAuditLog', () => {
      saveLocalAuditLog({
        id: 'manual-audit-1',
        action: 'GRANT_ADMIN',
        target_email: 'manual@test.com',
        performed_by_email: 'fsoyilov@gmail.com',
        created_at: new Date().toISOString(),
      });

      const logs = getLocalAuditLogs();
      expect(logs.some((l) => l.id === 'manual-audit-1')).toBe(true);
    });
  });
});
