-- ====================================================================
-- user_subscriptions.updated_at (2026-08-28)
--
-- LIVE FIX: signup 500 "Database error saving new user" —
-- handle_new_user_subscription() triggeri INSERTda `updated_at`
-- ustuniga yozadi, lekin bu uston table'da mavjud bo'lmagani uchun
-- har bir yangi user yaratilishi yiqilardi.
-- Fix: ustunni DEFAULT NOW() bilan qo'shish (trigger kutganidek).
-- ====================================================================

ALTER TABLE public.user_subscriptions
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();
