-- ====================================================================
-- Migration: 20260828000000_subscription_system_and_sync.sql
-- Description: Complete User Subscriptions Table, Trigger on Signup,
--              Row Level Security, Realtime Publication, and Admin RPC.
-- ====================================================================

-- 1. Create / Verify user_subscriptions table
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    tier TEXT NOT NULL DEFAULT 'free' CHECK (tier IN ('free', 'pro', 'premium')),
    ai_credits INT NOT NULL DEFAULT 5,
    last_reset_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    trial_start_date TIMESTAMPTZ DEFAULT NOW(),
    valid_until TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure columns exist if table already existed
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS tier TEXT NOT NULL DEFAULT 'free';
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS ai_credits INT NOT NULL DEFAULT 5;
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS last_reset_date TIMESTAMPTZ NOT NULL DEFAULT NOW();
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS trial_start_date TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS valid_until TIMESTAMPTZ;
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.user_subscriptions ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- 2. Trigger on new user registration in auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user_subscription()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  INSERT INTO public.user_subscriptions (
    id,
    tier,
    ai_credits,
    last_reset_date,
    trial_start_date,
    valid_until,
    created_at,
    updated_at
  )
  VALUES (
    new.id,
    'free',
    5,
    NOW(),
    NOW(),
    NULL,
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_subscription ON auth.users;
CREATE TRIGGER on_auth_user_created_subscription
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE PROCEDURE public.handle_new_user_subscription();

-- Backfill missing subscriptions for existing users
INSERT INTO public.user_subscriptions (id, tier, ai_credits, last_reset_date, trial_start_date, created_at, updated_at)
SELECT u.id, 'free', 5, NOW(), NOW(), NOW(), NOW()
FROM auth.users u
LEFT JOIN public.user_subscriptions s ON s.id = u.id
WHERE s.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- 3. Row Level Security (RLS) Policies
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Owner or admin read subscription" ON public.user_subscriptions;
CREATE POLICY "Owner or admin read subscription"
    ON public.user_subscriptions FOR SELECT TO authenticated
    USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Owner insert own subscription" ON public.user_subscriptions;
CREATE POLICY "Owner insert own subscription"
    ON public.user_subscriptions FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Admin manage all subscriptions" ON public.user_subscriptions;
CREATE POLICY "Admin manage all subscriptions"
    ON public.user_subscriptions FOR ALL TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Owner update own credit" ON public.user_subscriptions;
CREATE POLICY "Owner update own credit"
    ON public.user_subscriptions FOR UPDATE TO authenticated
    USING (auth.uid() = id OR public.is_admin())
    WITH CHECK (
        public.is_admin()
        OR (
            auth.uid() = id 
            AND tier = (SELECT s.tier FROM public.user_subscriptions s WHERE s.id = auth.uid())
        )
    );

-- 4. Admin RPC to grant subscription cleanly
CREATE OR REPLACE FUNCTION public.admin_set_user_tier(
    target_user_id UUID,
    new_tier TEXT,
    valid_until_date TIMESTAMPTZ DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Access denied: only administrators can grant subscription tiers.';
  END IF;

  INSERT INTO public.user_subscriptions (id, tier, valid_until, updated_at)
  VALUES (target_user_id, new_tier, valid_until_date, NOW())
  ON CONFLICT (id) DO UPDATE
  SET 
    tier = new_tier,
    valid_until = valid_until_date,
    updated_at = NOW();
END;
$$;

-- 5. Realtime publication for instant sync
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'user_subscriptions'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.user_subscriptions;
  END IF;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;
