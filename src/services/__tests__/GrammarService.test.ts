import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GrammarService, mapRowToTopic, DbGrammarLessonRow } from '../GrammarService';
import { supabase } from '../../lib/supabase';
import { IELTS_GRAMMAR_DATABASE } from '../../data/ielts/ielts_grammar_data';

vi.mock('../../lib/supabase', () => {
    const mockFrom = vi.fn();
    const mockGetUser = vi.fn().mockResolvedValue({ data: { user: { id: 'user-uuid-1' } } });
    return {
        supabase: {
            from: mockFrom,
            auth: {
                getUser: mockGetUser
            }
        }
    };
});

describe('GrammarService & PostgreSQL Dynamic Curriculum Tests', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should map DB row to IeltsGrammarTopic correctly', () => {
        const row: DbGrammarLessonRow = {
            id: 'uuid-1234',
            language: 'en',
            title: 'Future Perfect Continuous',
            slug: 'future_perfect_continuous',
            level: 'C1',
            category: 'Complex Tenses',
            structure: 'S + will have been + V-ing',
            uzbek_meaning: 'Kelajakda ma\'lum vaqtgacha davom etadigan harakat',
            explanation: 'Detailed explanation text',
            ielts_relevance: 'Essential for Academic Writing Task 2 projections',
            academic_examples: [
                {
                    sentence: 'By 2050, researchers will have been studying global warming for a century.',
                    translation: '2050-yilga kelib tadqiqotchilar global isishni bir asr davomida o\'rganayotgan bo\'ladilar.',
                    context: 'Task 2'
                }
            ],
            common_mistakes: [],
            quiz_questions: [
                {
                    question: 'By next year, she ___ here for a decade.',
                    options: ['will have been working', 'will work', 'is working'],
                    correctAnswer: 'will have been working',
                    explanation: 'Duration up to a point in the future.'
                }
            ]
        };

        const topic = mapRowToTopic(row);
        expect(topic.id).toBe('future_perfect_continuous');
        expect(topic.title).toBe('Future Perfect Continuous');
        expect(topic.level).toBe('C1');
        expect(topic.structure).toContain('will have been');
        expect(topic.uzbekMeaning).toContain('Kelajakda');
        expect(topic.academicExamples.length).toBe(1);
        expect(topic.quizQuestions.length).toBe(1);
    });

    it('should fetch published lessons from Supabase database when available', async () => {
        const mockDbRows: DbGrammarLessonRow[] = [
            {
                id: 'db-1',
                language: 'en',
                title: 'Passive Voice in Scientific Reports',
                slug: 'passive_voice_science',
                level: 'B1-B2',
                category: 'Voice',
                structure: 'S + be + V3/ed',
                uzbek_meaning: 'Majhul nisbat',
                explanation: 'Used heavily in IELTS Task 1 process diagrams.',
                ielts_relevance: 'Crucial for Task 1 diagrams',
                academic_examples: [],
                common_mistakes: [],
                quiz_questions: []
            }
        ];

        const mockSelect = vi.fn().mockReturnThis();
        const mockEq1 = vi.fn().mockReturnThis();
        const mockEq2 = vi.fn().mockReturnThis();
        const mockOrder = vi.fn().mockResolvedValue({ data: mockDbRows, error: null });

        (supabase.from as any).mockReturnValue({
            select: mockSelect,
            eq: mockEq1.mockImplementation((field) => {
                if (field === 'language') return { eq: mockEq2.mockReturnValue({ order: mockOrder }) };
                return { order: mockOrder };
            })
        });

        const lessons = await GrammarService.fetchLessons('en');
        expect(lessons.length).toBe(1);
        expect(lessons[0].title).toBe('Passive Voice in Scientific Reports');
    });

    it('should fallback gracefully to built-in seed curriculum if DB returns error or is offline', async () => {
        (supabase.from as any).mockReturnValue({
            select: vi.fn().mockReturnValue({
                eq: vi.fn().mockReturnValue({
                    eq: vi.fn().mockReturnValue({
                        order: vi.fn().mockResolvedValue({ data: null, error: { message: 'Network connection refused' } })
                    })
                })
            })
        });

        const lessons = await GrammarService.fetchLessons('en');
        expect(lessons.length).toBe(IELTS_GRAMMAR_DATABASE.length);
        expect(lessons[0].title).toBe(IELTS_GRAMMAR_DATABASE[0].title);
    });

    it('should save user grammar progress into english_grammar_progress table', async () => {
        const mockUpsert = vi.fn().mockResolvedValue({ error: null });
        (supabase.from as any).mockReturnValue({
            upsert: mockUpsert
        });

        const success = await GrammarService.saveUserProgress('present_perfect', true, 5, 5);
        expect(success).toBe(true);
        expect(mockUpsert).toHaveBeenCalledWith(
            expect.objectContaining({
                user_id: 'user-uuid-1',
                lesson_slug: 'present_perfect',
                completed: true,
                score: 5,
                total_questions: 5
            }),
            expect.anything()
        );
    });

    it('should fetch user grammar progress map by user_id', async () => {
        const mockData = [
            {
                lesson_slug: 'present_perfect',
                completed: true,
                score: 4,
                total_questions: 4,
                attempts: 1,
                last_attempt_at: '2026-08-19T10:00:00Z'
            }
        ];

        (supabase.from as any).mockReturnValue({
            select: vi.fn().mockReturnValue({
                eq: vi.fn().mockResolvedValue({ data: mockData, error: null })
            })
        });

        const progressMap = await GrammarService.getUserProgress();
        expect(progressMap['present_perfect']).toBeDefined();
        expect(progressMap['present_perfect'].completed).toBe(true);
        expect(progressMap['present_perfect'].score).toBe(4);
    });
});
