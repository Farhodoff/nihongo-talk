
-- Enable pg_cron extension
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;

-- Enable pg_net extension to make HTTP calls to Edge Functions
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Schedule the cleanup of expired telegram codes (internal DB function)
-- Runs every day at 3:00 AM
SELECT cron.schedule(
    'cleanup-telegram-codes',
    '0 3 * * *',
    $$SELECT cleanup_expired_telegram_codes()$$
);

-- Note: Scheduling the Edge Function 'daily-notifications' via SQL requires making an HTTP request.
-- This is complex to hardcode because we need the PROJECT_REF and ANON_KEY/SERVICE_KEY.
-- 
-- Recommended approach:
-- 1. Use Supabase Dashboard: Integrations -> Cron
-- 2. Or use the following template (Replace URL and KEY):
--
-- SELECT cron.schedule(
--    'daily-notifications-job',
--    '0 9 * * *', -- Every day at 9:00 AM
--    $$
--    select
--        net.http_post(
--            url:='https://PROJECT_REF.supabase.co/functions/v1/daily-notifications',
--            headers:='{"Content-Type": "application/json", "Authorization": "Bearer SERVICE_ROLE_KEY"}'::jsonb,
--            body:='{}'::jsonb
--        ) as request_id;
--    $$
-- );
