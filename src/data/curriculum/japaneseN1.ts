import { Lesson } from '../../types/lesson';
import rawData from './levels/n1/japaneseLessons.json';

export const JAPANESE_N1_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N1_LESSONS;
