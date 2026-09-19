/**
 * PitchAccentService.ts
 * Japanese Pitch Accent (高低アクセント - Tokyo Standard) Lexical & Analytical Engine.
 * Supports mora-by-mora segmentation, downstep detection, pitch curve mapping,
 * minimal pair contrasts (homophones with pitch difference), and pedagogical explanations for JLPT learners.
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
  kanji?: string;
  meaningUz?: string;
  pitchType: PitchType;
  pitchTypeNameUz: string;
  pitchPatternNumber: number; // 0 for heiban, 1 for atamadaka, 2.. for nakadaka/odaka
  morae: MoraPitch[];
  pitchFormula: string; // e.g. "L-H-H" or "H-L"
  ruleExplanationUz: string;
}

export interface PitchMinimalPair {
  id: string;
  reading: string;
  word1: {
    kanji: string;
    meaningUz: string;
    pattern: number;
    pitchType: PitchType;
    formula: string;
  };
  word2: {
    kanji: string;
    meaningUz: string;
    pattern: number;
    pitchType: PitchType;
    formula: string;
  };
  contrastExplanationUz: string;
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
export interface DictEntry {
  reading: string;
  pattern: number; // 0: heiban, 1: atamadaka, >=2: nakadaka or odaka
  romaji: string;
  kanji?: string;
  meaningUz?: string;
}

export const PITCH_MINIMAL_PAIRS: PitchMinimalPair[] = [
  {
    id: 'ame',
    reading: 'あめ',
    word1: {
      kanji: '雨',
      meaningUz: "Yomg'ir 🌧️",
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '飴',
      meaningUz: 'Konfet / Shirinlik 🍬',
      pattern: 0,
      pitchType: 'heiban',
      formula: 'L-H (Tekis, yuklama ham baland)',
    },
    contrastExplanationUz:
      "«雨» (yomg'ir) so'zida birinchi «A» bo'g'ini baland, «me» past [①]. «飴» (konfet)da esa «a» past, «ME» ko'tarilib tekis davom etadi [⓪].",
  },
  {
    id: 'hashi',
    reading: 'はし',
    word1: {
      kanji: '箸',
      meaningUz: "Ovqat cho'pi 🥢",
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '橋',
      meaningUz: "Ko'prik 🌉",
      pattern: 2,
      pitchType: 'odaka',
      formula: 'L-H (Oxirida baland, yuklamada tushadi)',
    },
    contrastExplanationUz:
      "«箸» (cho'p) so'zida ohang boshidan pastga tushadi [①]. «橋» (ko'prik)da oxirgi bo'g'in baland bo'lib, «ga» yuklamasi bilan tushadi [②].",
  },
  {
    id: 'hana',
    reading: 'はな',
    word1: {
      kanji: '花',
      meaningUz: 'Gul 🌸',
      pattern: 2,
      pitchType: 'odaka',
      formula: 'L-H (Oxirida baland, yuklamada tushadi)',
    },
    word2: {
      kanji: '鼻',
      meaningUz: 'Burun 👃',
      pattern: 0,
      pitchType: 'heiban',
      formula: 'L-H (Tekis, yuklama ham baland)',
    },
    contrastExplanationUz:
      'Ikkalasi ham «ha-NA» shaklida aytiladi. Farqi: «花» (gul)dan keyin «ga» kelganda pastga tushadi (ha-NA-ga↓), «鼻» (burun)da esa yuklama ham baland qoladi.',
  },
  {
    id: 'kumo',
    reading: 'くも',
    word1: {
      kanji: '雲',
      meaningUz: 'Bulut ☁️',
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '蜘蛛',
      meaningUz: "O'rgimchak 🕷️",
      pattern: 0,
      pitchType: 'heiban',
      formula: 'L-H (Tekis)',
    },
    contrastExplanationUz:
      "«雲» (bulut) boshida baland aytiladi (KU-mo) [①]. «蜘蛛» (o'rgimchak) esa tekis ko'tariladi (ku-MO) [⓪].",
  },
  {
    id: 'kaki',
    reading: 'かき',
    word1: {
      kanji: '牡蠣',
      meaningUz: 'Ustritsa (dengiz mahsuloti) 🦪',
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '柿',
      meaningUz: 'Xurmo (meva) 🍊',
      pattern: 0,
      pitchType: 'heiban',
      formula: 'L-H (Tekis)',
    },
    contrastExplanationUz:
      "«牡蠣» (ustritsa) so'zida birinchi bo'g'in baland (KA-ki) [①]. «柿» (xurmo) so'zida esa ikkinchi bo'g'in baland (ka-KI) [⓪].",
  },
  {
    id: 'kami',
    reading: 'かみ',
    word1: {
      kanji: '神',
      meaningUz: 'Xudo / Tangri ⛩️',
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '紙',
      meaningUz: "Qog'oz 📄",
      pattern: 2,
      pitchType: 'odaka',
      formula: 'L-H (Oxirida baland)',
    },
    contrastExplanationUz:
      "«神» (tangri) «KA-mi» shaklida boshlanadi [①]. «紙» (qog'oz) esa «ka-MI» shaklida aytiladi [②].",
  },
  {
    id: 'sake',
    reading: 'さけ',
    word1: {
      kanji: '鮭',
      meaningUz: "Losos balig'i 🐟",
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '酒',
      meaningUz: 'Sake (ichimlik) 🍶',
      pattern: 0,
      pitchType: 'heiban',
      formula: 'L-H (Tekis)',
    },
    contrastExplanationUz:
      "«鮭» (losos) so'zida «SA-ke» (birinchi bo'g'in baland) [①]. «酒» (sake) so'zida esa «sa-KE» (tekis ko'tariladi) [⓪].",
  },
  {
    id: 'aki',
    reading: 'あき',
    word1: {
      kanji: '秋',
      meaningUz: 'Kuz (fasl) 🍂',
      pattern: 1,
      pitchType: 'atamadaka',
      formula: 'H-L (Boshida baland)',
    },
    word2: {
      kanji: '空き',
      meaningUz: "Bo'sh joy / Xona 🚪",
      pattern: 0,
      pitchType: 'heiban',
      formula: 'L-H (Tekis)',
    },
    contrastExplanationUz:
      "«秋» (kuz) «A-ki» shaklida boshlanadi [①]. «空き» (bo'sh joy) esa «a-KI» bo'ladi [⓪].",
  },
];

export const JLPT_PITCH_DICTIONARY: Record<string, DictEntry> = {
  あめ: {
    reading: 'あめ',
    pattern: 1,
    romaji: 'ame',
    kanji: '雨',
    meaningUz: "Yomg'ir",
  },
  はし: {
    reading: 'はし',
    pattern: 1,
    romaji: 'hashi',
    kanji: '箸',
    meaningUz: "Ovqat cho'pi",
  },
  はな: {
    reading: 'はな',
    pattern: 2,
    romaji: 'hana',
    kanji: '花',
    meaningUz: 'Gul',
  },
  くも: {
    reading: 'くも',
    pattern: 1,
    romaji: 'kumo',
    kanji: '雲',
    meaningUz: 'Bulut',
  },
  かき: {
    reading: 'かき',
    pattern: 0,
    romaji: 'kaki',
    kanji: '柿',
    meaningUz: 'Xurmo',
  },
  かみ: {
    reading: 'かみ',
    pattern: 2,
    romaji: 'kami',
    kanji: '紙',
    meaningUz: "Qog'oz",
  },
  さけ: {
    reading: 'さけ',
    pattern: 0,
    romaji: 'sake',
    kanji: '酒',
    meaningUz: 'Sake (ichimlik)',
  },
  あき: {
    reading: 'あき',
    pattern: 1,
    romaji: 'aki',
    kanji: '秋',
    meaningUz: 'Kuz',
  },
  いし: {
    reading: 'いし',
    pattern: 2,
    romaji: 'ishi',
    kanji: '石',
    meaningUz: 'Tosh',
  },
  にじ: {
    reading: 'にじ',
    pattern: 0,
    romaji: 'niji',
    kanji: '虹',
    meaningUz: 'Kamalak',
  },
  ほん: {
    reading: 'ほん',
    pattern: 1,
    romaji: 'hon',
    kanji: '本',
    meaningUz: 'Kitob',
  },
  ねこ: {
    reading: 'ねこ',
    pattern: 1,
    romaji: 'neko',
    kanji: '猫',
    meaningUz: 'Mushuk',
  },
  いぬ: {
    reading: 'いぬ',
    pattern: 2,
    romaji: 'inu',
    kanji: '犬',
    meaningUz: 'It',
  },
  とり: {
    reading: 'とり',
    pattern: 0,
    romaji: 'tori',
    kanji: '鳥',
    meaningUz: 'Qush',
  },
  さかな: {
    reading: 'さかな',
    pattern: 0,
    romaji: 'sakana',
    kanji: '魚',
    meaningUz: 'Baliq',
  },
  にく: {
    reading: 'にく',
    pattern: 2,
    romaji: 'niku',
    kanji: '肉',
    meaningUz: "Go'sht",
  },
  やさい: {
    reading: 'やさい',
    pattern: 0,
    romaji: 'yasai',
    kanji: '野菜',
    meaningUz: 'Sabzavot',
  },
  くだもの: {
    reading: 'くだもの',
    pattern: 2,
    romaji: 'kudamono',
    kanji: '果物',
    meaningUz: 'Meva',
  },
  たまご: {
    reading: 'たまご',
    pattern: 2,
    romaji: 'tamago',
    kanji: '卵',
    meaningUz: 'Tuxum',
  },
  ごはん: {
    reading: 'ごはん',
    pattern: 1,
    romaji: 'gohan',
    kanji: 'ご飯',
    meaningUz: 'Guruch / Ovqat',
  },
  あさごはん: {
    reading: 'あさごはん',
    pattern: 3,
    romaji: 'asagohan',
    kanji: '朝ご飯',
    meaningUz: 'Nonushta',
  },
  ひるごはん: {
    reading: 'ひるごはん',
    pattern: 3,
    romaji: 'hirugohan',
    kanji: '昼ご飯',
    meaningUz: 'Tushlik',
  },
  ばんごはん: {
    reading: 'ばんごはん',
    pattern: 3,
    romaji: 'bangohan',
    kanji: '晩ご飯',
    meaningUz: 'Kechki ovqat',
  },
  みず: {
    reading: 'みず',
    pattern: 0,
    romaji: 'mizu',
    kanji: '水',
    meaningUz: 'Suv',
  },
  おちゃ: {
    reading: 'おちゃ',
    pattern: 0,
    romaji: 'ocha',
    kanji: 'お茶',
    meaningUz: 'Choy',
  },
  やま: {
    reading: 'やま',
    pattern: 2,
    romaji: 'yama',
    kanji: '山',
    meaningUz: "Tog'",
  },
  かわ: {
    reading: 'かわ',
    pattern: 2,
    romaji: 'kawa',
    kanji: '川',
    meaningUz: 'Daryo',
  },
  うみ: {
    reading: 'うみ',
    pattern: 1,
    romaji: 'umi',
    kanji: '海',
    meaningUz: 'Dengiz',
  },
  そら: {
    reading: 'そら',
    pattern: 1,
    romaji: 'sora',
    kanji: '空',
    meaningUz: 'Osmon',
  },
  つき: {
    reading: 'つき',
    pattern: 2,
    romaji: 'tsuki',
    kanji: '月',
    meaningUz: 'Oy',
  },
  ほし: {
    reading: 'ほし',
    pattern: 0,
    romaji: 'hoshi',
    kanji: '星',
    meaningUz: 'Yulduz',
  },
  たいよう: {
    reading: 'たいよう',
    pattern: 1,
    romaji: 'taiyou',
    kanji: '太陽',
    meaningUz: 'Quyosh',
  },
  かぜ: {
    reading: 'かぜ',
    pattern: 0,
    romaji: 'kaze',
    kanji: '風',
    meaningUz: 'Shamol',
  },
  ゆき: {
    reading: 'ゆき',
    pattern: 2,
    romaji: 'yuki',
    kanji: '雪',
    meaningUz: 'Qor',
  },
  き: {
    reading: 'き',
    pattern: 1,
    romaji: 'ki',
    kanji: '木',
    meaningUz: 'Daraxt',
  },
  さくら: {
    reading: 'さくら',
    pattern: 0,
    romaji: 'sakura',
    kanji: '桜',
    meaningUz: 'Sakura',
  },
  ひと: {
    reading: 'ひと',
    pattern: 2,
    romaji: 'hito',
    kanji: '人',
    meaningUz: 'Inson',
  },
  かぞく: {
    reading: 'かぞく',
    pattern: 1,
    romaji: 'kazoku',
    kanji: '家族',
    meaningUz: 'Oila',
  },
  ちち: {
    reading: 'ちち',
    pattern: 2,
    romaji: 'chichi',
    kanji: '父',
    meaningUz: 'Otam',
  },
  はは: {
    reading: 'はは',
    pattern: 1,
    romaji: 'haha',
    kanji: '母',
    meaningUz: 'Onam',
  },
  あに: {
    reading: 'あに',
    pattern: 1,
    romaji: 'ani',
    kanji: '兄',
    meaningUz: 'Akam',
  },
  あね: {
    reading: 'あね',
    pattern: 0,
    romaji: 'ane',
    kanji: '姉',
    meaningUz: 'Opam',
  },
  おとうと: {
    reading: 'おとうと',
    pattern: 4,
    romaji: 'otouto',
    kanji: '弟',
    meaningUz: 'Ukam',
  },
  いもうと: {
    reading: 'いもうと',
    pattern: 4,
    romaji: 'imouto',
    kanji: '妹',
    meaningUz: 'Singlim',
  },
  こども: {
    reading: 'こども',
    pattern: 0,
    romaji: 'kodomo',
    kanji: '子供',
    meaningUz: 'Bola',
  },
  おとこ: {
    reading: 'おとこ',
    pattern: 3,
    romaji: 'otoko',
    kanji: '男',
    meaningUz: 'Erkak',
  },
  おんな: {
    reading: 'おんな',
    pattern: 3,
    romaji: 'onna',
    kanji: '女',
    meaningUz: 'Ayol',
  },
  ともだち: {
    reading: 'ともだち',
    pattern: 0,
    romaji: 'tomodachi',
    kanji: '友達',
    meaningUz: "Do'st",
  },
  せんせい: {
    reading: 'せんせい',
    pattern: 3,
    romaji: 'sensei',
    kanji: '先生',
    meaningUz: "O'qituvchi",
  },
  がくせい: {
    reading: 'がくせい',
    pattern: 0,
    romaji: 'gakusei',
    kanji: '学生',
    meaningUz: 'Talaba',
  },
  がっこう: {
    reading: 'がっこう',
    pattern: 0,
    romaji: 'gakkou',
    kanji: '学校',
    meaningUz: 'Maktab',
  },
  だいがく: {
    reading: 'だいがく',
    pattern: 0,
    romaji: 'daigaku',
    kanji: '大学',
    meaningUz: 'Universitet',
  },
  きょうしつ: {
    reading: 'きょうしつ',
    pattern: 0,
    romaji: 'kyoushitsu',
    kanji: '教室',
    meaningUz: 'Sinfxona',
  },
  かいしゃ: {
    reading: 'かいしゃ',
    pattern: 0,
    romaji: 'kaisha',
    kanji: '会社',
    meaningUz: 'Kompaniya',
  },
  しごと: {
    reading: 'しごと',
    pattern: 0,
    romaji: 'shigoto',
    kanji: '仕事',
    meaningUz: 'Ish',
  },
  いしゃ: {
    reading: 'いしゃ',
    pattern: 0,
    romaji: 'isha',
    kanji: '医者',
    meaningUz: 'Shifokor',
  },
  ぎんこう: {
    reading: 'ぎんこう',
    pattern: 0,
    romaji: 'ginkou',
    kanji: '銀行',
    meaningUz: 'Bank',
  },
  びょういん: {
    reading: 'びょういん',
    pattern: 0,
    romaji: 'byouin',
    kanji: '病院',
    meaningUz: 'Kasalxona',
  },
  えき: {
    reading: 'えき',
    pattern: 1,
    romaji: 'eki',
    kanji: '駅',
    meaningUz: 'Stantsiya',
  },
  こうえん: {
    reading: 'こうえん',
    pattern: 0,
    romaji: 'kouen',
    kanji: '公園',
    meaningUz: "Park / Bog'",
  },
  くうこう: {
    reading: 'くうこう',
    pattern: 0,
    romaji: 'kuukou',
    kanji: '空港',
    meaningUz: 'Aeroport',
  },
  ホテル: {
    reading: 'ホテル',
    pattern: 1,
    romaji: 'hoteru',
    meaningUz: 'Mehmonxona',
  },
  くるま: {
    reading: 'くるま',
    pattern: 0,
    romaji: 'kuruma',
    kanji: '車',
    meaningUz: 'Mashina',
  },
  でんしゃ: {
    reading: 'でんしゃ',
    pattern: 0,
    romaji: 'densha',
    kanji: '電車',
    meaningUz: 'Poyezd',
  },
  じてんしゃ: {
    reading: 'じてんしゃ',
    pattern: 2,
    romaji: 'jitensha',
    kanji: '自転車',
    meaningUz: 'Velosiped',
  },
  ひこうき: {
    reading: 'ひこうき',
    pattern: 2,
    romaji: 'hikouki',
    kanji: '飛行機',
    meaningUz: 'Samolyot',
  },
  ちかてつ: {
    reading: 'ちかてつ',
    pattern: 0,
    romaji: 'chikatetsu',
    kanji: '地下鉄',
    meaningUz: 'Metro',
  },
  バス: {
    reading: 'バス',
    pattern: 1,
    romaji: 'basu',
    meaningUz: 'Avtobus',
  },
  タクシー: {
    reading: 'タクシー',
    pattern: 1,
    romaji: 'takushii',
    meaningUz: 'Taksi',
  },
  パソコン: {
    reading: 'パソコン',
    pattern: 0,
    romaji: 'pasokon',
    meaningUz: 'Kompyuter',
  },
  スマホ: {
    reading: 'スマホ',
    pattern: 0,
    romaji: 'sumaho',
    meaningUz: 'Smartfon',
  },
  でんわ: {
    reading: 'でんわ',
    pattern: 0,
    romaji: 'denwa',
    kanji: '電話',
    meaningUz: 'Telefon',
  },
  テレビ: {
    reading: 'テレビ',
    pattern: 1,
    romaji: 'terebi',
    meaningUz: 'Televizor',
  },
  カメラ: {
    reading: 'カメラ',
    pattern: 1,
    romaji: 'kamera',
    meaningUz: 'Kamera',
  },
  じかん: {
    reading: 'じかん',
    pattern: 0,
    romaji: 'jikan',
    kanji: '時間',
    meaningUz: 'Vaqt',
  },
  いま: {
    reading: 'いま',
    pattern: 1,
    romaji: 'ima',
    kanji: '今',
    meaningUz: 'Hozir',
  },
  きょう: {
    reading: 'きょう',
    pattern: 1,
    romaji: 'kyou',
    kanji: '今日',
    meaningUz: 'Bugun',
  },
  あした: {
    reading: 'あした',
    pattern: 3,
    romaji: 'ashita',
    kanji: '明日',
    meaningUz: 'Ertaga',
  },
  きのう: {
    reading: 'きのう',
    pattern: 2,
    romaji: 'kinou',
    kanji: '昨日',
    meaningUz: 'Kecha',
  },
  あさ: {
    reading: 'あさ',
    pattern: 1,
    romaji: 'asa',
    kanji: '朝',
    meaningUz: 'Ertalab',
  },
  ひる: {
    reading: 'ひる',
    pattern: 2,
    romaji: 'hiru',
    kanji: '昼',
    meaningUz: 'Kunduz',
  },
  よる: {
    reading: 'よる',
    pattern: 1,
    romaji: 'yoru',
    kanji: '夜',
    meaningUz: 'Kechasi',
  },
  まいにち: {
    reading: 'まいにち',
    pattern: 1,
    romaji: 'mainichi',
    kanji: '毎日',
    meaningUz: 'Har kuni',
  },
  まいあさ: {
    reading: 'まいあさ',
    pattern: 0,
    romaji: 'maiasa',
    kanji: '毎朝',
    meaningUz: 'Har tong',
  },
  はる: {
    reading: 'はる',
    pattern: 1,
    romaji: 'haru',
    kanji: '春',
    meaningUz: 'Bahor',
  },
  なつ: {
    reading: 'なつ',
    pattern: 2,
    romaji: 'natsu',
    kanji: '夏',
    meaningUz: 'Yoz',
  },
  ふゆ: {
    reading: 'ふゆ',
    pattern: 2,
    romaji: 'fuyu',
    kanji: '冬',
    meaningUz: 'Qish',
  },
  たべる: {
    reading: 'たべる',
    pattern: 2,
    romaji: 'taberu',
    kanji: '食べる',
    meaningUz: 'Yemoq',
  },
  のむ: {
    reading: 'のむ',
    pattern: 1,
    romaji: 'nomu',
    kanji: '飲む',
    meaningUz: 'Ichmoq',
  },
  いく: {
    reading: 'いく',
    pattern: 0,
    romaji: 'iku',
    kanji: '行く',
    meaningUz: 'Bormoq',
  },
  くる: {
    reading: 'くる',
    pattern: 1,
    romaji: 'kuru',
    kanji: '来る',
    meaningUz: 'Kelmoq',
  },
  かえる: {
    reading: 'かえる',
    pattern: 1,
    romaji: 'kaeru',
    kanji: '帰る',
    meaningUz: 'Qaytmoq',
  },
  みる: {
    reading: 'みる',
    pattern: 1,
    romaji: 'miru',
    kanji: '見る',
    meaningUz: "Ko'rmoq",
  },
  きく: {
    reading: 'きく',
    pattern: 0,
    romaji: 'kiku',
    kanji: '聞く',
    meaningUz: "Eshitmoq / So'ramoq",
  },
  はなす: {
    reading: 'はなす',
    pattern: 2,
    romaji: 'hanasu',
    kanji: '話す',
    meaningUz: 'Gapirmoq',
  },
  よむ: {
    reading: 'よむ',
    pattern: 1,
    romaji: 'yomu',
    kanji: '読む',
    meaningUz: "O'qimoq",
  },
  かく: {
    reading: 'かく',
    pattern: 1,
    romaji: 'kaku',
    kanji: '書く',
    meaningUz: 'Yozmoq',
  },
  かう: {
    reading: 'かう',
    pattern: 0,
    romaji: 'kau',
    kanji: '買う',
    meaningUz: 'Sotib olmoq',
  },
  まつ: {
    reading: 'まつ',
    pattern: 1,
    romaji: 'matsu',
    kanji: '待つ',
    meaningUz: 'Kutmoq',
  },
  とる: {
    reading: 'とる',
    pattern: 1,
    romaji: 'toru',
    kanji: '取る',
    meaningUz: 'Olmoq',
  },
  つくる: {
    reading: 'つくる',
    pattern: 2,
    romaji: 'tsukuru',
    kanji: '作る',
    meaningUz: 'Tayyorlamoq / Yasamoq',
  },
  およぐ: {
    reading: 'およぐ',
    pattern: 2,
    romaji: 'oyogu',
    kanji: '泳ぐ',
    meaningUz: 'Suzmoq',
  },
  あそぶ: {
    reading: 'あそぶ',
    pattern: 0,
    romaji: 'asobu',
    kanji: '遊ぶ',
    meaningUz: "O'ynamoq",
  },
  はしる: {
    reading: 'はしる',
    pattern: 2,
    romaji: 'hashiru',
    kanji: '走る',
    meaningUz: 'Yugurmoq',
  },
  あるく: {
    reading: 'あるく',
    pattern: 2,
    romaji: 'aruku',
    kanji: '歩く',
    meaningUz: 'Piyoda yurmoq',
  },
  たつ: {
    reading: 'たつ',
    pattern: 1,
    romaji: 'tatsu',
    kanji: '立つ',
    meaningUz: 'Turmoq',
  },
  すわる: {
    reading: 'すわる',
    pattern: 0,
    romaji: 'suwaru',
    kanji: '座る',
    meaningUz: "O'tirmoq",
  },
  ねる: {
    reading: 'ねる',
    pattern: 0,
    romaji: 'neru',
    kanji: '寝る',
    meaningUz: 'Uxlamoq',
  },
  おきる: {
    reading: 'おきる',
    pattern: 2,
    romaji: 'okiru',
    kanji: '起きる',
    meaningUz: "Uyg'onmoq",
  },
  はいる: {
    reading: 'はいる',
    pattern: 1,
    romaji: 'hairu',
    kanji: '入る',
    meaningUz: 'Kirmoq',
  },
  でる: {
    reading: 'でる',
    pattern: 1,
    romaji: 'deru',
    kanji: '出る',
    meaningUz: 'Chiqmoq',
  },
  あける: {
    reading: 'あける',
    pattern: 0,
    romaji: 'akeru',
    kanji: '開ける',
    meaningUz: 'Ochmoq',
  },
  しめる: {
    reading: 'しめる',
    pattern: 2,
    romaji: 'shimeru',
    kanji: '閉める',
    meaningUz: 'Yopmoq',
  },
  つける: {
    reading: 'つける',
    pattern: 2,
    romaji: 'tsukeru',
    kanji: '点ける',
    meaningUz: 'Yoqmoq',
  },
  けす: {
    reading: 'けす',
    pattern: 0,
    romaji: 'kesu',
    kanji: '消す',
    meaningUz: "O'chirmoq",
  },
  おしえる: {
    reading: 'おしえる',
    pattern: 0,
    romaji: 'oshieru',
    kanji: '教える',
    meaningUz: "O'rgatmoq",
  },
  ならう: {
    reading: 'ならう',
    pattern: 2,
    romaji: 'narau',
    kanji: '習う',
    meaningUz: "O'rganmoq",
  },
  わすれる: {
    reading: 'わすれる',
    pattern: 0,
    romaji: 'wasureru',
    kanji: '忘れる',
    meaningUz: 'Unutmoq',
  },
  おぼえる: {
    reading: 'おぼえる',
    pattern: 3,
    romaji: 'oboeru',
    kanji: '覚える',
    meaningUz: 'Eslab qolmoq',
  },
  はじめる: {
    reading: 'はじめる',
    pattern: 0,
    romaji: 'hajimeru',
    kanji: '始める',
    meaningUz: 'Boshlamoq',
  },
  おわる: {
    reading: 'おわる',
    pattern: 0,
    romaji: 'owaru',
    kanji: '終わる',
    meaningUz: 'Tugamoq',
  },
  てつだう: {
    reading: 'てつだう',
    pattern: 3,
    romaji: 'tetsudau',
    kanji: '手伝う',
    meaningUz: 'Yordam bermoq',
  },
  はたらく: {
    reading: 'はたらく',
    pattern: 0,
    romaji: 'hataraku',
    kanji: '働く',
    meaningUz: 'Ishlamoq',
  },
  やすむ: {
    reading: 'やすむ',
    pattern: 2,
    romaji: 'yasumu',
    kanji: '休む',
    meaningUz: 'Dam olmoq',
  },
  かりる: {
    reading: 'かりる',
    pattern: 0,
    romaji: 'kariru',
    kanji: '借りる',
    meaningUz: 'Qarz olmoq',
  },
  かす: {
    reading: 'かす',
    pattern: 0,
    romaji: 'kasu',
    kanji: '貸す',
    meaningUz: 'Qarz bermoq',
  },
  おおきい: {
    reading: 'おおきい',
    pattern: 3,
    romaji: 'ookii',
    kanji: '大きい',
    meaningUz: 'Katta',
  },
  ちいさい: {
    reading: 'ちいさい',
    pattern: 3,
    romaji: 'chiisai',
    kanji: '小さい',
    meaningUz: 'Kichik',
  },
  たかい: {
    reading: 'たかい',
    pattern: 2,
    romaji: 'takai',
    kanji: '高い',
    meaningUz: 'Baland / Qimmat',
  },
  やすい: {
    reading: 'やすい',
    pattern: 2,
    romaji: 'yasui',
    kanji: '安い',
    meaningUz: 'Arzon',
  },
  あたらしい: {
    reading: 'あたらしい',
    pattern: 4,
    romaji: 'atarashii',
    kanji: '新しい',
    meaningUz: 'Yangi',
  },
  ふるい: {
    reading: 'ふるい',
    pattern: 2,
    romaji: 'furui',
    kanji: '古い',
    meaningUz: 'Eski',
  },
  いい: {
    reading: 'いい',
    pattern: 1,
    romaji: 'ii',
    kanji: '良い',
    meaningUz: 'Yaxshi',
  },
  わるい: {
    reading: 'わるい',
    pattern: 2,
    romaji: 'warui',
    kanji: '悪い',
    meaningUz: 'Yomon',
  },
  あつい: {
    reading: 'あつい',
    pattern: 2,
    romaji: 'atsui',
    kanji: '暑い',
    meaningUz: 'Issiq',
  },
  さむい: {
    reading: 'さむい',
    pattern: 2,
    romaji: 'samui',
    kanji: '寒い',
    meaningUz: 'Sovuq',
  },
  つめたい: {
    reading: 'つめたい',
    pattern: 0,
    romaji: 'tsumetai',
    kanji: '冷たい',
    meaningUz: 'Muzdek',
  },
  あたたかい: {
    reading: 'あたたかい',
    pattern: 4,
    romaji: 'atatakai',
    kanji: '温かい',
    meaningUz: 'Iliq',
  },
  すずしい: {
    reading: 'すずしい',
    pattern: 3,
    romaji: 'suzushii',
    kanji: '涼しい',
    meaningUz: 'Salqin',
  },
  おいしい: {
    reading: 'おいしい',
    pattern: 3,
    romaji: 'oishii',
    kanji: '美味しい',
    meaningUz: 'Mazali',
  },
  たのしい: {
    reading: 'たのしい',
    pattern: 3,
    romaji: 'tanoshii',
    kanji: '楽しい',
    meaningUz: 'Quvnoq',
  },
  おもしろい: {
    reading: 'おもしろい',
    pattern: 4,
    romaji: 'omoshiroi',
    kanji: '面白い',
    meaningUz: 'Qiziqarli',
  },
  つまらない: {
    reading: 'つまらない',
    pattern: 3,
    romaji: 'tsumaranai',
    meaningUz: 'Zerikarli',
  },
  いそがしい: {
    reading: 'いそがしい',
    pattern: 4,
    romaji: 'isogashii',
    kanji: '忙しい',
    meaningUz: 'Band',
  },
  むずかしい: {
    reading: 'むずかしい',
    pattern: 4,
    romaji: 'muzukashii',
    kanji: '難しい',
    meaningUz: 'Qiyin',
  },
  やさしい: {
    reading: 'やさしい',
    pattern: 0,
    romaji: 'yasashii',
    kanji: '優しい',
    meaningUz: 'Oson / Mehribon',
  },
  げんき: {
    reading: 'げんき',
    pattern: 1,
    romaji: 'genki',
    kanji: '元気',
    meaningUz: "Tetik / Sog'lom",
  },
  しずか: {
    reading: 'しずか',
    pattern: 1,
    romaji: 'shizuka',
    kanji: '静か',
    meaningUz: 'Tinch',
  },
  にぎやか: {
    reading: 'にぎやか',
    pattern: 2,
    romaji: 'nigiyaka',
    kanji: '賑やか',
    meaningUz: 'Gavjum',
  },
  きれい: {
    reading: 'きれい',
    pattern: 1,
    romaji: 'kirei',
    kanji: '綺麗',
    meaningUz: 'Chiroyli / Toza',
  },
  べんり: {
    reading: 'べんり',
    pattern: 1,
    romaji: 'benri',
    kanji: '便利',
    meaningUz: 'Qulay',
  },
  すき: {
    reading: 'すき',
    pattern: 2,
    romaji: 'suki',
    kanji: '好き',
    meaningUz: 'Yoqimli',
  },
  きらい: {
    reading: 'きらい',
    pattern: 0,
    romaji: 'kirai',
    kanji: '嫌い',
    meaningUz: 'Yoqimsiz',
  },
  じょうず: {
    reading: 'じょうず',
    pattern: 3,
    romaji: 'jouzu',
    kanji: '上手',
    meaningUz: 'Mohir',
  },
  へた: {
    reading: 'へた',
    pattern: 2,
    romaji: 'heta',
    kanji: '下手',
    meaningUz: "No'noq",
  },
  ありがとう: {
    reading: 'ありがとう',
    pattern: 2,
    romaji: 'arigatou',
    meaningUz: 'Rahmat',
  },
  こんにちは: {
    reading: 'こんにちは',
    pattern: 0,
    romaji: 'konnichiwa',
    meaningUz: 'Assalomu alaykum',
  },
  こんばんは: {
    reading: 'こんばんは',
    pattern: 0,
    romaji: 'konbanwa',
    meaningUz: 'Xayrli kech',
  },
  おはよう: {
    reading: 'おはよう',
    pattern: 0,
    romaji: 'ohayou',
    meaningUz: 'Xayrli tong',
  },
  さようなら: {
    reading: 'さようなら',
    pattern: 5,
    romaji: 'sayounara',
    meaningUz: 'Xayr',
  },
  すみません: {
    reading: 'すみません',
    pattern: 4,
    romaji: 'sumimasen',
    meaningUz: 'Kechirasiz',
  },
  ごめんなさい: {
    reading: 'ごめんなさい',
    pattern: 5,
    romaji: 'gomennasai',
    meaningUz: 'Kechirasiz / Uzr',
  },
  おねがい: {
    reading: 'おねがい',
    pattern: 0,
    romaji: 'onegai',
    meaningUz: 'Iltimos',
  },
  よろしく: {
    reading: 'よろしく',
    pattern: 0,
    romaji: 'yoroshiku',
    meaningUz: 'Yordamingizga umid qilaman',
  },
  どうぞ: {
    reading: 'どうぞ',
    pattern: 1,
    romaji: 'douzo',
    meaningUz: 'Marhamat',
  },
  どうも: {
    reading: 'どうも',
    pattern: 1,
    romaji: 'doumo',
    meaningUz: 'Katta rahmat',
  },
  はじめまして: {
    reading: 'はじめまして',
    pattern: 4,
    romaji: 'hajimemashite',
    meaningUz: 'Tanishganimdan xursandman',
  },
  いただきます: {
    reading: 'いただきます',
    pattern: 4,
    romaji: 'itadakimasu',
    meaningUz: 'Yoqimli ishtaha',
  },
  ごちそうさま: {
    reading: 'ごちそうさま',
    pattern: 4,
    romaji: 'gochisousama',
    meaningUz: 'Taom uchun tashakkur',
  },
  いってきます: {
    reading: 'いってきます',
    pattern: 4,
    romaji: 'ittekimasu',
    meaningUz: 'Men ketdim',
  },
  ただいま: {
    reading: 'ただいま',
    pattern: 4,
    romaji: 'tadaima',
    meaningUz: 'Men qaytdim',
  },
  おつかれさま: {
    reading: 'おつかれさま',
    pattern: 5,
    romaji: 'otsukaresama',
    meaningUz: 'Charchamang',
  },
  だいじょうぶ: {
    reading: 'だいじょうぶ',
    pattern: 3,
    romaji: 'daijoubu',
    kanji: '大丈夫',
    meaningUz: 'Hammasi yaxshi / Xavotir olmang',
  },
  にほん: {
    reading: 'にほん',
    pattern: 2,
    romaji: 'nihon',
    kanji: '日本',
    meaningUz: 'Yaponiya',
  },
  にほんご: {
    reading: 'にほんご',
    pattern: 0,
    romaji: 'nihongo',
    kanji: '日本語',
    meaningUz: 'Yapon tili',
  },
  えいご: {
    reading: 'えいご',
    pattern: 0,
    romaji: 'eigo',
    kanji: '英語',
    meaningUz: 'Ingliz tili',
  },
  べんきょう: {
    reading: 'べんきょう',
    pattern: 0,
    romaji: 'benkyou',
    kanji: '勉強',
    meaningUz: "O'qish / O'rganish",
  },
};

/**
 * Derives pitch curve and metadata for any word and pattern number.
 */
export function buildPitchAccentInfo(
  word: string,
  reading: string,
  patternNumber: number,
  romajiLabel?: string,
  kanjiLabel?: string,
  meaningUzLabel?: string,
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
      "Ushbu so'zda ohang 1-bo'g'inda past bo'lib, 2-bo'g'indan boshlab ko'tariladi va tekis yuqori qoladi. So'zdan keyin keladigan yuklamalar (ga, o, wa) ham yuqori ohangda davom etadi.";
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
    kanji: kanjiLabel,
    meaningUz: meaningUzLabel,
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
    const cleanWord = word.trim().replace(/[()[\]（）]/g, '');
    const cleanKana = (kanaHint || cleanWord).replace(/[()[\]（）]/g, '');

    // Check exact word or kana in dictionary
    if (JLPT_PITCH_DICTIONARY[cleanWord]) {
      const entry = JLPT_PITCH_DICTIONARY[cleanWord];
      return buildPitchAccentInfo(
        cleanWord,
        entry.reading,
        entry.pattern,
        entry.romaji,
        entry.kanji,
        entry.meaningUz,
      );
    }
    if (JLPT_PITCH_DICTIONARY[cleanKana]) {
      const entry = JLPT_PITCH_DICTIONARY[cleanKana];
      return buildPitchAccentInfo(
        cleanWord,
        entry.reading,
        entry.pattern,
        entry.romaji,
        entry.kanji,
        entry.meaningUz,
      );
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
   * Returns all verified words in dictionary
   */
  static getAllDictionaryWords(): PitchAccentInfo[] {
    return Object.keys(JLPT_PITCH_DICTIONARY).map((word) => this.getPitchAccent(word));
  }

  /**
   * Returns words grouped or filtered by Pitch Type
   */
  static getWordsByPitchType(type: PitchType): PitchAccentInfo[] {
    return this.getAllDictionaryWords().filter((w) => w.pitchType === type);
  }

  /**
   * Returns verified Minimal Pair homophones for contrastive training
   */
  static getMinimalPairs(): PitchMinimalPair[] {
    return PITCH_MINIMAL_PAIRS;
  }

  /**
   * Generates a random set of pitch quiz items
   */
  static getRandomPitchQuiz(count = 5): PitchAccentInfo[] {
    const all = this.getAllDictionaryWords();
    const shuffled = [...all].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
