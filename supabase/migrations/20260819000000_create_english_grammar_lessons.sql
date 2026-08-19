-- Migration: 20260819000000_create_english_grammar_lessons.sql
-- Description: Create public.grammar_lessons & public.english_grammar_progress tables with RLS and user isolation

-- 1. Grammar Lessons Table (Curriculum Source of Truth)
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

-- Enable RLS for grammar lessons
ALTER TABLE public.grammar_lessons ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public read access on published lessons
CREATE POLICY "Allow public read access on published grammar lessons"
ON public.grammar_lessons
FOR SELECT
USING (is_published = true);

-- Policy 2: Super Admin full access (INSERT, UPDATE, DELETE)
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

-- 2. User Grammar Progress Table (Protected User Isolation)
CREATE TABLE IF NOT EXISTS public.english_grammar_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_slug VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    score NUMERIC DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 1,
    last_attempt_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT unique_user_lesson_progress UNIQUE (user_id, lesson_slug)
);

CREATE INDEX IF NOT EXISTS idx_english_grammar_progress_user ON public.english_grammar_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_english_grammar_progress_slug ON public.english_grammar_progress(lesson_slug);

-- Enable RLS for progress
ALTER TABLE public.english_grammar_progress ENABLE ROW LEVEL SECURITY;

-- Policy 1: Users can ONLY select their own progress
CREATE POLICY "Users can view their own grammar progress"
ON public.english_grammar_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy 2: Users can ONLY insert their own progress
CREATE POLICY "Users can insert their own grammar progress"
ON public.english_grammar_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Policy 3: Users can ONLY update their own progress
CREATE POLICY "Users can update their own grammar progress"
ON public.english_grammar_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

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

DROP TRIGGER IF EXISTS trigger_english_grammar_progress_updated_at ON public.english_grammar_progress;
CREATE TRIGGER trigger_english_grammar_progress_updated_at
BEFORE UPDATE ON public.english_grammar_progress
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
