-- ═══════════════════════════════════════════════════════════════════════════
-- Migration: Admin Role System + Performance Indexes + Profiles Role Column
-- Sana: 2026-07-29
-- Maqsad:
--   1. profiles jadvaliga 'role' ustuni qo'shish (admin boshqaruvini dinamik qilish)
--   2. is_admin() funksiyasini email-based dan role-based ga o'zgartirish
--   3. Imtihon jadvallari uchun performance indekslar qo'shish
--   4. Joriy admin emailni avtomatik 'admin' roliga o'tkazish
-- ═══════════════════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────────────────────
-- 1-QADAM: profiles jadvaliga 'role' ustuni qo'shish
-- ─────────────────────────────────────────────────────────────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'user';

-- Joriy admin emailni avtomatik ravishda 'admin' roliga o'tkazish
UPDATE public.profiles
SET role = 'admin'
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'fsoyilov@gmail.com'
);

-- role ustuniga index qo'shish (admin tekshiruvlari tezlashadi)
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);

-- ─────────────────────────────────────────────────────────────
-- 2-QADAM: is_admin() funksiyasini yangilash
-- Endi email emas, profiles.role = 'admin' tekshiriladi
-- ─────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ─────────────────────────────────────────────────────────────
-- 3-QADAM: Imtihon jadvallari uchun Performance Indekslar
-- Foreign Key ustunlaridagi so'rovlarni tezlashtirish
-- ─────────────────────────────────────────────────────────────

-- exam_sections: exam_id bo'yicha qidiruvlar
CREATE INDEX IF NOT EXISTS idx_exam_sections_exam_id
  ON exam_sections(exam_id);

-- exam_questions: section_id bo'yicha qidiruvlar
CREATE INDEX IF NOT EXISTS idx_exam_questions_section_id
  ON exam_questions(section_id);

-- exam_prompts: section_id bo'yicha qidiruvlar
CREATE INDEX IF NOT EXISTS idx_exam_prompts_section_id
  ON exam_prompts(section_id);

-- exam_sessions: user_id va exam_id bo'yicha qidiruvlar
CREATE INDEX IF NOT EXISTS idx_exam_sessions_user_id
  ON exam_sessions(user_id);

CREATE INDEX IF NOT EXISTS idx_exam_sessions_exam_id
  ON exam_sessions(exam_id);

-- exam_answers: session_id va question_id bo'yicha qidiruvlar
CREATE INDEX IF NOT EXISTS idx_exam_answers_session_id
  ON exam_answers(session_id);

CREATE INDEX IF NOT EXISTS idx_exam_answers_question_id
  ON exam_answers(question_id);

-- exam_prompt_responses: session_id va prompt_id bo'yicha qidiruvlar
CREATE INDEX IF NOT EXISTS idx_exam_prompt_responses_session_id
  ON exam_prompt_responses(session_id);

CREATE INDEX IF NOT EXISTS idx_exam_prompt_responses_prompt_id
  ON exam_prompt_responses(prompt_id);

-- ─────────────────────────────────────────────────────────────
-- 4-QADAM: Admin rolini boshqarish uchun RLS qoidalar
-- Faqat adminlar boshqa foydalanuvchilarning rolini o'zgartira oladi
-- ─────────────────────────────────────────────────────────────

-- Admin rol o'zgartirish uchun maxsus policy
-- (Oddiy foydalanuvchilar o'z rolini o'zgartira olmaydi)
DO $$
BEGIN
  -- Avval eski policy bormi tekshiramiz
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE policyname = 'only_admins_can_change_roles'
    AND tablename = 'profiles'
  ) THEN
    CREATE POLICY "only_admins_can_change_roles" ON public.profiles
      FOR UPDATE
      USING (
        -- O'zini o'zi yangilayotgan bo'lsa YOKI admin bo'lsa
        auth.uid() = id OR is_admin()
      )
      WITH CHECK (
        -- Agar role ustunini o'zgartirmoqchi bo'lsa, faqat admin ruxsat
        CASE
          WHEN role IS DISTINCT FROM (SELECT p.role FROM public.profiles p WHERE p.id = id)
          THEN is_admin()
          ELSE true
        END
      );
  END IF;
END $$;
