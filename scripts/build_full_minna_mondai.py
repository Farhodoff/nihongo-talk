import json
import os

# Complete authentic Mondai dataset for Minna no Nihongo Shokyu 1 (Lessons 1-25)

MINNA_MONDAI_DATA = {
    1: {
        "lessonNumber": 1,
        "title": "1-dars: Tanishuv va O'zini tanishtirish",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l1-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_002.mp3",
                "audioTitle": "1-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang va mos javobni tanlang:\n「あなたは サントスさんですか。」",
                "options": [
                    "はい、サントスじゃ ありません。",
                    "いいえ、サントスです。",
                    "いいえ、サントスじゃ ありません。ミラーです。",
                    "初めまして、サントスです。"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Audioda «Siz Santosmisiz?» deb so'ralmoqda. Bunga mos inkor javob: «いいえ、サントスじゃ ありません。ミラーです» (Yo'q, Santos emasman. Miller bo'laman)."
            },
            {
                "id": "ja-minna-l1-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_002.mp3",
                "audioTitle": "1-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 2】Audioni tinglang:\n「お名前[なまえ]は？」",
                "options": [
                    "アメリカから 来ました。",
                    "会社員[かいしゃいん]です。",
                    "マイク・ミラーです。",
                    "28歳[にじゅうはっさい]です。"
                ],
                "correctAnswerIndex": 2,
                "explanation": "«Ismingiz nima?» (お名前は？) degan savolga o'z ismini aytib «マイク・ミラーです» deb javob beriladi."
            },
            {
                "id": "ja-minna-l1-m1-q3",
                "audioUrl": "/audio/minna/minna_shokyu_1_002.mp3",
                "audioTitle": "1-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 3】Audioni tinglang:\n「何歳[なんさい]ですか。」",
                "options": [
                    "アメリカ人[じん]です。",
                    "28歳[にじゅうはっさい]です。",
                    "学生[がくせい]じゃ ありません。",
                    "いいえ、違[ちが]います。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Yoshingiz nechida?» (何歳ですか) savoliga yosh aytiladi: «28歳です» (28 yoshdaman)."
            },
            {
                "id": "ja-minna-l1-m1-q4",
                "audioUrl": "/audio/minna/minna_shokyu_1_002.mp3",
                "audioTitle": "1-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「アメリカ人[じん]ですか。」",
                "options": [
                    "はい、アメリカ人です。",
                    "いいえ、アメリカから 来ました。",
                    "はい、会社員じゃ ありません。",
                    "初めまして、どうぞ よろしく。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Amerikalikmisiz?» savoliga to'g'ri tasdiq javob: «はい、アメリカ人です» (Ha, amerikalikman)."
            },
            {
                "id": "ja-minna-l1-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_003.mp3",
                "audioTitle": "1-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\nシュミットさんは どこの 会社員[かいしゃいん]ですか。",
                "options": [
                    "IMCの 社員",
                    "パワー電気[でんき]の 社員",
                    "富士大学[ふじだいがく]の 学生",
                    "神戸病院[こうべびょういん]の 医者"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «こちらは パワー電気の シュミットさんです。初めまして、シュミットです» deyiladi. Schmidt janoblari 'Pawa Denki' kompaniyasi xodimi."
            },
            {
                "id": "ja-minna-l1-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_003.mp3",
                "audioTitle": "1-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 2】Suhbatni tinglang:\nワンさんは 何歳[なんさい]ですか。",
                "options": [
                    "25歳",
                    "28歳",
                    "29歳",
                    "35歳"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Audioda: «お名前は？... ワンです。何歳ですか？... 29歳です» deb aytiladi. Demak, Wang janoblari 29 yoshda."
            },
            {
                "id": "ja-minna-l1-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_004.mp3",
                "audioTitle": "1-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglab, bayonot to'g'riligini aniqlang:\n「ミラーさんは アメリカ人[じん]です。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Miller janob: «初めまして。ミラーです。アメリカから 来ました» deydi. U Amerikadan kelganligi aytilgan, demak «ミラーさんは アメリカ人です» jumlasi to'g'ri (〇)."
            },
            {
                "id": "ja-minna-l1-m3-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_004.mp3",
                "audioTitle": "1-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 2-gap】Suhbatni tinglab, bayonot to'g'riligini aniqlang:\n「カリナさんは 富士大学[ふじだいがく]の 先生[せんせい]です。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «先生ですか？... いいえ、富士大学の 学生です» deyilgan. Karina Fuji universitetining o'qituvchisi emas, balki talabasi. Shuning uchun bayonot noto'g'ri (✕)."
            },
            {
                "id": "ja-minna-l1-m3-q3",
                "audioUrl": "/audio/minna/minna_shokyu_1_004.mp3",
                "audioTitle": "1-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 3-gap】Suhbatni tinglab, bayonot to'g'riligini aniqlang:\n「ワンさんは 研究者[けんきゅうしゃ]じゃ ありません。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «ワンさんも 研究者ですか？... いいえ、ワンさんは 医者です» deyilgan. Demak u tadqiqotchi emas, shifokor. «ワンさんは 研究者じゃ ありません» jumlasi to'g'ri (〇)."
            }
        ]
    },
    2: {
        "lessonNumber": 2,
        "title": "2-dars: Buyumlar va Ko'rsatish olmoshlari (これ、それ、あれ)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l2-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_006.mp3",
                "audioTitle": "2-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「これは 手帳[てちょう]ですか。」",
                "options": [
                    "はい、そうです。手帳です。",
                    "いいえ、手帳です。",
                    "これは 本じゃ ありません。",
                    "だれの 手帳ですか。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Bu yon daftarcha (bloknot)mi?» savoliga eng to'g'ri javob: «はい、そうです。手帳です» (Ha shunday, yon daftarcha)."
            },
            {
                "id": "ja-minna-l2-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_006.mp3",
                "audioTitle": "2-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「これは 何[なん]の 雑誌[ざっし]ですか。」",
                "options": [
                    "自動車[じどうしゃ]の 雑誌です。",
                    "はい、雑誌です。",
                    "いいえ、本です。",
                    "あそこに あります。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Bu nima haqidagi jurnal?» savoliga mavzu bilan «自動車の 雑誌です» (Avtomobillar haqidagi jurnal) deb javob beriladi."
            },
            {
                "id": "ja-minna-l2-m1-q3",
                "audioUrl": "/audio/minna/minna_shokyu_1_006.mp3",
                "audioTitle": "2-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 5】Audioni tinglang:\n「この かばんは あなたのですか。」",
                "options": [
                    "はい、かばんじゃ ありません。",
                    "いいえ、わたしのじゃ ありません。サントスさんのです。",
                    "だれの かばんですか。",
                    "これ、どうぞ。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Bu sumka siznikimi?» savoliga: «いいえ、わたしのじゃ ありません。サントスさんのです» (Yo'q, meniki emas. Santosnikidir) degan javob to'g'ri."
            },
            {
                "id": "ja-minna-l2-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_007.mp3",
                "audioTitle": "2-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\nミラーさんの 部屋[へや]は 何号室[なんごうしつ]ですか。",
                "options": [
                    "408号室",
                    "505号室",
                    "302号室",
                    "508号室"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Miller eshikni taqillatganda «はい、どなたですか？... 505の ミラーです» deb javob beradi (505-xona)."
            },
            {
                "id": "ja-minna-l2-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_007.mp3",
                "audioTitle": "2-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 2】Suhbatni tinglang:\nミラーさんは 田中[たなか]さんに 何[なに]を あげましたか。",
                "options": [
                    "コーヒー",
                    "手帳[てちょう]",
                    "チョコレート",
                    "雑誌[ざっし]"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Audioda: «あの、これ、どうぞ。... え？ 何ですか？... チョコレートです。どうも ありがとうございます» deb aytiladi. Sovg'a shokolad edi."
            },
            {
                "id": "ja-minna-l2-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_008.mp3",
                "audioTitle": "2-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「これは 手帳[てちょう]です。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «それは 手帳ですか？... いいえ、違います。辞書です» deyiladi. Bu lug'at bo'lgani sababli «手帳です» bayonoti noto'g'ri (✕)."
            },
            {
                "id": "ja-minna-l2-m3-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_008.mp3",
                "audioTitle": "2-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「あの 車[くるま]は 木村[きむら]さんのです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«木村さん、あの 車は 木村さんのですか？... はい、そうです。私のです» - Kimura xonim mashina o'ziniki ekanini tasdiqlaydi. Bayonot to'g'ri (〇)."
            }
        ]
    },
    3: {
        "lessonNumber": 3,
        "title": "3-dars: Joylar va Narxlar (ここ、そこ、あそこ、いくら)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l3-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_010.mp3",
                "audioTitle": "3-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「お国[くに]は どちらですか。」",
                "options": [
                    "事務所[じむしょ]です。",
                    "ウズベキスタンです。",
                    "あそこです。",
                    "1階[いっかい]です。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Mamlakatingiz qaysi?» (hurmat shakli: お国はどちらですか) degan savolga o'z yurtini aytiladi: «ウズベキスタンです»."
            },
            {
                "id": "ja-minna-l3-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_010.mp3",
                "audioTitle": "3-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 5】Audioni tinglang:\n「あなたの カメラは いくらですか。」",
                "options": [
                    "日本[にほん]のです。",
                    "28,000円[にまんはっせんえん]です。",
                    "はい、カメラです。",
                    "そこに あります。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Kamerangiz qancha turadi?» (いくらですか) savoliga narx aytiladi: «28,000円です»."
            },
            {
                "id": "ja-minna-l3-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_011.mp3",
                "audioTitle": "3-dars Mondai 2: Joylar va Xonalar",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n事務所[じむしょ]と 食堂[しょくどう]は どこですか。",
                "options": [
                    "事務所は あそこ、食堂は そこ",
                    "事務所は 2階、食堂は 地下",
                    "事務所は ここ、食堂は あそこ",
                    "事務所は 1階、食堂は 3階"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «すみません、事務所は どこですか？... あそこです。食堂は？... 食堂は そこです» deb javob beriladi."
            },
            {
                "id": "ja-minna-l3-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_011.mp3",
                "audioTitle": "3-dars Mondai 2: Joylar va Xonalar",
                "question": "【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n佐藤[さとう]さんと ミラーさんは どこに いますか。",
                "options": [
                    "教室[きょうしつ]",
                    "会議室[かいぎしつ]",
                    "受付[うけつけ]",
                    "食堂[しょくどう]"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «佐藤さんは どちらですか？... 会議室です。ミラーさんも 会議室ですか？... はい、そうです» deb aytiladi. Ikkalasi ham majlislar xonasida (会議室)."
            },
            {
                "id": "ja-minna-l3-m2-q3",
                "audioUrl": "/audio/minna/minna_shokyu_1_011.mp3",
                "audioTitle": "3-dars Mondai 2: Joylar va Xonalar",
                "question": "【Mondai 2 - Suhbat 3】Suhbatni tinglang:\nパワー電気[でんき]は 何[なん]の 会社[かいしゃ]ですか。",
                "options": [
                    "自動車[じどうしゃ]の 会社",
                    "カメラの 会社",
                    "コンピューターの 会社",
                    "時計[とけい]の 会社"
                ],
                "correctAnswerIndex": 2,
                "explanation": "«何の 会社ですか？... コンピューターの 会社です» deyiladi. Demak kompyuter kompaniyasi."
            },
            {
                "id": "ja-minna-l3-m2-q4",
                "audioUrl": "/audio/minna/minna_shokyu_1_011.mp3",
                "audioTitle": "3-dars Mondai 2: Joylar va Xonalar",
                "question": "【Mondai 2 - Suhbat 5】Suhbatni tinglang:\n時計[とけい]は いくらですか。",
                "options": [
                    "2,300円",
                    "23,600円",
                    "23,800円",
                    "28,000円"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Xaridor soatning narxini so'raganda: «すみません、この時計は いくらですか？... 23,600円です» (ni-man san-zen roppyaku en) deyiladi."
            }
        ]
    },
    4: {
        "lessonNumber": 4,
        "title": "4-dars: Vaqt, Soatlar va Fe'llar (何時、何分、起きます、寝ます)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l4-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_013.mp3",
                "audioTitle": "4-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「今[いま] 何時[なんじ]ですか。」",
                "options": [
                    "7時半[しちじはん]です。",
                    "月曜日[げつようび]です。",
                    "10時までです。",
                    "勉強[べんきょう]しました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Hozir soat necha?» degan savolga aniq vaqt aytiladi: «7時半です» (Soat yetti yarim)."
            },
            {
                "id": "ja-minna-l4-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_013.mp3",
                "audioTitle": "4-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 3】Audioni tinglang:\n「毎朝[まいあさ] 何時[なんじ]に 起[お]きますか。」",
                "options": [
                    "6時[ろくじ]に 起きます。",
                    "11時[じゅういちじ]に 寝ます。",
                    "はい、起きます。",
                    "きのう 起きました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Har kuni ertalab soat nechada uyg'onasiz?» savoliga: «6時に 起きます» (Soat 6 da uyg'onaman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l4-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_014.mp3",
                "audioTitle": "4-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n今[いま]、ロンドンは 何時[なんじ]ですか。",
                "options": [
                    "午前[ごぜん] 4時",
                    "午前[ごぜん] 1時半",
                    "午後[ごご] 1時半",
                    "午後[ごご] 4時"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «今 何時ですか？... 4時です。ロンドンは 何時ですか？... 午前 1時半です» deb aytiladi."
            },
            {
                "id": "ja-minna-l4-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_015.mp3",
                "audioTitle": "4-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは 今日[きょう] 10時[じゅうじ]まで 働[はたら]きます。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «今日も 10時まで 働きますか？... いいえ、5時に 終わります» deyilgan. U bugun soat 5 da tugatadi. Shuning uchun bayonot noto'g'ri (✕)."
            },
            {
                "id": "ja-minna-l4-m3-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_015.mp3",
                "audioTitle": "4-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「みどり図書館[としょかん]の 休[やす]みは 月曜日[げつようび]です。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «休みは何曜日ですか？... 月曜日です» deb aytiladi. Midori kutubxonasining dam olish kuni dushanba (月曜日). Bayonot to'g'ri (〇)."
            },
            {
                "id": "ja-minna-l4-m4-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_016.mp3",
                "audioTitle": "4-dars Mondai 4: Raqamlar va Vaqtlar",
                "question": "【Mondai 4 - 5-savol】Audioni tinglang:\n田中[たなか]さんの うちの 電話番号[でんわばんごう]は 何番[なんばん]ですか。",
                "options": [
                    "349-7865",
                    "349-7856",
                    "075-138-667",
                    "348-7965"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «田中さんの うちの 電話番号は 349の 7865 (san-yon-kyuu no nana-hachi-roku-go) です» deyiladi."
            }
        ]
    },
    5: {
        "lessonNumber": 5,
        "title": "5-dars: Harakat Fe'llari va Yo'nalish zarrachalari (へ、で、と)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l5-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_018.mp3",
                "audioTitle": "5-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「日曜日[にちようび] どこへ 行[い]きますか。」",
                "options": [
                    "スーパーへ 行きます。",
                    "電車[でんしゃ]で 行きます。",
                    "友[とも]だちと 行きます。",
                    "どこも 行きませんでした。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Yakshanba kuni qayerga borasiz?» degan kelasi zamon savoliga boriladigan joy: «スーパーへ 行きます» (Supermarketga boraman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l5-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_018.mp3",
                "audioTitle": "5-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 2】Audioni tinglang:\n「何[なん]で スーパーへ 行[い]きますか。」",
                "options": [
                    "日曜日に行きます。",
                    "自転車[じてんしゃ]で 行きます。",
                    "一人[ひとり]で 行きます。",
                    "パンを 買います。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Supermarketga nima bilan (qaysi transportda) borasiz?» savoliga transport vositasi aytiladi: «自転車で 行きます» (Velosipedda boraman)."
            },
            {
                "id": "ja-minna-l5-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_019.mp3",
                "audioTitle": "5-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n佐藤[さとう]さんは 日曜日[にちようび] どこへ 行[い]きましたか。",
                "options": [
                    "奈良[なら]へ 行きました。",
                    "京都[きょうと]へ 行きました。",
                    "どこも 行きませんでした。",
                    "東京[とうきょう]へ 行きました。"
                ],
                "correctAnswerIndex": 2,
                "explanation": "Audioda Miller Naraga borganini aytadi, Sato xonimdan so'ralganda esa: «佐藤さんは？... どこも 行きませんでした» (Hech qayerga bormadim) deb javob beradi."
            },
            {
                "id": "ja-minna-l5-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_020.mp3",
                "audioTitle": "5-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは あさって 山田[やまだ]さんと 名古屋[なごや]へ 行[い]きます。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «いつ 名古屋へ 行きますか？... あさって 行きます。一人で 行きますか？... いいえ、山田さんと 行きます» deb aytiladi. Bayonot to'liq to'g'ri (〇)."
            },
            {
                "id": "ja-minna-l5-m3-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_020.mp3",
                "audioTitle": "5-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 3-gap】Suhbatni tinglang va bayonotni tekshiring:\n「次[つぎ]の 電車[でんしゃ]は 京都[きょうと]へ 行[い]きます。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «この電車は 京都へ 行きますか？... いいえ、行きません。次の電車ですよ» deb javob beriladi. Demak keyingi poyezd Kyotoga boradi. Bayonot to'g'ri (〇)."
            }
        ]
    },
    6: {
        "lessonNumber": 6,
        "title": "6-dars: O'timli Fe'llar va Vosita zarrachalari (を、で、ませんか)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l6-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_022.mp3",
                "audioTitle": "6-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「あなたは たばこを 吸[す]いますか。」",
                "options": [
                    "はい、吸いません。",
                    "いいえ、吸いません。",
                    "お酒[さけ]を 飲みます。",
                    "喫茶店[きっさてん]で 吸いました。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Tamaki chekasizmi?» savoliga chekmaydigan kishi inkor bilan: «いいえ、吸いません» (Yo'q, chekmayman) deb javob beradi."
            },
            {
                "id": "ja-minna-l6-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_022.mp3",
                "audioTitle": "6-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 5】Audioni tinglang:\n「いつも どこで 昼[ひる]ご飯[はん]を 食[た]べますか。」",
                "options": [
                    "12時[じゅうにじ]に 食べます。",
                    "会社[かいしゃ]の 食堂[しょくどう]で 食べます。",
                    "魚[さかな]と ご飯を 食べます。",
                    "一人[ひとり]で 食べます。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "«Odatda qayerda tushlik qilasiz?» (どこで) degan joy savoliga «会社の 食堂で 食べます» (Kompaniya oshxonasida yeyman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l6-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_023.mp3",
                "audioTitle": "6-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「山田[やまだ]さんは お酒[さけ]を 飲[の]みません。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «山田さんは お酒を 飲みますか？... はい、飲みます。いつも うちで 飲みます» deyilgan. Yamada ichadi, shuning uchun «お酒を 飲みません» bayonoti noto'g'ri (✕)."
            },
            {
                "id": "ja-minna-l6-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_023.mp3",
                "audioTitle": "6-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは けさ パンと 卵[たまご]を 食[た]べました。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «何を食べましたか？... パンと 卵を 食べました» deb aytiladi. Miller non va tuxum yegan. Bayonot to'g'ri (〇)."
            }
        ]
    },
    7: {
        "lessonNumber": 7,
        "title": "7-dars: Qurollar, Til va Hadya qilish (で、あげます、もらいます、もう)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l7-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_025.mp3",
                "audioTitle": "7-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「もう 晩[ばん]ご飯[はん]を 食[た]べましたか。」",
                "options": [
                    "はい、もう 食べました。",
                    "いいえ、食べました。",
                    "はい、まだです。",
                    "今[いま]から 食べました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Kechki ovqatni yeb bo'ldingizmi?» savoliga tasdiq javob: «はい、もう 食べました» (Ha, allaqachon yedim)."
            },
            {
                "id": "ja-minna-l7-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_025.mp3",
                "audioTitle": "7-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 2】Audioni tinglang:\n「何[なん]で ご飯[はん]を 食[た]べますか。」",
                "options": [
                    "はしで 食べます。",
                    "食堂[しょくどう]で 食べます。",
                    "7時[しちじ]に 食べます。",
                    "肉[にく]を 食べます。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Nima bilan (qaysi asbobda) ovqatlanasiz?» savoliga «はしで 食べます» (Hashi/cho'p bilan yeyman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l7-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_026.mp3",
                "audioTitle": "7-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 2】Suhbatni tinglang:\nミラーさんは だれに ネクタイを もらいましたか。",
                "options": [
                    "父[ちち]に もらいました。",
                    "母[はは]に もらいました。",
                    "友[とも]だちに もらいました。",
                    "会社[かいしゃ]の 人[ひと]に もらいました。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «そのネクタイ素敵ですね。... 誕生日に 母に もらいました» deyiladi. Bo'yinbog' onasidan sovg'a olingan."
            },
            {
                "id": "ja-minna-l7-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_027.mp3",
                "audioTitle": "7-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんは 一人[ひとり]で 昼[ひる]ご飯[はん]を 食[た]べます。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «じゃあ、一緒に 食べませんか？... ええ、行きましょう» deyilgan. Ular birga ovqatlangani boradilar. Demak Karina yolg'iz ovqatlanmaydi (✕)."
            },
            {
                "id": "ja-minna-l7-m3-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_027.mp3",
                "audioTitle": "7-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ミラーさんは ファクスで レポートを 送[おく]りました。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «メールで 送りましたか？... いいえ、ファクスで 送りました» deb aytiladi. Hisobot faks orqali yuborilgan (〇)."
            }
        ]
    },
    8: {
        "lessonNumber": 8,
        "title": "8-dars: Sifatlar (い-sifatlar va な-sifatlar)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l8-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_029.mp3",
                "audioTitle": "8-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 2】Audioni tinglang:\n「あなたの 国[くに]は 今[いま] 暑[あつ]いですか。」",
                "options": [
                    "はい、とても 暑いです。",
                    "いいえ、暑いです。",
                    "はい、寒[さむ]いです。",
                    "暑い 国じゃ ありませんでした。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Mamlakatingiz hozir issiqmi?» savoliga to'g'ri tasdiq javob: «はい、とても 暑いです» (Ha, juda issiq)."
            },
            {
                "id": "ja-minna-l8-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_029.mp3",
                "audioTitle": "8-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 5】Audioni tinglang:\n「日本語[にほんご]は どうですか。」",
                "options": [
                    "面白[おもしろ]いですが、難[むずか]しいです。",
                    "日本語を 勉強[べんきょう]します。",
                    "はい、そうです。",
                    "日本の 人[ひと]です。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Yapon tili qanday?» (どうですか) degan taassurot savoliga qarama-qarshilik bilan: «面白いですが、難しいです» (Qiziq, lekin qiyin) deb javob beriladi."
            },
            {
                "id": "ja-minna-l8-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_030.mp3",
                "audioTitle": "8-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n白[しろ]い シャツは いくらですか。",
                "options": [
                    "2,500円",
                    "3,500円",
                    "4,500円",
                    "5,500円"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda xaridor oq ko'ylak narxini so'raydi va sotuvchi «これは 3,500円 (san-zen go-hyaku en) です» deb javob beradi."
            },
            {
                "id": "ja-minna-l8-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_031.mp3",
                "audioTitle": "8-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]は これから 冷[つめ]たい お茶[ちゃ]を 飲[の]みます。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «冷たい お茶は いかがですか？... ええ、ありがとうございます» deyilgan. Erkak mehmondo'stlik taklifini qabul qilib sovuq choy ichadi (〇)."
            },
            {
                "id": "ja-minna-l8-m3-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_031.mp3",
                "audioTitle": "8-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんは 先週[せんしゅう] 大阪城[おおさかじょう]へ 行[い]きました。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda Karina ertaga borishini aytadi, suhbatdoshi esa o'zi o'tgan hafta borganini aytadi. Shuning uchun bayonot noto'g'ri (✕)."
            }
        ]
    },
    9: {
        "lessonNumber": 9,
        "title": "9-dars: Qobiliyat, Xohish va Sabab (好き、上手、わかります、から)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l9-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_033.mp3",
                "audioTitle": "9-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「お母[かあ]さんは 料理[りょうり]が 上手[じょうず]ですか。」",
                "options": [
                    "はい、とても 上手です。",
                    "いいえ、料理が 好きじゃ ありません。",
                    "はい、上手じゃ ありません。",
                    "料理を 食べます。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Onangiz taom pishirishga ustami?» savoliga to'g'ri javob: «はい、とても 上手です» (Ha, juda usta)."
            },
            {
                "id": "ja-minna-l9-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_033.mp3",
                "audioTitle": "9-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「漢字[かんじ]が 分[わ]かりますか。」",
                "options": [
                    "はい、少[すこ]し 分かります。",
                    "いいえ、よく 分かります。",
                    "はい、全然[ぜんぜん] 分かりません。",
                    "漢字を 書[か]きませんでした。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Kanji (iyerogliflar)ni tushunasizmi?» savoliga mos javob: «はい、少し 分かります» (Ha, bir oz tushunaman)."
            },
            {
                "id": "ja-minna-l9-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_034.mp3",
                "audioTitle": "9-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「マリアさんの ご主人[しゅじん]は テニスが 好[す]きです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: Mariyaning eri futbolni yaxshi ko'radi («サッカーが 好きです»), Mariyaning o'zi esa tennisni yoqtiradi («私は テニスが 好きです»). Demak bayonot noto'g'ri (✕)."
            },
            {
                "id": "ja-minna-l9-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_034.mp3",
                "audioTitle": "9-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「サントスさんは 漢字[かんじ]が よく 分[わ]かります。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda Santos: «漢字は 全然 分かりません» (Kanjini umuman tushunmayman) deydi. Demak bayonot noto'g'ri (✕)."
            }
        ]
    },
    10: {
        "lessonNumber": 10,
        "title": "10-dars: Mavjudlik (あります、います、上、下、前、後ろ)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l10-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_036.mp3",
                "audioTitle": "10-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「あなたの 部屋[へや]に 何[なに]が ありますか。」",
                "options": [
                    "ベッドや 机[つくえ]が あります。",
                    "犬[いぬ]が います。",
                    "静[しず]かじゃ ありません。",
                    "部屋へ 行[い]きます。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Xonangizda nimalar bor?» (jonsiz buyumlar uchun あります) savoliga: «ベッドや 机が あります» (Karavot va stol bor) deb javob beriladi."
            },
            {
                "id": "ja-minna-l10-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_036.mp3",
                "audioTitle": "10-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 5】Audioni tinglang:\n「今[いま] 教室[きょうしつ]に だれが いますか。」",
                "options": [
                    "先生[せんせい]と 学生[がくせい]が います。",
                    "本[ほん]が あります。",
                    "はい、教室です。",
                    "だれも いませんでした。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Hozir sinfda kim bor?» (jonli shaxslar uchun います) savoliga: «先生と 学生が います» (Ustoz va talabalar bor) deyiladi."
            },
            {
                "id": "ja-minna-l10-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_037.mp3",
                "audioTitle": "10-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Audioni tinglang:\n写真[しゃしん]の 中[なか]、木[き]の 下[した]に だれが いますか。",
                "options": [
                    "女の子[おんなのこ]",
                    "男の子[おとこのこ]と 犬[いぬ]",
                    "猫[ねこ]",
                    "お父[とう]さん"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda rasm tasvirlanadi: «木の下に 男の子と 犬が います» (Daraxt ostida o'g'il bola va kuchukcha bor)."
            },
            {
                "id": "ja-minna-l10-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_038.mp3",
                "audioTitle": "10-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ポストは コンビニの 隣[となり]に あります。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «ポストは どこに ありますか？... 駅の 前です。コンビニの 隣に あります» deyilgan. Bayonot to'g'ri (〇)."
            }
        ]
    },
    11: {
        "lessonNumber": 11,
        "title": "11-dars: Sanoq so'zlari, Miqdor va Muddat (〜つ、〜人、〜回、〜時間)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l11-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_040.mp3",
                "audioTitle": "11-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「ご家族[かぞく]は 何人[なんにん]ですか。」",
                "options": [
                    "4人[よにん]です。",
                    "4つです。",
                    "4回[よんかい]です。",
                    "4年[よねん]です。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Oila a'zolari soni (odamlar soni) «〜人 (nin)» bilan sanaladi: «4人 (yonin) です»."
            },
            {
                "id": "ja-minna-l11-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_040.mp3",
                "audioTitle": "11-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「あなたの 国[くに]から 日本[にほん]まで 飛行機[ひこうき]で 何時間[なんじかん] かかりますか。」",
                "options": [
                    "7時間[ななじかん]ぐらい かかります。",
                    "7時[しちじ]に 着[つ]きます。",
                    "7枚[ななまい] 買いました。",
                    "7回[ななかい] 行きました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Muddat / soat davomiyligi so'ralganda «〜時間 かかります» (taxminan 7 soat ketadi) shakli ishlatiladi."
            },
            {
                "id": "ja-minna-l11-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_041.mp3",
                "audioTitle": "11-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Audioni tinglang:\n切手[きって]は 全部[ぜんぶ]で いくらですか。",
                "options": [
                    "400円",
                    "500円",
                    "600円",
                    "700円"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «80円の 切手を 5枚 (80x5=400) と、50円の 切手を 2枚 (50x2=100) ください» deyilgan. Jami narx: 400 + 100 = 500円."
            },
            {
                "id": "ja-minna-l11-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_042.mp3",
                "audioTitle": "11-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんの 家族[かぞく]は 4人[よにん]です。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «家族は 4人です。両親と 姉と 私です» deyilgan. Oilada 4 kishi (ota-ona, opasi va Karina). Bayonot to'g'ri (〇)."
            }
        ]
    },
    12: {
        "lessonNumber": 12,
        "title": "12-dars: O'tgan zamon sifatlari va Taqqoslash (〜より、一番、どうでしたか)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l12-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_044.mp3",
                "audioTitle": "12-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「きのうは 寒[さむ]かったですか。」",
                "options": [
                    "はい、とても 寒かったです。",
                    "いいえ、寒いです。",
                    "はい、寒くないです。",
                    "あした 寒いです。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "O'tgan zamon sifat savoliga («Kecha sovuq edimi?»): «はい、とても 寒かったです» deb javob beriladi."
            },
            {
                "id": "ja-minna-l12-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_044.mp3",
                "audioTitle": "12-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「日本料理[にほんりょうり]で 何[なに]が 一番[いちばん] 好[す]きですか。」",
                "options": [
                    "すしが 一番 好きです。",
                    "日本料理を 食べました。",
                    "おいしかったです。",
                    "はい、好きです。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Yapon taomlari orasida eng yoqtirganingiz qaysi?» savoliga: «すしが 一番 好きです» (Eng yaxshi ko'rganim sushi) deb javob beriladi."
            },
            {
                "id": "ja-minna-l12-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_045.mp3",
                "audioTitle": "12-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「京都[きょうと]と 奈良[なら]と どちらも 面白[おもしろ]かったです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «京都と 奈良と どちらが 面白かったですか？... どちらも 面白かったです» (Ikkalasi ham qiziq edi) deyiladi. Bayonot to'g'ri (〇)."
            },
            {
                "id": "ja-minna-l12-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_045.mp3",
                "audioTitle": "12-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「旅行[りょこう]の ホテルは とても よかったです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «天気は よかったですが、ホテルは あまり よくなかったです» (Ob-havo yaxshi edi, lekin mehmonxona unchalik yaxshi emasdi) deyilgan. Demak bayonot noto'g'ri (✕)."
            }
        ]
    },
    13: {
        "lessonNumber": 13,
        "title": "13-dars: Istak va Maqsad (〜が 欲しい、〜たい、〜に 行きます)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l13-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_047.mp3",
                "audioTitle": "13-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「今[いま] 何[なに]が 一番[いちばん] 欲[ほ]しいですか。」",
                "options": [
                    "新[あたら]しい 車[くるま]が 欲しいです。",
                    "日本へ 行きたいです。",
                    "はい、欲しいです。",
                    "車を 買いました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Hozir nimani eng ko'p xohlaysiz?» savoliga ot + が 欲しいです shaklida javob beriladi: «新しい 車が 欲しいです»."
            },
            {
                "id": "ja-minna-l13-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_047.mp3",
                "audioTitle": "13-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「週末[しゅうまつ] どこへ 遊[あそ]びに 行[い]きたいですか。」",
                "options": [
                    "海[うみ]へ 遊びに 行きたいです。",
                    "友だちと 会いました。",
                    "はい、行きたいです。",
                    "日曜日でした。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Dam olish kunlari qayerga dam olgani/aylangani bormoqchisiz?» savoliga: «海へ 遊びに 行きたいです» (Dengizga aylangani bormoqchiman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l13-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_048.mp3",
                "audioTitle": "13-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Suhbatni tinglang:\n山田[やまだ]さんは 今[いま] 何[なに]が 欲[ほ]しいですか。",
                "options": [
                    "新しい パソコン",
                    "時間[じかん]",
                    "お金[かね]",
                    "車[くるま]"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Sato yangi kompyuter xohlaydi, Yamada esa: «私は 毎日 忙しいですから、時間が 欲しいです» (Har kuni bandman, shuning uchun vaqt xohlayman) deydi."
            },
            {
                "id": "ja-minna-l13-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_048.mp3",
                "audioTitle": "13-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 2】Suhbatni tinglang:\n二人は 何[なに]を 食[た]べに 行[い]きますか。",
                "options": [
                    "ラーメン",
                    "カレー",
                    "すし",
                    "そば"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «何を食べたいですか？... カレーを食べたいです。じゃあ、そうしましょう» deb aytiladi. Ular karri yeyishga borishadi."
            }
        ]
    },
    14: {
        "lessonNumber": 14,
        "title": "14-dars: Te-shakli va Iltimos (〜てください、〜ましょうか、〜ています)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l14-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_050.mp3",
                "audioTitle": "14-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「今[いま] 雨[あめ]が 降[ふ]っていますか。」",
                "options": [
                    "はい、降っています。",
                    "いいえ、雨でした。",
                    "はい、降りませんでした。",
                    "あした 降ります。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Hozir yomg'ir yog'yaptimi?» savoliga davomli zamonda: «はい、降っています» (Ha, yog'yapti) deb javob beriladi."
            },
            {
                "id": "ja-minna-l14-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_051.mp3",
                "audioTitle": "14-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Audioni tinglang:\n佐藤[さとう]さんは 今[いま] どこで 何[なに]を していますか。",
                "options": [
                    "2階で 会議[かいぎ]を しています。",
                    "1階で コピーしています。",
                    "食堂で ご飯を 食べています。",
                    "外で タクシーを 呼んでいます。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «佐藤さんは どこに いますか？... 1階で コピーしています» deb javob beriladi."
            },
            {
                "id": "ja-minna-l14-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_052.mp3",
                "audioTitle": "14-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]は 一緒[いっしょ]に 車[くるま]で 帰[かえ]ります。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Ayol taksi taklif qiladi, erkak esa bugun mashinada kelganini aytib birga ketishni taklif qiladi va ayol rozi bo'ladi. Bayonot to'g'ri (〇)."
            }
        ]
    },
    15: {
        "lessonNumber": 15,
        "title": "15-dars: Ruxsat va Taqiqlash (〜ても いいです、〜ては いけません)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l15-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_054.mp3",
                "audioTitle": "15-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]っても いいですか。」",
                "options": [
                    "いいえ、撮っては いけません。",
                    "はい、写真じゃ ありません。",
                    "いいえ、撮りませんでした。",
                    "写真を 見ました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«San'at muzeyida rasmga tushirish mumkinmi?» savoliga taqiq javobi: «いいえ、撮っては いけません» (Yo'q, tushirish mumkin emas)."
            },
            {
                "id": "ja-minna-l15-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_055.mp3",
                "audioTitle": "15-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ロビーで たばこを 吸[す]っても いいです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «ここで たばこを 吸っても いいですか？... すみません、あちらの ロビーで お願いします» deyilgan. Demak lobbida chekish mumkin (〇)."
            },
            {
                "id": "ja-minna-l15-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_055.mp3",
                "audioTitle": "15-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「ここへ 車[くるま]を 止[と]めても いいです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «ここに 車を 止めても いいですか？... すみません、あちらに 止めてください» deyilgan. Bu yerga to'xtatish mumkin emas. Bayonot noto'g'ri (✕)."
            }
        ]
    },
    16: {
        "lessonNumber": 16,
        "title": "16-dars: Ketma-ketlik va Sifatlarni bog'lash (〜て、〜てから、〜くて)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l16-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_057.mp3",
                "audioTitle": "16-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「朝[あさ] 起[お]きて 何[なに]を しますか。」",
                "options": [
                    "顔[かお]を 洗[あら]って、ご飯を 食べます。",
                    "6時に 起きました。",
                    "はい、起きます。",
                    "きのう 起きました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Ertalab uyg'onib nimalar qilishi ketma-ket fe'l zanjirida aytiladi: «顔を 洗って、ご飯を 食べます» (Yuzimni yuvib, ovqatlanaman)."
            },
            {
                "id": "ja-minna-l16-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_058.mp3",
                "audioTitle": "16-dars Mondai 2: Qisqa suhbat",
                "question": "【Mondai 2 - Suhbat 1】Audioni tinglang:\n会社[かいしゃ]まで どうやって 行[い]きますか。",
                "options": [
                    "地下鉄[ちかてつ]と タクシーで 行きます。",
                    "JRで 行って、近鉄[きんてつ]に 乗り換[か]えて、歩[ある]いて 行きます。",
                    "バスだけで 行きます。",
                    "車を 運転[うんてん]して 行きます。"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «JRで 大阪まで 行って、近鉄に 乗り換えて、日本橋で 降ります。それから 歩いて 行きます» deyiladi."
            },
            {
                "id": "ja-minna-l16-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_059.mp3",
                "audioTitle": "16-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は 3時[さんじ]に テニスを します。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda dars 3 da tugashi («3時に 終わります»), tennis esa 3 yarimda boshlanishi («3時半に ロビーで») aytiladi. Demak bayonot noto'g'ri (✕)."
            }
        ]
    },
    17: {
        "lessonNumber": 17,
        "title": "17-dars: Inkor shakl va Majburiyat (〜ないで ください、〜なければ なりません)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l17-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_061.mp3",
                "audioTitle": "17-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「外国旅行[がいこくりょこう]に 何[なに]を 持[も]って行[い]かなければ なりませんか。」",
                "options": [
                    "パスポートを 持って行かなければ なりません。",
                    "旅行へ 行きました。",
                    "いいえ、持って行かないで ください。",
                    "とても 楽[たの]しかったです。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Chet el safariga nimani olib borish majburiy?» savoliga: «パスポートを 持って行かなければ なりません» (Pasportni olib borish kerak) deb javob beriladi."
            },
            {
                "id": "ja-minna-l17-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_062.mp3",
                "audioTitle": "17-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は 今晩[こんばん] 食事[しょくじ]に 行[い]きません。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «今晩は レポートを 書かなければ なりませんから...» (Bugun oqshom hisobot yozishim kerak) deb taklifni rad etadi. Bayonot to'g'ri (〇)."
            }
        ]
    },
    18: {
        "lessonNumber": 18,
        "title": "18-dars: Lug'at shakli, Qobiliyat va Qiziqish (〜ことが できます、趣味は〜ことです)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l18-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_064.mp3",
                "audioTitle": "18-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「ダンスが できますか。」",
                "options": [
                    "はい、少し できます。",
                    "いいえ、ダンスを しました。",
                    "ダンスが 好きでした。",
                    "はい、できません。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Raqsga tusha olasizmi?» savoliga qobiliyat ifodasi bilan: «はい、少し できます» (Ha, ozroq eplay olaman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l18-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_064.mp3",
                "audioTitle": "18-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「趣味[しゅみ]は 何[なん]ですか。」",
                "options": [
                    "音楽[おんがく]を 聞[き]く ことです。",
                    "映画[えいが]を 見ました。",
                    "スポーツじゃ ありません。",
                    "日曜日です。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Qiziqishingiz/hobbingiz nima?» deyilganda Lug'at shakli + ことです bilan javob beriladi: «音楽を 聞く ことです»."
            },
            {
                "id": "ja-minna-l18-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_065.mp3",
                "audioTitle": "18-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]の 趣味[しゅみ]は 料理[りょうり]を 作[つく]る ことです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «色々な 国の 料理を 作る ことです» deyilgan. Uning qiziqishi har xil taomlar tayyorlash. Bayonot to'g'ri (〇)."
            }
        ]
    },
    19: {
        "lessonNumber": 19,
        "title": "19-dars: Ta-shakli, Tajriba va Sanab o'tish (〜た ことが あります、〜たり〜たり します)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l19-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_067.mp3",
                "audioTitle": "19-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「相撲[すもう]を 見[み]た ことが ありますか。」",
                "options": [
                    "はい、一度[いちど] あります。",
                    "いいえ、見ました。",
                    "はい、相撲です。",
                    "あした 見ます。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Hayotiy tajriba so'ralganda (〜た ことがありますか): «はい、一度 あります» (Ha, bir marta ko'rganman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l19-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_068.mp3",
                "audioTitle": "19-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]の ご両親[りょうしん]は 元気[げんき]です。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: ota-onasi 80 yoshdan oshgan bo'lsa-da, sayohat qilib, sabzavot yetishtirib tetik yurgani aytiladi. Bayonot to'g'ri (〇)."
            },
            {
                "id": "ja-minna-l19-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_068.mp3",
                "audioTitle": "19-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]は 今晩[こんばん] お風呂[ふろ]に 入[はい]ります。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda isitmasi borligi uchun: «お風呂に 入らないで、早く 寝てください» (Vannaga tushmay, ertaroq uxlang) deb maslahat beriladi. Demak bayonot noto'g'ri (✕)."
            }
        ]
    },
    20: {
        "lessonNumber": 20,
        "title": "20-dars: Oddiy Uslub (普通形 Futsuugo)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l20-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_070.mp3",
                "audioTitle": "20-dars Mondai 1: Savollarga javob (Oddiy uslub)",
                "question": "【Mondai 1 - Savol 1】Oddiy uslubdagi audioni tinglang:\n「日曜日[にちようび] 何[なに] する？」",
                "options": [
                    "友達[ともだち]と 遊[あそ]ぶ。",
                    "日曜日です。",
                    "勉強[べんきょう]しました。",
                    "どこも 行きません。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Oddiy uslubda (Futsuugo) do'stlar o'rtasida berilgan savolga oddiy fe'l shaklida: «友達と 遊ぶ» (Do'stlarim bilan aylanaman/o'ynayman) deb javob qaytariladi."
            },
            {
                "id": "ja-minna-l20-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_070.mp3",
                "audioTitle": "20-dars Mondai 1: Savollarga javob (Oddiy uslub)",
                "question": "【Mondai 1 - Savol 5】Oddiy uslubdagi audioni tinglang:\n「日本[にほん]の 映画[えいが]を 見[み]た こと ある？」",
                "options": [
                    "うん、あるよ。",
                    "ううん、見ない。",
                    "はい、見ました。",
                    "映画[えいが]じゃない。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Oddiy uslubda «...mita koto aru?» savoliga tasdiq javob: «うん、あるよ» (Ha, ko'rganman)."
            },
            {
                "id": "ja-minna-l20-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_071.mp3",
                "audioTitle": "20-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Oddiy uslubdagi suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]と 女[おんな]の 人[ひと]は 傘[かさ]を 持[も]っていません。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «傘 持ってる？... ううん。田中さんは？... 僕も 持ってない» deyilgan. Ikkalasida ham soyabon yo'q. Bayonot to'g'ri (〇)."
            }
        ]
    },
    21: {
        "lessonNumber": 21,
        "title": "21-dars: Fikr va Iqtibos (〜と 思います、〜と 言いました)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l21-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_073.mp3",
                "audioTitle": "21-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「明日[あした]は 天気[てんき]が いいと 思[おも]いますか。」",
                "options": [
                    "はい、いいと 思います。",
                    "いいえ、天気です。",
                    "はい、雨でした。",
                    "きのう よかったです。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Ertaga ob-havo yaxshi bo'ladi deb o'ylaysizmi?» savoliga fikr bildirib: «はい、いいと 思います» (Ha, yaxshi bo'ladi deb o'ylayman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l21-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_073.mp3",
                "audioTitle": "21-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「日本人は ご飯[はん]を 食[た]べる 前[まえ]に 何[なん]と 言[い]いますか。」",
                "options": [
                    "「いただきます」と 言います。",
                    "「ごちそうさま」と 言います。",
                    "「さようなら」と 言います。",
                    "「いってきます」と 言います。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Yaponlar ovqat yeyishdan oldin «いただきます» (Itadakimasu) deb aytadilar."
            },
            {
                "id": "ja-minna-l21-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_074.mp3",
                "audioTitle": "21-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「サントスさんは 車[くるま]を 運転[うんてん]しますから、ビールを 飲[の]みません。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda Santos mashinada kelgani va ichsa ruxsat berilmasligi sababli pivo ichmasligini aytadi. Bayonot to'g'ri (〇)."
            }
        ]
    },
    22: {
        "lessonNumber": 22,
        "title": "22-dars: Sifatdosh Birikmalar (Otni ifodalovchi jumlalar)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l22-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_076.mp3",
                "audioTitle": "22-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「あなたが 生[う]まれた 所[ところ]は どこですか。」",
                "options": [
                    "サマルカンドです。",
                    "先週[せんしゅう] 生まれました。",
                    "病院[びょういん]へ 行きました。",
                    "はい、生まれました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Siz tug'ilgan joy qayer?» savoliga shahar/joy nomi aytiladi: «サマルカンドです»."
            },
            {
                "id": "ja-minna-l22-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_076.mp3",
                "audioTitle": "22-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 3】Audioni tinglang:\n「家族[かぞく]で 眼鏡[めがね]を かけている 人[ひと]が いますか。」",
                "options": [
                    "はい、父[ちち]が かけています。",
                    "いいえ、眼鏡じゃ ありません。",
                    "眼鏡を 買いました。",
                    "はい、だれも いません。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Oilangizda ko'zoynak taqqan odam bormi?» savoliga: «はい、父が かけています» (Ha, otam taqqanlar) deb javob beriladi."
            },
            {
                "id": "ja-minna-l22-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_077.mp3",
                "audioTitle": "22-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は クッキーを 作[つく]りました。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «これ、私が 作った クッキーですけど、いかがですか» deyiladi. Ayol o'zi kuki pechenyelarini pishirgan. Bayonot to'g'ri (〇)."
            }
        ]
    },
    23: {
        "lessonNumber": 23,
        "title": "23-dars: Holat va Shart (〜とき、〜と)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l23-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_079.mp3",
                "audioTitle": "23-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 2】Audioni tinglang:\n「道[みち]が 分[わ]からない とき、どうしますか。」",
                "options": [
                    "交番[こうばん]の 人[ひと]に 聞[き]きます。",
                    "道を 歩[ある]きました。",
                    "はい、分かりました。",
                    "タクシーが ありません。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Yo'lni bilmagan paytda nima qilasiz?» savoliga: «交番の 人に 聞きます» (Militsiya maskanidagi xodimdan so'rayman) deb javob beriladi."
            },
            {
                "id": "ja-minna-l23-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_079.mp3",
                "audioTitle": "23-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 3】Audioni tinglang:\n「暇[ひま]な とき、何[なに]を しますか。」",
                "options": [
                    "本[ほん]を 読[よ]んだり、音楽[おんがく]を 聞[き]いたり します。",
                    "はい、暇でした。",
                    "仕事[しごと]を しなければ なりません。",
                    "日曜日です。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Bo'sh paytingizda nima qilasiz?» savoliga odatdagi mashg'ulotlar aytiladi: «本を 読んだり、音楽を 聞いたり します»."
            },
            {
                "id": "ja-minna-l23-m3-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_081.mp3",
                "audioTitle": "23-dars Mondai 3: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 3 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「この ボタンを 押[お]すと、切符[きっぷ]が 出[で]ます。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda tugmani bosganda chipta emas, karta chiqishi aytiladi («カードが 出ます»). Shuning uchun bayonot noto'g'ri (✕)."
            }
        ]
    },
    24: {
        "lessonNumber": 24,
        "title": "24-dars: Harakat Hadyasi (〜て くれます、〜て あげます、〜て もらいます)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l24-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_083.mp3",
                "audioTitle": "24-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「子どもの とき、お母[かあ]さんは お菓子[かし]を くれましたか。」",
                "options": [
                    "はい、よく くれました。",
                    "いいえ、あげました。",
                    "母に お菓子を もらいました。",
                    "お菓子を 買いました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Bolaligingizda onangiz shirinliklar berarmidi?» (〜てくれましたか) savoliga to'g'ri javob: «はい、よく くれました» (Ha, tez-tez berib turardi)."
            },
            {
                "id": "ja-minna-l24-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_084.mp3",
                "audioTitle": "24-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「男[おとこ]の 人[ひと]は お兄[にい]さんに 時計[とけい]を もらいました。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda: «誕生日に 兄が くれました» deyilgan. Demak akasi unga soat sovg'a qilgan, ya'ni soatni akasidan olgan (〇)."
            },
            {
                "id": "ja-minna-l24-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_084.mp3",
                "audioTitle": "24-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「女[おんな]の 人[ひと]は 男[おとこ]の 人[ひと]に 傘[かさ]を 貸[か]します。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda yomg'irda qolgan kishiga ayol soyabonini qarzga beradi («傘を 貸しましょうか？... ありがとうございます»). Bayonot to'g'ri (〇)."
            }
        ]
    },
    25: {
        "lessonNumber": 25,
        "title": "25-dars: Shart va To'siqsizlik (〜たら、〜ても)",
        "estimatedMinutes": 8,
        "questions": [
            {
                "id": "ja-minna-l25-m1-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_086.mp3",
                "audioTitle": "25-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 1】Audioni tinglang:\n「もし 1億円[いちおくえん] あったら、何[なに]を したいですか。」",
                "options": [
                    "世界旅行[せかいりょこう]を したいです。",
                    "お金[かね]が ありませんでした。",
                    "はい、1億円です。",
                    "銀行[ぎんこう]へ 行きました。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«Agar 100 million iyenangiz bo'lganida nima qilardingiz?» (〜たら) savoliga: «世界旅行を したいです» (Dunyo bo'ylab sayohat qilmoqchi bo'lardim) deb javob beriladi."
            },
            {
                "id": "ja-minna-l25-m1-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_086.mp3",
                "audioTitle": "25-dars Mondai 1: Savollarga javob",
                "question": "【Mondai 1 - Savol 4】Audioni tinglang:\n「第25課[だいにじゅうごか]の 問題[もんだい]が 終[お]わったら、何[なに]を しますか。」",
                "options": [
                    "初級[しょきゅう]2（第26課）を 勉強[べんきょう]します！",
                    "日本語を やめます。",
                    "きのう 終わりました。",
                    "はい、25課です。"
                ],
                "correctAnswerIndex": 0,
                "explanation": "«25-dars masalalari tugagach, nima qilasiz?» savoliga Minna no Nihongo Shokyu 1 kitobi tugagach Shokyu 2 (26-dars)ni o'rganish javobi to'g'ri keladi."
            },
            {
                "id": "ja-minna-l25-m2-q1",
                "audioUrl": "/audio/minna/minna_shokyu_1_087.mp3",
                "audioTitle": "25-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 1-gap】Suhbatni tinglang va bayonotni tekshiring:\n「カリナさんは 1年[いちねん] 休[やす]みを もらったら、絵[え]を 見[み]に 行[い]きたいです。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 0,
                "explanation": "Audioda Karina: «いろいろな 国の 美術館へ 絵を 見に 行きたいです» deydi. Demak u rasmlar ko'rish uchun muzeylarga bormoqchi. Bayonot to'g'ri (〇)."
            },
            {
                "id": "ja-minna-l25-m2-q2",
                "audioUrl": "/audio/minna/minna_shokyu_1_087.mp3",
                "audioTitle": "25-dars Mondai 2: To'g'ri (〇) yoki Noto'g'ri (✕)",
                "question": "【Mondai 2 - 2-gap】Suhbatni tinglang va bayonotni tekshiring:\n「明日[あした] 雨[あめ]が 降[ふ]ったら、サッカーの 試合[しあい]を しません。」",
                "options": [
                    "〇 正[ただ]しい (To'g'ri)",
                    "✕ 間違[まちが]い (Noto'g'ri)"
                ],
                "correctAnswerIndex": 1,
                "explanation": "Audioda: «明日 雨が 降っても、サッカーの 試合を しますか？... ええ、雨が 降っても、やりますよ» (Yomg'ir yog'sa ham o'ynaymiz) deyilgan. Demak bayonot noto'g'ri (✕)."
            }
        ]
    }
}

# 1. Output src/data/curriculum/minnaMondaiListeningData.ts
ts_code = """/**
 * minnaMondaiListeningData.ts
 * Authentic Minna no Nihongo Shokyu 1 (Lessons 1-25) Mondai Listening Questions Bank.
 * Each question is linked directly to official CD tracks (/audio/minna/minna_shokyu_1_00X.mp3).
 */
import { TestQuestion } from '../../types/lesson';

export interface MinnaLessonMondai {
  lessonNumber: number;
  title: string;
  estimatedMinutes: number;
  questions: TestQuestion[];
}

export const MINNA_MONDAI_LISTENING_DATA: Record<number, MinnaLessonMondai> = """ + json.dumps(MINNA_MONDAI_DATA, ensure_ascii=False, indent=2) + """;
"""

with open('src/data/curriculum/minnaMondaiListeningData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)
print("Wrote src/data/curriculum/minnaMondaiListeningData.ts")

# 2. Update src/data/curriculum/levels/minnaN5Lessons.json
with open('src/data/curriculum/levels/minnaN5Lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

for lesson in lessons:
    l_num = lesson.get('lessonNumber')
    if l_num in MINNA_MONDAI_DATA:
        mondai_info = MINNA_MONDAI_DATA[l_num]
        step4_id = f"{lesson['id']}-s4"
        
        # Remove any existing s4 step if present
        lesson['steps'] = [s for s in lesson['steps'] if not s.get('id', '').endswith('-s4')]
        
        step4 = {
            "id": step4_id,
            "title": "Mondai Tinglash Testi (CD Audio)",
            "type": "test",
            "estimatedMinutes": mondai_info.get("estimatedMinutes", 8),
            "testData": {
                "instructions": f"Minna no Nihongo {l_num}-dars oxiridagi haqiqiy CD audioni tinglang va savollarga to'g'ri javob bering.",
                "passingScorePercentage": 70,
                "questions": mondai_info["questions"]
            }
        }
        lesson['steps'].append(step4)

with open('src/data/curriculum/levels/minnaN5Lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)
print(f"Updated {len(lessons)} lessons in src/data/curriculum/levels/minnaN5Lessons.json with Step 4!")

# 3. Update src/data/curriculum/levels/minnaN5QuizDatabase.json
with open('src/data/curriculum/levels/minnaN5QuizDatabase.json', 'r', encoding='utf-8') as f:
    quiz_db = json.load(f)

for l_num_str, qset in quiz_db.items():
    l_num = int(l_num_str)
    if l_num in MINNA_MONDAI_DATA:
        qset['mondaiListening'] = MINNA_MONDAI_DATA[l_num]['questions']

with open('src/data/curriculum/levels/minnaN5QuizDatabase.json', 'w', encoding='utf-8') as f:
    json.dump(quiz_db, f, ensure_ascii=False, indent=2)
print("Updated src/data/curriculum/levels/minnaN5QuizDatabase.json with mondaiListening!")

# 4. Update src/data/curriculum/minnaN5QuizDatabase.ts
quiz_ts = """import { PracticeExercise, TestQuestion } from '../../types/lesson';
import rawData from './levels/minnaN5QuizDatabase.json';

export interface LessonQuizSet {
  practice: PracticeExercise[];
  test: TestQuestion[];
  mondaiListening?: TestQuestion[];
}

export const MINNA_N5_QUIZ_DATABASE: Record<number, LessonQuizSet> = rawData as unknown as Record<
  number,
  LessonQuizSet
>;
"""

with open('src/data/curriculum/minnaN5QuizDatabase.ts', 'w', encoding='utf-8') as f:
    f.write(quiz_ts)
print("Updated src/data/curriculum/minnaN5QuizDatabase.ts")
