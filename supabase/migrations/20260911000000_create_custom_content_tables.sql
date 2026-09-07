-- Migration: 20260911000000_create_custom_content_tables.sql
-- Description: Create custom_kanji and custom_grammar tables with RLS and indexes for Admin Content Studio

BEGIN;

-- 1. Create custom_kanji table
CREATE TABLE IF NOT EXISTS public.custom_kanji (
    id TEXT PRIMARY KEY,
    kanji TEXT NOT NULL UNIQUE,
    level TEXT NOT NULL CHECK (level IN ('N5', 'N4', 'N3', 'N2', 'N1')),
    onyomi TEXT DEFAULT '-',
    kunyomi TEXT DEFAULT '-',
    meaning_uz TEXT NOT NULL,
    stroke_count INTEGER DEFAULT 1,
    examples JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create custom_grammar table
CREATE TABLE IF NOT EXISTS public.custom_grammar (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL UNIQUE,
    level TEXT NOT NULL CHECK (level IN ('N5', 'N4', 'N3', 'N2', 'N1')),
    romaji TEXT,
    meaning_uz TEXT NOT NULL,
    structure TEXT,
    examples JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Indexes for high performance querying & filtering
CREATE INDEX IF NOT EXISTS idx_custom_kanji_level ON public.custom_kanji (level);
CREATE INDEX IF NOT EXISTS idx_custom_kanji_kanji ON public.custom_kanji (kanji);
CREATE INDEX IF NOT EXISTS idx_custom_grammar_level ON public.custom_grammar (level);
CREATE INDEX IF NOT EXISTS idx_custom_grammar_title ON public.custom_grammar (title);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.custom_kanji ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_grammar ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for custom_kanji
DROP POLICY IF EXISTS "custom_kanji_select_policy" ON public.custom_kanji;
CREATE POLICY "custom_kanji_select_policy"
ON public.custom_kanji
FOR SELECT
USING (true);

DROP POLICY IF EXISTS "custom_kanji_insert_policy" ON public.custom_kanji;
CREATE POLICY "custom_kanji_insert_policy"
ON public.custom_kanji
FOR INSERT
WITH CHECK ((SELECT public.is_admin()));

DROP POLICY IF EXISTS "custom_kanji_update_policy" ON public.custom_kanji;
CREATE POLICY "custom_kanji_update_policy"
ON public.custom_kanji
FOR UPDATE
USING ((SELECT public.is_admin()))
WITH CHECK ((SELECT public.is_admin()));

DROP POLICY IF EXISTS "custom_kanji_delete_policy" ON public.custom_kanji;
CREATE POLICY "custom_kanji_delete_policy"
ON public.custom_kanji
FOR DELETE
USING ((SELECT public.is_admin()));

-- 6. RLS Policies for custom_grammar
DROP POLICY IF EXISTS "custom_grammar_select_policy" ON public.custom_grammar;
CREATE POLICY "custom_grammar_select_policy"
ON public.custom_grammar
FOR SELECT
USING (true);

DROP POLICY IF EXISTS "custom_grammar_insert_policy" ON public.custom_grammar;
CREATE POLICY "custom_grammar_insert_policy"
ON public.custom_grammar
FOR INSERT
WITH CHECK ((SELECT public.is_admin()));

DROP POLICY IF EXISTS "custom_grammar_update_policy" ON public.custom_grammar;
CREATE POLICY "custom_grammar_update_policy"
ON public.custom_grammar
FOR UPDATE
USING ((SELECT public.is_admin()))
WITH CHECK ((SELECT public.is_admin()));

DROP POLICY IF EXISTS "custom_grammar_delete_policy" ON public.custom_grammar;
CREATE POLICY "custom_grammar_delete_policy"
ON public.custom_grammar
FOR DELETE
USING ((SELECT public.is_admin()));

-- 7. Permissions
GRANT SELECT ON public.custom_kanji TO anon, authenticated;
GRANT ALL ON public.custom_kanji TO authenticated, service_role;

GRANT SELECT ON public.custom_grammar TO anon, authenticated;
GRANT ALL ON public.custom_grammar TO authenticated, service_role;

COMMIT;
