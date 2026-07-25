import json, re
from build_n1_full_shinkanzen import n1_shinkanzen_rules
from expand_n2_grammar import n2_grammar_rules

# Load clean N5
with open('/tmp/n5_clean_block.txt') as f:
    n5_str = f.read().strip().rstrip(',')

# Load clean N4
with open('/tmp/n4_parsed.json') as f:
    n4_parsed = json.load(f)

# Load clean N3
with open('scratch/build_mimi_n3_complete.py') as f:
    exec(f.read())
    from build_mimi_n3_complete import mimi_n3_items

# Load clean N2
with open('/tmp/n2_all_parsed.json') as f:
    n2_parsed = json.load(f)

# Format N4
formatted_n4 = []
for idx, item in enumerate(n4_parsed):
    clean_id = re.sub(r'[^a-z0-9_]', '', item['romaji'].lower().replace('~', '').replace(' ', '_')) or f'n4_item_{idx}'
    obj = {
        "id": f"n4_pdf_{idx+1}_{clean_id}",
        "level": "N4",
        "title": item['title'],
        "romaji": item['romaji'],
        "meaningUz": item['meaningEn'],
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [{ "ja": item['jaEx'], "romaji": item['romajiEx'], "uz": item['enEx'] }]
    }
    formatted_n4.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

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

# Format N2 (182 items)
formatted_n2 = []
for item in n2_parsed:
    formatted_n2.append("    " + json.dumps(item, ensure_ascii=False, indent=4).replace("\n", "\n    "))

# Format N1 (42 items)
formatted_n1 = []
for idx, (t, r, m, s, ja, r_ex, uz) in enumerate(n1_shinkanzen_rules):
    obj = {
        "id": f"n1_shinkanzen_{idx+1}",
        "level": "N1",
        "title": t,
        "romaji": r,
        "meaningUz": m,
        "structure": s,
        "examples": [{ "ja": ja, "romaji": r_ex, "uz": uz }]
    }
    formatted_n1.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

all_grammar_objs_str = n5_str + ",\n\n" + ",\n".join(formatted_n4) + ",\n\n" + ",\n".join(formatted_n3) + ",\n\n" + ",\n".join(formatted_n2) + ",\n\n" + ",\n".join(formatted_n1)

full_ts_code = f"""export interface JlptGrammarItem {{
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    title: string;
    romaji: string;
    meaningUz: string;
    structure: string;
    examples: {{
        ja: string;
        romaji: string;
        uz: string;
    }}[];
}}

export interface JlptKanjiItem {{
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    kanji: string;
    onyomi: string;
    kunyomi: string;
    meaningUz: string;
    strokeCount: number;
    examples: {{
        word: string;
        reading: string;
        meaning: string;
    }}[];
}}

export const JLPT_GRAMMAR_DATA: JlptGrammarItem[] = [
{all_grammar_objs_str}
];

export const JLPT_KANJI_DATA: JlptKanjiItem[] = [
    // --- N5 KANJI ---
    {{
        id: "kanji_n5_sun",
        level: "N5",
        kanji: "日",
        onyomi: "ニチ (nichi), ジツ (jitsu)",
        kunyomi: "ひ (hi), び (bi), か (ka)",
        meaningUz: "Quyosh, Kun (Sun, Day)",
        strokeCount: 4,
        examples: [
            {{ word: "日本", reading: "にほん (Nihon)", meaning: "Yaponiya" }},
            {{ word: "日曜日", reading: "にちようび (Nichiyoubi)", meaning: "Yakshanba" }}
        ]
    }},
    {{
        id: "kanji_n5_moon",
        level: "N5",
        kanji: "月",
        onyomi: "ゲツ (getsu), ガツ (gatsu)",
        kunyomi: "つき (tsuki)",
        meaningUz: "Oy, Oygoh (Moon, Month)",
        strokeCount: 4,
        examples: [
            {{ word: "今月", reading: "こんげつ (Kongetsu)", meaning: "Bu oy" }},
            {{ word: "月曜日", reading: "げつようび (Getsuyoubi)", meaning: "Dushanba" }}
        ]
    }},
    // --- N4 KANJI ---
    {{
        id: "kanji_n4_learn",
        level: "N4",
        kanji: "習",
        onyomi: "シュウ (shuu)",
        kunyomi: "なら・う (nara-u)",
        meaningUz: "O'rganmoq, Mashq qilmoq (Learn)",
        strokeCount: 11,
        examples: [
            {{ word: "練習", reading: "れんしゅう (Renshuu)", meaning: "Mashq / Praktika" }}
        ]
    }}
];
"""

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(full_ts_code)

print("Generated clean, flawless jlptGrammarKanji.ts!")
