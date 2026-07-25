-- Supabase SQL Migration Script for History Tables
-- Copy and run this script in your Supabase SQL Editor (https://supabase.com/dashboard)

-- 1. Speaking Coach Sessions Table
CREATE TABLE IF NOT EXISTS public.speaking_coach_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    language TEXT NOT NULL DEFAULT 'en',
    persona TEXT NOT NULL,
    duration_seconds INTEGER NOT NULL DEFAULT 0,
    fluency_score NUMERIC NOT NULL DEFAULT 0,
    pronunciation_score NUMERIC NOT NULL DEFAULT 0,
    transcript TEXT,
    feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.speaking_coach_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own speaking sessions" ON public.speaking_coach_sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own speaking sessions" ON public.speaking_coach_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS speaking_coach_sessions_user_id_idx ON public.speaking_coach_sessions(user_id);


-- 2. IELTS Writing History Table
CREATE TABLE IF NOT EXISTS public.ielts_writing_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    task_type TEXT NOT NULL,
    prompt TEXT NOT NULL,
    essay TEXT NOT NULL,
    score NUMERIC NOT NULL,
    criteria JSONB,
    feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.ielts_writing_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own writing history" ON public.ielts_writing_history
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own writing history" ON public.ielts_writing_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS ielts_writing_history_user_id_idx ON public.ielts_writing_history(user_id);


-- 3. Mock Exams History Table (IELTS & JLPT)
CREATE TABLE IF NOT EXISTS public.mock_exams_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_type TEXT NOT NULL,
    level TEXT,
    score NUMERIC NOT NULL,
    total_questions INTEGER NOT NULL,
    band_score NUMERIC,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.mock_exams_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own mock exams history" ON public.mock_exams_history
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own mock exams history" ON public.mock_exams_history
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS mock_exams_history_user_id_idx ON public.mock_exams_history(user_id);
