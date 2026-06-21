-- ============================================
-- MIGRATION: Mavjud jadvallarni yangilash (TUZATILGAN)
-- Supabase SQL Editor'da ishlatish uchun
-- ============================================

-- ============================================
-- 1. TASKS jadvalini yangilash
-- ============================================

-- Yangi ustunlarni qo'shish (agar mavjud bo'lmasa)
DO $$ 
BEGIN
    -- description ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='tasks' AND column_name='description') THEN
        ALTER TABLE tasks ADD COLUMN description TEXT;
    END IF;

    -- tags ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='tasks' AND column_name='tags') THEN
        ALTER TABLE tasks ADD COLUMN tags JSONB DEFAULT '[]'::jsonb;
    END IF;

    -- estimated_duration ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='tasks' AND column_name='estimated_duration') THEN
        ALTER TABLE tasks ADD COLUMN estimated_duration INTEGER;
    END IF;

    -- actual_duration ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='tasks' AND column_name='actual_duration') THEN
        ALTER TABLE tasks ADD COLUMN actual_duration INTEGER;
    END IF;

    -- completed_at ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='tasks' AND column_name='completed_at') THEN
        ALTER TABLE tasks ADD COLUMN completed_at TIMESTAMP WITH TIME ZONE;
    END IF;

    -- updated_at ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='tasks' AND column_name='updated_at') THEN
        ALTER TABLE tasks ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- ============================================
-- 2. Mavjud ma'lumotlarni yangilash
-- ============================================

-- Noto'g'ri status qiymatlarini to'g'rilash
UPDATE tasks 
SET status = CASE 
    WHEN status NOT IN ('todo', 'in_progress', 'done', 'archived') THEN 'todo'
    ELSE status
END
WHERE status IS NOT NULL;

-- NULL status qiymatlarini to'g'rilash
UPDATE tasks 
SET status = 'todo' 
WHERE status IS NULL;

-- Noto'g'ri priority qiymatlarini to'g'rilash
UPDATE tasks 
SET priority = CASE 
    WHEN priority NOT IN ('low', 'medium', 'high', 'urgent') THEN 'medium'
    ELSE priority
END
WHERE priority IS NOT NULL;

-- NULL priority qiymatlarini to'g'rilash
UPDATE tasks 
SET priority = 'medium' 
WHERE priority IS NULL;

-- ============================================
-- 3. Constraints qo'shish (ma'lumotlar tuzatilgandan keyin)
-- ============================================

DO $$ 
BEGIN
    -- Eski constraintlarni o'chirish (agar mavjud bo'lsa)
    IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'tasks_status_check') THEN
        ALTER TABLE tasks DROP CONSTRAINT tasks_status_check;
    END IF;

    IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'tasks_priority_check') THEN
        ALTER TABLE tasks DROP CONSTRAINT tasks_priority_check;
    END IF;

    -- Yangi constraintlarni qo'shish
    ALTER TABLE tasks ADD CONSTRAINT tasks_status_check 
    CHECK (status IN ('todo', 'in_progress', 'done', 'archived'));

    ALTER TABLE tasks ADD CONSTRAINT tasks_priority_check 
    CHECK (priority IN ('low', 'medium', 'high', 'urgent'));
END $$;

-- Yangi indekslarni qo'shish
CREATE INDEX IF NOT EXISTS idx_tasks_user_id ON tasks(user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_subject_id ON tasks(subject_id);
CREATE INDEX IF NOT EXISTS idx_tasks_goal_id ON tasks(goal_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);

-- ============================================
-- 4. STUDY_SESSIONS jadvalini yangilash
-- ============================================

DO $$ 
BEGIN
    -- task_id ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='task_id') THEN
        ALTER TABLE study_sessions ADD COLUMN task_id UUID REFERENCES tasks(id) ON DELETE SET NULL;
    END IF;

    -- end_time ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='end_time') THEN
        ALTER TABLE study_sessions ADD COLUMN end_time TIMESTAMP WITH TIME ZONE;
    END IF;

    -- planned_duration ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='planned_duration') THEN
        ALTER TABLE study_sessions ADD COLUMN planned_duration INTEGER;
    END IF;

    -- productivity_rating ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='productivity_rating') THEN
        ALTER TABLE study_sessions ADD COLUMN productivity_rating INTEGER CHECK (productivity_rating >= 1 AND productivity_rating <= 5);
    END IF;

    -- interrupted ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='interrupted') THEN
        ALTER TABLE study_sessions ADD COLUMN interrupted BOOLEAN DEFAULT false;
    END IF;

    -- interruption_reason ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='interruption_reason') THEN
        ALTER TABLE study_sessions ADD COLUMN interruption_reason TEXT;
    END IF;

    -- notes ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='notes') THEN
        ALTER TABLE study_sessions ADD COLUMN notes TEXT;
    END IF;

    -- topics_covered ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='topics_covered') THEN
        ALTER TABLE study_sessions ADD COLUMN topics_covered JSONB DEFAULT '[]'::jsonb;
    END IF;

    -- breaks_taken ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='breaks_taken') THEN
        ALTER TABLE study_sessions ADD COLUMN breaks_taken INTEGER DEFAULT 0;
    END IF;

    -- xp_earned ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='xp_earned') THEN
        ALTER TABLE study_sessions ADD COLUMN xp_earned INTEGER DEFAULT 0;
    END IF;

    -- updated_at ustunini qo'shish
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='study_sessions' AND column_name='updated_at') THEN
        ALTER TABLE study_sessions ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- ============================================
-- 5. Study sessions ma'lumotlarini yangilash
-- ============================================

-- Noto'g'ri type qiymatlarini to'g'rilash
UPDATE study_sessions 
SET type = CASE 
    WHEN type NOT IN ('focus', 'pomodoro', 'review', 'practice', 'break') THEN 'focus'
    ELSE type
END
WHERE type IS NOT NULL;

-- NULL type qiymatlarini to'g'rilash
UPDATE study_sessions 
SET type = 'focus' 
WHERE type IS NULL;

-- ============================================
-- 6. Study sessions uchun constraint qo'shish
-- ============================================

DO $$ 
BEGIN
    -- Eski constraintni o'chirish (agar mavjud bo'lsa)
    IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'study_sessions_type_check') THEN
        ALTER TABLE study_sessions DROP CONSTRAINT study_sessions_type_check;
    END IF;

    -- Yangi constraintni qo'shish
    ALTER TABLE study_sessions ADD CONSTRAINT study_sessions_type_check 
    CHECK (type IN ('focus', 'pomodoro', 'review', 'practice', 'break'));
END $$;

-- Yangi indekslarni qo'shish
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_subject_id ON study_sessions(subject_id);
CREATE INDEX IF NOT EXISTS idx_sessions_task_id ON study_sessions(task_id);
CREATE INDEX IF NOT EXISTS idx_sessions_start_time ON study_sessions(start_time DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_type ON study_sessions(type);
CREATE INDEX IF NOT EXISTS idx_sessions_completed ON study_sessions(completed);

-- ============================================
-- 7. TRIGGERS: updated_at avtomatik yangilash
-- ============================================

-- Tasks uchun trigger function
CREATE OR REPLACE FUNCTION update_tasks_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Eski triggerni o'chirish va yangisini yaratish
DROP TRIGGER IF EXISTS tasks_updated_at_trigger ON tasks;
CREATE TRIGGER tasks_updated_at_trigger
  BEFORE UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_tasks_updated_at();

-- Study sessions uchun trigger function
CREATE OR REPLACE FUNCTION update_sessions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Eski triggerni o'chirish va yangisini yaratish
DROP TRIGGER IF EXISTS sessions_updated_at_trigger ON study_sessions;
CREATE TRIGGER sessions_updated_at_trigger
  BEFORE UPDATE ON study_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_sessions_updated_at();

-- ============================================
-- 8. FOYDALI VIEWS (Ko'rinishlar)
-- ============================================

-- Bugungi vazifalar
DROP VIEW IF EXISTS today_tasks CASCADE;
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
DROP VIEW IF EXISTS recent_sessions CASCADE;
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
-- 9. RLS POLICIES (agar mavjud bo'lmasa)
-- ============================================

-- Tasks policies
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'tasks' AND policyname = 'Users can view own tasks') THEN
        CREATE POLICY "Users can view own tasks" ON tasks
          FOR SELECT USING (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'tasks' AND policyname = 'Users can insert own tasks') THEN
        CREATE POLICY "Users can insert own tasks" ON tasks
          FOR INSERT WITH CHECK (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'tasks' AND policyname = 'Users can update own tasks') THEN
        CREATE POLICY "Users can update own tasks" ON tasks
          FOR UPDATE USING (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'tasks' AND policyname = 'Users can delete own tasks') THEN
        CREATE POLICY "Users can delete own tasks" ON tasks
          FOR DELETE USING (auth.uid() = user_id);
    END IF;
END $$;

-- Study sessions policies
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'study_sessions' AND policyname = 'Users can view own sessions') THEN
        CREATE POLICY "Users can view own sessions" ON study_sessions
          FOR SELECT USING (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'study_sessions' AND policyname = 'Users can insert own sessions') THEN
        CREATE POLICY "Users can insert own sessions" ON study_sessions
          FOR INSERT WITH CHECK (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'study_sessions' AND policyname = 'Users can update own sessions') THEN
        CREATE POLICY "Users can update own sessions" ON study_sessions
          FOR UPDATE USING (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'study_sessions' AND policyname = 'Users can delete own sessions') THEN
        CREATE POLICY "Users can delete own sessions" ON study_sessions
          FOR DELETE USING (auth.uid() = user_id);
    END IF;
END $$;

-- ============================================
-- TAYYOR! Migration muvaffaqiyatli bajarildi
-- ============================================

-- Tekshirish uchun:
-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'tasks' ORDER BY ordinal_position;
-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'study_sessions' ORDER BY ordinal_position;

-- Status va priority qiymatlarini tekshirish:
-- SELECT DISTINCT status FROM tasks;
-- SELECT DISTINCT priority FROM tasks;
-- SELECT DISTINCT type FROM study_sessions;
