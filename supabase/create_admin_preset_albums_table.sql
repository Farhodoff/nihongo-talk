-- Admin Preset Albums & Standalone Custom Decks Table
CREATE TABLE IF NOT EXISTS public.admin_preset_albums (
    id TEXT PRIMARY KEY,
    deck_id TEXT NOT NULL DEFAULT 'deck_custom_standalone',
    title TEXT NOT NULL,
    level TEXT NOT NULL DEFAULT 'MUSTAQIL',
    description TEXT,
    part_number INT NOT NULL DEFAULT 1,
    card_count INT NOT NULL DEFAULT 0,
    cards JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.admin_preset_albums ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public and authenticated users) to read albums
CREATE POLICY "Allow public read access on admin_preset_albums"
ON public.admin_preset_albums
FOR SELECT
TO public
USING (true);

-- Allow authenticated users / admins to insert and update albums
CREATE POLICY "Allow authenticated insert and update on admin_preset_albums"
ON public.admin_preset_albums
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
