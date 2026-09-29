import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { JlptReadinessCard } from '../JlptReadinessCard';
import { JlptSkillsBreakdown } from '../JlptSkillsBreakdown';
import { UserSkillStats, JlptReadinessService } from '../../../services/JlptReadinessService';

describe('JlptReadinessCard and SkillsBreakdown Components', () => {
  const mockStats: UserSkillStats = {
    vocabCount: 650,
    vocabRetentionRate: 85,
    kanjiCount: 85,
    grammarMasteredCount: 35,
    listeningCompletedCount: 9,
    listeningAccuracy: 80,
    speakingSessionsCount: 4,
    speakingFluencyScore: 8.0,
    mockExamHighestScore: 120,
  };

  it('renders JlptReadinessCard with radar chart, projected score, and sectional floors', () => {
    render(<JlptReadinessCard stats={mockStats} initialLevel="N5" />);

    expect(
      screen.getByText(
        /JLPT Tayyorgarlik & 5 Qirrali Radar|JLPT Readiness & Skill Radar|JLPT 合格判定/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'N5' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'N4' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'N3' })).toBeInTheDocument();

    // Sectional verification
    expect(screen.getByText(/Sektorlar Xavfsizligi|Sectional Cutoff Check/i)).toBeInTheDocument();
    expect(screen.getByText(/Til Bilimi|Language Knowledge/i)).toBeInTheDocument();
    expect(
      screen.getAllByText(/O'qib Tushunish|読解|Reading Comprehension/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText(/Tinglab Tushunish|聴解|Listening/i).length).toBeGreaterThan(0);
  });

  it('allows switching level to N4 and updates benchmarks dynamically', () => {
    render(<JlptReadinessCard stats={mockStats} initialLevel="N5" />);

    const n4Btn = screen.getByRole('button', { name: 'N4' });
    fireEvent.click(n4Btn);

    // Pass mark for N4 is 90
    expect(screen.getAllByText(/90 ball|90点|Pass mark: 90/i).length).toBeGreaterThan(0);
  });

  it('supports switching between 4-pillar official model and 5-pillar radar mode', () => {
    render(<JlptReadinessCard stats={mockStats} initialLevel="N5" />);

    const fourPillarBtn = screen.getByText(/🏛️ Rasmiy 4-Ustun|🏛️ 公式4分野/i);
    const fivePillarBtn = screen.getByText(/🌐 5-Qirrali|🌐 5大スキル/i);

    expect(fourPillarBtn).toBeInTheDocument();
    expect(fivePillarBtn).toBeInTheDocument();

    fireEvent.click(fivePillarBtn);
    expect(fivePillarBtn).toHaveClass('bg-rose-500');

    fireEvent.click(fourPillarBtn);
    expect(fourPillarBtn).toHaveClass('bg-rose-500');
  });

  it('displays Mistake Vault warning banner when unresolved mistakes exist', () => {
    const statsWithMistakes: UserSkillStats = {
      ...mockStats,
      unresolvedMistakesCount: 6,
    };

    render(<JlptReadinessCard stats={statsWithMistakes} initialLevel="N5" />);

    expect(
      screen.getByText(
        /Xatolar Daftarchasi: 6 ta xato|Mistake Notebook: 6 unresolved|間違いノート/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Xatolarni tuzatish|Review Vault|ノートで復習/i }),
    ).toBeInTheDocument();
  });

  it('renders JlptSkillsBreakdown with 5 skill cards and action buttons', () => {
    const report = JlptReadinessService.calculateReadiness(mockStats, 'N5');
    render(<JlptSkillsBreakdown pillars={report.pillars} />);

    expect(
      screen.getByText(/5 Ustun Boʻyicha Koʻrsatkichlar|Skill Pillars & Direct Action/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/So'z Boyligi|単語・語彙|Vocabulary/i)).toBeInTheDocument();
    expect(screen.getByText(/Kanji Iyerogliflari|漢字認識・筆記|Kanji/i)).toBeInTheDocument();
    expect(screen.getByText(/Grammatika|文法・構文|Grammar/i)).toBeInTheDocument();
    expect(screen.getByText(/Tinglab Tushunish|聴解・リスニング|Listening/i)).toBeInTheDocument();
    expect(screen.getByText(/Nutq & Ohang|会話・アクセント|Speaking/i)).toBeInTheDocument();

    const practiceButtons = screen.getAllByRole('button', {
      name: /Mashq qilish|Practice|練習する/i,
    });
    expect(practiceButtons.length).toBe(5);
  });
});
