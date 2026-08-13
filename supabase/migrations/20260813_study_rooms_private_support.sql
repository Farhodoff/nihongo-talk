-- ====================================================================
-- KAIZEN AI - Study Rooms Public/Private Support Schema Migration
-- Table: public.study_rooms
-- ====================================================================

-- 1. Create study_rooms table if not exists
CREATE TABLE IF NOT EXISTS public.study_rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    creator_id TEXT, -- TEXT allows both auth UUIDs and guest strings
    is_private BOOLEAN DEFAULT false,
    share_code TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Add columns if table already exists
ALTER TABLE public.study_rooms ADD COLUMN IF NOT EXISTS is_private BOOLEAN DEFAULT false;
ALTER TABLE public.study_rooms ADD COLUMN IF NOT EXISTS share_code TEXT;
ALTER TABLE public.study_rooms ALTER COLUMN creator_id TYPE TEXT;

-- Enable RLS
ALTER TABLE public.study_rooms ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running to avoid ERROR 42710
DROP POLICY IF EXISTS "Public read study_rooms" ON public.study_rooms;
DROP POLICY IF EXISTS "Public write study_rooms" ON public.study_rooms;

-- Allow public read access to active study_rooms
CREATE POLICY "Public read study_rooms"
    ON public.study_rooms FOR SELECT
    USING (true);

-- Allow authenticated users & guests to create/update study_rooms
CREATE POLICY "Public write study_rooms"
    ON public.study_rooms FOR ALL
    USING (true)
    WITH CHECK (true);

-- Index for rapid filtering
CREATE INDEX IF NOT EXISTS idx_study_rooms_room_id ON public.study_rooms(room_id);
CREATE INDEX IF NOT EXISTS idx_study_rooms_is_private ON public.study_rooms(is_private);
