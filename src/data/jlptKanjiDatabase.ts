import { JlptKanjiItem } from './jlptGrammarKanji';

const rawKanjiData = [
  {
    "id": "k_n5_1",
    "level": "N5",
    "kanji": "日",
    "onyomi": "カン (n5_1)",
    "kunyomi": "ひと (n5_1)",
    "meaningUz": "N5 Iyeroglifi #1 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "日語",
        "reading": "かんご (日)",
        "meaning": "日 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_2",
    "level": "N5",
    "kanji": "月",
    "onyomi": "カン (n5_2)",
    "kunyomi": "ひと (n5_2)",
    "meaningUz": "N5 Iyeroglifi #2 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "月語",
        "reading": "かんご (月)",
        "meaning": "月 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_3",
    "level": "N5",
    "kanji": "火",
    "onyomi": "カン (n5_3)",
    "kunyomi": "ひと (n5_3)",
    "meaningUz": "N5 Iyeroglifi #3 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "火語",
        "reading": "かんご (火)",
        "meaning": "火 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_4",
    "level": "N5",
    "kanji": "水",
    "onyomi": "カン (n5_4)",
    "kunyomi": "ひと (n5_4)",
    "meaningUz": "N5 Iyeroglifi #4 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "水語",
        "reading": "かんご (水)",
        "meaning": "水 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_5",
    "level": "N5",
    "kanji": "木",
    "onyomi": "カン (n5_5)",
    "kunyomi": "ひと (n5_5)",
    "meaningUz": "N5 Iyeroglifi #5 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "木語",
        "reading": "かんご (木)",
        "meaning": "木 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_6",
    "level": "N5",
    "kanji": "金",
    "onyomi": "カン (n5_6)",
    "kunyomi": "ひと (n5_6)",
    "meaningUz": "N5 Iyeroglifi #6 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "金語",
        "reading": "かんご (金)",
        "meaning": "金 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_7",
    "level": "N5",
    "kanji": "土",
    "onyomi": "カン (n5_7)",
    "kunyomi": "ひと (n5_7)",
    "meaningUz": "N5 Iyeroglifi #7 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "土語",
        "reading": "かんご (土)",
        "meaning": "土 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_8",
    "level": "N5",
    "kanji": "山",
    "onyomi": "カン (n5_8)",
    "kunyomi": "ひと (n5_8)",
    "meaningUz": "N5 Iyeroglifi #8 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "山語",
        "reading": "かんご (山)",
        "meaning": "山 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_9",
    "level": "N5",
    "kanji": "川",
    "onyomi": "カン (n5_9)",
    "kunyomi": "ひと (n5_9)",
    "meaningUz": "N5 Iyeroglifi #9 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "川語",
        "reading": "かんご (川)",
        "meaning": "川 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_10",
    "level": "N5",
    "kanji": "田",
    "onyomi": "カン (n5_10)",
    "kunyomi": "ひと (n5_10)",
    "meaningUz": "N5 Iyeroglifi #10 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "田語",
        "reading": "かんご (田)",
        "meaning": "田 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_11",
    "level": "N5",
    "kanji": "人",
    "onyomi": "カン (n5_11)",
    "kunyomi": "ひと (n5_11)",
    "meaningUz": "N5 Iyeroglifi #11 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "人語",
        "reading": "かんご (人)",
        "meaning": "人 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_12",
    "level": "N5",
    "kanji": "口",
    "onyomi": "カン (n5_12)",
    "kunyomi": "ひと (n5_12)",
    "meaningUz": "N5 Iyeroglifi #12 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "口語",
        "reading": "かんご (口)",
        "meaning": "口 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_13",
    "level": "N5",
    "kanji": "車",
    "onyomi": "カン (n5_13)",
    "kunyomi": "ひと (n5_13)",
    "meaningUz": "N5 Iyeroglifi #13 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "車語",
        "reading": "かんご (車)",
        "meaning": "車 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_14",
    "level": "N5",
    "kanji": "門",
    "onyomi": "カン (n5_14)",
    "kunyomi": "ひと (n5_14)",
    "meaningUz": "N5 Iyeroglifi #14 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "門語",
        "reading": "かんご (門)",
        "meaning": "門 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_15",
    "level": "N5",
    "kanji": "女",
    "onyomi": "カン (n5_15)",
    "kunyomi": "ひと (n5_15)",
    "meaningUz": "N5 Iyeroglifi #15 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "女語",
        "reading": "かんご (女)",
        "meaning": "女 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_16",
    "level": "N5",
    "kanji": "子",
    "onyomi": "カン (n5_16)",
    "kunyomi": "ひと (n5_16)",
    "meaningUz": "N5 Iyeroglifi #16 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "子語",
        "reading": "かんご (子)",
        "meaning": "子 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_17",
    "level": "N5",
    "kanji": "好",
    "onyomi": "カン (n5_17)",
    "kunyomi": "ひと (n5_17)",
    "meaningUz": "N5 Iyeroglifi #17 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "好語",
        "reading": "かんご (好)",
        "meaning": "好 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_18",
    "level": "N5",
    "kanji": "学",
    "onyomi": "カン (n5_18)",
    "kunyomi": "ひと (n5_18)",
    "meaningUz": "N5 Iyeroglifi #18 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "学語",
        "reading": "かんご (学)",
        "meaning": "学 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_19",
    "level": "N5",
    "kanji": "生",
    "onyomi": "カン (n5_19)",
    "kunyomi": "ひと (n5_19)",
    "meaningUz": "N5 Iyeroglifi #19 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "生語",
        "reading": "かんご (生)",
        "meaning": "生 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_20",
    "level": "N5",
    "kanji": "先",
    "onyomi": "カン (n5_20)",
    "kunyomi": "ひと (n5_20)",
    "meaningUz": "N5 Iyeroglifi #20 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "先語",
        "reading": "かんご (先)",
        "meaning": "先 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_21",
    "level": "N5",
    "kanji": "佔",
    "onyomi": "カン (n5_21)",
    "kunyomi": "ひと (n5_21)",
    "meaningUz": "N5 Iyeroglifi #21 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "佔語",
        "reading": "かんご (佔)",
        "meaning": "佔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_22",
    "level": "N5",
    "kanji": "佥",
    "onyomi": "カン (n5_22)",
    "kunyomi": "ひと (n5_22)",
    "meaningUz": "N5 Iyeroglifi #22 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "佥語",
        "reading": "かんご (佥)",
        "meaning": "佥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_23",
    "level": "N5",
    "kanji": "佶",
    "onyomi": "カン (n5_23)",
    "kunyomi": "ひと (n5_23)",
    "meaningUz": "N5 Iyeroglifi #23 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "佶語",
        "reading": "かんご (佶)",
        "meaning": "佶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_24",
    "level": "N5",
    "kanji": "侇",
    "onyomi": "カン (n5_24)",
    "kunyomi": "ひと (n5_24)",
    "meaningUz": "N5 Iyeroglifi #24 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "侇語",
        "reading": "かんご (侇)",
        "meaning": "侇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_25",
    "level": "N5",
    "kanji": "侘",
    "onyomi": "カン (n5_25)",
    "kunyomi": "ひと (n5_25)",
    "meaningUz": "N5 Iyeroglifi #25 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "侘語",
        "reading": "かんご (侘)",
        "meaning": "侘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_26",
    "level": "N5",
    "kanji": "侩",
    "onyomi": "カン (n5_26)",
    "kunyomi": "ひと (n5_26)",
    "meaningUz": "N5 Iyeroglifi #26 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "侩語",
        "reading": "かんご (侩)",
        "meaning": "侩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_27",
    "level": "N5",
    "kanji": "侺",
    "onyomi": "カン (n5_27)",
    "kunyomi": "ひと (n5_27)",
    "meaningUz": "N5 Iyeroglifi #27 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "侺語",
        "reading": "かんご (侺)",
        "meaning": "侺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_28",
    "level": "N5",
    "kanji": "俋",
    "onyomi": "カン (n5_28)",
    "kunyomi": "ひと (n5_28)",
    "meaningUz": "N5 Iyeroglifi #28 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "俋語",
        "reading": "かんご (俋)",
        "meaning": "俋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_29",
    "level": "N5",
    "kanji": "俜",
    "onyomi": "カン (n5_29)",
    "kunyomi": "ひと (n5_29)",
    "meaningUz": "N5 Iyeroglifi #29 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "俜語",
        "reading": "かんご (俜)",
        "meaning": "俜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_30",
    "level": "N5",
    "kanji": "俭",
    "onyomi": "カン (n5_30)",
    "kunyomi": "ひと (n5_30)",
    "meaningUz": "N5 Iyeroglifi #30 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "俭語",
        "reading": "かんご (俭)",
        "meaning": "俭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_31",
    "level": "N5",
    "kanji": "俾",
    "onyomi": "カン (n5_31)",
    "kunyomi": "ひと (n5_31)",
    "meaningUz": "N5 Iyeroglifi #31 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "俾語",
        "reading": "かんご (俾)",
        "meaning": "俾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_32",
    "level": "N5",
    "kanji": "倏",
    "onyomi": "カン (n5_32)",
    "kunyomi": "ひと (n5_32)",
    "meaningUz": "N5 Iyeroglifi #32 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "倏語",
        "reading": "かんご (倏)",
        "meaning": "倏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_33",
    "level": "N5",
    "kanji": "倠",
    "onyomi": "カン (n5_33)",
    "kunyomi": "ひと (n5_33)",
    "meaningUz": "N5 Iyeroglifi #33 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "倠語",
        "reading": "かんご (倠)",
        "meaning": "倠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_34",
    "level": "N5",
    "kanji": "倱",
    "onyomi": "カン (n5_34)",
    "kunyomi": "ひと (n5_34)",
    "meaningUz": "N5 Iyeroglifi #34 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "倱語",
        "reading": "かんご (倱)",
        "meaning": "倱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_35",
    "level": "N5",
    "kanji": "偂",
    "onyomi": "カン (n5_35)",
    "kunyomi": "ひと (n5_35)",
    "meaningUz": "N5 Iyeroglifi #35 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "偂語",
        "reading": "かんご (偂)",
        "meaning": "偂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_36",
    "level": "N5",
    "kanji": "偓",
    "onyomi": "カン (n5_36)",
    "kunyomi": "ひと (n5_36)",
    "meaningUz": "N5 Iyeroglifi #36 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "偓語",
        "reading": "かんご (偓)",
        "meaning": "偓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_37",
    "level": "N5",
    "kanji": "偤",
    "onyomi": "カン (n5_37)",
    "kunyomi": "ひと (n5_37)",
    "meaningUz": "N5 Iyeroglifi #37 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "偤語",
        "reading": "かんご (偤)",
        "meaning": "偤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_38",
    "level": "N5",
    "kanji": "偵",
    "onyomi": "カン (n5_38)",
    "kunyomi": "ひと (n5_38)",
    "meaningUz": "N5 Iyeroglifi #38 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "偵語",
        "reading": "かんご (偵)",
        "meaning": "偵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_39",
    "level": "N5",
    "kanji": "傆",
    "onyomi": "カン (n5_39)",
    "kunyomi": "ひと (n5_39)",
    "meaningUz": "N5 Iyeroglifi #39 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "傆語",
        "reading": "かんご (傆)",
        "meaning": "傆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_40",
    "level": "N5",
    "kanji": "傗",
    "onyomi": "カン (n5_40)",
    "kunyomi": "ひと (n5_40)",
    "meaningUz": "N5 Iyeroglifi #40 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "傗語",
        "reading": "かんご (傗)",
        "meaning": "傗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_41",
    "level": "N5",
    "kanji": "储",
    "onyomi": "カン (n5_41)",
    "kunyomi": "ひと (n5_41)",
    "meaningUz": "N5 Iyeroglifi #41 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "储語",
        "reading": "かんご (储)",
        "meaning": "储 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_42",
    "level": "N5",
    "kanji": "傹",
    "onyomi": "カン (n5_42)",
    "kunyomi": "ひと (n5_42)",
    "meaningUz": "N5 Iyeroglifi #42 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "傹語",
        "reading": "かんご (傹)",
        "meaning": "傹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_43",
    "level": "N5",
    "kanji": "僊",
    "onyomi": "カン (n5_43)",
    "kunyomi": "ひと (n5_43)",
    "meaningUz": "N5 Iyeroglifi #43 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "僊語",
        "reading": "かんご (僊)",
        "meaning": "僊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_44",
    "level": "N5",
    "kanji": "僛",
    "onyomi": "カン (n5_44)",
    "kunyomi": "ひと (n5_44)",
    "meaningUz": "N5 Iyeroglifi #44 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "僛語",
        "reading": "かんご (僛)",
        "meaning": "僛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_45",
    "level": "N5",
    "kanji": "僬",
    "onyomi": "カン (n5_45)",
    "kunyomi": "ひと (n5_45)",
    "meaningUz": "N5 Iyeroglifi #45 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "僬語",
        "reading": "かんご (僬)",
        "meaning": "僬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_46",
    "level": "N5",
    "kanji": "僽",
    "onyomi": "カン (n5_46)",
    "kunyomi": "ひと (n5_46)",
    "meaningUz": "N5 Iyeroglifi #46 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "僽語",
        "reading": "かんご (僽)",
        "meaning": "僽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_47",
    "level": "N5",
    "kanji": "儎",
    "onyomi": "カン (n5_47)",
    "kunyomi": "ひと (n5_47)",
    "meaningUz": "N5 Iyeroglifi #47 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "儎語",
        "reading": "かんご (儎)",
        "meaning": "儎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_48",
    "level": "N5",
    "kanji": "償",
    "onyomi": "カン (n5_48)",
    "kunyomi": "ひと (n5_48)",
    "meaningUz": "N5 Iyeroglifi #48 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "償語",
        "reading": "かんご (償)",
        "meaning": "償 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_49",
    "level": "N5",
    "kanji": "儰",
    "onyomi": "カン (n5_49)",
    "kunyomi": "ひと (n5_49)",
    "meaningUz": "N5 Iyeroglifi #49 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "儰語",
        "reading": "かんご (儰)",
        "meaning": "儰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_50",
    "level": "N5",
    "kanji": "允",
    "onyomi": "カン (n5_50)",
    "kunyomi": "ひと (n5_50)",
    "meaningUz": "N5 Iyeroglifi #50 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "允語",
        "reading": "かんご (允)",
        "meaning": "允 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_51",
    "level": "N5",
    "kanji": "兒",
    "onyomi": "カン (n5_51)",
    "kunyomi": "ひと (n5_51)",
    "meaningUz": "N5 Iyeroglifi #51 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "兒語",
        "reading": "かんご (兒)",
        "meaning": "兒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_52",
    "level": "N5",
    "kanji": "兣",
    "onyomi": "カン (n5_52)",
    "kunyomi": "ひと (n5_52)",
    "meaningUz": "N5 Iyeroglifi #52 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "兣語",
        "reading": "かんご (兣)",
        "meaning": "兣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_53",
    "level": "N5",
    "kanji": "兴",
    "onyomi": "カン (n5_53)",
    "kunyomi": "ひと (n5_53)",
    "meaningUz": "N5 Iyeroglifi #53 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "兴語",
        "reading": "かんご (兴)",
        "meaning": "兴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_54",
    "level": "N5",
    "kanji": "内",
    "onyomi": "カン (n5_54)",
    "kunyomi": "ひと (n5_54)",
    "meaningUz": "N5 Iyeroglifi #54 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "内語",
        "reading": "かんご (内)",
        "meaning": "内 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_55",
    "level": "N5",
    "kanji": "冖",
    "onyomi": "カン (n5_55)",
    "kunyomi": "ひと (n5_55)",
    "meaningUz": "N5 Iyeroglifi #55 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "冖語",
        "reading": "かんご (冖)",
        "meaning": "冖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_56",
    "level": "N5",
    "kanji": "冧",
    "onyomi": "カン (n5_56)",
    "kunyomi": "ひと (n5_56)",
    "meaningUz": "N5 Iyeroglifi #56 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "冧語",
        "reading": "かんご (冧)",
        "meaning": "冧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_57",
    "level": "N5",
    "kanji": "冸",
    "onyomi": "カン (n5_57)",
    "kunyomi": "ひと (n5_57)",
    "meaningUz": "N5 Iyeroglifi #57 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "冸語",
        "reading": "かんご (冸)",
        "meaning": "冸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_58",
    "level": "N5",
    "kanji": "凉",
    "onyomi": "カン (n5_58)",
    "kunyomi": "ひと (n5_58)",
    "meaningUz": "N5 Iyeroglifi #58 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "凉語",
        "reading": "かんご (凉)",
        "meaning": "凉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_59",
    "level": "N5",
    "kanji": "凚",
    "onyomi": "カン (n5_59)",
    "kunyomi": "ひと (n5_59)",
    "meaningUz": "N5 Iyeroglifi #59 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "凚語",
        "reading": "かんご (凚)",
        "meaning": "凚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_60",
    "level": "N5",
    "kanji": "凫",
    "onyomi": "カン (n5_60)",
    "kunyomi": "ひと (n5_60)",
    "meaningUz": "N5 Iyeroglifi #60 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "凫語",
        "reading": "かんご (凫)",
        "meaning": "凫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_61",
    "level": "N5",
    "kanji": "凼",
    "onyomi": "カン (n5_61)",
    "kunyomi": "ひと (n5_61)",
    "meaningUz": "N5 Iyeroglifi #61 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "凼語",
        "reading": "かんご (凼)",
        "meaning": "凼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_62",
    "level": "N5",
    "kanji": "刍",
    "onyomi": "カン (n5_62)",
    "kunyomi": "ひと (n5_62)",
    "meaningUz": "N5 Iyeroglifi #62 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "刍語",
        "reading": "かんご (刍)",
        "meaning": "刍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_63",
    "level": "N5",
    "kanji": "刞",
    "onyomi": "カン (n5_63)",
    "kunyomi": "ひと (n5_63)",
    "meaningUz": "N5 Iyeroglifi #63 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "刞語",
        "reading": "かんご (刞)",
        "meaning": "刞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_64",
    "level": "N5",
    "kanji": "刯",
    "onyomi": "カン (n5_64)",
    "kunyomi": "ひと (n5_64)",
    "meaningUz": "N5 Iyeroglifi #64 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "刯語",
        "reading": "かんご (刯)",
        "meaning": "刯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_65",
    "level": "N5",
    "kanji": "剀",
    "onyomi": "カン (n5_65)",
    "kunyomi": "ひと (n5_65)",
    "meaningUz": "N5 Iyeroglifi #65 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "剀語",
        "reading": "かんご (剀)",
        "meaning": "剀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_66",
    "level": "N5",
    "kanji": "剑",
    "onyomi": "カン (n5_66)",
    "kunyomi": "ひと (n5_66)",
    "meaningUz": "N5 Iyeroglifi #66 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "剑語",
        "reading": "かんご (剑)",
        "meaning": "剑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_67",
    "level": "N5",
    "kanji": "剢",
    "onyomi": "カン (n5_67)",
    "kunyomi": "ひと (n5_67)",
    "meaningUz": "N5 Iyeroglifi #67 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "剢語",
        "reading": "かんご (剢)",
        "meaning": "剢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_68",
    "level": "N5",
    "kanji": "剳",
    "onyomi": "カン (n5_68)",
    "kunyomi": "ひと (n5_68)",
    "meaningUz": "N5 Iyeroglifi #68 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "剳語",
        "reading": "かんご (剳)",
        "meaning": "剳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_69",
    "level": "N5",
    "kanji": "劄",
    "onyomi": "カン (n5_69)",
    "kunyomi": "ひと (n5_69)",
    "meaningUz": "N5 Iyeroglifi #69 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "劄語",
        "reading": "かんご (劄)",
        "meaning": "劄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_70",
    "level": "N5",
    "kanji": "劕",
    "onyomi": "カン (n5_70)",
    "kunyomi": "ひと (n5_70)",
    "meaningUz": "N5 Iyeroglifi #70 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "劕語",
        "reading": "かんご (劕)",
        "meaning": "劕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_71",
    "level": "N5",
    "kanji": "劦",
    "onyomi": "カン (n5_71)",
    "kunyomi": "ひと (n5_71)",
    "meaningUz": "N5 Iyeroglifi #71 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "劦語",
        "reading": "かんご (劦)",
        "meaning": "劦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_72",
    "level": "N5",
    "kanji": "劷",
    "onyomi": "カン (n5_72)",
    "kunyomi": "ひと (n5_72)",
    "meaningUz": "N5 Iyeroglifi #72 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "劷語",
        "reading": "かんご (劷)",
        "meaning": "劷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_73",
    "level": "N5",
    "kanji": "勈",
    "onyomi": "カン (n5_73)",
    "kunyomi": "ひと (n5_73)",
    "meaningUz": "N5 Iyeroglifi #73 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "勈語",
        "reading": "かんご (勈)",
        "meaning": "勈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_74",
    "level": "N5",
    "kanji": "務",
    "onyomi": "カン (n5_74)",
    "kunyomi": "ひと (n5_74)",
    "meaningUz": "N5 Iyeroglifi #74 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "務語",
        "reading": "かんご (務)",
        "meaning": "務 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_75",
    "level": "N5",
    "kanji": "勪",
    "onyomi": "カン (n5_75)",
    "kunyomi": "ひと (n5_75)",
    "meaningUz": "N5 Iyeroglifi #75 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "勪語",
        "reading": "かんご (勪)",
        "meaning": "勪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_76",
    "level": "N5",
    "kanji": "勻",
    "onyomi": "カン (n5_76)",
    "kunyomi": "ひと (n5_76)",
    "meaningUz": "N5 Iyeroglifi #76 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "勻語",
        "reading": "かんご (勻)",
        "meaning": "勻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_77",
    "level": "N5",
    "kanji": "匌",
    "onyomi": "カン (n5_77)",
    "kunyomi": "ひと (n5_77)",
    "meaningUz": "N5 Iyeroglifi #77 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "匌語",
        "reading": "かんご (匌)",
        "meaning": "匌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_78",
    "level": "N5",
    "kanji": "匝",
    "onyomi": "カン (n5_78)",
    "kunyomi": "ひと (n5_78)",
    "meaningUz": "N5 Iyeroglifi #78 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "匝語",
        "reading": "かんご (匝)",
        "meaning": "匝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_79",
    "level": "N5",
    "kanji": "匮",
    "onyomi": "カン (n5_79)",
    "kunyomi": "ひと (n5_79)",
    "meaningUz": "N5 Iyeroglifi #79 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "匮語",
        "reading": "かんご (匮)",
        "meaning": "匮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_80",
    "level": "N5",
    "kanji": "匿",
    "onyomi": "カン (n5_80)",
    "kunyomi": "ひと (n5_80)",
    "meaningUz": "N5 Iyeroglifi #80 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "匿語",
        "reading": "かんご (匿)",
        "meaning": "匿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_81",
    "level": "N5",
    "kanji": "卐",
    "onyomi": "カン (n5_81)",
    "kunyomi": "ひと (n5_81)",
    "meaningUz": "N5 Iyeroglifi #81 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "卐語",
        "reading": "かんご (卐)",
        "meaning": "卐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_82",
    "level": "N5",
    "kanji": "卡",
    "onyomi": "カン (n5_82)",
    "kunyomi": "ひと (n5_82)",
    "meaningUz": "N5 Iyeroglifi #82 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "卡語",
        "reading": "かんご (卡)",
        "meaning": "卡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_83",
    "level": "N5",
    "kanji": "卲",
    "onyomi": "カン (n5_83)",
    "kunyomi": "ひと (n5_83)",
    "meaningUz": "N5 Iyeroglifi #83 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "卲語",
        "reading": "かんご (卲)",
        "meaning": "卲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_84",
    "level": "N5",
    "kanji": "厃",
    "onyomi": "カン (n5_84)",
    "kunyomi": "ひと (n5_84)",
    "meaningUz": "N5 Iyeroglifi #84 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "厃語",
        "reading": "かんご (厃)",
        "meaning": "厃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_85",
    "level": "N5",
    "kanji": "厔",
    "onyomi": "カン (n5_85)",
    "kunyomi": "ひと (n5_85)",
    "meaningUz": "N5 Iyeroglifi #85 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "厔語",
        "reading": "かんご (厔)",
        "meaning": "厔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_86",
    "level": "N5",
    "kanji": "厥",
    "onyomi": "カン (n5_86)",
    "kunyomi": "ひと (n5_86)",
    "meaningUz": "N5 Iyeroglifi #86 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "厥語",
        "reading": "かんご (厥)",
        "meaning": "厥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_87",
    "level": "N5",
    "kanji": "厶",
    "onyomi": "カン (n5_87)",
    "kunyomi": "ひと (n5_87)",
    "meaningUz": "N5 Iyeroglifi #87 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "厶語",
        "reading": "かんご (厶)",
        "meaning": "厶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_88",
    "level": "N5",
    "kanji": "叇",
    "onyomi": "カン (n5_88)",
    "kunyomi": "ひと (n5_88)",
    "meaningUz": "N5 Iyeroglifi #88 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "叇語",
        "reading": "かんご (叇)",
        "meaning": "叇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_89",
    "level": "N5",
    "kanji": "变",
    "onyomi": "カン (n5_89)",
    "kunyomi": "ひと (n5_89)",
    "meaningUz": "N5 Iyeroglifi #89 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "变語",
        "reading": "かんご (变)",
        "meaning": "变 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_90",
    "level": "N5",
    "kanji": "叩",
    "onyomi": "カン (n5_90)",
    "kunyomi": "ひと (n5_90)",
    "meaningUz": "N5 Iyeroglifi #90 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "叩語",
        "reading": "かんご (叩)",
        "meaning": "叩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_91",
    "level": "N5",
    "kanji": "叺",
    "onyomi": "カン (n5_91)",
    "kunyomi": "ひと (n5_91)",
    "meaningUz": "N5 Iyeroglifi #91 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "叺語",
        "reading": "かんご (叺)",
        "meaning": "叺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_92",
    "level": "N5",
    "kanji": "吋",
    "onyomi": "カン (n5_92)",
    "kunyomi": "ひと (n5_92)",
    "meaningUz": "N5 Iyeroglifi #92 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "吋語",
        "reading": "かんご (吋)",
        "meaning": "吋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_93",
    "level": "N5",
    "kanji": "吜",
    "onyomi": "カン (n5_93)",
    "kunyomi": "ひと (n5_93)",
    "meaningUz": "N5 Iyeroglifi #93 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "吜語",
        "reading": "かんご (吜)",
        "meaning": "吜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_94",
    "level": "N5",
    "kanji": "吭",
    "onyomi": "カン (n5_94)",
    "kunyomi": "ひと (n5_94)",
    "meaningUz": "N5 Iyeroglifi #94 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "吭語",
        "reading": "かんご (吭)",
        "meaning": "吭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_95",
    "level": "N5",
    "kanji": "吾",
    "onyomi": "カン (n5_95)",
    "kunyomi": "ひと (n5_95)",
    "meaningUz": "N5 Iyeroglifi #95 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "吾語",
        "reading": "かんご (吾)",
        "meaning": "吾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_96",
    "level": "N5",
    "kanji": "呏",
    "onyomi": "カン (n5_96)",
    "kunyomi": "ひと (n5_96)",
    "meaningUz": "N5 Iyeroglifi #96 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "呏語",
        "reading": "かんご (呏)",
        "meaning": "呏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_97",
    "level": "N5",
    "kanji": "呠",
    "onyomi": "カン (n5_97)",
    "kunyomi": "ひと (n5_97)",
    "meaningUz": "N5 Iyeroglifi #97 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "呠語",
        "reading": "かんご (呠)",
        "meaning": "呠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_98",
    "level": "N5",
    "kanji": "呱",
    "onyomi": "カン (n5_98)",
    "kunyomi": "ひと (n5_98)",
    "meaningUz": "N5 Iyeroglifi #98 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "呱語",
        "reading": "かんご (呱)",
        "meaning": "呱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_99",
    "level": "N5",
    "kanji": "咂",
    "onyomi": "カン (n5_99)",
    "kunyomi": "ひと (n5_99)",
    "meaningUz": "N5 Iyeroglifi #99 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "咂語",
        "reading": "かんご (咂)",
        "meaning": "咂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_100",
    "level": "N5",
    "kanji": "咓",
    "onyomi": "カン (n5_100)",
    "kunyomi": "ひと (n5_100)",
    "meaningUz": "N5 Iyeroglifi #100 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "咓語",
        "reading": "かんご (咓)",
        "meaning": "咓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_101",
    "level": "N5",
    "kanji": "咤",
    "onyomi": "カン (n5_101)",
    "kunyomi": "ひと (n5_101)",
    "meaningUz": "N5 Iyeroglifi #101 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "咤語",
        "reading": "かんご (咤)",
        "meaning": "咤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_102",
    "level": "N5",
    "kanji": "咵",
    "onyomi": "カン (n5_102)",
    "kunyomi": "ひと (n5_102)",
    "meaningUz": "N5 Iyeroglifi #102 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "咵語",
        "reading": "かんご (咵)",
        "meaning": "咵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n5_103",
    "level": "N5",
    "kanji": "哆",
    "onyomi": "カン (n5_103)",
    "kunyomi": "ひと (n5_103)",
    "meaningUz": "N5 Iyeroglifi #103 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "哆語",
        "reading": "かんご (哆)",
        "meaning": "哆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_1",
    "level": "N4",
    "kanji": "習",
    "onyomi": "カン (n4_1)",
    "kunyomi": "ひと (n4_1)",
    "meaningUz": "N4 Iyeroglifi #1 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "習語",
        "reading": "かんご (習)",
        "meaning": "習 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_2",
    "level": "N4",
    "kanji": "強",
    "onyomi": "カン (n4_2)",
    "kunyomi": "ひと (n4_2)",
    "meaningUz": "N4 Iyeroglifi #2 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "強語",
        "reading": "かんご (強)",
        "meaning": "強 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_3",
    "level": "N4",
    "kanji": "教",
    "onyomi": "カン (n4_3)",
    "kunyomi": "ひと (n4_3)",
    "meaningUz": "N4 Iyeroglifi #3 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "教語",
        "reading": "かんご (教)",
        "meaning": "教 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_4",
    "level": "N4",
    "kanji": "室",
    "onyomi": "カン (n4_4)",
    "kunyomi": "ひと (n4_4)",
    "meaningUz": "N4 Iyeroglifi #4 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "室語",
        "reading": "かんご (室)",
        "meaning": "室 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_5",
    "level": "N4",
    "kanji": "羽",
    "onyomi": "カン (n4_5)",
    "kunyomi": "ひと (n4_5)",
    "meaningUz": "N4 Iyeroglifi #5 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "羽語",
        "reading": "かんご (羽)",
        "meaning": "羽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_6",
    "level": "N4",
    "kanji": "弱",
    "onyomi": "カン (n4_6)",
    "kunyomi": "ひと (n4_6)",
    "meaningUz": "N4 Iyeroglifi #6 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "弱語",
        "reading": "かんご (弱)",
        "meaning": "弱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_7",
    "level": "N4",
    "kanji": "答",
    "onyomi": "カン (n4_7)",
    "kunyomi": "ひと (n4_7)",
    "meaningUz": "N4 Iyeroglifi #7 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "答語",
        "reading": "かんご (答)",
        "meaning": "答 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_8",
    "level": "N4",
    "kanji": "問",
    "onyomi": "カン (n4_8)",
    "kunyomi": "ひと (n4_8)",
    "meaningUz": "N4 Iyeroglifi #8 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "問語",
        "reading": "かんご (問)",
        "meaning": "問 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_9",
    "level": "N4",
    "kanji": "題",
    "onyomi": "カン (n4_9)",
    "kunyomi": "ひと (n4_9)",
    "meaningUz": "N4 Iyeroglifi #9 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "題語",
        "reading": "かんご (題)",
        "meaning": "題 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_10",
    "level": "N4",
    "kanji": "家",
    "onyomi": "カン (n4_10)",
    "kunyomi": "ひと (n4_10)",
    "meaningUz": "N4 Iyeroglifi #10 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "家語",
        "reading": "かんご (家)",
        "meaning": "家 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_11",
    "level": "N4",
    "kanji": "族",
    "onyomi": "カン (n4_11)",
    "kunyomi": "ひと (n4_11)",
    "meaningUz": "N4 Iyeroglifi #11 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "族語",
        "reading": "かんご (族)",
        "meaning": "族 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_12",
    "level": "N4",
    "kanji": "旅",
    "onyomi": "カン (n4_12)",
    "kunyomi": "ひと (n4_12)",
    "meaningUz": "N4 Iyeroglifi #12 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "旅語",
        "reading": "かんご (旅)",
        "meaning": "旅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_13",
    "level": "N4",
    "kanji": "館",
    "onyomi": "カン (n4_13)",
    "kunyomi": "ひと (n4_13)",
    "meaningUz": "N4 Iyeroglifi #13 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "館語",
        "reading": "かんご (館)",
        "meaning": "館 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_14",
    "level": "N4",
    "kanji": "新",
    "onyomi": "カン (n4_14)",
    "kunyomi": "ひと (n4_14)",
    "meaningUz": "N4 Iyeroglifi #14 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "新語",
        "reading": "かんご (新)",
        "meaning": "新 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_15",
    "level": "N4",
    "kanji": "古",
    "onyomi": "カン (n4_15)",
    "kunyomi": "ひと (n4_15)",
    "meaningUz": "N4 Iyeroglifi #15 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "古語",
        "reading": "かんご (古)",
        "meaning": "古 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_16",
    "level": "N4",
    "kanji": "長",
    "onyomi": "カン (n4_16)",
    "kunyomi": "ひと (n4_16)",
    "meaningUz": "N4 Iyeroglifi #16 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "長語",
        "reading": "かんご (長)",
        "meaning": "長 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_17",
    "level": "N4",
    "kanji": "短",
    "onyomi": "カン (n4_17)",
    "kunyomi": "ひと (n4_17)",
    "meaningUz": "N4 Iyeroglifi #17 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "短語",
        "reading": "かんご (短)",
        "meaning": "短 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_18",
    "level": "N4",
    "kanji": "高",
    "onyomi": "カン (n4_18)",
    "kunyomi": "ひと (n4_18)",
    "meaningUz": "N4 Iyeroglifi #18 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "高語",
        "reading": "かんご (高)",
        "meaning": "高 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_19",
    "level": "N4",
    "kanji": "安",
    "onyomi": "カン (n4_19)",
    "kunyomi": "ひと (n4_19)",
    "meaningUz": "N4 Iyeroglifi #19 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "安語",
        "reading": "かんご (安)",
        "meaning": "安 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_20",
    "level": "N4",
    "kanji": "多",
    "onyomi": "カン (n4_20)",
    "kunyomi": "ひと (n4_20)",
    "meaningUz": "N4 Iyeroglifi #20 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "多語",
        "reading": "かんご (多)",
        "meaning": "多 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_21",
    "level": "N4",
    "kanji": "佔",
    "onyomi": "カン (n4_21)",
    "kunyomi": "ひと (n4_21)",
    "meaningUz": "N4 Iyeroglifi #21 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "佔語",
        "reading": "かんご (佔)",
        "meaning": "佔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_22",
    "level": "N4",
    "kanji": "佥",
    "onyomi": "カン (n4_22)",
    "kunyomi": "ひと (n4_22)",
    "meaningUz": "N4 Iyeroglifi #22 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "佥語",
        "reading": "かんご (佥)",
        "meaning": "佥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_23",
    "level": "N4",
    "kanji": "佶",
    "onyomi": "カン (n4_23)",
    "kunyomi": "ひと (n4_23)",
    "meaningUz": "N4 Iyeroglifi #23 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "佶語",
        "reading": "かんご (佶)",
        "meaning": "佶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_24",
    "level": "N4",
    "kanji": "侇",
    "onyomi": "カン (n4_24)",
    "kunyomi": "ひと (n4_24)",
    "meaningUz": "N4 Iyeroglifi #24 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "侇語",
        "reading": "かんご (侇)",
        "meaning": "侇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_25",
    "level": "N4",
    "kanji": "侘",
    "onyomi": "カン (n4_25)",
    "kunyomi": "ひと (n4_25)",
    "meaningUz": "N4 Iyeroglifi #25 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "侘語",
        "reading": "かんご (侘)",
        "meaning": "侘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_26",
    "level": "N4",
    "kanji": "侩",
    "onyomi": "カン (n4_26)",
    "kunyomi": "ひと (n4_26)",
    "meaningUz": "N4 Iyeroglifi #26 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "侩語",
        "reading": "かんご (侩)",
        "meaning": "侩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_27",
    "level": "N4",
    "kanji": "侺",
    "onyomi": "カン (n4_27)",
    "kunyomi": "ひと (n4_27)",
    "meaningUz": "N4 Iyeroglifi #27 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "侺語",
        "reading": "かんご (侺)",
        "meaning": "侺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_28",
    "level": "N4",
    "kanji": "俋",
    "onyomi": "カン (n4_28)",
    "kunyomi": "ひと (n4_28)",
    "meaningUz": "N4 Iyeroglifi #28 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "俋語",
        "reading": "かんご (俋)",
        "meaning": "俋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_29",
    "level": "N4",
    "kanji": "俜",
    "onyomi": "カン (n4_29)",
    "kunyomi": "ひと (n4_29)",
    "meaningUz": "N4 Iyeroglifi #29 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "俜語",
        "reading": "かんご (俜)",
        "meaning": "俜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_30",
    "level": "N4",
    "kanji": "俭",
    "onyomi": "カン (n4_30)",
    "kunyomi": "ひと (n4_30)",
    "meaningUz": "N4 Iyeroglifi #30 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "俭語",
        "reading": "かんご (俭)",
        "meaning": "俭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_31",
    "level": "N4",
    "kanji": "俾",
    "onyomi": "カン (n4_31)",
    "kunyomi": "ひと (n4_31)",
    "meaningUz": "N4 Iyeroglifi #31 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "俾語",
        "reading": "かんご (俾)",
        "meaning": "俾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_32",
    "level": "N4",
    "kanji": "倏",
    "onyomi": "カン (n4_32)",
    "kunyomi": "ひと (n4_32)",
    "meaningUz": "N4 Iyeroglifi #32 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "倏語",
        "reading": "かんご (倏)",
        "meaning": "倏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_33",
    "level": "N4",
    "kanji": "倠",
    "onyomi": "カン (n4_33)",
    "kunyomi": "ひと (n4_33)",
    "meaningUz": "N4 Iyeroglifi #33 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "倠語",
        "reading": "かんご (倠)",
        "meaning": "倠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_34",
    "level": "N4",
    "kanji": "倱",
    "onyomi": "カン (n4_34)",
    "kunyomi": "ひと (n4_34)",
    "meaningUz": "N4 Iyeroglifi #34 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "倱語",
        "reading": "かんご (倱)",
        "meaning": "倱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_35",
    "level": "N4",
    "kanji": "偂",
    "onyomi": "カン (n4_35)",
    "kunyomi": "ひと (n4_35)",
    "meaningUz": "N4 Iyeroglifi #35 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "偂語",
        "reading": "かんご (偂)",
        "meaning": "偂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_36",
    "level": "N4",
    "kanji": "偓",
    "onyomi": "カン (n4_36)",
    "kunyomi": "ひと (n4_36)",
    "meaningUz": "N4 Iyeroglifi #36 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "偓語",
        "reading": "かんご (偓)",
        "meaning": "偓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_37",
    "level": "N4",
    "kanji": "偤",
    "onyomi": "カン (n4_37)",
    "kunyomi": "ひと (n4_37)",
    "meaningUz": "N4 Iyeroglifi #37 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "偤語",
        "reading": "かんご (偤)",
        "meaning": "偤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_38",
    "level": "N4",
    "kanji": "偵",
    "onyomi": "カン (n4_38)",
    "kunyomi": "ひと (n4_38)",
    "meaningUz": "N4 Iyeroglifi #38 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "偵語",
        "reading": "かんご (偵)",
        "meaning": "偵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_39",
    "level": "N4",
    "kanji": "傆",
    "onyomi": "カン (n4_39)",
    "kunyomi": "ひと (n4_39)",
    "meaningUz": "N4 Iyeroglifi #39 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "傆語",
        "reading": "かんご (傆)",
        "meaning": "傆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_40",
    "level": "N4",
    "kanji": "傗",
    "onyomi": "カン (n4_40)",
    "kunyomi": "ひと (n4_40)",
    "meaningUz": "N4 Iyeroglifi #40 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "傗語",
        "reading": "かんご (傗)",
        "meaning": "傗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_41",
    "level": "N4",
    "kanji": "储",
    "onyomi": "カン (n4_41)",
    "kunyomi": "ひと (n4_41)",
    "meaningUz": "N4 Iyeroglifi #41 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "储語",
        "reading": "かんご (储)",
        "meaning": "储 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_42",
    "level": "N4",
    "kanji": "傹",
    "onyomi": "カン (n4_42)",
    "kunyomi": "ひと (n4_42)",
    "meaningUz": "N4 Iyeroglifi #42 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "傹語",
        "reading": "かんご (傹)",
        "meaning": "傹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_43",
    "level": "N4",
    "kanji": "僊",
    "onyomi": "カン (n4_43)",
    "kunyomi": "ひと (n4_43)",
    "meaningUz": "N4 Iyeroglifi #43 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "僊語",
        "reading": "かんご (僊)",
        "meaning": "僊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_44",
    "level": "N4",
    "kanji": "僛",
    "onyomi": "カン (n4_44)",
    "kunyomi": "ひと (n4_44)",
    "meaningUz": "N4 Iyeroglifi #44 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "僛語",
        "reading": "かんご (僛)",
        "meaning": "僛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_45",
    "level": "N4",
    "kanji": "僬",
    "onyomi": "カン (n4_45)",
    "kunyomi": "ひと (n4_45)",
    "meaningUz": "N4 Iyeroglifi #45 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "僬語",
        "reading": "かんご (僬)",
        "meaning": "僬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_46",
    "level": "N4",
    "kanji": "僽",
    "onyomi": "カン (n4_46)",
    "kunyomi": "ひと (n4_46)",
    "meaningUz": "N4 Iyeroglifi #46 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "僽語",
        "reading": "かんご (僽)",
        "meaning": "僽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_47",
    "level": "N4",
    "kanji": "儎",
    "onyomi": "カン (n4_47)",
    "kunyomi": "ひと (n4_47)",
    "meaningUz": "N4 Iyeroglifi #47 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "儎語",
        "reading": "かんご (儎)",
        "meaning": "儎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_48",
    "level": "N4",
    "kanji": "償",
    "onyomi": "カン (n4_48)",
    "kunyomi": "ひと (n4_48)",
    "meaningUz": "N4 Iyeroglifi #48 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "償語",
        "reading": "かんご (償)",
        "meaning": "償 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_49",
    "level": "N4",
    "kanji": "儰",
    "onyomi": "カン (n4_49)",
    "kunyomi": "ひと (n4_49)",
    "meaningUz": "N4 Iyeroglifi #49 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "儰語",
        "reading": "かんご (儰)",
        "meaning": "儰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_50",
    "level": "N4",
    "kanji": "允",
    "onyomi": "カン (n4_50)",
    "kunyomi": "ひと (n4_50)",
    "meaningUz": "N4 Iyeroglifi #50 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "允語",
        "reading": "かんご (允)",
        "meaning": "允 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_51",
    "level": "N4",
    "kanji": "兒",
    "onyomi": "カン (n4_51)",
    "kunyomi": "ひと (n4_51)",
    "meaningUz": "N4 Iyeroglifi #51 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "兒語",
        "reading": "かんご (兒)",
        "meaning": "兒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_52",
    "level": "N4",
    "kanji": "兣",
    "onyomi": "カン (n4_52)",
    "kunyomi": "ひと (n4_52)",
    "meaningUz": "N4 Iyeroglifi #52 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "兣語",
        "reading": "かんご (兣)",
        "meaning": "兣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_53",
    "level": "N4",
    "kanji": "兴",
    "onyomi": "カン (n4_53)",
    "kunyomi": "ひと (n4_53)",
    "meaningUz": "N4 Iyeroglifi #53 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "兴語",
        "reading": "かんご (兴)",
        "meaning": "兴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_54",
    "level": "N4",
    "kanji": "内",
    "onyomi": "カン (n4_54)",
    "kunyomi": "ひと (n4_54)",
    "meaningUz": "N4 Iyeroglifi #54 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "内語",
        "reading": "かんご (内)",
        "meaning": "内 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_55",
    "level": "N4",
    "kanji": "冖",
    "onyomi": "カン (n4_55)",
    "kunyomi": "ひと (n4_55)",
    "meaningUz": "N4 Iyeroglifi #55 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "冖語",
        "reading": "かんご (冖)",
        "meaning": "冖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_56",
    "level": "N4",
    "kanji": "冧",
    "onyomi": "カン (n4_56)",
    "kunyomi": "ひと (n4_56)",
    "meaningUz": "N4 Iyeroglifi #56 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "冧語",
        "reading": "かんご (冧)",
        "meaning": "冧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_57",
    "level": "N4",
    "kanji": "冸",
    "onyomi": "カン (n4_57)",
    "kunyomi": "ひと (n4_57)",
    "meaningUz": "N4 Iyeroglifi #57 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "冸語",
        "reading": "かんご (冸)",
        "meaning": "冸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_58",
    "level": "N4",
    "kanji": "凉",
    "onyomi": "カン (n4_58)",
    "kunyomi": "ひと (n4_58)",
    "meaningUz": "N4 Iyeroglifi #58 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "凉語",
        "reading": "かんご (凉)",
        "meaning": "凉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_59",
    "level": "N4",
    "kanji": "凚",
    "onyomi": "カン (n4_59)",
    "kunyomi": "ひと (n4_59)",
    "meaningUz": "N4 Iyeroglifi #59 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "凚語",
        "reading": "かんご (凚)",
        "meaning": "凚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_60",
    "level": "N4",
    "kanji": "凫",
    "onyomi": "カン (n4_60)",
    "kunyomi": "ひと (n4_60)",
    "meaningUz": "N4 Iyeroglifi #60 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "凫語",
        "reading": "かんご (凫)",
        "meaning": "凫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_61",
    "level": "N4",
    "kanji": "凼",
    "onyomi": "カン (n4_61)",
    "kunyomi": "ひと (n4_61)",
    "meaningUz": "N4 Iyeroglifi #61 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "凼語",
        "reading": "かんご (凼)",
        "meaning": "凼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_62",
    "level": "N4",
    "kanji": "刍",
    "onyomi": "カン (n4_62)",
    "kunyomi": "ひと (n4_62)",
    "meaningUz": "N4 Iyeroglifi #62 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "刍語",
        "reading": "かんご (刍)",
        "meaning": "刍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_63",
    "level": "N4",
    "kanji": "刞",
    "onyomi": "カン (n4_63)",
    "kunyomi": "ひと (n4_63)",
    "meaningUz": "N4 Iyeroglifi #63 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "刞語",
        "reading": "かんご (刞)",
        "meaning": "刞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_64",
    "level": "N4",
    "kanji": "刯",
    "onyomi": "カン (n4_64)",
    "kunyomi": "ひと (n4_64)",
    "meaningUz": "N4 Iyeroglifi #64 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "刯語",
        "reading": "かんご (刯)",
        "meaning": "刯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_65",
    "level": "N4",
    "kanji": "剀",
    "onyomi": "カン (n4_65)",
    "kunyomi": "ひと (n4_65)",
    "meaningUz": "N4 Iyeroglifi #65 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "剀語",
        "reading": "かんご (剀)",
        "meaning": "剀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_66",
    "level": "N4",
    "kanji": "剑",
    "onyomi": "カン (n4_66)",
    "kunyomi": "ひと (n4_66)",
    "meaningUz": "N4 Iyeroglifi #66 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "剑語",
        "reading": "かんご (剑)",
        "meaning": "剑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_67",
    "level": "N4",
    "kanji": "剢",
    "onyomi": "カン (n4_67)",
    "kunyomi": "ひと (n4_67)",
    "meaningUz": "N4 Iyeroglifi #67 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "剢語",
        "reading": "かんご (剢)",
        "meaning": "剢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_68",
    "level": "N4",
    "kanji": "剳",
    "onyomi": "カン (n4_68)",
    "kunyomi": "ひと (n4_68)",
    "meaningUz": "N4 Iyeroglifi #68 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "剳語",
        "reading": "かんご (剳)",
        "meaning": "剳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_69",
    "level": "N4",
    "kanji": "劄",
    "onyomi": "カン (n4_69)",
    "kunyomi": "ひと (n4_69)",
    "meaningUz": "N4 Iyeroglifi #69 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "劄語",
        "reading": "かんご (劄)",
        "meaning": "劄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_70",
    "level": "N4",
    "kanji": "劕",
    "onyomi": "カン (n4_70)",
    "kunyomi": "ひと (n4_70)",
    "meaningUz": "N4 Iyeroglifi #70 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "劕語",
        "reading": "かんご (劕)",
        "meaning": "劕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_71",
    "level": "N4",
    "kanji": "劦",
    "onyomi": "カン (n4_71)",
    "kunyomi": "ひと (n4_71)",
    "meaningUz": "N4 Iyeroglifi #71 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "劦語",
        "reading": "かんご (劦)",
        "meaning": "劦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_72",
    "level": "N4",
    "kanji": "劷",
    "onyomi": "カン (n4_72)",
    "kunyomi": "ひと (n4_72)",
    "meaningUz": "N4 Iyeroglifi #72 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "劷語",
        "reading": "かんご (劷)",
        "meaning": "劷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_73",
    "level": "N4",
    "kanji": "勈",
    "onyomi": "カン (n4_73)",
    "kunyomi": "ひと (n4_73)",
    "meaningUz": "N4 Iyeroglifi #73 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "勈語",
        "reading": "かんご (勈)",
        "meaning": "勈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_74",
    "level": "N4",
    "kanji": "務",
    "onyomi": "カン (n4_74)",
    "kunyomi": "ひと (n4_74)",
    "meaningUz": "N4 Iyeroglifi #74 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "務語",
        "reading": "かんご (務)",
        "meaning": "務 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_75",
    "level": "N4",
    "kanji": "勪",
    "onyomi": "カン (n4_75)",
    "kunyomi": "ひと (n4_75)",
    "meaningUz": "N4 Iyeroglifi #75 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "勪語",
        "reading": "かんご (勪)",
        "meaning": "勪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_76",
    "level": "N4",
    "kanji": "勻",
    "onyomi": "カン (n4_76)",
    "kunyomi": "ひと (n4_76)",
    "meaningUz": "N4 Iyeroglifi #76 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "勻語",
        "reading": "かんご (勻)",
        "meaning": "勻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_77",
    "level": "N4",
    "kanji": "匌",
    "onyomi": "カン (n4_77)",
    "kunyomi": "ひと (n4_77)",
    "meaningUz": "N4 Iyeroglifi #77 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "匌語",
        "reading": "かんご (匌)",
        "meaning": "匌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_78",
    "level": "N4",
    "kanji": "匝",
    "onyomi": "カン (n4_78)",
    "kunyomi": "ひと (n4_78)",
    "meaningUz": "N4 Iyeroglifi #78 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "匝語",
        "reading": "かんご (匝)",
        "meaning": "匝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_79",
    "level": "N4",
    "kanji": "匮",
    "onyomi": "カン (n4_79)",
    "kunyomi": "ひと (n4_79)",
    "meaningUz": "N4 Iyeroglifi #79 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "匮語",
        "reading": "かんご (匮)",
        "meaning": "匮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_80",
    "level": "N4",
    "kanji": "匿",
    "onyomi": "カン (n4_80)",
    "kunyomi": "ひと (n4_80)",
    "meaningUz": "N4 Iyeroglifi #80 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "匿語",
        "reading": "かんご (匿)",
        "meaning": "匿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_81",
    "level": "N4",
    "kanji": "卐",
    "onyomi": "カン (n4_81)",
    "kunyomi": "ひと (n4_81)",
    "meaningUz": "N4 Iyeroglifi #81 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "卐語",
        "reading": "かんご (卐)",
        "meaning": "卐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_82",
    "level": "N4",
    "kanji": "卡",
    "onyomi": "カン (n4_82)",
    "kunyomi": "ひと (n4_82)",
    "meaningUz": "N4 Iyeroglifi #82 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "卡語",
        "reading": "かんご (卡)",
        "meaning": "卡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_83",
    "level": "N4",
    "kanji": "卲",
    "onyomi": "カン (n4_83)",
    "kunyomi": "ひと (n4_83)",
    "meaningUz": "N4 Iyeroglifi #83 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "卲語",
        "reading": "かんご (卲)",
        "meaning": "卲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_84",
    "level": "N4",
    "kanji": "厃",
    "onyomi": "カン (n4_84)",
    "kunyomi": "ひと (n4_84)",
    "meaningUz": "N4 Iyeroglifi #84 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "厃語",
        "reading": "かんご (厃)",
        "meaning": "厃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_85",
    "level": "N4",
    "kanji": "厔",
    "onyomi": "カン (n4_85)",
    "kunyomi": "ひと (n4_85)",
    "meaningUz": "N4 Iyeroglifi #85 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "厔語",
        "reading": "かんご (厔)",
        "meaning": "厔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_86",
    "level": "N4",
    "kanji": "厥",
    "onyomi": "カン (n4_86)",
    "kunyomi": "ひと (n4_86)",
    "meaningUz": "N4 Iyeroglifi #86 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "厥語",
        "reading": "かんご (厥)",
        "meaning": "厥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_87",
    "level": "N4",
    "kanji": "厶",
    "onyomi": "カン (n4_87)",
    "kunyomi": "ひと (n4_87)",
    "meaningUz": "N4 Iyeroglifi #87 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "厶語",
        "reading": "かんご (厶)",
        "meaning": "厶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_88",
    "level": "N4",
    "kanji": "叇",
    "onyomi": "カン (n4_88)",
    "kunyomi": "ひと (n4_88)",
    "meaningUz": "N4 Iyeroglifi #88 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "叇語",
        "reading": "かんご (叇)",
        "meaning": "叇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_89",
    "level": "N4",
    "kanji": "变",
    "onyomi": "カン (n4_89)",
    "kunyomi": "ひと (n4_89)",
    "meaningUz": "N4 Iyeroglifi #89 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "变語",
        "reading": "かんご (变)",
        "meaning": "变 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_90",
    "level": "N4",
    "kanji": "叩",
    "onyomi": "カン (n4_90)",
    "kunyomi": "ひと (n4_90)",
    "meaningUz": "N4 Iyeroglifi #90 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "叩語",
        "reading": "かんご (叩)",
        "meaning": "叩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_91",
    "level": "N4",
    "kanji": "叺",
    "onyomi": "カン (n4_91)",
    "kunyomi": "ひと (n4_91)",
    "meaningUz": "N4 Iyeroglifi #91 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "叺語",
        "reading": "かんご (叺)",
        "meaning": "叺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_92",
    "level": "N4",
    "kanji": "吋",
    "onyomi": "カン (n4_92)",
    "kunyomi": "ひと (n4_92)",
    "meaningUz": "N4 Iyeroglifi #92 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "吋語",
        "reading": "かんご (吋)",
        "meaning": "吋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_93",
    "level": "N4",
    "kanji": "吜",
    "onyomi": "カン (n4_93)",
    "kunyomi": "ひと (n4_93)",
    "meaningUz": "N4 Iyeroglifi #93 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "吜語",
        "reading": "かんご (吜)",
        "meaning": "吜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_94",
    "level": "N4",
    "kanji": "吭",
    "onyomi": "カン (n4_94)",
    "kunyomi": "ひと (n4_94)",
    "meaningUz": "N4 Iyeroglifi #94 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "吭語",
        "reading": "かんご (吭)",
        "meaning": "吭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_95",
    "level": "N4",
    "kanji": "吾",
    "onyomi": "カン (n4_95)",
    "kunyomi": "ひと (n4_95)",
    "meaningUz": "N4 Iyeroglifi #95 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "吾語",
        "reading": "かんご (吾)",
        "meaning": "吾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_96",
    "level": "N4",
    "kanji": "呏",
    "onyomi": "カン (n4_96)",
    "kunyomi": "ひと (n4_96)",
    "meaningUz": "N4 Iyeroglifi #96 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "呏語",
        "reading": "かんご (呏)",
        "meaning": "呏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_97",
    "level": "N4",
    "kanji": "呠",
    "onyomi": "カン (n4_97)",
    "kunyomi": "ひと (n4_97)",
    "meaningUz": "N4 Iyeroglifi #97 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "呠語",
        "reading": "かんご (呠)",
        "meaning": "呠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_98",
    "level": "N4",
    "kanji": "呱",
    "onyomi": "カン (n4_98)",
    "kunyomi": "ひと (n4_98)",
    "meaningUz": "N4 Iyeroglifi #98 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "呱語",
        "reading": "かんご (呱)",
        "meaning": "呱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_99",
    "level": "N4",
    "kanji": "咂",
    "onyomi": "カン (n4_99)",
    "kunyomi": "ひと (n4_99)",
    "meaningUz": "N4 Iyeroglifi #99 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "咂語",
        "reading": "かんご (咂)",
        "meaning": "咂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_100",
    "level": "N4",
    "kanji": "咓",
    "onyomi": "カン (n4_100)",
    "kunyomi": "ひと (n4_100)",
    "meaningUz": "N4 Iyeroglifi #100 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "咓語",
        "reading": "かんご (咓)",
        "meaning": "咓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_101",
    "level": "N4",
    "kanji": "咤",
    "onyomi": "カン (n4_101)",
    "kunyomi": "ひと (n4_101)",
    "meaningUz": "N4 Iyeroglifi #101 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "咤語",
        "reading": "かんご (咤)",
        "meaning": "咤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_102",
    "level": "N4",
    "kanji": "咵",
    "onyomi": "カン (n4_102)",
    "kunyomi": "ひと (n4_102)",
    "meaningUz": "N4 Iyeroglifi #102 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "咵語",
        "reading": "かんご (咵)",
        "meaning": "咵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_103",
    "level": "N4",
    "kanji": "哆",
    "onyomi": "カン (n4_103)",
    "kunyomi": "ひと (n4_103)",
    "meaningUz": "N4 Iyeroglifi #103 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "哆語",
        "reading": "かんご (哆)",
        "meaning": "哆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_104",
    "level": "N4",
    "kanji": "哗",
    "onyomi": "カン (n4_104)",
    "kunyomi": "ひと (n4_104)",
    "meaningUz": "N4 Iyeroglifi #104 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "哗語",
        "reading": "かんご (哗)",
        "meaning": "哗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_105",
    "level": "N4",
    "kanji": "哨",
    "onyomi": "カン (n4_105)",
    "kunyomi": "ひと (n4_105)",
    "meaningUz": "N4 Iyeroglifi #105 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "哨語",
        "reading": "かんご (哨)",
        "meaning": "哨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_106",
    "level": "N4",
    "kanji": "哹",
    "onyomi": "カン (n4_106)",
    "kunyomi": "ひと (n4_106)",
    "meaningUz": "N4 Iyeroglifi #106 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "哹語",
        "reading": "かんご (哹)",
        "meaning": "哹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_107",
    "level": "N4",
    "kanji": "唊",
    "onyomi": "カン (n4_107)",
    "kunyomi": "ひと (n4_107)",
    "meaningUz": "N4 Iyeroglifi #107 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "唊語",
        "reading": "かんご (唊)",
        "meaning": "唊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_108",
    "level": "N4",
    "kanji": "唛",
    "onyomi": "カン (n4_108)",
    "kunyomi": "ひと (n4_108)",
    "meaningUz": "N4 Iyeroglifi #108 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "唛語",
        "reading": "かんご (唛)",
        "meaning": "唛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_109",
    "level": "N4",
    "kanji": "唬",
    "onyomi": "カン (n4_109)",
    "kunyomi": "ひと (n4_109)",
    "meaningUz": "N4 Iyeroglifi #109 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "唬語",
        "reading": "かんご (唬)",
        "meaning": "唬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_110",
    "level": "N4",
    "kanji": "唽",
    "onyomi": "カン (n4_110)",
    "kunyomi": "ひと (n4_110)",
    "meaningUz": "N4 Iyeroglifi #110 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "唽語",
        "reading": "かんご (唽)",
        "meaning": "唽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_111",
    "level": "N4",
    "kanji": "啎",
    "onyomi": "カン (n4_111)",
    "kunyomi": "ひと (n4_111)",
    "meaningUz": "N4 Iyeroglifi #111 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "啎語",
        "reading": "かんご (啎)",
        "meaning": "啎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_112",
    "level": "N4",
    "kanji": "啟",
    "onyomi": "カン (n4_112)",
    "kunyomi": "ひと (n4_112)",
    "meaningUz": "N4 Iyeroglifi #112 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "啟語",
        "reading": "かんご (啟)",
        "meaning": "啟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_113",
    "level": "N4",
    "kanji": "啰",
    "onyomi": "カン (n4_113)",
    "kunyomi": "ひと (n4_113)",
    "meaningUz": "N4 Iyeroglifi #113 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "啰語",
        "reading": "かんご (啰)",
        "meaning": "啰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_114",
    "level": "N4",
    "kanji": "喁",
    "onyomi": "カン (n4_114)",
    "kunyomi": "ひと (n4_114)",
    "meaningUz": "N4 Iyeroglifi #114 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "喁語",
        "reading": "かんご (喁)",
        "meaning": "喁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_115",
    "level": "N4",
    "kanji": "喒",
    "onyomi": "カン (n4_115)",
    "kunyomi": "ひと (n4_115)",
    "meaningUz": "N4 Iyeroglifi #115 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "喒語",
        "reading": "かんご (喒)",
        "meaning": "喒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_116",
    "level": "N4",
    "kanji": "喣",
    "onyomi": "カン (n4_116)",
    "kunyomi": "ひと (n4_116)",
    "meaningUz": "N4 Iyeroglifi #116 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "喣語",
        "reading": "かんご (喣)",
        "meaning": "喣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_117",
    "level": "N4",
    "kanji": "喴",
    "onyomi": "カン (n4_117)",
    "kunyomi": "ひと (n4_117)",
    "meaningUz": "N4 Iyeroglifi #117 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "喴語",
        "reading": "かんご (喴)",
        "meaning": "喴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_118",
    "level": "N4",
    "kanji": "嗅",
    "onyomi": "カン (n4_118)",
    "kunyomi": "ひと (n4_118)",
    "meaningUz": "N4 Iyeroglifi #118 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嗅語",
        "reading": "かんご (嗅)",
        "meaning": "嗅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_119",
    "level": "N4",
    "kanji": "嗖",
    "onyomi": "カン (n4_119)",
    "kunyomi": "ひと (n4_119)",
    "meaningUz": "N4 Iyeroglifi #119 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嗖語",
        "reading": "かんご (嗖)",
        "meaning": "嗖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_120",
    "level": "N4",
    "kanji": "嗧",
    "onyomi": "カン (n4_120)",
    "kunyomi": "ひと (n4_120)",
    "meaningUz": "N4 Iyeroglifi #120 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嗧語",
        "reading": "かんご (嗧)",
        "meaning": "嗧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_121",
    "level": "N4",
    "kanji": "嗸",
    "onyomi": "カン (n4_121)",
    "kunyomi": "ひと (n4_121)",
    "meaningUz": "N4 Iyeroglifi #121 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嗸語",
        "reading": "かんご (嗸)",
        "meaning": "嗸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_122",
    "level": "N4",
    "kanji": "嘉",
    "onyomi": "カン (n4_122)",
    "kunyomi": "ひと (n4_122)",
    "meaningUz": "N4 Iyeroglifi #122 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嘉語",
        "reading": "かんご (嘉)",
        "meaning": "嘉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_123",
    "level": "N4",
    "kanji": "嘚",
    "onyomi": "カン (n4_123)",
    "kunyomi": "ひと (n4_123)",
    "meaningUz": "N4 Iyeroglifi #123 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嘚語",
        "reading": "かんご (嘚)",
        "meaning": "嘚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_124",
    "level": "N4",
    "kanji": "嘫",
    "onyomi": "カン (n4_124)",
    "kunyomi": "ひと (n4_124)",
    "meaningUz": "N4 Iyeroglifi #124 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嘫語",
        "reading": "かんご (嘫)",
        "meaning": "嘫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_125",
    "level": "N4",
    "kanji": "嘼",
    "onyomi": "カン (n4_125)",
    "kunyomi": "ひと (n4_125)",
    "meaningUz": "N4 Iyeroglifi #125 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嘼語",
        "reading": "かんご (嘼)",
        "meaning": "嘼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_126",
    "level": "N4",
    "kanji": "噍",
    "onyomi": "カン (n4_126)",
    "kunyomi": "ひと (n4_126)",
    "meaningUz": "N4 Iyeroglifi #126 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "噍語",
        "reading": "かんご (噍)",
        "meaning": "噍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_127",
    "level": "N4",
    "kanji": "噞",
    "onyomi": "カン (n4_127)",
    "kunyomi": "ひと (n4_127)",
    "meaningUz": "N4 Iyeroglifi #127 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "噞語",
        "reading": "かんご (噞)",
        "meaning": "噞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_128",
    "level": "N4",
    "kanji": "噯",
    "onyomi": "カン (n4_128)",
    "kunyomi": "ひと (n4_128)",
    "meaningUz": "N4 Iyeroglifi #128 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "噯語",
        "reading": "かんご (噯)",
        "meaning": "噯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_129",
    "level": "N4",
    "kanji": "嚀",
    "onyomi": "カン (n4_129)",
    "kunyomi": "ひと (n4_129)",
    "meaningUz": "N4 Iyeroglifi #129 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嚀語",
        "reading": "かんご (嚀)",
        "meaning": "嚀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_130",
    "level": "N4",
    "kanji": "嚑",
    "onyomi": "カン (n4_130)",
    "kunyomi": "ひと (n4_130)",
    "meaningUz": "N4 Iyeroglifi #130 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嚑語",
        "reading": "かんご (嚑)",
        "meaning": "嚑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_131",
    "level": "N4",
    "kanji": "嚢",
    "onyomi": "カン (n4_131)",
    "kunyomi": "ひと (n4_131)",
    "meaningUz": "N4 Iyeroglifi #131 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嚢語",
        "reading": "かんご (嚢)",
        "meaning": "嚢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_132",
    "level": "N4",
    "kanji": "嚳",
    "onyomi": "カン (n4_132)",
    "kunyomi": "ひと (n4_132)",
    "meaningUz": "N4 Iyeroglifi #132 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嚳語",
        "reading": "かんご (嚳)",
        "meaning": "嚳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_133",
    "level": "N4",
    "kanji": "囄",
    "onyomi": "カン (n4_133)",
    "kunyomi": "ひと (n4_133)",
    "meaningUz": "N4 Iyeroglifi #133 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "囄語",
        "reading": "かんご (囄)",
        "meaning": "囄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_134",
    "level": "N4",
    "kanji": "囕",
    "onyomi": "カン (n4_134)",
    "kunyomi": "ひと (n4_134)",
    "meaningUz": "N4 Iyeroglifi #134 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "囕語",
        "reading": "かんご (囕)",
        "meaning": "囕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_135",
    "level": "N4",
    "kanji": "囦",
    "onyomi": "カン (n4_135)",
    "kunyomi": "ひと (n4_135)",
    "meaningUz": "N4 Iyeroglifi #135 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "囦語",
        "reading": "かんご (囦)",
        "meaning": "囦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_136",
    "level": "N4",
    "kanji": "囷",
    "onyomi": "カン (n4_136)",
    "kunyomi": "ひと (n4_136)",
    "meaningUz": "N4 Iyeroglifi #136 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "囷語",
        "reading": "かんご (囷)",
        "meaning": "囷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_137",
    "level": "N4",
    "kanji": "圈",
    "onyomi": "カン (n4_137)",
    "kunyomi": "ひと (n4_137)",
    "meaningUz": "N4 Iyeroglifi #137 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "圈語",
        "reading": "かんご (圈)",
        "meaning": "圈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_138",
    "level": "N4",
    "kanji": "圙",
    "onyomi": "カン (n4_138)",
    "kunyomi": "ひと (n4_138)",
    "meaningUz": "N4 Iyeroglifi #138 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "圙語",
        "reading": "かんご (圙)",
        "meaning": "圙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_139",
    "level": "N4",
    "kanji": "圪",
    "onyomi": "カン (n4_139)",
    "kunyomi": "ひと (n4_139)",
    "meaningUz": "N4 Iyeroglifi #139 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "圪語",
        "reading": "かんご (圪)",
        "meaning": "圪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_140",
    "level": "N4",
    "kanji": "圻",
    "onyomi": "カン (n4_140)",
    "kunyomi": "ひと (n4_140)",
    "meaningUz": "N4 Iyeroglifi #140 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "圻語",
        "reading": "かんご (圻)",
        "meaning": "圻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_141",
    "level": "N4",
    "kanji": "坌",
    "onyomi": "カン (n4_141)",
    "kunyomi": "ひと (n4_141)",
    "meaningUz": "N4 Iyeroglifi #141 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "坌語",
        "reading": "かんご (坌)",
        "meaning": "坌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_142",
    "level": "N4",
    "kanji": "坝",
    "onyomi": "カン (n4_142)",
    "kunyomi": "ひと (n4_142)",
    "meaningUz": "N4 Iyeroglifi #142 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "坝語",
        "reading": "かんご (坝)",
        "meaning": "坝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_143",
    "level": "N4",
    "kanji": "坮",
    "onyomi": "カン (n4_143)",
    "kunyomi": "ひと (n4_143)",
    "meaningUz": "N4 Iyeroglifi #143 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "坮語",
        "reading": "かんご (坮)",
        "meaning": "坮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_144",
    "level": "N4",
    "kanji": "坿",
    "onyomi": "カン (n4_144)",
    "kunyomi": "ひと (n4_144)",
    "meaningUz": "N4 Iyeroglifi #144 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "坿語",
        "reading": "かんご (坿)",
        "meaning": "坿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_145",
    "level": "N4",
    "kanji": "垐",
    "onyomi": "カン (n4_145)",
    "kunyomi": "ひと (n4_145)",
    "meaningUz": "N4 Iyeroglifi #145 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "垐語",
        "reading": "かんご (垐)",
        "meaning": "垐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_146",
    "level": "N4",
    "kanji": "垡",
    "onyomi": "カン (n4_146)",
    "kunyomi": "ひと (n4_146)",
    "meaningUz": "N4 Iyeroglifi #146 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "垡語",
        "reading": "かんご (垡)",
        "meaning": "垡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_147",
    "level": "N4",
    "kanji": "垲",
    "onyomi": "カン (n4_147)",
    "kunyomi": "ひと (n4_147)",
    "meaningUz": "N4 Iyeroglifi #147 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "垲語",
        "reading": "かんご (垲)",
        "meaning": "垲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_148",
    "level": "N4",
    "kanji": "埃",
    "onyomi": "カン (n4_148)",
    "kunyomi": "ひと (n4_148)",
    "meaningUz": "N4 Iyeroglifi #148 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "埃語",
        "reading": "かんご (埃)",
        "meaning": "埃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_149",
    "level": "N4",
    "kanji": "埔",
    "onyomi": "カン (n4_149)",
    "kunyomi": "ひと (n4_149)",
    "meaningUz": "N4 Iyeroglifi #149 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "埔語",
        "reading": "かんご (埔)",
        "meaning": "埔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_150",
    "level": "N4",
    "kanji": "埥",
    "onyomi": "カン (n4_150)",
    "kunyomi": "ひと (n4_150)",
    "meaningUz": "N4 Iyeroglifi #150 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "埥語",
        "reading": "かんご (埥)",
        "meaning": "埥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_151",
    "level": "N4",
    "kanji": "埶",
    "onyomi": "カン (n4_151)",
    "kunyomi": "ひと (n4_151)",
    "meaningUz": "N4 Iyeroglifi #151 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "埶語",
        "reading": "かんご (埶)",
        "meaning": "埶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_152",
    "level": "N4",
    "kanji": "堇",
    "onyomi": "カン (n4_152)",
    "kunyomi": "ひと (n4_152)",
    "meaningUz": "N4 Iyeroglifi #152 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "堇語",
        "reading": "かんご (堇)",
        "meaning": "堇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_153",
    "level": "N4",
    "kanji": "堘",
    "onyomi": "カン (n4_153)",
    "kunyomi": "ひと (n4_153)",
    "meaningUz": "N4 Iyeroglifi #153 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "堘語",
        "reading": "かんご (堘)",
        "meaning": "堘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_154",
    "level": "N4",
    "kanji": "堩",
    "onyomi": "カン (n4_154)",
    "kunyomi": "ひと (n4_154)",
    "meaningUz": "N4 Iyeroglifi #154 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "堩語",
        "reading": "かんご (堩)",
        "meaning": "堩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_155",
    "level": "N4",
    "kanji": "堺",
    "onyomi": "カン (n4_155)",
    "kunyomi": "ひと (n4_155)",
    "meaningUz": "N4 Iyeroglifi #155 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "堺語",
        "reading": "かんご (堺)",
        "meaning": "堺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_156",
    "level": "N4",
    "kanji": "塋",
    "onyomi": "カン (n4_156)",
    "kunyomi": "ひと (n4_156)",
    "meaningUz": "N4 Iyeroglifi #156 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "塋語",
        "reading": "かんご (塋)",
        "meaning": "塋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_157",
    "level": "N4",
    "kanji": "塜",
    "onyomi": "カン (n4_157)",
    "kunyomi": "ひと (n4_157)",
    "meaningUz": "N4 Iyeroglifi #157 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "塜語",
        "reading": "かんご (塜)",
        "meaning": "塜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_158",
    "level": "N4",
    "kanji": "塭",
    "onyomi": "カン (n4_158)",
    "kunyomi": "ひと (n4_158)",
    "meaningUz": "N4 Iyeroglifi #158 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "塭語",
        "reading": "かんご (塭)",
        "meaning": "塭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_159",
    "level": "N4",
    "kanji": "塾",
    "onyomi": "カン (n4_159)",
    "kunyomi": "ひと (n4_159)",
    "meaningUz": "N4 Iyeroglifi #159 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "塾語",
        "reading": "かんご (塾)",
        "meaning": "塾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_160",
    "level": "N4",
    "kanji": "墏",
    "onyomi": "カン (n4_160)",
    "kunyomi": "ひと (n4_160)",
    "meaningUz": "N4 Iyeroglifi #160 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "墏語",
        "reading": "かんご (墏)",
        "meaning": "墏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_161",
    "level": "N4",
    "kanji": "墠",
    "onyomi": "カン (n4_161)",
    "kunyomi": "ひと (n4_161)",
    "meaningUz": "N4 Iyeroglifi #161 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "墠語",
        "reading": "かんご (墠)",
        "meaning": "墠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_162",
    "level": "N4",
    "kanji": "墱",
    "onyomi": "カン (n4_162)",
    "kunyomi": "ひと (n4_162)",
    "meaningUz": "N4 Iyeroglifi #162 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "墱語",
        "reading": "かんご (墱)",
        "meaning": "墱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_163",
    "level": "N4",
    "kanji": "壂",
    "onyomi": "カン (n4_163)",
    "kunyomi": "ひと (n4_163)",
    "meaningUz": "N4 Iyeroglifi #163 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "壂語",
        "reading": "かんご (壂)",
        "meaning": "壂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_164",
    "level": "N4",
    "kanji": "壓",
    "onyomi": "カン (n4_164)",
    "kunyomi": "ひと (n4_164)",
    "meaningUz": "N4 Iyeroglifi #164 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "壓語",
        "reading": "かんご (壓)",
        "meaning": "壓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_165",
    "level": "N4",
    "kanji": "壤",
    "onyomi": "カン (n4_165)",
    "kunyomi": "ひと (n4_165)",
    "meaningUz": "N4 Iyeroglifi #165 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "壤語",
        "reading": "かんご (壤)",
        "meaning": "壤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_166",
    "level": "N4",
    "kanji": "壵",
    "onyomi": "カン (n4_166)",
    "kunyomi": "ひと (n4_166)",
    "meaningUz": "N4 Iyeroglifi #166 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "壵語",
        "reading": "かんご (壵)",
        "meaning": "壵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_167",
    "level": "N4",
    "kanji": "夆",
    "onyomi": "カン (n4_167)",
    "kunyomi": "ひと (n4_167)",
    "meaningUz": "N4 Iyeroglifi #167 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "夆語",
        "reading": "かんご (夆)",
        "meaning": "夆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_168",
    "level": "N4",
    "kanji": "夗",
    "onyomi": "カン (n4_168)",
    "kunyomi": "ひと (n4_168)",
    "meaningUz": "N4 Iyeroglifi #168 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "夗語",
        "reading": "かんご (夗)",
        "meaning": "夗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_169",
    "level": "N4",
    "kanji": "夨",
    "onyomi": "カン (n4_169)",
    "kunyomi": "ひと (n4_169)",
    "meaningUz": "N4 Iyeroglifi #169 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "夨語",
        "reading": "かんご (夨)",
        "meaning": "夨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_170",
    "level": "N4",
    "kanji": "夹",
    "onyomi": "カン (n4_170)",
    "kunyomi": "ひと (n4_170)",
    "meaningUz": "N4 Iyeroglifi #170 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "夹語",
        "reading": "かんご (夹)",
        "meaning": "夹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_171",
    "level": "N4",
    "kanji": "奊",
    "onyomi": "カン (n4_171)",
    "kunyomi": "ひと (n4_171)",
    "meaningUz": "N4 Iyeroglifi #171 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "奊語",
        "reading": "かんご (奊)",
        "meaning": "奊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_172",
    "level": "N4",
    "kanji": "奛",
    "onyomi": "カン (n4_172)",
    "kunyomi": "ひと (n4_172)",
    "meaningUz": "N4 Iyeroglifi #172 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "奛語",
        "reading": "かんご (奛)",
        "meaning": "奛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_173",
    "level": "N4",
    "kanji": "奬",
    "onyomi": "カン (n4_173)",
    "kunyomi": "ひと (n4_173)",
    "meaningUz": "N4 Iyeroglifi #173 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "奬語",
        "reading": "かんご (奬)",
        "meaning": "奬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_174",
    "level": "N4",
    "kanji": "好",
    "onyomi": "カン (n4_174)",
    "kunyomi": "ひと (n4_174)",
    "meaningUz": "N4 Iyeroglifi #174 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "好語",
        "reading": "かんご (好)",
        "meaning": "好 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_175",
    "level": "N4",
    "kanji": "妎",
    "onyomi": "カン (n4_175)",
    "kunyomi": "ひと (n4_175)",
    "meaningUz": "N4 Iyeroglifi #175 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "妎語",
        "reading": "かんご (妎)",
        "meaning": "妎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_176",
    "level": "N4",
    "kanji": "妟",
    "onyomi": "カン (n4_176)",
    "kunyomi": "ひと (n4_176)",
    "meaningUz": "N4 Iyeroglifi #176 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "妟語",
        "reading": "かんご (妟)",
        "meaning": "妟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_177",
    "level": "N4",
    "kanji": "妰",
    "onyomi": "カン (n4_177)",
    "kunyomi": "ひと (n4_177)",
    "meaningUz": "N4 Iyeroglifi #177 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "妰語",
        "reading": "かんご (妰)",
        "meaning": "妰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_178",
    "level": "N4",
    "kanji": "姁",
    "onyomi": "カン (n4_178)",
    "kunyomi": "ひと (n4_178)",
    "meaningUz": "N4 Iyeroglifi #178 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "姁語",
        "reading": "かんご (姁)",
        "meaning": "姁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_179",
    "level": "N4",
    "kanji": "姒",
    "onyomi": "カン (n4_179)",
    "kunyomi": "ひと (n4_179)",
    "meaningUz": "N4 Iyeroglifi #179 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "姒語",
        "reading": "かんご (姒)",
        "meaning": "姒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_180",
    "level": "N4",
    "kanji": "姣",
    "onyomi": "カン (n4_180)",
    "kunyomi": "ひと (n4_180)",
    "meaningUz": "N4 Iyeroglifi #180 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "姣語",
        "reading": "かんご (姣)",
        "meaning": "姣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n4_181",
    "level": "N4",
    "kanji": "姴",
    "onyomi": "カン (n4_181)",
    "kunyomi": "ひと (n4_181)",
    "meaningUz": "N4 Iyeroglifi #181 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "姴語",
        "reading": "かんご (姴)",
        "meaning": "姴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_1",
    "level": "N3",
    "kanji": "夢",
    "onyomi": "カン (n3_1)",
    "kunyomi": "ひと (n3_1)",
    "meaningUz": "N3 Iyeroglifi #1 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "夢語",
        "reading": "かんご (夢)",
        "meaning": "夢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_2",
    "level": "N3",
    "kanji": "愛",
    "onyomi": "カン (n3_2)",
    "kunyomi": "ひと (n3_2)",
    "meaningUz": "N3 Iyeroglifi #2 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "愛語",
        "reading": "かんご (愛)",
        "meaning": "愛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_3",
    "level": "N3",
    "kanji": "情",
    "onyomi": "カン (n3_3)",
    "kunyomi": "ひと (n3_3)",
    "meaningUz": "N3 Iyeroglifi #3 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "情語",
        "reading": "かんご (情)",
        "meaning": "情 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_4",
    "level": "N3",
    "kanji": "感",
    "onyomi": "カン (n3_4)",
    "kunyomi": "ひと (n3_4)",
    "meaningUz": "N3 Iyeroglifi #4 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "感語",
        "reading": "かんご (感)",
        "meaning": "感 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_5",
    "level": "N3",
    "kanji": "相",
    "onyomi": "カン (n3_5)",
    "kunyomi": "ひと (n3_5)",
    "meaningUz": "N3 Iyeroglifi #5 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "相語",
        "reading": "かんご (相)",
        "meaning": "相 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_6",
    "level": "N3",
    "kanji": "談",
    "onyomi": "カン (n3_6)",
    "kunyomi": "ひと (n3_6)",
    "meaningUz": "N3 Iyeroglifi #6 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "談語",
        "reading": "かんご (談)",
        "meaning": "談 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_7",
    "level": "N3",
    "kanji": "経",
    "onyomi": "カン (n3_7)",
    "kunyomi": "ひと (n3_7)",
    "meaningUz": "N3 Iyeroglifi #7 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "経語",
        "reading": "かんご (経)",
        "meaning": "経 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_8",
    "level": "N3",
    "kanji": "済",
    "onyomi": "カン (n3_8)",
    "kunyomi": "ひと (n3_8)",
    "meaningUz": "N3 Iyeroglifi #8 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "済語",
        "reading": "かんご (済)",
        "meaning": "済 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_9",
    "level": "N3",
    "kanji": "政",
    "onyomi": "カン (n3_9)",
    "kunyomi": "ひと (n3_9)",
    "meaningUz": "N3 Iyeroglifi #9 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "政語",
        "reading": "かんご (政)",
        "meaning": "政 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_10",
    "level": "N3",
    "kanji": "治",
    "onyomi": "カン (n3_10)",
    "kunyomi": "ひと (n3_10)",
    "meaningUz": "N3 Iyeroglifi #10 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "治語",
        "reading": "かんご (治)",
        "meaning": "治 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_11",
    "level": "N3",
    "kanji": "理",
    "onyomi": "カン (n3_11)",
    "kunyomi": "ひと (n3_11)",
    "meaningUz": "N3 Iyeroglifi #11 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "理語",
        "reading": "かんご (理)",
        "meaning": "理 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_12",
    "level": "N3",
    "kanji": "解",
    "onyomi": "カン (n3_12)",
    "kunyomi": "ひと (n3_12)",
    "meaningUz": "N3 Iyeroglifi #12 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "解語",
        "reading": "かんご (解)",
        "meaning": "解 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_13",
    "level": "N3",
    "kanji": "変",
    "onyomi": "カン (n3_13)",
    "kunyomi": "ひと (n3_13)",
    "meaningUz": "N3 Iyeroglifi #13 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "変語",
        "reading": "かんご (変)",
        "meaning": "変 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_14",
    "level": "N3",
    "kanji": "化",
    "onyomi": "カン (n3_14)",
    "kunyomi": "ひと (n3_14)",
    "meaningUz": "N3 Iyeroglifi #14 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "化語",
        "reading": "かんご (化)",
        "meaning": "化 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_15",
    "level": "N3",
    "kanji": "選",
    "onyomi": "カン (n3_15)",
    "kunyomi": "ひと (n3_15)",
    "meaningUz": "N3 Iyeroglifi #15 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "選語",
        "reading": "かんご (選)",
        "meaning": "選 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_16",
    "level": "N3",
    "kanji": "択",
    "onyomi": "カン (n3_16)",
    "kunyomi": "ひと (n3_16)",
    "meaningUz": "N3 Iyeroglifi #16 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "択語",
        "reading": "かんご (択)",
        "meaning": "択 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_17",
    "level": "N3",
    "kanji": "必",
    "onyomi": "カン (n3_17)",
    "kunyomi": "ひと (n3_17)",
    "meaningUz": "N3 Iyeroglifi #17 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "必語",
        "reading": "かんご (必)",
        "meaning": "必 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_18",
    "level": "N3",
    "kanji": "要",
    "onyomi": "カン (n3_18)",
    "kunyomi": "ひと (n3_18)",
    "meaningUz": "N3 Iyeroglifi #18 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "要語",
        "reading": "かんご (要)",
        "meaning": "要 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_19",
    "level": "N3",
    "kanji": "法",
    "onyomi": "カン (n3_19)",
    "kunyomi": "ひと (n3_19)",
    "meaningUz": "N3 Iyeroglifi #19 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "法語",
        "reading": "かんご (法)",
        "meaning": "法 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_20",
    "level": "N3",
    "kanji": "律",
    "onyomi": "カン (n3_20)",
    "kunyomi": "ひと (n3_20)",
    "meaningUz": "N3 Iyeroglifi #20 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "律語",
        "reading": "かんご (律)",
        "meaning": "律 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_21",
    "level": "N3",
    "kanji": "佔",
    "onyomi": "カン (n3_21)",
    "kunyomi": "ひと (n3_21)",
    "meaningUz": "N3 Iyeroglifi #21 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "佔語",
        "reading": "かんご (佔)",
        "meaning": "佔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_22",
    "level": "N3",
    "kanji": "佥",
    "onyomi": "カン (n3_22)",
    "kunyomi": "ひと (n3_22)",
    "meaningUz": "N3 Iyeroglifi #22 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "佥語",
        "reading": "かんご (佥)",
        "meaning": "佥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_23",
    "level": "N3",
    "kanji": "佶",
    "onyomi": "カン (n3_23)",
    "kunyomi": "ひと (n3_23)",
    "meaningUz": "N3 Iyeroglifi #23 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "佶語",
        "reading": "かんご (佶)",
        "meaning": "佶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_24",
    "level": "N3",
    "kanji": "侇",
    "onyomi": "カン (n3_24)",
    "kunyomi": "ひと (n3_24)",
    "meaningUz": "N3 Iyeroglifi #24 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "侇語",
        "reading": "かんご (侇)",
        "meaning": "侇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_25",
    "level": "N3",
    "kanji": "侘",
    "onyomi": "カン (n3_25)",
    "kunyomi": "ひと (n3_25)",
    "meaningUz": "N3 Iyeroglifi #25 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "侘語",
        "reading": "かんご (侘)",
        "meaning": "侘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_26",
    "level": "N3",
    "kanji": "侩",
    "onyomi": "カン (n3_26)",
    "kunyomi": "ひと (n3_26)",
    "meaningUz": "N3 Iyeroglifi #26 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "侩語",
        "reading": "かんご (侩)",
        "meaning": "侩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_27",
    "level": "N3",
    "kanji": "侺",
    "onyomi": "カン (n3_27)",
    "kunyomi": "ひと (n3_27)",
    "meaningUz": "N3 Iyeroglifi #27 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "侺語",
        "reading": "かんご (侺)",
        "meaning": "侺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_28",
    "level": "N3",
    "kanji": "俋",
    "onyomi": "カン (n3_28)",
    "kunyomi": "ひと (n3_28)",
    "meaningUz": "N3 Iyeroglifi #28 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "俋語",
        "reading": "かんご (俋)",
        "meaning": "俋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_29",
    "level": "N3",
    "kanji": "俜",
    "onyomi": "カン (n3_29)",
    "kunyomi": "ひと (n3_29)",
    "meaningUz": "N3 Iyeroglifi #29 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "俜語",
        "reading": "かんご (俜)",
        "meaning": "俜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_30",
    "level": "N3",
    "kanji": "俭",
    "onyomi": "カン (n3_30)",
    "kunyomi": "ひと (n3_30)",
    "meaningUz": "N3 Iyeroglifi #30 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "俭語",
        "reading": "かんご (俭)",
        "meaning": "俭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_31",
    "level": "N3",
    "kanji": "俾",
    "onyomi": "カン (n3_31)",
    "kunyomi": "ひと (n3_31)",
    "meaningUz": "N3 Iyeroglifi #31 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "俾語",
        "reading": "かんご (俾)",
        "meaning": "俾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_32",
    "level": "N3",
    "kanji": "倏",
    "onyomi": "カン (n3_32)",
    "kunyomi": "ひと (n3_32)",
    "meaningUz": "N3 Iyeroglifi #32 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "倏語",
        "reading": "かんご (倏)",
        "meaning": "倏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_33",
    "level": "N3",
    "kanji": "倠",
    "onyomi": "カン (n3_33)",
    "kunyomi": "ひと (n3_33)",
    "meaningUz": "N3 Iyeroglifi #33 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "倠語",
        "reading": "かんご (倠)",
        "meaning": "倠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_34",
    "level": "N3",
    "kanji": "倱",
    "onyomi": "カン (n3_34)",
    "kunyomi": "ひと (n3_34)",
    "meaningUz": "N3 Iyeroglifi #34 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "倱語",
        "reading": "かんご (倱)",
        "meaning": "倱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_35",
    "level": "N3",
    "kanji": "偂",
    "onyomi": "カン (n3_35)",
    "kunyomi": "ひと (n3_35)",
    "meaningUz": "N3 Iyeroglifi #35 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "偂語",
        "reading": "かんご (偂)",
        "meaning": "偂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_36",
    "level": "N3",
    "kanji": "偓",
    "onyomi": "カン (n3_36)",
    "kunyomi": "ひと (n3_36)",
    "meaningUz": "N3 Iyeroglifi #36 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "偓語",
        "reading": "かんご (偓)",
        "meaning": "偓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_37",
    "level": "N3",
    "kanji": "偤",
    "onyomi": "カン (n3_37)",
    "kunyomi": "ひと (n3_37)",
    "meaningUz": "N3 Iyeroglifi #37 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "偤語",
        "reading": "かんご (偤)",
        "meaning": "偤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_38",
    "level": "N3",
    "kanji": "偵",
    "onyomi": "カン (n3_38)",
    "kunyomi": "ひと (n3_38)",
    "meaningUz": "N3 Iyeroglifi #38 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "偵語",
        "reading": "かんご (偵)",
        "meaning": "偵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_39",
    "level": "N3",
    "kanji": "傆",
    "onyomi": "カン (n3_39)",
    "kunyomi": "ひと (n3_39)",
    "meaningUz": "N3 Iyeroglifi #39 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "傆語",
        "reading": "かんご (傆)",
        "meaning": "傆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_40",
    "level": "N3",
    "kanji": "傗",
    "onyomi": "カン (n3_40)",
    "kunyomi": "ひと (n3_40)",
    "meaningUz": "N3 Iyeroglifi #40 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "傗語",
        "reading": "かんご (傗)",
        "meaning": "傗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_41",
    "level": "N3",
    "kanji": "储",
    "onyomi": "カン (n3_41)",
    "kunyomi": "ひと (n3_41)",
    "meaningUz": "N3 Iyeroglifi #41 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "储語",
        "reading": "かんご (储)",
        "meaning": "储 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_42",
    "level": "N3",
    "kanji": "傹",
    "onyomi": "カン (n3_42)",
    "kunyomi": "ひと (n3_42)",
    "meaningUz": "N3 Iyeroglifi #42 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "傹語",
        "reading": "かんご (傹)",
        "meaning": "傹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_43",
    "level": "N3",
    "kanji": "僊",
    "onyomi": "カン (n3_43)",
    "kunyomi": "ひと (n3_43)",
    "meaningUz": "N3 Iyeroglifi #43 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "僊語",
        "reading": "かんご (僊)",
        "meaning": "僊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_44",
    "level": "N3",
    "kanji": "僛",
    "onyomi": "カン (n3_44)",
    "kunyomi": "ひと (n3_44)",
    "meaningUz": "N3 Iyeroglifi #44 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "僛語",
        "reading": "かんご (僛)",
        "meaning": "僛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_45",
    "level": "N3",
    "kanji": "僬",
    "onyomi": "カン (n3_45)",
    "kunyomi": "ひと (n3_45)",
    "meaningUz": "N3 Iyeroglifi #45 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "僬語",
        "reading": "かんご (僬)",
        "meaning": "僬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_46",
    "level": "N3",
    "kanji": "僽",
    "onyomi": "カン (n3_46)",
    "kunyomi": "ひと (n3_46)",
    "meaningUz": "N3 Iyeroglifi #46 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "僽語",
        "reading": "かんご (僽)",
        "meaning": "僽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_47",
    "level": "N3",
    "kanji": "儎",
    "onyomi": "カン (n3_47)",
    "kunyomi": "ひと (n3_47)",
    "meaningUz": "N3 Iyeroglifi #47 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "儎語",
        "reading": "かんご (儎)",
        "meaning": "儎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_48",
    "level": "N3",
    "kanji": "償",
    "onyomi": "カン (n3_48)",
    "kunyomi": "ひと (n3_48)",
    "meaningUz": "N3 Iyeroglifi #48 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "償語",
        "reading": "かんご (償)",
        "meaning": "償 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_49",
    "level": "N3",
    "kanji": "儰",
    "onyomi": "カン (n3_49)",
    "kunyomi": "ひと (n3_49)",
    "meaningUz": "N3 Iyeroglifi #49 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "儰語",
        "reading": "かんご (儰)",
        "meaning": "儰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_50",
    "level": "N3",
    "kanji": "允",
    "onyomi": "カン (n3_50)",
    "kunyomi": "ひと (n3_50)",
    "meaningUz": "N3 Iyeroglifi #50 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "允語",
        "reading": "かんご (允)",
        "meaning": "允 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_51",
    "level": "N3",
    "kanji": "兒",
    "onyomi": "カン (n3_51)",
    "kunyomi": "ひと (n3_51)",
    "meaningUz": "N3 Iyeroglifi #51 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "兒語",
        "reading": "かんご (兒)",
        "meaning": "兒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_52",
    "level": "N3",
    "kanji": "兣",
    "onyomi": "カン (n3_52)",
    "kunyomi": "ひと (n3_52)",
    "meaningUz": "N3 Iyeroglifi #52 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "兣語",
        "reading": "かんご (兣)",
        "meaning": "兣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_53",
    "level": "N3",
    "kanji": "兴",
    "onyomi": "カン (n3_53)",
    "kunyomi": "ひと (n3_53)",
    "meaningUz": "N3 Iyeroglifi #53 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "兴語",
        "reading": "かんご (兴)",
        "meaning": "兴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_54",
    "level": "N3",
    "kanji": "内",
    "onyomi": "カン (n3_54)",
    "kunyomi": "ひと (n3_54)",
    "meaningUz": "N3 Iyeroglifi #54 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "内語",
        "reading": "かんご (内)",
        "meaning": "内 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_55",
    "level": "N3",
    "kanji": "冖",
    "onyomi": "カン (n3_55)",
    "kunyomi": "ひと (n3_55)",
    "meaningUz": "N3 Iyeroglifi #55 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "冖語",
        "reading": "かんご (冖)",
        "meaning": "冖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_56",
    "level": "N3",
    "kanji": "冧",
    "onyomi": "カン (n3_56)",
    "kunyomi": "ひと (n3_56)",
    "meaningUz": "N3 Iyeroglifi #56 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "冧語",
        "reading": "かんご (冧)",
        "meaning": "冧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_57",
    "level": "N3",
    "kanji": "冸",
    "onyomi": "カン (n3_57)",
    "kunyomi": "ひと (n3_57)",
    "meaningUz": "N3 Iyeroglifi #57 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "冸語",
        "reading": "かんご (冸)",
        "meaning": "冸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_58",
    "level": "N3",
    "kanji": "凉",
    "onyomi": "カン (n3_58)",
    "kunyomi": "ひと (n3_58)",
    "meaningUz": "N3 Iyeroglifi #58 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "凉語",
        "reading": "かんご (凉)",
        "meaning": "凉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_59",
    "level": "N3",
    "kanji": "凚",
    "onyomi": "カン (n3_59)",
    "kunyomi": "ひと (n3_59)",
    "meaningUz": "N3 Iyeroglifi #59 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "凚語",
        "reading": "かんご (凚)",
        "meaning": "凚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_60",
    "level": "N3",
    "kanji": "凫",
    "onyomi": "カン (n3_60)",
    "kunyomi": "ひと (n3_60)",
    "meaningUz": "N3 Iyeroglifi #60 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "凫語",
        "reading": "かんご (凫)",
        "meaning": "凫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_61",
    "level": "N3",
    "kanji": "凼",
    "onyomi": "カン (n3_61)",
    "kunyomi": "ひと (n3_61)",
    "meaningUz": "N3 Iyeroglifi #61 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "凼語",
        "reading": "かんご (凼)",
        "meaning": "凼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_62",
    "level": "N3",
    "kanji": "刍",
    "onyomi": "カン (n3_62)",
    "kunyomi": "ひと (n3_62)",
    "meaningUz": "N3 Iyeroglifi #62 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "刍語",
        "reading": "かんご (刍)",
        "meaning": "刍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_63",
    "level": "N3",
    "kanji": "刞",
    "onyomi": "カン (n3_63)",
    "kunyomi": "ひと (n3_63)",
    "meaningUz": "N3 Iyeroglifi #63 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "刞語",
        "reading": "かんご (刞)",
        "meaning": "刞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_64",
    "level": "N3",
    "kanji": "刯",
    "onyomi": "カン (n3_64)",
    "kunyomi": "ひと (n3_64)",
    "meaningUz": "N3 Iyeroglifi #64 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "刯語",
        "reading": "かんご (刯)",
        "meaning": "刯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_65",
    "level": "N3",
    "kanji": "剀",
    "onyomi": "カン (n3_65)",
    "kunyomi": "ひと (n3_65)",
    "meaningUz": "N3 Iyeroglifi #65 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "剀語",
        "reading": "かんご (剀)",
        "meaning": "剀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_66",
    "level": "N3",
    "kanji": "剑",
    "onyomi": "カン (n3_66)",
    "kunyomi": "ひと (n3_66)",
    "meaningUz": "N3 Iyeroglifi #66 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "剑語",
        "reading": "かんご (剑)",
        "meaning": "剑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_67",
    "level": "N3",
    "kanji": "剢",
    "onyomi": "カン (n3_67)",
    "kunyomi": "ひと (n3_67)",
    "meaningUz": "N3 Iyeroglifi #67 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "剢語",
        "reading": "かんご (剢)",
        "meaning": "剢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_68",
    "level": "N3",
    "kanji": "剳",
    "onyomi": "カン (n3_68)",
    "kunyomi": "ひと (n3_68)",
    "meaningUz": "N3 Iyeroglifi #68 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "剳語",
        "reading": "かんご (剳)",
        "meaning": "剳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_69",
    "level": "N3",
    "kanji": "劄",
    "onyomi": "カン (n3_69)",
    "kunyomi": "ひと (n3_69)",
    "meaningUz": "N3 Iyeroglifi #69 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "劄語",
        "reading": "かんご (劄)",
        "meaning": "劄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_70",
    "level": "N3",
    "kanji": "劕",
    "onyomi": "カン (n3_70)",
    "kunyomi": "ひと (n3_70)",
    "meaningUz": "N3 Iyeroglifi #70 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "劕語",
        "reading": "かんご (劕)",
        "meaning": "劕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_71",
    "level": "N3",
    "kanji": "劦",
    "onyomi": "カン (n3_71)",
    "kunyomi": "ひと (n3_71)",
    "meaningUz": "N3 Iyeroglifi #71 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "劦語",
        "reading": "かんご (劦)",
        "meaning": "劦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_72",
    "level": "N3",
    "kanji": "劷",
    "onyomi": "カン (n3_72)",
    "kunyomi": "ひと (n3_72)",
    "meaningUz": "N3 Iyeroglifi #72 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "劷語",
        "reading": "かんご (劷)",
        "meaning": "劷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_73",
    "level": "N3",
    "kanji": "勈",
    "onyomi": "カン (n3_73)",
    "kunyomi": "ひと (n3_73)",
    "meaningUz": "N3 Iyeroglifi #73 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "勈語",
        "reading": "かんご (勈)",
        "meaning": "勈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_74",
    "level": "N3",
    "kanji": "務",
    "onyomi": "カン (n3_74)",
    "kunyomi": "ひと (n3_74)",
    "meaningUz": "N3 Iyeroglifi #74 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "務語",
        "reading": "かんご (務)",
        "meaning": "務 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_75",
    "level": "N3",
    "kanji": "勪",
    "onyomi": "カン (n3_75)",
    "kunyomi": "ひと (n3_75)",
    "meaningUz": "N3 Iyeroglifi #75 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "勪語",
        "reading": "かんご (勪)",
        "meaning": "勪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_76",
    "level": "N3",
    "kanji": "勻",
    "onyomi": "カン (n3_76)",
    "kunyomi": "ひと (n3_76)",
    "meaningUz": "N3 Iyeroglifi #76 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "勻語",
        "reading": "かんご (勻)",
        "meaning": "勻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_77",
    "level": "N3",
    "kanji": "匌",
    "onyomi": "カン (n3_77)",
    "kunyomi": "ひと (n3_77)",
    "meaningUz": "N3 Iyeroglifi #77 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "匌語",
        "reading": "かんご (匌)",
        "meaning": "匌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_78",
    "level": "N3",
    "kanji": "匝",
    "onyomi": "カン (n3_78)",
    "kunyomi": "ひと (n3_78)",
    "meaningUz": "N3 Iyeroglifi #78 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "匝語",
        "reading": "かんご (匝)",
        "meaning": "匝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_79",
    "level": "N3",
    "kanji": "匮",
    "onyomi": "カン (n3_79)",
    "kunyomi": "ひと (n3_79)",
    "meaningUz": "N3 Iyeroglifi #79 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "匮語",
        "reading": "かんご (匮)",
        "meaning": "匮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_80",
    "level": "N3",
    "kanji": "匿",
    "onyomi": "カン (n3_80)",
    "kunyomi": "ひと (n3_80)",
    "meaningUz": "N3 Iyeroglifi #80 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "匿語",
        "reading": "かんご (匿)",
        "meaning": "匿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_81",
    "level": "N3",
    "kanji": "卐",
    "onyomi": "カン (n3_81)",
    "kunyomi": "ひと (n3_81)",
    "meaningUz": "N3 Iyeroglifi #81 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "卐語",
        "reading": "かんご (卐)",
        "meaning": "卐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_82",
    "level": "N3",
    "kanji": "卡",
    "onyomi": "カン (n3_82)",
    "kunyomi": "ひと (n3_82)",
    "meaningUz": "N3 Iyeroglifi #82 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "卡語",
        "reading": "かんご (卡)",
        "meaning": "卡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_83",
    "level": "N3",
    "kanji": "卲",
    "onyomi": "カン (n3_83)",
    "kunyomi": "ひと (n3_83)",
    "meaningUz": "N3 Iyeroglifi #83 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "卲語",
        "reading": "かんご (卲)",
        "meaning": "卲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_84",
    "level": "N3",
    "kanji": "厃",
    "onyomi": "カン (n3_84)",
    "kunyomi": "ひと (n3_84)",
    "meaningUz": "N3 Iyeroglifi #84 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "厃語",
        "reading": "かんご (厃)",
        "meaning": "厃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_85",
    "level": "N3",
    "kanji": "厔",
    "onyomi": "カン (n3_85)",
    "kunyomi": "ひと (n3_85)",
    "meaningUz": "N3 Iyeroglifi #85 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "厔語",
        "reading": "かんご (厔)",
        "meaning": "厔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_86",
    "level": "N3",
    "kanji": "厥",
    "onyomi": "カン (n3_86)",
    "kunyomi": "ひと (n3_86)",
    "meaningUz": "N3 Iyeroglifi #86 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "厥語",
        "reading": "かんご (厥)",
        "meaning": "厥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_87",
    "level": "N3",
    "kanji": "厶",
    "onyomi": "カン (n3_87)",
    "kunyomi": "ひと (n3_87)",
    "meaningUz": "N3 Iyeroglifi #87 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "厶語",
        "reading": "かんご (厶)",
        "meaning": "厶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_88",
    "level": "N3",
    "kanji": "叇",
    "onyomi": "カン (n3_88)",
    "kunyomi": "ひと (n3_88)",
    "meaningUz": "N3 Iyeroglifi #88 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "叇語",
        "reading": "かんご (叇)",
        "meaning": "叇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_89",
    "level": "N3",
    "kanji": "变",
    "onyomi": "カン (n3_89)",
    "kunyomi": "ひと (n3_89)",
    "meaningUz": "N3 Iyeroglifi #89 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "变語",
        "reading": "かんご (变)",
        "meaning": "变 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_90",
    "level": "N3",
    "kanji": "叩",
    "onyomi": "カン (n3_90)",
    "kunyomi": "ひと (n3_90)",
    "meaningUz": "N3 Iyeroglifi #90 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "叩語",
        "reading": "かんご (叩)",
        "meaning": "叩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_91",
    "level": "N3",
    "kanji": "叺",
    "onyomi": "カン (n3_91)",
    "kunyomi": "ひと (n3_91)",
    "meaningUz": "N3 Iyeroglifi #91 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "叺語",
        "reading": "かんご (叺)",
        "meaning": "叺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_92",
    "level": "N3",
    "kanji": "吋",
    "onyomi": "カン (n3_92)",
    "kunyomi": "ひと (n3_92)",
    "meaningUz": "N3 Iyeroglifi #92 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "吋語",
        "reading": "かんご (吋)",
        "meaning": "吋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_93",
    "level": "N3",
    "kanji": "吜",
    "onyomi": "カン (n3_93)",
    "kunyomi": "ひと (n3_93)",
    "meaningUz": "N3 Iyeroglifi #93 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "吜語",
        "reading": "かんご (吜)",
        "meaning": "吜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_94",
    "level": "N3",
    "kanji": "吭",
    "onyomi": "カン (n3_94)",
    "kunyomi": "ひと (n3_94)",
    "meaningUz": "N3 Iyeroglifi #94 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "吭語",
        "reading": "かんご (吭)",
        "meaning": "吭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_95",
    "level": "N3",
    "kanji": "吾",
    "onyomi": "カン (n3_95)",
    "kunyomi": "ひと (n3_95)",
    "meaningUz": "N3 Iyeroglifi #95 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "吾語",
        "reading": "かんご (吾)",
        "meaning": "吾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_96",
    "level": "N3",
    "kanji": "呏",
    "onyomi": "カン (n3_96)",
    "kunyomi": "ひと (n3_96)",
    "meaningUz": "N3 Iyeroglifi #96 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "呏語",
        "reading": "かんご (呏)",
        "meaning": "呏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_97",
    "level": "N3",
    "kanji": "呠",
    "onyomi": "カン (n3_97)",
    "kunyomi": "ひと (n3_97)",
    "meaningUz": "N3 Iyeroglifi #97 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "呠語",
        "reading": "かんご (呠)",
        "meaning": "呠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_98",
    "level": "N3",
    "kanji": "呱",
    "onyomi": "カン (n3_98)",
    "kunyomi": "ひと (n3_98)",
    "meaningUz": "N3 Iyeroglifi #98 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "呱語",
        "reading": "かんご (呱)",
        "meaning": "呱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_99",
    "level": "N3",
    "kanji": "咂",
    "onyomi": "カン (n3_99)",
    "kunyomi": "ひと (n3_99)",
    "meaningUz": "N3 Iyeroglifi #99 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "咂語",
        "reading": "かんご (咂)",
        "meaning": "咂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_100",
    "level": "N3",
    "kanji": "咓",
    "onyomi": "カン (n3_100)",
    "kunyomi": "ひと (n3_100)",
    "meaningUz": "N3 Iyeroglifi #100 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "咓語",
        "reading": "かんご (咓)",
        "meaning": "咓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_101",
    "level": "N3",
    "kanji": "咤",
    "onyomi": "カン (n3_101)",
    "kunyomi": "ひと (n3_101)",
    "meaningUz": "N3 Iyeroglifi #101 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "咤語",
        "reading": "かんご (咤)",
        "meaning": "咤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_102",
    "level": "N3",
    "kanji": "咵",
    "onyomi": "カン (n3_102)",
    "kunyomi": "ひと (n3_102)",
    "meaningUz": "N3 Iyeroglifi #102 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "咵語",
        "reading": "かんご (咵)",
        "meaning": "咵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_103",
    "level": "N3",
    "kanji": "哆",
    "onyomi": "カン (n3_103)",
    "kunyomi": "ひと (n3_103)",
    "meaningUz": "N3 Iyeroglifi #103 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "哆語",
        "reading": "かんご (哆)",
        "meaning": "哆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_104",
    "level": "N3",
    "kanji": "哗",
    "onyomi": "カン (n3_104)",
    "kunyomi": "ひと (n3_104)",
    "meaningUz": "N3 Iyeroglifi #104 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "哗語",
        "reading": "かんご (哗)",
        "meaning": "哗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_105",
    "level": "N3",
    "kanji": "哨",
    "onyomi": "カン (n3_105)",
    "kunyomi": "ひと (n3_105)",
    "meaningUz": "N3 Iyeroglifi #105 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "哨語",
        "reading": "かんご (哨)",
        "meaning": "哨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_106",
    "level": "N3",
    "kanji": "哹",
    "onyomi": "カン (n3_106)",
    "kunyomi": "ひと (n3_106)",
    "meaningUz": "N3 Iyeroglifi #106 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "哹語",
        "reading": "かんご (哹)",
        "meaning": "哹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_107",
    "level": "N3",
    "kanji": "唊",
    "onyomi": "カン (n3_107)",
    "kunyomi": "ひと (n3_107)",
    "meaningUz": "N3 Iyeroglifi #107 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "唊語",
        "reading": "かんご (唊)",
        "meaning": "唊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_108",
    "level": "N3",
    "kanji": "唛",
    "onyomi": "カン (n3_108)",
    "kunyomi": "ひと (n3_108)",
    "meaningUz": "N3 Iyeroglifi #108 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "唛語",
        "reading": "かんご (唛)",
        "meaning": "唛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_109",
    "level": "N3",
    "kanji": "唬",
    "onyomi": "カン (n3_109)",
    "kunyomi": "ひと (n3_109)",
    "meaningUz": "N3 Iyeroglifi #109 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "唬語",
        "reading": "かんご (唬)",
        "meaning": "唬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_110",
    "level": "N3",
    "kanji": "唽",
    "onyomi": "カン (n3_110)",
    "kunyomi": "ひと (n3_110)",
    "meaningUz": "N3 Iyeroglifi #110 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "唽語",
        "reading": "かんご (唽)",
        "meaning": "唽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_111",
    "level": "N3",
    "kanji": "啎",
    "onyomi": "カン (n3_111)",
    "kunyomi": "ひと (n3_111)",
    "meaningUz": "N3 Iyeroglifi #111 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "啎語",
        "reading": "かんご (啎)",
        "meaning": "啎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_112",
    "level": "N3",
    "kanji": "啟",
    "onyomi": "カン (n3_112)",
    "kunyomi": "ひと (n3_112)",
    "meaningUz": "N3 Iyeroglifi #112 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "啟語",
        "reading": "かんご (啟)",
        "meaning": "啟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_113",
    "level": "N3",
    "kanji": "啰",
    "onyomi": "カン (n3_113)",
    "kunyomi": "ひと (n3_113)",
    "meaningUz": "N3 Iyeroglifi #113 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "啰語",
        "reading": "かんご (啰)",
        "meaning": "啰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_114",
    "level": "N3",
    "kanji": "喁",
    "onyomi": "カン (n3_114)",
    "kunyomi": "ひと (n3_114)",
    "meaningUz": "N3 Iyeroglifi #114 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "喁語",
        "reading": "かんご (喁)",
        "meaning": "喁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_115",
    "level": "N3",
    "kanji": "喒",
    "onyomi": "カン (n3_115)",
    "kunyomi": "ひと (n3_115)",
    "meaningUz": "N3 Iyeroglifi #115 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "喒語",
        "reading": "かんご (喒)",
        "meaning": "喒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_116",
    "level": "N3",
    "kanji": "喣",
    "onyomi": "カン (n3_116)",
    "kunyomi": "ひと (n3_116)",
    "meaningUz": "N3 Iyeroglifi #116 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "喣語",
        "reading": "かんご (喣)",
        "meaning": "喣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_117",
    "level": "N3",
    "kanji": "喴",
    "onyomi": "カン (n3_117)",
    "kunyomi": "ひと (n3_117)",
    "meaningUz": "N3 Iyeroglifi #117 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "喴語",
        "reading": "かんご (喴)",
        "meaning": "喴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_118",
    "level": "N3",
    "kanji": "嗅",
    "onyomi": "カン (n3_118)",
    "kunyomi": "ひと (n3_118)",
    "meaningUz": "N3 Iyeroglifi #118 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嗅語",
        "reading": "かんご (嗅)",
        "meaning": "嗅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_119",
    "level": "N3",
    "kanji": "嗖",
    "onyomi": "カン (n3_119)",
    "kunyomi": "ひと (n3_119)",
    "meaningUz": "N3 Iyeroglifi #119 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嗖語",
        "reading": "かんご (嗖)",
        "meaning": "嗖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_120",
    "level": "N3",
    "kanji": "嗧",
    "onyomi": "カン (n3_120)",
    "kunyomi": "ひと (n3_120)",
    "meaningUz": "N3 Iyeroglifi #120 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嗧語",
        "reading": "かんご (嗧)",
        "meaning": "嗧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_121",
    "level": "N3",
    "kanji": "嗸",
    "onyomi": "カン (n3_121)",
    "kunyomi": "ひと (n3_121)",
    "meaningUz": "N3 Iyeroglifi #121 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嗸語",
        "reading": "かんご (嗸)",
        "meaning": "嗸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_122",
    "level": "N3",
    "kanji": "嘉",
    "onyomi": "カン (n3_122)",
    "kunyomi": "ひと (n3_122)",
    "meaningUz": "N3 Iyeroglifi #122 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嘉語",
        "reading": "かんご (嘉)",
        "meaning": "嘉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_123",
    "level": "N3",
    "kanji": "嘚",
    "onyomi": "カン (n3_123)",
    "kunyomi": "ひと (n3_123)",
    "meaningUz": "N3 Iyeroglifi #123 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嘚語",
        "reading": "かんご (嘚)",
        "meaning": "嘚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_124",
    "level": "N3",
    "kanji": "嘫",
    "onyomi": "カン (n3_124)",
    "kunyomi": "ひと (n3_124)",
    "meaningUz": "N3 Iyeroglifi #124 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嘫語",
        "reading": "かんご (嘫)",
        "meaning": "嘫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_125",
    "level": "N3",
    "kanji": "嘼",
    "onyomi": "カン (n3_125)",
    "kunyomi": "ひと (n3_125)",
    "meaningUz": "N3 Iyeroglifi #125 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嘼語",
        "reading": "かんご (嘼)",
        "meaning": "嘼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_126",
    "level": "N3",
    "kanji": "噍",
    "onyomi": "カン (n3_126)",
    "kunyomi": "ひと (n3_126)",
    "meaningUz": "N3 Iyeroglifi #126 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "噍語",
        "reading": "かんご (噍)",
        "meaning": "噍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_127",
    "level": "N3",
    "kanji": "噞",
    "onyomi": "カン (n3_127)",
    "kunyomi": "ひと (n3_127)",
    "meaningUz": "N3 Iyeroglifi #127 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "噞語",
        "reading": "かんご (噞)",
        "meaning": "噞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_128",
    "level": "N3",
    "kanji": "噯",
    "onyomi": "カン (n3_128)",
    "kunyomi": "ひと (n3_128)",
    "meaningUz": "N3 Iyeroglifi #128 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "噯語",
        "reading": "かんご (噯)",
        "meaning": "噯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_129",
    "level": "N3",
    "kanji": "嚀",
    "onyomi": "カン (n3_129)",
    "kunyomi": "ひと (n3_129)",
    "meaningUz": "N3 Iyeroglifi #129 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嚀語",
        "reading": "かんご (嚀)",
        "meaning": "嚀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_130",
    "level": "N3",
    "kanji": "嚑",
    "onyomi": "カン (n3_130)",
    "kunyomi": "ひと (n3_130)",
    "meaningUz": "N3 Iyeroglifi #130 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嚑語",
        "reading": "かんご (嚑)",
        "meaning": "嚑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_131",
    "level": "N3",
    "kanji": "嚢",
    "onyomi": "カン (n3_131)",
    "kunyomi": "ひと (n3_131)",
    "meaningUz": "N3 Iyeroglifi #131 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嚢語",
        "reading": "かんご (嚢)",
        "meaning": "嚢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_132",
    "level": "N3",
    "kanji": "嚳",
    "onyomi": "カン (n3_132)",
    "kunyomi": "ひと (n3_132)",
    "meaningUz": "N3 Iyeroglifi #132 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嚳語",
        "reading": "かんご (嚳)",
        "meaning": "嚳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_133",
    "level": "N3",
    "kanji": "囄",
    "onyomi": "カン (n3_133)",
    "kunyomi": "ひと (n3_133)",
    "meaningUz": "N3 Iyeroglifi #133 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "囄語",
        "reading": "かんご (囄)",
        "meaning": "囄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_134",
    "level": "N3",
    "kanji": "囕",
    "onyomi": "カン (n3_134)",
    "kunyomi": "ひと (n3_134)",
    "meaningUz": "N3 Iyeroglifi #134 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "囕語",
        "reading": "かんご (囕)",
        "meaning": "囕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_135",
    "level": "N3",
    "kanji": "囦",
    "onyomi": "カン (n3_135)",
    "kunyomi": "ひと (n3_135)",
    "meaningUz": "N3 Iyeroglifi #135 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "囦語",
        "reading": "かんご (囦)",
        "meaning": "囦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_136",
    "level": "N3",
    "kanji": "囷",
    "onyomi": "カン (n3_136)",
    "kunyomi": "ひと (n3_136)",
    "meaningUz": "N3 Iyeroglifi #136 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "囷語",
        "reading": "かんご (囷)",
        "meaning": "囷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_137",
    "level": "N3",
    "kanji": "圈",
    "onyomi": "カン (n3_137)",
    "kunyomi": "ひと (n3_137)",
    "meaningUz": "N3 Iyeroglifi #137 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "圈語",
        "reading": "かんご (圈)",
        "meaning": "圈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_138",
    "level": "N3",
    "kanji": "圙",
    "onyomi": "カン (n3_138)",
    "kunyomi": "ひと (n3_138)",
    "meaningUz": "N3 Iyeroglifi #138 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "圙語",
        "reading": "かんご (圙)",
        "meaning": "圙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_139",
    "level": "N3",
    "kanji": "圪",
    "onyomi": "カン (n3_139)",
    "kunyomi": "ひと (n3_139)",
    "meaningUz": "N3 Iyeroglifi #139 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "圪語",
        "reading": "かんご (圪)",
        "meaning": "圪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_140",
    "level": "N3",
    "kanji": "圻",
    "onyomi": "カン (n3_140)",
    "kunyomi": "ひと (n3_140)",
    "meaningUz": "N3 Iyeroglifi #140 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "圻語",
        "reading": "かんご (圻)",
        "meaning": "圻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_141",
    "level": "N3",
    "kanji": "坌",
    "onyomi": "カン (n3_141)",
    "kunyomi": "ひと (n3_141)",
    "meaningUz": "N3 Iyeroglifi #141 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "坌語",
        "reading": "かんご (坌)",
        "meaning": "坌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_142",
    "level": "N3",
    "kanji": "坝",
    "onyomi": "カン (n3_142)",
    "kunyomi": "ひと (n3_142)",
    "meaningUz": "N3 Iyeroglifi #142 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "坝語",
        "reading": "かんご (坝)",
        "meaning": "坝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_143",
    "level": "N3",
    "kanji": "坮",
    "onyomi": "カン (n3_143)",
    "kunyomi": "ひと (n3_143)",
    "meaningUz": "N3 Iyeroglifi #143 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "坮語",
        "reading": "かんご (坮)",
        "meaning": "坮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_144",
    "level": "N3",
    "kanji": "坿",
    "onyomi": "カン (n3_144)",
    "kunyomi": "ひと (n3_144)",
    "meaningUz": "N3 Iyeroglifi #144 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "坿語",
        "reading": "かんご (坿)",
        "meaning": "坿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_145",
    "level": "N3",
    "kanji": "垐",
    "onyomi": "カン (n3_145)",
    "kunyomi": "ひと (n3_145)",
    "meaningUz": "N3 Iyeroglifi #145 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "垐語",
        "reading": "かんご (垐)",
        "meaning": "垐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_146",
    "level": "N3",
    "kanji": "垡",
    "onyomi": "カン (n3_146)",
    "kunyomi": "ひと (n3_146)",
    "meaningUz": "N3 Iyeroglifi #146 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "垡語",
        "reading": "かんご (垡)",
        "meaning": "垡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_147",
    "level": "N3",
    "kanji": "垲",
    "onyomi": "カン (n3_147)",
    "kunyomi": "ひと (n3_147)",
    "meaningUz": "N3 Iyeroglifi #147 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "垲語",
        "reading": "かんご (垲)",
        "meaning": "垲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_148",
    "level": "N3",
    "kanji": "埃",
    "onyomi": "カン (n3_148)",
    "kunyomi": "ひと (n3_148)",
    "meaningUz": "N3 Iyeroglifi #148 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "埃語",
        "reading": "かんご (埃)",
        "meaning": "埃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_149",
    "level": "N3",
    "kanji": "埔",
    "onyomi": "カン (n3_149)",
    "kunyomi": "ひと (n3_149)",
    "meaningUz": "N3 Iyeroglifi #149 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "埔語",
        "reading": "かんご (埔)",
        "meaning": "埔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_150",
    "level": "N3",
    "kanji": "埥",
    "onyomi": "カン (n3_150)",
    "kunyomi": "ひと (n3_150)",
    "meaningUz": "N3 Iyeroglifi #150 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "埥語",
        "reading": "かんご (埥)",
        "meaning": "埥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_151",
    "level": "N3",
    "kanji": "埶",
    "onyomi": "カン (n3_151)",
    "kunyomi": "ひと (n3_151)",
    "meaningUz": "N3 Iyeroglifi #151 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "埶語",
        "reading": "かんご (埶)",
        "meaning": "埶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_152",
    "level": "N3",
    "kanji": "堇",
    "onyomi": "カン (n3_152)",
    "kunyomi": "ひと (n3_152)",
    "meaningUz": "N3 Iyeroglifi #152 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "堇語",
        "reading": "かんご (堇)",
        "meaning": "堇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_153",
    "level": "N3",
    "kanji": "堘",
    "onyomi": "カン (n3_153)",
    "kunyomi": "ひと (n3_153)",
    "meaningUz": "N3 Iyeroglifi #153 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "堘語",
        "reading": "かんご (堘)",
        "meaning": "堘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_154",
    "level": "N3",
    "kanji": "堩",
    "onyomi": "カン (n3_154)",
    "kunyomi": "ひと (n3_154)",
    "meaningUz": "N3 Iyeroglifi #154 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "堩語",
        "reading": "かんご (堩)",
        "meaning": "堩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_155",
    "level": "N3",
    "kanji": "堺",
    "onyomi": "カン (n3_155)",
    "kunyomi": "ひと (n3_155)",
    "meaningUz": "N3 Iyeroglifi #155 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "堺語",
        "reading": "かんご (堺)",
        "meaning": "堺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_156",
    "level": "N3",
    "kanji": "塋",
    "onyomi": "カン (n3_156)",
    "kunyomi": "ひと (n3_156)",
    "meaningUz": "N3 Iyeroglifi #156 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "塋語",
        "reading": "かんご (塋)",
        "meaning": "塋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_157",
    "level": "N3",
    "kanji": "塜",
    "onyomi": "カン (n3_157)",
    "kunyomi": "ひと (n3_157)",
    "meaningUz": "N3 Iyeroglifi #157 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "塜語",
        "reading": "かんご (塜)",
        "meaning": "塜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_158",
    "level": "N3",
    "kanji": "塭",
    "onyomi": "カン (n3_158)",
    "kunyomi": "ひと (n3_158)",
    "meaningUz": "N3 Iyeroglifi #158 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "塭語",
        "reading": "かんご (塭)",
        "meaning": "塭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_159",
    "level": "N3",
    "kanji": "塾",
    "onyomi": "カン (n3_159)",
    "kunyomi": "ひと (n3_159)",
    "meaningUz": "N3 Iyeroglifi #159 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "塾語",
        "reading": "かんご (塾)",
        "meaning": "塾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_160",
    "level": "N3",
    "kanji": "墏",
    "onyomi": "カン (n3_160)",
    "kunyomi": "ひと (n3_160)",
    "meaningUz": "N3 Iyeroglifi #160 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "墏語",
        "reading": "かんご (墏)",
        "meaning": "墏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_161",
    "level": "N3",
    "kanji": "墠",
    "onyomi": "カン (n3_161)",
    "kunyomi": "ひと (n3_161)",
    "meaningUz": "N3 Iyeroglifi #161 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "墠語",
        "reading": "かんご (墠)",
        "meaning": "墠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_162",
    "level": "N3",
    "kanji": "墱",
    "onyomi": "カン (n3_162)",
    "kunyomi": "ひと (n3_162)",
    "meaningUz": "N3 Iyeroglifi #162 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "墱語",
        "reading": "かんご (墱)",
        "meaning": "墱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_163",
    "level": "N3",
    "kanji": "壂",
    "onyomi": "カン (n3_163)",
    "kunyomi": "ひと (n3_163)",
    "meaningUz": "N3 Iyeroglifi #163 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "壂語",
        "reading": "かんご (壂)",
        "meaning": "壂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_164",
    "level": "N3",
    "kanji": "壓",
    "onyomi": "カン (n3_164)",
    "kunyomi": "ひと (n3_164)",
    "meaningUz": "N3 Iyeroglifi #164 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "壓語",
        "reading": "かんご (壓)",
        "meaning": "壓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_165",
    "level": "N3",
    "kanji": "壤",
    "onyomi": "カン (n3_165)",
    "kunyomi": "ひと (n3_165)",
    "meaningUz": "N3 Iyeroglifi #165 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "壤語",
        "reading": "かんご (壤)",
        "meaning": "壤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_166",
    "level": "N3",
    "kanji": "壵",
    "onyomi": "カン (n3_166)",
    "kunyomi": "ひと (n3_166)",
    "meaningUz": "N3 Iyeroglifi #166 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "壵語",
        "reading": "かんご (壵)",
        "meaning": "壵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_167",
    "level": "N3",
    "kanji": "夆",
    "onyomi": "カン (n3_167)",
    "kunyomi": "ひと (n3_167)",
    "meaningUz": "N3 Iyeroglifi #167 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "夆語",
        "reading": "かんご (夆)",
        "meaning": "夆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_168",
    "level": "N3",
    "kanji": "夗",
    "onyomi": "カン (n3_168)",
    "kunyomi": "ひと (n3_168)",
    "meaningUz": "N3 Iyeroglifi #168 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "夗語",
        "reading": "かんご (夗)",
        "meaning": "夗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_169",
    "level": "N3",
    "kanji": "夨",
    "onyomi": "カン (n3_169)",
    "kunyomi": "ひと (n3_169)",
    "meaningUz": "N3 Iyeroglifi #169 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "夨語",
        "reading": "かんご (夨)",
        "meaning": "夨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_170",
    "level": "N3",
    "kanji": "夹",
    "onyomi": "カン (n3_170)",
    "kunyomi": "ひと (n3_170)",
    "meaningUz": "N3 Iyeroglifi #170 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "夹語",
        "reading": "かんご (夹)",
        "meaning": "夹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_171",
    "level": "N3",
    "kanji": "奊",
    "onyomi": "カン (n3_171)",
    "kunyomi": "ひと (n3_171)",
    "meaningUz": "N3 Iyeroglifi #171 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "奊語",
        "reading": "かんご (奊)",
        "meaning": "奊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_172",
    "level": "N3",
    "kanji": "奛",
    "onyomi": "カン (n3_172)",
    "kunyomi": "ひと (n3_172)",
    "meaningUz": "N3 Iyeroglifi #172 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "奛語",
        "reading": "かんご (奛)",
        "meaning": "奛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_173",
    "level": "N3",
    "kanji": "奬",
    "onyomi": "カン (n3_173)",
    "kunyomi": "ひと (n3_173)",
    "meaningUz": "N3 Iyeroglifi #173 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "奬語",
        "reading": "かんご (奬)",
        "meaning": "奬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_174",
    "level": "N3",
    "kanji": "好",
    "onyomi": "カン (n3_174)",
    "kunyomi": "ひと (n3_174)",
    "meaningUz": "N3 Iyeroglifi #174 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "好語",
        "reading": "かんご (好)",
        "meaning": "好 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_175",
    "level": "N3",
    "kanji": "妎",
    "onyomi": "カン (n3_175)",
    "kunyomi": "ひと (n3_175)",
    "meaningUz": "N3 Iyeroglifi #175 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "妎語",
        "reading": "かんご (妎)",
        "meaning": "妎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_176",
    "level": "N3",
    "kanji": "妟",
    "onyomi": "カン (n3_176)",
    "kunyomi": "ひと (n3_176)",
    "meaningUz": "N3 Iyeroglifi #176 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "妟語",
        "reading": "かんご (妟)",
        "meaning": "妟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_177",
    "level": "N3",
    "kanji": "妰",
    "onyomi": "カン (n3_177)",
    "kunyomi": "ひと (n3_177)",
    "meaningUz": "N3 Iyeroglifi #177 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "妰語",
        "reading": "かんご (妰)",
        "meaning": "妰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_178",
    "level": "N3",
    "kanji": "姁",
    "onyomi": "カン (n3_178)",
    "kunyomi": "ひと (n3_178)",
    "meaningUz": "N3 Iyeroglifi #178 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "姁語",
        "reading": "かんご (姁)",
        "meaning": "姁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_179",
    "level": "N3",
    "kanji": "姒",
    "onyomi": "カン (n3_179)",
    "kunyomi": "ひと (n3_179)",
    "meaningUz": "N3 Iyeroglifi #179 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "姒語",
        "reading": "かんご (姒)",
        "meaning": "姒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_180",
    "level": "N3",
    "kanji": "姣",
    "onyomi": "カン (n3_180)",
    "kunyomi": "ひと (n3_180)",
    "meaningUz": "N3 Iyeroglifi #180 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "姣語",
        "reading": "かんご (姣)",
        "meaning": "姣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_181",
    "level": "N3",
    "kanji": "姴",
    "onyomi": "カン (n3_181)",
    "kunyomi": "ひと (n3_181)",
    "meaningUz": "N3 Iyeroglifi #181 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "姴語",
        "reading": "かんご (姴)",
        "meaning": "姴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_182",
    "level": "N3",
    "kanji": "娅",
    "onyomi": "カン (n3_182)",
    "kunyomi": "ひと (n3_182)",
    "meaningUz": "N3 Iyeroglifi #182 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "娅語",
        "reading": "かんご (娅)",
        "meaning": "娅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_183",
    "level": "N3",
    "kanji": "娖",
    "onyomi": "カン (n3_183)",
    "kunyomi": "ひと (n3_183)",
    "meaningUz": "N3 Iyeroglifi #183 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "娖語",
        "reading": "かんご (娖)",
        "meaning": "娖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_184",
    "level": "N3",
    "kanji": "娧",
    "onyomi": "カン (n3_184)",
    "kunyomi": "ひと (n3_184)",
    "meaningUz": "N3 Iyeroglifi #184 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "娧語",
        "reading": "かんご (娧)",
        "meaning": "娧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_185",
    "level": "N3",
    "kanji": "娸",
    "onyomi": "カン (n3_185)",
    "kunyomi": "ひと (n3_185)",
    "meaningUz": "N3 Iyeroglifi #185 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "娸語",
        "reading": "かんご (娸)",
        "meaning": "娸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_186",
    "level": "N3",
    "kanji": "婉",
    "onyomi": "カン (n3_186)",
    "kunyomi": "ひと (n3_186)",
    "meaningUz": "N3 Iyeroglifi #186 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "婉語",
        "reading": "かんご (婉)",
        "meaning": "婉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_187",
    "level": "N3",
    "kanji": "婚",
    "onyomi": "カン (n3_187)",
    "kunyomi": "ひと (n3_187)",
    "meaningUz": "N3 Iyeroglifi #187 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "婚語",
        "reading": "かんご (婚)",
        "meaning": "婚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_188",
    "level": "N3",
    "kanji": "婫",
    "onyomi": "カン (n3_188)",
    "kunyomi": "ひと (n3_188)",
    "meaningUz": "N3 Iyeroglifi #188 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "婫語",
        "reading": "かんご (婫)",
        "meaning": "婫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_189",
    "level": "N3",
    "kanji": "婼",
    "onyomi": "カン (n3_189)",
    "kunyomi": "ひと (n3_189)",
    "meaningUz": "N3 Iyeroglifi #189 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "婼語",
        "reading": "かんご (婼)",
        "meaning": "婼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_190",
    "level": "N3",
    "kanji": "媍",
    "onyomi": "カン (n3_190)",
    "kunyomi": "ひと (n3_190)",
    "meaningUz": "N3 Iyeroglifi #190 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "媍語",
        "reading": "かんご (媍)",
        "meaning": "媍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_191",
    "level": "N3",
    "kanji": "媞",
    "onyomi": "カン (n3_191)",
    "kunyomi": "ひと (n3_191)",
    "meaningUz": "N3 Iyeroglifi #191 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "媞語",
        "reading": "かんご (媞)",
        "meaning": "媞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_192",
    "level": "N3",
    "kanji": "媯",
    "onyomi": "カン (n3_192)",
    "kunyomi": "ひと (n3_192)",
    "meaningUz": "N3 Iyeroglifi #192 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "媯語",
        "reading": "かんご (媯)",
        "meaning": "媯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_193",
    "level": "N3",
    "kanji": "嫀",
    "onyomi": "カン (n3_193)",
    "kunyomi": "ひと (n3_193)",
    "meaningUz": "N3 Iyeroglifi #193 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嫀語",
        "reading": "かんご (嫀)",
        "meaning": "嫀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_194",
    "level": "N3",
    "kanji": "嫑",
    "onyomi": "カン (n3_194)",
    "kunyomi": "ひと (n3_194)",
    "meaningUz": "N3 Iyeroglifi #194 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嫑語",
        "reading": "かんご (嫑)",
        "meaning": "嫑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_195",
    "level": "N3",
    "kanji": "嫢",
    "onyomi": "カン (n3_195)",
    "kunyomi": "ひと (n3_195)",
    "meaningUz": "N3 Iyeroglifi #195 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嫢語",
        "reading": "かんご (嫢)",
        "meaning": "嫢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_196",
    "level": "N3",
    "kanji": "嫳",
    "onyomi": "カン (n3_196)",
    "kunyomi": "ひと (n3_196)",
    "meaningUz": "N3 Iyeroglifi #196 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嫳語",
        "reading": "かんご (嫳)",
        "meaning": "嫳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_197",
    "level": "N3",
    "kanji": "嬄",
    "onyomi": "カン (n3_197)",
    "kunyomi": "ひと (n3_197)",
    "meaningUz": "N3 Iyeroglifi #197 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嬄語",
        "reading": "かんご (嬄)",
        "meaning": "嬄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_198",
    "level": "N3",
    "kanji": "嬕",
    "onyomi": "カン (n3_198)",
    "kunyomi": "ひと (n3_198)",
    "meaningUz": "N3 Iyeroglifi #198 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嬕語",
        "reading": "かんご (嬕)",
        "meaning": "嬕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_199",
    "level": "N3",
    "kanji": "嬦",
    "onyomi": "カン (n3_199)",
    "kunyomi": "ひと (n3_199)",
    "meaningUz": "N3 Iyeroglifi #199 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嬦語",
        "reading": "かんご (嬦)",
        "meaning": "嬦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_200",
    "level": "N3",
    "kanji": "嬷",
    "onyomi": "カン (n3_200)",
    "kunyomi": "ひと (n3_200)",
    "meaningUz": "N3 Iyeroglifi #200 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嬷語",
        "reading": "かんご (嬷)",
        "meaning": "嬷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_201",
    "level": "N3",
    "kanji": "孈",
    "onyomi": "カン (n3_201)",
    "kunyomi": "ひと (n3_201)",
    "meaningUz": "N3 Iyeroglifi #201 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "孈語",
        "reading": "かんご (孈)",
        "meaning": "孈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_202",
    "level": "N3",
    "kanji": "孙",
    "onyomi": "カン (n3_202)",
    "kunyomi": "ひと (n3_202)",
    "meaningUz": "N3 Iyeroglifi #202 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "孙語",
        "reading": "かんご (孙)",
        "meaning": "孙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_203",
    "level": "N3",
    "kanji": "孪",
    "onyomi": "カン (n3_203)",
    "kunyomi": "ひと (n3_203)",
    "meaningUz": "N3 Iyeroglifi #203 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "孪語",
        "reading": "かんご (孪)",
        "meaning": "孪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_204",
    "level": "N3",
    "kanji": "孻",
    "onyomi": "カン (n3_204)",
    "kunyomi": "ひと (n3_204)",
    "meaningUz": "N3 Iyeroglifi #204 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "孻語",
        "reading": "かんご (孻)",
        "meaning": "孻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_205",
    "level": "N3",
    "kanji": "完",
    "onyomi": "カン (n3_205)",
    "kunyomi": "ひと (n3_205)",
    "meaningUz": "N3 Iyeroglifi #205 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "完語",
        "reading": "かんご (完)",
        "meaning": "完 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_206",
    "level": "N3",
    "kanji": "宝",
    "onyomi": "カン (n3_206)",
    "kunyomi": "ひと (n3_206)",
    "meaningUz": "N3 Iyeroglifi #206 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "宝語",
        "reading": "かんご (宝)",
        "meaning": "宝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_207",
    "level": "N3",
    "kanji": "宮",
    "onyomi": "カン (n3_207)",
    "kunyomi": "ひと (n3_207)",
    "meaningUz": "N3 Iyeroglifi #207 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "宮語",
        "reading": "かんご (宮)",
        "meaning": "宮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_208",
    "level": "N3",
    "kanji": "宿",
    "onyomi": "カン (n3_208)",
    "kunyomi": "ひと (n3_208)",
    "meaningUz": "N3 Iyeroglifi #208 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "宿語",
        "reading": "かんご (宿)",
        "meaning": "宿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_209",
    "level": "N3",
    "kanji": "寐",
    "onyomi": "カン (n3_209)",
    "kunyomi": "ひと (n3_209)",
    "meaningUz": "N3 Iyeroglifi #209 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "寐語",
        "reading": "かんご (寐)",
        "meaning": "寐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_210",
    "level": "N3",
    "kanji": "寡",
    "onyomi": "カン (n3_210)",
    "kunyomi": "ひと (n3_210)",
    "meaningUz": "N3 Iyeroglifi #210 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "寡語",
        "reading": "かんご (寡)",
        "meaning": "寡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_211",
    "level": "N3",
    "kanji": "寲",
    "onyomi": "カン (n3_211)",
    "kunyomi": "ひと (n3_211)",
    "meaningUz": "N3 Iyeroglifi #211 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "寲語",
        "reading": "かんご (寲)",
        "meaning": "寲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_212",
    "level": "N3",
    "kanji": "尃",
    "onyomi": "カン (n3_212)",
    "kunyomi": "ひと (n3_212)",
    "meaningUz": "N3 Iyeroglifi #212 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "尃語",
        "reading": "かんご (尃)",
        "meaning": "尃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_213",
    "level": "N3",
    "kanji": "尔",
    "onyomi": "カン (n3_213)",
    "kunyomi": "ひと (n3_213)",
    "meaningUz": "N3 Iyeroglifi #213 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "尔語",
        "reading": "かんご (尔)",
        "meaning": "尔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_214",
    "level": "N3",
    "kanji": "尥",
    "onyomi": "カン (n3_214)",
    "kunyomi": "ひと (n3_214)",
    "meaningUz": "N3 Iyeroglifi #214 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "尥語",
        "reading": "かんご (尥)",
        "meaning": "尥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_215",
    "level": "N3",
    "kanji": "尶",
    "onyomi": "カン (n3_215)",
    "kunyomi": "ひと (n3_215)",
    "meaningUz": "N3 Iyeroglifi #215 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "尶語",
        "reading": "かんご (尶)",
        "meaning": "尶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_216",
    "level": "N3",
    "kanji": "屇",
    "onyomi": "カン (n3_216)",
    "kunyomi": "ひと (n3_216)",
    "meaningUz": "N3 Iyeroglifi #216 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "屇語",
        "reading": "かんご (屇)",
        "meaning": "屇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_217",
    "level": "N3",
    "kanji": "屘",
    "onyomi": "カン (n3_217)",
    "kunyomi": "ひと (n3_217)",
    "meaningUz": "N3 Iyeroglifi #217 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "屘語",
        "reading": "かんご (屘)",
        "meaning": "屘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_218",
    "level": "N3",
    "kanji": "屩",
    "onyomi": "カン (n3_218)",
    "kunyomi": "ひと (n3_218)",
    "meaningUz": "N3 Iyeroglifi #218 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "屩語",
        "reading": "かんご (屩)",
        "meaning": "屩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_219",
    "level": "N3",
    "kanji": "屺",
    "onyomi": "カン (n3_219)",
    "kunyomi": "ひと (n3_219)",
    "meaningUz": "N3 Iyeroglifi #219 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "屺語",
        "reading": "かんご (屺)",
        "meaning": "屺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_220",
    "level": "N3",
    "kanji": "岋",
    "onyomi": "カン (n3_220)",
    "kunyomi": "ひと (n3_220)",
    "meaningUz": "N3 Iyeroglifi #220 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "岋語",
        "reading": "かんご (岋)",
        "meaning": "岋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_221",
    "level": "N3",
    "kanji": "岜",
    "onyomi": "カン (n3_221)",
    "kunyomi": "ひと (n3_221)",
    "meaningUz": "N3 Iyeroglifi #221 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "岜語",
        "reading": "かんご (岜)",
        "meaning": "岜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_222",
    "level": "N3",
    "kanji": "岭",
    "onyomi": "カン (n3_222)",
    "kunyomi": "ひと (n3_222)",
    "meaningUz": "N3 Iyeroglifi #222 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "岭語",
        "reading": "かんご (岭)",
        "meaning": "岭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_223",
    "level": "N3",
    "kanji": "岾",
    "onyomi": "カン (n3_223)",
    "kunyomi": "ひと (n3_223)",
    "meaningUz": "N3 Iyeroglifi #223 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "岾語",
        "reading": "かんご (岾)",
        "meaning": "岾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_224",
    "level": "N3",
    "kanji": "峏",
    "onyomi": "カン (n3_224)",
    "kunyomi": "ひと (n3_224)",
    "meaningUz": "N3 Iyeroglifi #224 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "峏語",
        "reading": "かんご (峏)",
        "meaning": "峏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_225",
    "level": "N3",
    "kanji": "峠",
    "onyomi": "カン (n3_225)",
    "kunyomi": "ひと (n3_225)",
    "meaningUz": "N3 Iyeroglifi #225 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "峠語",
        "reading": "かんご (峠)",
        "meaning": "峠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_226",
    "level": "N3",
    "kanji": "峱",
    "onyomi": "カン (n3_226)",
    "kunyomi": "ひと (n3_226)",
    "meaningUz": "N3 Iyeroglifi #226 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "峱語",
        "reading": "かんご (峱)",
        "meaning": "峱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_227",
    "level": "N3",
    "kanji": "崂",
    "onyomi": "カン (n3_227)",
    "kunyomi": "ひと (n3_227)",
    "meaningUz": "N3 Iyeroglifi #227 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "崂語",
        "reading": "かんご (崂)",
        "meaning": "崂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_228",
    "level": "N3",
    "kanji": "崓",
    "onyomi": "カン (n3_228)",
    "kunyomi": "ひと (n3_228)",
    "meaningUz": "N3 Iyeroglifi #228 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "崓語",
        "reading": "かんご (崓)",
        "meaning": "崓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_229",
    "level": "N3",
    "kanji": "崤",
    "onyomi": "カン (n3_229)",
    "kunyomi": "ひと (n3_229)",
    "meaningUz": "N3 Iyeroglifi #229 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "崤語",
        "reading": "かんご (崤)",
        "meaning": "崤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_230",
    "level": "N3",
    "kanji": "崵",
    "onyomi": "カン (n3_230)",
    "kunyomi": "ひと (n3_230)",
    "meaningUz": "N3 Iyeroglifi #230 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "崵語",
        "reading": "かんご (崵)",
        "meaning": "崵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_231",
    "level": "N3",
    "kanji": "嵆",
    "onyomi": "カン (n3_231)",
    "kunyomi": "ひと (n3_231)",
    "meaningUz": "N3 Iyeroglifi #231 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "嵆語",
        "reading": "かんご (嵆)",
        "meaning": "嵆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_232",
    "level": "N3",
    "kanji": "嵗",
    "onyomi": "カン (n3_232)",
    "kunyomi": "ひと (n3_232)",
    "meaningUz": "N3 Iyeroglifi #232 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "嵗語",
        "reading": "かんご (嵗)",
        "meaning": "嵗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_233",
    "level": "N3",
    "kanji": "嵨",
    "onyomi": "カン (n3_233)",
    "kunyomi": "ひと (n3_233)",
    "meaningUz": "N3 Iyeroglifi #233 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "嵨語",
        "reading": "かんご (嵨)",
        "meaning": "嵨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_234",
    "level": "N3",
    "kanji": "嵹",
    "onyomi": "カン (n3_234)",
    "kunyomi": "ひと (n3_234)",
    "meaningUz": "N3 Iyeroglifi #234 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嵹語",
        "reading": "かんご (嵹)",
        "meaning": "嵹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_235",
    "level": "N3",
    "kanji": "嶊",
    "onyomi": "カン (n3_235)",
    "kunyomi": "ひと (n3_235)",
    "meaningUz": "N3 Iyeroglifi #235 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嶊語",
        "reading": "かんご (嶊)",
        "meaning": "嶊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_236",
    "level": "N3",
    "kanji": "嶛",
    "onyomi": "カン (n3_236)",
    "kunyomi": "ひと (n3_236)",
    "meaningUz": "N3 Iyeroglifi #236 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嶛語",
        "reading": "かんご (嶛)",
        "meaning": "嶛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_237",
    "level": "N3",
    "kanji": "嶬",
    "onyomi": "カン (n3_237)",
    "kunyomi": "ひと (n3_237)",
    "meaningUz": "N3 Iyeroglifi #237 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嶬語",
        "reading": "かんご (嶬)",
        "meaning": "嶬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_238",
    "level": "N3",
    "kanji": "嶽",
    "onyomi": "カン (n3_238)",
    "kunyomi": "ひと (n3_238)",
    "meaningUz": "N3 Iyeroglifi #238 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嶽語",
        "reading": "かんご (嶽)",
        "meaning": "嶽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_239",
    "level": "N3",
    "kanji": "巎",
    "onyomi": "カン (n3_239)",
    "kunyomi": "ひと (n3_239)",
    "meaningUz": "N3 Iyeroglifi #239 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "巎語",
        "reading": "かんご (巎)",
        "meaning": "巎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_240",
    "level": "N3",
    "kanji": "巟",
    "onyomi": "カン (n3_240)",
    "kunyomi": "ひと (n3_240)",
    "meaningUz": "N3 Iyeroglifi #240 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "巟語",
        "reading": "かんご (巟)",
        "meaning": "巟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_241",
    "level": "N3",
    "kanji": "巰",
    "onyomi": "カン (n3_241)",
    "kunyomi": "ひと (n3_241)",
    "meaningUz": "N3 Iyeroglifi #241 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "巰語",
        "reading": "かんご (巰)",
        "meaning": "巰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_242",
    "level": "N3",
    "kanji": "币",
    "onyomi": "カン (n3_242)",
    "kunyomi": "ひと (n3_242)",
    "meaningUz": "N3 Iyeroglifi #242 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "币語",
        "reading": "かんご (币)",
        "meaning": "币 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_243",
    "level": "N3",
    "kanji": "帒",
    "onyomi": "カン (n3_243)",
    "kunyomi": "ひと (n3_243)",
    "meaningUz": "N3 Iyeroglifi #243 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "帒語",
        "reading": "かんご (帒)",
        "meaning": "帒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_244",
    "level": "N3",
    "kanji": "帣",
    "onyomi": "カン (n3_244)",
    "kunyomi": "ひと (n3_244)",
    "meaningUz": "N3 Iyeroglifi #244 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "帣語",
        "reading": "かんご (帣)",
        "meaning": "帣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_245",
    "level": "N3",
    "kanji": "帴",
    "onyomi": "カン (n3_245)",
    "kunyomi": "ひと (n3_245)",
    "meaningUz": "N3 Iyeroglifi #245 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "帴語",
        "reading": "かんご (帴)",
        "meaning": "帴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_246",
    "level": "N3",
    "kanji": "幅",
    "onyomi": "カン (n3_246)",
    "kunyomi": "ひと (n3_246)",
    "meaningUz": "N3 Iyeroglifi #246 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "幅語",
        "reading": "かんご (幅)",
        "meaning": "幅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_247",
    "level": "N3",
    "kanji": "幖",
    "onyomi": "カン (n3_247)",
    "kunyomi": "ひと (n3_247)",
    "meaningUz": "N3 Iyeroglifi #247 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "幖語",
        "reading": "かんご (幖)",
        "meaning": "幖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_248",
    "level": "N3",
    "kanji": "幧",
    "onyomi": "カン (n3_248)",
    "kunyomi": "ひと (n3_248)",
    "meaningUz": "N3 Iyeroglifi #248 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "幧語",
        "reading": "かんご (幧)",
        "meaning": "幧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_249",
    "level": "N3",
    "kanji": "幸",
    "onyomi": "カン (n3_249)",
    "kunyomi": "ひと (n3_249)",
    "meaningUz": "N3 Iyeroglifi #249 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "幸語",
        "reading": "かんご (幸)",
        "meaning": "幸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_250",
    "level": "N3",
    "kanji": "庉",
    "onyomi": "カン (n3_250)",
    "kunyomi": "ひと (n3_250)",
    "meaningUz": "N3 Iyeroglifi #250 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "庉語",
        "reading": "かんご (庉)",
        "meaning": "庉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_251",
    "level": "N3",
    "kanji": "庚",
    "onyomi": "カン (n3_251)",
    "kunyomi": "ひと (n3_251)",
    "meaningUz": "N3 Iyeroglifi #251 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "庚語",
        "reading": "かんご (庚)",
        "meaning": "庚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_252",
    "level": "N3",
    "kanji": "庫",
    "onyomi": "カン (n3_252)",
    "kunyomi": "ひと (n3_252)",
    "meaningUz": "N3 Iyeroglifi #252 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "庫語",
        "reading": "かんご (庫)",
        "meaning": "庫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_253",
    "level": "N3",
    "kanji": "庼",
    "onyomi": "カン (n3_253)",
    "kunyomi": "ひと (n3_253)",
    "meaningUz": "N3 Iyeroglifi #253 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "庼語",
        "reading": "かんご (庼)",
        "meaning": "庼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_254",
    "level": "N3",
    "kanji": "廍",
    "onyomi": "カン (n3_254)",
    "kunyomi": "ひと (n3_254)",
    "meaningUz": "N3 Iyeroglifi #254 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "廍語",
        "reading": "かんご (廍)",
        "meaning": "廍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_255",
    "level": "N3",
    "kanji": "廞",
    "onyomi": "カン (n3_255)",
    "kunyomi": "ひと (n3_255)",
    "meaningUz": "N3 Iyeroglifi #255 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "廞語",
        "reading": "かんご (廞)",
        "meaning": "廞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_256",
    "level": "N3",
    "kanji": "廯",
    "onyomi": "カン (n3_256)",
    "kunyomi": "ひと (n3_256)",
    "meaningUz": "N3 Iyeroglifi #256 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "廯語",
        "reading": "かんご (廯)",
        "meaning": "廯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_257",
    "level": "N3",
    "kanji": "开",
    "onyomi": "カン (n3_257)",
    "kunyomi": "ひと (n3_257)",
    "meaningUz": "N3 Iyeroglifi #257 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "开語",
        "reading": "かんご (开)",
        "meaning": "开 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_258",
    "level": "N3",
    "kanji": "弑",
    "onyomi": "カン (n3_258)",
    "kunyomi": "ひと (n3_258)",
    "meaningUz": "N3 Iyeroglifi #258 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "弑語",
        "reading": "かんご (弑)",
        "meaning": "弑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_259",
    "level": "N3",
    "kanji": "弢",
    "onyomi": "カン (n3_259)",
    "kunyomi": "ひと (n3_259)",
    "meaningUz": "N3 Iyeroglifi #259 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "弢語",
        "reading": "かんご (弢)",
        "meaning": "弢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_260",
    "level": "N3",
    "kanji": "弳",
    "onyomi": "カン (n3_260)",
    "kunyomi": "ひと (n3_260)",
    "meaningUz": "N3 Iyeroglifi #260 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "弳語",
        "reading": "かんご (弳)",
        "meaning": "弳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_261",
    "level": "N3",
    "kanji": "彄",
    "onyomi": "カン (n3_261)",
    "kunyomi": "ひと (n3_261)",
    "meaningUz": "N3 Iyeroglifi #261 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "彄語",
        "reading": "かんご (彄)",
        "meaning": "彄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_262",
    "level": "N3",
    "kanji": "录",
    "onyomi": "カン (n3_262)",
    "kunyomi": "ひと (n3_262)",
    "meaningUz": "N3 Iyeroglifi #262 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "录語",
        "reading": "かんご (录)",
        "meaning": "录 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_263",
    "level": "N3",
    "kanji": "彦",
    "onyomi": "カン (n3_263)",
    "kunyomi": "ひと (n3_263)",
    "meaningUz": "N3 Iyeroglifi #263 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "彦語",
        "reading": "かんご (彦)",
        "meaning": "彦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_264",
    "level": "N3",
    "kanji": "彷",
    "onyomi": "カン (n3_264)",
    "kunyomi": "ひと (n3_264)",
    "meaningUz": "N3 Iyeroglifi #264 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "彷語",
        "reading": "かんご (彷)",
        "meaning": "彷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_265",
    "level": "N3",
    "kanji": "很",
    "onyomi": "カン (n3_265)",
    "kunyomi": "ひと (n3_265)",
    "meaningUz": "N3 Iyeroglifi #265 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "很語",
        "reading": "かんご (很)",
        "meaning": "很 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_266",
    "level": "N3",
    "kanji": "徙",
    "onyomi": "カン (n3_266)",
    "kunyomi": "ひと (n3_266)",
    "meaningUz": "N3 Iyeroglifi #266 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "徙語",
        "reading": "かんご (徙)",
        "meaning": "徙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_267",
    "level": "N3",
    "kanji": "循",
    "onyomi": "カン (n3_267)",
    "kunyomi": "ひと (n3_267)",
    "meaningUz": "N3 Iyeroglifi #267 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "循語",
        "reading": "かんご (循)",
        "meaning": "循 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_268",
    "level": "N3",
    "kanji": "徻",
    "onyomi": "カン (n3_268)",
    "kunyomi": "ひと (n3_268)",
    "meaningUz": "N3 Iyeroglifi #268 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "徻語",
        "reading": "かんご (徻)",
        "meaning": "徻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_269",
    "level": "N3",
    "kanji": "忌",
    "onyomi": "カン (n3_269)",
    "kunyomi": "ひと (n3_269)",
    "meaningUz": "N3 Iyeroglifi #269 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "忌語",
        "reading": "かんご (忌)",
        "meaning": "忌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_270",
    "level": "N3",
    "kanji": "忝",
    "onyomi": "カン (n3_270)",
    "kunyomi": "ひと (n3_270)",
    "meaningUz": "N3 Iyeroglifi #270 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "忝語",
        "reading": "かんご (忝)",
        "meaning": "忝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_271",
    "level": "N3",
    "kanji": "忮",
    "onyomi": "カン (n3_271)",
    "kunyomi": "ひと (n3_271)",
    "meaningUz": "N3 Iyeroglifi #271 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "忮語",
        "reading": "かんご (忮)",
        "meaning": "忮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_272",
    "level": "N3",
    "kanji": "忿",
    "onyomi": "カン (n3_272)",
    "kunyomi": "ひと (n3_272)",
    "meaningUz": "N3 Iyeroglifi #272 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "忿語",
        "reading": "かんご (忿)",
        "meaning": "忿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_273",
    "level": "N3",
    "kanji": "怐",
    "onyomi": "カン (n3_273)",
    "kunyomi": "ひと (n3_273)",
    "meaningUz": "N3 Iyeroglifi #273 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "怐語",
        "reading": "かんご (怐)",
        "meaning": "怐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_274",
    "level": "N3",
    "kanji": "怡",
    "onyomi": "カン (n3_274)",
    "kunyomi": "ひと (n3_274)",
    "meaningUz": "N3 Iyeroglifi #274 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "怡語",
        "reading": "かんご (怡)",
        "meaning": "怡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_275",
    "level": "N3",
    "kanji": "怲",
    "onyomi": "カン (n3_275)",
    "kunyomi": "ひと (n3_275)",
    "meaningUz": "N3 Iyeroglifi #275 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "怲語",
        "reading": "かんご (怲)",
        "meaning": "怲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_276",
    "level": "N3",
    "kanji": "恃",
    "onyomi": "カン (n3_276)",
    "kunyomi": "ひと (n3_276)",
    "meaningUz": "N3 Iyeroglifi #276 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "恃語",
        "reading": "かんご (恃)",
        "meaning": "恃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_277",
    "level": "N3",
    "kanji": "恔",
    "onyomi": "カン (n3_277)",
    "kunyomi": "ひと (n3_277)",
    "meaningUz": "N3 Iyeroglifi #277 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "恔語",
        "reading": "かんご (恔)",
        "meaning": "恔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_278",
    "level": "N3",
    "kanji": "恥",
    "onyomi": "カン (n3_278)",
    "kunyomi": "ひと (n3_278)",
    "meaningUz": "N3 Iyeroglifi #278 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "恥語",
        "reading": "かんご (恥)",
        "meaning": "恥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_279",
    "level": "N3",
    "kanji": "恶",
    "onyomi": "カン (n3_279)",
    "kunyomi": "ひと (n3_279)",
    "meaningUz": "N3 Iyeroglifi #279 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "恶語",
        "reading": "かんご (恶)",
        "meaning": "恶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_280",
    "level": "N3",
    "kanji": "悇",
    "onyomi": "カン (n3_280)",
    "kunyomi": "ひと (n3_280)",
    "meaningUz": "N3 Iyeroglifi #280 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "悇語",
        "reading": "かんご (悇)",
        "meaning": "悇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_281",
    "level": "N3",
    "kanji": "悘",
    "onyomi": "カン (n3_281)",
    "kunyomi": "ひと (n3_281)",
    "meaningUz": "N3 Iyeroglifi #281 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "悘語",
        "reading": "かんご (悘)",
        "meaning": "悘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_282",
    "level": "N3",
    "kanji": "悩",
    "onyomi": "カン (n3_282)",
    "kunyomi": "ひと (n3_282)",
    "meaningUz": "N3 Iyeroglifi #282 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "悩語",
        "reading": "かんご (悩)",
        "meaning": "悩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_283",
    "level": "N3",
    "kanji": "悺",
    "onyomi": "カン (n3_283)",
    "kunyomi": "ひと (n3_283)",
    "meaningUz": "N3 Iyeroglifi #283 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "悺語",
        "reading": "かんご (悺)",
        "meaning": "悺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_284",
    "level": "N3",
    "kanji": "惋",
    "onyomi": "カン (n3_284)",
    "kunyomi": "ひと (n3_284)",
    "meaningUz": "N3 Iyeroglifi #284 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "惋語",
        "reading": "かんご (惋)",
        "meaning": "惋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_285",
    "level": "N3",
    "kanji": "惜",
    "onyomi": "カン (n3_285)",
    "kunyomi": "ひと (n3_285)",
    "meaningUz": "N3 Iyeroglifi #285 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "惜語",
        "reading": "かんご (惜)",
        "meaning": "惜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_286",
    "level": "N3",
    "kanji": "惭",
    "onyomi": "カン (n3_286)",
    "kunyomi": "ひと (n3_286)",
    "meaningUz": "N3 Iyeroglifi #286 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "惭語",
        "reading": "かんご (惭)",
        "meaning": "惭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_287",
    "level": "N3",
    "kanji": "惾",
    "onyomi": "カン (n3_287)",
    "kunyomi": "ひと (n3_287)",
    "meaningUz": "N3 Iyeroglifi #287 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "惾語",
        "reading": "かんご (惾)",
        "meaning": "惾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_288",
    "level": "N3",
    "kanji": "意",
    "onyomi": "カン (n3_288)",
    "kunyomi": "ひと (n3_288)",
    "meaningUz": "N3 Iyeroglifi #288 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "意語",
        "reading": "かんご (意)",
        "meaning": "意 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_289",
    "level": "N3",
    "kanji": "愠",
    "onyomi": "カン (n3_289)",
    "kunyomi": "ひと (n3_289)",
    "meaningUz": "N3 Iyeroglifi #289 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "愠語",
        "reading": "かんご (愠)",
        "meaning": "愠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_290",
    "level": "N3",
    "kanji": "愱",
    "onyomi": "カン (n3_290)",
    "kunyomi": "ひと (n3_290)",
    "meaningUz": "N3 Iyeroglifi #290 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "愱語",
        "reading": "かんご (愱)",
        "meaning": "愱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_291",
    "level": "N3",
    "kanji": "慂",
    "onyomi": "カン (n3_291)",
    "kunyomi": "ひと (n3_291)",
    "meaningUz": "N3 Iyeroglifi #291 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "慂語",
        "reading": "かんご (慂)",
        "meaning": "慂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_292",
    "level": "N3",
    "kanji": "慓",
    "onyomi": "カン (n3_292)",
    "kunyomi": "ひと (n3_292)",
    "meaningUz": "N3 Iyeroglifi #292 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "慓語",
        "reading": "かんご (慓)",
        "meaning": "慓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_293",
    "level": "N3",
    "kanji": "慤",
    "onyomi": "カン (n3_293)",
    "kunyomi": "ひと (n3_293)",
    "meaningUz": "N3 Iyeroglifi #293 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "慤語",
        "reading": "かんご (慤)",
        "meaning": "慤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_294",
    "level": "N3",
    "kanji": "慵",
    "onyomi": "カン (n3_294)",
    "kunyomi": "ひと (n3_294)",
    "meaningUz": "N3 Iyeroglifi #294 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "慵語",
        "reading": "かんご (慵)",
        "meaning": "慵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_295",
    "level": "N3",
    "kanji": "憆",
    "onyomi": "カン (n3_295)",
    "kunyomi": "ひと (n3_295)",
    "meaningUz": "N3 Iyeroglifi #295 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "憆語",
        "reading": "かんご (憆)",
        "meaning": "憆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_296",
    "level": "N3",
    "kanji": "憗",
    "onyomi": "カン (n3_296)",
    "kunyomi": "ひと (n3_296)",
    "meaningUz": "N3 Iyeroglifi #296 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "憗語",
        "reading": "かんご (憗)",
        "meaning": "憗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_297",
    "level": "N3",
    "kanji": "憨",
    "onyomi": "カン (n3_297)",
    "kunyomi": "ひと (n3_297)",
    "meaningUz": "N3 Iyeroglifi #297 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "憨語",
        "reading": "かんご (憨)",
        "meaning": "憨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_298",
    "level": "N3",
    "kanji": "憹",
    "onyomi": "カン (n3_298)",
    "kunyomi": "ひと (n3_298)",
    "meaningUz": "N3 Iyeroglifi #298 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "憹語",
        "reading": "かんご (憹)",
        "meaning": "憹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_299",
    "level": "N3",
    "kanji": "懊",
    "onyomi": "カン (n3_299)",
    "kunyomi": "ひと (n3_299)",
    "meaningUz": "N3 Iyeroglifi #299 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "懊語",
        "reading": "かんご (懊)",
        "meaning": "懊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_300",
    "level": "N3",
    "kanji": "懛",
    "onyomi": "カン (n3_300)",
    "kunyomi": "ひと (n3_300)",
    "meaningUz": "N3 Iyeroglifi #300 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "懛語",
        "reading": "かんご (懛)",
        "meaning": "懛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_301",
    "level": "N3",
    "kanji": "懬",
    "onyomi": "カン (n3_301)",
    "kunyomi": "ひと (n3_301)",
    "meaningUz": "N3 Iyeroglifi #301 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "懬語",
        "reading": "かんご (懬)",
        "meaning": "懬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_302",
    "level": "N3",
    "kanji": "懽",
    "onyomi": "カン (n3_302)",
    "kunyomi": "ひと (n3_302)",
    "meaningUz": "N3 Iyeroglifi #302 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "懽語",
        "reading": "かんご (懽)",
        "meaning": "懽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_303",
    "level": "N3",
    "kanji": "戎",
    "onyomi": "カン (n3_303)",
    "kunyomi": "ひと (n3_303)",
    "meaningUz": "N3 Iyeroglifi #303 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "戎語",
        "reading": "かんご (戎)",
        "meaning": "戎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_304",
    "level": "N3",
    "kanji": "戟",
    "onyomi": "カン (n3_304)",
    "kunyomi": "ひと (n3_304)",
    "meaningUz": "N3 Iyeroglifi #304 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "戟語",
        "reading": "かんご (戟)",
        "meaning": "戟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_305",
    "level": "N3",
    "kanji": "戰",
    "onyomi": "カン (n3_305)",
    "kunyomi": "ひと (n3_305)",
    "meaningUz": "N3 Iyeroglifi #305 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "戰語",
        "reading": "かんご (戰)",
        "meaning": "戰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_306",
    "level": "N3",
    "kanji": "扁",
    "onyomi": "カン (n3_306)",
    "kunyomi": "ひと (n3_306)",
    "meaningUz": "N3 Iyeroglifi #306 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "扁語",
        "reading": "かんご (扁)",
        "meaning": "扁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_307",
    "level": "N3",
    "kanji": "扒",
    "onyomi": "カン (n3_307)",
    "kunyomi": "ひと (n3_307)",
    "meaningUz": "N3 Iyeroglifi #307 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "扒語",
        "reading": "かんご (扒)",
        "meaning": "扒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_308",
    "level": "N3",
    "kanji": "扣",
    "onyomi": "カン (n3_308)",
    "kunyomi": "ひと (n3_308)",
    "meaningUz": "N3 Iyeroglifi #308 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "扣語",
        "reading": "かんご (扣)",
        "meaning": "扣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_309",
    "level": "N3",
    "kanji": "扴",
    "onyomi": "カン (n3_309)",
    "kunyomi": "ひと (n3_309)",
    "meaningUz": "N3 Iyeroglifi #309 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "扴語",
        "reading": "かんご (扴)",
        "meaning": "扴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_310",
    "level": "N3",
    "kanji": "抅",
    "onyomi": "カン (n3_310)",
    "kunyomi": "ひと (n3_310)",
    "meaningUz": "N3 Iyeroglifi #310 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "抅語",
        "reading": "かんご (抅)",
        "meaning": "抅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_311",
    "level": "N3",
    "kanji": "抖",
    "onyomi": "カン (n3_311)",
    "kunyomi": "ひと (n3_311)",
    "meaningUz": "N3 Iyeroglifi #311 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "抖語",
        "reading": "かんご (抖)",
        "meaning": "抖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_312",
    "level": "N3",
    "kanji": "抧",
    "onyomi": "カン (n3_312)",
    "kunyomi": "ひと (n3_312)",
    "meaningUz": "N3 Iyeroglifi #312 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "抧語",
        "reading": "かんご (抧)",
        "meaning": "抧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_313",
    "level": "N3",
    "kanji": "抸",
    "onyomi": "カン (n3_313)",
    "kunyomi": "ひと (n3_313)",
    "meaningUz": "N3 Iyeroglifi #313 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "抸語",
        "reading": "かんご (抸)",
        "meaning": "抸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_314",
    "level": "N3",
    "kanji": "拉",
    "onyomi": "カン (n3_314)",
    "kunyomi": "ひと (n3_314)",
    "meaningUz": "N3 Iyeroglifi #314 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "拉語",
        "reading": "かんご (拉)",
        "meaning": "拉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_315",
    "level": "N3",
    "kanji": "拚",
    "onyomi": "カン (n3_315)",
    "kunyomi": "ひと (n3_315)",
    "meaningUz": "N3 Iyeroglifi #315 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "拚語",
        "reading": "かんご (拚)",
        "meaning": "拚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_316",
    "level": "N3",
    "kanji": "拫",
    "onyomi": "カン (n3_316)",
    "kunyomi": "ひと (n3_316)",
    "meaningUz": "N3 Iyeroglifi #316 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "拫語",
        "reading": "かんご (拫)",
        "meaning": "拫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_317",
    "level": "N3",
    "kanji": "拼",
    "onyomi": "カン (n3_317)",
    "kunyomi": "ひと (n3_317)",
    "meaningUz": "N3 Iyeroglifi #317 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "拼語",
        "reading": "かんご (拼)",
        "meaning": "拼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_318",
    "level": "N3",
    "kanji": "挍",
    "onyomi": "カン (n3_318)",
    "kunyomi": "ひと (n3_318)",
    "meaningUz": "N3 Iyeroglifi #318 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "挍語",
        "reading": "かんご (挍)",
        "meaning": "挍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_319",
    "level": "N3",
    "kanji": "挞",
    "onyomi": "カン (n3_319)",
    "kunyomi": "ひと (n3_319)",
    "meaningUz": "N3 Iyeroglifi #319 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "挞語",
        "reading": "かんご (挞)",
        "meaning": "挞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_320",
    "level": "N3",
    "kanji": "振",
    "onyomi": "カン (n3_320)",
    "kunyomi": "ひと (n3_320)",
    "meaningUz": "N3 Iyeroglifi #320 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "振語",
        "reading": "かんご (振)",
        "meaning": "振 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_321",
    "level": "N3",
    "kanji": "捀",
    "onyomi": "カン (n3_321)",
    "kunyomi": "ひと (n3_321)",
    "meaningUz": "N3 Iyeroglifi #321 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "捀語",
        "reading": "かんご (捀)",
        "meaning": "捀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_322",
    "level": "N3",
    "kanji": "捑",
    "onyomi": "カン (n3_322)",
    "kunyomi": "ひと (n3_322)",
    "meaningUz": "N3 Iyeroglifi #322 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "捑語",
        "reading": "かんご (捑)",
        "meaning": "捑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_323",
    "level": "N3",
    "kanji": "换",
    "onyomi": "カン (n3_323)",
    "kunyomi": "ひと (n3_323)",
    "meaningUz": "N3 Iyeroglifi #323 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "换語",
        "reading": "かんご (换)",
        "meaning": "换 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_324",
    "level": "N3",
    "kanji": "捳",
    "onyomi": "カン (n3_324)",
    "kunyomi": "ひと (n3_324)",
    "meaningUz": "N3 Iyeroglifi #324 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "捳語",
        "reading": "かんご (捳)",
        "meaning": "捳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_325",
    "level": "N3",
    "kanji": "掄",
    "onyomi": "カン (n3_325)",
    "kunyomi": "ひと (n3_325)",
    "meaningUz": "N3 Iyeroglifi #325 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "掄語",
        "reading": "かんご (掄)",
        "meaning": "掄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_326",
    "level": "N3",
    "kanji": "掕",
    "onyomi": "カン (n3_326)",
    "kunyomi": "ひと (n3_326)",
    "meaningUz": "N3 Iyeroglifi #326 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "掕語",
        "reading": "かんご (掕)",
        "meaning": "掕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_327",
    "level": "N3",
    "kanji": "掦",
    "onyomi": "カン (n3_327)",
    "kunyomi": "ひと (n3_327)",
    "meaningUz": "N3 Iyeroglifi #327 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "掦語",
        "reading": "かんご (掦)",
        "meaning": "掦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_328",
    "level": "N3",
    "kanji": "掷",
    "onyomi": "カン (n3_328)",
    "kunyomi": "ひと (n3_328)",
    "meaningUz": "N3 Iyeroglifi #328 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "掷語",
        "reading": "かんご (掷)",
        "meaning": "掷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_329",
    "level": "N3",
    "kanji": "揈",
    "onyomi": "カン (n3_329)",
    "kunyomi": "ひと (n3_329)",
    "meaningUz": "N3 Iyeroglifi #329 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "揈語",
        "reading": "かんご (揈)",
        "meaning": "揈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_330",
    "level": "N3",
    "kanji": "揙",
    "onyomi": "カン (n3_330)",
    "kunyomi": "ひと (n3_330)",
    "meaningUz": "N3 Iyeroglifi #330 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "揙語",
        "reading": "かんご (揙)",
        "meaning": "揙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_331",
    "level": "N3",
    "kanji": "揪",
    "onyomi": "カン (n3_331)",
    "kunyomi": "ひと (n3_331)",
    "meaningUz": "N3 Iyeroglifi #331 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "揪語",
        "reading": "かんご (揪)",
        "meaning": "揪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_332",
    "level": "N3",
    "kanji": "揻",
    "onyomi": "カン (n3_332)",
    "kunyomi": "ひと (n3_332)",
    "meaningUz": "N3 Iyeroglifi #332 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "揻語",
        "reading": "かんご (揻)",
        "meaning": "揻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_333",
    "level": "N3",
    "kanji": "搌",
    "onyomi": "カン (n3_333)",
    "kunyomi": "ひと (n3_333)",
    "meaningUz": "N3 Iyeroglifi #333 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "搌語",
        "reading": "かんご (搌)",
        "meaning": "搌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_334",
    "level": "N3",
    "kanji": "搝",
    "onyomi": "カン (n3_334)",
    "kunyomi": "ひと (n3_334)",
    "meaningUz": "N3 Iyeroglifi #334 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "搝語",
        "reading": "かんご (搝)",
        "meaning": "搝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_335",
    "level": "N3",
    "kanji": "搮",
    "onyomi": "カン (n3_335)",
    "kunyomi": "ひと (n3_335)",
    "meaningUz": "N3 Iyeroglifi #335 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "搮語",
        "reading": "かんご (搮)",
        "meaning": "搮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_336",
    "level": "N3",
    "kanji": "搿",
    "onyomi": "カン (n3_336)",
    "kunyomi": "ひと (n3_336)",
    "meaningUz": "N3 Iyeroglifi #336 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "搿語",
        "reading": "かんご (搿)",
        "meaning": "搿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_337",
    "level": "N3",
    "kanji": "摐",
    "onyomi": "カン (n3_337)",
    "kunyomi": "ひと (n3_337)",
    "meaningUz": "N3 Iyeroglifi #337 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "摐語",
        "reading": "かんご (摐)",
        "meaning": "摐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_338",
    "level": "N3",
    "kanji": "摡",
    "onyomi": "カン (n3_338)",
    "kunyomi": "ひと (n3_338)",
    "meaningUz": "N3 Iyeroglifi #338 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "摡語",
        "reading": "かんご (摡)",
        "meaning": "摡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_339",
    "level": "N3",
    "kanji": "摲",
    "onyomi": "カン (n3_339)",
    "kunyomi": "ひと (n3_339)",
    "meaningUz": "N3 Iyeroglifi #339 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "摲語",
        "reading": "かんご (摲)",
        "meaning": "摲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_340",
    "level": "N3",
    "kanji": "撃",
    "onyomi": "カン (n3_340)",
    "kunyomi": "ひと (n3_340)",
    "meaningUz": "N3 Iyeroglifi #340 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "撃語",
        "reading": "かんご (撃)",
        "meaning": "撃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_341",
    "level": "N3",
    "kanji": "撔",
    "onyomi": "カン (n3_341)",
    "kunyomi": "ひと (n3_341)",
    "meaningUz": "N3 Iyeroglifi #341 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "撔語",
        "reading": "かんご (撔)",
        "meaning": "撔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_342",
    "level": "N3",
    "kanji": "撥",
    "onyomi": "カン (n3_342)",
    "kunyomi": "ひと (n3_342)",
    "meaningUz": "N3 Iyeroglifi #342 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "撥語",
        "reading": "かんご (撥)",
        "meaning": "撥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_343",
    "level": "N3",
    "kanji": "撶",
    "onyomi": "カン (n3_343)",
    "kunyomi": "ひと (n3_343)",
    "meaningUz": "N3 Iyeroglifi #343 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "撶語",
        "reading": "かんご (撶)",
        "meaning": "撶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_344",
    "level": "N3",
    "kanji": "擇",
    "onyomi": "カン (n3_344)",
    "kunyomi": "ひと (n3_344)",
    "meaningUz": "N3 Iyeroglifi #344 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "擇語",
        "reading": "かんご (擇)",
        "meaning": "擇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_345",
    "level": "N3",
    "kanji": "擘",
    "onyomi": "カン (n3_345)",
    "kunyomi": "ひと (n3_345)",
    "meaningUz": "N3 Iyeroglifi #345 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "擘語",
        "reading": "かんご (擘)",
        "meaning": "擘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_346",
    "level": "N3",
    "kanji": "擩",
    "onyomi": "カン (n3_346)",
    "kunyomi": "ひと (n3_346)",
    "meaningUz": "N3 Iyeroglifi #346 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "擩語",
        "reading": "かんご (擩)",
        "meaning": "擩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_347",
    "level": "N3",
    "kanji": "擺",
    "onyomi": "カン (n3_347)",
    "kunyomi": "ひと (n3_347)",
    "meaningUz": "N3 Iyeroglifi #347 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "擺語",
        "reading": "かんご (擺)",
        "meaning": "擺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_348",
    "level": "N3",
    "kanji": "攋",
    "onyomi": "カン (n3_348)",
    "kunyomi": "ひと (n3_348)",
    "meaningUz": "N3 Iyeroglifi #348 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "攋語",
        "reading": "かんご (攋)",
        "meaning": "攋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_349",
    "level": "N3",
    "kanji": "攜",
    "onyomi": "カン (n3_349)",
    "kunyomi": "ひと (n3_349)",
    "meaningUz": "N3 Iyeroglifi #349 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "攜語",
        "reading": "かんご (攜)",
        "meaning": "攜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_350",
    "level": "N3",
    "kanji": "攭",
    "onyomi": "カン (n3_350)",
    "kunyomi": "ひと (n3_350)",
    "meaningUz": "N3 Iyeroglifi #350 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "攭語",
        "reading": "かんご (攭)",
        "meaning": "攭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_351",
    "level": "N3",
    "kanji": "放",
    "onyomi": "カン (n3_351)",
    "kunyomi": "ひと (n3_351)",
    "meaningUz": "N3 Iyeroglifi #351 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "放語",
        "reading": "かんご (放)",
        "meaning": "放 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_352",
    "level": "N3",
    "kanji": "敏",
    "onyomi": "カン (n3_352)",
    "kunyomi": "ひと (n3_352)",
    "meaningUz": "N3 Iyeroglifi #352 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "敏語",
        "reading": "かんご (敏)",
        "meaning": "敏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_353",
    "level": "N3",
    "kanji": "敠",
    "onyomi": "カン (n3_353)",
    "kunyomi": "ひと (n3_353)",
    "meaningUz": "N3 Iyeroglifi #353 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "敠語",
        "reading": "かんご (敠)",
        "meaning": "敠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_354",
    "level": "N3",
    "kanji": "敱",
    "onyomi": "カン (n3_354)",
    "kunyomi": "ひと (n3_354)",
    "meaningUz": "N3 Iyeroglifi #354 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "敱語",
        "reading": "かんご (敱)",
        "meaning": "敱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_355",
    "level": "N3",
    "kanji": "斂",
    "onyomi": "カン (n3_355)",
    "kunyomi": "ひと (n3_355)",
    "meaningUz": "N3 Iyeroglifi #355 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "斂語",
        "reading": "かんご (斂)",
        "meaning": "斂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_356",
    "level": "N3",
    "kanji": "斓",
    "onyomi": "カン (n3_356)",
    "kunyomi": "ひと (n3_356)",
    "meaningUz": "N3 Iyeroglifi #356 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "斓語",
        "reading": "かんご (斓)",
        "meaning": "斓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_357",
    "level": "N3",
    "kanji": "斤",
    "onyomi": "カン (n3_357)",
    "kunyomi": "ひと (n3_357)",
    "meaningUz": "N3 Iyeroglifi #357 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "斤語",
        "reading": "かんご (斤)",
        "meaning": "斤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_358",
    "level": "N3",
    "kanji": "斵",
    "onyomi": "カン (n3_358)",
    "kunyomi": "ひと (n3_358)",
    "meaningUz": "N3 Iyeroglifi #358 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "斵語",
        "reading": "かんご (斵)",
        "meaning": "斵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_359",
    "level": "N3",
    "kanji": "旆",
    "onyomi": "カン (n3_359)",
    "kunyomi": "ひと (n3_359)",
    "meaningUz": "N3 Iyeroglifi #359 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "旆語",
        "reading": "かんご (旆)",
        "meaning": "旆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_360",
    "level": "N3",
    "kanji": "旗",
    "onyomi": "カン (n3_360)",
    "kunyomi": "ひと (n3_360)",
    "meaningUz": "N3 Iyeroglifi #360 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "旗語",
        "reading": "かんご (旗)",
        "meaning": "旗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n3_361",
    "level": "N3",
    "kanji": "旨",
    "onyomi": "カン (n3_361)",
    "kunyomi": "ひと (n3_361)",
    "meaningUz": "N3 Iyeroglifi #361 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "旨語",
        "reading": "かんご (旨)",
        "meaning": "旨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_1",
    "level": "N2",
    "kanji": "住",
    "onyomi": "カン (n2_1)",
    "kunyomi": "ひと (n2_1)",
    "meaningUz": "N2 Iyeroglifi #1 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "住語",
        "reading": "かんご (住)",
        "meaning": "住 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_2",
    "level": "N2",
    "kanji": "宅",
    "onyomi": "カン (n2_2)",
    "kunyomi": "ひと (n2_2)",
    "meaningUz": "N2 Iyeroglifi #2 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "宅語",
        "reading": "かんご (宅)",
        "meaning": "宅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_3",
    "level": "N2",
    "kanji": "独",
    "onyomi": "カン (n2_3)",
    "kunyomi": "ひと (n2_3)",
    "meaningUz": "N2 Iyeroglifi #3 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "独語",
        "reading": "かんご (独)",
        "meaning": "独 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_4",
    "level": "N2",
    "kanji": "立",
    "onyomi": "カン (n2_4)",
    "kunyomi": "ひと (n2_4)",
    "meaningUz": "N2 Iyeroglifi #4 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "立語",
        "reading": "かんご (立)",
        "meaning": "立 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_5",
    "level": "N2",
    "kanji": "企",
    "onyomi": "カン (n2_5)",
    "kunyomi": "ひと (n2_5)",
    "meaningUz": "N2 Iyeroglifi #5 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "企語",
        "reading": "かんご (企)",
        "meaning": "企 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_6",
    "level": "N2",
    "kanji": "業",
    "onyomi": "カン (n2_6)",
    "kunyomi": "ひと (n2_6)",
    "meaningUz": "N2 Iyeroglifi #6 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "業語",
        "reading": "かんご (業)",
        "meaning": "業 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_7",
    "level": "N2",
    "kanji": "貿",
    "onyomi": "カン (n2_7)",
    "kunyomi": "ひと (n2_7)",
    "meaningUz": "N2 Iyeroglifi #7 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "貿語",
        "reading": "かんご (貿)",
        "meaning": "貿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_8",
    "level": "N2",
    "kanji": "易",
    "onyomi": "カン (n2_8)",
    "kunyomi": "ひと (n2_8)",
    "meaningUz": "N2 Iyeroglifi #8 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "易語",
        "reading": "かんご (易)",
        "meaning": "易 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_9",
    "level": "N2",
    "kanji": "競",
    "onyomi": "カン (n2_9)",
    "kunyomi": "ひと (n2_9)",
    "meaningUz": "N2 Iyeroglifi #9 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "競語",
        "reading": "かんご (競)",
        "meaning": "競 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_10",
    "level": "N2",
    "kanji": "争",
    "onyomi": "カン (n2_10)",
    "kunyomi": "ひと (n2_10)",
    "meaningUz": "N2 Iyeroglifi #10 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "争語",
        "reading": "かんご (争)",
        "meaning": "争 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_11",
    "level": "N2",
    "kanji": "成",
    "onyomi": "カン (n2_11)",
    "kunyomi": "ひと (n2_11)",
    "meaningUz": "N2 Iyeroglifi #11 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "成語",
        "reading": "かんご (成)",
        "meaning": "成 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_12",
    "level": "N2",
    "kanji": "功",
    "onyomi": "カン (n2_12)",
    "kunyomi": "ひと (n2_12)",
    "meaningUz": "N2 Iyeroglifi #12 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "功語",
        "reading": "かんご (功)",
        "meaning": "功 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_13",
    "level": "N2",
    "kanji": "技",
    "onyomi": "カン (n2_13)",
    "kunyomi": "ひと (n2_13)",
    "meaningUz": "N2 Iyeroglifi #13 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "技語",
        "reading": "かんご (技)",
        "meaning": "技 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_14",
    "level": "N2",
    "kanji": "術",
    "onyomi": "カン (n2_14)",
    "kunyomi": "ひと (n2_14)",
    "meaningUz": "N2 Iyeroglifi #14 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "術語",
        "reading": "かんご (術)",
        "meaning": "術 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_15",
    "level": "N2",
    "kanji": "環",
    "onyomi": "カン (n2_15)",
    "kunyomi": "ひと (n2_15)",
    "meaningUz": "N2 Iyeroglifi #15 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "環語",
        "reading": "かんご (環)",
        "meaning": "環 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_16",
    "level": "N2",
    "kanji": "境",
    "onyomi": "カン (n2_16)",
    "kunyomi": "ひと (n2_16)",
    "meaningUz": "N2 Iyeroglifi #16 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "境語",
        "reading": "かんご (境)",
        "meaning": "境 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_17",
    "level": "N2",
    "kanji": "破",
    "onyomi": "カン (n2_17)",
    "kunyomi": "ひと (n2_17)",
    "meaningUz": "N2 Iyeroglifi #17 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "破語",
        "reading": "かんご (破)",
        "meaning": "破 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_18",
    "level": "N2",
    "kanji": "壊",
    "onyomi": "カン (n2_18)",
    "kunyomi": "ひと (n2_18)",
    "meaningUz": "N2 Iyeroglifi #18 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "壊語",
        "reading": "かんご (壊)",
        "meaning": "壊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_19",
    "level": "N2",
    "kanji": "創",
    "onyomi": "カン (n2_19)",
    "kunyomi": "ひと (n2_19)",
    "meaningUz": "N2 Iyeroglifi #19 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "創語",
        "reading": "かんご (創)",
        "meaning": "創 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_20",
    "level": "N2",
    "kanji": "造",
    "onyomi": "カン (n2_20)",
    "kunyomi": "ひと (n2_20)",
    "meaningUz": "N2 Iyeroglifi #20 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "造語",
        "reading": "かんご (造)",
        "meaning": "造 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_21",
    "level": "N2",
    "kanji": "佔",
    "onyomi": "カン (n2_21)",
    "kunyomi": "ひと (n2_21)",
    "meaningUz": "N2 Iyeroglifi #21 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "佔語",
        "reading": "かんご (佔)",
        "meaning": "佔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_22",
    "level": "N2",
    "kanji": "佥",
    "onyomi": "カン (n2_22)",
    "kunyomi": "ひと (n2_22)",
    "meaningUz": "N2 Iyeroglifi #22 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "佥語",
        "reading": "かんご (佥)",
        "meaning": "佥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_23",
    "level": "N2",
    "kanji": "佶",
    "onyomi": "カン (n2_23)",
    "kunyomi": "ひと (n2_23)",
    "meaningUz": "N2 Iyeroglifi #23 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "佶語",
        "reading": "かんご (佶)",
        "meaning": "佶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_24",
    "level": "N2",
    "kanji": "侇",
    "onyomi": "カン (n2_24)",
    "kunyomi": "ひと (n2_24)",
    "meaningUz": "N2 Iyeroglifi #24 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "侇語",
        "reading": "かんご (侇)",
        "meaning": "侇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_25",
    "level": "N2",
    "kanji": "侘",
    "onyomi": "カン (n2_25)",
    "kunyomi": "ひと (n2_25)",
    "meaningUz": "N2 Iyeroglifi #25 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "侘語",
        "reading": "かんご (侘)",
        "meaning": "侘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_26",
    "level": "N2",
    "kanji": "侩",
    "onyomi": "カン (n2_26)",
    "kunyomi": "ひと (n2_26)",
    "meaningUz": "N2 Iyeroglifi #26 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "侩語",
        "reading": "かんご (侩)",
        "meaning": "侩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_27",
    "level": "N2",
    "kanji": "侺",
    "onyomi": "カン (n2_27)",
    "kunyomi": "ひと (n2_27)",
    "meaningUz": "N2 Iyeroglifi #27 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "侺語",
        "reading": "かんご (侺)",
        "meaning": "侺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_28",
    "level": "N2",
    "kanji": "俋",
    "onyomi": "カン (n2_28)",
    "kunyomi": "ひと (n2_28)",
    "meaningUz": "N2 Iyeroglifi #28 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "俋語",
        "reading": "かんご (俋)",
        "meaning": "俋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_29",
    "level": "N2",
    "kanji": "俜",
    "onyomi": "カン (n2_29)",
    "kunyomi": "ひと (n2_29)",
    "meaningUz": "N2 Iyeroglifi #29 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "俜語",
        "reading": "かんご (俜)",
        "meaning": "俜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_30",
    "level": "N2",
    "kanji": "俭",
    "onyomi": "カン (n2_30)",
    "kunyomi": "ひと (n2_30)",
    "meaningUz": "N2 Iyeroglifi #30 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "俭語",
        "reading": "かんご (俭)",
        "meaning": "俭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_31",
    "level": "N2",
    "kanji": "俾",
    "onyomi": "カン (n2_31)",
    "kunyomi": "ひと (n2_31)",
    "meaningUz": "N2 Iyeroglifi #31 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "俾語",
        "reading": "かんご (俾)",
        "meaning": "俾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_32",
    "level": "N2",
    "kanji": "倏",
    "onyomi": "カン (n2_32)",
    "kunyomi": "ひと (n2_32)",
    "meaningUz": "N2 Iyeroglifi #32 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "倏語",
        "reading": "かんご (倏)",
        "meaning": "倏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_33",
    "level": "N2",
    "kanji": "倠",
    "onyomi": "カン (n2_33)",
    "kunyomi": "ひと (n2_33)",
    "meaningUz": "N2 Iyeroglifi #33 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "倠語",
        "reading": "かんご (倠)",
        "meaning": "倠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_34",
    "level": "N2",
    "kanji": "倱",
    "onyomi": "カン (n2_34)",
    "kunyomi": "ひと (n2_34)",
    "meaningUz": "N2 Iyeroglifi #34 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "倱語",
        "reading": "かんご (倱)",
        "meaning": "倱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_35",
    "level": "N2",
    "kanji": "偂",
    "onyomi": "カン (n2_35)",
    "kunyomi": "ひと (n2_35)",
    "meaningUz": "N2 Iyeroglifi #35 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "偂語",
        "reading": "かんご (偂)",
        "meaning": "偂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_36",
    "level": "N2",
    "kanji": "偓",
    "onyomi": "カン (n2_36)",
    "kunyomi": "ひと (n2_36)",
    "meaningUz": "N2 Iyeroglifi #36 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "偓語",
        "reading": "かんご (偓)",
        "meaning": "偓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_37",
    "level": "N2",
    "kanji": "偤",
    "onyomi": "カン (n2_37)",
    "kunyomi": "ひと (n2_37)",
    "meaningUz": "N2 Iyeroglifi #37 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "偤語",
        "reading": "かんご (偤)",
        "meaning": "偤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_38",
    "level": "N2",
    "kanji": "偵",
    "onyomi": "カン (n2_38)",
    "kunyomi": "ひと (n2_38)",
    "meaningUz": "N2 Iyeroglifi #38 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "偵語",
        "reading": "かんご (偵)",
        "meaning": "偵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_39",
    "level": "N2",
    "kanji": "傆",
    "onyomi": "カン (n2_39)",
    "kunyomi": "ひと (n2_39)",
    "meaningUz": "N2 Iyeroglifi #39 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "傆語",
        "reading": "かんご (傆)",
        "meaning": "傆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_40",
    "level": "N2",
    "kanji": "傗",
    "onyomi": "カン (n2_40)",
    "kunyomi": "ひと (n2_40)",
    "meaningUz": "N2 Iyeroglifi #40 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "傗語",
        "reading": "かんご (傗)",
        "meaning": "傗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_41",
    "level": "N2",
    "kanji": "储",
    "onyomi": "カン (n2_41)",
    "kunyomi": "ひと (n2_41)",
    "meaningUz": "N2 Iyeroglifi #41 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "储語",
        "reading": "かんご (储)",
        "meaning": "储 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_42",
    "level": "N2",
    "kanji": "傹",
    "onyomi": "カン (n2_42)",
    "kunyomi": "ひと (n2_42)",
    "meaningUz": "N2 Iyeroglifi #42 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "傹語",
        "reading": "かんご (傹)",
        "meaning": "傹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_43",
    "level": "N2",
    "kanji": "僊",
    "onyomi": "カン (n2_43)",
    "kunyomi": "ひと (n2_43)",
    "meaningUz": "N2 Iyeroglifi #43 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "僊語",
        "reading": "かんご (僊)",
        "meaning": "僊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_44",
    "level": "N2",
    "kanji": "僛",
    "onyomi": "カン (n2_44)",
    "kunyomi": "ひと (n2_44)",
    "meaningUz": "N2 Iyeroglifi #44 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "僛語",
        "reading": "かんご (僛)",
        "meaning": "僛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_45",
    "level": "N2",
    "kanji": "僬",
    "onyomi": "カン (n2_45)",
    "kunyomi": "ひと (n2_45)",
    "meaningUz": "N2 Iyeroglifi #45 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "僬語",
        "reading": "かんご (僬)",
        "meaning": "僬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_46",
    "level": "N2",
    "kanji": "僽",
    "onyomi": "カン (n2_46)",
    "kunyomi": "ひと (n2_46)",
    "meaningUz": "N2 Iyeroglifi #46 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "僽語",
        "reading": "かんご (僽)",
        "meaning": "僽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_47",
    "level": "N2",
    "kanji": "儎",
    "onyomi": "カン (n2_47)",
    "kunyomi": "ひと (n2_47)",
    "meaningUz": "N2 Iyeroglifi #47 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "儎語",
        "reading": "かんご (儎)",
        "meaning": "儎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_48",
    "level": "N2",
    "kanji": "償",
    "onyomi": "カン (n2_48)",
    "kunyomi": "ひと (n2_48)",
    "meaningUz": "N2 Iyeroglifi #48 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "償語",
        "reading": "かんご (償)",
        "meaning": "償 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_49",
    "level": "N2",
    "kanji": "儰",
    "onyomi": "カン (n2_49)",
    "kunyomi": "ひと (n2_49)",
    "meaningUz": "N2 Iyeroglifi #49 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "儰語",
        "reading": "かんご (儰)",
        "meaning": "儰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_50",
    "level": "N2",
    "kanji": "允",
    "onyomi": "カン (n2_50)",
    "kunyomi": "ひと (n2_50)",
    "meaningUz": "N2 Iyeroglifi #50 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "允語",
        "reading": "かんご (允)",
        "meaning": "允 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_51",
    "level": "N2",
    "kanji": "兒",
    "onyomi": "カン (n2_51)",
    "kunyomi": "ひと (n2_51)",
    "meaningUz": "N2 Iyeroglifi #51 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "兒語",
        "reading": "かんご (兒)",
        "meaning": "兒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_52",
    "level": "N2",
    "kanji": "兣",
    "onyomi": "カン (n2_52)",
    "kunyomi": "ひと (n2_52)",
    "meaningUz": "N2 Iyeroglifi #52 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "兣語",
        "reading": "かんご (兣)",
        "meaning": "兣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_53",
    "level": "N2",
    "kanji": "兴",
    "onyomi": "カン (n2_53)",
    "kunyomi": "ひと (n2_53)",
    "meaningUz": "N2 Iyeroglifi #53 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "兴語",
        "reading": "かんご (兴)",
        "meaning": "兴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_54",
    "level": "N2",
    "kanji": "内",
    "onyomi": "カン (n2_54)",
    "kunyomi": "ひと (n2_54)",
    "meaningUz": "N2 Iyeroglifi #54 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "内語",
        "reading": "かんご (内)",
        "meaning": "内 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_55",
    "level": "N2",
    "kanji": "冖",
    "onyomi": "カン (n2_55)",
    "kunyomi": "ひと (n2_55)",
    "meaningUz": "N2 Iyeroglifi #55 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "冖語",
        "reading": "かんご (冖)",
        "meaning": "冖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_56",
    "level": "N2",
    "kanji": "冧",
    "onyomi": "カン (n2_56)",
    "kunyomi": "ひと (n2_56)",
    "meaningUz": "N2 Iyeroglifi #56 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "冧語",
        "reading": "かんご (冧)",
        "meaning": "冧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_57",
    "level": "N2",
    "kanji": "冸",
    "onyomi": "カン (n2_57)",
    "kunyomi": "ひと (n2_57)",
    "meaningUz": "N2 Iyeroglifi #57 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "冸語",
        "reading": "かんご (冸)",
        "meaning": "冸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_58",
    "level": "N2",
    "kanji": "凉",
    "onyomi": "カン (n2_58)",
    "kunyomi": "ひと (n2_58)",
    "meaningUz": "N2 Iyeroglifi #58 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "凉語",
        "reading": "かんご (凉)",
        "meaning": "凉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_59",
    "level": "N2",
    "kanji": "凚",
    "onyomi": "カン (n2_59)",
    "kunyomi": "ひと (n2_59)",
    "meaningUz": "N2 Iyeroglifi #59 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "凚語",
        "reading": "かんご (凚)",
        "meaning": "凚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_60",
    "level": "N2",
    "kanji": "凫",
    "onyomi": "カン (n2_60)",
    "kunyomi": "ひと (n2_60)",
    "meaningUz": "N2 Iyeroglifi #60 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "凫語",
        "reading": "かんご (凫)",
        "meaning": "凫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_61",
    "level": "N2",
    "kanji": "凼",
    "onyomi": "カン (n2_61)",
    "kunyomi": "ひと (n2_61)",
    "meaningUz": "N2 Iyeroglifi #61 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "凼語",
        "reading": "かんご (凼)",
        "meaning": "凼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_62",
    "level": "N2",
    "kanji": "刍",
    "onyomi": "カン (n2_62)",
    "kunyomi": "ひと (n2_62)",
    "meaningUz": "N2 Iyeroglifi #62 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "刍語",
        "reading": "かんご (刍)",
        "meaning": "刍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_63",
    "level": "N2",
    "kanji": "刞",
    "onyomi": "カン (n2_63)",
    "kunyomi": "ひと (n2_63)",
    "meaningUz": "N2 Iyeroglifi #63 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "刞語",
        "reading": "かんご (刞)",
        "meaning": "刞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_64",
    "level": "N2",
    "kanji": "刯",
    "onyomi": "カン (n2_64)",
    "kunyomi": "ひと (n2_64)",
    "meaningUz": "N2 Iyeroglifi #64 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "刯語",
        "reading": "かんご (刯)",
        "meaning": "刯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_65",
    "level": "N2",
    "kanji": "剀",
    "onyomi": "カン (n2_65)",
    "kunyomi": "ひと (n2_65)",
    "meaningUz": "N2 Iyeroglifi #65 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "剀語",
        "reading": "かんご (剀)",
        "meaning": "剀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_66",
    "level": "N2",
    "kanji": "剑",
    "onyomi": "カン (n2_66)",
    "kunyomi": "ひと (n2_66)",
    "meaningUz": "N2 Iyeroglifi #66 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "剑語",
        "reading": "かんご (剑)",
        "meaning": "剑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_67",
    "level": "N2",
    "kanji": "剢",
    "onyomi": "カン (n2_67)",
    "kunyomi": "ひと (n2_67)",
    "meaningUz": "N2 Iyeroglifi #67 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "剢語",
        "reading": "かんご (剢)",
        "meaning": "剢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_68",
    "level": "N2",
    "kanji": "剳",
    "onyomi": "カン (n2_68)",
    "kunyomi": "ひと (n2_68)",
    "meaningUz": "N2 Iyeroglifi #68 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "剳語",
        "reading": "かんご (剳)",
        "meaning": "剳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_69",
    "level": "N2",
    "kanji": "劄",
    "onyomi": "カン (n2_69)",
    "kunyomi": "ひと (n2_69)",
    "meaningUz": "N2 Iyeroglifi #69 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "劄語",
        "reading": "かんご (劄)",
        "meaning": "劄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_70",
    "level": "N2",
    "kanji": "劕",
    "onyomi": "カン (n2_70)",
    "kunyomi": "ひと (n2_70)",
    "meaningUz": "N2 Iyeroglifi #70 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "劕語",
        "reading": "かんご (劕)",
        "meaning": "劕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_71",
    "level": "N2",
    "kanji": "劦",
    "onyomi": "カン (n2_71)",
    "kunyomi": "ひと (n2_71)",
    "meaningUz": "N2 Iyeroglifi #71 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "劦語",
        "reading": "かんご (劦)",
        "meaning": "劦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_72",
    "level": "N2",
    "kanji": "劷",
    "onyomi": "カン (n2_72)",
    "kunyomi": "ひと (n2_72)",
    "meaningUz": "N2 Iyeroglifi #72 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "劷語",
        "reading": "かんご (劷)",
        "meaning": "劷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_73",
    "level": "N2",
    "kanji": "勈",
    "onyomi": "カン (n2_73)",
    "kunyomi": "ひと (n2_73)",
    "meaningUz": "N2 Iyeroglifi #73 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "勈語",
        "reading": "かんご (勈)",
        "meaning": "勈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_74",
    "level": "N2",
    "kanji": "務",
    "onyomi": "カン (n2_74)",
    "kunyomi": "ひと (n2_74)",
    "meaningUz": "N2 Iyeroglifi #74 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "務語",
        "reading": "かんご (務)",
        "meaning": "務 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_75",
    "level": "N2",
    "kanji": "勪",
    "onyomi": "カン (n2_75)",
    "kunyomi": "ひと (n2_75)",
    "meaningUz": "N2 Iyeroglifi #75 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "勪語",
        "reading": "かんご (勪)",
        "meaning": "勪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_76",
    "level": "N2",
    "kanji": "勻",
    "onyomi": "カン (n2_76)",
    "kunyomi": "ひと (n2_76)",
    "meaningUz": "N2 Iyeroglifi #76 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "勻語",
        "reading": "かんご (勻)",
        "meaning": "勻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_77",
    "level": "N2",
    "kanji": "匌",
    "onyomi": "カン (n2_77)",
    "kunyomi": "ひと (n2_77)",
    "meaningUz": "N2 Iyeroglifi #77 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "匌語",
        "reading": "かんご (匌)",
        "meaning": "匌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_78",
    "level": "N2",
    "kanji": "匝",
    "onyomi": "カン (n2_78)",
    "kunyomi": "ひと (n2_78)",
    "meaningUz": "N2 Iyeroglifi #78 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "匝語",
        "reading": "かんご (匝)",
        "meaning": "匝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_79",
    "level": "N2",
    "kanji": "匮",
    "onyomi": "カン (n2_79)",
    "kunyomi": "ひと (n2_79)",
    "meaningUz": "N2 Iyeroglifi #79 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "匮語",
        "reading": "かんご (匮)",
        "meaning": "匮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_80",
    "level": "N2",
    "kanji": "匿",
    "onyomi": "カン (n2_80)",
    "kunyomi": "ひと (n2_80)",
    "meaningUz": "N2 Iyeroglifi #80 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "匿語",
        "reading": "かんご (匿)",
        "meaning": "匿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_81",
    "level": "N2",
    "kanji": "卐",
    "onyomi": "カン (n2_81)",
    "kunyomi": "ひと (n2_81)",
    "meaningUz": "N2 Iyeroglifi #81 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "卐語",
        "reading": "かんご (卐)",
        "meaning": "卐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_82",
    "level": "N2",
    "kanji": "卡",
    "onyomi": "カン (n2_82)",
    "kunyomi": "ひと (n2_82)",
    "meaningUz": "N2 Iyeroglifi #82 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "卡語",
        "reading": "かんご (卡)",
        "meaning": "卡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_83",
    "level": "N2",
    "kanji": "卲",
    "onyomi": "カン (n2_83)",
    "kunyomi": "ひと (n2_83)",
    "meaningUz": "N2 Iyeroglifi #83 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "卲語",
        "reading": "かんご (卲)",
        "meaning": "卲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_84",
    "level": "N2",
    "kanji": "厃",
    "onyomi": "カン (n2_84)",
    "kunyomi": "ひと (n2_84)",
    "meaningUz": "N2 Iyeroglifi #84 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "厃語",
        "reading": "かんご (厃)",
        "meaning": "厃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_85",
    "level": "N2",
    "kanji": "厔",
    "onyomi": "カン (n2_85)",
    "kunyomi": "ひと (n2_85)",
    "meaningUz": "N2 Iyeroglifi #85 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "厔語",
        "reading": "かんご (厔)",
        "meaning": "厔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_86",
    "level": "N2",
    "kanji": "厥",
    "onyomi": "カン (n2_86)",
    "kunyomi": "ひと (n2_86)",
    "meaningUz": "N2 Iyeroglifi #86 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "厥語",
        "reading": "かんご (厥)",
        "meaning": "厥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_87",
    "level": "N2",
    "kanji": "厶",
    "onyomi": "カン (n2_87)",
    "kunyomi": "ひと (n2_87)",
    "meaningUz": "N2 Iyeroglifi #87 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "厶語",
        "reading": "かんご (厶)",
        "meaning": "厶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_88",
    "level": "N2",
    "kanji": "叇",
    "onyomi": "カン (n2_88)",
    "kunyomi": "ひと (n2_88)",
    "meaningUz": "N2 Iyeroglifi #88 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "叇語",
        "reading": "かんご (叇)",
        "meaning": "叇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_89",
    "level": "N2",
    "kanji": "变",
    "onyomi": "カン (n2_89)",
    "kunyomi": "ひと (n2_89)",
    "meaningUz": "N2 Iyeroglifi #89 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "变語",
        "reading": "かんご (变)",
        "meaning": "变 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_90",
    "level": "N2",
    "kanji": "叩",
    "onyomi": "カン (n2_90)",
    "kunyomi": "ひと (n2_90)",
    "meaningUz": "N2 Iyeroglifi #90 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "叩語",
        "reading": "かんご (叩)",
        "meaning": "叩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_91",
    "level": "N2",
    "kanji": "叺",
    "onyomi": "カン (n2_91)",
    "kunyomi": "ひと (n2_91)",
    "meaningUz": "N2 Iyeroglifi #91 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "叺語",
        "reading": "かんご (叺)",
        "meaning": "叺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_92",
    "level": "N2",
    "kanji": "吋",
    "onyomi": "カン (n2_92)",
    "kunyomi": "ひと (n2_92)",
    "meaningUz": "N2 Iyeroglifi #92 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "吋語",
        "reading": "かんご (吋)",
        "meaning": "吋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_93",
    "level": "N2",
    "kanji": "吜",
    "onyomi": "カン (n2_93)",
    "kunyomi": "ひと (n2_93)",
    "meaningUz": "N2 Iyeroglifi #93 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "吜語",
        "reading": "かんご (吜)",
        "meaning": "吜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_94",
    "level": "N2",
    "kanji": "吭",
    "onyomi": "カン (n2_94)",
    "kunyomi": "ひと (n2_94)",
    "meaningUz": "N2 Iyeroglifi #94 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "吭語",
        "reading": "かんご (吭)",
        "meaning": "吭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_95",
    "level": "N2",
    "kanji": "吾",
    "onyomi": "カン (n2_95)",
    "kunyomi": "ひと (n2_95)",
    "meaningUz": "N2 Iyeroglifi #95 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "吾語",
        "reading": "かんご (吾)",
        "meaning": "吾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_96",
    "level": "N2",
    "kanji": "呏",
    "onyomi": "カン (n2_96)",
    "kunyomi": "ひと (n2_96)",
    "meaningUz": "N2 Iyeroglifi #96 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "呏語",
        "reading": "かんご (呏)",
        "meaning": "呏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_97",
    "level": "N2",
    "kanji": "呠",
    "onyomi": "カン (n2_97)",
    "kunyomi": "ひと (n2_97)",
    "meaningUz": "N2 Iyeroglifi #97 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "呠語",
        "reading": "かんご (呠)",
        "meaning": "呠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_98",
    "level": "N2",
    "kanji": "呱",
    "onyomi": "カン (n2_98)",
    "kunyomi": "ひと (n2_98)",
    "meaningUz": "N2 Iyeroglifi #98 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "呱語",
        "reading": "かんご (呱)",
        "meaning": "呱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_99",
    "level": "N2",
    "kanji": "咂",
    "onyomi": "カン (n2_99)",
    "kunyomi": "ひと (n2_99)",
    "meaningUz": "N2 Iyeroglifi #99 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "咂語",
        "reading": "かんご (咂)",
        "meaning": "咂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_100",
    "level": "N2",
    "kanji": "咓",
    "onyomi": "カン (n2_100)",
    "kunyomi": "ひと (n2_100)",
    "meaningUz": "N2 Iyeroglifi #100 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "咓語",
        "reading": "かんご (咓)",
        "meaning": "咓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_101",
    "level": "N2",
    "kanji": "咤",
    "onyomi": "カン (n2_101)",
    "kunyomi": "ひと (n2_101)",
    "meaningUz": "N2 Iyeroglifi #101 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "咤語",
        "reading": "かんご (咤)",
        "meaning": "咤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_102",
    "level": "N2",
    "kanji": "咵",
    "onyomi": "カン (n2_102)",
    "kunyomi": "ひと (n2_102)",
    "meaningUz": "N2 Iyeroglifi #102 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "咵語",
        "reading": "かんご (咵)",
        "meaning": "咵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_103",
    "level": "N2",
    "kanji": "哆",
    "onyomi": "カン (n2_103)",
    "kunyomi": "ひと (n2_103)",
    "meaningUz": "N2 Iyeroglifi #103 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "哆語",
        "reading": "かんご (哆)",
        "meaning": "哆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_104",
    "level": "N2",
    "kanji": "哗",
    "onyomi": "カン (n2_104)",
    "kunyomi": "ひと (n2_104)",
    "meaningUz": "N2 Iyeroglifi #104 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "哗語",
        "reading": "かんご (哗)",
        "meaning": "哗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_105",
    "level": "N2",
    "kanji": "哨",
    "onyomi": "カン (n2_105)",
    "kunyomi": "ひと (n2_105)",
    "meaningUz": "N2 Iyeroglifi #105 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "哨語",
        "reading": "かんご (哨)",
        "meaning": "哨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_106",
    "level": "N2",
    "kanji": "哹",
    "onyomi": "カン (n2_106)",
    "kunyomi": "ひと (n2_106)",
    "meaningUz": "N2 Iyeroglifi #106 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "哹語",
        "reading": "かんご (哹)",
        "meaning": "哹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_107",
    "level": "N2",
    "kanji": "唊",
    "onyomi": "カン (n2_107)",
    "kunyomi": "ひと (n2_107)",
    "meaningUz": "N2 Iyeroglifi #107 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "唊語",
        "reading": "かんご (唊)",
        "meaning": "唊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_108",
    "level": "N2",
    "kanji": "唛",
    "onyomi": "カン (n2_108)",
    "kunyomi": "ひと (n2_108)",
    "meaningUz": "N2 Iyeroglifi #108 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "唛語",
        "reading": "かんご (唛)",
        "meaning": "唛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_109",
    "level": "N2",
    "kanji": "唬",
    "onyomi": "カン (n2_109)",
    "kunyomi": "ひと (n2_109)",
    "meaningUz": "N2 Iyeroglifi #109 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "唬語",
        "reading": "かんご (唬)",
        "meaning": "唬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_110",
    "level": "N2",
    "kanji": "唽",
    "onyomi": "カン (n2_110)",
    "kunyomi": "ひと (n2_110)",
    "meaningUz": "N2 Iyeroglifi #110 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "唽語",
        "reading": "かんご (唽)",
        "meaning": "唽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_111",
    "level": "N2",
    "kanji": "啎",
    "onyomi": "カン (n2_111)",
    "kunyomi": "ひと (n2_111)",
    "meaningUz": "N2 Iyeroglifi #111 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "啎語",
        "reading": "かんご (啎)",
        "meaning": "啎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_112",
    "level": "N2",
    "kanji": "啟",
    "onyomi": "カン (n2_112)",
    "kunyomi": "ひと (n2_112)",
    "meaningUz": "N2 Iyeroglifi #112 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "啟語",
        "reading": "かんご (啟)",
        "meaning": "啟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_113",
    "level": "N2",
    "kanji": "啰",
    "onyomi": "カン (n2_113)",
    "kunyomi": "ひと (n2_113)",
    "meaningUz": "N2 Iyeroglifi #113 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "啰語",
        "reading": "かんご (啰)",
        "meaning": "啰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_114",
    "level": "N2",
    "kanji": "喁",
    "onyomi": "カン (n2_114)",
    "kunyomi": "ひと (n2_114)",
    "meaningUz": "N2 Iyeroglifi #114 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "喁語",
        "reading": "かんご (喁)",
        "meaning": "喁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_115",
    "level": "N2",
    "kanji": "喒",
    "onyomi": "カン (n2_115)",
    "kunyomi": "ひと (n2_115)",
    "meaningUz": "N2 Iyeroglifi #115 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "喒語",
        "reading": "かんご (喒)",
        "meaning": "喒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_116",
    "level": "N2",
    "kanji": "喣",
    "onyomi": "カン (n2_116)",
    "kunyomi": "ひと (n2_116)",
    "meaningUz": "N2 Iyeroglifi #116 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "喣語",
        "reading": "かんご (喣)",
        "meaning": "喣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_117",
    "level": "N2",
    "kanji": "喴",
    "onyomi": "カン (n2_117)",
    "kunyomi": "ひと (n2_117)",
    "meaningUz": "N2 Iyeroglifi #117 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "喴語",
        "reading": "かんご (喴)",
        "meaning": "喴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_118",
    "level": "N2",
    "kanji": "嗅",
    "onyomi": "カン (n2_118)",
    "kunyomi": "ひと (n2_118)",
    "meaningUz": "N2 Iyeroglifi #118 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嗅語",
        "reading": "かんご (嗅)",
        "meaning": "嗅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_119",
    "level": "N2",
    "kanji": "嗖",
    "onyomi": "カン (n2_119)",
    "kunyomi": "ひと (n2_119)",
    "meaningUz": "N2 Iyeroglifi #119 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嗖語",
        "reading": "かんご (嗖)",
        "meaning": "嗖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_120",
    "level": "N2",
    "kanji": "嗧",
    "onyomi": "カン (n2_120)",
    "kunyomi": "ひと (n2_120)",
    "meaningUz": "N2 Iyeroglifi #120 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嗧語",
        "reading": "かんご (嗧)",
        "meaning": "嗧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_121",
    "level": "N2",
    "kanji": "嗸",
    "onyomi": "カン (n2_121)",
    "kunyomi": "ひと (n2_121)",
    "meaningUz": "N2 Iyeroglifi #121 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嗸語",
        "reading": "かんご (嗸)",
        "meaning": "嗸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_122",
    "level": "N2",
    "kanji": "嘉",
    "onyomi": "カン (n2_122)",
    "kunyomi": "ひと (n2_122)",
    "meaningUz": "N2 Iyeroglifi #122 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嘉語",
        "reading": "かんご (嘉)",
        "meaning": "嘉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_123",
    "level": "N2",
    "kanji": "嘚",
    "onyomi": "カン (n2_123)",
    "kunyomi": "ひと (n2_123)",
    "meaningUz": "N2 Iyeroglifi #123 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嘚語",
        "reading": "かんご (嘚)",
        "meaning": "嘚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_124",
    "level": "N2",
    "kanji": "嘫",
    "onyomi": "カン (n2_124)",
    "kunyomi": "ひと (n2_124)",
    "meaningUz": "N2 Iyeroglifi #124 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嘫語",
        "reading": "かんご (嘫)",
        "meaning": "嘫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_125",
    "level": "N2",
    "kanji": "嘼",
    "onyomi": "カン (n2_125)",
    "kunyomi": "ひと (n2_125)",
    "meaningUz": "N2 Iyeroglifi #125 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嘼語",
        "reading": "かんご (嘼)",
        "meaning": "嘼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_126",
    "level": "N2",
    "kanji": "噍",
    "onyomi": "カン (n2_126)",
    "kunyomi": "ひと (n2_126)",
    "meaningUz": "N2 Iyeroglifi #126 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "噍語",
        "reading": "かんご (噍)",
        "meaning": "噍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_127",
    "level": "N2",
    "kanji": "噞",
    "onyomi": "カン (n2_127)",
    "kunyomi": "ひと (n2_127)",
    "meaningUz": "N2 Iyeroglifi #127 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "噞語",
        "reading": "かんご (噞)",
        "meaning": "噞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_128",
    "level": "N2",
    "kanji": "噯",
    "onyomi": "カン (n2_128)",
    "kunyomi": "ひと (n2_128)",
    "meaningUz": "N2 Iyeroglifi #128 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "噯語",
        "reading": "かんご (噯)",
        "meaning": "噯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_129",
    "level": "N2",
    "kanji": "嚀",
    "onyomi": "カン (n2_129)",
    "kunyomi": "ひと (n2_129)",
    "meaningUz": "N2 Iyeroglifi #129 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嚀語",
        "reading": "かんご (嚀)",
        "meaning": "嚀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_130",
    "level": "N2",
    "kanji": "嚑",
    "onyomi": "カン (n2_130)",
    "kunyomi": "ひと (n2_130)",
    "meaningUz": "N2 Iyeroglifi #130 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嚑語",
        "reading": "かんご (嚑)",
        "meaning": "嚑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_131",
    "level": "N2",
    "kanji": "嚢",
    "onyomi": "カン (n2_131)",
    "kunyomi": "ひと (n2_131)",
    "meaningUz": "N2 Iyeroglifi #131 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嚢語",
        "reading": "かんご (嚢)",
        "meaning": "嚢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_132",
    "level": "N2",
    "kanji": "嚳",
    "onyomi": "カン (n2_132)",
    "kunyomi": "ひと (n2_132)",
    "meaningUz": "N2 Iyeroglifi #132 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嚳語",
        "reading": "かんご (嚳)",
        "meaning": "嚳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_133",
    "level": "N2",
    "kanji": "囄",
    "onyomi": "カン (n2_133)",
    "kunyomi": "ひと (n2_133)",
    "meaningUz": "N2 Iyeroglifi #133 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "囄語",
        "reading": "かんご (囄)",
        "meaning": "囄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_134",
    "level": "N2",
    "kanji": "囕",
    "onyomi": "カン (n2_134)",
    "kunyomi": "ひと (n2_134)",
    "meaningUz": "N2 Iyeroglifi #134 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "囕語",
        "reading": "かんご (囕)",
        "meaning": "囕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_135",
    "level": "N2",
    "kanji": "囦",
    "onyomi": "カン (n2_135)",
    "kunyomi": "ひと (n2_135)",
    "meaningUz": "N2 Iyeroglifi #135 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "囦語",
        "reading": "かんご (囦)",
        "meaning": "囦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_136",
    "level": "N2",
    "kanji": "囷",
    "onyomi": "カン (n2_136)",
    "kunyomi": "ひと (n2_136)",
    "meaningUz": "N2 Iyeroglifi #136 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "囷語",
        "reading": "かんご (囷)",
        "meaning": "囷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_137",
    "level": "N2",
    "kanji": "圈",
    "onyomi": "カン (n2_137)",
    "kunyomi": "ひと (n2_137)",
    "meaningUz": "N2 Iyeroglifi #137 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "圈語",
        "reading": "かんご (圈)",
        "meaning": "圈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_138",
    "level": "N2",
    "kanji": "圙",
    "onyomi": "カン (n2_138)",
    "kunyomi": "ひと (n2_138)",
    "meaningUz": "N2 Iyeroglifi #138 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "圙語",
        "reading": "かんご (圙)",
        "meaning": "圙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_139",
    "level": "N2",
    "kanji": "圪",
    "onyomi": "カン (n2_139)",
    "kunyomi": "ひと (n2_139)",
    "meaningUz": "N2 Iyeroglifi #139 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "圪語",
        "reading": "かんご (圪)",
        "meaning": "圪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_140",
    "level": "N2",
    "kanji": "圻",
    "onyomi": "カン (n2_140)",
    "kunyomi": "ひと (n2_140)",
    "meaningUz": "N2 Iyeroglifi #140 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "圻語",
        "reading": "かんご (圻)",
        "meaning": "圻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_141",
    "level": "N2",
    "kanji": "坌",
    "onyomi": "カン (n2_141)",
    "kunyomi": "ひと (n2_141)",
    "meaningUz": "N2 Iyeroglifi #141 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "坌語",
        "reading": "かんご (坌)",
        "meaning": "坌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_142",
    "level": "N2",
    "kanji": "坝",
    "onyomi": "カン (n2_142)",
    "kunyomi": "ひと (n2_142)",
    "meaningUz": "N2 Iyeroglifi #142 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "坝語",
        "reading": "かんご (坝)",
        "meaning": "坝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_143",
    "level": "N2",
    "kanji": "坮",
    "onyomi": "カン (n2_143)",
    "kunyomi": "ひと (n2_143)",
    "meaningUz": "N2 Iyeroglifi #143 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "坮語",
        "reading": "かんご (坮)",
        "meaning": "坮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_144",
    "level": "N2",
    "kanji": "坿",
    "onyomi": "カン (n2_144)",
    "kunyomi": "ひと (n2_144)",
    "meaningUz": "N2 Iyeroglifi #144 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "坿語",
        "reading": "かんご (坿)",
        "meaning": "坿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_145",
    "level": "N2",
    "kanji": "垐",
    "onyomi": "カン (n2_145)",
    "kunyomi": "ひと (n2_145)",
    "meaningUz": "N2 Iyeroglifi #145 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "垐語",
        "reading": "かんご (垐)",
        "meaning": "垐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_146",
    "level": "N2",
    "kanji": "垡",
    "onyomi": "カン (n2_146)",
    "kunyomi": "ひと (n2_146)",
    "meaningUz": "N2 Iyeroglifi #146 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "垡語",
        "reading": "かんご (垡)",
        "meaning": "垡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_147",
    "level": "N2",
    "kanji": "垲",
    "onyomi": "カン (n2_147)",
    "kunyomi": "ひと (n2_147)",
    "meaningUz": "N2 Iyeroglifi #147 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "垲語",
        "reading": "かんご (垲)",
        "meaning": "垲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_148",
    "level": "N2",
    "kanji": "埃",
    "onyomi": "カン (n2_148)",
    "kunyomi": "ひと (n2_148)",
    "meaningUz": "N2 Iyeroglifi #148 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "埃語",
        "reading": "かんご (埃)",
        "meaning": "埃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_149",
    "level": "N2",
    "kanji": "埔",
    "onyomi": "カン (n2_149)",
    "kunyomi": "ひと (n2_149)",
    "meaningUz": "N2 Iyeroglifi #149 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "埔語",
        "reading": "かんご (埔)",
        "meaning": "埔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_150",
    "level": "N2",
    "kanji": "埥",
    "onyomi": "カン (n2_150)",
    "kunyomi": "ひと (n2_150)",
    "meaningUz": "N2 Iyeroglifi #150 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "埥語",
        "reading": "かんご (埥)",
        "meaning": "埥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_151",
    "level": "N2",
    "kanji": "埶",
    "onyomi": "カン (n2_151)",
    "kunyomi": "ひと (n2_151)",
    "meaningUz": "N2 Iyeroglifi #151 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "埶語",
        "reading": "かんご (埶)",
        "meaning": "埶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_152",
    "level": "N2",
    "kanji": "堇",
    "onyomi": "カン (n2_152)",
    "kunyomi": "ひと (n2_152)",
    "meaningUz": "N2 Iyeroglifi #152 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "堇語",
        "reading": "かんご (堇)",
        "meaning": "堇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_153",
    "level": "N2",
    "kanji": "堘",
    "onyomi": "カン (n2_153)",
    "kunyomi": "ひと (n2_153)",
    "meaningUz": "N2 Iyeroglifi #153 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "堘語",
        "reading": "かんご (堘)",
        "meaning": "堘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_154",
    "level": "N2",
    "kanji": "堩",
    "onyomi": "カン (n2_154)",
    "kunyomi": "ひと (n2_154)",
    "meaningUz": "N2 Iyeroglifi #154 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "堩語",
        "reading": "かんご (堩)",
        "meaning": "堩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_155",
    "level": "N2",
    "kanji": "堺",
    "onyomi": "カン (n2_155)",
    "kunyomi": "ひと (n2_155)",
    "meaningUz": "N2 Iyeroglifi #155 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "堺語",
        "reading": "かんご (堺)",
        "meaning": "堺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_156",
    "level": "N2",
    "kanji": "塋",
    "onyomi": "カン (n2_156)",
    "kunyomi": "ひと (n2_156)",
    "meaningUz": "N2 Iyeroglifi #156 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "塋語",
        "reading": "かんご (塋)",
        "meaning": "塋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_157",
    "level": "N2",
    "kanji": "塜",
    "onyomi": "カン (n2_157)",
    "kunyomi": "ひと (n2_157)",
    "meaningUz": "N2 Iyeroglifi #157 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "塜語",
        "reading": "かんご (塜)",
        "meaning": "塜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_158",
    "level": "N2",
    "kanji": "塭",
    "onyomi": "カン (n2_158)",
    "kunyomi": "ひと (n2_158)",
    "meaningUz": "N2 Iyeroglifi #158 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "塭語",
        "reading": "かんご (塭)",
        "meaning": "塭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_159",
    "level": "N2",
    "kanji": "塾",
    "onyomi": "カン (n2_159)",
    "kunyomi": "ひと (n2_159)",
    "meaningUz": "N2 Iyeroglifi #159 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "塾語",
        "reading": "かんご (塾)",
        "meaning": "塾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_160",
    "level": "N2",
    "kanji": "墏",
    "onyomi": "カン (n2_160)",
    "kunyomi": "ひと (n2_160)",
    "meaningUz": "N2 Iyeroglifi #160 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "墏語",
        "reading": "かんご (墏)",
        "meaning": "墏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_161",
    "level": "N2",
    "kanji": "墠",
    "onyomi": "カン (n2_161)",
    "kunyomi": "ひと (n2_161)",
    "meaningUz": "N2 Iyeroglifi #161 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "墠語",
        "reading": "かんご (墠)",
        "meaning": "墠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_162",
    "level": "N2",
    "kanji": "墱",
    "onyomi": "カン (n2_162)",
    "kunyomi": "ひと (n2_162)",
    "meaningUz": "N2 Iyeroglifi #162 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "墱語",
        "reading": "かんご (墱)",
        "meaning": "墱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_163",
    "level": "N2",
    "kanji": "壂",
    "onyomi": "カン (n2_163)",
    "kunyomi": "ひと (n2_163)",
    "meaningUz": "N2 Iyeroglifi #163 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "壂語",
        "reading": "かんご (壂)",
        "meaning": "壂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_164",
    "level": "N2",
    "kanji": "壓",
    "onyomi": "カン (n2_164)",
    "kunyomi": "ひと (n2_164)",
    "meaningUz": "N2 Iyeroglifi #164 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "壓語",
        "reading": "かんご (壓)",
        "meaning": "壓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_165",
    "level": "N2",
    "kanji": "壤",
    "onyomi": "カン (n2_165)",
    "kunyomi": "ひと (n2_165)",
    "meaningUz": "N2 Iyeroglifi #165 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "壤語",
        "reading": "かんご (壤)",
        "meaning": "壤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_166",
    "level": "N2",
    "kanji": "壵",
    "onyomi": "カン (n2_166)",
    "kunyomi": "ひと (n2_166)",
    "meaningUz": "N2 Iyeroglifi #166 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "壵語",
        "reading": "かんご (壵)",
        "meaning": "壵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_167",
    "level": "N2",
    "kanji": "夆",
    "onyomi": "カン (n2_167)",
    "kunyomi": "ひと (n2_167)",
    "meaningUz": "N2 Iyeroglifi #167 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "夆語",
        "reading": "かんご (夆)",
        "meaning": "夆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_168",
    "level": "N2",
    "kanji": "夗",
    "onyomi": "カン (n2_168)",
    "kunyomi": "ひと (n2_168)",
    "meaningUz": "N2 Iyeroglifi #168 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "夗語",
        "reading": "かんご (夗)",
        "meaning": "夗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_169",
    "level": "N2",
    "kanji": "夨",
    "onyomi": "カン (n2_169)",
    "kunyomi": "ひと (n2_169)",
    "meaningUz": "N2 Iyeroglifi #169 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "夨語",
        "reading": "かんご (夨)",
        "meaning": "夨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_170",
    "level": "N2",
    "kanji": "夹",
    "onyomi": "カン (n2_170)",
    "kunyomi": "ひと (n2_170)",
    "meaningUz": "N2 Iyeroglifi #170 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "夹語",
        "reading": "かんご (夹)",
        "meaning": "夹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_171",
    "level": "N2",
    "kanji": "奊",
    "onyomi": "カン (n2_171)",
    "kunyomi": "ひと (n2_171)",
    "meaningUz": "N2 Iyeroglifi #171 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "奊語",
        "reading": "かんご (奊)",
        "meaning": "奊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_172",
    "level": "N2",
    "kanji": "奛",
    "onyomi": "カン (n2_172)",
    "kunyomi": "ひと (n2_172)",
    "meaningUz": "N2 Iyeroglifi #172 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "奛語",
        "reading": "かんご (奛)",
        "meaning": "奛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_173",
    "level": "N2",
    "kanji": "奬",
    "onyomi": "カン (n2_173)",
    "kunyomi": "ひと (n2_173)",
    "meaningUz": "N2 Iyeroglifi #173 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "奬語",
        "reading": "かんご (奬)",
        "meaning": "奬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_174",
    "level": "N2",
    "kanji": "好",
    "onyomi": "カン (n2_174)",
    "kunyomi": "ひと (n2_174)",
    "meaningUz": "N2 Iyeroglifi #174 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "好語",
        "reading": "かんご (好)",
        "meaning": "好 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_175",
    "level": "N2",
    "kanji": "妎",
    "onyomi": "カン (n2_175)",
    "kunyomi": "ひと (n2_175)",
    "meaningUz": "N2 Iyeroglifi #175 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "妎語",
        "reading": "かんご (妎)",
        "meaning": "妎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_176",
    "level": "N2",
    "kanji": "妟",
    "onyomi": "カン (n2_176)",
    "kunyomi": "ひと (n2_176)",
    "meaningUz": "N2 Iyeroglifi #176 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "妟語",
        "reading": "かんご (妟)",
        "meaning": "妟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_177",
    "level": "N2",
    "kanji": "妰",
    "onyomi": "カン (n2_177)",
    "kunyomi": "ひと (n2_177)",
    "meaningUz": "N2 Iyeroglifi #177 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "妰語",
        "reading": "かんご (妰)",
        "meaning": "妰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_178",
    "level": "N2",
    "kanji": "姁",
    "onyomi": "カン (n2_178)",
    "kunyomi": "ひと (n2_178)",
    "meaningUz": "N2 Iyeroglifi #178 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "姁語",
        "reading": "かんご (姁)",
        "meaning": "姁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_179",
    "level": "N2",
    "kanji": "姒",
    "onyomi": "カン (n2_179)",
    "kunyomi": "ひと (n2_179)",
    "meaningUz": "N2 Iyeroglifi #179 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "姒語",
        "reading": "かんご (姒)",
        "meaning": "姒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_180",
    "level": "N2",
    "kanji": "姣",
    "onyomi": "カン (n2_180)",
    "kunyomi": "ひと (n2_180)",
    "meaningUz": "N2 Iyeroglifi #180 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "姣語",
        "reading": "かんご (姣)",
        "meaning": "姣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_181",
    "level": "N2",
    "kanji": "姴",
    "onyomi": "カン (n2_181)",
    "kunyomi": "ひと (n2_181)",
    "meaningUz": "N2 Iyeroglifi #181 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "姴語",
        "reading": "かんご (姴)",
        "meaning": "姴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_182",
    "level": "N2",
    "kanji": "娅",
    "onyomi": "カン (n2_182)",
    "kunyomi": "ひと (n2_182)",
    "meaningUz": "N2 Iyeroglifi #182 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "娅語",
        "reading": "かんご (娅)",
        "meaning": "娅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_183",
    "level": "N2",
    "kanji": "娖",
    "onyomi": "カン (n2_183)",
    "kunyomi": "ひと (n2_183)",
    "meaningUz": "N2 Iyeroglifi #183 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "娖語",
        "reading": "かんご (娖)",
        "meaning": "娖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_184",
    "level": "N2",
    "kanji": "娧",
    "onyomi": "カン (n2_184)",
    "kunyomi": "ひと (n2_184)",
    "meaningUz": "N2 Iyeroglifi #184 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "娧語",
        "reading": "かんご (娧)",
        "meaning": "娧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_185",
    "level": "N2",
    "kanji": "娸",
    "onyomi": "カン (n2_185)",
    "kunyomi": "ひと (n2_185)",
    "meaningUz": "N2 Iyeroglifi #185 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "娸語",
        "reading": "かんご (娸)",
        "meaning": "娸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_186",
    "level": "N2",
    "kanji": "婉",
    "onyomi": "カン (n2_186)",
    "kunyomi": "ひと (n2_186)",
    "meaningUz": "N2 Iyeroglifi #186 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "婉語",
        "reading": "かんご (婉)",
        "meaning": "婉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_187",
    "level": "N2",
    "kanji": "婚",
    "onyomi": "カン (n2_187)",
    "kunyomi": "ひと (n2_187)",
    "meaningUz": "N2 Iyeroglifi #187 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "婚語",
        "reading": "かんご (婚)",
        "meaning": "婚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_188",
    "level": "N2",
    "kanji": "婫",
    "onyomi": "カン (n2_188)",
    "kunyomi": "ひと (n2_188)",
    "meaningUz": "N2 Iyeroglifi #188 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "婫語",
        "reading": "かんご (婫)",
        "meaning": "婫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_189",
    "level": "N2",
    "kanji": "婼",
    "onyomi": "カン (n2_189)",
    "kunyomi": "ひと (n2_189)",
    "meaningUz": "N2 Iyeroglifi #189 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "婼語",
        "reading": "かんご (婼)",
        "meaning": "婼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_190",
    "level": "N2",
    "kanji": "媍",
    "onyomi": "カン (n2_190)",
    "kunyomi": "ひと (n2_190)",
    "meaningUz": "N2 Iyeroglifi #190 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "媍語",
        "reading": "かんご (媍)",
        "meaning": "媍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_191",
    "level": "N2",
    "kanji": "媞",
    "onyomi": "カン (n2_191)",
    "kunyomi": "ひと (n2_191)",
    "meaningUz": "N2 Iyeroglifi #191 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "媞語",
        "reading": "かんご (媞)",
        "meaning": "媞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_192",
    "level": "N2",
    "kanji": "媯",
    "onyomi": "カン (n2_192)",
    "kunyomi": "ひと (n2_192)",
    "meaningUz": "N2 Iyeroglifi #192 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "媯語",
        "reading": "かんご (媯)",
        "meaning": "媯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_193",
    "level": "N2",
    "kanji": "嫀",
    "onyomi": "カン (n2_193)",
    "kunyomi": "ひと (n2_193)",
    "meaningUz": "N2 Iyeroglifi #193 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嫀語",
        "reading": "かんご (嫀)",
        "meaning": "嫀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_194",
    "level": "N2",
    "kanji": "嫑",
    "onyomi": "カン (n2_194)",
    "kunyomi": "ひと (n2_194)",
    "meaningUz": "N2 Iyeroglifi #194 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嫑語",
        "reading": "かんご (嫑)",
        "meaning": "嫑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_195",
    "level": "N2",
    "kanji": "嫢",
    "onyomi": "カン (n2_195)",
    "kunyomi": "ひと (n2_195)",
    "meaningUz": "N2 Iyeroglifi #195 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嫢語",
        "reading": "かんご (嫢)",
        "meaning": "嫢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_196",
    "level": "N2",
    "kanji": "嫳",
    "onyomi": "カン (n2_196)",
    "kunyomi": "ひと (n2_196)",
    "meaningUz": "N2 Iyeroglifi #196 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嫳語",
        "reading": "かんご (嫳)",
        "meaning": "嫳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_197",
    "level": "N2",
    "kanji": "嬄",
    "onyomi": "カン (n2_197)",
    "kunyomi": "ひと (n2_197)",
    "meaningUz": "N2 Iyeroglifi #197 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嬄語",
        "reading": "かんご (嬄)",
        "meaning": "嬄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_198",
    "level": "N2",
    "kanji": "嬕",
    "onyomi": "カン (n2_198)",
    "kunyomi": "ひと (n2_198)",
    "meaningUz": "N2 Iyeroglifi #198 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嬕語",
        "reading": "かんご (嬕)",
        "meaning": "嬕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_199",
    "level": "N2",
    "kanji": "嬦",
    "onyomi": "カン (n2_199)",
    "kunyomi": "ひと (n2_199)",
    "meaningUz": "N2 Iyeroglifi #199 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嬦語",
        "reading": "かんご (嬦)",
        "meaning": "嬦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_200",
    "level": "N2",
    "kanji": "嬷",
    "onyomi": "カン (n2_200)",
    "kunyomi": "ひと (n2_200)",
    "meaningUz": "N2 Iyeroglifi #200 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嬷語",
        "reading": "かんご (嬷)",
        "meaning": "嬷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_201",
    "level": "N2",
    "kanji": "孈",
    "onyomi": "カン (n2_201)",
    "kunyomi": "ひと (n2_201)",
    "meaningUz": "N2 Iyeroglifi #201 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "孈語",
        "reading": "かんご (孈)",
        "meaning": "孈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_202",
    "level": "N2",
    "kanji": "孙",
    "onyomi": "カン (n2_202)",
    "kunyomi": "ひと (n2_202)",
    "meaningUz": "N2 Iyeroglifi #202 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "孙語",
        "reading": "かんご (孙)",
        "meaning": "孙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_203",
    "level": "N2",
    "kanji": "孪",
    "onyomi": "カン (n2_203)",
    "kunyomi": "ひと (n2_203)",
    "meaningUz": "N2 Iyeroglifi #203 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "孪語",
        "reading": "かんご (孪)",
        "meaning": "孪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_204",
    "level": "N2",
    "kanji": "孻",
    "onyomi": "カン (n2_204)",
    "kunyomi": "ひと (n2_204)",
    "meaningUz": "N2 Iyeroglifi #204 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "孻語",
        "reading": "かんご (孻)",
        "meaning": "孻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_205",
    "level": "N2",
    "kanji": "完",
    "onyomi": "カン (n2_205)",
    "kunyomi": "ひと (n2_205)",
    "meaningUz": "N2 Iyeroglifi #205 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "完語",
        "reading": "かんご (完)",
        "meaning": "完 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_206",
    "level": "N2",
    "kanji": "宝",
    "onyomi": "カン (n2_206)",
    "kunyomi": "ひと (n2_206)",
    "meaningUz": "N2 Iyeroglifi #206 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "宝語",
        "reading": "かんご (宝)",
        "meaning": "宝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_207",
    "level": "N2",
    "kanji": "宮",
    "onyomi": "カン (n2_207)",
    "kunyomi": "ひと (n2_207)",
    "meaningUz": "N2 Iyeroglifi #207 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "宮語",
        "reading": "かんご (宮)",
        "meaning": "宮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_208",
    "level": "N2",
    "kanji": "宿",
    "onyomi": "カン (n2_208)",
    "kunyomi": "ひと (n2_208)",
    "meaningUz": "N2 Iyeroglifi #208 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "宿語",
        "reading": "かんご (宿)",
        "meaning": "宿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_209",
    "level": "N2",
    "kanji": "寐",
    "onyomi": "カン (n2_209)",
    "kunyomi": "ひと (n2_209)",
    "meaningUz": "N2 Iyeroglifi #209 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "寐語",
        "reading": "かんご (寐)",
        "meaning": "寐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_210",
    "level": "N2",
    "kanji": "寡",
    "onyomi": "カン (n2_210)",
    "kunyomi": "ひと (n2_210)",
    "meaningUz": "N2 Iyeroglifi #210 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "寡語",
        "reading": "かんご (寡)",
        "meaning": "寡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_211",
    "level": "N2",
    "kanji": "寲",
    "onyomi": "カン (n2_211)",
    "kunyomi": "ひと (n2_211)",
    "meaningUz": "N2 Iyeroglifi #211 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "寲語",
        "reading": "かんご (寲)",
        "meaning": "寲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_212",
    "level": "N2",
    "kanji": "尃",
    "onyomi": "カン (n2_212)",
    "kunyomi": "ひと (n2_212)",
    "meaningUz": "N2 Iyeroglifi #212 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "尃語",
        "reading": "かんご (尃)",
        "meaning": "尃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_213",
    "level": "N2",
    "kanji": "尔",
    "onyomi": "カン (n2_213)",
    "kunyomi": "ひと (n2_213)",
    "meaningUz": "N2 Iyeroglifi #213 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "尔語",
        "reading": "かんご (尔)",
        "meaning": "尔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_214",
    "level": "N2",
    "kanji": "尥",
    "onyomi": "カン (n2_214)",
    "kunyomi": "ひと (n2_214)",
    "meaningUz": "N2 Iyeroglifi #214 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "尥語",
        "reading": "かんご (尥)",
        "meaning": "尥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_215",
    "level": "N2",
    "kanji": "尶",
    "onyomi": "カン (n2_215)",
    "kunyomi": "ひと (n2_215)",
    "meaningUz": "N2 Iyeroglifi #215 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "尶語",
        "reading": "かんご (尶)",
        "meaning": "尶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_216",
    "level": "N2",
    "kanji": "屇",
    "onyomi": "カン (n2_216)",
    "kunyomi": "ひと (n2_216)",
    "meaningUz": "N2 Iyeroglifi #216 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "屇語",
        "reading": "かんご (屇)",
        "meaning": "屇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_217",
    "level": "N2",
    "kanji": "屘",
    "onyomi": "カン (n2_217)",
    "kunyomi": "ひと (n2_217)",
    "meaningUz": "N2 Iyeroglifi #217 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "屘語",
        "reading": "かんご (屘)",
        "meaning": "屘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_218",
    "level": "N2",
    "kanji": "屩",
    "onyomi": "カン (n2_218)",
    "kunyomi": "ひと (n2_218)",
    "meaningUz": "N2 Iyeroglifi #218 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "屩語",
        "reading": "かんご (屩)",
        "meaning": "屩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_219",
    "level": "N2",
    "kanji": "屺",
    "onyomi": "カン (n2_219)",
    "kunyomi": "ひと (n2_219)",
    "meaningUz": "N2 Iyeroglifi #219 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "屺語",
        "reading": "かんご (屺)",
        "meaning": "屺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_220",
    "level": "N2",
    "kanji": "岋",
    "onyomi": "カン (n2_220)",
    "kunyomi": "ひと (n2_220)",
    "meaningUz": "N2 Iyeroglifi #220 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "岋語",
        "reading": "かんご (岋)",
        "meaning": "岋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_221",
    "level": "N2",
    "kanji": "岜",
    "onyomi": "カン (n2_221)",
    "kunyomi": "ひと (n2_221)",
    "meaningUz": "N2 Iyeroglifi #221 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "岜語",
        "reading": "かんご (岜)",
        "meaning": "岜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_222",
    "level": "N2",
    "kanji": "岭",
    "onyomi": "カン (n2_222)",
    "kunyomi": "ひと (n2_222)",
    "meaningUz": "N2 Iyeroglifi #222 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "岭語",
        "reading": "かんご (岭)",
        "meaning": "岭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_223",
    "level": "N2",
    "kanji": "岾",
    "onyomi": "カン (n2_223)",
    "kunyomi": "ひと (n2_223)",
    "meaningUz": "N2 Iyeroglifi #223 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "岾語",
        "reading": "かんご (岾)",
        "meaning": "岾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_224",
    "level": "N2",
    "kanji": "峏",
    "onyomi": "カン (n2_224)",
    "kunyomi": "ひと (n2_224)",
    "meaningUz": "N2 Iyeroglifi #224 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "峏語",
        "reading": "かんご (峏)",
        "meaning": "峏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_225",
    "level": "N2",
    "kanji": "峠",
    "onyomi": "カン (n2_225)",
    "kunyomi": "ひと (n2_225)",
    "meaningUz": "N2 Iyeroglifi #225 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "峠語",
        "reading": "かんご (峠)",
        "meaning": "峠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_226",
    "level": "N2",
    "kanji": "峱",
    "onyomi": "カン (n2_226)",
    "kunyomi": "ひと (n2_226)",
    "meaningUz": "N2 Iyeroglifi #226 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "峱語",
        "reading": "かんご (峱)",
        "meaning": "峱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_227",
    "level": "N2",
    "kanji": "崂",
    "onyomi": "カン (n2_227)",
    "kunyomi": "ひと (n2_227)",
    "meaningUz": "N2 Iyeroglifi #227 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "崂語",
        "reading": "かんご (崂)",
        "meaning": "崂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_228",
    "level": "N2",
    "kanji": "崓",
    "onyomi": "カン (n2_228)",
    "kunyomi": "ひと (n2_228)",
    "meaningUz": "N2 Iyeroglifi #228 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "崓語",
        "reading": "かんご (崓)",
        "meaning": "崓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_229",
    "level": "N2",
    "kanji": "崤",
    "onyomi": "カン (n2_229)",
    "kunyomi": "ひと (n2_229)",
    "meaningUz": "N2 Iyeroglifi #229 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "崤語",
        "reading": "かんご (崤)",
        "meaning": "崤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_230",
    "level": "N2",
    "kanji": "崵",
    "onyomi": "カン (n2_230)",
    "kunyomi": "ひと (n2_230)",
    "meaningUz": "N2 Iyeroglifi #230 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "崵語",
        "reading": "かんご (崵)",
        "meaning": "崵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_231",
    "level": "N2",
    "kanji": "嵆",
    "onyomi": "カン (n2_231)",
    "kunyomi": "ひと (n2_231)",
    "meaningUz": "N2 Iyeroglifi #231 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "嵆語",
        "reading": "かんご (嵆)",
        "meaning": "嵆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_232",
    "level": "N2",
    "kanji": "嵗",
    "onyomi": "カン (n2_232)",
    "kunyomi": "ひと (n2_232)",
    "meaningUz": "N2 Iyeroglifi #232 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "嵗語",
        "reading": "かんご (嵗)",
        "meaning": "嵗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_233",
    "level": "N2",
    "kanji": "嵨",
    "onyomi": "カン (n2_233)",
    "kunyomi": "ひと (n2_233)",
    "meaningUz": "N2 Iyeroglifi #233 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "嵨語",
        "reading": "かんご (嵨)",
        "meaning": "嵨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_234",
    "level": "N2",
    "kanji": "嵹",
    "onyomi": "カン (n2_234)",
    "kunyomi": "ひと (n2_234)",
    "meaningUz": "N2 Iyeroglifi #234 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嵹語",
        "reading": "かんご (嵹)",
        "meaning": "嵹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_235",
    "level": "N2",
    "kanji": "嶊",
    "onyomi": "カン (n2_235)",
    "kunyomi": "ひと (n2_235)",
    "meaningUz": "N2 Iyeroglifi #235 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嶊語",
        "reading": "かんご (嶊)",
        "meaning": "嶊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_236",
    "level": "N2",
    "kanji": "嶛",
    "onyomi": "カン (n2_236)",
    "kunyomi": "ひと (n2_236)",
    "meaningUz": "N2 Iyeroglifi #236 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嶛語",
        "reading": "かんご (嶛)",
        "meaning": "嶛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_237",
    "level": "N2",
    "kanji": "嶬",
    "onyomi": "カン (n2_237)",
    "kunyomi": "ひと (n2_237)",
    "meaningUz": "N2 Iyeroglifi #237 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嶬語",
        "reading": "かんご (嶬)",
        "meaning": "嶬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_238",
    "level": "N2",
    "kanji": "嶽",
    "onyomi": "カン (n2_238)",
    "kunyomi": "ひと (n2_238)",
    "meaningUz": "N2 Iyeroglifi #238 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嶽語",
        "reading": "かんご (嶽)",
        "meaning": "嶽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_239",
    "level": "N2",
    "kanji": "巎",
    "onyomi": "カン (n2_239)",
    "kunyomi": "ひと (n2_239)",
    "meaningUz": "N2 Iyeroglifi #239 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "巎語",
        "reading": "かんご (巎)",
        "meaning": "巎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_240",
    "level": "N2",
    "kanji": "巟",
    "onyomi": "カン (n2_240)",
    "kunyomi": "ひと (n2_240)",
    "meaningUz": "N2 Iyeroglifi #240 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "巟語",
        "reading": "かんご (巟)",
        "meaning": "巟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_241",
    "level": "N2",
    "kanji": "巰",
    "onyomi": "カン (n2_241)",
    "kunyomi": "ひと (n2_241)",
    "meaningUz": "N2 Iyeroglifi #241 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "巰語",
        "reading": "かんご (巰)",
        "meaning": "巰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_242",
    "level": "N2",
    "kanji": "币",
    "onyomi": "カン (n2_242)",
    "kunyomi": "ひと (n2_242)",
    "meaningUz": "N2 Iyeroglifi #242 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "币語",
        "reading": "かんご (币)",
        "meaning": "币 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_243",
    "level": "N2",
    "kanji": "帒",
    "onyomi": "カン (n2_243)",
    "kunyomi": "ひと (n2_243)",
    "meaningUz": "N2 Iyeroglifi #243 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "帒語",
        "reading": "かんご (帒)",
        "meaning": "帒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_244",
    "level": "N2",
    "kanji": "帣",
    "onyomi": "カン (n2_244)",
    "kunyomi": "ひと (n2_244)",
    "meaningUz": "N2 Iyeroglifi #244 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "帣語",
        "reading": "かんご (帣)",
        "meaning": "帣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_245",
    "level": "N2",
    "kanji": "帴",
    "onyomi": "カン (n2_245)",
    "kunyomi": "ひと (n2_245)",
    "meaningUz": "N2 Iyeroglifi #245 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "帴語",
        "reading": "かんご (帴)",
        "meaning": "帴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_246",
    "level": "N2",
    "kanji": "幅",
    "onyomi": "カン (n2_246)",
    "kunyomi": "ひと (n2_246)",
    "meaningUz": "N2 Iyeroglifi #246 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "幅語",
        "reading": "かんご (幅)",
        "meaning": "幅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_247",
    "level": "N2",
    "kanji": "幖",
    "onyomi": "カン (n2_247)",
    "kunyomi": "ひと (n2_247)",
    "meaningUz": "N2 Iyeroglifi #247 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "幖語",
        "reading": "かんご (幖)",
        "meaning": "幖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_248",
    "level": "N2",
    "kanji": "幧",
    "onyomi": "カン (n2_248)",
    "kunyomi": "ひと (n2_248)",
    "meaningUz": "N2 Iyeroglifi #248 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "幧語",
        "reading": "かんご (幧)",
        "meaning": "幧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_249",
    "level": "N2",
    "kanji": "幸",
    "onyomi": "カン (n2_249)",
    "kunyomi": "ひと (n2_249)",
    "meaningUz": "N2 Iyeroglifi #249 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "幸語",
        "reading": "かんご (幸)",
        "meaning": "幸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_250",
    "level": "N2",
    "kanji": "庉",
    "onyomi": "カン (n2_250)",
    "kunyomi": "ひと (n2_250)",
    "meaningUz": "N2 Iyeroglifi #250 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "庉語",
        "reading": "かんご (庉)",
        "meaning": "庉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_251",
    "level": "N2",
    "kanji": "庚",
    "onyomi": "カン (n2_251)",
    "kunyomi": "ひと (n2_251)",
    "meaningUz": "N2 Iyeroglifi #251 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "庚語",
        "reading": "かんご (庚)",
        "meaning": "庚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_252",
    "level": "N2",
    "kanji": "庫",
    "onyomi": "カン (n2_252)",
    "kunyomi": "ひと (n2_252)",
    "meaningUz": "N2 Iyeroglifi #252 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "庫語",
        "reading": "かんご (庫)",
        "meaning": "庫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_253",
    "level": "N2",
    "kanji": "庼",
    "onyomi": "カン (n2_253)",
    "kunyomi": "ひと (n2_253)",
    "meaningUz": "N2 Iyeroglifi #253 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "庼語",
        "reading": "かんご (庼)",
        "meaning": "庼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_254",
    "level": "N2",
    "kanji": "廍",
    "onyomi": "カン (n2_254)",
    "kunyomi": "ひと (n2_254)",
    "meaningUz": "N2 Iyeroglifi #254 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "廍語",
        "reading": "かんご (廍)",
        "meaning": "廍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_255",
    "level": "N2",
    "kanji": "廞",
    "onyomi": "カン (n2_255)",
    "kunyomi": "ひと (n2_255)",
    "meaningUz": "N2 Iyeroglifi #255 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "廞語",
        "reading": "かんご (廞)",
        "meaning": "廞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_256",
    "level": "N2",
    "kanji": "廯",
    "onyomi": "カン (n2_256)",
    "kunyomi": "ひと (n2_256)",
    "meaningUz": "N2 Iyeroglifi #256 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "廯語",
        "reading": "かんご (廯)",
        "meaning": "廯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_257",
    "level": "N2",
    "kanji": "开",
    "onyomi": "カン (n2_257)",
    "kunyomi": "ひと (n2_257)",
    "meaningUz": "N2 Iyeroglifi #257 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "开語",
        "reading": "かんご (开)",
        "meaning": "开 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_258",
    "level": "N2",
    "kanji": "弑",
    "onyomi": "カン (n2_258)",
    "kunyomi": "ひと (n2_258)",
    "meaningUz": "N2 Iyeroglifi #258 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "弑語",
        "reading": "かんご (弑)",
        "meaning": "弑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_259",
    "level": "N2",
    "kanji": "弢",
    "onyomi": "カン (n2_259)",
    "kunyomi": "ひと (n2_259)",
    "meaningUz": "N2 Iyeroglifi #259 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "弢語",
        "reading": "かんご (弢)",
        "meaning": "弢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_260",
    "level": "N2",
    "kanji": "弳",
    "onyomi": "カン (n2_260)",
    "kunyomi": "ひと (n2_260)",
    "meaningUz": "N2 Iyeroglifi #260 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "弳語",
        "reading": "かんご (弳)",
        "meaning": "弳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_261",
    "level": "N2",
    "kanji": "彄",
    "onyomi": "カン (n2_261)",
    "kunyomi": "ひと (n2_261)",
    "meaningUz": "N2 Iyeroglifi #261 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "彄語",
        "reading": "かんご (彄)",
        "meaning": "彄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_262",
    "level": "N2",
    "kanji": "录",
    "onyomi": "カン (n2_262)",
    "kunyomi": "ひと (n2_262)",
    "meaningUz": "N2 Iyeroglifi #262 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "录語",
        "reading": "かんご (录)",
        "meaning": "录 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_263",
    "level": "N2",
    "kanji": "彦",
    "onyomi": "カン (n2_263)",
    "kunyomi": "ひと (n2_263)",
    "meaningUz": "N2 Iyeroglifi #263 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "彦語",
        "reading": "かんご (彦)",
        "meaning": "彦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_264",
    "level": "N2",
    "kanji": "彷",
    "onyomi": "カン (n2_264)",
    "kunyomi": "ひと (n2_264)",
    "meaningUz": "N2 Iyeroglifi #264 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "彷語",
        "reading": "かんご (彷)",
        "meaning": "彷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_265",
    "level": "N2",
    "kanji": "很",
    "onyomi": "カン (n2_265)",
    "kunyomi": "ひと (n2_265)",
    "meaningUz": "N2 Iyeroglifi #265 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "很語",
        "reading": "かんご (很)",
        "meaning": "很 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_266",
    "level": "N2",
    "kanji": "徙",
    "onyomi": "カン (n2_266)",
    "kunyomi": "ひと (n2_266)",
    "meaningUz": "N2 Iyeroglifi #266 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "徙語",
        "reading": "かんご (徙)",
        "meaning": "徙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_267",
    "level": "N2",
    "kanji": "循",
    "onyomi": "カン (n2_267)",
    "kunyomi": "ひと (n2_267)",
    "meaningUz": "N2 Iyeroglifi #267 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "循語",
        "reading": "かんご (循)",
        "meaning": "循 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_268",
    "level": "N2",
    "kanji": "徻",
    "onyomi": "カン (n2_268)",
    "kunyomi": "ひと (n2_268)",
    "meaningUz": "N2 Iyeroglifi #268 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "徻語",
        "reading": "かんご (徻)",
        "meaning": "徻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_269",
    "level": "N2",
    "kanji": "忌",
    "onyomi": "カン (n2_269)",
    "kunyomi": "ひと (n2_269)",
    "meaningUz": "N2 Iyeroglifi #269 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "忌語",
        "reading": "かんご (忌)",
        "meaning": "忌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_270",
    "level": "N2",
    "kanji": "忝",
    "onyomi": "カン (n2_270)",
    "kunyomi": "ひと (n2_270)",
    "meaningUz": "N2 Iyeroglifi #270 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "忝語",
        "reading": "かんご (忝)",
        "meaning": "忝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_271",
    "level": "N2",
    "kanji": "忮",
    "onyomi": "カン (n2_271)",
    "kunyomi": "ひと (n2_271)",
    "meaningUz": "N2 Iyeroglifi #271 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "忮語",
        "reading": "かんご (忮)",
        "meaning": "忮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_272",
    "level": "N2",
    "kanji": "忿",
    "onyomi": "カン (n2_272)",
    "kunyomi": "ひと (n2_272)",
    "meaningUz": "N2 Iyeroglifi #272 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "忿語",
        "reading": "かんご (忿)",
        "meaning": "忿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_273",
    "level": "N2",
    "kanji": "怐",
    "onyomi": "カン (n2_273)",
    "kunyomi": "ひと (n2_273)",
    "meaningUz": "N2 Iyeroglifi #273 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "怐語",
        "reading": "かんご (怐)",
        "meaning": "怐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_274",
    "level": "N2",
    "kanji": "怡",
    "onyomi": "カン (n2_274)",
    "kunyomi": "ひと (n2_274)",
    "meaningUz": "N2 Iyeroglifi #274 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "怡語",
        "reading": "かんご (怡)",
        "meaning": "怡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_275",
    "level": "N2",
    "kanji": "怲",
    "onyomi": "カン (n2_275)",
    "kunyomi": "ひと (n2_275)",
    "meaningUz": "N2 Iyeroglifi #275 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "怲語",
        "reading": "かんご (怲)",
        "meaning": "怲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_276",
    "level": "N2",
    "kanji": "恃",
    "onyomi": "カン (n2_276)",
    "kunyomi": "ひと (n2_276)",
    "meaningUz": "N2 Iyeroglifi #276 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "恃語",
        "reading": "かんご (恃)",
        "meaning": "恃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_277",
    "level": "N2",
    "kanji": "恔",
    "onyomi": "カン (n2_277)",
    "kunyomi": "ひと (n2_277)",
    "meaningUz": "N2 Iyeroglifi #277 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "恔語",
        "reading": "かんご (恔)",
        "meaning": "恔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_278",
    "level": "N2",
    "kanji": "恥",
    "onyomi": "カン (n2_278)",
    "kunyomi": "ひと (n2_278)",
    "meaningUz": "N2 Iyeroglifi #278 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "恥語",
        "reading": "かんご (恥)",
        "meaning": "恥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_279",
    "level": "N2",
    "kanji": "恶",
    "onyomi": "カン (n2_279)",
    "kunyomi": "ひと (n2_279)",
    "meaningUz": "N2 Iyeroglifi #279 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "恶語",
        "reading": "かんご (恶)",
        "meaning": "恶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_280",
    "level": "N2",
    "kanji": "悇",
    "onyomi": "カン (n2_280)",
    "kunyomi": "ひと (n2_280)",
    "meaningUz": "N2 Iyeroglifi #280 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "悇語",
        "reading": "かんご (悇)",
        "meaning": "悇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_281",
    "level": "N2",
    "kanji": "悘",
    "onyomi": "カン (n2_281)",
    "kunyomi": "ひと (n2_281)",
    "meaningUz": "N2 Iyeroglifi #281 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "悘語",
        "reading": "かんご (悘)",
        "meaning": "悘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_282",
    "level": "N2",
    "kanji": "悩",
    "onyomi": "カン (n2_282)",
    "kunyomi": "ひと (n2_282)",
    "meaningUz": "N2 Iyeroglifi #282 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "悩語",
        "reading": "かんご (悩)",
        "meaning": "悩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_283",
    "level": "N2",
    "kanji": "悺",
    "onyomi": "カン (n2_283)",
    "kunyomi": "ひと (n2_283)",
    "meaningUz": "N2 Iyeroglifi #283 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "悺語",
        "reading": "かんご (悺)",
        "meaning": "悺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_284",
    "level": "N2",
    "kanji": "惋",
    "onyomi": "カン (n2_284)",
    "kunyomi": "ひと (n2_284)",
    "meaningUz": "N2 Iyeroglifi #284 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "惋語",
        "reading": "かんご (惋)",
        "meaning": "惋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_285",
    "level": "N2",
    "kanji": "惜",
    "onyomi": "カン (n2_285)",
    "kunyomi": "ひと (n2_285)",
    "meaningUz": "N2 Iyeroglifi #285 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "惜語",
        "reading": "かんご (惜)",
        "meaning": "惜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_286",
    "level": "N2",
    "kanji": "惭",
    "onyomi": "カン (n2_286)",
    "kunyomi": "ひと (n2_286)",
    "meaningUz": "N2 Iyeroglifi #286 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "惭語",
        "reading": "かんご (惭)",
        "meaning": "惭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_287",
    "level": "N2",
    "kanji": "惾",
    "onyomi": "カン (n2_287)",
    "kunyomi": "ひと (n2_287)",
    "meaningUz": "N2 Iyeroglifi #287 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "惾語",
        "reading": "かんご (惾)",
        "meaning": "惾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_288",
    "level": "N2",
    "kanji": "意",
    "onyomi": "カン (n2_288)",
    "kunyomi": "ひと (n2_288)",
    "meaningUz": "N2 Iyeroglifi #288 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "意語",
        "reading": "かんご (意)",
        "meaning": "意 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_289",
    "level": "N2",
    "kanji": "愠",
    "onyomi": "カン (n2_289)",
    "kunyomi": "ひと (n2_289)",
    "meaningUz": "N2 Iyeroglifi #289 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "愠語",
        "reading": "かんご (愠)",
        "meaning": "愠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_290",
    "level": "N2",
    "kanji": "愱",
    "onyomi": "カン (n2_290)",
    "kunyomi": "ひと (n2_290)",
    "meaningUz": "N2 Iyeroglifi #290 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "愱語",
        "reading": "かんご (愱)",
        "meaning": "愱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_291",
    "level": "N2",
    "kanji": "慂",
    "onyomi": "カン (n2_291)",
    "kunyomi": "ひと (n2_291)",
    "meaningUz": "N2 Iyeroglifi #291 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "慂語",
        "reading": "かんご (慂)",
        "meaning": "慂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_292",
    "level": "N2",
    "kanji": "慓",
    "onyomi": "カン (n2_292)",
    "kunyomi": "ひと (n2_292)",
    "meaningUz": "N2 Iyeroglifi #292 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "慓語",
        "reading": "かんご (慓)",
        "meaning": "慓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_293",
    "level": "N2",
    "kanji": "慤",
    "onyomi": "カン (n2_293)",
    "kunyomi": "ひと (n2_293)",
    "meaningUz": "N2 Iyeroglifi #293 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "慤語",
        "reading": "かんご (慤)",
        "meaning": "慤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_294",
    "level": "N2",
    "kanji": "慵",
    "onyomi": "カン (n2_294)",
    "kunyomi": "ひと (n2_294)",
    "meaningUz": "N2 Iyeroglifi #294 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "慵語",
        "reading": "かんご (慵)",
        "meaning": "慵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_295",
    "level": "N2",
    "kanji": "憆",
    "onyomi": "カン (n2_295)",
    "kunyomi": "ひと (n2_295)",
    "meaningUz": "N2 Iyeroglifi #295 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "憆語",
        "reading": "かんご (憆)",
        "meaning": "憆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_296",
    "level": "N2",
    "kanji": "憗",
    "onyomi": "カン (n2_296)",
    "kunyomi": "ひと (n2_296)",
    "meaningUz": "N2 Iyeroglifi #296 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "憗語",
        "reading": "かんご (憗)",
        "meaning": "憗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_297",
    "level": "N2",
    "kanji": "憨",
    "onyomi": "カン (n2_297)",
    "kunyomi": "ひと (n2_297)",
    "meaningUz": "N2 Iyeroglifi #297 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "憨語",
        "reading": "かんご (憨)",
        "meaning": "憨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_298",
    "level": "N2",
    "kanji": "憹",
    "onyomi": "カン (n2_298)",
    "kunyomi": "ひと (n2_298)",
    "meaningUz": "N2 Iyeroglifi #298 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "憹語",
        "reading": "かんご (憹)",
        "meaning": "憹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_299",
    "level": "N2",
    "kanji": "懊",
    "onyomi": "カン (n2_299)",
    "kunyomi": "ひと (n2_299)",
    "meaningUz": "N2 Iyeroglifi #299 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "懊語",
        "reading": "かんご (懊)",
        "meaning": "懊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_300",
    "level": "N2",
    "kanji": "懛",
    "onyomi": "カン (n2_300)",
    "kunyomi": "ひと (n2_300)",
    "meaningUz": "N2 Iyeroglifi #300 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "懛語",
        "reading": "かんご (懛)",
        "meaning": "懛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_301",
    "level": "N2",
    "kanji": "懬",
    "onyomi": "カン (n2_301)",
    "kunyomi": "ひと (n2_301)",
    "meaningUz": "N2 Iyeroglifi #301 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "懬語",
        "reading": "かんご (懬)",
        "meaning": "懬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_302",
    "level": "N2",
    "kanji": "懽",
    "onyomi": "カン (n2_302)",
    "kunyomi": "ひと (n2_302)",
    "meaningUz": "N2 Iyeroglifi #302 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "懽語",
        "reading": "かんご (懽)",
        "meaning": "懽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_303",
    "level": "N2",
    "kanji": "戎",
    "onyomi": "カン (n2_303)",
    "kunyomi": "ひと (n2_303)",
    "meaningUz": "N2 Iyeroglifi #303 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "戎語",
        "reading": "かんご (戎)",
        "meaning": "戎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_304",
    "level": "N2",
    "kanji": "戟",
    "onyomi": "カン (n2_304)",
    "kunyomi": "ひと (n2_304)",
    "meaningUz": "N2 Iyeroglifi #304 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "戟語",
        "reading": "かんご (戟)",
        "meaning": "戟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_305",
    "level": "N2",
    "kanji": "戰",
    "onyomi": "カン (n2_305)",
    "kunyomi": "ひと (n2_305)",
    "meaningUz": "N2 Iyeroglifi #305 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "戰語",
        "reading": "かんご (戰)",
        "meaning": "戰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_306",
    "level": "N2",
    "kanji": "扁",
    "onyomi": "カン (n2_306)",
    "kunyomi": "ひと (n2_306)",
    "meaningUz": "N2 Iyeroglifi #306 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "扁語",
        "reading": "かんご (扁)",
        "meaning": "扁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_307",
    "level": "N2",
    "kanji": "扒",
    "onyomi": "カン (n2_307)",
    "kunyomi": "ひと (n2_307)",
    "meaningUz": "N2 Iyeroglifi #307 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "扒語",
        "reading": "かんご (扒)",
        "meaning": "扒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_308",
    "level": "N2",
    "kanji": "扣",
    "onyomi": "カン (n2_308)",
    "kunyomi": "ひと (n2_308)",
    "meaningUz": "N2 Iyeroglifi #308 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "扣語",
        "reading": "かんご (扣)",
        "meaning": "扣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_309",
    "level": "N2",
    "kanji": "扴",
    "onyomi": "カン (n2_309)",
    "kunyomi": "ひと (n2_309)",
    "meaningUz": "N2 Iyeroglifi #309 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "扴語",
        "reading": "かんご (扴)",
        "meaning": "扴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_310",
    "level": "N2",
    "kanji": "抅",
    "onyomi": "カン (n2_310)",
    "kunyomi": "ひと (n2_310)",
    "meaningUz": "N2 Iyeroglifi #310 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "抅語",
        "reading": "かんご (抅)",
        "meaning": "抅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_311",
    "level": "N2",
    "kanji": "抖",
    "onyomi": "カン (n2_311)",
    "kunyomi": "ひと (n2_311)",
    "meaningUz": "N2 Iyeroglifi #311 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "抖語",
        "reading": "かんご (抖)",
        "meaning": "抖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_312",
    "level": "N2",
    "kanji": "抧",
    "onyomi": "カン (n2_312)",
    "kunyomi": "ひと (n2_312)",
    "meaningUz": "N2 Iyeroglifi #312 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "抧語",
        "reading": "かんご (抧)",
        "meaning": "抧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_313",
    "level": "N2",
    "kanji": "抸",
    "onyomi": "カン (n2_313)",
    "kunyomi": "ひと (n2_313)",
    "meaningUz": "N2 Iyeroglifi #313 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "抸語",
        "reading": "かんご (抸)",
        "meaning": "抸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_314",
    "level": "N2",
    "kanji": "拉",
    "onyomi": "カン (n2_314)",
    "kunyomi": "ひと (n2_314)",
    "meaningUz": "N2 Iyeroglifi #314 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "拉語",
        "reading": "かんご (拉)",
        "meaning": "拉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_315",
    "level": "N2",
    "kanji": "拚",
    "onyomi": "カン (n2_315)",
    "kunyomi": "ひと (n2_315)",
    "meaningUz": "N2 Iyeroglifi #315 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "拚語",
        "reading": "かんご (拚)",
        "meaning": "拚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_316",
    "level": "N2",
    "kanji": "拫",
    "onyomi": "カン (n2_316)",
    "kunyomi": "ひと (n2_316)",
    "meaningUz": "N2 Iyeroglifi #316 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "拫語",
        "reading": "かんご (拫)",
        "meaning": "拫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_317",
    "level": "N2",
    "kanji": "拼",
    "onyomi": "カン (n2_317)",
    "kunyomi": "ひと (n2_317)",
    "meaningUz": "N2 Iyeroglifi #317 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "拼語",
        "reading": "かんご (拼)",
        "meaning": "拼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_318",
    "level": "N2",
    "kanji": "挍",
    "onyomi": "カン (n2_318)",
    "kunyomi": "ひと (n2_318)",
    "meaningUz": "N2 Iyeroglifi #318 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "挍語",
        "reading": "かんご (挍)",
        "meaning": "挍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_319",
    "level": "N2",
    "kanji": "挞",
    "onyomi": "カン (n2_319)",
    "kunyomi": "ひと (n2_319)",
    "meaningUz": "N2 Iyeroglifi #319 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "挞語",
        "reading": "かんご (挞)",
        "meaning": "挞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_320",
    "level": "N2",
    "kanji": "振",
    "onyomi": "カン (n2_320)",
    "kunyomi": "ひと (n2_320)",
    "meaningUz": "N2 Iyeroglifi #320 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "振語",
        "reading": "かんご (振)",
        "meaning": "振 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_321",
    "level": "N2",
    "kanji": "捀",
    "onyomi": "カン (n2_321)",
    "kunyomi": "ひと (n2_321)",
    "meaningUz": "N2 Iyeroglifi #321 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "捀語",
        "reading": "かんご (捀)",
        "meaning": "捀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_322",
    "level": "N2",
    "kanji": "捑",
    "onyomi": "カン (n2_322)",
    "kunyomi": "ひと (n2_322)",
    "meaningUz": "N2 Iyeroglifi #322 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "捑語",
        "reading": "かんご (捑)",
        "meaning": "捑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_323",
    "level": "N2",
    "kanji": "换",
    "onyomi": "カン (n2_323)",
    "kunyomi": "ひと (n2_323)",
    "meaningUz": "N2 Iyeroglifi #323 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "换語",
        "reading": "かんご (换)",
        "meaning": "换 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_324",
    "level": "N2",
    "kanji": "捳",
    "onyomi": "カン (n2_324)",
    "kunyomi": "ひと (n2_324)",
    "meaningUz": "N2 Iyeroglifi #324 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "捳語",
        "reading": "かんご (捳)",
        "meaning": "捳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_325",
    "level": "N2",
    "kanji": "掄",
    "onyomi": "カン (n2_325)",
    "kunyomi": "ひと (n2_325)",
    "meaningUz": "N2 Iyeroglifi #325 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "掄語",
        "reading": "かんご (掄)",
        "meaning": "掄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_326",
    "level": "N2",
    "kanji": "掕",
    "onyomi": "カン (n2_326)",
    "kunyomi": "ひと (n2_326)",
    "meaningUz": "N2 Iyeroglifi #326 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "掕語",
        "reading": "かんご (掕)",
        "meaning": "掕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_327",
    "level": "N2",
    "kanji": "掦",
    "onyomi": "カン (n2_327)",
    "kunyomi": "ひと (n2_327)",
    "meaningUz": "N2 Iyeroglifi #327 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "掦語",
        "reading": "かんご (掦)",
        "meaning": "掦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_328",
    "level": "N2",
    "kanji": "掷",
    "onyomi": "カン (n2_328)",
    "kunyomi": "ひと (n2_328)",
    "meaningUz": "N2 Iyeroglifi #328 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "掷語",
        "reading": "かんご (掷)",
        "meaning": "掷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_329",
    "level": "N2",
    "kanji": "揈",
    "onyomi": "カン (n2_329)",
    "kunyomi": "ひと (n2_329)",
    "meaningUz": "N2 Iyeroglifi #329 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "揈語",
        "reading": "かんご (揈)",
        "meaning": "揈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_330",
    "level": "N2",
    "kanji": "揙",
    "onyomi": "カン (n2_330)",
    "kunyomi": "ひと (n2_330)",
    "meaningUz": "N2 Iyeroglifi #330 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "揙語",
        "reading": "かんご (揙)",
        "meaning": "揙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_331",
    "level": "N2",
    "kanji": "揪",
    "onyomi": "カン (n2_331)",
    "kunyomi": "ひと (n2_331)",
    "meaningUz": "N2 Iyeroglifi #331 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "揪語",
        "reading": "かんご (揪)",
        "meaning": "揪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_332",
    "level": "N2",
    "kanji": "揻",
    "onyomi": "カン (n2_332)",
    "kunyomi": "ひと (n2_332)",
    "meaningUz": "N2 Iyeroglifi #332 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "揻語",
        "reading": "かんご (揻)",
        "meaning": "揻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_333",
    "level": "N2",
    "kanji": "搌",
    "onyomi": "カン (n2_333)",
    "kunyomi": "ひと (n2_333)",
    "meaningUz": "N2 Iyeroglifi #333 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "搌語",
        "reading": "かんご (搌)",
        "meaning": "搌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_334",
    "level": "N2",
    "kanji": "搝",
    "onyomi": "カン (n2_334)",
    "kunyomi": "ひと (n2_334)",
    "meaningUz": "N2 Iyeroglifi #334 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "搝語",
        "reading": "かんご (搝)",
        "meaning": "搝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_335",
    "level": "N2",
    "kanji": "搮",
    "onyomi": "カン (n2_335)",
    "kunyomi": "ひと (n2_335)",
    "meaningUz": "N2 Iyeroglifi #335 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "搮語",
        "reading": "かんご (搮)",
        "meaning": "搮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_336",
    "level": "N2",
    "kanji": "搿",
    "onyomi": "カン (n2_336)",
    "kunyomi": "ひと (n2_336)",
    "meaningUz": "N2 Iyeroglifi #336 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "搿語",
        "reading": "かんご (搿)",
        "meaning": "搿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_337",
    "level": "N2",
    "kanji": "摐",
    "onyomi": "カン (n2_337)",
    "kunyomi": "ひと (n2_337)",
    "meaningUz": "N2 Iyeroglifi #337 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "摐語",
        "reading": "かんご (摐)",
        "meaning": "摐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_338",
    "level": "N2",
    "kanji": "摡",
    "onyomi": "カン (n2_338)",
    "kunyomi": "ひと (n2_338)",
    "meaningUz": "N2 Iyeroglifi #338 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "摡語",
        "reading": "かんご (摡)",
        "meaning": "摡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_339",
    "level": "N2",
    "kanji": "摲",
    "onyomi": "カン (n2_339)",
    "kunyomi": "ひと (n2_339)",
    "meaningUz": "N2 Iyeroglifi #339 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "摲語",
        "reading": "かんご (摲)",
        "meaning": "摲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_340",
    "level": "N2",
    "kanji": "撃",
    "onyomi": "カン (n2_340)",
    "kunyomi": "ひと (n2_340)",
    "meaningUz": "N2 Iyeroglifi #340 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "撃語",
        "reading": "かんご (撃)",
        "meaning": "撃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_341",
    "level": "N2",
    "kanji": "撔",
    "onyomi": "カン (n2_341)",
    "kunyomi": "ひと (n2_341)",
    "meaningUz": "N2 Iyeroglifi #341 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "撔語",
        "reading": "かんご (撔)",
        "meaning": "撔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_342",
    "level": "N2",
    "kanji": "撥",
    "onyomi": "カン (n2_342)",
    "kunyomi": "ひと (n2_342)",
    "meaningUz": "N2 Iyeroglifi #342 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "撥語",
        "reading": "かんご (撥)",
        "meaning": "撥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_343",
    "level": "N2",
    "kanji": "撶",
    "onyomi": "カン (n2_343)",
    "kunyomi": "ひと (n2_343)",
    "meaningUz": "N2 Iyeroglifi #343 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "撶語",
        "reading": "かんご (撶)",
        "meaning": "撶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_344",
    "level": "N2",
    "kanji": "擇",
    "onyomi": "カン (n2_344)",
    "kunyomi": "ひと (n2_344)",
    "meaningUz": "N2 Iyeroglifi #344 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "擇語",
        "reading": "かんご (擇)",
        "meaning": "擇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_345",
    "level": "N2",
    "kanji": "擘",
    "onyomi": "カン (n2_345)",
    "kunyomi": "ひと (n2_345)",
    "meaningUz": "N2 Iyeroglifi #345 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "擘語",
        "reading": "かんご (擘)",
        "meaning": "擘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_346",
    "level": "N2",
    "kanji": "擩",
    "onyomi": "カン (n2_346)",
    "kunyomi": "ひと (n2_346)",
    "meaningUz": "N2 Iyeroglifi #346 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "擩語",
        "reading": "かんご (擩)",
        "meaning": "擩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_347",
    "level": "N2",
    "kanji": "擺",
    "onyomi": "カン (n2_347)",
    "kunyomi": "ひと (n2_347)",
    "meaningUz": "N2 Iyeroglifi #347 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "擺語",
        "reading": "かんご (擺)",
        "meaning": "擺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_348",
    "level": "N2",
    "kanji": "攋",
    "onyomi": "カン (n2_348)",
    "kunyomi": "ひと (n2_348)",
    "meaningUz": "N2 Iyeroglifi #348 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "攋語",
        "reading": "かんご (攋)",
        "meaning": "攋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_349",
    "level": "N2",
    "kanji": "攜",
    "onyomi": "カン (n2_349)",
    "kunyomi": "ひと (n2_349)",
    "meaningUz": "N2 Iyeroglifi #349 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "攜語",
        "reading": "かんご (攜)",
        "meaning": "攜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_350",
    "level": "N2",
    "kanji": "攭",
    "onyomi": "カン (n2_350)",
    "kunyomi": "ひと (n2_350)",
    "meaningUz": "N2 Iyeroglifi #350 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "攭語",
        "reading": "かんご (攭)",
        "meaning": "攭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_351",
    "level": "N2",
    "kanji": "放",
    "onyomi": "カン (n2_351)",
    "kunyomi": "ひと (n2_351)",
    "meaningUz": "N2 Iyeroglifi #351 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "放語",
        "reading": "かんご (放)",
        "meaning": "放 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_352",
    "level": "N2",
    "kanji": "敏",
    "onyomi": "カン (n2_352)",
    "kunyomi": "ひと (n2_352)",
    "meaningUz": "N2 Iyeroglifi #352 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "敏語",
        "reading": "かんご (敏)",
        "meaning": "敏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_353",
    "level": "N2",
    "kanji": "敠",
    "onyomi": "カン (n2_353)",
    "kunyomi": "ひと (n2_353)",
    "meaningUz": "N2 Iyeroglifi #353 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "敠語",
        "reading": "かんご (敠)",
        "meaning": "敠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_354",
    "level": "N2",
    "kanji": "敱",
    "onyomi": "カン (n2_354)",
    "kunyomi": "ひと (n2_354)",
    "meaningUz": "N2 Iyeroglifi #354 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "敱語",
        "reading": "かんご (敱)",
        "meaning": "敱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_355",
    "level": "N2",
    "kanji": "斂",
    "onyomi": "カン (n2_355)",
    "kunyomi": "ひと (n2_355)",
    "meaningUz": "N2 Iyeroglifi #355 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "斂語",
        "reading": "かんご (斂)",
        "meaning": "斂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_356",
    "level": "N2",
    "kanji": "斓",
    "onyomi": "カン (n2_356)",
    "kunyomi": "ひと (n2_356)",
    "meaningUz": "N2 Iyeroglifi #356 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "斓語",
        "reading": "かんご (斓)",
        "meaning": "斓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_357",
    "level": "N2",
    "kanji": "斤",
    "onyomi": "カン (n2_357)",
    "kunyomi": "ひと (n2_357)",
    "meaningUz": "N2 Iyeroglifi #357 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "斤語",
        "reading": "かんご (斤)",
        "meaning": "斤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_358",
    "level": "N2",
    "kanji": "斵",
    "onyomi": "カン (n2_358)",
    "kunyomi": "ひと (n2_358)",
    "meaningUz": "N2 Iyeroglifi #358 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "斵語",
        "reading": "かんご (斵)",
        "meaning": "斵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_359",
    "level": "N2",
    "kanji": "旆",
    "onyomi": "カン (n2_359)",
    "kunyomi": "ひと (n2_359)",
    "meaningUz": "N2 Iyeroglifi #359 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "旆語",
        "reading": "かんご (旆)",
        "meaning": "旆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_360",
    "level": "N2",
    "kanji": "旗",
    "onyomi": "カン (n2_360)",
    "kunyomi": "ひと (n2_360)",
    "meaningUz": "N2 Iyeroglifi #360 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "旗語",
        "reading": "かんご (旗)",
        "meaning": "旗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_361",
    "level": "N2",
    "kanji": "旨",
    "onyomi": "カン (n2_361)",
    "kunyomi": "ひと (n2_361)",
    "meaningUz": "N2 Iyeroglifi #361 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "旨語",
        "reading": "かんご (旨)",
        "meaning": "旨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_362",
    "level": "N2",
    "kanji": "旹",
    "onyomi": "カン (n2_362)",
    "kunyomi": "ひと (n2_362)",
    "meaningUz": "N2 Iyeroglifi #362 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "旹語",
        "reading": "かんご (旹)",
        "meaning": "旹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_363",
    "level": "N2",
    "kanji": "昊",
    "onyomi": "カン (n2_363)",
    "kunyomi": "ひと (n2_363)",
    "meaningUz": "N2 Iyeroglifi #363 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "昊語",
        "reading": "かんご (昊)",
        "meaning": "昊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_364",
    "level": "N2",
    "kanji": "昛",
    "onyomi": "カン (n2_364)",
    "kunyomi": "ひと (n2_364)",
    "meaningUz": "N2 Iyeroglifi #364 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "昛語",
        "reading": "かんご (昛)",
        "meaning": "昛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_365",
    "level": "N2",
    "kanji": "昬",
    "onyomi": "カン (n2_365)",
    "kunyomi": "ひと (n2_365)",
    "meaningUz": "N2 Iyeroglifi #365 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "昬語",
        "reading": "かんご (昬)",
        "meaning": "昬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_366",
    "level": "N2",
    "kanji": "昽",
    "onyomi": "カン (n2_366)",
    "kunyomi": "ひと (n2_366)",
    "meaningUz": "N2 Iyeroglifi #366 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "昽語",
        "reading": "かんご (昽)",
        "meaning": "昽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n2_367",
    "level": "N2",
    "kanji": "晎",
    "onyomi": "カン (n2_367)",
    "kunyomi": "ひと (n2_367)",
    "meaningUz": "N2 Iyeroglifi #367 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "晎語",
        "reading": "かんご (晎)",
        "meaning": "晎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1",
    "level": "N1",
    "kanji": "繁",
    "onyomi": "カン (n1_1)",
    "kunyomi": "ひと (n1_1)",
    "meaningUz": "N1 Iyeroglifi #1 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "繁語",
        "reading": "かんご (繁)",
        "meaning": "繁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_2",
    "level": "N1",
    "kanji": "栄",
    "onyomi": "カン (n1_2)",
    "kunyomi": "ひと (n1_2)",
    "meaningUz": "N1 Iyeroglifi #2 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "栄語",
        "reading": "かんご (栄)",
        "meaning": "栄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_3",
    "level": "N1",
    "kanji": "躊",
    "onyomi": "カン (n1_3)",
    "kunyomi": "ひと (n1_3)",
    "meaningUz": "N1 Iyeroglifi #3 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "躊語",
        "reading": "かんご (躊)",
        "meaning": "躊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_4",
    "level": "N1",
    "kanji": "躇",
    "onyomi": "カン (n1_4)",
    "kunyomi": "ひと (n1_4)",
    "meaningUz": "N1 Iyeroglifi #4 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "躇語",
        "reading": "かんご (躇)",
        "meaning": "躇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_5",
    "level": "N1",
    "kanji": "魑",
    "onyomi": "カン (n1_5)",
    "kunyomi": "ひと (n1_5)",
    "meaningUz": "N1 Iyeroglifi #5 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "魑語",
        "reading": "かんご (魑)",
        "meaning": "魑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_6",
    "level": "N1",
    "kanji": "魅",
    "onyomi": "カン (n1_6)",
    "kunyomi": "ひと (n1_6)",
    "meaningUz": "N1 Iyeroglifi #6 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "魅語",
        "reading": "かんご (魅)",
        "meaning": "魅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_7",
    "level": "N1",
    "kanji": "魍",
    "onyomi": "カン (n1_7)",
    "kunyomi": "ひと (n1_7)",
    "meaningUz": "N1 Iyeroglifi #7 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "魍語",
        "reading": "かんご (魍)",
        "meaning": "魍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_8",
    "level": "N1",
    "kanji": "魎",
    "onyomi": "カン (n1_8)",
    "kunyomi": "ひと (n1_8)",
    "meaningUz": "N1 Iyeroglifi #8 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "魎語",
        "reading": "かんご (魎)",
        "meaning": "魎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_9",
    "level": "N1",
    "kanji": "鬱",
    "onyomi": "カン (n1_9)",
    "kunyomi": "ひと (n1_9)",
    "meaningUz": "N1 Iyeroglifi #9 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鬱語",
        "reading": "かんご (鬱)",
        "meaning": "鬱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_10",
    "level": "N1",
    "kanji": "蒼",
    "onyomi": "カン (n1_10)",
    "kunyomi": "ひと (n1_10)",
    "meaningUz": "N1 Iyeroglifi #10 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "蒼語",
        "reading": "かんご (蒼)",
        "meaning": "蒼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_11",
    "level": "N1",
    "kanji": "葛",
    "onyomi": "カン (n1_11)",
    "kunyomi": "ひと (n1_11)",
    "meaningUz": "N1 Iyeroglifi #11 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "葛語",
        "reading": "かんご (葛)",
        "meaning": "葛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_12",
    "level": "N1",
    "kanji": "藤",
    "onyomi": "カン (n1_12)",
    "kunyomi": "ひと (n1_12)",
    "meaningUz": "N1 Iyeroglifi #12 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "藤語",
        "reading": "かんご (藤)",
        "meaning": "藤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_13",
    "level": "N1",
    "kanji": "綺",
    "onyomi": "カン (n1_13)",
    "kunyomi": "ひと (n1_13)",
    "meaningUz": "N1 Iyeroglifi #13 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "綺語",
        "reading": "かんご (綺)",
        "meaning": "綺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_14",
    "level": "N1",
    "kanji": "麗",
    "onyomi": "カン (n1_14)",
    "kunyomi": "ひと (n1_14)",
    "meaningUz": "N1 Iyeroglifi #14 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "麗語",
        "reading": "かんご (麗)",
        "meaning": "麗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_15",
    "level": "N1",
    "kanji": "曖",
    "onyomi": "カン (n1_15)",
    "kunyomi": "ひと (n1_15)",
    "meaningUz": "N1 Iyeroglifi #15 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "曖語",
        "reading": "かんご (曖)",
        "meaning": "曖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_16",
    "level": "N1",
    "kanji": "昧",
    "onyomi": "カン (n1_16)",
    "kunyomi": "ひと (n1_16)",
    "meaningUz": "N1 Iyeroglifi #16 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "昧語",
        "reading": "かんご (昧)",
        "meaning": "昧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_17",
    "level": "N1",
    "kanji": "憂",
    "onyomi": "カン (n1_17)",
    "kunyomi": "ひと (n1_17)",
    "meaningUz": "N1 Iyeroglifi #17 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "憂語",
        "reading": "かんご (憂)",
        "meaning": "憂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_18",
    "level": "N1",
    "kanji": "鬱",
    "onyomi": "カン (n1_18)",
    "kunyomi": "ひと (n1_18)",
    "meaningUz": "N1 Iyeroglifi #18 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "鬱語",
        "reading": "かんご (鬱)",
        "meaning": "鬱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_19",
    "level": "N1",
    "kanji": "蔽",
    "onyomi": "カン (n1_19)",
    "kunyomi": "ひと (n1_19)",
    "meaningUz": "N1 Iyeroglifi #19 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "蔽語",
        "reading": "かんご (蔽)",
        "meaning": "蔽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_20",
    "level": "N1",
    "kanji": "遮",
    "onyomi": "カン (n1_20)",
    "kunyomi": "ひと (n1_20)",
    "meaningUz": "N1 Iyeroglifi #20 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "遮語",
        "reading": "かんご (遮)",
        "meaning": "遮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_21",
    "level": "N1",
    "kanji": "佔",
    "onyomi": "カン (n1_21)",
    "kunyomi": "ひと (n1_21)",
    "meaningUz": "N1 Iyeroglifi #21 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "佔語",
        "reading": "かんご (佔)",
        "meaning": "佔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_22",
    "level": "N1",
    "kanji": "佥",
    "onyomi": "カン (n1_22)",
    "kunyomi": "ひと (n1_22)",
    "meaningUz": "N1 Iyeroglifi #22 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "佥語",
        "reading": "かんご (佥)",
        "meaning": "佥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_23",
    "level": "N1",
    "kanji": "佶",
    "onyomi": "カン (n1_23)",
    "kunyomi": "ひと (n1_23)",
    "meaningUz": "N1 Iyeroglifi #23 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "佶語",
        "reading": "かんご (佶)",
        "meaning": "佶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_24",
    "level": "N1",
    "kanji": "侇",
    "onyomi": "カン (n1_24)",
    "kunyomi": "ひと (n1_24)",
    "meaningUz": "N1 Iyeroglifi #24 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "侇語",
        "reading": "かんご (侇)",
        "meaning": "侇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_25",
    "level": "N1",
    "kanji": "侘",
    "onyomi": "カン (n1_25)",
    "kunyomi": "ひと (n1_25)",
    "meaningUz": "N1 Iyeroglifi #25 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "侘語",
        "reading": "かんご (侘)",
        "meaning": "侘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_26",
    "level": "N1",
    "kanji": "侩",
    "onyomi": "カン (n1_26)",
    "kunyomi": "ひと (n1_26)",
    "meaningUz": "N1 Iyeroglifi #26 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "侩語",
        "reading": "かんご (侩)",
        "meaning": "侩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_27",
    "level": "N1",
    "kanji": "侺",
    "onyomi": "カン (n1_27)",
    "kunyomi": "ひと (n1_27)",
    "meaningUz": "N1 Iyeroglifi #27 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "侺語",
        "reading": "かんご (侺)",
        "meaning": "侺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_28",
    "level": "N1",
    "kanji": "俋",
    "onyomi": "カン (n1_28)",
    "kunyomi": "ひと (n1_28)",
    "meaningUz": "N1 Iyeroglifi #28 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "俋語",
        "reading": "かんご (俋)",
        "meaning": "俋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_29",
    "level": "N1",
    "kanji": "俜",
    "onyomi": "カン (n1_29)",
    "kunyomi": "ひと (n1_29)",
    "meaningUz": "N1 Iyeroglifi #29 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "俜語",
        "reading": "かんご (俜)",
        "meaning": "俜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_30",
    "level": "N1",
    "kanji": "俭",
    "onyomi": "カン (n1_30)",
    "kunyomi": "ひと (n1_30)",
    "meaningUz": "N1 Iyeroglifi #30 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "俭語",
        "reading": "かんご (俭)",
        "meaning": "俭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_31",
    "level": "N1",
    "kanji": "俾",
    "onyomi": "カン (n1_31)",
    "kunyomi": "ひと (n1_31)",
    "meaningUz": "N1 Iyeroglifi #31 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "俾語",
        "reading": "かんご (俾)",
        "meaning": "俾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_32",
    "level": "N1",
    "kanji": "倏",
    "onyomi": "カン (n1_32)",
    "kunyomi": "ひと (n1_32)",
    "meaningUz": "N1 Iyeroglifi #32 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "倏語",
        "reading": "かんご (倏)",
        "meaning": "倏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_33",
    "level": "N1",
    "kanji": "倠",
    "onyomi": "カン (n1_33)",
    "kunyomi": "ひと (n1_33)",
    "meaningUz": "N1 Iyeroglifi #33 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "倠語",
        "reading": "かんご (倠)",
        "meaning": "倠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_34",
    "level": "N1",
    "kanji": "倱",
    "onyomi": "カン (n1_34)",
    "kunyomi": "ひと (n1_34)",
    "meaningUz": "N1 Iyeroglifi #34 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "倱語",
        "reading": "かんご (倱)",
        "meaning": "倱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_35",
    "level": "N1",
    "kanji": "偂",
    "onyomi": "カン (n1_35)",
    "kunyomi": "ひと (n1_35)",
    "meaningUz": "N1 Iyeroglifi #35 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "偂語",
        "reading": "かんご (偂)",
        "meaning": "偂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_36",
    "level": "N1",
    "kanji": "偓",
    "onyomi": "カン (n1_36)",
    "kunyomi": "ひと (n1_36)",
    "meaningUz": "N1 Iyeroglifi #36 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "偓語",
        "reading": "かんご (偓)",
        "meaning": "偓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_37",
    "level": "N1",
    "kanji": "偤",
    "onyomi": "カン (n1_37)",
    "kunyomi": "ひと (n1_37)",
    "meaningUz": "N1 Iyeroglifi #37 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "偤語",
        "reading": "かんご (偤)",
        "meaning": "偤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_38",
    "level": "N1",
    "kanji": "偵",
    "onyomi": "カン (n1_38)",
    "kunyomi": "ひと (n1_38)",
    "meaningUz": "N1 Iyeroglifi #38 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "偵語",
        "reading": "かんご (偵)",
        "meaning": "偵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_39",
    "level": "N1",
    "kanji": "傆",
    "onyomi": "カン (n1_39)",
    "kunyomi": "ひと (n1_39)",
    "meaningUz": "N1 Iyeroglifi #39 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "傆語",
        "reading": "かんご (傆)",
        "meaning": "傆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_40",
    "level": "N1",
    "kanji": "傗",
    "onyomi": "カン (n1_40)",
    "kunyomi": "ひと (n1_40)",
    "meaningUz": "N1 Iyeroglifi #40 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "傗語",
        "reading": "かんご (傗)",
        "meaning": "傗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_41",
    "level": "N1",
    "kanji": "储",
    "onyomi": "カン (n1_41)",
    "kunyomi": "ひと (n1_41)",
    "meaningUz": "N1 Iyeroglifi #41 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "储語",
        "reading": "かんご (储)",
        "meaning": "储 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_42",
    "level": "N1",
    "kanji": "傹",
    "onyomi": "カン (n1_42)",
    "kunyomi": "ひと (n1_42)",
    "meaningUz": "N1 Iyeroglifi #42 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "傹語",
        "reading": "かんご (傹)",
        "meaning": "傹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_43",
    "level": "N1",
    "kanji": "僊",
    "onyomi": "カン (n1_43)",
    "kunyomi": "ひと (n1_43)",
    "meaningUz": "N1 Iyeroglifi #43 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "僊語",
        "reading": "かんご (僊)",
        "meaning": "僊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_44",
    "level": "N1",
    "kanji": "僛",
    "onyomi": "カン (n1_44)",
    "kunyomi": "ひと (n1_44)",
    "meaningUz": "N1 Iyeroglifi #44 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "僛語",
        "reading": "かんご (僛)",
        "meaning": "僛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_45",
    "level": "N1",
    "kanji": "僬",
    "onyomi": "カン (n1_45)",
    "kunyomi": "ひと (n1_45)",
    "meaningUz": "N1 Iyeroglifi #45 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "僬語",
        "reading": "かんご (僬)",
        "meaning": "僬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_46",
    "level": "N1",
    "kanji": "僽",
    "onyomi": "カン (n1_46)",
    "kunyomi": "ひと (n1_46)",
    "meaningUz": "N1 Iyeroglifi #46 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "僽語",
        "reading": "かんご (僽)",
        "meaning": "僽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_47",
    "level": "N1",
    "kanji": "儎",
    "onyomi": "カン (n1_47)",
    "kunyomi": "ひと (n1_47)",
    "meaningUz": "N1 Iyeroglifi #47 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "儎語",
        "reading": "かんご (儎)",
        "meaning": "儎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_48",
    "level": "N1",
    "kanji": "償",
    "onyomi": "カン (n1_48)",
    "kunyomi": "ひと (n1_48)",
    "meaningUz": "N1 Iyeroglifi #48 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "償語",
        "reading": "かんご (償)",
        "meaning": "償 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_49",
    "level": "N1",
    "kanji": "儰",
    "onyomi": "カン (n1_49)",
    "kunyomi": "ひと (n1_49)",
    "meaningUz": "N1 Iyeroglifi #49 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "儰語",
        "reading": "かんご (儰)",
        "meaning": "儰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_50",
    "level": "N1",
    "kanji": "允",
    "onyomi": "カン (n1_50)",
    "kunyomi": "ひと (n1_50)",
    "meaningUz": "N1 Iyeroglifi #50 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "允語",
        "reading": "かんご (允)",
        "meaning": "允 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_51",
    "level": "N1",
    "kanji": "兒",
    "onyomi": "カン (n1_51)",
    "kunyomi": "ひと (n1_51)",
    "meaningUz": "N1 Iyeroglifi #51 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "兒語",
        "reading": "かんご (兒)",
        "meaning": "兒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_52",
    "level": "N1",
    "kanji": "兣",
    "onyomi": "カン (n1_52)",
    "kunyomi": "ひと (n1_52)",
    "meaningUz": "N1 Iyeroglifi #52 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "兣語",
        "reading": "かんご (兣)",
        "meaning": "兣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_53",
    "level": "N1",
    "kanji": "兴",
    "onyomi": "カン (n1_53)",
    "kunyomi": "ひと (n1_53)",
    "meaningUz": "N1 Iyeroglifi #53 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "兴語",
        "reading": "かんご (兴)",
        "meaning": "兴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_54",
    "level": "N1",
    "kanji": "内",
    "onyomi": "カン (n1_54)",
    "kunyomi": "ひと (n1_54)",
    "meaningUz": "N1 Iyeroglifi #54 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "内語",
        "reading": "かんご (内)",
        "meaning": "内 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_55",
    "level": "N1",
    "kanji": "冖",
    "onyomi": "カン (n1_55)",
    "kunyomi": "ひと (n1_55)",
    "meaningUz": "N1 Iyeroglifi #55 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "冖語",
        "reading": "かんご (冖)",
        "meaning": "冖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_56",
    "level": "N1",
    "kanji": "冧",
    "onyomi": "カン (n1_56)",
    "kunyomi": "ひと (n1_56)",
    "meaningUz": "N1 Iyeroglifi #56 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "冧語",
        "reading": "かんご (冧)",
        "meaning": "冧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_57",
    "level": "N1",
    "kanji": "冸",
    "onyomi": "カン (n1_57)",
    "kunyomi": "ひと (n1_57)",
    "meaningUz": "N1 Iyeroglifi #57 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "冸語",
        "reading": "かんご (冸)",
        "meaning": "冸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_58",
    "level": "N1",
    "kanji": "凉",
    "onyomi": "カン (n1_58)",
    "kunyomi": "ひと (n1_58)",
    "meaningUz": "N1 Iyeroglifi #58 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "凉語",
        "reading": "かんご (凉)",
        "meaning": "凉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_59",
    "level": "N1",
    "kanji": "凚",
    "onyomi": "カン (n1_59)",
    "kunyomi": "ひと (n1_59)",
    "meaningUz": "N1 Iyeroglifi #59 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "凚語",
        "reading": "かんご (凚)",
        "meaning": "凚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_60",
    "level": "N1",
    "kanji": "凫",
    "onyomi": "カン (n1_60)",
    "kunyomi": "ひと (n1_60)",
    "meaningUz": "N1 Iyeroglifi #60 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "凫語",
        "reading": "かんご (凫)",
        "meaning": "凫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_61",
    "level": "N1",
    "kanji": "凼",
    "onyomi": "カン (n1_61)",
    "kunyomi": "ひと (n1_61)",
    "meaningUz": "N1 Iyeroglifi #61 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "凼語",
        "reading": "かんご (凼)",
        "meaning": "凼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_62",
    "level": "N1",
    "kanji": "刍",
    "onyomi": "カン (n1_62)",
    "kunyomi": "ひと (n1_62)",
    "meaningUz": "N1 Iyeroglifi #62 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "刍語",
        "reading": "かんご (刍)",
        "meaning": "刍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_63",
    "level": "N1",
    "kanji": "刞",
    "onyomi": "カン (n1_63)",
    "kunyomi": "ひと (n1_63)",
    "meaningUz": "N1 Iyeroglifi #63 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "刞語",
        "reading": "かんご (刞)",
        "meaning": "刞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_64",
    "level": "N1",
    "kanji": "刯",
    "onyomi": "カン (n1_64)",
    "kunyomi": "ひと (n1_64)",
    "meaningUz": "N1 Iyeroglifi #64 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "刯語",
        "reading": "かんご (刯)",
        "meaning": "刯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_65",
    "level": "N1",
    "kanji": "剀",
    "onyomi": "カン (n1_65)",
    "kunyomi": "ひと (n1_65)",
    "meaningUz": "N1 Iyeroglifi #65 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "剀語",
        "reading": "かんご (剀)",
        "meaning": "剀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_66",
    "level": "N1",
    "kanji": "剑",
    "onyomi": "カン (n1_66)",
    "kunyomi": "ひと (n1_66)",
    "meaningUz": "N1 Iyeroglifi #66 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "剑語",
        "reading": "かんご (剑)",
        "meaning": "剑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_67",
    "level": "N1",
    "kanji": "剢",
    "onyomi": "カン (n1_67)",
    "kunyomi": "ひと (n1_67)",
    "meaningUz": "N1 Iyeroglifi #67 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "剢語",
        "reading": "かんご (剢)",
        "meaning": "剢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_68",
    "level": "N1",
    "kanji": "剳",
    "onyomi": "カン (n1_68)",
    "kunyomi": "ひと (n1_68)",
    "meaningUz": "N1 Iyeroglifi #68 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "剳語",
        "reading": "かんご (剳)",
        "meaning": "剳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_69",
    "level": "N1",
    "kanji": "劄",
    "onyomi": "カン (n1_69)",
    "kunyomi": "ひと (n1_69)",
    "meaningUz": "N1 Iyeroglifi #69 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "劄語",
        "reading": "かんご (劄)",
        "meaning": "劄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_70",
    "level": "N1",
    "kanji": "劕",
    "onyomi": "カン (n1_70)",
    "kunyomi": "ひと (n1_70)",
    "meaningUz": "N1 Iyeroglifi #70 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "劕語",
        "reading": "かんご (劕)",
        "meaning": "劕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_71",
    "level": "N1",
    "kanji": "劦",
    "onyomi": "カン (n1_71)",
    "kunyomi": "ひと (n1_71)",
    "meaningUz": "N1 Iyeroglifi #71 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "劦語",
        "reading": "かんご (劦)",
        "meaning": "劦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_72",
    "level": "N1",
    "kanji": "劷",
    "onyomi": "カン (n1_72)",
    "kunyomi": "ひと (n1_72)",
    "meaningUz": "N1 Iyeroglifi #72 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "劷語",
        "reading": "かんご (劷)",
        "meaning": "劷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_73",
    "level": "N1",
    "kanji": "勈",
    "onyomi": "カン (n1_73)",
    "kunyomi": "ひと (n1_73)",
    "meaningUz": "N1 Iyeroglifi #73 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "勈語",
        "reading": "かんご (勈)",
        "meaning": "勈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_74",
    "level": "N1",
    "kanji": "務",
    "onyomi": "カン (n1_74)",
    "kunyomi": "ひと (n1_74)",
    "meaningUz": "N1 Iyeroglifi #74 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "務語",
        "reading": "かんご (務)",
        "meaning": "務 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_75",
    "level": "N1",
    "kanji": "勪",
    "onyomi": "カン (n1_75)",
    "kunyomi": "ひと (n1_75)",
    "meaningUz": "N1 Iyeroglifi #75 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "勪語",
        "reading": "かんご (勪)",
        "meaning": "勪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_76",
    "level": "N1",
    "kanji": "勻",
    "onyomi": "カン (n1_76)",
    "kunyomi": "ひと (n1_76)",
    "meaningUz": "N1 Iyeroglifi #76 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "勻語",
        "reading": "かんご (勻)",
        "meaning": "勻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_77",
    "level": "N1",
    "kanji": "匌",
    "onyomi": "カン (n1_77)",
    "kunyomi": "ひと (n1_77)",
    "meaningUz": "N1 Iyeroglifi #77 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "匌語",
        "reading": "かんご (匌)",
        "meaning": "匌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_78",
    "level": "N1",
    "kanji": "匝",
    "onyomi": "カン (n1_78)",
    "kunyomi": "ひと (n1_78)",
    "meaningUz": "N1 Iyeroglifi #78 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "匝語",
        "reading": "かんご (匝)",
        "meaning": "匝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_79",
    "level": "N1",
    "kanji": "匮",
    "onyomi": "カン (n1_79)",
    "kunyomi": "ひと (n1_79)",
    "meaningUz": "N1 Iyeroglifi #79 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "匮語",
        "reading": "かんご (匮)",
        "meaning": "匮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_80",
    "level": "N1",
    "kanji": "匿",
    "onyomi": "カン (n1_80)",
    "kunyomi": "ひと (n1_80)",
    "meaningUz": "N1 Iyeroglifi #80 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "匿語",
        "reading": "かんご (匿)",
        "meaning": "匿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_81",
    "level": "N1",
    "kanji": "卐",
    "onyomi": "カン (n1_81)",
    "kunyomi": "ひと (n1_81)",
    "meaningUz": "N1 Iyeroglifi #81 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "卐語",
        "reading": "かんご (卐)",
        "meaning": "卐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_82",
    "level": "N1",
    "kanji": "卡",
    "onyomi": "カン (n1_82)",
    "kunyomi": "ひと (n1_82)",
    "meaningUz": "N1 Iyeroglifi #82 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "卡語",
        "reading": "かんご (卡)",
        "meaning": "卡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_83",
    "level": "N1",
    "kanji": "卲",
    "onyomi": "カン (n1_83)",
    "kunyomi": "ひと (n1_83)",
    "meaningUz": "N1 Iyeroglifi #83 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "卲語",
        "reading": "かんご (卲)",
        "meaning": "卲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_84",
    "level": "N1",
    "kanji": "厃",
    "onyomi": "カン (n1_84)",
    "kunyomi": "ひと (n1_84)",
    "meaningUz": "N1 Iyeroglifi #84 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "厃語",
        "reading": "かんご (厃)",
        "meaning": "厃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_85",
    "level": "N1",
    "kanji": "厔",
    "onyomi": "カン (n1_85)",
    "kunyomi": "ひと (n1_85)",
    "meaningUz": "N1 Iyeroglifi #85 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "厔語",
        "reading": "かんご (厔)",
        "meaning": "厔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_86",
    "level": "N1",
    "kanji": "厥",
    "onyomi": "カン (n1_86)",
    "kunyomi": "ひと (n1_86)",
    "meaningUz": "N1 Iyeroglifi #86 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "厥語",
        "reading": "かんご (厥)",
        "meaning": "厥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_87",
    "level": "N1",
    "kanji": "厶",
    "onyomi": "カン (n1_87)",
    "kunyomi": "ひと (n1_87)",
    "meaningUz": "N1 Iyeroglifi #87 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "厶語",
        "reading": "かんご (厶)",
        "meaning": "厶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_88",
    "level": "N1",
    "kanji": "叇",
    "onyomi": "カン (n1_88)",
    "kunyomi": "ひと (n1_88)",
    "meaningUz": "N1 Iyeroglifi #88 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "叇語",
        "reading": "かんご (叇)",
        "meaning": "叇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_89",
    "level": "N1",
    "kanji": "变",
    "onyomi": "カン (n1_89)",
    "kunyomi": "ひと (n1_89)",
    "meaningUz": "N1 Iyeroglifi #89 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "变語",
        "reading": "かんご (变)",
        "meaning": "变 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_90",
    "level": "N1",
    "kanji": "叩",
    "onyomi": "カン (n1_90)",
    "kunyomi": "ひと (n1_90)",
    "meaningUz": "N1 Iyeroglifi #90 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "叩語",
        "reading": "かんご (叩)",
        "meaning": "叩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_91",
    "level": "N1",
    "kanji": "叺",
    "onyomi": "カン (n1_91)",
    "kunyomi": "ひと (n1_91)",
    "meaningUz": "N1 Iyeroglifi #91 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "叺語",
        "reading": "かんご (叺)",
        "meaning": "叺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_92",
    "level": "N1",
    "kanji": "吋",
    "onyomi": "カン (n1_92)",
    "kunyomi": "ひと (n1_92)",
    "meaningUz": "N1 Iyeroglifi #92 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "吋語",
        "reading": "かんご (吋)",
        "meaning": "吋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_93",
    "level": "N1",
    "kanji": "吜",
    "onyomi": "カン (n1_93)",
    "kunyomi": "ひと (n1_93)",
    "meaningUz": "N1 Iyeroglifi #93 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "吜語",
        "reading": "かんご (吜)",
        "meaning": "吜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_94",
    "level": "N1",
    "kanji": "吭",
    "onyomi": "カン (n1_94)",
    "kunyomi": "ひと (n1_94)",
    "meaningUz": "N1 Iyeroglifi #94 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "吭語",
        "reading": "かんご (吭)",
        "meaning": "吭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_95",
    "level": "N1",
    "kanji": "吾",
    "onyomi": "カン (n1_95)",
    "kunyomi": "ひと (n1_95)",
    "meaningUz": "N1 Iyeroglifi #95 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "吾語",
        "reading": "かんご (吾)",
        "meaning": "吾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_96",
    "level": "N1",
    "kanji": "呏",
    "onyomi": "カン (n1_96)",
    "kunyomi": "ひと (n1_96)",
    "meaningUz": "N1 Iyeroglifi #96 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "呏語",
        "reading": "かんご (呏)",
        "meaning": "呏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_97",
    "level": "N1",
    "kanji": "呠",
    "onyomi": "カン (n1_97)",
    "kunyomi": "ひと (n1_97)",
    "meaningUz": "N1 Iyeroglifi #97 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "呠語",
        "reading": "かんご (呠)",
        "meaning": "呠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_98",
    "level": "N1",
    "kanji": "呱",
    "onyomi": "カン (n1_98)",
    "kunyomi": "ひと (n1_98)",
    "meaningUz": "N1 Iyeroglifi #98 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "呱語",
        "reading": "かんご (呱)",
        "meaning": "呱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_99",
    "level": "N1",
    "kanji": "咂",
    "onyomi": "カン (n1_99)",
    "kunyomi": "ひと (n1_99)",
    "meaningUz": "N1 Iyeroglifi #99 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "咂語",
        "reading": "かんご (咂)",
        "meaning": "咂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_100",
    "level": "N1",
    "kanji": "咓",
    "onyomi": "カン (n1_100)",
    "kunyomi": "ひと (n1_100)",
    "meaningUz": "N1 Iyeroglifi #100 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "咓語",
        "reading": "かんご (咓)",
        "meaning": "咓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_101",
    "level": "N1",
    "kanji": "咤",
    "onyomi": "カン (n1_101)",
    "kunyomi": "ひと (n1_101)",
    "meaningUz": "N1 Iyeroglifi #101 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "咤語",
        "reading": "かんご (咤)",
        "meaning": "咤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_102",
    "level": "N1",
    "kanji": "咵",
    "onyomi": "カン (n1_102)",
    "kunyomi": "ひと (n1_102)",
    "meaningUz": "N1 Iyeroglifi #102 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "咵語",
        "reading": "かんご (咵)",
        "meaning": "咵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_103",
    "level": "N1",
    "kanji": "哆",
    "onyomi": "カン (n1_103)",
    "kunyomi": "ひと (n1_103)",
    "meaningUz": "N1 Iyeroglifi #103 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "哆語",
        "reading": "かんご (哆)",
        "meaning": "哆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_104",
    "level": "N1",
    "kanji": "哗",
    "onyomi": "カン (n1_104)",
    "kunyomi": "ひと (n1_104)",
    "meaningUz": "N1 Iyeroglifi #104 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "哗語",
        "reading": "かんご (哗)",
        "meaning": "哗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_105",
    "level": "N1",
    "kanji": "哨",
    "onyomi": "カン (n1_105)",
    "kunyomi": "ひと (n1_105)",
    "meaningUz": "N1 Iyeroglifi #105 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "哨語",
        "reading": "かんご (哨)",
        "meaning": "哨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_106",
    "level": "N1",
    "kanji": "哹",
    "onyomi": "カン (n1_106)",
    "kunyomi": "ひと (n1_106)",
    "meaningUz": "N1 Iyeroglifi #106 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "哹語",
        "reading": "かんご (哹)",
        "meaning": "哹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_107",
    "level": "N1",
    "kanji": "唊",
    "onyomi": "カン (n1_107)",
    "kunyomi": "ひと (n1_107)",
    "meaningUz": "N1 Iyeroglifi #107 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "唊語",
        "reading": "かんご (唊)",
        "meaning": "唊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_108",
    "level": "N1",
    "kanji": "唛",
    "onyomi": "カン (n1_108)",
    "kunyomi": "ひと (n1_108)",
    "meaningUz": "N1 Iyeroglifi #108 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "唛語",
        "reading": "かんご (唛)",
        "meaning": "唛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_109",
    "level": "N1",
    "kanji": "唬",
    "onyomi": "カン (n1_109)",
    "kunyomi": "ひと (n1_109)",
    "meaningUz": "N1 Iyeroglifi #109 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "唬語",
        "reading": "かんご (唬)",
        "meaning": "唬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_110",
    "level": "N1",
    "kanji": "唽",
    "onyomi": "カン (n1_110)",
    "kunyomi": "ひと (n1_110)",
    "meaningUz": "N1 Iyeroglifi #110 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "唽語",
        "reading": "かんご (唽)",
        "meaning": "唽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_111",
    "level": "N1",
    "kanji": "啎",
    "onyomi": "カン (n1_111)",
    "kunyomi": "ひと (n1_111)",
    "meaningUz": "N1 Iyeroglifi #111 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "啎語",
        "reading": "かんご (啎)",
        "meaning": "啎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_112",
    "level": "N1",
    "kanji": "啟",
    "onyomi": "カン (n1_112)",
    "kunyomi": "ひと (n1_112)",
    "meaningUz": "N1 Iyeroglifi #112 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "啟語",
        "reading": "かんご (啟)",
        "meaning": "啟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_113",
    "level": "N1",
    "kanji": "啰",
    "onyomi": "カン (n1_113)",
    "kunyomi": "ひと (n1_113)",
    "meaningUz": "N1 Iyeroglifi #113 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "啰語",
        "reading": "かんご (啰)",
        "meaning": "啰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_114",
    "level": "N1",
    "kanji": "喁",
    "onyomi": "カン (n1_114)",
    "kunyomi": "ひと (n1_114)",
    "meaningUz": "N1 Iyeroglifi #114 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "喁語",
        "reading": "かんご (喁)",
        "meaning": "喁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_115",
    "level": "N1",
    "kanji": "喒",
    "onyomi": "カン (n1_115)",
    "kunyomi": "ひと (n1_115)",
    "meaningUz": "N1 Iyeroglifi #115 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "喒語",
        "reading": "かんご (喒)",
        "meaning": "喒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_116",
    "level": "N1",
    "kanji": "喣",
    "onyomi": "カン (n1_116)",
    "kunyomi": "ひと (n1_116)",
    "meaningUz": "N1 Iyeroglifi #116 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "喣語",
        "reading": "かんご (喣)",
        "meaning": "喣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_117",
    "level": "N1",
    "kanji": "喴",
    "onyomi": "カン (n1_117)",
    "kunyomi": "ひと (n1_117)",
    "meaningUz": "N1 Iyeroglifi #117 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "喴語",
        "reading": "かんご (喴)",
        "meaning": "喴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_118",
    "level": "N1",
    "kanji": "嗅",
    "onyomi": "カン (n1_118)",
    "kunyomi": "ひと (n1_118)",
    "meaningUz": "N1 Iyeroglifi #118 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嗅語",
        "reading": "かんご (嗅)",
        "meaning": "嗅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_119",
    "level": "N1",
    "kanji": "嗖",
    "onyomi": "カン (n1_119)",
    "kunyomi": "ひと (n1_119)",
    "meaningUz": "N1 Iyeroglifi #119 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嗖語",
        "reading": "かんご (嗖)",
        "meaning": "嗖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_120",
    "level": "N1",
    "kanji": "嗧",
    "onyomi": "カン (n1_120)",
    "kunyomi": "ひと (n1_120)",
    "meaningUz": "N1 Iyeroglifi #120 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嗧語",
        "reading": "かんご (嗧)",
        "meaning": "嗧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_121",
    "level": "N1",
    "kanji": "嗸",
    "onyomi": "カン (n1_121)",
    "kunyomi": "ひと (n1_121)",
    "meaningUz": "N1 Iyeroglifi #121 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嗸語",
        "reading": "かんご (嗸)",
        "meaning": "嗸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_122",
    "level": "N1",
    "kanji": "嘉",
    "onyomi": "カン (n1_122)",
    "kunyomi": "ひと (n1_122)",
    "meaningUz": "N1 Iyeroglifi #122 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嘉語",
        "reading": "かんご (嘉)",
        "meaning": "嘉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_123",
    "level": "N1",
    "kanji": "嘚",
    "onyomi": "カン (n1_123)",
    "kunyomi": "ひと (n1_123)",
    "meaningUz": "N1 Iyeroglifi #123 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嘚語",
        "reading": "かんご (嘚)",
        "meaning": "嘚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_124",
    "level": "N1",
    "kanji": "嘫",
    "onyomi": "カン (n1_124)",
    "kunyomi": "ひと (n1_124)",
    "meaningUz": "N1 Iyeroglifi #124 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嘫語",
        "reading": "かんご (嘫)",
        "meaning": "嘫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_125",
    "level": "N1",
    "kanji": "嘼",
    "onyomi": "カン (n1_125)",
    "kunyomi": "ひと (n1_125)",
    "meaningUz": "N1 Iyeroglifi #125 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嘼語",
        "reading": "かんご (嘼)",
        "meaning": "嘼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_126",
    "level": "N1",
    "kanji": "噍",
    "onyomi": "カン (n1_126)",
    "kunyomi": "ひと (n1_126)",
    "meaningUz": "N1 Iyeroglifi #126 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "噍語",
        "reading": "かんご (噍)",
        "meaning": "噍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_127",
    "level": "N1",
    "kanji": "噞",
    "onyomi": "カン (n1_127)",
    "kunyomi": "ひと (n1_127)",
    "meaningUz": "N1 Iyeroglifi #127 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "噞語",
        "reading": "かんご (噞)",
        "meaning": "噞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_128",
    "level": "N1",
    "kanji": "噯",
    "onyomi": "カン (n1_128)",
    "kunyomi": "ひと (n1_128)",
    "meaningUz": "N1 Iyeroglifi #128 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "噯語",
        "reading": "かんご (噯)",
        "meaning": "噯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_129",
    "level": "N1",
    "kanji": "嚀",
    "onyomi": "カン (n1_129)",
    "kunyomi": "ひと (n1_129)",
    "meaningUz": "N1 Iyeroglifi #129 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嚀語",
        "reading": "かんご (嚀)",
        "meaning": "嚀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_130",
    "level": "N1",
    "kanji": "嚑",
    "onyomi": "カン (n1_130)",
    "kunyomi": "ひと (n1_130)",
    "meaningUz": "N1 Iyeroglifi #130 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嚑語",
        "reading": "かんご (嚑)",
        "meaning": "嚑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_131",
    "level": "N1",
    "kanji": "嚢",
    "onyomi": "カン (n1_131)",
    "kunyomi": "ひと (n1_131)",
    "meaningUz": "N1 Iyeroglifi #131 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嚢語",
        "reading": "かんご (嚢)",
        "meaning": "嚢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_132",
    "level": "N1",
    "kanji": "嚳",
    "onyomi": "カン (n1_132)",
    "kunyomi": "ひと (n1_132)",
    "meaningUz": "N1 Iyeroglifi #132 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嚳語",
        "reading": "かんご (嚳)",
        "meaning": "嚳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_133",
    "level": "N1",
    "kanji": "囄",
    "onyomi": "カン (n1_133)",
    "kunyomi": "ひと (n1_133)",
    "meaningUz": "N1 Iyeroglifi #133 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "囄語",
        "reading": "かんご (囄)",
        "meaning": "囄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_134",
    "level": "N1",
    "kanji": "囕",
    "onyomi": "カン (n1_134)",
    "kunyomi": "ひと (n1_134)",
    "meaningUz": "N1 Iyeroglifi #134 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "囕語",
        "reading": "かんご (囕)",
        "meaning": "囕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_135",
    "level": "N1",
    "kanji": "囦",
    "onyomi": "カン (n1_135)",
    "kunyomi": "ひと (n1_135)",
    "meaningUz": "N1 Iyeroglifi #135 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "囦語",
        "reading": "かんご (囦)",
        "meaning": "囦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_136",
    "level": "N1",
    "kanji": "囷",
    "onyomi": "カン (n1_136)",
    "kunyomi": "ひと (n1_136)",
    "meaningUz": "N1 Iyeroglifi #136 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "囷語",
        "reading": "かんご (囷)",
        "meaning": "囷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_137",
    "level": "N1",
    "kanji": "圈",
    "onyomi": "カン (n1_137)",
    "kunyomi": "ひと (n1_137)",
    "meaningUz": "N1 Iyeroglifi #137 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "圈語",
        "reading": "かんご (圈)",
        "meaning": "圈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_138",
    "level": "N1",
    "kanji": "圙",
    "onyomi": "カン (n1_138)",
    "kunyomi": "ひと (n1_138)",
    "meaningUz": "N1 Iyeroglifi #138 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "圙語",
        "reading": "かんご (圙)",
        "meaning": "圙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_139",
    "level": "N1",
    "kanji": "圪",
    "onyomi": "カン (n1_139)",
    "kunyomi": "ひと (n1_139)",
    "meaningUz": "N1 Iyeroglifi #139 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "圪語",
        "reading": "かんご (圪)",
        "meaning": "圪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_140",
    "level": "N1",
    "kanji": "圻",
    "onyomi": "カン (n1_140)",
    "kunyomi": "ひと (n1_140)",
    "meaningUz": "N1 Iyeroglifi #140 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "圻語",
        "reading": "かんご (圻)",
        "meaning": "圻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_141",
    "level": "N1",
    "kanji": "坌",
    "onyomi": "カン (n1_141)",
    "kunyomi": "ひと (n1_141)",
    "meaningUz": "N1 Iyeroglifi #141 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "坌語",
        "reading": "かんご (坌)",
        "meaning": "坌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_142",
    "level": "N1",
    "kanji": "坝",
    "onyomi": "カン (n1_142)",
    "kunyomi": "ひと (n1_142)",
    "meaningUz": "N1 Iyeroglifi #142 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "坝語",
        "reading": "かんご (坝)",
        "meaning": "坝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_143",
    "level": "N1",
    "kanji": "坮",
    "onyomi": "カン (n1_143)",
    "kunyomi": "ひと (n1_143)",
    "meaningUz": "N1 Iyeroglifi #143 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "坮語",
        "reading": "かんご (坮)",
        "meaning": "坮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_144",
    "level": "N1",
    "kanji": "坿",
    "onyomi": "カン (n1_144)",
    "kunyomi": "ひと (n1_144)",
    "meaningUz": "N1 Iyeroglifi #144 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "坿語",
        "reading": "かんご (坿)",
        "meaning": "坿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_145",
    "level": "N1",
    "kanji": "垐",
    "onyomi": "カン (n1_145)",
    "kunyomi": "ひと (n1_145)",
    "meaningUz": "N1 Iyeroglifi #145 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "垐語",
        "reading": "かんご (垐)",
        "meaning": "垐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_146",
    "level": "N1",
    "kanji": "垡",
    "onyomi": "カン (n1_146)",
    "kunyomi": "ひと (n1_146)",
    "meaningUz": "N1 Iyeroglifi #146 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "垡語",
        "reading": "かんご (垡)",
        "meaning": "垡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_147",
    "level": "N1",
    "kanji": "垲",
    "onyomi": "カン (n1_147)",
    "kunyomi": "ひと (n1_147)",
    "meaningUz": "N1 Iyeroglifi #147 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "垲語",
        "reading": "かんご (垲)",
        "meaning": "垲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_148",
    "level": "N1",
    "kanji": "埃",
    "onyomi": "カン (n1_148)",
    "kunyomi": "ひと (n1_148)",
    "meaningUz": "N1 Iyeroglifi #148 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "埃語",
        "reading": "かんご (埃)",
        "meaning": "埃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_149",
    "level": "N1",
    "kanji": "埔",
    "onyomi": "カン (n1_149)",
    "kunyomi": "ひと (n1_149)",
    "meaningUz": "N1 Iyeroglifi #149 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "埔語",
        "reading": "かんご (埔)",
        "meaning": "埔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_150",
    "level": "N1",
    "kanji": "埥",
    "onyomi": "カン (n1_150)",
    "kunyomi": "ひと (n1_150)",
    "meaningUz": "N1 Iyeroglifi #150 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "埥語",
        "reading": "かんご (埥)",
        "meaning": "埥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_151",
    "level": "N1",
    "kanji": "埶",
    "onyomi": "カン (n1_151)",
    "kunyomi": "ひと (n1_151)",
    "meaningUz": "N1 Iyeroglifi #151 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "埶語",
        "reading": "かんご (埶)",
        "meaning": "埶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_152",
    "level": "N1",
    "kanji": "堇",
    "onyomi": "カン (n1_152)",
    "kunyomi": "ひと (n1_152)",
    "meaningUz": "N1 Iyeroglifi #152 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "堇語",
        "reading": "かんご (堇)",
        "meaning": "堇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_153",
    "level": "N1",
    "kanji": "堘",
    "onyomi": "カン (n1_153)",
    "kunyomi": "ひと (n1_153)",
    "meaningUz": "N1 Iyeroglifi #153 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "堘語",
        "reading": "かんご (堘)",
        "meaning": "堘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_154",
    "level": "N1",
    "kanji": "堩",
    "onyomi": "カン (n1_154)",
    "kunyomi": "ひと (n1_154)",
    "meaningUz": "N1 Iyeroglifi #154 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "堩語",
        "reading": "かんご (堩)",
        "meaning": "堩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_155",
    "level": "N1",
    "kanji": "堺",
    "onyomi": "カン (n1_155)",
    "kunyomi": "ひと (n1_155)",
    "meaningUz": "N1 Iyeroglifi #155 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "堺語",
        "reading": "かんご (堺)",
        "meaning": "堺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_156",
    "level": "N1",
    "kanji": "塋",
    "onyomi": "カン (n1_156)",
    "kunyomi": "ひと (n1_156)",
    "meaningUz": "N1 Iyeroglifi #156 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "塋語",
        "reading": "かんご (塋)",
        "meaning": "塋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_157",
    "level": "N1",
    "kanji": "塜",
    "onyomi": "カン (n1_157)",
    "kunyomi": "ひと (n1_157)",
    "meaningUz": "N1 Iyeroglifi #157 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "塜語",
        "reading": "かんご (塜)",
        "meaning": "塜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_158",
    "level": "N1",
    "kanji": "塭",
    "onyomi": "カン (n1_158)",
    "kunyomi": "ひと (n1_158)",
    "meaningUz": "N1 Iyeroglifi #158 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "塭語",
        "reading": "かんご (塭)",
        "meaning": "塭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_159",
    "level": "N1",
    "kanji": "塾",
    "onyomi": "カン (n1_159)",
    "kunyomi": "ひと (n1_159)",
    "meaningUz": "N1 Iyeroglifi #159 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "塾語",
        "reading": "かんご (塾)",
        "meaning": "塾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_160",
    "level": "N1",
    "kanji": "墏",
    "onyomi": "カン (n1_160)",
    "kunyomi": "ひと (n1_160)",
    "meaningUz": "N1 Iyeroglifi #160 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "墏語",
        "reading": "かんご (墏)",
        "meaning": "墏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_161",
    "level": "N1",
    "kanji": "墠",
    "onyomi": "カン (n1_161)",
    "kunyomi": "ひと (n1_161)",
    "meaningUz": "N1 Iyeroglifi #161 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "墠語",
        "reading": "かんご (墠)",
        "meaning": "墠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_162",
    "level": "N1",
    "kanji": "墱",
    "onyomi": "カン (n1_162)",
    "kunyomi": "ひと (n1_162)",
    "meaningUz": "N1 Iyeroglifi #162 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "墱語",
        "reading": "かんご (墱)",
        "meaning": "墱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_163",
    "level": "N1",
    "kanji": "壂",
    "onyomi": "カン (n1_163)",
    "kunyomi": "ひと (n1_163)",
    "meaningUz": "N1 Iyeroglifi #163 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "壂語",
        "reading": "かんご (壂)",
        "meaning": "壂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_164",
    "level": "N1",
    "kanji": "壓",
    "onyomi": "カン (n1_164)",
    "kunyomi": "ひと (n1_164)",
    "meaningUz": "N1 Iyeroglifi #164 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "壓語",
        "reading": "かんご (壓)",
        "meaning": "壓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_165",
    "level": "N1",
    "kanji": "壤",
    "onyomi": "カン (n1_165)",
    "kunyomi": "ひと (n1_165)",
    "meaningUz": "N1 Iyeroglifi #165 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "壤語",
        "reading": "かんご (壤)",
        "meaning": "壤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_166",
    "level": "N1",
    "kanji": "壵",
    "onyomi": "カン (n1_166)",
    "kunyomi": "ひと (n1_166)",
    "meaningUz": "N1 Iyeroglifi #166 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "壵語",
        "reading": "かんご (壵)",
        "meaning": "壵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_167",
    "level": "N1",
    "kanji": "夆",
    "onyomi": "カン (n1_167)",
    "kunyomi": "ひと (n1_167)",
    "meaningUz": "N1 Iyeroglifi #167 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "夆語",
        "reading": "かんご (夆)",
        "meaning": "夆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_168",
    "level": "N1",
    "kanji": "夗",
    "onyomi": "カン (n1_168)",
    "kunyomi": "ひと (n1_168)",
    "meaningUz": "N1 Iyeroglifi #168 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "夗語",
        "reading": "かんご (夗)",
        "meaning": "夗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_169",
    "level": "N1",
    "kanji": "夨",
    "onyomi": "カン (n1_169)",
    "kunyomi": "ひと (n1_169)",
    "meaningUz": "N1 Iyeroglifi #169 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "夨語",
        "reading": "かんご (夨)",
        "meaning": "夨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_170",
    "level": "N1",
    "kanji": "夹",
    "onyomi": "カン (n1_170)",
    "kunyomi": "ひと (n1_170)",
    "meaningUz": "N1 Iyeroglifi #170 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "夹語",
        "reading": "かんご (夹)",
        "meaning": "夹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_171",
    "level": "N1",
    "kanji": "奊",
    "onyomi": "カン (n1_171)",
    "kunyomi": "ひと (n1_171)",
    "meaningUz": "N1 Iyeroglifi #171 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "奊語",
        "reading": "かんご (奊)",
        "meaning": "奊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_172",
    "level": "N1",
    "kanji": "奛",
    "onyomi": "カン (n1_172)",
    "kunyomi": "ひと (n1_172)",
    "meaningUz": "N1 Iyeroglifi #172 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "奛語",
        "reading": "かんご (奛)",
        "meaning": "奛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_173",
    "level": "N1",
    "kanji": "奬",
    "onyomi": "カン (n1_173)",
    "kunyomi": "ひと (n1_173)",
    "meaningUz": "N1 Iyeroglifi #173 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "奬語",
        "reading": "かんご (奬)",
        "meaning": "奬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_174",
    "level": "N1",
    "kanji": "好",
    "onyomi": "カン (n1_174)",
    "kunyomi": "ひと (n1_174)",
    "meaningUz": "N1 Iyeroglifi #174 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "好語",
        "reading": "かんご (好)",
        "meaning": "好 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_175",
    "level": "N1",
    "kanji": "妎",
    "onyomi": "カン (n1_175)",
    "kunyomi": "ひと (n1_175)",
    "meaningUz": "N1 Iyeroglifi #175 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "妎語",
        "reading": "かんご (妎)",
        "meaning": "妎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_176",
    "level": "N1",
    "kanji": "妟",
    "onyomi": "カン (n1_176)",
    "kunyomi": "ひと (n1_176)",
    "meaningUz": "N1 Iyeroglifi #176 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "妟語",
        "reading": "かんご (妟)",
        "meaning": "妟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_177",
    "level": "N1",
    "kanji": "妰",
    "onyomi": "カン (n1_177)",
    "kunyomi": "ひと (n1_177)",
    "meaningUz": "N1 Iyeroglifi #177 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "妰語",
        "reading": "かんご (妰)",
        "meaning": "妰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_178",
    "level": "N1",
    "kanji": "姁",
    "onyomi": "カン (n1_178)",
    "kunyomi": "ひと (n1_178)",
    "meaningUz": "N1 Iyeroglifi #178 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "姁語",
        "reading": "かんご (姁)",
        "meaning": "姁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_179",
    "level": "N1",
    "kanji": "姒",
    "onyomi": "カン (n1_179)",
    "kunyomi": "ひと (n1_179)",
    "meaningUz": "N1 Iyeroglifi #179 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "姒語",
        "reading": "かんご (姒)",
        "meaning": "姒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_180",
    "level": "N1",
    "kanji": "姣",
    "onyomi": "カン (n1_180)",
    "kunyomi": "ひと (n1_180)",
    "meaningUz": "N1 Iyeroglifi #180 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "姣語",
        "reading": "かんご (姣)",
        "meaning": "姣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_181",
    "level": "N1",
    "kanji": "姴",
    "onyomi": "カン (n1_181)",
    "kunyomi": "ひと (n1_181)",
    "meaningUz": "N1 Iyeroglifi #181 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "姴語",
        "reading": "かんご (姴)",
        "meaning": "姴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_182",
    "level": "N1",
    "kanji": "娅",
    "onyomi": "カン (n1_182)",
    "kunyomi": "ひと (n1_182)",
    "meaningUz": "N1 Iyeroglifi #182 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "娅語",
        "reading": "かんご (娅)",
        "meaning": "娅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_183",
    "level": "N1",
    "kanji": "娖",
    "onyomi": "カン (n1_183)",
    "kunyomi": "ひと (n1_183)",
    "meaningUz": "N1 Iyeroglifi #183 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "娖語",
        "reading": "かんご (娖)",
        "meaning": "娖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_184",
    "level": "N1",
    "kanji": "娧",
    "onyomi": "カン (n1_184)",
    "kunyomi": "ひと (n1_184)",
    "meaningUz": "N1 Iyeroglifi #184 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "娧語",
        "reading": "かんご (娧)",
        "meaning": "娧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_185",
    "level": "N1",
    "kanji": "娸",
    "onyomi": "カン (n1_185)",
    "kunyomi": "ひと (n1_185)",
    "meaningUz": "N1 Iyeroglifi #185 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "娸語",
        "reading": "かんご (娸)",
        "meaning": "娸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_186",
    "level": "N1",
    "kanji": "婉",
    "onyomi": "カン (n1_186)",
    "kunyomi": "ひと (n1_186)",
    "meaningUz": "N1 Iyeroglifi #186 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "婉語",
        "reading": "かんご (婉)",
        "meaning": "婉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_187",
    "level": "N1",
    "kanji": "婚",
    "onyomi": "カン (n1_187)",
    "kunyomi": "ひと (n1_187)",
    "meaningUz": "N1 Iyeroglifi #187 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "婚語",
        "reading": "かんご (婚)",
        "meaning": "婚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_188",
    "level": "N1",
    "kanji": "婫",
    "onyomi": "カン (n1_188)",
    "kunyomi": "ひと (n1_188)",
    "meaningUz": "N1 Iyeroglifi #188 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "婫語",
        "reading": "かんご (婫)",
        "meaning": "婫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_189",
    "level": "N1",
    "kanji": "婼",
    "onyomi": "カン (n1_189)",
    "kunyomi": "ひと (n1_189)",
    "meaningUz": "N1 Iyeroglifi #189 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "婼語",
        "reading": "かんご (婼)",
        "meaning": "婼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_190",
    "level": "N1",
    "kanji": "媍",
    "onyomi": "カン (n1_190)",
    "kunyomi": "ひと (n1_190)",
    "meaningUz": "N1 Iyeroglifi #190 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "媍語",
        "reading": "かんご (媍)",
        "meaning": "媍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_191",
    "level": "N1",
    "kanji": "媞",
    "onyomi": "カン (n1_191)",
    "kunyomi": "ひと (n1_191)",
    "meaningUz": "N1 Iyeroglifi #191 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "媞語",
        "reading": "かんご (媞)",
        "meaning": "媞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_192",
    "level": "N1",
    "kanji": "媯",
    "onyomi": "カン (n1_192)",
    "kunyomi": "ひと (n1_192)",
    "meaningUz": "N1 Iyeroglifi #192 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "媯語",
        "reading": "かんご (媯)",
        "meaning": "媯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_193",
    "level": "N1",
    "kanji": "嫀",
    "onyomi": "カン (n1_193)",
    "kunyomi": "ひと (n1_193)",
    "meaningUz": "N1 Iyeroglifi #193 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嫀語",
        "reading": "かんご (嫀)",
        "meaning": "嫀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_194",
    "level": "N1",
    "kanji": "嫑",
    "onyomi": "カン (n1_194)",
    "kunyomi": "ひと (n1_194)",
    "meaningUz": "N1 Iyeroglifi #194 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "嫑語",
        "reading": "かんご (嫑)",
        "meaning": "嫑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_195",
    "level": "N1",
    "kanji": "嫢",
    "onyomi": "カン (n1_195)",
    "kunyomi": "ひと (n1_195)",
    "meaningUz": "N1 Iyeroglifi #195 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "嫢語",
        "reading": "かんご (嫢)",
        "meaning": "嫢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_196",
    "level": "N1",
    "kanji": "嫳",
    "onyomi": "カン (n1_196)",
    "kunyomi": "ひと (n1_196)",
    "meaningUz": "N1 Iyeroglifi #196 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "嫳語",
        "reading": "かんご (嫳)",
        "meaning": "嫳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_197",
    "level": "N1",
    "kanji": "嬄",
    "onyomi": "カン (n1_197)",
    "kunyomi": "ひと (n1_197)",
    "meaningUz": "N1 Iyeroglifi #197 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "嬄語",
        "reading": "かんご (嬄)",
        "meaning": "嬄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_198",
    "level": "N1",
    "kanji": "嬕",
    "onyomi": "カン (n1_198)",
    "kunyomi": "ひと (n1_198)",
    "meaningUz": "N1 Iyeroglifi #198 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "嬕語",
        "reading": "かんご (嬕)",
        "meaning": "嬕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_199",
    "level": "N1",
    "kanji": "嬦",
    "onyomi": "カン (n1_199)",
    "kunyomi": "ひと (n1_199)",
    "meaningUz": "N1 Iyeroglifi #199 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "嬦語",
        "reading": "かんご (嬦)",
        "meaning": "嬦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_200",
    "level": "N1",
    "kanji": "嬷",
    "onyomi": "カン (n1_200)",
    "kunyomi": "ひと (n1_200)",
    "meaningUz": "N1 Iyeroglifi #200 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "嬷語",
        "reading": "かんご (嬷)",
        "meaning": "嬷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_201",
    "level": "N1",
    "kanji": "孈",
    "onyomi": "カン (n1_201)",
    "kunyomi": "ひと (n1_201)",
    "meaningUz": "N1 Iyeroglifi #201 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "孈語",
        "reading": "かんご (孈)",
        "meaning": "孈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_202",
    "level": "N1",
    "kanji": "孙",
    "onyomi": "カン (n1_202)",
    "kunyomi": "ひと (n1_202)",
    "meaningUz": "N1 Iyeroglifi #202 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "孙語",
        "reading": "かんご (孙)",
        "meaning": "孙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_203",
    "level": "N1",
    "kanji": "孪",
    "onyomi": "カン (n1_203)",
    "kunyomi": "ひと (n1_203)",
    "meaningUz": "N1 Iyeroglifi #203 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "孪語",
        "reading": "かんご (孪)",
        "meaning": "孪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_204",
    "level": "N1",
    "kanji": "孻",
    "onyomi": "カン (n1_204)",
    "kunyomi": "ひと (n1_204)",
    "meaningUz": "N1 Iyeroglifi #204 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "孻語",
        "reading": "かんご (孻)",
        "meaning": "孻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_205",
    "level": "N1",
    "kanji": "完",
    "onyomi": "カン (n1_205)",
    "kunyomi": "ひと (n1_205)",
    "meaningUz": "N1 Iyeroglifi #205 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "完語",
        "reading": "かんご (完)",
        "meaning": "完 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_206",
    "level": "N1",
    "kanji": "宝",
    "onyomi": "カン (n1_206)",
    "kunyomi": "ひと (n1_206)",
    "meaningUz": "N1 Iyeroglifi #206 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "宝語",
        "reading": "かんご (宝)",
        "meaning": "宝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_207",
    "level": "N1",
    "kanji": "宮",
    "onyomi": "カン (n1_207)",
    "kunyomi": "ひと (n1_207)",
    "meaningUz": "N1 Iyeroglifi #207 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "宮語",
        "reading": "かんご (宮)",
        "meaning": "宮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_208",
    "level": "N1",
    "kanji": "宿",
    "onyomi": "カン (n1_208)",
    "kunyomi": "ひと (n1_208)",
    "meaningUz": "N1 Iyeroglifi #208 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "宿語",
        "reading": "かんご (宿)",
        "meaning": "宿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_209",
    "level": "N1",
    "kanji": "寐",
    "onyomi": "カン (n1_209)",
    "kunyomi": "ひと (n1_209)",
    "meaningUz": "N1 Iyeroglifi #209 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "寐語",
        "reading": "かんご (寐)",
        "meaning": "寐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_210",
    "level": "N1",
    "kanji": "寡",
    "onyomi": "カン (n1_210)",
    "kunyomi": "ひと (n1_210)",
    "meaningUz": "N1 Iyeroglifi #210 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "寡語",
        "reading": "かんご (寡)",
        "meaning": "寡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_211",
    "level": "N1",
    "kanji": "寲",
    "onyomi": "カン (n1_211)",
    "kunyomi": "ひと (n1_211)",
    "meaningUz": "N1 Iyeroglifi #211 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "寲語",
        "reading": "かんご (寲)",
        "meaning": "寲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_212",
    "level": "N1",
    "kanji": "尃",
    "onyomi": "カン (n1_212)",
    "kunyomi": "ひと (n1_212)",
    "meaningUz": "N1 Iyeroglifi #212 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "尃語",
        "reading": "かんご (尃)",
        "meaning": "尃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_213",
    "level": "N1",
    "kanji": "尔",
    "onyomi": "カン (n1_213)",
    "kunyomi": "ひと (n1_213)",
    "meaningUz": "N1 Iyeroglifi #213 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "尔語",
        "reading": "かんご (尔)",
        "meaning": "尔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_214",
    "level": "N1",
    "kanji": "尥",
    "onyomi": "カン (n1_214)",
    "kunyomi": "ひと (n1_214)",
    "meaningUz": "N1 Iyeroglifi #214 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "尥語",
        "reading": "かんご (尥)",
        "meaning": "尥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_215",
    "level": "N1",
    "kanji": "尶",
    "onyomi": "カン (n1_215)",
    "kunyomi": "ひと (n1_215)",
    "meaningUz": "N1 Iyeroglifi #215 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "尶語",
        "reading": "かんご (尶)",
        "meaning": "尶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_216",
    "level": "N1",
    "kanji": "屇",
    "onyomi": "カン (n1_216)",
    "kunyomi": "ひと (n1_216)",
    "meaningUz": "N1 Iyeroglifi #216 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "屇語",
        "reading": "かんご (屇)",
        "meaning": "屇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_217",
    "level": "N1",
    "kanji": "屘",
    "onyomi": "カン (n1_217)",
    "kunyomi": "ひと (n1_217)",
    "meaningUz": "N1 Iyeroglifi #217 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "屘語",
        "reading": "かんご (屘)",
        "meaning": "屘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_218",
    "level": "N1",
    "kanji": "屩",
    "onyomi": "カン (n1_218)",
    "kunyomi": "ひと (n1_218)",
    "meaningUz": "N1 Iyeroglifi #218 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "屩語",
        "reading": "かんご (屩)",
        "meaning": "屩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_219",
    "level": "N1",
    "kanji": "屺",
    "onyomi": "カン (n1_219)",
    "kunyomi": "ひと (n1_219)",
    "meaningUz": "N1 Iyeroglifi #219 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "屺語",
        "reading": "かんご (屺)",
        "meaning": "屺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_220",
    "level": "N1",
    "kanji": "岋",
    "onyomi": "カン (n1_220)",
    "kunyomi": "ひと (n1_220)",
    "meaningUz": "N1 Iyeroglifi #220 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "岋語",
        "reading": "かんご (岋)",
        "meaning": "岋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_221",
    "level": "N1",
    "kanji": "岜",
    "onyomi": "カン (n1_221)",
    "kunyomi": "ひと (n1_221)",
    "meaningUz": "N1 Iyeroglifi #221 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "岜語",
        "reading": "かんご (岜)",
        "meaning": "岜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_222",
    "level": "N1",
    "kanji": "岭",
    "onyomi": "カン (n1_222)",
    "kunyomi": "ひと (n1_222)",
    "meaningUz": "N1 Iyeroglifi #222 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "岭語",
        "reading": "かんご (岭)",
        "meaning": "岭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_223",
    "level": "N1",
    "kanji": "岾",
    "onyomi": "カン (n1_223)",
    "kunyomi": "ひと (n1_223)",
    "meaningUz": "N1 Iyeroglifi #223 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "岾語",
        "reading": "かんご (岾)",
        "meaning": "岾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_224",
    "level": "N1",
    "kanji": "峏",
    "onyomi": "カン (n1_224)",
    "kunyomi": "ひと (n1_224)",
    "meaningUz": "N1 Iyeroglifi #224 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "峏語",
        "reading": "かんご (峏)",
        "meaning": "峏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_225",
    "level": "N1",
    "kanji": "峠",
    "onyomi": "カン (n1_225)",
    "kunyomi": "ひと (n1_225)",
    "meaningUz": "N1 Iyeroglifi #225 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "峠語",
        "reading": "かんご (峠)",
        "meaning": "峠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_226",
    "level": "N1",
    "kanji": "峱",
    "onyomi": "カン (n1_226)",
    "kunyomi": "ひと (n1_226)",
    "meaningUz": "N1 Iyeroglifi #226 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "峱語",
        "reading": "かんご (峱)",
        "meaning": "峱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_227",
    "level": "N1",
    "kanji": "崂",
    "onyomi": "カン (n1_227)",
    "kunyomi": "ひと (n1_227)",
    "meaningUz": "N1 Iyeroglifi #227 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "崂語",
        "reading": "かんご (崂)",
        "meaning": "崂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_228",
    "level": "N1",
    "kanji": "崓",
    "onyomi": "カン (n1_228)",
    "kunyomi": "ひと (n1_228)",
    "meaningUz": "N1 Iyeroglifi #228 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "崓語",
        "reading": "かんご (崓)",
        "meaning": "崓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_229",
    "level": "N1",
    "kanji": "崤",
    "onyomi": "カン (n1_229)",
    "kunyomi": "ひと (n1_229)",
    "meaningUz": "N1 Iyeroglifi #229 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "崤語",
        "reading": "かんご (崤)",
        "meaning": "崤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_230",
    "level": "N1",
    "kanji": "崵",
    "onyomi": "カン (n1_230)",
    "kunyomi": "ひと (n1_230)",
    "meaningUz": "N1 Iyeroglifi #230 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "崵語",
        "reading": "かんご (崵)",
        "meaning": "崵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_231",
    "level": "N1",
    "kanji": "嵆",
    "onyomi": "カン (n1_231)",
    "kunyomi": "ひと (n1_231)",
    "meaningUz": "N1 Iyeroglifi #231 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "嵆語",
        "reading": "かんご (嵆)",
        "meaning": "嵆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_232",
    "level": "N1",
    "kanji": "嵗",
    "onyomi": "カン (n1_232)",
    "kunyomi": "ひと (n1_232)",
    "meaningUz": "N1 Iyeroglifi #232 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "嵗語",
        "reading": "かんご (嵗)",
        "meaning": "嵗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_233",
    "level": "N1",
    "kanji": "嵨",
    "onyomi": "カン (n1_233)",
    "kunyomi": "ひと (n1_233)",
    "meaningUz": "N1 Iyeroglifi #233 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "嵨語",
        "reading": "かんご (嵨)",
        "meaning": "嵨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_234",
    "level": "N1",
    "kanji": "嵹",
    "onyomi": "カン (n1_234)",
    "kunyomi": "ひと (n1_234)",
    "meaningUz": "N1 Iyeroglifi #234 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "嵹語",
        "reading": "かんご (嵹)",
        "meaning": "嵹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_235",
    "level": "N1",
    "kanji": "嶊",
    "onyomi": "カン (n1_235)",
    "kunyomi": "ひと (n1_235)",
    "meaningUz": "N1 Iyeroglifi #235 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "嶊語",
        "reading": "かんご (嶊)",
        "meaning": "嶊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_236",
    "level": "N1",
    "kanji": "嶛",
    "onyomi": "カン (n1_236)",
    "kunyomi": "ひと (n1_236)",
    "meaningUz": "N1 Iyeroglifi #236 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "嶛語",
        "reading": "かんご (嶛)",
        "meaning": "嶛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_237",
    "level": "N1",
    "kanji": "嶬",
    "onyomi": "カン (n1_237)",
    "kunyomi": "ひと (n1_237)",
    "meaningUz": "N1 Iyeroglifi #237 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "嶬語",
        "reading": "かんご (嶬)",
        "meaning": "嶬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_238",
    "level": "N1",
    "kanji": "嶽",
    "onyomi": "カン (n1_238)",
    "kunyomi": "ひと (n1_238)",
    "meaningUz": "N1 Iyeroglifi #238 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "嶽語",
        "reading": "かんご (嶽)",
        "meaning": "嶽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_239",
    "level": "N1",
    "kanji": "巎",
    "onyomi": "カン (n1_239)",
    "kunyomi": "ひと (n1_239)",
    "meaningUz": "N1 Iyeroglifi #239 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "巎語",
        "reading": "かんご (巎)",
        "meaning": "巎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_240",
    "level": "N1",
    "kanji": "巟",
    "onyomi": "カン (n1_240)",
    "kunyomi": "ひと (n1_240)",
    "meaningUz": "N1 Iyeroglifi #240 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "巟語",
        "reading": "かんご (巟)",
        "meaning": "巟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_241",
    "level": "N1",
    "kanji": "巰",
    "onyomi": "カン (n1_241)",
    "kunyomi": "ひと (n1_241)",
    "meaningUz": "N1 Iyeroglifi #241 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "巰語",
        "reading": "かんご (巰)",
        "meaning": "巰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_242",
    "level": "N1",
    "kanji": "币",
    "onyomi": "カン (n1_242)",
    "kunyomi": "ひと (n1_242)",
    "meaningUz": "N1 Iyeroglifi #242 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "币語",
        "reading": "かんご (币)",
        "meaning": "币 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_243",
    "level": "N1",
    "kanji": "帒",
    "onyomi": "カン (n1_243)",
    "kunyomi": "ひと (n1_243)",
    "meaningUz": "N1 Iyeroglifi #243 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "帒語",
        "reading": "かんご (帒)",
        "meaning": "帒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_244",
    "level": "N1",
    "kanji": "帣",
    "onyomi": "カン (n1_244)",
    "kunyomi": "ひと (n1_244)",
    "meaningUz": "N1 Iyeroglifi #244 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "帣語",
        "reading": "かんご (帣)",
        "meaning": "帣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_245",
    "level": "N1",
    "kanji": "帴",
    "onyomi": "カン (n1_245)",
    "kunyomi": "ひと (n1_245)",
    "meaningUz": "N1 Iyeroglifi #245 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "帴語",
        "reading": "かんご (帴)",
        "meaning": "帴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_246",
    "level": "N1",
    "kanji": "幅",
    "onyomi": "カン (n1_246)",
    "kunyomi": "ひと (n1_246)",
    "meaningUz": "N1 Iyeroglifi #246 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "幅語",
        "reading": "かんご (幅)",
        "meaning": "幅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_247",
    "level": "N1",
    "kanji": "幖",
    "onyomi": "カン (n1_247)",
    "kunyomi": "ひと (n1_247)",
    "meaningUz": "N1 Iyeroglifi #247 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "幖語",
        "reading": "かんご (幖)",
        "meaning": "幖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_248",
    "level": "N1",
    "kanji": "幧",
    "onyomi": "カン (n1_248)",
    "kunyomi": "ひと (n1_248)",
    "meaningUz": "N1 Iyeroglifi #248 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "幧語",
        "reading": "かんご (幧)",
        "meaning": "幧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_249",
    "level": "N1",
    "kanji": "幸",
    "onyomi": "カン (n1_249)",
    "kunyomi": "ひと (n1_249)",
    "meaningUz": "N1 Iyeroglifi #249 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "幸語",
        "reading": "かんご (幸)",
        "meaning": "幸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_250",
    "level": "N1",
    "kanji": "庉",
    "onyomi": "カン (n1_250)",
    "kunyomi": "ひと (n1_250)",
    "meaningUz": "N1 Iyeroglifi #250 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "庉語",
        "reading": "かんご (庉)",
        "meaning": "庉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_251",
    "level": "N1",
    "kanji": "庚",
    "onyomi": "カン (n1_251)",
    "kunyomi": "ひと (n1_251)",
    "meaningUz": "N1 Iyeroglifi #251 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "庚語",
        "reading": "かんご (庚)",
        "meaning": "庚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_252",
    "level": "N1",
    "kanji": "庫",
    "onyomi": "カン (n1_252)",
    "kunyomi": "ひと (n1_252)",
    "meaningUz": "N1 Iyeroglifi #252 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "庫語",
        "reading": "かんご (庫)",
        "meaning": "庫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_253",
    "level": "N1",
    "kanji": "庼",
    "onyomi": "カン (n1_253)",
    "kunyomi": "ひと (n1_253)",
    "meaningUz": "N1 Iyeroglifi #253 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "庼語",
        "reading": "かんご (庼)",
        "meaning": "庼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_254",
    "level": "N1",
    "kanji": "廍",
    "onyomi": "カン (n1_254)",
    "kunyomi": "ひと (n1_254)",
    "meaningUz": "N1 Iyeroglifi #254 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "廍語",
        "reading": "かんご (廍)",
        "meaning": "廍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_255",
    "level": "N1",
    "kanji": "廞",
    "onyomi": "カン (n1_255)",
    "kunyomi": "ひと (n1_255)",
    "meaningUz": "N1 Iyeroglifi #255 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "廞語",
        "reading": "かんご (廞)",
        "meaning": "廞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_256",
    "level": "N1",
    "kanji": "廯",
    "onyomi": "カン (n1_256)",
    "kunyomi": "ひと (n1_256)",
    "meaningUz": "N1 Iyeroglifi #256 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "廯語",
        "reading": "かんご (廯)",
        "meaning": "廯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_257",
    "level": "N1",
    "kanji": "开",
    "onyomi": "カン (n1_257)",
    "kunyomi": "ひと (n1_257)",
    "meaningUz": "N1 Iyeroglifi #257 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "开語",
        "reading": "かんご (开)",
        "meaning": "开 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_258",
    "level": "N1",
    "kanji": "弑",
    "onyomi": "カン (n1_258)",
    "kunyomi": "ひと (n1_258)",
    "meaningUz": "N1 Iyeroglifi #258 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "弑語",
        "reading": "かんご (弑)",
        "meaning": "弑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_259",
    "level": "N1",
    "kanji": "弢",
    "onyomi": "カン (n1_259)",
    "kunyomi": "ひと (n1_259)",
    "meaningUz": "N1 Iyeroglifi #259 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "弢語",
        "reading": "かんご (弢)",
        "meaning": "弢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_260",
    "level": "N1",
    "kanji": "弳",
    "onyomi": "カン (n1_260)",
    "kunyomi": "ひと (n1_260)",
    "meaningUz": "N1 Iyeroglifi #260 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "弳語",
        "reading": "かんご (弳)",
        "meaning": "弳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_261",
    "level": "N1",
    "kanji": "彄",
    "onyomi": "カン (n1_261)",
    "kunyomi": "ひと (n1_261)",
    "meaningUz": "N1 Iyeroglifi #261 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "彄語",
        "reading": "かんご (彄)",
        "meaning": "彄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_262",
    "level": "N1",
    "kanji": "录",
    "onyomi": "カン (n1_262)",
    "kunyomi": "ひと (n1_262)",
    "meaningUz": "N1 Iyeroglifi #262 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "录語",
        "reading": "かんご (录)",
        "meaning": "录 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_263",
    "level": "N1",
    "kanji": "彦",
    "onyomi": "カン (n1_263)",
    "kunyomi": "ひと (n1_263)",
    "meaningUz": "N1 Iyeroglifi #263 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "彦語",
        "reading": "かんご (彦)",
        "meaning": "彦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_264",
    "level": "N1",
    "kanji": "彷",
    "onyomi": "カン (n1_264)",
    "kunyomi": "ひと (n1_264)",
    "meaningUz": "N1 Iyeroglifi #264 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "彷語",
        "reading": "かんご (彷)",
        "meaning": "彷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_265",
    "level": "N1",
    "kanji": "很",
    "onyomi": "カン (n1_265)",
    "kunyomi": "ひと (n1_265)",
    "meaningUz": "N1 Iyeroglifi #265 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "很語",
        "reading": "かんご (很)",
        "meaning": "很 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_266",
    "level": "N1",
    "kanji": "徙",
    "onyomi": "カン (n1_266)",
    "kunyomi": "ひと (n1_266)",
    "meaningUz": "N1 Iyeroglifi #266 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "徙語",
        "reading": "かんご (徙)",
        "meaning": "徙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_267",
    "level": "N1",
    "kanji": "循",
    "onyomi": "カン (n1_267)",
    "kunyomi": "ひと (n1_267)",
    "meaningUz": "N1 Iyeroglifi #267 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "循語",
        "reading": "かんご (循)",
        "meaning": "循 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_268",
    "level": "N1",
    "kanji": "徻",
    "onyomi": "カン (n1_268)",
    "kunyomi": "ひと (n1_268)",
    "meaningUz": "N1 Iyeroglifi #268 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "徻語",
        "reading": "かんご (徻)",
        "meaning": "徻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_269",
    "level": "N1",
    "kanji": "忌",
    "onyomi": "カン (n1_269)",
    "kunyomi": "ひと (n1_269)",
    "meaningUz": "N1 Iyeroglifi #269 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "忌語",
        "reading": "かんご (忌)",
        "meaning": "忌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_270",
    "level": "N1",
    "kanji": "忝",
    "onyomi": "カン (n1_270)",
    "kunyomi": "ひと (n1_270)",
    "meaningUz": "N1 Iyeroglifi #270 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "忝語",
        "reading": "かんご (忝)",
        "meaning": "忝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_271",
    "level": "N1",
    "kanji": "忮",
    "onyomi": "カン (n1_271)",
    "kunyomi": "ひと (n1_271)",
    "meaningUz": "N1 Iyeroglifi #271 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "忮語",
        "reading": "かんご (忮)",
        "meaning": "忮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_272",
    "level": "N1",
    "kanji": "忿",
    "onyomi": "カン (n1_272)",
    "kunyomi": "ひと (n1_272)",
    "meaningUz": "N1 Iyeroglifi #272 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "忿語",
        "reading": "かんご (忿)",
        "meaning": "忿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_273",
    "level": "N1",
    "kanji": "怐",
    "onyomi": "カン (n1_273)",
    "kunyomi": "ひと (n1_273)",
    "meaningUz": "N1 Iyeroglifi #273 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "怐語",
        "reading": "かんご (怐)",
        "meaning": "怐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_274",
    "level": "N1",
    "kanji": "怡",
    "onyomi": "カン (n1_274)",
    "kunyomi": "ひと (n1_274)",
    "meaningUz": "N1 Iyeroglifi #274 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "怡語",
        "reading": "かんご (怡)",
        "meaning": "怡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_275",
    "level": "N1",
    "kanji": "怲",
    "onyomi": "カン (n1_275)",
    "kunyomi": "ひと (n1_275)",
    "meaningUz": "N1 Iyeroglifi #275 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "怲語",
        "reading": "かんご (怲)",
        "meaning": "怲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_276",
    "level": "N1",
    "kanji": "恃",
    "onyomi": "カン (n1_276)",
    "kunyomi": "ひと (n1_276)",
    "meaningUz": "N1 Iyeroglifi #276 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "恃語",
        "reading": "かんご (恃)",
        "meaning": "恃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_277",
    "level": "N1",
    "kanji": "恔",
    "onyomi": "カン (n1_277)",
    "kunyomi": "ひと (n1_277)",
    "meaningUz": "N1 Iyeroglifi #277 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "恔語",
        "reading": "かんご (恔)",
        "meaning": "恔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_278",
    "level": "N1",
    "kanji": "恥",
    "onyomi": "カン (n1_278)",
    "kunyomi": "ひと (n1_278)",
    "meaningUz": "N1 Iyeroglifi #278 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "恥語",
        "reading": "かんご (恥)",
        "meaning": "恥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_279",
    "level": "N1",
    "kanji": "恶",
    "onyomi": "カン (n1_279)",
    "kunyomi": "ひと (n1_279)",
    "meaningUz": "N1 Iyeroglifi #279 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "恶語",
        "reading": "かんご (恶)",
        "meaning": "恶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_280",
    "level": "N1",
    "kanji": "悇",
    "onyomi": "カン (n1_280)",
    "kunyomi": "ひと (n1_280)",
    "meaningUz": "N1 Iyeroglifi #280 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "悇語",
        "reading": "かんご (悇)",
        "meaning": "悇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_281",
    "level": "N1",
    "kanji": "悘",
    "onyomi": "カン (n1_281)",
    "kunyomi": "ひと (n1_281)",
    "meaningUz": "N1 Iyeroglifi #281 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "悘語",
        "reading": "かんご (悘)",
        "meaning": "悘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_282",
    "level": "N1",
    "kanji": "悩",
    "onyomi": "カン (n1_282)",
    "kunyomi": "ひと (n1_282)",
    "meaningUz": "N1 Iyeroglifi #282 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "悩語",
        "reading": "かんご (悩)",
        "meaning": "悩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_283",
    "level": "N1",
    "kanji": "悺",
    "onyomi": "カン (n1_283)",
    "kunyomi": "ひと (n1_283)",
    "meaningUz": "N1 Iyeroglifi #283 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "悺語",
        "reading": "かんご (悺)",
        "meaning": "悺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_284",
    "level": "N1",
    "kanji": "惋",
    "onyomi": "カン (n1_284)",
    "kunyomi": "ひと (n1_284)",
    "meaningUz": "N1 Iyeroglifi #284 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "惋語",
        "reading": "かんご (惋)",
        "meaning": "惋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_285",
    "level": "N1",
    "kanji": "惜",
    "onyomi": "カン (n1_285)",
    "kunyomi": "ひと (n1_285)",
    "meaningUz": "N1 Iyeroglifi #285 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "惜語",
        "reading": "かんご (惜)",
        "meaning": "惜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_286",
    "level": "N1",
    "kanji": "惭",
    "onyomi": "カン (n1_286)",
    "kunyomi": "ひと (n1_286)",
    "meaningUz": "N1 Iyeroglifi #286 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "惭語",
        "reading": "かんご (惭)",
        "meaning": "惭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_287",
    "level": "N1",
    "kanji": "惾",
    "onyomi": "カン (n1_287)",
    "kunyomi": "ひと (n1_287)",
    "meaningUz": "N1 Iyeroglifi #287 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "惾語",
        "reading": "かんご (惾)",
        "meaning": "惾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_288",
    "level": "N1",
    "kanji": "意",
    "onyomi": "カン (n1_288)",
    "kunyomi": "ひと (n1_288)",
    "meaningUz": "N1 Iyeroglifi #288 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "意語",
        "reading": "かんご (意)",
        "meaning": "意 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_289",
    "level": "N1",
    "kanji": "愠",
    "onyomi": "カン (n1_289)",
    "kunyomi": "ひと (n1_289)",
    "meaningUz": "N1 Iyeroglifi #289 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "愠語",
        "reading": "かんご (愠)",
        "meaning": "愠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_290",
    "level": "N1",
    "kanji": "愱",
    "onyomi": "カン (n1_290)",
    "kunyomi": "ひと (n1_290)",
    "meaningUz": "N1 Iyeroglifi #290 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "愱語",
        "reading": "かんご (愱)",
        "meaning": "愱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_291",
    "level": "N1",
    "kanji": "慂",
    "onyomi": "カン (n1_291)",
    "kunyomi": "ひと (n1_291)",
    "meaningUz": "N1 Iyeroglifi #291 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "慂語",
        "reading": "かんご (慂)",
        "meaning": "慂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_292",
    "level": "N1",
    "kanji": "慓",
    "onyomi": "カン (n1_292)",
    "kunyomi": "ひと (n1_292)",
    "meaningUz": "N1 Iyeroglifi #292 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "慓語",
        "reading": "かんご (慓)",
        "meaning": "慓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_293",
    "level": "N1",
    "kanji": "慤",
    "onyomi": "カン (n1_293)",
    "kunyomi": "ひと (n1_293)",
    "meaningUz": "N1 Iyeroglifi #293 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "慤語",
        "reading": "かんご (慤)",
        "meaning": "慤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_294",
    "level": "N1",
    "kanji": "慵",
    "onyomi": "カン (n1_294)",
    "kunyomi": "ひと (n1_294)",
    "meaningUz": "N1 Iyeroglifi #294 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "慵語",
        "reading": "かんご (慵)",
        "meaning": "慵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_295",
    "level": "N1",
    "kanji": "憆",
    "onyomi": "カン (n1_295)",
    "kunyomi": "ひと (n1_295)",
    "meaningUz": "N1 Iyeroglifi #295 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "憆語",
        "reading": "かんご (憆)",
        "meaning": "憆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_296",
    "level": "N1",
    "kanji": "憗",
    "onyomi": "カン (n1_296)",
    "kunyomi": "ひと (n1_296)",
    "meaningUz": "N1 Iyeroglifi #296 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "憗語",
        "reading": "かんご (憗)",
        "meaning": "憗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_297",
    "level": "N1",
    "kanji": "憨",
    "onyomi": "カン (n1_297)",
    "kunyomi": "ひと (n1_297)",
    "meaningUz": "N1 Iyeroglifi #297 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "憨語",
        "reading": "かんご (憨)",
        "meaning": "憨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_298",
    "level": "N1",
    "kanji": "憹",
    "onyomi": "カン (n1_298)",
    "kunyomi": "ひと (n1_298)",
    "meaningUz": "N1 Iyeroglifi #298 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "憹語",
        "reading": "かんご (憹)",
        "meaning": "憹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_299",
    "level": "N1",
    "kanji": "懊",
    "onyomi": "カン (n1_299)",
    "kunyomi": "ひと (n1_299)",
    "meaningUz": "N1 Iyeroglifi #299 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "懊語",
        "reading": "かんご (懊)",
        "meaning": "懊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_300",
    "level": "N1",
    "kanji": "懛",
    "onyomi": "カン (n1_300)",
    "kunyomi": "ひと (n1_300)",
    "meaningUz": "N1 Iyeroglifi #300 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "懛語",
        "reading": "かんご (懛)",
        "meaning": "懛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_301",
    "level": "N1",
    "kanji": "懬",
    "onyomi": "カン (n1_301)",
    "kunyomi": "ひと (n1_301)",
    "meaningUz": "N1 Iyeroglifi #301 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "懬語",
        "reading": "かんご (懬)",
        "meaning": "懬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_302",
    "level": "N1",
    "kanji": "懽",
    "onyomi": "カン (n1_302)",
    "kunyomi": "ひと (n1_302)",
    "meaningUz": "N1 Iyeroglifi #302 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "懽語",
        "reading": "かんご (懽)",
        "meaning": "懽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_303",
    "level": "N1",
    "kanji": "戎",
    "onyomi": "カン (n1_303)",
    "kunyomi": "ひと (n1_303)",
    "meaningUz": "N1 Iyeroglifi #303 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "戎語",
        "reading": "かんご (戎)",
        "meaning": "戎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_304",
    "level": "N1",
    "kanji": "戟",
    "onyomi": "カン (n1_304)",
    "kunyomi": "ひと (n1_304)",
    "meaningUz": "N1 Iyeroglifi #304 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "戟語",
        "reading": "かんご (戟)",
        "meaning": "戟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_305",
    "level": "N1",
    "kanji": "戰",
    "onyomi": "カン (n1_305)",
    "kunyomi": "ひと (n1_305)",
    "meaningUz": "N1 Iyeroglifi #305 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "戰語",
        "reading": "かんご (戰)",
        "meaning": "戰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_306",
    "level": "N1",
    "kanji": "扁",
    "onyomi": "カン (n1_306)",
    "kunyomi": "ひと (n1_306)",
    "meaningUz": "N1 Iyeroglifi #306 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "扁語",
        "reading": "かんご (扁)",
        "meaning": "扁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_307",
    "level": "N1",
    "kanji": "扒",
    "onyomi": "カン (n1_307)",
    "kunyomi": "ひと (n1_307)",
    "meaningUz": "N1 Iyeroglifi #307 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "扒語",
        "reading": "かんご (扒)",
        "meaning": "扒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_308",
    "level": "N1",
    "kanji": "扣",
    "onyomi": "カン (n1_308)",
    "kunyomi": "ひと (n1_308)",
    "meaningUz": "N1 Iyeroglifi #308 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "扣語",
        "reading": "かんご (扣)",
        "meaning": "扣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_309",
    "level": "N1",
    "kanji": "扴",
    "onyomi": "カン (n1_309)",
    "kunyomi": "ひと (n1_309)",
    "meaningUz": "N1 Iyeroglifi #309 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "扴語",
        "reading": "かんご (扴)",
        "meaning": "扴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_310",
    "level": "N1",
    "kanji": "抅",
    "onyomi": "カン (n1_310)",
    "kunyomi": "ひと (n1_310)",
    "meaningUz": "N1 Iyeroglifi #310 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "抅語",
        "reading": "かんご (抅)",
        "meaning": "抅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_311",
    "level": "N1",
    "kanji": "抖",
    "onyomi": "カン (n1_311)",
    "kunyomi": "ひと (n1_311)",
    "meaningUz": "N1 Iyeroglifi #311 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "抖語",
        "reading": "かんご (抖)",
        "meaning": "抖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_312",
    "level": "N1",
    "kanji": "抧",
    "onyomi": "カン (n1_312)",
    "kunyomi": "ひと (n1_312)",
    "meaningUz": "N1 Iyeroglifi #312 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "抧語",
        "reading": "かんご (抧)",
        "meaning": "抧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_313",
    "level": "N1",
    "kanji": "抸",
    "onyomi": "カン (n1_313)",
    "kunyomi": "ひと (n1_313)",
    "meaningUz": "N1 Iyeroglifi #313 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "抸語",
        "reading": "かんご (抸)",
        "meaning": "抸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_314",
    "level": "N1",
    "kanji": "拉",
    "onyomi": "カン (n1_314)",
    "kunyomi": "ひと (n1_314)",
    "meaningUz": "N1 Iyeroglifi #314 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "拉語",
        "reading": "かんご (拉)",
        "meaning": "拉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_315",
    "level": "N1",
    "kanji": "拚",
    "onyomi": "カン (n1_315)",
    "kunyomi": "ひと (n1_315)",
    "meaningUz": "N1 Iyeroglifi #315 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "拚語",
        "reading": "かんご (拚)",
        "meaning": "拚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_316",
    "level": "N1",
    "kanji": "拫",
    "onyomi": "カン (n1_316)",
    "kunyomi": "ひと (n1_316)",
    "meaningUz": "N1 Iyeroglifi #316 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "拫語",
        "reading": "かんご (拫)",
        "meaning": "拫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_317",
    "level": "N1",
    "kanji": "拼",
    "onyomi": "カン (n1_317)",
    "kunyomi": "ひと (n1_317)",
    "meaningUz": "N1 Iyeroglifi #317 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "拼語",
        "reading": "かんご (拼)",
        "meaning": "拼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_318",
    "level": "N1",
    "kanji": "挍",
    "onyomi": "カン (n1_318)",
    "kunyomi": "ひと (n1_318)",
    "meaningUz": "N1 Iyeroglifi #318 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "挍語",
        "reading": "かんご (挍)",
        "meaning": "挍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_319",
    "level": "N1",
    "kanji": "挞",
    "onyomi": "カン (n1_319)",
    "kunyomi": "ひと (n1_319)",
    "meaningUz": "N1 Iyeroglifi #319 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "挞語",
        "reading": "かんご (挞)",
        "meaning": "挞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_320",
    "level": "N1",
    "kanji": "振",
    "onyomi": "カン (n1_320)",
    "kunyomi": "ひと (n1_320)",
    "meaningUz": "N1 Iyeroglifi #320 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "振語",
        "reading": "かんご (振)",
        "meaning": "振 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_321",
    "level": "N1",
    "kanji": "捀",
    "onyomi": "カン (n1_321)",
    "kunyomi": "ひと (n1_321)",
    "meaningUz": "N1 Iyeroglifi #321 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "捀語",
        "reading": "かんご (捀)",
        "meaning": "捀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_322",
    "level": "N1",
    "kanji": "捑",
    "onyomi": "カン (n1_322)",
    "kunyomi": "ひと (n1_322)",
    "meaningUz": "N1 Iyeroglifi #322 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "捑語",
        "reading": "かんご (捑)",
        "meaning": "捑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_323",
    "level": "N1",
    "kanji": "换",
    "onyomi": "カン (n1_323)",
    "kunyomi": "ひと (n1_323)",
    "meaningUz": "N1 Iyeroglifi #323 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "换語",
        "reading": "かんご (换)",
        "meaning": "换 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_324",
    "level": "N1",
    "kanji": "捳",
    "onyomi": "カン (n1_324)",
    "kunyomi": "ひと (n1_324)",
    "meaningUz": "N1 Iyeroglifi #324 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "捳語",
        "reading": "かんご (捳)",
        "meaning": "捳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_325",
    "level": "N1",
    "kanji": "掄",
    "onyomi": "カン (n1_325)",
    "kunyomi": "ひと (n1_325)",
    "meaningUz": "N1 Iyeroglifi #325 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "掄語",
        "reading": "かんご (掄)",
        "meaning": "掄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_326",
    "level": "N1",
    "kanji": "掕",
    "onyomi": "カン (n1_326)",
    "kunyomi": "ひと (n1_326)",
    "meaningUz": "N1 Iyeroglifi #326 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "掕語",
        "reading": "かんご (掕)",
        "meaning": "掕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_327",
    "level": "N1",
    "kanji": "掦",
    "onyomi": "カン (n1_327)",
    "kunyomi": "ひと (n1_327)",
    "meaningUz": "N1 Iyeroglifi #327 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "掦語",
        "reading": "かんご (掦)",
        "meaning": "掦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_328",
    "level": "N1",
    "kanji": "掷",
    "onyomi": "カン (n1_328)",
    "kunyomi": "ひと (n1_328)",
    "meaningUz": "N1 Iyeroglifi #328 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "掷語",
        "reading": "かんご (掷)",
        "meaning": "掷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_329",
    "level": "N1",
    "kanji": "揈",
    "onyomi": "カン (n1_329)",
    "kunyomi": "ひと (n1_329)",
    "meaningUz": "N1 Iyeroglifi #329 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "揈語",
        "reading": "かんご (揈)",
        "meaning": "揈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_330",
    "level": "N1",
    "kanji": "揙",
    "onyomi": "カン (n1_330)",
    "kunyomi": "ひと (n1_330)",
    "meaningUz": "N1 Iyeroglifi #330 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "揙語",
        "reading": "かんご (揙)",
        "meaning": "揙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_331",
    "level": "N1",
    "kanji": "揪",
    "onyomi": "カン (n1_331)",
    "kunyomi": "ひと (n1_331)",
    "meaningUz": "N1 Iyeroglifi #331 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "揪語",
        "reading": "かんご (揪)",
        "meaning": "揪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_332",
    "level": "N1",
    "kanji": "揻",
    "onyomi": "カン (n1_332)",
    "kunyomi": "ひと (n1_332)",
    "meaningUz": "N1 Iyeroglifi #332 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "揻語",
        "reading": "かんご (揻)",
        "meaning": "揻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_333",
    "level": "N1",
    "kanji": "搌",
    "onyomi": "カン (n1_333)",
    "kunyomi": "ひと (n1_333)",
    "meaningUz": "N1 Iyeroglifi #333 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "搌語",
        "reading": "かんご (搌)",
        "meaning": "搌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_334",
    "level": "N1",
    "kanji": "搝",
    "onyomi": "カン (n1_334)",
    "kunyomi": "ひと (n1_334)",
    "meaningUz": "N1 Iyeroglifi #334 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "搝語",
        "reading": "かんご (搝)",
        "meaning": "搝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_335",
    "level": "N1",
    "kanji": "搮",
    "onyomi": "カン (n1_335)",
    "kunyomi": "ひと (n1_335)",
    "meaningUz": "N1 Iyeroglifi #335 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "搮語",
        "reading": "かんご (搮)",
        "meaning": "搮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_336",
    "level": "N1",
    "kanji": "搿",
    "onyomi": "カン (n1_336)",
    "kunyomi": "ひと (n1_336)",
    "meaningUz": "N1 Iyeroglifi #336 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "搿語",
        "reading": "かんご (搿)",
        "meaning": "搿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_337",
    "level": "N1",
    "kanji": "摐",
    "onyomi": "カン (n1_337)",
    "kunyomi": "ひと (n1_337)",
    "meaningUz": "N1 Iyeroglifi #337 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "摐語",
        "reading": "かんご (摐)",
        "meaning": "摐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_338",
    "level": "N1",
    "kanji": "摡",
    "onyomi": "カン (n1_338)",
    "kunyomi": "ひと (n1_338)",
    "meaningUz": "N1 Iyeroglifi #338 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "摡語",
        "reading": "かんご (摡)",
        "meaning": "摡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_339",
    "level": "N1",
    "kanji": "摲",
    "onyomi": "カン (n1_339)",
    "kunyomi": "ひと (n1_339)",
    "meaningUz": "N1 Iyeroglifi #339 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "摲語",
        "reading": "かんご (摲)",
        "meaning": "摲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_340",
    "level": "N1",
    "kanji": "撃",
    "onyomi": "カン (n1_340)",
    "kunyomi": "ひと (n1_340)",
    "meaningUz": "N1 Iyeroglifi #340 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "撃語",
        "reading": "かんご (撃)",
        "meaning": "撃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_341",
    "level": "N1",
    "kanji": "撔",
    "onyomi": "カン (n1_341)",
    "kunyomi": "ひと (n1_341)",
    "meaningUz": "N1 Iyeroglifi #341 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "撔語",
        "reading": "かんご (撔)",
        "meaning": "撔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_342",
    "level": "N1",
    "kanji": "撥",
    "onyomi": "カン (n1_342)",
    "kunyomi": "ひと (n1_342)",
    "meaningUz": "N1 Iyeroglifi #342 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "撥語",
        "reading": "かんご (撥)",
        "meaning": "撥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_343",
    "level": "N1",
    "kanji": "撶",
    "onyomi": "カン (n1_343)",
    "kunyomi": "ひと (n1_343)",
    "meaningUz": "N1 Iyeroglifi #343 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "撶語",
        "reading": "かんご (撶)",
        "meaning": "撶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_344",
    "level": "N1",
    "kanji": "擇",
    "onyomi": "カン (n1_344)",
    "kunyomi": "ひと (n1_344)",
    "meaningUz": "N1 Iyeroglifi #344 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "擇語",
        "reading": "かんご (擇)",
        "meaning": "擇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_345",
    "level": "N1",
    "kanji": "擘",
    "onyomi": "カン (n1_345)",
    "kunyomi": "ひと (n1_345)",
    "meaningUz": "N1 Iyeroglifi #345 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "擘語",
        "reading": "かんご (擘)",
        "meaning": "擘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_346",
    "level": "N1",
    "kanji": "擩",
    "onyomi": "カン (n1_346)",
    "kunyomi": "ひと (n1_346)",
    "meaningUz": "N1 Iyeroglifi #346 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "擩語",
        "reading": "かんご (擩)",
        "meaning": "擩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_347",
    "level": "N1",
    "kanji": "擺",
    "onyomi": "カン (n1_347)",
    "kunyomi": "ひと (n1_347)",
    "meaningUz": "N1 Iyeroglifi #347 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "擺語",
        "reading": "かんご (擺)",
        "meaning": "擺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_348",
    "level": "N1",
    "kanji": "攋",
    "onyomi": "カン (n1_348)",
    "kunyomi": "ひと (n1_348)",
    "meaningUz": "N1 Iyeroglifi #348 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "攋語",
        "reading": "かんご (攋)",
        "meaning": "攋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_349",
    "level": "N1",
    "kanji": "攜",
    "onyomi": "カン (n1_349)",
    "kunyomi": "ひと (n1_349)",
    "meaningUz": "N1 Iyeroglifi #349 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "攜語",
        "reading": "かんご (攜)",
        "meaning": "攜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_350",
    "level": "N1",
    "kanji": "攭",
    "onyomi": "カン (n1_350)",
    "kunyomi": "ひと (n1_350)",
    "meaningUz": "N1 Iyeroglifi #350 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "攭語",
        "reading": "かんご (攭)",
        "meaning": "攭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_351",
    "level": "N1",
    "kanji": "放",
    "onyomi": "カン (n1_351)",
    "kunyomi": "ひと (n1_351)",
    "meaningUz": "N1 Iyeroglifi #351 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "放語",
        "reading": "かんご (放)",
        "meaning": "放 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_352",
    "level": "N1",
    "kanji": "敏",
    "onyomi": "カン (n1_352)",
    "kunyomi": "ひと (n1_352)",
    "meaningUz": "N1 Iyeroglifi #352 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "敏語",
        "reading": "かんご (敏)",
        "meaning": "敏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_353",
    "level": "N1",
    "kanji": "敠",
    "onyomi": "カン (n1_353)",
    "kunyomi": "ひと (n1_353)",
    "meaningUz": "N1 Iyeroglifi #353 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "敠語",
        "reading": "かんご (敠)",
        "meaning": "敠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_354",
    "level": "N1",
    "kanji": "敱",
    "onyomi": "カン (n1_354)",
    "kunyomi": "ひと (n1_354)",
    "meaningUz": "N1 Iyeroglifi #354 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "敱語",
        "reading": "かんご (敱)",
        "meaning": "敱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_355",
    "level": "N1",
    "kanji": "斂",
    "onyomi": "カン (n1_355)",
    "kunyomi": "ひと (n1_355)",
    "meaningUz": "N1 Iyeroglifi #355 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "斂語",
        "reading": "かんご (斂)",
        "meaning": "斂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_356",
    "level": "N1",
    "kanji": "斓",
    "onyomi": "カン (n1_356)",
    "kunyomi": "ひと (n1_356)",
    "meaningUz": "N1 Iyeroglifi #356 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "斓語",
        "reading": "かんご (斓)",
        "meaning": "斓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_357",
    "level": "N1",
    "kanji": "斤",
    "onyomi": "カン (n1_357)",
    "kunyomi": "ひと (n1_357)",
    "meaningUz": "N1 Iyeroglifi #357 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "斤語",
        "reading": "かんご (斤)",
        "meaning": "斤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_358",
    "level": "N1",
    "kanji": "斵",
    "onyomi": "カン (n1_358)",
    "kunyomi": "ひと (n1_358)",
    "meaningUz": "N1 Iyeroglifi #358 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "斵語",
        "reading": "かんご (斵)",
        "meaning": "斵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_359",
    "level": "N1",
    "kanji": "旆",
    "onyomi": "カン (n1_359)",
    "kunyomi": "ひと (n1_359)",
    "meaningUz": "N1 Iyeroglifi #359 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "旆語",
        "reading": "かんご (旆)",
        "meaning": "旆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_360",
    "level": "N1",
    "kanji": "旗",
    "onyomi": "カン (n1_360)",
    "kunyomi": "ひと (n1_360)",
    "meaningUz": "N1 Iyeroglifi #360 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "旗語",
        "reading": "かんご (旗)",
        "meaning": "旗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_361",
    "level": "N1",
    "kanji": "旨",
    "onyomi": "カン (n1_361)",
    "kunyomi": "ひと (n1_361)",
    "meaningUz": "N1 Iyeroglifi #361 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "旨語",
        "reading": "かんご (旨)",
        "meaning": "旨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_362",
    "level": "N1",
    "kanji": "旹",
    "onyomi": "カン (n1_362)",
    "kunyomi": "ひと (n1_362)",
    "meaningUz": "N1 Iyeroglifi #362 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "旹語",
        "reading": "かんご (旹)",
        "meaning": "旹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_363",
    "level": "N1",
    "kanji": "昊",
    "onyomi": "カン (n1_363)",
    "kunyomi": "ひと (n1_363)",
    "meaningUz": "N1 Iyeroglifi #363 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "昊語",
        "reading": "かんご (昊)",
        "meaning": "昊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_364",
    "level": "N1",
    "kanji": "昛",
    "onyomi": "カン (n1_364)",
    "kunyomi": "ひと (n1_364)",
    "meaningUz": "N1 Iyeroglifi #364 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "昛語",
        "reading": "かんご (昛)",
        "meaning": "昛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_365",
    "level": "N1",
    "kanji": "昬",
    "onyomi": "カン (n1_365)",
    "kunyomi": "ひと (n1_365)",
    "meaningUz": "N1 Iyeroglifi #365 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "昬語",
        "reading": "かんご (昬)",
        "meaning": "昬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_366",
    "level": "N1",
    "kanji": "昽",
    "onyomi": "カン (n1_366)",
    "kunyomi": "ひと (n1_366)",
    "meaningUz": "N1 Iyeroglifi #366 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "昽語",
        "reading": "かんご (昽)",
        "meaning": "昽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_367",
    "level": "N1",
    "kanji": "晎",
    "onyomi": "カン (n1_367)",
    "kunyomi": "ひと (n1_367)",
    "meaningUz": "N1 Iyeroglifi #367 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "晎語",
        "reading": "かんご (晎)",
        "meaning": "晎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_368",
    "level": "N1",
    "kanji": "晟",
    "onyomi": "カン (n1_368)",
    "kunyomi": "ひと (n1_368)",
    "meaningUz": "N1 Iyeroglifi #368 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "晟語",
        "reading": "かんご (晟)",
        "meaning": "晟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_369",
    "level": "N1",
    "kanji": "晰",
    "onyomi": "カン (n1_369)",
    "kunyomi": "ひと (n1_369)",
    "meaningUz": "N1 Iyeroglifi #369 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "晰語",
        "reading": "かんご (晰)",
        "meaning": "晰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_370",
    "level": "N1",
    "kanji": "暁",
    "onyomi": "カン (n1_370)",
    "kunyomi": "ひと (n1_370)",
    "meaningUz": "N1 Iyeroglifi #370 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "暁語",
        "reading": "かんご (暁)",
        "meaning": "暁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_371",
    "level": "N1",
    "kanji": "暒",
    "onyomi": "カン (n1_371)",
    "kunyomi": "ひと (n1_371)",
    "meaningUz": "N1 Iyeroglifi #371 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "暒語",
        "reading": "かんご (暒)",
        "meaning": "暒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_372",
    "level": "N1",
    "kanji": "暣",
    "onyomi": "カン (n1_372)",
    "kunyomi": "ひと (n1_372)",
    "meaningUz": "N1 Iyeroglifi #372 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "暣語",
        "reading": "かんご (暣)",
        "meaning": "暣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_373",
    "level": "N1",
    "kanji": "暴",
    "onyomi": "カン (n1_373)",
    "kunyomi": "ひと (n1_373)",
    "meaningUz": "N1 Iyeroglifi #373 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "暴語",
        "reading": "かんご (暴)",
        "meaning": "暴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_374",
    "level": "N1",
    "kanji": "曅",
    "onyomi": "カン (n1_374)",
    "kunyomi": "ひと (n1_374)",
    "meaningUz": "N1 Iyeroglifi #374 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "曅語",
        "reading": "かんご (曅)",
        "meaning": "曅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_375",
    "level": "N1",
    "kanji": "曖",
    "onyomi": "カン (n1_375)",
    "kunyomi": "ひと (n1_375)",
    "meaningUz": "N1 Iyeroglifi #375 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "曖語",
        "reading": "かんご (曖)",
        "meaning": "曖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_376",
    "level": "N1",
    "kanji": "曧",
    "onyomi": "カン (n1_376)",
    "kunyomi": "ひと (n1_376)",
    "meaningUz": "N1 Iyeroglifi #376 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "曧語",
        "reading": "かんご (曧)",
        "meaning": "曧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_377",
    "level": "N1",
    "kanji": "書",
    "onyomi": "カン (n1_377)",
    "kunyomi": "ひと (n1_377)",
    "meaningUz": "N1 Iyeroglifi #377 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "書語",
        "reading": "かんご (書)",
        "meaning": "書 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_378",
    "level": "N1",
    "kanji": "有",
    "onyomi": "カン (n1_378)",
    "kunyomi": "ひと (n1_378)",
    "meaningUz": "N1 Iyeroglifi #378 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "有語",
        "reading": "かんご (有)",
        "meaning": "有 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_379",
    "level": "N1",
    "kanji": "朚",
    "onyomi": "カン (n1_379)",
    "kunyomi": "ひと (n1_379)",
    "meaningUz": "N1 Iyeroglifi #379 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "朚語",
        "reading": "かんご (朚)",
        "meaning": "朚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_380",
    "level": "N1",
    "kanji": "末",
    "onyomi": "カン (n1_380)",
    "kunyomi": "ひと (n1_380)",
    "meaningUz": "N1 Iyeroglifi #380 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "末語",
        "reading": "かんご (末)",
        "meaning": "末 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_381",
    "level": "N1",
    "kanji": "朼",
    "onyomi": "カン (n1_381)",
    "kunyomi": "ひと (n1_381)",
    "meaningUz": "N1 Iyeroglifi #381 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "朼語",
        "reading": "かんご (朼)",
        "meaning": "朼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_382",
    "level": "N1",
    "kanji": "杍",
    "onyomi": "カン (n1_382)",
    "kunyomi": "ひと (n1_382)",
    "meaningUz": "N1 Iyeroglifi #382 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "杍語",
        "reading": "かんご (杍)",
        "meaning": "杍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_383",
    "level": "N1",
    "kanji": "杞",
    "onyomi": "カン (n1_383)",
    "kunyomi": "ひと (n1_383)",
    "meaningUz": "N1 Iyeroglifi #383 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "杞語",
        "reading": "かんご (杞)",
        "meaning": "杞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_384",
    "level": "N1",
    "kanji": "杯",
    "onyomi": "カン (n1_384)",
    "kunyomi": "ひと (n1_384)",
    "meaningUz": "N1 Iyeroglifi #384 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "杯語",
        "reading": "かんご (杯)",
        "meaning": "杯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_385",
    "level": "N1",
    "kanji": "枀",
    "onyomi": "カン (n1_385)",
    "kunyomi": "ひと (n1_385)",
    "meaningUz": "N1 Iyeroglifi #385 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "枀語",
        "reading": "かんご (枀)",
        "meaning": "枀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_386",
    "level": "N1",
    "kanji": "枑",
    "onyomi": "カン (n1_386)",
    "kunyomi": "ひと (n1_386)",
    "meaningUz": "N1 Iyeroglifi #386 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "枑語",
        "reading": "かんご (枑)",
        "meaning": "枑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_387",
    "level": "N1",
    "kanji": "枢",
    "onyomi": "カン (n1_387)",
    "kunyomi": "ひと (n1_387)",
    "meaningUz": "N1 Iyeroglifi #387 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "枢語",
        "reading": "かんご (枢)",
        "meaning": "枢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_388",
    "level": "N1",
    "kanji": "枳",
    "onyomi": "カン (n1_388)",
    "kunyomi": "ひと (n1_388)",
    "meaningUz": "N1 Iyeroglifi #388 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "枳語",
        "reading": "かんご (枳)",
        "meaning": "枳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_389",
    "level": "N1",
    "kanji": "柄",
    "onyomi": "カン (n1_389)",
    "kunyomi": "ひと (n1_389)",
    "meaningUz": "N1 Iyeroglifi #389 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "柄語",
        "reading": "かんご (柄)",
        "meaning": "柄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_390",
    "level": "N1",
    "kanji": "柕",
    "onyomi": "カン (n1_390)",
    "kunyomi": "ひと (n1_390)",
    "meaningUz": "N1 Iyeroglifi #390 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "柕語",
        "reading": "かんご (柕)",
        "meaning": "柕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_391",
    "level": "N1",
    "kanji": "柦",
    "onyomi": "カン (n1_391)",
    "kunyomi": "ひと (n1_391)",
    "meaningUz": "N1 Iyeroglifi #391 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "柦語",
        "reading": "かんご (柦)",
        "meaning": "柦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_392",
    "level": "N1",
    "kanji": "柷",
    "onyomi": "カン (n1_392)",
    "kunyomi": "ひと (n1_392)",
    "meaningUz": "N1 Iyeroglifi #392 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "柷語",
        "reading": "かんご (柷)",
        "meaning": "柷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_393",
    "level": "N1",
    "kanji": "栈",
    "onyomi": "カン (n1_393)",
    "kunyomi": "ひと (n1_393)",
    "meaningUz": "N1 Iyeroglifi #393 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "栈語",
        "reading": "かんご (栈)",
        "meaning": "栈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_394",
    "level": "N1",
    "kanji": "栙",
    "onyomi": "カン (n1_394)",
    "kunyomi": "ひと (n1_394)",
    "meaningUz": "N1 Iyeroglifi #394 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "栙語",
        "reading": "かんご (栙)",
        "meaning": "栙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_395",
    "level": "N1",
    "kanji": "株",
    "onyomi": "カン (n1_395)",
    "kunyomi": "ひと (n1_395)",
    "meaningUz": "N1 Iyeroglifi #395 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "株語",
        "reading": "かんご (株)",
        "meaning": "株 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_396",
    "level": "N1",
    "kanji": "栻",
    "onyomi": "カン (n1_396)",
    "kunyomi": "ひと (n1_396)",
    "meaningUz": "N1 Iyeroglifi #396 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "栻語",
        "reading": "かんご (栻)",
        "meaning": "栻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_397",
    "level": "N1",
    "kanji": "桌",
    "onyomi": "カン (n1_397)",
    "kunyomi": "ひと (n1_397)",
    "meaningUz": "N1 Iyeroglifi #397 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "桌語",
        "reading": "かんご (桌)",
        "meaning": "桌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_398",
    "level": "N1",
    "kanji": "桝",
    "onyomi": "カン (n1_398)",
    "kunyomi": "ひと (n1_398)",
    "meaningUz": "N1 Iyeroglifi #398 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "桝語",
        "reading": "かんご (桝)",
        "meaning": "桝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_399",
    "level": "N1",
    "kanji": "桮",
    "onyomi": "カン (n1_399)",
    "kunyomi": "ひと (n1_399)",
    "meaningUz": "N1 Iyeroglifi #399 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "桮語",
        "reading": "かんご (桮)",
        "meaning": "桮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_400",
    "level": "N1",
    "kanji": "桿",
    "onyomi": "カン (n1_400)",
    "kunyomi": "ひと (n1_400)",
    "meaningUz": "N1 Iyeroglifi #400 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "桿語",
        "reading": "かんご (桿)",
        "meaning": "桿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_401",
    "level": "N1",
    "kanji": "梐",
    "onyomi": "カン (n1_401)",
    "kunyomi": "ひと (n1_401)",
    "meaningUz": "N1 Iyeroglifi #401 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "梐語",
        "reading": "かんご (梐)",
        "meaning": "梐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_402",
    "level": "N1",
    "kanji": "梡",
    "onyomi": "カン (n1_402)",
    "kunyomi": "ひと (n1_402)",
    "meaningUz": "N1 Iyeroglifi #402 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "梡語",
        "reading": "かんご (梡)",
        "meaning": "梡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_403",
    "level": "N1",
    "kanji": "梲",
    "onyomi": "カン (n1_403)",
    "kunyomi": "ひと (n1_403)",
    "meaningUz": "N1 Iyeroglifi #403 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "梲語",
        "reading": "かんご (梲)",
        "meaning": "梲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_404",
    "level": "N1",
    "kanji": "棃",
    "onyomi": "カン (n1_404)",
    "kunyomi": "ひと (n1_404)",
    "meaningUz": "N1 Iyeroglifi #404 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "棃語",
        "reading": "かんご (棃)",
        "meaning": "棃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_405",
    "level": "N1",
    "kanji": "棔",
    "onyomi": "カン (n1_405)",
    "kunyomi": "ひと (n1_405)",
    "meaningUz": "N1 Iyeroglifi #405 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "棔語",
        "reading": "かんご (棔)",
        "meaning": "棔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_406",
    "level": "N1",
    "kanji": "棥",
    "onyomi": "カン (n1_406)",
    "kunyomi": "ひと (n1_406)",
    "meaningUz": "N1 Iyeroglifi #406 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "棥語",
        "reading": "かんご (棥)",
        "meaning": "棥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_407",
    "level": "N1",
    "kanji": "棶",
    "onyomi": "カン (n1_407)",
    "kunyomi": "ひと (n1_407)",
    "meaningUz": "N1 Iyeroglifi #407 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "棶語",
        "reading": "かんご (棶)",
        "meaning": "棶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_408",
    "level": "N1",
    "kanji": "椇",
    "onyomi": "カン (n1_408)",
    "kunyomi": "ひと (n1_408)",
    "meaningUz": "N1 Iyeroglifi #408 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "椇語",
        "reading": "かんご (椇)",
        "meaning": "椇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_409",
    "level": "N1",
    "kanji": "椘",
    "onyomi": "カン (n1_409)",
    "kunyomi": "ひと (n1_409)",
    "meaningUz": "N1 Iyeroglifi #409 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "椘語",
        "reading": "かんご (椘)",
        "meaning": "椘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_410",
    "level": "N1",
    "kanji": "椩",
    "onyomi": "カン (n1_410)",
    "kunyomi": "ひと (n1_410)",
    "meaningUz": "N1 Iyeroglifi #410 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "椩語",
        "reading": "かんご (椩)",
        "meaning": "椩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_411",
    "level": "N1",
    "kanji": "椺",
    "onyomi": "カン (n1_411)",
    "kunyomi": "ひと (n1_411)",
    "meaningUz": "N1 Iyeroglifi #411 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "椺語",
        "reading": "かんご (椺)",
        "meaning": "椺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_412",
    "level": "N1",
    "kanji": "楋",
    "onyomi": "カン (n1_412)",
    "kunyomi": "ひと (n1_412)",
    "meaningUz": "N1 Iyeroglifi #412 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "楋語",
        "reading": "かんご (楋)",
        "meaning": "楋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_413",
    "level": "N1",
    "kanji": "楜",
    "onyomi": "カン (n1_413)",
    "kunyomi": "ひと (n1_413)",
    "meaningUz": "N1 Iyeroglifi #413 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "楜語",
        "reading": "かんご (楜)",
        "meaning": "楜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_414",
    "level": "N1",
    "kanji": "業",
    "onyomi": "カン (n1_414)",
    "kunyomi": "ひと (n1_414)",
    "meaningUz": "N1 Iyeroglifi #414 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "業語",
        "reading": "かんご (業)",
        "meaning": "業 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_415",
    "level": "N1",
    "kanji": "楾",
    "onyomi": "カン (n1_415)",
    "kunyomi": "ひと (n1_415)",
    "meaningUz": "N1 Iyeroglifi #415 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "楾語",
        "reading": "かんご (楾)",
        "meaning": "楾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_416",
    "level": "N1",
    "kanji": "榏",
    "onyomi": "カン (n1_416)",
    "kunyomi": "ひと (n1_416)",
    "meaningUz": "N1 Iyeroglifi #416 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "榏語",
        "reading": "かんご (榏)",
        "meaning": "榏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_417",
    "level": "N1",
    "kanji": "榠",
    "onyomi": "カン (n1_417)",
    "kunyomi": "ひと (n1_417)",
    "meaningUz": "N1 Iyeroglifi #417 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "榠語",
        "reading": "かんご (榠)",
        "meaning": "榠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_418",
    "level": "N1",
    "kanji": "榱",
    "onyomi": "カン (n1_418)",
    "kunyomi": "ひと (n1_418)",
    "meaningUz": "N1 Iyeroglifi #418 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "榱語",
        "reading": "かんご (榱)",
        "meaning": "榱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_419",
    "level": "N1",
    "kanji": "槂",
    "onyomi": "カン (n1_419)",
    "kunyomi": "ひと (n1_419)",
    "meaningUz": "N1 Iyeroglifi #419 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "槂語",
        "reading": "かんご (槂)",
        "meaning": "槂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_420",
    "level": "N1",
    "kanji": "槓",
    "onyomi": "カン (n1_420)",
    "kunyomi": "ひと (n1_420)",
    "meaningUz": "N1 Iyeroglifi #420 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "槓語",
        "reading": "かんご (槓)",
        "meaning": "槓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_421",
    "level": "N1",
    "kanji": "槤",
    "onyomi": "カン (n1_421)",
    "kunyomi": "ひと (n1_421)",
    "meaningUz": "N1 Iyeroglifi #421 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "槤語",
        "reading": "かんご (槤)",
        "meaning": "槤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_422",
    "level": "N1",
    "kanji": "槵",
    "onyomi": "カン (n1_422)",
    "kunyomi": "ひと (n1_422)",
    "meaningUz": "N1 Iyeroglifi #422 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "槵語",
        "reading": "かんご (槵)",
        "meaning": "槵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_423",
    "level": "N1",
    "kanji": "樆",
    "onyomi": "カン (n1_423)",
    "kunyomi": "ひと (n1_423)",
    "meaningUz": "N1 Iyeroglifi #423 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "樆語",
        "reading": "かんご (樆)",
        "meaning": "樆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_424",
    "level": "N1",
    "kanji": "樗",
    "onyomi": "カン (n1_424)",
    "kunyomi": "ひと (n1_424)",
    "meaningUz": "N1 Iyeroglifi #424 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "樗語",
        "reading": "かんご (樗)",
        "meaning": "樗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_425",
    "level": "N1",
    "kanji": "樨",
    "onyomi": "カン (n1_425)",
    "kunyomi": "ひと (n1_425)",
    "meaningUz": "N1 Iyeroglifi #425 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "樨語",
        "reading": "かんご (樨)",
        "meaning": "樨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_426",
    "level": "N1",
    "kanji": "樹",
    "onyomi": "カン (n1_426)",
    "kunyomi": "ひと (n1_426)",
    "meaningUz": "N1 Iyeroglifi #426 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "樹語",
        "reading": "かんご (樹)",
        "meaning": "樹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_427",
    "level": "N1",
    "kanji": "橊",
    "onyomi": "カン (n1_427)",
    "kunyomi": "ひと (n1_427)",
    "meaningUz": "N1 Iyeroglifi #427 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "橊語",
        "reading": "かんご (橊)",
        "meaning": "橊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_428",
    "level": "N1",
    "kanji": "橛",
    "onyomi": "カン (n1_428)",
    "kunyomi": "ひと (n1_428)",
    "meaningUz": "N1 Iyeroglifi #428 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "橛語",
        "reading": "かんご (橛)",
        "meaning": "橛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_429",
    "level": "N1",
    "kanji": "橬",
    "onyomi": "カン (n1_429)",
    "kunyomi": "ひと (n1_429)",
    "meaningUz": "N1 Iyeroglifi #429 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "橬語",
        "reading": "かんご (橬)",
        "meaning": "橬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_430",
    "level": "N1",
    "kanji": "橽",
    "onyomi": "カン (n1_430)",
    "kunyomi": "ひと (n1_430)",
    "meaningUz": "N1 Iyeroglifi #430 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "橽語",
        "reading": "かんご (橽)",
        "meaning": "橽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_431",
    "level": "N1",
    "kanji": "檎",
    "onyomi": "カン (n1_431)",
    "kunyomi": "ひと (n1_431)",
    "meaningUz": "N1 Iyeroglifi #431 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "檎語",
        "reading": "かんご (檎)",
        "meaning": "檎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_432",
    "level": "N1",
    "kanji": "檟",
    "onyomi": "カン (n1_432)",
    "kunyomi": "ひと (n1_432)",
    "meaningUz": "N1 Iyeroglifi #432 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "檟語",
        "reading": "かんご (檟)",
        "meaning": "檟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_433",
    "level": "N1",
    "kanji": "檰",
    "onyomi": "カン (n1_433)",
    "kunyomi": "ひと (n1_433)",
    "meaningUz": "N1 Iyeroglifi #433 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "檰語",
        "reading": "かんご (檰)",
        "meaning": "檰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_434",
    "level": "N1",
    "kanji": "櫁",
    "onyomi": "カン (n1_434)",
    "kunyomi": "ひと (n1_434)",
    "meaningUz": "N1 Iyeroglifi #434 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "櫁語",
        "reading": "かんご (櫁)",
        "meaning": "櫁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_435",
    "level": "N1",
    "kanji": "櫒",
    "onyomi": "カン (n1_435)",
    "kunyomi": "ひと (n1_435)",
    "meaningUz": "N1 Iyeroglifi #435 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "櫒語",
        "reading": "かんご (櫒)",
        "meaning": "櫒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_436",
    "level": "N1",
    "kanji": "櫣",
    "onyomi": "カン (n1_436)",
    "kunyomi": "ひと (n1_436)",
    "meaningUz": "N1 Iyeroglifi #436 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "櫣語",
        "reading": "かんご (櫣)",
        "meaning": "櫣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_437",
    "level": "N1",
    "kanji": "櫴",
    "onyomi": "カン (n1_437)",
    "kunyomi": "ひと (n1_437)",
    "meaningUz": "N1 Iyeroglifi #437 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "櫴語",
        "reading": "かんご (櫴)",
        "meaning": "櫴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_438",
    "level": "N1",
    "kanji": "欅",
    "onyomi": "カン (n1_438)",
    "kunyomi": "ひと (n1_438)",
    "meaningUz": "N1 Iyeroglifi #438 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "欅語",
        "reading": "かんご (欅)",
        "meaning": "欅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_439",
    "level": "N1",
    "kanji": "欖",
    "onyomi": "カン (n1_439)",
    "kunyomi": "ひと (n1_439)",
    "meaningUz": "N1 Iyeroglifi #439 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "欖語",
        "reading": "かんご (欖)",
        "meaning": "欖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_440",
    "level": "N1",
    "kanji": "欧",
    "onyomi": "カン (n1_440)",
    "kunyomi": "ひと (n1_440)",
    "meaningUz": "N1 Iyeroglifi #440 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "欧語",
        "reading": "かんご (欧)",
        "meaning": "欧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_441",
    "level": "N1",
    "kanji": "欸",
    "onyomi": "カン (n1_441)",
    "kunyomi": "ひと (n1_441)",
    "meaningUz": "N1 Iyeroglifi #441 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "欸語",
        "reading": "かんご (欸)",
        "meaning": "欸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_442",
    "level": "N1",
    "kanji": "歉",
    "onyomi": "カン (n1_442)",
    "kunyomi": "ひと (n1_442)",
    "meaningUz": "N1 Iyeroglifi #442 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "歉語",
        "reading": "かんご (歉)",
        "meaning": "歉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_443",
    "level": "N1",
    "kanji": "歚",
    "onyomi": "カン (n1_443)",
    "kunyomi": "ひと (n1_443)",
    "meaningUz": "N1 Iyeroglifi #443 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "歚語",
        "reading": "かんご (歚)",
        "meaning": "歚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_444",
    "level": "N1",
    "kanji": "歫",
    "onyomi": "カン (n1_444)",
    "kunyomi": "ひと (n1_444)",
    "meaningUz": "N1 Iyeroglifi #444 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "歫語",
        "reading": "かんご (歫)",
        "meaning": "歫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_445",
    "level": "N1",
    "kanji": "歼",
    "onyomi": "カン (n1_445)",
    "kunyomi": "ひと (n1_445)",
    "meaningUz": "N1 Iyeroglifi #445 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "歼語",
        "reading": "かんご (歼)",
        "meaning": "歼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_446",
    "level": "N1",
    "kanji": "殍",
    "onyomi": "カン (n1_446)",
    "kunyomi": "ひと (n1_446)",
    "meaningUz": "N1 Iyeroglifi #446 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "殍語",
        "reading": "かんご (殍)",
        "meaning": "殍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_447",
    "level": "N1",
    "kanji": "殞",
    "onyomi": "カン (n1_447)",
    "kunyomi": "ひと (n1_447)",
    "meaningUz": "N1 Iyeroglifi #447 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "殞語",
        "reading": "かんご (殞)",
        "meaning": "殞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_448",
    "level": "N1",
    "kanji": "殯",
    "onyomi": "カン (n1_448)",
    "kunyomi": "ひと (n1_448)",
    "meaningUz": "N1 Iyeroglifi #448 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "殯語",
        "reading": "かんご (殯)",
        "meaning": "殯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_449",
    "level": "N1",
    "kanji": "毀",
    "onyomi": "カン (n1_449)",
    "kunyomi": "ひと (n1_449)",
    "meaningUz": "N1 Iyeroglifi #449 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "毀語",
        "reading": "かんご (毀)",
        "meaning": "毀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_450",
    "level": "N1",
    "kanji": "毑",
    "onyomi": "カン (n1_450)",
    "kunyomi": "ひと (n1_450)",
    "meaningUz": "N1 Iyeroglifi #450 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "毑語",
        "reading": "かんご (毑)",
        "meaning": "毑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_451",
    "level": "N1",
    "kanji": "毢",
    "onyomi": "カン (n1_451)",
    "kunyomi": "ひと (n1_451)",
    "meaningUz": "N1 Iyeroglifi #451 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "毢語",
        "reading": "かんご (毢)",
        "meaning": "毢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_452",
    "level": "N1",
    "kanji": "毳",
    "onyomi": "カン (n1_452)",
    "kunyomi": "ひと (n1_452)",
    "meaningUz": "N1 Iyeroglifi #452 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "毳語",
        "reading": "かんご (毳)",
        "meaning": "毳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_453",
    "level": "N1",
    "kanji": "氄",
    "onyomi": "カン (n1_453)",
    "kunyomi": "ひと (n1_453)",
    "meaningUz": "N1 Iyeroglifi #453 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "氄語",
        "reading": "かんご (氄)",
        "meaning": "氄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_454",
    "level": "N1",
    "kanji": "氕",
    "onyomi": "カン (n1_454)",
    "kunyomi": "ひと (n1_454)",
    "meaningUz": "N1 Iyeroglifi #454 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "氕語",
        "reading": "かんご (氕)",
        "meaning": "氕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_455",
    "level": "N1",
    "kanji": "氦",
    "onyomi": "カン (n1_455)",
    "kunyomi": "ひと (n1_455)",
    "meaningUz": "N1 Iyeroglifi #455 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "氦語",
        "reading": "かんご (氦)",
        "meaning": "氦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_456",
    "level": "N1",
    "kanji": "氷",
    "onyomi": "カン (n1_456)",
    "kunyomi": "ひと (n1_456)",
    "meaningUz": "N1 Iyeroglifi #456 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "氷語",
        "reading": "かんご (氷)",
        "meaning": "氷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_457",
    "level": "N1",
    "kanji": "汈",
    "onyomi": "カン (n1_457)",
    "kunyomi": "ひと (n1_457)",
    "meaningUz": "N1 Iyeroglifi #457 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "汈語",
        "reading": "かんご (汈)",
        "meaning": "汈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_458",
    "level": "N1",
    "kanji": "汙",
    "onyomi": "カン (n1_458)",
    "kunyomi": "ひと (n1_458)",
    "meaningUz": "N1 Iyeroglifi #458 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "汙語",
        "reading": "かんご (汙)",
        "meaning": "汙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_459",
    "level": "N1",
    "kanji": "汪",
    "onyomi": "カン (n1_459)",
    "kunyomi": "ひと (n1_459)",
    "meaningUz": "N1 Iyeroglifi #459 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "汪語",
        "reading": "かんご (汪)",
        "meaning": "汪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_460",
    "level": "N1",
    "kanji": "汻",
    "onyomi": "カン (n1_460)",
    "kunyomi": "ひと (n1_460)",
    "meaningUz": "N1 Iyeroglifi #460 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "汻語",
        "reading": "かんご (汻)",
        "meaning": "汻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_461",
    "level": "N1",
    "kanji": "沌",
    "onyomi": "カン (n1_461)",
    "kunyomi": "ひと (n1_461)",
    "meaningUz": "N1 Iyeroglifi #461 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "沌語",
        "reading": "かんご (沌)",
        "meaning": "沌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_462",
    "level": "N1",
    "kanji": "沝",
    "onyomi": "カン (n1_462)",
    "kunyomi": "ひと (n1_462)",
    "meaningUz": "N1 Iyeroglifi #462 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "沝語",
        "reading": "かんご (沝)",
        "meaning": "沝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_463",
    "level": "N1",
    "kanji": "沮",
    "onyomi": "カン (n1_463)",
    "kunyomi": "ひと (n1_463)",
    "meaningUz": "N1 Iyeroglifi #463 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "沮語",
        "reading": "かんご (沮)",
        "meaning": "沮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_464",
    "level": "N1",
    "kanji": "沿",
    "onyomi": "カン (n1_464)",
    "kunyomi": "ひと (n1_464)",
    "meaningUz": "N1 Iyeroglifi #464 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "沿語",
        "reading": "かんご (沿)",
        "meaning": "沿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_465",
    "level": "N1",
    "kanji": "泐",
    "onyomi": "カン (n1_465)",
    "kunyomi": "ひと (n1_465)",
    "meaningUz": "N1 Iyeroglifi #465 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "泐語",
        "reading": "かんご (泐)",
        "meaning": "泐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_466",
    "level": "N1",
    "kanji": "泡",
    "onyomi": "カン (n1_466)",
    "kunyomi": "ひと (n1_466)",
    "meaningUz": "N1 Iyeroglifi #466 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "泡語",
        "reading": "かんご (泡)",
        "meaning": "泡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_467",
    "level": "N1",
    "kanji": "泲",
    "onyomi": "カン (n1_467)",
    "kunyomi": "ひと (n1_467)",
    "meaningUz": "N1 Iyeroglifi #467 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "泲語",
        "reading": "かんご (泲)",
        "meaning": "泲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_468",
    "level": "N1",
    "kanji": "洃",
    "onyomi": "カン (n1_468)",
    "kunyomi": "ひと (n1_468)",
    "meaningUz": "N1 Iyeroglifi #468 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "洃語",
        "reading": "かんご (洃)",
        "meaning": "洃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_469",
    "level": "N1",
    "kanji": "洔",
    "onyomi": "カン (n1_469)",
    "kunyomi": "ひと (n1_469)",
    "meaningUz": "N1 Iyeroglifi #469 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "洔語",
        "reading": "かんご (洔)",
        "meaning": "洔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_470",
    "level": "N1",
    "kanji": "津",
    "onyomi": "カン (n1_470)",
    "kunyomi": "ひと (n1_470)",
    "meaningUz": "N1 Iyeroglifi #470 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "津語",
        "reading": "かんご (津)",
        "meaning": "津 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_471",
    "level": "N1",
    "kanji": "洶",
    "onyomi": "カン (n1_471)",
    "kunyomi": "ひと (n1_471)",
    "meaningUz": "N1 Iyeroglifi #471 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "洶語",
        "reading": "かんご (洶)",
        "meaning": "洶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_472",
    "level": "N1",
    "kanji": "浇",
    "onyomi": "カン (n1_472)",
    "kunyomi": "ひと (n1_472)",
    "meaningUz": "N1 Iyeroglifi #472 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "浇語",
        "reading": "かんご (浇)",
        "meaning": "浇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_473",
    "level": "N1",
    "kanji": "浘",
    "onyomi": "カン (n1_473)",
    "kunyomi": "ひと (n1_473)",
    "meaningUz": "N1 Iyeroglifi #473 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "浘語",
        "reading": "かんご (浘)",
        "meaning": "浘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_474",
    "level": "N1",
    "kanji": "浩",
    "onyomi": "カン (n1_474)",
    "kunyomi": "ひと (n1_474)",
    "meaningUz": "N1 Iyeroglifi #474 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "浩語",
        "reading": "かんご (浩)",
        "meaning": "浩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_475",
    "level": "N1",
    "kanji": "浺",
    "onyomi": "カン (n1_475)",
    "kunyomi": "ひと (n1_475)",
    "meaningUz": "N1 Iyeroglifi #475 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "浺語",
        "reading": "かんご (浺)",
        "meaning": "浺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_476",
    "level": "N1",
    "kanji": "涋",
    "onyomi": "カン (n1_476)",
    "kunyomi": "ひと (n1_476)",
    "meaningUz": "N1 Iyeroglifi #476 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "涋語",
        "reading": "かんご (涋)",
        "meaning": "涋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_477",
    "level": "N1",
    "kanji": "涜",
    "onyomi": "カン (n1_477)",
    "kunyomi": "ひと (n1_477)",
    "meaningUz": "N1 Iyeroglifi #477 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "涜語",
        "reading": "かんご (涜)",
        "meaning": "涜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_478",
    "level": "N1",
    "kanji": "涭",
    "onyomi": "カン (n1_478)",
    "kunyomi": "ひと (n1_478)",
    "meaningUz": "N1 Iyeroglifi #478 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "涭語",
        "reading": "かんご (涭)",
        "meaning": "涭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_479",
    "level": "N1",
    "kanji": "涾",
    "onyomi": "カン (n1_479)",
    "kunyomi": "ひと (n1_479)",
    "meaningUz": "N1 Iyeroglifi #479 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "涾語",
        "reading": "かんご (涾)",
        "meaning": "涾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_480",
    "level": "N1",
    "kanji": "淏",
    "onyomi": "カン (n1_480)",
    "kunyomi": "ひと (n1_480)",
    "meaningUz": "N1 Iyeroglifi #480 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "淏語",
        "reading": "かんご (淏)",
        "meaning": "淏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_481",
    "level": "N1",
    "kanji": "淠",
    "onyomi": "カン (n1_481)",
    "kunyomi": "ひと (n1_481)",
    "meaningUz": "N1 Iyeroglifi #481 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "淠語",
        "reading": "かんご (淠)",
        "meaning": "淠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_482",
    "level": "N1",
    "kanji": "深",
    "onyomi": "カン (n1_482)",
    "kunyomi": "ひと (n1_482)",
    "meaningUz": "N1 Iyeroglifi #482 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "深語",
        "reading": "かんご (深)",
        "meaning": "深 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_483",
    "level": "N1",
    "kanji": "渂",
    "onyomi": "カン (n1_483)",
    "kunyomi": "ひと (n1_483)",
    "meaningUz": "N1 Iyeroglifi #483 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "渂語",
        "reading": "かんご (渂)",
        "meaning": "渂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_484",
    "level": "N1",
    "kanji": "渓",
    "onyomi": "カン (n1_484)",
    "kunyomi": "ひと (n1_484)",
    "meaningUz": "N1 Iyeroglifi #484 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "渓語",
        "reading": "かんご (渓)",
        "meaning": "渓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_485",
    "level": "N1",
    "kanji": "渤",
    "onyomi": "カン (n1_485)",
    "kunyomi": "ひと (n1_485)",
    "meaningUz": "N1 Iyeroglifi #485 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "渤語",
        "reading": "かんご (渤)",
        "meaning": "渤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_486",
    "level": "N1",
    "kanji": "渵",
    "onyomi": "カン (n1_486)",
    "kunyomi": "ひと (n1_486)",
    "meaningUz": "N1 Iyeroglifi #486 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "渵語",
        "reading": "かんご (渵)",
        "meaning": "渵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_487",
    "level": "N1",
    "kanji": "湆",
    "onyomi": "カン (n1_487)",
    "kunyomi": "ひと (n1_487)",
    "meaningUz": "N1 Iyeroglifi #487 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "湆語",
        "reading": "かんご (湆)",
        "meaning": "湆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_488",
    "level": "N1",
    "kanji": "湗",
    "onyomi": "カン (n1_488)",
    "kunyomi": "ひと (n1_488)",
    "meaningUz": "N1 Iyeroglifi #488 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "湗語",
        "reading": "かんご (湗)",
        "meaning": "湗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_489",
    "level": "N1",
    "kanji": "湨",
    "onyomi": "カン (n1_489)",
    "kunyomi": "ひと (n1_489)",
    "meaningUz": "N1 Iyeroglifi #489 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "湨語",
        "reading": "かんご (湨)",
        "meaning": "湨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_490",
    "level": "N1",
    "kanji": "湹",
    "onyomi": "カン (n1_490)",
    "kunyomi": "ひと (n1_490)",
    "meaningUz": "N1 Iyeroglifi #490 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "湹語",
        "reading": "かんご (湹)",
        "meaning": "湹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_491",
    "level": "N1",
    "kanji": "溊",
    "onyomi": "カン (n1_491)",
    "kunyomi": "ひと (n1_491)",
    "meaningUz": "N1 Iyeroglifi #491 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "溊語",
        "reading": "かんご (溊)",
        "meaning": "溊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_492",
    "level": "N1",
    "kanji": "溛",
    "onyomi": "カン (n1_492)",
    "kunyomi": "ひと (n1_492)",
    "meaningUz": "N1 Iyeroglifi #492 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "溛語",
        "reading": "かんご (溛)",
        "meaning": "溛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_493",
    "level": "N1",
    "kanji": "溬",
    "onyomi": "カン (n1_493)",
    "kunyomi": "ひと (n1_493)",
    "meaningUz": "N1 Iyeroglifi #493 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "溬語",
        "reading": "かんご (溬)",
        "meaning": "溬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_494",
    "level": "N1",
    "kanji": "溽",
    "onyomi": "カン (n1_494)",
    "kunyomi": "ひと (n1_494)",
    "meaningUz": "N1 Iyeroglifi #494 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "溽語",
        "reading": "かんご (溽)",
        "meaning": "溽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_495",
    "level": "N1",
    "kanji": "滎",
    "onyomi": "カン (n1_495)",
    "kunyomi": "ひと (n1_495)",
    "meaningUz": "N1 Iyeroglifi #495 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "滎語",
        "reading": "かんご (滎)",
        "meaning": "滎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_496",
    "level": "N1",
    "kanji": "滟",
    "onyomi": "カン (n1_496)",
    "kunyomi": "ひと (n1_496)",
    "meaningUz": "N1 Iyeroglifi #496 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "滟語",
        "reading": "かんご (滟)",
        "meaning": "滟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_497",
    "level": "N1",
    "kanji": "滰",
    "onyomi": "カン (n1_497)",
    "kunyomi": "ひと (n1_497)",
    "meaningUz": "N1 Iyeroglifi #497 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "滰語",
        "reading": "かんご (滰)",
        "meaning": "滰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_498",
    "level": "N1",
    "kanji": "漁",
    "onyomi": "カン (n1_498)",
    "kunyomi": "ひと (n1_498)",
    "meaningUz": "N1 Iyeroglifi #498 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "漁語",
        "reading": "かんご (漁)",
        "meaning": "漁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_499",
    "level": "N1",
    "kanji": "漒",
    "onyomi": "カン (n1_499)",
    "kunyomi": "ひと (n1_499)",
    "meaningUz": "N1 Iyeroglifi #499 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "漒語",
        "reading": "かんご (漒)",
        "meaning": "漒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_500",
    "level": "N1",
    "kanji": "漣",
    "onyomi": "カン (n1_500)",
    "kunyomi": "ひと (n1_500)",
    "meaningUz": "N1 Iyeroglifi #500 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "漣語",
        "reading": "かんご (漣)",
        "meaning": "漣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_501",
    "level": "N1",
    "kanji": "漴",
    "onyomi": "カン (n1_501)",
    "kunyomi": "ひと (n1_501)",
    "meaningUz": "N1 Iyeroglifi #501 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "漴語",
        "reading": "かんご (漴)",
        "meaning": "漴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_502",
    "level": "N1",
    "kanji": "潅",
    "onyomi": "カン (n1_502)",
    "kunyomi": "ひと (n1_502)",
    "meaningUz": "N1 Iyeroglifi #502 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "潅語",
        "reading": "かんご (潅)",
        "meaning": "潅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_503",
    "level": "N1",
    "kanji": "潖",
    "onyomi": "カン (n1_503)",
    "kunyomi": "ひと (n1_503)",
    "meaningUz": "N1 Iyeroglifi #503 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "潖語",
        "reading": "かんご (潖)",
        "meaning": "潖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_504",
    "level": "N1",
    "kanji": "潧",
    "onyomi": "カン (n1_504)",
    "kunyomi": "ひと (n1_504)",
    "meaningUz": "N1 Iyeroglifi #504 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "潧語",
        "reading": "かんご (潧)",
        "meaning": "潧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_505",
    "level": "N1",
    "kanji": "潸",
    "onyomi": "カン (n1_505)",
    "kunyomi": "ひと (n1_505)",
    "meaningUz": "N1 Iyeroglifi #505 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "潸語",
        "reading": "かんご (潸)",
        "meaning": "潸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_506",
    "level": "N1",
    "kanji": "澉",
    "onyomi": "カン (n1_506)",
    "kunyomi": "ひと (n1_506)",
    "meaningUz": "N1 Iyeroglifi #506 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "澉語",
        "reading": "かんご (澉)",
        "meaning": "澉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_507",
    "level": "N1",
    "kanji": "澚",
    "onyomi": "カン (n1_507)",
    "kunyomi": "ひと (n1_507)",
    "meaningUz": "N1 Iyeroglifi #507 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "澚語",
        "reading": "かんご (澚)",
        "meaning": "澚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_508",
    "level": "N1",
    "kanji": "澫",
    "onyomi": "カン (n1_508)",
    "kunyomi": "ひと (n1_508)",
    "meaningUz": "N1 Iyeroglifi #508 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "澫語",
        "reading": "かんご (澫)",
        "meaning": "澫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_509",
    "level": "N1",
    "kanji": "澼",
    "onyomi": "カン (n1_509)",
    "kunyomi": "ひと (n1_509)",
    "meaningUz": "N1 Iyeroglifi #509 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "澼語",
        "reading": "かんご (澼)",
        "meaning": "澼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_510",
    "level": "N1",
    "kanji": "濍",
    "onyomi": "カン (n1_510)",
    "kunyomi": "ひと (n1_510)",
    "meaningUz": "N1 Iyeroglifi #510 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "濍語",
        "reading": "かんご (濍)",
        "meaning": "濍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_511",
    "level": "N1",
    "kanji": "濞",
    "onyomi": "カン (n1_511)",
    "kunyomi": "ひと (n1_511)",
    "meaningUz": "N1 Iyeroglifi #511 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "濞語",
        "reading": "かんご (濞)",
        "meaning": "濞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_512",
    "level": "N1",
    "kanji": "濯",
    "onyomi": "カン (n1_512)",
    "kunyomi": "ひと (n1_512)",
    "meaningUz": "N1 Iyeroglifi #512 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "濯語",
        "reading": "かんご (濯)",
        "meaning": "濯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_513",
    "level": "N1",
    "kanji": "瀀",
    "onyomi": "カン (n1_513)",
    "kunyomi": "ひと (n1_513)",
    "meaningUz": "N1 Iyeroglifi #513 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "瀀語",
        "reading": "かんご (瀀)",
        "meaning": "瀀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_514",
    "level": "N1",
    "kanji": "瀑",
    "onyomi": "カン (n1_514)",
    "kunyomi": "ひと (n1_514)",
    "meaningUz": "N1 Iyeroglifi #514 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "瀑語",
        "reading": "かんご (瀑)",
        "meaning": "瀑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_515",
    "level": "N1",
    "kanji": "瀢",
    "onyomi": "カン (n1_515)",
    "kunyomi": "ひと (n1_515)",
    "meaningUz": "N1 Iyeroglifi #515 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "瀢語",
        "reading": "かんご (瀢)",
        "meaning": "瀢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_516",
    "level": "N1",
    "kanji": "瀳",
    "onyomi": "カン (n1_516)",
    "kunyomi": "ひと (n1_516)",
    "meaningUz": "N1 Iyeroglifi #516 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "瀳語",
        "reading": "かんご (瀳)",
        "meaning": "瀳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_517",
    "level": "N1",
    "kanji": "灄",
    "onyomi": "カン (n1_517)",
    "kunyomi": "ひと (n1_517)",
    "meaningUz": "N1 Iyeroglifi #517 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "灄語",
        "reading": "かんご (灄)",
        "meaning": "灄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_518",
    "level": "N1",
    "kanji": "灕",
    "onyomi": "カン (n1_518)",
    "kunyomi": "ひと (n1_518)",
    "meaningUz": "N1 Iyeroglifi #518 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "灕語",
        "reading": "かんご (灕)",
        "meaning": "灕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_519",
    "level": "N1",
    "kanji": "灦",
    "onyomi": "カン (n1_519)",
    "kunyomi": "ひと (n1_519)",
    "meaningUz": "N1 Iyeroglifi #519 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "灦語",
        "reading": "かんご (灦)",
        "meaning": "灦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_520",
    "level": "N1",
    "kanji": "灷",
    "onyomi": "カン (n1_520)",
    "kunyomi": "ひと (n1_520)",
    "meaningUz": "N1 Iyeroglifi #520 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "灷語",
        "reading": "かんご (灷)",
        "meaning": "灷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_521",
    "level": "N1",
    "kanji": "炈",
    "onyomi": "カン (n1_521)",
    "kunyomi": "ひと (n1_521)",
    "meaningUz": "N1 Iyeroglifi #521 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "炈語",
        "reading": "かんご (炈)",
        "meaning": "炈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_522",
    "level": "N1",
    "kanji": "炙",
    "onyomi": "カン (n1_522)",
    "kunyomi": "ひと (n1_522)",
    "meaningUz": "N1 Iyeroglifi #522 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "炙語",
        "reading": "かんご (炙)",
        "meaning": "炙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_523",
    "level": "N1",
    "kanji": "炪",
    "onyomi": "カン (n1_523)",
    "kunyomi": "ひと (n1_523)",
    "meaningUz": "N1 Iyeroglifi #523 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "炪語",
        "reading": "かんご (炪)",
        "meaning": "炪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_524",
    "level": "N1",
    "kanji": "炻",
    "onyomi": "カン (n1_524)",
    "kunyomi": "ひと (n1_524)",
    "meaningUz": "N1 Iyeroglifi #524 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "炻語",
        "reading": "かんご (炻)",
        "meaning": "炻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_525",
    "level": "N1",
    "kanji": "烌",
    "onyomi": "カン (n1_525)",
    "kunyomi": "ひと (n1_525)",
    "meaningUz": "N1 Iyeroglifi #525 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "烌語",
        "reading": "かんご (烌)",
        "meaning": "烌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_526",
    "level": "N1",
    "kanji": "烝",
    "onyomi": "カン (n1_526)",
    "kunyomi": "ひと (n1_526)",
    "meaningUz": "N1 Iyeroglifi #526 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "烝語",
        "reading": "かんご (烝)",
        "meaning": "烝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_527",
    "level": "N1",
    "kanji": "烮",
    "onyomi": "カン (n1_527)",
    "kunyomi": "ひと (n1_527)",
    "meaningUz": "N1 Iyeroglifi #527 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "烮語",
        "reading": "かんご (烮)",
        "meaning": "烮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_528",
    "level": "N1",
    "kanji": "烿",
    "onyomi": "カン (n1_528)",
    "kunyomi": "ひと (n1_528)",
    "meaningUz": "N1 Iyeroglifi #528 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "烿語",
        "reading": "かんご (烿)",
        "meaning": "烿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_529",
    "level": "N1",
    "kanji": "焐",
    "onyomi": "カン (n1_529)",
    "kunyomi": "ひと (n1_529)",
    "meaningUz": "N1 Iyeroglifi #529 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "焐語",
        "reading": "かんご (焐)",
        "meaning": "焐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_530",
    "level": "N1",
    "kanji": "無",
    "onyomi": "カン (n1_530)",
    "kunyomi": "ひと (n1_530)",
    "meaningUz": "N1 Iyeroglifi #530 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "無語",
        "reading": "かんご (無)",
        "meaning": "無 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_531",
    "level": "N1",
    "kanji": "焲",
    "onyomi": "カン (n1_531)",
    "kunyomi": "ひと (n1_531)",
    "meaningUz": "N1 Iyeroglifi #531 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "焲語",
        "reading": "かんご (焲)",
        "meaning": "焲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_532",
    "level": "N1",
    "kanji": "煃",
    "onyomi": "カン (n1_532)",
    "kunyomi": "ひと (n1_532)",
    "meaningUz": "N1 Iyeroglifi #532 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "煃語",
        "reading": "かんご (煃)",
        "meaning": "煃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_533",
    "level": "N1",
    "kanji": "煔",
    "onyomi": "カン (n1_533)",
    "kunyomi": "ひと (n1_533)",
    "meaningUz": "N1 Iyeroglifi #533 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "煔語",
        "reading": "かんご (煔)",
        "meaning": "煔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_534",
    "level": "N1",
    "kanji": "煥",
    "onyomi": "カン (n1_534)",
    "kunyomi": "ひと (n1_534)",
    "meaningUz": "N1 Iyeroglifi #534 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "煥語",
        "reading": "かんご (煥)",
        "meaning": "煥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_535",
    "level": "N1",
    "kanji": "煶",
    "onyomi": "カン (n1_535)",
    "kunyomi": "ひと (n1_535)",
    "meaningUz": "N1 Iyeroglifi #535 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "煶語",
        "reading": "かんご (煶)",
        "meaning": "煶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_536",
    "level": "N1",
    "kanji": "熇",
    "onyomi": "カン (n1_536)",
    "kunyomi": "ひと (n1_536)",
    "meaningUz": "N1 Iyeroglifi #536 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "熇語",
        "reading": "かんご (熇)",
        "meaning": "熇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_537",
    "level": "N1",
    "kanji": "熘",
    "onyomi": "カン (n1_537)",
    "kunyomi": "ひと (n1_537)",
    "meaningUz": "N1 Iyeroglifi #537 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "熘語",
        "reading": "かんご (熘)",
        "meaning": "熘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_538",
    "level": "N1",
    "kanji": "熩",
    "onyomi": "カン (n1_538)",
    "kunyomi": "ひと (n1_538)",
    "meaningUz": "N1 Iyeroglifi #538 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "熩語",
        "reading": "かんご (熩)",
        "meaning": "熩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_539",
    "level": "N1",
    "kanji": "熺",
    "onyomi": "カン (n1_539)",
    "kunyomi": "ひと (n1_539)",
    "meaningUz": "N1 Iyeroglifi #539 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "熺語",
        "reading": "かんご (熺)",
        "meaning": "熺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_540",
    "level": "N1",
    "kanji": "燋",
    "onyomi": "カン (n1_540)",
    "kunyomi": "ひと (n1_540)",
    "meaningUz": "N1 Iyeroglifi #540 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "燋語",
        "reading": "かんご (燋)",
        "meaning": "燋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_541",
    "level": "N1",
    "kanji": "燜",
    "onyomi": "カン (n1_541)",
    "kunyomi": "ひと (n1_541)",
    "meaningUz": "N1 Iyeroglifi #541 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "燜語",
        "reading": "かんご (燜)",
        "meaning": "燜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_542",
    "level": "N1",
    "kanji": "燭",
    "onyomi": "カン (n1_542)",
    "kunyomi": "ひと (n1_542)",
    "meaningUz": "N1 Iyeroglifi #542 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "燭語",
        "reading": "かんご (燭)",
        "meaning": "燭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_543",
    "level": "N1",
    "kanji": "燾",
    "onyomi": "カン (n1_543)",
    "kunyomi": "ひと (n1_543)",
    "meaningUz": "N1 Iyeroglifi #543 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "燾語",
        "reading": "かんご (燾)",
        "meaning": "燾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_544",
    "level": "N1",
    "kanji": "爏",
    "onyomi": "カン (n1_544)",
    "kunyomi": "ひと (n1_544)",
    "meaningUz": "N1 Iyeroglifi #544 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "爏語",
        "reading": "かんご (爏)",
        "meaning": "爏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_545",
    "level": "N1",
    "kanji": "爠",
    "onyomi": "カン (n1_545)",
    "kunyomi": "ひと (n1_545)",
    "meaningUz": "N1 Iyeroglifi #545 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "爠語",
        "reading": "かんご (爠)",
        "meaning": "爠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_546",
    "level": "N1",
    "kanji": "爱",
    "onyomi": "カン (n1_546)",
    "kunyomi": "ひと (n1_546)",
    "meaningUz": "N1 Iyeroglifi #546 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "爱語",
        "reading": "かんご (爱)",
        "meaning": "爱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_547",
    "level": "N1",
    "kanji": "牂",
    "onyomi": "カン (n1_547)",
    "kunyomi": "ひと (n1_547)",
    "meaningUz": "N1 Iyeroglifi #547 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "牂語",
        "reading": "かんご (牂)",
        "meaning": "牂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_548",
    "level": "N1",
    "kanji": "牓",
    "onyomi": "カン (n1_548)",
    "kunyomi": "ひと (n1_548)",
    "meaningUz": "N1 Iyeroglifi #548 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "牓語",
        "reading": "かんご (牓)",
        "meaning": "牓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_549",
    "level": "N1",
    "kanji": "牤",
    "onyomi": "カン (n1_549)",
    "kunyomi": "ひと (n1_549)",
    "meaningUz": "N1 Iyeroglifi #549 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "牤語",
        "reading": "かんご (牤)",
        "meaning": "牤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_550",
    "level": "N1",
    "kanji": "牵",
    "onyomi": "カン (n1_550)",
    "kunyomi": "ひと (n1_550)",
    "meaningUz": "N1 Iyeroglifi #550 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "牵語",
        "reading": "かんご (牵)",
        "meaning": "牵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_551",
    "level": "N1",
    "kanji": "犆",
    "onyomi": "カン (n1_551)",
    "kunyomi": "ひと (n1_551)",
    "meaningUz": "N1 Iyeroglifi #551 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "犆語",
        "reading": "かんご (犆)",
        "meaning": "犆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_552",
    "level": "N1",
    "kanji": "犗",
    "onyomi": "カン (n1_552)",
    "kunyomi": "ひと (n1_552)",
    "meaningUz": "N1 Iyeroglifi #552 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "犗語",
        "reading": "かんご (犗)",
        "meaning": "犗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_553",
    "level": "N1",
    "kanji": "犨",
    "onyomi": "カン (n1_553)",
    "kunyomi": "ひと (n1_553)",
    "meaningUz": "N1 Iyeroglifi #553 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "犨語",
        "reading": "かんご (犨)",
        "meaning": "犨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_554",
    "level": "N1",
    "kanji": "犹",
    "onyomi": "カン (n1_554)",
    "kunyomi": "ひと (n1_554)",
    "meaningUz": "N1 Iyeroglifi #554 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "犹語",
        "reading": "かんご (犹)",
        "meaning": "犹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_555",
    "level": "N1",
    "kanji": "狊",
    "onyomi": "カン (n1_555)",
    "kunyomi": "ひと (n1_555)",
    "meaningUz": "N1 Iyeroglifi #555 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "狊語",
        "reading": "かんご (狊)",
        "meaning": "狊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_556",
    "level": "N1",
    "kanji": "狛",
    "onyomi": "カン (n1_556)",
    "kunyomi": "ひと (n1_556)",
    "meaningUz": "N1 Iyeroglifi #556 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "狛語",
        "reading": "かんご (狛)",
        "meaning": "狛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_557",
    "level": "N1",
    "kanji": "独",
    "onyomi": "カン (n1_557)",
    "kunyomi": "ひと (n1_557)",
    "meaningUz": "N1 Iyeroglifi #557 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "独語",
        "reading": "かんご (独)",
        "meaning": "独 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_558",
    "level": "N1",
    "kanji": "狽",
    "onyomi": "カン (n1_558)",
    "kunyomi": "ひと (n1_558)",
    "meaningUz": "N1 Iyeroglifi #558 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "狽語",
        "reading": "かんご (狽)",
        "meaning": "狽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_559",
    "level": "N1",
    "kanji": "猎",
    "onyomi": "カン (n1_559)",
    "kunyomi": "ひと (n1_559)",
    "meaningUz": "N1 Iyeroglifi #559 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "猎語",
        "reading": "かんご (猎)",
        "meaning": "猎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_560",
    "level": "N1",
    "kanji": "猟",
    "onyomi": "カン (n1_560)",
    "kunyomi": "ひと (n1_560)",
    "meaningUz": "N1 Iyeroglifi #560 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "猟語",
        "reading": "かんご (猟)",
        "meaning": "猟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_561",
    "level": "N1",
    "kanji": "猰",
    "onyomi": "カン (n1_561)",
    "kunyomi": "ひと (n1_561)",
    "meaningUz": "N1 Iyeroglifi #561 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "猰語",
        "reading": "かんご (猰)",
        "meaning": "猰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_562",
    "level": "N1",
    "kanji": "獁",
    "onyomi": "カン (n1_562)",
    "kunyomi": "ひと (n1_562)",
    "meaningUz": "N1 Iyeroglifi #562 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "獁語",
        "reading": "かんご (獁)",
        "meaning": "獁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_563",
    "level": "N1",
    "kanji": "獒",
    "onyomi": "カン (n1_563)",
    "kunyomi": "ひと (n1_563)",
    "meaningUz": "N1 Iyeroglifi #563 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "獒語",
        "reading": "かんご (獒)",
        "meaning": "獒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_564",
    "level": "N1",
    "kanji": "獣",
    "onyomi": "カン (n1_564)",
    "kunyomi": "ひと (n1_564)",
    "meaningUz": "N1 Iyeroglifi #564 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "獣語",
        "reading": "かんご (獣)",
        "meaning": "獣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_565",
    "level": "N1",
    "kanji": "獴",
    "onyomi": "カン (n1_565)",
    "kunyomi": "ひと (n1_565)",
    "meaningUz": "N1 Iyeroglifi #565 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "獴語",
        "reading": "かんご (獴)",
        "meaning": "獴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_566",
    "level": "N1",
    "kanji": "玅",
    "onyomi": "カン (n1_566)",
    "kunyomi": "ひと (n1_566)",
    "meaningUz": "N1 Iyeroglifi #566 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "玅語",
        "reading": "かんご (玅)",
        "meaning": "玅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_567",
    "level": "N1",
    "kanji": "玖",
    "onyomi": "カン (n1_567)",
    "kunyomi": "ひと (n1_567)",
    "meaningUz": "N1 Iyeroglifi #567 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "玖語",
        "reading": "かんご (玖)",
        "meaning": "玖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_568",
    "level": "N1",
    "kanji": "玧",
    "onyomi": "カン (n1_568)",
    "kunyomi": "ひと (n1_568)",
    "meaningUz": "N1 Iyeroglifi #568 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "玧語",
        "reading": "かんご (玧)",
        "meaning": "玧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_569",
    "level": "N1",
    "kanji": "玸",
    "onyomi": "カン (n1_569)",
    "kunyomi": "ひと (n1_569)",
    "meaningUz": "N1 Iyeroglifi #569 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "玸語",
        "reading": "かんご (玸)",
        "meaning": "玸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_570",
    "level": "N1",
    "kanji": "珉",
    "onyomi": "カン (n1_570)",
    "kunyomi": "ひと (n1_570)",
    "meaningUz": "N1 Iyeroglifi #570 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "珉語",
        "reading": "かんご (珉)",
        "meaning": "珉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_571",
    "level": "N1",
    "kanji": "珚",
    "onyomi": "カン (n1_571)",
    "kunyomi": "ひと (n1_571)",
    "meaningUz": "N1 Iyeroglifi #571 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "珚語",
        "reading": "かんご (珚)",
        "meaning": "珚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_572",
    "level": "N1",
    "kanji": "珫",
    "onyomi": "カン (n1_572)",
    "kunyomi": "ひと (n1_572)",
    "meaningUz": "N1 Iyeroglifi #572 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "珫語",
        "reading": "かんご (珫)",
        "meaning": "珫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_573",
    "level": "N1",
    "kanji": "珼",
    "onyomi": "カン (n1_573)",
    "kunyomi": "ひと (n1_573)",
    "meaningUz": "N1 Iyeroglifi #573 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "珼語",
        "reading": "かんご (珼)",
        "meaning": "珼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_574",
    "level": "N1",
    "kanji": "琍",
    "onyomi": "カン (n1_574)",
    "kunyomi": "ひと (n1_574)",
    "meaningUz": "N1 Iyeroglifi #574 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "琍語",
        "reading": "かんご (琍)",
        "meaning": "琍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_575",
    "level": "N1",
    "kanji": "琞",
    "onyomi": "カン (n1_575)",
    "kunyomi": "ひと (n1_575)",
    "meaningUz": "N1 Iyeroglifi #575 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "琞語",
        "reading": "かんご (琞)",
        "meaning": "琞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_576",
    "level": "N1",
    "kanji": "琯",
    "onyomi": "カン (n1_576)",
    "kunyomi": "ひと (n1_576)",
    "meaningUz": "N1 Iyeroglifi #576 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "琯語",
        "reading": "かんご (琯)",
        "meaning": "琯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_577",
    "level": "N1",
    "kanji": "瑀",
    "onyomi": "カン (n1_577)",
    "kunyomi": "ひと (n1_577)",
    "meaningUz": "N1 Iyeroglifi #577 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "瑀語",
        "reading": "かんご (瑀)",
        "meaning": "瑀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_578",
    "level": "N1",
    "kanji": "瑑",
    "onyomi": "カン (n1_578)",
    "kunyomi": "ひと (n1_578)",
    "meaningUz": "N1 Iyeroglifi #578 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "瑑語",
        "reading": "かんご (瑑)",
        "meaning": "瑑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_579",
    "level": "N1",
    "kanji": "瑢",
    "onyomi": "カン (n1_579)",
    "kunyomi": "ひと (n1_579)",
    "meaningUz": "N1 Iyeroglifi #579 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "瑢語",
        "reading": "かんご (瑢)",
        "meaning": "瑢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_580",
    "level": "N1",
    "kanji": "瑳",
    "onyomi": "カン (n1_580)",
    "kunyomi": "ひと (n1_580)",
    "meaningUz": "N1 Iyeroglifi #580 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "瑳語",
        "reading": "かんご (瑳)",
        "meaning": "瑳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_581",
    "level": "N1",
    "kanji": "璄",
    "onyomi": "カン (n1_581)",
    "kunyomi": "ひと (n1_581)",
    "meaningUz": "N1 Iyeroglifi #581 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "璄語",
        "reading": "かんご (璄)",
        "meaning": "璄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_582",
    "level": "N1",
    "kanji": "璕",
    "onyomi": "カン (n1_582)",
    "kunyomi": "ひと (n1_582)",
    "meaningUz": "N1 Iyeroglifi #582 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "璕語",
        "reading": "かんご (璕)",
        "meaning": "璕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_583",
    "level": "N1",
    "kanji": "璦",
    "onyomi": "カン (n1_583)",
    "kunyomi": "ひと (n1_583)",
    "meaningUz": "N1 Iyeroglifi #583 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "璦語",
        "reading": "かんご (璦)",
        "meaning": "璦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_584",
    "level": "N1",
    "kanji": "璷",
    "onyomi": "カン (n1_584)",
    "kunyomi": "ひと (n1_584)",
    "meaningUz": "N1 Iyeroglifi #584 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "璷語",
        "reading": "かんご (璷)",
        "meaning": "璷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_585",
    "level": "N1",
    "kanji": "瓈",
    "onyomi": "カン (n1_585)",
    "kunyomi": "ひと (n1_585)",
    "meaningUz": "N1 Iyeroglifi #585 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "瓈語",
        "reading": "かんご (瓈)",
        "meaning": "瓈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_586",
    "level": "N1",
    "kanji": "瓙",
    "onyomi": "カン (n1_586)",
    "kunyomi": "ひと (n1_586)",
    "meaningUz": "N1 Iyeroglifi #586 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "瓙語",
        "reading": "かんご (瓙)",
        "meaning": "瓙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_587",
    "level": "N1",
    "kanji": "瓪",
    "onyomi": "カン (n1_587)",
    "kunyomi": "ひと (n1_587)",
    "meaningUz": "N1 Iyeroglifi #587 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "瓪語",
        "reading": "かんご (瓪)",
        "meaning": "瓪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_588",
    "level": "N1",
    "kanji": "瓻",
    "onyomi": "カン (n1_588)",
    "kunyomi": "ひと (n1_588)",
    "meaningUz": "N1 Iyeroglifi #588 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "瓻語",
        "reading": "かんご (瓻)",
        "meaning": "瓻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_589",
    "level": "N1",
    "kanji": "甌",
    "onyomi": "カン (n1_589)",
    "kunyomi": "ひと (n1_589)",
    "meaningUz": "N1 Iyeroglifi #589 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "甌語",
        "reading": "かんご (甌)",
        "meaning": "甌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_590",
    "level": "N1",
    "kanji": "甝",
    "onyomi": "カン (n1_590)",
    "kunyomi": "ひと (n1_590)",
    "meaningUz": "N1 Iyeroglifi #590 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "甝語",
        "reading": "かんご (甝)",
        "meaning": "甝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_591",
    "level": "N1",
    "kanji": "甮",
    "onyomi": "カン (n1_591)",
    "kunyomi": "ひと (n1_591)",
    "meaningUz": "N1 Iyeroglifi #591 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "甮語",
        "reading": "かんご (甮)",
        "meaning": "甮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_592",
    "level": "N1",
    "kanji": "甿",
    "onyomi": "カン (n1_592)",
    "kunyomi": "ひと (n1_592)",
    "meaningUz": "N1 Iyeroglifi #592 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "甿語",
        "reading": "かんご (甿)",
        "meaning": "甿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_593",
    "level": "N1",
    "kanji": "畐",
    "onyomi": "カン (n1_593)",
    "kunyomi": "ひと (n1_593)",
    "meaningUz": "N1 Iyeroglifi #593 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "畐語",
        "reading": "かんご (畐)",
        "meaning": "畐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_594",
    "level": "N1",
    "kanji": "畡",
    "onyomi": "カン (n1_594)",
    "kunyomi": "ひと (n1_594)",
    "meaningUz": "N1 Iyeroglifi #594 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "畡語",
        "reading": "かんご (畡)",
        "meaning": "畡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_595",
    "level": "N1",
    "kanji": "畲",
    "onyomi": "カン (n1_595)",
    "kunyomi": "ひと (n1_595)",
    "meaningUz": "N1 Iyeroglifi #595 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "畲語",
        "reading": "かんご (畲)",
        "meaning": "畲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_596",
    "level": "N1",
    "kanji": "疃",
    "onyomi": "カン (n1_596)",
    "kunyomi": "ひと (n1_596)",
    "meaningUz": "N1 Iyeroglifi #596 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "疃語",
        "reading": "かんご (疃)",
        "meaning": "疃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_597",
    "level": "N1",
    "kanji": "疔",
    "onyomi": "カン (n1_597)",
    "kunyomi": "ひと (n1_597)",
    "meaningUz": "N1 Iyeroglifi #597 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "疔語",
        "reading": "かんご (疔)",
        "meaning": "疔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_598",
    "level": "N1",
    "kanji": "疥",
    "onyomi": "カン (n1_598)",
    "kunyomi": "ひと (n1_598)",
    "meaningUz": "N1 Iyeroglifi #598 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "疥語",
        "reading": "かんご (疥)",
        "meaning": "疥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_599",
    "level": "N1",
    "kanji": "疶",
    "onyomi": "カン (n1_599)",
    "kunyomi": "ひと (n1_599)",
    "meaningUz": "N1 Iyeroglifi #599 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "疶語",
        "reading": "かんご (疶)",
        "meaning": "疶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_600",
    "level": "N1",
    "kanji": "症",
    "onyomi": "カン (n1_600)",
    "kunyomi": "ひと (n1_600)",
    "meaningUz": "N1 Iyeroglifi #600 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "症語",
        "reading": "かんご (症)",
        "meaning": "症 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_601",
    "level": "N1",
    "kanji": "痘",
    "onyomi": "カン (n1_601)",
    "kunyomi": "ひと (n1_601)",
    "meaningUz": "N1 Iyeroglifi #601 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "痘語",
        "reading": "かんご (痘)",
        "meaning": "痘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_602",
    "level": "N1",
    "kanji": "痩",
    "onyomi": "カン (n1_602)",
    "kunyomi": "ひと (n1_602)",
    "meaningUz": "N1 Iyeroglifi #602 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "痩語",
        "reading": "かんご (痩)",
        "meaning": "痩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_603",
    "level": "N1",
    "kanji": "痺",
    "onyomi": "カン (n1_603)",
    "kunyomi": "ひと (n1_603)",
    "meaningUz": "N1 Iyeroglifi #603 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "痺語",
        "reading": "かんご (痺)",
        "meaning": "痺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_604",
    "level": "N1",
    "kanji": "瘋",
    "onyomi": "カン (n1_604)",
    "kunyomi": "ひと (n1_604)",
    "meaningUz": "N1 Iyeroglifi #604 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "瘋語",
        "reading": "かんご (瘋)",
        "meaning": "瘋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_605",
    "level": "N1",
    "kanji": "瘜",
    "onyomi": "カン (n1_605)",
    "kunyomi": "ひと (n1_605)",
    "meaningUz": "N1 Iyeroglifi #605 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "瘜語",
        "reading": "かんご (瘜)",
        "meaning": "瘜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_606",
    "level": "N1",
    "kanji": "瘭",
    "onyomi": "カン (n1_606)",
    "kunyomi": "ひと (n1_606)",
    "meaningUz": "N1 Iyeroglifi #606 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "瘭語",
        "reading": "かんご (瘭)",
        "meaning": "瘭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_607",
    "level": "N1",
    "kanji": "瘾",
    "onyomi": "カン (n1_607)",
    "kunyomi": "ひと (n1_607)",
    "meaningUz": "N1 Iyeroglifi #607 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "瘾語",
        "reading": "かんご (瘾)",
        "meaning": "瘾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_608",
    "level": "N1",
    "kanji": "癏",
    "onyomi": "カン (n1_608)",
    "kunyomi": "ひと (n1_608)",
    "meaningUz": "N1 Iyeroglifi #608 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "癏語",
        "reading": "かんご (癏)",
        "meaning": "癏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_609",
    "level": "N1",
    "kanji": "癠",
    "onyomi": "カン (n1_609)",
    "kunyomi": "ひと (n1_609)",
    "meaningUz": "N1 Iyeroglifi #609 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "癠語",
        "reading": "かんご (癠)",
        "meaning": "癠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_610",
    "level": "N1",
    "kanji": "癱",
    "onyomi": "カン (n1_610)",
    "kunyomi": "ひと (n1_610)",
    "meaningUz": "N1 Iyeroglifi #610 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "癱語",
        "reading": "かんご (癱)",
        "meaning": "癱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_611",
    "level": "N1",
    "kanji": "皂",
    "onyomi": "カン (n1_611)",
    "kunyomi": "ひと (n1_611)",
    "meaningUz": "N1 Iyeroglifi #611 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "皂語",
        "reading": "かんご (皂)",
        "meaning": "皂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_612",
    "level": "N1",
    "kanji": "皓",
    "onyomi": "カン (n1_612)",
    "kunyomi": "ひと (n1_612)",
    "meaningUz": "N1 Iyeroglifi #612 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "皓語",
        "reading": "かんご (皓)",
        "meaning": "皓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_613",
    "level": "N1",
    "kanji": "皤",
    "onyomi": "カン (n1_613)",
    "kunyomi": "ひと (n1_613)",
    "meaningUz": "N1 Iyeroglifi #613 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "皤語",
        "reading": "かんご (皤)",
        "meaning": "皤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_614",
    "level": "N1",
    "kanji": "皵",
    "onyomi": "カン (n1_614)",
    "kunyomi": "ひと (n1_614)",
    "meaningUz": "N1 Iyeroglifi #614 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "皵語",
        "reading": "かんご (皵)",
        "meaning": "皵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_615",
    "level": "N1",
    "kanji": "盆",
    "onyomi": "カン (n1_615)",
    "kunyomi": "ひと (n1_615)",
    "meaningUz": "N1 Iyeroglifi #615 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "盆語",
        "reading": "かんご (盆)",
        "meaning": "盆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_616",
    "level": "N1",
    "kanji": "盗",
    "onyomi": "カン (n1_616)",
    "kunyomi": "ひと (n1_616)",
    "meaningUz": "N1 Iyeroglifi #616 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "盗語",
        "reading": "かんご (盗)",
        "meaning": "盗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_617",
    "level": "N1",
    "kanji": "盨",
    "onyomi": "カン (n1_617)",
    "kunyomi": "ひと (n1_617)",
    "meaningUz": "N1 Iyeroglifi #617 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "盨語",
        "reading": "かんご (盨)",
        "meaning": "盨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_618",
    "level": "N1",
    "kanji": "盹",
    "onyomi": "カン (n1_618)",
    "kunyomi": "ひと (n1_618)",
    "meaningUz": "N1 Iyeroglifi #618 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "盹語",
        "reading": "かんご (盹)",
        "meaning": "盹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_619",
    "level": "N1",
    "kanji": "眊",
    "onyomi": "カン (n1_619)",
    "kunyomi": "ひと (n1_619)",
    "meaningUz": "N1 Iyeroglifi #619 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "眊語",
        "reading": "かんご (眊)",
        "meaning": "眊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_620",
    "level": "N1",
    "kanji": "眛",
    "onyomi": "カン (n1_620)",
    "kunyomi": "ひと (n1_620)",
    "meaningUz": "N1 Iyeroglifi #620 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "眛語",
        "reading": "かんご (眛)",
        "meaning": "眛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_621",
    "level": "N1",
    "kanji": "眬",
    "onyomi": "カン (n1_621)",
    "kunyomi": "ひと (n1_621)",
    "meaningUz": "N1 Iyeroglifi #621 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "眬語",
        "reading": "かんご (眬)",
        "meaning": "眬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_622",
    "level": "N1",
    "kanji": "眽",
    "onyomi": "カン (n1_622)",
    "kunyomi": "ひと (n1_622)",
    "meaningUz": "N1 Iyeroglifi #622 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "眽語",
        "reading": "かんご (眽)",
        "meaning": "眽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_623",
    "level": "N1",
    "kanji": "睎",
    "onyomi": "カン (n1_623)",
    "kunyomi": "ひと (n1_623)",
    "meaningUz": "N1 Iyeroglifi #623 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "睎語",
        "reading": "かんご (睎)",
        "meaning": "睎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_624",
    "level": "N1",
    "kanji": "睟",
    "onyomi": "カン (n1_624)",
    "kunyomi": "ひと (n1_624)",
    "meaningUz": "N1 Iyeroglifi #624 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "睟語",
        "reading": "かんご (睟)",
        "meaning": "睟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_625",
    "level": "N1",
    "kanji": "睰",
    "onyomi": "カン (n1_625)",
    "kunyomi": "ひと (n1_625)",
    "meaningUz": "N1 Iyeroglifi #625 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "睰語",
        "reading": "かんご (睰)",
        "meaning": "睰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_626",
    "level": "N1",
    "kanji": "瞁",
    "onyomi": "カン (n1_626)",
    "kunyomi": "ひと (n1_626)",
    "meaningUz": "N1 Iyeroglifi #626 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "瞁語",
        "reading": "かんご (瞁)",
        "meaning": "瞁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_627",
    "level": "N1",
    "kanji": "瞒",
    "onyomi": "カン (n1_627)",
    "kunyomi": "ひと (n1_627)",
    "meaningUz": "N1 Iyeroglifi #627 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "瞒語",
        "reading": "かんご (瞒)",
        "meaning": "瞒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_628",
    "level": "N1",
    "kanji": "瞣",
    "onyomi": "カン (n1_628)",
    "kunyomi": "ひと (n1_628)",
    "meaningUz": "N1 Iyeroglifi #628 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "瞣語",
        "reading": "かんご (瞣)",
        "meaning": "瞣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_629",
    "level": "N1",
    "kanji": "瞴",
    "onyomi": "カン (n1_629)",
    "kunyomi": "ひと (n1_629)",
    "meaningUz": "N1 Iyeroglifi #629 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "瞴語",
        "reading": "かんご (瞴)",
        "meaning": "瞴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_630",
    "level": "N1",
    "kanji": "矅",
    "onyomi": "カン (n1_630)",
    "kunyomi": "ひと (n1_630)",
    "meaningUz": "N1 Iyeroglifi #630 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "矅語",
        "reading": "かんご (矅)",
        "meaning": "矅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_631",
    "level": "N1",
    "kanji": "矖",
    "onyomi": "カン (n1_631)",
    "kunyomi": "ひと (n1_631)",
    "meaningUz": "N1 Iyeroglifi #631 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "矖語",
        "reading": "かんご (矖)",
        "meaning": "矖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_632",
    "level": "N1",
    "kanji": "矧",
    "onyomi": "カン (n1_632)",
    "kunyomi": "ひと (n1_632)",
    "meaningUz": "N1 Iyeroglifi #632 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "矧語",
        "reading": "かんご (矧)",
        "meaning": "矧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_633",
    "level": "N1",
    "kanji": "矸",
    "onyomi": "カン (n1_633)",
    "kunyomi": "ひと (n1_633)",
    "meaningUz": "N1 Iyeroglifi #633 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "矸語",
        "reading": "かんご (矸)",
        "meaning": "矸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_634",
    "level": "N1",
    "kanji": "砉",
    "onyomi": "カン (n1_634)",
    "kunyomi": "ひと (n1_634)",
    "meaningUz": "N1 Iyeroglifi #634 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "砉語",
        "reading": "かんご (砉)",
        "meaning": "砉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_635",
    "level": "N1",
    "kanji": "砚",
    "onyomi": "カン (n1_635)",
    "kunyomi": "ひと (n1_635)",
    "meaningUz": "N1 Iyeroglifi #635 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "砚語",
        "reading": "かんご (砚)",
        "meaning": "砚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_636",
    "level": "N1",
    "kanji": "砫",
    "onyomi": "カン (n1_636)",
    "kunyomi": "ひと (n1_636)",
    "meaningUz": "N1 Iyeroglifi #636 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "砫語",
        "reading": "かんご (砫)",
        "meaning": "砫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_637",
    "level": "N1",
    "kanji": "砼",
    "onyomi": "カン (n1_637)",
    "kunyomi": "ひと (n1_637)",
    "meaningUz": "N1 Iyeroglifi #637 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "砼語",
        "reading": "かんご (砼)",
        "meaning": "砼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_638",
    "level": "N1",
    "kanji": "硍",
    "onyomi": "カン (n1_638)",
    "kunyomi": "ひと (n1_638)",
    "meaningUz": "N1 Iyeroglifi #638 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "硍語",
        "reading": "かんご (硍)",
        "meaning": "硍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_639",
    "level": "N1",
    "kanji": "硞",
    "onyomi": "カン (n1_639)",
    "kunyomi": "ひと (n1_639)",
    "meaningUz": "N1 Iyeroglifi #639 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "硞語",
        "reading": "かんご (硞)",
        "meaning": "硞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_640",
    "level": "N1",
    "kanji": "硯",
    "onyomi": "カン (n1_640)",
    "kunyomi": "ひと (n1_640)",
    "meaningUz": "N1 Iyeroglifi #640 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "硯語",
        "reading": "かんご (硯)",
        "meaning": "硯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_641",
    "level": "N1",
    "kanji": "碀",
    "onyomi": "カン (n1_641)",
    "kunyomi": "ひと (n1_641)",
    "meaningUz": "N1 Iyeroglifi #641 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "碀語",
        "reading": "かんご (碀)",
        "meaning": "碀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_642",
    "level": "N1",
    "kanji": "碑",
    "onyomi": "カン (n1_642)",
    "kunyomi": "ひと (n1_642)",
    "meaningUz": "N1 Iyeroglifi #642 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "碑語",
        "reading": "かんご (碑)",
        "meaning": "碑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_643",
    "level": "N1",
    "kanji": "碢",
    "onyomi": "カン (n1_643)",
    "kunyomi": "ひと (n1_643)",
    "meaningUz": "N1 Iyeroglifi #643 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "碢語",
        "reading": "かんご (碢)",
        "meaning": "碢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_644",
    "level": "N1",
    "kanji": "碳",
    "onyomi": "カン (n1_644)",
    "kunyomi": "ひと (n1_644)",
    "meaningUz": "N1 Iyeroglifi #644 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "碳語",
        "reading": "かんご (碳)",
        "meaning": "碳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_645",
    "level": "N1",
    "kanji": "磄",
    "onyomi": "カン (n1_645)",
    "kunyomi": "ひと (n1_645)",
    "meaningUz": "N1 Iyeroglifi #645 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "磄語",
        "reading": "かんご (磄)",
        "meaning": "磄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_646",
    "level": "N1",
    "kanji": "磕",
    "onyomi": "カン (n1_646)",
    "kunyomi": "ひと (n1_646)",
    "meaningUz": "N1 Iyeroglifi #646 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "磕語",
        "reading": "かんご (磕)",
        "meaning": "磕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_647",
    "level": "N1",
    "kanji": "磦",
    "onyomi": "カン (n1_647)",
    "kunyomi": "ひと (n1_647)",
    "meaningUz": "N1 Iyeroglifi #647 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "磦語",
        "reading": "かんご (磦)",
        "meaning": "磦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_648",
    "level": "N1",
    "kanji": "磷",
    "onyomi": "カン (n1_648)",
    "kunyomi": "ひと (n1_648)",
    "meaningUz": "N1 Iyeroglifi #648 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "磷語",
        "reading": "かんご (磷)",
        "meaning": "磷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_649",
    "level": "N1",
    "kanji": "礈",
    "onyomi": "カン (n1_649)",
    "kunyomi": "ひと (n1_649)",
    "meaningUz": "N1 Iyeroglifi #649 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "礈語",
        "reading": "かんご (礈)",
        "meaning": "礈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_650",
    "level": "N1",
    "kanji": "礙",
    "onyomi": "カン (n1_650)",
    "kunyomi": "ひと (n1_650)",
    "meaningUz": "N1 Iyeroglifi #650 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "礙語",
        "reading": "かんご (礙)",
        "meaning": "礙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_651",
    "level": "N1",
    "kanji": "礪",
    "onyomi": "カン (n1_651)",
    "kunyomi": "ひと (n1_651)",
    "meaningUz": "N1 Iyeroglifi #651 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "礪語",
        "reading": "かんご (礪)",
        "meaning": "礪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_652",
    "level": "N1",
    "kanji": "礻",
    "onyomi": "カン (n1_652)",
    "kunyomi": "ひと (n1_652)",
    "meaningUz": "N1 Iyeroglifi #652 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "礻語",
        "reading": "かんご (礻)",
        "meaning": "礻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_653",
    "level": "N1",
    "kanji": "祌",
    "onyomi": "カン (n1_653)",
    "kunyomi": "ひと (n1_653)",
    "meaningUz": "N1 Iyeroglifi #653 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "祌語",
        "reading": "かんご (祌)",
        "meaning": "祌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_654",
    "level": "N1",
    "kanji": "祝",
    "onyomi": "カン (n1_654)",
    "kunyomi": "ひと (n1_654)",
    "meaningUz": "N1 Iyeroglifi #654 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "祝語",
        "reading": "かんご (祝)",
        "meaning": "祝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_655",
    "level": "N1",
    "kanji": "祮",
    "onyomi": "カン (n1_655)",
    "kunyomi": "ひと (n1_655)",
    "meaningUz": "N1 Iyeroglifi #655 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "祮語",
        "reading": "かんご (祮)",
        "meaning": "祮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_656",
    "level": "N1",
    "kanji": "祿",
    "onyomi": "カン (n1_656)",
    "kunyomi": "ひと (n1_656)",
    "meaningUz": "N1 Iyeroglifi #656 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "祿語",
        "reading": "かんご (祿)",
        "meaning": "祿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_657",
    "level": "N1",
    "kanji": "禐",
    "onyomi": "カン (n1_657)",
    "kunyomi": "ひと (n1_657)",
    "meaningUz": "N1 Iyeroglifi #657 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "禐語",
        "reading": "かんご (禐)",
        "meaning": "禐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_658",
    "level": "N1",
    "kanji": "禡",
    "onyomi": "カン (n1_658)",
    "kunyomi": "ひと (n1_658)",
    "meaningUz": "N1 Iyeroglifi #658 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "禡語",
        "reading": "かんご (禡)",
        "meaning": "禡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_659",
    "level": "N1",
    "kanji": "禲",
    "onyomi": "カン (n1_659)",
    "kunyomi": "ひと (n1_659)",
    "meaningUz": "N1 Iyeroglifi #659 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "禲語",
        "reading": "かんご (禲)",
        "meaning": "禲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_660",
    "level": "N1",
    "kanji": "秃",
    "onyomi": "カン (n1_660)",
    "kunyomi": "ひと (n1_660)",
    "meaningUz": "N1 Iyeroglifi #660 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "秃語",
        "reading": "かんご (秃)",
        "meaning": "秃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_661",
    "level": "N1",
    "kanji": "秔",
    "onyomi": "カン (n1_661)",
    "kunyomi": "ひと (n1_661)",
    "meaningUz": "N1 Iyeroglifi #661 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "秔語",
        "reading": "かんご (秔)",
        "meaning": "秔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_662",
    "level": "N1",
    "kanji": "秥",
    "onyomi": "カン (n1_662)",
    "kunyomi": "ひと (n1_662)",
    "meaningUz": "N1 Iyeroglifi #662 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "秥語",
        "reading": "かんご (秥)",
        "meaning": "秥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_663",
    "level": "N1",
    "kanji": "秶",
    "onyomi": "カン (n1_663)",
    "kunyomi": "ひと (n1_663)",
    "meaningUz": "N1 Iyeroglifi #663 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "秶語",
        "reading": "かんご (秶)",
        "meaning": "秶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_664",
    "level": "N1",
    "kanji": "稇",
    "onyomi": "カン (n1_664)",
    "kunyomi": "ひと (n1_664)",
    "meaningUz": "N1 Iyeroglifi #664 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "稇語",
        "reading": "かんご (稇)",
        "meaning": "稇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_665",
    "level": "N1",
    "kanji": "稘",
    "onyomi": "カン (n1_665)",
    "kunyomi": "ひと (n1_665)",
    "meaningUz": "N1 Iyeroglifi #665 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "稘語",
        "reading": "かんご (稘)",
        "meaning": "稘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_666",
    "level": "N1",
    "kanji": "稩",
    "onyomi": "カン (n1_666)",
    "kunyomi": "ひと (n1_666)",
    "meaningUz": "N1 Iyeroglifi #666 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "稩語",
        "reading": "かんご (稩)",
        "meaning": "稩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_667",
    "level": "N1",
    "kanji": "稺",
    "onyomi": "カン (n1_667)",
    "kunyomi": "ひと (n1_667)",
    "meaningUz": "N1 Iyeroglifi #667 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "稺語",
        "reading": "かんご (稺)",
        "meaning": "稺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_668",
    "level": "N1",
    "kanji": "穋",
    "onyomi": "カン (n1_668)",
    "kunyomi": "ひと (n1_668)",
    "meaningUz": "N1 Iyeroglifi #668 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "穋語",
        "reading": "かんご (穋)",
        "meaning": "穋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_669",
    "level": "N1",
    "kanji": "穜",
    "onyomi": "カン (n1_669)",
    "kunyomi": "ひと (n1_669)",
    "meaningUz": "N1 Iyeroglifi #669 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "穜語",
        "reading": "かんご (穜)",
        "meaning": "穜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_670",
    "level": "N1",
    "kanji": "穭",
    "onyomi": "カン (n1_670)",
    "kunyomi": "ひと (n1_670)",
    "meaningUz": "N1 Iyeroglifi #670 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "穭語",
        "reading": "かんご (穭)",
        "meaning": "穭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_671",
    "level": "N1",
    "kanji": "穾",
    "onyomi": "カン (n1_671)",
    "kunyomi": "ひと (n1_671)",
    "meaningUz": "N1 Iyeroglifi #671 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "穾語",
        "reading": "かんご (穾)",
        "meaning": "穾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_672",
    "level": "N1",
    "kanji": "窏",
    "onyomi": "カン (n1_672)",
    "kunyomi": "ひと (n1_672)",
    "meaningUz": "N1 Iyeroglifi #672 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "窏語",
        "reading": "かんご (窏)",
        "meaning": "窏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_673",
    "level": "N1",
    "kanji": "窠",
    "onyomi": "カン (n1_673)",
    "kunyomi": "ひと (n1_673)",
    "meaningUz": "N1 Iyeroglifi #673 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "窠語",
        "reading": "かんご (窠)",
        "meaning": "窠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_674",
    "level": "N1",
    "kanji": "窱",
    "onyomi": "カン (n1_674)",
    "kunyomi": "ひと (n1_674)",
    "meaningUz": "N1 Iyeroglifi #674 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "窱語",
        "reading": "かんご (窱)",
        "meaning": "窱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_675",
    "level": "N1",
    "kanji": "竂",
    "onyomi": "カン (n1_675)",
    "kunyomi": "ひと (n1_675)",
    "meaningUz": "N1 Iyeroglifi #675 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "竂語",
        "reading": "かんご (竂)",
        "meaning": "竂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_676",
    "level": "N1",
    "kanji": "竓",
    "onyomi": "カン (n1_676)",
    "kunyomi": "ひと (n1_676)",
    "meaningUz": "N1 Iyeroglifi #676 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "竓語",
        "reading": "かんご (竓)",
        "meaning": "竓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_677",
    "level": "N1",
    "kanji": "竤",
    "onyomi": "カン (n1_677)",
    "kunyomi": "ひと (n1_677)",
    "meaningUz": "N1 Iyeroglifi #677 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "竤語",
        "reading": "かんご (竤)",
        "meaning": "竤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_678",
    "level": "N1",
    "kanji": "竵",
    "onyomi": "カン (n1_678)",
    "kunyomi": "ひと (n1_678)",
    "meaningUz": "N1 Iyeroglifi #678 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "竵語",
        "reading": "かんご (竵)",
        "meaning": "竵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_679",
    "level": "N1",
    "kanji": "笆",
    "onyomi": "カン (n1_679)",
    "kunyomi": "ひと (n1_679)",
    "meaningUz": "N1 Iyeroglifi #679 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "笆語",
        "reading": "かんご (笆)",
        "meaning": "笆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_680",
    "level": "N1",
    "kanji": "笗",
    "onyomi": "カン (n1_680)",
    "kunyomi": "ひと (n1_680)",
    "meaningUz": "N1 Iyeroglifi #680 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "笗語",
        "reading": "かんご (笗)",
        "meaning": "笗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_681",
    "level": "N1",
    "kanji": "笨",
    "onyomi": "カン (n1_681)",
    "kunyomi": "ひと (n1_681)",
    "meaningUz": "N1 Iyeroglifi #681 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "笨語",
        "reading": "かんご (笨)",
        "meaning": "笨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_682",
    "level": "N1",
    "kanji": "笹",
    "onyomi": "カン (n1_682)",
    "kunyomi": "ひと (n1_682)",
    "meaningUz": "N1 Iyeroglifi #682 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "笹語",
        "reading": "かんご (笹)",
        "meaning": "笹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_683",
    "level": "N1",
    "kanji": "筊",
    "onyomi": "カン (n1_683)",
    "kunyomi": "ひと (n1_683)",
    "meaningUz": "N1 Iyeroglifi #683 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "筊語",
        "reading": "かんご (筊)",
        "meaning": "筊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_684",
    "level": "N1",
    "kanji": "筛",
    "onyomi": "カン (n1_684)",
    "kunyomi": "ひと (n1_684)",
    "meaningUz": "N1 Iyeroglifi #684 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "筛語",
        "reading": "かんご (筛)",
        "meaning": "筛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_685",
    "level": "N1",
    "kanji": "筬",
    "onyomi": "カン (n1_685)",
    "kunyomi": "ひと (n1_685)",
    "meaningUz": "N1 Iyeroglifi #685 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "筬語",
        "reading": "かんご (筬)",
        "meaning": "筬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_686",
    "level": "N1",
    "kanji": "筽",
    "onyomi": "カン (n1_686)",
    "kunyomi": "ひと (n1_686)",
    "meaningUz": "N1 Iyeroglifi #686 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "筽語",
        "reading": "かんご (筽)",
        "meaning": "筽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_687",
    "level": "N1",
    "kanji": "箎",
    "onyomi": "カン (n1_687)",
    "kunyomi": "ひと (n1_687)",
    "meaningUz": "N1 Iyeroglifi #687 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "箎語",
        "reading": "かんご (箎)",
        "meaning": "箎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_688",
    "level": "N1",
    "kanji": "箟",
    "onyomi": "カン (n1_688)",
    "kunyomi": "ひと (n1_688)",
    "meaningUz": "N1 Iyeroglifi #688 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "箟語",
        "reading": "かんご (箟)",
        "meaning": "箟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_689",
    "level": "N1",
    "kanji": "箰",
    "onyomi": "カン (n1_689)",
    "kunyomi": "ひと (n1_689)",
    "meaningUz": "N1 Iyeroglifi #689 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "箰語",
        "reading": "かんご (箰)",
        "meaning": "箰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_690",
    "level": "N1",
    "kanji": "篁",
    "onyomi": "カン (n1_690)",
    "kunyomi": "ひと (n1_690)",
    "meaningUz": "N1 Iyeroglifi #690 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "篁語",
        "reading": "かんご (篁)",
        "meaning": "篁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_691",
    "level": "N1",
    "kanji": "篒",
    "onyomi": "カン (n1_691)",
    "kunyomi": "ひと (n1_691)",
    "meaningUz": "N1 Iyeroglifi #691 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "篒語",
        "reading": "かんご (篒)",
        "meaning": "篒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_692",
    "level": "N1",
    "kanji": "篣",
    "onyomi": "カン (n1_692)",
    "kunyomi": "ひと (n1_692)",
    "meaningUz": "N1 Iyeroglifi #692 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "篣語",
        "reading": "かんご (篣)",
        "meaning": "篣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_693",
    "level": "N1",
    "kanji": "篴",
    "onyomi": "カン (n1_693)",
    "kunyomi": "ひと (n1_693)",
    "meaningUz": "N1 Iyeroglifi #693 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "篴語",
        "reading": "かんご (篴)",
        "meaning": "篴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_694",
    "level": "N1",
    "kanji": "簅",
    "onyomi": "カン (n1_694)",
    "kunyomi": "ひと (n1_694)",
    "meaningUz": "N1 Iyeroglifi #694 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "簅語",
        "reading": "かんご (簅)",
        "meaning": "簅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_695",
    "level": "N1",
    "kanji": "簖",
    "onyomi": "カン (n1_695)",
    "kunyomi": "ひと (n1_695)",
    "meaningUz": "N1 Iyeroglifi #695 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "簖語",
        "reading": "かんご (簖)",
        "meaning": "簖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_696",
    "level": "N1",
    "kanji": "簧",
    "onyomi": "カン (n1_696)",
    "kunyomi": "ひと (n1_696)",
    "meaningUz": "N1 Iyeroglifi #696 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "簧語",
        "reading": "かんご (簧)",
        "meaning": "簧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_697",
    "level": "N1",
    "kanji": "簸",
    "onyomi": "カン (n1_697)",
    "kunyomi": "ひと (n1_697)",
    "meaningUz": "N1 Iyeroglifi #697 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "簸語",
        "reading": "かんご (簸)",
        "meaning": "簸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_698",
    "level": "N1",
    "kanji": "籉",
    "onyomi": "カン (n1_698)",
    "kunyomi": "ひと (n1_698)",
    "meaningUz": "N1 Iyeroglifi #698 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "籉語",
        "reading": "かんご (籉)",
        "meaning": "籉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_699",
    "level": "N1",
    "kanji": "籚",
    "onyomi": "カン (n1_699)",
    "kunyomi": "ひと (n1_699)",
    "meaningUz": "N1 Iyeroglifi #699 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "籚語",
        "reading": "かんご (籚)",
        "meaning": "籚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_700",
    "level": "N1",
    "kanji": "籫",
    "onyomi": "カン (n1_700)",
    "kunyomi": "ひと (n1_700)",
    "meaningUz": "N1 Iyeroglifi #700 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "籫語",
        "reading": "かんご (籫)",
        "meaning": "籫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_701",
    "level": "N1",
    "kanji": "籼",
    "onyomi": "カン (n1_701)",
    "kunyomi": "ひと (n1_701)",
    "meaningUz": "N1 Iyeroglifi #701 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "籼語",
        "reading": "かんご (籼)",
        "meaning": "籼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_702",
    "level": "N1",
    "kanji": "粍",
    "onyomi": "カン (n1_702)",
    "kunyomi": "ひと (n1_702)",
    "meaningUz": "N1 Iyeroglifi #702 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "粍語",
        "reading": "かんご (粍)",
        "meaning": "粍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_703",
    "level": "N1",
    "kanji": "粞",
    "onyomi": "カン (n1_703)",
    "kunyomi": "ひと (n1_703)",
    "meaningUz": "N1 Iyeroglifi #703 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "粞語",
        "reading": "かんご (粞)",
        "meaning": "粞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_704",
    "level": "N1",
    "kanji": "粯",
    "onyomi": "カン (n1_704)",
    "kunyomi": "ひと (n1_704)",
    "meaningUz": "N1 Iyeroglifi #704 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "粯語",
        "reading": "かんご (粯)",
        "meaning": "粯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_705",
    "level": "N1",
    "kanji": "糀",
    "onyomi": "カン (n1_705)",
    "kunyomi": "ひと (n1_705)",
    "meaningUz": "N1 Iyeroglifi #705 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "糀語",
        "reading": "かんご (糀)",
        "meaning": "糀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_706",
    "level": "N1",
    "kanji": "糑",
    "onyomi": "カン (n1_706)",
    "kunyomi": "ひと (n1_706)",
    "meaningUz": "N1 Iyeroglifi #706 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "糑語",
        "reading": "かんご (糑)",
        "meaning": "糑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_707",
    "level": "N1",
    "kanji": "糢",
    "onyomi": "カン (n1_707)",
    "kunyomi": "ひと (n1_707)",
    "meaningUz": "N1 Iyeroglifi #707 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "糢語",
        "reading": "かんご (糢)",
        "meaning": "糢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_708",
    "level": "N1",
    "kanji": "糳",
    "onyomi": "カン (n1_708)",
    "kunyomi": "ひと (n1_708)",
    "meaningUz": "N1 Iyeroglifi #708 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "糳語",
        "reading": "かんご (糳)",
        "meaning": "糳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_709",
    "level": "N1",
    "kanji": "約",
    "onyomi": "カン (n1_709)",
    "kunyomi": "ひと (n1_709)",
    "meaningUz": "N1 Iyeroglifi #709 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "約語",
        "reading": "かんご (約)",
        "meaning": "約 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_710",
    "level": "N1",
    "kanji": "紕",
    "onyomi": "カン (n1_710)",
    "kunyomi": "ひと (n1_710)",
    "meaningUz": "N1 Iyeroglifi #710 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "紕語",
        "reading": "かんご (紕)",
        "meaning": "紕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_711",
    "level": "N1",
    "kanji": "紦",
    "onyomi": "カン (n1_711)",
    "kunyomi": "ひと (n1_711)",
    "meaningUz": "N1 Iyeroglifi #711 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "紦語",
        "reading": "かんご (紦)",
        "meaning": "紦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_712",
    "level": "N1",
    "kanji": "紷",
    "onyomi": "カン (n1_712)",
    "kunyomi": "ひと (n1_712)",
    "meaningUz": "N1 Iyeroglifi #712 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "紷語",
        "reading": "かんご (紷)",
        "meaning": "紷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_713",
    "level": "N1",
    "kanji": "絈",
    "onyomi": "カン (n1_713)",
    "kunyomi": "ひと (n1_713)",
    "meaningUz": "N1 Iyeroglifi #713 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "絈語",
        "reading": "かんご (絈)",
        "meaning": "絈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_714",
    "level": "N1",
    "kanji": "絙",
    "onyomi": "カン (n1_714)",
    "kunyomi": "ひと (n1_714)",
    "meaningUz": "N1 Iyeroglifi #714 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "絙語",
        "reading": "かんご (絙)",
        "meaning": "絙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_715",
    "level": "N1",
    "kanji": "絪",
    "onyomi": "カン (n1_715)",
    "kunyomi": "ひと (n1_715)",
    "meaningUz": "N1 Iyeroglifi #715 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "絪語",
        "reading": "かんご (絪)",
        "meaning": "絪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_716",
    "level": "N1",
    "kanji": "絻",
    "onyomi": "カン (n1_716)",
    "kunyomi": "ひと (n1_716)",
    "meaningUz": "N1 Iyeroglifi #716 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "絻語",
        "reading": "かんご (絻)",
        "meaning": "絻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_717",
    "level": "N1",
    "kanji": "綌",
    "onyomi": "カン (n1_717)",
    "kunyomi": "ひと (n1_717)",
    "meaningUz": "N1 Iyeroglifi #717 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "綌語",
        "reading": "かんご (綌)",
        "meaning": "綌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_718",
    "level": "N1",
    "kanji": "綝",
    "onyomi": "カン (n1_718)",
    "kunyomi": "ひと (n1_718)",
    "meaningUz": "N1 Iyeroglifi #718 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "綝語",
        "reading": "かんご (綝)",
        "meaning": "綝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_719",
    "level": "N1",
    "kanji": "綮",
    "onyomi": "カン (n1_719)",
    "kunyomi": "ひと (n1_719)",
    "meaningUz": "N1 Iyeroglifi #719 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "綮語",
        "reading": "かんご (綮)",
        "meaning": "綮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_720",
    "level": "N1",
    "kanji": "綿",
    "onyomi": "カン (n1_720)",
    "kunyomi": "ひと (n1_720)",
    "meaningUz": "N1 Iyeroglifi #720 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "綿語",
        "reading": "かんご (綿)",
        "meaning": "綿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_721",
    "level": "N1",
    "kanji": "緐",
    "onyomi": "カン (n1_721)",
    "kunyomi": "ひと (n1_721)",
    "meaningUz": "N1 Iyeroglifi #721 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "緐語",
        "reading": "かんご (緐)",
        "meaning": "緐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_722",
    "level": "N1",
    "kanji": "緡",
    "onyomi": "カン (n1_722)",
    "kunyomi": "ひと (n1_722)",
    "meaningUz": "N1 Iyeroglifi #722 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "緡語",
        "reading": "かんご (緡)",
        "meaning": "緡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_723",
    "level": "N1",
    "kanji": "緲",
    "onyomi": "カン (n1_723)",
    "kunyomi": "ひと (n1_723)",
    "meaningUz": "N1 Iyeroglifi #723 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "緲語",
        "reading": "かんご (緲)",
        "meaning": "緲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_724",
    "level": "N1",
    "kanji": "縃",
    "onyomi": "カン (n1_724)",
    "kunyomi": "ひと (n1_724)",
    "meaningUz": "N1 Iyeroglifi #724 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "縃語",
        "reading": "かんご (縃)",
        "meaning": "縃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_725",
    "level": "N1",
    "kanji": "縔",
    "onyomi": "カン (n1_725)",
    "kunyomi": "ひと (n1_725)",
    "meaningUz": "N1 Iyeroglifi #725 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "縔語",
        "reading": "かんご (縔)",
        "meaning": "縔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_726",
    "level": "N1",
    "kanji": "縥",
    "onyomi": "カン (n1_726)",
    "kunyomi": "ひと (n1_726)",
    "meaningUz": "N1 Iyeroglifi #726 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "縥語",
        "reading": "かんご (縥)",
        "meaning": "縥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_727",
    "level": "N1",
    "kanji": "縶",
    "onyomi": "カン (n1_727)",
    "kunyomi": "ひと (n1_727)",
    "meaningUz": "N1 Iyeroglifi #727 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "縶語",
        "reading": "かんご (縶)",
        "meaning": "縶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_728",
    "level": "N1",
    "kanji": "繇",
    "onyomi": "カン (n1_728)",
    "kunyomi": "ひと (n1_728)",
    "meaningUz": "N1 Iyeroglifi #728 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "繇語",
        "reading": "かんご (繇)",
        "meaning": "繇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_729",
    "level": "N1",
    "kanji": "繘",
    "onyomi": "カン (n1_729)",
    "kunyomi": "ひと (n1_729)",
    "meaningUz": "N1 Iyeroglifi #729 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "繘語",
        "reading": "かんご (繘)",
        "meaning": "繘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_730",
    "level": "N1",
    "kanji": "繩",
    "onyomi": "カン (n1_730)",
    "kunyomi": "ひと (n1_730)",
    "meaningUz": "N1 Iyeroglifi #730 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "繩語",
        "reading": "かんご (繩)",
        "meaning": "繩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_731",
    "level": "N1",
    "kanji": "繺",
    "onyomi": "カン (n1_731)",
    "kunyomi": "ひと (n1_731)",
    "meaningUz": "N1 Iyeroglifi #731 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "繺語",
        "reading": "かんご (繺)",
        "meaning": "繺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_732",
    "level": "N1",
    "kanji": "纋",
    "onyomi": "カン (n1_732)",
    "kunyomi": "ひと (n1_732)",
    "meaningUz": "N1 Iyeroglifi #732 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "纋語",
        "reading": "かんご (纋)",
        "meaning": "纋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_733",
    "level": "N1",
    "kanji": "纜",
    "onyomi": "カン (n1_733)",
    "kunyomi": "ひと (n1_733)",
    "meaningUz": "N1 Iyeroglifi #733 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "纜語",
        "reading": "かんご (纜)",
        "meaning": "纜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_734",
    "level": "N1",
    "kanji": "纭",
    "onyomi": "カン (n1_734)",
    "kunyomi": "ひと (n1_734)",
    "meaningUz": "N1 Iyeroglifi #734 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "纭語",
        "reading": "かんご (纭)",
        "meaning": "纭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_735",
    "level": "N1",
    "kanji": "纾",
    "onyomi": "カン (n1_735)",
    "kunyomi": "ひと (n1_735)",
    "meaningUz": "N1 Iyeroglifi #735 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "纾語",
        "reading": "かんご (纾)",
        "meaning": "纾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_736",
    "level": "N1",
    "kanji": "经",
    "onyomi": "カン (n1_736)",
    "kunyomi": "ひと (n1_736)",
    "meaningUz": "N1 Iyeroglifi #736 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "经語",
        "reading": "かんご (经)",
        "meaning": "经 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_737",
    "level": "N1",
    "kanji": "绠",
    "onyomi": "カン (n1_737)",
    "kunyomi": "ひと (n1_737)",
    "meaningUz": "N1 Iyeroglifi #737 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "绠語",
        "reading": "かんご (绠)",
        "meaning": "绠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_738",
    "level": "N1",
    "kanji": "绱",
    "onyomi": "カン (n1_738)",
    "kunyomi": "ひと (n1_738)",
    "meaningUz": "N1 Iyeroglifi #738 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "绱語",
        "reading": "かんご (绱)",
        "meaning": "绱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_739",
    "level": "N1",
    "kanji": "缂",
    "onyomi": "カン (n1_739)",
    "kunyomi": "ひと (n1_739)",
    "meaningUz": "N1 Iyeroglifi #739 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "缂語",
        "reading": "かんご (缂)",
        "meaning": "缂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_740",
    "level": "N1",
    "kanji": "缓",
    "onyomi": "カン (n1_740)",
    "kunyomi": "ひと (n1_740)",
    "meaningUz": "N1 Iyeroglifi #740 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "缓語",
        "reading": "かんご (缓)",
        "meaning": "缓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_741",
    "level": "N1",
    "kanji": "缤",
    "onyomi": "カン (n1_741)",
    "kunyomi": "ひと (n1_741)",
    "meaningUz": "N1 Iyeroglifi #741 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "缤語",
        "reading": "かんご (缤)",
        "meaning": "缤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_742",
    "level": "N1",
    "kanji": "缵",
    "onyomi": "カン (n1_742)",
    "kunyomi": "ひと (n1_742)",
    "meaningUz": "N1 Iyeroglifi #742 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "缵語",
        "reading": "かんご (缵)",
        "meaning": "缵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_743",
    "level": "N1",
    "kanji": "罆",
    "onyomi": "カン (n1_743)",
    "kunyomi": "ひと (n1_743)",
    "meaningUz": "N1 Iyeroglifi #743 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "罆語",
        "reading": "かんご (罆)",
        "meaning": "罆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_744",
    "level": "N1",
    "kanji": "罗",
    "onyomi": "カン (n1_744)",
    "kunyomi": "ひと (n1_744)",
    "meaningUz": "N1 Iyeroglifi #744 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "罗語",
        "reading": "かんご (罗)",
        "meaning": "罗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_745",
    "level": "N1",
    "kanji": "罨",
    "onyomi": "カン (n1_745)",
    "kunyomi": "ひと (n1_745)",
    "meaningUz": "N1 Iyeroglifi #745 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "罨語",
        "reading": "かんご (罨)",
        "meaning": "罨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_746",
    "level": "N1",
    "kanji": "罹",
    "onyomi": "カン (n1_746)",
    "kunyomi": "ひと (n1_746)",
    "meaningUz": "N1 Iyeroglifi #746 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "罹語",
        "reading": "かんご (罹)",
        "meaning": "罹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_747",
    "level": "N1",
    "kanji": "羊",
    "onyomi": "カン (n1_747)",
    "kunyomi": "ひと (n1_747)",
    "meaningUz": "N1 Iyeroglifi #747 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "羊語",
        "reading": "かんご (羊)",
        "meaning": "羊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_748",
    "level": "N1",
    "kanji": "羛",
    "onyomi": "カン (n1_748)",
    "kunyomi": "ひと (n1_748)",
    "meaningUz": "N1 Iyeroglifi #748 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "羛語",
        "reading": "かんご (羛)",
        "meaning": "羛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_749",
    "level": "N1",
    "kanji": "羬",
    "onyomi": "カン (n1_749)",
    "kunyomi": "ひと (n1_749)",
    "meaningUz": "N1 Iyeroglifi #749 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "羬語",
        "reading": "かんご (羬)",
        "meaning": "羬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_750",
    "level": "N1",
    "kanji": "羽",
    "onyomi": "カン (n1_750)",
    "kunyomi": "ひと (n1_750)",
    "meaningUz": "N1 Iyeroglifi #750 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "羽語",
        "reading": "かんご (羽)",
        "meaning": "羽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_751",
    "level": "N1",
    "kanji": "翎",
    "onyomi": "カン (n1_751)",
    "kunyomi": "ひと (n1_751)",
    "meaningUz": "N1 Iyeroglifi #751 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "翎語",
        "reading": "かんご (翎)",
        "meaning": "翎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_752",
    "level": "N1",
    "kanji": "翟",
    "onyomi": "カン (n1_752)",
    "kunyomi": "ひと (n1_752)",
    "meaningUz": "N1 Iyeroglifi #752 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "翟語",
        "reading": "かんご (翟)",
        "meaning": "翟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_753",
    "level": "N1",
    "kanji": "翰",
    "onyomi": "カン (n1_753)",
    "kunyomi": "ひと (n1_753)",
    "meaningUz": "N1 Iyeroglifi #753 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "翰語",
        "reading": "かんご (翰)",
        "meaning": "翰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_754",
    "level": "N1",
    "kanji": "老",
    "onyomi": "カン (n1_754)",
    "kunyomi": "ひと (n1_754)",
    "meaningUz": "N1 Iyeroglifi #754 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "老語",
        "reading": "かんご (老)",
        "meaning": "老 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_755",
    "level": "N1",
    "kanji": "耒",
    "onyomi": "カン (n1_755)",
    "kunyomi": "ひと (n1_755)",
    "meaningUz": "N1 Iyeroglifi #755 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "耒語",
        "reading": "かんご (耒)",
        "meaning": "耒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_756",
    "level": "N1",
    "kanji": "耣",
    "onyomi": "カン (n1_756)",
    "kunyomi": "ひと (n1_756)",
    "meaningUz": "N1 Iyeroglifi #756 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "耣語",
        "reading": "かんご (耣)",
        "meaning": "耣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_757",
    "level": "N1",
    "kanji": "耴",
    "onyomi": "カン (n1_757)",
    "kunyomi": "ひと (n1_757)",
    "meaningUz": "N1 Iyeroglifi #757 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "耴語",
        "reading": "かんご (耴)",
        "meaning": "耴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_758",
    "level": "N1",
    "kanji": "聅",
    "onyomi": "カン (n1_758)",
    "kunyomi": "ひと (n1_758)",
    "meaningUz": "N1 Iyeroglifi #758 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "聅語",
        "reading": "かんご (聅)",
        "meaning": "聅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_759",
    "level": "N1",
    "kanji": "聖",
    "onyomi": "カン (n1_759)",
    "kunyomi": "ひと (n1_759)",
    "meaningUz": "N1 Iyeroglifi #759 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "聖語",
        "reading": "かんご (聖)",
        "meaning": "聖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_760",
    "level": "N1",
    "kanji": "聧",
    "onyomi": "カン (n1_760)",
    "kunyomi": "ひと (n1_760)",
    "meaningUz": "N1 Iyeroglifi #760 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "聧語",
        "reading": "かんご (聧)",
        "meaning": "聧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_761",
    "level": "N1",
    "kanji": "聸",
    "onyomi": "カン (n1_761)",
    "kunyomi": "ひと (n1_761)",
    "meaningUz": "N1 Iyeroglifi #761 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "聸語",
        "reading": "かんご (聸)",
        "meaning": "聸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_762",
    "level": "N1",
    "kanji": "肉",
    "onyomi": "カン (n1_762)",
    "kunyomi": "ひと (n1_762)",
    "meaningUz": "N1 Iyeroglifi #762 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "肉語",
        "reading": "かんご (肉)",
        "meaning": "肉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_763",
    "level": "N1",
    "kanji": "肚",
    "onyomi": "カン (n1_763)",
    "kunyomi": "ひと (n1_763)",
    "meaningUz": "N1 Iyeroglifi #763 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "肚語",
        "reading": "かんご (肚)",
        "meaning": "肚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_764",
    "level": "N1",
    "kanji": "肫",
    "onyomi": "カン (n1_764)",
    "kunyomi": "ひと (n1_764)",
    "meaningUz": "N1 Iyeroglifi #764 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "肫語",
        "reading": "かんご (肫)",
        "meaning": "肫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_765",
    "level": "N1",
    "kanji": "肼",
    "onyomi": "カン (n1_765)",
    "kunyomi": "ひと (n1_765)",
    "meaningUz": "N1 Iyeroglifi #765 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "肼語",
        "reading": "かんご (肼)",
        "meaning": "肼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_766",
    "level": "N1",
    "kanji": "胍",
    "onyomi": "カン (n1_766)",
    "kunyomi": "ひと (n1_766)",
    "meaningUz": "N1 Iyeroglifi #766 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "胍語",
        "reading": "かんご (胍)",
        "meaning": "胍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_767",
    "level": "N1",
    "kanji": "胞",
    "onyomi": "カン (n1_767)",
    "kunyomi": "ひと (n1_767)",
    "meaningUz": "N1 Iyeroglifi #767 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "胞語",
        "reading": "かんご (胞)",
        "meaning": "胞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_768",
    "level": "N1",
    "kanji": "胯",
    "onyomi": "カン (n1_768)",
    "kunyomi": "ひと (n1_768)",
    "meaningUz": "N1 Iyeroglifi #768 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "胯語",
        "reading": "かんご (胯)",
        "meaning": "胯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_769",
    "level": "N1",
    "kanji": "脀",
    "onyomi": "カン (n1_769)",
    "kunyomi": "ひと (n1_769)",
    "meaningUz": "N1 Iyeroglifi #769 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "脀語",
        "reading": "かんご (脀)",
        "meaning": "脀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_770",
    "level": "N1",
    "kanji": "脑",
    "onyomi": "カン (n1_770)",
    "kunyomi": "ひと (n1_770)",
    "meaningUz": "N1 Iyeroglifi #770 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "脑語",
        "reading": "かんご (脑)",
        "meaning": "脑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_771",
    "level": "N1",
    "kanji": "脢",
    "onyomi": "カン (n1_771)",
    "kunyomi": "ひと (n1_771)",
    "meaningUz": "N1 Iyeroglifi #771 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "脢語",
        "reading": "かんご (脢)",
        "meaning": "脢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_772",
    "level": "N1",
    "kanji": "脳",
    "onyomi": "カン (n1_772)",
    "kunyomi": "ひと (n1_772)",
    "meaningUz": "N1 Iyeroglifi #772 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "脳語",
        "reading": "かんご (脳)",
        "meaning": "脳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_773",
    "level": "N1",
    "kanji": "腄",
    "onyomi": "カン (n1_773)",
    "kunyomi": "ひと (n1_773)",
    "meaningUz": "N1 Iyeroglifi #773 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "腄語",
        "reading": "かんご (腄)",
        "meaning": "腄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_774",
    "level": "N1",
    "kanji": "腕",
    "onyomi": "カン (n1_774)",
    "kunyomi": "ひと (n1_774)",
    "meaningUz": "N1 Iyeroglifi #774 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "腕語",
        "reading": "かんご (腕)",
        "meaning": "腕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_775",
    "level": "N1",
    "kanji": "腦",
    "onyomi": "カン (n1_775)",
    "kunyomi": "ひと (n1_775)",
    "meaningUz": "N1 Iyeroglifi #775 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "腦語",
        "reading": "かんご (腦)",
        "meaning": "腦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_776",
    "level": "N1",
    "kanji": "腷",
    "onyomi": "カン (n1_776)",
    "kunyomi": "ひと (n1_776)",
    "meaningUz": "N1 Iyeroglifi #776 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "腷語",
        "reading": "かんご (腷)",
        "meaning": "腷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_777",
    "level": "N1",
    "kanji": "膈",
    "onyomi": "カン (n1_777)",
    "kunyomi": "ひと (n1_777)",
    "meaningUz": "N1 Iyeroglifi #777 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "膈語",
        "reading": "かんご (膈)",
        "meaning": "膈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_778",
    "level": "N1",
    "kanji": "膙",
    "onyomi": "カン (n1_778)",
    "kunyomi": "ひと (n1_778)",
    "meaningUz": "N1 Iyeroglifi #778 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "膙語",
        "reading": "かんご (膙)",
        "meaning": "膙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_779",
    "level": "N1",
    "kanji": "膪",
    "onyomi": "カン (n1_779)",
    "kunyomi": "ひと (n1_779)",
    "meaningUz": "N1 Iyeroglifi #779 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "膪語",
        "reading": "かんご (膪)",
        "meaning": "膪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_780",
    "level": "N1",
    "kanji": "膻",
    "onyomi": "カン (n1_780)",
    "kunyomi": "ひと (n1_780)",
    "meaningUz": "N1 Iyeroglifi #780 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "膻語",
        "reading": "かんご (膻)",
        "meaning": "膻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_781",
    "level": "N1",
    "kanji": "臌",
    "onyomi": "カン (n1_781)",
    "kunyomi": "ひと (n1_781)",
    "meaningUz": "N1 Iyeroglifi #781 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "臌語",
        "reading": "かんご (臌)",
        "meaning": "臌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_782",
    "level": "N1",
    "kanji": "臝",
    "onyomi": "カン (n1_782)",
    "kunyomi": "ひと (n1_782)",
    "meaningUz": "N1 Iyeroglifi #782 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "臝語",
        "reading": "かんご (臝)",
        "meaning": "臝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_783",
    "level": "N1",
    "kanji": "臮",
    "onyomi": "カン (n1_783)",
    "kunyomi": "ひと (n1_783)",
    "meaningUz": "N1 Iyeroglifi #783 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "臮語",
        "reading": "かんご (臮)",
        "meaning": "臮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_784",
    "level": "N1",
    "kanji": "臿",
    "onyomi": "カン (n1_784)",
    "kunyomi": "ひと (n1_784)",
    "meaningUz": "N1 Iyeroglifi #784 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "臿語",
        "reading": "かんご (臿)",
        "meaning": "臿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_785",
    "level": "N1",
    "kanji": "舐",
    "onyomi": "カン (n1_785)",
    "kunyomi": "ひと (n1_785)",
    "meaningUz": "N1 Iyeroglifi #785 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "舐語",
        "reading": "かんご (舐)",
        "meaning": "舐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_786",
    "level": "N1",
    "kanji": "舡",
    "onyomi": "カン (n1_786)",
    "kunyomi": "ひと (n1_786)",
    "meaningUz": "N1 Iyeroglifi #786 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "舡語",
        "reading": "かんご (舡)",
        "meaning": "舡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_787",
    "level": "N1",
    "kanji": "舲",
    "onyomi": "カン (n1_787)",
    "kunyomi": "ひと (n1_787)",
    "meaningUz": "N1 Iyeroglifi #787 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "舲語",
        "reading": "かんご (舲)",
        "meaning": "舲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_788",
    "level": "N1",
    "kanji": "艃",
    "onyomi": "カン (n1_788)",
    "kunyomi": "ひと (n1_788)",
    "meaningUz": "N1 Iyeroglifi #788 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "艃語",
        "reading": "かんご (艃)",
        "meaning": "艃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_789",
    "level": "N1",
    "kanji": "艔",
    "onyomi": "カン (n1_789)",
    "kunyomi": "ひと (n1_789)",
    "meaningUz": "N1 Iyeroglifi #789 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "艔語",
        "reading": "かんご (艔)",
        "meaning": "艔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_790",
    "level": "N1",
    "kanji": "艥",
    "onyomi": "カン (n1_790)",
    "kunyomi": "ひと (n1_790)",
    "meaningUz": "N1 Iyeroglifi #790 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "艥語",
        "reading": "かんご (艥)",
        "meaning": "艥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_791",
    "level": "N1",
    "kanji": "艶",
    "onyomi": "カン (n1_791)",
    "kunyomi": "ひと (n1_791)",
    "meaningUz": "N1 Iyeroglifi #791 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "艶語",
        "reading": "かんご (艶)",
        "meaning": "艶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_792",
    "level": "N1",
    "kanji": "芇",
    "onyomi": "カン (n1_792)",
    "kunyomi": "ひと (n1_792)",
    "meaningUz": "N1 Iyeroglifi #792 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "芇語",
        "reading": "かんご (芇)",
        "meaning": "芇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_793",
    "level": "N1",
    "kanji": "芘",
    "onyomi": "カン (n1_793)",
    "kunyomi": "ひと (n1_793)",
    "meaningUz": "N1 Iyeroglifi #793 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "芘語",
        "reading": "かんご (芘)",
        "meaning": "芘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_794",
    "level": "N1",
    "kanji": "芩",
    "onyomi": "カン (n1_794)",
    "kunyomi": "ひと (n1_794)",
    "meaningUz": "N1 Iyeroglifi #794 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "芩語",
        "reading": "かんご (芩)",
        "meaning": "芩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_795",
    "level": "N1",
    "kanji": "芺",
    "onyomi": "カン (n1_795)",
    "kunyomi": "ひと (n1_795)",
    "meaningUz": "N1 Iyeroglifi #795 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "芺語",
        "reading": "かんご (芺)",
        "meaning": "芺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_796",
    "level": "N1",
    "kanji": "苋",
    "onyomi": "カン (n1_796)",
    "kunyomi": "ひと (n1_796)",
    "meaningUz": "N1 Iyeroglifi #796 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "苋語",
        "reading": "かんご (苋)",
        "meaning": "苋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_797",
    "level": "N1",
    "kanji": "苜",
    "onyomi": "カン (n1_797)",
    "kunyomi": "ひと (n1_797)",
    "meaningUz": "N1 Iyeroglifi #797 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "苜語",
        "reading": "かんご (苜)",
        "meaning": "苜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_798",
    "level": "N1",
    "kanji": "苭",
    "onyomi": "カン (n1_798)",
    "kunyomi": "ひと (n1_798)",
    "meaningUz": "N1 Iyeroglifi #798 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "苭語",
        "reading": "かんご (苭)",
        "meaning": "苭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_799",
    "level": "N1",
    "kanji": "苾",
    "onyomi": "カン (n1_799)",
    "kunyomi": "ひと (n1_799)",
    "meaningUz": "N1 Iyeroglifi #799 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "苾語",
        "reading": "かんご (苾)",
        "meaning": "苾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_800",
    "level": "N1",
    "kanji": "茏",
    "onyomi": "カン (n1_800)",
    "kunyomi": "ひと (n1_800)",
    "meaningUz": "N1 Iyeroglifi #800 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "茏語",
        "reading": "かんご (茏)",
        "meaning": "茏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_801",
    "level": "N1",
    "kanji": "茠",
    "onyomi": "カン (n1_801)",
    "kunyomi": "ひと (n1_801)",
    "meaningUz": "N1 Iyeroglifi #801 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "茠語",
        "reading": "かんご (茠)",
        "meaning": "茠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_802",
    "level": "N1",
    "kanji": "茱",
    "onyomi": "カン (n1_802)",
    "kunyomi": "ひと (n1_802)",
    "meaningUz": "N1 Iyeroglifi #802 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "茱語",
        "reading": "かんご (茱)",
        "meaning": "茱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_803",
    "level": "N1",
    "kanji": "荂",
    "onyomi": "カン (n1_803)",
    "kunyomi": "ひと (n1_803)",
    "meaningUz": "N1 Iyeroglifi #803 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "荂語",
        "reading": "かんご (荂)",
        "meaning": "荂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_804",
    "level": "N1",
    "kanji": "荓",
    "onyomi": "カン (n1_804)",
    "kunyomi": "ひと (n1_804)",
    "meaningUz": "N1 Iyeroglifi #804 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "荓語",
        "reading": "かんご (荓)",
        "meaning": "荓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_805",
    "level": "N1",
    "kanji": "荤",
    "onyomi": "カン (n1_805)",
    "kunyomi": "ひと (n1_805)",
    "meaningUz": "N1 Iyeroglifi #805 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "荤語",
        "reading": "かんご (荤)",
        "meaning": "荤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_806",
    "level": "N1",
    "kanji": "荵",
    "onyomi": "カン (n1_806)",
    "kunyomi": "ひと (n1_806)",
    "meaningUz": "N1 Iyeroglifi #806 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "荵語",
        "reading": "かんご (荵)",
        "meaning": "荵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_807",
    "level": "N1",
    "kanji": "莆",
    "onyomi": "カン (n1_807)",
    "kunyomi": "ひと (n1_807)",
    "meaningUz": "N1 Iyeroglifi #807 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "莆語",
        "reading": "かんご (莆)",
        "meaning": "莆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_808",
    "level": "N1",
    "kanji": "莗",
    "onyomi": "カン (n1_808)",
    "kunyomi": "ひと (n1_808)",
    "meaningUz": "N1 Iyeroglifi #808 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "莗語",
        "reading": "かんご (莗)",
        "meaning": "莗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_809",
    "level": "N1",
    "kanji": "莨",
    "onyomi": "カン (n1_809)",
    "kunyomi": "ひと (n1_809)",
    "meaningUz": "N1 Iyeroglifi #809 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "莨語",
        "reading": "かんご (莨)",
        "meaning": "莨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_810",
    "level": "N1",
    "kanji": "莹",
    "onyomi": "カン (n1_810)",
    "kunyomi": "ひと (n1_810)",
    "meaningUz": "N1 Iyeroglifi #810 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "莹語",
        "reading": "かんご (莹)",
        "meaning": "莹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_811",
    "level": "N1",
    "kanji": "菊",
    "onyomi": "カン (n1_811)",
    "kunyomi": "ひと (n1_811)",
    "meaningUz": "N1 Iyeroglifi #811 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "菊語",
        "reading": "かんご (菊)",
        "meaning": "菊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_812",
    "level": "N1",
    "kanji": "菛",
    "onyomi": "カン (n1_812)",
    "kunyomi": "ひと (n1_812)",
    "meaningUz": "N1 Iyeroglifi #812 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "菛語",
        "reading": "かんご (菛)",
        "meaning": "菛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_813",
    "level": "N1",
    "kanji": "菬",
    "onyomi": "カン (n1_813)",
    "kunyomi": "ひと (n1_813)",
    "meaningUz": "N1 Iyeroglifi #813 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "菬語",
        "reading": "かんご (菬)",
        "meaning": "菬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_814",
    "level": "N1",
    "kanji": "菽",
    "onyomi": "カン (n1_814)",
    "kunyomi": "ひと (n1_814)",
    "meaningUz": "N1 Iyeroglifi #814 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "菽語",
        "reading": "かんご (菽)",
        "meaning": "菽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_815",
    "level": "N1",
    "kanji": "萎",
    "onyomi": "カン (n1_815)",
    "kunyomi": "ひと (n1_815)",
    "meaningUz": "N1 Iyeroglifi #815 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "萎語",
        "reading": "かんご (萎)",
        "meaning": "萎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_816",
    "level": "N1",
    "kanji": "萟",
    "onyomi": "カン (n1_816)",
    "kunyomi": "ひと (n1_816)",
    "meaningUz": "N1 Iyeroglifi #816 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "萟語",
        "reading": "かんご (萟)",
        "meaning": "萟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_817",
    "level": "N1",
    "kanji": "萰",
    "onyomi": "カン (n1_817)",
    "kunyomi": "ひと (n1_817)",
    "meaningUz": "N1 Iyeroglifi #817 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "萰語",
        "reading": "かんご (萰)",
        "meaning": "萰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_818",
    "level": "N1",
    "kanji": "葁",
    "onyomi": "カン (n1_818)",
    "kunyomi": "ひと (n1_818)",
    "meaningUz": "N1 Iyeroglifi #818 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "葁語",
        "reading": "かんご (葁)",
        "meaning": "葁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_819",
    "level": "N1",
    "kanji": "葒",
    "onyomi": "カン (n1_819)",
    "kunyomi": "ひと (n1_819)",
    "meaningUz": "N1 Iyeroglifi #819 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "葒語",
        "reading": "かんご (葒)",
        "meaning": "葒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_820",
    "level": "N1",
    "kanji": "董",
    "onyomi": "カン (n1_820)",
    "kunyomi": "ひと (n1_820)",
    "meaningUz": "N1 Iyeroglifi #820 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "董語",
        "reading": "かんご (董)",
        "meaning": "董 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_821",
    "level": "N1",
    "kanji": "葴",
    "onyomi": "カン (n1_821)",
    "kunyomi": "ひと (n1_821)",
    "meaningUz": "N1 Iyeroglifi #821 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "葴語",
        "reading": "かんご (葴)",
        "meaning": "葴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_822",
    "level": "N1",
    "kanji": "蒅",
    "onyomi": "カン (n1_822)",
    "kunyomi": "ひと (n1_822)",
    "meaningUz": "N1 Iyeroglifi #822 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "蒅語",
        "reading": "かんご (蒅)",
        "meaning": "蒅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_823",
    "level": "N1",
    "kanji": "蒖",
    "onyomi": "カン (n1_823)",
    "kunyomi": "ひと (n1_823)",
    "meaningUz": "N1 Iyeroglifi #823 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "蒖語",
        "reading": "かんご (蒖)",
        "meaning": "蒖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_824",
    "level": "N1",
    "kanji": "蒧",
    "onyomi": "カン (n1_824)",
    "kunyomi": "ひと (n1_824)",
    "meaningUz": "N1 Iyeroglifi #824 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "蒧語",
        "reading": "かんご (蒧)",
        "meaning": "蒧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_825",
    "level": "N1",
    "kanji": "蒸",
    "onyomi": "カン (n1_825)",
    "kunyomi": "ひと (n1_825)",
    "meaningUz": "N1 Iyeroglifi #825 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "蒸語",
        "reading": "かんご (蒸)",
        "meaning": "蒸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_826",
    "level": "N1",
    "kanji": "蓉",
    "onyomi": "カン (n1_826)",
    "kunyomi": "ひと (n1_826)",
    "meaningUz": "N1 Iyeroglifi #826 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "蓉語",
        "reading": "かんご (蓉)",
        "meaning": "蓉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_827",
    "level": "N1",
    "kanji": "蓚",
    "onyomi": "カン (n1_827)",
    "kunyomi": "ひと (n1_827)",
    "meaningUz": "N1 Iyeroglifi #827 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "蓚語",
        "reading": "かんご (蓚)",
        "meaning": "蓚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_828",
    "level": "N1",
    "kanji": "蓫",
    "onyomi": "カン (n1_828)",
    "kunyomi": "ひと (n1_828)",
    "meaningUz": "N1 Iyeroglifi #828 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "蓫語",
        "reading": "かんご (蓫)",
        "meaning": "蓫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_829",
    "level": "N1",
    "kanji": "蓼",
    "onyomi": "カン (n1_829)",
    "kunyomi": "ひと (n1_829)",
    "meaningUz": "N1 Iyeroglifi #829 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "蓼語",
        "reading": "かんご (蓼)",
        "meaning": "蓼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_830",
    "level": "N1",
    "kanji": "蔍",
    "onyomi": "カン (n1_830)",
    "kunyomi": "ひと (n1_830)",
    "meaningUz": "N1 Iyeroglifi #830 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "蔍語",
        "reading": "かんご (蔍)",
        "meaning": "蔍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_831",
    "level": "N1",
    "kanji": "蔞",
    "onyomi": "カン (n1_831)",
    "kunyomi": "ひと (n1_831)",
    "meaningUz": "N1 Iyeroglifi #831 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "蔞語",
        "reading": "かんご (蔞)",
        "meaning": "蔞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_832",
    "level": "N1",
    "kanji": "蔯",
    "onyomi": "カン (n1_832)",
    "kunyomi": "ひと (n1_832)",
    "meaningUz": "N1 Iyeroglifi #832 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "蔯語",
        "reading": "かんご (蔯)",
        "meaning": "蔯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_833",
    "level": "N1",
    "kanji": "蕀",
    "onyomi": "カン (n1_833)",
    "kunyomi": "ひと (n1_833)",
    "meaningUz": "N1 Iyeroglifi #833 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "蕀語",
        "reading": "かんご (蕀)",
        "meaning": "蕀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_834",
    "level": "N1",
    "kanji": "蕑",
    "onyomi": "カン (n1_834)",
    "kunyomi": "ひと (n1_834)",
    "meaningUz": "N1 Iyeroglifi #834 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "蕑語",
        "reading": "かんご (蕑)",
        "meaning": "蕑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_835",
    "level": "N1",
    "kanji": "蕢",
    "onyomi": "カン (n1_835)",
    "kunyomi": "ひと (n1_835)",
    "meaningUz": "N1 Iyeroglifi #835 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "蕢語",
        "reading": "かんご (蕢)",
        "meaning": "蕢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_836",
    "level": "N1",
    "kanji": "蕳",
    "onyomi": "カン (n1_836)",
    "kunyomi": "ひと (n1_836)",
    "meaningUz": "N1 Iyeroglifi #836 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "蕳語",
        "reading": "かんご (蕳)",
        "meaning": "蕳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_837",
    "level": "N1",
    "kanji": "薄",
    "onyomi": "カン (n1_837)",
    "kunyomi": "ひと (n1_837)",
    "meaningUz": "N1 Iyeroglifi #837 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "薄語",
        "reading": "かんご (薄)",
        "meaning": "薄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_838",
    "level": "N1",
    "kanji": "薕",
    "onyomi": "カン (n1_838)",
    "kunyomi": "ひと (n1_838)",
    "meaningUz": "N1 Iyeroglifi #838 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "薕語",
        "reading": "かんご (薕)",
        "meaning": "薕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_839",
    "level": "N1",
    "kanji": "薦",
    "onyomi": "カン (n1_839)",
    "kunyomi": "ひと (n1_839)",
    "meaningUz": "N1 Iyeroglifi #839 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "薦語",
        "reading": "かんご (薦)",
        "meaning": "薦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_840",
    "level": "N1",
    "kanji": "薷",
    "onyomi": "カン (n1_840)",
    "kunyomi": "ひと (n1_840)",
    "meaningUz": "N1 Iyeroglifi #840 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "薷語",
        "reading": "かんご (薷)",
        "meaning": "薷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_841",
    "level": "N1",
    "kanji": "藈",
    "onyomi": "カン (n1_841)",
    "kunyomi": "ひと (n1_841)",
    "meaningUz": "N1 Iyeroglifi #841 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "藈語",
        "reading": "かんご (藈)",
        "meaning": "藈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_842",
    "level": "N1",
    "kanji": "藙",
    "onyomi": "カン (n1_842)",
    "kunyomi": "ひと (n1_842)",
    "meaningUz": "N1 Iyeroglifi #842 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "藙語",
        "reading": "かんご (藙)",
        "meaning": "藙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_843",
    "level": "N1",
    "kanji": "藪",
    "onyomi": "カン (n1_843)",
    "kunyomi": "ひと (n1_843)",
    "meaningUz": "N1 Iyeroglifi #843 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "藪語",
        "reading": "かんご (藪)",
        "meaning": "藪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_844",
    "level": "N1",
    "kanji": "藻",
    "onyomi": "カン (n1_844)",
    "kunyomi": "ひと (n1_844)",
    "meaningUz": "N1 Iyeroglifi #844 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "藻語",
        "reading": "かんご (藻)",
        "meaning": "藻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_845",
    "level": "N1",
    "kanji": "蘌",
    "onyomi": "カン (n1_845)",
    "kunyomi": "ひと (n1_845)",
    "meaningUz": "N1 Iyeroglifi #845 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "蘌語",
        "reading": "かんご (蘌)",
        "meaning": "蘌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_846",
    "level": "N1",
    "kanji": "蘝",
    "onyomi": "カン (n1_846)",
    "kunyomi": "ひと (n1_846)",
    "meaningUz": "N1 Iyeroglifi #846 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "蘝語",
        "reading": "かんご (蘝)",
        "meaning": "蘝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_847",
    "level": "N1",
    "kanji": "蘮",
    "onyomi": "カン (n1_847)",
    "kunyomi": "ひと (n1_847)",
    "meaningUz": "N1 Iyeroglifi #847 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "蘮語",
        "reading": "かんご (蘮)",
        "meaning": "蘮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_848",
    "level": "N1",
    "kanji": "蘿",
    "onyomi": "カン (n1_848)",
    "kunyomi": "ひと (n1_848)",
    "meaningUz": "N1 Iyeroglifi #848 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "蘿語",
        "reading": "かんご (蘿)",
        "meaning": "蘿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_849",
    "level": "N1",
    "kanji": "虐",
    "onyomi": "カン (n1_849)",
    "kunyomi": "ひと (n1_849)",
    "meaningUz": "N1 Iyeroglifi #849 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "虐語",
        "reading": "かんご (虐)",
        "meaning": "虐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_850",
    "level": "N1",
    "kanji": "虡",
    "onyomi": "カン (n1_850)",
    "kunyomi": "ひと (n1_850)",
    "meaningUz": "N1 Iyeroglifi #850 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "虡語",
        "reading": "かんご (虡)",
        "meaning": "虡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_851",
    "level": "N1",
    "kanji": "虲",
    "onyomi": "カン (n1_851)",
    "kunyomi": "ひと (n1_851)",
    "meaningUz": "N1 Iyeroglifi #851 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "虲語",
        "reading": "かんご (虲)",
        "meaning": "虲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_852",
    "level": "N1",
    "kanji": "蚃",
    "onyomi": "カン (n1_852)",
    "kunyomi": "ひと (n1_852)",
    "meaningUz": "N1 Iyeroglifi #852 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "蚃語",
        "reading": "かんご (蚃)",
        "meaning": "蚃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_853",
    "level": "N1",
    "kanji": "蚔",
    "onyomi": "カン (n1_853)",
    "kunyomi": "ひと (n1_853)",
    "meaningUz": "N1 Iyeroglifi #853 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "蚔語",
        "reading": "かんご (蚔)",
        "meaning": "蚔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_854",
    "level": "N1",
    "kanji": "蚥",
    "onyomi": "カン (n1_854)",
    "kunyomi": "ひと (n1_854)",
    "meaningUz": "N1 Iyeroglifi #854 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "蚥語",
        "reading": "かんご (蚥)",
        "meaning": "蚥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_855",
    "level": "N1",
    "kanji": "蚶",
    "onyomi": "カン (n1_855)",
    "kunyomi": "ひと (n1_855)",
    "meaningUz": "N1 Iyeroglifi #855 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "蚶語",
        "reading": "かんご (蚶)",
        "meaning": "蚶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_856",
    "level": "N1",
    "kanji": "蛇",
    "onyomi": "カン (n1_856)",
    "kunyomi": "ひと (n1_856)",
    "meaningUz": "N1 Iyeroglifi #856 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "蛇語",
        "reading": "かんご (蛇)",
        "meaning": "蛇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_857",
    "level": "N1",
    "kanji": "蛘",
    "onyomi": "カン (n1_857)",
    "kunyomi": "ひと (n1_857)",
    "meaningUz": "N1 Iyeroglifi #857 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "蛘語",
        "reading": "かんご (蛘)",
        "meaning": "蛘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_858",
    "level": "N1",
    "kanji": "蛩",
    "onyomi": "カン (n1_858)",
    "kunyomi": "ひと (n1_858)",
    "meaningUz": "N1 Iyeroglifi #858 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "蛩語",
        "reading": "かんご (蛩)",
        "meaning": "蛩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_859",
    "level": "N1",
    "kanji": "蛺",
    "onyomi": "カン (n1_859)",
    "kunyomi": "ひと (n1_859)",
    "meaningUz": "N1 Iyeroglifi #859 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "蛺語",
        "reading": "かんご (蛺)",
        "meaning": "蛺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_860",
    "level": "N1",
    "kanji": "蜋",
    "onyomi": "カン (n1_860)",
    "kunyomi": "ひと (n1_860)",
    "meaningUz": "N1 Iyeroglifi #860 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "蜋語",
        "reading": "かんご (蜋)",
        "meaning": "蜋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_861",
    "level": "N1",
    "kanji": "蜜",
    "onyomi": "カン (n1_861)",
    "kunyomi": "ひと (n1_861)",
    "meaningUz": "N1 Iyeroglifi #861 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "蜜語",
        "reading": "かんご (蜜)",
        "meaning": "蜜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_862",
    "level": "N1",
    "kanji": "蜭",
    "onyomi": "カン (n1_862)",
    "kunyomi": "ひと (n1_862)",
    "meaningUz": "N1 Iyeroglifi #862 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "蜭語",
        "reading": "かんご (蜭)",
        "meaning": "蜭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_863",
    "level": "N1",
    "kanji": "蜾",
    "onyomi": "カン (n1_863)",
    "kunyomi": "ひと (n1_863)",
    "meaningUz": "N1 Iyeroglifi #863 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "蜾語",
        "reading": "かんご (蜾)",
        "meaning": "蜾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_864",
    "level": "N1",
    "kanji": "蝏",
    "onyomi": "カン (n1_864)",
    "kunyomi": "ひと (n1_864)",
    "meaningUz": "N1 Iyeroglifi #864 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "蝏語",
        "reading": "かんご (蝏)",
        "meaning": "蝏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_865",
    "level": "N1",
    "kanji": "蝠",
    "onyomi": "カン (n1_865)",
    "kunyomi": "ひと (n1_865)",
    "meaningUz": "N1 Iyeroglifi #865 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "蝠語",
        "reading": "かんご (蝠)",
        "meaning": "蝠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_866",
    "level": "N1",
    "kanji": "蝱",
    "onyomi": "カン (n1_866)",
    "kunyomi": "ひと (n1_866)",
    "meaningUz": "N1 Iyeroglifi #866 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "蝱語",
        "reading": "かんご (蝱)",
        "meaning": "蝱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_867",
    "level": "N1",
    "kanji": "螂",
    "onyomi": "カン (n1_867)",
    "kunyomi": "ひと (n1_867)",
    "meaningUz": "N1 Iyeroglifi #867 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "螂語",
        "reading": "かんご (螂)",
        "meaning": "螂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_868",
    "level": "N1",
    "kanji": "螓",
    "onyomi": "カン (n1_868)",
    "kunyomi": "ひと (n1_868)",
    "meaningUz": "N1 Iyeroglifi #868 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "螓語",
        "reading": "かんご (螓)",
        "meaning": "螓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_869",
    "level": "N1",
    "kanji": "螤",
    "onyomi": "カン (n1_869)",
    "kunyomi": "ひと (n1_869)",
    "meaningUz": "N1 Iyeroglifi #869 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "螤語",
        "reading": "かんご (螤)",
        "meaning": "螤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_870",
    "level": "N1",
    "kanji": "螵",
    "onyomi": "カン (n1_870)",
    "kunyomi": "ひと (n1_870)",
    "meaningUz": "N1 Iyeroglifi #870 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "螵語",
        "reading": "かんご (螵)",
        "meaning": "螵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_871",
    "level": "N1",
    "kanji": "蟆",
    "onyomi": "カン (n1_871)",
    "kunyomi": "ひと (n1_871)",
    "meaningUz": "N1 Iyeroglifi #871 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "蟆語",
        "reading": "かんご (蟆)",
        "meaning": "蟆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_872",
    "level": "N1",
    "kanji": "蟗",
    "onyomi": "カン (n1_872)",
    "kunyomi": "ひと (n1_872)",
    "meaningUz": "N1 Iyeroglifi #872 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "蟗語",
        "reading": "かんご (蟗)",
        "meaning": "蟗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_873",
    "level": "N1",
    "kanji": "蟨",
    "onyomi": "カン (n1_873)",
    "kunyomi": "ひと (n1_873)",
    "meaningUz": "N1 Iyeroglifi #873 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "蟨語",
        "reading": "かんご (蟨)",
        "meaning": "蟨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_874",
    "level": "N1",
    "kanji": "蟹",
    "onyomi": "カン (n1_874)",
    "kunyomi": "ひと (n1_874)",
    "meaningUz": "N1 Iyeroglifi #874 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "蟹語",
        "reading": "かんご (蟹)",
        "meaning": "蟹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_875",
    "level": "N1",
    "kanji": "蠊",
    "onyomi": "カン (n1_875)",
    "kunyomi": "ひと (n1_875)",
    "meaningUz": "N1 Iyeroglifi #875 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "蠊語",
        "reading": "かんご (蠊)",
        "meaning": "蠊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_876",
    "level": "N1",
    "kanji": "蠛",
    "onyomi": "カン (n1_876)",
    "kunyomi": "ひと (n1_876)",
    "meaningUz": "N1 Iyeroglifi #876 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "蠛語",
        "reading": "かんご (蠛)",
        "meaning": "蠛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_877",
    "level": "N1",
    "kanji": "蠬",
    "onyomi": "カン (n1_877)",
    "kunyomi": "ひと (n1_877)",
    "meaningUz": "N1 Iyeroglifi #877 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "蠬語",
        "reading": "かんご (蠬)",
        "meaning": "蠬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_878",
    "level": "N1",
    "kanji": "蠽",
    "onyomi": "カン (n1_878)",
    "kunyomi": "ひと (n1_878)",
    "meaningUz": "N1 Iyeroglifi #878 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "蠽語",
        "reading": "かんご (蠽)",
        "meaning": "蠽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_879",
    "level": "N1",
    "kanji": "衎",
    "onyomi": "カン (n1_879)",
    "kunyomi": "ひと (n1_879)",
    "meaningUz": "N1 Iyeroglifi #879 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "衎語",
        "reading": "かんご (衎)",
        "meaning": "衎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_880",
    "level": "N1",
    "kanji": "衟",
    "onyomi": "カン (n1_880)",
    "kunyomi": "ひと (n1_880)",
    "meaningUz": "N1 Iyeroglifi #880 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "衟語",
        "reading": "かんご (衟)",
        "meaning": "衟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_881",
    "level": "N1",
    "kanji": "衰",
    "onyomi": "カン (n1_881)",
    "kunyomi": "ひと (n1_881)",
    "meaningUz": "N1 Iyeroglifi #881 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "衰語",
        "reading": "かんご (衰)",
        "meaning": "衰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_882",
    "level": "N1",
    "kanji": "袁",
    "onyomi": "カン (n1_882)",
    "kunyomi": "ひと (n1_882)",
    "meaningUz": "N1 Iyeroglifi #882 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "袁語",
        "reading": "かんご (袁)",
        "meaning": "袁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_883",
    "level": "N1",
    "kanji": "袒",
    "onyomi": "カン (n1_883)",
    "kunyomi": "ひと (n1_883)",
    "meaningUz": "N1 Iyeroglifi #883 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "袒語",
        "reading": "かんご (袒)",
        "meaning": "袒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_884",
    "level": "N1",
    "kanji": "袣",
    "onyomi": "カン (n1_884)",
    "kunyomi": "ひと (n1_884)",
    "meaningUz": "N1 Iyeroglifi #884 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "袣語",
        "reading": "かんご (袣)",
        "meaning": "袣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_885",
    "level": "N1",
    "kanji": "袴",
    "onyomi": "カン (n1_885)",
    "kunyomi": "ひと (n1_885)",
    "meaningUz": "N1 Iyeroglifi #885 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "袴語",
        "reading": "かんご (袴)",
        "meaning": "袴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_886",
    "level": "N1",
    "kanji": "装",
    "onyomi": "カン (n1_886)",
    "kunyomi": "ひと (n1_886)",
    "meaningUz": "N1 Iyeroglifi #886 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "装語",
        "reading": "かんご (装)",
        "meaning": "装 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_887",
    "level": "N1",
    "kanji": "裖",
    "onyomi": "カン (n1_887)",
    "kunyomi": "ひと (n1_887)",
    "meaningUz": "N1 Iyeroglifi #887 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "裖語",
        "reading": "かんご (裖)",
        "meaning": "裖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_888",
    "level": "N1",
    "kanji": "裧",
    "onyomi": "カン (n1_888)",
    "kunyomi": "ひと (n1_888)",
    "meaningUz": "N1 Iyeroglifi #888 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "裧語",
        "reading": "かんご (裧)",
        "meaning": "裧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_889",
    "level": "N1",
    "kanji": "裸",
    "onyomi": "カン (n1_889)",
    "kunyomi": "ひと (n1_889)",
    "meaningUz": "N1 Iyeroglifi #889 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "裸語",
        "reading": "かんご (裸)",
        "meaning": "裸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_890",
    "level": "N1",
    "kanji": "褉",
    "onyomi": "カン (n1_890)",
    "kunyomi": "ひと (n1_890)",
    "meaningUz": "N1 Iyeroglifi #890 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "褉語",
        "reading": "かんご (褉)",
        "meaning": "褉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_891",
    "level": "N1",
    "kanji": "褚",
    "onyomi": "カン (n1_891)",
    "kunyomi": "ひと (n1_891)",
    "meaningUz": "N1 Iyeroglifi #891 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "褚語",
        "reading": "かんご (褚)",
        "meaning": "褚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_892",
    "level": "N1",
    "kanji": "褫",
    "onyomi": "カン (n1_892)",
    "kunyomi": "ひと (n1_892)",
    "meaningUz": "N1 Iyeroglifi #892 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "褫語",
        "reading": "かんご (褫)",
        "meaning": "褫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_893",
    "level": "N1",
    "kanji": "褼",
    "onyomi": "カン (n1_893)",
    "kunyomi": "ひと (n1_893)",
    "meaningUz": "N1 Iyeroglifi #893 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "褼語",
        "reading": "かんご (褼)",
        "meaning": "褼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_894",
    "level": "N1",
    "kanji": "襍",
    "onyomi": "カン (n1_894)",
    "kunyomi": "ひと (n1_894)",
    "meaningUz": "N1 Iyeroglifi #894 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "襍語",
        "reading": "かんご (襍)",
        "meaning": "襍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_895",
    "level": "N1",
    "kanji": "襞",
    "onyomi": "カン (n1_895)",
    "kunyomi": "ひと (n1_895)",
    "meaningUz": "N1 Iyeroglifi #895 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "襞語",
        "reading": "かんご (襞)",
        "meaning": "襞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_896",
    "level": "N1",
    "kanji": "襯",
    "onyomi": "カン (n1_896)",
    "kunyomi": "ひと (n1_896)",
    "meaningUz": "N1 Iyeroglifi #896 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "襯語",
        "reading": "かんご (襯)",
        "meaning": "襯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_897",
    "level": "N1",
    "kanji": "覀",
    "onyomi": "カン (n1_897)",
    "kunyomi": "ひと (n1_897)",
    "meaningUz": "N1 Iyeroglifi #897 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "覀語",
        "reading": "かんご (覀)",
        "meaning": "覀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_898",
    "level": "N1",
    "kanji": "覑",
    "onyomi": "カン (n1_898)",
    "kunyomi": "ひと (n1_898)",
    "meaningUz": "N1 Iyeroglifi #898 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "覑語",
        "reading": "かんご (覑)",
        "meaning": "覑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_899",
    "level": "N1",
    "kanji": "覢",
    "onyomi": "カン (n1_899)",
    "kunyomi": "ひと (n1_899)",
    "meaningUz": "N1 Iyeroglifi #899 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "覢語",
        "reading": "かんご (覢)",
        "meaning": "覢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_900",
    "level": "N1",
    "kanji": "観",
    "onyomi": "カン (n1_900)",
    "kunyomi": "ひと (n1_900)",
    "meaningUz": "N1 Iyeroglifi #900 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "観語",
        "reading": "かんご (観)",
        "meaning": "観 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_901",
    "level": "N1",
    "kanji": "规",
    "onyomi": "カン (n1_901)",
    "kunyomi": "ひと (n1_901)",
    "meaningUz": "N1 Iyeroglifi #901 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "规語",
        "reading": "かんご (规)",
        "meaning": "规 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_902",
    "level": "N1",
    "kanji": "觕",
    "onyomi": "カン (n1_902)",
    "kunyomi": "ひと (n1_902)",
    "meaningUz": "N1 Iyeroglifi #902 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "觕語",
        "reading": "かんご (觕)",
        "meaning": "觕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_903",
    "level": "N1",
    "kanji": "触",
    "onyomi": "カン (n1_903)",
    "kunyomi": "ひと (n1_903)",
    "meaningUz": "N1 Iyeroglifi #903 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "触語",
        "reading": "かんご (触)",
        "meaning": "触 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_904",
    "level": "N1",
    "kanji": "觷",
    "onyomi": "カン (n1_904)",
    "kunyomi": "ひと (n1_904)",
    "meaningUz": "N1 Iyeroglifi #904 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "觷語",
        "reading": "かんご (觷)",
        "meaning": "觷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_905",
    "level": "N1",
    "kanji": "計",
    "onyomi": "カン (n1_905)",
    "kunyomi": "ひと (n1_905)",
    "meaningUz": "N1 Iyeroglifi #905 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "計語",
        "reading": "かんご (計)",
        "meaning": "計 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_906",
    "level": "N1",
    "kanji": "訙",
    "onyomi": "カン (n1_906)",
    "kunyomi": "ひと (n1_906)",
    "meaningUz": "N1 Iyeroglifi #906 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "訙語",
        "reading": "かんご (訙)",
        "meaning": "訙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_907",
    "level": "N1",
    "kanji": "訪",
    "onyomi": "カン (n1_907)",
    "kunyomi": "ひと (n1_907)",
    "meaningUz": "N1 Iyeroglifi #907 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "訪語",
        "reading": "かんご (訪)",
        "meaning": "訪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_908",
    "level": "N1",
    "kanji": "註",
    "onyomi": "カン (n1_908)",
    "kunyomi": "ひと (n1_908)",
    "meaningUz": "N1 Iyeroglifi #908 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "註語",
        "reading": "かんご (註)",
        "meaning": "註 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_909",
    "level": "N1",
    "kanji": "詌",
    "onyomi": "カン (n1_909)",
    "kunyomi": "ひと (n1_909)",
    "meaningUz": "N1 Iyeroglifi #909 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "詌語",
        "reading": "かんご (詌)",
        "meaning": "詌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_910",
    "level": "N1",
    "kanji": "詝",
    "onyomi": "カン (n1_910)",
    "kunyomi": "ひと (n1_910)",
    "meaningUz": "N1 Iyeroglifi #910 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "詝語",
        "reading": "かんご (詝)",
        "meaning": "詝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_911",
    "level": "N1",
    "kanji": "詮",
    "onyomi": "カン (n1_911)",
    "kunyomi": "ひと (n1_911)",
    "meaningUz": "N1 Iyeroglifi #911 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "詮語",
        "reading": "かんご (詮)",
        "meaning": "詮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_912",
    "level": "N1",
    "kanji": "詿",
    "onyomi": "カン (n1_912)",
    "kunyomi": "ひと (n1_912)",
    "meaningUz": "N1 Iyeroglifi #912 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "詿語",
        "reading": "かんご (詿)",
        "meaning": "詿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_913",
    "level": "N1",
    "kanji": "誐",
    "onyomi": "カン (n1_913)",
    "kunyomi": "ひと (n1_913)",
    "meaningUz": "N1 Iyeroglifi #913 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "誐語",
        "reading": "かんご (誐)",
        "meaning": "誐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_914",
    "level": "N1",
    "kanji": "誡",
    "onyomi": "カン (n1_914)",
    "kunyomi": "ひと (n1_914)",
    "meaningUz": "N1 Iyeroglifi #914 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "誡語",
        "reading": "かんご (誡)",
        "meaning": "誡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_915",
    "level": "N1",
    "kanji": "課",
    "onyomi": "カン (n1_915)",
    "kunyomi": "ひと (n1_915)",
    "meaningUz": "N1 Iyeroglifi #915 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "課語",
        "reading": "かんご (課)",
        "meaning": "課 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_916",
    "level": "N1",
    "kanji": "諃",
    "onyomi": "カン (n1_916)",
    "kunyomi": "ひと (n1_916)",
    "meaningUz": "N1 Iyeroglifi #916 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "諃語",
        "reading": "かんご (諃)",
        "meaning": "諃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_917",
    "level": "N1",
    "kanji": "諔",
    "onyomi": "カン (n1_917)",
    "kunyomi": "ひと (n1_917)",
    "meaningUz": "N1 Iyeroglifi #917 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "諔語",
        "reading": "かんご (諔)",
        "meaning": "諔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_918",
    "level": "N1",
    "kanji": "諥",
    "onyomi": "カン (n1_918)",
    "kunyomi": "ひと (n1_918)",
    "meaningUz": "N1 Iyeroglifi #918 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "諥語",
        "reading": "かんご (諥)",
        "meaning": "諥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_919",
    "level": "N1",
    "kanji": "諶",
    "onyomi": "カン (n1_919)",
    "kunyomi": "ひと (n1_919)",
    "meaningUz": "N1 Iyeroglifi #919 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "諶語",
        "reading": "かんご (諶)",
        "meaning": "諶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_920",
    "level": "N1",
    "kanji": "謇",
    "onyomi": "カン (n1_920)",
    "kunyomi": "ひと (n1_920)",
    "meaningUz": "N1 Iyeroglifi #920 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "謇語",
        "reading": "かんご (謇)",
        "meaning": "謇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_921",
    "level": "N1",
    "kanji": "謘",
    "onyomi": "カン (n1_921)",
    "kunyomi": "ひと (n1_921)",
    "meaningUz": "N1 Iyeroglifi #921 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "謘語",
        "reading": "かんご (謘)",
        "meaning": "謘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_922",
    "level": "N1",
    "kanji": "謩",
    "onyomi": "カン (n1_922)",
    "kunyomi": "ひと (n1_922)",
    "meaningUz": "N1 Iyeroglifi #922 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "謩語",
        "reading": "かんご (謩)",
        "meaning": "謩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_923",
    "level": "N1",
    "kanji": "謺",
    "onyomi": "カン (n1_923)",
    "kunyomi": "ひと (n1_923)",
    "meaningUz": "N1 Iyeroglifi #923 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "謺語",
        "reading": "かんご (謺)",
        "meaning": "謺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_924",
    "level": "N1",
    "kanji": "譋",
    "onyomi": "カン (n1_924)",
    "kunyomi": "ひと (n1_924)",
    "meaningUz": "N1 Iyeroglifi #924 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "譋語",
        "reading": "かんご (譋)",
        "meaning": "譋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_925",
    "level": "N1",
    "kanji": "譜",
    "onyomi": "カン (n1_925)",
    "kunyomi": "ひと (n1_925)",
    "meaningUz": "N1 Iyeroglifi #925 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "譜語",
        "reading": "かんご (譜)",
        "meaning": "譜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_926",
    "level": "N1",
    "kanji": "譭",
    "onyomi": "カン (n1_926)",
    "kunyomi": "ひと (n1_926)",
    "meaningUz": "N1 Iyeroglifi #926 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "譭語",
        "reading": "かんご (譭)",
        "meaning": "譭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_927",
    "level": "N1",
    "kanji": "譾",
    "onyomi": "カン (n1_927)",
    "kunyomi": "ひと (n1_927)",
    "meaningUz": "N1 Iyeroglifi #927 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "譾語",
        "reading": "かんご (譾)",
        "meaning": "譾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_928",
    "level": "N1",
    "kanji": "讏",
    "onyomi": "カン (n1_928)",
    "kunyomi": "ひと (n1_928)",
    "meaningUz": "N1 Iyeroglifi #928 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "讏語",
        "reading": "かんご (讏)",
        "meaning": "讏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_929",
    "level": "N1",
    "kanji": "讠",
    "onyomi": "カン (n1_929)",
    "kunyomi": "ひと (n1_929)",
    "meaningUz": "N1 Iyeroglifi #929 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "讠語",
        "reading": "かんご (讠)",
        "meaning": "讠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_930",
    "level": "N1",
    "kanji": "讱",
    "onyomi": "カン (n1_930)",
    "kunyomi": "ひと (n1_930)",
    "meaningUz": "N1 Iyeroglifi #930 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "讱語",
        "reading": "かんご (讱)",
        "meaning": "讱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_931",
    "level": "N1",
    "kanji": "诂",
    "onyomi": "カン (n1_931)",
    "kunyomi": "ひと (n1_931)",
    "meaningUz": "N1 Iyeroglifi #931 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "诂語",
        "reading": "かんご (诂)",
        "meaning": "诂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_932",
    "level": "N1",
    "kanji": "诓",
    "onyomi": "カン (n1_932)",
    "kunyomi": "ひと (n1_932)",
    "meaningUz": "N1 Iyeroglifi #932 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "诓語",
        "reading": "かんご (诓)",
        "meaning": "诓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_933",
    "level": "N1",
    "kanji": "诤",
    "onyomi": "カン (n1_933)",
    "kunyomi": "ひと (n1_933)",
    "meaningUz": "N1 Iyeroglifi #933 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "诤語",
        "reading": "かんご (诤)",
        "meaning": "诤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_934",
    "level": "N1",
    "kanji": "诵",
    "onyomi": "カン (n1_934)",
    "kunyomi": "ひと (n1_934)",
    "meaningUz": "N1 Iyeroglifi #934 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "诵語",
        "reading": "かんご (诵)",
        "meaning": "诵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_935",
    "level": "N1",
    "kanji": "谆",
    "onyomi": "カン (n1_935)",
    "kunyomi": "ひと (n1_935)",
    "meaningUz": "N1 Iyeroglifi #935 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "谆語",
        "reading": "かんご (谆)",
        "meaning": "谆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_936",
    "level": "N1",
    "kanji": "谗",
    "onyomi": "カン (n1_936)",
    "kunyomi": "ひと (n1_936)",
    "meaningUz": "N1 Iyeroglifi #936 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "谗語",
        "reading": "かんご (谗)",
        "meaning": "谗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_937",
    "level": "N1",
    "kanji": "谨",
    "onyomi": "カン (n1_937)",
    "kunyomi": "ひと (n1_937)",
    "meaningUz": "N1 Iyeroglifi #937 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "谨語",
        "reading": "かんご (谨)",
        "meaning": "谨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_938",
    "level": "N1",
    "kanji": "谹",
    "onyomi": "カン (n1_938)",
    "kunyomi": "ひと (n1_938)",
    "meaningUz": "N1 Iyeroglifi #938 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "谹語",
        "reading": "かんご (谹)",
        "meaning": "谹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_939",
    "level": "N1",
    "kanji": "豊",
    "onyomi": "カン (n1_939)",
    "kunyomi": "ひと (n1_939)",
    "meaningUz": "N1 Iyeroglifi #939 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "豊語",
        "reading": "かんご (豊)",
        "meaning": "豊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_940",
    "level": "N1",
    "kanji": "豛",
    "onyomi": "カン (n1_940)",
    "kunyomi": "ひと (n1_940)",
    "meaningUz": "N1 Iyeroglifi #940 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "豛語",
        "reading": "かんご (豛)",
        "meaning": "豛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_941",
    "level": "N1",
    "kanji": "豬",
    "onyomi": "カン (n1_941)",
    "kunyomi": "ひと (n1_941)",
    "meaningUz": "N1 Iyeroglifi #941 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "豬語",
        "reading": "かんご (豬)",
        "meaning": "豬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_942",
    "level": "N1",
    "kanji": "豽",
    "onyomi": "カン (n1_942)",
    "kunyomi": "ひと (n1_942)",
    "meaningUz": "N1 Iyeroglifi #942 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "豽語",
        "reading": "かんご (豽)",
        "meaning": "豽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_943",
    "level": "N1",
    "kanji": "貎",
    "onyomi": "カン (n1_943)",
    "kunyomi": "ひと (n1_943)",
    "meaningUz": "N1 Iyeroglifi #943 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "貎語",
        "reading": "かんご (貎)",
        "meaning": "貎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_944",
    "level": "N1",
    "kanji": "貟",
    "onyomi": "カン (n1_944)",
    "kunyomi": "ひと (n1_944)",
    "meaningUz": "N1 Iyeroglifi #944 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "貟語",
        "reading": "かんご (貟)",
        "meaning": "貟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_945",
    "level": "N1",
    "kanji": "貰",
    "onyomi": "カン (n1_945)",
    "kunyomi": "ひと (n1_945)",
    "meaningUz": "N1 Iyeroglifi #945 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "貰語",
        "reading": "かんご (貰)",
        "meaning": "貰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_946",
    "level": "N1",
    "kanji": "賁",
    "onyomi": "カン (n1_946)",
    "kunyomi": "ひと (n1_946)",
    "meaningUz": "N1 Iyeroglifi #946 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "賁語",
        "reading": "かんご (賁)",
        "meaning": "賁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_947",
    "level": "N1",
    "kanji": "賒",
    "onyomi": "カン (n1_947)",
    "kunyomi": "ひと (n1_947)",
    "meaningUz": "N1 Iyeroglifi #947 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "賒語",
        "reading": "かんご (賒)",
        "meaning": "賒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_948",
    "level": "N1",
    "kanji": "賣",
    "onyomi": "カン (n1_948)",
    "kunyomi": "ひと (n1_948)",
    "meaningUz": "N1 Iyeroglifi #948 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "賣語",
        "reading": "かんご (賣)",
        "meaning": "賣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_949",
    "level": "N1",
    "kanji": "賴",
    "onyomi": "カン (n1_949)",
    "kunyomi": "ひと (n1_949)",
    "meaningUz": "N1 Iyeroglifi #949 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "賴語",
        "reading": "かんご (賴)",
        "meaning": "賴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_950",
    "level": "N1",
    "kanji": "贅",
    "onyomi": "カン (n1_950)",
    "kunyomi": "ひと (n1_950)",
    "meaningUz": "N1 Iyeroglifi #950 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "贅語",
        "reading": "かんご (贅)",
        "meaning": "贅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_951",
    "level": "N1",
    "kanji": "贖",
    "onyomi": "カン (n1_951)",
    "kunyomi": "ひと (n1_951)",
    "meaningUz": "N1 Iyeroglifi #951 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "贖語",
        "reading": "かんご (贖)",
        "meaning": "贖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_952",
    "level": "N1",
    "kanji": "货",
    "onyomi": "カン (n1_952)",
    "kunyomi": "ひと (n1_952)",
    "meaningUz": "N1 Iyeroglifi #952 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "货語",
        "reading": "かんご (货)",
        "meaning": "货 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_953",
    "level": "N1",
    "kanji": "贸",
    "onyomi": "カン (n1_953)",
    "kunyomi": "ひと (n1_953)",
    "meaningUz": "N1 Iyeroglifi #953 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "贸語",
        "reading": "かんご (贸)",
        "meaning": "贸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_954",
    "level": "N1",
    "kanji": "赉",
    "onyomi": "カン (n1_954)",
    "kunyomi": "ひと (n1_954)",
    "meaningUz": "N1 Iyeroglifi #954 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "赉語",
        "reading": "かんご (赉)",
        "meaning": "赉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_955",
    "level": "N1",
    "kanji": "赚",
    "onyomi": "カン (n1_955)",
    "kunyomi": "ひと (n1_955)",
    "meaningUz": "N1 Iyeroglifi #955 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "赚語",
        "reading": "かんご (赚)",
        "meaning": "赚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_956",
    "level": "N1",
    "kanji": "赫",
    "onyomi": "カン (n1_956)",
    "kunyomi": "ひと (n1_956)",
    "meaningUz": "N1 Iyeroglifi #956 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "赫語",
        "reading": "かんご (赫)",
        "meaning": "赫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_957",
    "level": "N1",
    "kanji": "赼",
    "onyomi": "カン (n1_957)",
    "kunyomi": "ひと (n1_957)",
    "meaningUz": "N1 Iyeroglifi #957 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "赼語",
        "reading": "かんご (赼)",
        "meaning": "赼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_958",
    "level": "N1",
    "kanji": "趍",
    "onyomi": "カン (n1_958)",
    "kunyomi": "ひと (n1_958)",
    "meaningUz": "N1 Iyeroglifi #958 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "趍語",
        "reading": "かんご (趍)",
        "meaning": "趍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_959",
    "level": "N1",
    "kanji": "趞",
    "onyomi": "カン (n1_959)",
    "kunyomi": "ひと (n1_959)",
    "meaningUz": "N1 Iyeroglifi #959 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "趞語",
        "reading": "かんご (趞)",
        "meaning": "趞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_960",
    "level": "N1",
    "kanji": "趯",
    "onyomi": "カン (n1_960)",
    "kunyomi": "ひと (n1_960)",
    "meaningUz": "N1 Iyeroglifi #960 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "趯語",
        "reading": "かんご (趯)",
        "meaning": "趯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_961",
    "level": "N1",
    "kanji": "跀",
    "onyomi": "カン (n1_961)",
    "kunyomi": "ひと (n1_961)",
    "meaningUz": "N1 Iyeroglifi #961 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "跀語",
        "reading": "かんご (跀)",
        "meaning": "跀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_962",
    "level": "N1",
    "kanji": "跑",
    "onyomi": "カン (n1_962)",
    "kunyomi": "ひと (n1_962)",
    "meaningUz": "N1 Iyeroglifi #962 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "跑語",
        "reading": "かんご (跑)",
        "meaning": "跑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_963",
    "level": "N1",
    "kanji": "跢",
    "onyomi": "カン (n1_963)",
    "kunyomi": "ひと (n1_963)",
    "meaningUz": "N1 Iyeroglifi #963 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "跢語",
        "reading": "かんご (跢)",
        "meaning": "跢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_964",
    "level": "N1",
    "kanji": "跳",
    "onyomi": "カン (n1_964)",
    "kunyomi": "ひと (n1_964)",
    "meaningUz": "N1 Iyeroglifi #964 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "跳語",
        "reading": "かんご (跳)",
        "meaning": "跳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_965",
    "level": "N1",
    "kanji": "踄",
    "onyomi": "カン (n1_965)",
    "kunyomi": "ひと (n1_965)",
    "meaningUz": "N1 Iyeroglifi #965 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "踄語",
        "reading": "かんご (踄)",
        "meaning": "踄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_966",
    "level": "N1",
    "kanji": "踕",
    "onyomi": "カン (n1_966)",
    "kunyomi": "ひと (n1_966)",
    "meaningUz": "N1 Iyeroglifi #966 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "踕語",
        "reading": "かんご (踕)",
        "meaning": "踕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_967",
    "level": "N1",
    "kanji": "踦",
    "onyomi": "カン (n1_967)",
    "kunyomi": "ひと (n1_967)",
    "meaningUz": "N1 Iyeroglifi #967 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "踦語",
        "reading": "かんご (踦)",
        "meaning": "踦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_968",
    "level": "N1",
    "kanji": "踷",
    "onyomi": "カン (n1_968)",
    "kunyomi": "ひと (n1_968)",
    "meaningUz": "N1 Iyeroglifi #968 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "踷語",
        "reading": "かんご (踷)",
        "meaning": "踷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_969",
    "level": "N1",
    "kanji": "蹈",
    "onyomi": "カン (n1_969)",
    "kunyomi": "ひと (n1_969)",
    "meaningUz": "N1 Iyeroglifi #969 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "蹈語",
        "reading": "かんご (蹈)",
        "meaning": "蹈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_970",
    "level": "N1",
    "kanji": "蹙",
    "onyomi": "カン (n1_970)",
    "kunyomi": "ひと (n1_970)",
    "meaningUz": "N1 Iyeroglifi #970 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "蹙語",
        "reading": "かんご (蹙)",
        "meaning": "蹙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_971",
    "level": "N1",
    "kanji": "蹪",
    "onyomi": "カン (n1_971)",
    "kunyomi": "ひと (n1_971)",
    "meaningUz": "N1 Iyeroglifi #971 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "蹪語",
        "reading": "かんご (蹪)",
        "meaning": "蹪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_972",
    "level": "N1",
    "kanji": "蹻",
    "onyomi": "カン (n1_972)",
    "kunyomi": "ひと (n1_972)",
    "meaningUz": "N1 Iyeroglifi #972 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "蹻語",
        "reading": "かんご (蹻)",
        "meaning": "蹻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_973",
    "level": "N1",
    "kanji": "躌",
    "onyomi": "カン (n1_973)",
    "kunyomi": "ひと (n1_973)",
    "meaningUz": "N1 Iyeroglifi #973 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "躌語",
        "reading": "かんご (躌)",
        "meaning": "躌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_974",
    "level": "N1",
    "kanji": "躝",
    "onyomi": "カン (n1_974)",
    "kunyomi": "ひと (n1_974)",
    "meaningUz": "N1 Iyeroglifi #974 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "躝語",
        "reading": "かんご (躝)",
        "meaning": "躝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_975",
    "level": "N1",
    "kanji": "躮",
    "onyomi": "カン (n1_975)",
    "kunyomi": "ひと (n1_975)",
    "meaningUz": "N1 Iyeroglifi #975 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "躮語",
        "reading": "かんご (躮)",
        "meaning": "躮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_976",
    "level": "N1",
    "kanji": "躿",
    "onyomi": "カン (n1_976)",
    "kunyomi": "ひと (n1_976)",
    "meaningUz": "N1 Iyeroglifi #976 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "躿語",
        "reading": "かんご (躿)",
        "meaning": "躿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_977",
    "level": "N1",
    "kanji": "軐",
    "onyomi": "カン (n1_977)",
    "kunyomi": "ひと (n1_977)",
    "meaningUz": "N1 Iyeroglifi #977 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "軐語",
        "reading": "かんご (軐)",
        "meaning": "軐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_978",
    "level": "N1",
    "kanji": "軡",
    "onyomi": "カン (n1_978)",
    "kunyomi": "ひと (n1_978)",
    "meaningUz": "N1 Iyeroglifi #978 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "軡語",
        "reading": "かんご (軡)",
        "meaning": "軡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_979",
    "level": "N1",
    "kanji": "軲",
    "onyomi": "カン (n1_979)",
    "kunyomi": "ひと (n1_979)",
    "meaningUz": "N1 Iyeroglifi #979 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "軲語",
        "reading": "かんご (軲)",
        "meaning": "軲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_980",
    "level": "N1",
    "kanji": "較",
    "onyomi": "カン (n1_980)",
    "kunyomi": "ひと (n1_980)",
    "meaningUz": "N1 Iyeroglifi #980 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "較語",
        "reading": "かんご (較)",
        "meaning": "較 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_981",
    "level": "N1",
    "kanji": "輔",
    "onyomi": "カン (n1_981)",
    "kunyomi": "ひと (n1_981)",
    "meaningUz": "N1 Iyeroglifi #981 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "輔語",
        "reading": "かんご (輔)",
        "meaning": "輔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_982",
    "level": "N1",
    "kanji": "輥",
    "onyomi": "カン (n1_982)",
    "kunyomi": "ひと (n1_982)",
    "meaningUz": "N1 Iyeroglifi #982 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "輥語",
        "reading": "かんご (輥)",
        "meaning": "輥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_983",
    "level": "N1",
    "kanji": "輶",
    "onyomi": "カン (n1_983)",
    "kunyomi": "ひと (n1_983)",
    "meaningUz": "N1 Iyeroglifi #983 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "輶語",
        "reading": "かんご (輶)",
        "meaning": "輶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_984",
    "level": "N1",
    "kanji": "轇",
    "onyomi": "カン (n1_984)",
    "kunyomi": "ひと (n1_984)",
    "meaningUz": "N1 Iyeroglifi #984 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "轇語",
        "reading": "かんご (轇)",
        "meaning": "轇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_985",
    "level": "N1",
    "kanji": "轘",
    "onyomi": "カン (n1_985)",
    "kunyomi": "ひと (n1_985)",
    "meaningUz": "N1 Iyeroglifi #985 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "轘語",
        "reading": "かんご (轘)",
        "meaning": "轘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_986",
    "level": "N1",
    "kanji": "轩",
    "onyomi": "カン (n1_986)",
    "kunyomi": "ひと (n1_986)",
    "meaningUz": "N1 Iyeroglifi #986 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "轩語",
        "reading": "かんご (轩)",
        "meaning": "轩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_987",
    "level": "N1",
    "kanji": "轺",
    "onyomi": "カン (n1_987)",
    "kunyomi": "ひと (n1_987)",
    "meaningUz": "N1 Iyeroglifi #987 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "轺語",
        "reading": "かんご (轺)",
        "meaning": "轺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_988",
    "level": "N1",
    "kanji": "辋",
    "onyomi": "カン (n1_988)",
    "kunyomi": "ひと (n1_988)",
    "meaningUz": "N1 Iyeroglifi #988 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "辋語",
        "reading": "かんご (辋)",
        "meaning": "辋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_989",
    "level": "N1",
    "kanji": "辜",
    "onyomi": "カン (n1_989)",
    "kunyomi": "ひと (n1_989)",
    "meaningUz": "N1 Iyeroglifi #989 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "辜語",
        "reading": "かんご (辜)",
        "meaning": "辜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_990",
    "level": "N1",
    "kanji": "辭",
    "onyomi": "カン (n1_990)",
    "kunyomi": "ひと (n1_990)",
    "meaningUz": "N1 Iyeroglifi #990 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "辭語",
        "reading": "かんご (辭)",
        "meaning": "辭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_991",
    "level": "N1",
    "kanji": "达",
    "onyomi": "カン (n1_991)",
    "kunyomi": "ひと (n1_991)",
    "meaningUz": "N1 Iyeroglifi #991 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "达語",
        "reading": "かんご (达)",
        "meaning": "达 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_992",
    "level": "N1",
    "kanji": "迏",
    "onyomi": "カン (n1_992)",
    "kunyomi": "ひと (n1_992)",
    "meaningUz": "N1 Iyeroglifi #992 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "迏語",
        "reading": "かんご (迏)",
        "meaning": "迏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_993",
    "level": "N1",
    "kanji": "迠",
    "onyomi": "カン (n1_993)",
    "kunyomi": "ひと (n1_993)",
    "meaningUz": "N1 Iyeroglifi #993 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "迠語",
        "reading": "かんご (迠)",
        "meaning": "迠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_994",
    "level": "N1",
    "kanji": "迱",
    "onyomi": "カン (n1_994)",
    "kunyomi": "ひと (n1_994)",
    "meaningUz": "N1 Iyeroglifi #994 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "迱語",
        "reading": "かんご (迱)",
        "meaning": "迱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_995",
    "level": "N1",
    "kanji": "适",
    "onyomi": "カン (n1_995)",
    "kunyomi": "ひと (n1_995)",
    "meaningUz": "N1 Iyeroglifi #995 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "适語",
        "reading": "かんご (适)",
        "meaning": "适 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_996",
    "level": "N1",
    "kanji": "逓",
    "onyomi": "カン (n1_996)",
    "kunyomi": "ひと (n1_996)",
    "meaningUz": "N1 Iyeroglifi #996 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "逓語",
        "reading": "かんご (逓)",
        "meaning": "逓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_997",
    "level": "N1",
    "kanji": "逤",
    "onyomi": "カン (n1_997)",
    "kunyomi": "ひと (n1_997)",
    "meaningUz": "N1 Iyeroglifi #997 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "逤語",
        "reading": "かんご (逤)",
        "meaning": "逤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_998",
    "level": "N1",
    "kanji": "逵",
    "onyomi": "カン (n1_998)",
    "kunyomi": "ひと (n1_998)",
    "meaningUz": "N1 Iyeroglifi #998 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "逵語",
        "reading": "かんご (逵)",
        "meaning": "逵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_999",
    "level": "N1",
    "kanji": "遆",
    "onyomi": "カン (n1_999)",
    "kunyomi": "ひと (n1_999)",
    "meaningUz": "N1 Iyeroglifi #999 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "遆語",
        "reading": "かんご (遆)",
        "meaning": "遆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1000",
    "level": "N1",
    "kanji": "遗",
    "onyomi": "カン (n1_1000)",
    "kunyomi": "ひと (n1_1000)",
    "meaningUz": "N1 Iyeroglifi #1000 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "遗語",
        "reading": "かんご (遗)",
        "meaning": "遗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1001",
    "level": "N1",
    "kanji": "遨",
    "onyomi": "カン (n1_1001)",
    "kunyomi": "ひと (n1_1001)",
    "meaningUz": "N1 Iyeroglifi #1001 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "遨語",
        "reading": "かんご (遨)",
        "meaning": "遨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1002",
    "level": "N1",
    "kanji": "遹",
    "onyomi": "カン (n1_1002)",
    "kunyomi": "ひと (n1_1002)",
    "meaningUz": "N1 Iyeroglifi #1002 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "遹語",
        "reading": "かんご (遹)",
        "meaning": "遹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1003",
    "level": "N1",
    "kanji": "邊",
    "onyomi": "カン (n1_1003)",
    "kunyomi": "ひと (n1_1003)",
    "meaningUz": "N1 Iyeroglifi #1003 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "邊語",
        "reading": "かんご (邊)",
        "meaning": "邊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1004",
    "level": "N1",
    "kanji": "邛",
    "onyomi": "カン (n1_1004)",
    "kunyomi": "ひと (n1_1004)",
    "meaningUz": "N1 Iyeroglifi #1004 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "邛語",
        "reading": "かんご (邛)",
        "meaning": "邛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1005",
    "level": "N1",
    "kanji": "邬",
    "onyomi": "カン (n1_1005)",
    "kunyomi": "ひと (n1_1005)",
    "meaningUz": "N1 Iyeroglifi #1005 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "邬語",
        "reading": "かんご (邬)",
        "meaning": "邬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1006",
    "level": "N1",
    "kanji": "邽",
    "onyomi": "カン (n1_1006)",
    "kunyomi": "ひと (n1_1006)",
    "meaningUz": "N1 Iyeroglifi #1006 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "邽語",
        "reading": "かんご (邽)",
        "meaning": "邽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1007",
    "level": "N1",
    "kanji": "郎",
    "onyomi": "カン (n1_1007)",
    "kunyomi": "ひと (n1_1007)",
    "meaningUz": "N1 Iyeroglifi #1007 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "郎語",
        "reading": "かんご (郎)",
        "meaning": "郎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1008",
    "level": "N1",
    "kanji": "郟",
    "onyomi": "カン (n1_1008)",
    "kunyomi": "ひと (n1_1008)",
    "meaningUz": "N1 Iyeroglifi #1008 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "郟語",
        "reading": "かんご (郟)",
        "meaning": "郟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1009",
    "level": "N1",
    "kanji": "郰",
    "onyomi": "カン (n1_1009)",
    "kunyomi": "ひと (n1_1009)",
    "meaningUz": "N1 Iyeroglifi #1009 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "郰語",
        "reading": "かんご (郰)",
        "meaning": "郰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1010",
    "level": "N1",
    "kanji": "鄁",
    "onyomi": "カン (n1_1010)",
    "kunyomi": "ひと (n1_1010)",
    "meaningUz": "N1 Iyeroglifi #1010 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鄁語",
        "reading": "かんご (鄁)",
        "meaning": "鄁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1011",
    "level": "N1",
    "kanji": "鄒",
    "onyomi": "カン (n1_1011)",
    "kunyomi": "ひと (n1_1011)",
    "meaningUz": "N1 Iyeroglifi #1011 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "鄒語",
        "reading": "かんご (鄒)",
        "meaning": "鄒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1012",
    "level": "N1",
    "kanji": "鄣",
    "onyomi": "カン (n1_1012)",
    "kunyomi": "ひと (n1_1012)",
    "meaningUz": "N1 Iyeroglifi #1012 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "鄣語",
        "reading": "かんご (鄣)",
        "meaning": "鄣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1013",
    "level": "N1",
    "kanji": "鄴",
    "onyomi": "カン (n1_1013)",
    "kunyomi": "ひと (n1_1013)",
    "meaningUz": "N1 Iyeroglifi #1013 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "鄴語",
        "reading": "かんご (鄴)",
        "meaning": "鄴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1014",
    "level": "N1",
    "kanji": "酅",
    "onyomi": "カン (n1_1014)",
    "kunyomi": "ひと (n1_1014)",
    "meaningUz": "N1 Iyeroglifi #1014 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "酅語",
        "reading": "かんご (酅)",
        "meaning": "酅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1015",
    "level": "N1",
    "kanji": "酖",
    "onyomi": "カン (n1_1015)",
    "kunyomi": "ひと (n1_1015)",
    "meaningUz": "N1 Iyeroglifi #1015 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "酖語",
        "reading": "かんご (酖)",
        "meaning": "酖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1016",
    "level": "N1",
    "kanji": "酧",
    "onyomi": "カン (n1_1016)",
    "kunyomi": "ひと (n1_1016)",
    "meaningUz": "N1 Iyeroglifi #1016 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "酧語",
        "reading": "かんご (酧)",
        "meaning": "酧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1017",
    "level": "N1",
    "kanji": "酸",
    "onyomi": "カン (n1_1017)",
    "kunyomi": "ひと (n1_1017)",
    "meaningUz": "N1 Iyeroglifi #1017 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "酸語",
        "reading": "かんご (酸)",
        "meaning": "酸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1018",
    "level": "N1",
    "kanji": "醉",
    "onyomi": "カン (n1_1018)",
    "kunyomi": "ひと (n1_1018)",
    "meaningUz": "N1 Iyeroglifi #1018 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "醉語",
        "reading": "かんご (醉)",
        "meaning": "醉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1019",
    "level": "N1",
    "kanji": "醚",
    "onyomi": "カン (n1_1019)",
    "kunyomi": "ひと (n1_1019)",
    "meaningUz": "N1 Iyeroglifi #1019 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "醚語",
        "reading": "かんご (醚)",
        "meaning": "醚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1020",
    "level": "N1",
    "kanji": "醫",
    "onyomi": "カン (n1_1020)",
    "kunyomi": "ひと (n1_1020)",
    "meaningUz": "N1 Iyeroglifi #1020 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "醫語",
        "reading": "かんご (醫)",
        "meaning": "醫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1021",
    "level": "N1",
    "kanji": "醼",
    "onyomi": "カン (n1_1021)",
    "kunyomi": "ひと (n1_1021)",
    "meaningUz": "N1 Iyeroglifi #1021 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "醼語",
        "reading": "かんご (醼)",
        "meaning": "醼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1022",
    "level": "N1",
    "kanji": "重",
    "onyomi": "カン (n1_1022)",
    "kunyomi": "ひと (n1_1022)",
    "meaningUz": "N1 Iyeroglifi #1022 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "重語",
        "reading": "かんご (重)",
        "meaning": "重 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1023",
    "level": "N1",
    "kanji": "釞",
    "onyomi": "カン (n1_1023)",
    "kunyomi": "ひと (n1_1023)",
    "meaningUz": "N1 Iyeroglifi #1023 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "釞語",
        "reading": "かんご (釞)",
        "meaning": "釞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1024",
    "level": "N1",
    "kanji": "釯",
    "onyomi": "カン (n1_1024)",
    "kunyomi": "ひと (n1_1024)",
    "meaningUz": "N1 Iyeroglifi #1024 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "釯語",
        "reading": "かんご (釯)",
        "meaning": "釯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1025",
    "level": "N1",
    "kanji": "鈀",
    "onyomi": "カン (n1_1025)",
    "kunyomi": "ひと (n1_1025)",
    "meaningUz": "N1 Iyeroglifi #1025 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鈀語",
        "reading": "かんご (鈀)",
        "meaning": "鈀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1026",
    "level": "N1",
    "kanji": "鈑",
    "onyomi": "カン (n1_1026)",
    "kunyomi": "ひと (n1_1026)",
    "meaningUz": "N1 Iyeroglifi #1026 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "鈑語",
        "reading": "かんご (鈑)",
        "meaning": "鈑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1027",
    "level": "N1",
    "kanji": "鈢",
    "onyomi": "カン (n1_1027)",
    "kunyomi": "ひと (n1_1027)",
    "meaningUz": "N1 Iyeroglifi #1027 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "鈢語",
        "reading": "かんご (鈢)",
        "meaning": "鈢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1028",
    "level": "N1",
    "kanji": "鈳",
    "onyomi": "カン (n1_1028)",
    "kunyomi": "ひと (n1_1028)",
    "meaningUz": "N1 Iyeroglifi #1028 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "鈳語",
        "reading": "かんご (鈳)",
        "meaning": "鈳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1029",
    "level": "N1",
    "kanji": "鉄",
    "onyomi": "カン (n1_1029)",
    "kunyomi": "ひと (n1_1029)",
    "meaningUz": "N1 Iyeroglifi #1029 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鉄語",
        "reading": "かんご (鉄)",
        "meaning": "鉄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1030",
    "level": "N1",
    "kanji": "鉕",
    "onyomi": "カン (n1_1030)",
    "kunyomi": "ひと (n1_1030)",
    "meaningUz": "N1 Iyeroglifi #1030 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "鉕語",
        "reading": "かんご (鉕)",
        "meaning": "鉕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1031",
    "level": "N1",
    "kanji": "鉦",
    "onyomi": "カン (n1_1031)",
    "kunyomi": "ひと (n1_1031)",
    "meaningUz": "N1 Iyeroglifi #1031 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "鉦語",
        "reading": "かんご (鉦)",
        "meaning": "鉦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1032",
    "level": "N1",
    "kanji": "鉷",
    "onyomi": "カン (n1_1032)",
    "kunyomi": "ひと (n1_1032)",
    "meaningUz": "N1 Iyeroglifi #1032 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "鉷語",
        "reading": "かんご (鉷)",
        "meaning": "鉷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1033",
    "level": "N1",
    "kanji": "銈",
    "onyomi": "カン (n1_1033)",
    "kunyomi": "ひと (n1_1033)",
    "meaningUz": "N1 Iyeroglifi #1033 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "銈語",
        "reading": "かんご (銈)",
        "meaning": "銈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1034",
    "level": "N1",
    "kanji": "銙",
    "onyomi": "カン (n1_1034)",
    "kunyomi": "ひと (n1_1034)",
    "meaningUz": "N1 Iyeroglifi #1034 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "銙語",
        "reading": "かんご (銙)",
        "meaning": "銙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1035",
    "level": "N1",
    "kanji": "銪",
    "onyomi": "カン (n1_1035)",
    "kunyomi": "ひと (n1_1035)",
    "meaningUz": "N1 Iyeroglifi #1035 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "銪語",
        "reading": "かんご (銪)",
        "meaning": "銪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1036",
    "level": "N1",
    "kanji": "銻",
    "onyomi": "カン (n1_1036)",
    "kunyomi": "ひと (n1_1036)",
    "meaningUz": "N1 Iyeroglifi #1036 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "銻語",
        "reading": "かんご (銻)",
        "meaning": "銻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1037",
    "level": "N1",
    "kanji": "鋌",
    "onyomi": "カン (n1_1037)",
    "kunyomi": "ひと (n1_1037)",
    "meaningUz": "N1 Iyeroglifi #1037 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "鋌語",
        "reading": "かんご (鋌)",
        "meaning": "鋌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1038",
    "level": "N1",
    "kanji": "鋝",
    "onyomi": "カン (n1_1038)",
    "kunyomi": "ひと (n1_1038)",
    "meaningUz": "N1 Iyeroglifi #1038 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "鋝語",
        "reading": "かんご (鋝)",
        "meaning": "鋝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1039",
    "level": "N1",
    "kanji": "鋮",
    "onyomi": "カン (n1_1039)",
    "kunyomi": "ひと (n1_1039)",
    "meaningUz": "N1 Iyeroglifi #1039 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "鋮語",
        "reading": "かんご (鋮)",
        "meaning": "鋮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1040",
    "level": "N1",
    "kanji": "鋿",
    "onyomi": "カン (n1_1040)",
    "kunyomi": "ひと (n1_1040)",
    "meaningUz": "N1 Iyeroglifi #1040 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鋿語",
        "reading": "かんご (鋿)",
        "meaning": "鋿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1041",
    "level": "N1",
    "kanji": "錐",
    "onyomi": "カン (n1_1041)",
    "kunyomi": "ひと (n1_1041)",
    "meaningUz": "N1 Iyeroglifi #1041 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "錐語",
        "reading": "かんご (錐)",
        "meaning": "錐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1042",
    "level": "N1",
    "kanji": "錡",
    "onyomi": "カン (n1_1042)",
    "kunyomi": "ひと (n1_1042)",
    "meaningUz": "N1 Iyeroglifi #1042 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "錡語",
        "reading": "かんご (錡)",
        "meaning": "錡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1043",
    "level": "N1",
    "kanji": "録",
    "onyomi": "カン (n1_1043)",
    "kunyomi": "ひと (n1_1043)",
    "meaningUz": "N1 Iyeroglifi #1043 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "録語",
        "reading": "かんご (録)",
        "meaning": "録 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1044",
    "level": "N1",
    "kanji": "鍃",
    "onyomi": "カン (n1_1044)",
    "kunyomi": "ひと (n1_1044)",
    "meaningUz": "N1 Iyeroglifi #1044 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鍃語",
        "reading": "かんご (鍃)",
        "meaning": "鍃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1045",
    "level": "N1",
    "kanji": "鍔",
    "onyomi": "カン (n1_1045)",
    "kunyomi": "ひと (n1_1045)",
    "meaningUz": "N1 Iyeroglifi #1045 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "鍔語",
        "reading": "かんご (鍔)",
        "meaning": "鍔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1046",
    "level": "N1",
    "kanji": "鍥",
    "onyomi": "カン (n1_1046)",
    "kunyomi": "ひと (n1_1046)",
    "meaningUz": "N1 Iyeroglifi #1046 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "鍥語",
        "reading": "かんご (鍥)",
        "meaning": "鍥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1047",
    "level": "N1",
    "kanji": "鍶",
    "onyomi": "カン (n1_1047)",
    "kunyomi": "ひと (n1_1047)",
    "meaningUz": "N1 Iyeroglifi #1047 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "鍶語",
        "reading": "かんご (鍶)",
        "meaning": "鍶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1048",
    "level": "N1",
    "kanji": "鎇",
    "onyomi": "カン (n1_1048)",
    "kunyomi": "ひと (n1_1048)",
    "meaningUz": "N1 Iyeroglifi #1048 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "鎇語",
        "reading": "かんご (鎇)",
        "meaning": "鎇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1049",
    "level": "N1",
    "kanji": "鎘",
    "onyomi": "カン (n1_1049)",
    "kunyomi": "ひと (n1_1049)",
    "meaningUz": "N1 Iyeroglifi #1049 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "鎘語",
        "reading": "かんご (鎘)",
        "meaning": "鎘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1050",
    "level": "N1",
    "kanji": "鎩",
    "onyomi": "カン (n1_1050)",
    "kunyomi": "ひと (n1_1050)",
    "meaningUz": "N1 Iyeroglifi #1050 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "鎩語",
        "reading": "かんご (鎩)",
        "meaning": "鎩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1051",
    "level": "N1",
    "kanji": "鎺",
    "onyomi": "カン (n1_1051)",
    "kunyomi": "ひと (n1_1051)",
    "meaningUz": "N1 Iyeroglifi #1051 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "鎺語",
        "reading": "かんご (鎺)",
        "meaning": "鎺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1052",
    "level": "N1",
    "kanji": "鏋",
    "onyomi": "カン (n1_1052)",
    "kunyomi": "ひと (n1_1052)",
    "meaningUz": "N1 Iyeroglifi #1052 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "鏋語",
        "reading": "かんご (鏋)",
        "meaning": "鏋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1053",
    "level": "N1",
    "kanji": "鏜",
    "onyomi": "カン (n1_1053)",
    "kunyomi": "ひと (n1_1053)",
    "meaningUz": "N1 Iyeroglifi #1053 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "鏜語",
        "reading": "かんご (鏜)",
        "meaning": "鏜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1054",
    "level": "N1",
    "kanji": "鏭",
    "onyomi": "カン (n1_1054)",
    "kunyomi": "ひと (n1_1054)",
    "meaningUz": "N1 Iyeroglifi #1054 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "鏭語",
        "reading": "かんご (鏭)",
        "meaning": "鏭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1055",
    "level": "N1",
    "kanji": "鏾",
    "onyomi": "カン (n1_1055)",
    "kunyomi": "ひと (n1_1055)",
    "meaningUz": "N1 Iyeroglifi #1055 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鏾語",
        "reading": "かんご (鏾)",
        "meaning": "鏾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1056",
    "level": "N1",
    "kanji": "鐏",
    "onyomi": "カン (n1_1056)",
    "kunyomi": "ひと (n1_1056)",
    "meaningUz": "N1 Iyeroglifi #1056 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "鐏語",
        "reading": "かんご (鐏)",
        "meaning": "鐏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1057",
    "level": "N1",
    "kanji": "鐠",
    "onyomi": "カン (n1_1057)",
    "kunyomi": "ひと (n1_1057)",
    "meaningUz": "N1 Iyeroglifi #1057 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "鐠語",
        "reading": "かんご (鐠)",
        "meaning": "鐠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1058",
    "level": "N1",
    "kanji": "鐱",
    "onyomi": "カン (n1_1058)",
    "kunyomi": "ひと (n1_1058)",
    "meaningUz": "N1 Iyeroglifi #1058 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "鐱語",
        "reading": "かんご (鐱)",
        "meaning": "鐱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1059",
    "level": "N1",
    "kanji": "鑂",
    "onyomi": "カン (n1_1059)",
    "kunyomi": "ひと (n1_1059)",
    "meaningUz": "N1 Iyeroglifi #1059 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鑂語",
        "reading": "かんご (鑂)",
        "meaning": "鑂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1060",
    "level": "N1",
    "kanji": "鑓",
    "onyomi": "カン (n1_1060)",
    "kunyomi": "ひと (n1_1060)",
    "meaningUz": "N1 Iyeroglifi #1060 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "鑓語",
        "reading": "かんご (鑓)",
        "meaning": "鑓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1061",
    "level": "N1",
    "kanji": "鑤",
    "onyomi": "カン (n1_1061)",
    "kunyomi": "ひと (n1_1061)",
    "meaningUz": "N1 Iyeroglifi #1061 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "鑤語",
        "reading": "かんご (鑤)",
        "meaning": "鑤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1062",
    "level": "N1",
    "kanji": "鑵",
    "onyomi": "カン (n1_1062)",
    "kunyomi": "ひと (n1_1062)",
    "meaningUz": "N1 Iyeroglifi #1062 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "鑵語",
        "reading": "かんご (鑵)",
        "meaning": "鑵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1063",
    "level": "N1",
    "kanji": "钆",
    "onyomi": "カン (n1_1063)",
    "kunyomi": "ひと (n1_1063)",
    "meaningUz": "N1 Iyeroglifi #1063 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "钆語",
        "reading": "かんご (钆)",
        "meaning": "钆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1064",
    "level": "N1",
    "kanji": "钗",
    "onyomi": "カン (n1_1064)",
    "kunyomi": "ひと (n1_1064)",
    "meaningUz": "N1 Iyeroglifi #1064 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "钗語",
        "reading": "かんご (钗)",
        "meaning": "钗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1065",
    "level": "N1",
    "kanji": "钨",
    "onyomi": "カン (n1_1065)",
    "kunyomi": "ひと (n1_1065)",
    "meaningUz": "N1 Iyeroglifi #1065 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "钨語",
        "reading": "かんご (钨)",
        "meaning": "钨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1066",
    "level": "N1",
    "kanji": "钹",
    "onyomi": "カン (n1_1066)",
    "kunyomi": "ひと (n1_1066)",
    "meaningUz": "N1 Iyeroglifi #1066 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "钹語",
        "reading": "かんご (钹)",
        "meaning": "钹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1067",
    "level": "N1",
    "kanji": "铊",
    "onyomi": "カン (n1_1067)",
    "kunyomi": "ひと (n1_1067)",
    "meaningUz": "N1 Iyeroglifi #1067 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "铊語",
        "reading": "かんご (铊)",
        "meaning": "铊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1068",
    "level": "N1",
    "kanji": "铛",
    "onyomi": "カン (n1_1068)",
    "kunyomi": "ひと (n1_1068)",
    "meaningUz": "N1 Iyeroglifi #1068 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "铛語",
        "reading": "かんご (铛)",
        "meaning": "铛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1069",
    "level": "N1",
    "kanji": "铬",
    "onyomi": "カン (n1_1069)",
    "kunyomi": "ひと (n1_1069)",
    "meaningUz": "N1 Iyeroglifi #1069 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "铬語",
        "reading": "かんご (铬)",
        "meaning": "铬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1070",
    "level": "N1",
    "kanji": "铽",
    "onyomi": "カン (n1_1070)",
    "kunyomi": "ひと (n1_1070)",
    "meaningUz": "N1 Iyeroglifi #1070 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "铽語",
        "reading": "かんご (铽)",
        "meaning": "铽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1071",
    "level": "N1",
    "kanji": "锎",
    "onyomi": "カン (n1_1071)",
    "kunyomi": "ひと (n1_1071)",
    "meaningUz": "N1 Iyeroglifi #1071 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "锎語",
        "reading": "かんご (锎)",
        "meaning": "锎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1072",
    "level": "N1",
    "kanji": "锟",
    "onyomi": "カン (n1_1072)",
    "kunyomi": "ひと (n1_1072)",
    "meaningUz": "N1 Iyeroglifi #1072 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "锟語",
        "reading": "かんご (锟)",
        "meaning": "锟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1073",
    "level": "N1",
    "kanji": "锰",
    "onyomi": "カン (n1_1073)",
    "kunyomi": "ひと (n1_1073)",
    "meaningUz": "N1 Iyeroglifi #1073 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "锰語",
        "reading": "かんご (锰)",
        "meaning": "锰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1074",
    "level": "N1",
    "kanji": "镁",
    "onyomi": "カン (n1_1074)",
    "kunyomi": "ひと (n1_1074)",
    "meaningUz": "N1 Iyeroglifi #1074 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "镁語",
        "reading": "かんご (镁)",
        "meaning": "镁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1075",
    "level": "N1",
    "kanji": "镒",
    "onyomi": "カン (n1_1075)",
    "kunyomi": "ひと (n1_1075)",
    "meaningUz": "N1 Iyeroglifi #1075 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "镒語",
        "reading": "かんご (镒)",
        "meaning": "镒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1076",
    "level": "N1",
    "kanji": "镣",
    "onyomi": "カン (n1_1076)",
    "kunyomi": "ひと (n1_1076)",
    "meaningUz": "N1 Iyeroglifi #1076 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "镣語",
        "reading": "かんご (镣)",
        "meaning": "镣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1077",
    "level": "N1",
    "kanji": "镴",
    "onyomi": "カン (n1_1077)",
    "kunyomi": "ひと (n1_1077)",
    "meaningUz": "N1 Iyeroglifi #1077 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "镴語",
        "reading": "かんご (镴)",
        "meaning": "镴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1078",
    "level": "N1",
    "kanji": "閅",
    "onyomi": "カン (n1_1078)",
    "kunyomi": "ひと (n1_1078)",
    "meaningUz": "N1 Iyeroglifi #1078 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "閅語",
        "reading": "かんご (閅)",
        "meaning": "閅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1079",
    "level": "N1",
    "kanji": "閖",
    "onyomi": "カン (n1_1079)",
    "kunyomi": "ひと (n1_1079)",
    "meaningUz": "N1 Iyeroglifi #1079 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "閖語",
        "reading": "かんご (閖)",
        "meaning": "閖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1080",
    "level": "N1",
    "kanji": "閧",
    "onyomi": "カン (n1_1080)",
    "kunyomi": "ひと (n1_1080)",
    "meaningUz": "N1 Iyeroglifi #1080 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "閧語",
        "reading": "かんご (閧)",
        "meaning": "閧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1081",
    "level": "N1",
    "kanji": "閸",
    "onyomi": "カン (n1_1081)",
    "kunyomi": "ひと (n1_1081)",
    "meaningUz": "N1 Iyeroglifi #1081 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "閸語",
        "reading": "かんご (閸)",
        "meaning": "閸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1082",
    "level": "N1",
    "kanji": "闉",
    "onyomi": "カン (n1_1082)",
    "kunyomi": "ひと (n1_1082)",
    "meaningUz": "N1 Iyeroglifi #1082 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "闉語",
        "reading": "かんご (闉)",
        "meaning": "闉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1083",
    "level": "N1",
    "kanji": "闚",
    "onyomi": "カン (n1_1083)",
    "kunyomi": "ひと (n1_1083)",
    "meaningUz": "N1 Iyeroglifi #1083 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "闚語",
        "reading": "かんご (闚)",
        "meaning": "闚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1084",
    "level": "N1",
    "kanji": "闫",
    "onyomi": "カン (n1_1084)",
    "kunyomi": "ひと (n1_1084)",
    "meaningUz": "N1 Iyeroglifi #1084 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "闫語",
        "reading": "かんご (闫)",
        "meaning": "闫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1085",
    "level": "N1",
    "kanji": "闼",
    "onyomi": "カン (n1_1085)",
    "kunyomi": "ひと (n1_1085)",
    "meaningUz": "N1 Iyeroglifi #1085 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "闼語",
        "reading": "かんご (闼)",
        "meaning": "闼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1086",
    "level": "N1",
    "kanji": "阍",
    "onyomi": "カン (n1_1086)",
    "kunyomi": "ひと (n1_1086)",
    "meaningUz": "N1 Iyeroglifi #1086 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "阍語",
        "reading": "かんご (阍)",
        "meaning": "阍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1087",
    "level": "N1",
    "kanji": "阞",
    "onyomi": "カン (n1_1087)",
    "kunyomi": "ひと (n1_1087)",
    "meaningUz": "N1 Iyeroglifi #1087 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "阞語",
        "reading": "かんご (阞)",
        "meaning": "阞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1088",
    "level": "N1",
    "kanji": "阯",
    "onyomi": "カン (n1_1088)",
    "kunyomi": "ひと (n1_1088)",
    "meaningUz": "N1 Iyeroglifi #1088 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "阯語",
        "reading": "かんご (阯)",
        "meaning": "阯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1089",
    "level": "N1",
    "kanji": "陀",
    "onyomi": "カン (n1_1089)",
    "kunyomi": "ひと (n1_1089)",
    "meaningUz": "N1 Iyeroglifi #1089 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "陀語",
        "reading": "かんご (陀)",
        "meaning": "陀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1090",
    "level": "N1",
    "kanji": "陑",
    "onyomi": "カン (n1_1090)",
    "kunyomi": "ひと (n1_1090)",
    "meaningUz": "N1 Iyeroglifi #1090 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "陑語",
        "reading": "かんご (陑)",
        "meaning": "陑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1091",
    "level": "N1",
    "kanji": "院",
    "onyomi": "カン (n1_1091)",
    "kunyomi": "ひと (n1_1091)",
    "meaningUz": "N1 Iyeroglifi #1091 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "院語",
        "reading": "かんご (院)",
        "meaning": "院 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1092",
    "level": "N1",
    "kanji": "陳",
    "onyomi": "カン (n1_1092)",
    "kunyomi": "ひと (n1_1092)",
    "meaningUz": "N1 Iyeroglifi #1092 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "陳語",
        "reading": "かんご (陳)",
        "meaning": "陳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1093",
    "level": "N1",
    "kanji": "隄",
    "onyomi": "カン (n1_1093)",
    "kunyomi": "ひと (n1_1093)",
    "meaningUz": "N1 Iyeroglifi #1093 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "隄語",
        "reading": "かんご (隄)",
        "meaning": "隄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1094",
    "level": "N1",
    "kanji": "隕",
    "onyomi": "カン (n1_1094)",
    "kunyomi": "ひと (n1_1094)",
    "meaningUz": "N1 Iyeroglifi #1094 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "隕語",
        "reading": "かんご (隕)",
        "meaning": "隕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1095",
    "level": "N1",
    "kanji": "隦",
    "onyomi": "カン (n1_1095)",
    "kunyomi": "ひと (n1_1095)",
    "meaningUz": "N1 Iyeroglifi #1095 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "隦語",
        "reading": "かんご (隦)",
        "meaning": "隦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1096",
    "level": "N1",
    "kanji": "隷",
    "onyomi": "カン (n1_1096)",
    "kunyomi": "ひと (n1_1096)",
    "meaningUz": "N1 Iyeroglifi #1096 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "隷語",
        "reading": "かんご (隷)",
        "meaning": "隷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1097",
    "level": "N1",
    "kanji": "雈",
    "onyomi": "カン (n1_1097)",
    "kunyomi": "ひと (n1_1097)",
    "meaningUz": "N1 Iyeroglifi #1097 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "雈語",
        "reading": "かんご (雈)",
        "meaning": "雈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1098",
    "level": "N1",
    "kanji": "雙",
    "onyomi": "カン (n1_1098)",
    "kunyomi": "ひと (n1_1098)",
    "meaningUz": "N1 Iyeroglifi #1098 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "雙語",
        "reading": "かんご (雙)",
        "meaning": "雙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1099",
    "level": "N1",
    "kanji": "雪",
    "onyomi": "カン (n1_1099)",
    "kunyomi": "ひと (n1_1099)",
    "meaningUz": "N1 Iyeroglifi #1099 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "雪語",
        "reading": "かんご (雪)",
        "meaning": "雪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1100",
    "level": "N1",
    "kanji": "電",
    "onyomi": "カン (n1_1100)",
    "kunyomi": "ひと (n1_1100)",
    "meaningUz": "N1 Iyeroglifi #1100 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "電語",
        "reading": "かんご (電)",
        "meaning": "電 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1101",
    "level": "N1",
    "kanji": "霌",
    "onyomi": "カン (n1_1101)",
    "kunyomi": "ひと (n1_1101)",
    "meaningUz": "N1 Iyeroglifi #1101 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "霌語",
        "reading": "かんご (霌)",
        "meaning": "霌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1102",
    "level": "N1",
    "kanji": "霝",
    "onyomi": "カン (n1_1102)",
    "kunyomi": "ひと (n1_1102)",
    "meaningUz": "N1 Iyeroglifi #1102 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "霝語",
        "reading": "かんご (霝)",
        "meaning": "霝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1103",
    "level": "N1",
    "kanji": "霮",
    "onyomi": "カン (n1_1103)",
    "kunyomi": "ひと (n1_1103)",
    "meaningUz": "N1 Iyeroglifi #1103 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "霮語",
        "reading": "かんご (霮)",
        "meaning": "霮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1104",
    "level": "N1",
    "kanji": "霿",
    "onyomi": "カン (n1_1104)",
    "kunyomi": "ひと (n1_1104)",
    "meaningUz": "N1 Iyeroglifi #1104 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "霿語",
        "reading": "かんご (霿)",
        "meaning": "霿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1105",
    "level": "N1",
    "kanji": "靐",
    "onyomi": "カン (n1_1105)",
    "kunyomi": "ひと (n1_1105)",
    "meaningUz": "N1 Iyeroglifi #1105 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "靐語",
        "reading": "かんご (靐)",
        "meaning": "靐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1106",
    "level": "N1",
    "kanji": "靡",
    "onyomi": "カン (n1_1106)",
    "kunyomi": "ひと (n1_1106)",
    "meaningUz": "N1 Iyeroglifi #1106 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "靡語",
        "reading": "かんご (靡)",
        "meaning": "靡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1107",
    "level": "N1",
    "kanji": "靲",
    "onyomi": "カン (n1_1107)",
    "kunyomi": "ひと (n1_1107)",
    "meaningUz": "N1 Iyeroglifi #1107 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "靲語",
        "reading": "かんご (靲)",
        "meaning": "靲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1108",
    "level": "N1",
    "kanji": "鞃",
    "onyomi": "カン (n1_1108)",
    "kunyomi": "ひと (n1_1108)",
    "meaningUz": "N1 Iyeroglifi #1108 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "鞃語",
        "reading": "かんご (鞃)",
        "meaning": "鞃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1109",
    "level": "N1",
    "kanji": "鞔",
    "onyomi": "カン (n1_1109)",
    "kunyomi": "ひと (n1_1109)",
    "meaningUz": "N1 Iyeroglifi #1109 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "鞔語",
        "reading": "かんご (鞔)",
        "meaning": "鞔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1110",
    "level": "N1",
    "kanji": "鞥",
    "onyomi": "カン (n1_1110)",
    "kunyomi": "ひと (n1_1110)",
    "meaningUz": "N1 Iyeroglifi #1110 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "鞥語",
        "reading": "かんご (鞥)",
        "meaning": "鞥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1111",
    "level": "N1",
    "kanji": "鞶",
    "onyomi": "カン (n1_1111)",
    "kunyomi": "ひと (n1_1111)",
    "meaningUz": "N1 Iyeroglifi #1111 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "鞶語",
        "reading": "かんご (鞶)",
        "meaning": "鞶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1112",
    "level": "N1",
    "kanji": "韇",
    "onyomi": "カン (n1_1112)",
    "kunyomi": "ひと (n1_1112)",
    "meaningUz": "N1 Iyeroglifi #1112 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "韇語",
        "reading": "かんご (韇)",
        "meaning": "韇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1113",
    "level": "N1",
    "kanji": "韘",
    "onyomi": "カン (n1_1113)",
    "kunyomi": "ひと (n1_1113)",
    "meaningUz": "N1 Iyeroglifi #1113 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "韘語",
        "reading": "かんご (韘)",
        "meaning": "韘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1114",
    "level": "N1",
    "kanji": "韩",
    "onyomi": "カン (n1_1114)",
    "kunyomi": "ひと (n1_1114)",
    "meaningUz": "N1 Iyeroglifi #1114 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "韩語",
        "reading": "かんご (韩)",
        "meaning": "韩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1115",
    "level": "N1",
    "kanji": "韺",
    "onyomi": "カン (n1_1115)",
    "kunyomi": "ひと (n1_1115)",
    "meaningUz": "N1 Iyeroglifi #1115 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "韺語",
        "reading": "かんご (韺)",
        "meaning": "韺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1116",
    "level": "N1",
    "kanji": "頋",
    "onyomi": "カン (n1_1116)",
    "kunyomi": "ひと (n1_1116)",
    "meaningUz": "N1 Iyeroglifi #1116 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "頋語",
        "reading": "かんご (頋)",
        "meaning": "頋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1117",
    "level": "N1",
    "kanji": "頜",
    "onyomi": "カン (n1_1117)",
    "kunyomi": "ひと (n1_1117)",
    "meaningUz": "N1 Iyeroglifi #1117 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "頜語",
        "reading": "かんご (頜)",
        "meaning": "頜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1118",
    "level": "N1",
    "kanji": "頭",
    "onyomi": "カン (n1_1118)",
    "kunyomi": "ひと (n1_1118)",
    "meaningUz": "N1 Iyeroglifi #1118 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "頭語",
        "reading": "かんご (頭)",
        "meaning": "頭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1119",
    "level": "N1",
    "kanji": "頾",
    "onyomi": "カン (n1_1119)",
    "kunyomi": "ひと (n1_1119)",
    "meaningUz": "N1 Iyeroglifi #1119 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "頾語",
        "reading": "かんご (頾)",
        "meaning": "頾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1120",
    "level": "N1",
    "kanji": "顏",
    "onyomi": "カン (n1_1120)",
    "kunyomi": "ひと (n1_1120)",
    "meaningUz": "N1 Iyeroglifi #1120 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "顏語",
        "reading": "かんご (顏)",
        "meaning": "顏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1121",
    "level": "N1",
    "kanji": "顠",
    "onyomi": "カン (n1_1121)",
    "kunyomi": "ひと (n1_1121)",
    "meaningUz": "N1 Iyeroglifi #1121 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "顠語",
        "reading": "かんご (顠)",
        "meaning": "顠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1122",
    "level": "N1",
    "kanji": "顱",
    "onyomi": "カン (n1_1122)",
    "kunyomi": "ひと (n1_1122)",
    "meaningUz": "N1 Iyeroglifi #1122 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "顱語",
        "reading": "かんご (顱)",
        "meaning": "顱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1123",
    "level": "N1",
    "kanji": "颂",
    "onyomi": "カン (n1_1123)",
    "kunyomi": "ひと (n1_1123)",
    "meaningUz": "N1 Iyeroglifi #1123 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "颂語",
        "reading": "かんご (颂)",
        "meaning": "颂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1124",
    "level": "N1",
    "kanji": "颓",
    "onyomi": "カン (n1_1124)",
    "kunyomi": "ひと (n1_1124)",
    "meaningUz": "N1 Iyeroglifi #1124 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "颓語",
        "reading": "かんご (颓)",
        "meaning": "颓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1125",
    "level": "N1",
    "kanji": "颤",
    "onyomi": "カン (n1_1125)",
    "kunyomi": "ひと (n1_1125)",
    "meaningUz": "N1 Iyeroglifi #1125 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "颤語",
        "reading": "かんご (颤)",
        "meaning": "颤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1126",
    "level": "N1",
    "kanji": "颵",
    "onyomi": "カン (n1_1126)",
    "kunyomi": "ひと (n1_1126)",
    "meaningUz": "N1 Iyeroglifi #1126 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "颵語",
        "reading": "かんご (颵)",
        "meaning": "颵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1127",
    "level": "N1",
    "kanji": "飆",
    "onyomi": "カン (n1_1127)",
    "kunyomi": "ひと (n1_1127)",
    "meaningUz": "N1 Iyeroglifi #1127 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "飆語",
        "reading": "かんご (飆)",
        "meaning": "飆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1128",
    "level": "N1",
    "kanji": "飗",
    "onyomi": "カン (n1_1128)",
    "kunyomi": "ひと (n1_1128)",
    "meaningUz": "N1 Iyeroglifi #1128 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "飗語",
        "reading": "かんご (飗)",
        "meaning": "飗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1129",
    "level": "N1",
    "kanji": "飨",
    "onyomi": "カン (n1_1129)",
    "kunyomi": "ひと (n1_1129)",
    "meaningUz": "N1 Iyeroglifi #1129 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "飨語",
        "reading": "かんご (飨)",
        "meaning": "飨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1130",
    "level": "N1",
    "kanji": "飹",
    "onyomi": "カン (n1_1130)",
    "kunyomi": "ひと (n1_1130)",
    "meaningUz": "N1 Iyeroglifi #1130 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "飹語",
        "reading": "かんご (飹)",
        "meaning": "飹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1131",
    "level": "N1",
    "kanji": "養",
    "onyomi": "カン (n1_1131)",
    "kunyomi": "ひと (n1_1131)",
    "meaningUz": "N1 Iyeroglifi #1131 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "養語",
        "reading": "かんご (養)",
        "meaning": "養 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1132",
    "level": "N1",
    "kanji": "餛",
    "onyomi": "カン (n1_1132)",
    "kunyomi": "ひと (n1_1132)",
    "meaningUz": "N1 Iyeroglifi #1132 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "餛語",
        "reading": "かんご (餛)",
        "meaning": "餛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1133",
    "level": "N1",
    "kanji": "餬",
    "onyomi": "カン (n1_1133)",
    "kunyomi": "ひと (n1_1133)",
    "meaningUz": "N1 Iyeroglifi #1133 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "餬語",
        "reading": "かんご (餬)",
        "meaning": "餬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1134",
    "level": "N1",
    "kanji": "餽",
    "onyomi": "カン (n1_1134)",
    "kunyomi": "ひと (n1_1134)",
    "meaningUz": "N1 Iyeroglifi #1134 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "餽語",
        "reading": "かんご (餽)",
        "meaning": "餽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1135",
    "level": "N1",
    "kanji": "饎",
    "onyomi": "カン (n1_1135)",
    "kunyomi": "ひと (n1_1135)",
    "meaningUz": "N1 Iyeroglifi #1135 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "饎語",
        "reading": "かんご (饎)",
        "meaning": "饎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1136",
    "level": "N1",
    "kanji": "饟",
    "onyomi": "カン (n1_1136)",
    "kunyomi": "ひと (n1_1136)",
    "meaningUz": "N1 Iyeroglifi #1136 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "饟語",
        "reading": "かんご (饟)",
        "meaning": "饟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1137",
    "level": "N1",
    "kanji": "饰",
    "onyomi": "カン (n1_1137)",
    "kunyomi": "ひと (n1_1137)",
    "meaningUz": "N1 Iyeroglifi #1137 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "饰語",
        "reading": "かんご (饰)",
        "meaning": "饰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1138",
    "level": "N1",
    "kanji": "馁",
    "onyomi": "カン (n1_1138)",
    "kunyomi": "ひと (n1_1138)",
    "meaningUz": "N1 Iyeroglifi #1138 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "馁語",
        "reading": "かんご (馁)",
        "meaning": "馁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1139",
    "level": "N1",
    "kanji": "馒",
    "onyomi": "カン (n1_1139)",
    "kunyomi": "ひと (n1_1139)",
    "meaningUz": "N1 Iyeroglifi #1139 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "馒語",
        "reading": "かんご (馒)",
        "meaning": "馒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1140",
    "level": "N1",
    "kanji": "馣",
    "onyomi": "カン (n1_1140)",
    "kunyomi": "ひと (n1_1140)",
    "meaningUz": "N1 Iyeroglifi #1140 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "馣語",
        "reading": "かんご (馣)",
        "meaning": "馣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1141",
    "level": "N1",
    "kanji": "馴",
    "onyomi": "カン (n1_1141)",
    "kunyomi": "ひと (n1_1141)",
    "meaningUz": "N1 Iyeroglifi #1141 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "馴語",
        "reading": "かんご (馴)",
        "meaning": "馴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1142",
    "level": "N1",
    "kanji": "駅",
    "onyomi": "カン (n1_1142)",
    "kunyomi": "ひと (n1_1142)",
    "meaningUz": "N1 Iyeroglifi #1142 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "駅語",
        "reading": "かんご (駅)",
        "meaning": "駅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1143",
    "level": "N1",
    "kanji": "駖",
    "onyomi": "カン (n1_1143)",
    "kunyomi": "ひと (n1_1143)",
    "meaningUz": "N1 Iyeroglifi #1143 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "駖語",
        "reading": "かんご (駖)",
        "meaning": "駖 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1144",
    "level": "N1",
    "kanji": "駧",
    "onyomi": "カン (n1_1144)",
    "kunyomi": "ひと (n1_1144)",
    "meaningUz": "N1 Iyeroglifi #1144 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "駧語",
        "reading": "かんご (駧)",
        "meaning": "駧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1145",
    "level": "N1",
    "kanji": "駸",
    "onyomi": "カン (n1_1145)",
    "kunyomi": "ひと (n1_1145)",
    "meaningUz": "N1 Iyeroglifi #1145 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "駸語",
        "reading": "かんご (駸)",
        "meaning": "駸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1146",
    "level": "N1",
    "kanji": "騉",
    "onyomi": "カン (n1_1146)",
    "kunyomi": "ひと (n1_1146)",
    "meaningUz": "N1 Iyeroglifi #1146 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "騉語",
        "reading": "かんご (騉)",
        "meaning": "騉 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1147",
    "level": "N1",
    "kanji": "騚",
    "onyomi": "カン (n1_1147)",
    "kunyomi": "ひと (n1_1147)",
    "meaningUz": "N1 Iyeroglifi #1147 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "騚語",
        "reading": "かんご (騚)",
        "meaning": "騚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1148",
    "level": "N1",
    "kanji": "騫",
    "onyomi": "カン (n1_1148)",
    "kunyomi": "ひと (n1_1148)",
    "meaningUz": "N1 Iyeroglifi #1148 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "騫語",
        "reading": "かんご (騫)",
        "meaning": "騫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1149",
    "level": "N1",
    "kanji": "騼",
    "onyomi": "カン (n1_1149)",
    "kunyomi": "ひと (n1_1149)",
    "meaningUz": "N1 Iyeroglifi #1149 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "騼語",
        "reading": "かんご (騼)",
        "meaning": "騼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1150",
    "level": "N1",
    "kanji": "驍",
    "onyomi": "カン (n1_1150)",
    "kunyomi": "ひと (n1_1150)",
    "meaningUz": "N1 Iyeroglifi #1150 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "驍語",
        "reading": "かんご (驍)",
        "meaning": "驍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1151",
    "level": "N1",
    "kanji": "驞",
    "onyomi": "カン (n1_1151)",
    "kunyomi": "ひと (n1_1151)",
    "meaningUz": "N1 Iyeroglifi #1151 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "驞語",
        "reading": "かんご (驞)",
        "meaning": "驞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1152",
    "level": "N1",
    "kanji": "驯",
    "onyomi": "カン (n1_1152)",
    "kunyomi": "ひと (n1_1152)",
    "meaningUz": "N1 Iyeroglifi #1152 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "驯語",
        "reading": "かんご (驯)",
        "meaning": "驯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1153",
    "level": "N1",
    "kanji": "骀",
    "onyomi": "カン (n1_1153)",
    "kunyomi": "ひと (n1_1153)",
    "meaningUz": "N1 Iyeroglifi #1153 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "骀語",
        "reading": "かんご (骀)",
        "meaning": "骀 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1154",
    "level": "N1",
    "kanji": "骑",
    "onyomi": "カン (n1_1154)",
    "kunyomi": "ひと (n1_1154)",
    "meaningUz": "N1 Iyeroglifi #1154 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "骑語",
        "reading": "かんご (骑)",
        "meaning": "骑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1155",
    "level": "N1",
    "kanji": "骢",
    "onyomi": "カン (n1_1155)",
    "kunyomi": "ひと (n1_1155)",
    "meaningUz": "N1 Iyeroglifi #1155 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "骢語",
        "reading": "かんご (骢)",
        "meaning": "骢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1156",
    "level": "N1",
    "kanji": "骳",
    "onyomi": "カン (n1_1156)",
    "kunyomi": "ひと (n1_1156)",
    "meaningUz": "N1 Iyeroglifi #1156 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "骳語",
        "reading": "かんご (骳)",
        "meaning": "骳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1157",
    "level": "N1",
    "kanji": "髄",
    "onyomi": "カン (n1_1157)",
    "kunyomi": "ひと (n1_1157)",
    "meaningUz": "N1 Iyeroglifi #1157 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "髄語",
        "reading": "かんご (髄)",
        "meaning": "髄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1158",
    "level": "N1",
    "kanji": "髕",
    "onyomi": "カン (n1_1158)",
    "kunyomi": "ひと (n1_1158)",
    "meaningUz": "N1 Iyeroglifi #1158 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "髕語",
        "reading": "かんご (髕)",
        "meaning": "髕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1159",
    "level": "N1",
    "kanji": "髦",
    "onyomi": "カン (n1_1159)",
    "kunyomi": "ひと (n1_1159)",
    "meaningUz": "N1 Iyeroglifi #1159 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "髦語",
        "reading": "かんご (髦)",
        "meaning": "髦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1160",
    "level": "N1",
    "kanji": "髷",
    "onyomi": "カン (n1_1160)",
    "kunyomi": "ひと (n1_1160)",
    "meaningUz": "N1 Iyeroglifi #1160 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "髷語",
        "reading": "かんご (髷)",
        "meaning": "髷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1161",
    "level": "N1",
    "kanji": "鬈",
    "onyomi": "カン (n1_1161)",
    "kunyomi": "ひと (n1_1161)",
    "meaningUz": "N1 Iyeroglifi #1161 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "鬈語",
        "reading": "かんご (鬈)",
        "meaning": "鬈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1162",
    "level": "N1",
    "kanji": "鬙",
    "onyomi": "カン (n1_1162)",
    "kunyomi": "ひと (n1_1162)",
    "meaningUz": "N1 Iyeroglifi #1162 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "鬙語",
        "reading": "かんご (鬙)",
        "meaning": "鬙 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1163",
    "level": "N1",
    "kanji": "鬪",
    "onyomi": "カン (n1_1163)",
    "kunyomi": "ひと (n1_1163)",
    "meaningUz": "N1 Iyeroglifi #1163 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "鬪語",
        "reading": "かんご (鬪)",
        "meaning": "鬪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1164",
    "level": "N1",
    "kanji": "鬻",
    "onyomi": "カン (n1_1164)",
    "kunyomi": "ひと (n1_1164)",
    "meaningUz": "N1 Iyeroglifi #1164 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鬻語",
        "reading": "かんご (鬻)",
        "meaning": "鬻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1165",
    "level": "N1",
    "kanji": "魌",
    "onyomi": "カン (n1_1165)",
    "kunyomi": "ひと (n1_1165)",
    "meaningUz": "N1 Iyeroglifi #1165 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "魌語",
        "reading": "かんご (魌)",
        "meaning": "魌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1166",
    "level": "N1",
    "kanji": "魝",
    "onyomi": "カン (n1_1166)",
    "kunyomi": "ひと (n1_1166)",
    "meaningUz": "N1 Iyeroglifi #1166 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "魝語",
        "reading": "かんご (魝)",
        "meaning": "魝 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1167",
    "level": "N1",
    "kanji": "魮",
    "onyomi": "カン (n1_1167)",
    "kunyomi": "ひと (n1_1167)",
    "meaningUz": "N1 Iyeroglifi #1167 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "魮語",
        "reading": "かんご (魮)",
        "meaning": "魮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1168",
    "level": "N1",
    "kanji": "魿",
    "onyomi": "カン (n1_1168)",
    "kunyomi": "ひと (n1_1168)",
    "meaningUz": "N1 Iyeroglifi #1168 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "魿語",
        "reading": "かんご (魿)",
        "meaning": "魿 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1169",
    "level": "N1",
    "kanji": "鮐",
    "onyomi": "カン (n1_1169)",
    "kunyomi": "ひと (n1_1169)",
    "meaningUz": "N1 Iyeroglifi #1169 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "鮐語",
        "reading": "かんご (鮐)",
        "meaning": "鮐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1170",
    "level": "N1",
    "kanji": "鮡",
    "onyomi": "カン (n1_1170)",
    "kunyomi": "ひと (n1_1170)",
    "meaningUz": "N1 Iyeroglifi #1170 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "鮡語",
        "reading": "かんご (鮡)",
        "meaning": "鮡 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1171",
    "level": "N1",
    "kanji": "鮲",
    "onyomi": "カン (n1_1171)",
    "kunyomi": "ひと (n1_1171)",
    "meaningUz": "N1 Iyeroglifi #1171 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "鮲語",
        "reading": "かんご (鮲)",
        "meaning": "鮲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1172",
    "level": "N1",
    "kanji": "鯃",
    "onyomi": "カン (n1_1172)",
    "kunyomi": "ひと (n1_1172)",
    "meaningUz": "N1 Iyeroglifi #1172 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "鯃語",
        "reading": "かんご (鯃)",
        "meaning": "鯃 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1173",
    "level": "N1",
    "kanji": "鯔",
    "onyomi": "カン (n1_1173)",
    "kunyomi": "ひと (n1_1173)",
    "meaningUz": "N1 Iyeroglifi #1173 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "鯔語",
        "reading": "かんご (鯔)",
        "meaning": "鯔 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1174",
    "level": "N1",
    "kanji": "鯥",
    "onyomi": "カン (n1_1174)",
    "kunyomi": "ひと (n1_1174)",
    "meaningUz": "N1 Iyeroglifi #1174 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "鯥語",
        "reading": "かんご (鯥)",
        "meaning": "鯥 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1175",
    "level": "N1",
    "kanji": "鯶",
    "onyomi": "カン (n1_1175)",
    "kunyomi": "ひと (n1_1175)",
    "meaningUz": "N1 Iyeroglifi #1175 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鯶語",
        "reading": "かんご (鯶)",
        "meaning": "鯶 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1176",
    "level": "N1",
    "kanji": "鰇",
    "onyomi": "カン (n1_1176)",
    "kunyomi": "ひと (n1_1176)",
    "meaningUz": "N1 Iyeroglifi #1176 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "鰇語",
        "reading": "かんご (鰇)",
        "meaning": "鰇 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1177",
    "level": "N1",
    "kanji": "鰘",
    "onyomi": "カン (n1_1177)",
    "kunyomi": "ひと (n1_1177)",
    "meaningUz": "N1 Iyeroglifi #1177 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "鰘語",
        "reading": "かんご (鰘)",
        "meaning": "鰘 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1178",
    "level": "N1",
    "kanji": "鰩",
    "onyomi": "カン (n1_1178)",
    "kunyomi": "ひと (n1_1178)",
    "meaningUz": "N1 Iyeroglifi #1178 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "鰩語",
        "reading": "かんご (鰩)",
        "meaning": "鰩 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1179",
    "level": "N1",
    "kanji": "鰺",
    "onyomi": "カン (n1_1179)",
    "kunyomi": "ひと (n1_1179)",
    "meaningUz": "N1 Iyeroglifi #1179 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鰺語",
        "reading": "かんご (鰺)",
        "meaning": "鰺 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1180",
    "level": "N1",
    "kanji": "鱋",
    "onyomi": "カン (n1_1180)",
    "kunyomi": "ひと (n1_1180)",
    "meaningUz": "N1 Iyeroglifi #1180 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "鱋語",
        "reading": "かんご (鱋)",
        "meaning": "鱋 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1181",
    "level": "N1",
    "kanji": "鱜",
    "onyomi": "カン (n1_1181)",
    "kunyomi": "ひと (n1_1181)",
    "meaningUz": "N1 Iyeroglifi #1181 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "鱜語",
        "reading": "かんご (鱜)",
        "meaning": "鱜 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1182",
    "level": "N1",
    "kanji": "鱭",
    "onyomi": "カン (n1_1182)",
    "kunyomi": "ひと (n1_1182)",
    "meaningUz": "N1 Iyeroglifi #1182 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "鱭語",
        "reading": "かんご (鱭)",
        "meaning": "鱭 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1183",
    "level": "N1",
    "kanji": "鱾",
    "onyomi": "カン (n1_1183)",
    "kunyomi": "ひと (n1_1183)",
    "meaningUz": "N1 Iyeroglifi #1183 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "鱾語",
        "reading": "かんご (鱾)",
        "meaning": "鱾 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1184",
    "level": "N1",
    "kanji": "鲏",
    "onyomi": "カン (n1_1184)",
    "kunyomi": "ひと (n1_1184)",
    "meaningUz": "N1 Iyeroglifi #1184 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "鲏語",
        "reading": "かんご (鲏)",
        "meaning": "鲏 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1185",
    "level": "N1",
    "kanji": "鲠",
    "onyomi": "カン (n1_1185)",
    "kunyomi": "ひと (n1_1185)",
    "meaningUz": "N1 Iyeroglifi #1185 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "鲠語",
        "reading": "かんご (鲠)",
        "meaning": "鲠 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1186",
    "level": "N1",
    "kanji": "鲱",
    "onyomi": "カン (n1_1186)",
    "kunyomi": "ひと (n1_1186)",
    "meaningUz": "N1 Iyeroglifi #1186 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "鲱語",
        "reading": "かんご (鲱)",
        "meaning": "鲱 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1187",
    "level": "N1",
    "kanji": "鳂",
    "onyomi": "カン (n1_1187)",
    "kunyomi": "ひと (n1_1187)",
    "meaningUz": "N1 Iyeroglifi #1187 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "鳂語",
        "reading": "かんご (鳂)",
        "meaning": "鳂 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1188",
    "level": "N1",
    "kanji": "鳓",
    "onyomi": "カン (n1_1188)",
    "kunyomi": "ひと (n1_1188)",
    "meaningUz": "N1 Iyeroglifi #1188 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "鳓語",
        "reading": "かんご (鳓)",
        "meaning": "鳓 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1189",
    "level": "N1",
    "kanji": "鳤",
    "onyomi": "カン (n1_1189)",
    "kunyomi": "ひと (n1_1189)",
    "meaningUz": "N1 Iyeroglifi #1189 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "鳤語",
        "reading": "かんご (鳤)",
        "meaning": "鳤 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1190",
    "level": "N1",
    "kanji": "鳵",
    "onyomi": "カン (n1_1190)",
    "kunyomi": "ひと (n1_1190)",
    "meaningUz": "N1 Iyeroglifi #1190 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鳵語",
        "reading": "かんご (鳵)",
        "meaning": "鳵 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1191",
    "level": "N1",
    "kanji": "鴆",
    "onyomi": "カン (n1_1191)",
    "kunyomi": "ひと (n1_1191)",
    "meaningUz": "N1 Iyeroglifi #1191 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "鴆語",
        "reading": "かんご (鴆)",
        "meaning": "鴆 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1192",
    "level": "N1",
    "kanji": "鴗",
    "onyomi": "カン (n1_1192)",
    "kunyomi": "ひと (n1_1192)",
    "meaningUz": "N1 Iyeroglifi #1192 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "鴗語",
        "reading": "かんご (鴗)",
        "meaning": "鴗 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1193",
    "level": "N1",
    "kanji": "鴨",
    "onyomi": "カン (n1_1193)",
    "kunyomi": "ひと (n1_1193)",
    "meaningUz": "N1 Iyeroglifi #1193 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "鴨語",
        "reading": "かんご (鴨)",
        "meaning": "鴨 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1194",
    "level": "N1",
    "kanji": "鴹",
    "onyomi": "カン (n1_1194)",
    "kunyomi": "ひと (n1_1194)",
    "meaningUz": "N1 Iyeroglifi #1194 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "鴹語",
        "reading": "かんご (鴹)",
        "meaning": "鴹 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1195",
    "level": "N1",
    "kanji": "鵊",
    "onyomi": "カン (n1_1195)",
    "kunyomi": "ひと (n1_1195)",
    "meaningUz": "N1 Iyeroglifi #1195 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "鵊語",
        "reading": "かんご (鵊)",
        "meaning": "鵊 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1196",
    "level": "N1",
    "kanji": "鵛",
    "onyomi": "カン (n1_1196)",
    "kunyomi": "ひと (n1_1196)",
    "meaningUz": "N1 Iyeroglifi #1196 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "鵛語",
        "reading": "かんご (鵛)",
        "meaning": "鵛 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1197",
    "level": "N1",
    "kanji": "鵬",
    "onyomi": "カン (n1_1197)",
    "kunyomi": "ひと (n1_1197)",
    "meaningUz": "N1 Iyeroglifi #1197 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "鵬語",
        "reading": "かんご (鵬)",
        "meaning": "鵬 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1198",
    "level": "N1",
    "kanji": "鵽",
    "onyomi": "カン (n1_1198)",
    "kunyomi": "ひと (n1_1198)",
    "meaningUz": "N1 Iyeroglifi #1198 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "鵽語",
        "reading": "かんご (鵽)",
        "meaning": "鵽 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1199",
    "level": "N1",
    "kanji": "鶎",
    "onyomi": "カン (n1_1199)",
    "kunyomi": "ひと (n1_1199)",
    "meaningUz": "N1 Iyeroglifi #1199 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "鶎語",
        "reading": "かんご (鶎)",
        "meaning": "鶎 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1200",
    "level": "N1",
    "kanji": "鶟",
    "onyomi": "カン (n1_1200)",
    "kunyomi": "ひと (n1_1200)",
    "meaningUz": "N1 Iyeroglifi #1200 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "鶟語",
        "reading": "かんご (鶟)",
        "meaning": "鶟 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1201",
    "level": "N1",
    "kanji": "鶰",
    "onyomi": "カン (n1_1201)",
    "kunyomi": "ひと (n1_1201)",
    "meaningUz": "N1 Iyeroglifi #1201 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "鶰語",
        "reading": "かんご (鶰)",
        "meaning": "鶰 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1202",
    "level": "N1",
    "kanji": "鷁",
    "onyomi": "カン (n1_1202)",
    "kunyomi": "ひと (n1_1202)",
    "meaningUz": "N1 Iyeroglifi #1202 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "鷁語",
        "reading": "かんご (鷁)",
        "meaning": "鷁 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1203",
    "level": "N1",
    "kanji": "鷒",
    "onyomi": "カン (n1_1203)",
    "kunyomi": "ひと (n1_1203)",
    "meaningUz": "N1 Iyeroglifi #1203 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "鷒語",
        "reading": "かんご (鷒)",
        "meaning": "鷒 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1204",
    "level": "N1",
    "kanji": "鷣",
    "onyomi": "カン (n1_1204)",
    "kunyomi": "ひと (n1_1204)",
    "meaningUz": "N1 Iyeroglifi #1204 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "鷣語",
        "reading": "かんご (鷣)",
        "meaning": "鷣 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1205",
    "level": "N1",
    "kanji": "鷴",
    "onyomi": "カン (n1_1205)",
    "kunyomi": "ひと (n1_1205)",
    "meaningUz": "N1 Iyeroglifi #1205 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "鷴語",
        "reading": "かんご (鷴)",
        "meaning": "鷴 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1206",
    "level": "N1",
    "kanji": "丅",
    "onyomi": "カン (n1_1206)",
    "kunyomi": "ひと (n1_1206)",
    "meaningUz": "N1 Iyeroglifi #1206 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "丅語",
        "reading": "かんご (丅)",
        "meaning": "丅 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1207",
    "level": "N1",
    "kanji": "世",
    "onyomi": "カン (n1_1207)",
    "kunyomi": "ひと (n1_1207)",
    "meaningUz": "N1 Iyeroglifi #1207 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "世語",
        "reading": "かんご (世)",
        "meaning": "世 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1208",
    "level": "N1",
    "kanji": "丧",
    "onyomi": "カン (n1_1208)",
    "kunyomi": "ひと (n1_1208)",
    "meaningUz": "N1 Iyeroglifi #1208 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "丧語",
        "reading": "かんご (丧)",
        "meaning": "丧 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1209",
    "level": "N1",
    "kanji": "丸",
    "onyomi": "カン (n1_1209)",
    "kunyomi": "ひと (n1_1209)",
    "meaningUz": "N1 Iyeroglifi #1209 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "丸語",
        "reading": "かんご (丸)",
        "meaning": "丸 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1210",
    "level": "N1",
    "kanji": "义",
    "onyomi": "カン (n1_1210)",
    "kunyomi": "ひと (n1_1210)",
    "meaningUz": "N1 Iyeroglifi #1210 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "义語",
        "reading": "かんご (义)",
        "meaning": "义 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1211",
    "level": "N1",
    "kanji": "乚",
    "onyomi": "カン (n1_1211)",
    "kunyomi": "ひと (n1_1211)",
    "meaningUz": "N1 Iyeroglifi #1211 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "乚語",
        "reading": "かんご (乚)",
        "meaning": "乚 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1212",
    "level": "N1",
    "kanji": "乫",
    "onyomi": "カン (n1_1212)",
    "kunyomi": "ひと (n1_1212)",
    "meaningUz": "N1 Iyeroglifi #1212 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "乫語",
        "reading": "かんご (乫)",
        "meaning": "乫 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1213",
    "level": "N1",
    "kanji": "乼",
    "onyomi": "カン (n1_1213)",
    "kunyomi": "ひと (n1_1213)",
    "meaningUz": "N1 Iyeroglifi #1213 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "乼語",
        "reading": "かんご (乼)",
        "meaning": "乼 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1214",
    "level": "N1",
    "kanji": "亍",
    "onyomi": "カン (n1_1214)",
    "kunyomi": "ひと (n1_1214)",
    "meaningUz": "N1 Iyeroglifi #1214 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "亍語",
        "reading": "かんご (亍)",
        "meaning": "亍 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1215",
    "level": "N1",
    "kanji": "亞",
    "onyomi": "カン (n1_1215)",
    "kunyomi": "ひと (n1_1215)",
    "meaningUz": "N1 Iyeroglifi #1215 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "亞語",
        "reading": "かんご (亞)",
        "meaning": "亞 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1216",
    "level": "N1",
    "kanji": "亯",
    "onyomi": "カン (n1_1216)",
    "kunyomi": "ひと (n1_1216)",
    "meaningUz": "N1 Iyeroglifi #1216 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "亯語",
        "reading": "かんご (亯)",
        "meaning": "亯 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1217",
    "level": "N1",
    "kanji": "什",
    "onyomi": "カン (n1_1217)",
    "kunyomi": "ひと (n1_1217)",
    "meaningUz": "N1 Iyeroglifi #1217 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "什語",
        "reading": "かんご (什)",
        "meaning": "什 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1218",
    "level": "N1",
    "kanji": "仑",
    "onyomi": "カン (n1_1218)",
    "kunyomi": "ひと (n1_1218)",
    "meaningUz": "N1 Iyeroglifi #1218 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "仑語",
        "reading": "かんご (仑)",
        "meaning": "仑 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1219",
    "level": "N1",
    "kanji": "仢",
    "onyomi": "カン (n1_1219)",
    "kunyomi": "ひと (n1_1219)",
    "meaningUz": "N1 Iyeroglifi #1219 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "仢語",
        "reading": "かんご (仢)",
        "meaning": "仢 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1220",
    "level": "N1",
    "kanji": "仳",
    "onyomi": "カン (n1_1220)",
    "kunyomi": "ひと (n1_1220)",
    "meaningUz": "N1 Iyeroglifi #1220 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "仳語",
        "reading": "かんご (仳)",
        "meaning": "仳 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1221",
    "level": "N1",
    "kanji": "伄",
    "onyomi": "カン (n1_1221)",
    "kunyomi": "ひと (n1_1221)",
    "meaningUz": "N1 Iyeroglifi #1221 — Ma'no va qo'llanishi",
    "strokeCount": 8,
    "examples": [
      {
        "word": "伄語",
        "reading": "かんご (伄)",
        "meaning": "伄 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1222",
    "level": "N1",
    "kanji": "伕",
    "onyomi": "カン (n1_1222)",
    "kunyomi": "ひと (n1_1222)",
    "meaningUz": "N1 Iyeroglifi #1222 — Ma'no va qo'llanishi",
    "strokeCount": 9,
    "examples": [
      {
        "word": "伕語",
        "reading": "かんご (伕)",
        "meaning": "伕 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1223",
    "level": "N1",
    "kanji": "伦",
    "onyomi": "カン (n1_1223)",
    "kunyomi": "ひと (n1_1223)",
    "meaningUz": "N1 Iyeroglifi #1223 — Ma'no va qo'llanishi",
    "strokeCount": 10,
    "examples": [
      {
        "word": "伦語",
        "reading": "かんご (伦)",
        "meaning": "伦 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1224",
    "level": "N1",
    "kanji": "伷",
    "onyomi": "カン (n1_1224)",
    "kunyomi": "ひと (n1_1224)",
    "meaningUz": "N1 Iyeroglifi #1224 — Ma'no va qo'llanishi",
    "strokeCount": 11,
    "examples": [
      {
        "word": "伷語",
        "reading": "かんご (伷)",
        "meaning": "伷 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1225",
    "level": "N1",
    "kanji": "佈",
    "onyomi": "カン (n1_1225)",
    "kunyomi": "ひと (n1_1225)",
    "meaningUz": "N1 Iyeroglifi #1225 — Ma'no va qo'llanishi",
    "strokeCount": 12,
    "examples": [
      {
        "word": "佈語",
        "reading": "かんご (佈)",
        "meaning": "佈 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1226",
    "level": "N1",
    "kanji": "余",
    "onyomi": "カン (n1_1226)",
    "kunyomi": "ひと (n1_1226)",
    "meaningUz": "N1 Iyeroglifi #1226 — Ma'no va qo'llanishi",
    "strokeCount": 13,
    "examples": [
      {
        "word": "余語",
        "reading": "かんご (余)",
        "meaning": "余 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1227",
    "level": "N1",
    "kanji": "佪",
    "onyomi": "カン (n1_1227)",
    "kunyomi": "ひと (n1_1227)",
    "meaningUz": "N1 Iyeroglifi #1227 — Ma'no va qo'llanishi",
    "strokeCount": 14,
    "examples": [
      {
        "word": "佪語",
        "reading": "かんご (佪)",
        "meaning": "佪 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1228",
    "level": "N1",
    "kanji": "佻",
    "onyomi": "カン (n1_1228)",
    "kunyomi": "ひと (n1_1228)",
    "meaningUz": "N1 Iyeroglifi #1228 — Ma'no va qo'llanishi",
    "strokeCount": 15,
    "examples": [
      {
        "word": "佻語",
        "reading": "かんご (佻)",
        "meaning": "佻 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1229",
    "level": "N1",
    "kanji": "侌",
    "onyomi": "カン (n1_1229)",
    "kunyomi": "ひと (n1_1229)",
    "meaningUz": "N1 Iyeroglifi #1229 — Ma'no va qo'llanishi",
    "strokeCount": 16,
    "examples": [
      {
        "word": "侌語",
        "reading": "かんご (侌)",
        "meaning": "侌 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1230",
    "level": "N1",
    "kanji": "依",
    "onyomi": "カン (n1_1230)",
    "kunyomi": "ひと (n1_1230)",
    "meaningUz": "N1 Iyeroglifi #1230 — Ma'no va qo'llanishi",
    "strokeCount": 17,
    "examples": [
      {
        "word": "依語",
        "reading": "かんご (依)",
        "meaning": "依 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1231",
    "level": "N1",
    "kanji": "侮",
    "onyomi": "カン (n1_1231)",
    "kunyomi": "ひと (n1_1231)",
    "meaningUz": "N1 Iyeroglifi #1231 — Ma'no va qo'llanishi",
    "strokeCount": 3,
    "examples": [
      {
        "word": "侮語",
        "reading": "かんご (侮)",
        "meaning": "侮 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1232",
    "level": "N1",
    "kanji": "便",
    "onyomi": "カン (n1_1232)",
    "kunyomi": "ひと (n1_1232)",
    "meaningUz": "N1 Iyeroglifi #1232 — Ma'no va qo'llanishi",
    "strokeCount": 4,
    "examples": [
      {
        "word": "便語",
        "reading": "かんご (便)",
        "meaning": "便 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1233",
    "level": "N1",
    "kanji": "俐",
    "onyomi": "カン (n1_1233)",
    "kunyomi": "ひと (n1_1233)",
    "meaningUz": "N1 Iyeroglifi #1233 — Ma'no va qo'llanishi",
    "strokeCount": 5,
    "examples": [
      {
        "word": "俐語",
        "reading": "かんご (俐)",
        "meaning": "俐 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1234",
    "level": "N1",
    "kanji": "信",
    "onyomi": "カン (n1_1234)",
    "kunyomi": "ひと (n1_1234)",
    "meaningUz": "N1 Iyeroglifi #1234 — Ma'no va qo'llanishi",
    "strokeCount": 6,
    "examples": [
      {
        "word": "信語",
        "reading": "かんご (信)",
        "meaning": "信 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  },
  {
    "id": "k_n1_1235",
    "level": "N1",
    "kanji": "俲",
    "onyomi": "カン (n1_1235)",
    "kunyomi": "ひと (n1_1235)",
    "meaningUz": "N1 Iyeroglifi #1235 — Ma'no va qo'llanishi",
    "strokeCount": 7,
    "examples": [
      {
        "word": "俲語",
        "reading": "かんご (俲)",
        "meaning": "俲 iyeroglifi ishtirokidagi lug'at iborasi"
      }
    ]
  }
];

export const JLPT_KANJI_DATABASE: JlptKanjiItem[] = rawKanjiData as unknown as JlptKanjiItem[];
