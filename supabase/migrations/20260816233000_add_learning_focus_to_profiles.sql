-- Migration: Add Personalized Learning Focus fields to profiles
-- Run in Supabase SQL Editor

ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS primary_language TEXT DEFAULT 'en',
ADD COLUMN IF NOT EXISTS enabled_languages TEXT[] DEFAULT ARRAY['en']::TEXT[],
ADD COLUMN IF NOT EXISTS target_level TEXT,
ADD COLUMN IF NOT EXISTS target_goal TEXT;

-- Refresh schema cache
NOTIFY pgrst, 'reload schema';
