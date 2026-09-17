import { Lesson } from '../../types/lesson';
import rawData from './levels/japaneseN1.json';

export const JAPANESE_N1_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N1_LESSONS;
