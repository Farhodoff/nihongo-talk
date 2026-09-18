-- Migration: 20260918000002_speaking_audios_storage_upsert.sql
-- Description: Allow users to update their own speaking audio files in speaking_audios bucket (supports upsert: true)

DROP POLICY IF EXISTS "Users can update own speaking audio" ON storage.objects;
CREATE POLICY "Users can update own speaking audio"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'speaking_audios' AND (select auth.uid())::text = (storage.foldername(name))[1])
WITH CHECK (bucket_id = 'speaking_audios' AND (select auth.uid())::text = (storage.foldername(name))[1]);
