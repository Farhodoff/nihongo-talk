import { describe, it, expect, beforeEach } from 'vitest';
import { LessonService } from '../LessonService';
import { LearningOrchestrator } from '../LearningOrchestrator';
import { LearningProgressionService } from '../LearningProgressionService';
import { MasteryEngine } from '../MasteryEngine';
import { WeaknessEngine } from '../WeaknessEngine';
import { LearningSignalService } from '../LearningSignalService';
import { ALL_CURRICULUM_LESSONS } from '../../data/curriculum/curriculumLessons';
import { safeLocalStorage } from '../../utils/storage/safeLocalStorage';

describe('Phase 19 - E2E Closed-Loop Learning System & Language Isolation', () => {
  const userId = 'user_p19_e2e_test';

  beforeEach(() => {
    localStorage.clear();
  });

  it('1. Verifies 135 total production Japanese curriculum lessons loaded cleanly', () => {
    expect(ALL_CURRICULUM_LESSONS.length).toBeGreaterThanOrEqual(135);
    const enLessons = LessonService.getLessonsForLanguage('en');
    const jaLessons = LessonService.getLessonsForLanguage('ja');
    expect(enLessons.length).toBe(0);
    expect(jaLessons.length).toBeGreaterThanOrEqual(135);
  });

  it('2. Enforces strict Japanese language isolation across all levels', () => {
    const jaLessons = LessonService.getLessonsForLanguage('ja');
    for (const l of jaLessons) {
      expect(l.language).toBe('ja');
      expect(l.id).toMatch(/^ja-/);
    }
  });

  it('3. Runs full closed-loop: Lesson Completion -> Signal -> SRS -> Mastery -> Weakness -> Next Lesson', async () => {
    const lesson = ALL_CURRICULUM_LESSONS[0];
    expect(lesson).toBeDefined();

    const score = { score: 4, total: 4, percentage: 100 };
    const summary = await LearningSignalService.processLessonCompletion(userId, lesson, score, []);

    expect(summary).toBeDefined();
    expect(summary.newCardsCount).toBeGreaterThanOrEqual(0);

    const masteryProfile = WeaknessEngine.getUserMasteryProfile(userId, 'ja');
    expect(masteryProfile.userId).toBe(userId);
    expect(masteryProfile.language).toBe('ja');

    const nextLesson = await LearningProgressionService.getNextLesson(userId, 'ja');
    expect(nextLesson).toBeDefined();
    expect(nextLesson?.id).not.toBeNull();
  });

  it('4. Correctly detects weaknesses when quiz performance drops below 75%', async () => {
    MasteryEngine.recordEvidence(userId, 'ja', {
      skill: 'grammar',
      score: 40,
      timestamp: new Date().toISOString(),
      type: 'performance',
    });

    const profile = WeaknessEngine.getUserMasteryProfile(userId, 'ja');
    expect(profile.topWeaknesses.length).toBeGreaterThan(0);
    const topWeakness = profile.topWeaknesses[0];
    expect(topWeakness.skill).toBe('grammar');
    expect(topWeakness.recommendedRoute).toBeDefined();
  });

  it('5. Denies unauthorized access to higher level lessons without prerequisites', () => {
    safeLocalStorage.setItem('study_planner_primary_language', 'ja');
    safeLocalStorage.setItem('study_planner_target_level_ja', 'N5');

    const n1Access = LearningOrchestrator.canAccessLesson('ja-n1-u1-l2', userId, 'ja');
    expect(n1Access.allowed).toBe(false);
    expect(n1Access.reason).toMatch(/requires level N1/i);
  });

  it('6. Does not block JLPT level progression due to speaking skill', () => {
    safeLocalStorage.setItem('study_planner_primary_language', 'ja');
    safeLocalStorage.setItem('study_planner_target_level_ja', 'N5');

    const jaSkills = ['vocabulary', 'kanji', 'grammar', 'reading', 'listening'] as const;
    for (const skill of jaSkills) {
      for (let i = 0; i < 5; i++) {
        MasteryEngine.recordEvidence(userId, 'ja', {
          id: `ev_${skill}_${i}`,
          skill,
          score: 90,
          timestamp: new Date().toISOString(),
          type: 'performance',
        });
      }
    }

    const profile = WeaknessEngine.getUserMasteryProfile(userId, 'ja');
    expect(profile.skills.vocabulary.status).toBe('mastered');
    expect(profile.skills.speaking.status).toBe('not_started');
  });
});
