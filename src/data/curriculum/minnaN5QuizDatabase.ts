import { PracticeExercise, TestQuestion } from '../../types/lesson';
import rawData from './levels/n5/minnaQuizDatabase.json';

export interface LessonQuizSet {
  practice: PracticeExercise[];
  test: TestQuestion[];
  mondaiListening?: TestQuestion[];
}

export const MINNA_N5_QUIZ_DATABASE: Record<number, LessonQuizSet> = rawData as unknown as Record<
  number,
  LessonQuizSet
>;
