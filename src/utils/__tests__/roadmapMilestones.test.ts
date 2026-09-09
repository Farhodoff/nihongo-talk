import { describe, it, expect } from 'vitest';
import { generatePersonalMilestones } from '../roadmapMilestones';

describe('roadmapMilestones - Authentic Milestone Generator', () => {
  it('generates real JLPT N5 milestones without generic mock text for ZERO to N5', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'ZERO', 'N5', 6, true);
    expect(milestones).toHaveLength(6);
    expect(milestones[0].title).toContain('1-Oy');
    expect(milestones[0].title).toContain('Hiragana');
    expect(milestones[0].desc).toContain('Kanji');
    expect(milestones[0].focusAreas).toContain('Kana');
    expect(milestones[0].title).not.toContain('Progress & Consolidation');
  });

  it('CRITICAL: generates systematic N4 to N1 progression WITHOUT beginner Hiragana/Katakana', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'N4', 'N1', 6, true);
    expect(milestones).toHaveLength(6);

    // Month 1 must NOT be Hiragana or Katakana!
    expect(milestones[0].title).not.toContain('Hiragana');
    expect(milestones[0].title).not.toContain('Katakana');
    expect(milestones[0].title).toContain('N4');
    expect(milestones[0].title).toContain('N3');

    // Middle months must progress through N3 and N2
    expect(milestones[1].title).toContain('N3');
    expect(milestones[2].title).toContain('N2');
    expect(milestones[3].title).toContain('N2');

    // Final months must advance to N1 and official simulation
    expect(milestones[4].title).toContain('N1');
    expect(milestones[5].title).toContain('N1');
    expect(milestones[5].title).toContain('180-Ballik');
    expect(milestones[5].focusAreas).toContain('N1 Certified');
  });

  it('generates N4 to N2 progression without N5 or Kana', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'N4', 'N2', 6, true);
    expect(milestones).toHaveLength(6);
    expect(milestones[0].title).toContain('N4');
    expect(milestones[0].title).not.toContain('Hiragana');
    expect(milestones[5].title).toContain('N2');
  });

  it('generates N4 to N3 progression properly', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'N4', 'N3', 6, true);
    expect(milestones).toHaveLength(6);
    expect(milestones[0].title).toContain('N4');
    expect(milestones[0].title).not.toContain('Hiragana');
    expect(milestones[5].title).toContain('N3');
  });

  it('generates deep N1 single-level mastery milestones', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'N1', 'N1', 6, true);
    expect(milestones).toHaveLength(6);
    expect(milestones[0].title).toContain('N1');
    expect(milestones[5].title).toContain('N1');
  });

  it('generates real Japanese Kaiwa milestones for general_ja', () => {
    const milestones = generatePersonalMilestones('ja', 'general_ja', 'ZERO', 'N5', 3, true);
    expect(milestones).toHaveLength(3);
    expect(milestones[0].title).toContain('Tanishuv');
    expect(milestones[0].desc).toContain('xushmuomala');
  });

  it('generates real IELTS milestones in English', () => {
    const milestones = generatePersonalMilestones('en', 'ielts', '5.5', '7.0', 6, false);
    expect(milestones).toHaveLength(6);
    expect(milestones[0].title).toContain('Month 1');
    expect(milestones[0].desc).toContain('Academic Word List');
    expect(milestones[0].title).not.toContain('Progress & Consolidation');
  });

  it('handles 1-month intensive plan gracefully', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'N4', 'N3', 1, true);
    expect(milestones).toHaveLength(1);
    expect(milestones[0].month).toBe(1);
    expect(milestones[0].focusAreas.length).toBeGreaterThan(0);
  });
});
