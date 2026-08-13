-- Security and persistence hardening. Apply with `supabase db push`.

-- Never allow a browser to update its own role. Replace legacy permissive policy.
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'user';
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users update own profile except role"
ON public.profiles FOR UPDATE TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id AND role = (SELECT role FROM public.profiles p WHERE p.id = auth.uid()));

-- Custom scenarios are private to their creator; bundled scenarios remain readable.
CREATE TABLE IF NOT EXISTS public.conversation_scenarios (
  id VARCHAR(255) PRIMARY KEY,
  title_ja TEXT NOT NULL,
  title_uz TEXT NOT NULL,
  emoji TEXT DEFAULT '🗣️',
  difficulty VARCHAR(10) DEFAULT 'N4',
  category VARCHAR(50) DEFAULT 'daily',
  description_uz TEXT,
  opening_line_ja TEXT,
  context_prompt TEXT,
  key_phrases JSONB DEFAULT '[]'::jsonb,
  is_custom BOOLEAN NOT NULL DEFAULT true,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.conversation_scenarios ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE public.conversation_scenarios ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read scenarios" ON public.conversation_scenarios;
DROP POLICY IF EXISTS "Public write scenarios" ON public.conversation_scenarios;
CREATE POLICY "Read bundled or own scenarios" ON public.conversation_scenarios FOR SELECT
USING (is_custom = false OR auth.uid() = user_id);
CREATE POLICY "Create own scenarios" ON public.conversation_scenarios FOR INSERT TO authenticated
WITH CHECK (is_custom = true AND auth.uid() = user_id);
CREATE POLICY "Update own scenarios" ON public.conversation_scenarios FOR UPDATE TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Delete own scenarios" ON public.conversation_scenarios FOR DELETE TO authenticated
USING (auth.uid() = user_id);

-- Speaking transcripts and scores are private.
CREATE TABLE IF NOT EXISTS public.speaking_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user_email TEXT,
  scenario_id VARCHAR(255),
  persona_title TEXT NOT NULL,
  fluency_score INTEGER DEFAULT 0,
  pronunciation_score INTEGER DEFAULT 0,
  grammar_score INTEGER DEFAULT 0,
  vocabulary_score INTEGER DEFAULT 0,
  overall_score INTEGER DEFAULT 0,
  duration_seconds INTEGER DEFAULT 0,
  feedback TEXT,
  transcript JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.speaking_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public insert speaking_sessions" ON public.speaking_sessions;
DROP POLICY IF EXISTS "Public update speaking_sessions" ON public.speaking_sessions;
CREATE POLICY "Users read own speaking sessions" ON public.speaking_sessions FOR SELECT TO authenticated
USING (auth.uid() = user_id);
CREATE POLICY "Users create own speaking sessions" ON public.speaking_sessions FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own speaking sessions" ON public.speaking_sessions FOR UPDATE TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users delete own speaking sessions" ON public.speaking_sessions FOR DELETE TO authenticated
USING (auth.uid() = user_id);

-- Private rooms must not be disclosed or modified by arbitrary users.
-- Older installations have the pre-private-room schema, so normalize it first.
ALTER TABLE public.study_rooms ADD COLUMN IF NOT EXISTS is_private BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE public.study_rooms ADD COLUMN IF NOT EXISTS share_code TEXT;
DROP POLICY IF EXISTS "Public read study_rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Public write study_rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Anyone can view active rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Authenticated users can create rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Creators can update their rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Creators can delete their rooms" ON public.study_rooms;
CREATE POLICY "Read public or owned rooms" ON public.study_rooms FOR SELECT
USING (is_private = false OR creator_id::text = auth.uid()::text);
CREATE POLICY "Authenticated users create rooms" ON public.study_rooms FOR INSERT TO authenticated
WITH CHECK (creator_id::text = auth.uid()::text);
CREATE POLICY "Owners update rooms" ON public.study_rooms FOR UPDATE TO authenticated
USING (creator_id::text = auth.uid()::text) WITH CHECK (creator_id::text = auth.uid()::text);
CREATE POLICY "Owners delete rooms" ON public.study_rooms FOR DELETE TO authenticated
USING (creator_id::text = auth.uid()::text);

-- Global provider keys must never be selected by end users.
DO $$
BEGIN
  IF to_regclass('public.app_settings') IS NOT NULL THEN
    REVOKE SELECT (gemini_api_key) ON public.app_settings FROM anon, authenticated;
  END IF;
END $$;
