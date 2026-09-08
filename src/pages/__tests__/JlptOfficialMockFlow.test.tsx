import { describe, it, expect, vi, beforeEach } from 'vitest';
import { calculateJlptScore } from '../../utils/jlptScoring';
import { HistoryService } from '../../services/HistoryService';
import { MasteryEngine } from '../../services/MasteryEngine';
import { JLPT_MOCK_EXAM_DATA } from '../../data/jlptMockExamData';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getUser: vi.fn().mockResolvedValue({
        data: { user: { id: '00000000-0000-4000-8000-000000000001', email: 'test@example.com' } },
      }),
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
    },
    from: vi.fn().mockReturnValue({
      insert: vi.fn().mockResolvedValue({ error: null }),
      upsert: vi.fn().mockResolvedValue({ error: null }),
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          order: vi.fn().mockReturnValue({
            limit: vi.fn().mockResolvedValue({ data: [], error: null }),
          }),
        }),
      }),
    }),
  },
}));

describe('JLPT Official Mock Exam End-to-End Flow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calculates official JLPT N5 score and saves to HistoryService and MasteryEngine', async () => {
    const n5Questions = JLPT_MOCK_EXAM_DATA.N5;
    expect(n5Questions.length).toBeGreaterThanOrEqual(6);

    // Answer all questions correctly
    const answers: Record<number, number> = {};
    n5Questions.forEach((q) => {
      answers[q.id] = q.correctAnswer;
    });

    const scoreReport = calculateJlptScore('N5', n5Questions, answers);

    expect(scoreReport.level).toBe('N5');
    expect(scoreReport.totalScore).toBe(180);
    expect(scoreReport.passed).toBe(true);
    expect(scoreReport.statusReason).toBe('PASSED');
    expect(scoreReport.statusBadge).toBe('goukaku');
    expect(scoreReport.sections.knowledge.score).toBe(60);
    expect(scoreReport.sections.reading.score).toBe(60);
    expect(scoreReport.sections.listening.score).toBe(60);

    // Save to HistoryService
    const savedItem = await HistoryService.saveMockExam({
      examType: 'jlpt',
      level: 'N5',
      score: scoreReport.totalScore,
      totalQuestions: n5Questions.length,
    });

    expect(savedItem.examType).toBe('jlpt');
    expect(savedItem.score).toBe(180);

    // Record evidence in MasteryEngine
    const recordSpy = vi.spyOn(MasteryEngine, 'recordEvidence');
    MasteryEngine.recordEvidence('00000000-0000-4000-8000-000000000001', 'ja', {
      id: `jlpt_mock_N5_${Date.now()}`,
      skill: 'reading',
      score: 100,
      timestamp: new Date().toISOString(),
      details: `JLPT N5 Official Mock: 180/180 ball (O'tish: 80) - PASSED`,
      type: 'performance',
    });

    expect(recordSpy).toHaveBeenCalledWith(
      '00000000-0000-4000-8000-000000000001',
      'ja',
      expect.objectContaining({
        skill: 'reading',
        score: 100,
      }),
    );
  });

  it('enforces JLPT sectional cutoff: fails candidate who misses listening cutoff despite total points', async () => {
    const n5Questions = JLPT_MOCK_EXAM_DATA.N5;

    // Correct in knowledge and reading, but 0 in listening
    const answers: Record<number, number> = {};
    n5Questions.forEach((q) => {
      if (q.section === 'listening') {
        answers[q.id] = (q.correctAnswer + 1) % 4; // wrong answer
      } else {
        answers[q.id] = q.correctAnswer; // correct answer
      }
    });

    const scoreReport = calculateJlptScore('N5', n5Questions, answers);

    // Knowledge: 60, Reading: 60, Listening: 0 -> Total: 120/180
    // 120 > 80 (Pass threshold for N5)
    // BUT listening is 0 < 19 (Cutoff)!
    expect(scoreReport.totalScore).toBe(120);
    expect(scoreReport.totalScore).toBeGreaterThanOrEqual(80);
    expect(scoreReport.sections.listening.score).toBe(0);
    expect(scoreReport.sections.listening.passed).toBe(false);
    expect(scoreReport.passed).toBe(false); // MUST FAIL!
    expect(scoreReport.statusReason).toBe('FAILED_SECTION_CUTOFF');
    expect(scoreReport.statusBadge).toBe('fugoukaku');
    expect(scoreReport.failedSections).toContain('listening');
    expect(scoreReport.weakestSection).toBe('listening');
  });

  it('verifies all listening questions have valid scripts for TTS fallback', () => {
    ['N5', 'N4', 'N3', 'N2', 'N1'].forEach((lvl) => {
      const questions = JLPT_MOCK_EXAM_DATA[lvl as keyof typeof JLPT_MOCK_EXAM_DATA];
      const listeningQs = questions.filter((q) => q.section === 'listening');
      expect(listeningQs.length).toBeGreaterThan(0);
      listeningQs.forEach((q) => {
        expect(q.script).toBeDefined();
        expect(q.script!.length).toBeGreaterThan(5);
        expect(q.explanationUzbek).toBeDefined();
      });
    });
  });
});
