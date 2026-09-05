-- ==============================================================================
-- NIHONGO TALK: CONSOLIDATED PRODUCTION DATABASE MIGRATIONS (P1 - P2)
-- Execute this entire file in Supabase Dashboard -> SQL Editor -> Click 'Run'
-- ==============================================================================

-- ==============================================================================
-- 1. APP REVIEWS & RATINGS TABLE (In-App Google Star Reviews)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.app_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    category VARCHAR(50) DEFAULT 'general',
    user_email TEXT,
    user_name TEXT,
    telegram_username TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.app_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert to app_reviews" ON public.app_reviews;
CREATE POLICY "Allow public insert to app_reviews"
    ON public.app_reviews
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow admin select on app_reviews" ON public.app_reviews;
CREATE POLICY "Allow admin select on app_reviews"
    ON public.app_reviews
    FOR SELECT
    TO authenticated
    USING (
        auth.uid() = user_id OR
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role IN ('admin', 'superadmin')
        )
    );

CREATE INDEX IF NOT EXISTS idx_app_reviews_created_at ON public.app_reviews (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_app_reviews_rating ON public.app_reviews (rating);
CREATE INDEX IF NOT EXISTS idx_app_reviews_user_id ON public.app_reviews (user_id);


-- ==============================================================================
-- 2. PERSONAL LEARNING PLANS & ROADMAP TABLES
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.personal_learning_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    goal_type TEXT NOT NULL,
    current_level TEXT NOT NULL,
    target_level TEXT NOT NULL,
    target_goal TEXT,
    deadline TIMESTAMPTZ,
    daily_minutes INTEGER NOT NULL,
    total_weeks INTEGER NOT NULL,
    current_week INTEGER NOT NULL DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.personal_learning_goals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS select_own_goals ON public.personal_learning_goals;
CREATE POLICY select_own_goals ON public.personal_learning_goals
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS insert_own_goals ON public.personal_learning_goals;
CREATE POLICY insert_own_goals ON public.personal_learning_goals
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS update_own_goals ON public.personal_learning_goals;
CREATE POLICY update_own_goals ON public.personal_learning_goals
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS delete_own_goals ON public.personal_learning_goals;
CREATE POLICY delete_own_goals ON public.personal_learning_goals
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_goals_user_id ON public.personal_learning_goals(user_id);
CREATE INDEX IF NOT EXISTS idx_goals_user_status ON public.personal_learning_goals(user_id, status);

-- Weekly Plans
CREATE TABLE IF NOT EXISTS public.weekly_learning_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID NOT NULL REFERENCES public.personal_learning_goals(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL,
    plan_data JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_goal_week_plan UNIQUE (goal_id, week_number)
);

ALTER TABLE public.weekly_learning_plans ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS select_own_plans ON public.weekly_learning_plans;
CREATE POLICY select_own_plans ON public.weekly_learning_plans
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS insert_own_plans ON public.weekly_learning_plans;
CREATE POLICY insert_own_plans ON public.weekly_learning_plans
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS update_own_plans ON public.weekly_learning_plans;
CREATE POLICY update_own_plans ON public.weekly_learning_plans
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS delete_own_plans ON public.weekly_learning_plans;
CREATE POLICY delete_own_plans ON public.weekly_learning_plans
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_plans_user_id ON public.weekly_learning_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_plans_goal_week ON public.weekly_learning_plans(goal_id, week_number);

-- Weekly Evaluations
CREATE TABLE IF NOT EXISTS public.weekly_learning_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID NOT NULL REFERENCES public.personal_learning_goals(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL,
    evaluation_data JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_goal_week_eval UNIQUE (goal_id, week_number)
);

ALTER TABLE public.weekly_learning_evaluations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS select_own_evaluations ON public.weekly_learning_evaluations;
CREATE POLICY select_own_evaluations ON public.weekly_learning_evaluations
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS insert_own_evaluations ON public.weekly_learning_evaluations;
CREATE POLICY insert_own_evaluations ON public.weekly_learning_evaluations
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS update_own_evaluations ON public.weekly_learning_evaluations;
CREATE POLICY update_own_evaluations ON public.weekly_learning_evaluations
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS delete_own_evaluations ON public.weekly_learning_evaluations;
CREATE POLICY delete_own_evaluations ON public.weekly_learning_evaluations
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_evals_user_id ON public.weekly_learning_evaluations(user_id);
CREATE INDEX IF NOT EXISTS idx_evals_goal_week ON public.weekly_learning_evaluations(goal_id, week_number);


-- ==============================================================================
-- 3. GRAMMAR LESSONS & USER GRAMMAR PROGRESS TABLES
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.grammar_lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language VARCHAR(10) DEFAULT 'en' NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    level VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    structure TEXT NOT NULL,
    uzbek_meaning TEXT,
    explanation TEXT NOT NULL,
    ielts_relevance TEXT,
    academic_examples JSONB DEFAULT '[]'::jsonb,
    common_mistakes JSONB DEFAULT '[]'::jsonb,
    quiz_questions JSONB DEFAULT '[]'::jsonb,
    order_index INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_grammar_lessons_lang_pub ON public.grammar_lessons(language, is_published, order_index);
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_level ON public.grammar_lessons(level);
CREATE INDEX IF NOT EXISTS idx_grammar_lessons_slug ON public.grammar_lessons(slug);

ALTER TABLE public.grammar_lessons ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access on published grammar lessons" ON public.grammar_lessons;
CREATE POLICY "Allow public read access on published grammar lessons"
    ON public.grammar_lessons
    FOR SELECT
    USING (is_published = true);

DROP POLICY IF EXISTS "Allow super admin full access to grammar lessons" ON public.grammar_lessons;
CREATE POLICY "Allow super admin full access to grammar lessons"
    ON public.grammar_lessons
    FOR ALL
    TO authenticated
    USING (
        auth.jwt() ->> 'email' IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp')
    )
    WITH CHECK (
        auth.jwt() ->> 'email' IN ('fsoyilov@gmail.com', 'admin@nihongo-talk.jp')
    );

CREATE TABLE IF NOT EXISTS public.english_grammar_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_slug VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false,
    score NUMERIC DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 1,
    last_attempt_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT unique_user_lesson_progress UNIQUE (user_id, lesson_slug)
);

CREATE INDEX IF NOT EXISTS idx_english_grammar_progress_user ON public.english_grammar_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_english_grammar_progress_slug ON public.english_grammar_progress(lesson_slug);

ALTER TABLE public.english_grammar_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own grammar progress" ON public.english_grammar_progress;
CREATE POLICY "Users can view their own grammar progress"
    ON public.english_grammar_progress
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own grammar progress" ON public.english_grammar_progress;
CREATE POLICY "Users can insert their own grammar progress"
    ON public.english_grammar_progress
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own grammar progress" ON public.english_grammar_progress;
CREATE POLICY "Users can update their own grammar progress"
    ON public.english_grammar_progress
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_grammar_lessons_updated_at ON public.grammar_lessons;
CREATE TRIGGER trigger_grammar_lessons_updated_at
BEFORE UPDATE ON public.grammar_lessons
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trigger_english_grammar_progress_updated_at ON public.english_grammar_progress;
CREATE TRIGGER trigger_english_grammar_progress_updated_at
BEFORE UPDATE ON public.english_grammar_progress
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- ==============================================================================
-- Migration Complete! Tables created with RLS, performance indexes, and triggers.
-- ==============================================================================
