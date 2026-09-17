import { Lesson } from '../../types/lesson';
import rawData from './levels/minnaN5Lessons.json';

export const MINNA_N5_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default MINNA_N5_LESSONS;
