-- Cron Jobni har daqiqalikka o'tkazish
-- Bu istalgan daqiqada (masalan 21:21) xabar yuborish imkonini beradi
SELECT cron.unschedule('daily-notifications-job');

SELECT cron.schedule(
    'daily-notifications-job',
    '* * * * *', -- Har daqiqada ishlaydi
    $$
    select
        net.http_post(
            url:='https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/daily-notifications',
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzIwNTMxMCwiZXhwIjoyMDgyNzgxMzEwfQ.9nvvhDoiK2E79TQH60Yz5mCf-zTb8iO7Uu9lpQq8sTM"}'::jsonb,
            body:='{}'::jsonb
        ) as request_id;
    $$
);
