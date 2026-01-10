-- Events table for JDU, JLPT, Career, and Personal events
CREATE TABLE IF NOT EXISTS events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    event_type TEXT CHECK (event_type IN ('jdu', 'career', 'jlpt', 'personal')) NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    notify_before_minutes INTEGER DEFAULT 60,
    is_notified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view their own events" ON events;
DROP POLICY IF EXISTS "Users can insert their own events" ON events;
DROP POLICY IF EXISTS "Users can update their own events" ON events;
DROP POLICY IF EXISTS "Users can delete their own events" ON events;

-- Create RLS Policies
CREATE POLICY "Users can view their own events" ON events
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own events" ON events
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own events" ON events
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own events" ON events
    FOR DELETE USING (auth.uid() = user_id);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_events_user ON events(user_id);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(event_type);
