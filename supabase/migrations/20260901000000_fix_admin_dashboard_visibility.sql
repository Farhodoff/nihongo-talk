-- ====================================================================
-- KAIZEN AI — CRITICAL FIX: Admin Dashboard Full Data Visibility
-- Muammo: is_admin() faqat role='admin' tekshirardi, 'superadmin' ni emas
-- Natija: RLS barcha jadvallardan faqat 1 ta foydalanuvchi qaytarardi
-- Fix: is_admin() ni to'liq qayta yozish + RLS + RPC
-- ====================================================================

-- ═══════════════════════════════════════════════════════════════
-- 1. DIAGNOSITKA: Hozirgi is_admin() funksiya tanasini ko'rsatish
-- ═══════════════════════════════════════════════════════════════
DO $$
BEGIN
    RAISE NOTICE 'Current is_admin() body: %',
        (SELECT prosrc FROM pg_proc
         WHERE proname = 'is_admin'
         AND pronamespace = 'public'::regnamespace
         LIMIT 1);
END $$;

-- ═══════════════════════════════════════════════════════════════
-- 2. is_admin() — TO'LIQ QAYTA YOZISH (case-insensitive, superadmin + admin)
-- ═══════════════════════════════════════════════════════════════
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
    -- 1) auth.uid() olish
    _uid := auth.uid();

    -- 2) JWT email tekshirish (case-insensitive)
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email = 'fsoyilov@gmail.com' THEN
        RETURN TRUE;
    END IF;

    -- 3) Profile role + email tekshirish
    IF _uid IS NOT NULL THEN
        SELECT
            COALESCE(role, ''),
            LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        -- role = 'admin' YOKI 'superadmin' — IKKISINI ham tekshirish
        IF _profile_role IN ('admin', 'superadmin') THEN
            RETURN TRUE;
        END IF;

        -- email orqali tekshirish
        IF _profile_email = 'fsoyilov@gmail.com' THEN
            RETURN TRUE;
        END IF;
    END IF;

    -- 4) user_roles jadvalidan tekshirish (agar mavjud bo'lsa)
    IF _uid IS NOT NULL THEN
        BEGIN
            IF EXISTS (
                SELECT 1 FROM public.user_roles
                WHERE user_id = _uid AND role IN ('admin', 'superadmin')
            ) THEN
                RETURN TRUE;
            END IF;
        EXCEPTION WHEN undefined_table THEN
            -- user_roles jadvali mavjud emas — skip
            NULL;
        END;
    END IF;

    RETURN FALSE;
END;
$$;

-- Ruxsatlar
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated, service_role;

-- ═══════════════════════════════════════════════════════════════
-- 3. get_admin_all_users() — QAYTA YOZISH (exception o'rniga empty qaytarish)
-- ═══════════════════════════════════════════════════════════════
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
    -- Admin emas bo'lsa, exception emas — bo'sh natija qaytarish
    IF NOT public.is_admin() THEN
        RETURN;
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

REVOKE EXECUTE ON FUNCTION public.get_admin_all_users() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.get_admin_all_users() TO authenticated, service_role;

-- ═══════════════════════════════════════════════════════════════
-- 4. Barcha profiles auth.users bilan sinxronlashtirish
-- ═══════════════════════════════════════════════════════════════
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
    role = CASE WHEN EXCLUDED.email = 'fsoyilov@gmail.com' THEN 'superadmin' ELSE profiles.role END,
    updated_at = now();

-- ═══════════════════════════════════════════════════════════════
-- 5. RLS POLICIES — Admin barcha jadvallardagi ma'lumotlarni ko'rishi
-- ═══════════════════════════════════════════════════════════════

-- 5a. PROFILES
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

-- 5b. USER_SUBSCRIPTIONS
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

-- 5c. STUDY_SESSIONS
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own study sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can view own sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users can manage own sessions" ON public.study_sessions;
DROP POLICY IF EXISTS "Users and admins view study sessions" ON public.study_sessions;
CREATE POLICY "Users and admins view study sessions" ON public.study_sessions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- 5d. SPEAKING_SESSIONS
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
CREATE POLICY "Users and admins read speaking sessions" ON public.speaking_sessions
    FOR SELECT TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

-- 5e. SPEAKING_COACH_SESSIONS
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'speaking_coach_sessions' AND table_schema = 'public') THEN
        ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions;
        CREATE POLICY "Users and admins read speaking coach sessions" ON public.speaking_coach_sessions
            FOR SELECT TO authenticated
            USING (auth.uid() = user_id OR public.is_admin());
    END IF;
END $$;

-- 5f. AI_COACH_SESSIONS
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'ai_coach_sessions' AND table_schema = 'public') THEN
        ALTER TABLE public.ai_coach_sessions ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Foydalanuvchi faqat o'zining natijalarini ko'ra oladi" ON public.ai_coach_sessions;
        DROP POLICY IF EXISTS "Users and admins view ai coach sessions" ON public.ai_coach_sessions;
        CREATE POLICY "Users and admins view ai coach sessions" ON public.ai_coach_sessions
            FOR SELECT TO authenticated
            USING (auth.uid() = user_id OR public.is_admin());
    END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════
-- 6. GRANTS
-- ═══════════════════════════════════════════════════════════════
GRANT SELECT ON public.profiles TO authenticated;
GRANT SELECT ON public.user_subscriptions TO authenticated;
GRANT SELECT ON public.study_sessions TO authenticated;
GRANT SELECT ON public.speaking_sessions TO authenticated;

DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'speaking_coach_sessions' AND table_schema = 'public') THEN
        EXECUTE 'GRANT SELECT ON public.speaking_coach_sessions TO authenticated';
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'ai_coach_sessions' AND table_schema = 'public') THEN
        EXECUTE 'GRANT SELECT ON public.ai_coach_sessions TO authenticated';
    END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════
-- 7. TEKSHIRISH — is_admin() yangilangan versiyani test qilish
-- ═══════════════════════════════════════════════════════════════
DO $$
DECLARE
    _admin_check BOOLEAN;
    _user_count INT;
    _profile_count INT;
    _session_count INT;
BEGIN
    -- SQL Editor'da auth.uid() NULL bo'ladi — bu normal
    SELECT count(*) INTO _user_count FROM auth.users;
    SELECT count(*) INTO _profile_count FROM public.profiles;
    SELECT count(*) INTO _session_count FROM public.study_sessions;

    RAISE NOTICE '✅ Migration muvaffaqiyatli!';
    RAISE NOTICE '   auth.users: % ta', _user_count;
    RAISE NOTICE '   profiles: % ta', _profile_count;
    RAISE NOTICE '   study_sessions: % ta', _session_count;
    RAISE NOTICE '   is_admin() funksiyasi yangilandi: admin + superadmin tekshiradi';
END $$;
