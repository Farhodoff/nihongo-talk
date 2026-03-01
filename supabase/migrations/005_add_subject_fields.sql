-- Add description and icon columns to subjects table
-- Run this in Supabase SQL Editor: https://app.supabase.com

ALTER TABLE subjects
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS icon TEXT DEFAULT 'book';

-- Add comment for documentation
COMMENT ON COLUMN subjects.description IS 'Short description of the subject (max 100 chars)';
COMMENT ON COLUMN subjects.icon IS 'Icon identifier for the subject (code, microphone, globe, book, calculator, beaker, music, palette)';
