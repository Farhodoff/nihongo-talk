import { Lesson } from '../../types/lesson';
import rawData from './levels/japaneseN4.json';

export const JAPANESE_N4_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N4_LESSONS;
