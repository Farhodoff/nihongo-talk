-- ==========================================================
-- CREATE ADMIN DAILY STATS VIEW FOR ACTIVITY GRAPH
-- ==========================================================

DROP VIEW IF EXISTS public.admin_daily_stats;

-- Create security definer view to aggregate daily active users and study times
CREATE VIEW public.admin_daily_stats WITH (security_invoker = false) AS
SELECT 
  (ss.start_time::date) as activity_date,
  count(distinct ss.user_id) as active_users,
  sum(ss.duration) as total_duration_minutes,
  count(ss.id) as total_sessions
FROM public.study_sessions ss
GROUP BY (ss.start_time::date)
ORDER BY activity_date DESC;

-- Grant select permission to authenticated users
GRANT SELECT ON public.admin_daily_stats TO authenticated;
