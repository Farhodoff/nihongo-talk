import json, re

with open('/tmp/n5_clean_block.txt') as f:
    n5_raw = f.read().strip().rstrip(',')

with open('/tmp/n4_parsed.json') as f:
    n4_parsed = json.load(f)

with open('scratch/build_mimi_n3_complete.py') as f:
    exec(f.read())
    from build_mimi_n3_complete import mimi_n3_items

with open('/tmp/n2_all_parsed.json') as f:
    n2_parsed = json.load(f)

print(f"Loaded N5: 39, N4: {len(n4_parsed)}, N3: {len(mimi_n3_items)}, N2: {len(n2_parsed)}")

# Format N4
formatted_n4 = []
for idx, item in enumerate(n4_parsed):
    clean_id = re.sub(r'[^a-z0-9_]', '', item['romaji'].lower().replace('~', '').replace(' ', '_')) or f'n4_item_{idx}'
    item_id = f"n4_pdf_{idx+1}_{clean_id}"
    obj = {
        "id": item_id,
        "level": "N4",
        "title": item['title'],
        "romaji": item['romaji'],
        "meaningUz": item['meaningEn'],
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [{ "ja": item['jaEx'], "romaji": item['romajiEx'], "uz": item['enEx'] }]
    }
    formatted_n4.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

n4_block = ",\n".join(formatted_n4)

# Format N3
formatted_n3 = []
for idx, (t, r, m, s, ja, r_ex, uz) in enumerate(mimi_n3_items):
    obj = {
        "id": f"n3_mimi_{idx+1}",
        "level": "N3",
        "title": t,
        "romaji": r,
        "meaningUz": m,
        "structure": s,
        "examples": [{ "ja": ja, "romaji": r_ex, "uz": uz }]
    }
    formatted_n3.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

n3_block = ",\n".join(formatted_n3)

# Format N2 (182 items)
formatted_n2 = []
for item in n2_parsed:
    formatted_n2.append("    " + json.dumps(item, ensure_ascii=False, indent=4).replace("\n", "\n    "))

n2_block = ",\n".join(formatted_n2)

# N1 rules
n1_rules = [
    {
        "id": "n1_zaru_wo_eta_nai",
        "level": "N1",
        "title": "〜ざるを得ない (zaru wo eta nai)",
        "romaji": "zaru wo eta nai",
        "meaningUz": "...-shga majbur bo'lmoq / boshqa chora yo'q",
        "structure": "Fe'l (Nai-shakli ildizi) + ざるを得ない",
        "examples": [
            { "ja": "台風[たいふう]のため、計画[けいかく]を変更[へんこう]せざるを得[え]ない。", "romaji": "Taifu no tame, keikaku wo henkou sezaru wo etanai.", "uz": "Tayfun sababli rejani o'zgartirishga majburmiz." }
        ]
    },
    {
        "id": "n1_you_ga_nai",
        "level": "N1",
        "title": "〜ようがない (you ga nai)",
        "romaji": "you ga nai",
        "meaningUz": "...-shning umuman iloji yo'q",
        "structure": "Fe'l (Masu-ildizi) + ようがない",
        "examples": [
            { "ja": "連絡先[れんらくさき]が分[わ]からなければ、連絡[れんらく]しようがない。", "romaji": "Renrakusaki ga wakaranakereba, renroku shiyou ga nai.", "uz": "Bog'lanish manzili bo'lmasa, bog'lanishning iloji yo'q." }
        ]
    }
]

n1_block = ",\n".join(["    " + json.dumps(i, ensure_ascii=False, indent=4).replace("\n", "\n    ") for i in n1_rules])

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
"""

footer = """
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
    {
        id: "kanji_n5_moon",
        level: "N5",
        kanji: "月",
        onyomi: "ゲツ (getsu), ガツ (gatsu)",
        kunyomi: "つき (tsuki)",
        meaningUz: "Oy, Oygoh (Moon, Month)",
        strokeCount: 4,
        examples: [
            { word: "今月", reading: "こんげつ (Kongetsu)", meaning: "Bu oy" },
            { word: "月曜日", reading: "げつようび (Getsuyoubi)", meaning: "Dushanba" }
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

full_content = header + n5_raw + ",\n\n    " + n4_block + ",\n\n" + n3_block + ",\n\n" + n2_block + ",\n\n" + n1_block + footer

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(full_content)

print(f"Successfully written {len(n2_parsed)} official JLPT N2 grammar rules into jlptGrammarKanji.ts!")
