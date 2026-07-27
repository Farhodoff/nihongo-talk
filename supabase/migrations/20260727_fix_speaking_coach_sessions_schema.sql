-- Migration to fix speaking_coach_sessions table structure mismatch
-- Add persona_title, vocabulary_score, and grammar_score columns to avoid 400 Bad Request

ALTER TABLE public.speaking_coach_sessions 
ADD COLUMN IF NOT EXISTS persona_title TEXT,
ADD COLUMN IF NOT EXISTS vocabulary_score NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS grammar_score NUMERIC DEFAULT 0;
