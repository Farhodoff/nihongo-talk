-- Migration: 20260918000004_fix_global_flashcard_overrides_rls.sql
-- Description: Robust RLS policies for global_flashcard_overrides and preset_deck_curations

BEGIN;

-- 1. Ensure global_flashcard_overrides table exists with appropriate constraints
CREATE TABLE IF NOT EXISTS public.global_flashcard_overrides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    word TEXT NOT NULL UNIQUE,
    front TEXT NOT NULL,
    phonetic TEXT,
    back TEXT NOT NULL,
    example TEXT,
    deck_id TEXT,
    category TEXT,
    updated_by TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_global_flashcard_overrides_word ON public.global_flashcard_overrides (word);
CREATE INDEX IF NOT EXISTS idx_global_flashcard_overrides_deck_id ON public.global_flashcard_overrides (deck_id);

ALTER TABLE public.global_flashcard_overrides ENABLE ROW LEVEL SECURITY;

-- 2. Public read policy: Anyone (anon or authenticated) can read all global overrides
DROP POLICY IF EXISTS "Public read global flashcard overrides" ON public.global_flashcard_overrides;
DROP POLICY IF EXISTS "Allow public read overrides" ON public.global_flashcard_overrides;
CREATE POLICY "Public read global flashcard overrides"
ON public.global_flashcard_overrides FOR SELECT
TO public, anon, authenticated
USING (true);

-- 3. Admin manage policy: Admin or Superadmin can insert/update/delete
DROP POLICY IF EXISTS "Admins manage global flashcard overrides" ON public.global_flashcard_overrides;
DROP POLICY IF EXISTS "Allow admin manage overrides" ON public.global_flashcard_overrides;

CREATE POLICY "Admins manage global flashcard overrides"
ON public.global_flashcard_overrides FOR ALL
TO authenticated
USING (
    public.is_admin()
    OR LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', ''))) IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp', 'fsoyilovv@gmail.com', 'xmprofile42@gmail.com')
    OR (auth.jwt() -> 'app_metadata' ->> 'role') IN ('admin', 'superadmin')
    OR (auth.jwt() -> 'user_metadata' ->> 'role') IN ('admin', 'superadmin')
    OR EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid()
        AND (p.role IN ('admin', 'superadmin') OR LOWER(TRIM(COALESCE(p.email, ''))) IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp', 'fsoyilovv@gmail.com', 'xmprofile42@gmail.com'))
    )
)
WITH CHECK (
    public.is_admin()
    OR LOWER(TRIM(COALESCE(auth.jwt() ->> 'email', ''))) IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp', 'fsoyilovv@gmail.com', 'xmprofile42@gmail.com')
    OR (auth.jwt() -> 'app_metadata' ->> 'role') IN ('admin', 'superadmin')
    OR (auth.jwt() -> 'user_metadata' ->> 'role') IN ('admin', 'superadmin')
    OR EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid()
        AND (p.role IN ('admin', 'superadmin') OR LOWER(TRIM(COALESCE(p.email, ''))) IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp', 'fsoyilovv@gmail.com', 'xmprofile42@gmail.com'))
    )
);

-- 4. Ensure permissions are granted
GRANT ALL ON public.global_flashcard_overrides TO authenticated, service_role;
GRANT SELECT ON public.global_flashcard_overrides TO anon, public;

COMMIT;
