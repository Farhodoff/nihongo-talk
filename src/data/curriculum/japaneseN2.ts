import { Lesson } from '../../types/lesson';
import rawData from './levels/n2/japaneseLessons.json';

export const JAPANESE_N2_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N2_LESSONS;
