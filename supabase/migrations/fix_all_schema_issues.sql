-- Complete Migration to Fix All Schema Issues
-- Run this in Supabase SQL Editor

-- 1. Ensure profiles table has updated_at
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- 2. Ensure tasks table has all required columns
ALTER TABLE tasks
ADD COLUMN IF NOT EXISTS completed BOOLEAN DEFAULT false;

-- 3. Add subjects fields (if not already added)
ALTER TABLE subjects
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS icon TEXT DEFAULT 'book';

-- 4. Create function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Add trigger to profiles table
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 6. Refresh schema cache (this forces Supabase to reload)
NOTIFY pgrst, 'reload schema';
