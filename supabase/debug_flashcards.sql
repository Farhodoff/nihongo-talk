-- Debug: Check if flashcards table exists and has correct structure
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'flashcards'
ORDER BY ordinal_position;

-- Check RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'flashcards';

-- Test insert (replace with your user_id and subject_id)
-- First, get your user_id:
SELECT id, email FROM auth.users LIMIT 1;

-- Then test insert:
INSERT INTO flashcards (user_id, subject_id, front, back, next_review_date, ease_factor, interval, repetitions)
VALUES (
    'YOUR_USER_ID_HERE',  -- Replace with actual user_id from above
    'YOUR_SUBJECT_ID_HERE',  -- Replace with actual subject_id
    'Test Front',
    'Test Back',
    NOW(),
    2.5,
    0,
    0
);
