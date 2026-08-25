-- ====================================================================
-- KAIZEN AI - Fix Critical Security Linter Error (0015_rls_references_user_metadata)
-- Drop insecure user_metadata policies on public.user_roles and secure with auth.uid() & is_admin()
-- ====================================================================

-- 1. Enable RLS on user_roles
ALTER TABLE IF EXISTS public.user_roles ENABLE ROW LEVEL SECURITY;

-- 2. Drop all insecure policies referencing user_metadata
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert or modify roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admin manage all roles" ON public.user_roles;

-- 3. Create secure policies using auth.uid() and is_admin()
CREATE POLICY "Users can view their own roles"
    ON public.user_roles
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Admins can insert or modify roles"
    ON public.user_roles
    FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

GRANT SELECT ON public.user_roles TO authenticated, service_role;
