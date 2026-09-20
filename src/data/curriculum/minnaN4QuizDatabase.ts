import { PracticeExercise, TestQuestion } from '../../types/lesson';
import rawData from './levels/minnaN4QuizDatabase.json';

export interface LessonQuizSet {
  practice: PracticeExercise[];
  test: TestQuestion[];
  mondaiListening?: TestQuestion[];
}

export const MINNA_N4_QUIZ_DATABASE: Record<number, LessonQuizSet> = rawData as unknown as Record<
  number,
  LessonQuizSet
>;
