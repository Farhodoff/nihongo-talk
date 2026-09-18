-- Migration: 20260918000003_create_jlpt_writing_history_view.sql
-- Description: Unify Japanese Sakubun writing history table naming with backward-compatible view

CREATE OR REPLACE VIEW public.jlpt_writing_history AS
SELECT 
    id,
    user_id,
    task_type,
    prompt,
    essay,
    score,
    criteria,
    feedback,
    created_at
FROM public.ielts_writing_history;

-- Grant permissions to authenticated and service_role
GRANT SELECT, INSERT, UPDATE, DELETE ON public.jlpt_writing_history TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.jlpt_writing_history TO service_role;
