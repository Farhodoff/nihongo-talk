-- Add notification_time column to telegram_users table
ALTER TABLE public.telegram_users 
ADD COLUMN IF NOT EXISTS notification_time TEXT NOT NULL DEFAULT '09:00';

-- Add check constraint to ensure valid time format (HH:MM)
ALTER TABLE public.telegram_users 
DROP CONSTRAINT IF EXISTS telegram_users_notification_time_check;
ALTER TABLE public.telegram_users
ADD CONSTRAINT telegram_users_notification_time_check 
CHECK (notification_time ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$');

-- Update cron job to run hourly instead of daily
SELECT cron.unschedule('daily-notifications-job');

SELECT cron.schedule(
    'daily-notifications-job',
    '0 * * * *', -- Run every hour at minute 0
    $$
    select
        net.http_post(
            url:='https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/daily-notifications',
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_SUPABASE_SERVICE_ROLE_KEY"}'::jsonb,
            body:='{}'::jsonb
        ) as request_id;
    $$
);
