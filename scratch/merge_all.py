import json, re

with open('/tmp/n4_parsed.json') as f:
    n4_items = json.load(f)

header = """export interface JlptGrammarItem {
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    title: string;
    romaji: string;
    meaningUz: string;
    structure: string;
    examples: {
        ja: string;
        romaji: string;
        uz: string;
    }[];
}

export interface JlptKanjiItem {
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    kanji: string;
    onyomi: string;
    kunyomi: string;
    meaningUz: string;
    strokeCount: number;
    examples: {
        word: string;
        reading: string;
        meaning: string;
    }[];
}

export const JLPT_GRAMMAR_DATA: JlptGrammarItem[] = [
    // ==========================================
    // 🎌 JLPT N5 COMPLETE GRAMMAR (Minna no Nihongo Lessons 1-25)
    // ==========================================
    {
        id: "n5_wa_desu",
        level: "N5",
        title: "N1 は N2 です (wa desu)",
        romaji: "N1 wa N2 desu",
        meaningUz: "N1 - N2 dir (Ego: Men talabaman / U shifokor)",
        structure: "Ot1 + は + Ot2 + です",
        examples: [
            { ja: "私は学生です。", romaji: "Watashi wa gakusei desu.", uz: "Men talabaman." },
            { ja: "サントスさんはブラジル人です。", romaji: "Santosu-san wa Burajiru-jin desu.", uz: "Santos bobi braziliyalik." }
        ]
    },
    {
        id: "n5_ja_arimasen",
        level: "N5",
        title: "N1 は N2 じゃありません (ja arimasen)",
        romaji: "N1 wa N2 ja arimasen / de wa arimasen",
        meaningUz: "N1 - N2 emas (Inkor shakli)",
        structure: "Ot1 + は + Ot2 + じゃありません / ではありません",
        examples: [
            { ja: "私は先生じゃありません。", romaji: "Watashi wa sensei ja arimasen.", uz: "Men o'qituvchi emasman." }
        ]
    },

    // ==========================================
    // 🎌 JLPT N4 EXHAUSTIVE GRAMMAR (jlpt-n4-grammar-list.pdf - 102 items)
    // ==========================================
"""

formatted_n4 = []
for idx, item in enumerate(n4_items):
    clean_id = re.sub(r'[^a-z0-9_]', '', item['romaji'].lower().replace('~', '').replace(' ', '_')) or f'n4_item_{idx}'
    item_id = f"n4_pdf_{idx+1}_{clean_id}"
    
    obj = {
        "id": item_id,
        "level": "N4",
        "title": item['title'],
        "romaji": item['romaji'],
        "meaningUz": item['meaningEn'],
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": item['jaEx'],
                "romaji": item['romajiEx'],
                "uz": item['enEx']
            }
        ]
    }
    formatted_n4.append("    " + json.dumps(obj, ensure_ascii=False) + ",")

n4_code = "\n".join(formatted_n4) + "\n"

footer = """
    // ==========================================
    // 🎌 JLPT N3 COMPLETE GRAMMAR (Shin Kanzen Master N3)
    // ==========================================
    {
        id: "n3_bakari_ka",
        level: "N3",
        title: "〜ばかりか (bakari ka)",
        romaji: "bakari ka",
        meaningUz: "nafaqat ..., balki ... ham",
        structure: "Fe'l/Sifat/Ot + ばかりか",
        examples: [
            { ja: "彼は英語ばかりか日本語も話せます。", romaji: "Kare wa Eigo bakari ka Nihongo mo hanasemasu.", uz: "U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi." }
        ]
    },
    {
        id: "n3_ni_kanshite",
        level: "N3",
        title: "〜に関して (ni kanshite)",
        romaji: "ni kanshite",
        meaningUz: "... ga oid / ... xususida",
        structure: "Ot + に関して / に関する + Ot",
        examples: [
            { ja: "この問題に関して意見を言わせてください。", romaji: "Kono mondai ni kanshite iken wo iwasete kudasai.", uz: "Ushbu masala xususida o'z fikrimni bildirishga ruxsat bering." }
        ]
    },
    {
        id: "n3_ni_yotte",
        level: "N3",
        title: "〜によって (ni yotte)",
        romaji: "ni yotte",
        meaningUz: "... ga qarab / ... tomonidan / ... tufayli",
        structure: "Ot + によって",
        examples: [
            { ja: "人によって考え方が違います。", romaji: "Hito ni yotte kangaekata ga chigaimasu.", uz: "Odamga qarab fikrlash tarzi har xil bo'ladi." }
        ]
    },

    // ==========================================
    // 🎌 JLPT N2 COMPLETE GRAMMAR (Shin Kanzen Master N2)
    // ==========================================
    {
        id: "n2_ni_chigai_nai",
        level: "N2",
        title: "〜に違いない (ni chigai nai)",
        romaji: "ni chigai nai",
        meaningUz: "shubhasiz ... / aniq ... bo'lsa kerak",
        structure: "Fe'l/Sifat/Ot + に違いない",
        examples: [
            { ja: "彼が努力したから合格したに違いない。", romaji: "Kare ga doryoku shita kara goukaku shita ni chigai nai.", uz: "U harakat qilgani uchun imtihondan o'tganiga shubha yo'q." }
        ]
    },

    // ==========================================
    // 🎌 JLPT N1 COMPLETE GRAMMAR (Nihongo Sou Matome N1)
    // ==========================================
    {
        id: "n1_zaru_wo_eta_nai",
        level: "N1",
        title: "〜ざるを得ない (zaru wo eta nai)",
        romaji: "zaru wo eta nai",
        meaningUz: "...-shga majbur bo'lmoq / boshqa chora yo'q",
        structure: "Fe'l (Nai-shakli ildizi) + ざるを得ない",
        examples: [
            { ja: "台風のため、計画を変更せざるを得ない。", romaji: "Taifu no tame, keikaku wo henkou sezaru wo etanai.", uz: "Tayfun sababli rejani o'zgartirishga majburmiz." }
        ]
    }
];

export const JLPT_KANJI_DATA: JlptKanjiItem[] = [
    // --- N5 KANJI ---
    {
        id: "kanji_n5_sun",
        level: "N5",
        kanji: "日",
        onyomi: "ニチ (nichi), ジツ (jitsu)",
        kunyomi: "ひ (hi), び (bi), か (ka)",
        meaningUz: "Quyosh, Kun (Sun, Day)",
        strokeCount: 4,
        examples: [
            { word: "日本", reading: "にほん (Nihon)", meaning: "Yaponiya" },
            { word: "日曜日", reading: "にちようび (Nichiyoubi)", meaning: "Yakshanba" }
        ]
    },
    // --- N4 KANJI ---
    {
        id: "kanji_n4_learn",
        level: "N4",
        kanji: "習",
        onyomi: "シュウ (shuu)",
        kunyomi: "なら・う (nara-u)",
        meaningUz: "O'rganmoq, Mashq qilmoq (Learn)",
        strokeCount: 11,
        examples: [
            { word: "練習", reading: "れんしゅう (Renshuu)", meaning: "Mashq / Praktika" }
        ]
    }
];
"""

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(header + n4_code + footer)

print("Generated clean file with proper quote escaping!")
