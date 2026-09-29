import { Lesson } from '../../types/lesson';
import rawData from './levels/n3/japaneseLessons.json';

export const JAPANESE_N3_LESSONS: Lesson[] = rawData as unknown as Lesson[];
export default JAPANESE_N3_LESSONS;
