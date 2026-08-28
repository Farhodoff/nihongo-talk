-- Migration: 20260907000000_fix_admin_sessions_rls_and_rpc.sql
-- Description: Fix RLS policies and add RPC for study and speaking session tables in Admin Dashboard

BEGIN;

-- 1. STUDY_SESSIONS RLS Policy
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins view study sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can view own sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can view own study sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can manage own sessions" ON public.study_sessions;

CREATE POLICY "Users and admins view study sessions"
ON public.study_sessions FOR SELECT
TO authenticated, anon
USING (auth.uid() = user_id OR public.is_admin());

-- 2. SPEAKING_SESSIONS RLS Policy
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users can read own speaking sessions" ON public.speaking_sessions;

CREATE POLICY "Users and admins read speaking sessions"
ON public.speaking_sessions FOR SELECT
TO authenticated, anon
USING (auth.uid() = user_id OR public.is_admin());

-- 3. SPEAKING_COACH_SESSIONS RLS Policy
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'speaking_coach_sessions' AND table_schema = 'public') THEN
        ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions;
        DROP POLICY IF EXISTS "Users can read own coach sessions" ON public.speaking_coach_sessions;

        CREATE POLICY "Users and admins read speaking coach sessions"
        ON public.speaking_coach_sessions FOR SELECT
        TO authenticated, anon
        USING (auth.uid() = user_id OR public.is_admin());
    END IF;
END $$;

-- 4. AI_COACH_SESSIONS RLS Policy
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'ai_coach_sessions' AND table_schema = 'public') THEN
        ALTER TABLE public.ai_coach_sessions ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Users and admins view ai coach sessions" ON public.ai_coach_sessions;
        DROP POLICY IF EXISTS "Foydalanuvchi faqat o'zining natijalarini ko'ra oladi" ON public.ai_coach_sessions;

        CREATE POLICY "Users and admins view ai coach sessions"
        ON public.ai_coach_sessions FOR SELECT
        TO authenticated, anon
        USING (auth.uid() = user_id OR public.is_admin());
    END IF;
END $$;

-- 5. Grant SELECT permissions
GRANT SELECT ON public.study_sessions TO authenticated, anon, service_role;
GRANT SELECT ON public.speaking_sessions TO authenticated, anon, service_role;
GRANT SELECT ON public.speaking_coach_sessions TO authenticated, anon, service_role;
GRANT SELECT ON public.ai_coach_sessions TO authenticated, anon, service_role;

-- 6. Create RPC function get_admin_all_sessions() for reliable single-query session retrieval
DROP FUNCTION IF EXISTS public.get_admin_all_sessions();

CREATE OR REPLACE FUNCTION public.get_admin_all_sessions()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _result JSON;
BEGIN
    SELECT json_build_object(
        'study_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.study_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json),
        'speaking_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.speaking_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json),
        'speaking_coach_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.speaking_coach_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json),
        'ai_coach_sessions', COALESCE((SELECT json_agg(s) FROM (SELECT * FROM public.ai_coach_sessions ORDER BY created_at DESC LIMIT 500) s), '[]'::json)
    ) INTO _result;

    RETURN _result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_admin_all_sessions() TO authenticated, anon, service_role;

COMMIT;
