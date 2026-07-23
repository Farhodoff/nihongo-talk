-- Supabase SQL Editor uchun skript
-- Ushbu kodni nusxalab Supabase SQL Editor'da ishga tushiring (Run qiling)

CREATE TABLE IF NOT EXISTS public.ai_coach_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    persona_title TEXT NOT NULL,
    fluency_score INTEGER NOT NULL,
    vocabulary_score INTEGER NOT NULL,
    grammar_score INTEGER NOT NULL,
    pronunciation_score INTEGER NOT NULL,
    feedback TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS (Row Level Security) qoidalari
ALTER TABLE public.ai_coach_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Foydalanuvchi faqat o'zining natijalarini ko'ra oladi" 
ON public.ai_coach_sessions FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Foydalanuvchi faqat o'ziga natija saqlay oladi" 
ON public.ai_coach_sessions FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Foydalanuvchi faqat o'zining natijasini o'chira oladi" 
ON public.ai_coach_sessions FOR DELETE 
USING (auth.uid() = user_id);

-- O'qish tezligini oshirish uchun indeks
CREATE INDEX IF NOT EXISTS ai_coach_sessions_user_id_idx ON public.ai_coach_sessions(user_id);
