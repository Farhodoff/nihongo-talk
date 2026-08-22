-- ====================================================================
-- BITTA CLICK UCHUN: console 404 xatolarini to'xtatuvchi 14 table
-- Supabase Dashboard -> SQL Editor -> Run. Qo'llagach o'chirib tashlang.
-- Manbalar: 20260827 (4 ta) + 20260823 (8 ta) + user_leaderboard + missed_study_logs
-- ====================================================================

-- ====================================================================
-- MISSING TABLES (2026-08-27) — console 404 spam fix
--
-- Live DB'da MAVJUD EMAS, lekin frontend ularni chaqiradi
-- (har biri 404 PGRST205 -> console xatolar):
--   admin_announcements  (UserNotificationService.ts:221,248)
--   scenarios            (ScenarioService.ts:23,79)
--   coach_sessions       (ScenarioService.ts:159)
--   exam_results         (ExportImportService.ts:123,221)
--
-- admin_announcements uchun P0 (20260824) dagi DO-block ushbu table
-- mavjud bo'lmagani uchun skip qilgan edi — shu yerda yaratiladi.
-- scenarios = conversation_scenarios nusxasi (kod ikkala nomni ishlatadi).
-- ====================================================================

-- --------------------------------------------------------------------
-- 1) admin_announcements: global broadcast (public read, admin write)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_announcements (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    tag TEXT DEFAULT 'general',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.admin_announcements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read announcements" ON public.admin_announcements;
CREATE POLICY "Public read announcements"
    ON public.admin_announcements FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Admins manage announcements" ON public.admin_announcements;
CREATE POLICY "Admins manage announcements"
    ON public.admin_announcements FOR ALL TO authenticated
    USING (is_admin()) WITH CHECK (is_admin());

-- --------------------------------------------------------------------
-- 2) scenarios: conversation_scenarios bilan bir xil shema/policy
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.scenarios (
    id VARCHAR(255) PRIMARY KEY,
    title_ja TEXT NOT NULL,
    title_uz TEXT NOT NULL,
    emoji TEXT DEFAULT '🗣️',
    difficulty VARCHAR(10) DEFAULT 'N4',
    category VARCHAR(50) DEFAULT 'daily',
    description_uz TEXT,
    opening_line_ja TEXT,
    context_prompt TEXT,
    key_phrases JSONB DEFAULT '[]'::jsonb,
    is_custom BOOLEAN NOT NULL DEFAULT true,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.scenarios ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Read bundled or own scenarios" ON public.scenarios;
CREATE POLICY "Read bundled or own scenarios"
    ON public.scenarios FOR SELECT
    USING (is_custom = false OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Create own scenarios" ON public.scenarios;
CREATE POLICY "Create own scenarios"
    ON public.scenarios FOR INSERT TO authenticated
    WITH CHECK (is_custom = true AND auth.uid() = user_id);

DROP POLICY IF EXISTS "Update own scenarios" ON public.scenarios;
CREATE POLICY "Update own scenarios"
    ON public.scenarios FOR UPDATE TO authenticated
    USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Delete own scenarios" ON public.scenarios;
CREATE POLICY "Delete own scenarios"
    ON public.scenarios FOR DELETE TO authenticated
    USING (auth.uid() = user_id);

-- --------------------------------------------------------------------
-- 3) coach_sessions: speaking natijalari (owner-only)
--    ScenarioService insert: user_id, persona_title, *_score,
--    duration_seconds, feedback (user_id null bo'lishi mumkin —
--    guest insertlar RLS tomonidan bloklanadi, kod try/catch bilan yutadi)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    user_email TEXT,
    persona_title TEXT,
    fluency_score INTEGER DEFAULT 0,
    vocabulary_score INTEGER DEFAULT 0,
    grammar_score INTEGER DEFAULT 0,
    pronunciation_score INTEGER DEFAULT 0,
    overall_score INTEGER DEFAULT 0,
    duration_seconds INTEGER DEFAULT 0,
    feedback TEXT,
    transcript JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.coach_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own coach sessions" ON public.coach_sessions;
CREATE POLICY "Users read own coach sessions"
    ON public.coach_sessions FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users create own coach sessions" ON public.coach_sessions;
CREATE POLICY "Users create own coach sessions"
    ON public.coach_sessions FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- --------------------------------------------------------------------
-- 4) exam_results: export/import uchun (owner-only)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.exam_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_id TEXT,
    score INTEGER,
    total_questions INTEGER,
    time_spent_seconds INTEGER,
    completed_at TIMESTAMPTZ,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read own exam results" ON public.exam_results;
CREATE POLICY "Users read own exam results"
    ON public.exam_results FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users create own exam results" ON public.exam_results;
CREATE POLICY "Users create own exam results"
    ON public.exam_results FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users update own exam results" ON public.exam_results;
CREATE POLICY "Users update own exam results"
    ON public.exam_results FOR UPDATE TO authenticated
    USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users delete own exam results" ON public.exam_results;
CREATE POLICY "Users delete own exam results"
    ON public.exam_results FOR DELETE TO authenticated
    USING (auth.uid() = user_id);

-- ====================================================================
-- 20260823: diagnostic/lesson/vocab/mastery/targets/quiz (8 table)
-- ====================================================================

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

-- ====================================================================
-- user_leaderboard
-- ====================================================================

-- ====================================================================
-- KAIZEN AI - Global Student Leaderboard Schema Migration
-- Table: public.user_leaderboard
-- ====================================================================

CREATE TABLE IF NOT EXISTS public.user_leaderboard (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    user_email TEXT NOT NULL,
    display_name TEXT NOT NULL,
    avatar_url TEXT,
    total_xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    level_title TEXT DEFAULT 'Boshlang''ich Talaba',
    streak_days INTEGER DEFAULT 1,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_leaderboard ENABLE ROW LEVEL SECURITY;

-- SECURITY: eski "Public write leaderboard" (USING true) POLICY TAQIQLANGAN —
-- bu 20260824 P0 fix'dagi xavfsiz versiyasi (authenticated read, owner-scoped write)
DROP POLICY IF EXISTS "Public read leaderboard" ON public.user_leaderboard;
DROP POLICY IF EXISTS "Public write leaderboard" ON public.user_leaderboard;

CREATE POLICY "Authenticated read leaderboard"
    ON public.user_leaderboard FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "Users insert own leaderboard rows"
    ON public.user_leaderboard FOR INSERT TO authenticated
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users update own leaderboard rows"
    ON public.user_leaderboard FOR UPDATE TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users delete own leaderboard rows"
    ON public.user_leaderboard FOR DELETE TO authenticated
    USING (user_id = auth.uid());

-- Indices for rapid sorting
CREATE INDEX IF NOT EXISTS idx_user_leaderboard_xp ON public.user_leaderboard(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_user_leaderboard_streak ON public.user_leaderboard(streak_days DESC);

-- ====================================================================
-- missed_study_logs (idempotent versiya)
-- ====================================================================

CREATE TABLE IF NOT EXISTS public.missed_study_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  missed_date DATE NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.missed_study_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view their own missed study logs" ON public.missed_study_logs;
CREATE POLICY "Users can view their own missed study logs" ON public.missed_study_logs FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert their own missed study logs" ON public.missed_study_logs;
CREATE POLICY "Users can insert their own missed study logs" ON public.missed_study_logs FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
