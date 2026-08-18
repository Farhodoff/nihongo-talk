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

        expect(screen.getByText(/Sayohat va Transport/i)).toBeInTheDocument();
        expect(screen.getAllByText(/JLPT N3/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Yangi So'zlar & Grammatika/i)).toBeInTheDocument();
        expect(screen.getAllByText(/旅行/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/切符/i).length).toBeGreaterThan(0);
    });

    it('renders English B2 lesson properly with academic vocabulary and Inversion grammar', () => {
        render(
            <MemoryRouter initialEntries={['/lesson/en-b2-u1-l1']}>
                <Routes>
                    <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/Academic Learning & Inversion/i)).toBeInTheDocument();
        expect(screen.getByText(/English B2/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Perseverance/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Meticulous/i).length).toBeGreaterThan(0);
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

        // Now in Practice step
        expect(screen.getByText(/Interaktiv Mashqlar/i)).toBeInTheDocument();
        expect(screen.getByText(/「切符」 kanjisining to'g'ri o'qilishini tanlang:/i)).toBeInTheDocument();

        // Select an option
        const optionA = screen.getByText(/きっぷ \(kippu\)/i);
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
