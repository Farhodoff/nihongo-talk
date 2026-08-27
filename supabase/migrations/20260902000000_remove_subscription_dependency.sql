-- ====================================================================
-- NIHON-TALK MIGRATION: Remove Subscription Dependency & Fix RLS / Schema
-- Purpose: Decouple get_admin_all_users() from user_subscriptions table
--          Make subject_id nullable on flashcards table to allow general deck imports
--          Ensure authenticated users can INSERT/UPDATE/SELECT profiles, flashcards & session logs
--          Admin retains full visibility into all user records
-- ====================================================================

ALTER TABLE public.flashcards ALTER COLUMN subject_id DROP NOT NULL;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    _uid UUID;
    _jwt_email TEXT;
    _profile_role TEXT;
    _profile_email TEXT;
BEGIN
    _uid := auth.uid();

    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email = 'fsoyilov@gmail.com' OR _jwt_email = 'testadmin2026@nihon-talk.com' THEN
        RETURN TRUE;
    END IF;

    IF _uid IS NOT NULL THEN
        SELECT LOWER(TRIM(COALESCE(role, ''))), LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email = 'fsoyilov@gmail.com' OR _profile_email = 'testadmin2026@nihon-talk.com' THEN
            RETURN TRUE;
        END IF;

        IF _profile_role IN ('admin', 'superadmin') THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

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
    -- Only allow admin / superadmin users
    IF NOT public.is_admin() THEN
        RETURN;
    END IF;

    RETURN QUERY
    SELECT
        u.id,
        u.email::TEXT,
        COALESCE(p.full_name, u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1))::TEXT AS full_name,
        COALESCE(p.role, CASE WHEN u.email = 'fsoyilov@gmail.com' OR u.email = 'testadmin2026@nihon-talk.com' THEN 'superadmin' ELSE 'user' END)::TEXT AS role,
        'unlimited'::TEXT AS tier,
        99999::INT AS ai_credits,
        u.created_at,
        u.last_sign_in_at
    FROM auth.users u
    LEFT JOIN public.profiles p ON p.id = u.id
    ORDER BY u.created_at DESC;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.get_admin_all_users() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.get_admin_all_users() TO authenticated, service_role;

-- ═══════════════════════════════════════════════════════════════
-- RLS FIXES FOR PROFILES, FLASHCARDS & SESSIONS
-- ═══════════════════════════════════════════════════════════════

-- PROFILES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = id);

-- FLASHCARDS
ALTER TABLE public.flashcards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can manage own flashcards" ON public.flashcards;
DROP POLICY IF EXISTS "Users can crud flashcards" ON public.flashcards;
DROP POLICY IF EXISTS "Users can view own flashcards" ON public.flashcards;
DROP POLICY IF EXISTS "Users can insert own flashcards" ON public.flashcards;
DROP POLICY IF EXISTS "Users can update own flashcards" ON public.flashcards;
DROP POLICY IF EXISTS "Users can delete own flashcards" ON public.flashcards;

CREATE POLICY "Users can select own flashcards" ON public.flashcards
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can insert own flashcards" ON public.flashcards
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own flashcards" ON public.flashcards
    FOR UPDATE TO authenticated
    USING (auth.uid() = user_id OR public.is_admin())
    WITH CHECK (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can delete own flashcards" ON public.flashcards
    FOR DELETE TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- SPEAKING_SESSIONS
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can insert own speaking sessions" ON public.speaking_sessions;
CREATE POLICY "Users can insert own speaking sessions" ON public.speaking_sessions
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- SPEAKING_COACH_SESSIONS
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'speaking_coach_sessions' AND table_schema = 'public') THEN
        ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Users can insert own speaking coach sessions" ON public.speaking_coach_sessions;
        CREATE POLICY "Users can insert own speaking coach sessions" ON public.speaking_coach_sessions
            FOR INSERT TO authenticated
            WITH CHECK (auth.uid() = user_id);
    END IF;
END $$;

-- AI_COACH_SESSIONS
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'ai_coach_sessions' AND table_schema = 'public') THEN
        ALTER TABLE public.ai_coach_sessions ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Users can insert own ai coach sessions" ON public.ai_coach_sessions;
        CREATE POLICY "Users can insert own ai coach sessions" ON public.ai_coach_sessions
            FOR INSERT TO authenticated
            WITH CHECK (auth.uid() = user_id);
    END IF;
END $$;
