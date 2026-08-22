-- ====================================================================
-- P1 SECURITY FIXES (second-round audit, 2026-08-25)
--
-- R2-01  user_notifications: never-dropped "Admins can insert
--        notifications" (WITH CHECK (true)) OR-defeated the 20260824
--        insert policy — notification forging stayed possible.
-- R2-02  profiles: "Users can view all profiles" SELECT USING (true)
--        exposed every user's email (+ google_api_key column) to anon.
-- R2-04  user_subscriptions: owner could still UPDATE own tier /
--        ai_credits (self-upgrade to premium, no payment verification).
-- R2-07  admin_preset_albums: FOR ALL USING (true) for authenticated.
-- R2-09  profiles INSERT had no role guard (self-insert role='admin'
--        when the handle_new_user trigger failed).
-- R2-10  increment_xp RPC executable by anon/authenticated (XP farming).
-- R2-16  messages: "Anyone can view messages" readable by anon.
-- R2-17  admin_daily_stats: platform-wide stats readable by any
--        authenticated user.
--        storage: speaking-upload policy had no ownership/type limits;
--        admin storage policies used a dead role claim.
-- +      cleanup_expired_telegram_codes: live search_path is NULL —
--        pin it (matches the 20260603 repo definition).
-- ====================================================================

-- --------------------------------------------------------------------
-- 1) user_notifications: drop the leftover open INSERT policy.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Admins can insert notifications" ON public.user_notifications;

-- --------------------------------------------------------------------
-- 2) profiles: close anon read. Authenticated cross-user read stays
--    (leaderboard + admin user list depend on it); the google_api_key
--    column is no longer written by clients and existing values are
--    purged below.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

CREATE POLICY "Authenticated read basic profiles"
    ON public.profiles FOR SELECT TO authenticated
    USING (true);

DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'profiles'
          AND column_name = 'google_api_key'
    ) THEN
        EXECUTE 'UPDATE public.profiles SET google_api_key = NULL WHERE google_api_key IS NOT NULL';
    END IF;
END $$;

-- --------------------------------------------------------------------
-- 3) profiles INSERT: a self-inserted profile must stay role 'user'
--    (normally created by the handle_new_user trigger as SECURITY
--    DEFINER, which bypasses RLS and is unaffected).
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;

CREATE POLICY "Users can insert own profile"
    ON public.profiles FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = id AND role = 'user');

-- --------------------------------------------------------------------
-- 4) user_subscriptions: owners keep updating their row (credit
--    decrements) but can no longer change their own tier — only
--    admins can grant tiers. The subquery reads the pre-update tier
--    under the owner SELECT policy (no recursion: it touches SELECT
--    policies only).
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Owner or admin update subscription" ON public.user_subscriptions;

CREATE POLICY "Owner or admin update subscription"
    ON public.user_subscriptions FOR UPDATE TO authenticated
    USING (auth.uid() = id OR is_admin())
    WITH CHECK (
        is_admin()
        OR (
            auth.uid() = id
            AND tier = (SELECT s.tier FROM public.user_subscriptions s WHERE s.id = auth.uid())
        )
    );

-- --------------------------------------------------------------------
-- 5) admin_preset_albums (dashboard-created): public read stays,
--    writes become admin-only. Guarded in case the table is absent.
-- --------------------------------------------------------------------
DO $$
DECLARE
    pol RECORD;
BEGIN
    IF to_regclass('public.admin_preset_albums') IS NOT NULL THEN
        EXECUTE 'ALTER TABLE public.admin_preset_albums ENABLE ROW LEVEL SECURITY';

        FOR pol IN
            SELECT policyname FROM pg_policies
            WHERE schemaname = 'public' AND tablename = 'admin_preset_albums'
        LOOP
            EXECUTE format('DROP POLICY %I ON public.admin_preset_albums', pol.policyname);
        END LOOP;

        EXECUTE 'CREATE POLICY "Public read preset albums"
                 ON public.admin_preset_albums FOR SELECT
                 USING (true)';

        EXECUTE 'CREATE POLICY "Admins manage preset albums"
                 ON public.admin_preset_albums FOR ALL TO authenticated
                 USING (is_admin()) WITH CHECK (is_admin())';
    END IF;
END $$;

-- --------------------------------------------------------------------
-- 6) messages: community chat is readable by authenticated users only.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Anyone can view messages" ON public.messages;

CREATE POLICY "Authenticated can view messages"
    ON public.messages FOR SELECT TO authenticated
    USING (true);

-- --------------------------------------------------------------------
-- 7) increment_xp: no frontend caller exists; the update-xp edge
--    function calls it with the service role (unaffected by REVOKE).
-- --------------------------------------------------------------------
DO $$
DECLARE
    fn_args TEXT;
BEGIN
    SELECT pg_get_function_identity_arguments(p.oid)
      INTO fn_args
      FROM pg_proc p JOIN pg_namespace n ON p.pronamespace = n.oid
     WHERE n.nspname = 'public' AND p.proname = 'increment_xp'
     LIMIT 1;

    IF fn_args IS NOT NULL THEN
        EXECUTE format('REVOKE EXECUTE ON FUNCTION public.increment_xp(%s) FROM anon, authenticated', fn_args);
    END IF;
END $$;

-- --------------------------------------------------------------------
-- 8) cleanup_expired_telegram_codes: pin search_path (live function
--    currently has configuration = NULL). Body matches 20260603.
-- --------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.cleanup_expired_telegram_codes()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    DELETE FROM public.telegram_link_codes
    WHERE expires_at < NOW();
END;
$$;

-- --------------------------------------------------------------------
-- 9) admin_daily_stats: keep definer semantics (aggregates all users'
--    study_sessions) but return rows to admins only.
-- --------------------------------------------------------------------
CREATE OR REPLACE VIEW public.admin_daily_stats WITH (security_invoker = false) AS
SELECT
  (ss.start_time::date) as activity_date,
  count(distinct ss.user_id) as active_users,
  sum(ss.duration) as total_duration_minutes,
  count(ss.id) as total_sessions
FROM public.study_sessions ss
WHERE is_admin()
GROUP BY (ss.start_time::date)
ORDER BY activity_date DESC;

-- --------------------------------------------------------------------
-- 10) Storage 'exams' bucket: enforce per-user folder + audio type on
--     the speaking upload path, and replace the dead admin policies
--     (auth.jwt() ->> 'role' = 'admin' never matches Supabase JWTs)
--     with is_admin() checks.
-- --------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can upload speaking audio" ON storage.objects;

CREATE POLICY "Users can upload speaking audio"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'exams' AND
    (storage.foldername(name))[1] = 'speaking_responses' AND
    (storage.foldername(name))[2] = auth.uid()::text AND
    LOWER(name) LIKE '%.webm'
);

DROP POLICY IF EXISTS "Admin Insert Access" ON storage.objects;
DROP POLICY IF EXISTS "Admin Update Access" ON storage.objects;
DROP POLICY IF EXISTS "Admin Delete Access" ON storage.objects;

CREATE POLICY "Admin Insert Access"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'exams' AND is_admin());

CREATE POLICY "Admin Update Access"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'exams' AND is_admin());

CREATE POLICY "Admin Delete Access"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'exams' AND is_admin());
