-- ====================================================================
-- CRON → daily-notifications (Secret key migration, 2026-08-26)
--
-- Endi Bearer token SQL/job ichiga hardcoded yozilmaydi: u `private`
-- schema'dagi vault jadvaldan o'qiladi. `private` schema PostgREST API
-- orqali expose qilinmaydi va anon/authenticated rollarga REVOKE qilingan.
--
-- BIR MARARTA (Supabase SQL Editor, qiymatni o'zingiz kiriting — repo'ga
-- yozilmaydi):
--   INSERT INTO private.edge_auth_tokens (name, token)
--   VALUES ('daily-notifications', 'sb_secret_YANGI_SECRET_KEY')
--   ON CONFLICT (name) DO UPDATE SET token = EXCLUDED.token, updated_at = NOW();
-- ====================================================================

-- 0. Vault: private schema + token jadval (faqat postgres/service_role)
CREATE SCHEMA IF NOT EXISTS private;

CREATE TABLE IF NOT EXISTS private.edge_auth_tokens (
    name TEXT PRIMARY KEY,
    token TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

REVOKE ALL ON SCHEMA private FROM anon, authenticated;
REVOKE ALL ON TABLE private.edge_auth_tokens FROM anon, authenticated;

-- 1. Kerakli kengaytmalarni yoqish
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- 2. Barcha eski/dublikat daily joblarni o'chirish (faqat BITTASI qoladi)
DO $$
DECLARE
    old_job RECORD;
BEGIN
    FOR old_job IN SELECT jobid, jobname FROM cron.job WHERE jobname ILIKE '%daily%'
    LOOP
        RAISE NOTICE 'unscheduling old job: %', old_job.jobname;
        PERFORM cron.unschedule(old_job.jobid);
    END LOOP;
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END $$;

-- 3. Yangi jadval (har kuni 09:00) — token vault'dan o'qiladi
SELECT cron.schedule(
    'daily-notifications-job',
    '0 9 * * *',
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

-- 4. Yakuniy holatni ko'rish (faqat bitta active job qolishi kerak)
SELECT jobid, jobname, schedule, active FROM cron.job WHERE jobname ILIKE '%daily%';
