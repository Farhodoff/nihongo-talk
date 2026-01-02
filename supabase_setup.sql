-- Study Rooms Table
-- This table stores custom study rooms created by users

CREATE TABLE IF NOT EXISTS study_rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  creator_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE study_rooms ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view active rooms" ON study_rooms
  FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can create rooms" ON study_rooms
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Creators can update their rooms" ON study_rooms
  FOR UPDATE USING (auth.uid() = creator_id);

CREATE POLICY "Creators can delete their rooms" ON study_rooms
  FOR DELETE USING (auth.uid() = creator_id);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_study_rooms_creator ON study_rooms(creator_id);
CREATE INDEX IF NOT EXISTS idx_study_rooms_active ON study_rooms(is_active);
