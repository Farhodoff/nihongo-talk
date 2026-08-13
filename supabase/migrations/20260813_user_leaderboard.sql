-- ====================================================================
-- KAIZEN AI - Global Student Leaderboard Schema Migration
-- Table: public.user_leaderboard
-- ====================================================================

CREATE TABLE IF NOT EXISTS public.user_leaderboard (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    user_email TEXT NOT NULL,
    display_name TEXT NOT NULL,
    avatar_url TEXT,
    total_xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    level_title TEXT DEFAULT 'Boshlang''ich Talaba',
    streak_days INTEGER DEFAULT 1,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_leaderboard ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running to avoid ERROR 42710
DROP POLICY IF EXISTS "Public read leaderboard" ON public.user_leaderboard;
DROP POLICY IF EXISTS "Public write leaderboard" ON public.user_leaderboard;

-- Allow public read access to leaderboard
CREATE POLICY "Public read leaderboard"
    ON public.user_leaderboard FOR SELECT
    USING (true);

-- Allow all users/guests to write their leaderboard score
CREATE POLICY "Public write leaderboard"
    ON public.user_leaderboard FOR ALL
    USING (true)
    WITH CHECK (true);

-- Indices for rapid sorting
CREATE INDEX IF NOT EXISTS idx_user_leaderboard_xp ON public.user_leaderboard(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_user_leaderboard_streak ON public.user_leaderboard(streak_days DESC);
