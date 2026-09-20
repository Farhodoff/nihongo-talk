/**
 * JLPT Rasmiy Bo'limli Taymer Konfiguratsiyasi va Qoidalari
 * (Official Sectioned Timed Exam Specifications)
 *
 * Japan Foundation & JEES standartlari bo'yicha rasmiy vaqt mezonlari:
 * - N5: Moji/Goi (20 min) -> Dokkai (40 min) -> Choukai (30 min)
 * - N4: Moji/Goi (25 min) -> Dokkai (55 min) -> Choukai (35 min)
 * - N3: Moji/Goi (30 min) -> Dokkai (70 min) -> Choukai (40 min)
 * - N2: Gengo Chishiki + Dokkai (105 min) -> Choukai (50 min)
 * - N1: Gengo Chishiki + Dokkai (110 min) -> Choukai (60 min)
 */

export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export type JlptExamMode = 'practice' | 'official_timed';
export type SectionKey = 'knowledge' | 'reading' | 'listening';

export interface SectionTimingSpec {
  section: SectionKey;
  order: number;
  titleJa: string;
  titleUz: string;
  shortLabel: string;
  icon: string;
  officialMinutes: number;
  simulationSeconds: number; // 25 talik sinov uchun qulaylashtirilgan real vaqt
  officialSeconds: number; // To'liq rasmiy imtihon vaqti
  descriptionUz: string;
}

export const JLPT_SECTION_SPECS: Record<JlptLevel, SectionTimingSpec[]> = {
  N5: [
    {
      section: 'knowledge',
      order: 1,
      titleJa: '言語知識（文字・語彙）',
      titleUz: 'Til bilimi (Iyeroglif va Lug‘at)',
      shortLabel: '1. Moji & Goi',
      icon: 'BookOpen',
      officialMinutes: 20,
      simulationSeconds: 15 * 60, // 15 min
      officialSeconds: 20 * 60, // 20 min
      descriptionUz: 'Iyerogliflar o‘qilishi, so‘z tanlash va lug‘at boyligi sinovi.',
    },
    {
      section: 'reading',
      order: 2,
      titleJa: '言語知識（文法）・読解',
      titleUz: 'Grammatika va O‘qish (Dokkai)',
      shortLabel: '2. Bunpou & Dokkai',
      icon: 'FileText',
      officialMinutes: 40,
      simulationSeconds: 20 * 60, // 20 min
      officialSeconds: 40 * 60, // 40 min
      descriptionUz: 'Gap tuzilishi, grammatik qoidalar va matnlarni tushunish.',
    },
    {
      section: 'listening',
      order: 3,
      titleJa: '聴解',
      titleUz: 'Tinglab tushunish (Choukai)',
      shortLabel: '3. Choukai',
      icon: 'Headphones',
      officialMinutes: 30,
      simulationSeconds: 15 * 60, // 15 min
      officialSeconds: 30 * 60, // 30 min
      descriptionUz: 'Studiya CD audiosi orqali savollarga to‘g‘ri javob berish.',
    },
  ],
  N4: [
    {
      section: 'knowledge',
      order: 1,
      titleJa: '言語知識（文字・語彙）',
      titleUz: 'Til bilimi (Iyeroglif va Lug‘at)',
      shortLabel: '1. Moji & Goi',
      icon: 'BookOpen',
      officialMinutes: 25,
      simulationSeconds: 15 * 60,
      officialSeconds: 25 * 60,
      descriptionUz: 'N4 bazaviy kanji va so‘z boyligi sinovi.',
    },
    {
      section: 'reading',
      order: 2,
      titleJa: '言語知識（文法）・読解',
      titleUz: 'Grammatika va O‘qish (Dokkai)',
      shortLabel: '2. Bunpou & Dokkai',
      icon: 'FileText',
      officialMinutes: 55,
      simulationSeconds: 25 * 60,
      officialSeconds: 55 * 60,
      descriptionUz: 'Kundalik matnlar, xatlar va N4 grammatikasi tahlili.',
    },
    {
      section: 'listening',
      order: 3,
      titleJa: '聴解',
      titleUz: 'Tinglab tushunish (Choukai)',
      shortLabel: '3. Choukai',
      icon: 'Headphones',
      officialMinutes: 35,
      simulationSeconds: 15 * 60,
      officialSeconds: 35 * 60,
      descriptionUz: 'Haqiqiy Shin Kanzen Master N4 CD audio dialoglari.',
    },
  ],
  N3: [
    {
      section: 'knowledge',
      order: 1,
      titleJa: '言語知識（文字・語彙）',
      titleUz: 'Til bilimi (Iyeroglif va Lug‘at)',
      shortLabel: '1. Moji & Goi',
      icon: 'BookOpen',
      officialMinutes: 30,
      simulationSeconds: 18 * 60,
      officialSeconds: 30 * 60,
      descriptionUz: 'O‘rta darajadagi 500 Mon va Shin Kanzen leksikasi.',
    },
    {
      section: 'reading',
      order: 2,
      titleJa: '言語知識（文法）・読解',
      titleUz: 'Grammatika va O‘qish (Dokkai)',
      shortLabel: '2. Bunpou & Dokkai',
      icon: 'FileText',
      officialMinutes: 70,
      simulationSeconds: 30 * 60,
      officialSeconds: 70 * 60,
      descriptionUz: 'Chuu-bun va e’lonlar asosidagi murakkabroq matnlar tahlili.',
    },
    {
      section: 'listening',
      order: 3,
      titleJa: '聴解',
      titleUz: 'Tinglab tushunish (Choukai)',
      shortLabel: '3. Choukai',
      icon: 'Headphones',
      officialMinutes: 40,
      simulationSeconds: 20 * 60,
      officialSeconds: 40 * 60,
      descriptionUz: 'Haqiqiy N3 studiya CD audiosi.',
    },
  ],
  N2: [
    {
      section: 'knowledge',
      order: 1,
      titleJa: '言語知識（文字・語彙・文法）',
      titleUz: 'Til bilimi va Grammatika',
      shortLabel: '1. Gengo Chishiki',
      icon: 'BookOpen',
      officialMinutes: 50,
      simulationSeconds: 20 * 60,
      officialSeconds: 50 * 60,
      descriptionUz: 'Yuqori o‘rta darajadagi kanji, collocations va grammatika.',
    },
    {
      section: 'reading',
      order: 2,
      titleJa: '読解',
      titleUz: 'O‘qish va Tahlil (Dokkai)',
      shortLabel: '2. Dokkai',
      icon: 'FileText',
      officialMinutes: 55,
      simulationSeconds: 25 * 60,
      officialSeconds: 55 * 60,
      descriptionUz: 'Publitsistik, tahliliy va chuqur maqolalar.',
    },
    {
      section: 'listening',
      order: 3,
      titleJa: '聴解',
      titleUz: 'Tinglab tushunish (Choukai)',
      shortLabel: '3. Choukai',
      icon: 'Headphones',
      officialMinutes: 50,
      simulationSeconds: 20 * 60,
      officialSeconds: 50 * 60,
      descriptionUz: 'Shin Kanzen Master N2 audio CD dagi tezkor dialoglar.',
    },
  ],
  N1: [
    {
      section: 'knowledge',
      order: 1,
      titleJa: '言語知識（文字・語彙・文法）',
      titleUz: 'Til bilimi va Grammatika',
      shortLabel: '1. Gengo Chishiki',
      icon: 'BookOpen',
      officialMinutes: 55,
      simulationSeconds: 20 * 60,
      officialSeconds: 55 * 60,
      descriptionUz: 'Oliy darajadagi akademik leksika va kam uchraydigan grammatik qoidalar.',
    },
    {
      section: 'reading',
      order: 2,
      titleJa: '読解',
      titleUz: 'O‘qish va Tahlil (Dokkai)',
      shortLabel: '2. Dokkai',
      icon: 'FileText',
      officialMinutes: 55,
      simulationSeconds: 25 * 60,
      officialSeconds: 55 * 60,
      descriptionUz: 'Falsafiy, ilmiy va badiiy abstrakt matnlar tahlili.',
    },
    {
      section: 'listening',
      order: 3,
      titleJa: '聴解',
      titleUz: 'Tinglab tushunish (Choukai)',
      shortLabel: '3. Choukai',
      icon: 'Headphones',
      officialMinutes: 60,
      simulationSeconds: 20 * 60,
      officialSeconds: 60 * 60,
      descriptionUz: 'Akademik ma’ruzalar va murakkab suhbatlar.',
    },
  ],
};

/**
 * Berilgan daraja va bo'lim uchun belgilangan vaqtni olish (sekundlarda)
 */
export function getSectionDurationSeconds(
  level: JlptLevel,
  section: SectionKey,
  useFullOfficialTime: boolean = false,
): number {
  const specs = JLPT_SECTION_SPECS[level] || JLPT_SECTION_SPECS.N5;
  const target = specs.find((s) => s.section === section);
  if (!target) return 1200; // fallback 20 min
  return useFullOfficialTime ? target.officialSeconds : target.simulationSeconds;
}

/**
 * Berilgan daraja uchun ketma-ket bo'limlar ro'yxatini olish
 */
export function getOrderedSections(level: JlptLevel): SectionTimingSpec[] {
  const specs = JLPT_SECTION_SPECS[level] || JLPT_SECTION_SPECS.N5;
  return [...specs].sort((a, b) => a.order - b.order);
}

/**
 * Berilgan bo'limning indeksini (0, 1, 2) topish
 */
export function getSectionIndex(level: JlptLevel, section: SectionKey): number {
  const ordered = getOrderedSections(level);
  const idx = ordered.findIndex((s) => s.section === section);
  return idx >= 0 ? idx : 0;
}

/**
 * Keyingi bo'lim kalitini aniqlash (agar oxirgi bo'lsa null qaytaradi)
 */
export function getNextSectionKey(level: JlptLevel, currentSection: SectionKey): SectionKey | null {
  const ordered = getOrderedSections(level);
  const currentIdx = ordered.findIndex((s) => s.section === currentSection);
  if (currentIdx >= 0 && currentIdx < ordered.length - 1) {
    return ordered[currentIdx + 1].section;
  }
  return null;
}
