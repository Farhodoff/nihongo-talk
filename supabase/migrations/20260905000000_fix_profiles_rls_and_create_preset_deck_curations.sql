-- Migration: 20260905000000_fix_profiles_rls_and_create_preset_deck_curations.sql
-- Description: Create missing preset_deck_curations table and fix profiles INSERT RLS policies

BEGIN;

-- 1. Create missing preset_deck_curations table
CREATE TABLE IF NOT EXISTS public.preset_deck_curations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deck_id TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    level TEXT,
    card_count INTEGER DEFAULT 0,
    cards JSONB DEFAULT '[]'::jsonb,
    approved_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.preset_deck_curations ENABLE ROW LEVEL SECURITY;

-- 2. RLS Policies for preset_deck_curations
DROP POLICY IF EXISTS "Authenticated users view curated preset decks" ON public.preset_deck_curations;
CREATE POLICY "Authenticated users view curated preset decks"
ON public.preset_deck_curations FOR SELECT
TO authenticated, anon
USING (true);

DROP POLICY IF EXISTS "Admins manage curated preset decks" ON public.preset_deck_curations;
CREATE POLICY "Admins manage curated preset decks"
ON public.preset_deck_curations FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 3. Fix profiles table RLS policies (Ensure FOR INSERT WITH CHECK works for new users)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow SELECT for all users/admins
DROP POLICY IF EXISTS "Users and admins view profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users and admins view profiles" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users and admins view profiles"
ON public.profiles FOR SELECT
TO authenticated, anon
USING (true);

-- Allow newly registered users to INSERT their own profile matching auth.uid() = id
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- Allow users to UPDATE their own profile (or admins to update role/profiles)
DROP POLICY IF EXISTS "Users and admins update profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users and admins update profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users and admins update profiles"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id OR public.is_admin())
WITH CHECK (auth.uid() = id OR public.is_admin());

-- 4. Grant access permissions
GRANT ALL ON public.preset_deck_curations TO authenticated;
GRANT ALL ON public.preset_deck_curations TO service_role;
GRANT SELECT ON public.preset_deck_curations TO anon;

GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
GRANT SELECT ON public.profiles TO anon;

COMMIT;
