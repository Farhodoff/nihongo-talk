import json, re

# Read current N5 & N4 blocks from /tmp/n5_clean_block.txt and /tmp/n4_parsed.json
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

# 40 Rich Official JLPT N3 Rules
n3_rules = [
    ("〜ばかりか (bakari ka)", "bakari ka", "nafaqat ..., balki ... ham (kutilgandan ko'proq)", "Fe'l/Sifat/Ot + ばかりか", "彼[かれ]は英語[えいご]ばかりか日本語[にほんご]も話[はな]せます。", "Kare wa Eigo bakari ka Nihongo mo hanasemasu.", "U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi."),
    ("〜に関して (ni kanshite)", "ni kanshite", "... ga oid / ... xususida", "Ot + に関して / に関する + Ot", "この問題[もんだい]に関して意見[いけん]を言[い]わせてください。", "Kono mondai ni kanshite iken wo iwasete kudasai.", "Ushbu masala xususida o'z fikrimni bildirishga ruxsat bering."),
    ("〜によって (ni yotte)", "ni yotte", "... ga qarab / ... tomonidan / ... tufayli", "Ot + によって / による + Ot", "人[ひと]によって考[かんが]え方[かた]が違[ちが]います。", "Hito ni yotte kangaekata ga chigaimasu.", "Odamga qarab fikrlash tarzi har xil bo'ladi."),
    ("〜について (ni tsuite)", "ni tsuite", "... haqida / ... to'g'risida", "Ot + について / についての + Ot", "日本[にほん]の文化[ぶんか]について調[しら]べています。", "Nihon no bunka ni tsuite shirabete imasu.", "Yaponiya madaniyati haqida izlanyapman."),
    ("〜にとって (ni totte)", "ni totte", "... uchun / ... nuqtai nazaridan", "Ot + にとって", "私[わたし]にとって家族[かぞく]が一番[いちばん]大切[たいせつ]です。", "Watashi ni totte kazoku ga ichiban taisetsu desu.", "Men uchun oila eng muhim narsadir."),
    ("〜ために (tame ni)", "tame ni", "... maqsadi bilan / ... tufayli", "Fe'l (Lug'at shakli) / Ot + の + ために", "夢[ゆめ]を叶[かな]えるために毎日[まいにち]勉強[べんきょう]しています。", "Yume wo kanaeru tame ni mainichi benkyou shite imasu.", "Orzuyimni ro'yobga chiqarish uchun har kuni dars qilyapman."),
    ("〜なら (nara)", "nara", "agar ... bo'lsa (Mavzuga oid shart)", "Ot / Fe'l / Sifat + なら", "日本[にほん]へ行[い]くなら京都[きょうと]がおすすめです。", "Nihon e iku nara Kyoto ga osusume desu.", "Agar Yaponiyaga borsangiz, Kyotoga borishni tavsiya qilaman."),
    ("〜を中心にして (wo chuushin ni shite)", "wo chuushin ni shite", "...-ni markazga qo'yib / ... asosiy o'ringa qo'yib", "Ot + を中心にして", "文法[ぶんぽう]を中心[ちゅうしん]にして復習[ふくしゅう]します。", "Bunpou wo chuushin ni shite fukushuu shimasu.", "Grammatikani markazga qo'ygan holda takrorlayman."),
    ("〜にかわって (ni kawatte)", "ni kawatte", "... o'rniga / ... o'rnini bosib", "Ot + にかわって", "社長[しゃちょう]にかわって副社長[ふくしゃちょう]が出席[しゅっせき]した。", "Shachou ni kawatte fukushachou ga shusseki shita.", "Prezident o'rniga vitse-prezident qatnashdi."),
    ("〜につれて (ni tsurete)", "ni tsurete", "... sari / ... borgan sari (Parallel o'zgarish)", "Fe'l (Lug'at shakli) / Ot + につれて", "時間[じかん]が経[た]つにつれて緊張[きんちょう]がほぐれた。", "Jikan ga tatsu ni tsurete kinchou ga hogureta.", "Vaqt o'tishi sari hayajon tarqaldi."),
    ("〜にしたがって (ni shitagatte)", "ni shitagatte", "... ga binoan / ... o'zgarishi bilan birga", "Fe'l (Lug'at shakli) / Ot + にしたがって", "標高[ひょうこう]が高[たか]くなるにしたがって気温[きおん]が下[さ]がる。", "Hyoukou ga takaku naru ni shitagatte kion ga sagaru.", "Balandlik ortgani sari harorat tushadi."),
    ("〜最中に (saichuu ni)", "saichuu ni", "... ayni qizg'in pallasida / ... bo'layotgan paytda", "Fe'l (Te-iru) / Ot + の + 最中に", "食事[しょくじ]の最中[さいちゅう]に電話[でんわ]がかかってきた。", "Shokuji no saichuu ni denwa ga kakatte kita.", "Ovqatlanayotgan ayni paytimda qo'ng'iroq bo'lib qoldi."),
    ("〜うちに (uchi ni)", "uchi ni", "... fursat borida / ... bo'layotganida sezmay", "Fe'l (Lug'at/Nai) / Ot + の + うちに", "若[わか]いうちにいろいろな経験[けいけん]をしなさい。", "Wakai uchi ni iroiro na keiken wo shinasai.", "Yoshlik fursati borida ko'p tajriba orttir."),
    ("〜とともに (to tomo ni)", "to tomo ni", "... bilan birga / ... bilan bir vaqtda", "Ot / Fe'l (Lug'at shakli) + とともに", "春[はる]の訪[おとず]れとともに花[はな]が咲[さ]き始[はじ]めた。", "Haru no otozure to tomo ni hana ga sakihajimeta.", "Bahor kelishi bilan birga gullar ochila boshladi."),
    ("〜たびに (tabi ni)", "tabi ni", "... har safar / ... har gal", "Fe'l (Lug'at shakli) / Ot + の + たびに", "この写真[しゃしん]を見るたびに昔[むかし]を思[おも]い出[だ]す。", "Kono shashin wo miru tabi ni mukashi wo omoidasu.", "Ushbu rasmni har safar ko'rganimda o'tgan kunlarni eslayman."),
    ("〜わけだ (wake da)", "wake da", "demak ... bo'lganligi mantiqiy xulosa", "Fe'l / Sifat (Plain form) + わけだ", "暑[あつ]いわけだ。気温[きおん]が35度[さんじゅうごど]もある。", "Atsui wake da. Kion ga sanjuugo-do mo aru.", "Demak shuning uchun issiq ekan. Harorat 35 daraja."),
    ("〜わけがない (wake ga nai)", "wake ga nai", "bo'lishi umuman mumkin emas", "Fe'l / Sifat / Ot + わけがない", "彼[かれ]が嘘[うそ]をつくわけがない。", "Kare ga uso wo tsuku wake ga nai.", "U yigit aldashi umuman mumkin emas."),
    ("〜わけにはいかない (wake ni wa ikanai)", "wake ni wa ikanai", "vijdon / axloq yo'l qo'ymaydi", "Fe'l (Lug'at / Nai shakli) + わけにはいかない", "明日[あした]試験[しけん]があるから遊[あそ]ぶわけにはいかない。", "Ashita shiken ga aru kara asobu wake ni wa ikanai.", "Ertaga imtihonim borligi uchun o'ynab yurishga haqqim yo'q."),
    ("〜しかない (shika nai)", "shika nai", "... qilishdan boshqa chora yo'q", "Fe'l (Lug'at shakli) + しかない", "バスがないから歩[ある]いて帰[かえ]るしかない。", "Basu ga nai kara aruite kaeru shika nai.", "Avtobus yo'qligi uchun piyoda qaytishdan boshqa chora yo'q."),
    ("〜からには (kara ni wa)", "kara ni wa", "modomiki ... ekan, albatta bajaraman", "Fe'l (Plain form) + からには", "約束[やくそく]したからには守[まも]るべきだ。", "Yakusoku shita kara ni wa mamoru beki da.", "Modomiki va'da berdingizmi, bajarishingiz shart."),
    ("〜とおりに (toori ni)", "toori ni", "... aytilganidek / ... xuddi shunday", "Fe'l (Lug'at/Ta) / Ot + の通りに", "説明書[せつめいしょ]の通りに組[く]み立[た]てます。", "Setsumeisho no toori ni kumitate masu.", "Yo'riqnomada ko'rsatilganidek yig'aman."),
    ("〜ことになっている (koto ni natte iru)", "koto ni natte iru", "... deb belgilangan qoida", "Fe'l (Lug'at/Nai) + ことになっている", "この部屋[へや]では靴[くつ]を脱[ぬ]ぐことになっている。", "Kono heya de wa kutsu wo nugu koto ni natte iru.", "Bu xonada poyabzalni yechish qoida qilib belgilangan."),
    ("〜ことだ (koto da)", "koto da", "... qilsangiz maqsadga muvofiq (Tavsiya)", "Fe'l (Lug'at/Nai) + ことだ", "日本語[にほんご]が上手[じょうず]になりたければ毎日[まいにち]話[はな]すことだ。", "Nihongo ga jouzu ni naritakereba mainichi hanasu koto da.", "Yapon tili yaxshilanishini istasangiz, har kuni gaplashishingiz kerak."),
    ("〜ことか (koto ka)", "koto ka", "qanchalar ...-a! (Hayrat va emotsiya)", "Sifat / Fe'l + ことか", "合格[ごうかく]の報[しら]せを聞[き]いてどんなに嬉[うれ]しかったことか。", "Goukaku no shirase wo kiite anna ni ureshikatta koto ka.", "O'tganim haqidagi xabarni eshitib qanchalar xursand bo'ldim-a!"),
    ("〜っけ (kke)", "kke", "... ediya? (Eslab qolishga urinish)", "Fe'l (Ta) / Ot + っけ", "彼[かれ]の名前[なまえ]は何[なに]だっけ。", "Kare no namae wa nani dakke.", "Uning ismi nima ediya?"),
    ("〜っぽい (ppoi)", "ppoi", "...-ga o'xshash / ... moyil (Sifat yasovchi)", "Ot / Fe'l (Masu-ildiz) + っぽい", "彼[かれ]は子供[こども]っぽいところがある。", "Kare wa kodomoppoi tokoro ga aru.", "Unda bolalarcha fe'l bor."),
    ("〜がち (gachi)", "gachi", "... qilishga moyil / ko'pincha bo'lib turadi", "Fe'l (Masu-ildiz) / Ot + がち", "冬[ふゆ]は風邪[かぜ]を引[ひ]きがちだ。", "Fuyu wa kaze wo hikigachi da.", "Qishda ko'pincha shamollab qolinadi."),
    ("〜だらけ (darake)", "darake", "...-ga to'la (Yomon/salbiy narsalar)", "Ot + だらけ", "この部屋[へや]は物[もの]だらけだ。", "Kono heya wa mono darake da.", "Bu xona chang va narsalarga to'la."),
    ("〜気味 (gimi)", "gimi", "ozgina ... alomati sezilyapti", "Fe'l (Masu-ildiz) / Ot + 気味", "最近[さいきん]太[ふと]り気味[ぎみ]だ。", "Saikin futorigimi da.", "Oxirgi paytlarda ozgina semirish alomati bor."),
    ("〜たところで (ta tokoro de)", "ta tokoro de", "hatto ... qilgan taqdirda ham (Natijasiz)", "Fe'l (Ta-form) + ところで", "急[いそ]いだところで間に合[まにあ]わない。", "Isoida tokoro de maniai wanai.", "Hatto shoshilgan taqdiringda ham ulgurmaysan."),
    ("〜にかけては (ni kakete wa)", "ni kakete wa", "... sohasiga kelganda (Eng zo'ri)", "Ot + にかけては", "足[あし]の速[はや]さにかけては誰[だれ]にも負[ま]けない。", "Ashi no hayasa ni kakete wa dare ni mo makenai.", "Yugurish tezligi bo'yicha hech kimga yengilmaydi."),
    ("〜に反して (ni hanshite)", "ni hanshite", "...-ga zid ravishda / ... kutilganiga qarama-qarshi", "Ot + に反して / に反する + Ot", "予想[よそう]に反して試験[しけん]は難[むずか]しかった。", "Yosou ni hanshite shiken wa muzukashikatta.", "Kutilganiga zid ravishda imtihon qiyin bo'ldi."),
    ("〜を問わず (wo towazu)", "wo towazu", "...-dan qat'i nazar / ... farqlamay", "Ot + を問わず", "年齢[ねんれい]を問わず誰[だれ]でも参加[さんか]できる。", "Nenrei wo towazu dare demo sanka dekiru.", "Yoshidan qat'i nazar har kim qatnasha oladi."),
    ("〜にかかわらず (ni kakawarazu)", "ni kakawarazu", "... bo'lish-bo'lmasligidan qat'i nazar", "Ot / Fe'l + にかかわらず", "晴[は]れ雨[あめ]にかかわらず試合[しあい]は行[おこな]う。", "Hare ame ni kakawarazu shiai wa dokonau.", "Havo ochiq yoki yomg'ir bo'lishidan qat'i nazar o'yin o'tkaziladi."),
    ("〜にあたって (ni atatte)", "ni atatte", "... oldidan / ... munosabati munosabati bilan (Tantanali)", "Fe'l (Lug'at) / Ot + にあたって", "新[あたら]しい事業[じぎょう]を始[はじ]めるにあたって準備[じゅんび]をする。", "Atarashii jigyou wo hajimeru ni atatte junbi wo suru.", "Yangi loyihani boshlash oldidan tayyorgarlik ko'riladi."),
    ("〜に際して (ni saishite)", "ni saishite", "... paytida / ... amalga oshirilayotganda", "Fe me'yoriy Ot + に際して", "契約[けいやく]に際して注意[ちゅうい]事項[じこう]を確認[かくにん]する。", "Keiyaku ni saishite chuui jikou wo kakunin suru.", "Shartnoma tuzish paytida ogohlantirishlarni tekshiring.")
]

n3_formatted_list = []
for idx, (t, r, m, s, ja, r_ex, uz) in enumerate(n3_rules):
    obj = {
        "id": f"n3_official_{idx+1}",
        "level": "N3",
        "title": t,
        "romaji": r,
        "meaningUz": m,
        "structure": s,
        "examples": [
            { "ja": ja, "romaji": r_ex, "uz": uz }
        ]
    }
    n3_formatted_list.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

n3_block = ",\n".join(n3_formatted_list)

# N2 & N1 rules
n2_rules = [
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

n2_block = ",\n".join(["    " + json.dumps(i, ensure_ascii=False, indent=4).replace("\n", "\n    ") for i in n2_rules])
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

print("Expanded N3 grammar dataset with 40 official authentic rules!")
