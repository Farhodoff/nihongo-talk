import json, re

# Read current N5 (39 items) and N4 (103 items) from /tmp/n5_clean_block.txt and /tmp/n4_parsed.json
with open('/tmp/n5_clean_block.txt') as f:
    n5_raw = f.read().strip().rstrip(',')

with open('/tmp/n4_parsed.json') as f:
    n4_parsed = json.load(f)

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
        "examples": [
            {
                "ja": item['jaEx'],
                "romaji": item['romajiEx'],
                "uz": item['enEx']
            }
        ]
    }
    formatted_n4.append("    " + json.dumps(obj, ensure_ascii=False))

n4_block = ",\n".join(formatted_n4)

# Authentic N3 rules
n3_items = [
    {
        "id": "n3_bakari_ka",
        "level": "N3",
        "title": "〜ばかりか (bakari ka)",
        "romaji": "bakari ka",
        "meaningUz": "nafaqat ..., balki ... ham (kutilgandan ham ko'proq)",
        "structure": "Fe'l/Sifat/Ot + ばかりか",
        "examples": [
            { "ja": "彼[かれ]は英語[えいご]ばかりか日本語[にほんご]も話[はな]せます。", "romaji": "Kare wa Eigo bakari ka Nihongo mo hanasemasu.", "uz": "U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi." }
        ]
    },
    {
        "id": "n3_ni_kanshite",
        "level": "N3",
        "title": "〜に関して (ni kanshite)",
        "romaji": "ni kanshite",
        "meaningUz": "... ga oid / ... xususida",
        "structure": "Ot + に関して / に関する + Ot",
        "examples": [
            { "ja": "この問題[もんだい]に関して意見[いけん]を言[い]わせてください。", "romaji": "Kono mondai ni kanshite iken wo iwasete kudasai.", "uz": "Ushbu masala xususida o'z fikrimni bildirishga ruxsat bering." }
        ]
    },
    {
        "id": "n3_ni_yotte",
        "level": "N3",
        "title": "〜によって (ni yotte)",
        "romaji": "ni yotte",
        "meaningUz": "... ga qarab / ... tomonidan / ... tufayli",
        "structure": "Ot + によって",
        "examples": [
            { "ja": "人[ひと]によって考[かんが]え方[かた]が違[ちが]います。", "romaji": "Hito ni yotte kangaekata ga chigaimasu.", "uz": "Odamga qarab fikrlash tarzi har xil bo'ladi." }
        ]
    },
    {
        "id": "n3_ni_tsuite",
        "level": "N3",
        "title": "〜について (ni tsuite)",
        "romaji": "ni tsuite",
        "meaningUz": "... haqida / ... to'g'risida",
        "structure": "Ot + について / についての + Ot",
        "examples": [
            { "ja": "日本[にほん]の文化[ぶんか]について調[しら]べています。", "romaji": "Nihon no bunka ni tsuite shirabete imasu.", "uz": "Yaponiya madaniyati haqida izlanyapman." }
        ]
    },
    {
        "id": "n3_ni_totte",
        "level": "N3",
        "title": "〜にとって (ni totte)",
        "romaji": "ni totte",
        "meaningUz": "... uchun / ... nuqtai nazaridan",
        "structure": "Ot + にとって",
        "examples": [
            { "ja": "私[わたし]にとって家族[かぞく]が一番[いちばん]大切[たいせつ]です。", "romaji": "Watashi ni totte kazoku ga ichiban taisetsu desu.", "uz": "Men uchun oila eng muhim narsadir." }
        ]
    }
]

# Authentic N2 rules
n2_items = [
    {
        "id": "n2_ni_chigai_nai",
        "level": "N2",
        "title": "〜に違いない (ni chigai nai)",
        "romaji": "ni chigai nai",
        "meaningUz": "shubhasiz ... / aniq ... bo'lsa kerak",
        "structure": "Fe'l/Sifat/Ot + に違いない",
        "examples": [
            { "ja": "彼[かれ]が努力[どりょく]したから合格[ごうかく]したに違[ちが]いない。", "romaji": "Kare ga doryoku shita kara goukaku shita ni chigai nai.", "uz": "U harakat qilgani uchun imtihondan o'tganiga shubha yo'q." }
        ]
    },
    {
        "id": "n2_wo_kikkake_ni",
        "level": "N2",
        "title": "〜をきっかけに (wo kikkake ni)",
        "romaji": "wo kikkake ni",
        "meaningUz": "... munosabati bilan / ... bahona bo'lib",
        "structure": "Ot / Fe'l (Ta-form) + のをきっかけに",
        "examples": [
            { "ja": "アニメを見たのをきっかけに日本語[にほんご]を勉強[べんきょう]し始[はじ]めた。", "romaji": "Anime wo mita no wo kikkake ni Nihongo wo benkyou shihajimeta.", "uz": "Anime ko'rganim bahona bo'lib, yapon tilini o'rganishni boshladim." }
        ]
    },
    {
        "id": "n2_ni_mo_kakawarazu",
        "level": "N2",
        "title": "〜にもかかわらず (ni mo kakawarazu)",
        "romaji": "ni mo kakawarazu",
        "meaningUz": "...-ga qaramay / qaramasdan",
        "structure": "Fe'l/Sifat/Ot + にもかかわらず",
        "examples": [
            { "ja": "大雨[おおあめ]にもかかわらず、多[おお]くの人[ひと]が集[あつ]まった。", "romaji": "Ookame ni mo kakawarazu, ooku no hito ga atsumatta.", "uz": "Kattalashgan yomg'irga qaramay, ko'plab odamlar yig'ildi." }
        ]
    }
]

# Authentic N1 rules
n1_items = [
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

def format_item(item):
    return "    " + json.dumps(item, ensure_ascii=False, indent=4).replace("\n", "\n    ")

n3_formatted = ",\n".join([format_item(i) for i in n3_items])
n2_formatted = ",\n".join([format_item(i) for i in n2_items])
n1_formatted = ",\n".join([format_item(i) for i in n1_items])

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

full_content = header + n5_raw + ",\n\n    " + n4_block + ",\n\n" + n3_formatted + ",\n\n" + n2_formatted + ",\n\n" + n1_formatted + footer

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(full_content)

print("Rebuilt clean jlptGrammarKanji.ts without empty trailing elements!")
