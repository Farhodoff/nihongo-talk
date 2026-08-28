-- Migration: Create speaking_audios Storage Bucket and audio_path columns
-- Description: Sets up private storage for speaking audio recordings and adds audio_path tracking to session tables.

-- 1. Create private storage bucket for speaking audio files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'speaking_audios',
    'speaking_audios',
    false,
    10485760, -- 10MB limit per audio recording
    ARRAY['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/x-m4a']
)
ON CONFLICT (id) DO UPDATE SET
    public = false,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/mpeg', 'audio/x-m4a'];

-- 2. Storage RLS Policies for speaking_audios
-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can upload own speaking audio" ON storage.objects;
DROP POLICY IF EXISTS "Users and admins can view speaking audio" ON storage.objects;
DROP POLICY IF EXISTS "Users and admins can delete speaking audio" ON storage.objects;

-- Allow authenticated users to upload their own audio to their folder: {user_id}/{session_id}.webm
CREATE POLICY "Users can upload own speaking audio"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'speaking_audios' AND (
        (storage.foldername(name))[1] = auth.uid()::text
        OR public.is_admin()
    )
);

-- Allow users to read their own audio or admins to read all
CREATE POLICY "Users and admins can view speaking audio"
ON storage.objects FOR SELECT
TO authenticated
USING (
    bucket_id = 'speaking_audios' AND (
        (storage.foldername(name))[1] = auth.uid()::text
        OR public.is_admin()
    )
);

-- Allow users to delete their own audio or admins to delete all
CREATE POLICY "Users and admins can delete speaking audio"
ON storage.objects FOR DELETE
TO authenticated
USING (
    bucket_id = 'speaking_audios' AND (
        (storage.foldername(name))[1] = auth.uid()::text
        OR public.is_admin()
    )
);

-- 3. Add audio_path to session tables
ALTER TABLE public.speaking_sessions 
ADD COLUMN IF NOT EXISTS audio_path text;

ALTER TABLE public.speaking_coach_sessions 
ADD COLUMN IF NOT EXISTS audio_path text;

ALTER TABLE public.ai_coach_sessions 
ADD COLUMN IF NOT EXISTS audio_path text;

-- 4. Create index for fast retrieval of sessions with active audio files
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_audio_path 
ON public.speaking_sessions(audio_path) 
WHERE audio_path IS NOT NULL;
