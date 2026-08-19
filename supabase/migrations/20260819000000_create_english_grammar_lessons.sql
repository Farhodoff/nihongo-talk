-- Migration: 20260819000000_create_english_grammar_lessons.sql
-- Description: Create public.grammar_lessons table for dynamic English grammar curriculum

CREATE TABLE IF NOT EXISTS public.grammar_lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language VARCHAR(10) DEFAULT 'en' NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    level VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    structure TEXT NOT NULL,
    uzbek_meaning TEXT,
    explanation TEXT NOT NULL,
    ielts_relevance TEXT,
    academic_examples JSONB DEFAULT '[]'::jsonb,
    common_mistakes JSONB DEFAULT '[]'::jsonb,
    quiz_questions JSONB DEFAULT '[]'::jsonb,
    order_index INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_lang_pub ON public.grammar_lessons(language, is_published, order_index);
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_level ON public.grammar_lessons(level);
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_slug ON public.grammar_lessons(slug);

-- Enable RLS
ALTER TABLE public.grammar_lessons ENABLE ROW LEVEL SECURITY;

-- Policy 1: Everyone (authenticated or anon) can read published lessons
CREATE POLICY "Allow public read access on published grammar lessons"
ON public.grammar_lessons
FOR SELECT
USING (is_published = true);

-- Policy 2: Super Admin can perform all operations (INSERT, UPDATE, DELETE)
CREATE POLICY "Allow super admin full access to grammar lessons"
ON public.grammar_lessons
FOR ALL
TO authenticated
USING (
    auth.jwt() ->> 'email' = 'fsoyilov@gmail.com'
)
WITH CHECK (
    auth.jwt() ->> 'email' = 'fsoyilov@gmail.com'
);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_grammar_lessons_updated_at ON public.grammar_lessons;
CREATE TRIGGER trigger_grammar_lessons_updated_at
BEFORE UPDATE ON public.grammar_lessons
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
