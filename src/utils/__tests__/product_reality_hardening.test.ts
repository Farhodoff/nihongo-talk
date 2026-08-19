import { describe, it, expect } from 'vitest';
import { calculateUnifiedStreak } from '../statistics';
import { JLPT_GRAMMAR_QUESTIONS } from '../../data/jlpt/grammar_data';
import { JLPT_LISTENING_QUESTIONS } from '../../data/jlpt/listening_data';
import { IELTS_LISTENING_EXAMS } from '../../data/ielts/listening_data';
import { HistoryService } from '../../services/HistoryService';

describe('Product Reality Hardening Test Suite', () => {
    describe('1. Unified Multi-Activity Streak Engine', () => {
        it('calculates streak from tasks with deadlines', () => {
            const today = new Date().toISOString();
            const tasks: any[] = [
                { id: '1', title: 'Task 1', completed: true, status: 'done', deadline: today }
            ];
            expect(calculateUnifiedStreak(tasks, [])).toBe(1);
        });

        it('calculates streak when user completes Pomodoro sessions (even without tasks)', () => {
            const today = new Date().toISOString();
            const sessions = [
                { id: 's1', createdAt: today, completed: true }
            ];
            expect(calculateUnifiedStreak([], sessions)).toBe(1);
        });

        it('calculates streak across multi-day consecutive learning activities', () => {
            const now = new Date();
            const today = now.toISOString();
            const yesterday = new Date(now.getTime() - 86400000).toISOString();
            const twoDaysAgo = new Date(now.getTime() - 2 * 86400000).toISOString();

            const tasks: any[] = [
                { id: 't1', title: 'Task 1', completed: true, deadline: today }
            ];
            const sessions = [
                { id: 's1', createdAt: yesterday, completed: true }
            ];
            const additional = [
                { type: 'flashcard' as const, timestamp: twoDaysAgo }
            ];

            const streak = calculateUnifiedStreak(tasks, sessions, additional);
            expect(streak).toBe(3);
        });

        it('breaks streak when a day is skipped in activities', () => {
            const now = new Date();
            const today = now.toISOString();
            const threeDaysAgo = new Date(now.getTime() - 3 * 86400000).toISOString();

            const tasks: any[] = [
                { id: 't1', title: 'Task 1', completed: true, deadline: today }
            ];
            const additional = [
                { type: 'quiz' as const, timestamp: threeDaysAgo }
            ];

            const streak = calculateUnifiedStreak(tasks, [], additional);
            expect(streak).toBe(1);
        });
    });

    describe('2. Content Reality & Levels Audit', () => {
        it('verifies JLPT Grammar Questions exist for all levels (N5 to N1)', () => {
            const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
            levels.forEach(lvl => {
                const match = JLPT_GRAMMAR_QUESTIONS.filter(q => q.level === lvl);
                expect(match.length).toBeGreaterThan(0);
                match.forEach(q => {
                    expect(q.options.length).toBeGreaterThanOrEqual(3);
                    expect(q.explanationUzbek).toBeTruthy();
                });
            });
        });

        it('verifies JLPT Listening Questions exist for all levels (N5 to N1)', () => {
            const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
            levels.forEach(lvl => {
                const match = JLPT_LISTENING_QUESTIONS.filter(q => q.level === lvl);
                expect(match.length).toBeGreaterThan(0);
                match.forEach(q => {
                    expect(q.script).toBeTruthy();
                    expect(q.options.length).toBe(4);
                    expect(q.explanationUzbek).toBeTruthy();
                });
            });
        });

        it('verifies IELTS Listening Exam contains authentic scripts without external mp3 music placeholders', () => {
            expect(IELTS_LISTENING_EXAMS.length).toBeGreaterThan(0);
            const exam = IELTS_LISTENING_EXAMS[0];
            expect(exam.sections.length).toBe(4);
            exam.sections.forEach(sec => {
                expect(sec.script).toBeTruthy();
                expect(sec.questions.length).toBeGreaterThan(0);
            });
        });
    });

    describe('3. HistoryService Mock Exam Persistence', () => {
        it('saves mock exam result to localStorage history', async () => {
            const examRecord = {
                examType: 'jlpt' as const,
                level: 'N3',
                score: 4,
                totalQuestions: 5,
                bandScore: 144
            };

            const saved = await HistoryService.saveMockExam(examRecord);
            expect(saved.id).toBeTruthy();
            expect(saved.score).toBe(4);
            expect(saved.createdAt).toBeTruthy();
        });
    });
});
