-- Add soft delete support to tasks and flashcards tables
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMP WITH TIME ZONE NULL;
ALTER TABLE flashcards ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMP WITH TIME ZONE NULL;
