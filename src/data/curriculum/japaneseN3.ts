import { Lesson } from '../../types/lesson';
import rawData from './levels/japaneseN3.json';

export const JAPANESE_N3_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N3_LESSONS;
