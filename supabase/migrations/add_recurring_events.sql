-- Add recurring event support to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS repetition_type TEXT CHECK (repetition_type IN ('none', 'daily', 'weekly', 'monthly')) DEFAULT 'none';
ALTER TABLE events ADD COLUMN IF NOT EXISTS repetition_end_date TIMESTAMP WITH TIME ZONE;
ALTER TABLE events ADD COLUMN IF NOT EXISTS repetition_days INTEGER[];

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS idx_events_repetition ON events(repetition_type) WHERE repetition_type != 'none';
