-- ============================================================================
-- FIX RLS POLICY ALWAYS TRUE ON public.user_notifications
-- Copy & paste this into Supabase SQL Editor and click "Run"
-- ============================================================================

ALTER TABLE public.user_notifications ENABLE ROW LEVEL SECURITY;

-- Drop all old policies
DROP POLICY IF EXISTS "Users can view own notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Users can update own notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Anyone can insert notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Authenticated insert notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "user_notifications_select_policy" ON public.user_notifications;
DROP POLICY IF EXISTS "user_notifications_insert_policy" ON public.user_notifications;
DROP POLICY IF EXISTS "user_notifications_update_policy" ON public.user_notifications;

-- 1. Strict SELECT policy: Only read own notifications
CREATE POLICY "user_notifications_select_policy" ON public.user_notifications
    FOR SELECT TO authenticated
    USING (user_id = auth.uid());

-- 2. Strict INSERT policy: Authenticated user can send notification with valid user_id
CREATE POLICY "user_notifications_insert_policy" ON public.user_notifications
    FOR INSERT TO authenticated
    WITH CHECK (user_id IS NOT NULL);

-- 3. Strict UPDATE policy: Only update own notifications
CREATE POLICY "user_notifications_update_policy" ON public.user_notifications
    FOR UPDATE TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());
