-- Migration: Complete LocalStorage to Supabase Database Migration
-- Creates tables for Diagnostic, Lesson Progress, Error Vault, Vocabulary Builder, JLPT Item Mastery, User Targets, and Quiz History

-- ==========================================================
-- 1. DIAGNOSTIC SESSIONS & RESULTS
-- ==========================================================
CREATE TABLE IF NOT EXISTS public.diagnostic_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    current_step INTEGER NOT NULL DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    start_time TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    status TEXT DEFAULT 'in_progress',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.diagnostic_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    estimated_level TEXT NOT NULL,
    score NUMERIC NOT NULL,
    confidence NUMERIC DEFAULT 0,
    weaknesses JSONB DEFAULT '[]'::jsonb,
    strengths JSONB DEFAULT '[]'::jsonb,
    breakdown JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================================
-- 2. LESSON STEP PROGRESS & ERROR VAULT
-- ==========================================================
CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    language TEXT NOT NULL,
    current_step_index INTEGER NOT NULL DEFAULT 0,
    is_completed BOOLEAN DEFAULT false,
    score NUMERIC DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.speaking_errors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    verbatim TEXT NOT NULL,
    correction TEXT NOT NULL,
    explanation TEXT,
    category TEXT DEFAULT 'grammar',
    times_reviewed INTEGER DEFAULT 0,
    last_reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================================
-- 3. VOCABULARY BUILDER & JLPT ITEM MASTERY
-- ==========================================================
CREATE TABLE IF NOT EXISTS public.user_saved_vocabulary (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    term TEXT NOT NULL,
    reading TEXT,
    meaning TEXT NOT NULL,
    example_sentence TEXT,
    example_translation TEXT,
    is_saved BOOLEAN DEFAULT true,
    search_count INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.jlpt_item_mastery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    item_id TEXT NOT NULL,
    item_type TEXT DEFAULT 'vocab',
    mastery_status TEXT NOT NULL DEFAULT 'learning',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================================
-- 4. USER TARGETS & QUIZ HISTORY
-- ==========================================================
CREATE TABLE IF NOT EXISTS public.user_targets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    target_type TEXT NOT NULL,
    target_score TEXT NOT NULL,
    target_date TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.quiz_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subject_id TEXT,
    subject_name TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    xp_earned INTEGER DEFAULT 0,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================================
-- 5. ENABLE ROW LEVEL SECURITY (RLS) ON ALL NEW TABLES
-- ==========================================================
ALTER TABLE public.diagnostic_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.speaking_errors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_saved_vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jlpt_item_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_targets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_history ENABLE ROW LEVEL SECURITY;

-- ==========================================================
-- 6. RLS POLICIES FOR USER DATA ISOLATION (auth.uid() = user_id)
-- ==========================================================
-- diagnostic_sessions
DROP POLICY IF EXISTS "Users can manage own diagnostic_sessions" ON public.diagnostic_sessions;
CREATE POLICY "Users can manage own diagnostic_sessions" ON public.diagnostic_sessions
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- diagnostic_results
DROP POLICY IF EXISTS "Users can manage own diagnostic_results" ON public.diagnostic_results;
CREATE POLICY "Users can manage own diagnostic_results" ON public.diagnostic_results
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- lesson_progress
DROP POLICY IF EXISTS "Users can manage own lesson_progress" ON public.lesson_progress;
CREATE POLICY "Users can manage own lesson_progress" ON public.lesson_progress
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- speaking_errors
DROP POLICY IF EXISTS "Users can manage own speaking_errors" ON public.speaking_errors;
CREATE POLICY "Users can manage own speaking_errors" ON public.speaking_errors
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- user_saved_vocabulary
DROP POLICY IF EXISTS "Users can manage own user_saved_vocabulary" ON public.user_saved_vocabulary;
CREATE POLICY "Users can manage own user_saved_vocabulary" ON public.user_saved_vocabulary
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- jlpt_item_mastery
DROP POLICY IF EXISTS "Users can manage own jlpt_item_mastery" ON public.jlpt_item_mastery;
CREATE POLICY "Users can manage own jlpt_item_mastery" ON public.jlpt_item_mastery
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- user_targets
DROP POLICY IF EXISTS "Users can manage own user_targets" ON public.user_targets;
CREATE POLICY "Users can manage own user_targets" ON public.user_targets
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- quiz_history
DROP POLICY IF EXISTS "Users can manage own quiz_history" ON public.quiz_history;
CREATE POLICY "Users can manage own quiz_history" ON public.quiz_history
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ==========================================================
-- 7. PERFORMANCE & COMPOSITE INDEXES
-- ==========================================================
CREATE INDEX IF NOT EXISTS idx_diagnostic_sessions_user_lang ON public.diagnostic_sessions(user_id, language);
CREATE INDEX IF NOT EXISTS idx_diagnostic_results_user_lang ON public.diagnostic_results(user_id, language);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user_lesson ON public.lesson_progress(user_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_speaking_errors_user_lang ON public.speaking_errors(user_id, language);
CREATE INDEX IF NOT EXISTS idx_saved_vocab_user_lang ON public.user_saved_vocabulary(user_id, language);
CREATE INDEX IF NOT EXISTS idx_jlpt_mastery_user_item ON public.jlpt_item_mastery(user_id, item_id);
CREATE INDEX IF NOT EXISTS idx_user_targets_user_type ON public.user_targets(user_id, target_type);
CREATE INDEX IF NOT EXISTS idx_quiz_history_user ON public.quiz_history(user_id);
