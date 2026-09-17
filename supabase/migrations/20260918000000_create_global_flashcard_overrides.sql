-- Migration: 20260918000000_create_global_flashcard_overrides.sql
-- Description: Table for global flashcard word, translation, phonetic, and structure overrides managed by Admins and Super Admins

BEGIN;

-- 1. Create table for global flashcard overrides
CREATE TABLE IF NOT EXISTS public.global_flashcard_overrides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    word TEXT NOT NULL UNIQUE, -- Normalized original word or front key
    front TEXT NOT NULL,       -- Japanese word/kanji
    phonetic TEXT,             -- Reading / Furigana / Romaji
    back TEXT NOT NULL,        -- Uzbek translation / meaning
    example TEXT,              -- Example sentence / Structure / Grammar notes
    deck_id TEXT,              -- Optional associated deck (e.g. deck_minna_shokyu1)
    category TEXT,             -- Optional category or lesson
    updated_by TEXT,           -- Email of the admin who updated the card
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);

-- Index for fast lookup by word
CREATE INDEX IF NOT EXISTS idx_global_flashcard_overrides_word ON public.global_flashcard_overrides (word);
CREATE INDEX IF NOT EXISTS idx_global_flashcard_overrides_deck_id ON public.global_flashcard_overrides (deck_id);

ALTER TABLE public.global_flashcard_overrides ENABLE ROW LEVEL SECURITY;

-- 2. RLS Policies
-- Allow all users (including guests/anon) to read global overrides
DROP POLICY IF EXISTS "Public read global flashcard overrides" ON public.global_flashcard_overrides;
CREATE POLICY "Public read global flashcard overrides"
ON public.global_flashcard_overrides FOR SELECT
TO authenticated, anon
USING (true);

-- Allow only Admins and Superadmins to insert, update, or delete overrides
DROP POLICY IF EXISTS "Admins manage global flashcard overrides" ON public.global_flashcard_overrides;
CREATE POLICY "Admins manage global flashcard overrides"
ON public.global_flashcard_overrides FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 3. Permissions
GRANT ALL ON public.global_flashcard_overrides TO authenticated, service_role;
GRANT SELECT ON public.global_flashcard_overrides TO anon;

COMMIT;
