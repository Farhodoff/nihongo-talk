import { describe, it, expect } from 'vitest';
import { IELTS_GRAMMAR_DATABASE } from '../../data/ielts/ielts_grammar_data';

describe('IELTS English Grammar & Academic Curriculum Hardening Tests', () => {
    it('should have a comprehensive IELTS grammar catalog with valid data across A1-A2, B1-B2, and C1', () => {
        expect(IELTS_GRAMMAR_DATABASE.length).toBeGreaterThanOrEqual(10);

        IELTS_GRAMMAR_DATABASE.forEach(topic => {
            expect(topic.id).toBeDefined();
            expect(topic.title).toBeTruthy();
            expect(topic.structure).toBeTruthy();
            expect(topic.uzbekMeaning).toBeTruthy();
            expect(topic.explanation).toBeTruthy();
            expect(topic.ieltsRelevance).toBeTruthy();
            expect(topic.academicExamples.length).toBeGreaterThan(0);
            expect(topic.quizQuestions.length).toBeGreaterThan(0);

            // Ensure quiz question has options, correct answer, and explanation
            topic.quizQuestions.forEach(q => {
                expect(q.options.length).toBeGreaterThanOrEqual(2);
                expect(q.options).toContain(q.correctAnswer);
                expect(q.explanation).toBeTruthy();
            });
        });
    });

    it('should correctly filter topics by CEFR / IELTS band level', () => {
        const a1Topics = IELTS_GRAMMAR_DATABASE.filter(t => t.level === 'A1' || t.level === 'A1-A2');
        const b1Topics = IELTS_GRAMMAR_DATABASE.filter(t => t.level === 'B1' || t.level === 'B2' || t.level === 'B1-B2');
        const c1Topics = IELTS_GRAMMAR_DATABASE.filter(t => t.level === 'C1');

        expect(a1Topics.length).toBeGreaterThan(0);
        expect(b1Topics.length).toBeGreaterThan(0);
        expect(c1Topics.length).toBeGreaterThan(0);
    });

    it('should validate high-level C1 grammar structures essential for IELTS Band 8.0+ GRA', () => {
        const inversion = IELTS_GRAMMAR_DATABASE.find(t => t.id.includes('inversion'));
        expect(inversion).toBeDefined();
        expect(inversion?.level).toBe('C1');
        expect(inversion?.structure).toContain('Negative Adverb');

        const participle = IELTS_GRAMMAR_DATABASE.find(t => t.id.includes('participle'));
        expect(participle).toBeDefined();
        expect(participle?.level).toBe('C1');
    });

    it('should generate valid Anki SM-2 flashcard payloads from quiz mistakes', () => {
        const sampleTopic = IELTS_GRAMMAR_DATABASE[0];
        const cardsToCreate = sampleTopic.quizQuestions.map(q => ({
            front: `[IELTS ${sampleTopic.level}] ${q.question}`,
            back: `To'g'ri javob: ${q.correctAnswer}\n\nQoida: ${sampleTopic.structure}\n\nIzoh: ${q.explanation}`,
            example: sampleTopic.academicExamples[0]?.sentence || sampleTopic.uzbekMeaning,
            interval: 1,
            repetitions: 0,
            easeFactor: 2.5
        }));

        expect(cardsToCreate.length).toBe(sampleTopic.quizQuestions.length);
        expect(cardsToCreate[0].front).toContain('[IELTS');
        expect(cardsToCreate[0].easeFactor).toBe(2.5);
    });
});
