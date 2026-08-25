-- ====================================================================
-- KAIZEN AI - Super Admin Dashboard Full Database Access & RLS Grant
-- Migration: 20260831000000_enable_full_admin_dashboard_visibility.sql
-- ====================================================================

-- 1. Create or Replace Robust is_admin() Function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    current_user_email TEXT;
    current_user_role TEXT;
BEGIN
    -- Check direct JWT email (strictly fsoyilov@gmail.com)
    current_user_email := COALESCE(auth.jwt() ->> 'email', '');
    IF current_user_email = 'fsoyilov@gmail.com' THEN
        RETURN true;
    END IF;

    -- Check profile role in public.profiles table
    SELECT role INTO current_user_role FROM public.profiles WHERE id = auth.uid();
    IF current_user_role IN ('admin', 'superadmin') THEN
        RETURN true;
    END IF;

    -- Check if user profile email is admin email
    IF EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND email = 'fsoyilov@gmail.com'
    ) THEN
        RETURN true;
    END IF;

    RETURN false;
END;
$$;

-- 2. Synchronize all auth.users into public.profiles & grant Superadmin role to fsoyilov@gmail.com
INSERT INTO public.profiles (id, email, full_name, role, created_at, updated_at)
SELECT 
    u.id,
    u.email,
    COALESCE(u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1)),
    CASE WHEN u.email = 'fsoyilov@gmail.com' THEN 'superadmin' ELSE 'user' END,
    u.created_at,
    now()
FROM auth.users u
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    role = CASE WHEN EXCLUDED.email = 'fsoyilov@gmail.com' THEN 'superadmin' ELSE profiles.role END;

-- 3. PROFILES: Enable Admin SELECT and UPDATE
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users and admins view profiles" ON public.profiles;
DROP POLICY IF EXISTS "Public read profiles" ON public.profiles;

CREATE POLICY "Users and admins view profiles" ON public.profiles
    FOR SELECT TO authenticated
    USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users and admins update profiles" ON public.profiles;
CREATE POLICY "Users and admins update profiles" ON public.profiles
    FOR UPDATE TO authenticated
    USING (auth.uid() = id OR public.is_admin());

-- 4. USER_SUBSCRIPTIONS: Admin o'qish va boshqaruv ruxsati
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own subscription" ON public.user_subscriptions;
DROP POLICY IF EXISTS "Owner or admin read subscription" ON public.user_subscriptions;
CREATE POLICY "Owner or admin read subscription" ON public.user_subscriptions
    FOR SELECT TO authenticated
    USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Admin manage all subscriptions" ON public.user_subscriptions;
CREATE POLICY "Admin manage all subscriptions" ON public.user_subscriptions
    FOR ALL TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- 5. STUDY_SESSIONS: Enable Admin SELECT
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own study sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can view own sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can manage own sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users and admins view study sessions" ON public.study_sessions;
CREATE POLICY "Users and admins view study sessions" ON public.study_sessions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- 6. SPEAKING_SESSIONS: Enable Admin SELECT
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
CREATE POLICY "Users and admins read speaking sessions" ON public.speaking_sessions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- 7. SPEAKING_COACH_SESSIONS: Enable Admin SELECT
CREATE TABLE IF NOT EXISTS public.speaking_coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    persona_title TEXT,
    persona TEXT,
    fluency_score NUMERIC DEFAULT 0,
    pronunciation_score NUMERIC DEFAULT 0,
    grammar_score NUMERIC DEFAULT 0,
    vocabulary_score NUMERIC DEFAULT 0,
    overall_score NUMERIC DEFAULT 0,
    duration_seconds NUMERIC DEFAULT 120,
    feedback TEXT,
    transcript JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions;
CREATE POLICY "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users insert speaking coach sessions" ON public.speaking_coach_sessions;
CREATE POLICY "Users insert speaking coach sessions" ON public.speaking_coach_sessions
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- 8. AI_COACH_SESSIONS: Enable Admin SELECT
CREATE TABLE IF NOT EXISTS public.ai_coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    persona_title TEXT NOT NULL,
    fluency_score INTEGER NOT NULL DEFAULT 0,
    vocabulary_score INTEGER NOT NULL DEFAULT 0,
    grammar_score INTEGER NOT NULL DEFAULT 0,
    pronunciation_score INTEGER NOT NULL DEFAULT 0,
    feedback TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.ai_coach_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Foydalanuvchi faqat o'zining natijalarini ko'ra oladi" ON public.ai_coach_sessions;
DROP POLICY IF EXISTS "Users and admins view ai coach sessions" ON public.ai_coach_sessions;
CREATE POLICY "Users and admins view ai coach sessions" ON public.ai_coach_sessions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- 9. SPEAKING_VOCABULARIES: Enable Admin SELECT
ALTER TABLE public.speaking_vocabularies ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins read speaking vocabularies" ON public.speaking_vocabularies;
CREATE POLICY "Users and admins read speaking vocabularies" ON public.speaking_vocabularies
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- 10. RPC Funksiyasi: Super Admin barcha auth.users foydalanuvchilarini to'liq olishi uchun
CREATE OR REPLACE FUNCTION public.get_admin_all_users()
RETURNS TABLE (
    id UUID,
    email TEXT,
    full_name TEXT,
    role TEXT,
    tier TEXT,
    ai_credits INT,
    created_at TIMESTAMPTZ,
    last_sign_in_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
    IF NOT public.is_admin() THEN
        RAISE EXCEPTION 'Access denied. Super Admin role required.';
    END IF;

    RETURN QUERY
    SELECT 
        u.id,
        u.email::TEXT,
        COALESCE(p.full_name, u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1))::TEXT AS full_name,
        COALESCE(p.role, CASE WHEN u.email = 'fsoyilov@gmail.com' THEN 'superadmin' ELSE 'user' END)::TEXT AS role,
        COALESCE(s.tier, CASE WHEN u.email = 'fsoyilov@gmail.com' THEN 'premium' ELSE 'free' END)::TEXT AS tier,
        COALESCE(s.ai_credits, 99999)::INT AS ai_credits,
        u.created_at,
        u.last_sign_in_at
    FROM auth.users u
    LEFT JOIN public.profiles p ON p.id = u.id
    LEFT JOIN public.user_subscriptions s ON s.id = u.id
    ORDER BY u.created_at DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_admin_all_users() TO authenticated;

-- 11. Grant SELECT on all required public tables to authenticated and service_role
GRANT SELECT ON public.profiles TO authenticated;
GRANT SELECT ON public.user_subscriptions TO authenticated;
GRANT SELECT ON public.study_sessions TO authenticated;
GRANT SELECT ON public.speaking_sessions TO authenticated;
GRANT SELECT ON public.speaking_coach_sessions TO authenticated;
GRANT SELECT ON public.ai_coach_sessions TO authenticated;
GRANT SELECT ON public.speaking_vocabularies TO authenticated;
GRANT SELECT ON public.speaking_errors TO authenticated;
GRANT SELECT ON public.diagnostic_results TO authenticated;
GRANT SELECT ON public.learning_goals TO authenticated;
