CREATE TABLE missed_study_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  missed_date DATE NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE missed_study_logs ENABLE ROW LEVEL SECURITY;

-- Policy to let users see their own logs
CREATE POLICY "Users can view their own missed study logs"
  ON missed_study_logs
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy to let users insert their own logs
CREATE POLICY "Users can insert their own missed study logs"
  ON missed_study_logs
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);
