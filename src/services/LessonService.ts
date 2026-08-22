import { Lesson, UserLessonProgress, SupportedLanguage } from '../types/lesson';
import { SAMPLE_LESSONS } from '../data/curriculum/sampleCurriculum';
import {
    getCurriculumLessonById,
    getCurriculumLessonsByLanguage
} from '../data/curriculum/curriculumLessons';
import { supabase } from '../lib/supabase';
import { toDeterministicUUID } from '../utils/uuid';

const PROGRESS_STORAGE_PREFIX = 'study_planner_lesson_progress_';

function normalizeQuizScore(quizScore: { score: number; total: number; percentage?: number }) {
    const total = Number.isFinite(quizScore.total) && quizScore.total > 0 ? Math.round(quizScore.total) : 1;
    const score = Number.isFinite(quizScore.score)
        ? Math.max(0, Math.min(total, Math.round(quizScore.score)))
        : 0;
    const percentage = typeof quizScore.percentage === 'number' && Number.isFinite(quizScore.percentage)
        ? Math.max(0, Math.min(100, Math.round(quizScore.percentage)))
        : Math.round((score / total) * 100);

    return { score, total, percentage };
}

export const LessonService = {
    /**
     * Retrieve a lesson by ID.
     */
    getLessonById(lessonId: string): Lesson | null {
        return getCurriculumLessonById(lessonId) || SAMPLE_LESSONS.find(l => l.id === lessonId) || null;
    },

    /**
     * Retrieve all lessons for a specific language track.
     */
    getLessonsForLanguage(language: SupportedLanguage): Lesson[] {
        // Phase 19: real curriculum is the source of truth (not sample data).
        return getCurriculumLessonsByLanguage(language);
    },

    /**
     * Get default starting lesson for a user's primary language and level.
     */
    getDefaultLessonForLanguage(language: SupportedLanguage, level?: string): Lesson | null {
        const langLessons = this.getLessonsForLanguage(language);
        if (level) {
            const levelMatch = langLessons.find(l => l.level.toLowerCase() === level.toLowerCase());
            if (levelMatch) return levelMatch;
        }
        return langLessons[0] || null;
    },

    /**
     * Get next sequential lesson in the course if available.
     */
    getNextLesson(currentLessonId: string): Lesson | null {
        const current = this.getLessonById(currentLessonId);
        if (!current) return null;

        const langLessons = this.getLessonsForLanguage(current.language);
        const currentIndex = langLessons.findIndex(l => l.id === currentLessonId);
        if (currentIndex >= 0 && currentIndex < langLessons.length - 1) {
            return langLessons[currentIndex + 1];
        }
        return null;
    },

    /**
     * Get user progress for a given lesson (from localStorage with user metadata fallback).
     */
    getLessonProgress(userId: string, lessonId: string): UserLessonProgress | null {
        const storageKey = `${PROGRESS_STORAGE_PREFIX}${userId || 'guest'}_${lessonId}`;
        try {
            const cached = localStorage.getItem(storageKey);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch (e) {
            console.warn('[LessonService] Failed to read cached progress:', e);
        }

        return null;
    },

    /**
     * Save user progress locally and sync with Supabase database (and auth metadata fallback).
     */
    async saveLessonProgress(userId: string, progress: UserLessonProgress): Promise<void> {
        const activeUserId = userId || 'guest';
        const storageKey = `${PROGRESS_STORAGE_PREFIX}${activeUserId}_${progress.lessonId}`;
        try {
            localStorage.setItem(storageKey, JSON.stringify(progress));
        } catch (e) {
            console.error('[LessonService] Failed to save progress to localStorage:', e);
        }

        if (!activeUserId || activeUserId === 'guest') return;

        // 1. Asynchronous write to Supabase lesson_progress table
        if (supabase?.from) {
            try {
                const lesson = this.getLessonById(progress.lessonId);
                const language = lesson?.language || 'en';
                const uuid = toDeterministicUUID(`lesson_prog_${activeUserId}_${progress.lessonId}`);
                
                await supabase.from('lesson_progress').upsert({
                    id: uuid,
                    user_id: activeUserId,
                    lesson_id: progress.lessonId,
                    language,
                    current_step_index: progress.currentStepIndex || 0,
                    is_completed: progress.isCompleted || false,
                    score: progress.quizScore?.score ?? 0,
                    answers: { 
                        quizScore: progress.quizScore, 
                        completedStepIds: progress.completedStepIds 
                    },
                    completed_at: progress.completedAt || null,
                    updated_at: new Date().toISOString()
                });
            } catch (err) {
                console.warn('[LessonService] DB write error:', err);
            }
        }

        // 2. Backward compatibility fallback in user_metadata
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const currentMetaProgress = (user.user_metadata?.lesson_progress || {}) as Record<string, UserLessonProgress>;
                const updatedMeta = {
                    ...currentMetaProgress,
                    [progress.lessonId]: progress
                };
                await supabase.auth.updateUser({
                    data: { lesson_progress: updatedMeta }
                });
            }
        } catch (err) {
            console.warn('[LessonService] Background sync to Supabase metadata failed:', err);
        }
    },

    /**
     * Mark lesson as completed with final quiz score and timestamp.
     */
    async completeLesson(
        userId: string,
        lessonId: string,
        quizScore: { score: number; total: number; percentage: number }
    ): Promise<UserLessonProgress> {
        const lesson = this.getLessonById(lessonId);
        const allStepIds = lesson ? lesson.steps.map(s => s.id) : [];
        const normalizedScore = normalizeQuizScore(quizScore);

        const completedProgress: UserLessonProgress = {
            lessonId,
            userId: userId || 'guest',
            currentStepIndex: Math.max(0, allStepIds.length - 1),
            completedStepIds: allStepIds,
            isCompleted: true,
            quizScore: normalizedScore,
            lastAttemptedAt: new Date().toISOString(),
            completedAt: new Date().toISOString()
        };

        await this.saveLessonProgress(userId, completedProgress);
        return completedProgress;
    },

    /**
     * Synchronize all lesson progresses for a user from Supabase DB to local cache.
     */
    async syncLessonProgressFromDB(userId: string, language?: SupportedLanguage): Promise<void> {
        if (!supabase?.from || !userId || userId === 'guest') return;

        try {
            let query = supabase
                .from('lesson_progress')
                .select('*')
                .eq('user_id', userId);

            if (language) {
                query = query.eq('language', language);
            }

            const { data, error } = await query;
            if (!error && Array.isArray(data)) {
                for (const row of data) {
                    const storageKey = `${PROGRESS_STORAGE_PREFIX}${userId}_${row.lesson_id}`;
                    const answersData = (row.answers || {}) as any;
                    const mappedProgress: UserLessonProgress = {
                        lessonId: row.lesson_id,
                        userId: row.user_id,
                        currentStepIndex: row.current_step_index || 0,
                        completedStepIds: answersData.completedStepIds || [],
                        isCompleted: row.is_completed || false,
                        quizScore: answersData.quizScore || { score: Number(row.score || 0), total: 1, percentage: Number(row.score || 0) },
                        completedAt: row.completed_at || undefined,
                        lastAttemptedAt: row.updated_at || undefined
                    };
                    localStorage.setItem(storageKey, JSON.stringify(mappedProgress));
                }
            }
        } catch (e) {
            console.warn('[LessonService] DB sync error:', e);
        }
    }
};
