import { supabase } from '../lib/supabase';
import { IELTS_GRAMMAR_DATABASE, IeltsGrammarTopic } from '../data/ielts/ielts_grammar_data';

export interface DbGrammarLessonRow {
    id: string;
    language: string;
    title: string;
    slug: string;
    level: 'A1-A2' | 'B1-B2' | 'C1';
    category: string;
    structure: string;
    uzbek_meaning: string;
    explanation: string;
    ielts_relevance: string;
    academic_examples: {
        sentence: string;
        translation: string;
        context: 'Task 1' | 'Task 2' | 'Speaking';
    }[];
    common_mistakes: {
        incorrect: string;
        correct: string;
        explanation: string;
    }[];
    quiz_questions: {
        question: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
    }[];
    order_index?: number;
    is_published?: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface UserGrammarProgress {
    lessonSlug: string;
    completed: boolean;
    score: number;
    totalQuestions: number;
    attempts: number;
    lastAttemptAt: string;
}

export function mapRowToTopic(row: DbGrammarLessonRow): IeltsGrammarTopic {
    return {
        id: row.slug || row.id,
        level: row.level,
        title: row.title,
        category: row.category,
        structure: row.structure,
        uzbekMeaning: row.uzbek_meaning || '',
        explanation: row.explanation,
        ieltsRelevance: row.ielts_relevance || '',
        academicExamples: row.academic_examples || [],
        commonMistakes: row.common_mistakes || [],
        quizQuestions: row.quiz_questions || []
    };
}

export const GrammarService = {
    /**
     * Fetches all published English/IELTS grammar lessons from PostgreSQL.
     * Falls back to built-in curriculum data if offline or table is newly initializing.
     */
    async fetchLessons(language: string = 'en'): Promise<IeltsGrammarTopic[]> {
        try {
            const { data, error } = await supabase
                .from('grammar_lessons')
                .select('*')
                .eq('language', language)
                .eq('is_published', true)
                .order('order_index', { ascending: true });

            if (error) {
                console.warn('GrammarService.fetchLessons warning (falling back to built-in seed):', error.message);
                return IELTS_GRAMMAR_DATABASE;
            }

            if (data && data.length > 0) {
                return (data as DbGrammarLessonRow[]).map(mapRowToTopic);
            }

            // If table has 0 rows, return seed database
            return IELTS_GRAMMAR_DATABASE;
        } catch (err) {
            console.warn('GrammarService unexpected error, using fallback:', err);
            return IELTS_GRAMMAR_DATABASE;
        }
    },

    /**
     * Fetches a single lesson by its unique slug or id.
     */
    async getLessonBySlug(slug: string): Promise<IeltsGrammarTopic | null> {
        try {
            const { data, error } = await supabase
                .from('grammar_lessons')
                .select('*')
                .eq('slug', slug)
                .eq('is_published', true)
                .single();

            if (error || !data) {
                const fallback = IELTS_GRAMMAR_DATABASE.find(t => t.id === slug);
                return fallback || null;
            }

            return mapRowToTopic(data as DbGrammarLessonRow);
        } catch (err) {
            const fallback = IELTS_GRAMMAR_DATABASE.find(t => t.id === slug);
            return fallback || null;
        }
    },

    /**
     * Fetches progress for current user from public.english_grammar_progress.
     */
    async getUserProgress(): Promise<Record<string, UserGrammarProgress>> {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return {};

            const { data, error } = await supabase
                .from('english_grammar_progress')
                .select('*')
                .eq('user_id', user.id);

            if (error || !data) {
                return {};
            }

            const map: Record<string, UserGrammarProgress> = {};
            data.forEach((row: any) => {
                map[row.lesson_slug] = {
                    lessonSlug: row.lesson_slug,
                    completed: row.completed,
                    score: Number(row.score),
                    totalQuestions: Number(row.total_questions),
                    attempts: Number(row.attempts),
                    lastAttemptAt: row.last_attempt_at
                };
            });
            return map;
        } catch (err) {
            console.warn('GrammarService.getUserProgress error:', err);
            return {};
        }
    },

    /**
     * Saves user attempt and progress to public.english_grammar_progress.
     */
    async saveUserProgress(
        lessonSlug: string,
        completed: boolean,
        score: number,
        totalQuestions: number
    ): Promise<boolean> {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return false;

            const payload = {
                user_id: user.id,
                lesson_slug: lessonSlug,
                completed,
                score,
                total_questions: totalQuestions,
                last_attempt_at: new Date().toISOString()
            };

            const { error } = await supabase
                .from('english_grammar_progress')
                .upsert(payload, { onConflict: 'user_id,lesson_slug' });

            if (error) {
                console.warn('GrammarService.saveUserProgress DB error:', error.message);
                return false;
            }
            return true;
        } catch (err) {
            console.warn('GrammarService.saveUserProgress unexpected error:', err);
            return false;
        }
    },

    /**
     * Admin method to create a new English grammar lesson.
     */
    async createLesson(topic: Partial<IeltsGrammarTopic> & { slug?: string }): Promise<IeltsGrammarTopic | null> {
        const slug = topic.slug || topic.id || topic.title?.toLowerCase().replace(/[^a-z0-9]+/g, '_') || `lesson_${Date.now()}`;
        const row = {
            language: 'en',
            title: topic.title || 'Untitled Grammar Topic',
            slug,
            level: topic.level || 'B1-B2',
            category: topic.category || 'General',
            structure: topic.structure || '',
            uzbek_meaning: topic.uzbekMeaning || '',
            explanation: topic.explanation || '',
            ielts_relevance: topic.ieltsRelevance || '',
            academic_examples: topic.academicExamples || [],
            common_mistakes: topic.commonMistakes || [],
            quiz_questions: topic.quizQuestions || [],
            is_published: true
        };

        const { data, error } = await supabase
            .from('grammar_lessons')
            .insert([row])
            .select()
            .single();

        if (error) {
            throw error;
        }

        return mapRowToTopic(data as DbGrammarLessonRow);
    },

    /**
     * Admin method to update an existing grammar lesson.
     */
    async updateLesson(idOrSlug: string, updates: Partial<IeltsGrammarTopic>): Promise<IeltsGrammarTopic | null> {
        const payload: any = {
            ...(updates.title && { title: updates.title }),
            ...(updates.level && { level: updates.level }),
            ...(updates.category && { category: updates.category }),
            ...(updates.structure && { structure: updates.structure }),
            ...(updates.uzbekMeaning !== undefined && { uzbek_meaning: updates.uzbekMeaning }),
            ...(updates.explanation && { explanation: updates.explanation }),
            ...(updates.ieltsRelevance !== undefined && { ielts_relevance: updates.ieltsRelevance }),
            ...(updates.academicExamples && { academic_examples: updates.academicExamples }),
            ...(updates.commonMistakes && { common_mistakes: updates.commonMistakes }),
            ...(updates.quizQuestions && { quiz_questions: updates.quizQuestions }),
            updated_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('grammar_lessons')
            .update(payload)
            .or(`id.eq.${idOrSlug},slug.eq.${idOrSlug}`)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return mapRowToTopic(data as DbGrammarLessonRow);
    },

    /**
     * Admin method to delete a grammar lesson.
     */
    async deleteLesson(idOrSlug: string): Promise<boolean> {
        const { error } = await supabase
            .from('grammar_lessons')
            .delete()
            .or(`id.eq.${idOrSlug},slug.eq.${idOrSlug}`);

        if (error) {
            throw error;
        }
        return true;
    }
};
