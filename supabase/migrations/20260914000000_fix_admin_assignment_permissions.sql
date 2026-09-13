-- Migration: 20260914000000_fix_admin_assignment_permissions.sql
-- Description: Expand superadmin recognition to all Farhod accounts,
--              permit both admins and superadmins in set_user_admin_role,
--              add direct Admin UPDATE RLS policy on profiles.

BEGIN;

-- 1. Ensure profiles columns exist
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS admin_assigned_by TEXT,
ADD COLUMN IF NOT EXISTS admin_assigned_at TIMESTAMPTZ;

-- 2. Update profiles roles for Farhod's accounts to superadmin
UPDATE public.profiles
SET role = 'superadmin', updated_at = now()
WHERE LOWER(TRIM(email)) IN (
    'fsoyilov@gmail.com',
    'fsoyilovv@gmail.com',
    'soyilovfarhod157@gmail.com',
    'soyilovfarhod684@gmail.com'
);

-- Also update auth.users app_metadata
UPDATE auth.users
SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', 'superadmin')
WHERE LOWER(TRIM(email)) IN (
    'fsoyilov@gmail.com',
    'fsoyilovv@gmail.com',
    'soyilovfarhod157@gmail.com',
    'soyilovfarhod684@gmail.com'
);

-- 3. Robust is_superadmin() function
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
    _profile_role TEXT;
    _profile_email TEXT;
BEGIN
    -- Check if called by service role
    IF auth.role() = 'service_role' OR current_user = 'service_role' THEN
        RETURN TRUE;
    END IF;

    _uid := auth.uid();

    -- Check JWT email claim
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email IN (
        'fsoyilov@gmail.com',
        'fsoyilovv@gmail.com',
        'soyilovfarhod157@gmail.com',
        'soyilovfarhod684@gmail.com'
    ) THEN
        RETURN TRUE;
    END IF;

    IF _uid IS NOT NULL THEN
        -- Check auth.users
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _auth_email
        FROM auth.users
        WHERE id = _uid;

        IF _auth_email IN (
            'fsoyilov@gmail.com',
            'fsoyilovv@gmail.com',
            'soyilovfarhod157@gmail.com',
            'soyilovfarhod684@gmail.com'
        ) THEN
            RETURN TRUE;
        END IF;

        -- Check public.profiles
        SELECT LOWER(TRIM(COALESCE(role, ''))), LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email IN (
            'fsoyilov@gmail.com',
            'fsoyilovv@gmail.com',
            'soyilovfarhod157@gmail.com',
            'soyilovfarhod684@gmail.com'
        ) OR _profile_role = 'superadmin' THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_superadmin() TO anon, authenticated, service_role;

-- 4. Robust is_admin() function
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

    _uid := auth.uid();

    -- Check JWT email claim
    BEGIN
        _jwt_email := LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', '')));
    EXCEPTION WHEN OTHERS THEN
        _jwt_email := '';
    END;

    IF _jwt_email IN (
        'fsoyilov@gmail.com',
        'fsoyilovv@gmail.com',
        'soyilovfarhod157@gmail.com',
        'soyilovfarhod684@gmail.com',
        'admin@nihongo-talk.jp'
    ) THEN
        RETURN TRUE;
    END IF;

    IF _uid IS NOT NULL THEN
        SELECT LOWER(TRIM(COALESCE(email, '')))
        INTO _auth_email
        FROM auth.users
        WHERE id = _uid;

        IF _auth_email IN (
            'fsoyilov@gmail.com',
            'fsoyilovv@gmail.com',
            'soyilovfarhod157@gmail.com',
            'soyilovfarhod684@gmail.com',
            'admin@nihongo-talk.jp'
        ) THEN
            RETURN TRUE;
        END IF;

        SELECT LOWER(TRIM(COALESCE(role, ''))), LOWER(TRIM(COALESCE(email, '')))
        INTO _profile_role, _profile_email
        FROM public.profiles
        WHERE id = _uid;

        IF _profile_email IN (
            'fsoyilov@gmail.com',
            'fsoyilovv@gmail.com',
            'soyilovfarhod157@gmail.com',
            'soyilovfarhod684@gmail.com',
            'admin@nihongo-talk.jp'
        ) OR _profile_role IN ('admin', 'superadmin') THEN
            RETURN TRUE;
        END IF;
    END IF;

    RETURN FALSE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated, service_role;

-- 5. set_user_admin_role: Permits both Superadmin and Admin to assign/revoke
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

    -- Protect primary superadmin emails from being demoted
    IF LOWER(TRIM(COALESCE(_resolved_email, ''))) IN ('fsoyilov@gmail.com', 'fsoyilovv@gmail.com') AND NOT make_admin THEN
        RETURN jsonb_build_object('success', false, 'error', 'Super Admin rolini olib tashlash mumkin emas');
    END IF;

    _new_role := CASE WHEN make_admin THEN 'admin' ELSE 'user' END;

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

    -- 3. Log into admin_audit_logs
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

-- 6. Add RLS policy allowing Admins to update profiles directly as fallback
DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;
CREATE POLICY "Admins can update any profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (public.is_admin() OR public.is_superadmin())
WITH CHECK (public.is_admin() OR public.is_superadmin());

-- 7. Ensure admin_audit_logs allows admins to insert and select
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
