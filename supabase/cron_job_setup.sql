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

-- 3. Yangi jadval tuzish (Har kuni ertalab 09:00 va kechqurun 21:00 da)
SELECT cron.schedule(
    'daily-notifications-job',
    '0 9,21 * * *',
    $$
    select
        net.http_post(
            url:='https://qmuimxnknxwarvnkpnlo.supabase.co/functions/v1/daily-notifications',
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdWlteG5rbnh3YXJ2bmtwbmxvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzIwNTMxMCwiZXhwIjoyMDgyNzgxMzEwfQ.9nvvhDoiK2E79TQH60Yz5mCf-zTb8iO7Uu9lpQq8sTM"}'::jsonb,
            body:='{}'::jsonb
        ) as request_id;
    $$
);
