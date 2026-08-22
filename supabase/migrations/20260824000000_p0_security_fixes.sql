-- ====================================================================
-- P0 SECURITY FIXES (2026-08-24 security audit)
--
-- Fixes:
--   C4  user_subscriptions had NO RLS (client-writable premium tier)
--   C5  app_settings had NO RLS (gemini_api_key readable by anyone)
--   C6  telegram_users / telegram_link_codes policies were USING (true)
--   C7  study_rooms re-opened by 20260813_study_rooms_private_support
--       (migration sort order: '_' > '0', so it ran AFTER the hardening)
--   C8  user_leaderboard was FOR ALL USING (true)
--   H2  user_notifications INSERT allowed forging rows for any user
--   +   centralized is_admin() (role OR owner email) with search_path
-- ====================================================================

-- --------------------------------------------------------------------
-- 1) Centralized admin check.
--    Keeps both existing admin models working: profiles.role = 'admin'
--    (20260729) and the owner email used across the codebase.
--    SECURITY DEFINER + SET search_path (the old definition was missing
--    the search_path pin).
-- --------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid()
          AND (role IN ('admin', 'superadmin') OR email = 'fsoyilov@gmail.com')
    );
END;
$$;

-- --------------------------------------------------------------------
-- 2) user_subscriptions: enable RLS, owner + admin policies.
--    The table is created outside migrations (dashboard); the repo only
--    ALTERs it (20260712/20260713). Without RLS the default privileges
--    (GRANT ALL TO anon, authenticated) left it fully open.
-- --------------------------------------------------------------------
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own subscription" ON public.user_subscriptions;
DROP POLICY IF EXISTS "Users can manage own subscription" ON public.user_subscriptions;
DROP POLICY IF EXISTS "Owner or admin read subscription" ON public.user_subscriptions;

CREATE POLICY "Owner or admin read subscription"
    ON public.user_subscriptions FOR SELECT TO authenticated
    USING (auth.uid() = id OR is_admin());

CREATE POLICY "Owner insert own subscription"
    ON public.user_subscriptions FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Owner or admin update subscription"
    ON public.user_subscriptions FOR UPDATE TO authenticated
    USING (auth.uid() = id OR is_admin())
    WITH CHECK (auth.uid() = id OR is_admin());

CREATE POLICY "Owner delete own subscription"
    ON public.user_subscriptions FOR DELETE TO authenticated
    USING (auth.uid() = id);

-- --------------------------------------------------------------------
-- 3) app_settings: enable RLS if the table exists (dashboard-created).
--    gemini_api_key must never be selectable by end users; the column
--    REVOKE from 20260813 is re-asserted, and writes become admin-only.
-- --------------------------------------------------------------------
DO $$
DECLARE
    pol RECORD;
BEGIN
    IF to_regclass('public.app_settings') IS NOT NULL THEN
        EXECUTE 'ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY';

        FOR pol IN
            SELECT policyname FROM pg_policies
            WHERE schemaname = 'public' AND tablename = 'app_settings'
        LOOP
            EXECUTE format('DROP POLICY %I ON public.app_settings', pol.policyname);
        END LOOP;

        EXECUTE 'CREATE POLICY "Authenticated read app settings"
                 ON public.app_settings FOR SELECT TO authenticated
                 USING (true)';

        EXECUTE 'CREATE POLICY "Admins manage app settings"
                 ON public.app_settings FOR ALL TO authenticated
                 USING (is_admin()) WITH CHECK (is_admin())';

        EXECUTE 'REVOKE SELECT (gemini_api_key) ON public.app_settings FROM anon, authenticated';
    END IF;
END $$;

-- --------------------------------------------------------------------
-- 4) telegram_users / telegram_link_codes: replace USING (true)
--    policies with owner-scoped ones. The bot links accounts via the
--    service role (bypasses RLS), so only the owner needs access.
-- --------------------------------------------------------------------
ALTER TABLE public.telegram_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own telegram account" ON public.telegram_users;
DROP POLICY IF EXISTS "Users can manage telegram users" ON public.telegram_users;

CREATE POLICY "Users view own telegram account"
    ON public.telegram_users FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users update own telegram account"
    ON public.telegram_users FOR UPDATE TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own telegram account"
    ON public.telegram_users FOR DELETE TO authenticated
    USING (auth.uid() = user_id);
-- No INSERT policy: only the bot (service role) creates telegram_users rows.

ALTER TABLE public.telegram_link_codes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own link codes" ON public.telegram_link_codes;
DROP POLICY IF EXISTS "Users can create own link codes" ON public.telegram_link_codes;
DROP POLICY IF EXISTS "Users can update link codes" ON public.telegram_link_codes;
DROP POLICY IF EXISTS "Users can delete link codes" ON public.telegram_link_codes;

CREATE POLICY "Users view own link codes"
    ON public.telegram_link_codes FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users create own link codes"
    ON public.telegram_link_codes FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own link codes"
    ON public.telegram_link_codes FOR UPDATE TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own link codes"
    ON public.telegram_link_codes FOR DELETE TO authenticated
    USING (auth.uid() = user_id);

-- --------------------------------------------------------------------
-- 5) study_rooms: drop the open policies re-created by
--    20260813_study_rooms_private_support.sql (sorts after the
--    20260813010000 hardening). The hardened owner-scoped policies
--    from 20260813010000_security_hardening.sql remain in effect.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Public read study_rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Public write study_rooms" ON public.study_rooms;

-- --------------------------------------------------------------------
-- 6) user_leaderboard: public write policy allowed forging/overwriting
--    any row. Reads stay available to authenticated users (leaderboard
--    semantics); writes become owner-scoped.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Public read leaderboard" ON public.user_leaderboard;
DROP POLICY IF EXISTS "Public write leaderboard" ON public.user_leaderboard;

CREATE POLICY "Authenticated read leaderboard"
    ON public.user_leaderboard FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "Users insert own leaderboard rows"
    ON public.user_leaderboard FOR INSERT TO authenticated
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users update own leaderboard rows"
    ON public.user_leaderboard FOR UPDATE TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users delete own leaderboard rows"
    ON public.user_leaderboard FOR DELETE TO authenticated
    USING (user_id = auth.uid());

-- --------------------------------------------------------------------
-- 7) user_notifications: INSERT previously accepted any target user_id
--    (notification forging / phishing). Now self-insert or admin only.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "user_notifications_insert_policy" ON public.user_notifications;

CREATE POLICY "user_notifications_insert_policy"
    ON public.user_notifications FOR INSERT TO authenticated
    WITH CHECK (user_id = auth.uid() OR is_admin());

-- --------------------------------------------------------------------
-- 8) admin_announcements (dashboard-created, not in migrations):
--    enable RLS if present. Public read (broadcasts), admin-only writes.
-- --------------------------------------------------------------------
DO $$
DECLARE
    pol RECORD;
BEGIN
    IF to_regclass('public.admin_announcements') IS NOT NULL THEN
        EXECUTE 'ALTER TABLE public.admin_announcements ENABLE ROW LEVEL SECURITY';

        FOR pol IN
            SELECT policyname FROM pg_policies
            WHERE schemaname = 'public' AND tablename = 'admin_announcements'
        LOOP
            EXECUTE format('DROP POLICY %I ON public.admin_announcements', pol.policyname);
        END LOOP;

        EXECUTE 'CREATE POLICY "Public read announcements"
                 ON public.admin_announcements FOR SELECT
                 USING (true)';

        EXECUTE 'CREATE POLICY "Admins manage announcements"
                 ON public.admin_announcements FOR ALL TO authenticated
                 USING (is_admin()) WITH CHECK (is_admin())';
    END IF;
END $$;
