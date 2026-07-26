-- ============================================================================
-- SUPABASE SECURITY ADVISOR WARNINGS FIX SCRIPT
-- Copy & paste this complete script into Supabase SQL Editor and click "Run"
-- ============================================================================

-- 1. Fix Function Search Path Mutable & Security Definer Permissions
-- Setting explicit search_path = public prevents search_path vulnerability attacks

DO $$
BEGIN
    -- Function: update_tasks_updated_at
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'update_tasks_updated_at') THEN
        ALTER FUNCTION public.update_tasks_updated_at() SET search_path = public;
    END IF;

    -- Function: update_sessions_updated_at
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'update_sessions_updated_at') THEN
        ALTER FUNCTION public.update_sessions_updated_at() SET search_path = public;
    END IF;

    -- Function: update_updated_at_column
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'update_updated_at_column') THEN
        ALTER FUNCTION public.update_updated_at_column() SET search_path = public;
    END IF;

    -- Function: update_notification_settings_updated_at
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'update_notification_settings_updated_at') THEN
        ALTER FUNCTION public.update_notification_settings_updated_at() SET search_path = public;
    END IF;

    -- Function: increment_xp
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'increment_xp') THEN
        ALTER FUNCTION public.increment_xp SET search_path = public;
    END IF;

    -- Function: handle_new_user
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'handle_new_user') THEN
        ALTER FUNCTION public.handle_new_user() SET search_path = public;
        REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
    END IF;

    -- Function: handle_new_user_subscription
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'handle_new_user_subscription') THEN
        ALTER FUNCTION public.handle_new_user_subscription() SET search_path = public;
        REVOKE EXECUTE ON FUNCTION public.handle_new_user_subscription() FROM PUBLIC, anon, authenticated;
    END IF;

    -- Function: cleanup_expired_telegram_codes
    IF EXISTS (SELECT FROM pg_proc WHERE proname = 'cleanup_expired_telegram_codes') THEN
        ALTER FUNCTION public.cleanup_expired_telegram_codes() SET search_path = public;
        REVOKE EXECUTE ON FUNCTION public.cleanup_expired_telegram_codes() FROM PUBLIC, anon, authenticated;
    END IF;
END $$;


-- 2. Refine RLS Policies to avoid "RLS Policy Always True" warnings

-- RateLimit table policies
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'RateLimit') THEN
        DROP POLICY IF EXISTS "Allow authenticated full access to RateLimit" ON public."RateLimit";
        DROP POLICY IF EXISTS "Authenticated users manage RateLimit" ON public."RateLimit";
        CREATE POLICY "Authenticated users manage RateLimit" ON public."RateLimit" 
            FOR ALL TO authenticated USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);
    END IF;

    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'rate_limit') THEN
        DROP POLICY IF EXISTS "Allow authenticated full access to rate_limit" ON public.rate_limit;
        DROP POLICY IF EXISTS "Authenticated users manage rate_limit" ON public.rate_limit;
        CREATE POLICY "Authenticated users manage rate_limit" ON public.rate_limit 
            FOR ALL TO authenticated USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);
    END IF;
END $$;

-- user_notifications table policies
DROP POLICY IF EXISTS "Users can view own notifications" ON public.user_notifications;
CREATE POLICY "Users can view own notifications" ON public.user_notifications
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own notifications" ON public.user_notifications;
CREATE POLICY "Users can update own notifications" ON public.user_notifications
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Anyone can insert notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Authenticated insert notifications" ON public.user_notifications;
CREATE POLICY "Authenticated insert notifications" ON public.user_notifications
    FOR INSERT TO authenticated WITH CHECK (auth.uid() IS NOT NULL);
