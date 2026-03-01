-- Check all tables for data (bypass RLS with service_role)
-- Run this in Supabase SQL Editor

-- 1. Check tasks
SELECT COUNT(*) as task_count FROM tasks;

-- 2. Check subjects
SELECT COUNT(*) as subject_count FROM subjects;

-- 3. Check flashcards
SELECT COUNT(*) as flashcard_count FROM flashcards;

-- 4. Check users
SELECT id, email FROM auth.users;

-- 5. Check if flashcards exist but RLS is blocking
SELECT 
    f.id,
    f.user_id,
    f.front,
    f.back,
    f.created_at
FROM flashcards f
ORDER BY f.created_at DESC
LIMIT 10;

-- 6. Check subjects
SELECT 
    s.id,
    s.user_id,
    s.name,
    s.created_at
FROM subjects s
ORDER BY s.created_at DESC
LIMIT 10;
