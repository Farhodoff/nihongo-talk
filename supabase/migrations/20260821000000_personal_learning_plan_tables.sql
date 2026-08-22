-- Migration: Create Personal Learning Plan tables with RLS and Indexes

-- 1. Create personal_learning_goals table
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

-- RLS for personal_learning_goals
ALTER TABLE public.personal_learning_goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY select_own_goals ON public.personal_learning_goals
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY insert_own_goals ON public.personal_learning_goals
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY update_own_goals ON public.personal_learning_goals
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY delete_own_goals ON public.personal_learning_goals
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Indexes for personal_learning_goals
CREATE INDEX IF NOT EXISTS idx_goals_user_id ON public.personal_learning_goals(user_id);
CREATE INDEX IF NOT EXISTS idx_goals_user_status ON public.personal_learning_goals(user_id, status);


-- 2. Create weekly_learning_plans table
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

-- RLS for weekly_learning_plans
ALTER TABLE public.weekly_learning_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY select_own_plans ON public.weekly_learning_plans
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY insert_own_plans ON public.weekly_learning_plans
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY update_own_plans ON public.weekly_learning_plans
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY delete_own_plans ON public.weekly_learning_plans
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Indexes for weekly_learning_plans
CREATE INDEX IF NOT EXISTS idx_plans_user_id ON public.weekly_learning_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_plans_goal_week ON public.weekly_learning_plans(goal_id, week_number);


-- 3. Create weekly_learning_evaluations table
CREATE TABLE IF NOT EXISTS public.weekly_learning_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    goal_id UUID NOT NULL REFERENCES public.personal_learning_goals(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL,
    evaluation_data JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT unique_goal_week_eval UNIQUE (goal_id, week_number)
);

-- RLS for weekly_learning_evaluations
ALTER TABLE public.weekly_learning_evaluations ENABLE ROW LEVEL SECURITY;

CREATE POLICY select_own_evaluations ON public.weekly_learning_evaluations
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY insert_own_evaluations ON public.weekly_learning_evaluations
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY update_own_evaluations ON public.weekly_learning_evaluations
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY delete_own_evaluations ON public.weekly_learning_evaluations
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Indexes for weekly_learning_evaluations
CREATE INDEX IF NOT EXISTS idx_evals_user_id ON public.weekly_learning_evaluations(user_id);
CREATE INDEX IF NOT EXISTS idx_evals_goal_week ON public.weekly_learning_evaluations(goal_id, week_number);
