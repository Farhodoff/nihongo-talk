-- Migration: Core Features DB Persistence
-- Tables: diagnostic_sessions, diagnostic_results, speaking_sessions, scenario_histories, 
--         lesson_progress, completed_lessons, study_sessions, ai_chat_messages, telegram_accounts

-- 1. DIAGNOSTIK TEST SESSIYALARI VA NATIJALARI
CREATE TABLE IF NOT EXISTS public.diagnostic_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    current_phase TEXT NOT NULL DEFAULT 'in_progress',
    answers JSONB NOT NULL DEFAULT '[]'::jsonb,
    state JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.diagnostic_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_diag_sessions ON public.diagnostic_sessions;
DROP POLICY IF EXISTS insert_own_diag_sessions ON public.diagnostic_sessions;
DROP POLICY IF EXISTS update_own_diag_sessions ON public.diagnostic_sessions;
DROP POLICY IF EXISTS delete_own_diag_sessions ON public.diagnostic_sessions;

CREATE POLICY select_own_diag_sessions ON public.diagnostic_sessions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_diag_sessions ON public.diagnostic_sessions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY update_own_diag_sessions ON public.diagnostic_sessions FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY delete_own_diag_sessions ON public.diagnostic_sessions FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_diag_sessions_user ON public.diagnostic_sessions(user_id, language);

CREATE TABLE IF NOT EXISTS public.diagnostic_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    estimated_level TEXT NOT NULL,
    cefr_level TEXT,
    overall_score NUMERIC(5, 2),
    skill_breakdown JSONB NOT NULL DEFAULT '{}'::jsonb,
    weaknesses JSONB NOT NULL DEFAULT '[]'::jsonb,
    strengths JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_diag_results ON public.diagnostic_results;
DROP POLICY IF EXISTS insert_own_diag_results ON public.diagnostic_results;
DROP POLICY IF EXISTS update_own_diag_results ON public.diagnostic_results;
DROP POLICY IF EXISTS delete_own_diag_results ON public.diagnostic_results;

CREATE POLICY select_own_diag_results ON public.diagnostic_results FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_diag_results ON public.diagnostic_results FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY update_own_diag_results ON public.diagnostic_results FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY delete_own_diag_results ON public.diagnostic_results FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_diag_results_user ON public.diagnostic_results(user_id, language);

-- 2. SPEAKING MULOQOT TARIXI VA AI TAHLILLARI
CREATE TABLE IF NOT EXISTS public.speaking_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    topic TEXT,
    duration_seconds INTEGER DEFAULT 0,
    total_turns INTEGER DEFAULT 0,
    fluency_score NUMERIC(5, 2),
    grammar_score NUMERIC(5, 2),
    vocabulary_score NUMERIC(5, 2),
    transcript JSONB NOT NULL DEFAULT '[]'::jsonb,
    ai_feedback TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_speaking ON public.speaking_sessions;
DROP POLICY IF EXISTS insert_own_speaking ON public.speaking_sessions;

CREATE POLICY select_own_speaking ON public.speaking_sessions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_speaking ON public.speaking_sessions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_user ON public.speaking_sessions(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS public.scenario_histories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    scenario_id TEXT NOT NULL,
    scenario_title TEXT NOT NULL,
    language TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    score INTEGER DEFAULT 0,
    messages JSONB NOT NULL DEFAULT '[]'::jsonb,
    feedback JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.scenario_histories ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_scenarios ON public.scenario_histories;
DROP POLICY IF EXISTS insert_own_scenarios ON public.scenario_histories;

CREATE POLICY select_own_scenarios ON public.scenario_histories FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_scenarios ON public.scenario_histories FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_scenario_histories_user ON public.scenario_histories(user_id, scenario_id);

-- 3. DARS JARAYONI VA TUGATILGAN DARSLAR
CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    language TEXT NOT NULL,
    current_step INTEGER NOT NULL DEFAULT 0,
    total_steps INTEGER NOT NULL DEFAULT 1,
    is_completed BOOLEAN NOT NULL DEFAULT false,
    last_accessed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_user_lesson UNIQUE (user_id, lesson_id)
);

ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_lesson_progress ON public.lesson_progress;
DROP POLICY IF EXISTS insert_own_lesson_progress ON public.lesson_progress;
DROP POLICY IF EXISTS update_own_lesson_progress ON public.lesson_progress;

CREATE POLICY select_own_lesson_progress ON public.lesson_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_lesson_progress ON public.lesson_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY update_own_lesson_progress ON public.lesson_progress FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user ON public.lesson_progress(user_id, language);

CREATE TABLE IF NOT EXISTS public.completed_lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    language TEXT NOT NULL,
    score INTEGER DEFAULT 100,
    completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_user_completed_lesson UNIQUE (user_id, lesson_id)
);

ALTER TABLE public.completed_lessons ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_completed_lessons ON public.completed_lessons;
DROP POLICY IF EXISTS insert_own_completed_lessons ON public.completed_lessons;

CREATE POLICY select_own_completed_lessons ON public.completed_lessons FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_completed_lessons ON public.completed_lessons FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_completed_lessons_user ON public.completed_lessons(user_id, language);

-- 4. FOKUS VAQTI VA STUDY SESSIONS
CREATE TABLE IF NOT EXISTS public.study_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    start_time TIMESTAMPTZ NOT NULL DEFAULT now(),
    end_time TIMESTAMPTZ,
    duration INTEGER NOT NULL DEFAULT 0,
    type TEXT DEFAULT 'focus',
    subject_id UUID,
    task_id UUID,
    notes TEXT,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.study_sessions ADD COLUMN IF NOT EXISTS start_time TIMESTAMPTZ NOT NULL DEFAULT now();
ALTER TABLE public.study_sessions ADD COLUMN IF NOT EXISTS end_time TIMESTAMPTZ;
ALTER TABLE public.study_sessions ADD COLUMN IF NOT EXISTS duration INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.study_sessions ADD COLUMN IF NOT EXISTS notes TEXT;

ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_study_sessions ON public.study_sessions;
DROP POLICY IF EXISTS insert_own_study_sessions ON public.study_sessions;

CREATE POLICY select_own_study_sessions ON public.study_sessions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_study_sessions ON public.study_sessions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_start ON public.study_sessions(user_id, start_time DESC);

-- 5. AI ASSISTANT CHAT XABARLARI TARIXI
CREATE TABLE IF NOT EXISTS public.ai_chat_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,
    language TEXT NOT NULL DEFAULT 'en',
    topic_context TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_chat_messages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_ai_chat ON public.ai_chat_messages;
DROP POLICY IF EXISTS insert_own_ai_chat ON public.ai_chat_messages;

CREATE POLICY select_own_ai_chat ON public.ai_chat_messages FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_ai_chat ON public.ai_chat_messages FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_ai_chat_user ON public.ai_chat_messages(user_id, created_at ASC);

-- 6. TELEGRAM BOG‘LANGAN AKKAUNTLAR
CREATE TABLE IF NOT EXISTS public.telegram_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    telegram_chat_id BIGINT NOT NULL UNIQUE,
    telegram_username TEXT,
    first_name TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    notifications_enabled BOOLEAN NOT NULL DEFAULT true,
    reminder_time TIME DEFAULT '20:00:00',
    linked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_user_telegram UNIQUE (user_id)
);

ALTER TABLE public.telegram_accounts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS select_own_telegram ON public.telegram_accounts;
DROP POLICY IF EXISTS insert_own_telegram ON public.telegram_accounts;
DROP POLICY IF EXISTS update_own_telegram ON public.telegram_accounts;

CREATE POLICY select_own_telegram ON public.telegram_accounts FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY insert_own_telegram ON public.telegram_accounts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY update_own_telegram ON public.telegram_accounts FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_telegram_chat_id ON public.telegram_accounts(telegram_chat_id);
