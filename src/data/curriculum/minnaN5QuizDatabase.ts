import { PracticeExercise, TestQuestion } from '../../types/lesson';
import rawData from './levels/minnaN5QuizDatabase.json';

export interface LessonQuizSet {
  practice: PracticeExercise[];
  test: TestQuestion[];
}

export const MINNA_N5_QUIZ_DATABASE: Record<number, LessonQuizSet> = rawData as unknown as Record<
  number,
  LessonQuizSet
>;
