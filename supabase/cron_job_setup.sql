-- 1. Kerakli kengaytmalarni yoqish
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- 2. Eskisini o'chirish (Agar mavjud bo'lsa)
-- Xatolik bermasligi uchun DO blok ichiga oldik
DO $$
BEGIN
    PERFORM cron.unschedule('daily-notifications-job');
EXCEPTION
    WHEN OTHERS THEN
        NULL; -- Agar job topilmasa, shunchaki o'tkazib yuboradi
END $$;

-- 3. Yangi jadval tuzish (Har kuni ertalab 09:00 da)
SELECT cron.schedule(
    'daily-notifications-job',
    '0 9 * * *',
    $$
    select
        net.http_post(
            url:='https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/daily-notifications',
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_SUPABASE_SERVICE_ROLE_KEY"}'::jsonb,
            body:='{}'::jsonb
        ) as request_id;
    $$
);
