-- ====================================================================
-- KAIZEN AI - Supabase Database Schema Migration
-- Tables: conversation_scenarios, speaking_sessions
-- ====================================================================

-- 1. Conversation Scenarios Table
CREATE TABLE IF NOT EXISTS public.conversation_scenarios (
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
    is_custom BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for conversation_scenarios
ALTER TABLE public.conversation_scenarios ENABLE ROW LEVEL SECURITY;

-- Allow public read access to conversation_scenarios
CREATE POLICY "Public read scenarios" 
    ON public.conversation_scenarios FOR SELECT 
    USING (true);

-- Allow admins/users to insert and update scenarios
CREATE POLICY "Public write scenarios" 
    ON public.conversation_scenarios FOR ALL 
    USING (true)
    WITH CHECK (true);


-- 2. Speaking Sessions Table (Stores audio scores & full conversation transcripts)
CREATE TABLE IF NOT EXISTS public.speaking_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    user_email TEXT,
    scenario_id VARCHAR(255),
    persona_title TEXT NOT NULL,
    fluency_score INTEGER DEFAULT 0,
    pronunciation_score INTEGER DEFAULT 0,
    grammar_score INTEGER DEFAULT 0,
    vocabulary_score INTEGER DEFAULT 0,
    overall_score INTEGER DEFAULT 0,
    duration_seconds INTEGER DEFAULT 0,
    feedback TEXT,
    transcript JSONB DEFAULT '[]'::jsonb, -- Full turn-by-turn chat transcript [{role, content, timestamp}]
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for speaking_sessions
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;

-- Allow read access for authenticated and anonymous users
CREATE POLICY "Public read speaking_sessions" 
    ON public.speaking_sessions FOR SELECT 
    USING (true);

-- Allow insert access for all users
CREATE POLICY "Public insert speaking_sessions" 
    ON public.speaking_sessions FOR INSERT 
    WITH CHECK (true);

-- Allow update/delete for admin oversight
CREATE POLICY "Public update speaking_sessions" 
    ON public.speaking_sessions FOR ALL 
    USING (true);

-- Indices for rapid querying in Admin Analytics
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_user_email ON public.speaking_sessions(user_email);
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_created_at ON public.speaking_sessions(created_at DESC);
