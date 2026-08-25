-- ====================================================================
-- KAIZEN AI - Supabase Security Advisor & Performance Optimization
-- Clean duplicate RLS policies, fix search_path & revoke public execute
-- ====================================================================

-- 1. Function search_path fixes & execution revokes from public/anon
ALTER FUNCTION public.handle_updated_at() SET search_path = public;
ALTER FUNCTION public.is_admin() SET search_path = public;
ALTER FUNCTION public.get_admin_all_users() SET search_path = public, auth;

REVOKE EXECUTE ON FUNCTION public.is_admin() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated, service_role;

REVOKE EXECUTE ON FUNCTION public.get_admin_all_users() FROM public, anon;
GRANT EXECUTE ON FUNCTION public.get_admin_all_users() TO authenticated, service_role;

-- 2. Drop duplicate redundant indexes
DROP INDEX IF EXISTS public.idx_speaking_sessions_user_created;
DROP INDEX IF EXISTS public.idx_diagnostic_results_user_lang;
DROP INDEX IF EXISTS public.idx_study_sessions_user_time;

-- 3. Fix security definer view admin_daily_stats
DROP VIEW IF EXISTS public.admin_daily_stats;
CREATE VIEW public.admin_daily_stats WITH (security_invoker = true) AS
SELECT
  (ss.start_time::date) as activity_date,
  count(distinct ss.user_id) as active_users,
  sum(ss.duration) as total_duration_minutes,
  count(ss.id) as total_sessions
FROM public.study_sessions ss
GROUP BY (ss.start_time::date)
ORDER BY activity_date DESC;

GRANT SELECT ON public.admin_daily_stats TO authenticated, service_role;
