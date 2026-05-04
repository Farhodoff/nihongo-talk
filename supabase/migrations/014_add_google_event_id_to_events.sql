-- Add google_event_id to events table for Google Calendar synchronization
ALTER TABLE events ADD COLUMN IF NOT EXISTS google_event_id TEXT;
