-- Fix RLS Policies: Replace broken 'auth.jwt() ->> role = admin' with email-based admin check
-- Supabase standard JWT does NOT have role='admin', so we check admin by email instead.

-- Drop ALL old broken policies
DROP POLICY IF EXISTS "Anyone can view published exams" ON exams;
DROP POLICY IF EXISTS "Admins can manage exams" ON exams;
DROP POLICY IF EXISTS "Anyone can view sections of published exams" ON exam_sections;
DROP POLICY IF EXISTS "Admins can manage exam sections" ON exam_sections;
DROP POLICY IF EXISTS "Anyone can view questions of published exams" ON exam_questions;
DROP POLICY IF EXISTS "Admins can manage exam questions" ON exam_questions;
DROP POLICY IF EXISTS "Anyone can view prompts of published exams" ON exam_prompts;
DROP POLICY IF EXISTS "Admins can manage exam prompts" ON exam_prompts;

-- Also drop any "Public" policies that may have been manually applied
DROP POLICY IF EXISTS "Public Read Exams" ON exams;
DROP POLICY IF EXISTS "Public Insert Exams" ON exams;
DROP POLICY IF EXISTS "Public Update Exams" ON exams;
DROP POLICY IF EXISTS "Public Read Sections" ON exam_sections;
DROP POLICY IF EXISTS "Public Insert Sections" ON exam_sections;
DROP POLICY IF EXISTS "Public Read Questions" ON exam_questions;
DROP POLICY IF EXISTS "Public Insert Questions" ON exam_questions;
DROP POLICY IF EXISTS "Public Read Prompts" ON exam_prompts;
DROP POLICY IF EXISTS "Public Insert Prompts" ON exam_prompts;

-- ═══════════════════════════════════════════════════════════════
-- Helper function: check if current user is admin by email
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT email FROM auth.users WHERE id = auth.uid()
  ) IN ('fsoyilov@gmail.com');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ═══════════════════════════════════════════════════════════════
-- EXAMS table policies
-- ═══════════════════════════════════════════════════════════════
-- Authenticated users can see published exams; admins can see all
CREATE POLICY "exams_select" ON exams FOR SELECT
  USING (is_published = true OR is_admin());

-- Only admins can insert/update/delete
CREATE POLICY "exams_insert" ON exams FOR INSERT
  WITH CHECK (is_admin());

CREATE POLICY "exams_update" ON exams FOR UPDATE
  USING (is_admin());

CREATE POLICY "exams_delete" ON exams FOR DELETE
  USING (is_admin());

-- ═══════════════════════════════════════════════════════════════
-- EXAM_SECTIONS table policies
-- ═══════════════════════════════════════════════════════════════
CREATE POLICY "exam_sections_select" ON exam_sections FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM exams WHERE id = exam_sections.exam_id AND (is_published = true OR is_admin()))
  );

CREATE POLICY "exam_sections_insert" ON exam_sections FOR INSERT
  WITH CHECK (is_admin());

CREATE POLICY "exam_sections_update" ON exam_sections FOR UPDATE
  USING (is_admin());

CREATE POLICY "exam_sections_delete" ON exam_sections FOR DELETE
  USING (is_admin());

-- ═══════════════════════════════════════════════════════════════
-- EXAM_QUESTIONS table policies
-- ═══════════════════════════════════════════════════════════════
CREATE POLICY "exam_questions_select" ON exam_questions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM exam_sections
      JOIN exams ON exam_sections.exam_id = exams.id
      WHERE exam_sections.id = exam_questions.section_id
      AND (exams.is_published = true OR is_admin())
    )
  );

CREATE POLICY "exam_questions_insert" ON exam_questions FOR INSERT
  WITH CHECK (is_admin());

CREATE POLICY "exam_questions_update" ON exam_questions FOR UPDATE
  USING (is_admin());

CREATE POLICY "exam_questions_delete" ON exam_questions FOR DELETE
  USING (is_admin());

-- ═══════════════════════════════════════════════════════════════
-- EXAM_PROMPTS table policies
-- ═══════════════════════════════════════════════════════════════
CREATE POLICY "exam_prompts_select" ON exam_prompts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM exam_sections
      JOIN exams ON exam_sections.exam_id = exams.id
      WHERE exam_sections.id = exam_prompts.section_id
      AND (exams.is_published = true OR is_admin())
    )
  );

CREATE POLICY "exam_prompts_insert" ON exam_prompts FOR INSERT
  WITH CHECK (is_admin());

CREATE POLICY "exam_prompts_update" ON exam_prompts FOR UPDATE
  USING (is_admin());

CREATE POLICY "exam_prompts_delete" ON exam_prompts FOR DELETE
  USING (is_admin());
