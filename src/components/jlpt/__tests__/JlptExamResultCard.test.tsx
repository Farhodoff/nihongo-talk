import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { JlptExamResultCard } from '../JlptExamResultCard';

const mockAddFlashcardsBatch = vi.fn();
vi.mock('../../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    addFlashcardsBatch: mockAddFlashcardsBatch,
  }),
}));

vi.mock('../../../hooks/use-toast', () => ({
  toast: vi.fn(),
}));

describe('JlptExamResultCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const sampleReport = {
    overall_score_text: "JLPT N5: 8/10 (80%) - MUVAFFAQIYATLI (O'TDI 🎉)",
    percentage: 80,
    passed: true,
    top_3_mistakes: [
      {
        title: 'Yuklama xatosi (を vs に)',
        explanation_uz: "Harakat ob'ekti uchun 'o' o'rniga 'ni' ishlatildi.",
        correct_concept: "Har doim harakat vositasiz ob'ekti bilan を ishlatiladi.",
      },
    ],
    actionable_recommendation: 'Kunlik 10 ta grammatika qoidasini takrorlang.',
  };

  const sampleMistakes = [
    {
      questionText: '毎朝、パン _____ 食べます。',
      section: 'knowledge',
      userAnswer: 'に',
      correctAnswer: 'を',
      isCorrect: false,
      explanationUzbek: "Vositasiz to'ldiruvchi uchun 'を' yuklamasi kerak.",
    },
    {
      questionText: '学校 _____ バスで行きます。',
      section: 'knowledge',
      userAnswer: 'を',
      correctAnswer: 'へ',
      isCorrect: false,
      explanationUzbek: "Harakat yo'nalishi uchun 'へ' qo'llaniladi.",
    },
  ];

  it('renders score percentage and level properly', () => {
    render(
      <JlptExamResultCard
        report={sampleReport}
        level="N5"
        onRetry={vi.fn()}
        onBackToHub={vi.fn()}
      />,
    );

    expect(screen.getByText('JLPT N5 Imtihon Natijasi')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
  });

  it('shows mistakes export section and allows batch export to flashcards', async () => {
    render(
      <JlptExamResultCard
        report={sampleReport}
        level="N5"
        mistakes={sampleMistakes}
        onRetry={vi.fn()}
        onBackToHub={vi.fn()}
      />,
    );

    expect(screen.getByText(/Xatolarni Fleshkartaga Saqlash/i)).toBeInTheDocument();
    expect(screen.getByText(/2 ta savol/i)).toBeInTheDocument();

    const exportBtn = screen.getByRole('button', { name: /Fleshkartalarga saqlash/i });
    fireEvent.click(exportBtn);

    await waitFor(() => {
      expect(mockAddFlashcardsBatch).toHaveBeenCalledTimes(1);
    });

    const exportedBatch = mockAddFlashcardsBatch.mock.calls[0][0];
    expect(exportedBatch).toHaveLength(2);
    expect(exportedBatch[0].front).toContain('JLPT N5 Savol (KNOWLEDGE)');
    expect(exportedBatch[0].back).toContain("To'g'ri javob:\nを");
    expect(exportedBatch[0].back).toContain('Sizning javobingiz:\nに');

    // Button should now show saved state
    expect(screen.getByText(/Saqlandi \(Anki SRS\)/i)).toBeInTheDocument();
  });

  it('toggles full mistakes detail view when clicked', () => {
    render(
      <JlptExamResultCard
        report={sampleReport}
        level="N5"
        mistakes={sampleMistakes}
        onRetry={vi.fn()}
        onBackToHub={vi.fn()}
      />,
    );

    const toggleBtn = screen.getByText(/Barcha 2 ta xatolarni ko'rish/i);
    fireEvent.click(toggleBtn);

    expect(screen.getByText(/Savol #1/i)).toBeInTheDocument();
    expect(screen.getByText(/毎朝、パン _____ 食べます。/i)).toBeInTheDocument();
    expect(screen.getByText(/❌ Sizning javob: に/i)).toBeInTheDocument();
    expect(screen.getByText(/✅ To'g'ri javob: を/i)).toBeInTheDocument();
  });
});
