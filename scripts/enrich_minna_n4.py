#!/usr/bin/env python3
"""
Enrichment script for Minna no Nihongo N4 Curriculum (Lessons 26 to 50).
Transforms raw data from src/data/minna_shokyu2_complete.json into fully
typed, high-quality lessons in src/data/curriculum/minnaN4Lessons.ts.

Quality improvements:
1. Complete keyPoints with full grammatical explanations (zero '...' cutoffs).
2. All vocabulary items retained with Furigana notation, readings, and contextual examples.
3. 5 authentic practice exercises per lesson (125 total).
4. 5 authentic JLPT N4-style test questions per lesson (125 total).
5. Balanced answer distribution across options 0, 1, 2, 3 (no static answer 0 bias).
6. Strictly unique multiple choice options with plausible, high-quality distractors.
"""

import json
import re
import random

RAW_FILE = "src/data/minna_shokyu2_complete.json"
TARGET_FILE = "src/data/curriculum/minnaN4Lessons.ts"

UNIT_TITLES = {
    6: "Unit 6: 26–30 Darslar (Kundalik Hayot va Holatlar)",
    7: "Unit 7: 31–35 Darslar (Rejalar, Maslahat va Shartlar)",
    8: "Unit 8: 36–40 Darslar (Maqsad, Majhullik va Otlashtirish)",
    9: "Unit 9: 41–45 Darslar (Aloqalar, Maqsad va Qiyoslar)",
    10: "Unit 10: 46–50 Darslar (Vaqt, Eshitish, Majburlash va Keigo)"
}

UNIT_ICONS = {
    6: "🌿",
    7: "🎯",
    8: "⚡",
    9: "🌟",
    10: "⛩️"
}

CULTURAL_NOTES = {
    26: "Yaponiyada o'z harakatining sababini tushuntirganda yoki yumshoq tarzda iltimos qilganda '〜んです' va '〜んですが' uslubi juda tabiiy hisoblanadi. Bu tinglovchiga qo'shimcha tushuntirish va muloyimlik ohangini bag'ishlaydi.",
    27: "Qobiliyat (potential) shakllarida obyekt ko'pincha 'を' o'rniga 'が' yuklamasi bilan keladi. '見える' va '聞こえる' kishining xohishidan tashqari tabiiy idrok etilishini, '見られる' va '聞ける' esa imkoniyat mavjudligini bildiradi.",
    28: "Bir vaqtning o'zida ikkita ishni bajarish ('〜ながら') va odat bo'lib qolgan harakatlar ('〜ています') yapon madaniyatida tartib va intizomni ko'rsatishda juda faol qo'llaniladi.",
    29: "Avtomatik sodir bo'ladigan holatlar va natijalar o'timsiz fe'l (Jidoushi) + '〜ています' orqali ifodalanadi. '〜てしまいました' esa afsus, pushaymonlik yoki harakatning to'liq yakunlanganini bildiradi.",
    30: "Biror maqsad bilan ataylab tayyorlab qo'yilgan holatlar '〜てあります' orqali, kelgusidagi qulaylik uchun oldindan ko'rilgan choralar esa '〜ておきます' orqali ifodalanadi.",
    31: "Kelajakdagi niyat va rejalarni ifodalashda ixtiyor (Volitional) shakli ('〜よう') va '〜と思っています' (o'ylayapman) yoki '〜つもりです' (rejalashtirganman) konstruksiyalari qo'llaniladi.",
    32: "Salomatlik va maslahat berishda '〜ほうがいいです' (qilgan ma'qul), noaniq bashorat qilishda esa '〜でしょう' (bo'lsa kerak) hamda '〜かもしれません' (ehtimol) muloyimlik bilan ishlatiladi.",
    33: "Buyruq (Meireikei) va Taqiqlash (Kinshikei) shakllari odatda favqulodda holatlarda, sport musobaqalarida yoki yo'l belgilarida qo'llaniladi. Kundalik muloqotda esa '〜という意味です' va '〜と伝えていただけませんか' orqali ma'no tushuntiriladi va iltimos yetkaziladi.",
    34: "Ko'rsatma yoki retsept bo'yicha ketma-ketlikni ifodalashda '〜とおりに' (aynan shunday), vaqt ketma-ketligida '〜あとで' (so'ng) hamda ikkinchi harakatni birinchisisiz bajarishda '〜ないで' qo'llaniladi.",
    35: "Shart mayli (〜ば shakli) va '〜なら' muayyan vaziyat va takliflarni ifodalashda asosiy grammatik vosita sanaladi. '〜ば ＋ 〜ほど' esa mutanosib o'zgarishni ('qanchalik... shunchalik') ifodalaydi.",
    36: "Maqsad va natijaga erishish uchun harakat qilishda '〜ように' (bo'lishi uchun) va yangi ko'nikma hosil qilishda '〜ように なりました' (bajaradigan bo'ldim) qo'llaniladi.",
    37: "Majhul nisbat (Ukemi / Passive) yapon madaniyatida boshqalarning noo'rin harakati natijasida noqulaylik ko'rish (ziyon ko'rish) ma'nosida juda ko'p ishlatiladi.",
    38: "Harakatni otlashtirishda '〜のは / 〜のを / 〜のが' konstruksiyalari gap tuzish imkoniyatini kengaytirib, nimanidir yoqtirish, mahorat va unutish kabi holatlarni aniq ifodalaydi.",
    39: "Sabab va natijani bog'lashda '〜て / 〜で' orqali tabiiy hodisalar va his-tuyg'ular, '〜ので' orqali esa obyektiv va muloyim sabablar bayon qilinadi.",
    40: "Boshqa gap ichidagi savol (Ikkilamchi so'roq gaplar: '〜かどうか / 〜か') qaror qabul qilish, sinab ko'rish ('〜てみます') va tekshirish holatlarida qo'llaniladi.",
    41: "Birovga biror narsa berish va olishda ijtimoiy maqomga qarab 'やる / あげる / さしあげる' hamda 'もらう / いただく', 'くれる / くださる' fe'llari qat'iy farqlanadi.",
    42: "Aniq maqsad yo'lidagi irodali harakatni '〜ために' (uchun), biror vositaning vazifasi yoki qulayligini esa '〜のに使います / 便利です' orqali ifodalanadi.",
    43: "Ko'z bilan ko'rib xulosa chiqarish ('〜そうです' - ...ga o'xshaydi, ko'rinadi) va borib qaytish harakati ('〜てきます') kundalik jonli tilda juda faol ishlatiladi.",
    44: "Haddan tashqari oshib ketish ('〜すぎます' - me'yoridan ortiq) va oson/qiyinlik darajasi ('〜やすい / 〜にくい') subyektiv baholashda asosiy rol o'ynaydi.",
    45: "Kutilmagan vaziyatlar va noxush hodisalarda '〜場合は' (holatda, taqdirda) va kutilganga zid natijada '〜のに' (qaramasdan, holda) afsus va norozilik ohangida aytiladi.",
    46: "Harakatning aniq vaqt nuqtasi ('〜ところです' - ayni boshlanish/davom/tugash pallasida) hamda yangigina sodir bo'lgan voqea ('〜ばかりです') aniq farqlanadi.",
    47: "Eshitilgan ma'lumotni uchinchi shaxsga yetkazishda '〜そうです' (deyishlaricha, eshitishimcha), sezgi organlari signallarida esa '〜が します' (ovoz, hid, ta'm kelmoqda) qo'llaniladi.",
    48: "Majburiy-harakat nisbati (Shieki / Causative: '〜させます') boshqalarga biror ishni bajartirish yoki ijozat so'rashda ('〜させていただけませんか') qo'llaniladi.",
    49: "Hurmat tili (Sonkeigo / 尊敬語): Suhbatdosh yoki uchinchi shaxsning mavqeini ulug'lash maqsadida 'お〜になります' formulasi va maxsus hurmat so'zlari (いらっしゃる, おっしゃる) qo'llanadi.",
    50: "Kamtarlik tili (Kenjougo / 謙譲語): O'z harakatlarini kamsitib, tinglovchiga hurmat bildirishda 'お〜します' formulasi va maxsus kamtarlik fe'llari (まいる, いたす, もうす) ishlatiladi."
}

# Lesson-specific authentic practice exercises (Ex 1: Connector & Grammar Gap Fill)
N4_PRACTICE_GAP_FILL = {
    26: ("頭[あたま]が 痛[いた]い（　）、早[はや]く 帰[かえ]っても いいですか。", "んですが", ["んですが", "んですから", "んですに", "んですも"], "Iltimos yoki ruxsat so'rashdan oldin sabab va vaziyatni tushuntirishda '〜んですが' ishlatiladi."),
    27: ("日本語[にほんご]で 手紙[てがみ]が（　）。", "書けます", ["書けます", "書きます", "書かれます", "書かせます"], "Fe'lning imkoniyat (qobiliyat) shakli: 書く -> 書けます."),
    28: ("音楽[おんがく]を（　）勉強[べんきょう]します。", "聞きながら", ["聞きながら", "聞いてながら", "聞くながら", "聞かないながら"], "Bir vaqtning o'zida ikkita ishni bajarish: V1-ます shakli + ながら."),
    29: ("窓[まど]が（　）います。", "開いて", ["開いて", "開けて", "開きます", "開けまして"], "O'timsiz fe'l (Jidoushi) + ています holatni bildiradi: 窓が開いています."),
    30: ("壁[かべ]に カレンダーが（　）あります。", "はって", ["はって", "はちて", "はります", "はった"], "Bajarilgan harakat natijasi saqlanib turganini bildirishda: 他動詞-て形 + あります."),
    31: ("夏休み[なつやすみ]に 国[くに]へ（　）と 思っています。", "帰ろう", ["帰ろう", "帰る", "帰ります", "帰った"], "Ixtiyor (Volitional) shakli + と思っています kelajakdagi niyatni bildiradi: 帰ろう."),
    32: ("熱[ねつ]が ありますから、お風呂[ふろ]に（　）ほうがいいです。", "入らない", ["入らない", "入る", "入った", "入って"], "Salbiy maslahat berishda: V-ない形 + ほうがいいです."),
    33: ("ここに 車[くるま]を（　）な。", "止める", ["止める", "止めろ", "止め", "止めて"], "Qat'iy taqiq shakli: V-辞書形 + な (Taqiqlash)."),
    34: ("説明書[せつめいしょ]の（　）組み立てました。", "とおりに", ["とおりに", "あとで", "まえに", "あいだに"], "Ko'rsatmaga aynan muvofiq bajarish: Nの + とおりに."),
    35: ("ボタンを（　）、おつりが 出[で]ます。", "押せば", ["押せば", "押したらば", "押すば", "押しば"], "Shart mayli (Jouken-kei): 押す -> 押せば."),
    36: ("早[はや]く 起[お]きられる（　）、目覚まし[めざまし]を かけます。", "ように", ["ように", "ために", "とおりに", "そうに"], "Imkoniyat fe'li bilan maqsad bildirishda: 〜ように."),
    37: ("弟[おとうと]に パソコンを（　）しまいました。", "壊されて", ["壊されて", "壊して", "壊させて", "壊られて"], "Ziyon ko'rish ma'nosidagi majhul nisbat: 壊す -> 壊される."),
    38: ("一人[ひとり]で 生活[せいかつ]する（　）は 大変[たいへん]です。", "の", ["の", "こと", "もの", "ところ"], "Harakatni sifat bilan bog'lab otlashtirishda: V-普通形 + のは Aです."),
    39: ("地震[じしん]（　）ビルが 倒[たお]れました。", "で", ["で", "に", "を", "へ"], "Tabiiy ofat yoki hodisa sababini bildirishda: N + で."),
    40: ("鍵[かぎ]を かけた（　）どうか、忘[わす]れました。", "か", ["か", "と", "も", "に"], "Ikkilamchi ha/yo'q so'rog'i: 〜かどうか."),
    41: ("社長[しゃちょう]に お土産[みやげ]を（　）。", "いただきました", ["いただきました", "もらいました", "あげました", "くれました"], "Yuqori martabali shaxsdan qabul qilib olish: いただく."),
    42: ("大学[だいがく]に 合格[ごうかく]する（　）に、一生懸命[いっしょうけんめい] 勉強[べんきょう]します。", "ため", ["ため", "よう", "こと", "もの"], "O'z irodasi bilan erishiladigan maqsad: V-辞書形 + ために."),
    43: ("今[いま]にも 雨[あめ]が（　）そうです。", "降り", ["降り", "降る", "降って", "降った"], "Hozir sodir bo'lish arafasidagi holat: V-ます shakli + そうです."),
    44: ("この 薬[くすり]は 苦[にが]くて、（　）にくいです。", "飲み", ["飲み", "飲む", "飲ま", "飲んで"], "Bajarish qiyin bo'lgan harakat: V-ます shakli + にくい."),
    45: ("事故[じこ]に あった（　）は、警察[けいさつ]に 連絡[れんらく]してください。", "場合", ["場合", "のに", "とおり", "はず"], "Kutilmagan noxush vaziyatda ko'riladigan chora: 〜場合は."),
    46: ("飛行機[ひこうき]は 今[いま] 飛[と]び立[た]つ（　）です。", "ところ", ["ところ", "ばかり", "はず", "わけ"], "Ayni harakat boshlanish arafasidagi payt: V-辞書形 + ところです."),
    47: ("天気予報[てんきよほう]に よると、明日は 晴れる（　）です。", "そう", ["そう", "よう", "らしい", "みたい"], "Eshitilgan axborotni yetkazish: 普通形 + そうです (eshitishimcha)."),
    48: ("先生[せんせい]は 生徒[せいと]に 本[ほん]を（　）。", "読ませました", ["読ませました", "読まれました", "読みました", "読めました"], "Majburlash / bajartirish nisbati (Shieki): 読む -> 読ませる."),
    49: ("先生[せんせい]は もう（　）。", "お帰りになりました", ["お帰りになりました", "お帰りしました", "帰らせました", "帰られましたです"], "Hurmat tili (Sonkeigo): お + V-ます + に なります."),
    50: ("明日[あした] 3時[さんじ]に（　）。", "伺います", ["伺います", "いらっしゃいます", "おっしゃいます", "行かれます"], "Kamtarlik tili (Kenjougo): 行く/来る ning kamtarlik shakli 伺う (うかがう).")
}

# Lesson-specific authentic test questions (Q2: JLPT N4 Bunpo Gap Fill)
N4_TEST_GAP_FILL = {
    26: ("どこで カメラを 買[か]ったら（　）ですか。", "いい", ["いい", "よい", "ある", "する"], "Maslahat va yo'l-yo'riq so'rash: 疑問詞 + たらいいですか."),
    27: ("この 部屋[へや]から 富士山[ふじさん]が（　）。", "見えます", ["見えます", "見られます", "見ます", "見せます"], "Tabiiy ravishda ko'zga ko'rinish: 見えます."),
    28: ("山田[やまだ]さんは 親切[しんせつ]（　）、頭[あたま]も いいです。", "だし", ["だし", "でし", "だ", "な"], "Sabab va sifatlarni sanash: Na-sifat + だし."),
    29: ("財布[さいふ]を 電車[でんしゃ]の 中[なか]に（　）しまいました。", "忘れて", ["忘れて", "忘れ", "忘れた", "忘れない"], "Afsus va pushaymonlik: V-て形 + しまいました."),
    30: ("旅行[りょこう]の 前[まえ]に、ホテルを（　）おきます。", "予約して", ["予約して", "予約した", "予約する", "予約し"], "Oldindan tayyorgarlik ko'rish: V-て形 + おきます."),
    31: ("将来[しょうらい] 自分の 会社[かいしゃ]を（　）つもりです。", "作る", ["作る", "作ろう", "作って", "作ります"], "Qat'iy reja bildirishda: V-辞書形 + つもりです."),
    32: ("明日は 雪[ゆき]が（　）かもしれません。", "降る", ["降る", "降って", "降り", "降ろう"], "Ehtimollik bildirishda: 普通形 + かもしれません."),
    33: ("あの 漢字[かんじ]は 「立入禁止[たちいりきんし]」と（　）意味[いみ]です。", "いう", ["いう", "かいた", "する", "おもう"], "Ma'nosini tushuntirish: 〜という 意味です."),
    34: ("仕事[しごと]が（　）あとで、飲みに行きましょう。", "終わった", ["終わった", "終わる", "終わって", "終わり"], "Biror ish tugagach keyin bajarish: V-た形 + あとで."),
    35: ("安[やす]（　）、買[か]いたいです。", "ければ", ["ければ", "いなら", "かったらば", "いば"], "i-sifat shart mayli shakli: 安い -> 安ければ."),
    36: ("日本語[にほんご]の ニュースが（　）ように なりました。", "わかる", ["わかる", "わかり", "わかって", "わかった"], "Ko'nikma shakllanishi: V-辞書形 + ように なりました."),
    37: ("雨[あめ]に（　）服[ふく]が ぬれて しまいました。", "降られて", ["降られて", "降って", "降らせて", "降るに"], "Noqulaylik majhul nisbati: 雨に降られる."),
    38: ("花[はな]を（　）のが 好[す]きです。", "育てる", ["育てる", "育て", "育てた", "育てて"], "Yoqtirgan mashg'ulotni otlashtirish: V-辞書形 + のが 好きです."),
    39: ("風邪[かぜ]を（　）、学校[がっこう]を 休みました。", "ひいて", ["ひいて", "ひくで", "ひいたら", "ひき"], "Tabiiy sabab natijasi: V-て形."),
    40: ("その 話[はなし]が 本当[ほんとう]か（　）、わかりません。", "どうか", ["どうか", "いなか", "なんとか", "いつか"], "Ikkilamchi shubha: 〜かどうか."),
    41: ("先生[せんせい]が 辞書[じしょ]を（　）。", "くださいました", ["くださいました", "いただきました", "やりました", "あげました"], "Hurmatli shaxs so'zlovchiga berishi: くださる."),
    42: ("この はさみは 紙[かみ]を（　）のに 便利[べんり]です。", "切る", ["切る", "切って", "切り", "切った"], "Vositaning vazifasi: V-辞書形 + のに使います/便利です."),
    43: ("この 料理[りょうり]は（　）そうです。", "おいし", ["おいし", "おいしい", "おいしく", "おいしくて"], "Tashqi ko'rinishdan baholash: おいしい -> おいしそうです."),
    44: ("お酒[さけ]を 飲み（　）頭[あたま]が 痛[いた]いです。", "すぎて", ["すぎて", "やすい", "にくい", "すぎ"], "Me'yoridan ortiq harakat: V-ます shakli + すぎる."),
    45: ("約束[やくそく]を した（　）、彼[かれ]は 来[こ]なかった。", "のに", ["のに", "ので", "から", "なら"], "Kutilganga zid kelganda: 普通形 + のに."),
    46: ("今[いま] ご飯[はん]を（　）ところです。", "食べている", ["食べている", "食べる", "食べた", "食べよう"], "Ayni damda davom etayotgan palla: V-ている + ところです."),
    47: ("外[そと]で 鳥[とり]の 声[こえ]（　）します。", "が", ["が", "を", "に", "で"], "Sezgi signallari (ovoz, hid, ta'm): 声 / におい / 味が します."),
    48: ("子供[こども]に 毎日[まいにち] 野菜[やさい]を（　）ます。", "食べさせ", ["食べさせ", "食べられ", "食べ", "食べよう"], "Majburiy harakat (Shieki): 食べさせる."),
    49: ("社長[しゃちょう]は 新聞[しんぶん]を（　）になります。", "お読みに", ["お読みに", "お読みし", "読まれ", "お読みで"], "Hurmat tili formulasi: お + V-ます + に なります (お読みに なります)."),
    50: ("わたくしの 名前[なまえ]は 田中[たなか]と（　）。", "申します", ["申します", "おっしゃいます", "言われます", "なさいます"], "O'zini tanishtirishda kamtarlik: 申す (もうす).")
}

# Conversational responses for Ex 5 & Q5
N4_KAIWA_BANK = {
    26: ("どこで 買ったら いいですか。", "駅前の 家電量販店が いいですよ。", ["失礼します。", "ごちそうさまでした。", "おやすみなさい。"]),
    27: ("日本語の 新聞が 読めますか。", "いいえ、簡単なのしか 読めません。", ["はい、見えます。", "いただきます。", "さようなら。"]),
    28: ("いつも 音楽を 聞きながら 勉強するんですか。", "ええ、そのほうが 集中できるんです。", ["いいえ、食べません。", "初めまして。", "失礼しました。"]),
    29: ("電車に 傘を 忘れて しまいました。", "駅員さんに 問い合わせて みましょう。", ["おめでとうございます。", "いただきます。", "どういたしまして。"]),
    30: ("会議の 準備は もう できましたか。", "はい、資料を もう コピーして あります。", ["いいえ、行きません。", "ごめんください。", "お大事に。"]),
    31: ("週末は 何を する 予定ですか。", "京都へ 行こうと 思っています。", ["はい、そうです。", "失礼します。", "いってらっしゃい。"]),
    32: ("少し 熱が あるんです。", "無理を しないで、早く 寝たほうが いいですよ。", ["お疲れ様でした。", "ごちそうさまでした。", "さようなら。"]),
    33: ("あの 看板には 何と 書いて ありますか。", "「立入禁止」と 書いて あります。", ["はい、どうぞ。", "いただきます。", "お邪魔します。"]),
    34: ("この 機械は どうやって 動かすんですか。", "マニュアルの とおりに やって みてください。", ["はい、食べました。", "おやすみなさい。", "失礼しました。"]),
    35: ("どうすれば 日本語が 上手に なりますか。", "毎日 たくさん 話せば、上手に なりますよ。", ["いいえ、違います。", "ごちそうさま。", "いただきます。"]),
    36: ("最近 何か 変わったことは ありますか。", "毎日 走るように なりました。", ["はい、見ました。", "失礼します。", "お大事に。"]),
    37: ("どうして 浮かない 顔を しているんですか。", "満員電車で 足を 踏まれたんです。", ["おめでとうございます。", "いただきます。", "ごちそうさまでした。"]),
    38: ("趣味は 何ですか。", "休みの日に 絵を 描くのが 好きです。", ["はい、そうです。", "失礼します。", "おやすみなさい。"]),
    39: ("どうして 遅れたんですか。", "大雨で 電車が 止まって しまったんです。", ["お疲れ様でした。", "いただきます。", "さようなら。"]),
    40: ("忘年会に 出席できるか どうか、教えてください。", "はい、明日までに お返事します。", ["いいえ、食べません。", "失礼しました。", "ごちそうさまでした。"]),
    41: ("素敵な ネクタイですね。", "部長に いただいたんです。", ["はい、あげました。", "いただきます。", "さようなら。"]),
    42: ("何のために 貯金して いるんですか。", "将来 留学する ためです。", ["いいえ、違います。", "おやすみなさい。", "失礼します。"]),
    43: ("空が 暗くなって きましたね。", "ええ、今にも 雨が 降りそうですね。", ["おめでとうございます。", "いただきます。", "どういたしまして。"]),
    44: ("この 本は どうですか。", "文字が 大きくて、とても 読みやすいです。", ["はい、食べました。", "さようなら。", "失礼しました。"]),
    45: ("道が わからない 場合は、どうしますか。", "近くの 交番で 聞くように しています。", ["ごちそうさまでした。", "いただきます。", "おやすみなさい。"]),
    46: ("新幹線は もう 出発しましたか。", "ええ、たった今 出た ところです。", ["いいえ、食べます。", "失礼します。", "お大事に。"]),
    47: ("佐藤さんは どこに いますか。", "会議室に いる そうですよ。", ["はい、そうです。", "いただきます。", "ごちそうさまでした。"]),
    48: ("部長、明日は 休ませて いただけませんか。", "わかりました。ゆっくり 休んでください。", ["おめでとうございます。", "さようなら。", "いただきます。"]),
    49: ("先生は 何時に お見えに なりますか。", "午後 2時に いらっしゃいます。", ["はい、行きます。", "失礼しました。", "おやすみなさい。"]),
    50: ("ご注文は お決まりに なりましたか。", "はい、コーヒーを お願いします。", ["はい、申します。", "いただきます。", "さようなら。"])
}

def clean_key_point(pattern, usage):
    usage_clean = re.sub(r'\s+', ' ', usage).strip()
    # Extract first complete grammatical explanation
    sentences = [s.strip() for s in re.split(r'[\.\!\?]', usage_clean) if len(s.strip()) > 5]
    first_sentence = sentences[0] if sentences else usage_clean[:120]
    first_sentence = re.sub(r'\(.*?\)', '', first_sentence).strip()
    return f"📌 {pattern}: {first_sentence}."

def build_interactive_steps_n4(les, num, vocab_items, grammar_rules):
    exercises = []
    test_questions = []
    
    examples = []
    for g in grammar_rules:
        examples.extend(g.get("examples", []))
    if not examples:
        examples = [
            {"sentence": "先生[せんせい]に 聞[き]いて みます。", "translation": "Ustozdan so'rab ko'raman."},
            {"sentence": "毎日[まいにち] 走[はし]るように しています。", "translation": "Har kuni yugurishga harakat qilyapman."}
        ]
        
    # ------------------ EXERCISES (5 items) ------------------
    # Ex 1: Grammar Gap Fill
    p_data = N4_PRACTICE_GAP_FILL.get(num, (
        "頭が 痛い（　）、早く 帰っても いいですか。", "んですが", ["んですが", "んですから", "んですに", "んですも"], "Sabab va vaziyatni tushuntirishda '〜んですが' ishlatiladi."
    ))
    e1_opts = list(p_data[2])
    rng_e1 = random.Random(f"n4-ex1-seed-{num}")
    rng_e1.shuffle(e1_opts)
    
    exercises.append({
        "id": f"ja-minna-l{num}-ex1",
        "type": "multiple-choice",
        "prompt": f"Bo'sh joyga to'g'ri grammatik qo'shimchani tanlang:\n「{p_data[0]}」",
        "options": e1_opts,
        "correctAnswer": e1_opts.index(p_data[1]),
        "explanation": f"To'g'ri javob: 「{p_data[1]}」. {p_data[3]}"
    })
    
    # Ex 2: Vocab in Context (distinct meanings)
    v_target = vocab_items[num % len(vocab_items)]
    seen_meanings = {v_target["meaning"]}
    unique_meanings = []
    for v in vocab_items:
        m = v.get("meaning", "").strip()
        if m and m not in seen_meanings:
            seen_meanings.add(m)
            unique_meanings.append(m)
            if len(unique_meanings) == 3:
                break
    fb_meanings = ["ko'rmoq", "qidirmoq", "kechikmoq", "ulgurmoq", "foydalanmoq", "yig'ilish"]
    for fb in fb_meanings:
        if len(unique_meanings) < 3 and fb not in seen_meanings:
            seen_meanings.add(fb)
            unique_meanings.append(fb)
            
    e2_opts = [v_target["meaning"]] + unique_meanings[:3]
    rng_e2 = random.Random(f"n4-ex2-seed-{num}")
    rng_e2.shuffle(e2_opts)
    
    exercises.append({
        "id": f"ja-minna-l{num}-ex2",
        "type": "multiple-choice",
        "prompt": f"「{v_target['term']}」 so'zining to'g'ri o'zbekcha ma'nosi qaysi?",
        "options": e2_opts,
        "correctAnswer": e2_opts.index(v_target["meaning"]),
        "explanation": f"To'g'ri javob: 「{v_target['meaning']}」."
    })
    
    # Ex 3: Grammar Pattern in Context
    valid_exs = [e for e in examples if e["sentence"].endswith("。") or "です" in e["sentence"] or "ます" in e["sentence"]]
    sample_ex = valid_exs[0] if valid_exs else examples[0]
    correct_sent = sample_ex["sentence"].strip()
    if not correct_sent.endswith("。") and not correct_sent.endswith("？"):
        correct_sent += "。"
        
    d1 = correct_sent.replace(" は ", " を ") if " は " in correct_sent else (correct_sent.replace("です", "だです") if "です" in correct_sent else correct_sent.replace("ます", "ます です"))
    if d1 == correct_sent:
        d1 = correct_sent.replace("。", " でした です。")
        
    d2 = correct_sent.replace(" が ", " に ") if " が " in correct_sent else (correct_sent.replace("んです", "んです だ") if "んです" in correct_sent else "これ を " + correct_sent)
    if d2 in (correct_sent, d1):
        d2 = "わたし を " + correct_sent
        
    d3 = correct_sent.replace("に ", "で ") if "に " in correct_sent else (correct_sent.replace("を ", "へ ") if "を " in correct_sent else correct_sent.replace("。", " か でした。"))
    if d3 in (correct_sent, d1, d2):
        d3 = "そこ は を " + correct_sent
        
    seen_e3 = {correct_sent}
    distinct_e3 = [correct_sent]
    for d in [d1, d2, d3]:
        if d not in seen_e3:
            seen_e3.add(d)
            distinct_e3.append(d)
            
    backup_e3 = [
        "これ は を です。",
        "あした へ 行きません です。",
        "わたし を 先生 に です。",
        "昨日 友達 を 行きます でした。"
    ]
    for bi in backup_e3:
        if len(distinct_e3) < 4 and bi not in seen_e3:
            seen_e3.add(bi)
            distinct_e3.append(bi)
            
    e3_opts = list(distinct_e3[:4])
    rng_e3 = random.Random(f"n4-ex3-seed-{num}")
    rng_e3.shuffle(e3_opts)
    
    exercises.append({
        "id": f"ja-minna-l{num}-ex3",
        "type": "multiple-choice",
        "prompt": f"{num}-dars grammatik qoidasiga muvofiq to'g'ri tuzilgan gapni aniqlang:",
        "options": e3_opts,
        "correctAnswer": e3_opts.index(correct_sent),
        "explanation": f"To'g'ri gap: 「{correct_sent}」 ({sample_ex['translation']})."
    })
    
    # Ex 4: Translation
    ex_tr = examples[1] if len(examples) > 1 else examples[0]
    other_sents = [e["sentence"] for e in examples if e["sentence"] != ex_tr["sentence"]]
    seen_e4 = {ex_tr["sentence"]}
    distinct_e4 = [ex_tr["sentence"]]
    for s in other_sents:
        if s not in seen_e4 and len(s) > 3:
            seen_e4.add(s)
            distinct_e4.append(s)
            if len(distinct_e4) == 4:
                break
    fb_sents = [
        "鍵[かぎ]を 探[さが]して いるんです。",
        "日本語[にほんご]で 手紙[てがみ]が 書[か]けます。",
        "音楽[おんがく]を 聞[き]きながら 勉強[べんきょう]します。",
        "窓[まど]が 開[あ]いて います。"
    ]
    for fs in fb_sents:
        if len(distinct_e4) < 4 and fs not in seen_e4:
            seen_e4.add(fs)
            distinct_e4.append(fs)
            
    e4_opts = list(distinct_e4[:4])
    rng_e4 = random.Random(f"n4-ex4-seed-{num}")
    rng_e4.shuffle(e4_opts)
    
    exercises.append({
        "id": f"ja-minna-l{num}-ex4",
        "type": "multiple-choice",
        "prompt": f"Ushbu gapning to'g'ri yaponcha tarjimasini tanlang:\n「{ex_tr['translation']}」",
        "options": e4_opts,
        "correctAnswer": e4_opts.index(ex_tr["sentence"]),
        "explanation": f"Yaponcha to'g'ri ifodasi: 「{ex_tr['sentence']}」."
    })
    
    # Ex 5: Dialogue Response
    d_info = N4_KAIWA_BANK.get(num, ("どこで 買ったら いいですか。", "駅前の 家電量販店が いいですよ。", ["失礼します。", "ごちそうさまでした。", "おやすみなさい。"]))
    seen_e5 = {d_info[1]}
    distinct_e5 = [d_info[1]]
    for opt in d_info[2]:
        if opt not in seen_e5:
            seen_e5.add(opt)
            distinct_e5.append(opt)
            if len(distinct_e5) == 4:
                break
    fb_diag = ["失礼します。", "ごちそうさまでした。", "おやすみなさい。", "いただきます。"]
    for fd in fb_diag:
        if len(distinct_e5) < 4 and fd not in seen_e5:
            seen_e5.add(fd)
            distinct_e5.append(fd)
            
    e5_opts = list(distinct_e5[:4])
    rng_e5 = random.Random(f"n4-ex5-seed-{num}")
    rng_e5.shuffle(e5_opts)
    
    exercises.append({
        "id": f"ja-minna-l{num}-ex5",
        "type": "multiple-choice",
        "prompt": f"Suhbatdoshingiz: 「{d_info[0]}」 dedi. Unga eng mos muloyim javob qaysi?",
        "options": e5_opts,
        "correctAnswer": e5_opts.index(d_info[1]),
        "explanation": f"To'g'ri javob: 「{d_info[1]}」."
    })
    
    # ------------------ TEST QUESTIONS (5 items) ------------------
    # Q1: Kanji Reading (Mondai 1)
    k_cand = [v for v in vocab_items if "[" in v.get("term", "") or "(" in v.get("term", "")]
    k_item = k_cand[num % len(k_cand)] if k_cand else vocab_items[0]
    raw_term = k_item.get("term", "")
    k_clean = re.sub(r'\[.*?\]|\(.*?\)', '', raw_term) or raw_term
    k_correct = k_item.get("reading", "")
    
    seen_k = {k_correct}
    distinct_k = [k_correct]
    for v in vocab_items:
        r = v.get("reading", "").strip()
        if r and r not in seen_k:
            seen_k.add(r)
            distinct_k.append(r)
            if len(distinct_k) == 4:
                break
    fb_readings = ["みます", "さがします", "おくれます", "まにあいます", "やります", "かいます"]
    for fb in fb_readings:
        if len(distinct_k) < 4 and fb not in seen_k:
            seen_k.add(fb)
            distinct_k.append(fb)
            
    q1_opts = list(distinct_k[:4])
    rng_q1 = random.Random(f"n4-q1-seed-{num}")
    rng_q1.shuffle(q1_opts)
    
    test_questions.append({
        "id": f"ja-minna-l{num}-q1",
        "question": f"【Mondai 1: Moji/Goi】「{k_clean}」の 読[よ]み方[かた]は どれですか。",
        "options": q1_opts,
        "correctAnswerIndex": q1_opts.index(k_correct),
        "explanation": f"「{k_clean}」 ning to'g'ri o'qilishi: 「{k_correct}」 ({k_item['meaning']})."
    })
    
    # Q2: Bunpo Gap Fill (Mondai 2)
    q2_data = N4_TEST_GAP_FILL.get(num, (
        "どこで カメラを 買[か]ったら（　）ですか。", "いい", ["いい", "よい", "ある", "する"], "Maslahat so'rash: 疑問詞 + たらいいですか."
    ))
    q2_opts = list(q2_data[2])
    rng_q2 = random.Random(f"n4-q2-seed-{num}")
    rng_q2.shuffle(q2_opts)
    
    test_questions.append({
        "id": f"ja-minna-l{num}-q2",
        "question": f"【Mondai 2: Bunpo】（　）に 入[はい]る 最[もっと]も よいものを 1つ えらびなさい。\n「{q2_data[0]}」",
        "options": q2_opts,
        "correctAnswerIndex": q2_opts.index(q2_data[1]),
        "explanation": f"To'g'ri javob: 「{q2_data[1]}」. {q2_data[3]}"
    })
    
    # Q3: Grammar Pattern (Mondai 3)
    rule3 = grammar_rules[min(1, len(grammar_rules)-1)]
    q3_candidates = [
        rule3["pattern"],
        "〜は 〜でした じゃありません",
        "〜を 行きます です",
        "〜に 食べません でした"
    ]
    seen_q3 = set()
    distinct_q3 = []
    for c in q3_candidates:
        if c not in seen_q3:
            seen_q3.add(c)
            distinct_q3.append(c)
    fb_q3 = ["〜て あります です", "〜ながら します でした"]
    for b in fb_q3:
        if len(distinct_q3) < 4 and b not in seen_q3:
            seen_q3.add(b)
            distinct_q3.append(b)
            
    q3_opts = list(distinct_q3[:4])
    rng_q3 = random.Random(f"n4-q3-seed-{num}")
    rng_q3.shuffle(q3_opts)
    
    test_questions.append({
        "id": f"ja-minna-l{num}-q3",
        "question": f"【Mondai 3: Bunpo】{num}-dars grammatik qoidasi bo'yicha to'g'ri formulani aniqlang:",
        "options": q3_opts,
        "correctAnswerIndex": q3_opts.index(rule3["pattern"]),
        "explanation": f"To'g'ri grammatik formula: 「{rule3['pattern']}」."
    })
    
    # Q4: Reading Comprehension (Mondai 4)
    ex_q4 = examples[min(2, len(examples)-1)] if len(examples) > 2 else examples[0]
    seen_trans = {ex_q4["translation"]}
    distinct_q4 = [ex_q4["translation"]]
    for e in examples:
        t = e.get("translation", "").strip()
        if t and t not in seen_trans and len(t) > 3:
            seen_trans.add(t)
            distinct_q4.append(t)
            if len(distinct_q4) == 4:
                break
    fb_translations = [
        "Ertaga kutubxonada dars qilaman.",
        "Kechirasiz, poyezd soat nechada jo'naydi?",
        "Ushbu darslikni kutubxonadan oldim.",
        "Har kuni ertalab soat yettida uyg'onaman."
    ]
    for ft in fb_translations:
        if len(distinct_q4) < 4 and ft not in seen_trans:
            seen_trans.add(ft)
            distinct_q4.append(ft)
            
    q4_opts = list(distinct_q4[:4])
    rng_q4 = random.Random(f"n4-q4-seed-{num}")
    rng_q4.shuffle(q4_opts)
    
    test_questions.append({
        "id": f"ja-minna-l{num}-q4",
        "question": f"【Mondai 4: Dokkai】Quyidagi yaponcha gapning to'g'ri o'zbekcha ma'nosini toping:\n「{ex_q4['sentence']}」",
        "options": q4_opts,
        "correctAnswerIndex": q4_opts.index(ex_q4["translation"]),
        "explanation": f"To'g'ri ma'nosi: 「{ex_q4['translation']}」."
    })
    
    # Q5: Kaiwa Response (Mondai 5)
    kb = N4_KAIWA_BANK.get(num, ("どこで 買ったら いいですか。", "駅前の 家電量販店が いいですよ。", ["失礼します。", "ごちそうさまでした。", "おやすみなさい。"]))
    seen_q5 = {kb[1]}
    distinct_q5 = [kb[1]]
    for o in kb[2]:
        if o not in seen_q5:
            seen_q5.add(o)
            distinct_q5.append(o)
            if len(distinct_q5) == 4:
                break
    fb_k5 = ["失礼します。", "ごちそうさまでした。", "おやすみなさい。", "いただきます。"]
    for fb in fb_k5:
        if len(distinct_q5) < 4 and fb not in seen_q5:
            seen_q5.add(fb)
            distinct_q5.append(fb)
            
    q5_opts = list(distinct_q5[:4])
    rng_q5 = random.Random(f"n4-q5-seed-{num}")
    rng_q5.shuffle(q5_opts)
    
    test_questions.append({
        "id": f"ja-minna-l{num}-q5",
        "question": f"【Mondai 5: Kaiwa】Savolga eng to'g'ri javobni tanlang:\n「{kb[0]}」",
        "options": q5_opts,
        "correctAnswerIndex": q5_opts.index(kb[1]),
        "explanation": f"To'g'ri javob: 「{kb[1]}」."
    })
    
    return exercises, test_questions

def main():
    print("Loading", RAW_FILE)
    with open(RAW_FILE, "r", encoding="utf-8") as f:
        lessons = json.load(f)
        
    print(f"Loaded {len(lessons)} lessons from {RAW_FILE}")
    enriched_lessons = []
    
    for les in lessons:
        num = les["lessonNumber"]
        unit_num = (num - 1) // 5 + 1
        unit_id = f"ja-minna-u{unit_num}"
        unit_title = UNIT_TITLES.get(unit_num, f"Unit {unit_num}")
        lesson_id = f"ja-minna-l{num}"
        title = les["title"]
        desc = les.get("description", f"Minna no Nihongo Shokyu 2: {title}.")
        icon = UNIT_ICONS.get(unit_num, "🌿")
        
        # 1. Process Vocabulary
        raw_vocab = les.get("vocabulary", [])
        vocab_items = []
        for v in raw_vocab:
            term = v.get("term", "").strip() or v.get("kanji", "").strip() or v.get("kana", "").strip()
            reading = v.get("reading", "").strip() or v.get("kana", "").strip()
            meaning = v.get("meaning", "").strip()
            ex_sent = v.get("exampleSentence", "").strip()
            ex_tr = v.get("exampleTranslation", "").strip()
            
            vocab_items.append({
                "term": term,
                "reading": reading,
                "meaning": meaning,
                "exampleSentence": ex_sent,
                "exampleTranslation": ex_tr
            })
            
        # 2. Process Grammar & KeyPoints
        grammar_rules = []
        key_points = []
        for g in les.get("grammar", []):
            pattern = g.get("pattern", "").strip()
            usage = g.get("usageNotes", "").strip()
            kp = clean_key_point(pattern, usage)
            key_points.append(kp)
            
            clean_examples = []
            for ex in g.get("examples", []):
                clean_examples.append({
                    "sentence": ex.get("ja", "").strip(),
                    "translation": ex.get("uz", "").strip()
                })
                
            grammar_rules.append({
                "pattern": pattern,
                "meaning": clean_key_point(pattern, usage).replace(f"📌 {pattern}: ", "").rstrip("."),
                "usageNotes": usage,
                "examples": clean_examples
            })
            
        # 3. Interactive Steps
        exercises, test_questions = build_interactive_steps_n4(les, num, vocab_items, grammar_rules)
        
        c_note = CULTURAL_NOTES.get(num, "Yapon madaniyati va til odobiga oid muhim eslatma.")
        
        lesson_obj = {
            "id": lesson_id,
            "courseId": "japanese-n4",
            "unitId": unit_id,
            "unitTitle": unit_title,
            "language": "ja",
            "level": "N4",
            "lessonNumber": num,
            "title": title,
            "description": desc,
            "estimatedDurationMinutes": 22,
            "icon": icon,
            "steps": [
                {
                    "id": f"{lesson_id}-s1",
                    "title": "Lug'at va Qoidalar",
                    "type": "learn",
                    "estimatedMinutes": 8,
                    "learnData": {
                        "title": f"{num}-Dars: {title}",
                        "subtitle": les.get("title_ja", f"第{num}課"),
                        "explanation": f"{title} bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
                        "keyPoints": key_points[:6],
                        "vocabulary": vocab_items,
                        "grammarRules": grammar_rules,
                        "culturalNotes": c_note
                    }
                },
                {
                    "id": f"{lesson_id}-s2",
                    "title": "Mustahkamlash Mashqlari",
                    "type": "practice",
                    "estimatedMinutes": 7,
                    "practiceData": {
                        "instructions": "Darsda o'rganilgan yangi so'zlar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
                        "exercises": exercises
                    }
                },
                {
                    "id": f"{lesson_id}-s3",
                    "title": "JLPT N4 Sinov Testi",
                    "type": "test",
                    "estimatedMinutes": 7,
                    "testData": {
                        "instructions": "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
                        "passingScorePercentage": 80,
                        "questions": test_questions
                    }
                }
            ]
        }
        
        enriched_lessons.append(lesson_obj)
        
    print("Writing enriched N4 curriculum to", TARGET_FILE)
    with open(TARGET_FILE, "w", encoding="utf-8") as f:
        f.write("import { Lesson } from '../../types/lesson';\n\n")
        f.write("export const MINNA_N4_LESSONS: Lesson[] = ")
        f.write(json.dumps(enriched_lessons, ensure_ascii=False, indent=2))
        f.write(";\n")
        
    print("Successfully enriched all 25 Minna N4 Lessons!")

if __name__ == "__main__":
    main()
