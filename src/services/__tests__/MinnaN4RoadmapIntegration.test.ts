import { describe, it, expect, beforeEach } from 'vitest';
import { CurriculumService } from '../CurriculumService';
import { CurriculumLessonResolver } from '../CurriculumLessonResolver';
import { RoadmapService } from '../RoadmapService';
import { UserLearningState } from '../../types/learningOrchestrator';

describe('Minna no Nihongo N4 Roadmap & Curriculum Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('1. CurriculumService includes all 5 Minna N4 units in ja-level-n4', () => {
    const course = CurriculumService.getJapaneseCurriculum();
    const n4Level = course.levels.find((l) => l.code === 'N4');

    expect(n4Level).toBeDefined();
    expect(n4Level?.units.length).toBe(5);

    const unitIds = n4Level?.units.map((u) => u.id);
    expect(unitIds).toEqual([
      'ja-minna-u6',
      'ja-minna-u7',
      'ja-minna-u8',
      'ja-minna-u9',
      'ja-minna-u10',
    ]);
  });

  it('2. Exactly 25 Minna N4 lessons are present in sequence (L26-L50)', () => {
    const course = CurriculumService.getJapaneseCurriculum();
    const n4Level = course.levels.find((l) => l.code === 'N4');
    const allN4Lessons = n4Level?.units.flatMap((u) => u.lessons) || [];

    expect(allN4Lessons.length).toBe(25);

    for (let i = 26; i <= 50; i++) {
      const expectedId = `ja-minna-l${i}`;
      const lesson = allN4Lessons.find((l) => l.id === expectedId);
      expect(lesson, `Lesson ${expectedId} must exist in N4 curriculum`).toBeDefined();
      expect(lesson?.level).toBe('N4');
      expect(lesson?.language).toBe('ja');
      expect(lesson?.route).toBe(`/lesson/${expectedId}`);
      expect(lesson?.contentType).toBe('interactive');
      expect(lesson?.sourceType).toBe('lesson_player');
    }
  });

  it('3. Enforces sequential prerequisites from L26 to L50', () => {
    const l26Prereqs = CurriculumService.getLessonPrerequisites('ja-minna-l26');
    expect(l26Prereqs).toEqual([]);

    for (let i = 27; i <= 50; i++) {
      const lessonId = `ja-minna-l${i}`;
      const expectedPrereq = `ja-minna-l${i - 1}`;
      const prereqs = CurriculumService.getLessonPrerequisites(lessonId);
      expect(prereqs).toContain(expectedPrereq);
    }
  });

  it('4. CurriculumLessonResolver maps each N4 lesson directly to lesson_player', () => {
    for (let i = 26; i <= 50; i++) {
      const lessonId = `ja-minna-l${i}`;
      const resolved = CurriculumLessonResolver.resolveLesson(lessonId, 'ja');
      expect(resolved.isAvailable).toBe(true);
      expect(resolved.sourceType).toBe('lesson_player');
      expect(resolved.route).toBe(`/lesson/${lessonId}`);
      expect(resolved.level).toBe('N4');
      expect(resolved.language).toBe('ja');
    }
  });

  it('5. RoadmapService generates full interactive N4 roadmap with correct initial states', () => {
    const mockState: UserLearningState = {
      userId: 'test_roadmap_user',
      primaryLanguage: 'ja',
      enabledLanguages: ['ja'],
      currentLevel: 'N4',
      targetLevel: 'N3',
      targetGoal: 'JLPT N4 Mastery',
      availableStudyMinutes: 30,
      currentPosition: {
        courseId: 'course-ja-general',
        unitId: 'ja-minna-u6',
        unitTitle: 'Unit 6: 26–30 Darslar',
        lessonId: 'ja-minna-l26',
        lessonTitle: '26-Dars: 〜んです',
        stepIndex: 0,
        totalSteps: 3,
        status: 'not_started',
        percentage: 0,
      },
      completedLessonsCount: 0,
      unfinishedLessons: [],
      reviewSummary: {
        totalCards: 0,
        dueCount: 0,
        overdueCount: 0,
        newCount: 0,
        learnedCount: 0,
        averageRetentionScore: 0,
      },
      signalsSummary: {
        totalSignalsCount: 0,
        recentMistakesCount: 0,
        newVocabCount: 0,
        completedLessonsCount: 0,
        recentMistakeTopics: [],
      },
      recentActivity: {
        lastStudyAt: null,
        recentLessonIds: [],
        lastCompletedLessonId: null,
      },
    };

    const roadmap = RoadmapService.getLearningRoadmap(mockState);
    const n4RoadmapLevel = roadmap.levels.find((l) => l.code === 'N4');

    expect(n4RoadmapLevel).toBeDefined();
    expect(n4RoadmapLevel?.status).toBe('current');
    expect(n4RoadmapLevel?.units.length).toBe(5);

    const allRoadmapLessons = n4RoadmapLevel?.units.flatMap((u) => u.lessons) || [];
    expect(allRoadmapLessons.length).toBe(25);

    // First lesson L26 should be current (since user is positioned at L26)
    const l26 = allRoadmapLessons.find((l) => l.id === 'ja-minna-l26');
    expect(l26?.status).toBe('current');

    // L27 should be locked because L26 is not yet completed
    const l27 = allRoadmapLessons.find((l) => l.id === 'ja-minna-l27');
    expect(l27?.status).toBe('locked');
    expect(l27?.lockReason).toBeTruthy();
  });
});
