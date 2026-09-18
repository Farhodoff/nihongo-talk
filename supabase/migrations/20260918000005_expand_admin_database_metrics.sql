-- Migration: 20260918000005_expand_admin_database_metrics.sql
-- Description: Expand get_admin_database_metrics RPC function with counts for
--              global_flashcard_overrides, writing history, mock exams, and custom content.

CREATE OR REPLACE FUNCTION get_admin_database_metrics()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    result jsonb;
    _flashcards_count bigint := 0;
    _study_sessions_count bigint := 0;
    _speaking_sessions_count bigint := 0;
    _speaking_coach_sessions_count bigint := 0;
    _ai_coach_sessions_count bigint := 0;
    _speaking_errors_count bigint := 0;
    _speaking_vocabularies_count bigint := 0;
    _diagnostic_results_count bigint := 0;
    _learning_goals_count bigint := 0;
    _profiles_count bigint := 0;
    _global_overrides_count bigint := 0;
    _writing_history_count bigint := 0;
    _mock_exams_count bigint := 0;
    _custom_kanji_count bigint := 0;
    _custom_grammar_count bigint := 0;
    _custom_quiz_count bigint := 0;
BEGIN
    IF to_regclass('public.flashcards') IS NOT NULL THEN
        SELECT COUNT(*) INTO _flashcards_count FROM public.flashcards;
    END IF;

    IF to_regclass('public.study_sessions') IS NOT NULL THEN
        SELECT COUNT(*) INTO _study_sessions_count FROM public.study_sessions;
    END IF;

    IF to_regclass('public.speaking_sessions') IS NOT NULL THEN
        SELECT COUNT(*) INTO _speaking_sessions_count FROM public.speaking_sessions;
    END IF;

    IF to_regclass('public.speaking_coach_sessions') IS NOT NULL THEN
        SELECT COUNT(*) INTO _speaking_coach_sessions_count FROM public.speaking_coach_sessions;
    END IF;

    IF to_regclass('public.ai_coach_sessions') IS NOT NULL THEN
        SELECT COUNT(*) INTO _ai_coach_sessions_count FROM public.ai_coach_sessions;
    END IF;

    IF to_regclass('public.speaking_errors') IS NOT NULL THEN
        SELECT COUNT(*) INTO _speaking_errors_count FROM public.speaking_errors;
    END IF;

    IF to_regclass('public.speaking_vocabularies') IS NOT NULL THEN
        SELECT COUNT(*) INTO _speaking_vocabularies_count FROM public.speaking_vocabularies;
    END IF;

    IF to_regclass('public.diagnostic_results') IS NOT NULL THEN
        SELECT COUNT(*) INTO _diagnostic_results_count FROM public.diagnostic_results;
    END IF;

    IF to_regclass('public.learning_goals') IS NOT NULL THEN
        SELECT COUNT(*) INTO _learning_goals_count FROM public.learning_goals;
    END IF;

    IF to_regclass('public.profiles') IS NOT NULL THEN
        SELECT COUNT(*) INTO _profiles_count FROM public.profiles;
    END IF;

    IF to_regclass('public.global_flashcard_overrides') IS NOT NULL THEN
        SELECT COUNT(*) INTO _global_overrides_count FROM public.global_flashcard_overrides;
    END IF;

    IF to_regclass('public.ielts_writing_history') IS NOT NULL THEN
        SELECT COUNT(*) INTO _writing_history_count FROM public.ielts_writing_history;
    END IF;

    IF to_regclass('public.mock_exams_history') IS NOT NULL THEN
        SELECT COUNT(*) INTO _mock_exams_count FROM public.mock_exams_history;
    END IF;

    IF to_regclass('public.custom_kanji') IS NOT NULL THEN
        SELECT COUNT(*) INTO _custom_kanji_count FROM public.custom_kanji;
    END IF;

    IF to_regclass('public.custom_grammar') IS NOT NULL THEN
        SELECT COUNT(*) INTO _custom_grammar_count FROM public.custom_grammar;
    END IF;

    IF to_regclass('public.custom_quiz_questions') IS NOT NULL THEN
        SELECT COUNT(*) INTO _custom_quiz_count FROM public.custom_quiz_questions;
    END IF;

    SELECT jsonb_build_object(
        'flashcards_count', _flashcards_count,
        'study_sessions_count', _study_sessions_count,
        'speaking_sessions_count', _speaking_sessions_count,
        'speaking_coach_sessions_count', _speaking_coach_sessions_count,
        'ai_coach_sessions_count', _ai_coach_sessions_count,
        'speaking_errors_count', _speaking_errors_count,
        'speaking_vocabularies_count', _speaking_vocabularies_count,
        'diagnostic_results_count', _diagnostic_results_count,
        'learning_goals_count', _learning_goals_count,
        'profiles_count', _profiles_count,
        'global_flashcard_overrides_count', _global_overrides_count,
        'writing_history_count', _writing_history_count,
        'mock_exams_history_count', _mock_exams_count,
        'custom_kanji_count', _custom_kanji_count,
        'custom_grammar_count', _custom_grammar_count,
        'custom_quiz_questions_count', _custom_quiz_count
    ) INTO result;

    RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION get_admin_database_metrics() TO anon, authenticated, service_role;
