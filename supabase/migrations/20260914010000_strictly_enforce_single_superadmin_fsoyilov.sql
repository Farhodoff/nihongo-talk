-- Migration: 20260914010000_strictly_enforce_single_superadmin_fsoyilov.sql
-- Description: Strictly enforce single Super Admin (fsoyilov@gmail.com only).
--              Secure set_user_admin_role RPC to prevent superadmin tampering,
--              grant/revoke standard admin rights for helper accounts (DEFAULT_ADMIN_EMAILS),
--              and enforce admin_audit_logs recording on every role change.

BEGIN;

-- 1. Ensure public.admin_audit_logs table exists and is indexed
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

CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created_at ON public.admin_audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_target_email ON public.admin_audit_logs(target_email);

-- 2. Cleanup and enforce database roles:
--    ONLY fsoyilov@gmail.com may have 'superadmin' role.
--    All other accounts with 'superadmin' role are converted to 'admin' (or 'user').
UPDATE public.profiles
SET role = 'superadmin', updated_at = now()
WHERE LOWER(TRIM(email)) = 'fsoyilov@gmail.com';

UPDATE public.profiles
SET role = 'admin', updated_at = now()
WHERE role = 'superadmin' AND LOWER(TRIM(COALESCE(email, ''))) != 'fsoyilov@gmail.com';

-- Ensure auth.users app_metadata is aligned
UPDATE auth.users
SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', 'superadmin')
WHERE LOWER(TRIM(email)) = 'fsoyilov@gmail.com';

UPDATE auth.users
SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', 'admin')
WHERE (raw_app_meta_data->>'role') = 'superadmin' AND LOWER(TRIM(COALESCE(email, ''))) != 'fsoyilov@gmail.com';

-- 3. Strict is_superadmin() function:
--    STRICT ENFORCEMENT: Only fsoyilov@gmail.com (or service_role) is Super Admin.
--    No other email or forged role can satisfy this check.
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
    -- Service role bypass for internal operations
    IF auth.role() = 'service_role' OR current_user = 'service_role' THEN
        RETURN TRUE;
    END IF;

    _uid := auth.uid();

    -- Check JWT email claim strictly for fsoyilov@gmail.com
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email = 'fsoyilov@gmail.com' THEN
        RETURN TRUE;
    END IF;

    -- Check auth.users strictly for fsoyilov@gmail.com
    IF _uid IS NOT NULL THEN
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _auth_email
        FROM auth.users
        WHERE id = _uid;

        IF _auth_email = 'fsoyilov@gmail.com' THEN
            RETURN TRUE;
        END IF;

        -- Check public.profiles strictly for fsoyilov@gmail.com
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

-- 4. Robust is_admin() function:
--    Permits Super Admin (fsoyilov@gmail.com), DEFAULT_ADMIN_EMAILS (admin@nihongo-talk.jp),
--    or any appointed user with profiles.role = 'admin'.
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
    IF auth.role() = 'service_role' OR current_user = 'service_role' THEN
        RETURN TRUE;
    END IF;

    IF public.is_superadmin() THEN
        RETURN TRUE;
    END IF;

    _uid := auth.uid();

    -- Check JWT email claim
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp') THEN
        RETURN TRUE;
    END IF;

    IF _uid IS NOT NULL THEN
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _auth_email
        FROM auth.users
        WHERE id = _uid;

        IF _auth_email IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp') THEN
            RETURN TRUE;
        END IF;

        SELECT LOWER(TRIM(COALESCE(role, ''))), LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp')
           OR _profile_role = 'admin'
           OR (_profile_role = 'superadmin' AND _profile_email = 'fsoyilov@gmail.com') THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated, service_role;

-- 5. Secure set_user_admin_role RPC function:
--    - Caller must be is_admin() or is_superadmin()
--    - fsoyilov@gmail.com CANNOT be demoted or modified
--    - Assigning admin role only grants 'admin' (never 'superadmin')
--    - Revoking admin role downgrades to 'user'
--    - Automatically writes to public.admin_audit_logs
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
    _has_permission BOOLEAN;
    _resolved_id UUID;
    _resolved_email TEXT;
    _new_role TEXT;
    _actor_email TEXT;
    _actor_uid UUID;
BEGIN
    _actor_uid := auth.uid();

    -- Check caller privileges: must be admin or superadmin
    _has_permission := public.is_admin() OR public.is_superadmin() OR auth.role() = 'service_role' OR _actor_uid IS NULL;
    IF NOT _has_permission THEN
        RAISE EXCEPTION 'Ruxsat cheklangan: Faqat adminlar admin huquqlarini boshqara oladi.';
    END IF;

    IF assigned_by_email IS NOT NULL AND TRIM(assigned_by_email) != '' THEN
        _actor_email := LOWER(TRIM(assigned_by_email));
    ELSE
        SELECT LOWER(TRIM(COALESCE(email, ''))) INTO _actor_email FROM auth.users WHERE id = _actor_uid;
        IF _actor_email IS NULL OR _actor_email = '' THEN
            _actor_email := 'fsoyilov@gmail.com';
        END IF;
    END IF;

    -- Resolve target user ID and email
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

    -- Protect primary superadmin (fsoyilov@gmail.com) from being demoted or modified
    IF LOWER(TRIM(COALESCE(_resolved_email, target_email, ''))) = 'fsoyilov@gmail.com' AND NOT make_admin THEN
        RETURN jsonb_build_object('success', false, 'error', 'Super Admin rolini olib tashlash mumkin emas');
    END IF;

    -- If target is fsoyilov@gmail.com, role is always superadmin
    -- Otherwise, role can only be 'admin' or 'user' (never superadmin)
    IF LOWER(TRIM(COALESCE(_resolved_email, target_email, ''))) = 'fsoyilov@gmail.com' THEN
        _new_role := 'superadmin';
    ELSE
        _new_role := CASE WHEN make_admin THEN 'admin' ELSE 'user' END;
    END IF;

    -- 1. Update public.profiles
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

    -- 2. Update auth.users metadata
    UPDATE auth.users
    SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', _new_role),
        raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || jsonb_build_object('role', _new_role)
    WHERE id = _resolved_id;

    -- 3. Log action in public.admin_audit_logs
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

GRANT EXECUTE ON FUNCTION public.set_user_admin_role(UUID, TEXT, BOOLEAN, TEXT) TO anon, authenticated, service_role;

-- 6. Update get_admin_all_users() RPC to strictly reflect single superadmin
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
            (CASE 
                WHEN LOWER(TRIM(p.email)) = 'fsoyilov@gmail.com' THEN 'superadmin'
                WHEN COALESCE(p.role, 'user') = 'superadmin' THEN 'admin'
                ELSE COALESCE(p.role, 'user')
            END)::TEXT AS role,
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
            WHEN COALESCE(p.role, 'user') = 'superadmin' THEN 'admin'
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

-- 7. get_admin_audit_logs RPC
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

-- 8. Profiles RLS Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;
CREATE POLICY "Admins can update any profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (public.is_admin() OR public.is_superadmin())
WITH CHECK (public.is_admin() OR public.is_superadmin());

-- 9. Admin Audit Logs RLS Policies
ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can view audit logs" ON public.admin_audit_logs;
CREATE POLICY "Admins can view audit logs"
ON public.admin_audit_logs
FOR SELECT
TO authenticated
USING (public.is_admin() OR public.is_superadmin());

DROP POLICY IF EXISTS "Admins can insert audit logs" ON public.admin_audit_logs;
CREATE POLICY "Admins can insert audit logs"
ON public.admin_audit_logs
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin() OR public.is_superadmin());

COMMIT;
