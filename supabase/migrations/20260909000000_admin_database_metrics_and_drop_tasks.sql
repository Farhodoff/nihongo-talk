-- Migration: Create get_admin_database_metrics RPC function and clean tasks

CREATE OR REPLACE FUNCTION get_admin_database_metrics()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    result jsonb;
BEGIN
    SELECT jsonb_build_object(
        'flashcards_count', COALESCE((SELECT COUNT(*) FROM flashcards), 0),
        'study_sessions_count', COALESCE((SELECT COUNT(*) FROM study_sessions), 0),
        'speaking_sessions_count', COALESCE((SELECT COUNT(*) FROM speaking_sessions), 0),
        'speaking_coach_sessions_count', COALESCE((SELECT COUNT(*) FROM speaking_coach_sessions), 0),
        'ai_coach_sessions_count', COALESCE((SELECT COUNT(*) FROM ai_coach_sessions), 0),
        'speaking_errors_count', COALESCE((SELECT COUNT(*) FROM speaking_errors), 0),
        'speaking_vocabularies_count', COALESCE((SELECT COUNT(*) FROM speaking_vocabularies), 0),
        'diagnostic_results_count', COALESCE((SELECT COUNT(*) FROM diagnostic_results), 0),
        'learning_goals_count', COALESCE((SELECT COUNT(*) FROM learning_goals), 0),
        'profiles_count', COALESCE((SELECT COUNT(*) FROM profiles), 0)
    ) INTO result;
    RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION get_admin_database_metrics() TO anon, authenticated, service_role;
