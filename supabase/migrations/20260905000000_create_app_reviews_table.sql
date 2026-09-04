-- Migration: Create app_reviews table for user ratings and feedback
CREATE TABLE IF NOT EXISTS public.app_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    category VARCHAR(50) DEFAULT 'general',
    user_email TEXT,
    user_name TEXT,
    telegram_username TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.app_reviews ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any to prevent conflicts
DROP POLICY IF EXISTS "Allow public insert to app_reviews" ON public.app_reviews;
DROP POLICY IF EXISTS "Allow admin select on app_reviews" ON public.app_reviews;

-- Allow anyone (authenticated or anonymous) to submit reviews
CREATE POLICY "Allow public insert to app_reviews"
    ON public.app_reviews
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow users to read their own reviews, and admins/superadmins to view all reviews
CREATE POLICY "Allow admin select on app_reviews"
    ON public.app_reviews
    FOR SELECT
    TO authenticated
    USING (
        auth.uid() = user_id OR
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role IN ('admin', 'superadmin')
        )
    );

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_app_reviews_created_at ON public.app_reviews (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_app_reviews_rating ON public.app_reviews (rating);
CREATE INDEX IF NOT EXISTS idx_app_reviews_user_id ON public.app_reviews (user_id);
