-- ====================================================================
-- Cron Jobni har daqiqalikka o'tkazish (max precision)
-- Token `private.edge_auth_tokens` vault jadvalidan o'qiladi — SQL ichiga
-- secret hardcoded yozilmaydi. Vault yaratish/INSERT ko'rsatmasi:
-- supabase/cron_job_setup.sql (0-qadam).
-- ====================================================================

SELECT cron.unschedule('daily-notifications-job');

SELECT cron.schedule(
    'daily-notifications-job',
    '* * * * *', -- Har daqiqada ishlaydi
    $$
    select
        net.http_post(
            url:='https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/daily-notifications',
            headers:=jsonb_build_object(
                'Content-Type', 'application/json',
                'Authorization', 'Bearer ' || (
                    SELECT token FROM private.edge_auth_tokens WHERE name = 'daily-notifications'
                )
            ),
            body:='{}'::jsonb
        ) as request_id;
    $$
);
