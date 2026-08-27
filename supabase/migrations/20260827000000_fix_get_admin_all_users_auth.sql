-- ====================================================================
-- NIHONGO TALK MIGRATION: Fix get_admin_all_users() auth check
-- Purpose: Replace is_admin() check with direct JWT email verification
--          to fix RPC context where auth.uid() returns NULL
-- ====================================================================

-- Fix get_admin_all_users() RPC function authorization check
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
    -- Direct JWT email check instead of is_admin() which uses auth.uid()
    IF lower(trim(auth.jwt() ->> 'email')) <> 'fsoyilov@gmail.com' THEN
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
