-- ====================================================================
-- NIHONGO TALK - Consolidated Database Schema & Unified Tables Baseline
-- Migration: 20260918000001_consolidated_schema_baseline.sql
-- Description:
--   1. Ensures all core tables exist (speaking_sessions, ielts_writing_history, mock_exams_history, etc.)
--   2. Synchronizes legacy speaking_coach_sessions data into speaking_sessions
--   3. Sets hardened Row Level Security (RLS) policies and composite indexes
-- ====================================================================

-- 1. Speaking Sessions (Single Canonical Source of Truth)
CREATE TABLE IF NOT EXISTS public.speaking_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    user_email TEXT,
    language TEXT DEFAULT 'ja',
    scenario_id TEXT,
    topic TEXT,
    persona_title TEXT,
    fluency_score NUMERIC DEFAULT 0,
    pronunciation_score NUMERIC DEFAULT 0,
    grammar_score NUMERIC DEFAULT 0,
    vocabulary_score NUMERIC DEFAULT 0,
    overall_score NUMERIC DEFAULT 0,
    duration_seconds NUMERIC DEFAULT 0,
    feedback TEXT,
    ai_feedback TEXT,
    transcript JSONB DEFAULT '[]'::jsonb,
    audio_path TEXT,
    audio_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Ensure all columns exist idempotently
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS user_email TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'ja';
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS scenario_id TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS topic TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS persona_title TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS fluency_score NUMERIC DEFAULT 0;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS pronunciation_score NUMERIC DEFAULT 0;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS grammar_score NUMERIC DEFAULT 0;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS vocabulary_score NUMERIC DEFAULT 0;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS overall_score NUMERIC DEFAULT 0;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS duration_seconds NUMERIC DEFAULT 0;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS feedback TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS ai_feedback TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS transcript JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS audio_path TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS audio_url TEXT;
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users create own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users update own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users delete own speaking sessions" ON public.speaking_sessions;

CREATE POLICY "Users and admins read speaking sessions" 
    ON public.speaking_sessions FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own speaking sessions" 
    ON public.speaking_sessions FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own speaking sessions" 
    ON public.speaking_sessions FOR UPDATE TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users delete own speaking sessions" 
    ON public.speaking_sessions FOR DELETE TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_speaking_sessions_user_created ON public.speaking_sessions(user_id, created_at DESC);

-- 2. IELTS Writing History Table
CREATE TABLE IF NOT EXISTS public.ielts_writing_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    task_type TEXT NOT NULL,
    prompt TEXT NOT NULL,
    essay TEXT NOT NULL,
    score NUMERIC NOT NULL,
    criteria JSONB,
    feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.ielts_writing_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own writing history" ON public.ielts_writing_history;
CREATE POLICY "Users can view own writing history" ON public.ielts_writing_history
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can insert own writing history" ON public.ielts_writing_history;
CREATE POLICY "Users can insert own writing history" ON public.ielts_writing_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_ielts_writing_history_user_created ON public.ielts_writing_history(user_id, created_at DESC);

-- 3. Mock Exams History Table
CREATE TABLE IF NOT EXISTS public.mock_exams_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_type TEXT NOT NULL,
    level TEXT,
    score NUMERIC NOT NULL,
    total_questions INTEGER NOT NULL,
    band_score NUMERIC,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.mock_exams_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own mock exams history" ON public.mock_exams_history;
CREATE POLICY "Users can view own mock exams history" ON public.mock_exams_history
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can insert own mock exams history" ON public.mock_exams_history;
CREATE POLICY "Users can insert own mock exams history" ON public.mock_exams_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_mock_exams_history_user_created ON public.mock_exams_history(user_id, created_at DESC);

-- 4. One-way Data Backfill from legacy speaking_coach_sessions to speaking_sessions (if legacy exists)
DO $$
BEGIN
    IF EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'speaking_coach_sessions'
    ) THEN
        INSERT INTO public.speaking_sessions (
            id, user_id, language, topic, persona_title,
            duration_seconds, fluency_score, pronunciation_score,
            overall_score, feedback, ai_feedback, created_at
        )
        SELECT 
            sc.id, sc.user_id, sc.language, sc.persona, sc.persona,
            sc.duration_seconds, sc.fluency_score, sc.pronunciation_score,
            sc.fluency_score, sc.feedback, sc.feedback, sc.created_at
        FROM public.speaking_coach_sessions sc
        ON CONFLICT (id) DO NOTHING;
    END IF;
END $$;
