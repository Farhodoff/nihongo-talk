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
