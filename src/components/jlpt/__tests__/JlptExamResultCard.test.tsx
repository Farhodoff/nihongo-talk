import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { JlptExamResultCard } from '../JlptExamResultCard';
import { JlptScoreReport } from '../../../utils/jlptScoring';

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

  it('renders official JLPT score report with sectional breakdown and passed status', () => {
    const passedJlptReport: JlptScoreReport = {
      level: 'N5',
      totalScore: 140,
      maxScore: 180,
      passMark: 80,
      passed: true,
      statusReason: 'PASSED',
      statusTextUz: "Tabriklaymiz! JLPT N5 imtihonidan muvaffaqiyatli o'tdingiz!",
      statusTextJa: '合格（ごうかく）',
      statusBadge: 'goukaku',
      sections: {
        knowledge: {
          section: 'knowledge',
          titleUz: "Til bilimi (Lug'at & Grammatika)",
          titleJa: '言語知識（文字・語彙・文法）',
          icon: '⛩️',
          score: 50,
          maxScore: 60,
          passMark: 19,
          passed: true,
          correctCount: 5,
          totalQuestions: 6,
          percentage: 83,
        },
        reading: {
          section: 'reading',
          titleUz: "O'qib tushunish (Dokkai)",
          titleJa: '読解',
          icon: '📖',
          score: 45,
          maxScore: 60,
          passMark: 19,
          passed: true,
          correctCount: 3,
          totalQuestions: 4,
          percentage: 75,
        },
        listening: {
          section: 'listening',
          titleUz: 'Tinglab tushunish (Choukai)',
          titleJa: '聴解',
          icon: '🎧',
          score: 45,
          maxScore: 60,
          passMark: 19,
          passed: true,
          correctCount: 3,
          totalQuestions: 4,
          percentage: 75,
        },
      },
      failedSections: [],
      weakestSection: 'reading',
      correctTotal: 11,
      questionsTotal: 14,
      accuracyPercentage: 79,
    };

    render(
      <JlptExamResultCard
        report={{ ...sampleReport, jlptScoreReport: passedJlptReport }}
        level="N5"
        onRetry={vi.fn()}
        onBackToHub={vi.fn()}
      />,
    );

    // Official Stamp & Scores
    expect(screen.getByText(/合格 \(GOUKAKU - O'TDI\) 🎉/i)).toBeInTheDocument();
    expect(screen.getByText('140')).toBeInTheDocument();
    expect(screen.getByText(/O'tish: 80/i)).toBeInTheDocument();
    expect(screen.getAllByText("Til bilimi (Lug'at & Grammatika)")[0]).toBeInTheDocument();
    expect(screen.getAllByText("O'qib tushunish (Dokkai)")[0]).toBeInTheDocument();
    expect(screen.getAllByText('Tinglab tushunish (Choukai)')[0]).toBeInTheDocument();
  });

  it('renders official warning alert when failed due to sectional cutoff', () => {
    const failedCutoffReport: JlptScoreReport = {
      level: 'N1',
      totalScore: 120,
      maxScore: 180,
      passMark: 100,
      passed: false,
      statusReason: 'FAILED_SECTION_CUTOFF',
      statusTextUz: "Diqqat: Umumiy ballingiz yetarli, lekin bo'limda minimal 19 ball to'planmadi.",
      statusTextJa: '不合格',
      statusBadge: 'fugoukaku',
      sections: {
        knowledge: {
          section: 'knowledge',
          titleUz: "Til bilimi (Lug'at & Grammatika)",
          titleJa: '言語知識',
          icon: '⛩️',
          score: 60,
          maxScore: 60,
          passMark: 19,
          passed: true,
          correctCount: 10,
          totalQuestions: 10,
          percentage: 100,
        },
        reading: {
          section: 'reading',
          titleUz: "O'qib tushunish (Dokkai)",
          titleJa: '読解',
          icon: '📖',
          score: 48,
          maxScore: 60,
          passMark: 19,
          passed: true,
          correctCount: 8,
          totalQuestions: 10,
          percentage: 80,
        },
        listening: {
          section: 'listening',
          titleUz: 'Tinglab tushunish (Choukai)',
          titleJa: '聴解',
          icon: '🎧',
          score: 12,
          maxScore: 60,
          passMark: 19,
          passed: false,
          correctCount: 2,
          totalQuestions: 10,
          percentage: 20,
        },
      },
      failedSections: ['listening'],
      weakestSection: 'listening',
      correctTotal: 20,
      questionsTotal: 30,
      accuracyPercentage: 67,
    };

    const mockNavigateToPlan = vi.fn();

    render(
      <JlptExamResultCard
        report={{ ...sampleReport, jlptScoreReport: failedCutoffReport }}
        level="N1"
        onRetry={vi.fn()}
        onBackToHub={vi.fn()}
        onNavigateToPlan={mockNavigateToPlan}
      />,
    );

    // Official Stamp shows FUGOUKAKU
    expect(screen.getByText(/不合格 \(FUGOUKAKU - O'TMADI\) ⚠️/i)).toBeInTheDocument();

    // Sectional Cutoff explanation alert
    expect(screen.getByText(/Diqqat \(Sectional Cutoff qoidasi\):/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Tinglab tushunish \(Choukai\)/i)[0]).toBeInTheDocument();

    // Weakness adjustment button triggers callback
    const planBtn = screen.getByRole('button', { name: /Shaxsiy Rejani Moslashtirish/i });
    fireEvent.click(planBtn);
    expect(mockNavigateToPlan).toHaveBeenCalledTimes(1);
  });

  it('renders listening dialog script in mistake view if present', () => {
    const listeningMistake = [
      {
        questionText: 'お皿の右側に何を置きますか？',
        section: 'listening',
        userAnswer: 'フォーク',
        correctAnswer: 'スプーン',
        isCorrect: false,
        explanationUzbek: "Ayol kishi supuun (qoshiq) qo'yishni aytdi.",
        script: '女：食事の準備をしましょう。お皿の右側にスプーンを置いてください。',
      },
    ];

    render(
      <JlptExamResultCard
        report={sampleReport}
        level="N5"
        mistakes={listeningMistake}
        onRetry={vi.fn()}
        onBackToHub={vi.fn()}
      />,
    );

    const toggleBtn = screen.getByText(/Barcha 1 ta xatolarni ko'rish/i);
    fireEvent.click(toggleBtn);

    expect(screen.getByText(/Tinglash savoli/i)).toBeInTheDocument();
    expect(screen.getByText(/Dialog matni \(Script\):/i)).toBeInTheDocument();
    expect(screen.getByText(/お皿の右側にスプーンを置いてください。/i)).toBeInTheDocument();
  });
});
