/**
 * PitchAccentService.ts
 * Japanese Pitch Accent (高低アクセント - Tokyo Standard) Lexical & Analytical Engine.
 * Supports mora-by-mora segmentation, downstep detection, pitch curve mapping,
 * and pedagogical explanations for JLPT learners.
 */

export type PitchType = 'heiban' | 'atamadaka' | 'nakadaka' | 'odaka';

export interface MoraPitch {
  mora: string;
  isHigh: boolean;
  isDrop?: boolean; // true if accent downstep happens immediately after this mora
}

export interface PitchAccentInfo {
  word: string;
  reading: string;
  romaji: string;
  pitchType: PitchType;
  pitchTypeNameUz: string;
  pitchPatternNumber: number; // 0 for heiban, 1 for atamadaka, 2.. for nakadaka/odaka
  morae: MoraPitch[];
  pitchFormula: string; // e.g. "L-H-H" or "H-L"
  ruleExplanationUz: string;
}

// Digraphs (拗音) that count as a single mora
const DIGRAPH_REGEX =
  /^([きしちにひみりぎじびぴ][ゃゅょ]|キャ|キュ|キョ|シャ|シュ|ショ|チャ|チュ|チョ|ニャ|ニュ|ニョ|ヒャ|ヒュ|ヒョ|ミャ|ミュ|ミョ|リャ|リュ|リョ|ギャ|ギュ|ギョ|ジャ|ジュ|ジョ|ビャ|ビュ|ビョ|ピャ|ピュ|ピョ|ティ|ディ|ファ|フィ|フェ|フォ|ジェ|シェ|チェ)/;

/**
 * Splits Japanese text into standard mora units.
 */
export function splitIntoMorae(reading: string): string[] {
  const morae: string[] = [];
  const chars = Array.from(reading.trim());

  let i = 0;
  while (i < chars.length) {
    const twoChars = chars.slice(i, i + 2).join('');
    if (twoChars.length === 2 && DIGRAPH_REGEX.test(twoChars)) {
      morae.push(twoChars);
      i += 2;
    } else {
      morae.push(chars[i]);
      i += 1;
    }
  }

  return morae.filter((m) => m.length > 0);
}

// Built-in high-frequency JLPT pitch accent dictionary (Tokyo standard dialect)
interface DictEntry {
  reading: string;
  pattern: number; // 0: heiban, 1: atamadaka, >=2: nakadaka or odaka
  romaji: string;
}

const JLPT_PITCH_DICTIONARY: Record<string, DictEntry> = {
  // N5-N4 Essentials
  あめ: { reading: 'あめ', pattern: 1, romaji: 'ame (rain)' },
  ほん: { reading: 'ほん', pattern: 1, romaji: 'hon (book)' },
  ねこ: { reading: 'ねこ', pattern: 1, romaji: 'neko (cat)' },
  いぬ: { reading: 'いぬ', pattern: 2, romaji: 'inu (dog)' },
  はな: { reading: 'はな', pattern: 2, romaji: 'hana (flower)' },
  やま: { reading: 'やま', pattern: 2, romaji: 'yama (mountain)' },
  かわ: { reading: 'かわ', pattern: 2, romaji: 'kawa (river)' },
  みず: { reading: 'みず', pattern: 0, romaji: 'mizu (water)' },
  さくら: { reading: 'さくら', pattern: 0, romaji: 'sakura (cherry blossom)' },
  にほん: { reading: 'にほん', pattern: 2, romaji: 'nihon (Japan)' },
  にほんご: { reading: 'にほんご', pattern: 0, romaji: 'nihongo (Japanese language)' },
  せんせい: { reading: 'せんせい', pattern: 3, romaji: 'sensei (teacher)' },
  がくせい: { reading: 'がくせい', pattern: 0, romaji: 'gakusei (student)' },
  ともだち: { reading: 'ともだち', pattern: 0, romaji: 'tomodachi (friend)' },
  たまご: { reading: 'たまご', pattern: 2, romaji: 'tamago (egg)' },
  くるま: { reading: 'くるま', pattern: 0, romaji: 'kuruma (car)' },
  でんしゃ: { reading: 'でんしゃ', pattern: 0, romaji: 'densha (train)' },
  えき: { reading: 'えき', pattern: 1, romaji: 'eki (station)' },
  ひこうき: { reading: 'ひこうき', pattern: 2, romaji: 'hikouki (airplane)' },
  あさ: { reading: 'あさ', pattern: 1, romaji: 'asa (morning)' },
  ひる: { reading: 'ひる', pattern: 2, romaji: 'hiru (noon)' },
  よる: { reading: 'よる', pattern: 1, romaji: 'yoru (night)' },
  きょう: { reading: 'きょう', pattern: 1, romaji: 'kyou (today)' },
  あした: { reading: 'あした', pattern: 3, romaji: 'ashita (tomorrow)' },
  きのう: { reading: 'きのう', pattern: 2, romaji: 'kinou (yesterday)' },
  たべる: { reading: 'たべる', pattern: 2, romaji: 'taberu (to eat)' },
  のむ: { reading: 'のむ', pattern: 1, romaji: 'nomu (to drink)' },
  いく: { reading: 'いく', pattern: 0, romaji: 'iku (to go)' },
  くる: { reading: 'くる', pattern: 1, romaji: 'kuru (to come)' },
  みる: { reading: 'みる', pattern: 1, romaji: 'miru (to see)' },
  きく: { reading: 'きく', pattern: 0, romaji: 'kiku (to listen)' },
  はなす: { reading: 'はなす', pattern: 2, romaji: 'hanasu (to speak)' },
  べんきょう: { reading: 'べんきょう', pattern: 0, romaji: 'benkyou (study)' },
  しごと: { reading: 'しごと', pattern: 0, romaji: 'shigoto (work)' },
  ありがとう: { reading: 'ありがとう', pattern: 2, romaji: 'arigatou (thank you)' },
  こんにちは: { reading: 'こんにちは', pattern: 0, romaji: 'konnichiwa (hello)' },
  さようなら: { reading: 'さようなら', pattern: 5, romaji: 'sayounara (goodbye)' },
  おねがい: { reading: 'おねがい', pattern: 0, romaji: 'onegai (please)' },
  げんき: { reading: 'げんき', pattern: 1, romaji: 'genki (healthy/fine)' },
  すき: { reading: 'すき', pattern: 2, romaji: 'suki (like)' },
  おいしい: { reading: 'おいしい', pattern: 3, romaji: 'oishii (delicious)' },
  たのしい: { reading: 'たのしい', pattern: 3, romaji: 'tanoshii (fun)' },
  むずかしい: { reading: 'むずかしい', pattern: 4, romaji: 'muzukashii (difficult)' },
  やさしい: { reading: 'やさしい', pattern: 0, romaji: 'yasashii (kind/easy)' },
  おおきい: { reading: 'おおきい', pattern: 3, romaji: 'ookii (big)' },
  ちいさい: { reading: 'ちいさい', pattern: 3, romaji: 'chiisai (small)' },
  あつい: { reading: 'あつい', pattern: 2, romaji: 'atsui (hot)' },
  さむい: { reading: 'さむい', pattern: 2, romaji: 'samui (cold)' },
};

/**
 * Derives pitch curve and metadata for any word and pattern number.
 */
export function buildPitchAccentInfo(
  word: string,
  reading: string,
  patternNumber: number,
  romajiLabel?: string,
): PitchAccentInfo {
  const moraeStrings = splitIntoMorae(reading);
  const moraCount = moraeStrings.length;

  let pitchType: PitchType;
  let pitchTypeNameUz: string;
  let ruleExplanationUz: string;

  if (patternNumber === 0) {
    pitchType = 'heiban';
    pitchTypeNameUz = 'Heiban (平板型 ⓪ - Tekis)';
    ruleExplanationUz =
      "Ushbu so'zda ohang 1-bo'g'inda past bo'ladi va 2-bo'g'indan boshlab ko'tarilib yuqori qoladi. So'zdan keyin keladigan yuklamalar (ga, o, wa) ham yuqori ohangda davom etadi.";
  } else if (patternNumber === 1) {
    pitchType = 'atamadaka';
    pitchTypeNameUz = 'Atamadaka (頭高型 ① - Boshida baland)';
    ruleExplanationUz =
      "Birinchi bo'g'in kuchli va baland ohangda aytiladi, ikkinchi bo'g'indan boshlab esa ohang birdaniga pastga tushadi.";
  } else if (patternNumber === moraCount) {
    pitchType = 'odaka';
    pitchTypeNameUz = 'Odaka (尾高型 - Oxirida baland)';
    ruleExplanationUz =
      "So'zning 1-bo'g'ini past, keyingi bo'g'inlari baland bo'ladi. Ammo so'z tugagach, yuklamada (masalan: ga yoki o) ohang birdan pastga tushadi.";
  } else {
    pitchType = 'nakadaka';
    pitchTypeNameUz = "Nakadaka (中高型 - O'rtasida baland)";
    ruleExplanationUz = `Ohang 1-bo'g'inda past boshlanib ko'tariladi va ${patternNumber}-bo'g'inda cho'qqiga chiqib, keyingi bo'g'inda pastga tushadi.`;
  }

  // Generate MoraPitch array
  const morae: MoraPitch[] = moraeStrings.map((mora, idx) => {
    const moraIndex = idx + 1; // 1-based
    let isHigh = false;
    let isDrop = false;

    if (patternNumber === 0) {
      // Heiban: 1st low, rest high
      isHigh = moraIndex > 1;
    } else if (patternNumber === 1) {
      // Atamadaka: 1st high, rest low
      isHigh = moraIndex === 1;
      isDrop = moraIndex === 1;
    } else {
      // Nakadaka or Odaka: 1st low, rises until patternNumber, then drops
      isHigh = moraIndex > 1 && moraIndex <= patternNumber;
      isDrop = moraIndex === patternNumber;
    }

    return {
      mora,
      isHigh,
      isDrop,
    };
  });

  const pitchFormula = morae.map((m) => (m.isHigh ? 'H' : 'L')).join('-');

  return {
    word,
    reading,
    romaji: romajiLabel || reading,
    pitchType,
    pitchTypeNameUz,
    pitchPatternNumber: patternNumber,
    morae,
    pitchFormula,
    ruleExplanationUz,
  };
}

export class PitchAccentService {
  /**
   * Retrieves accurate Pitch Accent metadata for a Japanese word.
   */
  static getPitchAccent(word: string, kanaHint?: string): PitchAccentInfo {
    const cleanWord = word.trim().replace(/[[\]()（）]/g, '');
    const cleanKana = (kanaHint || cleanWord).replace(/[[\]()（）]/g, '');

    // Check exact word or kana in dictionary
    if (JLPT_PITCH_DICTIONARY[cleanWord]) {
      const entry = JLPT_PITCH_DICTIONARY[cleanWord];
      return buildPitchAccentInfo(cleanWord, entry.reading, entry.pattern, entry.romaji);
    }
    if (JLPT_PITCH_DICTIONARY[cleanKana]) {
      const entry = JLPT_PITCH_DICTIONARY[cleanKana];
      return buildPitchAccentInfo(cleanWord, entry.reading, entry.pattern, entry.romaji);
    }

    // Algorithmic Fallback
    const morae = splitIntoMorae(cleanKana);
    let inferredPattern = 0;

    if (cleanKana.endsWith('い') && morae.length >= 3) {
      inferredPattern = morae.length - 1;
    } else if (/[ァ-ン]/.test(cleanKana) && morae.length >= 3) {
      inferredPattern = Math.max(1, morae.length - 2);
    }

    return buildPitchAccentInfo(cleanWord, cleanKana, inferredPattern);
  }

  /**
   * Extracts recognized pitch words from a sentence or phrase.
   */
  static findPitchAccentsInText(text: string): PitchAccentInfo[] {
    const results: PitchAccentInfo[] = [];
    const keys = Object.keys(JLPT_PITCH_DICTIONARY);

    for (const key of keys) {
      if (text.includes(key)) {
        results.push(this.getPitchAccent(key));
      }
    }

    return results;
  }
}
