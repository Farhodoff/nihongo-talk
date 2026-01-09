-- Jadval allaqachon borligi yaxshi! Demak bu qismni o'tkazib yuboramiz.
-- Bu kod faqat XAVFSIZLIK SOZLAMALARI (Policies) ni to'g'irlaydi.

-- 1. Xavfsizlikni yoqish
ALTER TABLE IF EXISTS public.study_notes ENABLE ROW LEVEL SECURITY;

-- 2. Eski qoidalarni o'chirish (o'xshash xatoliklar chiqmasligi uchun)
DROP POLICY IF EXISTS "Users can view their own study notes" ON public.study_notes;
DROP POLICY IF EXISTS "Users can insert their own study notes" ON public.study_notes;
DROP POLICY IF EXISTS "Users can update their own study notes" ON public.study_notes;
DROP POLICY IF EXISTS "Users can delete their own study notes" ON public.study_notes;

-- 3. Yangi qoidalarni yaratish
CREATE POLICY "Users can view their own study notes"
ON public.study_notes FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own study notes"
ON public.study_notes FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own study notes"
ON public.study_notes FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own study notes"
ON public.study_notes FOR DELETE USING (auth.uid() = user_id);
