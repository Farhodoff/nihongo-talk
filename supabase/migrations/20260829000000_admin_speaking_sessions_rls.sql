-- ====================================================================
-- KAIZEN AI - Admin RLS Policy Extension for Speaking Coach & Histories
-- Migration: 20260829000000_admin_speaking_sessions_rls.sql
-- Enables admin oversight for speaking_sessions, speaking_coach_sessions,
-- scenario_histories, and ai_chat_messages while enforcing strict user isolation.
-- ====================================================================

-- 1. speaking_sessions: Allow users to read own and admins to read all
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public insert speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public update speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users read own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users create own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users update own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users delete own speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS select_own_speaking ON public.speaking_sessions;
DROP POLICY IF EXISTS insert_own_speaking ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users and admins read speaking sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Users and admins manage speaking sessions" ON public.speaking_sessions;

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


-- 2. speaking_coach_sessions: Enable RLS, user isolation + admin read
CREATE TABLE IF NOT EXISTS public.speaking_coach_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    persona_title TEXT,
    fluency_score NUMERIC DEFAULT 0,
    vocabulary_score NUMERIC DEFAULT 0,
    grammar_score NUMERIC DEFAULT 0,
    pronunciation_score NUMERIC DEFAULT 0,
    feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users and admins read coach sessions" ON public.speaking_coach_sessions;
DROP POLICY IF EXISTS "Users create own coach sessions" ON public.speaking_coach_sessions;
DROP POLICY IF EXISTS "Users delete own coach sessions" ON public.speaking_coach_sessions;
DROP POLICY IF EXISTS "Foydalanuvchi faqat o'zining natijalarini ko'ra oladi" ON public.speaking_coach_sessions;
DROP POLICY IF EXISTS "Foydalanuvchi faqat o'ziga natija saqlay oladi" ON public.speaking_coach_sessions;
DROP POLICY IF EXISTS "Foydalanuvchi faqat o'zining natijasini o'chira oladi" ON public.speaking_coach_sessions;

CREATE POLICY "Users and admins read coach sessions" 
    ON public.speaking_coach_sessions FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own coach sessions" 
    ON public.speaking_coach_sessions FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own coach sessions" 
    ON public.speaking_coach_sessions FOR DELETE TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE INDEX IF NOT EXISTS idx_speaking_coach_sessions_user ON public.speaking_coach_sessions(user_id, created_at DESC);


-- 3. scenario_histories: User isolation + admin read
ALTER TABLE public.scenario_histories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS select_own_scenarios ON public.scenario_histories;
DROP POLICY IF EXISTS insert_own_scenarios ON public.scenario_histories;
DROP POLICY IF EXISTS "Users and admins read scenario histories" ON public.scenario_histories;
DROP POLICY IF EXISTS "Users create own scenario histories" ON public.scenario_histories;

CREATE POLICY "Users and admins read scenario histories" 
    ON public.scenario_histories FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own scenario histories" 
    ON public.scenario_histories FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);


-- 4. ai_chat_messages: User isolation + admin read
ALTER TABLE public.ai_chat_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS select_own_ai_chat ON public.ai_chat_messages;
DROP POLICY IF EXISTS insert_own_ai_chat ON public.ai_chat_messages;
DROP POLICY IF EXISTS "Users and admins read ai chat messages" ON public.ai_chat_messages;
DROP POLICY IF EXISTS "Users create own ai chat messages" ON public.ai_chat_messages;

CREATE POLICY "Users and admins read ai chat messages" 
    ON public.ai_chat_messages FOR SELECT TO authenticated 
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users create own ai chat messages" 
    ON public.ai_chat_messages FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);
