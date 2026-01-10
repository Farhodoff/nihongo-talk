-- Reset current user's XP and Level to 0
-- This will reset your gamification progress

UPDATE profiles
SET 
    total_xp = 0,
    level = 1,
    current_streak = 0
WHERE id = auth.uid();
