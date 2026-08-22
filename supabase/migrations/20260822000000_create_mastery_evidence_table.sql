-- Create mastery_evidence table
CREATE TABLE IF NOT EXISTS public.mastery_evidence (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    skill TEXT NOT NULL,
    activity_type TEXT NOT NULL,
    lesson_id TEXT,
    score NUMERIC NOT NULL,
    accuracy NUMERIC,
    attempts INTEGER,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    mastery_impact NUMERIC NOT NULL,
    category TEXT NOT NULL,
    source TEXT,
    details TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.mastery_evidence ENABLE ROW LEVEL SECURITY;

-- Select policy
DROP POLICY IF EXISTS "Users can view own mastery evidence" ON public.mastery_evidence;
CREATE POLICY "Users can view own mastery evidence" ON public.mastery_evidence
    FOR SELECT USING (auth.uid() = user_id);

-- Insert/Upsert policy
DROP POLICY IF EXISTS "Users can insert own mastery evidence" ON public.mastery_evidence;
CREATE POLICY "Users can insert own mastery evidence" ON public.mastery_evidence
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Update policy
DROP POLICY IF EXISTS "Users can update own mastery evidence" ON public.mastery_evidence;
CREATE POLICY "Users can update own mastery evidence" ON public.mastery_evidence
    FOR UPDATE USING (auth.uid() = user_id);

-- Delete policy
DROP POLICY IF EXISTS "Users can delete own mastery evidence" ON public.mastery_evidence;
CREATE POLICY "Users can delete own mastery evidence" ON public.mastery_evidence
    FOR DELETE USING (auth.uid() = user_id);

-- Indexes for performance & composite queries
CREATE INDEX IF NOT EXISTS mastery_evidence_user_id_lang_idx ON public.mastery_evidence(user_id, language);
