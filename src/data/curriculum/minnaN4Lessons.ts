import { Lesson } from '../../types/lesson';
import rawData from './levels/minnaN4Lessons.json';

export const MINNA_N4_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default MINNA_N4_LESSONS;
