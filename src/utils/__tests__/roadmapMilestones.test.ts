import { describe, it, expect } from 'vitest';
import { generatePersonalMilestones } from '../roadmapMilestones';

describe('roadmapMilestones - Authentic Milestone Generator', () => {
  it('generates real JLPT N5 milestones without generic mock text', () => {
    const milestones = generatePersonalMilestones('ja', 'jlpt', 'ZERO', 'N5', 6, true);
    expect(milestones).toHaveLength(6);
    expect(milestones[0].title).toContain('1-Oy');
    expect(milestones[0].title).toContain('Hiragana');
    expect(milestones[0].desc).toContain('Kanji');
    expect(milestones[0].focusAreas).toContain('Kana');
    expect(milestones[0].title).not.toContain('Progress & Consolidation');
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
