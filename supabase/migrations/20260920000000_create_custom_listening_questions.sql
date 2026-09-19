-- Migration: 20260920000000_create_custom_listening_questions.sql
-- Description: Create custom_listening_questions table and public listening_audios storage bucket for Admin Choukai Studio

-- 1. Create custom_listening_questions table
CREATE TABLE IF NOT EXISTS public.custom_listening_questions (
    id TEXT PRIMARY KEY,
    level TEXT NOT NULL CHECK (level IN ('N5', 'N4', 'N3', 'N2', 'N1')),
    type TEXT NOT NULL CHECK (type IN ('task', 'point', 'quick', 'summary')),
    title_uz TEXT NOT NULL,
    audio_url TEXT,
    script TEXT NOT NULL,
    question_text TEXT NOT NULL,
    question_text_uz TEXT,
    options JSONB NOT NULL DEFAULT '[]'::jsonb,
    options_uz JSONB DEFAULT '[]'::jsonb,
    correct_answer INTEGER NOT NULL DEFAULT 0,
    explanation_uzbek TEXT,
    tip_uzbek TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Indexes for efficient level and type queries
CREATE INDEX IF NOT EXISTS idx_custom_listening_level ON public.custom_listening_questions (level);
CREATE INDEX IF NOT EXISTS idx_custom_listening_type ON public.custom_listening_questions (type);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.custom_listening_questions ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for custom_listening_questions
DROP POLICY IF EXISTS "custom_listening_select_policy" ON public.custom_listening_questions;
CREATE POLICY "custom_listening_select_policy"
ON public.custom_listening_questions
FOR SELECT
USING (true);

DROP POLICY IF EXISTS "custom_listening_insert_policy" ON public.custom_listening_questions;
CREATE POLICY "custom_listening_insert_policy"
ON public.custom_listening_questions
FOR INSERT
WITH CHECK ((SELECT public.is_admin()));

DROP POLICY IF EXISTS "custom_listening_update_policy" ON public.custom_listening_questions;
CREATE POLICY "custom_listening_update_policy"
ON public.custom_listening_questions
FOR UPDATE
USING ((SELECT public.is_admin()))
WITH CHECK ((SELECT public.is_admin()));

DROP POLICY IF EXISTS "custom_listening_delete_policy" ON public.custom_listening_questions;
CREATE POLICY "custom_listening_delete_policy"
ON public.custom_listening_questions
FOR DELETE
USING ((SELECT public.is_admin()));

-- 5. Permissions
GRANT SELECT ON public.custom_listening_questions TO anon, authenticated;
GRANT ALL ON public.custom_listening_questions TO authenticated, service_role;

-- 6. Create public storage bucket for authentic listening audios
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'listening_audios',
    'listening_audios',
    true,
    26214400, -- 25MB limit per audio file
    ARRAY['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/x-m4a']
)
ON CONFLICT (id) DO UPDATE SET
    public = true,
    file_size_limit = 26214400,
    allowed_mime_types = ARRAY['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/x-m4a'];

-- 7. Storage RLS Policies for listening_audios bucket
DROP POLICY IF EXISTS "Anyone can view listening audios" ON storage.objects;
CREATE POLICY "Anyone can view listening audios"
ON storage.objects FOR SELECT
USING (bucket_id = 'listening_audios');

DROP POLICY IF EXISTS "Admins can insert listening audios" ON storage.objects;
CREATE POLICY "Admins can insert listening audios"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'listening_audios' AND (SELECT public.is_admin())
);

DROP POLICY IF EXISTS "Admins can update listening audios" ON storage.objects;
CREATE POLICY "Admins can update listening audios"
ON storage.objects FOR UPDATE
TO authenticated
USING (
    bucket_id = 'listening_audios' AND (SELECT public.is_admin())
);

DROP POLICY IF EXISTS "Admins can delete listening audios" ON storage.objects;
CREATE POLICY "Admins can delete listening audios"
ON storage.objects FOR DELETE
TO authenticated
USING (
    bucket_id = 'listening_audios' AND (SELECT public.is_admin())
);
