import { JlptGrammarItem } from './jlptGrammarKanji';

const rawGrammarData = [
  {
    "id": "g_n5_1",
    "level": "N5",
    "title": "N1 は N2 です (wa desu)",
    "romaji": "wa desu",
    "meaningUz": "N1 - N2 dir (Men talabaman / U shifokor)",
    "structure": "Ot1 + は + Ot2 + です",
    "examples": [
      {
        "ja": "私[わたし]は学生[がくせい]です。",
        "romaji": "Watashi wa gakusei desu.",
        "uz": "Men talabaman."
      }
    ]
  },
  {
    "id": "g_n5_2",
    "level": "N5",
    "title": "N1 は N2 じゃありません (ja arimasen)",
    "romaji": "ja arimasen",
    "meaningUz": "N1 - N2 emas (Inkor shakli)",
    "structure": "Ot1 + は + Ot2 + じゃありません",
    "examples": [
      {
        "ja": "私[わたし]は先生[せんせい]じゃありません。",
        "romaji": "Watashi wa sensei ja arimasen.",
        "uz": "Men o'qituvchi emasman."
      }
    ]
  },
  {
    "id": "g_n5_3",
    "level": "N5",
    "title": "〜ですか (desu ka)",
    "romaji": "desu ka",
    "meaningUz": "...-mi? (So'roq gap)",
    "structure": "Gap + か",
    "examples": [
      {
        "ja": "ミラーさんは会社員[かいしゃいん]ですか。",
        "romaji": "Miraa-san wa kaishain desu ka.",
        "uz": "Mira janoblari kompaniya xodimimi?"
      }
    ]
  },
  {
    "id": "g_n5_4",
    "level": "N5",
    "title": "〜も (mo)",
    "romaji": "mo",
    "meaningUz": "... ham (Tenglik yuklamasi)",
    "structure": "Ot + も",
    "examples": [
      {
        "ja": "私[わたし]も学生[がくせい]です。",
        "romaji": "Watashi mo gakusei desu.",
        "uz": "Men ham talabaman."
      }
    ]
  },
  {
    "id": "g_n5_5",
    "level": "N5",
    "title": "N1 の N2 (no)",
    "romaji": "no",
    "meaningUz": "N1-ning N2-si (Egalik kelishigi)",
    "structure": "Ot1 + の + Ot2",
    "examples": [
      {
        "ja": "これは私[わたし]の本[ほん]です。",
        "romaji": "Kore wa watashi no hon desu.",
        "uz": "Bu mening kitobim."
      }
    ]
  },
  {
    "id": "g_n5_6",
    "level": "N5",
    "title": "これ / それ / あれ (kore/sore/are)",
    "romaji": "kore sore are",
    "meaningUz": "bu / u / anavi (Ko'rsatish olmoshlari)",
    "structure": "これ/それ/あれ + は",
    "examples": [
      {
        "ja": "あれは車[くるま]です。",
        "romaji": "Are wa kuruma desu.",
        "uz": "Anavi mashina."
      }
    ]
  },
  {
    "id": "g_n5_7",
    "level": "N5",
    "title": "ここ / そこ / あそこ (koko/soko/asoko)",
    "romaji": "koko soko asoko",
    "meaningUz": "bu yer / u yer / anavi yer (O'rin)",
    "structure": "ここ/そこ/あそこ + は",
    "examples": [
      {
        "ja": "ここは食堂[しょくどう]です。",
        "romaji": "Koko wa shokudou desu.",
        "uz": "Bu yer oshxona."
      }
    ]
  },
  {
    "id": "g_n5_8",
    "level": "N5",
    "title": "〜から〜まで (kara made)",
    "romaji": "kara made",
    "meaningUz": "...-dan ...-gacha (Vaqt va o'rin)",
    "structure": "Ot1 + から + Ot2 + まで",
    "examples": [
      {
        "ja": "9時[くじ]から5時[ごじ]まで働[はたら]きます。",
        "romaji": "Ku-ji kara go-ji made hatarakimasu.",
        "uz": "Soat 9 dan 5 gacha ishlayman."
      }
    ]
  },
  {
    "id": "g_n5_9",
    "level": "N5",
    "title": "〜へ行きます / 来ます (e ikimasu/kimasu)",
    "romaji": "e ikimasu",
    "meaningUz": "...-ga boraman / kelaman",
    "structure": "Joy + へ + 行きます/来ます",
    "examples": [
      {
        "ja": "日本[にほん]へ行[い]きます。",
        "romaji": "Nihon e ikimasu.",
        "uz": "Yaponiyaga boraman."
      }
    ]
  },
  {
    "id": "g_n5_10",
    "level": "N5",
    "title": "〜で [Vosita] (de)",
    "romaji": "de",
    "meaningUz": "...-da / ... vositasida",
    "structure": "Vosita + で",
    "examples": [
      {
        "ja": "電車[でんしゃ]で行[い]きます。",
        "romaji": "Densha de ikimasu.",
        "uz": "Poyezdda boraman."
      }
    ]
  },
  {
    "id": "g_n5_11",
    "level": "N5",
    "title": "〜と (to)",
    "romaji": "to",
    "meaningUz": "... bilan (Birgalik yuklamasi)",
    "structure": "Shaxs + と",
    "examples": [
      {
        "ja": "友達[ともだち]と話[はな]します。",
        "romaji": "Tomodachi to hanashimasu.",
        "uz": "Do'stim bilan gaplashaman."
      }
    ]
  },
  {
    "id": "g_n5_12",
    "level": "N5",
    "title": "〜を [Obyekt] (wo)",
    "romaji": "wo",
    "meaningUz": "...-ni (Tushum kelishigi)",
    "structure": "Ot + を + Fe'l",
    "examples": [
      {
        "ja": "ご飯[はん]を食べ[たべ]ます。",
        "romaji": "Gohan wo tabemasu.",
        "uz": "Ovqat yeyman."
      }
    ]
  },
  {
    "id": "g_n5_13",
    "level": "N5",
    "title": "〜で [Joy] (de)",
    "romaji": "de",
    "meaningUz": "...-da (Harakat joyi)",
    "structure": "Joy + で + Fe'l",
    "examples": [
      {
        "ja": "図書館[としょかん]で勉強[べんきょう]します。",
        "romaji": "Toshokan de benkyou shimasu.",
        "uz": "Kutubxonada dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_14",
    "level": "N5",
    "title": "〜ましょう (mashou)",
    "romaji": "mashou",
    "meaningUz": "...-aylik / ...-aylikmi (Chorlov)",
    "structure": "Fe'l (Masu-ildizi) + ましょう",
    "examples": [
      {
        "ja": "一緒[いっしょ]に行[い]きましょう。",
        "romaji": "Issho ni ikimashou.",
        "uz": "Birga boraylik."
      }
    ]
  },
  {
    "id": "g_n5_15",
    "level": "N5",
    "title": "〜にあげます / もらいます (ni agemasu)",
    "romaji": "ni agemasu",
    "meaningUz": "...-ga bermoq / ...-dan olmoq",
    "structure": "Shaxs + に + あげます",
    "examples": [
      {
        "ja": "友達[ともだち]にプレゼントをあげます。",
        "romaji": "Tomodachi ni purezento wo agemasu.",
        "uz": "Do'stimga sovg'a beraman."
      }
    ]
  },
  {
    "id": "g_n5_16",
    "level": "N5",
    "title": "N5 Qoida 16: 〜n5_pattern_16",
    "romaji": "n5 pattern 16",
    "meaningUz": "N5 grammatik qoidasi 16 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_16",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_17",
    "level": "N5",
    "title": "N5 Qoida 17: 〜n5_pattern_17",
    "romaji": "n5 pattern 17",
    "meaningUz": "N5 grammatik qoidasi 17 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_17",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_18",
    "level": "N5",
    "title": "N5 Qoida 18: 〜n5_pattern_18",
    "romaji": "n5 pattern 18",
    "meaningUz": "N5 grammatik qoidasi 18 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_18",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_19",
    "level": "N5",
    "title": "N5 Qoida 19: 〜n5_pattern_19",
    "romaji": "n5 pattern 19",
    "meaningUz": "N5 grammatik qoidasi 19 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_19",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_20",
    "level": "N5",
    "title": "N5 Qoida 20: 〜n5_pattern_20",
    "romaji": "n5 pattern 20",
    "meaningUz": "N5 grammatik qoidasi 20 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_20",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_21",
    "level": "N5",
    "title": "N5 Qoida 21: 〜n5_pattern_21",
    "romaji": "n5 pattern 21",
    "meaningUz": "N5 grammatik qoidasi 21 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_21",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_22",
    "level": "N5",
    "title": "N5 Qoida 22: 〜n5_pattern_22",
    "romaji": "n5 pattern 22",
    "meaningUz": "N5 grammatik qoidasi 22 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_22",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_23",
    "level": "N5",
    "title": "N5 Qoida 23: 〜n5_pattern_23",
    "romaji": "n5 pattern 23",
    "meaningUz": "N5 grammatik qoidasi 23 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_23",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_24",
    "level": "N5",
    "title": "N5 Qoida 24: 〜n5_pattern_24",
    "romaji": "n5 pattern 24",
    "meaningUz": "N5 grammatik qoidasi 24 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_24",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_25",
    "level": "N5",
    "title": "N5 Qoida 25: 〜n5_pattern_25",
    "romaji": "n5 pattern 25",
    "meaningUz": "N5 grammatik qoidasi 25 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_25",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_26",
    "level": "N5",
    "title": "N5 Qoida 26: 〜n5_pattern_26",
    "romaji": "n5 pattern 26",
    "meaningUz": "N5 grammatik qoidasi 26 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_26",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_27",
    "level": "N5",
    "title": "N5 Qoida 27: 〜n5_pattern_27",
    "romaji": "n5 pattern 27",
    "meaningUz": "N5 grammatik qoidasi 27 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_27",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_28",
    "level": "N5",
    "title": "N5 Qoida 28: 〜n5_pattern_28",
    "romaji": "n5 pattern 28",
    "meaningUz": "N5 grammatik qoidasi 28 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_28",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_29",
    "level": "N5",
    "title": "N5 Qoida 29: 〜n5_pattern_29",
    "romaji": "n5 pattern 29",
    "meaningUz": "N5 grammatik qoidasi 29 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_29",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_30",
    "level": "N5",
    "title": "N5 Qoida 30: 〜n5_pattern_30",
    "romaji": "n5 pattern 30",
    "meaningUz": "N5 grammatik qoidasi 30 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_30",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_31",
    "level": "N5",
    "title": "N5 Qoida 31: 〜n5_pattern_31",
    "romaji": "n5 pattern 31",
    "meaningUz": "N5 grammatik qoidasi 31 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_31",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_32",
    "level": "N5",
    "title": "N5 Qoida 32: 〜n5_pattern_32",
    "romaji": "n5 pattern 32",
    "meaningUz": "N5 grammatik qoidasi 32 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_32",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_33",
    "level": "N5",
    "title": "N5 Qoida 33: 〜n5_pattern_33",
    "romaji": "n5 pattern 33",
    "meaningUz": "N5 grammatik qoidasi 33 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_33",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_34",
    "level": "N5",
    "title": "N5 Qoida 34: 〜n5_pattern_34",
    "romaji": "n5 pattern 34",
    "meaningUz": "N5 grammatik qoidasi 34 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_34",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_35",
    "level": "N5",
    "title": "N5 Qoida 35: 〜n5_pattern_35",
    "romaji": "n5 pattern 35",
    "meaningUz": "N5 grammatik qoidasi 35 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_35",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_36",
    "level": "N5",
    "title": "N5 Qoida 36: 〜n5_pattern_36",
    "romaji": "n5 pattern 36",
    "meaningUz": "N5 grammatik qoidasi 36 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_36",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_37",
    "level": "N5",
    "title": "N5 Qoida 37: 〜n5_pattern_37",
    "romaji": "n5 pattern 37",
    "meaningUz": "N5 grammatik qoidasi 37 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_37",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_38",
    "level": "N5",
    "title": "N5 Qoida 38: 〜n5_pattern_38",
    "romaji": "n5 pattern 38",
    "meaningUz": "N5 grammatik qoidasi 38 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_38",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_39",
    "level": "N5",
    "title": "N5 Qoida 39: 〜n5_pattern_39",
    "romaji": "n5 pattern 39",
    "meaningUz": "N5 grammatik qoidasi 39 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_39",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_40",
    "level": "N5",
    "title": "N5 Qoida 40: 〜n5_pattern_40",
    "romaji": "n5 pattern 40",
    "meaningUz": "N5 grammatik qoidasi 40 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_40",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_41",
    "level": "N5",
    "title": "N5 Qoida 41: 〜n5_pattern_41",
    "romaji": "n5 pattern 41",
    "meaningUz": "N5 grammatik qoidasi 41 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_41",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_42",
    "level": "N5",
    "title": "N5 Qoida 42: 〜n5_pattern_42",
    "romaji": "n5 pattern 42",
    "meaningUz": "N5 grammatik qoidasi 42 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_42",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_43",
    "level": "N5",
    "title": "N5 Qoida 43: 〜n5_pattern_43",
    "romaji": "n5 pattern 43",
    "meaningUz": "N5 grammatik qoidasi 43 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_43",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_44",
    "level": "N5",
    "title": "N5 Qoida 44: 〜n5_pattern_44",
    "romaji": "n5 pattern 44",
    "meaningUz": "N5 grammatik qoidasi 44 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_44",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_45",
    "level": "N5",
    "title": "N5 Qoida 45: 〜n5_pattern_45",
    "romaji": "n5 pattern 45",
    "meaningUz": "N5 grammatik qoidasi 45 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_45",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_46",
    "level": "N5",
    "title": "N5 Qoida 46: 〜n5_pattern_46",
    "romaji": "n5 pattern 46",
    "meaningUz": "N5 grammatik qoidasi 46 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_46",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_47",
    "level": "N5",
    "title": "N5 Qoida 47: 〜n5_pattern_47",
    "romaji": "n5 pattern 47",
    "meaningUz": "N5 grammatik qoidasi 47 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_47",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_48",
    "level": "N5",
    "title": "N5 Qoida 48: 〜n5_pattern_48",
    "romaji": "n5 pattern 48",
    "meaningUz": "N5 grammatik qoidasi 48 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_48",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_49",
    "level": "N5",
    "title": "N5 Qoida 49: 〜n5_pattern_49",
    "romaji": "n5 pattern 49",
    "meaningUz": "N5 grammatik qoidasi 49 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_49",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_50",
    "level": "N5",
    "title": "N5 Qoida 50: 〜n5_pattern_50",
    "romaji": "n5 pattern 50",
    "meaningUz": "N5 grammatik qoidasi 50 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_50",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_51",
    "level": "N5",
    "title": "N5 Qoida 51: 〜n5_pattern_51",
    "romaji": "n5 pattern 51",
    "meaningUz": "N5 grammatik qoidasi 51 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_51",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_52",
    "level": "N5",
    "title": "N5 Qoida 52: 〜n5_pattern_52",
    "romaji": "n5 pattern 52",
    "meaningUz": "N5 grammatik qoidasi 52 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_52",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_53",
    "level": "N5",
    "title": "N5 Qoida 53: 〜n5_pattern_53",
    "romaji": "n5 pattern 53",
    "meaningUz": "N5 grammatik qoidasi 53 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_53",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_54",
    "level": "N5",
    "title": "N5 Qoida 54: 〜n5_pattern_54",
    "romaji": "n5 pattern 54",
    "meaningUz": "N5 grammatik qoidasi 54 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_54",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_55",
    "level": "N5",
    "title": "N5 Qoida 55: 〜n5_pattern_55",
    "romaji": "n5 pattern 55",
    "meaningUz": "N5 grammatik qoidasi 55 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_55",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_56",
    "level": "N5",
    "title": "N5 Qoida 56: 〜n5_pattern_56",
    "romaji": "n5 pattern 56",
    "meaningUz": "N5 grammatik qoidasi 56 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_56",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_57",
    "level": "N5",
    "title": "N5 Qoida 57: 〜n5_pattern_57",
    "romaji": "n5 pattern 57",
    "meaningUz": "N5 grammatik qoidasi 57 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_57",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_58",
    "level": "N5",
    "title": "N5 Qoida 58: 〜n5_pattern_58",
    "romaji": "n5 pattern 58",
    "meaningUz": "N5 grammatik qoidasi 58 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_58",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_59",
    "level": "N5",
    "title": "N5 Qoida 59: 〜n5_pattern_59",
    "romaji": "n5 pattern 59",
    "meaningUz": "N5 grammatik qoidasi 59 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_59",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_60",
    "level": "N5",
    "title": "N5 Qoida 60: 〜n5_pattern_60",
    "romaji": "n5 pattern 60",
    "meaningUz": "N5 grammatik qoidasi 60 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_60",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_61",
    "level": "N5",
    "title": "N5 Qoida 61: 〜n5_pattern_61",
    "romaji": "n5 pattern 61",
    "meaningUz": "N5 grammatik qoidasi 61 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_61",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_62",
    "level": "N5",
    "title": "N5 Qoida 62: 〜n5_pattern_62",
    "romaji": "n5 pattern 62",
    "meaningUz": "N5 grammatik qoidasi 62 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_62",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_63",
    "level": "N5",
    "title": "N5 Qoida 63: 〜n5_pattern_63",
    "romaji": "n5 pattern 63",
    "meaningUz": "N5 grammatik qoidasi 63 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_63",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_64",
    "level": "N5",
    "title": "N5 Qoida 64: 〜n5_pattern_64",
    "romaji": "n5 pattern 64",
    "meaningUz": "N5 grammatik qoidasi 64 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_64",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_65",
    "level": "N5",
    "title": "N5 Qoida 65: 〜n5_pattern_65",
    "romaji": "n5 pattern 65",
    "meaningUz": "N5 grammatik qoidasi 65 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_65",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_66",
    "level": "N5",
    "title": "N5 Qoida 66: 〜n5_pattern_66",
    "romaji": "n5 pattern 66",
    "meaningUz": "N5 grammatik qoidasi 66 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_66",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_67",
    "level": "N5",
    "title": "N5 Qoida 67: 〜n5_pattern_67",
    "romaji": "n5 pattern 67",
    "meaningUz": "N5 grammatik qoidasi 67 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_67",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_68",
    "level": "N5",
    "title": "N5 Qoida 68: 〜n5_pattern_68",
    "romaji": "n5 pattern 68",
    "meaningUz": "N5 grammatik qoidasi 68 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_68",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_69",
    "level": "N5",
    "title": "N5 Qoida 69: 〜n5_pattern_69",
    "romaji": "n5 pattern 69",
    "meaningUz": "N5 grammatik qoidasi 69 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_69",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_70",
    "level": "N5",
    "title": "N5 Qoida 70: 〜n5_pattern_70",
    "romaji": "n5 pattern 70",
    "meaningUz": "N5 grammatik qoidasi 70 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_70",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_71",
    "level": "N5",
    "title": "N5 Qoida 71: 〜n5_pattern_71",
    "romaji": "n5 pattern 71",
    "meaningUz": "N5 grammatik qoidasi 71 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_71",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_72",
    "level": "N5",
    "title": "N5 Qoida 72: 〜n5_pattern_72",
    "romaji": "n5 pattern 72",
    "meaningUz": "N5 grammatik qoidasi 72 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_72",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_73",
    "level": "N5",
    "title": "N5 Qoida 73: 〜n5_pattern_73",
    "romaji": "n5 pattern 73",
    "meaningUz": "N5 grammatik qoidasi 73 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_73",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_74",
    "level": "N5",
    "title": "N5 Qoida 74: 〜n5_pattern_74",
    "romaji": "n5 pattern 74",
    "meaningUz": "N5 grammatik qoidasi 74 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_74",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_75",
    "level": "N5",
    "title": "N5 Qoida 75: 〜n5_pattern_75",
    "romaji": "n5 pattern 75",
    "meaningUz": "N5 grammatik qoidasi 75 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_75",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_76",
    "level": "N5",
    "title": "N5 Qoida 76: 〜n5_pattern_76",
    "romaji": "n5 pattern 76",
    "meaningUz": "N5 grammatik qoidasi 76 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_76",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_77",
    "level": "N5",
    "title": "N5 Qoida 77: 〜n5_pattern_77",
    "romaji": "n5 pattern 77",
    "meaningUz": "N5 grammatik qoidasi 77 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_77",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_78",
    "level": "N5",
    "title": "N5 Qoida 78: 〜n5_pattern_78",
    "romaji": "n5 pattern 78",
    "meaningUz": "N5 grammatik qoidasi 78 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_78",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_79",
    "level": "N5",
    "title": "N5 Qoida 79: 〜n5_pattern_79",
    "romaji": "n5 pattern 79",
    "meaningUz": "N5 grammatik qoidasi 79 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_79",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_80",
    "level": "N5",
    "title": "N5 Qoida 80: 〜n5_pattern_80",
    "romaji": "n5 pattern 80",
    "meaningUz": "N5 grammatik qoidasi 80 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_80",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_81",
    "level": "N5",
    "title": "N5 Qoida 81: 〜n5_pattern_81",
    "romaji": "n5 pattern 81",
    "meaningUz": "N5 grammatik qoidasi 81 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_81",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_82",
    "level": "N5",
    "title": "N5 Qoida 82: 〜n5_pattern_82",
    "romaji": "n5 pattern 82",
    "meaningUz": "N5 grammatik qoidasi 82 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_82",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_83",
    "level": "N5",
    "title": "N5 Qoida 83: 〜n5_pattern_83",
    "romaji": "n5 pattern 83",
    "meaningUz": "N5 grammatik qoidasi 83 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_83",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_84",
    "level": "N5",
    "title": "N5 Qoida 84: 〜n5_pattern_84",
    "romaji": "n5 pattern 84",
    "meaningUz": "N5 grammatik qoidasi 84 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_84",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_85",
    "level": "N5",
    "title": "N5 Qoida 85: 〜n5_pattern_85",
    "romaji": "n5 pattern 85",
    "meaningUz": "N5 grammatik qoidasi 85 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_85",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_86",
    "level": "N5",
    "title": "N5 Qoida 86: 〜n5_pattern_86",
    "romaji": "n5 pattern 86",
    "meaningUz": "N5 grammatik qoidasi 86 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_86",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_87",
    "level": "N5",
    "title": "N5 Qoida 87: 〜n5_pattern_87",
    "romaji": "n5 pattern 87",
    "meaningUz": "N5 grammatik qoidasi 87 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_87",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_88",
    "level": "N5",
    "title": "N5 Qoida 88: 〜n5_pattern_88",
    "romaji": "n5 pattern 88",
    "meaningUz": "N5 grammatik qoidasi 88 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_88",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_89",
    "level": "N5",
    "title": "N5 Qoida 89: 〜n5_pattern_89",
    "romaji": "n5 pattern 89",
    "meaningUz": "N5 grammatik qoidasi 89 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_89",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_90",
    "level": "N5",
    "title": "N5 Qoida 90: 〜n5_pattern_90",
    "romaji": "n5 pattern 90",
    "meaningUz": "N5 grammatik qoidasi 90 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_90",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_91",
    "level": "N5",
    "title": "N5 Qoida 91: 〜n5_pattern_91",
    "romaji": "n5 pattern 91",
    "meaningUz": "N5 grammatik qoidasi 91 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_91",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_92",
    "level": "N5",
    "title": "N5 Qoida 92: 〜n5_pattern_92",
    "romaji": "n5 pattern 92",
    "meaningUz": "N5 grammatik qoidasi 92 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_92",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_93",
    "level": "N5",
    "title": "N5 Qoida 93: 〜n5_pattern_93",
    "romaji": "n5 pattern 93",
    "meaningUz": "N5 grammatik qoidasi 93 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_93",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_94",
    "level": "N5",
    "title": "N5 Qoida 94: 〜n5_pattern_94",
    "romaji": "n5 pattern 94",
    "meaningUz": "N5 grammatik qoidasi 94 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_94",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_95",
    "level": "N5",
    "title": "N5 Qoida 95: 〜n5_pattern_95",
    "romaji": "n5 pattern 95",
    "meaningUz": "N5 grammatik qoidasi 95 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_95",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_96",
    "level": "N5",
    "title": "N5 Qoida 96: 〜n5_pattern_96",
    "romaji": "n5 pattern 96",
    "meaningUz": "N5 grammatik qoidasi 96 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_96",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_97",
    "level": "N5",
    "title": "N5 Qoida 97: 〜n5_pattern_97",
    "romaji": "n5 pattern 97",
    "meaningUz": "N5 grammatik qoidasi 97 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_97",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_98",
    "level": "N5",
    "title": "N5 Qoida 98: 〜n5_pattern_98",
    "romaji": "n5 pattern 98",
    "meaningUz": "N5 grammatik qoidasi 98 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_98",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_99",
    "level": "N5",
    "title": "N5 Qoida 99: 〜n5_pattern_99",
    "romaji": "n5 pattern 99",
    "meaningUz": "N5 grammatik qoidasi 99 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_99",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n5_100",
    "level": "N5",
    "title": "N5 Qoida 100: 〜n5_pattern_100",
    "romaji": "n5 pattern 100",
    "meaningUz": "N5 grammatik qoidasi 100 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n5_100",
    "examples": [
      {
        "ja": "私[わたし]はN5の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N5 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N5 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_1",
    "level": "N4",
    "title": "N4 Qoida 1: 〜n4_pattern_1",
    "romaji": "n4 pattern 1",
    "meaningUz": "N4 grammatik qoidasi 1 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_1",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_2",
    "level": "N4",
    "title": "N4 Qoida 2: 〜n4_pattern_2",
    "romaji": "n4 pattern 2",
    "meaningUz": "N4 grammatik qoidasi 2 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_2",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_3",
    "level": "N4",
    "title": "N4 Qoida 3: 〜n4_pattern_3",
    "romaji": "n4 pattern 3",
    "meaningUz": "N4 grammatik qoidasi 3 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_3",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_4",
    "level": "N4",
    "title": "N4 Qoida 4: 〜n4_pattern_4",
    "romaji": "n4 pattern 4",
    "meaningUz": "N4 grammatik qoidasi 4 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_4",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_5",
    "level": "N4",
    "title": "N4 Qoida 5: 〜n4_pattern_5",
    "romaji": "n4 pattern 5",
    "meaningUz": "N4 grammatik qoidasi 5 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_5",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_6",
    "level": "N4",
    "title": "N4 Qoida 6: 〜n4_pattern_6",
    "romaji": "n4 pattern 6",
    "meaningUz": "N4 grammatik qoidasi 6 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_6",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_7",
    "level": "N4",
    "title": "N4 Qoida 7: 〜n4_pattern_7",
    "romaji": "n4 pattern 7",
    "meaningUz": "N4 grammatik qoidasi 7 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_7",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_8",
    "level": "N4",
    "title": "N4 Qoida 8: 〜n4_pattern_8",
    "romaji": "n4 pattern 8",
    "meaningUz": "N4 grammatik qoidasi 8 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_8",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_9",
    "level": "N4",
    "title": "N4 Qoida 9: 〜n4_pattern_9",
    "romaji": "n4 pattern 9",
    "meaningUz": "N4 grammatik qoidasi 9 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_9",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_10",
    "level": "N4",
    "title": "N4 Qoida 10: 〜n4_pattern_10",
    "romaji": "n4 pattern 10",
    "meaningUz": "N4 grammatik qoidasi 10 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_10",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_11",
    "level": "N4",
    "title": "N4 Qoida 11: 〜n4_pattern_11",
    "romaji": "n4 pattern 11",
    "meaningUz": "N4 grammatik qoidasi 11 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_11",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_12",
    "level": "N4",
    "title": "N4 Qoida 12: 〜n4_pattern_12",
    "romaji": "n4 pattern 12",
    "meaningUz": "N4 grammatik qoidasi 12 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_12",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_13",
    "level": "N4",
    "title": "N4 Qoida 13: 〜n4_pattern_13",
    "romaji": "n4 pattern 13",
    "meaningUz": "N4 grammatik qoidasi 13 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_13",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_14",
    "level": "N4",
    "title": "N4 Qoida 14: 〜n4_pattern_14",
    "romaji": "n4 pattern 14",
    "meaningUz": "N4 grammatik qoidasi 14 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_14",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_15",
    "level": "N4",
    "title": "N4 Qoida 15: 〜n4_pattern_15",
    "romaji": "n4 pattern 15",
    "meaningUz": "N4 grammatik qoidasi 15 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_15",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_16",
    "level": "N4",
    "title": "N4 Qoida 16: 〜n4_pattern_16",
    "romaji": "n4 pattern 16",
    "meaningUz": "N4 grammatik qoidasi 16 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_16",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_17",
    "level": "N4",
    "title": "N4 Qoida 17: 〜n4_pattern_17",
    "romaji": "n4 pattern 17",
    "meaningUz": "N4 grammatik qoidasi 17 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_17",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_18",
    "level": "N4",
    "title": "N4 Qoida 18: 〜n4_pattern_18",
    "romaji": "n4 pattern 18",
    "meaningUz": "N4 grammatik qoidasi 18 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_18",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_19",
    "level": "N4",
    "title": "N4 Qoida 19: 〜n4_pattern_19",
    "romaji": "n4 pattern 19",
    "meaningUz": "N4 grammatik qoidasi 19 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_19",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_20",
    "level": "N4",
    "title": "N4 Qoida 20: 〜n4_pattern_20",
    "romaji": "n4 pattern 20",
    "meaningUz": "N4 grammatik qoidasi 20 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_20",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_21",
    "level": "N4",
    "title": "N4 Qoida 21: 〜n4_pattern_21",
    "romaji": "n4 pattern 21",
    "meaningUz": "N4 grammatik qoidasi 21 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_21",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_22",
    "level": "N4",
    "title": "N4 Qoida 22: 〜n4_pattern_22",
    "romaji": "n4 pattern 22",
    "meaningUz": "N4 grammatik qoidasi 22 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_22",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_23",
    "level": "N4",
    "title": "N4 Qoida 23: 〜n4_pattern_23",
    "romaji": "n4 pattern 23",
    "meaningUz": "N4 grammatik qoidasi 23 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_23",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_24",
    "level": "N4",
    "title": "N4 Qoida 24: 〜n4_pattern_24",
    "romaji": "n4 pattern 24",
    "meaningUz": "N4 grammatik qoidasi 24 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_24",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_25",
    "level": "N4",
    "title": "N4 Qoida 25: 〜n4_pattern_25",
    "romaji": "n4 pattern 25",
    "meaningUz": "N4 grammatik qoidasi 25 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_25",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_26",
    "level": "N4",
    "title": "N4 Qoida 26: 〜n4_pattern_26",
    "romaji": "n4 pattern 26",
    "meaningUz": "N4 grammatik qoidasi 26 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_26",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_27",
    "level": "N4",
    "title": "N4 Qoida 27: 〜n4_pattern_27",
    "romaji": "n4 pattern 27",
    "meaningUz": "N4 grammatik qoidasi 27 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_27",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_28",
    "level": "N4",
    "title": "N4 Qoida 28: 〜n4_pattern_28",
    "romaji": "n4 pattern 28",
    "meaningUz": "N4 grammatik qoidasi 28 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_28",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_29",
    "level": "N4",
    "title": "N4 Qoida 29: 〜n4_pattern_29",
    "romaji": "n4 pattern 29",
    "meaningUz": "N4 grammatik qoidasi 29 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_29",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_30",
    "level": "N4",
    "title": "N4 Qoida 30: 〜n4_pattern_30",
    "romaji": "n4 pattern 30",
    "meaningUz": "N4 grammatik qoidasi 30 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_30",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_31",
    "level": "N4",
    "title": "N4 Qoida 31: 〜n4_pattern_31",
    "romaji": "n4 pattern 31",
    "meaningUz": "N4 grammatik qoidasi 31 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_31",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_32",
    "level": "N4",
    "title": "N4 Qoida 32: 〜n4_pattern_32",
    "romaji": "n4 pattern 32",
    "meaningUz": "N4 grammatik qoidasi 32 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_32",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_33",
    "level": "N4",
    "title": "N4 Qoida 33: 〜n4_pattern_33",
    "romaji": "n4 pattern 33",
    "meaningUz": "N4 grammatik qoidasi 33 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_33",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_34",
    "level": "N4",
    "title": "N4 Qoida 34: 〜n4_pattern_34",
    "romaji": "n4 pattern 34",
    "meaningUz": "N4 grammatik qoidasi 34 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_34",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_35",
    "level": "N4",
    "title": "N4 Qoida 35: 〜n4_pattern_35",
    "romaji": "n4 pattern 35",
    "meaningUz": "N4 grammatik qoidasi 35 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_35",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_36",
    "level": "N4",
    "title": "N4 Qoida 36: 〜n4_pattern_36",
    "romaji": "n4 pattern 36",
    "meaningUz": "N4 grammatik qoidasi 36 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_36",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_37",
    "level": "N4",
    "title": "N4 Qoida 37: 〜n4_pattern_37",
    "romaji": "n4 pattern 37",
    "meaningUz": "N4 grammatik qoidasi 37 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_37",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_38",
    "level": "N4",
    "title": "N4 Qoida 38: 〜n4_pattern_38",
    "romaji": "n4 pattern 38",
    "meaningUz": "N4 grammatik qoidasi 38 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_38",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_39",
    "level": "N4",
    "title": "N4 Qoida 39: 〜n4_pattern_39",
    "romaji": "n4 pattern 39",
    "meaningUz": "N4 grammatik qoidasi 39 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_39",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_40",
    "level": "N4",
    "title": "N4 Qoida 40: 〜n4_pattern_40",
    "romaji": "n4 pattern 40",
    "meaningUz": "N4 grammatik qoidasi 40 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_40",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_41",
    "level": "N4",
    "title": "N4 Qoida 41: 〜n4_pattern_41",
    "romaji": "n4 pattern 41",
    "meaningUz": "N4 grammatik qoidasi 41 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_41",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_42",
    "level": "N4",
    "title": "N4 Qoida 42: 〜n4_pattern_42",
    "romaji": "n4 pattern 42",
    "meaningUz": "N4 grammatik qoidasi 42 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_42",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_43",
    "level": "N4",
    "title": "N4 Qoida 43: 〜n4_pattern_43",
    "romaji": "n4 pattern 43",
    "meaningUz": "N4 grammatik qoidasi 43 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_43",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_44",
    "level": "N4",
    "title": "N4 Qoida 44: 〜n4_pattern_44",
    "romaji": "n4 pattern 44",
    "meaningUz": "N4 grammatik qoidasi 44 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_44",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_45",
    "level": "N4",
    "title": "N4 Qoida 45: 〜n4_pattern_45",
    "romaji": "n4 pattern 45",
    "meaningUz": "N4 grammatik qoidasi 45 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_45",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_46",
    "level": "N4",
    "title": "N4 Qoida 46: 〜n4_pattern_46",
    "romaji": "n4 pattern 46",
    "meaningUz": "N4 grammatik qoidasi 46 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_46",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_47",
    "level": "N4",
    "title": "N4 Qoida 47: 〜n4_pattern_47",
    "romaji": "n4 pattern 47",
    "meaningUz": "N4 grammatik qoidasi 47 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_47",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_48",
    "level": "N4",
    "title": "N4 Qoida 48: 〜n4_pattern_48",
    "romaji": "n4 pattern 48",
    "meaningUz": "N4 grammatik qoidasi 48 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_48",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_49",
    "level": "N4",
    "title": "N4 Qoida 49: 〜n4_pattern_49",
    "romaji": "n4 pattern 49",
    "meaningUz": "N4 grammatik qoidasi 49 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_49",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_50",
    "level": "N4",
    "title": "N4 Qoida 50: 〜n4_pattern_50",
    "romaji": "n4 pattern 50",
    "meaningUz": "N4 grammatik qoidasi 50 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_50",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_51",
    "level": "N4",
    "title": "N4 Qoida 51: 〜n4_pattern_51",
    "romaji": "n4 pattern 51",
    "meaningUz": "N4 grammatik qoidasi 51 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_51",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_52",
    "level": "N4",
    "title": "N4 Qoida 52: 〜n4_pattern_52",
    "romaji": "n4 pattern 52",
    "meaningUz": "N4 grammatik qoidasi 52 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_52",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_53",
    "level": "N4",
    "title": "N4 Qoida 53: 〜n4_pattern_53",
    "romaji": "n4 pattern 53",
    "meaningUz": "N4 grammatik qoidasi 53 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_53",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_54",
    "level": "N4",
    "title": "N4 Qoida 54: 〜n4_pattern_54",
    "romaji": "n4 pattern 54",
    "meaningUz": "N4 grammatik qoidasi 54 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_54",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_55",
    "level": "N4",
    "title": "N4 Qoida 55: 〜n4_pattern_55",
    "romaji": "n4 pattern 55",
    "meaningUz": "N4 grammatik qoidasi 55 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_55",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_56",
    "level": "N4",
    "title": "N4 Qoida 56: 〜n4_pattern_56",
    "romaji": "n4 pattern 56",
    "meaningUz": "N4 grammatik qoidasi 56 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_56",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_57",
    "level": "N4",
    "title": "N4 Qoida 57: 〜n4_pattern_57",
    "romaji": "n4 pattern 57",
    "meaningUz": "N4 grammatik qoidasi 57 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_57",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_58",
    "level": "N4",
    "title": "N4 Qoida 58: 〜n4_pattern_58",
    "romaji": "n4 pattern 58",
    "meaningUz": "N4 grammatik qoidasi 58 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_58",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_59",
    "level": "N4",
    "title": "N4 Qoida 59: 〜n4_pattern_59",
    "romaji": "n4 pattern 59",
    "meaningUz": "N4 grammatik qoidasi 59 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_59",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_60",
    "level": "N4",
    "title": "N4 Qoida 60: 〜n4_pattern_60",
    "romaji": "n4 pattern 60",
    "meaningUz": "N4 grammatik qoidasi 60 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_60",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_61",
    "level": "N4",
    "title": "N4 Qoida 61: 〜n4_pattern_61",
    "romaji": "n4 pattern 61",
    "meaningUz": "N4 grammatik qoidasi 61 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_61",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_62",
    "level": "N4",
    "title": "N4 Qoida 62: 〜n4_pattern_62",
    "romaji": "n4 pattern 62",
    "meaningUz": "N4 grammatik qoidasi 62 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_62",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_63",
    "level": "N4",
    "title": "N4 Qoida 63: 〜n4_pattern_63",
    "romaji": "n4 pattern 63",
    "meaningUz": "N4 grammatik qoidasi 63 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_63",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_64",
    "level": "N4",
    "title": "N4 Qoida 64: 〜n4_pattern_64",
    "romaji": "n4 pattern 64",
    "meaningUz": "N4 grammatik qoidasi 64 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_64",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_65",
    "level": "N4",
    "title": "N4 Qoida 65: 〜n4_pattern_65",
    "romaji": "n4 pattern 65",
    "meaningUz": "N4 grammatik qoidasi 65 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_65",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_66",
    "level": "N4",
    "title": "N4 Qoida 66: 〜n4_pattern_66",
    "romaji": "n4 pattern 66",
    "meaningUz": "N4 grammatik qoidasi 66 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_66",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_67",
    "level": "N4",
    "title": "N4 Qoida 67: 〜n4_pattern_67",
    "romaji": "n4 pattern 67",
    "meaningUz": "N4 grammatik qoidasi 67 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_67",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_68",
    "level": "N4",
    "title": "N4 Qoida 68: 〜n4_pattern_68",
    "romaji": "n4 pattern 68",
    "meaningUz": "N4 grammatik qoidasi 68 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_68",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_69",
    "level": "N4",
    "title": "N4 Qoida 69: 〜n4_pattern_69",
    "romaji": "n4 pattern 69",
    "meaningUz": "N4 grammatik qoidasi 69 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_69",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_70",
    "level": "N4",
    "title": "N4 Qoida 70: 〜n4_pattern_70",
    "romaji": "n4 pattern 70",
    "meaningUz": "N4 grammatik qoidasi 70 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_70",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_71",
    "level": "N4",
    "title": "N4 Qoida 71: 〜n4_pattern_71",
    "romaji": "n4 pattern 71",
    "meaningUz": "N4 grammatik qoidasi 71 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_71",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_72",
    "level": "N4",
    "title": "N4 Qoida 72: 〜n4_pattern_72",
    "romaji": "n4 pattern 72",
    "meaningUz": "N4 grammatik qoidasi 72 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_72",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_73",
    "level": "N4",
    "title": "N4 Qoida 73: 〜n4_pattern_73",
    "romaji": "n4 pattern 73",
    "meaningUz": "N4 grammatik qoidasi 73 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_73",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_74",
    "level": "N4",
    "title": "N4 Qoida 74: 〜n4_pattern_74",
    "romaji": "n4 pattern 74",
    "meaningUz": "N4 grammatik qoidasi 74 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_74",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_75",
    "level": "N4",
    "title": "N4 Qoida 75: 〜n4_pattern_75",
    "romaji": "n4 pattern 75",
    "meaningUz": "N4 grammatik qoidasi 75 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_75",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_76",
    "level": "N4",
    "title": "N4 Qoida 76: 〜n4_pattern_76",
    "romaji": "n4 pattern 76",
    "meaningUz": "N4 grammatik qoidasi 76 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_76",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_77",
    "level": "N4",
    "title": "N4 Qoida 77: 〜n4_pattern_77",
    "romaji": "n4 pattern 77",
    "meaningUz": "N4 grammatik qoidasi 77 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_77",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_78",
    "level": "N4",
    "title": "N4 Qoida 78: 〜n4_pattern_78",
    "romaji": "n4 pattern 78",
    "meaningUz": "N4 grammatik qoidasi 78 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_78",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_79",
    "level": "N4",
    "title": "N4 Qoida 79: 〜n4_pattern_79",
    "romaji": "n4 pattern 79",
    "meaningUz": "N4 grammatik qoidasi 79 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_79",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_80",
    "level": "N4",
    "title": "N4 Qoida 80: 〜n4_pattern_80",
    "romaji": "n4 pattern 80",
    "meaningUz": "N4 grammatik qoidasi 80 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_80",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_81",
    "level": "N4",
    "title": "N4 Qoida 81: 〜n4_pattern_81",
    "romaji": "n4 pattern 81",
    "meaningUz": "N4 grammatik qoidasi 81 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_81",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_82",
    "level": "N4",
    "title": "N4 Qoida 82: 〜n4_pattern_82",
    "romaji": "n4 pattern 82",
    "meaningUz": "N4 grammatik qoidasi 82 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_82",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_83",
    "level": "N4",
    "title": "N4 Qoida 83: 〜n4_pattern_83",
    "romaji": "n4 pattern 83",
    "meaningUz": "N4 grammatik qoidasi 83 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_83",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_84",
    "level": "N4",
    "title": "N4 Qoida 84: 〜n4_pattern_84",
    "romaji": "n4 pattern 84",
    "meaningUz": "N4 grammatik qoidasi 84 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_84",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_85",
    "level": "N4",
    "title": "N4 Qoida 85: 〜n4_pattern_85",
    "romaji": "n4 pattern 85",
    "meaningUz": "N4 grammatik qoidasi 85 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_85",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_86",
    "level": "N4",
    "title": "N4 Qoida 86: 〜n4_pattern_86",
    "romaji": "n4 pattern 86",
    "meaningUz": "N4 grammatik qoidasi 86 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_86",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_87",
    "level": "N4",
    "title": "N4 Qoida 87: 〜n4_pattern_87",
    "romaji": "n4 pattern 87",
    "meaningUz": "N4 grammatik qoidasi 87 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_87",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_88",
    "level": "N4",
    "title": "N4 Qoida 88: 〜n4_pattern_88",
    "romaji": "n4 pattern 88",
    "meaningUz": "N4 grammatik qoidasi 88 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_88",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_89",
    "level": "N4",
    "title": "N4 Qoida 89: 〜n4_pattern_89",
    "romaji": "n4 pattern 89",
    "meaningUz": "N4 grammatik qoidasi 89 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_89",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_90",
    "level": "N4",
    "title": "N4 Qoida 90: 〜n4_pattern_90",
    "romaji": "n4 pattern 90",
    "meaningUz": "N4 grammatik qoidasi 90 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_90",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_91",
    "level": "N4",
    "title": "N4 Qoida 91: 〜n4_pattern_91",
    "romaji": "n4 pattern 91",
    "meaningUz": "N4 grammatik qoidasi 91 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_91",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_92",
    "level": "N4",
    "title": "N4 Qoida 92: 〜n4_pattern_92",
    "romaji": "n4 pattern 92",
    "meaningUz": "N4 grammatik qoidasi 92 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_92",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_93",
    "level": "N4",
    "title": "N4 Qoida 93: 〜n4_pattern_93",
    "romaji": "n4 pattern 93",
    "meaningUz": "N4 grammatik qoidasi 93 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_93",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_94",
    "level": "N4",
    "title": "N4 Qoida 94: 〜n4_pattern_94",
    "romaji": "n4 pattern 94",
    "meaningUz": "N4 grammatik qoidasi 94 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_94",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_95",
    "level": "N4",
    "title": "N4 Qoida 95: 〜n4_pattern_95",
    "romaji": "n4 pattern 95",
    "meaningUz": "N4 grammatik qoidasi 95 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_95",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_96",
    "level": "N4",
    "title": "N4 Qoida 96: 〜n4_pattern_96",
    "romaji": "n4 pattern 96",
    "meaningUz": "N4 grammatik qoidasi 96 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_96",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_97",
    "level": "N4",
    "title": "N4 Qoida 97: 〜n4_pattern_97",
    "romaji": "n4 pattern 97",
    "meaningUz": "N4 grammatik qoidasi 97 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_97",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_98",
    "level": "N4",
    "title": "N4 Qoida 98: 〜n4_pattern_98",
    "romaji": "n4 pattern 98",
    "meaningUz": "N4 grammatik qoidasi 98 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_98",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_99",
    "level": "N4",
    "title": "N4 Qoida 99: 〜n4_pattern_99",
    "romaji": "n4 pattern 99",
    "meaningUz": "N4 grammatik qoidasi 99 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_99",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_100",
    "level": "N4",
    "title": "N4 Qoida 100: 〜n4_pattern_100",
    "romaji": "n4 pattern 100",
    "meaningUz": "N4 grammatik qoidasi 100 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_100",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_101",
    "level": "N4",
    "title": "N4 Qoida 101: 〜n4_pattern_101",
    "romaji": "n4 pattern 101",
    "meaningUz": "N4 grammatik qoidasi 101 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_101",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_102",
    "level": "N4",
    "title": "N4 Qoida 102: 〜n4_pattern_102",
    "romaji": "n4 pattern 102",
    "meaningUz": "N4 grammatik qoidasi 102 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_102",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_103",
    "level": "N4",
    "title": "N4 Qoida 103: 〜n4_pattern_103",
    "romaji": "n4 pattern 103",
    "meaningUz": "N4 grammatik qoidasi 103 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_103",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_104",
    "level": "N4",
    "title": "N4 Qoida 104: 〜n4_pattern_104",
    "romaji": "n4 pattern 104",
    "meaningUz": "N4 grammatik qoidasi 104 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_104",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_105",
    "level": "N4",
    "title": "N4 Qoida 105: 〜n4_pattern_105",
    "romaji": "n4 pattern 105",
    "meaningUz": "N4 grammatik qoidasi 105 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_105",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_106",
    "level": "N4",
    "title": "N4 Qoida 106: 〜n4_pattern_106",
    "romaji": "n4 pattern 106",
    "meaningUz": "N4 grammatik qoidasi 106 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_106",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_107",
    "level": "N4",
    "title": "N4 Qoida 107: 〜n4_pattern_107",
    "romaji": "n4 pattern 107",
    "meaningUz": "N4 grammatik qoidasi 107 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_107",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_108",
    "level": "N4",
    "title": "N4 Qoida 108: 〜n4_pattern_108",
    "romaji": "n4 pattern 108",
    "meaningUz": "N4 grammatik qoidasi 108 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_108",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_109",
    "level": "N4",
    "title": "N4 Qoida 109: 〜n4_pattern_109",
    "romaji": "n4 pattern 109",
    "meaningUz": "N4 grammatik qoidasi 109 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_109",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_110",
    "level": "N4",
    "title": "N4 Qoida 110: 〜n4_pattern_110",
    "romaji": "n4 pattern 110",
    "meaningUz": "N4 grammatik qoidasi 110 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_110",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_111",
    "level": "N4",
    "title": "N4 Qoida 111: 〜n4_pattern_111",
    "romaji": "n4 pattern 111",
    "meaningUz": "N4 grammatik qoidasi 111 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_111",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_112",
    "level": "N4",
    "title": "N4 Qoida 112: 〜n4_pattern_112",
    "romaji": "n4 pattern 112",
    "meaningUz": "N4 grammatik qoidasi 112 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_112",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_113",
    "level": "N4",
    "title": "N4 Qoida 113: 〜n4_pattern_113",
    "romaji": "n4 pattern 113",
    "meaningUz": "N4 grammatik qoidasi 113 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_113",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_114",
    "level": "N4",
    "title": "N4 Qoida 114: 〜n4_pattern_114",
    "romaji": "n4 pattern 114",
    "meaningUz": "N4 grammatik qoidasi 114 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_114",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_115",
    "level": "N4",
    "title": "N4 Qoida 115: 〜n4_pattern_115",
    "romaji": "n4 pattern 115",
    "meaningUz": "N4 grammatik qoidasi 115 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_115",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_116",
    "level": "N4",
    "title": "N4 Qoida 116: 〜n4_pattern_116",
    "romaji": "n4 pattern 116",
    "meaningUz": "N4 grammatik qoidasi 116 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_116",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_117",
    "level": "N4",
    "title": "N4 Qoida 117: 〜n4_pattern_117",
    "romaji": "n4 pattern 117",
    "meaningUz": "N4 grammatik qoidasi 117 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_117",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_118",
    "level": "N4",
    "title": "N4 Qoida 118: 〜n4_pattern_118",
    "romaji": "n4 pattern 118",
    "meaningUz": "N4 grammatik qoidasi 118 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_118",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_119",
    "level": "N4",
    "title": "N4 Qoida 119: 〜n4_pattern_119",
    "romaji": "n4 pattern 119",
    "meaningUz": "N4 grammatik qoidasi 119 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_119",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n4_120",
    "level": "N4",
    "title": "N4 Qoida 120: 〜n4_pattern_120",
    "romaji": "n4 pattern 120",
    "meaningUz": "N4 grammatik qoidasi 120 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n4_120",
    "examples": [
      {
        "ja": "私[わたし]はN4の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N4 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N4 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_1",
    "level": "N3",
    "title": "N3 Qoida 1: 〜n3_pattern_1",
    "romaji": "n3 pattern 1",
    "meaningUz": "N3 grammatik qoidasi 1 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_1",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_2",
    "level": "N3",
    "title": "N3 Qoida 2: 〜n3_pattern_2",
    "romaji": "n3 pattern 2",
    "meaningUz": "N3 grammatik qoidasi 2 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_2",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_3",
    "level": "N3",
    "title": "N3 Qoida 3: 〜n3_pattern_3",
    "romaji": "n3 pattern 3",
    "meaningUz": "N3 grammatik qoidasi 3 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_3",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_4",
    "level": "N3",
    "title": "N3 Qoida 4: 〜n3_pattern_4",
    "romaji": "n3 pattern 4",
    "meaningUz": "N3 grammatik qoidasi 4 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_4",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_5",
    "level": "N3",
    "title": "N3 Qoida 5: 〜n3_pattern_5",
    "romaji": "n3 pattern 5",
    "meaningUz": "N3 grammatik qoidasi 5 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_5",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_6",
    "level": "N3",
    "title": "N3 Qoida 6: 〜n3_pattern_6",
    "romaji": "n3 pattern 6",
    "meaningUz": "N3 grammatik qoidasi 6 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_6",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_7",
    "level": "N3",
    "title": "N3 Qoida 7: 〜n3_pattern_7",
    "romaji": "n3 pattern 7",
    "meaningUz": "N3 grammatik qoidasi 7 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_7",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_8",
    "level": "N3",
    "title": "N3 Qoida 8: 〜n3_pattern_8",
    "romaji": "n3 pattern 8",
    "meaningUz": "N3 grammatik qoidasi 8 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_8",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_9",
    "level": "N3",
    "title": "N3 Qoida 9: 〜n3_pattern_9",
    "romaji": "n3 pattern 9",
    "meaningUz": "N3 grammatik qoidasi 9 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_9",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_10",
    "level": "N3",
    "title": "N3 Qoida 10: 〜n3_pattern_10",
    "romaji": "n3 pattern 10",
    "meaningUz": "N3 grammatik qoidasi 10 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_10",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_11",
    "level": "N3",
    "title": "N3 Qoida 11: 〜n3_pattern_11",
    "romaji": "n3 pattern 11",
    "meaningUz": "N3 grammatik qoidasi 11 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_11",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_12",
    "level": "N3",
    "title": "N3 Qoida 12: 〜n3_pattern_12",
    "romaji": "n3 pattern 12",
    "meaningUz": "N3 grammatik qoidasi 12 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_12",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_13",
    "level": "N3",
    "title": "N3 Qoida 13: 〜n3_pattern_13",
    "romaji": "n3 pattern 13",
    "meaningUz": "N3 grammatik qoidasi 13 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_13",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_14",
    "level": "N3",
    "title": "N3 Qoida 14: 〜n3_pattern_14",
    "romaji": "n3 pattern 14",
    "meaningUz": "N3 grammatik qoidasi 14 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_14",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_15",
    "level": "N3",
    "title": "N3 Qoida 15: 〜n3_pattern_15",
    "romaji": "n3 pattern 15",
    "meaningUz": "N3 grammatik qoidasi 15 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_15",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_16",
    "level": "N3",
    "title": "N3 Qoida 16: 〜n3_pattern_16",
    "romaji": "n3 pattern 16",
    "meaningUz": "N3 grammatik qoidasi 16 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_16",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_17",
    "level": "N3",
    "title": "N3 Qoida 17: 〜n3_pattern_17",
    "romaji": "n3 pattern 17",
    "meaningUz": "N3 grammatik qoidasi 17 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_17",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_18",
    "level": "N3",
    "title": "N3 Qoida 18: 〜n3_pattern_18",
    "romaji": "n3 pattern 18",
    "meaningUz": "N3 grammatik qoidasi 18 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_18",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_19",
    "level": "N3",
    "title": "N3 Qoida 19: 〜n3_pattern_19",
    "romaji": "n3 pattern 19",
    "meaningUz": "N3 grammatik qoidasi 19 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_19",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_20",
    "level": "N3",
    "title": "N3 Qoida 20: 〜n3_pattern_20",
    "romaji": "n3 pattern 20",
    "meaningUz": "N3 grammatik qoidasi 20 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_20",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_21",
    "level": "N3",
    "title": "N3 Qoida 21: 〜n3_pattern_21",
    "romaji": "n3 pattern 21",
    "meaningUz": "N3 grammatik qoidasi 21 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_21",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_22",
    "level": "N3",
    "title": "N3 Qoida 22: 〜n3_pattern_22",
    "romaji": "n3 pattern 22",
    "meaningUz": "N3 grammatik qoidasi 22 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_22",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_23",
    "level": "N3",
    "title": "N3 Qoida 23: 〜n3_pattern_23",
    "romaji": "n3 pattern 23",
    "meaningUz": "N3 grammatik qoidasi 23 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_23",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_24",
    "level": "N3",
    "title": "N3 Qoida 24: 〜n3_pattern_24",
    "romaji": "n3 pattern 24",
    "meaningUz": "N3 grammatik qoidasi 24 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_24",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_25",
    "level": "N3",
    "title": "N3 Qoida 25: 〜n3_pattern_25",
    "romaji": "n3 pattern 25",
    "meaningUz": "N3 grammatik qoidasi 25 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_25",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_26",
    "level": "N3",
    "title": "N3 Qoida 26: 〜n3_pattern_26",
    "romaji": "n3 pattern 26",
    "meaningUz": "N3 grammatik qoidasi 26 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_26",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_27",
    "level": "N3",
    "title": "N3 Qoida 27: 〜n3_pattern_27",
    "romaji": "n3 pattern 27",
    "meaningUz": "N3 grammatik qoidasi 27 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_27",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_28",
    "level": "N3",
    "title": "N3 Qoida 28: 〜n3_pattern_28",
    "romaji": "n3 pattern 28",
    "meaningUz": "N3 grammatik qoidasi 28 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_28",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_29",
    "level": "N3",
    "title": "N3 Qoida 29: 〜n3_pattern_29",
    "romaji": "n3 pattern 29",
    "meaningUz": "N3 grammatik qoidasi 29 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_29",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_30",
    "level": "N3",
    "title": "N3 Qoida 30: 〜n3_pattern_30",
    "romaji": "n3 pattern 30",
    "meaningUz": "N3 grammatik qoidasi 30 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_30",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_31",
    "level": "N3",
    "title": "N3 Qoida 31: 〜n3_pattern_31",
    "romaji": "n3 pattern 31",
    "meaningUz": "N3 grammatik qoidasi 31 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_31",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_32",
    "level": "N3",
    "title": "N3 Qoida 32: 〜n3_pattern_32",
    "romaji": "n3 pattern 32",
    "meaningUz": "N3 grammatik qoidasi 32 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_32",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_33",
    "level": "N3",
    "title": "N3 Qoida 33: 〜n3_pattern_33",
    "romaji": "n3 pattern 33",
    "meaningUz": "N3 grammatik qoidasi 33 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_33",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_34",
    "level": "N3",
    "title": "N3 Qoida 34: 〜n3_pattern_34",
    "romaji": "n3 pattern 34",
    "meaningUz": "N3 grammatik qoidasi 34 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_34",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_35",
    "level": "N3",
    "title": "N3 Qoida 35: 〜n3_pattern_35",
    "romaji": "n3 pattern 35",
    "meaningUz": "N3 grammatik qoidasi 35 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_35",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_36",
    "level": "N3",
    "title": "N3 Qoida 36: 〜n3_pattern_36",
    "romaji": "n3 pattern 36",
    "meaningUz": "N3 grammatik qoidasi 36 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_36",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_37",
    "level": "N3",
    "title": "N3 Qoida 37: 〜n3_pattern_37",
    "romaji": "n3 pattern 37",
    "meaningUz": "N3 grammatik qoidasi 37 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_37",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_38",
    "level": "N3",
    "title": "N3 Qoida 38: 〜n3_pattern_38",
    "romaji": "n3 pattern 38",
    "meaningUz": "N3 grammatik qoidasi 38 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_38",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_39",
    "level": "N3",
    "title": "N3 Qoida 39: 〜n3_pattern_39",
    "romaji": "n3 pattern 39",
    "meaningUz": "N3 grammatik qoidasi 39 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_39",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_40",
    "level": "N3",
    "title": "N3 Qoida 40: 〜n3_pattern_40",
    "romaji": "n3 pattern 40",
    "meaningUz": "N3 grammatik qoidasi 40 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_40",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_41",
    "level": "N3",
    "title": "N3 Qoida 41: 〜n3_pattern_41",
    "romaji": "n3 pattern 41",
    "meaningUz": "N3 grammatik qoidasi 41 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_41",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_42",
    "level": "N3",
    "title": "N3 Qoida 42: 〜n3_pattern_42",
    "romaji": "n3 pattern 42",
    "meaningUz": "N3 grammatik qoidasi 42 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_42",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_43",
    "level": "N3",
    "title": "N3 Qoida 43: 〜n3_pattern_43",
    "romaji": "n3 pattern 43",
    "meaningUz": "N3 grammatik qoidasi 43 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_43",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_44",
    "level": "N3",
    "title": "N3 Qoida 44: 〜n3_pattern_44",
    "romaji": "n3 pattern 44",
    "meaningUz": "N3 grammatik qoidasi 44 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_44",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_45",
    "level": "N3",
    "title": "N3 Qoida 45: 〜n3_pattern_45",
    "romaji": "n3 pattern 45",
    "meaningUz": "N3 grammatik qoidasi 45 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_45",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_46",
    "level": "N3",
    "title": "N3 Qoida 46: 〜n3_pattern_46",
    "romaji": "n3 pattern 46",
    "meaningUz": "N3 grammatik qoidasi 46 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_46",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_47",
    "level": "N3",
    "title": "N3 Qoida 47: 〜n3_pattern_47",
    "romaji": "n3 pattern 47",
    "meaningUz": "N3 grammatik qoidasi 47 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_47",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_48",
    "level": "N3",
    "title": "N3 Qoida 48: 〜n3_pattern_48",
    "romaji": "n3 pattern 48",
    "meaningUz": "N3 grammatik qoidasi 48 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_48",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_49",
    "level": "N3",
    "title": "N3 Qoida 49: 〜n3_pattern_49",
    "romaji": "n3 pattern 49",
    "meaningUz": "N3 grammatik qoidasi 49 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_49",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_50",
    "level": "N3",
    "title": "N3 Qoida 50: 〜n3_pattern_50",
    "romaji": "n3 pattern 50",
    "meaningUz": "N3 grammatik qoidasi 50 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_50",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_51",
    "level": "N3",
    "title": "N3 Qoida 51: 〜n3_pattern_51",
    "romaji": "n3 pattern 51",
    "meaningUz": "N3 grammatik qoidasi 51 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_51",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_52",
    "level": "N3",
    "title": "N3 Qoida 52: 〜n3_pattern_52",
    "romaji": "n3 pattern 52",
    "meaningUz": "N3 grammatik qoidasi 52 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_52",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_53",
    "level": "N3",
    "title": "N3 Qoida 53: 〜n3_pattern_53",
    "romaji": "n3 pattern 53",
    "meaningUz": "N3 grammatik qoidasi 53 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_53",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_54",
    "level": "N3",
    "title": "N3 Qoida 54: 〜n3_pattern_54",
    "romaji": "n3 pattern 54",
    "meaningUz": "N3 grammatik qoidasi 54 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_54",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_55",
    "level": "N3",
    "title": "N3 Qoida 55: 〜n3_pattern_55",
    "romaji": "n3 pattern 55",
    "meaningUz": "N3 grammatik qoidasi 55 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_55",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_56",
    "level": "N3",
    "title": "N3 Qoida 56: 〜n3_pattern_56",
    "romaji": "n3 pattern 56",
    "meaningUz": "N3 grammatik qoidasi 56 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_56",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_57",
    "level": "N3",
    "title": "N3 Qoida 57: 〜n3_pattern_57",
    "romaji": "n3 pattern 57",
    "meaningUz": "N3 grammatik qoidasi 57 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_57",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_58",
    "level": "N3",
    "title": "N3 Qoida 58: 〜n3_pattern_58",
    "romaji": "n3 pattern 58",
    "meaningUz": "N3 grammatik qoidasi 58 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_58",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_59",
    "level": "N3",
    "title": "N3 Qoida 59: 〜n3_pattern_59",
    "romaji": "n3 pattern 59",
    "meaningUz": "N3 grammatik qoidasi 59 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_59",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_60",
    "level": "N3",
    "title": "N3 Qoida 60: 〜n3_pattern_60",
    "romaji": "n3 pattern 60",
    "meaningUz": "N3 grammatik qoidasi 60 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_60",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_61",
    "level": "N3",
    "title": "N3 Qoida 61: 〜n3_pattern_61",
    "romaji": "n3 pattern 61",
    "meaningUz": "N3 grammatik qoidasi 61 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_61",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_62",
    "level": "N3",
    "title": "N3 Qoida 62: 〜n3_pattern_62",
    "romaji": "n3 pattern 62",
    "meaningUz": "N3 grammatik qoidasi 62 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_62",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_63",
    "level": "N3",
    "title": "N3 Qoida 63: 〜n3_pattern_63",
    "romaji": "n3 pattern 63",
    "meaningUz": "N3 grammatik qoidasi 63 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_63",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_64",
    "level": "N3",
    "title": "N3 Qoida 64: 〜n3_pattern_64",
    "romaji": "n3 pattern 64",
    "meaningUz": "N3 grammatik qoidasi 64 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_64",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_65",
    "level": "N3",
    "title": "N3 Qoida 65: 〜n3_pattern_65",
    "romaji": "n3 pattern 65",
    "meaningUz": "N3 grammatik qoidasi 65 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_65",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_66",
    "level": "N3",
    "title": "N3 Qoida 66: 〜n3_pattern_66",
    "romaji": "n3 pattern 66",
    "meaningUz": "N3 grammatik qoidasi 66 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_66",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_67",
    "level": "N3",
    "title": "N3 Qoida 67: 〜n3_pattern_67",
    "romaji": "n3 pattern 67",
    "meaningUz": "N3 grammatik qoidasi 67 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_67",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_68",
    "level": "N3",
    "title": "N3 Qoida 68: 〜n3_pattern_68",
    "romaji": "n3 pattern 68",
    "meaningUz": "N3 grammatik qoidasi 68 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_68",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_69",
    "level": "N3",
    "title": "N3 Qoida 69: 〜n3_pattern_69",
    "romaji": "n3 pattern 69",
    "meaningUz": "N3 grammatik qoidasi 69 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_69",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_70",
    "level": "N3",
    "title": "N3 Qoida 70: 〜n3_pattern_70",
    "romaji": "n3 pattern 70",
    "meaningUz": "N3 grammatik qoidasi 70 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_70",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_71",
    "level": "N3",
    "title": "N3 Qoida 71: 〜n3_pattern_71",
    "romaji": "n3 pattern 71",
    "meaningUz": "N3 grammatik qoidasi 71 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_71",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_72",
    "level": "N3",
    "title": "N3 Qoida 72: 〜n3_pattern_72",
    "romaji": "n3 pattern 72",
    "meaningUz": "N3 grammatik qoidasi 72 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_72",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_73",
    "level": "N3",
    "title": "N3 Qoida 73: 〜n3_pattern_73",
    "romaji": "n3 pattern 73",
    "meaningUz": "N3 grammatik qoidasi 73 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_73",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_74",
    "level": "N3",
    "title": "N3 Qoida 74: 〜n3_pattern_74",
    "romaji": "n3 pattern 74",
    "meaningUz": "N3 grammatik qoidasi 74 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_74",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_75",
    "level": "N3",
    "title": "N3 Qoida 75: 〜n3_pattern_75",
    "romaji": "n3 pattern 75",
    "meaningUz": "N3 grammatik qoidasi 75 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_75",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_76",
    "level": "N3",
    "title": "N3 Qoida 76: 〜n3_pattern_76",
    "romaji": "n3 pattern 76",
    "meaningUz": "N3 grammatik qoidasi 76 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_76",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_77",
    "level": "N3",
    "title": "N3 Qoida 77: 〜n3_pattern_77",
    "romaji": "n3 pattern 77",
    "meaningUz": "N3 grammatik qoidasi 77 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_77",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_78",
    "level": "N3",
    "title": "N3 Qoida 78: 〜n3_pattern_78",
    "romaji": "n3 pattern 78",
    "meaningUz": "N3 grammatik qoidasi 78 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_78",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_79",
    "level": "N3",
    "title": "N3 Qoida 79: 〜n3_pattern_79",
    "romaji": "n3 pattern 79",
    "meaningUz": "N3 grammatik qoidasi 79 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_79",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_80",
    "level": "N3",
    "title": "N3 Qoida 80: 〜n3_pattern_80",
    "romaji": "n3 pattern 80",
    "meaningUz": "N3 grammatik qoidasi 80 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_80",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_81",
    "level": "N3",
    "title": "N3 Qoida 81: 〜n3_pattern_81",
    "romaji": "n3 pattern 81",
    "meaningUz": "N3 grammatik qoidasi 81 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_81",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_82",
    "level": "N3",
    "title": "N3 Qoida 82: 〜n3_pattern_82",
    "romaji": "n3 pattern 82",
    "meaningUz": "N3 grammatik qoidasi 82 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_82",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_83",
    "level": "N3",
    "title": "N3 Qoida 83: 〜n3_pattern_83",
    "romaji": "n3 pattern 83",
    "meaningUz": "N3 grammatik qoidasi 83 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_83",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_84",
    "level": "N3",
    "title": "N3 Qoida 84: 〜n3_pattern_84",
    "romaji": "n3 pattern 84",
    "meaningUz": "N3 grammatik qoidasi 84 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_84",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_85",
    "level": "N3",
    "title": "N3 Qoida 85: 〜n3_pattern_85",
    "romaji": "n3 pattern 85",
    "meaningUz": "N3 grammatik qoidasi 85 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_85",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_86",
    "level": "N3",
    "title": "N3 Qoida 86: 〜n3_pattern_86",
    "romaji": "n3 pattern 86",
    "meaningUz": "N3 grammatik qoidasi 86 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_86",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_87",
    "level": "N3",
    "title": "N3 Qoida 87: 〜n3_pattern_87",
    "romaji": "n3 pattern 87",
    "meaningUz": "N3 grammatik qoidasi 87 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_87",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_88",
    "level": "N3",
    "title": "N3 Qoida 88: 〜n3_pattern_88",
    "romaji": "n3 pattern 88",
    "meaningUz": "N3 grammatik qoidasi 88 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_88",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_89",
    "level": "N3",
    "title": "N3 Qoida 89: 〜n3_pattern_89",
    "romaji": "n3 pattern 89",
    "meaningUz": "N3 grammatik qoidasi 89 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_89",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_90",
    "level": "N3",
    "title": "N3 Qoida 90: 〜n3_pattern_90",
    "romaji": "n3 pattern 90",
    "meaningUz": "N3 grammatik qoidasi 90 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_90",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_91",
    "level": "N3",
    "title": "N3 Qoida 91: 〜n3_pattern_91",
    "romaji": "n3 pattern 91",
    "meaningUz": "N3 grammatik qoidasi 91 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_91",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_92",
    "level": "N3",
    "title": "N3 Qoida 92: 〜n3_pattern_92",
    "romaji": "n3 pattern 92",
    "meaningUz": "N3 grammatik qoidasi 92 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_92",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_93",
    "level": "N3",
    "title": "N3 Qoida 93: 〜n3_pattern_93",
    "romaji": "n3 pattern 93",
    "meaningUz": "N3 grammatik qoidasi 93 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_93",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_94",
    "level": "N3",
    "title": "N3 Qoida 94: 〜n3_pattern_94",
    "romaji": "n3 pattern 94",
    "meaningUz": "N3 grammatik qoidasi 94 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_94",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_95",
    "level": "N3",
    "title": "N3 Qoida 95: 〜n3_pattern_95",
    "romaji": "n3 pattern 95",
    "meaningUz": "N3 grammatik qoidasi 95 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_95",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_96",
    "level": "N3",
    "title": "N3 Qoida 96: 〜n3_pattern_96",
    "romaji": "n3 pattern 96",
    "meaningUz": "N3 grammatik qoidasi 96 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_96",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_97",
    "level": "N3",
    "title": "N3 Qoida 97: 〜n3_pattern_97",
    "romaji": "n3 pattern 97",
    "meaningUz": "N3 grammatik qoidasi 97 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_97",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_98",
    "level": "N3",
    "title": "N3 Qoida 98: 〜n3_pattern_98",
    "romaji": "n3 pattern 98",
    "meaningUz": "N3 grammatik qoidasi 98 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_98",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_99",
    "level": "N3",
    "title": "N3 Qoida 99: 〜n3_pattern_99",
    "romaji": "n3 pattern 99",
    "meaningUz": "N3 grammatik qoidasi 99 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_99",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_100",
    "level": "N3",
    "title": "N3 Qoida 100: 〜n3_pattern_100",
    "romaji": "n3 pattern 100",
    "meaningUz": "N3 grammatik qoidasi 100 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_100",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_101",
    "level": "N3",
    "title": "N3 Qoida 101: 〜n3_pattern_101",
    "romaji": "n3 pattern 101",
    "meaningUz": "N3 grammatik qoidasi 101 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_101",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_102",
    "level": "N3",
    "title": "N3 Qoida 102: 〜n3_pattern_102",
    "romaji": "n3 pattern 102",
    "meaningUz": "N3 grammatik qoidasi 102 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_102",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_103",
    "level": "N3",
    "title": "N3 Qoida 103: 〜n3_pattern_103",
    "romaji": "n3 pattern 103",
    "meaningUz": "N3 grammatik qoidasi 103 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_103",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_104",
    "level": "N3",
    "title": "N3 Qoida 104: 〜n3_pattern_104",
    "romaji": "n3 pattern 104",
    "meaningUz": "N3 grammatik qoidasi 104 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_104",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_105",
    "level": "N3",
    "title": "N3 Qoida 105: 〜n3_pattern_105",
    "romaji": "n3 pattern 105",
    "meaningUz": "N3 grammatik qoidasi 105 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_105",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_106",
    "level": "N3",
    "title": "N3 Qoida 106: 〜n3_pattern_106",
    "romaji": "n3 pattern 106",
    "meaningUz": "N3 grammatik qoidasi 106 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_106",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_107",
    "level": "N3",
    "title": "N3 Qoida 107: 〜n3_pattern_107",
    "romaji": "n3 pattern 107",
    "meaningUz": "N3 grammatik qoidasi 107 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_107",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_108",
    "level": "N3",
    "title": "N3 Qoida 108: 〜n3_pattern_108",
    "romaji": "n3 pattern 108",
    "meaningUz": "N3 grammatik qoidasi 108 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_108",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_109",
    "level": "N3",
    "title": "N3 Qoida 109: 〜n3_pattern_109",
    "romaji": "n3 pattern 109",
    "meaningUz": "N3 grammatik qoidasi 109 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_109",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_110",
    "level": "N3",
    "title": "N3 Qoida 110: 〜n3_pattern_110",
    "romaji": "n3 pattern 110",
    "meaningUz": "N3 grammatik qoidasi 110 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_110",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_111",
    "level": "N3",
    "title": "N3 Qoida 111: 〜n3_pattern_111",
    "romaji": "n3 pattern 111",
    "meaningUz": "N3 grammatik qoidasi 111 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_111",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_112",
    "level": "N3",
    "title": "N3 Qoida 112: 〜n3_pattern_112",
    "romaji": "n3 pattern 112",
    "meaningUz": "N3 grammatik qoidasi 112 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_112",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_113",
    "level": "N3",
    "title": "N3 Qoida 113: 〜n3_pattern_113",
    "romaji": "n3 pattern 113",
    "meaningUz": "N3 grammatik qoidasi 113 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_113",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_114",
    "level": "N3",
    "title": "N3 Qoida 114: 〜n3_pattern_114",
    "romaji": "n3 pattern 114",
    "meaningUz": "N3 grammatik qoidasi 114 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_114",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_115",
    "level": "N3",
    "title": "N3 Qoida 115: 〜n3_pattern_115",
    "romaji": "n3 pattern 115",
    "meaningUz": "N3 grammatik qoidasi 115 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_115",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_116",
    "level": "N3",
    "title": "N3 Qoida 116: 〜n3_pattern_116",
    "romaji": "n3 pattern 116",
    "meaningUz": "N3 grammatik qoidasi 116 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_116",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_117",
    "level": "N3",
    "title": "N3 Qoida 117: 〜n3_pattern_117",
    "romaji": "n3 pattern 117",
    "meaningUz": "N3 grammatik qoidasi 117 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_117",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_118",
    "level": "N3",
    "title": "N3 Qoida 118: 〜n3_pattern_118",
    "romaji": "n3 pattern 118",
    "meaningUz": "N3 grammatik qoidasi 118 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_118",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_119",
    "level": "N3",
    "title": "N3 Qoida 119: 〜n3_pattern_119",
    "romaji": "n3 pattern 119",
    "meaningUz": "N3 grammatik qoidasi 119 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_119",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_120",
    "level": "N3",
    "title": "N3 Qoida 120: 〜n3_pattern_120",
    "romaji": "n3 pattern 120",
    "meaningUz": "N3 grammatik qoidasi 120 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_120",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_121",
    "level": "N3",
    "title": "N3 Qoida 121: 〜n3_pattern_121",
    "romaji": "n3 pattern 121",
    "meaningUz": "N3 grammatik qoidasi 121 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_121",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_122",
    "level": "N3",
    "title": "N3 Qoida 122: 〜n3_pattern_122",
    "romaji": "n3 pattern 122",
    "meaningUz": "N3 grammatik qoidasi 122 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_122",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_123",
    "level": "N3",
    "title": "N3 Qoida 123: 〜n3_pattern_123",
    "romaji": "n3 pattern 123",
    "meaningUz": "N3 grammatik qoidasi 123 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_123",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_124",
    "level": "N3",
    "title": "N3 Qoida 124: 〜n3_pattern_124",
    "romaji": "n3 pattern 124",
    "meaningUz": "N3 grammatik qoidasi 124 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_124",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_125",
    "level": "N3",
    "title": "N3 Qoida 125: 〜n3_pattern_125",
    "romaji": "n3 pattern 125",
    "meaningUz": "N3 grammatik qoidasi 125 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_125",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_126",
    "level": "N3",
    "title": "N3 Qoida 126: 〜n3_pattern_126",
    "romaji": "n3 pattern 126",
    "meaningUz": "N3 grammatik qoidasi 126 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_126",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_127",
    "level": "N3",
    "title": "N3 Qoida 127: 〜n3_pattern_127",
    "romaji": "n3 pattern 127",
    "meaningUz": "N3 grammatik qoidasi 127 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_127",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_128",
    "level": "N3",
    "title": "N3 Qoida 128: 〜n3_pattern_128",
    "romaji": "n3 pattern 128",
    "meaningUz": "N3 grammatik qoidasi 128 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_128",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_129",
    "level": "N3",
    "title": "N3 Qoida 129: 〜n3_pattern_129",
    "romaji": "n3 pattern 129",
    "meaningUz": "N3 grammatik qoidasi 129 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_129",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_130",
    "level": "N3",
    "title": "N3 Qoida 130: 〜n3_pattern_130",
    "romaji": "n3 pattern 130",
    "meaningUz": "N3 grammatik qoidasi 130 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_130",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_131",
    "level": "N3",
    "title": "N3 Qoida 131: 〜n3_pattern_131",
    "romaji": "n3 pattern 131",
    "meaningUz": "N3 grammatik qoidasi 131 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_131",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_132",
    "level": "N3",
    "title": "N3 Qoida 132: 〜n3_pattern_132",
    "romaji": "n3 pattern 132",
    "meaningUz": "N3 grammatik qoidasi 132 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_132",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_133",
    "level": "N3",
    "title": "N3 Qoida 133: 〜n3_pattern_133",
    "romaji": "n3 pattern 133",
    "meaningUz": "N3 grammatik qoidasi 133 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_133",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_134",
    "level": "N3",
    "title": "N3 Qoida 134: 〜n3_pattern_134",
    "romaji": "n3 pattern 134",
    "meaningUz": "N3 grammatik qoidasi 134 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_134",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_135",
    "level": "N3",
    "title": "N3 Qoida 135: 〜n3_pattern_135",
    "romaji": "n3 pattern 135",
    "meaningUz": "N3 grammatik qoidasi 135 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_135",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_136",
    "level": "N3",
    "title": "N3 Qoida 136: 〜n3_pattern_136",
    "romaji": "n3 pattern 136",
    "meaningUz": "N3 grammatik qoidasi 136 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_136",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_137",
    "level": "N3",
    "title": "N3 Qoida 137: 〜n3_pattern_137",
    "romaji": "n3 pattern 137",
    "meaningUz": "N3 grammatik qoidasi 137 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_137",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_138",
    "level": "N3",
    "title": "N3 Qoida 138: 〜n3_pattern_138",
    "romaji": "n3 pattern 138",
    "meaningUz": "N3 grammatik qoidasi 138 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_138",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_139",
    "level": "N3",
    "title": "N3 Qoida 139: 〜n3_pattern_139",
    "romaji": "n3 pattern 139",
    "meaningUz": "N3 grammatik qoidasi 139 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_139",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_140",
    "level": "N3",
    "title": "N3 Qoida 140: 〜n3_pattern_140",
    "romaji": "n3 pattern 140",
    "meaningUz": "N3 grammatik qoidasi 140 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_140",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_141",
    "level": "N3",
    "title": "N3 Qoida 141: 〜n3_pattern_141",
    "romaji": "n3 pattern 141",
    "meaningUz": "N3 grammatik qoidasi 141 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_141",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_142",
    "level": "N3",
    "title": "N3 Qoida 142: 〜n3_pattern_142",
    "romaji": "n3 pattern 142",
    "meaningUz": "N3 grammatik qoidasi 142 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_142",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_143",
    "level": "N3",
    "title": "N3 Qoida 143: 〜n3_pattern_143",
    "romaji": "n3 pattern 143",
    "meaningUz": "N3 grammatik qoidasi 143 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_143",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_144",
    "level": "N3",
    "title": "N3 Qoida 144: 〜n3_pattern_144",
    "romaji": "n3 pattern 144",
    "meaningUz": "N3 grammatik qoidasi 144 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_144",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_145",
    "level": "N3",
    "title": "N3 Qoida 145: 〜n3_pattern_145",
    "romaji": "n3 pattern 145",
    "meaningUz": "N3 grammatik qoidasi 145 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_145",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_146",
    "level": "N3",
    "title": "N3 Qoida 146: 〜n3_pattern_146",
    "romaji": "n3 pattern 146",
    "meaningUz": "N3 grammatik qoidasi 146 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_146",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_147",
    "level": "N3",
    "title": "N3 Qoida 147: 〜n3_pattern_147",
    "romaji": "n3 pattern 147",
    "meaningUz": "N3 grammatik qoidasi 147 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_147",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_148",
    "level": "N3",
    "title": "N3 Qoida 148: 〜n3_pattern_148",
    "romaji": "n3 pattern 148",
    "meaningUz": "N3 grammatik qoidasi 148 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_148",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_149",
    "level": "N3",
    "title": "N3 Qoida 149: 〜n3_pattern_149",
    "romaji": "n3 pattern 149",
    "meaningUz": "N3 grammatik qoidasi 149 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_149",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n3_150",
    "level": "N3",
    "title": "N3 Qoida 150: 〜n3_pattern_150",
    "romaji": "n3 pattern 150",
    "meaningUz": "N3 grammatik qoidasi 150 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n3_150",
    "examples": [
      {
        "ja": "私[わたし]はN3の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N3 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N3 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_1",
    "level": "N2",
    "title": "N2 Qoida 1: 〜n2_pattern_1",
    "romaji": "n2 pattern 1",
    "meaningUz": "N2 grammatik qoidasi 1 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_1",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_2",
    "level": "N2",
    "title": "N2 Qoida 2: 〜n2_pattern_2",
    "romaji": "n2 pattern 2",
    "meaningUz": "N2 grammatik qoidasi 2 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_2",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_3",
    "level": "N2",
    "title": "N2 Qoida 3: 〜n2_pattern_3",
    "romaji": "n2 pattern 3",
    "meaningUz": "N2 grammatik qoidasi 3 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_3",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_4",
    "level": "N2",
    "title": "N2 Qoida 4: 〜n2_pattern_4",
    "romaji": "n2 pattern 4",
    "meaningUz": "N2 grammatik qoidasi 4 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_4",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_5",
    "level": "N2",
    "title": "N2 Qoida 5: 〜n2_pattern_5",
    "romaji": "n2 pattern 5",
    "meaningUz": "N2 grammatik qoidasi 5 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_5",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_6",
    "level": "N2",
    "title": "N2 Qoida 6: 〜n2_pattern_6",
    "romaji": "n2 pattern 6",
    "meaningUz": "N2 grammatik qoidasi 6 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_6",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_7",
    "level": "N2",
    "title": "N2 Qoida 7: 〜n2_pattern_7",
    "romaji": "n2 pattern 7",
    "meaningUz": "N2 grammatik qoidasi 7 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_7",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_8",
    "level": "N2",
    "title": "N2 Qoida 8: 〜n2_pattern_8",
    "romaji": "n2 pattern 8",
    "meaningUz": "N2 grammatik qoidasi 8 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_8",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_9",
    "level": "N2",
    "title": "N2 Qoida 9: 〜n2_pattern_9",
    "romaji": "n2 pattern 9",
    "meaningUz": "N2 grammatik qoidasi 9 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_9",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_10",
    "level": "N2",
    "title": "N2 Qoida 10: 〜n2_pattern_10",
    "romaji": "n2 pattern 10",
    "meaningUz": "N2 grammatik qoidasi 10 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_10",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_11",
    "level": "N2",
    "title": "N2 Qoida 11: 〜n2_pattern_11",
    "romaji": "n2 pattern 11",
    "meaningUz": "N2 grammatik qoidasi 11 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_11",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_12",
    "level": "N2",
    "title": "N2 Qoida 12: 〜n2_pattern_12",
    "romaji": "n2 pattern 12",
    "meaningUz": "N2 grammatik qoidasi 12 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_12",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_13",
    "level": "N2",
    "title": "N2 Qoida 13: 〜n2_pattern_13",
    "romaji": "n2 pattern 13",
    "meaningUz": "N2 grammatik qoidasi 13 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_13",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_14",
    "level": "N2",
    "title": "N2 Qoida 14: 〜n2_pattern_14",
    "romaji": "n2 pattern 14",
    "meaningUz": "N2 grammatik qoidasi 14 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_14",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_15",
    "level": "N2",
    "title": "N2 Qoida 15: 〜n2_pattern_15",
    "romaji": "n2 pattern 15",
    "meaningUz": "N2 grammatik qoidasi 15 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_15",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_16",
    "level": "N2",
    "title": "N2 Qoida 16: 〜n2_pattern_16",
    "romaji": "n2 pattern 16",
    "meaningUz": "N2 grammatik qoidasi 16 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_16",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_17",
    "level": "N2",
    "title": "N2 Qoida 17: 〜n2_pattern_17",
    "romaji": "n2 pattern 17",
    "meaningUz": "N2 grammatik qoidasi 17 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_17",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_18",
    "level": "N2",
    "title": "N2 Qoida 18: 〜n2_pattern_18",
    "romaji": "n2 pattern 18",
    "meaningUz": "N2 grammatik qoidasi 18 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_18",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_19",
    "level": "N2",
    "title": "N2 Qoida 19: 〜n2_pattern_19",
    "romaji": "n2 pattern 19",
    "meaningUz": "N2 grammatik qoidasi 19 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_19",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_20",
    "level": "N2",
    "title": "N2 Qoida 20: 〜n2_pattern_20",
    "romaji": "n2 pattern 20",
    "meaningUz": "N2 grammatik qoidasi 20 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_20",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_21",
    "level": "N2",
    "title": "N2 Qoida 21: 〜n2_pattern_21",
    "romaji": "n2 pattern 21",
    "meaningUz": "N2 grammatik qoidasi 21 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_21",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_22",
    "level": "N2",
    "title": "N2 Qoida 22: 〜n2_pattern_22",
    "romaji": "n2 pattern 22",
    "meaningUz": "N2 grammatik qoidasi 22 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_22",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_23",
    "level": "N2",
    "title": "N2 Qoida 23: 〜n2_pattern_23",
    "romaji": "n2 pattern 23",
    "meaningUz": "N2 grammatik qoidasi 23 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_23",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_24",
    "level": "N2",
    "title": "N2 Qoida 24: 〜n2_pattern_24",
    "romaji": "n2 pattern 24",
    "meaningUz": "N2 grammatik qoidasi 24 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_24",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_25",
    "level": "N2",
    "title": "N2 Qoida 25: 〜n2_pattern_25",
    "romaji": "n2 pattern 25",
    "meaningUz": "N2 grammatik qoidasi 25 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_25",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_26",
    "level": "N2",
    "title": "N2 Qoida 26: 〜n2_pattern_26",
    "romaji": "n2 pattern 26",
    "meaningUz": "N2 grammatik qoidasi 26 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_26",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_27",
    "level": "N2",
    "title": "N2 Qoida 27: 〜n2_pattern_27",
    "romaji": "n2 pattern 27",
    "meaningUz": "N2 grammatik qoidasi 27 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_27",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_28",
    "level": "N2",
    "title": "N2 Qoida 28: 〜n2_pattern_28",
    "romaji": "n2 pattern 28",
    "meaningUz": "N2 grammatik qoidasi 28 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_28",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_29",
    "level": "N2",
    "title": "N2 Qoida 29: 〜n2_pattern_29",
    "romaji": "n2 pattern 29",
    "meaningUz": "N2 grammatik qoidasi 29 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_29",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_30",
    "level": "N2",
    "title": "N2 Qoida 30: 〜n2_pattern_30",
    "romaji": "n2 pattern 30",
    "meaningUz": "N2 grammatik qoidasi 30 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_30",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_31",
    "level": "N2",
    "title": "N2 Qoida 31: 〜n2_pattern_31",
    "romaji": "n2 pattern 31",
    "meaningUz": "N2 grammatik qoidasi 31 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_31",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_32",
    "level": "N2",
    "title": "N2 Qoida 32: 〜n2_pattern_32",
    "romaji": "n2 pattern 32",
    "meaningUz": "N2 grammatik qoidasi 32 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_32",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_33",
    "level": "N2",
    "title": "N2 Qoida 33: 〜n2_pattern_33",
    "romaji": "n2 pattern 33",
    "meaningUz": "N2 grammatik qoidasi 33 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_33",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_34",
    "level": "N2",
    "title": "N2 Qoida 34: 〜n2_pattern_34",
    "romaji": "n2 pattern 34",
    "meaningUz": "N2 grammatik qoidasi 34 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_34",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_35",
    "level": "N2",
    "title": "N2 Qoida 35: 〜n2_pattern_35",
    "romaji": "n2 pattern 35",
    "meaningUz": "N2 grammatik qoidasi 35 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_35",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_36",
    "level": "N2",
    "title": "N2 Qoida 36: 〜n2_pattern_36",
    "romaji": "n2 pattern 36",
    "meaningUz": "N2 grammatik qoidasi 36 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_36",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_37",
    "level": "N2",
    "title": "N2 Qoida 37: 〜n2_pattern_37",
    "romaji": "n2 pattern 37",
    "meaningUz": "N2 grammatik qoidasi 37 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_37",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_38",
    "level": "N2",
    "title": "N2 Qoida 38: 〜n2_pattern_38",
    "romaji": "n2 pattern 38",
    "meaningUz": "N2 grammatik qoidasi 38 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_38",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_39",
    "level": "N2",
    "title": "N2 Qoida 39: 〜n2_pattern_39",
    "romaji": "n2 pattern 39",
    "meaningUz": "N2 grammatik qoidasi 39 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_39",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_40",
    "level": "N2",
    "title": "N2 Qoida 40: 〜n2_pattern_40",
    "romaji": "n2 pattern 40",
    "meaningUz": "N2 grammatik qoidasi 40 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_40",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_41",
    "level": "N2",
    "title": "N2 Qoida 41: 〜n2_pattern_41",
    "romaji": "n2 pattern 41",
    "meaningUz": "N2 grammatik qoidasi 41 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_41",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_42",
    "level": "N2",
    "title": "N2 Qoida 42: 〜n2_pattern_42",
    "romaji": "n2 pattern 42",
    "meaningUz": "N2 grammatik qoidasi 42 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_42",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_43",
    "level": "N2",
    "title": "N2 Qoida 43: 〜n2_pattern_43",
    "romaji": "n2 pattern 43",
    "meaningUz": "N2 grammatik qoidasi 43 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_43",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_44",
    "level": "N2",
    "title": "N2 Qoida 44: 〜n2_pattern_44",
    "romaji": "n2 pattern 44",
    "meaningUz": "N2 grammatik qoidasi 44 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_44",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_45",
    "level": "N2",
    "title": "N2 Qoida 45: 〜n2_pattern_45",
    "romaji": "n2 pattern 45",
    "meaningUz": "N2 grammatik qoidasi 45 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_45",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_46",
    "level": "N2",
    "title": "N2 Qoida 46: 〜n2_pattern_46",
    "romaji": "n2 pattern 46",
    "meaningUz": "N2 grammatik qoidasi 46 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_46",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_47",
    "level": "N2",
    "title": "N2 Qoida 47: 〜n2_pattern_47",
    "romaji": "n2 pattern 47",
    "meaningUz": "N2 grammatik qoidasi 47 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_47",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_48",
    "level": "N2",
    "title": "N2 Qoida 48: 〜n2_pattern_48",
    "romaji": "n2 pattern 48",
    "meaningUz": "N2 grammatik qoidasi 48 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_48",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_49",
    "level": "N2",
    "title": "N2 Qoida 49: 〜n2_pattern_49",
    "romaji": "n2 pattern 49",
    "meaningUz": "N2 grammatik qoidasi 49 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_49",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_50",
    "level": "N2",
    "title": "N2 Qoida 50: 〜n2_pattern_50",
    "romaji": "n2 pattern 50",
    "meaningUz": "N2 grammatik qoidasi 50 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_50",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_51",
    "level": "N2",
    "title": "N2 Qoida 51: 〜n2_pattern_51",
    "romaji": "n2 pattern 51",
    "meaningUz": "N2 grammatik qoidasi 51 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_51",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_52",
    "level": "N2",
    "title": "N2 Qoida 52: 〜n2_pattern_52",
    "romaji": "n2 pattern 52",
    "meaningUz": "N2 grammatik qoidasi 52 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_52",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_53",
    "level": "N2",
    "title": "N2 Qoida 53: 〜n2_pattern_53",
    "romaji": "n2 pattern 53",
    "meaningUz": "N2 grammatik qoidasi 53 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_53",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_54",
    "level": "N2",
    "title": "N2 Qoida 54: 〜n2_pattern_54",
    "romaji": "n2 pattern 54",
    "meaningUz": "N2 grammatik qoidasi 54 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_54",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_55",
    "level": "N2",
    "title": "N2 Qoida 55: 〜n2_pattern_55",
    "romaji": "n2 pattern 55",
    "meaningUz": "N2 grammatik qoidasi 55 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_55",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_56",
    "level": "N2",
    "title": "N2 Qoida 56: 〜n2_pattern_56",
    "romaji": "n2 pattern 56",
    "meaningUz": "N2 grammatik qoidasi 56 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_56",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_57",
    "level": "N2",
    "title": "N2 Qoida 57: 〜n2_pattern_57",
    "romaji": "n2 pattern 57",
    "meaningUz": "N2 grammatik qoidasi 57 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_57",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_58",
    "level": "N2",
    "title": "N2 Qoida 58: 〜n2_pattern_58",
    "romaji": "n2 pattern 58",
    "meaningUz": "N2 grammatik qoidasi 58 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_58",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_59",
    "level": "N2",
    "title": "N2 Qoida 59: 〜n2_pattern_59",
    "romaji": "n2 pattern 59",
    "meaningUz": "N2 grammatik qoidasi 59 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_59",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_60",
    "level": "N2",
    "title": "N2 Qoida 60: 〜n2_pattern_60",
    "romaji": "n2 pattern 60",
    "meaningUz": "N2 grammatik qoidasi 60 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_60",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_61",
    "level": "N2",
    "title": "N2 Qoida 61: 〜n2_pattern_61",
    "romaji": "n2 pattern 61",
    "meaningUz": "N2 grammatik qoidasi 61 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_61",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_62",
    "level": "N2",
    "title": "N2 Qoida 62: 〜n2_pattern_62",
    "romaji": "n2 pattern 62",
    "meaningUz": "N2 grammatik qoidasi 62 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_62",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_63",
    "level": "N2",
    "title": "N2 Qoida 63: 〜n2_pattern_63",
    "romaji": "n2 pattern 63",
    "meaningUz": "N2 grammatik qoidasi 63 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_63",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_64",
    "level": "N2",
    "title": "N2 Qoida 64: 〜n2_pattern_64",
    "romaji": "n2 pattern 64",
    "meaningUz": "N2 grammatik qoidasi 64 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_64",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_65",
    "level": "N2",
    "title": "N2 Qoida 65: 〜n2_pattern_65",
    "romaji": "n2 pattern 65",
    "meaningUz": "N2 grammatik qoidasi 65 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_65",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_66",
    "level": "N2",
    "title": "N2 Qoida 66: 〜n2_pattern_66",
    "romaji": "n2 pattern 66",
    "meaningUz": "N2 grammatik qoidasi 66 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_66",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_67",
    "level": "N2",
    "title": "N2 Qoida 67: 〜n2_pattern_67",
    "romaji": "n2 pattern 67",
    "meaningUz": "N2 grammatik qoidasi 67 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_67",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_68",
    "level": "N2",
    "title": "N2 Qoida 68: 〜n2_pattern_68",
    "romaji": "n2 pattern 68",
    "meaningUz": "N2 grammatik qoidasi 68 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_68",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_69",
    "level": "N2",
    "title": "N2 Qoida 69: 〜n2_pattern_69",
    "romaji": "n2 pattern 69",
    "meaningUz": "N2 grammatik qoidasi 69 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_69",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_70",
    "level": "N2",
    "title": "N2 Qoida 70: 〜n2_pattern_70",
    "romaji": "n2 pattern 70",
    "meaningUz": "N2 grammatik qoidasi 70 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_70",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_71",
    "level": "N2",
    "title": "N2 Qoida 71: 〜n2_pattern_71",
    "romaji": "n2 pattern 71",
    "meaningUz": "N2 grammatik qoidasi 71 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_71",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_72",
    "level": "N2",
    "title": "N2 Qoida 72: 〜n2_pattern_72",
    "romaji": "n2 pattern 72",
    "meaningUz": "N2 grammatik qoidasi 72 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_72",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_73",
    "level": "N2",
    "title": "N2 Qoida 73: 〜n2_pattern_73",
    "romaji": "n2 pattern 73",
    "meaningUz": "N2 grammatik qoidasi 73 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_73",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_74",
    "level": "N2",
    "title": "N2 Qoida 74: 〜n2_pattern_74",
    "romaji": "n2 pattern 74",
    "meaningUz": "N2 grammatik qoidasi 74 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_74",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_75",
    "level": "N2",
    "title": "N2 Qoida 75: 〜n2_pattern_75",
    "romaji": "n2 pattern 75",
    "meaningUz": "N2 grammatik qoidasi 75 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_75",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_76",
    "level": "N2",
    "title": "N2 Qoida 76: 〜n2_pattern_76",
    "romaji": "n2 pattern 76",
    "meaningUz": "N2 grammatik qoidasi 76 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_76",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_77",
    "level": "N2",
    "title": "N2 Qoida 77: 〜n2_pattern_77",
    "romaji": "n2 pattern 77",
    "meaningUz": "N2 grammatik qoidasi 77 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_77",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_78",
    "level": "N2",
    "title": "N2 Qoida 78: 〜n2_pattern_78",
    "romaji": "n2 pattern 78",
    "meaningUz": "N2 grammatik qoidasi 78 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_78",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_79",
    "level": "N2",
    "title": "N2 Qoida 79: 〜n2_pattern_79",
    "romaji": "n2 pattern 79",
    "meaningUz": "N2 grammatik qoidasi 79 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_79",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_80",
    "level": "N2",
    "title": "N2 Qoida 80: 〜n2_pattern_80",
    "romaji": "n2 pattern 80",
    "meaningUz": "N2 grammatik qoidasi 80 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_80",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_81",
    "level": "N2",
    "title": "N2 Qoida 81: 〜n2_pattern_81",
    "romaji": "n2 pattern 81",
    "meaningUz": "N2 grammatik qoidasi 81 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_81",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_82",
    "level": "N2",
    "title": "N2 Qoida 82: 〜n2_pattern_82",
    "romaji": "n2 pattern 82",
    "meaningUz": "N2 grammatik qoidasi 82 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_82",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_83",
    "level": "N2",
    "title": "N2 Qoida 83: 〜n2_pattern_83",
    "romaji": "n2 pattern 83",
    "meaningUz": "N2 grammatik qoidasi 83 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_83",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_84",
    "level": "N2",
    "title": "N2 Qoida 84: 〜n2_pattern_84",
    "romaji": "n2 pattern 84",
    "meaningUz": "N2 grammatik qoidasi 84 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_84",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_85",
    "level": "N2",
    "title": "N2 Qoida 85: 〜n2_pattern_85",
    "romaji": "n2 pattern 85",
    "meaningUz": "N2 grammatik qoidasi 85 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_85",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_86",
    "level": "N2",
    "title": "N2 Qoida 86: 〜n2_pattern_86",
    "romaji": "n2 pattern 86",
    "meaningUz": "N2 grammatik qoidasi 86 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_86",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_87",
    "level": "N2",
    "title": "N2 Qoida 87: 〜n2_pattern_87",
    "romaji": "n2 pattern 87",
    "meaningUz": "N2 grammatik qoidasi 87 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_87",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_88",
    "level": "N2",
    "title": "N2 Qoida 88: 〜n2_pattern_88",
    "romaji": "n2 pattern 88",
    "meaningUz": "N2 grammatik qoidasi 88 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_88",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_89",
    "level": "N2",
    "title": "N2 Qoida 89: 〜n2_pattern_89",
    "romaji": "n2 pattern 89",
    "meaningUz": "N2 grammatik qoidasi 89 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_89",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_90",
    "level": "N2",
    "title": "N2 Qoida 90: 〜n2_pattern_90",
    "romaji": "n2 pattern 90",
    "meaningUz": "N2 grammatik qoidasi 90 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_90",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_91",
    "level": "N2",
    "title": "N2 Qoida 91: 〜n2_pattern_91",
    "romaji": "n2 pattern 91",
    "meaningUz": "N2 grammatik qoidasi 91 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_91",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_92",
    "level": "N2",
    "title": "N2 Qoida 92: 〜n2_pattern_92",
    "romaji": "n2 pattern 92",
    "meaningUz": "N2 grammatik qoidasi 92 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_92",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_93",
    "level": "N2",
    "title": "N2 Qoida 93: 〜n2_pattern_93",
    "romaji": "n2 pattern 93",
    "meaningUz": "N2 grammatik qoidasi 93 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_93",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_94",
    "level": "N2",
    "title": "N2 Qoida 94: 〜n2_pattern_94",
    "romaji": "n2 pattern 94",
    "meaningUz": "N2 grammatik qoidasi 94 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_94",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_95",
    "level": "N2",
    "title": "N2 Qoida 95: 〜n2_pattern_95",
    "romaji": "n2 pattern 95",
    "meaningUz": "N2 grammatik qoidasi 95 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_95",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_96",
    "level": "N2",
    "title": "N2 Qoida 96: 〜n2_pattern_96",
    "romaji": "n2 pattern 96",
    "meaningUz": "N2 grammatik qoidasi 96 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_96",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_97",
    "level": "N2",
    "title": "N2 Qoida 97: 〜n2_pattern_97",
    "romaji": "n2 pattern 97",
    "meaningUz": "N2 grammatik qoidasi 97 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_97",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_98",
    "level": "N2",
    "title": "N2 Qoida 98: 〜n2_pattern_98",
    "romaji": "n2 pattern 98",
    "meaningUz": "N2 grammatik qoidasi 98 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_98",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_99",
    "level": "N2",
    "title": "N2 Qoida 99: 〜n2_pattern_99",
    "romaji": "n2 pattern 99",
    "meaningUz": "N2 grammatik qoidasi 99 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_99",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_100",
    "level": "N2",
    "title": "N2 Qoida 100: 〜n2_pattern_100",
    "romaji": "n2 pattern 100",
    "meaningUz": "N2 grammatik qoidasi 100 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_100",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_101",
    "level": "N2",
    "title": "N2 Qoida 101: 〜n2_pattern_101",
    "romaji": "n2 pattern 101",
    "meaningUz": "N2 grammatik qoidasi 101 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_101",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_102",
    "level": "N2",
    "title": "N2 Qoida 102: 〜n2_pattern_102",
    "romaji": "n2 pattern 102",
    "meaningUz": "N2 grammatik qoidasi 102 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_102",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_103",
    "level": "N2",
    "title": "N2 Qoida 103: 〜n2_pattern_103",
    "romaji": "n2 pattern 103",
    "meaningUz": "N2 grammatik qoidasi 103 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_103",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_104",
    "level": "N2",
    "title": "N2 Qoida 104: 〜n2_pattern_104",
    "romaji": "n2 pattern 104",
    "meaningUz": "N2 grammatik qoidasi 104 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_104",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_105",
    "level": "N2",
    "title": "N2 Qoida 105: 〜n2_pattern_105",
    "romaji": "n2 pattern 105",
    "meaningUz": "N2 grammatik qoidasi 105 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_105",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_106",
    "level": "N2",
    "title": "N2 Qoida 106: 〜n2_pattern_106",
    "romaji": "n2 pattern 106",
    "meaningUz": "N2 grammatik qoidasi 106 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_106",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_107",
    "level": "N2",
    "title": "N2 Qoida 107: 〜n2_pattern_107",
    "romaji": "n2 pattern 107",
    "meaningUz": "N2 grammatik qoidasi 107 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_107",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_108",
    "level": "N2",
    "title": "N2 Qoida 108: 〜n2_pattern_108",
    "romaji": "n2 pattern 108",
    "meaningUz": "N2 grammatik qoidasi 108 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_108",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_109",
    "level": "N2",
    "title": "N2 Qoida 109: 〜n2_pattern_109",
    "romaji": "n2 pattern 109",
    "meaningUz": "N2 grammatik qoidasi 109 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_109",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_110",
    "level": "N2",
    "title": "N2 Qoida 110: 〜n2_pattern_110",
    "romaji": "n2 pattern 110",
    "meaningUz": "N2 grammatik qoidasi 110 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_110",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_111",
    "level": "N2",
    "title": "N2 Qoida 111: 〜n2_pattern_111",
    "romaji": "n2 pattern 111",
    "meaningUz": "N2 grammatik qoidasi 111 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_111",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_112",
    "level": "N2",
    "title": "N2 Qoida 112: 〜n2_pattern_112",
    "romaji": "n2 pattern 112",
    "meaningUz": "N2 grammatik qoidasi 112 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_112",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_113",
    "level": "N2",
    "title": "N2 Qoida 113: 〜n2_pattern_113",
    "romaji": "n2 pattern 113",
    "meaningUz": "N2 grammatik qoidasi 113 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_113",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_114",
    "level": "N2",
    "title": "N2 Qoida 114: 〜n2_pattern_114",
    "romaji": "n2 pattern 114",
    "meaningUz": "N2 grammatik qoidasi 114 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_114",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_115",
    "level": "N2",
    "title": "N2 Qoida 115: 〜n2_pattern_115",
    "romaji": "n2 pattern 115",
    "meaningUz": "N2 grammatik qoidasi 115 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_115",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_116",
    "level": "N2",
    "title": "N2 Qoida 116: 〜n2_pattern_116",
    "romaji": "n2 pattern 116",
    "meaningUz": "N2 grammatik qoidasi 116 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_116",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_117",
    "level": "N2",
    "title": "N2 Qoida 117: 〜n2_pattern_117",
    "romaji": "n2 pattern 117",
    "meaningUz": "N2 grammatik qoidasi 117 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_117",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_118",
    "level": "N2",
    "title": "N2 Qoida 118: 〜n2_pattern_118",
    "romaji": "n2 pattern 118",
    "meaningUz": "N2 grammatik qoidasi 118 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_118",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_119",
    "level": "N2",
    "title": "N2 Qoida 119: 〜n2_pattern_119",
    "romaji": "n2 pattern 119",
    "meaningUz": "N2 grammatik qoidasi 119 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_119",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_120",
    "level": "N2",
    "title": "N2 Qoida 120: 〜n2_pattern_120",
    "romaji": "n2 pattern 120",
    "meaningUz": "N2 grammatik qoidasi 120 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_120",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_121",
    "level": "N2",
    "title": "N2 Qoida 121: 〜n2_pattern_121",
    "romaji": "n2 pattern 121",
    "meaningUz": "N2 grammatik qoidasi 121 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_121",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_122",
    "level": "N2",
    "title": "N2 Qoida 122: 〜n2_pattern_122",
    "romaji": "n2 pattern 122",
    "meaningUz": "N2 grammatik qoidasi 122 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_122",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_123",
    "level": "N2",
    "title": "N2 Qoida 123: 〜n2_pattern_123",
    "romaji": "n2 pattern 123",
    "meaningUz": "N2 grammatik qoidasi 123 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_123",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_124",
    "level": "N2",
    "title": "N2 Qoida 124: 〜n2_pattern_124",
    "romaji": "n2 pattern 124",
    "meaningUz": "N2 grammatik qoidasi 124 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_124",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_125",
    "level": "N2",
    "title": "N2 Qoida 125: 〜n2_pattern_125",
    "romaji": "n2 pattern 125",
    "meaningUz": "N2 grammatik qoidasi 125 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_125",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_126",
    "level": "N2",
    "title": "N2 Qoida 126: 〜n2_pattern_126",
    "romaji": "n2 pattern 126",
    "meaningUz": "N2 grammatik qoidasi 126 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_126",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_127",
    "level": "N2",
    "title": "N2 Qoida 127: 〜n2_pattern_127",
    "romaji": "n2 pattern 127",
    "meaningUz": "N2 grammatik qoidasi 127 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_127",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_128",
    "level": "N2",
    "title": "N2 Qoida 128: 〜n2_pattern_128",
    "romaji": "n2 pattern 128",
    "meaningUz": "N2 grammatik qoidasi 128 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_128",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_129",
    "level": "N2",
    "title": "N2 Qoida 129: 〜n2_pattern_129",
    "romaji": "n2 pattern 129",
    "meaningUz": "N2 grammatik qoidasi 129 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_129",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_130",
    "level": "N2",
    "title": "N2 Qoida 130: 〜n2_pattern_130",
    "romaji": "n2 pattern 130",
    "meaningUz": "N2 grammatik qoidasi 130 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_130",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_131",
    "level": "N2",
    "title": "N2 Qoida 131: 〜n2_pattern_131",
    "romaji": "n2 pattern 131",
    "meaningUz": "N2 grammatik qoidasi 131 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_131",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_132",
    "level": "N2",
    "title": "N2 Qoida 132: 〜n2_pattern_132",
    "romaji": "n2 pattern 132",
    "meaningUz": "N2 grammatik qoidasi 132 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_132",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_133",
    "level": "N2",
    "title": "N2 Qoida 133: 〜n2_pattern_133",
    "romaji": "n2 pattern 133",
    "meaningUz": "N2 grammatik qoidasi 133 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_133",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_134",
    "level": "N2",
    "title": "N2 Qoida 134: 〜n2_pattern_134",
    "romaji": "n2 pattern 134",
    "meaningUz": "N2 grammatik qoidasi 134 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_134",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_135",
    "level": "N2",
    "title": "N2 Qoida 135: 〜n2_pattern_135",
    "romaji": "n2 pattern 135",
    "meaningUz": "N2 grammatik qoidasi 135 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_135",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_136",
    "level": "N2",
    "title": "N2 Qoida 136: 〜n2_pattern_136",
    "romaji": "n2 pattern 136",
    "meaningUz": "N2 grammatik qoidasi 136 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_136",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_137",
    "level": "N2",
    "title": "N2 Qoida 137: 〜n2_pattern_137",
    "romaji": "n2 pattern 137",
    "meaningUz": "N2 grammatik qoidasi 137 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_137",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_138",
    "level": "N2",
    "title": "N2 Qoida 138: 〜n2_pattern_138",
    "romaji": "n2 pattern 138",
    "meaningUz": "N2 grammatik qoidasi 138 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_138",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_139",
    "level": "N2",
    "title": "N2 Qoida 139: 〜n2_pattern_139",
    "romaji": "n2 pattern 139",
    "meaningUz": "N2 grammatik qoidasi 139 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_139",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_140",
    "level": "N2",
    "title": "N2 Qoida 140: 〜n2_pattern_140",
    "romaji": "n2 pattern 140",
    "meaningUz": "N2 grammatik qoidasi 140 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_140",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_141",
    "level": "N2",
    "title": "N2 Qoida 141: 〜n2_pattern_141",
    "romaji": "n2 pattern 141",
    "meaningUz": "N2 grammatik qoidasi 141 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_141",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_142",
    "level": "N2",
    "title": "N2 Qoida 142: 〜n2_pattern_142",
    "romaji": "n2 pattern 142",
    "meaningUz": "N2 grammatik qoidasi 142 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_142",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_143",
    "level": "N2",
    "title": "N2 Qoida 143: 〜n2_pattern_143",
    "romaji": "n2 pattern 143",
    "meaningUz": "N2 grammatik qoidasi 143 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_143",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_144",
    "level": "N2",
    "title": "N2 Qoida 144: 〜n2_pattern_144",
    "romaji": "n2 pattern 144",
    "meaningUz": "N2 grammatik qoidasi 144 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_144",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_145",
    "level": "N2",
    "title": "N2 Qoida 145: 〜n2_pattern_145",
    "romaji": "n2 pattern 145",
    "meaningUz": "N2 grammatik qoidasi 145 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_145",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_146",
    "level": "N2",
    "title": "N2 Qoida 146: 〜n2_pattern_146",
    "romaji": "n2 pattern 146",
    "meaningUz": "N2 grammatik qoidasi 146 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_146",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_147",
    "level": "N2",
    "title": "N2 Qoida 147: 〜n2_pattern_147",
    "romaji": "n2 pattern 147",
    "meaningUz": "N2 grammatik qoidasi 147 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_147",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_148",
    "level": "N2",
    "title": "N2 Qoida 148: 〜n2_pattern_148",
    "romaji": "n2 pattern 148",
    "meaningUz": "N2 grammatik qoidasi 148 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_148",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_149",
    "level": "N2",
    "title": "N2 Qoida 149: 〜n2_pattern_149",
    "romaji": "n2 pattern 149",
    "meaningUz": "N2 grammatik qoidasi 149 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_149",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_150",
    "level": "N2",
    "title": "N2 Qoida 150: 〜n2_pattern_150",
    "romaji": "n2 pattern 150",
    "meaningUz": "N2 grammatik qoidasi 150 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_150",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_151",
    "level": "N2",
    "title": "N2 Qoida 151: 〜n2_pattern_151",
    "romaji": "n2 pattern 151",
    "meaningUz": "N2 grammatik qoidasi 151 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_151",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_152",
    "level": "N2",
    "title": "N2 Qoida 152: 〜n2_pattern_152",
    "romaji": "n2 pattern 152",
    "meaningUz": "N2 grammatik qoidasi 152 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_152",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_153",
    "level": "N2",
    "title": "N2 Qoida 153: 〜n2_pattern_153",
    "romaji": "n2 pattern 153",
    "meaningUz": "N2 grammatik qoidasi 153 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_153",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_154",
    "level": "N2",
    "title": "N2 Qoida 154: 〜n2_pattern_154",
    "romaji": "n2 pattern 154",
    "meaningUz": "N2 grammatik qoidasi 154 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_154",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_155",
    "level": "N2",
    "title": "N2 Qoida 155: 〜n2_pattern_155",
    "romaji": "n2 pattern 155",
    "meaningUz": "N2 grammatik qoidasi 155 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_155",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_156",
    "level": "N2",
    "title": "N2 Qoida 156: 〜n2_pattern_156",
    "romaji": "n2 pattern 156",
    "meaningUz": "N2 grammatik qoidasi 156 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_156",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_157",
    "level": "N2",
    "title": "N2 Qoida 157: 〜n2_pattern_157",
    "romaji": "n2 pattern 157",
    "meaningUz": "N2 grammatik qoidasi 157 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_157",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_158",
    "level": "N2",
    "title": "N2 Qoida 158: 〜n2_pattern_158",
    "romaji": "n2 pattern 158",
    "meaningUz": "N2 grammatik qoidasi 158 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_158",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_159",
    "level": "N2",
    "title": "N2 Qoida 159: 〜n2_pattern_159",
    "romaji": "n2 pattern 159",
    "meaningUz": "N2 grammatik qoidasi 159 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_159",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_160",
    "level": "N2",
    "title": "N2 Qoida 160: 〜n2_pattern_160",
    "romaji": "n2 pattern 160",
    "meaningUz": "N2 grammatik qoidasi 160 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_160",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_161",
    "level": "N2",
    "title": "N2 Qoida 161: 〜n2_pattern_161",
    "romaji": "n2 pattern 161",
    "meaningUz": "N2 grammatik qoidasi 161 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_161",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_162",
    "level": "N2",
    "title": "N2 Qoida 162: 〜n2_pattern_162",
    "romaji": "n2 pattern 162",
    "meaningUz": "N2 grammatik qoidasi 162 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_162",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_163",
    "level": "N2",
    "title": "N2 Qoida 163: 〜n2_pattern_163",
    "romaji": "n2 pattern 163",
    "meaningUz": "N2 grammatik qoidasi 163 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_163",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_164",
    "level": "N2",
    "title": "N2 Qoida 164: 〜n2_pattern_164",
    "romaji": "n2 pattern 164",
    "meaningUz": "N2 grammatik qoidasi 164 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_164",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_165",
    "level": "N2",
    "title": "N2 Qoida 165: 〜n2_pattern_165",
    "romaji": "n2 pattern 165",
    "meaningUz": "N2 grammatik qoidasi 165 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_165",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_166",
    "level": "N2",
    "title": "N2 Qoida 166: 〜n2_pattern_166",
    "romaji": "n2 pattern 166",
    "meaningUz": "N2 grammatik qoidasi 166 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_166",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_167",
    "level": "N2",
    "title": "N2 Qoida 167: 〜n2_pattern_167",
    "romaji": "n2 pattern 167",
    "meaningUz": "N2 grammatik qoidasi 167 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_167",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_168",
    "level": "N2",
    "title": "N2 Qoida 168: 〜n2_pattern_168",
    "romaji": "n2 pattern 168",
    "meaningUz": "N2 grammatik qoidasi 168 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_168",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_169",
    "level": "N2",
    "title": "N2 Qoida 169: 〜n2_pattern_169",
    "romaji": "n2 pattern 169",
    "meaningUz": "N2 grammatik qoidasi 169 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_169",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n2_170",
    "level": "N2",
    "title": "N2 Qoida 170: 〜n2_pattern_170",
    "romaji": "n2 pattern 170",
    "meaningUz": "N2 grammatik qoidasi 170 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n2_170",
    "examples": [
      {
        "ja": "私[わたし]はN2の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N2 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N2 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_1",
    "level": "N1",
    "title": "N1 Qoida 1: 〜n1_pattern_1",
    "romaji": "n1 pattern 1",
    "meaningUz": "N1 grammatik qoidasi 1 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_1",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_2",
    "level": "N1",
    "title": "N1 Qoida 2: 〜n1_pattern_2",
    "romaji": "n1 pattern 2",
    "meaningUz": "N1 grammatik qoidasi 2 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_2",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_3",
    "level": "N1",
    "title": "N1 Qoida 3: 〜n1_pattern_3",
    "romaji": "n1 pattern 3",
    "meaningUz": "N1 grammatik qoidasi 3 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_3",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_4",
    "level": "N1",
    "title": "N1 Qoida 4: 〜n1_pattern_4",
    "romaji": "n1 pattern 4",
    "meaningUz": "N1 grammatik qoidasi 4 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_4",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_5",
    "level": "N1",
    "title": "N1 Qoida 5: 〜n1_pattern_5",
    "romaji": "n1 pattern 5",
    "meaningUz": "N1 grammatik qoidasi 5 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_5",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_6",
    "level": "N1",
    "title": "N1 Qoida 6: 〜n1_pattern_6",
    "romaji": "n1 pattern 6",
    "meaningUz": "N1 grammatik qoidasi 6 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_6",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_7",
    "level": "N1",
    "title": "N1 Qoida 7: 〜n1_pattern_7",
    "romaji": "n1 pattern 7",
    "meaningUz": "N1 grammatik qoidasi 7 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_7",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_8",
    "level": "N1",
    "title": "N1 Qoida 8: 〜n1_pattern_8",
    "romaji": "n1 pattern 8",
    "meaningUz": "N1 grammatik qoidasi 8 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_8",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_9",
    "level": "N1",
    "title": "N1 Qoida 9: 〜n1_pattern_9",
    "romaji": "n1 pattern 9",
    "meaningUz": "N1 grammatik qoidasi 9 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_9",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_10",
    "level": "N1",
    "title": "N1 Qoida 10: 〜n1_pattern_10",
    "romaji": "n1 pattern 10",
    "meaningUz": "N1 grammatik qoidasi 10 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_10",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_11",
    "level": "N1",
    "title": "N1 Qoida 11: 〜n1_pattern_11",
    "romaji": "n1 pattern 11",
    "meaningUz": "N1 grammatik qoidasi 11 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_11",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_12",
    "level": "N1",
    "title": "N1 Qoida 12: 〜n1_pattern_12",
    "romaji": "n1 pattern 12",
    "meaningUz": "N1 grammatik qoidasi 12 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_12",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_13",
    "level": "N1",
    "title": "N1 Qoida 13: 〜n1_pattern_13",
    "romaji": "n1 pattern 13",
    "meaningUz": "N1 grammatik qoidasi 13 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_13",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_14",
    "level": "N1",
    "title": "N1 Qoida 14: 〜n1_pattern_14",
    "romaji": "n1 pattern 14",
    "meaningUz": "N1 grammatik qoidasi 14 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_14",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_15",
    "level": "N1",
    "title": "N1 Qoida 15: 〜n1_pattern_15",
    "romaji": "n1 pattern 15",
    "meaningUz": "N1 grammatik qoidasi 15 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_15",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_16",
    "level": "N1",
    "title": "N1 Qoida 16: 〜n1_pattern_16",
    "romaji": "n1 pattern 16",
    "meaningUz": "N1 grammatik qoidasi 16 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_16",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_17",
    "level": "N1",
    "title": "N1 Qoida 17: 〜n1_pattern_17",
    "romaji": "n1 pattern 17",
    "meaningUz": "N1 grammatik qoidasi 17 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_17",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_18",
    "level": "N1",
    "title": "N1 Qoida 18: 〜n1_pattern_18",
    "romaji": "n1 pattern 18",
    "meaningUz": "N1 grammatik qoidasi 18 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_18",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_19",
    "level": "N1",
    "title": "N1 Qoida 19: 〜n1_pattern_19",
    "romaji": "n1 pattern 19",
    "meaningUz": "N1 grammatik qoidasi 19 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_19",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_20",
    "level": "N1",
    "title": "N1 Qoida 20: 〜n1_pattern_20",
    "romaji": "n1 pattern 20",
    "meaningUz": "N1 grammatik qoidasi 20 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_20",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_21",
    "level": "N1",
    "title": "N1 Qoida 21: 〜n1_pattern_21",
    "romaji": "n1 pattern 21",
    "meaningUz": "N1 grammatik qoidasi 21 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_21",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_22",
    "level": "N1",
    "title": "N1 Qoida 22: 〜n1_pattern_22",
    "romaji": "n1 pattern 22",
    "meaningUz": "N1 grammatik qoidasi 22 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_22",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_23",
    "level": "N1",
    "title": "N1 Qoida 23: 〜n1_pattern_23",
    "romaji": "n1 pattern 23",
    "meaningUz": "N1 grammatik qoidasi 23 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_23",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_24",
    "level": "N1",
    "title": "N1 Qoida 24: 〜n1_pattern_24",
    "romaji": "n1 pattern 24",
    "meaningUz": "N1 grammatik qoidasi 24 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_24",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_25",
    "level": "N1",
    "title": "N1 Qoida 25: 〜n1_pattern_25",
    "romaji": "n1 pattern 25",
    "meaningUz": "N1 grammatik qoidasi 25 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_25",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_26",
    "level": "N1",
    "title": "N1 Qoida 26: 〜n1_pattern_26",
    "romaji": "n1 pattern 26",
    "meaningUz": "N1 grammatik qoidasi 26 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_26",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_27",
    "level": "N1",
    "title": "N1 Qoida 27: 〜n1_pattern_27",
    "romaji": "n1 pattern 27",
    "meaningUz": "N1 grammatik qoidasi 27 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_27",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_28",
    "level": "N1",
    "title": "N1 Qoida 28: 〜n1_pattern_28",
    "romaji": "n1 pattern 28",
    "meaningUz": "N1 grammatik qoidasi 28 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_28",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_29",
    "level": "N1",
    "title": "N1 Qoida 29: 〜n1_pattern_29",
    "romaji": "n1 pattern 29",
    "meaningUz": "N1 grammatik qoidasi 29 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_29",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_30",
    "level": "N1",
    "title": "N1 Qoida 30: 〜n1_pattern_30",
    "romaji": "n1 pattern 30",
    "meaningUz": "N1 grammatik qoidasi 30 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_30",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_31",
    "level": "N1",
    "title": "N1 Qoida 31: 〜n1_pattern_31",
    "romaji": "n1 pattern 31",
    "meaningUz": "N1 grammatik qoidasi 31 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_31",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_32",
    "level": "N1",
    "title": "N1 Qoida 32: 〜n1_pattern_32",
    "romaji": "n1 pattern 32",
    "meaningUz": "N1 grammatik qoidasi 32 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_32",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_33",
    "level": "N1",
    "title": "N1 Qoida 33: 〜n1_pattern_33",
    "romaji": "n1 pattern 33",
    "meaningUz": "N1 grammatik qoidasi 33 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_33",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_34",
    "level": "N1",
    "title": "N1 Qoida 34: 〜n1_pattern_34",
    "romaji": "n1 pattern 34",
    "meaningUz": "N1 grammatik qoidasi 34 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_34",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_35",
    "level": "N1",
    "title": "N1 Qoida 35: 〜n1_pattern_35",
    "romaji": "n1 pattern 35",
    "meaningUz": "N1 grammatik qoidasi 35 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_35",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_36",
    "level": "N1",
    "title": "N1 Qoida 36: 〜n1_pattern_36",
    "romaji": "n1 pattern 36",
    "meaningUz": "N1 grammatik qoidasi 36 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_36",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_37",
    "level": "N1",
    "title": "N1 Qoida 37: 〜n1_pattern_37",
    "romaji": "n1 pattern 37",
    "meaningUz": "N1 grammatik qoidasi 37 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_37",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_38",
    "level": "N1",
    "title": "N1 Qoida 38: 〜n1_pattern_38",
    "romaji": "n1 pattern 38",
    "meaningUz": "N1 grammatik qoidasi 38 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_38",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_39",
    "level": "N1",
    "title": "N1 Qoida 39: 〜n1_pattern_39",
    "romaji": "n1 pattern 39",
    "meaningUz": "N1 grammatik qoidasi 39 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_39",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_40",
    "level": "N1",
    "title": "N1 Qoida 40: 〜n1_pattern_40",
    "romaji": "n1 pattern 40",
    "meaningUz": "N1 grammatik qoidasi 40 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_40",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_41",
    "level": "N1",
    "title": "N1 Qoida 41: 〜n1_pattern_41",
    "romaji": "n1 pattern 41",
    "meaningUz": "N1 grammatik qoidasi 41 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_41",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_42",
    "level": "N1",
    "title": "N1 Qoida 42: 〜n1_pattern_42",
    "romaji": "n1 pattern 42",
    "meaningUz": "N1 grammatik qoidasi 42 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_42",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_43",
    "level": "N1",
    "title": "N1 Qoida 43: 〜n1_pattern_43",
    "romaji": "n1 pattern 43",
    "meaningUz": "N1 grammatik qoidasi 43 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_43",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_44",
    "level": "N1",
    "title": "N1 Qoida 44: 〜n1_pattern_44",
    "romaji": "n1 pattern 44",
    "meaningUz": "N1 grammatik qoidasi 44 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_44",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_45",
    "level": "N1",
    "title": "N1 Qoida 45: 〜n1_pattern_45",
    "romaji": "n1 pattern 45",
    "meaningUz": "N1 grammatik qoidasi 45 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_45",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_46",
    "level": "N1",
    "title": "N1 Qoida 46: 〜n1_pattern_46",
    "romaji": "n1 pattern 46",
    "meaningUz": "N1 grammatik qoidasi 46 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_46",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_47",
    "level": "N1",
    "title": "N1 Qoida 47: 〜n1_pattern_47",
    "romaji": "n1 pattern 47",
    "meaningUz": "N1 grammatik qoidasi 47 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_47",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_48",
    "level": "N1",
    "title": "N1 Qoida 48: 〜n1_pattern_48",
    "romaji": "n1 pattern 48",
    "meaningUz": "N1 grammatik qoidasi 48 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_48",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_49",
    "level": "N1",
    "title": "N1 Qoida 49: 〜n1_pattern_49",
    "romaji": "n1 pattern 49",
    "meaningUz": "N1 grammatik qoidasi 49 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_49",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_50",
    "level": "N1",
    "title": "N1 Qoida 50: 〜n1_pattern_50",
    "romaji": "n1 pattern 50",
    "meaningUz": "N1 grammatik qoidasi 50 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_50",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_51",
    "level": "N1",
    "title": "N1 Qoida 51: 〜n1_pattern_51",
    "romaji": "n1 pattern 51",
    "meaningUz": "N1 grammatik qoidasi 51 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_51",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_52",
    "level": "N1",
    "title": "N1 Qoida 52: 〜n1_pattern_52",
    "romaji": "n1 pattern 52",
    "meaningUz": "N1 grammatik qoidasi 52 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_52",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_53",
    "level": "N1",
    "title": "N1 Qoida 53: 〜n1_pattern_53",
    "romaji": "n1 pattern 53",
    "meaningUz": "N1 grammatik qoidasi 53 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_53",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_54",
    "level": "N1",
    "title": "N1 Qoida 54: 〜n1_pattern_54",
    "romaji": "n1 pattern 54",
    "meaningUz": "N1 grammatik qoidasi 54 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_54",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_55",
    "level": "N1",
    "title": "N1 Qoida 55: 〜n1_pattern_55",
    "romaji": "n1 pattern 55",
    "meaningUz": "N1 grammatik qoidasi 55 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_55",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_56",
    "level": "N1",
    "title": "N1 Qoida 56: 〜n1_pattern_56",
    "romaji": "n1 pattern 56",
    "meaningUz": "N1 grammatik qoidasi 56 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_56",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_57",
    "level": "N1",
    "title": "N1 Qoida 57: 〜n1_pattern_57",
    "romaji": "n1 pattern 57",
    "meaningUz": "N1 grammatik qoidasi 57 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_57",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_58",
    "level": "N1",
    "title": "N1 Qoida 58: 〜n1_pattern_58",
    "romaji": "n1 pattern 58",
    "meaningUz": "N1 grammatik qoidasi 58 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_58",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_59",
    "level": "N1",
    "title": "N1 Qoida 59: 〜n1_pattern_59",
    "romaji": "n1 pattern 59",
    "meaningUz": "N1 grammatik qoidasi 59 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_59",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_60",
    "level": "N1",
    "title": "N1 Qoida 60: 〜n1_pattern_60",
    "romaji": "n1 pattern 60",
    "meaningUz": "N1 grammatik qoidasi 60 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_60",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_61",
    "level": "N1",
    "title": "N1 Qoida 61: 〜n1_pattern_61",
    "romaji": "n1 pattern 61",
    "meaningUz": "N1 grammatik qoidasi 61 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_61",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_62",
    "level": "N1",
    "title": "N1 Qoida 62: 〜n1_pattern_62",
    "romaji": "n1 pattern 62",
    "meaningUz": "N1 grammatik qoidasi 62 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_62",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_63",
    "level": "N1",
    "title": "N1 Qoida 63: 〜n1_pattern_63",
    "romaji": "n1 pattern 63",
    "meaningUz": "N1 grammatik qoidasi 63 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_63",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_64",
    "level": "N1",
    "title": "N1 Qoida 64: 〜n1_pattern_64",
    "romaji": "n1 pattern 64",
    "meaningUz": "N1 grammatik qoidasi 64 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_64",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_65",
    "level": "N1",
    "title": "N1 Qoida 65: 〜n1_pattern_65",
    "romaji": "n1 pattern 65",
    "meaningUz": "N1 grammatik qoidasi 65 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_65",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_66",
    "level": "N1",
    "title": "N1 Qoida 66: 〜n1_pattern_66",
    "romaji": "n1 pattern 66",
    "meaningUz": "N1 grammatik qoidasi 66 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_66",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_67",
    "level": "N1",
    "title": "N1 Qoida 67: 〜n1_pattern_67",
    "romaji": "n1 pattern 67",
    "meaningUz": "N1 grammatik qoidasi 67 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_67",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_68",
    "level": "N1",
    "title": "N1 Qoida 68: 〜n1_pattern_68",
    "romaji": "n1 pattern 68",
    "meaningUz": "N1 grammatik qoidasi 68 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_68",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_69",
    "level": "N1",
    "title": "N1 Qoida 69: 〜n1_pattern_69",
    "romaji": "n1 pattern 69",
    "meaningUz": "N1 grammatik qoidasi 69 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_69",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_70",
    "level": "N1",
    "title": "N1 Qoida 70: 〜n1_pattern_70",
    "romaji": "n1 pattern 70",
    "meaningUz": "N1 grammatik qoidasi 70 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_70",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_71",
    "level": "N1",
    "title": "N1 Qoida 71: 〜n1_pattern_71",
    "romaji": "n1 pattern 71",
    "meaningUz": "N1 grammatik qoidasi 71 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_71",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_72",
    "level": "N1",
    "title": "N1 Qoida 72: 〜n1_pattern_72",
    "romaji": "n1 pattern 72",
    "meaningUz": "N1 grammatik qoidasi 72 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_72",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_73",
    "level": "N1",
    "title": "N1 Qoida 73: 〜n1_pattern_73",
    "romaji": "n1 pattern 73",
    "meaningUz": "N1 grammatik qoidasi 73 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_73",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_74",
    "level": "N1",
    "title": "N1 Qoida 74: 〜n1_pattern_74",
    "romaji": "n1 pattern 74",
    "meaningUz": "N1 grammatik qoidasi 74 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_74",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_75",
    "level": "N1",
    "title": "N1 Qoida 75: 〜n1_pattern_75",
    "romaji": "n1 pattern 75",
    "meaningUz": "N1 grammatik qoidasi 75 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_75",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_76",
    "level": "N1",
    "title": "N1 Qoida 76: 〜n1_pattern_76",
    "romaji": "n1 pattern 76",
    "meaningUz": "N1 grammatik qoidasi 76 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_76",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_77",
    "level": "N1",
    "title": "N1 Qoida 77: 〜n1_pattern_77",
    "romaji": "n1 pattern 77",
    "meaningUz": "N1 grammatik qoidasi 77 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_77",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_78",
    "level": "N1",
    "title": "N1 Qoida 78: 〜n1_pattern_78",
    "romaji": "n1 pattern 78",
    "meaningUz": "N1 grammatik qoidasi 78 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_78",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_79",
    "level": "N1",
    "title": "N1 Qoida 79: 〜n1_pattern_79",
    "romaji": "n1 pattern 79",
    "meaningUz": "N1 grammatik qoidasi 79 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_79",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_80",
    "level": "N1",
    "title": "N1 Qoida 80: 〜n1_pattern_80",
    "romaji": "n1 pattern 80",
    "meaningUz": "N1 grammatik qoidasi 80 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_80",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_81",
    "level": "N1",
    "title": "N1 Qoida 81: 〜n1_pattern_81",
    "romaji": "n1 pattern 81",
    "meaningUz": "N1 grammatik qoidasi 81 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_81",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_82",
    "level": "N1",
    "title": "N1 Qoida 82: 〜n1_pattern_82",
    "romaji": "n1 pattern 82",
    "meaningUz": "N1 grammatik qoidasi 82 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_82",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_83",
    "level": "N1",
    "title": "N1 Qoida 83: 〜n1_pattern_83",
    "romaji": "n1 pattern 83",
    "meaningUz": "N1 grammatik qoidasi 83 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_83",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_84",
    "level": "N1",
    "title": "N1 Qoida 84: 〜n1_pattern_84",
    "romaji": "n1 pattern 84",
    "meaningUz": "N1 grammatik qoidasi 84 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_84",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_85",
    "level": "N1",
    "title": "N1 Qoida 85: 〜n1_pattern_85",
    "romaji": "n1 pattern 85",
    "meaningUz": "N1 grammatik qoidasi 85 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_85",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_86",
    "level": "N1",
    "title": "N1 Qoida 86: 〜n1_pattern_86",
    "romaji": "n1 pattern 86",
    "meaningUz": "N1 grammatik qoidasi 86 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_86",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_87",
    "level": "N1",
    "title": "N1 Qoida 87: 〜n1_pattern_87",
    "romaji": "n1 pattern 87",
    "meaningUz": "N1 grammatik qoidasi 87 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_87",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_88",
    "level": "N1",
    "title": "N1 Qoida 88: 〜n1_pattern_88",
    "romaji": "n1 pattern 88",
    "meaningUz": "N1 grammatik qoidasi 88 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_88",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_89",
    "level": "N1",
    "title": "N1 Qoida 89: 〜n1_pattern_89",
    "romaji": "n1 pattern 89",
    "meaningUz": "N1 grammatik qoidasi 89 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_89",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_90",
    "level": "N1",
    "title": "N1 Qoida 90: 〜n1_pattern_90",
    "romaji": "n1 pattern 90",
    "meaningUz": "N1 grammatik qoidasi 90 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_90",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_91",
    "level": "N1",
    "title": "N1 Qoida 91: 〜n1_pattern_91",
    "romaji": "n1 pattern 91",
    "meaningUz": "N1 grammatik qoidasi 91 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_91",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_92",
    "level": "N1",
    "title": "N1 Qoida 92: 〜n1_pattern_92",
    "romaji": "n1 pattern 92",
    "meaningUz": "N1 grammatik qoidasi 92 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_92",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_93",
    "level": "N1",
    "title": "N1 Qoida 93: 〜n1_pattern_93",
    "romaji": "n1 pattern 93",
    "meaningUz": "N1 grammatik qoidasi 93 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_93",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_94",
    "level": "N1",
    "title": "N1 Qoida 94: 〜n1_pattern_94",
    "romaji": "n1 pattern 94",
    "meaningUz": "N1 grammatik qoidasi 94 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_94",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_95",
    "level": "N1",
    "title": "N1 Qoida 95: 〜n1_pattern_95",
    "romaji": "n1 pattern 95",
    "meaningUz": "N1 grammatik qoidasi 95 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_95",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_96",
    "level": "N1",
    "title": "N1 Qoida 96: 〜n1_pattern_96",
    "romaji": "n1 pattern 96",
    "meaningUz": "N1 grammatik qoidasi 96 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_96",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_97",
    "level": "N1",
    "title": "N1 Qoida 97: 〜n1_pattern_97",
    "romaji": "n1 pattern 97",
    "meaningUz": "N1 grammatik qoidasi 97 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_97",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_98",
    "level": "N1",
    "title": "N1 Qoida 98: 〜n1_pattern_98",
    "romaji": "n1 pattern 98",
    "meaningUz": "N1 grammatik qoidasi 98 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_98",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_99",
    "level": "N1",
    "title": "N1 Qoida 99: 〜n1_pattern_99",
    "romaji": "n1 pattern 99",
    "meaningUz": "N1 grammatik qoidasi 99 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_99",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_100",
    "level": "N1",
    "title": "N1 Qoida 100: 〜n1_pattern_100",
    "romaji": "n1 pattern 100",
    "meaningUz": "N1 grammatik qoidasi 100 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_100",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_101",
    "level": "N1",
    "title": "N1 Qoida 101: 〜n1_pattern_101",
    "romaji": "n1 pattern 101",
    "meaningUz": "N1 grammatik qoidasi 101 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_101",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_102",
    "level": "N1",
    "title": "N1 Qoida 102: 〜n1_pattern_102",
    "romaji": "n1 pattern 102",
    "meaningUz": "N1 grammatik qoidasi 102 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_102",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_103",
    "level": "N1",
    "title": "N1 Qoida 103: 〜n1_pattern_103",
    "romaji": "n1 pattern 103",
    "meaningUz": "N1 grammatik qoidasi 103 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_103",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_104",
    "level": "N1",
    "title": "N1 Qoida 104: 〜n1_pattern_104",
    "romaji": "n1 pattern 104",
    "meaningUz": "N1 grammatik qoidasi 104 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_104",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_105",
    "level": "N1",
    "title": "N1 Qoida 105: 〜n1_pattern_105",
    "romaji": "n1 pattern 105",
    "meaningUz": "N1 grammatik qoidasi 105 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_105",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_106",
    "level": "N1",
    "title": "N1 Qoida 106: 〜n1_pattern_106",
    "romaji": "n1 pattern 106",
    "meaningUz": "N1 grammatik qoidasi 106 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_106",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_107",
    "level": "N1",
    "title": "N1 Qoida 107: 〜n1_pattern_107",
    "romaji": "n1 pattern 107",
    "meaningUz": "N1 grammatik qoidasi 107 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_107",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_108",
    "level": "N1",
    "title": "N1 Qoida 108: 〜n1_pattern_108",
    "romaji": "n1 pattern 108",
    "meaningUz": "N1 grammatik qoidasi 108 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_108",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_109",
    "level": "N1",
    "title": "N1 Qoida 109: 〜n1_pattern_109",
    "romaji": "n1 pattern 109",
    "meaningUz": "N1 grammatik qoidasi 109 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_109",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_110",
    "level": "N1",
    "title": "N1 Qoida 110: 〜n1_pattern_110",
    "romaji": "n1 pattern 110",
    "meaningUz": "N1 grammatik qoidasi 110 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_110",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_111",
    "level": "N1",
    "title": "N1 Qoida 111: 〜n1_pattern_111",
    "romaji": "n1 pattern 111",
    "meaningUz": "N1 grammatik qoidasi 111 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_111",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_112",
    "level": "N1",
    "title": "N1 Qoida 112: 〜n1_pattern_112",
    "romaji": "n1 pattern 112",
    "meaningUz": "N1 grammatik qoidasi 112 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_112",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_113",
    "level": "N1",
    "title": "N1 Qoida 113: 〜n1_pattern_113",
    "romaji": "n1 pattern 113",
    "meaningUz": "N1 grammatik qoidasi 113 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_113",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_114",
    "level": "N1",
    "title": "N1 Qoida 114: 〜n1_pattern_114",
    "romaji": "n1 pattern 114",
    "meaningUz": "N1 grammatik qoidasi 114 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_114",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_115",
    "level": "N1",
    "title": "N1 Qoida 115: 〜n1_pattern_115",
    "romaji": "n1 pattern 115",
    "meaningUz": "N1 grammatik qoidasi 115 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_115",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_116",
    "level": "N1",
    "title": "N1 Qoida 116: 〜n1_pattern_116",
    "romaji": "n1 pattern 116",
    "meaningUz": "N1 grammatik qoidasi 116 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_116",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_117",
    "level": "N1",
    "title": "N1 Qoida 117: 〜n1_pattern_117",
    "romaji": "n1 pattern 117",
    "meaningUz": "N1 grammatik qoidasi 117 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_117",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_118",
    "level": "N1",
    "title": "N1 Qoida 118: 〜n1_pattern_118",
    "romaji": "n1 pattern 118",
    "meaningUz": "N1 grammatik qoidasi 118 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_118",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_119",
    "level": "N1",
    "title": "N1 Qoida 119: 〜n1_pattern_119",
    "romaji": "n1 pattern 119",
    "meaningUz": "N1 grammatik qoidasi 119 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_119",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_120",
    "level": "N1",
    "title": "N1 Qoida 120: 〜n1_pattern_120",
    "romaji": "n1 pattern 120",
    "meaningUz": "N1 grammatik qoidasi 120 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_120",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_121",
    "level": "N1",
    "title": "N1 Qoida 121: 〜n1_pattern_121",
    "romaji": "n1 pattern 121",
    "meaningUz": "N1 grammatik qoidasi 121 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_121",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_122",
    "level": "N1",
    "title": "N1 Qoida 122: 〜n1_pattern_122",
    "romaji": "n1 pattern 122",
    "meaningUz": "N1 grammatik qoidasi 122 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_122",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_123",
    "level": "N1",
    "title": "N1 Qoida 123: 〜n1_pattern_123",
    "romaji": "n1 pattern 123",
    "meaningUz": "N1 grammatik qoidasi 123 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_123",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_124",
    "level": "N1",
    "title": "N1 Qoida 124: 〜n1_pattern_124",
    "romaji": "n1 pattern 124",
    "meaningUz": "N1 grammatik qoidasi 124 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_124",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_125",
    "level": "N1",
    "title": "N1 Qoida 125: 〜n1_pattern_125",
    "romaji": "n1 pattern 125",
    "meaningUz": "N1 grammatik qoidasi 125 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_125",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_126",
    "level": "N1",
    "title": "N1 Qoida 126: 〜n1_pattern_126",
    "romaji": "n1 pattern 126",
    "meaningUz": "N1 grammatik qoidasi 126 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_126",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_127",
    "level": "N1",
    "title": "N1 Qoida 127: 〜n1_pattern_127",
    "romaji": "n1 pattern 127",
    "meaningUz": "N1 grammatik qoidasi 127 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_127",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_128",
    "level": "N1",
    "title": "N1 Qoida 128: 〜n1_pattern_128",
    "romaji": "n1 pattern 128",
    "meaningUz": "N1 grammatik qoidasi 128 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_128",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_129",
    "level": "N1",
    "title": "N1 Qoida 129: 〜n1_pattern_129",
    "romaji": "n1 pattern 129",
    "meaningUz": "N1 grammatik qoidasi 129 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_129",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_130",
    "level": "N1",
    "title": "N1 Qoida 130: 〜n1_pattern_130",
    "romaji": "n1 pattern 130",
    "meaningUz": "N1 grammatik qoidasi 130 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_130",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_131",
    "level": "N1",
    "title": "N1 Qoida 131: 〜n1_pattern_131",
    "romaji": "n1 pattern 131",
    "meaningUz": "N1 grammatik qoidasi 131 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_131",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_132",
    "level": "N1",
    "title": "N1 Qoida 132: 〜n1_pattern_132",
    "romaji": "n1 pattern 132",
    "meaningUz": "N1 grammatik qoidasi 132 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_132",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_133",
    "level": "N1",
    "title": "N1 Qoida 133: 〜n1_pattern_133",
    "romaji": "n1 pattern 133",
    "meaningUz": "N1 grammatik qoidasi 133 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_133",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_134",
    "level": "N1",
    "title": "N1 Qoida 134: 〜n1_pattern_134",
    "romaji": "n1 pattern 134",
    "meaningUz": "N1 grammatik qoidasi 134 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_134",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_135",
    "level": "N1",
    "title": "N1 Qoida 135: 〜n1_pattern_135",
    "romaji": "n1 pattern 135",
    "meaningUz": "N1 grammatik qoidasi 135 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_135",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_136",
    "level": "N1",
    "title": "N1 Qoida 136: 〜n1_pattern_136",
    "romaji": "n1 pattern 136",
    "meaningUz": "N1 grammatik qoidasi 136 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_136",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_137",
    "level": "N1",
    "title": "N1 Qoida 137: 〜n1_pattern_137",
    "romaji": "n1 pattern 137",
    "meaningUz": "N1 grammatik qoidasi 137 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_137",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_138",
    "level": "N1",
    "title": "N1 Qoida 138: 〜n1_pattern_138",
    "romaji": "n1 pattern 138",
    "meaningUz": "N1 grammatik qoidasi 138 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_138",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_139",
    "level": "N1",
    "title": "N1 Qoida 139: 〜n1_pattern_139",
    "romaji": "n1 pattern 139",
    "meaningUz": "N1 grammatik qoidasi 139 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_139",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_140",
    "level": "N1",
    "title": "N1 Qoida 140: 〜n1_pattern_140",
    "romaji": "n1 pattern 140",
    "meaningUz": "N1 grammatik qoidasi 140 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_140",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_141",
    "level": "N1",
    "title": "N1 Qoida 141: 〜n1_pattern_141",
    "romaji": "n1 pattern 141",
    "meaningUz": "N1 grammatik qoidasi 141 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_141",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_142",
    "level": "N1",
    "title": "N1 Qoida 142: 〜n1_pattern_142",
    "romaji": "n1 pattern 142",
    "meaningUz": "N1 grammatik qoidasi 142 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_142",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_143",
    "level": "N1",
    "title": "N1 Qoida 143: 〜n1_pattern_143",
    "romaji": "n1 pattern 143",
    "meaningUz": "N1 grammatik qoidasi 143 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_143",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_144",
    "level": "N1",
    "title": "N1 Qoida 144: 〜n1_pattern_144",
    "romaji": "n1 pattern 144",
    "meaningUz": "N1 grammatik qoidasi 144 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_144",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_145",
    "level": "N1",
    "title": "N1 Qoida 145: 〜n1_pattern_145",
    "romaji": "n1 pattern 145",
    "meaningUz": "N1 grammatik qoidasi 145 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_145",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_146",
    "level": "N1",
    "title": "N1 Qoida 146: 〜n1_pattern_146",
    "romaji": "n1 pattern 146",
    "meaningUz": "N1 grammatik qoidasi 146 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_146",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_147",
    "level": "N1",
    "title": "N1 Qoida 147: 〜n1_pattern_147",
    "romaji": "n1 pattern 147",
    "meaningUz": "N1 grammatik qoidasi 147 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_147",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_148",
    "level": "N1",
    "title": "N1 Qoida 148: 〜n1_pattern_148",
    "romaji": "n1 pattern 148",
    "meaningUz": "N1 grammatik qoidasi 148 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_148",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_149",
    "level": "N1",
    "title": "N1 Qoida 149: 〜n1_pattern_149",
    "romaji": "n1 pattern 149",
    "meaningUz": "N1 grammatik qoidasi 149 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_149",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_150",
    "level": "N1",
    "title": "N1 Qoida 150: 〜n1_pattern_150",
    "romaji": "n1 pattern 150",
    "meaningUz": "N1 grammatik qoidasi 150 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_150",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_151",
    "level": "N1",
    "title": "N1 Qoida 151: 〜n1_pattern_151",
    "romaji": "n1 pattern 151",
    "meaningUz": "N1 grammatik qoidasi 151 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_151",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_152",
    "level": "N1",
    "title": "N1 Qoida 152: 〜n1_pattern_152",
    "romaji": "n1 pattern 152",
    "meaningUz": "N1 grammatik qoidasi 152 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_152",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_153",
    "level": "N1",
    "title": "N1 Qoida 153: 〜n1_pattern_153",
    "romaji": "n1 pattern 153",
    "meaningUz": "N1 grammatik qoidasi 153 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_153",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_154",
    "level": "N1",
    "title": "N1 Qoida 154: 〜n1_pattern_154",
    "romaji": "n1 pattern 154",
    "meaningUz": "N1 grammatik qoidasi 154 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_154",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_155",
    "level": "N1",
    "title": "N1 Qoida 155: 〜n1_pattern_155",
    "romaji": "n1 pattern 155",
    "meaningUz": "N1 grammatik qoidasi 155 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_155",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_156",
    "level": "N1",
    "title": "N1 Qoida 156: 〜n1_pattern_156",
    "romaji": "n1 pattern 156",
    "meaningUz": "N1 grammatik qoidasi 156 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_156",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_157",
    "level": "N1",
    "title": "N1 Qoida 157: 〜n1_pattern_157",
    "romaji": "n1 pattern 157",
    "meaningUz": "N1 grammatik qoidasi 157 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_157",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_158",
    "level": "N1",
    "title": "N1 Qoida 158: 〜n1_pattern_158",
    "romaji": "n1 pattern 158",
    "meaningUz": "N1 grammatik qoidasi 158 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_158",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_159",
    "level": "N1",
    "title": "N1 Qoida 159: 〜n1_pattern_159",
    "romaji": "n1 pattern 159",
    "meaningUz": "N1 grammatik qoidasi 159 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_159",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_160",
    "level": "N1",
    "title": "N1 Qoida 160: 〜n1_pattern_160",
    "romaji": "n1 pattern 160",
    "meaningUz": "N1 grammatik qoidasi 160 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_160",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_161",
    "level": "N1",
    "title": "N1 Qoida 161: 〜n1_pattern_161",
    "romaji": "n1 pattern 161",
    "meaningUz": "N1 grammatik qoidasi 161 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_161",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_162",
    "level": "N1",
    "title": "N1 Qoida 162: 〜n1_pattern_162",
    "romaji": "n1 pattern 162",
    "meaningUz": "N1 grammatik qoidasi 162 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_162",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_163",
    "level": "N1",
    "title": "N1 Qoida 163: 〜n1_pattern_163",
    "romaji": "n1 pattern 163",
    "meaningUz": "N1 grammatik qoidasi 163 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_163",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_164",
    "level": "N1",
    "title": "N1 Qoida 164: 〜n1_pattern_164",
    "romaji": "n1 pattern 164",
    "meaningUz": "N1 grammatik qoidasi 164 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_164",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_165",
    "level": "N1",
    "title": "N1 Qoida 165: 〜n1_pattern_165",
    "romaji": "n1 pattern 165",
    "meaningUz": "N1 grammatik qoidasi 165 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_165",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_166",
    "level": "N1",
    "title": "N1 Qoida 166: 〜n1_pattern_166",
    "romaji": "n1 pattern 166",
    "meaningUz": "N1 grammatik qoidasi 166 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_166",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_167",
    "level": "N1",
    "title": "N1 Qoida 167: 〜n1_pattern_167",
    "romaji": "n1 pattern 167",
    "meaningUz": "N1 grammatik qoidasi 167 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_167",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_168",
    "level": "N1",
    "title": "N1 Qoida 168: 〜n1_pattern_168",
    "romaji": "n1 pattern 168",
    "meaningUz": "N1 grammatik qoidasi 168 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_168",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_169",
    "level": "N1",
    "title": "N1 Qoida 169: 〜n1_pattern_169",
    "romaji": "n1 pattern 169",
    "meaningUz": "N1 grammatik qoidasi 169 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_169",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_170",
    "level": "N1",
    "title": "N1 Qoida 170: 〜n1_pattern_170",
    "romaji": "n1 pattern 170",
    "meaningUz": "N1 grammatik qoidasi 170 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_170",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_171",
    "level": "N1",
    "title": "N1 Qoida 171: 〜n1_pattern_171",
    "romaji": "n1 pattern 171",
    "meaningUz": "N1 grammatik qoidasi 171 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_171",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_172",
    "level": "N1",
    "title": "N1 Qoida 172: 〜n1_pattern_172",
    "romaji": "n1 pattern 172",
    "meaningUz": "N1 grammatik qoidasi 172 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_172",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_173",
    "level": "N1",
    "title": "N1 Qoida 173: 〜n1_pattern_173",
    "romaji": "n1 pattern 173",
    "meaningUz": "N1 grammatik qoidasi 173 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_173",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_174",
    "level": "N1",
    "title": "N1 Qoida 174: 〜n1_pattern_174",
    "romaji": "n1 pattern 174",
    "meaningUz": "N1 grammatik qoidasi 174 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_174",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_175",
    "level": "N1",
    "title": "N1 Qoida 175: 〜n1_pattern_175",
    "romaji": "n1 pattern 175",
    "meaningUz": "N1 grammatik qoidasi 175 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_175",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_176",
    "level": "N1",
    "title": "N1 Qoida 176: 〜n1_pattern_176",
    "romaji": "n1 pattern 176",
    "meaningUz": "N1 grammatik qoidasi 176 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_176",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_177",
    "level": "N1",
    "title": "N1 Qoida 177: 〜n1_pattern_177",
    "romaji": "n1 pattern 177",
    "meaningUz": "N1 grammatik qoidasi 177 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_177",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_178",
    "level": "N1",
    "title": "N1 Qoida 178: 〜n1_pattern_178",
    "romaji": "n1 pattern 178",
    "meaningUz": "N1 grammatik qoidasi 178 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_178",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_179",
    "level": "N1",
    "title": "N1 Qoida 179: 〜n1_pattern_179",
    "romaji": "n1 pattern 179",
    "meaningUz": "N1 grammatik qoidasi 179 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_179",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  },
  {
    "id": "g_n1_180",
    "level": "N1",
    "title": "N1 Qoida 180: 〜n1_pattern_180",
    "romaji": "n1 pattern 180",
    "meaningUz": "N1 grammatik qoidasi 180 — foydalanish strukturasi",
    "structure": "Fe'l/Sifat/Ot + 〜n1_180",
    "examples": [
      {
        "ja": "私[わたし]はN1の勉強[べんきょう]を連日[れんじつ]続[つづ]けています。",
        "romaji": "Watashi wa N1 no benkyou wo renjitsu tsudukete imasu.",
        "uz": "Men N1 darajasi bo'yicha har kuni dars qilaman."
      }
    ]
  }
];

export const JLPT_GRAMMAR_DATABASE: JlptGrammarItem[] = rawGrammarData as unknown as JlptGrammarItem[];
