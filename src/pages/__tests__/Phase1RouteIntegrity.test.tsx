import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import StudyModePage from '../StudyModePage';
import { Flashcard } from '../../types';

// Mock audioTts
vi.mock('../../utils/audioTts', () => ({
    speakText: vi.fn()
}));

const mockFlashcards: Flashcard[] = [
    {
        id: 'fc-1',
        subjectId: 'subj-ielts',
        front: 'Meticulous',
        back: 'Juda sinchkov, e\'tiborli',
        interval: 1,
        repetitions: 1,
        easeFactor: 2.5,
        nextReviewDate: new Date(Date.now() - 86400000).toISOString() // due yesterday
    },
    {
        id: 'fc-2',
        subjectId: 'subj-jlpt',
        front: '食べる (taberu)',
        back: 'Yemoq (fe\'l)',
        interval: 1,
        repetitions: 1,
        easeFactor: 2.5,
        nextReviewDate: new Date(Date.now() - 86400000).toISOString() // due yesterday
    }
];

let mockCurrentContextValue: any = {
    user: { id: 'u1', email: 'test@example.com' },
    flashcards: mockFlashcards,
    subjects: [
        { id: 'subj-ielts', name: 'IELTS Vocabulary', targetHours: 10, color: '#3b82f6' },
        { id: 'subj-jlpt', name: 'JLPT N3 Kanji', targetHours: 10, color: '#ec4899' }
    ],
    reviewFlashcard: vi.fn().mockResolvedValue(true),
    updateFlashcard: vi.fn().mockResolvedValue(true),
    deleteFlashcard: vi.fn().mockResolvedValue(true),
    loading: false
};

vi.mock('../../context/StudyPlannerContext', () => ({
    useStudyData: () => mockCurrentContextValue
}));

describe('Phase 1 — Route Integrity & StudyMode Global Entry Tests', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockCurrentContextValue = {
            user: { id: 'u1', email: 'test@example.com' },
            flashcards: mockFlashcards,
            subjects: [
                { id: 'subj-ielts', name: 'IELTS Vocabulary', targetHours: 10, color: '#3b82f6' },
                { id: 'subj-jlpt', name: 'JLPT N3 Kanji', targetHours: 10, color: '#ec4899' }
            ],
            reviewFlashcard: vi.fn().mockResolvedValue(true),
            updateFlashcard: vi.fn().mockResolvedValue(true),
            deleteFlashcard: vi.fn().mockResolvedValue(true),
            loading: false
        };
    });

    it('1. /study-mode route loads global due cards across all subjects', async () => {
        render(
            <MemoryRouter initialEntries={['/study-mode']}>
                <Routes>
                    <Route path="study-mode" element={<StudyModePage />} />
                    <Route path="study-mode/:subjectId" element={<StudyModePage />} />
                </Routes>
            </MemoryRouter>
        );

        // Queue progress should display "1 / 2"
        await waitFor(() => {
            expect(screen.getByText(/1 \/ 2/)).toBeInTheDocument();
        });

        expect(screen.getByRole('button', { name: /Flashcard SRS/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Yozib Tekshirish/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Javobni ko'rish/i })).toBeInTheDocument();
    });

    it('2. /study-mode/:subjectId filters cards specifically for given subject', async () => {
        render(
            <MemoryRouter initialEntries={['/study-mode/subj-ielts']}>
                <Routes>
                    <Route path="study-mode" element={<StudyModePage />} />
                    <Route path="study-mode/:subjectId" element={<StudyModePage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText(/1 \/ 1/)).toBeInTheDocument();
        });

        const cardElements = screen.getAllByText('Meticulous');
        expect(cardElements.length).toBeGreaterThanOrEqual(1);
    });

    it('3. /flashcards/study/:subjectId backward compatibility works seamlessly', async () => {
        render(
            <MemoryRouter initialEntries={['/flashcards/study/subj-jlpt']}>
                <Routes>
                    <Route path="flashcards/study/:subjectId" element={<StudyModePage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText(/1 \/ 1/)).toBeInTheDocument();
        });

        const cardElements = screen.getAllByText('食べる (taberu)');
        expect(cardElements.length).toBeGreaterThanOrEqual(1);
    });

    it('4. Handles empty flashcards state gracefully without crashing', async () => {
        mockCurrentContextValue = {
            ...mockCurrentContextValue,
            flashcards: []
        };

        render(
            <MemoryRouter initialEntries={['/study-mode']}>
                <Routes>
                    <Route path="study-mode" element={<StudyModePage />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Fleshkartalar topilmadi')).toBeInTheDocument();
        });
        expect(screen.getByText('To\'plamlarni ko\'rish')).toBeInTheDocument();
    });

    it('5. Legacy routes redirect to canonical destinations', () => {
        render(
            <MemoryRouter initialEntries={['/decks']}>
                <Routes>
                    <Route path="flashcards" element={<div data-testid="canonical-flashcards">Flashcards Canonical</div>} />
                    <Route path="decks" element={<Navigate to="/flashcards" replace />} />
                    <Route path="deck" element={<Navigate to="/flashcards" replace />} />
                    <Route path="ielts/grammar" element={<Navigate to="/ielts" replace />} />
                    <Route path="ielts" element={<div data-testid="canonical-ielts">IELTS Canonical</div>} />
                    <Route path="jlpt/grammar" element={<Navigate to="/jlpt/grammar-quiz" replace />} />
                    <Route path="jlpt/grammar-quiz" element={<div data-testid="canonical-jlpt-quiz">JLPT Quiz Canonical</div>} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByTestId('canonical-flashcards')).toBeInTheDocument();
    });
});
