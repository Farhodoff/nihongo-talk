-- ============================================
-- TASKS VA STUDY_SESSIONS JADVALLARI
-- Supabase SQL Editor'da ishlatish uchun
-- ============================================

-- ============================================
-- 1. TASKS TABLE (Vazifalar jadvali)
-- ============================================
CREATE TABLE IF NOT EXISTS tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  
  -- Asosiy ma'lumotlar
  title TEXT NOT NULL,
  description TEXT,
  
  -- Status va prioritet
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'done', 'archived')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  completed BOOLEAN DEFAULT false,
  
  -- Muddatlar
  due_date DATE,
  completed_at TIMESTAMP WITH TIME ZONE,
  
  -- Bog'lanishlar
  goal_id UUID REFERENCES goals(id) ON DELETE SET NULL,
  subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL,
  
  -- Qo'shimcha ma'lumotlar
  tags JSONB DEFAULT '[]'::jsonb,
  estimated_duration INTEGER, -- Daqiqalarda
  actual_duration INTEGER,    -- Daqiqalarda
  
  -- Vaqt belgilari
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security yoqish
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Policies: Foydalanuvchi faqat o'z vazifalarini ko'radi va boshqaradi
CREATE POLICY "Users can view own tasks" ON tasks
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tasks" ON tasks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks" ON tasks
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks" ON tasks
  FOR DELETE USING (auth.uid() = user_id);

-- Indekslar (tezroq qidiruv uchun)
CREATE INDEX IF NOT EXISTS idx_tasks_user_id ON tasks(user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_subject_id ON tasks(subject_id);
CREATE INDEX IF NOT EXISTS idx_tasks_goal_id ON tasks(goal_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);

-- ============================================
-- 2. STUDY_SESSIONS TABLE (O'qish sessiyalari)
-- ============================================
CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  
  -- Sessiya ma'lumotlari
  subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL,
  task_id UUID REFERENCES tasks(id) ON DELETE SET NULL,
  
  -- Vaqt ma'lumotlari
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  duration INTEGER NOT NULL, -- Daqiqalarda
  planned_duration INTEGER,  -- Rejalashtirilgan davomiylik
  
  -- Sessiya turi
  type TEXT DEFAULT 'focus' CHECK (type IN ('focus', 'pomodoro', 'review', 'practice', 'break')),
  
  -- Kayfiyat va samaradorlik
  mood_before INTEGER CHECK (mood_before >= 1 AND mood_before <= 5),
  mood_after INTEGER CHECK (mood_after >= 1 AND mood_after <= 5),
  productivity_rating INTEGER CHECK (productivity_rating >= 1 AND productivity_rating <= 5),
  
  -- Status
  completed BOOLEAN DEFAULT false,
  interrupted BOOLEAN DEFAULT false,
  interruption_reason TEXT,
  
  -- Qo'shimcha ma'lumotlar
  notes TEXT,
  topics_covered JSONB DEFAULT '[]'::jsonb,
  breaks_taken INTEGER DEFAULT 0,
  
  -- Gamification
  xp_earned INTEGER DEFAULT 0,
  
  -- Vaqt belgilari
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security yoqish
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

-- Policies: Foydalanuvchi faqat o'z sessiyalarini ko'radi va boshqaradi
CREATE POLICY "Users can view own sessions" ON study_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions" ON study_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions" ON study_sessions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions" ON study_sessions
  FOR DELETE USING (auth.uid() = user_id);

-- Indekslar
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_subject_id ON study_sessions(subject_id);
CREATE INDEX IF NOT EXISTS idx_sessions_task_id ON study_sessions(task_id);
CREATE INDEX IF NOT EXISTS idx_sessions_start_time ON study_sessions(start_time DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_type ON study_sessions(type);
CREATE INDEX IF NOT EXISTS idx_sessions_completed ON study_sessions(completed);

-- ============================================
-- 3. TRIGGER: updated_at avtomatik yangilash
-- ============================================

-- Tasks uchun trigger
CREATE OR REPLACE FUNCTION update_tasks_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tasks_updated_at_trigger ON tasks;
CREATE TRIGGER tasks_updated_at_trigger
  BEFORE UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_tasks_updated_at();

-- Study sessions uchun trigger
CREATE OR REPLACE FUNCTION update_sessions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS sessions_updated_at_trigger ON study_sessions;
CREATE TRIGGER sessions_updated_at_trigger
  BEFORE UPDATE ON study_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_sessions_updated_at();

-- ============================================
-- 4. FOYDALI VIEWS (Ko'rinishlar)
-- ============================================

-- Bugungi vazifalar
CREATE OR REPLACE VIEW today_tasks AS
SELECT 
  t.*,
  s.name as subject_name,
  s.color as subject_color
FROM tasks t
LEFT JOIN subjects s ON t.subject_id = s.id
WHERE t.due_date = CURRENT_DATE
  AND t.completed = false
  AND t.user_id = auth.uid();

-- Oxirgi 7 kunlik sessiyalar
CREATE OR REPLACE VIEW recent_sessions AS
SELECT 
  ss.*,
  s.name as subject_name,
  s.color as subject_color
FROM study_sessions ss
LEFT JOIN subjects s ON ss.subject_id = s.id
WHERE ss.start_time >= NOW() - INTERVAL '7 days'
  AND ss.user_id = auth.uid()
ORDER BY ss.start_time DESC;

-- ============================================
-- TAYYOR! Jadvallar muvaffaqiyatli yaratildi
-- ============================================

-- Test ma'lumotlari qo'shish (ixtiyoriy):
/*
-- Misol vazifa
INSERT INTO tasks (user_id, title, description, status, priority, due_date, subject_id)
VALUES (
  auth.uid(),
  'Matematika uy vazifasi',
  'Algebra masalalarini yechish',
  'todo',
  'high',
  CURRENT_DATE + INTERVAL '2 days',
  NULL
);

-- Misol o'qish sessiyasi
INSERT INTO study_sessions (user_id, subject_id, start_time, duration, type, mood_before, mood_after, completed)
VALUES (
  auth.uid(),
  NULL,
  NOW() - INTERVAL '1 hour',
  45,
  'focus',
  4,
  5,
  true
);
*/
