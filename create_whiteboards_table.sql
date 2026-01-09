-- 1. Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS whiteboards (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Add columns if they don't exist (Idempotent)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'whiteboards' AND column_name = 'title') THEN
        ALTER TABLE whiteboards ADD COLUMN title TEXT NOT NULL DEFAULT 'Adsiz Doska';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'whiteboards' AND column_name = 'data') THEN
        ALTER TABLE whiteboards ADD COLUMN data JSONB DEFAULT '{}'::jsonb;
    END IF;
END $$;

-- 3. Enable RLS
ALTER TABLE whiteboards ENABLE ROW LEVEL SECURITY;

-- 4. Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Users can insert their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Users can update their own whiteboards" ON whiteboards;
DROP POLICY IF EXISTS "Users can delete their own whiteboards" ON whiteboards;

-- 5. Re-create Policies
CREATE POLICY "Users can view their own whiteboards" ON whiteboards
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own whiteboards" ON whiteboards
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own whiteboards" ON whiteboards
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own whiteboards" ON whiteboards
    FOR DELETE USING (auth.uid() = user_id);

-- 6. Create Indexes (IF NOT EXISTS is supported in newer Postgres, otherwise ignored if duplicate)
CREATE INDEX IF NOT EXISTS idx_whiteboards_user ON whiteboards(user_id);
CREATE INDEX IF NOT EXISTS idx_whiteboards_subject ON whiteboards(subject_id);
