import { Lesson, UserLessonProgress, SupportedLanguage } from '../types/lesson';
import { SAMPLE_LESSONS } from '../data/curriculum/sampleCurriculum';
import { supabase } from '../lib/supabase';

const PROGRESS_STORAGE_PREFIX = 'study_planner_lesson_progress_';

export const LessonService = {
    /**
     * Retrieve a lesson by ID.
     */
    getLessonById(lessonId: string): Lesson | null {
        return SAMPLE_LESSONS.find(l => l.id === lessonId) || null;
    },

    /**
     * Retrieve all lessons for a specific language track.
     */
    getLessonsForLanguage(language: SupportedLanguage): Lesson[] {
        return SAMPLE_LESSONS.filter(l => l.language === language);
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
     * Save user progress locally and sync with Supabase auth metadata.
     */
    async saveLessonProgress(userId: string, progress: UserLessonProgress): Promise<void> {
        const storageKey = `${PROGRESS_STORAGE_PREFIX}${userId || 'guest'}_${progress.lessonId}`;
        try {
            localStorage.setItem(storageKey, JSON.stringify(progress));
        } catch (e) {
            console.error('[LessonService] Failed to save progress to localStorage:', e);
        }

        if (!userId) return;

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
            console.warn('[LessonService] Background sync to Supabase failed:', err);
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

        const completedProgress: UserLessonProgress = {
            lessonId,
            userId: userId || 'guest',
            currentStepIndex: allStepIds.length - 1,
            completedStepIds: allStepIds,
            isCompleted: true,
            quizScore,
            lastAttemptedAt: new Date().toISOString(),
            completedAt: new Date().toISOString()
        };

        await this.saveLessonProgress(userId, completedProgress);
        return completedProgress;
    }
};
