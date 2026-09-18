import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { JlptMockExamPage } from '../JlptMockExamPage';

// Mock context providers
vi.mock('../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    user: { id: 'test-user-id' },
    awardXP: vi.fn(),
  }),
}));

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'uz',
  }),
}));

vi.mock('../../services/ExamService', () => ({
  ExamService: {
    getPublishedJlptExams: vi.fn().mockResolvedValue([
      {
        id: 'mock-db-exam-1',
        title: 'JLPT N5 Rasmiy Mock Test (2026)',
        description: 'Baza orqali yuklangan sinov.',
        type: 'JLPT N5',
        level: 'N5',
        isPublished: true,
        createdAt: '2026-09-01T00:00:00Z',
      },
    ]),
    getExamWithQuestions: vi.fn().mockResolvedValue({
      id: 'mock-db-exam-1',
      title: 'JLPT N5 Rasmiy Mock Test (2026)',
      level: 'N5',
      timeLimitSeconds: 3000,
      isFromDb: true,
      questions: [
        {
          id: 1,
          section: 'knowledge',
          questionText: 'きょうは 水曜日です。あしたは（　）曜日です。',
          options: ['火', '木', '金', '土'],
          correctAnswer: 1,
          explanationUzbek: 'Ertaga Payshanba.',
        },
      ],
    }),
  },
}));

describe('JlptMockExamPage Component Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders level selectors and loads published exams from ExamService', async () => {
    render(
      <MemoryRouter initialEntries={['/jlpt?tab=mock&level=N5']}>
        <JlptMockExamPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('JLPT Full Simulation Exam')).toBeInTheDocument();
    expect(screen.getByText('N5')).toBeInTheDocument();
    expect(screen.getByText('N1')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('JLPT N5 Rasmiy Mock Test (2026)')).toBeInTheDocument();
      expect(screen.getByText('Rasmiy DB')).toBeInTheDocument();
    });
  });

  it('starts exam with questions loaded from selected database exam', async () => {
    render(
      <MemoryRouter initialEntries={['/jlpt?tab=mock&level=N5']}>
        <JlptMockExamPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('JLPT N5 Rasmiy Mock Test (2026)')).toBeInTheDocument();
    });

    const startBtn = screen.getByText('Mock Imtihonni Boshlash 🚀');
    fireEvent.click(startBtn);

    await waitFor(() => {
      expect(screen.getByText(/JLPT N5 Full Simulation Exam/i)).toBeInTheDocument();
      expect(screen.getByText(/きょうは 水曜日です/)).toBeInTheDocument();
    });
  });
});
