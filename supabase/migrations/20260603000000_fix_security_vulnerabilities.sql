-- Migration: Fix Security Vulnerabilities in RLS policies and Database Functions
-- Created: 2026-06-03

-- 1. Hardening messages INSERT policy (prevent message forging)
DROP POLICY IF EXISTS "Authenticated users can create messages" ON public.messages;
CREATE POLICY "Authenticated users can create messages" ON public.messages
  FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND auth.uid() = user_id);

-- 2. Hardening study_rooms INSERT policy (prevent room creation spoofing)
DROP POLICY IF EXISTS "Authenticated users can create rooms" ON public.study_rooms;
CREATE POLICY "Authenticated users can create rooms" ON public.study_rooms
  FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND auth.uid() = creator_id);

-- 3. Hardening handle_new_user function (prevent schema hijacking)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User')
  );
  RETURN NEW;
END;
$$;

-- 4. Hardening cleanup_expired_telegram_codes function (prevent schema hijacking)
CREATE OR REPLACE FUNCTION public.cleanup_expired_telegram_codes()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    DELETE FROM public.telegram_link_codes
    WHERE expires_at < NOW();
END;
$$;
