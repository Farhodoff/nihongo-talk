-- Migration: 20260904000000_add_tour_completed_to_profiles.sql
-- Description: Add tour_completed flag to profiles table for account-bound onboarding tour persistence

-- 1. Add tour_completed column with default false for new signups
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS tour_completed BOOLEAN NOT NULL DEFAULT false;

-- 2. Backfill existing registered users as tour_completed = true so they are not spammed with the tour again
UPDATE public.profiles 
SET tour_completed = true 
WHERE tour_completed = false;

-- 3. Document the column
COMMENT ON COLUMN public.profiles.tour_completed IS 'Single source of truth flag indicating whether user has completed the onboarding tour.';
