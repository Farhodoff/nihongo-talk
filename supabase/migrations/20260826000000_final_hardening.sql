-- ====================================================================
-- FINAL HARDENING (2026-08-26)
--
-- RateLimit / rate_limit tables: identifier-based (id, identifier,
-- count, expiresAt, lockedUntil, createdAt) with NO user_id column.
-- No application code references them at runtime (verified by grep
-- across src/, api/, supabase/functions/, server/ — rate limiting is
-- done by api/_rateLimit.js via Upstash/in-memory). The broad policy
-- "Authenticated users manage RateLimit" (FOR ALL, auth.uid() IS NOT
-- NULL) let any authenticated user read and overwrite every other
-- user's rate-limit rows.
--
-- Owner scoping is impossible (no user_id column), the tables are
-- unused by the app, and the service role bypasses RLS — so the safe
-- minimal fix is to drop the permissive policies entirely. Tables are
-- intentionally NOT dropped (UNUSED SECURITY TABLE CANDIDATE).
-- ====================================================================

DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'RateLimit') THEN
        EXECUTE 'DROP POLICY IF EXISTS "Authenticated users manage RateLimit" ON public."RateLimit"';
        EXECUTE 'DROP POLICY IF EXISTS "Allow authenticated full access to RateLimit" ON public."RateLimit"';
    END IF;

    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'rate_limit') THEN
        EXECUTE 'DROP POLICY IF EXISTS "Authenticated users manage rate_limit" ON public.rate_limit';
        EXECUTE 'DROP POLICY IF EXISTS "Allow authenticated full access to rate_limit" ON public.rate_limit';
    END IF;
END $$;
