-- Create storage bucket for exams (audio, images, etc.)
INSERT INTO storage.buckets (id, name, public)
VALUES ('exams', 'exams', true)
ON CONFLICT (id) DO NOTHING;

-- Policies for exams bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'exams' );

CREATE POLICY "Admin Insert Access"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'exams' AND
    auth.jwt() ->> 'role' = 'admin'
);

CREATE POLICY "Admin Update Access"
ON storage.objects FOR UPDATE
USING (
    bucket_id = 'exams' AND
    auth.jwt() ->> 'role' = 'admin'
);

CREATE POLICY "Admin Delete Access"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'exams' AND
    auth.jwt() ->> 'role' = 'admin'
);

-- Allow authenticated users to upload their own speaking audio files
CREATE POLICY "Users can upload speaking audio"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'exams' AND
    auth.role() = 'authenticated' AND
    (storage.foldername(name))[1] = 'speaking_responses'
);
