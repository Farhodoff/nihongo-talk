-- 1. Ensure title column exists
ALTER TABLE whiteboards ADD COLUMN IF NOT EXISTS title TEXT DEFAULT 'Adsiz Doska';

-- 2. Drop unique constraint on subject_id to allow multiple whiteboards per subject
-- Try dropping commonly named constraints just in case
ALTER TABLE whiteboards DROP CONSTRAINT IF EXISTS whiteboards_subject_id_key;
ALTER TABLE whiteboards DROP CONSTRAINT IF EXISTS whiteboards_subject_id_unique;

-- 3. Refresh RLS Policies
-- Enable RLS just in case
ALTER TABLE whiteboards ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Users can insert their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Users can update their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Users can delete their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON whiteboards;
DROP POLICY IF EXISTS "Enable select for users based on user_id" ON whiteboards;
DROP POLICY IF EXISTS "Enable update for users based on user_id" ON whiteboards;
DROP POLICY IF EXISTS "Enable delete for users based on user_id" ON whiteboards;

-- Re-create simple, permissive policies for the owner
CREATE POLICY "Users can view their own whiteboards"
ON whiteboards FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own whiteboards"
ON whiteboards FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own whiteboards"
ON whiteboards FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own whiteboards"
ON whiteboards FOR DELETE
USING (auth.uid() = user_id);
