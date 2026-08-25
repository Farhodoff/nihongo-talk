-- ====================================================================
-- KAIZEN AI - Database-First Schema & Automatic Sync Unification
-- Migration: 20260830000000_unify_database_first_schema.sql
-- Establishes primary database tables, indexes and RLS policies for:
-- 1. speaking_sessions (AI voice, scenarios, mock examiner logs)
-- 2. diagnostic_results (placement & proficiency benchmark tests)
-- 3. speaking_errors (error vault & mistake bank)
-- 4. learning_goals (personal target levels & study schedules)
-- 5. study_sessions (focus/pomodoro history)
-- ====================================================================

-- 1. speaking_sessions
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
    created_at TIMESTAMPTZ DEFAULT now()
);

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
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_language ON public.speaking_sessions(language, created_at DESC);


-- 2. diagnostic_results
CREATE TABLE IF NOT EXISTS public.diagnostic_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'ja',
    score NUMERIC NOT NULL DEFAULT 0,
    estimated_level TEXT NOT NULL,
    confidence NUMERIC DEFAULT 0,
    weaknesses JSONB DEFAULT '[]'::jsonb,
    strengths JSONB DEFAULT '[]'::jsonb,
    breakdown JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users and admins read diagnostic results" ON public.diagnostic_results;
DROP POLICY IF EXISTS "Users create own diagnostic results" ON public.diagnostic_results;
DROP POLICY IF EXISTS "Users delete own diagnostic results" ON public.diagnostic_results;

CREATE POLICY "Users and admins read diagnostic results" 
    ON public.diagnostic_results FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own diagnostic results" 
    ON public.diagnostic_results FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own diagnostic results" 
    ON public.diagnostic_results FOR DELETE TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_diagnostic_results_user_lang ON public.diagnostic_results(user_id, language, created_at DESC);


-- 3. speaking_errors (Error Vault & Mistake Bank)
CREATE TABLE IF NOT EXISTS public.speaking_errors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'ja',
    verbatim TEXT NOT NULL,
    correction TEXT NOT NULL,
    explanation TEXT DEFAULT '',
    category TEXT DEFAULT 'grammar',
    times_reviewed INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.speaking_errors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users and admins read speaking errors" ON public.speaking_errors;
DROP POLICY IF EXISTS "Users create own speaking errors" ON public.speaking_errors;
DROP POLICY IF EXISTS "Users update own speaking errors" ON public.speaking_errors;
DROP POLICY IF EXISTS "Users delete own speaking errors" ON public.speaking_errors;

CREATE POLICY "Users and admins read speaking errors" 
    ON public.speaking_errors FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own speaking errors" 
    ON public.speaking_errors FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own speaking errors" 
    ON public.speaking_errors FOR UPDATE TO authenticated 
    USING (auth.uid() = user_id);

CREATE POLICY "Users delete own speaking errors" 
    ON public.speaking_errors FOR DELETE TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_speaking_errors_user_created ON public.speaking_errors(user_id, created_at DESC);


-- 4. learning_goals (Personal Targets & Schedule)
CREATE TABLE IF NOT EXISTS public.learning_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'ja',
    target_level TEXT NOT NULL,
    goal_type TEXT DEFAULT 'jlpt',
    daily_study_minutes INTEGER DEFAULT 30,
    target_exam_date DATE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.learning_goals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users and admins read learning goals" ON public.learning_goals;
DROP POLICY IF EXISTS "Users create own learning goals" ON public.learning_goals;
DROP POLICY IF EXISTS "Users update own learning goals" ON public.learning_goals;
DROP POLICY IF EXISTS "Users delete own learning goals" ON public.learning_goals;

CREATE POLICY "Users and admins read learning goals" 
    ON public.learning_goals FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own learning goals" 
    ON public.learning_goals FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own learning goals" 
    ON public.learning_goals FOR UPDATE TO authenticated 
    USING (auth.uid() = user_id);

CREATE POLICY "Users delete own learning goals" 
    ON public.learning_goals FOR DELETE TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_learning_goals_user_lang ON public.learning_goals(user_id, language);
