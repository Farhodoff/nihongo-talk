-- ====================================================================
-- KAIZEN AI - Database-First Schema & Automatic Sync Unification
-- Migration: 20260830000000_unify_database_first_schema.sql
-- ====================================================================

-- 1. speaking_sessions: Table & Safe Column Migrations
CREATE TABLE IF NOT EXISTS public.speaking_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Ensure all required columns exist even on legacy tables
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
ALTER TABLE public.speaking_sessions ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users create own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users update own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users delete own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public read speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public insert speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public update speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users read own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS select_own_speaking ON public.speaking_sessions;
DROP POLICY IF EXISTS insert_own_speaking ON public.speaking_sessions;

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


-- 2. diagnostic_results: Table & Safe Column Migrations
CREATE TABLE IF NOT EXISTS public.diagnostic_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL DEFAULT 'ja',
    score NUMERIC NOT NULL DEFAULT 0,
    estimated_level TEXT NOT NULL DEFAULT 'A1',
    confidence NUMERIC DEFAULT 0,
    weaknesses JSONB DEFAULT '[]'::jsonb,
    strengths JSONB DEFAULT '[]'::jsonb,
    breakdown JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'ja';
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS score NUMERIC DEFAULT 0;
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS estimated_level TEXT DEFAULT 'A1';
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS confidence NUMERIC DEFAULT 0;
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS weaknesses JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS strengths JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS breakdown JSONB DEFAULT '{}'::jsonb;
ALTER TABLE public.diagnostic_results ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

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

ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'ja';
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS verbatim TEXT;
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS correction TEXT;
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS explanation TEXT DEFAULT '';
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'grammar';
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS times_reviewed INTEGER DEFAULT 0;
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();
ALTER TABLE public.speaking_errors ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

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

ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'ja';
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS target_level TEXT;
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS goal_type TEXT DEFAULT 'jlpt';
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS daily_study_minutes INTEGER DEFAULT 30;
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS target_exam_date DATE;
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();
ALTER TABLE public.learning_goals ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

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
