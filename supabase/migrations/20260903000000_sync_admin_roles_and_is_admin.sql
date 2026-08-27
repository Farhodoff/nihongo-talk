-- ====================================================================
-- NIHONGO TALK MIGRATION: Single Super Admin Setup (fsoyilov@gmail.com)
-- Purpose: Set strictly fsoyilov@gmail.com as the unique Super Admin in profiles table
--          and ensure is_admin() and get_admin_all_users() recognize fsoyilov@gmail.com
-- ====================================================================

-- 1. Reset any test roles and strictly ensure only fsoyilov@gmail.com is superadmin
UPDATE public.profiles
SET role = 'user', updated_at = now()
WHERE LOWER(TRIM(email)) != 'fsoyilov@gmail.com' AND role IN ('admin', 'superadmin');

UPDATE public.profiles
SET role = 'superadmin', updated_at = now()
WHERE LOWER(TRIM(email)) = 'fsoyilov@gmail.com';

-- 2. Enhanced is_admin() security definer function strictly for fsoyilov@gmail.com
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _uid UUID;
    _jwt_email TEXT;
    _profile_role TEXT;
    _profile_email TEXT;
BEGIN
    _uid := auth.uid();

    -- 1. Check JWT email
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email = 'fsoyilov@gmail.com' THEN
        RETURN TRUE;
    END IF;

    -- 2. Check profile by auth.uid()
    IF _uid IS NOT NULL THEN
        SELECT LOWER(TRIM(COALESCE(role, ''))), LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email = 'fsoyilov@gmail.com' THEN
            RETURN TRUE;
        END IF;

        IF _profile_role IN ('admin', 'superadmin') THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.is_admin() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated, service_role;

-- 3. get_admin_all_users() RPC function
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
        RETURN;
    END IF;

    RETURN QUERY
    SELECT
        u.id,
        u.email::TEXT,
        COALESCE(p.full_name, u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1))::TEXT AS full_name,
        COALESCE(p.role, CASE WHEN LOWER(TRIM(u.email)) = 'fsoyilov@gmail.com' THEN 'superadmin' ELSE 'user' END)::TEXT AS role,
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
