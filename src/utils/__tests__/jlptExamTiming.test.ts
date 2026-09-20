import { describe, it, expect } from 'vitest';
import {
  JLPT_SECTION_SPECS,
  getSectionDurationSeconds,
  getOrderedSections,
  getSectionIndex,
  getNextSectionKey,
  JlptLevel,
  SectionKey,
} from '../jlptExamTiming';

describe('jlptExamTiming', () => {
  const levels: JlptLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  it('defines specs for all 5 JLPT levels (N5-N1)', () => {
    levels.forEach((lvl) => {
      expect(JLPT_SECTION_SPECS[lvl]).toBeDefined();
      expect(JLPT_SECTION_SPECS[lvl].length).toBe(3);
    });
  });

  it('orders sections strictly: knowledge -> reading -> listening', () => {
    levels.forEach((lvl) => {
      const ordered = getOrderedSections(lvl);
      expect(ordered.map((s) => s.section)).toEqual(['knowledge', 'reading', 'listening']);
      expect(ordered[0].order).toBe(1);
      expect(ordered[1].order).toBe(2);
      expect(ordered[2].order).toBe(3);
    });
  });

  it('correctly calculates simulation and official seconds for N5', () => {
    expect(getSectionDurationSeconds('N5', 'knowledge', false)).toBe(15 * 60);
    expect(getSectionDurationSeconds('N5', 'knowledge', true)).toBe(20 * 60);

    expect(getSectionDurationSeconds('N5', 'reading', false)).toBe(20 * 60);
    expect(getSectionDurationSeconds('N5', 'reading', true)).toBe(40 * 60);

    expect(getSectionDurationSeconds('N5', 'listening', false)).toBe(15 * 60);
    expect(getSectionDurationSeconds('N5', 'listening', true)).toBe(30 * 60);
  });

  it('correctly calculates simulation and official seconds for N1', () => {
    expect(getSectionDurationSeconds('N1', 'knowledge', false)).toBe(20 * 60);
    expect(getSectionDurationSeconds('N1', 'knowledge', true)).toBe(55 * 60);

    expect(getSectionDurationSeconds('N1', 'reading', false)).toBe(25 * 60);
    expect(getSectionDurationSeconds('N1', 'reading', true)).toBe(55 * 60);

    expect(getSectionDurationSeconds('N1', 'listening', false)).toBe(20 * 60);
    expect(getSectionDurationSeconds('N1', 'listening', true)).toBe(60 * 60);
  });

  it('returns fallback seconds if unknown section is passed', () => {
    expect(getSectionDurationSeconds('N5', 'unknown' as unknown as SectionKey)).toBe(1200);
  });

  it('calculates correct section indices', () => {
    expect(getSectionIndex('N3', 'knowledge')).toBe(0);
    expect(getSectionIndex('N3', 'reading')).toBe(1);
    expect(getSectionIndex('N3', 'listening')).toBe(2);
    expect(getSectionIndex('N3', 'unknown' as unknown as SectionKey)).toBe(0);
  });

  it('computes next section key correctly', () => {
    expect(getNextSectionKey('N4', 'knowledge')).toBe('reading');
    expect(getNextSectionKey('N4', 'reading')).toBe('listening');
    expect(getNextSectionKey('N4', 'listening')).toBeNull();
  });
});
