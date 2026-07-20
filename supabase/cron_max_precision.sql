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
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_SUPABASE_SERVICE_ROLE_KEY"}'::jsonb,
            body:='{}'::jsonb
        ) as request_id;
    $$
);
