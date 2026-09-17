import { Lesson } from '../../types/lesson';
import rawData from './levels/japaneseN5.json';

export const JAPANESE_N5_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N5_LESSONS;
