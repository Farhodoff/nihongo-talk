-- ═══════════════════════════════════════════════════════════════════════════
-- Migration: Production Scalability & Composite Indexes
-- Date: 2026-08-19
-- Purpose:
--   1. Add high-performance composite indexes for high-frequency user-filtered queries
--   2. Optimize SRS flashcard review queries, study session analytics, and task views
--   3. Eliminate table scans across speaking sessions, exam results, and notifications
--   4. Ensure idempotent execution with IF NOT EXISTS
-- ═══════════════════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────────────────────
-- 1. FLASHCARDS & SRS (SuperMemo-2) OPTIMIZATIONS
-- ─────────────────────────────────────────────────────────────
-- High-frequency: fetching cards due for review ordered by next_review_date
CREATE INDEX IF NOT EXISTS idx_flashcards_user_next_review
  ON public.flashcards(user_id, next_review_date ASC)
  WHERE deleted_at IS NULL;

-- High-frequency: filtering cards by subject/deck
CREATE INDEX IF NOT EXISTS idx_flashcards_user_subject
  ON public.flashcards(user_id, subject_id)
  WHERE deleted_at IS NULL;

-- High-frequency: instant deduplication checks on front text
CREATE INDEX IF NOT EXISTS idx_flashcards_user_front
  ON public.flashcards(user_id, front)
  WHERE deleted_at IS NULL;

-- ─────────────────────────────────────────────────────────────
-- 2. TASKS & KANBAN OPTIMIZATIONS
-- ─────────────────────────────────────────────────────────────
-- High-frequency: Active tasks filtered by user and status, ordered by due date
CREATE INDEX IF NOT EXISTS idx_tasks_user_status_due
  ON public.tasks(user_id, status, due_date ASC)
  WHERE deleted_at IS NULL;

-- ─────────────────────────────────────────────────────────────
-- 3. STUDY & SPEAKING SESSIONS (Analytics & Heatmaps)
-- ─────────────────────────────────────────────────────────────
-- High-frequency: Study sessions timeline and analytics heatmap
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_start_time
  ON public.study_sessions(user_id, start_time DESC);

-- High-frequency: Speaking coach history pagination
CREATE INDEX IF NOT EXISTS idx_speaking_sessions_user_created
  ON public.speaking_sessions(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_coach_sessions_user_created
  ON public.coach_sessions(user_id, created_at DESC);

-- ─────────────────────────────────────────────────────────────
-- 4. USER NOTIFICATIONS
-- ─────────────────────────────────────────────────────────────
-- High-frequency: Unread notifications badge & list
CREATE INDEX IF NOT EXISTS idx_user_notifications_user_read_created
  ON public.user_notifications(user_id, is_read, created_at DESC);

-- ─────────────────────────────────────────────────────────────
-- 5. GRAMMAR LESSONS & CURRICULUM
-- ─────────────────────────────────────────────────────────────
-- Dynamic curriculum listing by subject, level, and order
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_subject_level_order
  ON public.grammar_lessons(subject_id, level, order_index ASC);

-- ─────────────────────────────────────────────────────────────
-- 6. EXAM RESULTS & MOCKS
-- ─────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_exam_results_user_created
  ON public.exam_results(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_mock_exams_history_user_created
  ON public.mock_exams_history(user_id, created_at DESC);

-- ─────────────────────────────────────────────────────────────
-- 7. GOALS & TARGETS
-- ─────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_goals_user_deadline
  ON public.goals(user_id, deadline ASC);
