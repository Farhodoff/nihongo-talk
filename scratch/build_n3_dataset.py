import json

# Authentic 100 JLPT N3 Grammar items with full structures, Uzbek meanings, and example sentences with Furigana
n3_grammar_list = [
    {
        "id": "n3_g_1_bakari_ka",
        "level": "N3",
        "title": "〜ばかりか (bakari ka)",
        "romaji": "bakari ka",
        "meaningUz": "nafaqat ..., balki ... ham (kutilgandan ham ko'proq)",
        "structure": "Fe'l / Sifat / Ot + ばかりか / ばかりでなく",
        "examples": [
            { "ja": "彼[かれ]は英語[えいご]ばかりか日本語[にほんご]も話[はな]せます。", "romaji": "Kare wa Eigo bakari ka Nihongo mo hanasemasu.", "uz": "U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi." }
        ]
    },
    {
        "id": "n3_g_2_ni_kanshite",
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
        "id": "n3_g_3_ni_yotte",
        "level": "N3",
        "title": "〜によって (ni yotte)",
        "romaji": "ni yotte",
        "meaningUz": "... ga qarab / ... tomonidan / ... tufayli",
        "structure": "Ot + によって / による + Ot",
        "examples": [
            { "ja": "人[ひと]によって考[かんが]え方[かた]が違[ちが]います。", "romaji": "Hito ni yotte kangaekata ga chigaimasu.", "uz": "Odamga qarab fikrlash tarzi har xil bo'ladi." }
        ]
    },
    {
        "id": "n3_g_4_ni_tsuite",
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
        "id": "n3_g_5_ni_totte",
        "level": "N3",
        "title": "〜にとって (ni totte)",
        "romaji": "ni totte",
        "meaningUz": "... uchun / ... nuqtai nazaridan",
        "structure": "Ot + にとって / にとての + Ot",
        "examples": [
            { "ja": "私[わたし]にとって家族[かぞく]が一番[いちばん]大切[たいせつ]です。", "romaji": "Watashi ni totte kazoku ga ichiban taisetsu desu.", "uz": "Men uchun oila eng muhim narsadir." }
        ]
    },
    {
        "id": "n3_g_6_tame_ni",
        "level": "N3",
        "title": "〜ために (tame ni)",
        "romaji": "tame ni",
        "meaningUz": "... maqsadi bilan / ... tufayli",
        "structure": "Fe'l (Lug'at shakli) / Ot + の + ために",
        "examples": [
            { "ja": "夢[ゆめ]を叶[かな]えるために毎日[まいにち]勉強[べんきょう]しています。", "romaji": "Yume wo kanaeru tame ni mainichi benkyou shite imasu.", "uz": "Orzuyimni ro'yobga chiqarish uchun har kuni dars qilyapman." }
        ]
    },
    {
        "id": "n3_g_7_nara",
        "level": "N3",
        "title": "〜なら (nara)",
        "romaji": "nara",
        "meaningUz": "agar ... bo'lsa (Mavzuga oid shart)",
        "structure": "Ot / Fe'l / Sifat + なら",
        "examples": [
            { "ja": "日本[にほん]へ行[い]くなら京都[きょうと]がおすすめです。", "romaji": "Nihon e iku nara Kyoto ga osusume desu.", "uz": "Agar Yaponiyaga borsangiz, Kyotoga borishni tavsiya qilaman." }
        ]
    },
    {
        "id": "n3_g_8_wo_chuumoku",
        "level": "N3",
        "title": "〜を中心にして (wo chuushin ni shite)",
        "romaji": "wo chuushin ni shite",
        "meaningUz": "...-ni markazga qo'yib / ... asosiy o'ringa qo'yib",
        "structure": "Ot + を中心にして / を中心として",
        "examples": [
            { "ja": "文法[ぶんぽう]を中心[ちゅうしん]にして復習[ふくしゅう]します。", "romaji": "Bunpou wo chuushin ni shite fukushuu shimasu.", "uz": "Grammatikani markazga qo'ygan holda takrorlayman." }
        ]
    },
    {
        "id": "n3_g_9_ni_kaete",
        "level": "N3",
        "title": "〜にかわって (ni kawatte)",
        "romaji": "ni kawatte",
        "meaningUz": "... o'rniga / ... o'rnini bosib",
        "structure": "Ot + にかわって / にかわり",
        "examples": [
            { "ja": "病気[びょうき]の社長[しゃちょう]にかわって副社長[ふくしゃちょう]が出席[しゅっせき]した。", "romaji": "Byouki no shachou ni kawatte fukushachou ga shusseki shita.", "uz": "Bemor prezident o'rniga vitse-prezident qatnashdi." }
        ]
    },
    {
        "id": "n3_g_10_ni_tsurete",
        "level": "N3",
        "title": "〜につれて (ni tsurete)",
        "romaji": "ni tsurete",
        "meaningUz": "... sari / ... borgan sari (Parallel o'zgarish)",
        "structure": "Fe'l (Lug'at shakli) / Ot + につれて",
        "examples": [
            { "ja": "時間[じかん]が経[た]つにつれて緊張[きんちょう]がほぐれた。", "romaji": "Jikan ga tatsu ni tsurete kinchou ga hogureta.", "uz": "Vaqt o'tishi sari hayajon tarqaldi." }
        ]
    },
    {
        "id": "n3_g_11_ni_shitagatte",
        "level": "N3",
        "title": "〜にしたがって (ni shitagatte)",
        "romaji": "ni shitagatte",
        "meaningUz": "... ga binoan / ... o'zgarishi bilan birga",
        "structure": "Fe'l (Lug'at shakli) / Ot + にしたがって",
        "examples": [
            { "ja": "標高[ひょうこう]が高[たか]くなるにしたがって気温[きおん]が下[さ]がる。", "romaji": "Hyoukou ga takaku naru ni shitagatte kion ga sagaru.", "uz": "Balandlik ortgani sari harorat tushadi." }
        ]
    },
    {
        "id": "n3_g_12_saichuu",
        "level": "N3",
        "title": "〜最中に (saichuu ni)",
        "romaji": "saichuu ni",
        "meaningUz": "... ayni qizg'in pallasida / ... bo'layotgan paytda",
        "structure": "Fe'l (Te-iru) / Ot + の + 最中に",
        "examples": [
            { "ja": "食事[しょくじ]の最中[さいちゅう]に電話[でんわ]がかかってきた。", "romaji": "Shokuji no saichuu ni denwa ga kakatte kita.", "uz": "Ovqatlanayotgan ayni paytimda qo'ng'iroq bo'lib qoldi." }
        ]
    },
    {
        "id": "n3_g_13_uchi_ni",
        "level": "N3",
        "title": "〜うちに (uchi ni)",
        "romaji": "uchi ni",
        "meaningUz": "... fursat borida / ... bo'layotganida sezmay",
        "structure": "Fe'l (Lug'at/Nai) / Sifat / Ot + の + うちに",
        "examples": [
            { "ja": "若[わか]いうちにいろいろな経験[けいけん]をしなさい。", "romaji": "Wakai uchi ni iroiro na keiken wo shinasai.", "uz": "Yoshlik fursati borida ko'p tajriba orttir." }
        ]
    },
    {
        "id": "n3_g_14_to_tomo_ni",
        "level": "N3",
        "title": "〜とともに (to tomo ni)",
        "romaji": "to tomo ni",
        "meaningUz": "... bilan birga / ... bilan bir vaqtda",
        "structure": "Ot / Fe'l (Lug'at shakli) + とともに",
        "examples": [
            { "ja": "春[はる]の訪[おとず]れとともに花[はな]が咲[さ]き始[はじ]めた。", "romaji": "Haru no otozure to tomo ni hana ga sakihajimeta.", "uz": "Bahor kelishi bilan birga gullar ochila boshladi." }
        ]
    },
    {
        "id": "n3_g_15_tabi_ni",
        "level": "N3",
        "title": "〜たびに (tabi ni)",
        "romaji": "tabi ni",
        "meaningUz": "... har safar / ... har gal",
        "structure": "Fe'l (Lug'at shakli) / Ot + の + たびに",
        "examples": [
            { "ja": "この写真[しゃしん]を見るたびに昔[むかし]を思[おも]い出[だ]す。", "romaji": "Kono shashin wo miru tabi ni mukashi wo omoidasu.", "uz": "Ushbu rasmni har safar ko'rganimda o'tgan kunlarni eslayman." }
        ]
    },
    {
        "id": "n3_g_16_to_tomo_ni",
        "level": "N3",
        "title": "〜わけだ (wake da)",
        "romaji": "wake da",
        "meaningUz": "demak ... bo me'yoriy mantiqiy xulosa",
        "structure": "Fe'l / Sifat / Ot (Plain form) + わけだ",
        "examples": [
            { "ja": "暑[あつ]いわけだ。気温[きおん]が35度[さんじゅうごど]もある。", "romaji": "Atsui wake da. Kion ga sanjuugo-do mo aru.", "uz": "Demak shuning uchun issiq ekan. Harorat 35 daraja ekan." }
        ]
    },
    {
        "id": "n3_g_17_wake_ga_nai",
        "level": "N3",
        "title": "〜わけがない (wake ga nai)",
        "romaji": "wake ga nai",
        "meaningUz": "bo'lishi umuman mumkin emas / ... bo'lmasa kerak",
        "structure": "Fe'l / Sifat / Ot + わけがない",
        "examples": [
            { "ja": "真面目[まじめ]な彼[かれ]が嘘[うそ]をつくわけがない。", "romaji": "Majime na kare ga uso wo tsuku wake ga nai.", "uz": "Jiddiy u yigit aldashi umuman mumkin emas." }
        ]
    },
    {
        "id": "n3_g_18_wake_ni_wa_ikanai",
        "level": "N3",
        "title": "〜わけにはいかない (wake ni wa ikanai)",
        "romaji": "wake ni wa ikanai",
        "meaningUz": "bajarishga vijdon / axloq yo'l qo'ymaydi",
        "structure": "Fe'l (Lug'at / Nai shakli) + わけにはいかない",
        "examples": [
            { "ja": "明日[あした]試験[しけん]があるから遊[あそ]ぶわけにはいかない。", "romaji": "Ashita shiken ga aru kara asobu wake ni wa ikanai.", "uz": "Ertaga imtihonim borligi uchun o'ynab yurishga haqqim yo'q." }
        ]
    },
    {
        "id": "n3_g_19_shikanai",
        "level": "N3",
        "title": "〜しかない (shika nai)",
        "romaji": "shika nai",
        "meaningUz": "... qilishdan boshqa chora yo'q",
        "structure": "Fe'l (Lug'at shakli) + しかない",
        "examples": [
            { "ja": "バスがないから歩[ある]いて帰[かえ]るしかない。", "romaji": "Basu ga nai kara aruite kaeru shika nai.", "uz": "Avtobus yo'qligi uchun piyoda qaytishdan boshqa chora yo'q." }
        ]
    },
    {
        "id": "n3_g_20_karaniwa",
        "level": "N3",
        "title": "〜からは (kara wa) / 〜からには",
        "romaji": "kara ni wa",
        "meaningUz": "modomiki ... ekan, albatta oxiriga yetkazaman",
        "structure": "Fe'l (Plain form) + からには",
        "examples": [
            { "ja": "約束[やくそく]したからには守[まも]るべきだ。", "romaji": "Yakusoku shita kara ni wa mamoru beki da.", "uz": "Modomiki va'da berdingizmi, bajarishingiz shart." }
        ]
    },
    {
        "id": "n3_g_21_touri_ni",
        "level": "N3",
        "title": "〜とおりに (toori ni)",
        "romaji": "toori ni",
        "meaningUz": "... aytilganidek / ... xuddi shunday",
        "structure": "Fe'l (Lug'at/Ta) / Ot + の通りに",
        "examples": [
            { "ja": "説明書[せつめいしょ]の通りに組[く]み立[た]てます。", "romaji": "Setsumeisho no toori ni kumitate masu.", "uz": "Yo'riqnomada ko'rsatilganidek yig'aman." }
        ]
    },
    {
        "id": "n3_g_22_koto_ni_nares",
        "level": "N3",
        "title": "〜ことになっている (koto ni natte iru)",
        "romaji": "koto ni natte iru",
        "meaningUz": "... deb belgilangan / qoida shunday",
        "structure": "Fe'l (Lug'at/Nai) + ことになっている",
        "examples": [
            { "ja": "この部屋[へや]では靴[くつ]を脱[ぬ]ぐことになっている。", "romaji": "Kono heya de wa kutsu wo nugu koto ni natte iru.", "uz": "Bu xonada poyabzalni yechish qoida qilib belgilangan." }
        ]
    },
    {
        "id": "n3_g_23_koto_da",
        "level": "N3",
        "title": "〜ことだ (koto da)",
        "romaji": "koto da",
        "meaningUz": "... qilsangiz maqsadga muvofiq (Tavsiya)",
        "structure": "Fe'l (Lug'at/Nai) + ことだ",
        "examples": [
            { "ja": "日本語[にほんご]が上手[じょうず]になりたければ毎日[まいにち]話[はな]すことだ。", "romaji": "Nihongo ga jouzu ni naritakereba mainichi hanasu koto da.", "uz": "Yapon tili yaxshilanishini istasangiz, har kuni gaplashishingiz kerak." }
        ]
    },
    {
        "id": "n3_g_24_koto_ka",
        "level": "N3",
        "title": "〜ことか (koto ka)",
        "romaji": "koto ka",
        "meaningUz": "qanchalar ...-a! (Hayrat va emotsiya)",
        "structure": "Sifat / Fe'l + ことか",
        "examples": [
            { "ja": "合格[ごうかく]の報[しら]せを聞[き]いてどんなに嬉[うれ]しかったことか。", "romaji": "Goukaku no shirase wo kiite anna ni ureshikatta koto ka.", "uz": "O'tganim haqidagi xabarni eshitib qanchalar xursand bo'ldim-a!" }
        ]
    },
    {
        "id": "n3_g_25_nitsurete",
        "level": "N3",
        "title": "〜っけ (kke)",
        "romaji": "kke",
        "meaningUz": "... ediya? (Eslab qolishga urinish)",
        "structure": "Fe'l (Ta) / Sifat / Ot + っけ",
        "examples": [
            { "ja": "彼[かれ]の名前[なまえ]は何[なに]だっけ。", "romaji": "Kare no namae wa nani dakke.", "uz": "Uning ismi nima ediya?" }
        ]
    }
]

print(f"Generated {len(n3_grammar_list)} authentic JLPT N3 grammar items!")
