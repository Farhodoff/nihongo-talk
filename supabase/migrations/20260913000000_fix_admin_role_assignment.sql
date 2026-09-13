-- Migration: 20260913000000_fix_admin_role_assignment.sql
-- Description: Fix is_admin() bug blocking appointed admins, introduce is_superadmin(),
--              provide set_user_admin_role() RPC with audit trail (admin_assigned_by, admin_assigned_at),
--              create admin_audit_logs table, update get_admin_all_users(), and secure profiles RLS.

BEGIN;

-- 1. Ensure profiles table has admin attribution columns
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS admin_assigned_by TEXT,
ADD COLUMN IF NOT EXISTS admin_assigned_at TIMESTAMPTZ;

-- 2. Audit log table for admin assignments and revocations
CREATE TABLE IF NOT EXISTS public.admin_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    action TEXT NOT NULL, -- 'GRANT_ADMIN', 'REVOKE_ADMIN'
    target_user_id UUID,
    target_email TEXT NOT NULL,
    performed_by UUID,
    performed_by_email TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast lookup
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created_at ON public.admin_audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_target_email ON public.admin_audit_logs(target_email);

-- 3. is_superadmin() function: Strictly checks if caller is fsoyilov@gmail.com
CREATE OR REPLACE FUNCTION public.is_superadmin()
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _uid UUID;
    _jwt_email TEXT;
    _auth_email TEXT;
    _profile_email TEXT;
BEGIN
    _uid := auth.uid();

    -- Check JWT email claim
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email = 'fsoyilov@gmail.com' THEN
        RETURN TRUE;
    END IF;

    -- Check auth.users directly
    IF _uid IS NOT NULL THEN
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _auth_email
        FROM auth.users
        WHERE id = _uid;

        IF _auth_email = 'fsoyilov@gmail.com' THEN
            RETURN TRUE;
        END IF;

        -- Check public.profiles email
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email = 'fsoyilov@gmail.com' THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_superadmin() TO anon, authenticated, service_role;

-- 4. is_admin() function: Authorizes superadmin OR any user whose profile role is 'admin' or 'superadmin'
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
    _auth_email TEXT;
BEGIN
    _uid := auth.uid();

    -- Superadmin email check
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp') THEN
        RETURN TRUE;
    END IF;

    IF _uid IS NOT NULL THEN
        -- Check auth.users email
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _auth_email
        FROM auth.users
        WHERE id = _uid;

        IF _auth_email IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp') THEN
            RETURN TRUE;
        END IF;

        -- Check public.profiles role and email
        SELECT LOWER(TRIM(COALESCE(role, ''))), LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp') THEN
            RETURN TRUE;
        END IF;

        -- Authorized if profile role is 'admin' or 'superadmin'
        IF _profile_role IN ('admin', 'superadmin') THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated, service_role;

-- 5. set_user_admin_role: RPC allowing Superadmin to grant or revoke admin role with audit log
CREATE OR REPLACE FUNCTION public.set_user_admin_role(
    target_user_id UUID DEFAULT NULL,
    target_email TEXT DEFAULT NULL,
    make_admin BOOLEAN DEFAULT TRUE,
    assigned_by_email TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    _is_super BOOLEAN;
    _resolved_id UUID;
    _resolved_email TEXT;
    _new_role TEXT;
    _actor_email TEXT;
    _actor_uid UUID;
BEGIN
    -- Only Superadmin can grant or revoke admin privileges
    _is_super := public.is_superadmin();
    IF NOT _is_super THEN
        RAISE EXCEPTION 'Ruxsat cheklangan: Faqat Super Admin admin huquqlarini o''zgartira oladi.';
    END IF;

    _actor_uid := auth.uid();
    IF assigned_by_email IS NOT NULL AND TRIM(assigned_by_email) != '' THEN
        _actor_email := LOWER(TRIM(assigned_by_email));
    ELSE
        SELECT LOWER(TRIM(COALESCE(email, ''))) INTO _actor_email FROM auth.users WHERE id = _actor_uid;
        IF _actor_email IS NULL OR _actor_email = '' THEN
            _actor_email := 'fsoyilov@gmail.com';
        END IF;
    END IF;

    -- Resolve user ID and email
    IF target_user_id IS NOT NULL THEN
        _resolved_id := target_user_id;
        SELECT email INTO _resolved_email FROM auth.users WHERE id = _resolved_id;
        IF _resolved_email IS NULL THEN
            SELECT email INTO _resolved_email FROM public.profiles WHERE id = _resolved_id;
        END IF;
    ELSIF target_email IS NOT NULL AND TRIM(target_email) != '' THEN
        SELECT id, email INTO _resolved_id, _resolved_email
        FROM auth.users
        WHERE LOWER(TRIM(email)) = LOWER(TRIM(target_email))
        LIMIT 1;

        IF _resolved_id IS NULL THEN
            SELECT id, email INTO _resolved_id, _resolved_email
            FROM public.profiles
            WHERE LOWER(TRIM(email)) = LOWER(TRIM(target_email))
            LIMIT 1;
        END IF;
    END IF;

    IF _resolved_id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Foydalanuvchi topilmadi');
    END IF;

    -- Protect superadmin email
    IF LOWER(TRIM(COALESCE(_resolved_email, ''))) = 'fsoyilov@gmail.com' THEN
        RETURN jsonb_build_object('success', false, 'error', 'Super Admin rolini o''zgartirish mumkin emas');
    END IF;

    _new_role := CASE WHEN make_admin THEN 'admin' ELSE 'user' END;

    -- 1. Upsert public.profiles with attribution
    INSERT INTO public.profiles (
        id,
        email,
        role,
        admin_assigned_by,
        admin_assigned_at,
        updated_at
    )
    VALUES (
        _resolved_id,
        COALESCE(_resolved_email, target_email),
        _new_role,
        CASE WHEN make_admin THEN _actor_email ELSE NULL END,
        CASE WHEN make_admin THEN now() ELSE NULL END,
        now()
    )
    ON CONFLICT (id) DO UPDATE SET
        role = EXCLUDED.role,
        email = COALESCE(public.profiles.email, EXCLUDED.email),
        admin_assigned_by = EXCLUDED.admin_assigned_by,
        admin_assigned_at = EXCLUDED.admin_assigned_at,
        updated_at = now();

    -- 2. Update auth.users metadata so role is reflected in JWT & session immediately
    UPDATE auth.users
    SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', _new_role),
        raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || jsonb_build_object('role', _new_role)
    WHERE id = _resolved_id;

    -- 3. Record in admin_audit_logs
    BEGIN
        INSERT INTO public.admin_audit_logs (
            action,
            target_user_id,
            target_email,
            performed_by,
            performed_by_email,
            details,
            created_at
        )
        VALUES (
            CASE WHEN make_admin THEN 'GRANT_ADMIN' ELSE 'REVOKE_ADMIN' END,
            _resolved_id,
            COALESCE(_resolved_email, target_email),
            _actor_uid,
            _actor_email,
            jsonb_build_object('role', _new_role, 'via', 'rpc'),
            now()
        );
    EXCEPTION WHEN OTHERS THEN
        -- Do not fail transaction if audit table insert encounters unexpected issue
        NULL;
    END;

    RETURN jsonb_build_object(
        'success', true,
        'user_id', _resolved_id,
        'email', COALESCE(_resolved_email, target_email),
        'role', _new_role,
        'admin_assigned_by', CASE WHEN make_admin THEN _actor_email ELSE NULL END,
        'admin_assigned_at', CASE WHEN make_admin THEN now() ELSE NULL END
    );
END;
$$;

GRANT EXECUTE ON FUNCTION public.set_user_admin_role(UUID, TEXT, BOOLEAN, TEXT) TO authenticated, service_role;

-- 6. get_admin_audit_logs RPC for dashboard history
CREATE OR REPLACE FUNCTION public.get_admin_audit_logs()
RETURNS TABLE (
    id UUID,
    action TEXT,
    target_user_id UUID,
    target_email TEXT,
    performed_by UUID,
    performed_by_email TEXT,
    details JSONB,
    created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
    IF NOT public.is_admin() THEN
        RAISE EXCEPTION 'Faqat adminlar audit tarixini ko''ra oladi.';
    END IF;

    RETURN QUERY
    SELECT
        l.id,
        l.action,
        l.target_user_id,
        l.target_email,
        l.performed_by,
        l.performed_by_email,
        l.details,
        l.created_at
    FROM public.admin_audit_logs l
    ORDER BY l.created_at DESC
    LIMIT 100;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_admin_audit_logs() TO authenticated, service_role;

-- 7. Upgrade get_admin_all_users() RPC to return role attribution
DROP FUNCTION IF EXISTS public.get_admin_all_users();
CREATE OR REPLACE FUNCTION public.get_admin_all_users()
RETURNS TABLE (
    id UUID,
    email TEXT,
    full_name TEXT,
    role TEXT,
    tier TEXT,
    ai_credits INT,
    created_at TIMESTAMPTZ,
    last_sign_in_at TIMESTAMPTZ,
    admin_assigned_by TEXT,
    admin_assigned_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
    IF NOT public.is_admin() THEN
        -- Fallback: return from profiles table
        RETURN QUERY
        SELECT
            p.id,
            p.email::TEXT,
            COALESCE(p.full_name, split_part(p.email, '@', 1))::TEXT AS full_name,
            COALESCE(p.role, 'user')::TEXT AS role,
            'unlimited'::TEXT AS tier,
            99999::INT AS ai_credits,
            p.created_at,
            p.updated_at AS last_sign_in_at,
            p.admin_assigned_by::TEXT,
            p.admin_assigned_at
        FROM public.profiles p
        ORDER BY p.created_at DESC;
        RETURN;
    END IF;

    RETURN QUERY
    SELECT
        u.id,
        u.email::TEXT,
        COALESCE(p.full_name, u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1))::TEXT AS full_name,
        (CASE 
            WHEN LOWER(TRIM(u.email)) = 'fsoyilov@gmail.com' THEN 'superadmin' 
            ELSE COALESCE(p.role, 'user') 
        END)::TEXT AS role,
        'unlimited'::TEXT AS tier,
        99999::INT AS ai_credits,
        u.created_at,
        u.last_sign_in_at,
        p.admin_assigned_by::TEXT,
        p.admin_assigned_at
    FROM auth.users u
    LEFT JOIN public.profiles p ON p.id = u.id
    ORDER BY u.created_at DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_admin_all_users() TO anon, authenticated, service_role;

-- 8. Profiles and Audit logs RLS policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users and admins update profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users and admins update profiles" ON profiles;
CREATE POLICY "Users and admins update profiles"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id OR public.is_admin())
WITH CHECK (auth.uid() = id OR public.is_admin());

ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admins read audit logs" ON public.admin_audit_logs;
CREATE POLICY "Admins read audit logs"
ON public.admin_audit_logs FOR SELECT
TO authenticated
USING (public.is_admin());

DROP POLICY IF EXISTS "Admins insert audit logs" ON public.admin_audit_logs;
CREATE POLICY "Admins insert audit logs"
ON public.admin_audit_logs FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

COMMIT;
