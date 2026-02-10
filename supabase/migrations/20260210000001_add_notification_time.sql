-- Add notification_time column to telegram_users table
ALTER TABLE public.telegram_users 
ADD COLUMN IF NOT EXISTS notification_time TEXT NOT NULL DEFAULT '09:00';

-- Add check constraint to ensure valid time format (HH:MM)
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
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzIwNTMxMCwiZXhwIjoyMDgyNzgxMzEwfQ.9nvvhDoiK2E79TQH60Yz5mCf-zTb8iO7Uu9lpQq8sTM"}'::jsonb,
            body:='{}'::jsonb
        ) as request_id;
    $$
);
