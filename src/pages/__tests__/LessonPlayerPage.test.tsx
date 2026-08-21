import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LessonPlayerPage } from '../LessonPlayerPage';
import { LearningSignalService } from '../../services/LearningSignalService';

vi.mock('../../context/StudyPlannerContext', () => ({
    useStudyData: () => ({
        user: { id: 'test-user-123' },
        primaryLanguage: 'ja',
        awardXP: vi.fn(),
        settings: {}
    })
}));

vi.mock('../../services/LearningOrchestrator', () => ({
    LearningOrchestrator: {
        canAccessLesson: () => ({ allowed: true, reason: 'Access granted' }),
        promoteIfReady: vi.fn(),
        getPrimaryLanguage: () => 'en',
        getUserTarget: () => ({ targetLevel: 'N3', targetGoal: '', currentLevel: 'N3' }),
    }
}));

vi.mock('../../utils/audioTts', () => ({
    speakText: vi.fn(),
    speakJapaneseText: vi.fn()
}));

describe('LessonPlayerPage', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('renders Japanese lesson properly with title, level, and Learn step', () => {
        render(
            <MemoryRouter initialEntries={['/lesson/ja-n3-u1-l1']}>
                <Routes>
                    <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getAllByText(/Passive Voice/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/JLPT N3/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Passive Voice Formation/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/褒/).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/叱/).length).toBeGreaterThan(0);
    });

    it('renders English B2 lesson properly with academic vocabulary and Inversion grammar', () => {
        render(
            <MemoryRouter initialEntries={['/lesson/en-b2-u1-l1']}>
                <Routes>
                    <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getAllByText(/Negative Inversion/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/English B2/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Seldom/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Circumstance/i).length).toBeGreaterThan(0);
    });

    it('navigates from Learn to Practice step and enables checking answers', async () => {
        render(
            <MemoryRouter initialEntries={['/lesson/ja-n3-u1-l1']}>
                <Routes>
                    <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
                </Routes>
            </MemoryRouter>
        );

        // Click next step button
        const nextBtn = screen.getByRole('button', { name: /Keyingi Qadamga O'tish/i });
        fireEvent.click(nextBtn);

        // Now in Practice step (real curriculum content)
        expect(screen.getByText(/To'g'ri majhul nisbat shaklini tanlang/i)).toBeInTheDocument();

        // Select the first (correct) option
        const optionA = screen.getByText(/誰/);
        fireEvent.click(optionA);

        const checkBtn = screen.getByRole('button', { name: /Javobni Tekshirish/i });
        fireEvent.click(checkBtn);

        expect(screen.getByText(/To'g'ri javob!/i)).toBeInTheDocument();
    });

    it('displays error UI when invalid lessonId is provided', () => {
        render(
            <MemoryRouter initialEntries={['/lesson/invalid-id-xyz']}>
                <Routes>
                    <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/Dars Topilmadi/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Bosh Sahifaga Qaytish/i })).toBeInTheDocument();
    });

    it('processes lesson completion and displays SRS summary badge', async () => {
        const srsSpy = vi.spyOn(LearningSignalService, 'processLessonCompletion').mockResolvedValue({
            newCardsCount: 4,
            mistakesCount: 1
        });

        render(
            <MemoryRouter initialEntries={['/lesson/ja-n3-u1-l1']}>
                <Routes>
                    <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
                </Routes>
            </MemoryRouter>
        );

        // Advance to step 2
        fireEvent.click(screen.getByRole('button', { name: /Keyingi Qadamga O'tish/i }));
        // Advance to step 3
        fireEvent.click(screen.getByRole('button', { name: /Keyingi Qadamga O'tish/i }));

        // Finish lesson
        fireEvent.click(screen.getByRole('button', { name: /Darsni Yakunlash/i }));

        await waitFor(() => {
            expect(srsSpy).toHaveBeenCalled();
        });
        expect(await screen.findByText(/Dars Yakunlandi! 🎉/i)).toBeInTheDocument();
        expect(await screen.findByText(/4 ta yangi so'z Fleshkartalarga qo'shildi/i)).toBeInTheDocument();
    });
});
