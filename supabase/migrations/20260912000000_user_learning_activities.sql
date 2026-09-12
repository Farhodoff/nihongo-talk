-- Migration: Create user_learning_activities table
-- Tracks unified student activities (flashcards, speaking, focus, lessons, quizzes)
-- Fully synchronized with Supabase Postgres with RLS and high-performance indexes.

CREATE TABLE IF NOT EXISTS public.user_learning_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL, -- 'flashcards' | 'speaking' | 'focus' | 'lesson' | 'quiz' | 'exam'
    activity_title TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 0,
    items_count INTEGER NOT NULL DEFAULT 0,
    xp_earned INTEGER NOT NULL DEFAULT 0,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    activity_date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_learning_activities ENABLE ROW LEVEL SECURITY;

-- Policies (Optimized subqueries using (select auth.uid()))
CREATE POLICY "Users can select own learning activities"
    ON public.user_learning_activities
    FOR SELECT
    TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own learning activities"
    ON public.user_learning_activities
    FOR INSERT
    TO authenticated
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update own learning activities"
    ON public.user_learning_activities
    FOR UPDATE
    TO authenticated
    USING ((select auth.uid()) = user_id)
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete own learning activities"
    ON public.user_learning_activities
    FOR DELETE
    TO authenticated
    USING ((select auth.uid()) = user_id);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_user_learning_activities_user_date 
    ON public.user_learning_activities(user_id, activity_date DESC);

CREATE INDEX IF NOT EXISTS idx_user_learning_activities_user_created 
    ON public.user_learning_activities(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_user_learning_activities_type 
    ON public.user_learning_activities(activity_type);

-- Atomic XP Increment Function for profiles table
CREATE OR REPLACE FUNCTION public.increment_user_xp(user_uuid UUID, xp_to_add INTEGER)
RETURNS VOID AS $$
BEGIN
    UPDATE public.profiles
    SET 
        total_xp = COALESCE(total_xp, 0) + xp_to_add,
        updated_at = NOW()
    WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
