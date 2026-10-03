import { describe, it, expect } from 'vitest';
import { buildCoachPrompts, getJlptLevelPromptBoundary } from '../aiCoach';
import { ConversationScenario } from '../../../components/speaking/scenarioTypes';

describe('AI Coach JLPT Level Calibration & Prompt Engineering', () => {
  it('correctly generates strict N5 pedagogical boundary with forbidden Keigo and grammar', () => {
    const boundary = getJlptLevelPromptBoundary('N5', 'ja', 'gentle');
    expect(boundary).toContain('JLPT N5 (BEGINNER / 初級1) STRICT BOUNDARY');
    expect(boundary).toContain('〜です, 〜じゃありません');
    expect(boundary).toContain('NO Keigo / Sonkeigo / Kenjougo');
    expect(boundary).toContain('MAXIMUM 1 to 2 very short sentences');
  });

  it('calibrates roast persona appropriately for N5 without demanding N2/N1', () => {
    const boundary = getJlptLevelPromptBoundary('N5', 'ja', 'roast');
    expect(boundary).toContain('N5 ROAST STYLE');
    expect(boundary).toContain('DO NOT demand N2/N1 grammar');
    expect(boundary).not.toContain('Band 8.5+');
  });

  it('injects N5 level boundary into buildCoachPrompts when level is N5', () => {
    const { systemPrompt } = buildCoachPrompts(
      'こんにちは、わたしは留学生です。',
      [],
      'ja',
      'roast',
      null,
      'N5',
    );

    expect(systemPrompt).toContain('Target Level: N5');
    expect(systemPrompt).toContain('JLPT N5 (BEGINNER / 初級1) STRICT BOUNDARY');
    expect(systemPrompt).toContain('NO Keigo / Sonkeigo / Kenjougo');
    expect(systemPrompt).not.toContain('必ず高度な表現（N2/N1レベル');
  });

  it('respects scenario difficulty when scenario is provided', () => {
    const n5Scenario: ConversationScenario = {
      id: 'test_n5',
      language: 'ja',
      title_ja: 'テストシナリオ',
      title_uz: 'Test',
      emoji: '🎌',
      difficulty: 'N5',
      category: 'daily',
      description_uz: 'Test N5',
      opening_line_ja: 'こんにちは！',
      context_prompt: 'N5 test prompt',
      key_phrases: ['こんにちは'],
      is_custom: false,
    };

    const { systemPrompt } = buildCoachPrompts(
      'はじめまして',
      [],
      'ja',
      'gentle',
      n5Scenario,
      'N3', // user level is N3, but scenario is N5
    );

    // Scenario difficulty N5 should prevail
    expect(systemPrompt).toContain('Target Level: N5');
    expect(systemPrompt).toContain('JLPT N5 (BEGINNER / 初級1) STRICT BOUNDARY');
  });

  it('correctly provides N4 boundary when N4 level is specified', () => {
    const boundary = getJlptLevelPromptBoundary('N4', 'ja', 'roast');
    expect(boundary).toContain('JLPT N4 (UPPER BEGINNER / 初級2) BOUNDARY');
    expect(boundary).toContain('〜なければなりません');
    expect(boundary).toContain('〜たり〜たりします');
  });
});
