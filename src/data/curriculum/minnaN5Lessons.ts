import { MINNA_N5_QUIZ_DATABASE } from './minnaN5QuizDatabase';
import { Lesson } from '../../types/lesson';

export const MINNA_N5_LESSONS: Lesson[] = [
  {
    id: 'ja-minna-l1',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u1',
    unitTitle: "Minna Shokyu 1: 1–5 Darslar (Boshlang'ich Tanishuv va Harakat)",
    language: 'ja',
    level: 'N5',
    lessonNumber: 1,
    title: "1-dars: Tanishuv va O'zini tanishtirish",
    description:
      "Minna no Nihongo Shokyu 1: 1-dars: Tanishuv va O'zini tanishtirish. Darsda 50 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l1-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "1-dars: Tanishuv va O'zini tanishtirish",
          subtitle: '第1課：自己紹介と挨拶',
          explanation:
            "1-dars: Tanishuv va O'zini tanishtirish bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1. OT 1 は  OT 2 です: 1) は yuklamasi は yuklamasi birikib kelgan ot gapning mavzusi bo'lib keliadi.",
            '📌 2.   OT 1 は  OT 2 じゃありません: じゃありません、です ning inkor shaklidir.',
            "📌 3.  GAP  か: 1) か yuklamasi か yuklamasi shubha, savol, ikkilanish kabi ma'nolarni bildirish uchun qo'llaniladi.",
            "📌 4.  OT  も: Avvalgi gapdagi mavzuni takrorlab qo'llaganda は o'rniga も ( ham ) qo'shimchasi mavzu bo'lib kelgan so'zdan keyin qo'yiladi.",
            "📌 5.  OT 1  の OT 2: の qo'shimchasi ikki otni bog'lash uchun qo'llanib, tegishlilikni bildiradi.",
            "📌 6.  ~  さん: さん qo'shimchasi suhbatdosh yoki uchinchi shaxs ismiga qo'shilib, so'zlovchining unga bo'lgan hurmatini ko'rsatadi.",
          ],
          vocabulary: [
            {
              term: 'わたし',
              reading: 'わたし',
              meaning: 'men',
              exampleSentence: 'わたしは 学生[がくせい] です。',
              exampleTranslation: 'Men talabaman.',
            },
            {
              term: 'わたしたち',
              reading: 'わたしたち',
              meaning: 'biz',
              exampleSentence: 'わたしたちは 留学生[りゅうがくせい] です。',
              exampleTranslation: 'Biz xorijiy talabalarmiz.',
            },
            {
              term: 'あなた',
              reading: 'あなた',
              meaning: 'siz (sen)',
              exampleSentence: 'あなたは 日本人[にほんじん] ですか。',
              exampleTranslation: 'Siz yaponmisiz?',
            },
            {
              term: 'あの人 (あのひと)',
              reading: 'あのひと',
              meaning: 'u kishi (u ayol (qiz))',
              exampleSentence: 'あの 人[ひと]は だれですか。',
              exampleTranslation: 'U kishi kim?',
            },
            {
              term: 'あの方 (あのかた)',
              reading: 'あのかた',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'あの 方[かた]は どなたですか。',
              exampleTranslation: 'U kishi (hurmat shakli) kimlar?',
            },
            {
              term: '皆さん (みなさん)',
              reading: 'みなさん',
              meaning: 'xonimlar va janoblar, hamma, sizlar',
              exampleSentence: '皆さん[みなさん]、おはようございます。',
              exampleTranslation: 'Hammaga xayrli tong.',
            },
            {
              term: '～さん',
              reading: '～さん',
              meaning: "janob / xonim (hurmat qo'shimchasi)",
              exampleSentence: '田中[たなか]さんは 先生[せんせい] です。',
              exampleTranslation: "Tanaka janoblari o'qituvchi.",
            },
            {
              term: '～ちゃん',
              reading: '～ちゃん',
              meaning: "erkalash qo'shimchasi",
              exampleSentence: 'タワポンちゃんの 妹[いもうと]は 5歳[ごさい] です。',
              exampleTranslation: 'Tawaponchanning singlisi 5 yoshda.',
            },
            {
              term: '～君 (～くん)',
              reading: '～くん',
              meaning: "erkalash qo'shimchasi",
              exampleSentence: '山田[やまだ]くんは サッカーが 好[す]きです。',
              exampleTranslation: "Yamada-kun futbolni yaxshi ko'radi.",
            },
            {
              term: '～人 (～じん)',
              reading: '～じん',
              meaning: "millat qo'shimchasi",
              exampleSentence: 'サントスさんは ブラジル人[じん] です。',
              exampleTranslation: 'Janob Santos braziliyalik.',
            },
            {
              term: 'アメリカ人',
              reading: 'アメリカ人',
              meaning: 'Amerikalik',
              exampleSentence: 'ミラーさんは アメリカ人 です。',
              exampleTranslation: 'Janob Miller amerikalik.',
            },
            {
              term: '先生 (せんせい)',
              reading: 'せんせい',
              meaning: 'ustoz',
              exampleSentence: '木村[きむら]先生は 日本語[にほんご]の 先生です。',
              exampleTranslation: "Kimura ustoz yapon tili o'qituvchisi.",
            },
            {
              term: '教師 (きょうし)',
              reading: 'きょうし',
              meaning: "o'qituvchi , domla",
              exampleSentence: 'わたしは 教師[きょうし] じゃありません。',
              exampleTranslation: "Men o'qituvchi emasman.",
            },
            {
              term: '学生 (がくせい)',
              reading: 'がくせい',
              meaning: 'talaba',
              exampleSentence: 'ミラーさんは アメリカの 学生[がくせい] です。',
              exampleTranslation: 'Janob Miller amerikalik talaba.',
            },
            {
              term: '会社員 (かいしゃいん)',
              reading: 'かいしゃいん',
              meaning: 'firma xodimi, korxona xodimi',
              exampleSentence: '父[ちち]は 会社員[かいしゃいん] です。',
              exampleTranslation: 'Otam firma xodimi.',
            },
            {
              term: '社員 (しゃいん)',
              reading: 'しゃいん',
              meaning: 'firma xodimi',
              exampleSentence: '田中[たなか]さんは 社員[しゃいん] です。',
              exampleTranslation: 'Tanaka janoblari firma xodimi.',
            },
            {
              term: '銀行員 (ぎんこういん)',
              reading: 'ぎんこういん',
              meaning: 'bank xodimi',
              exampleSentence: '山田[やまだ]さんは 銀行員[ぎんこういん] です。',
              exampleTranslation: 'Yamada janoblari bank xodimi.',
            },
            {
              term: '医者 (いしゃ)',
              reading: 'いしゃ',
              meaning: 'shifokor',
              exampleSentence: 'あの 方[かた]は 病院[びょういん]の 医者[いしゃ] です。',
              exampleTranslation: 'U kishi shifoxona shifokori.',
            },
            {
              term: '研究者 (けんきゅうしゃ)',
              reading: 'けんきゅうしゃ',
              meaning: 'tadqiqotchi, ilmiy-izlanuvchi',
              exampleSentence: 'ワットさんは 大学[だいがく]の 研究者[けんきゅうしゃ] です。',
              exampleTranslation: 'Janob Watt universitet tadqiqotchisi.',
            },
            {
              term: 'エンジニア',
              reading: 'エンジニア',
              meaning: 'muhandis',
              exampleSentence: 'グプタさんは IMCの エンジニアです。',
              exampleTranslation: 'Janob Gupta IMC kompaniyasi muhandisi.',
            },
            {
              term: '大学 (だいがく)',
              reading: 'だいがく',
              meaning: 'universitet, institut',
              exampleSentence: 'さくら大学[だいがく]へ 行[い]きます。',
              exampleTranslation: 'Sakura universitetiga boraman.',
            },
            {
              term: '病院 (びょういん)',
              reading: 'びょういん',
              meaning: 'shifoxona, kasalxona',
              exampleSentence: 'あそこは 神戸[こうべ]病院[びょういん] です。',
              exampleTranslation: 'Anavi yer Kobe shifoxonasi.',
            },
            {
              term: '電気 (でんき)',
              reading: 'でんき',
              meaning: 'chiroq',
              exampleSentence: '電気[でんき]を つけて ください。',
              exampleTranslation: 'Chiroqni yoqing, iltimos.',
            },
            {
              term: 'だれどなた',
              reading: 'だれどなた',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った だれどなた です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: '～歳 (～さい)',
              reading: '～さい',
              meaning: '~yosh',
              exampleSentence: 'わたしは 20歳[はたち] です。',
              exampleTranslation: 'Men 20 yoshdaman.',
            },
            {
              term: '何歳 (なんさい)',
              reading: 'なんさい',
              meaning: 'necha yosh',
              exampleSentence: 'お名前[なまえ]と おいくつ（何歳[なんさい]）ですか。',
              exampleTranslation: 'Ismingiz nima va yoshingiz nechada?',
            },
            {
              term: 'おいくつ',
              reading: 'おいくつ',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った おいくつ です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: 'はい',
              reading: 'はい',
              meaning: 'ha',
              exampleSentence: 'はい、そうです。',
              exampleTranslation: 'Ha, shunday.',
            },
            {
              term: 'いいえ',
              reading: 'いいえ',
              meaning: "yo'q",
              exampleSentence: 'いいえ、違[ちが]います。',
              exampleTranslation: "Yo'q, unday emas.",
            },
            {
              term: '失礼ですが (しつれいですが)',
              reading: 'しつれいですが',
              meaning: 'Kechirasiz, ~',
              exampleSentence: 'これは わたしが 買[か]った 失礼ですが[しつれいですが] です。',
              exampleTranslation: 'Bu men sotib olgan kechirasiz, ~.',
            },
            {
              term: 'お名前は？ (おなまえは？)',
              reading: 'おなまえは？',
              meaning: 'Ismingiz nima?',
              exampleSentence: 'これは わたしが 買[か]った お名前は？[おなまえは？] です。',
              exampleTranslation: 'Bu men sotib olgan ismingiz nima?.',
            },
            {
              term: '初めまして。 (はじめまして。)',
              reading: 'はじめまして。',
              meaning: "O'zimni tanishtirishga ruxsat bersangiz.",
              exampleSentence: 'これは わたしが 買[か]った 初めまして。[はじめまして。] です。',
              exampleTranslation: "Bu men sotib olgan o'zimni tanishtirishga ruxsat bersangiz..",
            },
            {
              term: 'どうぞよろしく',
              reading: 'どうぞよろしく',
              meaning: 'Tanishganimdan xursandman',
              exampleSentence: 'これは わたしが 買[か]った どうぞよろしく です。',
              exampleTranslation: 'Bu men sotib olgan tanishganimdan xursandman.',
            },
            {
              term: 'お願いします (おねがいします)',
              reading: 'おねがいします',
              meaning: "iltimos, so'rayman",
              exampleSentence: '毎日[まいにち] [お願いします][[おねがいします]]。',
              exampleTranslation: "Har kuni iltimos, so'rayman.",
            },
            {
              term: 'こちらは～さんです。',
              reading: 'こちらは～さんです。',
              meaning: 'Bu kishi janob / xonim ~.',
              exampleSentence: '山田[やまだ]こちらはさんです。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada bu kishi janob / xonim ~. samimiy inson.',
            },
            {
              term: '～から来ました。 (～からきました。)',
              reading: '～からきました。',
              meaning: 'Men ~(davlat nomi)dan kelganman',
              exampleSentence: '山田[やまだ]からきました。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada men ~(davlat nomi)dan kelganman samimiy inson.',
            },
            {
              term: 'アメリカ',
              reading: 'アメリカ',
              meaning: 'Amerika, AQSH',
              exampleSentence: 'これは わたしが 買[か]った アメリカ です。',
              exampleTranslation: 'Bu men sotib olgan amerika, aqsh.',
            },
            {
              term: 'イギリス',
              reading: 'イギリス',
              meaning: 'Angliya, Buyuk Britaniya',
              exampleSentence: 'これは わたしが 買[か]った イギリス です。',
              exampleTranslation: 'Bu men sotib olgan angliya, buyuk britaniya.',
            },
            {
              term: 'インド',
              reading: 'インド',
              meaning: 'Hindiston',
              exampleSentence: 'これは わたしが 買[か]った インド です。',
              exampleTranslation: 'Bu men sotib olgan hindiston.',
            },
            {
              term: 'インドネシア',
              reading: 'インドネシア',
              meaning: 'Indoneziya',
              exampleSentence: 'これは わたしが 買[か]った インドネシア です。',
              exampleTranslation: 'Bu men sotib olgan indoneziya.',
            },
            {
              term: '韓国かんこく',
              reading: '韓国かんこく',
              meaning: 'Janubiy Koreya',
              exampleSentence: 'これは わたしが 買[か]った 韓国[かんこく] です。',
              exampleTranslation: 'Bu men sotib olgan janubiy koreya.',
            },
            {
              term: 'タイ',
              reading: 'タイ',
              meaning: 'Tailand',
              exampleSentence: 'これは わたしが 買[か]った タイ です。',
              exampleTranslation: 'Bu men sotib olgan tailand.',
            },
            {
              term: '中国ちゅうごく',
              reading: '中国ちゅうごく',
              meaning: 'Xitoy',
              exampleSentence: 'これは わたしが 買[か]った 中国[ちゅうごく] です。',
              exampleTranslation: 'Bu men sotib olgan xitoy.',
            },
            {
              term: 'ドイツ',
              reading: 'ドイツ',
              meaning: 'Olmoniya',
              exampleSentence: 'これは わたしが 買[か]った ドイツ です。',
              exampleTranslation: 'Bu men sotib olgan olmoniya.',
            },
            {
              term: '日本',
              reading: '日本',
              meaning: 'Yaponiya',
              exampleSentence: 'これは わたしが 買[か]った 日[に]本[ほん] です。',
              exampleTranslation: 'Bu men sotib olgan yaponiya.',
            },
            {
              term: 'フランス',
              reading: 'フランス',
              meaning: 'Fransiya',
              exampleSentence: 'これは わたしが 買[か]った フランス です。',
              exampleTranslation: 'Bu men sotib olgan fransiya.',
            },
            {
              term: 'ブラジル',
              reading: 'ブラジル',
              meaning: 'Braziliya',
              exampleSentence: 'これは わたしが 買[か]った ブラジル です。',
              exampleTranslation: 'Bu men sotib olgan braziliya.',
            },
            {
              term: 'さくら大学だいがく／富士ふじ大学だいがく',
              reading: 'さくら大学だいがく／富士ふじ大学だいがく',
              meaning: "universitet nomlari (o'ylab topilgan)",
              exampleSentence:
                'これは わたしが 買[か]った さくら大学[だいがく]／富士[ふじ]大学[だいがく] です。',
              exampleTranslation: "Bu men sotib olgan universitet nomlari (o'ylab topilgan).",
            },
            {
              term: 'IMC／パワー電でん気き／ブラジルエアー',
              reading: 'IMC／パワー電でん気き／ブラジルエアー',
              meaning: 'kompaniyalar nomlari',
              exampleSentence:
                'これは わたしが 買[か]った IMC／パワー電[でん]気[き]／ブラジルエアー です。',
              exampleTranslation: 'Bu men sotib olgan kompaniyalar nomlari.',
            },
            {
              term: '神戸病院',
              reading: '神戸病院',
              meaning: 'Kobe shifoxonasi',
              exampleSentence: 'これは わたしが 買[か]った 神[こう]戸[べ]病[びょう]院[いん] です。',
              exampleTranslation: 'Bu men sotib olgan kobe shifoxonasi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'OT 1 は  OT 2 です',
              meaning:
                "1) は yuklamasi は yuklamasi birikib kelgan ot gapning mavzusi bo'lib keliadi. Siz so'zlashni istagan biror predmetni tanlaysiz, unga は qo'shimchasini qo'shish orqali bu predmet gapning mavzusi ekanligini ko'rsatasiz. Shundan keyin tanlangan mavzudagi gapni tugallaysiz. 💡 Muhim eslatma: は yuklamasi わ (va) deb o'qiladi. 2) です です bilan qo'llanilgan ot, gapda kesim bo'lib keladi. です biror o'y-fikrni yoki tasdiq mazmunini bildiradi. です so'zlovchining tinglovchiga bo'lgan hurmatini ham ko'rsatadi. です gap inkor shaklda (2-bo'limga qarang) yoki o'tgan zamonda (12-darsga qarang) qo'llanilgan bo'lsa o'zgaradi.",
              usageNotes:
                'Minna no Nihongo 1-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは マイク・ミラーです。',
                  translation: 'Men Mayk Millerman.',
                },
                {
                  sentence: 'わたしは エンジニアです。',
                  translation: 'Men muhandisman.',
                },
              ],
            },
            {
              pattern: 'OT 1 は  OT 2 じゃありません',
              meaning:
                "じゃありません、です ning inkor shaklidir. Bu shakl kundalik og'zaki nutqda qo'llaniladi. Rasmiy nutq yoki yozma uslubda esa, ではありません qo'llaniladi. 💡 Muhim eslatma: は「では」 da ham わ deb o'qiladi.",
              usageNotes:
                'Minna no Nihongo 1-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'サントスさんは 学生[がくせい] じゃ ありません。',
                  translation: 'Janob Santos talaba emas.',
                },
              ],
            },
            {
              pattern: 'GAP  か',
              meaning:
                "1) か yuklamasi か yuklamasi shubha, savol, ikkilanish kabi ma'nolarni bildirish uchun qo'llaniladi. So'roq shakli, gapning oxiriga か yuklamasini qo'shish orqali hosil bo'ladi. So'roq gapning oxiri balandroq talaffuz qilinadi. 2) Tasdiqning to'g'ri yoki noto'g'riligi haqidagi so'roq Yuqorida qayd qilinganidek, gapning oxiriga か yuklamasi qo'shilishi bilan so'roq gap hosil bo'ladi. So'zlarning gapdagi tartibi o'zgarmaydi. Bunday uslub orqali hosil bo'lgan so'roq gapda tasdiqning to'g'ri yoki noto'g'ri ekanligi so'raladi. Tasdiqqa rozi yoki noroziligingizga qarab, javobingiz odatda はい yoki いいえ bilan boshlanishi kerak. ･･･はい、アメリカ人[じん] です。 …Ha, amerikalik. 3) So'roq so'zli gaplar So'roq so'z gapning siz bilishni xohlagan qismi o'rniga keladi. Gapda so'z tartibi o'zgarmaydi va gap oxiriga か qo'shiladi. ･･･〔あの 方[かた] は〕 ミラーさんです。 …(U kishi) janob Miller.",
              usageNotes:
                'Minna no Nihongo 1-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ミラーさんは アメリカ人[じん] ですか。',
                  translation: 'Janob Miller amerikalikmi?',
                },
                {
                  sentence: 'ミラーさんは 先生[せんせい] ですか。',
                  translation:
                    "･･･いいえ、先生[せんせい] じゃ ありません。 …Yo'q, o'qituvchi emas.",
                },
                {
                  sentence: 'あの 方[かた] は どなたですか。',
                  translation: 'Ana u kishi kim?',
                },
              ],
            },
            {
              pattern: 'OT  も',
              meaning:
                "Avvalgi gapdagi mavzuni takrorlab qo'llaganda は o'rniga も ( ham ) qo'shimchasi mavzu bo'lib kelgan so'zdan keyin qo'yiladi. グプタさんも 会社員[かいしゃいん] です。 Janob Gupta ham firma xodimi.",
              usageNotes:
                'Minna no Nihongo 1-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ミラーさんは 会社員[かいしゃいん] です。',
                  translation: 'Janob Miller firma xodimi.',
                },
              ],
            },
            {
              pattern: 'OT 1  の OT 2',
              meaning:
                "の qo'shimchasi ikki otni bog'lash uchun qo'llanib, tegishlilikni bildiradi. OT 1 OT 2 ni aniqlaydi. 1-darsda keltirilgan misollarda OT 2 biror-bir korxona yoki jamoani bildirib, OT 1 unga tegishliligini bildiradi.",
              usageNotes:
                'Minna no Nihongo 1-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ミラーさんは IMC  の 社員[しゃいん] です。',
                  translation: 'Janob Miller IMC xodimi.',
                },
              ],
            },
            {
              pattern: '~  さん',
              meaning:
                "さん qo'shimchasi suhbatdosh yoki uchinchi shaxs ismiga qo'shilib, so'zlovchining unga bo'lgan hurmatini ko'rsatadi. So'zlovchi o'zining ismiga さん qo'shimchasini qo'llamaydi. to'g'ridan-to'g'ri gaplashishdan qat'iy nazar あなた ( siz ) olmoshini qo'llamagan ma'qul. Bunday hollarda odatda suhbatdoshning familiyasiga さん qo'shimchasi qo'shilib qo'llaniladi. ミラー：いいえ、会社員[かいしゃいん] です。 Miller: Yo'q, men firma xodimiman.",
              usageNotes:
                'Minna no Nihongo 1-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'あの 方[かた] は ミラーさんです。',
                  translation:
                    "Agar sizga suhbatdoshingizning ismi ma'lum bo'lsa, suhbatdosh bilan",
                },
                {
                  sentence: '鈴[すず] 木[き] ：ミラーさんは 学生[がくせい] ですか。',
                  translation: 'Suzuki: Janob Miller, siz talabamisiz?',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada yangi tanishganda ta'zim qilinadi (ojigi). Boshqalar ismiga doimo '～san' qo'shiladi, lekin o'z ismiga hech qachon 'san' qo'shilmaydi. Tanishuv 'Hajimemashite' bilan boshlanib, 'Douzo yoroshiku onegaishimasu' bilan yakunlanadi.",
        },
      },
      {
        id: 'ja-minna-l1-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[1].practice],
        },
      },
      {
        id: 'ja-minna-l1-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[1].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l2',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u1',
    unitTitle: "Minna Shokyu 1: 1–5 Darslar (Boshlang'ich Tanishuv va Harakat)",
    language: 'ja',
    level: 'N5',
    lessonNumber: 2,
    title: "2-dars: Buyumlar va Ko'rsatish olmoshlari",
    description:
      "Minna no Nihongo Shokyu 1: 2-dars: Buyumlar va Ko'rsatish olmoshlari. Darsda 48 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l2-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "2-dars: Buyumlar va Ko'rsatish olmoshlari",
          subtitle: '第2課：物の名前と指示代名詞',
          explanation:
            "2-dars: Buyumlar va Ko'rsatish olmoshlari bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  これ  /  それ  /  あれ: これ , それ , あれ ko'rsatish olmoshlari.",
            '📌 2. この  OT  /  その  OT  /  あの OT: この , その va あの otlarni aniqlaydi.',
            "📌 3.  そうです  /  そうじゃ ありません: So'roq gaplarda ot kesim vazifasida kelsa, bu holda そう so'zi javob tariqasida inkor yoki tasdiq ma'nosida keladi.",
            '📌 4.: GAP 1 か、 GAP 2 か Bunday savollarga javob berishda GAP 1 va GAP 2 larni shundayligicha tanlab olish lozim.',
            "📌 5. OT 1 の OT 2: Siz 1-darsda の OT 1 OT 2 ni aniqlab kelganida, uning bularni bog'lash uchun qo'llanilishini bilib oldingiz.",
            "📌 6. そうですか: Bu ibora so'zlovchi yangi ma'lumotni qabul qilib, uni qabul qilganini va tushunganligini ko'rsatish uchun qo'llaniladi.",
          ],
          vocabulary: [
            {
              term: 'これ',
              reading: 'これ',
              meaning: 'bu (yaqindagi buyum)',
              exampleSentence: 'これは 日本[にほん]の 本[ほん] です。',
              exampleTranslation: 'Bu Yaponiya kitobi.',
            },
            {
              term: 'それ',
              reading: 'それ',
              meaning: "u, o'sha (tinglovchiga yaqin)",
              exampleSentence: 'それは 英語[えいご]の 辞書[じしょ] ですか。',
              exampleTranslation: "U ingliz tili lug'atimi?",
            },
            {
              term: 'あれ',
              reading: 'あれ',
              meaning: 'ana u (uzoqdagi)',
              exampleSentence: 'あれは わたしのかさです。',
              exampleTranslation: 'Anavi mening soyabonim.',
            },
            {
              term: 'この～',
              reading: 'この～',
              meaning: 'bu (yaqindagi buyum)',
              exampleSentence: 'この本[ほん]は わたしのです。',
              exampleTranslation: 'Bu kitob meniki.',
            },
            {
              term: 'その～',
              reading: 'その～',
              meaning: "u, o'sha (tinglovchiga yaqin)",
              exampleSentence: 'その時計[とけい]は スイスの 時計です。',
              exampleTranslation: 'U soat Shveytsariya soati.',
            },
            {
              term: 'あの～',
              reading: 'あの～',
              meaning: 'ana u (uzoqdagi)',
              exampleSentence: 'あの車[くるま]は ドイツの 自動車[じどうしゃ] です。',
              exampleTranslation: 'Anavi mashina Germaniya avtomobili.',
            },
            {
              term: '本 (ほん)',
              reading: 'ほん',
              meaning: 'kitob',
              exampleSentence: '図書館[としょかん]で 本[ほん]を 読[よ]みます。',
              exampleTranslation: "Kutubxonada kitob o'qiyman.",
            },
            {
              term: '辞書 (じしょ)',
              reading: 'じしょ',
              meaning: 'lug`at',
              exampleSentence: 'これは 電子[でんし]辞書[じしょ] です。',
              exampleTranslation: "Bu elektron lug'at.",
            },
            {
              term: '雑誌 (ざっし)',
              reading: 'ざっし',
              meaning: 'jurnal, oynoma',
              exampleSentence: 'カメラの 雑誌[ざっし]を 買[か]いました。',
              exampleTranslation: 'Kamera jurnali sotib oldim.',
            },
            {
              term: '新聞 (しんぶん)',
              reading: 'しんぶん',
              meaning: 'gazeta, ro`znoma',
              exampleSentence: '毎朝[まいあさ] 新聞[しんぶん]を 読[よ]みます。',
              exampleTranslation: "Har kuni ertalab gazeta o'qiyman.",
            },
            {
              term: 'ノート',
              reading: 'ノート',
              meaning: 'daftar',
              exampleSentence: 'これは わたしが 買[か]った ノート です。',
              exampleTranslation: 'Bu men sotib olgan daftar.',
            },
            {
              term: '手帳 (てちょう)',
              reading: 'てちょう',
              meaning: 'yon daftar',
              exampleSentence: '手帳[てちょう]に 予定[よてい]を 書[か]きます。',
              exampleTranslation: 'Yon daftarchaga rejalarni yozaman.',
            },
            {
              term: '名刺 (めいし)',
              reading: 'めいし',
              meaning: 'tashrif qog`ozi',
              exampleSentence: 'どうぞ 名刺[めいし]を お受[う]け取[と]りください。',
              exampleTranslation: "Marhamat, tashrif qog'ozimni qabul qiling.",
            },
            {
              term: 'カード',
              reading: 'カード',
              meaning: 'kartochka',
              exampleSentence: 'これは わたしが 買[か]った カード です。',
              exampleTranslation: 'Bu men sotib olgan kartochka.',
            },
            {
              term: 'テレホンカード',
              reading: 'テレホンカード',
              meaning: 'telefon kartochkasi',
              exampleSentence: 'これは わたしが 買[か]った テレホンカード です。',
              exampleTranslation: 'Bu men sotib olgan telefon kartochkasi.',
            },
            {
              term: '鉛筆 (えんぴつ)',
              reading: 'えんぴつ',
              meaning: 'qalam',
              exampleSentence: 'これは わたしが 買[か]った 鉛筆qalam[えんぴつ] です。',
              exampleTranslation: 'Bu men sotib olgan qalam.',
            },
            {
              term: 'ボールペン',
              reading: 'ボールペン',
              meaning: 'sharikli ruchka',
              exampleSentence: 'これは わたしが 買[か]った ボールペン です。',
              exampleTranslation: 'Bu men sotib olgan sharikli ruchka.',
            },
            {
              term: 'シャープペンシル',
              reading: 'シャープペンシル',
              meaning: 'avtoqalam',
              exampleSentence: 'これは わたしが 買[か]った シャープペンシル です。',
              exampleTranslation: 'Bu men sotib olgan avtoqalam.',
            },
            {
              term: 'かぎ',
              reading: 'かぎ',
              meaning: 'qulf-kalit',
              exampleSentence: 'これは わたしが 買[か]った かぎ です。',
              exampleTranslation: 'Bu men sotib olgan qulf-kalit.',
            },
            {
              term: '時計 (とけい)',
              reading: 'とけい',
              meaning: 'soat',
              exampleSentence: 'この 時計[とけい]は 父[ちち]の 時計です。',
              exampleTranslation: 'Bu soat otamning soati.',
            },
            {
              term: '傘 (かさ)',
              reading: 'かさ',
              meaning: 'soyabon',
              exampleSentence: '雨[あめ]ですから、かさを 持[も]って 行きます。',
              exampleTranslation: "Yomg'ir yog'yapti, soyabon olib boraman.",
            },
            {
              term: 'かばん',
              reading: 'かばん',
              meaning: 'sumka',
              exampleSentence: 'これは 軽[かる]い かばんです。',
              exampleTranslation: 'Bu yengil sumka.',
            },
            {
              term: 'カセットテープ',
              reading: 'カセットテープ',
              meaning: 'audio tasma',
              exampleSentence: 'これは わたしが 買[か]った [カセット]テープ です。',
              exampleTranslation: 'Bu men sotib olgan audio tasma.',
            },
            {
              term: 'テープレコーダー',
              reading: 'テープレコーダー',
              meaning: 'magnitofon',
              exampleSentence: 'これは わたしが 買[か]った テープレコーダー です。',
              exampleTranslation: 'Bu men sotib olgan magnitofon.',
            },
            {
              term: 'テレビ',
              reading: 'テレビ',
              meaning: 'televizor',
              exampleSentence: '毎晩[まいばん] テレビを 見[み]ます。',
              exampleTranslation: "Har kuni kechqurun televizor ko'raman.",
            },
            {
              term: 'ラジオ',
              reading: 'ラジオ',
              meaning: 'radio',
              exampleSentence: 'ラジオで ニュースを 聞[き]きます。',
              exampleTranslation: 'Radioda yangiliklarni eshitaman.',
            },
            {
              term: 'カメラ',
              reading: 'カメラ',
              meaning: 'fotoapparat',
              exampleSentence: 'これは 新[あたら]しい カメラです。',
              exampleTranslation: 'Bu yangi fotoapparat.',
            },
            {
              term: 'コンピューター',
              reading: 'コンピューター',
              meaning: 'kompyuter',
              exampleSentence: '会社[かいしゃ]の コンピューターを 使[つか]います。',
              exampleTranslation: 'Kompaniya kompyuteridan foydalanaman.',
            },
            {
              term: '自動車 (じどうしゃ)',
              reading: 'じどうしゃ',
              meaning: 'avtomobil',
              exampleSentence: 'トヨタの 自動車[じどうしゃ]は 有名[ゆうめい]です。',
              exampleTranslation: 'Toyota avtomobillari mashhurdir.',
            },
            {
              term: '机 (つくえ)',
              reading: 'つくえ',
              meaning: 'stol, parta',
              exampleSentence: '机[つくえ]の 上[うえ]に 本[ほん]が あります。',
              exampleTranslation: 'Stol ustida kitob bor.',
            },
            {
              term: 'いす',
              reading: 'いす',
              meaning: 'stul, kursi',
              exampleSentence: 'いすに 座[すわ]って ください。',
              exampleTranslation: "Stulga o'tiring, iltimos.",
            },
            {
              term: 'チョコレート',
              reading: 'チョコレート',
              meaning: 'shokolad',
              exampleSentence: 'これは わたしが 買[か]った チョコレート です。',
              exampleTranslation: 'Bu men sotib olgan shokolad.',
            },
            {
              term: 'コーヒー',
              reading: 'コーヒー',
              meaning: 'qahva (kofe)',
              exampleSentence: 'これは わたしが 買[か]った コーヒー です。',
              exampleTranslation: 'Bu men sotib olgan qahva (kofe).',
            },
            {
              term: '英語 (えいご)',
              reading: 'えいご',
              meaning: 'ingliz tili',
              exampleSentence: 'これは わたしが 買[か]った 英語[えいご] です。',
              exampleTranslation: 'Bu men sotib olgan ingliz tili.',
            },
            {
              term: '日本語 (にほんご)',
              reading: 'にほんご',
              meaning: 'yapon tili',
              exampleSentence: 'これは わたしが 買[か]った 日本語[にほんご] です。',
              exampleTranslation: 'Bu men sotib olgan yapon tili.',
            },
            {
              term: '～語 (～ご)',
              reading: '～ご',
              meaning: '~tili',
              exampleSentence: '山田[やまだ]ごは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~tili samimiy inson.',
            },
            {
              term: '何 (なん)',
              reading: 'なん',
              meaning: 'nima',
              exampleSentence: 'これは わたしが 買[か]った 何[なん] です。',
              exampleTranslation: 'Bu men sotib olgan nima.',
            },
            {
              term: 'そう',
              reading: 'そう',
              meaning: 'shunday',
              exampleSentence: '毎日[まいにち] そう。',
              exampleTranslation: 'Har kuni shunday.',
            },
            {
              term: '違います。 (ちがいます。)',
              reading: 'ちがいます。',
              meaning: "Unaqa emas. / Noto'g'ri.",
              exampleSentence: '毎日[まいにち] 違います。[ちがいます。]。',
              exampleTranslation: "Har kuni unaqa emas. / noto'g'ri..",
            },
            {
              term: 'そうですか。',
              reading: 'そうですか。',
              meaning: 'Shundaymi? Rostdanmi?',
              exampleSentence: 'これは わたしが 買[か]った そうですか。 です。',
              exampleTranslation: 'Bu men sotib olgan shundaymi? rostdanmi?.',
            },
            {
              term: 'あのう',
              reading: 'あのう',
              meaning: 'Haligi… . (Gap boshlash)',
              exampleSentence: '毎日[まいにち] あのう。',
              exampleTranslation: 'Har kuni haligi… . (gap boshlash).',
            },
            {
              term: 'ほんの気持ちです。 (ほんのきもちです。)',
              reading: 'ほんのきもちです。',
              meaning: "Chin ko'ngildan",
              exampleSentence:
                'これは わたしが 買[か]った ほんの気持ちです。[ほんのきもちです。] です。',
              exampleTranslation: "Bu men sotib olgan chin ko'ngildan.",
            },
            {
              term: 'どうぞ。',
              reading: 'どうぞ。',
              meaning: 'Marhamat.',
              exampleSentence: 'これは わたしが 買[か]った どうぞ。 です。',
              exampleTranslation: 'Bu men sotib olgan marhamat..',
            },
            {
              term: 'どうも。',
              reading: 'どうも。',
              meaning: 'Rahmat.',
              exampleSentence: 'これは わたしが 買[か]った どうも。 です。',
              exampleTranslation: 'Bu men sotib olgan rahmat..',
            },
            {
              term: 'どうもありがとうございます',
              reading: 'どうもありがとうございます',
              meaning: 'Katta rahmat',
              exampleSentence: '毎日[まいにち] [どうも]ありがとう[ございます。',
              exampleTranslation: 'Har kuni katta rahmat.',
            },
            {
              term: 'これからお世話せわになります。',
              reading: 'これからお世話せわになります。',
              meaning: 'Bundan buyon mehr va yordamingizga muhtojman.',
              exampleSentence: '毎日[まいにち] これからお世話[せわ]になります。。',
              exampleTranslation: 'Har kuni bundan buyon mehr va yordamingizga muhtojman..',
            },
            {
              term: 'こちらこそよろしく。',
              reading: 'こちらこそよろしく。',
              meaning:
                'Men ham yordamingizni ayamaysiz degan umiddaman. / Men ham tanishganimdan xursandman.',
              exampleSentence: 'これは わたしが 買[か]った こちらこそよろしく。 です。',
              exampleTranslation:
                'Bu men sotib olgan men ham yordamingizni ayamaysiz degan umiddaman. / men ham tanishganimdan xursandman..',
            },
          ],
          grammarRules: [
            {
              pattern: 'これ  /  それ  /  あれ',
              meaning:
                "これ , それ , あれ ko'rsatish olmoshlari. Ular shuningdek ot sifatida ham ishlatiladi. これ so'zlovchining yonida turgan narsalarni ko'rsatishda, それ suhbatdoshning yonida turgan narsalarni ko'rsatishda, あれ esa suhbatdoshdan ham, so'zlovchidan ham birday uzoq masofada turgan narsalarni ko'rsatishda qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 2-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'それは 辞[じ] 書[しょ] ですか。',
                  translation: 'Bu (sizdagi) lug`atmi?',
                },
                {
                  sentence: 'これを ください。',
                  translation: 'Menga mana buni bering. (3-dars )',
                },
              ],
            },
            {
              pattern: 'この  OT  /  その  OT  /  あの OT',
              meaning:
                "この , その va あの otlarni aniqlaydi. “ この OT ” so'zlovchining yonida turgan narsani, “ その OT ” suhbatdoshning yonida turgan narsani, “ あの OT” so'zlovchidan ham, suhbatdoshdan ham birday uzoq masofada turgan narsalarni ko'rsatishda qo'llaniladi. あの かばん これ それ この かばん その かばん",
              usageNotes:
                'Minna no Nihongo 2-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'この 本[ほん] は わたしのです。',
                  translation: 'Bu kitob meniki.',
                },
                {
                  sentence: 'あの 方[かた] は どなたですか。',
                  translation: 'Anavi kishi kim?',
                },
              ],
            },
            {
              pattern: 'そうです  /  そうじゃ ありません',
              meaning:
                "So'roq gaplarda ot kesim vazifasida kelsa, bu holda そう so'zi javob tariqasida inkor yoki tasdiq ma'nosida keladi. はい、そうです bu tasdiq javob, いいえ、そう じゃ ありません inkor javob. ちがいます fe'li そうじゃ ありません ma'nosida ham ishlatilishi mumkin. ･･･いいえ、違[ちが] います。 …Yo'q.",
              usageNotes:
                'Minna no Nihongo 2-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'それは テレホンカードですか。',
                  translation: '･･･はい、そうです。 …Ha, shunday.',
                },
                {
                  sentence: 'それは テレホンカードですか。',
                  translation: "･･･いいえ、そうじゃ ありません。 …Yo'q, bunday emas.",
                },
                {
                  sentence: 'それは テレホンカードですか。',
                  translation: 'Bu telefon kartochkasimi?',
                },
              ],
            },
            {
              pattern: '4.',
              meaning:
                'GAP 1 か、 GAP 2 か Bunday savollarga javob berishda GAP 1 va GAP 2 larni shundayligicha tanlab olish lozim. Bunday turdagi savollarga gapni shunday tanlab olib javob berish kerak. はい ham, いいえ ham ishlatilmaydi. ･･･｢９｣です。 …Bu “9”.',
              usageNotes:
                'Minna no Nihongo 2-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'これは ｢９｣ですか、｢７｣ですか。',
                  translation: 'Bu “9” mi yoki “7”?',
                },
              ],
            },
            {
              pattern: 'OT 1 の OT 2',
              meaning:
                "Siz 1-darsda の OT 1 OT 2 ni aniqlab kelganida, uning bularni bog'lash uchun qo'llanilishini bilib oldingiz. 2-darsda siz の yuklamasi boshqa 2 xil usulda qo'llanilishini o'rganib olasiz. 1) OT 1 OT 2 ni tushuntirib kelayapti. 2) OT 1 OT 2 kimga tegishliligini ko'rsatyapti. mumkin. Lekin agar OT 2 odamni anglatib kelsa, uni tushurib qoldirish mumkin emas. ･･･佐[さ] 藤[とう] さんのです。 …Sato xonimniki. ･･･いいえ、わたしのじゃ ありません。 …Yo'q, meniki emas. Janob Miller IMC firmasining xodimimi?",
              usageNotes:
                'Minna no Nihongo 2-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'これは コンピューターの 本[ほん] です。',
                  translation: 'Bu kompyute haqidagi kitob.',
                },
                {
                  sentence: 'これは わたしの 本[ほん] です。',
                  translation:
                    "Agar gap nima haqida ketayotganligi ma'lum bo'lsa, OT 2 tushib qolishi ham",
                },
                {
                  sentence: 'あれは だれの かばんですか。',
                  translation: 'Ana u kimning sumkasi?',
                },
                {
                  sentence: 'この かばんは あなたのですか。',
                  translation: 'Bu sizning sumkangizmi?',
                },
                {
                  sentence: 'ミラーさんは  IMC  の 社員[しゃいん] ですか。',
                  translation:
                    '･･･はい、 IMC の 社員[しゃいん] です。 …Ha, IMC firmasining xodimi.',
                },
              ],
            },
            {
              pattern: 'そうですか',
              meaning:
                "Bu ibora so'zlovchi yangi ma'lumotni qabul qilib, uni qabul qilganini va tushunganligini ko'rsatish uchun qo'llaniladi. そうですか。 Bu soyabon siznikimi? Tushunarli.",
              usageNotes:
                'Minna no Nihongo 2-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'この 傘[かさ] は あなたのですか。',
                  translation:
                    "･･･いいえ、違[ちが] います。シュミットさんのです。 …Yo'q, u janob Shmitniki.",
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada tashrif qog'ozi (meishi) ikki qo'llab beriladi va ikki qo'llab qabul qilinadi. Sovg'a berganda kamsuqumlik bilan 'ほんの気持ちです' (arzimagan sovg'a) deyiladi.",
        },
      },
      {
        id: 'ja-minna-l2-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[2].practice],
        },
      },
      {
        id: 'ja-minna-l2-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[2].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l3',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u1',
    unitTitle: "Minna Shokyu 1: 1–5 Darslar (Boshlang'ich Tanishuv va Harakat)",
    language: 'ja',
    level: 'N5',
    lessonNumber: 3,
    title: '3-dars: Joylar va Narx-navo',
    description:
      "Minna no Nihongo Shokyu 1: 3-dars: Joylar va Narx-navo. Darsda 46 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l3-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '3-dars: Joylar va Narx-navo',
          subtitle: '第3課：場所と買い物・値段',
          explanation:
            "3-dars: Joylar va Narx-navo bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  ここ／そこ／あそこ／こちら／そちら／あちら: これ , それ va あれ ko'rsatish so'zlari predmetga nisbatan qo'llanilishini 2-darsda ko'rib chiqqan edik.",
            '📌 2.   OT 1 は OT 2  (o`rin-joy)  です: Ushbu namuna orqali predmet yoki odamning qayerda joylashganini izohlash mumkin.',
            "📌 3.  どこ／どちら: どこ so'zi “ qayerda ”, どちら esa “ qaysi tarafda ”, “ qaysi yonalishda ” degan ma'noni bildiradi.",
            "📌 4.  OT 1  の OT 2: Ushbu tuzilmada どこ - OT 2 ning qayerda va kim tomonidan tayyorlanganligini so'rash uchun qo'llaniladi.",
            '📌 5.   こ／そ／あ／ど  UMUMIY NEGIZGA EGA BO`LGAN KO`RSATISH: OLMOSHLARINING JADVALI こ qator そ qator あ qator ど qator Predmet これ それ あれ どれ (8-dars) Predmet yoki この .',
            "📌 6.  お国[くに]: Suhbatdosh yoki 3-shaxsga nisbatan o'z hurmatini ifodalash maqsadida so'zlovchi suhbatdoshiga tegishli bo'lgan predmetga お old qo'shimchasini qo'shadi.",
          ],
          vocabulary: [
            {
              term: 'ここ',
              reading: 'ここ',
              meaning: 'bu yer, bu joy',
              exampleSentence: 'ここは 教室[きょうしつ] です。',
              exampleTranslation: 'Bu yer darsxona.',
            },
            {
              term: 'そこ',
              reading: 'そこ',
              meaning: "u yer, u joy, o'sha yer, o'sha joy",
              exampleSentence: 'そこは 食堂[しょくどう] です。',
              exampleTranslation: 'U yer oshxona.',
            },
            {
              term: 'あそこ',
              reading: 'あそこ',
              meaning: 'ana u yer, ana u joy',
              exampleSentence: 'あそこは 事務所[じむしょ] です。',
              exampleTranslation: 'Anavi yer idora.',
            },
            {
              term: 'どこ',
              reading: 'どこ',
              meaning: 'qayer',
              exampleSentence: 'すみません、お手洗[てあら]いは どこですか。',
              exampleTranslation: 'Kechirasiz, hojatxona qayerda?',
            },
            {
              term: 'こちら',
              reading: 'こちら',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った こちら です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: 'そちら',
              reading: 'そちら',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った そちら です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: 'あちら',
              reading: 'あちら',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った あちら です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: 'どちら',
              reading: 'どちら',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った どちら です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: '教室 (きょうしつ)',
              reading: 'きょうしつ',
              meaning: 'sinf, auditoriya',
              exampleSentence: '教室[きょうしつ]で 勉強[べんきょう]します。',
              exampleTranslation: "Darsxonada o'qiyman.",
            },
            {
              term: '食堂 (しょくどう)',
              reading: 'しょくどう',
              meaning: 'oshxona',
              exampleSentence: '学生[がくせい]食堂[しょくどう]で 昼[ひる]ご飯[はん]を 食べます。',
              exampleTranslation: 'Talabalar oshxonasida tushlik qilaman.',
            },
            {
              term: '事務所 (じむしょ)',
              reading: 'じむしょ',
              meaning: 'idora, ofis',
              exampleSentence: '事務所[じむしょ]で 書類[しょるい]を もらいました。',
              exampleTranslation: 'Idoradan hujjatlarni oldim.',
            },
            {
              term: '会議室 (かいぎしつ)',
              reading: 'かいぎしつ',
              meaning: 'majlislar zali',
              exampleSentence: '3階[さんがい]の 会議室[かいぎしつ]で ミーティングを します。',
              exampleTranslation: "3-qavatdagi majlislar xonasida yig'ilish o'tkazamiz.",
            },
            {
              term: '受付 (うけつけ)',
              reading: 'うけつけ',
              meaning: 'qabulxona',
              exampleSentence: 'これは わたしが 買[か]った 受付[うけつけ] です。',
              exampleTranslation: 'Bu men sotib olgan qabulxona.',
            },
            {
              term: 'ロビー',
              reading: 'ロビー',
              meaning: 'dahliz',
              exampleSentence: 'これは わたしが 買[か]った ロビー です。',
              exampleTranslation: 'Bu men sotib olgan dahliz.',
            },
            {
              term: '部屋 (へや)',
              reading: 'へや',
              meaning: 'xona',
              exampleSentence: 'わたしの 部屋[へや]は 2階[にかい]に あります。',
              exampleTranslation: 'Mening xonam 2-qavatda joylashgan.',
            },
            {
              term: 'お手洗い (トイレおてあらい)',
              reading: 'トイレおてあらい',
              meaning: 'hojatxona',
              exampleSentence: 'これは わたしが 買[か]った お手洗い[トイレおてあらい] です。',
              exampleTranslation: 'Bu men sotib olgan hojatxona.',
            },
            {
              term: '階段 (かいだん)',
              reading: 'かいだん',
              meaning: 'zina',
              exampleSentence: '階段[かいだん]を 使[つか]いましょう。',
              exampleTranslation: 'Keling, zinadan foydalanamiz.',
            },
            {
              term: 'エレベーター',
              reading: 'エレベーター',
              meaning: 'lift',
              exampleSentence: 'エレベーターで 5階[ごかい]へ 上[あ]がります。',
              exampleTranslation: "Lift bilan 5-qavatga ko'tarilaman.",
            },
            {
              term: 'エスカレーター',
              reading: 'エスカレーター',
              meaning: 'eskalator',
              exampleSentence: 'これは わたしが 買[か]った エスカレーター です。',
              exampleTranslation: 'Bu men sotib olgan eskalator.',
            },
            {
              term: 'お国 (おくに)',
              reading: 'おくに',
              meaning: 'vatan, mamlakat',
              exampleSentence: 'あそこは [お]国[[お]くに] です。',
              exampleTranslation: 'Anavi yer vatan, mamlakat.',
            },
            {
              term: '会社 (かいしゃ)',
              reading: 'かいしゃ',
              meaning: 'firma, korxona',
              exampleSentence: '朝[あさ] 8時[はちじ]に 会社[かいしゃ]へ 行きます。',
              exampleTranslation: 'Ertalab soat 8 da ishxonaga (firmaga) boraman.',
            },
            {
              term: 'うち',
              reading: 'うち',
              meaning: 'uy',
              exampleSentence: '6時[ろくじ]に うちへ 帰[かえ]ります。',
              exampleTranslation: 'Soat 6 da uyga qaytaman.',
            },
            {
              term: '電話 (でんわ)',
              reading: 'でんわ',
              meaning: 'telefon',
              exampleSentence: 'これは わたしが 買[か]った 電話[でんわ] です。',
              exampleTranslation: 'Bu men sotib olgan telefon.',
            },
            {
              term: '靴 (くつ)',
              reading: 'くつ',
              meaning: 'poyafzal',
              exampleSentence: 'これは わたしが 買[か]った 靴[くつ] です。',
              exampleTranslation: 'Bu men sotib olgan poyafzal.',
            },
            {
              term: 'ネクタイ',
              reading: 'ネクタイ',
              meaning: "bo'yinbog",
              exampleSentence: 'これは わたしが 買[か]った ネクタイ です。',
              exampleTranslation: "Bu men sotib olgan bo'yinbog.",
            },
            {
              term: 'ワイン',
              reading: 'ワイン',
              meaning: 'musallas, sharob (vino)',
              exampleSentence: 'これは わたしが 買[か]った ワイン です。',
              exampleTranslation: 'Bu men sotib olgan musallas, sharob (vino).',
            },
            {
              term: 'たばこ',
              reading: 'たばこ',
              meaning: 'tamaki',
              exampleSentence: 'これは わたしが 買[か]った たばこ です。',
              exampleTranslation: 'Bu men sotib olgan tamaki.',
            },
            {
              term: '売り場 (うりば)',
              reading: 'うりば',
              meaning: "sotuv rastasi, savdo bo'limi",
              exampleSentence: 'あそこは 売り場[うりば] です。',
              exampleTranslation: "Anavi yer sotuv rastasi, savdo bo'limi.",
            },
            {
              term: '地下 (ちか)',
              reading: 'ちか',
              meaning: "yer osti, yerto'la",
              exampleSentence: 'これは わたしが 買[か]った 地下[ちか] です。',
              exampleTranslation: "Bu men sotib olgan yer osti, yerto'la.",
            },
            {
              term: '～階 (～かい)',
              reading: '～かい',
              meaning: '~-qavat',
              exampleSentence: 'この 部屋[へや]は 階[かい]です。',
              exampleTranslation: 'Bu xona ~-qavat.',
            },
            {
              term: '何階 (なんがい)',
              reading: 'なんがい',
              meaning: 'nechanchi qavat',
              exampleSentence: 'この 部屋[へや]は 何階[なんがい]です。',
              exampleTranslation: 'Bu xona nechanchi qavat.',
            },
            {
              term: '～円 (～えん)',
              reading: '～えん',
              meaning: '~iyena',
              exampleSentence: '山田[やまだ]えんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~iyena samimiy inson.',
            },
            {
              term: 'いくら',
              reading: 'いくら',
              meaning: 'necha pul, necha pul turadi, qancha, qancha turadi',
              exampleSentence: 'この ネクタイは いくらですか。',
              exampleTranslation: "Bu bo'yinbog' (galstuk) qancha turadi?",
            },
            {
              term: '百 (ひゃく)',
              reading: 'ひゃく',
              meaning: 'yuz',
              exampleSentence: 'これは わたしが 買[か]った 百[ひゃく] です。',
              exampleTranslation: 'Bu men sotib olgan yuz.',
            },
            {
              term: '千 (せん)',
              reading: 'せん',
              meaning: 'ming',
              exampleSentence: 'これは わたしが 買[か]った 千[せん] です。',
              exampleTranslation: 'Bu men sotib olgan ming.',
            },
            {
              term: '万 (まん)',
              reading: 'まん',
              meaning: "o'n ming",
              exampleSentence: 'これは わたしが 買[か]った 万[まん] です。',
              exampleTranslation: "Bu men sotib olgan o'n ming.",
            },
            {
              term: 'すみません。',
              reading: 'すみません。',
              meaning: "Kechirasiz. / Meni ma'zur tutasiz.",
              exampleSentence: 'これは わたしが 買[か]った すみません。 です。',
              exampleTranslation: "Bu men sotib olgan kechirasiz. / meni ma'zur tutasiz..",
            },
            {
              term: '～でございます。',
              reading: '～でございます。',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: '毎日[まいにち] でございます。。',
              exampleTranslation: 'Har kuni u kishi (hurmat shakli).',
            },
            {
              term: '～を見みせてください。',
              reading: '～を見みせてください。',
              meaning: "Iltimos, ~ni ko'rsating.",
              exampleSentence:
                '山田[やまだ][を]見[み]せてください。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada iltimos, ~ni ko'rsating. samimiy inson.",
            },
            {
              term: 'じゃ',
              reading: 'じゃ',
              meaning: "U holda. / Xo'sh. / Demak.",
              exampleSentence: 'これは わたしが 買[か]った じゃ です。',
              exampleTranslation: "Bu men sotib olgan u holda. / xo'sh. / demak..",
            },
            {
              term: '～をください。',
              reading: '～をください。',
              meaning: 'Iltimos, ~ni bering.',
              exampleSentence: '山田[やまだ][を]ください。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada iltimos, ~ni bering. samimiy inson.',
            },
            {
              term: '新大阪',
              reading: '新大阪',
              meaning: 'Shin-Osaka (Osakadagi bekat nomi)',
              exampleSentence: 'これは わたしが 買[か]った 新[しん]大[おお]阪[さか] です。',
              exampleTranslation: 'Bu men sotib olgan shin-osaka (osakadagi bekat nomi).',
            },
            {
              term: 'イタリア',
              reading: 'イタリア',
              meaning: 'Italiya',
              exampleSentence: 'これは わたしが 買[か]った イタリア です。',
              exampleTranslation: 'Bu men sotib olgan italiya.',
            },
            {
              term: 'スイス',
              reading: 'スイス',
              meaning: 'Shveysariya',
              exampleSentence: 'これは わたしが 買[か]った スイス です。',
              exampleTranslation: 'Bu men sotib olgan shveysariya.',
            },
            {
              term: 'ＭＴ／ヨーネン／アキックス',
              reading: 'ＭＴ／ヨーネン／アキックス',
              meaning: "kompaniyalar nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った ＭＴ／ヨーネン／アキックス です。',
              exampleTranslation: "Bu men sotib olgan kompaniyalar nomi (o'ylab topilgan).",
            },
          ],
          grammarRules: [
            {
              pattern: 'ここ／そこ／あそこ／こちら／そちら／あちら',
              meaning:
                "これ , それ va あれ ko'rsatish so'zlari predmetga nisbatan qo'llanilishini 2-darsda ko'rib chiqqan edik. ここ , そこ va あそこ ko'rsatish so'zlari o'rin- joyga nisbatan ishlatilib, ここ so'zlovchining turgan joyi, そこ suhbatdoshning turgan joyi, あ そこ esa ikkala shaxsdan bir xil masofada uzoqlashgan joyni anglatadi. こちら , そちら va あちら – yo'nalishni ifodalovchi ko'rsatish olmoshlaridir. Shu bilan birga ushbu ko'rsatish olmoshlari ここ , そこ va あそこ ga nisbatan muloyimroq (odobliroq) eshitiladigan o'rin-joyga nisbatan qo'llanib ham kelishi mumkin. 💡 Muhim eslatma: Agar so'zlovchi suhbatdoshning turgan joyini o'zi turgan joyi bilan bir xil ekanligini ta'kidlayotgan bo'lsa, u holda ular ikkisining turgan joyi ここ so'zi bilan ifodalanadi. Ushbu holda そこ - so'zlovchi bilan suhbatdoshidan ozgina nariroqda joylashgan joyni, あそこ esa anchagina uzoqlikdagi joyni ifodalaydi.",
              usageNotes:
                'Minna no Nihongo 3-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ここ／そこ／あそこ／こちら／そちら／あちら',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'OT 1 は OT 2  (o`rin-joy)  です',
              meaning:
                'Ushbu namuna orqali predmet yoki odamning qayerda joylashganini izohlash mumkin. Hojatxona ana u yerda.',
              usageNotes:
                'Minna no Nihongo 3-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'お手[て] 洗[あら] いは あそこです。',
                  translation: 'Namunaviy gap.',
                },
                {
                  sentence: '電[でん] 話[わ] は ２階[かい] です。',
                  translation: 'Telefon 2-qavatda.',
                },
                {
                  sentence: '山[やま] 田[だ] さんは 事[じ] 務[む] 所[しょ] です。',
                  translation: 'Janob Yamada idorada.',
                },
              ],
            },
            {
              pattern: 'どこ／どちら',
              meaning:
                "どこ so'zi “ qayerda ”, どちら esa “ qaysi tarafda ”, “ qaysi yonalishda ” degan ma'noni bildiradi. Shuningdek, どちら so'roq olmoshi どこ ga nisbatan muloyimroq ohangdagi “ qayer ” so'zini anglatishi mumkin. Shuningdek, どこ , どちら so'zlari suhbatdoshdan uning vatani, ish joyi yoki o'quv muassasasining nomi, xohlagan joy nomi haqida so'ralayotgan hollarda qo'llaniladi. どちら so'zi どこ ga nisbatan muloyimroq shakl hisoblanib, bunday hollarda 何 ( nima ) so'roq so'zini qo'llash mumkin emas.",
              usageNotes:
                'Minna no Nihongo 3-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'お手[て] 洗[あら] いは どこですか。',
                  translation: '･･･あそこです。 …Ana u yerda (joylashgan).',
                },
                {
                  sentence: 'エレベータは どちらですか。',
                  translation: '･･･あちらです。 … Ana u tarafda (joylashgan).',
                },
                {
                  sentence: '学校[がっこう] は どこですか。',
                  translation: 'Qaysi maktabda tahsil olasiz?',
                },
                {
                  sentence: '会社[かいしゃ] は どちらですか。',
                  translation: 'Qaysi korxonada ishlaysiz?',
                },
              ],
            },
            {
              pattern: 'OT 1  の OT 2',
              meaning:
                "Ushbu tuzilmada どこ - OT 2 ning qayerda va kim tomonidan tayyorlanganligini so'rash uchun qo'llaniladi. Agar OT 1 -davlat nomi, OT 2 -mahsulot (predmet) nomi bo'lsa, u holda OT 2 OT 1 ifodalayotgan davlatda tayyorlanganligidan dalolat beradi. Agar OT 1 korxona nomi, OT 2 esa mahsulot nomi bo'lsa, u holda どこ (qayer) deganda ushbu korxona tushuniladi. ･･･日[に] 本[ほん] の コンピューターです。 ･･･ IMC の コンピューターです。 …IMC firmasining kompyuteri.",
              usageNotes:
                'Minna no Nihongo 3-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'これは どこの コンピューターですか。',
                  translation: 'Bu qayerning kompyuteri?',
                },
              ],
            },
            {
              pattern: 'こ／そ／あ／ど  UMUMIY NEGIZGA EGA BO`LGAN KO`RSATISH',
              meaning:
                "OLMOSHLARINING JADVALI こ qator そ qator あ qator ど qator Predmet これ それ あれ どれ (8-dars) Predmet yoki この OT その OT あの OT どの OT shaxs (16-dars) Joy ここ そこ あそこ どこ Yo'nalish こちら そちら あちら どちら Joy (muloyim)",
              usageNotes:
                'Minna no Nihongo 3-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'こ／そ／あ／ど  UMUMIY NEGIZGA EGA BO`LGAN KO`RSATISH',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'お国[くに]',
              meaning:
                "Suhbatdosh yoki 3-shaxsga nisbatan o'z hurmatini ifodalash maqsadida so'zlovchi suhbatdoshiga tegishli bo'lgan predmetga お old qo'shimchasini qo'shadi.",
              usageNotes:
                'Minna no Nihongo 3-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'お国[くに] は どちらですか。',
                  translation: 'Qaysi davlatdansiz?/ Qayerdansiz?',
                },
              ],
            },
          ],
          culturalNotes:
            "Yapon savdo markazlarida va do'konlarda xaridor kirganda xushmuomalalik bilan 'いらっしゃいませ' deb kutib olinadi. Pul to'lashda pul patnisga (tsuritray) qo'yiladi, to'g'ridan-to'g'ri qo'lga berilmaydi.",
        },
      },
      {
        id: 'ja-minna-l3-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[3].practice],
        },
      },
      {
        id: 'ja-minna-l3-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[3].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l4',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u1',
    unitTitle: "Minna Shokyu 1: 1–5 Darslar (Boshlang'ich Tanishuv va Harakat)",
    language: 'ja',
    level: 'N5',
    lessonNumber: 4,
    title: "4-dars: Vaqt, Soatlar va Fe'llar (Ertalabdan kechgacha)",
    description:
      "Minna no Nihongo Shokyu 1: 4-dars: Vaqt, Soatlar va Fe'llar (Ertalabdan kechgacha). Darsda 65 ta yangi so'z, audio talaffuzli Furigana misollar va 7 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l4-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "4-dars: Vaqt, Soatlar va Fe'llar (Ertalabdan kechgacha)",
          subtitle: '第4課：時間・動詞の現在と過去',
          explanation:
            "4-dars: Vaqt, Soatlar va Fe'llar (Ertalabdan kechgacha) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            '📌 1.: 今[いま] －時[じ] －分[ふん] です Vaqtni ifodalash uchun 時[じ] ( soat ) va 分[ふん] ( daqiqa ) kabi sanoq suffikslari ishlatiladi.',
            "📌 2. FE’L  ます: ます qo'shimchasi bilan tugagan fe'l gapda kesim bo'lib keladi.",
            "📌 3. FE’L  ます /  FE’L  ません /  FE’L  ました /  FE’L  ませんでした: 1) ます qo'shimchasi gapda hozirgi zamon yoki doimo sodir bo'ladigan ish-harakatni ifodalash uchun qo'llaniladi.",
            "📌 4. OT (vaqt)  に  FE’L: Agar fe'l davomsiz harakatni bildirsa, o'sha harakat sodir bo'lganda に qo'shimchasi qo'shiladi.",
            "📌 5. OT 1 から  OT 2 まで: 1) から boshlang'ich vaqt yoki joyni, まで oxirini ko'rsatadi.",
            "📌 6. OT 1 と  OT 2: と qo'shimchasi ikkita otni o'zaro teng bog'laydi.",
          ],
          vocabulary: [
            {
              term: '起きます (おきます)',
              reading: 'おきます',
              meaning: 'uyg`onmoq',
              exampleSentence: '毎朝[まいあさ] 6時[ろくじ]に 起[お]きます。',
              exampleTranslation: "Har kuni ertalab soat 6 da uyg'onaman.",
            },
            {
              term: '寝ます (ねます)',
              reading: 'ねます',
              meaning: 'uxlamoq',
              exampleSentence: '夜[よる] 11時[じゅういちじ]に 寝[ね]ます。',
              exampleTranslation: 'Kechasi soat 11 da uxlayman.',
            },
            {
              term: '働きます (はたらきます)',
              reading: 'はたらきます',
              meaning: 'ishlamoq',
              exampleSentence: '月曜日[げつようび]から 金曜日[きんようび]まで 働[はたら]きます。',
              exampleTranslation: 'Dushanbadan jumagacha ishlayman.',
            },
            {
              term: '休みます (やすみます)',
              reading: 'やすみます',
              meaning: 'dam olmoq',
              exampleSentence: '日曜日[にちようび]に 休[やす]みます。',
              exampleTranslation: 'Yakshanba kuni dam olaman.',
            },
            {
              term: '勉強します (べんきょうします)',
              reading: 'べんきょうします',
              meaning: 'dars qilmoq, dars tayyorlamoq',
              exampleSentence: '図書館[としょかん]で 日本語[にほんご]を 勉強[べんきょう]します。',
              exampleTranslation: "Kutubxonada yapon tilini o'rganaman.",
            },
            {
              term: '終わります (おわります)',
              reading: 'おわります',
              meaning: 'tugamoq',
              exampleSentence: '授業[じゅぎょう]は 5時[ごじ]に 終[お]わります。',
              exampleTranslation: 'Dars soat 5 da tugaydi.',
            },
            {
              term: 'デパート',
              reading: 'デパート',
              meaning: 'univermag',
              exampleSentence: 'これは わたしが 買[か]った デパート です。',
              exampleTranslation: 'Bu men sotib olgan univermag.',
            },
            {
              term: '銀行 (ぎんこう)',
              reading: 'ぎんこう',
              meaning: 'bank',
              exampleSentence: '銀行[ぎんこう]は 9時[くじ]から 3時[さんじ]までです。',
              exampleTranslation: 'Bank soat 9 dan 3 gacha ishlaydi.',
            },
            {
              term: '郵便局 (ゆうびんきょく)',
              reading: 'ゆうびんきょく',
              meaning: 'pochta idorasi',
              exampleSentence: '郵便局[ゆうびんきょく]で 切手[きって]を 買[か]います。',
              exampleTranslation: 'Pochtada pochta markasi sotib olaman.',
            },
            {
              term: '図書館 (としょかん)',
              reading: 'としょかん',
              meaning: 'kutubxona',
              exampleSentence: '大学[だいがく]の 図書館[としょかん]で 調[しら]べます。',
              exampleTranslation: 'Universitet kutubxonasida qidiraman.',
            },
            {
              term: '美術館 (びじゅつかん)',
              reading: 'びじゅつかん',
              meaning: 'badiiy san’at muzeyi',
              exampleSentence: '上野[うえの]の 美術館[びじゅつかん]へ 行きました。',
              exampleTranslation: "Uenodagi san'at muzeyiga bordim.",
            },
            {
              term: '今 (いま)',
              reading: 'いま',
              meaning: 'hozir',
              exampleSentence: '今[いま] 何時[なんじ] ですか。',
              exampleTranslation: 'Hozir soat necha?',
            },
            {
              term: '～時 (～じ)',
              reading: '～じ',
              meaning: 'soat~',
              exampleSentence: '山田[やまだ]じは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada soat~ samimiy inson.',
            },
            {
              term: '～分 (～ふん～ぷん)',
              reading: '～ふん～ぷん',
              meaning: '~daqiqa',
              exampleSentence: '山田[やまだ]ふんぷんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~daqiqa samimiy inson.',
            },
            {
              term: '半 (はん)',
              reading: 'はん',
              meaning: 'yarim',
              exampleSentence: 'これは わたしが 買[か]った 半yarim[はん] です。',
              exampleTranslation: 'Bu men sotib olgan yarim.',
            },
            {
              term: '何時 (なんじ)',
              reading: 'なんじ',
              meaning: 'soat necha',
              exampleSentence: 'これは わたしが 買[か]った 何時soatnecha[なんじ] です。',
              exampleTranslation: 'Bu men sotib olgan soat necha.',
            },
            {
              term: '何分 (なんぷん)',
              reading: 'なんぷん',
              meaning: 'necha daqiqa',
              exampleSentence: 'これは わたしが 買[か]った 何分nechadaqiqa[なんぷん] です。',
              exampleTranslation: 'Bu men sotib olgan necha daqiqa.',
            },
            {
              term: '午前tungisoat12dantushki12gacha (ごぜん)',
              reading: 'ごぜん',
              meaning: "bo'lgan vaqt) masalan: 午前１時 – tungi soat1;",
              exampleSentence:
                'これは わたしが 買[か]った 午前tungisoat12dantushki12gacha[ごぜん] です。',
              exampleTranslation:
                "Bu men sotib olgan bo'lgan vaqt) masalan: 午前１時 – tungi soat1;.",
            },
            {
              term: '午後tushkisoat12dantungisoat12 (ごご)',
              reading: 'ごご',
              meaning:
                "gacha bo'lgan vaqt) masalan: 午後３時 kunduzgi soat 3; 午後９時 kechki soat 9",
              exampleSentence:
                'これは わたしが 買[か]った 午後tushkisoat12dantungisoat12[ごご] です。',
              exampleTranslation:
                "Bu men sotib olgan gacha bo'lgan vaqt) masalan: 午後３時 kunduzgi soat 3; 午後９時 kechki soat 9.",
            },
            {
              term: '朝 (あさ)',
              reading: 'あさ',
              meaning: 'tong, ertalab',
              exampleSentence: 'これは わたしが 買[か]った 朝tong,ertalab[あさ] です。',
              exampleTranslation: 'Bu men sotib olgan tong, ertalab.',
            },
            {
              term: '昼 (ひる)',
              reading: 'ひる',
              meaning: 'tush, kunduzi',
              exampleSentence: '毎日[まいにち] 昼tush,kunduzi[ひる]。',
              exampleTranslation: 'Har kuni tush, kunduzi.',
            },
            {
              term: '晩 (ばんよる)',
              reading: 'ばんよる',
              meaning: '（夜） kech, kechqurun',
              exampleSentence: '毎日[まいにち] 晩夜kech,kechqurun[ばんよる]。',
              exampleTranslation: 'Har kuni （夜） kech, kechqurun.',
            },
            {
              term: 'おととい',
              reading: 'おととい',
              meaning: "o'tgan kuni, kechadan oldingi kun",
              exampleSentence: 'この 部屋[へや]は おとといです。',
              exampleTranslation: "Bu xona o'tgan kuni, kechadan oldingi kun.",
            },
            {
              term: 'きのう',
              reading: 'きのう',
              meaning: 'kecha',
              exampleSentence: '毎日[まいにち] きのう。',
              exampleTranslation: 'Har kuni kecha.',
            },
            {
              term: 'きょう',
              reading: 'きょう',
              meaning: 'bugun',
              exampleSentence: '毎日[まいにち] きょう。',
              exampleTranslation: 'Har kuni bugun.',
            },
            {
              term: 'あした',
              reading: 'あした',
              meaning: 'ertaga',
              exampleSentence: 'これは わたしが 買[か]った あした です。',
              exampleTranslation: 'Bu men sotib olgan ertaga.',
            },
            {
              term: 'あさって',
              reading: 'あさって',
              meaning: 'indinga, ertadan keyin',
              exampleSentence: 'これは わたしが 買[か]った あさって です。',
              exampleTranslation: 'Bu men sotib olgan indinga, ertadan keyin.',
            },
            {
              term: 'けさ',
              reading: 'けさ',
              meaning: 'bugun ertalab, bugun tongda',
              exampleSentence: 'これは わたしが 買[か]った けさ です。',
              exampleTranslation: 'Bu men sotib olgan bugun ertalab, bugun tongda.',
            },
            {
              term: '今晩 (こんばん)',
              reading: 'こんばん',
              meaning: 'bugun kechqurun',
              exampleSentence: 'これは わたしが 買[か]った 今晩bugunkechqurun[こんばん] です。',
              exampleTranslation: 'Bu men sotib olgan bugun kechqurun.',
            },
            {
              term: '休み (やすみ)',
              reading: 'やすみ',
              meaning: 'dam olish, ta’til',
              exampleSentence: 'これは わたしが 買[か]った 休みdamolish,ta’til[やすみ] です。',
              exampleTranslation: 'Bu men sotib olgan dam olish, ta’til.',
            },
            {
              term: '昼休み (ひるやすみ)',
              reading: 'ひるやすみ',
              meaning: 'tushlik / tushki tanaffus',
              exampleSentence:
                'これは わたしが 買[か]った 昼休みtushlik/tushkitanaffus[ひるやすみ] です。',
              exampleTranslation: 'Bu men sotib olgan tushlik / tushki tanaffus.',
            },
            {
              term: '毎朝 (まいあさ)',
              reading: 'まいあさ',
              meaning: 'har kuni ertalab, har tong',
              exampleSentence:
                'これは わたしが 買[か]った 毎朝harkuniertalab,hartong[まいあさ] です。',
              exampleTranslation: 'Bu men sotib olgan har kuni ertalab, har tong.',
            },
            {
              term: '毎晩 (まいばん)',
              reading: 'まいばん',
              meaning: 'har kuni kechqurun',
              exampleSentence: 'これは わたしが 買[か]った 毎晩harkunikechqurun[まいばん] です。',
              exampleTranslation: 'Bu men sotib olgan har kuni kechqurun.',
            },
            {
              term: '毎日 (まいにち)',
              reading: 'まいにち',
              meaning: 'har kuni',
              exampleSentence: 'これは わたしが 買[か]った 毎日harkuni[まいにち] です。',
              exampleTranslation: 'Bu men sotib olgan har kuni.',
            },
            {
              term: '月曜日 (げつようび)',
              reading: 'げつようび',
              meaning: 'dushanba',
              exampleSentence: 'これは わたしが 買[か]った 月曜日dushanba[げつようび] です。',
              exampleTranslation: 'Bu men sotib olgan dushanba.',
            },
            {
              term: '火曜日 (かようび)',
              reading: 'かようび',
              meaning: 'seshanba',
              exampleSentence: 'これは わたしが 買[か]った 火曜日seshanba[かようび] です。',
              exampleTranslation: 'Bu men sotib olgan seshanba.',
            },
            {
              term: '水曜日 (すいようび)',
              reading: 'すいようび',
              meaning: 'chorshanba',
              exampleSentence: 'これは わたしが 買[か]った 水曜日chorshanba[すいようび] です。',
              exampleTranslation: 'Bu men sotib olgan chorshanba.',
            },
            {
              term: '木曜日 (もくようび)',
              reading: 'もくようび',
              meaning: 'payshanba',
              exampleSentence: 'これは わたしが 買[か]った 木曜日payshanba[もくようび] です。',
              exampleTranslation: 'Bu men sotib olgan payshanba.',
            },
            {
              term: '金曜日 (きんようび)',
              reading: 'きんようび',
              meaning: 'juma',
              exampleSentence: 'これは わたしが 買[か]った 金曜日juma[きんようび] です。',
              exampleTranslation: 'Bu men sotib olgan juma.',
            },
            {
              term: '土曜日 (どようび)',
              reading: 'どようび',
              meaning: 'shanba',
              exampleSentence: 'これは わたしが 買[か]った 土曜日shanba[どようび] です。',
              exampleTranslation: 'Bu men sotib olgan shanba.',
            },
            {
              term: '日曜日 (にちようび)',
              reading: 'にちようび',
              meaning: 'yakshanba',
              exampleSentence: 'これは わたしが 買[か]った 日曜日yakshanba[にちようび] です。',
              exampleTranslation: 'Bu men sotib olgan yakshanba.',
            },
            {
              term: '何曜日 (なんようび)',
              reading: 'なんようび',
              meaning: 'haftaning qaysi kuni',
              exampleSentence:
                'これは わたしが 買[か]った 何曜日haftaningqaysikuni[なんようび] です。',
              exampleTranslation: 'Bu men sotib olgan haftaning qaysi kuni.',
            },
            {
              term: '番号 (ばんごう)',
              reading: 'ばんごう',
              meaning: 'raqam',
              exampleSentence: '毎日[まいにち] 番号raqam[ばんごう]。',
              exampleTranslation: 'Har kuni raqam.',
            },
            {
              term: '何番 (なんばん)',
              reading: 'なんばん',
              meaning: 'nechanchi raqam',
              exampleSentence: 'これは わたしが 買[か]った 何番nechanchiraqam[なんばん] です。',
              exampleTranslation: 'Bu men sotib olgan nechanchi raqam.',
            },
            {
              term: '～から',
              reading: '～から',
              meaning: '~dan',
              exampleSentence: '山田[やまだ]からは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~dan samimiy inson.',
            },
            {
              term: '～まで',
              reading: '～まで',
              meaning: '~gacha, ~ ga qadar',
              exampleSentence: '山田[やまだ]までは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~gacha, ~ ga qadar samimiy inson.',
            },
            {
              term: '～と～',
              reading: '～と～',
              meaning: '~ bilan ~',
              exampleSentence: '山田[やまだ]とは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ bilan ~ samimiy inson.',
            },
            {
              term: 'そちら',
              reading: 'そちら',
              meaning: 'sizda',
              exampleSentence: 'これは わたしが 買[か]った そちら です。',
              exampleTranslation: 'Bu men sotib olgan sizda.',
            },
            {
              term: '大変ですね。 (たいへんですね。)',
              reading: 'たいへんですね。',
              meaning: 'Qiyin bo`libdi.',
              exampleSentence:
                'これは わたしが 買[か]った 大変ですね。Qiyinbo`libdi.[たいへんですね。] です。',
              exampleTranslation: 'Bu men sotib olgan qiyin bo`libdi..',
            },
            {
              term: 'えーと',
              reading: 'えーと',
              meaning: "Xo'sh… . (fikrni jamlash payti iborasi)",
              exampleSentence: 'これは わたしが 買[か]った えーと です。',
              exampleTranslation: "Bu men sotib olgan xo'sh… . (fikrni jamlash payti iborasi).",
            },
            {
              term: '１０４',
              reading: '１０４',
              meaning: "104 (ma'lumotlar bo'limi raqami)",
              exampleSentence: 'これは わたしが 買[か]った １０４ です。',
              exampleTranslation: "Bu men sotib olgan 104 (ma'lumotlar bo'limi raqami).",
            },
            {
              term: 'お願ねがいします。',
              reading: 'お願ねがいします。',
              meaning: 'Iltimos.',
              exampleSentence: '毎日[まいにち] お願[ねが]いします。。',
              exampleTranslation: 'Har kuni iltimos..',
            },
            {
              term: 'かしこまりました。',
              reading: 'かしこまりました。',
              meaning: 'Tushundim. / Uqdim.',
              exampleSentence: 'これは わたしが 買[か]った かしこまりました。 です。',
              exampleTranslation: 'Bu men sotib olgan tushundim. / uqdim..',
            },
            {
              term: 'お問とい合あわせの番号ばんごう',
              reading: 'お問とい合あわせの番号ばんごう',
              meaning: "Ma'lumot uchun telefonlar",
              exampleSentence:
                'これは わたしが 買[か]った お問[と]い合[あ]わせの番号[ばんごう] です。',
              exampleTranslation: "Bu men sotib olgan ma'lumot uchun telefonlar.",
            },
            {
              term: 'どうもありがとうございました。',
              reading: 'どうもありがとうございました。',
              meaning: 'Katta rahmat.',
              exampleSentence: 'これは わたしが 買[か]った [どうも]ありがとうございました。 です。',
              exampleTranslation: 'Bu men sotib olgan katta rahmat..',
            },
            {
              term: 'ニューヨーク',
              reading: 'ニューヨーク',
              meaning: 'Nyu-York',
              exampleSentence: 'これは わたしが 買[か]った ニューヨーク です。',
              exampleTranslation: 'Bu men sotib olgan nyu-york.',
            },
            {
              term: 'ペキン',
              reading: 'ペキン',
              meaning: 'Pekin',
              exampleSentence: 'これは わたしが 買[か]った ペキン です。',
              exampleTranslation: 'Bu men sotib olgan pekin.',
            },
            {
              term: 'ロンドン',
              reading: 'ロンドン',
              meaning: 'London',
              exampleSentence: 'これは わたしが 買[か]った ロンドン です。',
              exampleTranslation: 'Bu men sotib olgan london.',
            },
            {
              term: 'バンコク',
              reading: 'バンコク',
              meaning: 'Bangkok',
              exampleSentence: 'これは わたしが 買[か]った バンコク です。',
              exampleTranslation: 'Bu men sotib olgan bangkok.',
            },
            {
              term: 'ロサンゼルス',
              reading: 'ロサンゼルス',
              meaning: 'Los-Anjeles',
              exampleSentence: 'これは わたしが 買[か]った ロサンゼルス です。',
              exampleTranslation: 'Bu men sotib olgan los-anjeles.',
            },
            {
              term: 'やまと美び術じゅつ館かん',
              reading: 'やまと美び術じゅつ館かん',
              meaning: "muzey nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った やまと美[び]術[じゅつ]館[かん] です。',
              exampleTranslation: "Bu men sotib olgan muzey nomi (o'ylab topilgan).",
            },
            {
              term: '大阪おおさかデパート',
              reading: '大阪おおさかデパート',
              meaning: "univermag nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った 大阪[おおさか]デパート です。',
              exampleTranslation: "Bu men sotib olgan univermag nomi (o'ylab topilgan).",
            },
            {
              term: 'みどり図と書しょ館かん',
              reading: 'みどり図と書しょ館かん',
              meaning: "kutubxona nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った みどり図[と]書[しょ]館[かん] です。',
              exampleTranslation: "Bu men sotib olgan kutubxona nomi (o'ylab topilgan).",
            },
            {
              term: 'アップル銀行ぎんこう',
              reading: 'アップル銀行ぎんこう',
              meaning: "bank nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った アップル銀行[ぎんこう] です。',
              exampleTranslation: "Bu men sotib olgan bank nomi (o'ylab topilgan).",
            },
          ],
          grammarRules: [
            {
              pattern: '1.',
              meaning:
                "今[いま] －時[じ] －分[ふん] です Vaqtni ifodalash uchun 時[じ] ( soat ) va 分[ふん] ( daqiqa ) kabi sanoq suffikslari ishlatiladi. Bunda son 分[ふん] dan oldin qo'yiladi. 2, 5, 7, 9 kabi raqamlardan keyin ふん , 1, 3, 4, 6, 8, 10 lardan so'ng ぷん deb o'qiladi. Bundan tashqari, 1, 6, 8 va 10 – いっ、ろっ、はっ va じゅっ （じっ） shaklida o'qiladi. なん so'roq so'zi sanoq suffikslari bilan qo'llanilib, son va miqdorga bog'liq savol berish uchun qo'llaniladi. Shunday qilib, なんじ (yoki gohida なんぷん ) vaqtga taalluqli savollarda qo'llanadi. 💡 Muhim eslatma: 1-darsda o'rganganingizdek, は suhbat (mulohaza) mavzusini ifodalaydi. Quyidagi ikkinchi misolda ko'rsatilganidek, jo'g'rofik joy nomlari ham mulohaza mavzusi bo'lib kelishi mumkin.",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '今[いま] 何[なん] 時[じ] ですか。',
                  translation: "･･･ ７時[じ] １０分[ぷん] です。 …Soat 7 dan 10 daqiqa o'tdi.",
                },
                {
                  sentence: 'ニューヨークは 今[いま] 何[なん] 時[じ] ですか。',
                  translation: '･･･ 午前[ごぜん] ４時[じ] です。 …Ertalabki soat 4.',
                },
              ],
            },
            {
              pattern: 'FE’L  ます',
              meaning:
                "ます qo'shimchasi bilan tugagan fe'l gapda kesim bo'lib keladi. ます qo'shimchasi gapning hurmat shaklini ifodalaydi.",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは 毎日[まいにち] 勉強[べんきょう] します。',
                  translation: 'Men har kuni dars tayyorlayman.',
                },
              ],
            },
            {
              pattern: 'FE’L  ます /  FE’L  ません /  FE’L  ました /  FE’L  ませんでした',
              meaning:
                "1) ます qo'shimchasi gapda hozirgi zamon yoki doimo sodir bo'ladigan ish-harakatni ifodalash uchun qo'llaniladi. Yana bu qo'shimcha kelasi zamonda sodir bo'ladigan ish- harakatni ifodalash uchun ham qo'llaniladi. Qo'shimchaning inkor va so'roq shakli quyidagi chizmada ko'rsatilgan. Hozirgi / Kelasi zamon O'tgan zamon Bo'lishli shakl ( おき ) ます ( おき ) ました Bo'lishsiz shakl ( おき ) ません ( おき ) ませんでした oddiy gaplardagidek yasaladi, ya'ni gapda so'zlarning tartibi o'zgarmaydi, gapning oxiriga か qo'shimchasi qo'shiladi. Bunday savollarga javob berayotganda, odatda, fe'l qaytariladi. そうです yoki そうじゃ ありません (2-darsga qarang) qo'llanilishi mumkin emas. ･･･ はい、勉強[べんきょう] しました。 …Ha dars tayyorladim. ･･･ いいえ、勉強[べんきょう] しませんでした。 …Yo'q, dars tayyorlamadim. ･･･ ６時[じ] に 起[お] きます。 …Men soat 6 da uyg'onaman.",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '毎[まい] 朝[あさ] ６時[じ] に 起[お] きます。',
                  translation: 'Har kuni ertalab soat 6 da uyg`onaman.',
                },
                {
                  sentence: 'あした ６時[じ] に 起[お] きます。',
                  translation: 'Ertaga soat 6 da uyg`onaman.',
                },
                {
                  sentence: 'けさ ６時[じ] に 起[お] きました。',
                  translation:
                    "2) Kesim fe'l orqali ifodalangan gaplarning so'roq shakli xuddi ega va kesimdan iborat",
                },
                {
                  sentence: 'きのう 勉強[べんきょう] しましたか。',
                  translation: 'Kecha dars tayyorladingizmi?',
                },
                {
                  sentence: '毎[まい] 朝[あさ] 何[なん] 時[じ] に 起[お] きますか。',
                  translation: 'Har kuni ertalab soat nechada uyqudan turasiz?',
                },
              ],
            },
            {
              pattern: 'OT (vaqt)  に  FE’L',
              meaning:
                "Agar fe'l davomsiz harakatni bildirsa, o'sha harakat sodir bo'lganda に qo'shimchasi qo'shiladi. に qo'shimchasi undan oldin kelayotgan ot, sanoq son bilan bog'liq bo'lganda qo'llaniladi ( ⑨ ⑩ ). Yana, bu qo'shimcha hafta kunlariga ham qo'shilishi mumkin, lekin shart emas ( ⑪ ). Agar ot sanoq sonsiz ishlatilsa, に qo'shilmaydi ( ⑫ ).",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '６時[じ] 半[はん] に 起[お] きます。',
                  translation: 'Soat 6 yarimda turaman.',
                },
                {
                  sentence: '７月[がつ] ２日[ふつか] に 日[に] 本[ほん] へ 来[き] ました。',
                  translation: 'Yaponiyaga 2-iyulda keldim.',
                },
                {
                  sentence: '日[にち] 曜[よう] 日[び] [ に ]  奈良[なら] へ 行[い] きます。',
                  translation: 'Yakshanba kuni Naraga boraman.',
                },
                {
                  sentence: 'きのう 勉強[べんきょう] しました。',
                  translation: 'Kecha dars tayyorladim.',
                },
              ],
            },
            {
              pattern: 'OT 1 から  OT 2 まで',
              meaning:
                "1) から boshlang'ich vaqt yoki joyni, まで oxirini ko'rsatadi. ～から , ～まで yoki ～から～まで dan keyin gohida です fe'li qo'llaniladi. ⑯ 昼[ひる] 休[やす] みは １２時[じ] からです。 Tushlik payti soat 12 dan (boshlanadi). ⑰ 銀行[ぎんこう] は ９時[じ] から ３時[じ] までです。 Bank soat 9 dan 3 gacha (ishlaydi).",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '９時[じ] から ５時[じ] まで 働[はたら] きます。',
                  translation: "Soat to'qqizdan beshgacha ishlayman.",
                },
                {
                  sentence:
                    '大阪[おおさか] から 東京[とうきょう] まで ３時[じ] 間[かん] かかります。',
                  translation: '2) から va まで har doim ham birga kelavermaydi.',
                },
                {
                  sentence: '９時[じ] から 働[はたら] きます。',
                  translation: 'Men soat 9 dan ishlayman.',
                },
              ],
            },
            {
              pattern: 'OT 1 と  OT 2',
              meaning:
                "と qo'shimchasi ikkita otni o'zaro teng bog'laydi. ⑱ 銀行[ぎんこう] の 休[やす] みは 土曜日[どようび] と 日[にち] 曜[よう] 日[び] です。 Bank shanba va yakshanba kunlari ishlamaydi.",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'OT 1 と  OT 2',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'GAP  ね',
              meaning:
                "Gapning oxirida qo'shiladigan ね yuklamasi mulohazaga hissiy-ta'siriy bo'yoq beradi. Masalan, bu yuklama hamdardlikni yoki so'zlovchi suhbatdoshidan kutayotgan rozilikni ifodalalshi mumkin. Oxirgi misolda ね yuklamasi ma'lumotni tasdiqlash uchun qo'llaniladi. ⑲ 毎日[まいにち] １０時[じ] ごろまで 勉強[べんきょう] します。 Har kuni taxminan soat 10 gacha dars tayyorlayman. ･･･ 大変[たいへん] ですね。 …Sizga qiyin ekan. ⑳ 山[やま] 田[だ] さんの 電[でん] 話[わ] 番[ばん] 号[ごう] は ８７１の６８１３です。 Janob Yamadaning telefon raqami 871-6813. ･･･ ８７１の６８１３ですね。 …871-6813, shundaymi?",
              usageNotes:
                'Minna no Nihongo 4-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'GAP  ね',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada poyezdlar va avtobuslar daqiqasigacha aniq ishlaydi. Banklar va pochtalar qat'iy jadval asosida ishlaydi (odatda 9:00 dan 15:00 yoki 17:00 gacha).",
        },
      },
      {
        id: 'ja-minna-l4-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[4].practice],
        },
      },
      {
        id: 'ja-minna-l4-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[4].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l5',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u1',
    unitTitle: "Minna Shokyu 1: 1–5 Darslar (Boshlang'ich Tanishuv va Harakat)",
    language: 'ja',
    level: 'N5',
    lessonNumber: 5,
    title: '5-dars: Harakat, Transport va Safar',
    description:
      "Minna no Nihongo Shokyu 1: 5-dars: Harakat, Transport va Safar. Darsda 60 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l5-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '5-dars: Harakat, Transport va Safar',
          subtitle: '第5課：行く・来る・帰る・交通手段',
          explanation:
            "5-dars: Harakat, Transport va Safar bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1. OT (o`rin-joy )  へ 行[い] きます ／来[き] ます ／帰[かえ] ります: Harakat fe'llari bilan birga へ yuklamasi otdan keyin qo'yiladi.",
            "📌 2. どこ [ へ ] も 行[い] きません／行[い] きませんでした: Inkor gapda も yuklamasi gapdagi so'roq so'zidan keyin kelsa, so'roq so'zi anglatadigan barcha hodisa va tushunchalar rad qilinadi.",
            "📌 3. OT (harakatlanish vositasi)  で 行[い] きます／来[き] ます／帰[かえ] ります: で yuklamasi harakatlanish usuli yoki vositasini ko'rsatadi.",
            "📌 4.  OT (jonli)  と  FE’L: Odam yoki hayvonlarni bildiradigan otlardan keyin と yuklamasi qo'llansa, harakatning birgalikda sodir etilishini bildiradi.",
            "📌 5.  いつ: Vaqtni aniqlaydigan savol gaplarda なんじ , なんようび , なんがつ va なんに ち kabi なん bilan bog'liq savol so'zlari qo'llaniladi.",
            "📌 6. GAP  よ: よ yuklamasi gapning oxiriga qo'yiladi.",
          ],
          vocabulary: [
            {
              term: '行きます (いきます)',
              reading: 'いきます',
              meaning: 'bormoq',
              exampleSentence: 'あした 京都[きょうと]へ 行[い]きます。',
              exampleTranslation: 'Ertaga Kiotoga boraman.',
            },
            {
              term: '来ます (きます)',
              reading: 'きます',
              meaning: 'kelmoq',
              exampleSentence: '友達[ともだち]が うちへ 来[き]ました。',
              exampleTranslation: "Do'stim uyimga keldi.",
            },
            {
              term: '帰ります (かえります)',
              reading: 'かえります',
              meaning: 'qaytmoq',
              exampleSentence: '午後[ごご] 7時[しちじ]に 国[くに]へ 帰[かえ]ります。',
              exampleTranslation: 'Kechqurun soat 7 da yurtimga qaytaman.',
            },
            {
              term: '学校 (がっこう)',
              reading: 'がっこう',
              meaning: 'maktab',
              exampleSentence: '自転車[じてんしゃ]で 学校[がっこう]へ 行きます。',
              exampleTranslation: 'Velosipedda maktabga boraman.',
            },
            {
              term: 'スーパー',
              reading: 'スーパー',
              meaning: "supermarket, savdo do'koni",
              exampleSentence: '駅[えき]の前[まえ]の スーパーで 買[か]い物[もの]を します。',
              exampleTranslation: 'Bekat oldidagi supermarketda xarid qilaman.',
            },
            {
              term: '駅 (えき)',
              reading: 'えき',
              meaning: 'vokzal; bekat',
              exampleSentence: '新宿[しんじゅく]駅[えき]で 電車[でんしゃ]を降[お]ります。',
              exampleTranslation: 'Shinjuku bekatida poyezddan tushaman.',
            },
            {
              term: '飛行機 (ひこうき)',
              reading: 'ひこうき',
              meaning: 'samolyot',
              exampleSentence: '飛行機[ひこうき]で 10時間[じゅうじかん] かかります。',
              exampleTranslation: 'Samolyotda 10 soat ketadi.',
            },
            {
              term: '船 (ふね)',
              reading: 'ふね',
              meaning: 'kema',
              exampleSentence: '横浜[よこはま]から 船[ふね]に 乗[の]ります。',
              exampleTranslation: "Yokogamadan kemaga o'tiraman.",
            },
            {
              term: '電車 (でんしゃ)',
              reading: 'でんしゃ',
              meaning: 'poyezd',
              exampleSentence: '地下鉄[ちかてつ]と 電車[でんしゃ]を 使[つか]います。',
              exampleTranslation: 'Metro va elektr poyezddan foydalanaman.',
            },
            {
              term: '地下鉄 (ちかてつ)',
              reading: 'ちかてつ',
              meaning: 'metro',
              exampleSentence: '東京[とうきょう]の 地下鉄[ちかてつ]は 便利[べんり]です。',
              exampleTranslation: 'Tokio metrosi juda qulaydir.',
            },
            {
              term: '新幹線 (しんかんせん)',
              reading: 'しんかんせん',
              meaning: '“sinkansen” tez yurar poyezdi',
              exampleSentence: '新幹線[しんかんせん]で 大阪[おおさか]へ 行きました。',
              exampleTranslation: 'Tezyurar Shinkansenda Osakaga bordim.',
            },
            {
              term: 'バス',
              reading: 'バス',
              meaning: 'avtobus',
              exampleSentence: 'バス停[てい]で バスを 待[ま]ちます。',
              exampleTranslation: 'Bekatda avtobus kutaman.',
            },
            {
              term: 'タクシー',
              reading: 'タクシー',
              meaning: 'taksi',
              exampleSentence: '雨[あめ]ですから、タクシーで 行きましょう。',
              exampleTranslation: "Yomg'ir yog'yapti, taksida boraylik.",
            },
            {
              term: '自転車 (じてんしゃ)',
              reading: 'じてんしゃ',
              meaning: 'velosiped',
              exampleSentence: '弟[おとうと]の 自転車[じてんしゃ]を 借[か]りました。',
              exampleTranslation: 'Ukamning velosipedini qarzga oldim.',
            },
            {
              term: '歩いて (あるいて)',
              reading: 'あるいて',
              meaning: 'piyoda',
              exampleSentence: '駅から 家[いえ]まで 歩[ある]いて 行きます。',
              exampleTranslation: 'Bekatdan uygacha piyoda boraman.',
            },
            {
              term: '人 (ひと)',
              reading: 'ひと',
              meaning: 'odam, kishi, inson',
              exampleSentence: '親切[しんせつ]な 人[ひと]に 会[あ]いました。',
              exampleTranslation: 'Mehribon inson bilan uchrashdim.',
            },
            {
              term: '友達 (ともだち)',
              reading: 'ともだち',
              meaning: "do'st, dugona",
              exampleSentence: '友達[ともだち]と いっしょに 映画[えいが]を 見[み]ました。',
              exampleTranslation: "Do'stim bilan birga kino ko'rdim.",
            },
            {
              term: '彼 (かれ)',
              reading: 'かれ',
              meaning: 'u (erkak kishi)',
              exampleSentence: '彼[かれ]は 英語[えいご]が 上手[じょうず]です。',
              exampleTranslation: "U (yigit) ingliz tilida ravon so'zlashadi.",
            },
            {
              term: '彼女 (かのじょ)',
              reading: 'かのじょ',
              meaning: 'u (ayol kishi)',
              exampleSentence: '彼女[かのじょ]は さくら大学[だいがく]の 学生[がくせい]です。',
              exampleTranslation: 'U (qiz) Sakura universiteti talabasi.',
            },
            {
              term: '家族 (かぞく)',
              reading: 'かぞく',
              meaning: 'oila',
              exampleSentence: '家族[かぞく]と 電話[でんわ]で 話[はな]しました。',
              exampleTranslation: 'Oilam bilan telefonda gaplashdim.',
            },
            {
              term: '一人で (ひとりで)',
              reading: 'ひとりで',
              meaning: "bir o'zi(~m, ~ng ), yakka",
              exampleSentence: '一人[ひとり]で 部屋[へや]を 掃除[そうじ]しました。',
              exampleTranslation: "Bir o'zim xonani tozaladim.",
            },
            {
              term: '先週 (せんしゅう)',
              reading: 'せんしゅう',
              meaning: "o'tgan hafta",
              exampleSentence: '毎日[まいにち] 先週[せんしゅう]。',
              exampleTranslation: "Har kuni o'tgan hafta.",
            },
            {
              term: '今週 (こんしゅう)',
              reading: 'こんしゅう',
              meaning: 'bu hafta',
              exampleSentence: '毎日[まいにち] 今週[こんしゅう]。',
              exampleTranslation: 'Har kuni bu hafta.',
            },
            {
              term: '来週 (らいしゅう)',
              reading: 'らいしゅう',
              meaning: 'kelasi hafta',
              exampleSentence: '毎日[まいにち] 来週[らいしゅう]。',
              exampleTranslation: 'Har kuni kelasi hafta.',
            },
            {
              term: '先月 (せんげつ)',
              reading: 'せんげつ',
              meaning: "o'tgan oy",
              exampleSentence: 'これは わたしが 買[か]った 先月[せんげつ] です。',
              exampleTranslation: "Bu men sotib olgan o'tgan oy.",
            },
            {
              term: '今月 (こんげつ)',
              reading: 'こんげつ',
              meaning: 'bu oy',
              exampleSentence: 'これは わたしが 買[か]った 今月[こんげつ] です。',
              exampleTranslation: 'Bu men sotib olgan bu oy.',
            },
            {
              term: '来月 (らいげつ)',
              reading: 'らいげつ',
              meaning: 'kelasi oy',
              exampleSentence: 'これは わたしが 買[か]った 来月[らいげつ] です。',
              exampleTranslation: 'Bu men sotib olgan kelasi oy.',
            },
            {
              term: '去年 (きょねん)',
              reading: 'きょねん',
              meaning: "o'tgan yili",
              exampleSentence: 'これは わたしが 買[か]った 去年[きょねん] です。',
              exampleTranslation: "Bu men sotib olgan o'tgan yili.",
            },
            {
              term: '今年 (ことし)',
              reading: 'ことし',
              meaning: 'bu yil',
              exampleSentence: 'これは わたしが 買[か]った 今年[ことし] です。',
              exampleTranslation: 'Bu men sotib olgan bu yil.',
            },
            {
              term: '来年 (らいねん)',
              reading: 'らいねん',
              meaning: 'kelasi yil',
              exampleSentence: 'これは わたしが 買[か]った 来年[らいねん] です。',
              exampleTranslation: 'Bu men sotib olgan kelasi yil.',
            },
            {
              term: '～月 (～がつ)',
              reading: '～がつ',
              meaning: '~chi oy, ~oyi',
              exampleSentence: '山田[やまだ]がつは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~chi oy, ~oyi samimiy inson.',
            },
            {
              term: '何月 (なんがつ)',
              reading: 'なんがつ',
              meaning: 'qaysi oy',
              exampleSentence: 'これは わたしが 買[か]った 何月[なんがつ] です。',
              exampleTranslation: 'Bu men sotib olgan qaysi oy.',
            },
            {
              term: '1日 (ついたち)',
              reading: 'ついたち',
              meaning: 'oyning birinchi sanasi',
              exampleSentence: 'これは わたしが 買[か]った 1日[ついたち] です。',
              exampleTranslation: 'Bu men sotib olgan oyning birinchi sanasi.',
            },
            {
              term: '2日 (ふつか)',
              reading: 'ふつか',
              meaning: 'oyning ikkinchi sanasi; ikki kun',
              exampleSentence: 'これは わたしが 買[か]った 2日[ふつか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning ikkinchi sanasi; ikki kun.',
            },
            {
              term: '3日 (みっか)',
              reading: 'みっか',
              meaning: 'oyning uchinchi sanasi; uch kun',
              exampleSentence: 'これは わたしが 買[か]った 3日[みっか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning uchinchi sanasi; uch kun.',
            },
            {
              term: '4日 (よっか)',
              reading: 'よっか',
              meaning: "oyning to'rtinchi sanasi; to'rt kun",
              exampleSentence: 'これは わたしが 買[か]った 4日[よっか] です。',
              exampleTranslation: "Bu men sotib olgan oyning to'rtinchi sanasi; to'rt kun.",
            },
            {
              term: '5日 (いつか)',
              reading: 'いつか',
              meaning: 'oyning beshinchi sanasi; besh kun',
              exampleSentence: 'これは わたしが 買[か]った 5日[いつか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning beshinchi sanasi; besh kun.',
            },
            {
              term: '6日 (むいか)',
              reading: 'むいか',
              meaning: 'oyning oltinchi sanasi; olti kun',
              exampleSentence: 'これは わたしが 買[か]った 6日[むいか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning oltinchi sanasi; olti kun.',
            },
            {
              term: '7日 (なのか)',
              reading: 'なのか',
              meaning: 'oyning yettinchi sanasi; yetti kun',
              exampleSentence: 'これは わたしが 買[か]った 7日[なのか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning yettinchi sanasi; yetti kun.',
            },
            {
              term: '8日 (ようか)',
              reading: 'ようか',
              meaning: 'oyning sakkizinchi sanasi; sakkiz kun',
              exampleSentence: 'これは わたしが 買[か]った 8日[ようか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning sakkizinchi sanasi; sakkiz kun.',
            },
            {
              term: '9日 (ここのか)',
              reading: 'ここのか',
              meaning: "oyning to'qqizinchi sanasi; to'qqiz kun",
              exampleSentence: 'これは わたしが 買[か]った 9日[ここのか] です。',
              exampleTranslation: "Bu men sotib olgan oyning to'qqizinchi sanasi; to'qqiz kun.",
            },
            {
              term: '10日 (とおか)',
              reading: 'とおか',
              meaning: "oyning oninchi sanasi; o'n kun",
              exampleSentence: 'これは わたしが 買[か]った 10日[とおか] です。',
              exampleTranslation: "Bu men sotib olgan oyning oninchi sanasi; o'n kun.",
            },
            {
              term: '14日 (じゅうよっか)',
              reading: 'じゅうよっか',
              meaning: "oyning o'n to'rtinchi sanasi; o'n to'rt kun",
              exampleSentence: 'これは わたしが 買[か]った 14日[じゅうよっか] です。',
              exampleTranslation: "Bu men sotib olgan oyning o'n to'rtinchi sanasi; o'n to'rt kun.",
            },
            {
              term: '20日 (はつか)',
              reading: 'はつか',
              meaning: 'oyning yigirmanchi sanasi; yigirma kun',
              exampleSentence: 'これは わたしが 買[か]った 20日[はつか] です。',
              exampleTranslation: 'Bu men sotib olgan oyning yigirmanchi sanasi; yigirma kun.',
            },
            {
              term: '24日 (にじゅうよっか)',
              reading: 'にじゅうよっか',
              meaning: "oyning yigirma to'rtinchi sanasi; yigirma to'rt kun",
              exampleSentence: 'これは わたしが 買[か]った 24日[にじゅうよっか] です。',
              exampleTranslation:
                "Bu men sotib olgan oyning yigirma to'rtinchi sanasi; yigirma to'rt kun.",
            },
            {
              term: '～日 (～にち)',
              reading: '～にち',
              meaning: '~chi sana, ~chi kun; ~kun',
              exampleSentence: '山田[やまだ]にちは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~chi sana, ~chi kun; ~kun samimiy inson.',
            },
            {
              term: '何日 (なんにち)',
              reading: 'なんにち',
              meaning: 'oyning nechanchi sanasi; necha kun',
              exampleSentence: 'これは わたしが 買[か]った 何日[なんにち] です。',
              exampleTranslation: 'Bu men sotib olgan oyning nechanchi sanasi; necha kun.',
            },
            {
              term: 'いつ',
              reading: 'いつ',
              meaning: 'qachon',
              exampleSentence: 'これは わたしが 買[か]った いつ です。',
              exampleTranslation: 'Bu men sotib olgan qachon.',
            },
            {
              term: '誕生日 (たんじょうび)',
              reading: 'たんじょうび',
              meaning: "tug'ilgan kun",
              exampleSentence: 'これは わたしが 買[か]った 誕生日[たんじょうび] です。',
              exampleTranslation: "Bu men sotib olgan tug'ilgan kun.",
            },
            {
              term: '普通 (ふつう)',
              reading: 'ふつう',
              meaning: 'oddiy poyezd',
              exampleSentence: '毎日[まいにち] 普通[ふつう]。',
              exampleTranslation: 'Har kuni oddiy poyezd.',
            },
            {
              term: '急行 (きゅうこう)',
              reading: 'きゅうこう',
              meaning: 'tez yurar poyezd',
              exampleSentence: '毎日[まいにち] 急行[きゅうこう]。',
              exampleTranslation: 'Har kuni tez yurar poyezd.',
            },
            {
              term: '特急 (とっきゅう)',
              reading: 'とっきゅう',
              meaning: 'ekspress (tez yurar) poyezd',
              exampleSentence: '毎日[まいにち] 特急[とっきゅう]。',
              exampleTranslation: 'Har kuni ekspress (tez yurar) poyezd.',
            },
            {
              term: '次の (つぎの)',
              reading: 'つぎの',
              meaning: 'kelasi, keyingi, navbatdagi',
              exampleSentence: 'これは わたしが 買[か]った 次の[つぎの] です。',
              exampleTranslation: 'Bu men sotib olgan kelasi, keyingi, navbatdagi.',
            },
            {
              term: 'どういたしまして。',
              reading: 'どういたしまして。',
              meaning: 'Arzimaydi., Hechqisi yoq.',
              exampleSentence: 'これは わたしが 買[か]った どういたしまして。 です。',
              exampleTranslation: 'Bu men sotib olgan arzimaydi., hechqisi yoq..',
            },
            {
              term: '～番線ばんせん',
              reading: '～番線ばんせん',
              meaning: "~chi yo'l (temir yo'l)",
              exampleSentence: '山田[やまだ]番線[ばんせん]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada ~chi yo'l (temir yo'l) samimiy inson.",
            },
            {
              term: '博多',
              reading: '博多',
              meaning: 'Hakata (Kyushyudagi shahar)',
              exampleSentence: 'これは わたしが 買[か]った 博[はか]多[た] です。',
              exampleTranslation: 'Bu men sotib olgan hakata (kyushyudagi shahar).',
            },
            {
              term: '伏見',
              reading: '伏見',
              meaning: 'Fushimi (Kiotodagi tuman)',
              exampleSentence: 'これは わたしが 買[か]った 伏[ふし]見[み] です。',
              exampleTranslation: 'Bu men sotib olgan fushimi (kiotodagi tuman).',
            },
            {
              term: '甲子園',
              reading: '甲子園',
              meaning: 'Koshien (Osaka yaqinidagi shahar)',
              exampleSentence: 'これは わたしが 買[か]った 甲子園[こうしえん] です。',
              exampleTranslation: 'Bu men sotib olgan koshien (osaka yaqinidagi shahar).',
            },
            {
              term: '大阪城',
              reading: '大阪城',
              meaning: "Osaka qal'asi",
              exampleSentence: 'これは わたしが 買[か]った 大[おお]阪[さか]城[じょう] です。',
              exampleTranslation: "Bu men sotib olgan osaka qal'asi.",
            },
          ],
          grammarRules: [
            {
              pattern: 'OT (o`rin-joy )  へ 行[い] きます ／来[き] ます ／帰[かえ] ります',
              meaning:
                "Harakat fe'llari bilan birga へ yuklamasi otdan keyin qo'yiladi. Bu ot harakat sodir bo'ladigan joyni bildiradi.",
              usageNotes:
                'Minna no Nihongo 5-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '京[きょう] 都[と] へ 行[い] きます。',
                  translation: 'Kiotoga boraman.',
                },
                {
                  sentence: '日[に] 本[ほん] へ 来[き] ました。',
                  translation: 'Yaponiyaga keldim.',
                },
                {
                  sentence: 'うちへ 帰[かえ] ります。',
                  translation: '[Eslatma] 「へ」 yuklamasi え deb talaffuz qilinadi.',
                },
              ],
            },
            {
              pattern: 'どこ [ へ ] も 行[い] きません／行[い] きませんでした',
              meaning:
                "Inkor gapda も yuklamasi gapdagi so'roq so'zidan keyin kelsa, so'roq so'zi anglatadigan barcha hodisa va tushunchalar rad qilinadi.",
              usageNotes:
                'Minna no Nihongo 5-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'どこ [ へ ] も 行[い] きません。',
                  translation: 'Hech qayerga bormayman.',
                },
                {
                  sentence: '何[なに] も 食[た] べません。',
                  translation: 'Hech narsa yemayman.',
                },
                {
                  sentence: 'だれも いません。',
                  translation: 'Hech kim yoq.',
                },
              ],
            },
            {
              pattern:
                'OT (harakatlanish vositasi)  で 行[い] きます／来[き] ます／帰[かえ] ります',
              meaning:
                "で yuklamasi harakatlanish usuli yoki vositasini ko'rsatadi. Agar で yuklamasi bilan いきます , きます , かえります va hokazo kabi harakatlanishni bildiradigan fe'llar qo'llansa, で yuklamasi harakatlanish vositasini anglatadi. Bu holda で dan oldindagi ot transport vositasi deyiladi. ishlatganingiz ma'qul. Bu holda で yuklamasi qo'llanilmaydi.",
              usageNotes:
                'Minna no Nihongo 5-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '電車[でんしゃ] で 行[い] きます。',
                  translation: 'Poyezdda boraman.',
                },
                {
                  sentence: 'タクシーで 来[き] ました。',
                  translation: "Agar siz piyoda ketayotgan bo'sangiz, あるいて ( あるく ) so'zini",
                },
                {
                  sentence: '駅[えき] から 歩[ある] いて 帰[かえ] りました。',
                  translation: 'Men bekatdan piyoda qaytdim.',
                },
              ],
            },
            {
              pattern: 'OT (jonli)  と  FE’L',
              meaning:
                "Odam yoki hayvonlarni bildiradigan otlardan keyin と yuklamasi qo'llansa, harakatning birgalikda sodir etilishini bildiradi. Yakka holdagi harakat uchun ひとりで iborasi qo'llaniladi va undan keyin と yuklamasi qo'yilmaydi.",
              usageNotes:
                'Minna no Nihongo 5-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '家[か] 族[ぞく] と 日[に] 本[ほん] へ 来[き] ました。',
                  translation: 'Men Yaponiyaga oilam bilan keldim.',
                },
                {
                  sentence: '一人[ひとり] で 東京[とうきょう] へ 行[い] きます。',
                  translation: 'Men bir o`zim Tokioga boraman.',
                },
              ],
            },
            {
              pattern: 'いつ',
              meaning:
                "Vaqtni aniqlaydigan savol gaplarda なんじ , なんようび , なんがつ va なんに ち kabi なん bilan bog'liq savol so'zlari qo'llaniladi. Shuningdek, biror-bir hodisa qachon sodir bo'lishi yoki sodir bo'lganligi haqidagi savollarda いつ so'zi qo'llaniladi va u bilan birga に yuklamasi qo'llanilmaydi. ･･･３月[がつ] ２５日[にち] に 来[き] ました。 …25 martda keldim.",
              usageNotes:
                'Minna no Nihongo 5-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'いつ 日[に] 本[ほん] へ 来[き] ましたか。',
                  translation: 'Qachon Yaponiyaga keldingiz?',
                },
                {
                  sentence: 'いつ 広島[ひろしま] へ 行[い] きますか。',
                  translation: '･･･来週[らいしゅう] 行[い] きます。 …Kelasi haftada boraman.',
                },
              ],
            },
            {
              pattern: 'GAP  よ',
              meaning:
                "よ yuklamasi gapning oxiriga qo'yiladi. Bu yuklama tinglovchi uchun yangi ma'lumotni anglatadi yoki so'zlovchi o'zining gaplariga to'liq aminligini anglatadi. Bu elektr poyezd Koshienga boradimi?",
              usageNotes:
                'Minna no Nihongo 5-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'この 電車[でんしゃ] は 甲[こう] 子[し] 園[えん] へ 行[い] きますか。',
                  translation:
                    "･･･いいえ、行[い] きません。次[つぎ] の 普[ふ] 通[つう] ですよ。 …Yo'q, bormaydi. Keyingi “oddiy poyezd” boradi.",
                },
                {
                  sentence: '無理[むり] な ダイエットは 体[からだ] に よくないですよ。',
                  translation: "Zo'rlab tutilgan parhez sog'liqqa zarar!",
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada transport tizimi juda rivojlangan. Tezyurar poyezd Shinkansen bilan shaharlararo sayohat qilinadi. Pasxa va Obon bayramlarida hamma o'z ona shahriga (furusato) qaytadi.",
        },
      },
      {
        id: 'ja-minna-l5-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[5].practice],
        },
      },
      {
        id: 'ja-minna-l5-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[5].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l6',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u2',
    unitTitle: 'Minna Shokyu 1: 6–10 Darslar (Kundalik Hayot, Oila va Mavjudlik)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 6,
    title: "6-dars: Kundalik faoliyat va Obyekt (Harakat fe'llari)",
    description:
      "Minna no Nihongo Shokyu 1: 6-dars: Kundalik faoliyat va Obyekt (Harakat fe'llari). Darsda 59 ta yangi so'z, audio talaffuzli Furigana misollar va 8 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l6-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "6-dars: Kundalik faoliyat va Obyekt (Harakat fe'llari)",
          subtitle: '第6課：動詞と目的語（〜を、〜で）',
          explanation:
            "6-dars: Kundalik faoliyat va Obyekt (Harakat fe'llari) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1. OT  を FE’L (o`timli): を tushum kelishigi ko'rsatkichi bo'lib, o'timli fe'l sifatida ifodalangan ish-harakatning to'g'ri to'ldiruvchisini ifodalaydi.",
            "📌 2. OT  をします: します fe'lining ob'ekti sifatida turli xil otlar kelishi mumkin.",
            "📌 3.  何[なに] を しますか: Ushbu so'roq gap ma'lum bir shaxs ish-harakatining mazmuniga qaratilib, ushbu shaxs nima bilan shug'ullanishi, nima qilish niyati borligini bilish uchun qo'llaniladi.",
            "📌 4.    なん  va  なに: なん so'zi kabi なに ham “ nima ” ma'nosini ifodalaydi.",
            "📌 5.     OT (o`rin-joy) で  FE’L: Agar Ot (o'rin-joy) yoki joy nomidan keyin で (o'rin-payt kelishigi ko'rsatkichi) kelsa, u holda ushbu qo'shimchali so'z ish-harakat bajarilgan joyni anglatadi.",
            "📌 6. FE’L  ませんか: Ushbu shaklda tugallanadigan gap so'roq va inkor ma'nosini emas, balki ish-harakatning bajarilishiga yo'naltirilgan taklif ma'nosini anglatadi.",
          ],
          vocabulary: [
            {
              term: '食べます',
              reading: 'たべます',
              meaning: 'yemoq',
              exampleSentence: '毎日[まいにち] 食べます。',
              exampleTranslation: 'Har kuni yemoq.',
            },
            {
              term: '飲みます',
              reading: 'のみます',
              meaning: 'ichmoq',
              exampleSentence: '毎日[まいにち] 飲みます。',
              exampleTranslation: 'Har kuni ichmoq.',
            },
            {
              term: '吸います',
              reading: 'すいます',
              meaning: 'chekmoq',
              exampleSentence: '毎日[まいにち] 吸います。',
              exampleTranslation: 'Har kuni chekmoq.',
            },
            {
              term: 'たばこを～',
              reading: 'たばこを～',
              meaning: '(tamaki chekmoq)',
              exampleSentence: '山田[やまだ][たばこを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (tamaki chekmoq) samimiy inson.',
            },
            {
              term: '見ます',
              reading: 'みます',
              meaning: "ko'rmoq",
              exampleSentence: '毎日[まいにち] 見ます。',
              exampleTranslation: "Har kuni ko'rmoq.",
            },
            {
              term: '聞きます',
              reading: 'ききます',
              meaning: 'eshitmoq',
              exampleSentence: '毎日[まいにち] 聞きます。',
              exampleTranslation: 'Har kuni eshitmoq.',
            },
            {
              term: '読みます',
              reading: 'よみます',
              meaning: "o'qimoq",
              exampleSentence: '毎日[まいにち] 読みます。',
              exampleTranslation: "Har kuni o'qimoq.",
            },
            {
              term: '書きます',
              reading: 'かきます',
              meaning: 'yozmoq',
              exampleSentence: '毎日[まいにち] 書きます。',
              exampleTranslation: 'Har kuni yozmoq.',
            },
            {
              term: '買います',
              reading: 'かいます',
              meaning: 'sotib olmoq',
              exampleSentence: '毎日[まいにち] 買います。',
              exampleTranslation: 'Har kuni sotib olmoq.',
            },
            {
              term: '撮ります',
              reading: 'とります',
              meaning: 'olmoq',
              exampleSentence: '毎日[まいにち] 撮ります。',
              exampleTranslation: 'Har kuni olmoq.',
            },
            {
              term: 'しゃしんを～写真を～',
              reading: 'しゃしんを～写真を～',
              meaning: '] (fotosuratga olmoq)',
              exampleSentence: '山田[やまだ][しゃしんを][写真をは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ] (fotosuratga olmoq) samimiy inson.',
            },
            {
              term: 'します',
              reading: 'します',
              meaning: 'qilmoq, bajarmoq',
              exampleSentence: '土曜日[どようび]に サッカーを します。',
              exampleTranslation: "Shanba kuni futbol o'ynayman.",
            },
            {
              term: '会います',
              reading: 'あいます',
              meaning: 'uchratmoq',
              exampleSentence: '毎日[まいにち] 会います。',
              exampleTranslation: 'Har kuni uchratmoq.',
            },
            {
              term: '友達に～ (ともだちに～)',
              reading: 'ともだちに～',
              meaning: "(do'stini uchratmoq)",
              exampleSentence: '山田[やまだ][ともだちに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (do'stini uchratmoq) samimiy inson.",
            },
            {
              term: 'ごはん',
              reading: 'ごはん',
              meaning: 'ovqat; qaynatilgan guruch',
              exampleSentence: 'これは わたしが 買[か]った ごはん です。',
              exampleTranslation: 'Bu men sotib olgan ovqat; qaynatilgan guruch.',
            },
            {
              term: '朝ごはん',
              reading: 'あさごはん',
              meaning: 'ertalabki nonushta',
              exampleSentence: 'これは わたしが 買[か]った 朝ごはん です。',
              exampleTranslation: 'Bu men sotib olgan ertalabki nonushta.',
            },
            {
              term: '昼ごはん',
              reading: 'ひるごはん',
              meaning: 'tushlik',
              exampleSentence: 'これは わたしが 買[か]った 昼ごはん です。',
              exampleTranslation: 'Bu men sotib olgan tushlik.',
            },
            {
              term: '晩ごはん',
              reading: 'ばんごはん',
              meaning: 'kechki ovqat',
              exampleSentence: 'これは わたしが 買[か]った 晩ごはん です。',
              exampleTranslation: 'Bu men sotib olgan kechki ovqat.',
            },
            {
              term: 'パン',
              reading: 'パン',
              meaning: 'non',
              exampleSentence: 'これは わたしが 買[か]った パン です。',
              exampleTranslation: 'Bu men sotib olgan non.',
            },
            {
              term: '卵',
              reading: 'たまご',
              meaning: 'tuxum',
              exampleSentence: 'これは わたしが 買[か]った 卵 です。',
              exampleTranslation: 'Bu men sotib olgan tuxum.',
            },
            {
              term: '肉',
              reading: 'にく',
              meaning: "go'sht",
              exampleSentence: 'これは わたしが 買[か]った 肉 です。',
              exampleTranslation: "Bu men sotib olgan go'sht.",
            },
            {
              term: '魚',
              reading: 'さかな',
              meaning: 'baliq',
              exampleSentence: 'これは わたしが 買[か]った 魚 です。',
              exampleTranslation: 'Bu men sotib olgan baliq.',
            },
            {
              term: '野菜',
              reading: 'やさい',
              meaning: 'sabzavot, poliz ekinlari',
              exampleSentence: 'これは わたしが 買[か]った 野菜 です。',
              exampleTranslation: 'Bu men sotib olgan sabzavot, poliz ekinlari.',
            },
            {
              term: '果物',
              reading: 'くだもの',
              meaning: 'meva',
              exampleSentence: 'これは わたしが 買[か]った 果物 です。',
              exampleTranslation: 'Bu men sotib olgan meva.',
            },
            {
              term: '水',
              reading: 'みず',
              meaning: 'suv',
              exampleSentence: 'これは わたしが 買[か]った 水 です。',
              exampleTranslation: 'Bu men sotib olgan suv.',
            },
            {
              term: 'お茶',
              reading: 'おちゃ',
              meaning: 'choy',
              exampleSentence: 'これは わたしが 買[か]った お茶 です。',
              exampleTranslation: 'Bu men sotib olgan choy.',
            },
            {
              term: '紅茶',
              reading: 'こうちゃ',
              meaning: 'qora choy',
              exampleSentence: 'これは わたしが 買[か]った 紅茶 です。',
              exampleTranslation: 'Bu men sotib olgan qora choy.',
            },
            {
              term: '牛乳',
              reading: 'ぎゅうにゅう',
              meaning: 'sut',
              exampleSentence: 'これは わたしが 買[か]った 牛乳 です。',
              exampleTranslation: 'Bu men sotib olgan sut.',
            },
            {
              term: 'ミルク',
              reading: 'ミルク',
              meaning: 'sut',
              exampleSentence: 'これは わたしが 買[か]った ミルク です。',
              exampleTranslation: 'Bu men sotib olgan sut.',
            },
            {
              term: 'ジュース',
              reading: 'ジュース',
              meaning: 'sharbat',
              exampleSentence: 'これは わたしが 買[か]った ジュース です。',
              exampleTranslation: 'Bu men sotib olgan sharbat.',
            },
            {
              term: 'ビール',
              reading: 'ビール',
              meaning: 'pivo',
              exampleSentence: 'これは わたしが 買[か]った ビール です。',
              exampleTranslation: 'Bu men sotib olgan pivo.',
            },
            {
              term: '酒 (おさけお)',
              reading: 'おさけお',
              meaning: "guruchdan tayyorlangan yapon arog'i",
              exampleSentence: 'これは わたしが 買[か]った ]酒[[お]さけ[お] です。',
              exampleTranslation: "Bu men sotib olgan guruchdan tayyorlangan yapon arog'i.",
            },
            {
              term: 'ビデオ',
              reading: 'ビデオ',
              meaning: 'video',
              exampleSentence: 'これは わたしが 買[か]った ビデオ です。',
              exampleTranslation: 'Bu men sotib olgan video.',
            },
            {
              term: '映画',
              reading: 'えいが',
              meaning: 'kino',
              exampleSentence: 'これは わたしが 買[か]った 映画 です。',
              exampleTranslation: 'Bu men sotib olgan kino.',
            },
            {
              term: 'ＣＤ',
              reading: 'ＣＤ',
              meaning: 'kompakt-disk',
              exampleSentence: 'これは わたしが 買[か]った ＣＤ です。',
              exampleTranslation: 'Bu men sotib olgan kompakt-disk.',
            },
            {
              term: '手紙',
              reading: 'てがみ',
              meaning: 'xat, maktub',
              exampleSentence: 'これは わたしが 買[か]った 手紙 です。',
              exampleTranslation: 'Bu men sotib olgan xat, maktub.',
            },
            {
              term: 'レポート',
              reading: 'レポート',
              meaning: "hisobot; ma'ruza",
              exampleSentence: 'これは わたしが 買[か]った レポート です。',
              exampleTranslation: "Bu men sotib olgan hisobot; ma'ruza.",
            },
            {
              term: '写真',
              reading: 'しゃしん',
              meaning: 'fotosurat',
              exampleSentence: 'これは わたしが 買[か]った 写真 です。',
              exampleTranslation: 'Bu men sotib olgan fotosurat.',
            },
            {
              term: '店',
              reading: 'みせ',
              meaning: "do'kon",
              exampleSentence: 'これは わたしが 買[か]った 店 です。',
              exampleTranslation: "Bu men sotib olgan do'kon.",
            },
            {
              term: 'レストラン',
              reading: 'レストラン',
              meaning: 'restoran',
              exampleSentence: 'これは わたしが 買[か]った レストラン です。',
              exampleTranslation: 'Bu men sotib olgan restoran.',
            },
            {
              term: '庭',
              reading: 'にわ',
              meaning: 'hovli, bog',
              exampleSentence: 'これは わたしが 買[か]った 庭 です。',
              exampleTranslation: 'Bu men sotib olgan hovli, bog.',
            },
            {
              term: '宿題',
              reading: 'しゅくだい',
              meaning: 'uyga vazifa',
              exampleSentence: 'これは わたしが 買[か]った 宿題 です。',
              exampleTranslation: 'Bu men sotib olgan uyga vazifa.',
            },
            {
              term: 'テニス',
              reading: 'テニス',
              meaning: "tennis ( ～します tennis o'ynamoq)",
              exampleSentence: 'これは わたしが 買[か]った テニス です。',
              exampleTranslation: "Bu men sotib olgan tennis ( ～します tennis o'ynamoq).",
            },
            {
              term: 'サッカー',
              reading: 'サッカー',
              meaning: "futbol ( ～します futbol o'ynamoq)",
              exampleSentence: 'これは わたしが 買[か]った サッカー です。',
              exampleTranslation: "Bu men sotib olgan futbol ( ～します futbol o'ynamoq).",
            },
            {
              term: 'お花見 (おはなみ)',
              reading: 'おはなみ',
              meaning: 'gullagan sakura daraxtini tomosha qilish',
              exampleSentence: 'これは わたしが 買[か]った お]花見[[お]はなみ[] です。',
              exampleTranslation: 'Bu men sotib olgan gullagan sakura daraxtini tomosha qilish.',
            },
            {
              term: '何',
              reading: 'なに',
              meaning: 'nima',
              exampleSentence: 'これは わたしが 買[か]った 何 です。',
              exampleTranslation: 'Bu men sotib olgan nima.',
            },
            {
              term: 'いっしょに',
              reading: 'いっしょに',
              meaning: 'birga',
              exampleSentence: 'これは わたしが 買[か]った いっしょに です。',
              exampleTranslation: 'Bu men sotib olgan birga.',
            },
            {
              term: 'ちょっと',
              reading: 'ちょっと',
              meaning: 'bir oz, ozgina, ozroq',
              exampleSentence: 'これは わたしが 買[か]った ちょっと です。',
              exampleTranslation: 'Bu men sotib olgan bir oz, ozgina, ozroq.',
            },
            {
              term: 'いつも',
              reading: 'いつも',
              meaning: 'har doim, doimo',
              exampleSentence: 'これは わたしが 買[か]った いつも です。',
              exampleTranslation: 'Bu men sotib olgan har doim, doimo.',
            },
            {
              term: '時々',
              reading: 'ときどき',
              meaning: "ba'zan",
              exampleSentence: 'これは わたしが 買[か]った 時々 です。',
              exampleTranslation: "Bu men sotib olgan ba'zan.",
            },
            {
              term: 'それから',
              reading: 'それから',
              meaning: "undan so'ng, undan keyin; shundan so'ng, shundan keyin",
              exampleSentence: 'これは わたしが 買[か]った それから です。',
              exampleTranslation:
                "Bu men sotib olgan undan so'ng, undan keyin; shundan so'ng, shundan keyin.",
            },
            {
              term: 'ええ',
              reading: 'ええ',
              meaning: 'ha',
              exampleSentence: 'これは わたしが 買[か]った ええ です。',
              exampleTranslation: 'Bu men sotib olgan ha.',
            },
            {
              term: 'いいですね。',
              reading: 'いいですね。',
              meaning: 'Qanday yaxshi.',
              exampleSentence: 'これは わたしが 買[か]った いいですね。 です。',
              exampleTranslation: 'Bu men sotib olgan qanday yaxshi..',
            },
            {
              term: 'わかりました。',
              reading: 'わかりました。',
              meaning: 'Tushundim.',
              exampleSentence: 'これは わたしが 買[か]った わかりました。 です。',
              exampleTranslation: 'Bu men sotib olgan tushundim..',
            },
            {
              term: '何なんですか。',
              reading: '何なんですか。',
              meaning: 'Nima?',
              exampleSentence: 'これは わたしが 買[か]った 何[なん]ですか。 です。',
              exampleTranslation: 'Bu men sotib olgan nima?.',
            },
            {
              term: '。 (じゃ、またあした)',
              reading: 'じゃ、またあした',
              meaning: "Ko'rishguncha.",
              exampleSentence: 'これは わたしが 買[か]った ]。[じゃ、また[あした] です。',
              exampleTranslation: "Bu men sotib olgan ko'rishguncha..",
            },
            {
              term: 'メキシコ',
              reading: 'メキシコ',
              meaning: 'Meksika',
              exampleSentence: 'これは わたしが 買[か]った メキシコ です。',
              exampleTranslation: 'Bu men sotib olgan meksika.',
            },
            {
              term: '大阪城公こう園えん',
              reading: '大阪城公こう園えん',
              meaning: "Osaka qal'asi bog'i",
              exampleSentence:
                'これは わたしが 買[か]った 大[おお]阪[さか]城[じょう]公[こう]園[えん] です。',
              exampleTranslation: "Bu men sotib olgan osaka qal'asi bog'i.",
            },
          ],
          grammarRules: [
            {
              pattern: 'OT  を FE’L (o`timli)',
              meaning:
                "を tushum kelishigi ko'rsatkichi bo'lib, o'timli fe'l sifatida ifodalangan ish-harakatning to'g'ri to'ldiruvchisini ifodalaydi. 💡 Muhim eslatma: を va お harflari bir xil talaffuz qilinadi. Lekin, を harfi faqat grammatik qo'shimcha (tushum kelishigi ko'rsatkichi) sifatida qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ジュースを 飲[の] みます。',
                  translation: 'Sharbatni ichaman.',
                },
              ],
            },
            {
              pattern: 'OT  をします',
              meaning:
                "します fe'lining ob'ekti sifatida turli xil otlar kelishi mumkin. します fe'li ot so'z turkumi bilan ifodalangan ish-harakatning bajarilishini ifodalaydi. Quyida bir qancha misollar keltirilgan: 1) “ o'yin o'ynamoq ” yoki turli xil sport turlari bilan “ shug'ullanmoq ” ma'nosida サッカーを します Futbol o'ynamoq トランプを します Qarta o'ynamoq 2) tadbirlar “ o'tkazmoq ”, “ tashkillashtirmoq ” パーティーを します Kecha uyushtirmoq 会[かい] 議[ぎ] を します Majlis o'tkazmoq 3) biror-bir ish-harakatni “ bajarmoq ” 宿題[しゅくだい] を します Uy vazifasini bajarmoq 仕[し] 事[ごと] を します Ishlamoq / Ish yuritmoq",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'OT  をします',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: '何[なに] を しますか',
              meaning:
                "Ushbu so'roq gap ma'lum bir shaxs ish-harakatining mazmuniga qaratilib, ushbu shaxs nima bilan shug'ullanishi, nima qilish niyati borligini bilish uchun qo'llaniladi. ･･･ 京[きょう] 都[と] へ 行[い] きます。 …Kiotoga boraman. ･･･ サッカーを しました。 …Futbol o'ynadim. 💡 Muhim eslatma: は qo'shimchasi bilan harakat vaqtini mavzuga aylantiramiz. ･･･ 京[きょう] 都[と] へ 行[い] きます。 …Kiotoga boraman.",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '月[げつ] 曜[よう] 日[び] 何[なに] を しますか。',
                  translation: "Dushanba kuni nima bilan shug'ullanasiz?",
                },
                {
                  sentence: 'きのう 何[なに] を しましたか。',
                  translation: "Kecha nima bilan shug'ullandingiz?",
                },
                {
                  sentence: '月[げつ] 曜[よう] 日[び] は 何[なに] を しますか？',
                  translation: 'Dushanbada nima qilasiz?',
                },
              ],
            },
            {
              pattern: 'なん  va  なに',
              meaning:
                "なん so'zi kabi なに ham “ nima ” ma'nosini ifodalaydi. 1) なん quyidagi hollarda qo'llaniladi. (1) た , だ , な – qator harflari bilan boshlanadigan so'zlardan avval kelgan hollarda. (2) Sanoq suffiksi qo'shilganda yoki shunga o'xshash hollarda: ～ちゃん Kichraytirish va erkalash oti ko'rsatkichi 2) Qolgan barcha hollarda なに so'zi qo'llanadi.",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'それは 何[なん] ですか。',
                  translation: 'U nima?',
                },
                {
                  sentence: '何[なん] の 本ですか。',
                  translation: 'Qanday kitob?',
                },
                {
                  sentence: '寝[ね] るまえに、何[なん] と 言[い] いますか。',
                  translation: "(Qanday so'z aytish kerak?) (21-dars)",
                },
                {
                  sentence: 'テレザちゃんは 何歳[なんさい] ですか。',
                  translation: 'Tereza necha yoshda?',
                },
                {
                  sentence: '何[なに] を 買[か] いますか。',
                  translation: 'Nima sotib olasiz?',
                },
              ],
            },
            {
              pattern: 'OT (o`rin-joy) で  FE’L',
              meaning:
                "Agar Ot (o'rin-joy) yoki joy nomidan keyin で (o'rin-payt kelishigi ko'rsatkichi) kelsa, u holda ushbu qo'shimchali so'z ish-harakat bajarilgan joyni anglatadi.",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '駅[えき] で 新聞[しんぶん] を 買[か] います。',
                  translation: 'Vokzalda gazeta sotib olaman.',
                },
              ],
            },
            {
              pattern: 'FE’L  ませんか',
              meaning:
                "Ushbu shaklda tugallanadigan gap so'roq va inkor ma'nosini emas, balki ish-harakatning bajarilishiga yo'naltirilgan taklif ma'nosini anglatadi. ･･･ ええ、いいですね。 …Mayli, bajonidil.",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '一緒[いっしょ] に 京[きょう] 都[と] へ 行[い] きませんか。',
                  translation: 'Birga Kiotoga bormaysizmi?',
                },
              ],
            },
            {
              pattern: 'FE’L  ましょう',
              meaning:
                "Ushbu tuzilmadagi gaplar so'zlovchining o'z suhbatdoshini ma'lum bir ish-harakatni birga bajarishga taklif etish ma'nosini anglatadi. Shuningdek taklifga rozilik berilayotganda ham ushbu tuzilmadan foydalaniladi. ･･･ ええ、食[た] べましょう。 …Mayli, keling tushlik qilamiz. 💡 Muhim eslatma: FE'L ませんか shaklidagi gaplar FE'L ましょう ga nisbatan ancha muloyimroq shakl hisoblanadi.",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ちょっと 休[やす] みましょう。',
                  translation: 'Keling ozgina dam olaylik.',
                },
                {
                  sentence: '一緒[いっしょ] に 昼[ひる] ごはんを 食[た] べませんか。',
                  translation: 'Birga tushlik qilmaysizmi?',
                },
              ],
            },
            {
              pattern: 'お～',
              meaning:
                "So'zlovchining suhbatdoshiga qaratilgan hurmatini kuchaytirib ifodalash uchun unga aloqador bo'lgan so'zlarga お old qo'shimchasi qo'shilishini 3-darsda ko'rib chiqqan edik. (Masalan, [ お ] くに – yurtingiz ) Shu bilan birga お old qo'shimchasi boshqa ba'zi so'zlarga ham qo'shilishi mumkin. (masalan, [ お ] さけ – sake ( yapon spirtli ichimligi ), [ お ] はなみ – sakura daraxti gullashini tomosha qilish bayrami ). Ba'zi so'zlar deyarli hamma vaqt, ya'ni hurmat ma'nosi anglatmaydigan gaplarda ham お bilan birga qo'llanadi (masalan, おちゃ – choy , お金 – pul ).",
              usageNotes:
                'Minna no Nihongo 6-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'お～',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
          ],
          culturalNotes:
            "Tushlikka yoki choyga taklif qilganda to'g'ridan-to'g'ri 'birga boraylik' deyish o'rniga, muloyimlik bilan '~ませんか' (bormaysizmi?) deb so'raladi.",
        },
      },
      {
        id: 'ja-minna-l6-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[6].practice],
        },
      },
      {
        id: 'ja-minna-l6-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[6].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l7',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u2',
    unitTitle: 'Minna Shokyu 1: 6–10 Darslar (Kundalik Hayot, Oila va Mavjudlik)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 7,
    title: "7-dars: Qurol, Til va Sovg'a almashish (Bermoq/Olmoq)",
    description:
      "Minna no Nihongo Shokyu 1: 7-dars: Qurol, Til va Sovg'a almashish (Bermoq/Olmoq). Darsda 50 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l7-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "7-dars: Qurol, Til va Sovg'a almashish (Bermoq/Olmoq)",
          subtitle: '第7課：手段と授受（あげます・もらいます）',
          explanation:
            "7-dars: Qurol, Til va Sovg'a almashish (Bermoq/Olmoq) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            '📌 1.    OT (qurol / vosita)  で  FE’L: で yuklamasi biror qurol yoki vosita orqali ish-harakatning bajarilishini bildiradi.',
            "📌 2.  “SO`Z / GAP”  は～語[ご] で 何[なん] ですか: Bu gap shakli, biror so'z yoki gapni boshqa tilda qanday bo'lishini so'rash uchun ishlatiladi.",
            "📌 3.   OT (shaxs)  に あげます、 va hokazo: あげます , かします , おしえます kabi fe'llar harakat kimga ( bermoq, qarzga bermoq, o'rgatmoq ) qaratilganligini ko'rsatilishini talab qiladi va bu shaxsga に yuklamasi qo'shiladi.",
            "📌 4.  OT (shaxs)  に もらいます、  va hokazo: もらいます , かります , ならいます kabi fe'llar, qabul qiluvchi shaxsning harakatini izohlaydi.",
            "📌 5.   もう  FE’L  ました: “ もう ” “ allaqachon ” degan ma'noni bildirib, “FE'L ました ” bilan birga qo'llaniladi.",
          ],
          vocabulary: [
            {
              term: '切ります (きります)',
              reading: 'きります',
              meaning: 'kesmoq (pichoqda), qirqmoq (qaychida)',
              exampleSentence: '毎日[まいにち] 切ります[きります]。',
              exampleTranslation: 'Har kuni kesmoq (pichoqda), qirqmoq (qaychida).',
            },
            {
              term: '送ります (おくります)',
              reading: 'おくります',
              meaning: "jo'natmoq",
              exampleSentence: '毎日[まいにち] 送ります[おくります]。',
              exampleTranslation: "Har kuni jo'natmoq.",
            },
            {
              term: 'あげます',
              reading: 'あげます',
              meaning: "bermoq, sovg'a qilmoq",
              exampleSentence: '毎日[まいにち] あげます。',
              exampleTranslation: "Har kuni bermoq, sovg'a qilmoq.",
            },
            {
              term: 'もらいます',
              reading: 'もらいます',
              meaning: 'olmoq',
              exampleSentence: '毎日[まいにち] もらいます。',
              exampleTranslation: 'Har kuni olmoq.',
            },
            {
              term: '貸します (かします)',
              reading: 'かします',
              meaning: 'qarzga bermoq, berib turmoq',
              exampleSentence: '毎日[まいにち] 貸します[かします]。',
              exampleTranslation: 'Har kuni qarzga bermoq, berib turmoq.',
            },
            {
              term: '借ります (かります)',
              reading: 'かります',
              meaning: 'qarzga olmoq, olib turmoq',
              exampleSentence: '毎日[まいにち] 借ります[かります]。',
              exampleTranslation: 'Har kuni qarzga olmoq, olib turmoq.',
            },
            {
              term: '教えます (おしえます)',
              reading: 'おしえます',
              meaning: "o'rgatmoq, saboq bermoq",
              exampleSentence: '毎日[まいにち] 教えます[おしえます]。',
              exampleTranslation: "Har kuni o'rgatmoq, saboq bermoq.",
            },
            {
              term: '習います (ならいます)',
              reading: 'ならいます',
              meaning: "o'rganmoq, saboq olmoq",
              exampleSentence: '毎日[まいにち] 習います[ならいます]。',
              exampleTranslation: "Har kuni o'rganmoq, saboq olmoq.",
            },
            {
              term: 'かけます',
              reading: 'かけます',
              meaning: "(qo'ng'iroq) qilmoq",
              exampleSentence: '毎日[まいにち] かけます。',
              exampleTranslation: "Har kuni (qo'ng'iroq) qilmoq.",
            },
            {
              term: '電話を～ (でんわを～)',
              reading: 'でんわを～',
              meaning: "(telefon qilmoq, qo'ng'iroq qilmoq)",
              exampleSentence: '山田[やまだ][でんわを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (telefon qilmoq, qo'ng'iroq qilmoq) samimiy inson.",
            },
            {
              term: '手 (て)',
              reading: 'て',
              meaning: "qo'l",
              exampleSentence: '田中[たなか]さんは 手[て] です。',
              exampleTranslation: "Tanaka janoblari qo'l.",
            },
            {
              term: 'はし',
              reading: 'はし',
              meaning: 'hashi',
              exampleSentence: 'これは わたしが 買[か]った はし です。',
              exampleTranslation: 'Bu men sotib olgan hashi.',
            },
            {
              term: 'スプーン',
              reading: 'スプーン',
              meaning: 'qoshiq',
              exampleSentence: 'これは わたしが 買[か]った スプーン です。',
              exampleTranslation: 'Bu men sotib olgan qoshiq.',
            },
            {
              term: 'ナイフ',
              reading: 'ナイフ',
              meaning: 'pichoq',
              exampleSentence: 'これは わたしが 買[か]った ナイフ です。',
              exampleTranslation: 'Bu men sotib olgan pichoq.',
            },
            {
              term: 'フォーク',
              reading: 'フォーク',
              meaning: 'sanchqi (vilka)',
              exampleSentence: 'これは わたしが 買[か]った フォーク です。',
              exampleTranslation: 'Bu men sotib olgan sanchqi (vilka).',
            },
            {
              term: 'はさみ',
              reading: 'はさみ',
              meaning: 'qaychi',
              exampleSentence: 'これは わたしが 買[か]った はさみ です。',
              exampleTranslation: 'Bu men sotib olgan qaychi.',
            },
            {
              term: 'ファクス',
              reading: 'ファクス',
              meaning: 'faks',
              exampleSentence: 'これは わたしが 買[か]った ファクス です。',
              exampleTranslation: 'Bu men sotib olgan faks.',
            },
            {
              term: 'ワープロ',
              reading: 'ワープロ',
              meaning: 'matnli protsessor',
              exampleSentence: 'これは わたしが 買[か]った ワープロ です。',
              exampleTranslation: 'Bu men sotib olgan matnli protsessor.',
            },
            {
              term: 'パソコン',
              reading: 'パソコン',
              meaning: 'shaxsiy kompyuter',
              exampleSentence: 'これは わたしが 買[か]った パソコン です。',
              exampleTranslation: 'Bu men sotib olgan shaxsiy kompyuter.',
            },
            {
              term: 'パンチ',
              reading: 'パンチ',
              meaning: 'perforator, teshik ochqich',
              exampleSentence: 'これは わたしが 買[か]った パンチ です。',
              exampleTranslation: 'Bu men sotib olgan perforator, teshik ochqich.',
            },
            {
              term: 'ホッチキス',
              reading: 'ホッチキス',
              meaning: 'stepler',
              exampleSentence: 'これは わたしが 買[か]った ホッチキス です。',
              exampleTranslation: 'Bu men sotib olgan stepler.',
            },
            {
              term: 'セロテープ',
              reading: 'セロテープ',
              meaning: 'skoch',
              exampleSentence: 'これは わたしが 買[か]った セロテープ です。',
              exampleTranslation: 'Bu men sotib olgan skoch.',
            },
            {
              term: '消しゴム (けしゴム)',
              reading: 'けしゴム',
              meaning: "o'chirg'ich",
              exampleSentence: 'これは わたしが 買[か]った 消しゴム[けしゴム] です。',
              exampleTranslation: "Bu men sotib olgan o'chirg'ich.",
            },
            {
              term: '紙 (かみ)',
              reading: 'かみ',
              meaning: "qog'oz",
              exampleSentence: 'これは わたしが 買[か]った 紙[かみ] です。',
              exampleTranslation: "Bu men sotib olgan qog'oz.",
            },
            {
              term: '花 (はな)',
              reading: 'はな',
              meaning: 'gul',
              exampleSentence: 'これは わたしが 買[か]った 花[はな] です。',
              exampleTranslation: 'Bu men sotib olgan gul.',
            },
            {
              term: 'シャツ',
              reading: 'シャツ',
              meaning: "ko'ylak",
              exampleSentence: 'これは わたしが 買[か]った シャツ です。',
              exampleTranslation: "Bu men sotib olgan ko'ylak.",
            },
            {
              term: 'プレゼント',
              reading: 'プレゼント',
              meaning: "sovg'a, tuhva, hadya",
              exampleSentence: 'これは わたしが 買[か]った プレゼント です。',
              exampleTranslation: "Bu men sotib olgan sovg'a, tuhva, hadya.",
            },
            {
              term: '荷物 (にもつ)',
              reading: 'にもつ',
              meaning: 'buyum, yuk',
              exampleSentence: 'これは わたしが 買[か]った 荷物[にもつ] です。',
              exampleTranslation: 'Bu men sotib olgan buyum, yuk.',
            },
            {
              term: 'お金 (おかね)',
              reading: 'おかね',
              meaning: 'pul',
              exampleSentence: 'これは わたしが 買[か]った お金[おかね] です。',
              exampleTranslation: 'Bu men sotib olgan pul.',
            },
            {
              term: '切符 (きっぷ)',
              reading: 'きっぷ',
              meaning: 'chipta',
              exampleSentence: 'これは わたしが 買[か]った 切符[きっぷ] です。',
              exampleTranslation: 'Bu men sotib olgan chipta.',
            },
            {
              term: 'クリスマス',
              reading: 'クリスマス',
              meaning: 'Krismas bayrami (rojdestvo)',
              exampleSentence: 'これは わたしが 買[か]った クリスマス です。',
              exampleTranslation: 'Bu men sotib olgan krismas bayrami (rojdestvo).',
            },
            {
              term: '父 (ちち)',
              reading: 'ちち',
              meaning: 'otam, dadam',
              exampleSentence: 'これは わたしが 買[か]った 父[ちち] です。',
              exampleTranslation: 'Bu men sotib olgan otam, dadam.',
            },
            {
              term: '母 (はは)',
              reading: 'はは',
              meaning: 'onam, oyim',
              exampleSentence: 'これは わたしが 買[か]った 母[はは] です。',
              exampleTranslation: 'Bu men sotib olgan onam, oyim.',
            },
            {
              term: 'お父さん (おとうさん)',
              reading: 'おとうさん',
              meaning: 'ota, dada / ~ning otasi',
              exampleSentence: 'これは わたしが 買[か]った お父さん[おとうさん] です。',
              exampleTranslation: 'Bu men sotib olgan ota, dada / ~ning otasi.',
            },
            {
              term: 'お母さん (おかあさん)',
              reading: 'おかあさん',
              meaning: 'ona, oyi / ~ning onasi',
              exampleSentence: 'これは わたしが 買[か]った お母さん[おかあさん] です。',
              exampleTranslation: 'Bu men sotib olgan ona, oyi / ~ning onasi.',
            },
            {
              term: 'もう',
              reading: 'もう',
              meaning: "allaqachon, ~ib bo'ldi(~m,~ ing); endi",
              exampleSentence: '毎日[まいにち] もう。',
              exampleTranslation: "Har kuni allaqachon, ~ib bo'ldi(~m,~ ing); endi.",
            },
            {
              term: 'まだ',
              reading: 'まだ',
              meaning: 'hali ham',
              exampleSentence: 'これは わたしが 買[か]った まだ です。',
              exampleTranslation: 'Bu men sotib olgan hali ham.',
            },
            {
              term: 'これから',
              reading: 'これから',
              meaning: 'endi; bundan buyon',
              exampleSentence: 'これは わたしが 買[か]った これから です。',
              exampleTranslation: 'Bu men sotib olgan endi; bundan buyon.',
            },
            {
              term: '～、すてきですね。',
              reading: '～、すてきですね。',
              meaning: 'Bu~ buncha chiroyli!',
              exampleSentence: '山田[やまだ][、]すてきですね。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada bu~ buncha chiroyli! samimiy inson.',
            },
            {
              term: 'ごめんください。',
              reading: 'ごめんください。',
              meaning: 'Hoy kim bor?',
              exampleSentence: 'これは わたしが 買[か]った ごめんください。 です。',
              exampleTranslation: 'Bu men sotib olgan hoy kim bor?.',
            },
            {
              term: 'いらっしゃい。',
              reading: 'いらっしゃい。',
              meaning: 'Xush kelibsiz.',
              exampleSentence: 'これは わたしが 買[か]った いらっしゃい。 です。',
              exampleTranslation: 'Bu men sotib olgan xush kelibsiz..',
            },
            {
              term: 'どうぞお上あがりください。',
              reading: 'どうぞお上あがりください。',
              meaning: 'Ichkariga marhamat.',
              exampleSentence: 'これは わたしが 買[か]った どうぞお上[あ]がりください。 です。',
              exampleTranslation: 'Bu men sotib olgan ichkariga marhamat..',
            },
            {
              term: '失礼しつれいします。',
              reading: '失礼しつれいします。',
              meaning: "Rahmat. / Sizni ham bezovta qilib qo'ydim.",
              exampleSentence: '毎日[まいにち] 失礼[しつれい]します。。',
              exampleTranslation: "Har kuni rahmat. / sizni ham bezovta qilib qo'ydim..",
            },
            {
              term: '～はいかがですか。',
              reading: '～はいかがですか。',
              meaning: '~ga xushingiz qalay?',
              exampleSentence: '山田[やまだ][は]いかがですか。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ga xushingiz qalay? samimiy inson.',
            },
            {
              term: 'いただきます。',
              reading: 'いただきます。',
              meaning: "(Yeyish, ichishdan oldin qo'llaniladigan ibora )",
              exampleSentence: '毎日[まいにち] いただきます。。',
              exampleTranslation: "Har kuni (yeyish, ichishdan oldin qo'llaniladigan ibora ).",
            },
            {
              term: '旅行りょこう',
              reading: '旅行りょこう',
              meaning: 'sayohat, safar ( ～する sayohat qilmoq)',
              exampleSentence: 'これは わたしが 買[か]った 旅行[りょこう] です。',
              exampleTranslation: 'Bu men sotib olgan sayohat, safar ( ～する sayohat qilmoq).',
            },
            {
              term: 'お土産みやげ',
              reading: 'お土産みやげ',
              meaning:
                "Odatda safardan qaytayotganda yoki biror joyga borayotganda olib boriladigan sovg'a",
              exampleSentence: 'これは わたしが 買[か]った お土産[みやげ] です。',
              exampleTranslation:
                "Bu men sotib olgan odatda safardan qaytayotganda yoki biror joyga borayotganda olib boriladigan sovg'a.",
            },
            {
              term: 'ヨーロッパ',
              reading: 'ヨーロッパ',
              meaning: "Ovro'pa",
              exampleSentence: 'これは わたしが 買[か]った ヨーロッパ です。',
              exampleTranslation: "Bu men sotib olgan ovro'pa.",
            },
            {
              term: 'スペイン',
              reading: 'スペイン',
              meaning: 'Ispaniya',
              exampleSentence: 'これは わたしが 買[か]った スペイン です。',
              exampleTranslation: 'Bu men sotib olgan ispaniya.',
            },
          ],
          grammarRules: [
            {
              pattern: 'OT (qurol / vosita)  で  FE’L',
              meaning:
                'で yuklamasi biror qurol yoki vosita orqali ish-harakatning bajarilishini bildiradi.',
              usageNotes:
                'Minna no Nihongo 7-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'はしで 食[た] べます。',
                  translation: "Hashi(cho'pak)da yeyman.",
                },
                {
                  sentence: '日[に] 本[ほん] 語[ご] で レポートを 書[か] きます。',
                  translation: 'Yapon tilida hisobot yozaman.',
                },
              ],
            },
            {
              pattern: '“SO`Z / GAP”  は～語[ご] で 何[なん] ですか',
              meaning:
                "Bu gap shakli, biror so'z yoki gapni boshqa tilda qanday bo'lishini so'rash uchun ishlatiladi. ･･･「 Thank you 」です。 ･･･「ありがとう」です。",
              usageNotes:
                'Minna no Nihongo 7-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '「ありがとう」は 英[えい] 語[ご] で 何[なん] ですか。',
                  translation: "“Arigatou” ingliz tilida nima bo'ladi? …“Thank you” bo'ladi.",
                },
                {
                  sentence: '「 Thank you 」は 日[に] 本[ほん] 語[ご] で 何[なん] ですか。',
                  translation: "“Thank you” yapon tilida nima bo'ladi? …“Arigatou” bo'ladi.",
                },
              ],
            },
            {
              pattern: 'OT (shaxs)  に あげます、 va hokazo',
              meaning:
                "あげます , かします , おしえます kabi fe'llar harakat kimga ( bermoq, qarzga bermoq, o'rgatmoq ) qaratilganligini ko'rsatilishini talab qiladi va bu shaxsga に yuklamasi qo'shiladi. 💡 Muhim eslatma: おくります , 電[でん] 話[わ] をします va hokazo fe'llar bilan shaxsni bildiruvchi ot o'rniga joy nomlari qo'llanilishi mumkin. Bu holda に qo'shimchasi o'rniga へ qo'shimchasini ham ishlatsa bo'ladi. Korxonaga qo'ng'iroq qilaman.",
              usageNotes:
                'Minna no Nihongo 7-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '山[やま] 田[だ] さんは 木[き] 村[むら] さんに 花[はな] を あげました。',
                  translation: 'Janob Yamada Kimura xonimga gul berdi.',
                },
                {
                  sentence: 'イーさんに 本[ほん] を 貸[か] しました。',
                  translation: 'I xonimga kitob berib turdim.',
                },
                {
                  sentence: '太[た] 郎[ろう] 君[くん] に 英[えい] 語[ご] を 教[おし] えます。',
                  translation: "Taroga ingliz tilini o'rgataman.",
                },
                {
                  sentence: '会社[かいしゃ] に 電[でん] 話[わ] を かけます。',
                  translation: '（へ）',
                },
              ],
            },
            {
              pattern: 'OT (shaxs)  に もらいます、  va hokazo',
              meaning:
                "もらいます , かります , ならいます kabi fe'llar, qabul qiluvchi shaxsning harakatini izohlaydi. に qo'shimchasi taqdim etayotgan shaxsga qo'shiladi. Bunday gap misollarida gohida に o'rniga から qo'llaniladi. Agar, biror muassasa, masalan, bilim yurti yoki korxonadan biror narsa qabul qilinganda faqat から qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 7-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '木[き] 村[むら] さんは 山[やま] 田[だ] さんに 花[はな] を もらいました。',
                  translation: 'Kimura xonim janob Yamadadan gul oldilar.',
                },
                {
                  sentence: 'カリナさんに ＣＤを 借[か] りました。',
                  translation: 'Karinadan kompakt-disk olib turdim.',
                },
                {
                  sentence: 'ワンさんに 中[ちゅう] 国[ごく] 語[ご] を 習[なら] います。',
                  translation: "Janob Vandan xitoy tilini o'rganaman.",
                },
                {
                  sentence:
                    '木[き] 村[むら] さんは 山[やま] 田[だ] さんから 花[はな] を もらいました。',
                  translation: 'Kimura xonim janob Yamadadan gul oldilar.',
                },
                {
                  sentence: '銀行[ぎんこう] から お金[かね] を 借[か] りました。',
                  translation: 'Bankdan pul olib turdim.',
                },
              ],
            },
            {
              pattern: 'もう  FE’L  ました',
              meaning:
                "“ もう ” “ allaqachon ” degan ma'noni bildirib, “FE'L ました ” bilan birga qo'llaniladi. Shunday qilib, “FE'L ました ” harakatning allaqachon tugallanganligini bildiradi. “ もう FE'L ましたか ” savolining javobi はい、もう FE'L ました yoki いいえ、まだです bo'ladi. ･･･はい、 [ もう ] 送[おく] りました。 …Ha, jo'natdim. ･･･いいえ、まだです。 …Yo'q hali. Shu kabi savollarning inkor javobida “FE'L ませんでした ”ni qo'llamagan ma'qul, chunki, bu holda “FE'L ませんでした ” tugallanmagan harakatdan ko'ra, umuman bajarilmagan ish-harakatni bildiradi.",
              usageNotes:
                'Minna no Nihongo 7-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'もう 荷[に] 物[もつ] を 送[おく] りましたか。',
                  translation: "Yuklarni jo'natib bo'ldingizmi?",
                },
              ],
            },
          ],
          culturalNotes:
            "Ovqatlanishdan oldin 'いただきます' (itadakimasu) va ovqatlangandan keyin 'ごちそうさまでした' (gochisousama deshita) deb taomni tayyorlaganlarga minnatdorchilik bildiriladi.",
        },
      },
      {
        id: 'ja-minna-l7-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[7].practice],
        },
      },
      {
        id: 'ja-minna-l7-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[7].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l8',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u2',
    unitTitle: 'Minna Shokyu 1: 6–10 Darslar (Kundalik Hayot, Oila va Mavjudlik)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 8,
    title: '8-dars: Sifatlar (I-sifat va Na-sifatlar)',
    description:
      "Minna no Nihongo Shokyu 1: 8-dars: Sifatlar (I-sifat va Na-sifatlar). Darsda 63 ta yangi so'z, audio talaffuzli Furigana misollar va 8 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l8-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '8-dars: Sifatlar (I-sifat va Na-sifatlar)',
          subtitle: '第8課：形容詞（い形容詞・な形容詞）',
          explanation:
            "8-dars: Sifatlar (I-sifat va Na-sifatlar) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  SIFATLAR: Sifatlar 1) kesim, 2) aniqlovchi-ot o'rnida kelishi mumkin.",
            "📌 2.   OT  は な -SIFAT  [ な ] です: OT は い -SIFAT (~ い ) です 1) Gapda kesim vazifasida keladigan sifatdan keyingi です suhbatdoshga bo'lgan hurmatni bildiradi.",
            "📌 3.   な -SIFAT  な  OT: い -SIFAT ( ～い ) OT Sifat otdan oldin aniqlovchi sifatida keladi, otdan oldin な -sifatga “ な ” qo'shimchasi qo'shiladi.",
            '📌 4. とても／あまり: とても , あまり –ravish.',
            "📌 5.  OT  は どうですか: Bunday so'roq gap shakli biror kishi suhbatdoshining biror bir narsa, joy va kishi haqidagi fikri hamda taassuroti bilan qiziqqanda qo'llaniladi.",
            "📌 6.   OT １ は どんな OT 2  ですか: Savolning bu ko'rinishi OT 1 ga ta'rif berishda qo'llaniladi.",
          ],
          vocabulary: [
            {
              term: 'ハンサムな',
              reading: 'ハンサムな',
              meaning: "xushro'y, chiroyli",
              exampleSentence: 'これは わたしが 買[か]った ハンサム[な] です。',
              exampleTranslation: "Bu men sotib olgan xushro'y, chiroyli.",
            },
            {
              term: 'きれいな',
              reading: 'きれいな',
              meaning: "xushro'y, chiroyli, go'zal; toza",
              exampleSentence: 'これは わたしが 買[か]った きれい[な] です。',
              exampleTranslation: "Bu men sotib olgan xushro'y, chiroyli, go'zal; toza.",
            },
            {
              term: '静かな (しずかな)',
              reading: 'しずかな',
              meaning: 'tinch, osoyishta, osuda',
              exampleSentence: 'これは わたしが 買[か]った 静か[な][しずか[な]] です。',
              exampleTranslation: 'Bu men sotib olgan tinch, osoyishta, osuda.',
            },
            {
              term: 'にぎやかな',
              reading: 'にぎやかな',
              meaning: 'gavjum, sershovqin',
              exampleSentence: 'これは わたしが 買[か]った にぎやか[な] です。',
              exampleTranslation: 'Bu men sotib olgan gavjum, sershovqin.',
            },
            {
              term: '有名な (ゆうめいな)',
              reading: 'ゆうめいな',
              meaning: 'mashhur',
              exampleSentence: 'これは わたしが 買[か]った 有名[な][ゆうめい[な]] です。',
              exampleTranslation: 'Bu men sotib olgan mashhur.',
            },
            {
              term: '親切な (しんせつな)',
              reading: 'しんせつな',
              meaning: 'mehribon',
              exampleSentence: 'これは わたしが 買[か]った 親切[な][しんせつ[な]] です。',
              exampleTranslation: 'Bu men sotib olgan mehribon.',
            },
            {
              term: '元気な (げんきな)',
              reading: 'げんきな',
              meaning: "sog'lom, baquvvat",
              exampleSentence: 'これは わたしが 買[か]った 元気[な][げんき[な]] です。',
              exampleTranslation: "Bu men sotib olgan sog'lom, baquvvat.",
            },
            {
              term: '暇な (ひまな)',
              reading: 'ひまな',
              meaning: "bo'sh (vaqt),",
              exampleSentence: 'これは わたしが 買[か]った 暇[な][ひま[な]] です。',
              exampleTranslation: "Bu men sotib olgan bo'sh (vaqt),.",
            },
            {
              term: '便利な (べんりな)',
              reading: 'べんりな',
              meaning: 'qulay',
              exampleSentence: 'これは わたしが 買[か]った 便利[な][べんり[な]] です。',
              exampleTranslation: 'Bu men sotib olgan qulay.',
            },
            {
              term: 'すてきな',
              reading: 'すてきな',
              meaning: 'chiroyli, ajoyib',
              exampleSentence: 'これは わたしが 買[か]った すてき[な] です。',
              exampleTranslation: 'Bu men sotib olgan chiroyli, ajoyib.',
            },
            {
              term: '大きい (おおきい)',
              reading: 'おおきい',
              meaning: 'katta',
              exampleSentence: 'この 部屋[へや]は 大きい[おおきい]です。',
              exampleTranslation: 'Bu xona katta.',
            },
            {
              term: '小さい (ちいさい)',
              reading: 'ちいさい',
              meaning: 'kichik',
              exampleSentence: 'この 部屋[へや]は 小さい[ちいさい]です。',
              exampleTranslation: 'Bu xona kichik.',
            },
            {
              term: '新しい (あたらしい)',
              reading: 'あたらしい',
              meaning: 'yangi',
              exampleSentence: 'この 部屋[へや]は 新しい[あたらしい]です。',
              exampleTranslation: 'Bu xona yangi.',
            },
            {
              term: '古い (ふるい)',
              reading: 'ふるい',
              meaning: 'eski',
              exampleSentence: 'この 部屋[へや]は 古い[ふるい]です。',
              exampleTranslation: 'Bu xona eski.',
            },
            {
              term: 'いいよい',
              reading: 'いいよい',
              meaning: 'yaxshi',
              exampleSentence: 'この 部屋[へや]は いいよいです。',
              exampleTranslation: 'Bu xona yaxshi.',
            },
            {
              term: '悪い (わるい)',
              reading: 'わるい',
              meaning: 'yomon',
              exampleSentence: 'この 部屋[へや]は 悪い[わるい]です。',
              exampleTranslation: 'Bu xona yomon.',
            },
            {
              term: '暑い、熱い (あつい)',
              reading: 'あつい',
              meaning: 'issiq',
              exampleSentence: 'この 部屋[へや]は 暑い、熱い[あつい]です。',
              exampleTranslation: 'Bu xona issiq.',
            },
            {
              term: '寒い (さむい)',
              reading: 'さむい',
              meaning: 'sovuq',
              exampleSentence: 'この 部屋[へや]は 寒い[さむい]です。',
              exampleTranslation: 'Bu xona sovuq.',
            },
            {
              term: '冷たい (つめたい)',
              reading: 'つめたい',
              meaning: 'sovuq, yaxtak',
              exampleSentence: 'この 部屋[へや]は 冷たい[つめたい]です。',
              exampleTranslation: 'Bu xona sovuq, yaxtak.',
            },
            {
              term: '難しい (むずかしい)',
              reading: 'むずかしい',
              meaning: 'qiyin',
              exampleSentence: 'この 部屋[へや]は 難しい[むずかしい]です。',
              exampleTranslation: 'Bu xona qiyin.',
            },
            {
              term: '易しい (やさしい)',
              reading: 'やさしい',
              meaning: 'oson',
              exampleSentence: 'この 部屋[へや]は 易しい[やさしい]です。',
              exampleTranslation: 'Bu xona oson.',
            },
            {
              term: '高い (たかい)',
              reading: 'たかい',
              meaning: 'qimmat; baland',
              exampleSentence: 'この 部屋[へや]は 高い[たかい]です。',
              exampleTranslation: 'Bu xona qimmat; baland.',
            },
            {
              term: '安い (やすい)',
              reading: 'やすい',
              meaning: 'arzon',
              exampleSentence: 'この 部屋[へや]は 安い[やすい]です。',
              exampleTranslation: 'Bu xona arzon.',
            },
            {
              term: '低い (ひくい)',
              reading: 'ひくい',
              meaning: 'past',
              exampleSentence: 'この 部屋[へや]は 低い[ひくい]です。',
              exampleTranslation: 'Bu xona past.',
            },
            {
              term: 'おもしろい',
              reading: 'おもしろい',
              meaning: 'qiziqarli',
              exampleSentence: 'この 部屋[へや]は おもしろいです。',
              exampleTranslation: 'Bu xona qiziqarli.',
            },
            {
              term: 'おいしい',
              reading: 'おいしい',
              meaning: 'mazali',
              exampleSentence: 'この 部屋[へや]は おいしいです。',
              exampleTranslation: 'Bu xona mazali.',
            },
            {
              term: '忙しい (いそがしい)',
              reading: 'いそがしい',
              meaning: 'band',
              exampleSentence: 'この 部屋[へや]は 忙しい[いそがしい]です。',
              exampleTranslation: 'Bu xona band.',
            },
            {
              term: '楽しい (たのしい)',
              reading: 'たのしい',
              meaning: 'qiziqarli, mazmunli (vaqtga nisbatan)',
              exampleSentence: 'この 部屋[へや]は 楽しい[たのしい]です。',
              exampleTranslation: 'Bu xona qiziqarli, mazmunli (vaqtga nisbatan).',
            },
            {
              term: '白い (しろい)',
              reading: 'しろい',
              meaning: 'oq',
              exampleSentence: 'この 部屋[へや]は 白い[しろい]です。',
              exampleTranslation: 'Bu xona oq.',
            },
            {
              term: '黒い (くろい)',
              reading: 'くろい',
              meaning: 'qora',
              exampleSentence: 'この 部屋[へや]は 黒い[くろい]です。',
              exampleTranslation: 'Bu xona qora.',
            },
            {
              term: '赤い (あかい)',
              reading: 'あかい',
              meaning: 'qizil',
              exampleSentence: 'この 部屋[へや]は 赤い[あかい]です。',
              exampleTranslation: 'Bu xona qizil.',
            },
            {
              term: '青い (あおい)',
              reading: 'あおい',
              meaning: "ko'k",
              exampleSentence: 'この 部屋[へや]は 青い[あおい]です。',
              exampleTranslation: "Bu xona ko'k.",
            },
            {
              term: '桜 (さくら)',
              reading: 'さくら',
              meaning: 'olcha (sakura)',
              exampleSentence: 'これは わたしが 買[か]った 桜[さくら] です。',
              exampleTranslation: 'Bu men sotib olgan olcha (sakura).',
            },
            {
              term: '山 (やま)',
              reading: 'やま',
              meaning: 'tog',
              exampleSentence: 'これは わたしが 買[か]った 山[やま] です。',
              exampleTranslation: 'Bu men sotib olgan tog.',
            },
            {
              term: '町 (まち)',
              reading: 'まち',
              meaning: '(kichik) shahar',
              exampleSentence: 'これは わたしが 買[か]った 町[まち] です。',
              exampleTranslation: 'Bu men sotib olgan (kichik) shahar.',
            },
            {
              term: '食べ物 (たべもの)',
              reading: 'たべもの',
              meaning: 'yegulik',
              exampleSentence: 'これは わたしが 買[か]った 食べ物[たべもの] です。',
              exampleTranslation: 'Bu men sotib olgan yegulik.',
            },
            {
              term: '車 (くるま)',
              reading: 'くるま',
              meaning: 'mashina',
              exampleSentence: 'これは わたしが 買[か]った 車[くるま] です。',
              exampleTranslation: 'Bu men sotib olgan mashina.',
            },
            {
              term: '所 (ところ)',
              reading: 'ところ',
              meaning: 'joy, yer',
              exampleSentence: 'あそこは 所[ところ] です。',
              exampleTranslation: 'Anavi yer joy, yer.',
            },
            {
              term: '寮 (りょう)',
              reading: 'りょう',
              meaning: 'yotoqxona',
              exampleSentence: '毎日[まいにち] 寮[りょう]。',
              exampleTranslation: 'Har kuni yotoqxona.',
            },
            {
              term: '勉強 (べんきょう)',
              reading: 'べんきょう',
              meaning: "dars, mashg'ulot",
              exampleSentence: '毎日[まいにち] 勉強[べんきょう]。',
              exampleTranslation: "Har kuni dars, mashg'ulot.",
            },
            {
              term: '生活 (せいかつ)',
              reading: 'せいかつ',
              meaning: 'turmush, hayot',
              exampleSentence: 'これは わたしが 買[か]った 生活[せいかつ] です。',
              exampleTranslation: 'Bu men sotib olgan turmush, hayot.',
            },
            {
              term: 'お仕事 (おしごと)',
              reading: 'おしごと',
              meaning: 'ish ( ～をします ishlamoq)',
              exampleSentence: 'これは わたしが 買[か]った [お]仕事[[お]しごと] です。',
              exampleTranslation: 'Bu men sotib olgan ish ( ～をします ishlamoq).',
            },
            {
              term: 'どう',
              reading: 'どう',
              meaning: 'qanday, qanaqa',
              exampleSentence: '毎日[まいにち] どう。',
              exampleTranslation: 'Har kuni qanday, qanaqa.',
            },
            {
              term: 'どんな～',
              reading: 'どんな～',
              meaning: 'qanday ~, qanaqa ~',
              exampleSentence: '山田[やまだ]どんなは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada qanday ~, qanaqa ~ samimiy inson.',
            },
            {
              term: 'どれ',
              reading: 'どれ',
              meaning: 'qaysi',
              exampleSentence: 'これは わたしが 買[か]った どれ です。',
              exampleTranslation: 'Bu men sotib olgan qaysi.',
            },
            {
              term: 'とても',
              reading: 'とても',
              meaning: 'juda',
              exampleSentence: 'これは わたしが 買[か]った とても です。',
              exampleTranslation: 'Bu men sotib olgan juda.',
            },
            {
              term: 'あまり',
              reading: 'あまり',
              meaning: 'uncha ~ emas, unchalik ~ emas',
              exampleSentence: 'これは わたしが 買[か]った あまり です。',
              exampleTranslation: 'Bu men sotib olgan uncha ~ emas, unchalik ~ emas.',
            },
            {
              term: 'そして',
              reading: 'そして',
              meaning: 'keyin',
              exampleSentence: 'これは わたしが 買[か]った そして です。',
              exampleTranslation: 'Bu men sotib olgan keyin.',
            },
            {
              term: '～が、～',
              reading: '～が、～',
              meaning: '~-yu,~ . ; ~. Lekin, ~.',
              exampleSentence: '山田[やまだ]が、は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~-yu,~ . ; ~. lekin, ~. samimiy inson.',
            },
            {
              term: 'お元気ですか。 (おげんきですか。)',
              reading: 'おげんきですか。',
              meaning: 'Yaxshimisiz? / Salomatmisiz?',
              exampleSentence: 'これは わたしが 買[か]った お元気ですか。[おげんきですか。] です。',
              exampleTranslation: 'Bu men sotib olgan yaxshimisiz? / salomatmisiz?.',
            },
            {
              term: 'そうですね。',
              reading: 'そうですね。',
              meaning: 'Nimasini aytsam sizga… .; Rost aytasiz.; Ha-ya',
              exampleSentence: 'これは わたしが 買[か]った そうですね。 です。',
              exampleTranslation:
                'Bu men sotib olgan nimasini aytsam sizga… .; rost aytasiz.; ha-ya.',
            },
            {
              term: '日本の生活せいかつに慣なれましたか。',
              reading: '日本の生活せいかつに慣なれましたか。',
              meaning: "Siz Yaponiya turmush tarziga ko'nikdingizmi?",
              exampleSentence:
                'これは わたしが 買[か]った 日[に]本[ほん]の生活[せいかつ]に慣[な]れましたか。 です。',
              exampleTranslation:
                "Bu men sotib olgan siz yaponiya turmush tarziga ko'nikdingizmi?.",
            },
            {
              term: '～、もう一杯いっぱいいかがですか。',
              reading: '～、もう一杯いっぱいいかがですか。',
              meaning: 'Yana bir piyola',
              exampleSentence:
                '山田[やまだ][、]もう一杯[いっぱい]いかがですか。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada yana bir piyola samimiy inson.',
            },
            {
              term: 'いいえ、けっこうです。',
              reading: 'いいえ、けっこうです。',
              meaning: "Yo'q, rahmat.",
              exampleSentence: 'これは わたしが 買[か]った いいえ、けっこうです。 です。',
              exampleTranslation: "Bu men sotib olgan yo'q, rahmat..",
            },
            {
              term: 'もう～ですね。',
              reading: 'もう～ですね。',
              meaning: 'Endi ~-a?',
              exampleSentence: '山田[やまだ]もうです[ね]。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada endi ~-a? samimiy inson.',
            },
            {
              term: 'そろそろ失礼しつれいします。',
              reading: 'そろそろ失礼しつれいします。',
              meaning: 'Endi bizga ruxsat.',
              exampleSentence: '毎日[まいにち] そろそろ失礼[しつれい]します。。',
              exampleTranslation: 'Har kuni endi bizga ruxsat..',
            },
            {
              term: 'ください。 (またいらっしゃって)',
              reading: 'またいらっしゃって',
              meaning: 'Yana keling.',
              exampleSentence: 'これは わたしが 買[か]った ください。[またいらっしゃって] です。',
              exampleTranslation: 'Bu men sotib olgan yana keling..',
            },
            {
              term: '富士山',
              reading: '富士山',
              meaning: 'Fuji togi',
              exampleSentence: 'これは わたしが 買[か]った 富[ふ]士[じ]山[さん] です。',
              exampleTranslation: 'Bu men sotib olgan fuji togi.',
            },
            {
              term: '琵琶湖',
              reading: '琵琶湖',
              meaning: "Biva ko'li",
              exampleSentence: 'これは わたしが 買[か]った 琵琶湖[びわこ] です。',
              exampleTranslation: "Bu men sotib olgan biva ko'li.",
            },
            {
              term: 'シャンハイ',
              reading: 'シャンハイ',
              meaning: 'Shanxay ( 上海 )',
              exampleSentence: 'これは わたしが 買[か]った シャンハイ です。',
              exampleTranslation: 'Bu men sotib olgan shanxay ( 上海 ).',
            },
            {
              term: '「七人の侍」',
              reading: '「七人の侍」',
              meaning: '“Yetti samuray”',
              exampleSentence:
                'これは わたしが 買[か]った 「七[しち]人[にん]の侍[さむらい]」 です。',
              exampleTranslation: 'Bu men sotib olgan “yetti samuray”.',
            },
            {
              term: '金閣寺',
              reading: '金閣寺',
              meaning: 'Kinkaji ibodatxonasi',
              exampleSentence: 'これは わたしが 買[か]った 金[きん]閣[かく]寺[じ] です。',
              exampleTranslation: 'Bu men sotib olgan kinkaji ibodatxonasi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'SIFATLAR',
              meaning:
                "Sifatlar 1) kesim, 2) aniqlovchi-ot o'rnida kelishi mumkin. Ular o'zgaradi va o'zgarishlariga qarab 2 turga bo'linadilar: 1. い ga tugaydigan sifatlar va 2. な ga tugaydigan sifatlar.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'SIFATLAR',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'OT  は な -SIFAT  [ な ] です',
              meaning:
                "OT は い -SIFAT (~ い ) です 1) Gapda kesim vazifasida keladigan sifatdan keyingi です suhbatdoshga bo'lgan hurmatni bildiradi. い -sifatdan keyin です kelsa い qoladi, lekin な -sifatdan keyin です kelsa, な qo'shimchasi tushib qoladi. です gapning hozirgi zamondaligi va darak gapligini anglatib turibdi. 2) な -SIFAT [ な ] じゃありません な -SIFAT [ な ] です ning inkor ko'rinishi な li sifat [ な ] じゃありません . な -SIFAT [ な ] では ありません . ( では ) 3) い -SIFAT ( ～い ) です → ～くないです。 い -SIFAT ( ～い ) です ning inkor ko'rinishini hosil qilish uchun ( い ) です qo'shimchasidagi い ni くない ga o'zgartirish kerak. いいです ning inkor ko'rinishi よくないです。 4) So'roq gaplarda fe'l va ot kesim o'rnida kelganidek, sifat ham kesim o'rnida qo'llaniladi. Javob paytida savolda qo'llanilgan sifatni qaytarish kerak. そうです yoki そうじゃあ りません deb javob qaytarib bo'lmaydi. ･･･はい、寒[さむ] いです。 …Ha, sovuq. ･･･いいえ、きれいじゃ ありません。 …Yo'q, toza emas.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ワット先生[せんせい] は 親切[しんせつ] です。',
                  translation: 'Vat domla mehribon.',
                },
                {
                  sentence: '富[ふ] 士[じ] 山[さん] は 高[たか] いです。',
                  translation: "Fuji tog'i baland.",
                },
                {
                  sentence: 'あそこは 静[しず] かじゃ ありません。',
                  translation: 'Anavi yer tinch emas.',
                },
                {
                  sentence: 'この 本[ほん] は おもしろくないです。',
                  translation: 'Bu kitob qiziqarli emas.',
                },
                {
                  sentence: 'ペキンは 寒[さむ] いですか。',
                  translation: 'Pekin sovuqmi?',
                },
                {
                  sentence: '琵琶湖[びわこ] の水[みず] は きれいですか。',
                  translation: "Biva ko'lining suvi tozami?",
                },
              ],
            },
            {
              pattern: 'な -SIFAT  な  OT',
              meaning:
                "い -SIFAT ( ～い ) OT Sifat otdan oldin aniqlovchi sifatida keladi, otdan oldin な -sifatga “ な ” qo'shimchasi qo'shiladi.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ワット先生[せんせい] は 親切[しんせつ] な 先生[せんせい] です。',
                  translation: 'Vat domla mehribon domla.',
                },
                {
                  sentence: '富[ふ] 士[じ] 山[さん] は 高[たか] い 山[やま] です。',
                  translation: "Fuji tog'i - baland tog'.",
                },
              ],
            },
            {
              pattern: 'とても／あまり',
              meaning:
                "とても , あまり –ravish. Ular sifatdan oldin qo'yilib darajani ko'rsatib keladi. とても ijobiy ma'nodagi gaplarda kelib, “ juda ” degan ma'noni anglatadi. あまり esa inkor ma'noli gaplarda kelib, sifatning inkor ko'rinishi bilan birikib keladi. “ unchalik ” degan ma'noni anglatadi.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ペキンは とても 寒[さむ] いです。',
                  translation: 'Pekin juda sovuq.',
                },
                {
                  sentence: 'これは とても 有名[ゆうめい] な 映[えい] 画[が] です。',
                  translation: 'Bu juda taniqli kinofilm.',
                },
                {
                  sentence: 'シャンハイは あまり 寒[さむ] くないです。',
                  translation: 'Shanxay unchalik sovuq emas.',
                },
                {
                  sentence:
                    'さくら大[だい] 学[がく] は あまり 有名[ゆうめい] な 大学[だいがく] じゃ ありません。',
                  translation: 'Sakura universiteti uncha mashhur emas.',
                },
              ],
            },
            {
              pattern: 'OT  は どうですか',
              meaning:
                "Bunday so'roq gap shakli biror kishi suhbatdoshining biror bir narsa, joy va kishi haqidagi fikri hamda taassuroti bilan qiziqqanda qo'llaniladi. ･･･楽[たの] しいです。 …Qiziq.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '日[に] 本[ほん] の 生活[せいかつ] は どうですか。',
                  translation: 'Yaponiyada hayot tarzi qanday?',
                },
              ],
            },
            {
              pattern: 'OT １ は どんな OT 2  ですか',
              meaning:
                "Savolning bu ko'rinishi OT 1 ga ta'rif berishda qo'llaniladi. Bu yerda OT 2 OT 1 ga tegishli daraja bo'lib keladi. どんな so'roq so'zidan so'ng albatta ot keladi. ･･･古[ふる] い 町[まち] です。 …Qadimiy shahar.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '奈良[なら] は どんな 町[まち] ですか。',
                  translation: 'Nara qanday shahar?',
                },
              ],
            },
            {
              pattern: 'GAP 1 が、 GAP 2',
              meaning:
                "が - bu bog'lovchi “ lekin ” degan ma'noni bildirib, gaplarni bog'lashda qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '日[に] 本[ほん] の 食[た] べ物[もの] は おいしいですが、高[たか] いです。',
                  translation: 'Yapon taomlari mazali-yu, qimmat.',
                },
              ],
            },
            {
              pattern: 'どれ',
              meaning:
                "Bu so'roq so'z suhbatdoshdan uch yoki undan ham ko'p predmetlardan birini tanlashni talab qiladi. ⑯ ミラーさんの 傘[かさ] は どれですか。 Janob Millerning soyaboni qaysi? ･･･あの 青[あお] い 傘[かさ] です。 …Ana u ko'k soyabon.",
              usageNotes:
                'Minna no Nihongo 8-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'どれ',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada to'rt fasl (shiki) juda qadrlanadi. Bahorda sakura gullashi (hanami), kuzda esa qizil yaproqlar (momiji) tomosha qilinadi. Har faslning o'z an'anaviy taomlari bor.",
        },
      },
      {
        id: 'ja-minna-l8-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[8].practice],
        },
      },
      {
        id: 'ja-minna-l8-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[8].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l9',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u2',
    unitTitle: 'Minna Shokyu 1: 6–10 Darslar (Kundalik Hayot, Oila va Mavjudlik)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 9,
    title: '9-dars: Qobiliyat, Xohish va Sabab (Yoqtirish/Tushunish)',
    description:
      "Minna no Nihongo Shokyu 1: 9-dars: Qobiliyat, Xohish va Sabab (Yoqtirish/Tushunish). Darsda 52 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l9-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '9-dars: Qobiliyat, Xohish va Sabab (Yoqtirish/Tushunish)',
          subtitle: '第9課：好き・上手・わかります・から',
          explanation:
            "9-dars: Qobiliyat, Xohish va Sabab (Yoqtirish/Tushunish) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.: OT が 好[す] きです／嫌[きら] いです／上[じょう] 手[ず] です／下手[へた] です Ish- harakatning bajarilishiga qaratilgan o'timli fe'l bilan izohlangan so'zga qarashli to'ldiruvchilardan so'ng を yuklamasi qo'shiladi.",
            "📌 2.  どんな OT: 8-darsda o'rgangan どんな so'roq so'zi o'zidan keyin OTni talab qiladi va suhbatdoshdan ma'lum bir guruhdagi predmetlar orasidan aynan bir predmet yoki shaxsni tanlab ko'rsatishda qo'llaniladi.",
            "📌 3.  よく／だいたい／たくさん／少[すこ] し／あまり／全然[ぜんぜん]: Ushbu ravishlar fe'llardan oldin keladi.",
            "📌 4.   GAP 1  から、 GAP 2: から bog'lovchisi ikki gapni bir-biriga bog'lab, ularda sabab - natija aloqalarini ko'rsatadi.",
            "📌 5.  どうして: どうして so'roq so'zi suhbatdoshdan sababni so'rab keladi.",
          ],
          vocabulary: [
            {
              term: 'わかります',
              reading: 'わかります',
              meaning: 'tushunmoq',
              exampleSentence: '毎日[まいにち] わかります。',
              exampleTranslation: 'Har kuni tushunmoq.',
            },
            {
              term: 'あります',
              reading: 'あります',
              meaning: "bor (bo'lmoq)",
              exampleSentence: '毎日[まいにち] あります。',
              exampleTranslation: "Har kuni bor (bo'lmoq).",
            },
            {
              term: '好きな (すきな)',
              reading: 'すきな',
              meaning: 'yoqimli, yoqtirgan, suygan',
              exampleSentence: 'これは わたしが 買[か]った 好き[な][すき[な]] です。',
              exampleTranslation: 'Bu men sotib olgan yoqimli, yoqtirgan, suygan.',
            },
            {
              term: '嫌いな (きらいな)',
              reading: 'きらいな',
              meaning: 'yoqimsiz, yoqtirmagan, suymagan',
              exampleSentence: 'これは わたしが 買[か]った 嫌い[な][きらい[な]] です。',
              exampleTranslation: 'Bu men sotib olgan yoqimsiz, yoqtirmagan, suymagan.',
            },
            {
              term: '上手な (じょうずな)',
              reading: 'じょうずな',
              meaning: "mohir, usta, epli, zo'r",
              exampleSentence: 'これは わたしが 買[か]った 上手[な][じょうず[な]] です。',
              exampleTranslation: "Bu men sotib olgan mohir, usta, epli, zo'r.",
            },
            {
              term: '下手な (へたな)',
              reading: 'へたな',
              meaning: "epsiz, no'noq, mahoratsiz",
              exampleSentence: 'これは わたしが 買[か]った 下手[な][へた[な]] です。',
              exampleTranslation: "Bu men sotib olgan epsiz, no'noq, mahoratsiz.",
            },
            {
              term: '料理 (りょうり)',
              reading: 'りょうり',
              meaning: 'ovqat, taom',
              exampleSentence: 'これは わたしが 買[か]った 料理[りょうり] です。',
              exampleTranslation: 'Bu men sotib olgan ovqat, taom.',
            },
            {
              term: '飲み物 (のみもの)',
              reading: 'のみもの',
              meaning: 'ichimlik',
              exampleSentence: 'これは わたしが 買[か]った 飲み物[のみもの] です。',
              exampleTranslation: 'Bu men sotib olgan ichimlik.',
            },
            {
              term: 'スポーツ',
              reading: 'スポーツ',
              meaning: 'sport',
              exampleSentence: 'これは わたしが 買[か]った スポーツ です。',
              exampleTranslation: 'Bu men sotib olgan sport.',
            },
            {
              term: '野球 (やきゅう)',
              reading: 'やきゅう',
              meaning: 'beysbol',
              exampleSentence: '毎日[まいにち] 野球[やきゅう]。',
              exampleTranslation: 'Har kuni beysbol.',
            },
            {
              term: 'ダンス',
              reading: 'ダンス',
              meaning: 'raqs',
              exampleSentence: 'これは わたしが 買[か]った ダンス です。',
              exampleTranslation: 'Bu men sotib olgan raqs.',
            },
            {
              term: '音楽 (おんがく)',
              reading: 'おんがく',
              meaning: 'musiqa',
              exampleSentence: 'これは わたしが 買[か]った 音楽[おんがく] です。',
              exampleTranslation: 'Bu men sotib olgan musiqa.',
            },
            {
              term: '歌 (うた)',
              reading: 'うた',
              meaning: "qo'shiq",
              exampleSentence: 'これは わたしが 買[か]った 歌[うた] です。',
              exampleTranslation: "Bu men sotib olgan qo'shiq.",
            },
            {
              term: 'クラシック',
              reading: 'クラシック',
              meaning: 'klassik, mumtoz',
              exampleSentence: 'これは わたしが 買[か]った クラシック です。',
              exampleTranslation: 'Bu men sotib olgan klassik, mumtoz.',
            },
            {
              term: 'ジャズ',
              reading: 'ジャズ',
              meaning: 'jaz',
              exampleSentence: 'これは わたしが 買[か]った ジャズ です。',
              exampleTranslation: 'Bu men sotib olgan jaz.',
            },
            {
              term: 'コンサート',
              reading: 'コンサート',
              meaning: 'konsert',
              exampleSentence: 'これは わたしが 買[か]った コンサート です。',
              exampleTranslation: 'Bu men sotib olgan konsert.',
            },
            {
              term: 'カラオケ',
              reading: 'カラオケ',
              meaning: 'karaoke',
              exampleSentence: 'これは わたしが 買[か]った カラオケ です。',
              exampleTranslation: 'Bu men sotib olgan karaoke.',
            },
            {
              term: '歌舞伎 (かぶき)',
              reading: 'かぶき',
              meaning: 'kabuki',
              exampleSentence: 'これは わたしが 買[か]った 歌舞伎[かぶき] です。',
              exampleTranslation: 'Bu men sotib olgan kabuki.',
            },
            {
              term: '絵 (え)',
              reading: 'え',
              meaning: 'rasm',
              exampleSentence: 'これは わたしが 買[か]った 絵[え] です。',
              exampleTranslation: 'Bu men sotib olgan rasm.',
            },
            {
              term: '字 (じ)',
              reading: 'じ',
              meaning: 'harf',
              exampleSentence: 'これは わたしが 買[か]った 字[じ] です。',
              exampleTranslation: 'Bu men sotib olgan harf.',
            },
            {
              term: '漢字 (かんじ)',
              reading: 'かんじ',
              meaning: 'belgi, iyeroglif',
              exampleSentence: 'これは わたしが 買[か]った 漢字[かんじ] です。',
              exampleTranslation: 'Bu men sotib olgan belgi, iyeroglif.',
            },
            {
              term: 'ひらがな',
              reading: 'ひらがな',
              meaning: 'hiragana (yapon alifbosi)',
              exampleSentence: 'これは わたしが 買[か]った ひらがな です。',
              exampleTranslation: 'Bu men sotib olgan hiragana (yapon alifbosi).',
            },
            {
              term: 'かたかな',
              reading: 'かたかな',
              meaning: 'katakana (yapon alifbosi)',
              exampleSentence: 'これは わたしが 買[か]った かたかな です。',
              exampleTranslation: 'Bu men sotib olgan katakana (yapon alifbosi).',
            },
            {
              term: 'ローマ字 (ローマじ)',
              reading: 'ローマじ',
              meaning: 'rim yozuvi (lotin yozuvi)',
              exampleSentence: 'これは わたしが 買[か]った ローマ字[ローマじ] です。',
              exampleTranslation: 'Bu men sotib olgan rim yozuvi (lotin yozuvi).',
            },
            {
              term: '細かいお金 (こまかいおかね)',
              reading: 'こまかいおかね',
              meaning: 'mayda pul',
              exampleSentence: 'これは わたしが 買[か]った 細かいお金[こまかいおかね] です。',
              exampleTranslation: 'Bu men sotib olgan mayda pul.',
            },
            {
              term: 'チケット',
              reading: 'チケット',
              meaning: 'chipta',
              exampleSentence: 'これは わたしが 買[か]った チケット です。',
              exampleTranslation: 'Bu men sotib olgan chipta.',
            },
            {
              term: '時間 (じかん)',
              reading: 'じかん',
              meaning: 'vaqt',
              exampleSentence: 'これは わたしが 買[か]った 時間[じかん] です。',
              exampleTranslation: 'Bu men sotib olgan vaqt.',
            },
            {
              term: '用事 (ようじ)',
              reading: 'ようじ',
              meaning: 'ish, yumush',
              exampleSentence: 'これは わたしが 買[か]った 用事[ようじ] です。',
              exampleTranslation: 'Bu men sotib olgan ish, yumush.',
            },
            {
              term: '約束 (やくそく)',
              reading: 'やくそく',
              meaning: "va'da",
              exampleSentence: 'これは わたしが 買[か]った 約束[やくそく] です。',
              exampleTranslation: "Bu men sotib olgan va'da.",
            },
            {
              term: 'ご主人 (ごしゅじん)',
              reading: 'ごしゅじん',
              meaning: "xo'jayin(ingiz), er(ingiz)",
              exampleSentence: 'ミラーさんは ご主人[ごしゅじん] です。',
              exampleTranslation: "Janob Miller xo'jayin(ingiz), er(ingiz).",
            },
            {
              term: '夫／主人 (おっと／しゅじん)',
              reading: 'おっと／しゅじん',
              meaning: "xo'jayin(im), er(im)",
              exampleSentence: 'ミラーさんは 夫／主人[おっと／しゅじん] です。',
              exampleTranslation: "Janob Miller xo'jayin(im), er(im).",
            },
            {
              term: '奥さん (おくさん)',
              reading: 'おくさん',
              meaning: 'ayol(ingiz), xotin(ingiz)',
              exampleSentence: 'これは わたしが 買[か]った 奥さん[おくさん] です。',
              exampleTranslation: 'Bu men sotib olgan ayol(ingiz), xotin(ingiz).',
            },
            {
              term: '妻／家内 (つま／かない)',
              reading: 'つま／かない',
              meaning: 'ayol(im), xotin(im)',
              exampleSentence: 'この 部屋[へや]は 妻／家内[つま／かない]です。',
              exampleTranslation: 'Bu xona ayol(im), xotin(im).',
            },
            {
              term: '子ども (こども)',
              reading: 'こども',
              meaning: 'bola, farzand',
              exampleSentence: 'これは わたしが 買[か]った 子ども[こども] です。',
              exampleTranslation: 'Bu men sotib olgan bola, farzand.',
            },
            {
              term: 'よく',
              reading: 'よく',
              meaning: 'tez-tez; yaxshi; rosa',
              exampleSentence: 'これは わたしが 買[か]った よく です。',
              exampleTranslation: 'Bu men sotib olgan tez-tez; yaxshi; rosa.',
            },
            {
              term: 'だいたい',
              reading: 'だいたい',
              meaning: 'deyarli',
              exampleSentence: 'この 部屋[へや]は だいたいです。',
              exampleTranslation: 'Bu xona deyarli.',
            },
            {
              term: 'たくさん',
              reading: 'たくさん',
              meaning: "ko'p",
              exampleSentence: 'これは わたしが 買[か]った たくさん です。',
              exampleTranslation: "Bu men sotib olgan ko'p.",
            },
            {
              term: '少し (すこし)',
              reading: 'すこし',
              meaning: 'ozgina, ozroq, biroz, kam',
              exampleSentence: 'これは わたしが 買[か]った 少し[すこし] です。',
              exampleTranslation: 'Bu men sotib olgan ozgina, ozroq, biroz, kam.',
            },
            {
              term: '全然 (ぜんぜん)',
              reading: 'ぜんぜん',
              meaning: 'umuman, hech',
              exampleSentence: 'これは わたしが 買[か]った 全然[ぜんぜん] です。',
              exampleTranslation: 'Bu men sotib olgan umuman, hech.',
            },
            {
              term: '早く、速く (はやく)',
              reading: 'はやく',
              meaning: 'erta, barvaqt; tez',
              exampleSentence: 'これは わたしが 買[か]った 早く、速く[はやく] です。',
              exampleTranslation: 'Bu men sotib olgan erta, barvaqt; tez.',
            },
            {
              term: '～から',
              reading: '～から',
              meaning: '~dan',
              exampleSentence: '山田[やまだ]からは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~dan samimiy inson.',
            },
            {
              term: 'どうして',
              reading: 'どうして',
              meaning: 'nima uchun',
              exampleSentence: 'これは わたしが 買[か]った どうして です。',
              exampleTranslation: 'Bu men sotib olgan nima uchun.',
            },
            {
              term: '残念ですね。 (ざんねんですね。)',
              reading: 'ざんねんですね。',
              meaning: 'Afsus.',
              exampleSentence:
                'これは わたしが 買[か]った 残念です[ね]。[ざんねんです[ね]。] です。',
              exampleTranslation: 'Bu men sotib olgan afsus..',
            },
            {
              term: 'すみません。',
              reading: 'すみません。',
              meaning: 'Kechirasiz',
              exampleSentence: 'これは わたしが 買[か]った すみません。 です。',
              exampleTranslation: 'Bu men sotib olgan kechirasiz.',
            },
            {
              term: 'もしもし',
              reading: 'もしもし',
              meaning: 'allo, eshitaman',
              exampleSentence: 'これは わたしが 買[か]った もしもし です。',
              exampleTranslation: 'Bu men sotib olgan allo, eshitaman.',
            },
            {
              term: 'ああ',
              reading: 'ああ',
              meaning: 'A',
              exampleSentence: 'これは わたしが 買[か]った ああ です。',
              exampleTranslation: 'Bu men sotib olgan a.',
            },
            {
              term: 'いっしょにいかがですか。',
              reading: 'いっしょにいかがですか。',
              meaning: "Birga (fe'l~)maysizmi?",
              exampleSentence: 'これは わたしが 買[か]った いっしょにいかがですか。 です。',
              exampleTranslation: "Bu men sotib olgan birga (fe'l~)maysizmi?.",
            },
            {
              term: '～はちょっと・・・・。',
              reading: '～はちょっと・・・・。',
              meaning: '~ biroz… . (rad etish iborasi)',
              exampleSentence:
                '山田[やまだ][は]ちょっと・・・・。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ biroz… . (rad etish iborasi) samimiy inson.',
            },
            {
              term: 'だめですか。',
              reading: 'だめですか。',
              meaning: "Bo'lmaydimi?",
              exampleSentence: 'これは わたしが 買[か]った だめですか。 です。',
              exampleTranslation: "Bu men sotib olgan bo'lmaydimi?.",
            },
            {
              term: 'また今こん度どお願ねがいします。',
              reading: 'また今こん度どお願ねがいします。',
              meaning: 'Yanagi safar. / Boshqa safar',
              exampleSentence: '毎日[まいにち] また今[こん]度[ど]お願[ねが]いします。。',
              exampleTranslation: 'Har kuni yanagi safar. / boshqa safar.',
            },
            {
              term: '小沢征爾',
              reading: '小沢征爾',
              meaning: 'Ozava Seiji',
              exampleSentence: 'これは わたしが 買[か]った 小[お]沢[ざわ]征[せい]爾[じ] です。',
              exampleTranslation: 'Bu men sotib olgan ozava seiji.',
            },
          ],
          grammarRules: [
            {
              pattern: '1.',
              meaning:
                "OT が 好[す] きです／嫌[きら] いです／上[じょう] 手[ず] です／下手[へた] です Ish- harakatning bajarilishiga qaratilgan o'timli fe'l bilan izohlangan so'zga qarashli to'ldiruvchilardan so'ng を yuklamasi qo'shiladi. Biroq あります／わかります fe'llariga tegishli to'ldiruvchilardan so'ng が yuklamasi qo'shiladi. Shuningdek, gapda kesim vazifasida keladigan 好[す] きです , 嫌[きら] いです , 上[じょう] 手[ず] です va 下手[へた] です sifatlaridan oldin が yuklamasi qo'yiladi. To'ldiruvchi が yuklamasi bilan ifodalangan gapdagi sifat va fe'llar afzallik, qobiliyat va tegishlilik kabi munosabatlarni anglatadi.",
              usageNotes:
                'Minna no Nihongo 9-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '私[わたし] は イタリア料[りょう] 理[り] が 好[す] きです。',
                  translation: 'Men  Italiya taomlarni yoqtiraman.',
                },
                {
                  sentence: '私[わたし] は 日[に] 本[ほん] 語[ご] が わかります。',
                  translation: 'Men yapon tilini tushunaman.',
                },
                {
                  sentence: '私[わたし] は 車[くるま] が あります。',
                  translation: 'Menda mashina bor.',
                },
              ],
            },
            {
              pattern: 'どんな OT',
              meaning:
                "8-darsda o'rgangan どんな so'roq so'zi o'zidan keyin OTni talab qiladi va suhbatdoshdan ma'lum bir guruhdagi predmetlar orasidan aynan bir predmet yoki shaxsni tanlab ko'rsatishda qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 9-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'どんな スポーツが 好[す] きですか。',
                  translation: '･･･サッカーが 好[す] きです。 …Futbolni yoqtiraman.',
                },
              ],
            },
            {
              pattern: 'よく／だいたい／たくさん／少[すこ] し／あまり／全然[ぜんぜん]',
              meaning:
                "Ushbu ravishlar fe'llardan oldin keladi. Quyida ularning qo'llanilish jadvali keltirilgan: daraja ravish + tasdiq ravish + inkor yuqori よく わかります だいたい わかります past すこし わかります あまり わかりません ぜんぜん わかりません miqdori ravish + tasdiq ravish + inkor ko'p たくさん あります すこし あります あまり ありません kam ぜんぜん ありません ham aniqlab kelish mumkin.",
              usageNotes:
                'Minna no Nihongo 9-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '英[えい] 語[ご] が よく わかります。',
                  translation: 'Ingliz tilini yaxshi bilaman.',
                },
                {
                  sentence: '英[えい] 語[ご] が 少し わかります。',
                  translation: 'Ingliz tilini biroz bilaman.',
                },
                {
                  sentence: '英[えい] 語[ご] が あまり わかりません。',
                  translation: 'Ingliz tilini uncha bilmayman.',
                },
                {
                  sentence: 'お金[かね] が たくさん あります。',
                  translation: 'Pulim ko`p.',
                },
                {
                  sentence: 'お金[かね] が 全然[ぜんぜん] ありません。',
                  translation:
                    "[Eslatma] すこし va ぜんぜん ravishlari, shuningdek sifat so'z turkumidagi so'zlarni",
                },
                {
                  sentence: 'ここは 少[すこ] し 寒[さむ] いです。',
                  translation: 'Bu yer biroz sovuq.',
                },
                {
                  sentence: 'あの 映[えい] 画[が] は 全然[ぜんぜん] おもしろくないです。',
                  translation: 'Ana u kinofilm umuman qiziq emas.',
                },
              ],
            },
            {
              pattern: 'GAP 1  から、 GAP 2',
              meaning:
                "から bog'lovchisi ikki gapni bir-biriga bog'lab, ularda sabab - natija aloqalarini ko'rsatadi. GAP 1 GAP 2 ning sababini ifodalaydi. Shuningdek, avval GAP 2 keyin esa uning sababini GAP 1 izohlashi mumkin. Har kuni ertalab gazeta o'qiysizmi?",
              usageNotes:
                'Minna no Nihongo 9-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '時[じ] 間[かん] が ありませんから、新聞[しんぶん] を 読[よ] みません。',
                  translation: "Vaqtim yo'qligi uchun (sababli), gazeta o'qimayman.",
                },
                {
                  sentence: '毎朝[まいあさ] 新聞[しんぶん] を 読[よ] みますか。',
                  translation:
                    "･･･いいえ、読[よ] みません。時[じ] 間[かん] が ありませんから。 …Yo'q, o'qimayman. Chunki vaqtim yo'q.",
                },
              ],
            },
            {
              pattern: 'どうして',
              meaning:
                "どうして so'roq so'zi suhbatdoshdan sababni so'rab keladi. Shuningdek, どうしてですか so'rog'i suhbatdoshning aytgan gapiga izoh so'rayotgan paytda qo'llaniladi. 子[こ] 供[ども] の 誕[たん] 生[じょう] 日[び] ですから。 Chunki, farzandimning tug'ilgan kuni.",
              usageNotes:
                'Minna no Nihongo 9-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'どうして 朝[あさ] 新聞[しんぶん] を 読[よ] みませんか。',
                  translation: "･･･時[じ] 間[かん] が ありませんから。 …Chunki, vaqtim yo'q.",
                },
                {
                  sentence: '今日[きょう] は 早[はや] く 帰[かえ] ります。',
                  translation: '･･･どうしてですか。 … Nima uchun ?',
                },
              ],
            },
          ],
          culturalNotes:
            "Yapon madaniyatida to'g'ridan-to'g'ri 'yo'q' yoki 'yoqtirmayman' deyish noqulay sanaladi. Uning o'rniga 'ちょっと...' (biroz noqulay...) iborasi qo'llaniladi.",
        },
      },
      {
        id: 'ja-minna-l9-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[9].practice],
        },
      },
      {
        id: 'ja-minna-l9-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[9].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l10',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u2',
    unitTitle: 'Minna Shokyu 1: 6–10 Darslar (Kundalik Hayot, Oila va Mavjudlik)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 10,
    title: '10-dars: Mavjudlik va Joylashuv (Insonlar va Buyumlar)',
    description:
      "Minna no Nihongo Shokyu 1: 10-dars: Mavjudlik va Joylashuv (Insonlar va Buyumlar). Darsda 50 ta yangi so'z, audio talaffuzli Furigana misollar va 7 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l10-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '10-dars: Mavjudlik va Joylashuv (Insonlar va Buyumlar)',
          subtitle: '第10課：存在（あります・います・場所）',
          explanation:
            "10-dars: Mavjudlik va Joylashuv (Insonlar va Buyumlar) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.   OT  が あります／います: Yuqoridagi gap namunasi biror predmet yoki tirik jonning mavjudligini bildirish uchun qo'llaniladi.",
            "📌 2.   OT 1 (o`rin-joy) に OT 2  が あります／います: 1) OT 2 joylashgan o'rin-joy nomidan keyin に yuklamasi qo'shiladi.",
            "📌 3.   OT 1  は  OT 2 (o`rin-joy) に あります／います: 1) ushbu gap namunasida so'zlovchi OT 1 ni suhbat mavzusi qilib olib, uning qayerda joylashganligini tushuntiradi.",
            "📌 4.   OT 1 (predmet / inson / o`rin-joy) の OT 2 (holat): うえ , した , まえ , うしろ , みぎ , ひだり , なか , そと , となり , ちかく va あいだ kabi otlar makon-bo'shliqdagi o'rin-joyni bildiradi.",
            "📌 5.   OT 1 や  OT 2: や yuklamasi bir xil turdagi otlarni o'zaro bog'laydi.",
            "📌 6.    So`z (so`zlar)  ですか: か yuklamasi tasdiq gaplarda qo'llaniladi.",
          ],
          vocabulary: [
            {
              term: 'います',
              reading: 'います',
              meaning: "bor (bo'lmoq) (jonli narsalarga)",
              exampleSentence: '毎日[まいにち] います。',
              exampleTranslation: "Har kuni bor (bo'lmoq) (jonli narsalarga).",
            },
            {
              term: 'あります',
              reading: 'あります',
              meaning: "bor (bo'lmoq) (jonsiz narsalarga)",
              exampleSentence: '毎日[まいにち] あります。',
              exampleTranslation: "Har kuni bor (bo'lmoq) (jonsiz narsalarga).",
            },
            {
              term: 'いろいろな',
              reading: 'いろいろな',
              meaning: 'har xil, turli xil',
              exampleSentence: 'これは わたしが 買[か]った いろいろ[な] です。',
              exampleTranslation: 'Bu men sotib olgan har xil, turli xil.',
            },
            {
              term: '男の人 (おとこのひと)',
              reading: 'おとこのひと',
              meaning: 'erkak kishi',
              exampleSentence: 'ミラーさんは 男の人[おとこのひと] です。',
              exampleTranslation: 'Janob Miller erkak kishi.',
            },
            {
              term: '女の人 (おんなのひと)',
              reading: 'おんなのひと',
              meaning: 'ayol kishi',
              exampleSentence: 'ミラーさんは 女の人[おんなのひと] です。',
              exampleTranslation: 'Janob Miller ayol kishi.',
            },
            {
              term: '男の子 (おとこのこ)',
              reading: 'おとこのこ',
              meaning: "o'g'il bola",
              exampleSentence: 'これは わたしが 買[か]った 男の子[おとこのこ] です。',
              exampleTranslation: "Bu men sotib olgan o'g'il bola.",
            },
            {
              term: '女の子 (おんなのこ)',
              reading: 'おんなのこ',
              meaning: 'qiz bola',
              exampleSentence: 'これは わたしが 買[か]った 女の子[おんなのこ] です。',
              exampleTranslation: 'Bu men sotib olgan qiz bola.',
            },
            {
              term: '犬 (いぬ)',
              reading: 'いぬ',
              meaning: 'kuchuk, it',
              exampleSentence: 'これは わたしが 買[か]った 犬[いぬ] です。',
              exampleTranslation: 'Bu men sotib olgan kuchuk, it.',
            },
            {
              term: '猫 (ねこ)',
              reading: 'ねこ',
              meaning: 'mushuk',
              exampleSentence: 'これは わたしが 買[か]った 猫[ねこ] です。',
              exampleTranslation: 'Bu men sotib olgan mushuk.',
            },
            {
              term: '木 (き)',
              reading: 'き',
              meaning: 'daraxt',
              exampleSentence: 'これは わたしが 買[か]った 木[き] です。',
              exampleTranslation: 'Bu men sotib olgan daraxt.',
            },
            {
              term: '物 (もの)',
              reading: 'もの',
              meaning: 'narsa, buyum',
              exampleSentence: 'これは わたしが 買[か]った 物[もの] です。',
              exampleTranslation: 'Bu men sotib olgan narsa, buyum.',
            },
            {
              term: 'フイルム',
              reading: 'フイルム',
              meaning: 'fototasma',
              exampleSentence: 'これは わたしが 買[か]った フイルム です。',
              exampleTranslation: 'Bu men sotib olgan fototasma.',
            },
            {
              term: '電池 (でんち)',
              reading: 'でんち',
              meaning: 'batareya',
              exampleSentence: 'これは わたしが 買[か]った 電池[でんち] です。',
              exampleTranslation: 'Bu men sotib olgan batareya.',
            },
            {
              term: '箱 (はこ)',
              reading: 'はこ',
              meaning: 'quti',
              exampleSentence: 'これは わたしが 買[か]った 箱[はこ] です。',
              exampleTranslation: 'Bu men sotib olgan quti.',
            },
            {
              term: 'スイッチ',
              reading: 'スイッチ',
              meaning: 'viklyuchatel',
              exampleSentence: 'これは わたしが 買[か]った スイッチ です。',
              exampleTranslation: 'Bu men sotib olgan viklyuchatel.',
            },
            {
              term: '冷蔵庫 (れいぞうこ)',
              reading: 'れいぞうこ',
              meaning: 'muzlatgich',
              exampleSentence: 'これは わたしが 買[か]った 冷蔵庫[れいぞうこ] です。',
              exampleTranslation: 'Bu men sotib olgan muzlatgich.',
            },
            {
              term: 'テーブル',
              reading: 'テーブル',
              meaning: 'stol',
              exampleSentence: 'これは わたしが 買[か]った テーブル です。',
              exampleTranslation: 'Bu men sotib olgan stol.',
            },
            {
              term: 'ベッド',
              reading: 'ベッド',
              meaning: 'krovat',
              exampleSentence: 'これは わたしが 買[か]った ベッド です。',
              exampleTranslation: 'Bu men sotib olgan krovat.',
            },
            {
              term: '棚 (たな)',
              reading: 'たな',
              meaning: 'tokcha',
              exampleSentence: 'これは わたしが 買[か]った 棚[たな] です。',
              exampleTranslation: 'Bu men sotib olgan tokcha.',
            },
            {
              term: 'ドア',
              reading: 'ドア',
              meaning: 'eshik',
              exampleSentence: 'これは わたしが 買[か]った ドア です。',
              exampleTranslation: 'Bu men sotib olgan eshik.',
            },
            {
              term: '窓 (まど)',
              reading: 'まど',
              meaning: 'deraza',
              exampleSentence: 'これは わたしが 買[か]った 窓[まど] です。',
              exampleTranslation: 'Bu men sotib olgan deraza.',
            },
            {
              term: 'ポスト',
              reading: 'ポスト',
              meaning: 'pochta qutisi',
              exampleSentence: 'これは わたしが 買[か]った ポスト です。',
              exampleTranslation: 'Bu men sotib olgan pochta qutisi.',
            },
            {
              term: 'ビル',
              reading: 'ビル',
              meaning: '(baland) bino',
              exampleSentence: 'これは わたしが 買[か]った ビル です。',
              exampleTranslation: 'Bu men sotib olgan (baland) bino.',
            },
            {
              term: '公園 (こうえん)',
              reading: 'こうえん',
              meaning: "xiyobon (park, bog')",
              exampleSentence: 'あそこは 公園[こうえん] です。',
              exampleTranslation: "Anavi yer xiyobon (park, bog').",
            },
            {
              term: '喫茶店 (きっさてん)',
              reading: 'きっさてん',
              meaning: 'qahvaxona',
              exampleSentence: 'あそこは 喫茶店[きっさてん] です。',
              exampleTranslation: 'Anavi yer qahvaxona.',
            },
            {
              term: '本屋 (ほんや)',
              reading: 'ほんや',
              meaning: "kitob do'koni",
              exampleSentence: 'あそこは 本屋[ほんや] です。',
              exampleTranslation: "Anavi yer kitob do'koni.",
            },
            {
              term: '～屋 (～や)',
              reading: '～や',
              meaning: "~do'koni",
              exampleSentence: 'あそこは 屋[や] です。',
              exampleTranslation: "Anavi yer ~do'koni.",
            },
            {
              term: '乗り場 (のりば)',
              reading: 'のりば',
              meaning: 'bekat',
              exampleSentence: 'あそこは 乗り場[のりば] です。',
              exampleTranslation: 'Anavi yer bekat.',
            },
            {
              term: '県 (けん)',
              reading: 'けん',
              meaning: 'viloyat',
              exampleSentence: 'これは わたしが 買[か]った 県[けん] です。',
              exampleTranslation: 'Bu men sotib olgan viloyat.',
            },
            {
              term: '上 (うえ)',
              reading: 'うえ',
              meaning: 'ust, tepa, yuqori',
              exampleSentence: 'これは わたしが 買[か]った 上[うえ] です。',
              exampleTranslation: 'Bu men sotib olgan ust, tepa, yuqori.',
            },
            {
              term: '下 (した)',
              reading: 'した',
              meaning: 'ost, past',
              exampleSentence: 'これは わたしが 買[か]った 下[した] です。',
              exampleTranslation: 'Bu men sotib olgan ost, past.',
            },
            {
              term: '前 (まえ)',
              reading: 'まえ',
              meaning: 'old',
              exampleSentence: 'これは わたしが 買[か]った 前[まえ] です。',
              exampleTranslation: 'Bu men sotib olgan old.',
            },
            {
              term: '後ろ (うしろ)',
              reading: 'うしろ',
              meaning: 'orqa',
              exampleSentence: 'これは わたしが 買[か]った 後ろ[うしろ] です。',
              exampleTranslation: 'Bu men sotib olgan orqa.',
            },
            {
              term: '右 (みぎ)',
              reading: 'みぎ',
              meaning: "o'ng Yapon tilida",
              exampleSentence: 'これは わたしが 買[か]った 右[みぎ] です。',
              exampleTranslation: "Bu men sotib olgan o'ng yapon tilida.",
            },
            {
              term: '左 (ひだり)',
              reading: 'ひだり',
              meaning: "chap bu so'zlar ot",
              exampleSentence: 'これは わたしが 買[か]った 左[ひだり] です。',
              exampleTranslation: "Bu men sotib olgan chap bu so'zlar ot.",
            },
            {
              term: '中 (なか)',
              reading: 'なか',
              meaning: 'ich, ichkari hisoblanadi',
              exampleSentence: 'これは わたしが 買[か]った 中[なか] です。',
              exampleTranslation: 'Bu men sotib olgan ich, ichkari hisoblanadi.',
            },
            {
              term: '外 (そと)',
              reading: 'そと',
              meaning: 'tashqari',
              exampleSentence: 'これは わたしが 買[か]った 外[そと] です。',
              exampleTranslation: 'Bu men sotib olgan tashqari.',
            },
            {
              term: '隣 (となり)',
              reading: 'となり',
              meaning: "yon, qo'shni",
              exampleSentence: 'これは わたしが 買[か]った 隣[となり] です。',
              exampleTranslation: "Bu men sotib olgan yon, qo'shni.",
            },
            {
              term: '近く (ちかく)',
              reading: 'ちかく',
              meaning: 'yaqin',
              exampleSentence: 'これは わたしが 買[か]った 近く[ちかく] です。',
              exampleTranslation: 'Bu men sotib olgan yaqin.',
            },
            {
              term: '間 (あいだ)',
              reading: 'あいだ',
              meaning: "ora, o'rta",
              exampleSentence: 'これは わたしが 買[か]った 間[あいだ] です。',
              exampleTranslation: "Bu men sotib olgan ora, o'rta.",
            },
            {
              term: '～や～など',
              reading: '～や～など',
              meaning: '~ va ~ ［ kabilar ］',
              exampleSentence: '山田[やまだ]や[など]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ va ~ ［ kabilar ］ samimiy inson.',
            },
            {
              term: 'いちばん～',
              reading: 'いちばん～',
              meaning: 'eng~ ( いちばん うえ eng yuqori)',
              exampleSentence: '山田[やまだ]いちばんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada eng~ ( いちばん うえ eng yuqori) samimiy inson.',
            },
            {
              term: '～段目 (～だんめ)',
              reading: '～だんめ',
              meaning: '~(i)nchi tokcha, ~(i)nchi qator',
              exampleSentence: '山田[やまだ]だんめは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~(i)nchi tokcha, ~(i)nchi qator samimiy inson.',
            },
            {
              term: 'どうもすみません。',
              reading: 'どうもすみません。',
              meaning: 'Katta rahmat',
              exampleSentence: 'これは わたしが 買[か]った [どうも]すみません。 です。',
              exampleTranslation: 'Bu men sotib olgan katta rahmat.',
            },
            {
              term: 'チリソース',
              reading: 'チリソース',
              meaning: 'chili sousi',
              exampleSentence: 'これは わたしが 買[か]った チリソース です。',
              exampleTranslation: 'Bu men sotib olgan chili sousi.',
            },
            {
              term: '奥おく',
              reading: '奥おく',
              meaning: 'ichkari, qari',
              exampleSentence: 'これは わたしが 買[か]った 奥[おく] です。',
              exampleTranslation: 'Bu men sotib olgan ichkari, qari.',
            },
            {
              term: 'スパイス・コーナー',
              reading: 'スパイス・コーナー',
              meaning: "ziravorlar bo'limi",
              exampleSentence: 'これは わたしが 買[か]った スパイス・コーナー です。',
              exampleTranslation: "Bu men sotib olgan ziravorlar bo'limi.",
            },
            {
              term: '東京ディズニーランド',
              reading: '東京ディズニーランド',
              meaning: 'Tokio Disneylendi',
              exampleSentence: 'これは わたしが 買[か]った 東京[とうきょう]ディズニーランド です。',
              exampleTranslation: 'Bu men sotib olgan tokio disneylendi.',
            },
            {
              term: 'ユニューヤ・ストア',
              reading: 'ユニューヤ・ストア',
              meaning: "supermarket nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った ユニューヤ・ストア です。',
              exampleTranslation: "Bu men sotib olgan supermarket nomi (o'ylab topilgan).",
            },
          ],
          grammarRules: [
            {
              pattern: 'OT  が あります／います',
              meaning:
                "Yuqoridagi gap namunasi biror predmet yoki tirik jonning mavjudligini bildirish uchun qo'llaniladi. Gapda ushbu predmet yoki jonli ob'ektlar ega vazifasida kelib, ular が yuklamasi bilan birga ifodalanadi. 1) あります fe'li predmet jonsiz yoki o'zicha harakat qilmaganda qo'llaniladi. Bular qatoriga predmetlar, o'simlik va joylar kiradi. Bular qatoriga inson va jonivorlar kiradi.",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'コンピューターが あります。',
                  translation: 'Kompyuter bor (mavjud).',
                },
                {
                  sentence: '桜[さくら] が あります。',
                  translation: 'Olcha daraxti bor (mavjud).',
                },
                {
                  sentence: '公園[こうえん] が あります。',
                  translation:
                    "2) Agar mazkur ob'ekt jonli va o'zi harakatlanadigan bo'lsa, います fe'li qo'llaniladi.",
                },
                {
                  sentence: '男[おとこ] の人[ひと] が います。',
                  translation: 'Erkak kishi bor.',
                },
                {
                  sentence: '犬[いぬ] が います。',
                  translation: 'Kuchuk bor.',
                },
              ],
            },
            {
              pattern: 'OT 1 (o`rin-joy) に OT 2  が あります／います',
              meaning:
                "1) OT 2 joylashgan o'rin-joy nomidan keyin に yuklamasi qo'shiladi. に so'roq olmoshi predmetlarga, だれ esa tirik ob'yektlarga tegishli.",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしの 部屋[へや] に机[つくえ] が あります。',
                  translation: 'Mening xonamda stol bor.',
                },
                {
                  sentence: '事[じ] 務[む] 所[しょ] に ミラーさんが います。',
                  translation:
                    "2) Bu tuzilmadan foydalanib, nima yoki kim qayerdaligi haqida savol tuzsa bo'ladi. な",
                },
                {
                  sentence: '地下[ちか] に 何[なに] が ありますか。',
                  translation: '･･･レストランが あります。 … Restoran joylashgan.',
                },
                {
                  sentence: '受付[うけつけ] に だれが いますか。',
                  translation: '･･･木[き] 村[むら] さんが います。 … Kimura xonim borlar.',
                },
              ],
            },
            {
              pattern: 'OT 1  は  OT 2 (o`rin-joy) に あります／います',
              meaning:
                "1) ushbu gap namunasida so'zlovchi OT 1 ni suhbat mavzusi qilib olib, uning qayerda joylashganligini tushuntiradi. Gap mavzusi ham so'zlovchiga, ham tinglovchiga ma'lum bo'lishi lozim. OT 1 ga egani bildiradigan が qo'shimchasi o'rniga suhbat mavzusini bildiradigan は yuklamasi qo'shiladi. 2) Quyidagi gap namunasi OT 1 ning qayerda joylashganligini so'rash uchun qo'llaniladi. Tokio Disneylendi qayerda joylashgan? 💡 Muhim eslatma: Gohida です kesim sifatida kelgan fe'lning o'rniga kelishi mumkin. Agar kesim aniq bo'lsa, “OT 1 は OT 2 (o'rin-joy) に あります／います ” o'rniga 3-darsda o'rgangan “OT 1 は OT 2 です ” qo'llanishi mumkin. Tokio Disneylendi qayerda joylashgan?",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '東[とう] 京[きょう] ディズニーランドは 千[ち] 葉[ば] 県[けん] に あります。',
                  translation: 'Tokio Disneylendi Chiba viloyatida joylashgan.',
                },
                {
                  sentence: 'ミラーさんは 事[じ] 務[む] 所[しょ] に います。',
                  translation: 'Janob Miller idorada.',
                },
                {
                  sentence: '東[とう] 京[きょう] ディズニーランドは どこに ありますか。',
                  translation:
                    '･･･千[ち] 葉[ば] 県[けん] に あります。 … Chiba viloyatida joylashgan.',
                },
                {
                  sentence: 'ミラーさんはどこにいますか。',
                  translation: '･･･事[じ] 務[む] 所[しょ] に います。 … Idorada.',
                },
                {
                  sentence: '東[とう] 京[きょう] ディズニーランドは どこに ありますか。',
                  translation: '･･･千[ち] 葉[ば] 県[けん] です。 … Chiba viloyatida.',
                },
              ],
            },
            {
              pattern: 'OT 1 (predmet / inson / o`rin-joy) の OT 2 (holat)',
              meaning:
                "うえ , した , まえ , うしろ , みぎ , ひだり , なか , そと , となり , ちかく va あいだ kabi otlar makon-bo'shliqdagi o'rin-joyni bildiradi. 💡 Muhim eslatma: Agar kesim sifatida keladigan fe'l jismoniy ish-harakatni bildirsa, bundan tashqari ushbu o'rin-joyni bildiradigan so'zlar ega sifatida kelishi sababli ulardan keyin に yuklamasidan tashqari で yuklamasi ham keladi. (6-dars, 5-grammatika) ⑰ 駅[えき] の 近[ちか] くで 友達[ともだち] に 会[あ] いました。 Bekatga yaqin joyda do'stimni uchratdim.",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '机[つくえ] の 上[うえ] に 写真[しゃしん] が あります。',
                  translation:
                    "⑯ 郵[ゆう] 便[びん] 局[きょく] は 銀行[ぎんこう] の 隣[となり] に あります。 Pochta bo'limi bankning yonida joylashgan.",
                },
              ],
            },
            {
              pattern: 'OT 1 や  OT 2',
              meaning:
                "や yuklamasi bir xil turdagi otlarni o'zaro bog'laydi. Agar と yuklamasi hamma predmetlarni birma-bir sanab o'tsa, や yuklamasi bir qancha predmetlardan bir-ikkita predmetni misol qilish bilan kifoyalanadi. Gohida gap oxirida shu turga oid boshqa predmetlar ham borligiga urg'u beruvchi など o'zbek tilida “ kabi ” yoki “ va hokazo ”qo'shimchasi qo'shiladi. ⑱ 箱[はこ] の 中[なか] に 手[て] 紙[がみ] や 写真[しゃしん] が あります。 Qutining ichida xat va suratlar bor. ⑲ 箱[はこ] の 中[なか] に 手[て] 紙[がみ] や 写真[しゃしん] などが あります。 Qutining ichida xat, surat va hokazolar bor.",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'OT 1 や  OT 2',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'So`z (so`zlar)  ですか',
              meaning:
                "か yuklamasi tasdiq gaplarda qo'llaniladi. So'zlovchi tasdiqlamoqchi bo'lgan so'z yoki so'zlarni aytib, quyidagi namuna orqali tasdiqlaydi. ⑳ すみません、ユニューヤ・ストアは どこですか。 ･･･ユニューヤ・ストアですか。あの ビルの 中[なか] です。 Kechirasiz, “Yunyuya” do'koni qayerda? … “Yunyuya” do'konimi? Ana u binoning ichida.",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'So`z (so`zlar)  ですか',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'チリソースは ありませんか',
              meaning:
                "Mazkur darsning “Suhbat”ida 「チリソースは ありませんか」 degan ibora uchraydi. Inkor shaklidagi ありませんか darak shaklidagi ありますか o'rniga qo'llanilib, savolni to'g'ridan-to'g'ri emas, balki odob bilan yumshoqroq berishni ta'minlaydi. Bu bilan so'zlovchi suhbatdoshining 「チリソースが ない」 “ chili sousi yo'q ” degan inkor javobiga oldindan ruhan tayyorgarlik ko'rishini bildiradi.",
              usageNotes:
                'Minna no Nihongo 10-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'チリソースは ありませんか',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yapon xonadonlariga kirganda poyafzal tashqarida yechiladi va shippak kiyiladi. Tatami qoplangan an'anaviy xonalarda esa shippak ham yechilib, paypoqda yuriladi.",
        },
      },
      {
        id: 'ja-minna-l10-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[10].practice],
        },
      },
      {
        id: 'ja-minna-l10-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[10].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l11',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u3',
    unitTitle: 'Minna Shokyu 1: 11–15 Darslar (Sanoq, Taqqoslash va Te-shakli)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 11,
    title: "11-dars: Sanoq so'zlar, Muddat va Miqdor",
    description:
      "Minna no Nihongo Shokyu 1: 11-dars: Sanoq so'zlar, Muddat va Miqdor. Darsda 65 ta yangi so'z, audio talaffuzli Furigana misollar va 3 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l11-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "11-dars: Sanoq so'zlar, Muddat va Miqdor",
          subtitle: '第11課：助数詞・期間・数量',
          explanation:
            "11-dars: Sanoq so'zlar, Muddat va Miqdor bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  Miqdor sonlarning ifodalanishi: 1) ひとつ、ふたつ･･･････････とお Bu so'zlar 10 tagacha bo'lgan narsa buyumlarning miqdorini sanashda qo'llaniladi.",
            "📌 2. MIQDOR SON (muddat)  に～回[かい]  FE’L: Bu ibora u yoki bu voqeaning ma'lum bir vaqt oralig'ida bir yoki bir necha marta qaytarilishini ifodalaydi.",
            "📌 3.   MIQDOR SON  だけ／ OT  だけ: だけ “ faqat ” degan ma'noni anglatadi.",
          ],
          vocabulary: [
            {
              term: 'います',
              reading: 'います',
              meaning: "bor (bo'lmoq)",
              exampleSentence: '毎日[まいにち] います。',
              exampleTranslation: "Har kuni bor (bo'lmoq).",
            },
            {
              term: '子供が～ (こどもが～)',
              reading: 'こどもが～',
              meaning: '(bolasi bor)',
              exampleSentence: '山田[やまだ][こどもが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (bolasi bor) samimiy inson.',
            },
            {
              term: '日本に～ (にほんに～)',
              reading: 'にほんに～',
              meaning: "(Yaponiyada bo'lmoq)",
              exampleSentence: '山田[やまだ][にほんに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (yaponiyada bo'lmoq) samimiy inson.",
            },
            {
              term: 'かかります',
              reading: 'かかります',
              meaning: "sarf bo'lmoq, ketmoq (pul yoki vaqt)",
              exampleSentence: '毎日[まいにち] かかります。',
              exampleTranslation: "Har kuni sarf bo'lmoq, ketmoq (pul yoki vaqt).",
            },
            {
              term: '休みます (やすみます)',
              reading: 'やすみます',
              meaning: 'dam olmoq; qoldirmoq',
              exampleSentence: '日曜日[にちようび]に 休[やす]みます。',
              exampleTranslation: 'Yakshanba kuni dam olaman.',
            },
            {
              term: '会社を (かいしゃを～)',
              reading: 'かいしゃを～',
              meaning: '(ishga chiqmaslik)',
              exampleSentence: '山田[やまだ][かいしゃを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (ishga chiqmaslik) samimiy inson.',
            },
            {
              term: '１つ (ひとつ)',
              reading: 'ひとつ',
              meaning: 'bitta',
              exampleSentence: 'これは わたしが 買[か]った １つ[ひとつ] です。',
              exampleTranslation: 'Bu men sotib olgan bitta.',
            },
            {
              term: '２つ (ふたつ)',
              reading: 'ふたつ',
              meaning: 'ikkita',
              exampleSentence: 'これは わたしが 買[か]った ２つ[ふたつ] です。',
              exampleTranslation: 'Bu men sotib olgan ikkita.',
            },
            {
              term: '３つ (みっつ)',
              reading: 'みっつ',
              meaning: 'uchta',
              exampleSentence: 'これは わたしが 買[か]った ３つ[みっつ] です。',
              exampleTranslation: 'Bu men sotib olgan uchta.',
            },
            {
              term: '４つ (よっつ)',
              reading: 'よっつ',
              meaning: "to'rtta Jonsiz",
              exampleSentence: 'これは わたしが 買[か]った ４つ[よっつ] です。',
              exampleTranslation: "Bu men sotib olgan to'rtta jonsiz.",
            },
            {
              term: '５つ (いつつ)',
              reading: 'いつつ',
              meaning: 'beshta predmetlarni',
              exampleSentence: 'これは わたしが 買[か]った ５つ[いつつ] です。',
              exampleTranslation: 'Bu men sotib olgan beshta predmetlarni.',
            },
            {
              term: '６つ (むっつ)',
              reading: 'むっつ',
              meaning: 'oltita sanashda',
              exampleSentence: 'これは わたしが 買[か]った ６つ[むっつ] です。',
              exampleTranslation: 'Bu men sotib olgan oltita sanashda.',
            },
            {
              term: '７つ (ななつ)',
              reading: 'ななつ',
              meaning: "yettita qo'llaniladi",
              exampleSentence: 'これは わたしが 買[か]った ７つ[ななつ] です。',
              exampleTranslation: "Bu men sotib olgan yettita qo'llaniladi.",
            },
            {
              term: '８つ (やっつ)',
              reading: 'やっつ',
              meaning: 'sakkizta',
              exampleSentence: 'これは わたしが 買[か]った ８つ[やっつ] です。',
              exampleTranslation: 'Bu men sotib olgan sakkizta.',
            },
            {
              term: '９つ (ここのつ)',
              reading: 'ここのつ',
              meaning: "to'qqizta",
              exampleSentence: 'これは わたしが 買[か]った ９つ[ここのつ] です。',
              exampleTranslation: "Bu men sotib olgan to'qqizta.",
            },
            {
              term: '１０ (とお)',
              reading: 'とお',
              meaning: "o'nta",
              exampleSentence: 'これは わたしが 買[か]った １０[とお] です。',
              exampleTranslation: "Bu men sotib olgan o'nta.",
            },
            {
              term: 'いくつ',
              reading: 'いくつ',
              meaning: 'qancha, nechta',
              exampleSentence: 'これは わたしが 買[か]った いくつ です。',
              exampleTranslation: 'Bu men sotib olgan qancha, nechta.',
            },
            {
              term: '１人 (ひとり)',
              reading: 'ひとり',
              meaning: 'bitta, bir kishi',
              exampleSentence: 'ミラーさんは １人[ひとり] です。',
              exampleTranslation: 'Janob Miller bitta, bir kishi.',
            },
            {
              term: '２人 (ふたり)',
              reading: 'ふたり',
              meaning: 'ikkita, ikki kishi',
              exampleSentence: 'ミラーさんは ２人[ふたり] です。',
              exampleTranslation: 'Janob Miller ikkita, ikki kishi.',
            },
            {
              term: '～人 (～にん)',
              reading: '～にん',
              meaning: '~kishi, ~odam (sanoq suffiksi)',
              exampleSentence: 'ミラーさんは 人[にん] です。',
              exampleTranslation: 'Janob Miller ~kishi, ~odam (sanoq suffiksi).',
            },
            {
              term: '～台 (～だい)',
              reading: '～だい',
              meaning: '~ta (texnika sanoq suffiksi)',
              exampleSentence: 'この 部屋[へや]は 台[だい]です。',
              exampleTranslation: 'Bu xona ~ta (texnika sanoq suffiksi).',
            },
            {
              term: '～枚 (～まい)',
              reading: '～まい',
              meaning: '~ta (yupqa narsalar sanoq suffiksi)',
              exampleSentence: 'この 部屋[へや]は 枚[まい]です。',
              exampleTranslation: 'Bu xona ~ta (yupqa narsalar sanoq suffiksi).',
            },
            {
              term: '～回 (～かい)',
              reading: '～かい',
              meaning: '~marta, ~bor',
              exampleSentence: 'この 部屋[へや]は 回[かい]です。',
              exampleTranslation: 'Bu xona ~marta, ~bor.',
            },
            {
              term: 'りんご',
              reading: 'りんご',
              meaning: 'olma',
              exampleSentence: 'これは わたしが 買[か]った りんご です。',
              exampleTranslation: 'Bu men sotib olgan olma.',
            },
            {
              term: 'みかん',
              reading: 'みかん',
              meaning: 'mandarin',
              exampleSentence: 'これは わたしが 買[か]った みかん です。',
              exampleTranslation: 'Bu men sotib olgan mandarin.',
            },
            {
              term: 'サンドイッチ',
              reading: 'サンドイッチ',
              meaning: 'sendvich',
              exampleSentence: 'これは わたしが 買[か]った サンドイッチ です。',
              exampleTranslation: 'Bu men sotib olgan sendvich.',
            },
            {
              term: 'カレーライス',
              reading: 'カレーライス',
              meaning: 'karerays',
              exampleSentence: 'これは わたしが 買[か]った カレー[ライス] です。',
              exampleTranslation: 'Bu men sotib olgan karerays.',
            },
            {
              term: 'アイスクリーム',
              reading: 'アイスクリーム',
              meaning: 'muzqaymoq',
              exampleSentence: 'これは わたしが 買[か]った アイスクリーム です。',
              exampleTranslation: 'Bu men sotib olgan muzqaymoq.',
            },
            {
              term: '切手 (きって)',
              reading: 'きって',
              meaning: 'pochta markasi',
              exampleSentence: '田中[たなか]さんは 切手[きって] です。',
              exampleTranslation: 'Tanaka janoblari pochta markasi.',
            },
            {
              term: 'はがき',
              reading: 'はがき',
              meaning: 'otkritka',
              exampleSentence: 'これは わたしが 買[か]った はがき です。',
              exampleTranslation: 'Bu men sotib olgan otkritka.',
            },
            {
              term: '封筒 (ふうとう)',
              reading: 'ふうとう',
              meaning: 'konvert',
              exampleSentence: '毎日[まいにち] 封筒[ふうとう]。',
              exampleTranslation: 'Har kuni konvert.',
            },
            {
              term: '速達 (そくたつ)',
              reading: 'そくたつ',
              meaning: 'tezkor pochta, ekspress pochta',
              exampleSentence: 'これは わたしが 買[か]った 速達[そくたつ] です。',
              exampleTranslation: 'Bu men sotib olgan tezkor pochta, ekspress pochta.',
            },
            {
              term: '書留 (かきとめ)',
              reading: 'かきとめ',
              meaning: 'buyurtmali pochta',
              exampleSentence: 'これは わたしが 買[か]った 書留[かきとめ] です。',
              exampleTranslation: 'Bu men sotib olgan buyurtmali pochta.',
            },
            {
              term: 'エアメール',
              reading: 'エアメール',
              meaning: 'avia pochta',
              exampleSentence: 'これは わたしが 買[か]った エアメール です。',
              exampleTranslation: 'Bu men sotib olgan avia pochta.',
            },
            {
              term: '航空便 (こうくうびん)',
              reading: 'こうくうびん',
              meaning: 'avia pochta',
              exampleSentence: 'これは わたしが 買[か]った 航空便[こうくうびん] です。',
              exampleTranslation: 'Bu men sotib olgan avia pochta.',
            },
            {
              term: '船便 (ふなびん)',
              reading: 'ふなびん',
              meaning: 'dengiz pochtasi',
              exampleSentence: 'これは わたしが 買[か]った 船便[ふなびん] です。',
              exampleTranslation: 'Bu men sotib olgan dengiz pochtasi.',
            },
            {
              term: '両親 (りょうしん)',
              reading: 'りょうしん',
              meaning: 'ota-ona',
              exampleSentence: 'これは わたしが 買[か]った 両親[りょうしん] です。',
              exampleTranslation: 'Bu men sotib olgan ota-ona.',
            },
            {
              term: '兄弟 (きょうだい)',
              reading: 'きょうだい',
              meaning: 'farzandlar, aka-ukalar',
              exampleSentence: 'この 部屋[へや]は 兄弟[きょうだい]です。',
              exampleTranslation: 'Bu xona farzandlar, aka-ukalar.',
            },
            {
              term: '兄 (あに)',
              reading: 'あに',
              meaning: 'akam',
              exampleSentence: 'これは わたしが 買[か]った 兄[あに] です。',
              exampleTranslation: 'Bu men sotib olgan akam.',
            },
            {
              term: 'お兄さん (おにいさん)',
              reading: 'おにいさん',
              meaning: 'akangiz,akasi',
              exampleSentence: 'これは わたしが 買[か]った お兄さん[おにいさん] です。',
              exampleTranslation: 'Bu men sotib olgan akangiz,akasi.',
            },
            {
              term: '姉 (あね)',
              reading: 'あね',
              meaning: 'opam',
              exampleSentence: 'これは わたしが 買[か]った 姉[あね] です。',
              exampleTranslation: 'Bu men sotib olgan opam.',
            },
            {
              term: 'お姉さん (おねえさん)',
              reading: 'おねえさん',
              meaning: 'opangiz, opasi',
              exampleSentence: 'これは わたしが 買[か]った お姉さん[おねえさん] です。',
              exampleTranslation: 'Bu men sotib olgan opangiz, opasi.',
            },
            {
              term: '弟 (おとうと)',
              reading: 'おとうと',
              meaning: 'ukam',
              exampleSentence: 'これは わたしが 買[か]った 弟[おとうと] です。',
              exampleTranslation: 'Bu men sotib olgan ukam.',
            },
            {
              term: '弟さん (おとうとさん)',
              reading: 'おとうとさん',
              meaning: 'ukangiz, ukasi',
              exampleSentence: 'これは わたしが 買[か]った 弟さん[おとうとさん] です。',
              exampleTranslation: 'Bu men sotib olgan ukangiz, ukasi.',
            },
            {
              term: '妹 (いもうと)',
              reading: 'いもうと',
              meaning: 'singlim',
              exampleSentence: 'これは わたしが 買[か]った 妹[いもうと] です。',
              exampleTranslation: 'Bu men sotib olgan singlim.',
            },
            {
              term: '妹さん (いもうとさん)',
              reading: 'いもうとさん',
              meaning: 'singlingiz, singlisi',
              exampleSentence: 'これは わたしが 買[か]った 妹さん[いもうとさん] です。',
              exampleTranslation: 'Bu men sotib olgan singlingiz, singlisi.',
            },
            {
              term: '外国 (がいこく)',
              reading: 'がいこく',
              meaning: 'chet el, xorij',
              exampleSentence: 'あそこは 外国[がいこく] です。',
              exampleTranslation: 'Anavi yer chet el, xorij.',
            },
            {
              term: '～時間 (～じかん)',
              reading: '～じかん',
              meaning: '~ soat',
              exampleSentence: '山田[やまだ]じかんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ soat samimiy inson.',
            },
            {
              term: '～週間 (～しゅうかん)',
              reading: '～しゅうかん',
              meaning: '~ hafta',
              exampleSentence: '山田[やまだ]しゅうかんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ hafta samimiy inson.',
            },
            {
              term: '～か月 (～かげつ)',
              reading: '～かげつ',
              meaning: '~ oy',
              exampleSentence: '山田[やまだ]かげつは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ oy samimiy inson.',
            },
            {
              term: '～年 (～ねん)',
              reading: '～ねん',
              meaning: '~ yil',
              exampleSentence: '山田[やまだ]ねんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ yil samimiy inson.',
            },
            {
              term: '～ぐらい',
              reading: '～ぐらい',
              meaning: '~lar, ~cha, taxminan~',
              exampleSentence: 'この 部屋[へや]は ぐらいです。',
              exampleTranslation: 'Bu xona ~lar, ~cha, taxminan~.',
            },
            {
              term: 'どのぐらい',
              reading: 'どのぐらい',
              meaning: 'qancha (vaqt)',
              exampleSentence: 'この 部屋[へや]は どのぐらいです。',
              exampleTranslation: 'Bu xona qancha (vaqt).',
            },
            {
              term: '全部で (ぜんぶで)',
              reading: 'ぜんぶで',
              meaning: "hammasi bo'lib",
              exampleSentence: 'これは わたしが 買[か]った 全部で[ぜんぶで] です。',
              exampleTranslation: "Bu men sotib olgan hammasi bo'lib.",
            },
            {
              term: 'みんな',
              reading: 'みんな',
              meaning: 'hamma, barcha',
              exampleSentence: 'これは わたしが 買[か]った みんな です。',
              exampleTranslation: 'Bu men sotib olgan hamma, barcha.',
            },
            {
              term: '～だけ',
              reading: '～だけ',
              meaning: 'faqat',
              exampleSentence: '山田[やまだ]だけは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada faqat samimiy inson.',
            },
            {
              term: 'いらっしゃいませ。',
              reading: 'いらっしゃいませ。',
              meaning: 'Xush kelibsiz.',
              exampleSentence: 'これは わたしが 買[か]った いらっしゃいませ。 です。',
              exampleTranslation: 'Bu men sotib olgan xush kelibsiz..',
            },
            {
              term: 'いいお天てん気きですね。',
              reading: 'いいお天てん気きですね。',
              meaning: 'Yaxshi ob-havo-ya?',
              exampleSentence: 'これは わたしが 買[か]った いい[お]天[てん]気[き]ですね。 です。',
              exampleTranslation: 'Bu men sotib olgan yaxshi ob-havo-ya?.',
            },
            {
              term: 'お出でかけですか。',
              reading: 'お出でかけですか。',
              meaning: "Ko'chagami?",
              exampleSentence: 'これは わたしが 買[か]った お出[で]かけですか。 です。',
              exampleTranslation: "Bu men sotib olgan ko'chagami?.",
            },
            {
              term: 'ちょっと～まで。',
              reading: 'ちょっと～まで。',
              meaning: '~ga borib kelaman.',
              exampleSentence: '山田[やまだ]ちょっとまで。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ga borib kelaman. samimiy inson.',
            },
            {
              term: '行いっていらっしゃい。',
              reading: '行いっていらっしゃい。',
              meaning: 'Yaxshi borib keling(lar).',
              exampleSentence: 'これは わたしが 買[か]った 行[い]っていらっしゃい。 です。',
              exampleTranslation: 'Bu men sotib olgan yaxshi borib keling(lar)..',
            },
            {
              term: '行いってまいります。',
              reading: '行いってまいります。',
              meaning: 'Yaxshi qoling(lar).',
              exampleSentence: '毎日[まいにち] 行[い]ってまいります。。',
              exampleTranslation: 'Har kuni yaxshi qoling(lar)..',
            },
            {
              term: 'それから',
              reading: 'それから',
              meaning: 'yana',
              exampleSentence: 'これは わたしが 買[か]った それから です。',
              exampleTranslation: 'Bu men sotib olgan yana.',
            },
            {
              term: 'オーストラリア',
              reading: 'オーストラリア',
              meaning: 'Avstraliya',
              exampleSentence: 'これは わたしが 買[か]った オーストラリア です。',
              exampleTranslation: 'Bu men sotib olgan avstraliya.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Miqdor sonlarning ifodalanishi',
              meaning:
                "1) ひとつ、ふたつ･･･････････とお Bu so'zlar 10 tagacha bo'lgan narsa buyumlarning miqdorini sanashda qo'llaniladi. 11 dan boshlab sanashda oddiy sanoq so'zlar qo'llaniladi. 2) Sanoq suffikslari Ayrim narsalarni sanayotganda yoki miqdorni ifodalashda sanoq suffikslari qo'shiladi. ～人[にん] bir va ikkitadan ko'p bo'lgan odamlar uchun qo'llaniladigan sanoq suffiksi ひとり （１人） va ふたり（２人） bir va ikki odam uchun qo'llaniladi. ４人 (to'rtta odam) よにん deb o'qiladi. ～台[だい] harakatlanish vositalari (avtomobil, velosiped) yoki mexanizmlarning sanoq suffiksi. ～枚[まい] yupqa va tekis buyumlar uchun qo'llaniladigan sanoq suffiksi. Masalan: qog'oz, likopcha, ko'ylak, disk va hokazolar. ～回[かい] marta. Ish-harakatning bir necha marotaba amalga oshishi. ～分[ふん] daqiqa. ～時[じ] 間[かん] soat. ～日[にち] kunlar. Kunlar miqdori にち suffiksi bilan ifodalanadi. Lekin, ikkidan o'ngacha bir xil so'zlar qo'llaniladi. (“bir kun” いちにち , “ikki kun” ふつ か , ････ “o'n kun” とおか ) Sanani ifoda etishda istisno hollari ham bor. Masalan: “bir kun” いちにち deyilsa, “birinchi sana” esa ついたち deyiladi. ～週間[しゅうかん] hafta ～か月[げつ] oy ～年[ねん] yil Ilovada sanoq suffikslari to'liq ko'rsatilgan. 3) Ma'lum bir narsaning miqdorini ko'rsatib kelgan sanoq suffikslari odatda o'ziga tegishli bo'lgan fe'ldan oldin qo'yiladi, garchi bu har doim ham davom etavermasa ham. 4) So'roq so'zlar (1) ひとつ、ふたつ deb sanaladigan narsalarga いくつ so'roq so'zi qo'llaniladi. (2) Miqdorni sanashda savol gapda なん so'roq so'zi sanoq suffikslari bilan birga qo'llaniladi. Bu korxonada nechta chet ellik bor? Har kuni kechasi necha soat yapon tilini o'rganasiz? (3) どの くらい –biror bir narsa va ish-harakat uchun talab qilinadigan vaqt miqdori uchun qo'llaniladigan so'roq so'z. Yapon tilini qancha vaqt o'rgandingiz? Osakadan Tokiogacha qancha vaqt ketadi? 5) ぐらい ぐらい - miqdor so'zlarga qo'shilib kelib, “ ~cha ”, “ ~lar ” degan taxminiy ma'noni anglatadi.",
              usageNotes:
                'Minna no Nihongo 11-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'りんごを ４[よっ] つ 買[か] いました。 4 ta olma sotib oldim.',
                  translation: 'Namunaviy gap.',
                },
                {
                  sentence:
                    '外国人[がいこくじん] の 学生[がくせい] が ２人[ふたり] います。 2 ta chet ellik talaba bor.',
                  translation: 'Namunaviy gap.',
                },
                {
                  sentence:
                    '国[くに] で ２か月[げつ] 日[に] 本[ほん] 語[ご] を勉[べん] 強[きょう] しました。',
                  translation: "o'rgandim.",
                },
                {
                  sentence: 'みかんを いくつ 買[か] いましたか。',
                  translation: '･･･８[やっ] つ 買[か] いました。 … Sakkizta sotib oldim.',
                },
                {
                  sentence:
                    'この 会社[かいしゃ] に 外国人[がいこくじん] が 何人[なんにん] いますか。',
                  translation: '･･･５人[にん] います。 … 5 kishi bor.',
                },
                {
                  sentence:
                    '毎晩[まいばん] 何時間[なんじかん] 日[に] 本[ほん] 語[ご] を 勉[べん] 強[きょう] しますか。',
                  translation:
                    "･･･２時[じ] 間[かん] 勉[べん] 強[きょう] します。 … 2 soat o'rganaman.",
                },
                {
                  sentence:
                    'どの くらい 日[に] 本[ほん] 語[ご] を 勉[べん] 強[きょう] しましたか。',
                  translation: "･･･３年[ねん] 勉強[べんきょう] しました。 … 3 yil o'rgandim.",
                },
                {
                  sentence:
                    '大阪[おおさか] から 東[とう] 京[きょう] まで どの くらい かかりますか。',
                  translation:
                    '･･･新幹線[しんかんせん] で ２時[じ] 間[かん] 半[はん] かかります。 … “Shinkansen”da 2 yarim soat.',
                },
                {
                  sentence: '学校[がっこう] に 先生[せんせい] が ３０人[にん] ぐらい います。',
                  translation: 'Maktabda 30 tacha o`qituvchi bor.',
                },
                {
                  sentence: '１５分[ふん] ぐらい かかります。',
                  translation: 'Taxminan 15 daqiqacha vaqt ketadi.',
                },
              ],
            },
            {
              pattern: 'MIQDOR SON (muddat)  に～回[かい]  FE’L',
              meaning:
                "Bu ibora u yoki bu voqeaning ma'lum bir vaqt oralig'ida bir yoki bir necha marta qaytarilishini ifodalaydi.",
              usageNotes:
                'Minna no Nihongo 11-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '１か月[げつ] に２回[かい] 映[えい] 画[が] を見[み] ます。',
                  translation: "Men bir oyda ikki marta kino ko'raman.",
                },
              ],
            },
            {
              pattern: 'MIQDOR SON  だけ／ OT  だけ',
              meaning:
                "だけ “ faqat ” degan ma'noni anglatadi. Bu so'z miqdor soni yoki OTdan so'ng qo'shilib kelib, aytilgan narsadan boshqa hech narsa yo'qligini ifodalaydi.",
              usageNotes:
                'Minna no Nihongo 11-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'パワー電[でん] 気[き] に 外国人[がいこくじん] の 社員[しゃいん] が１人[ひとり] だけ います。',
                  translation: '“Pauer-Denki” korxonasida faqat 1 ta xorijlik ishchi bor.',
                },
                {
                  sentence: '休[やす] みは 日[にち] 曜[よう] 日[び] だけです。',
                  translation: 'Dam olish kuni faqat haftaning yakshanba kuni.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yapon tilida narsalarni sanash uchun shakliga qarab maxsus sanoq so'zlari ishlatiladi: kitoblar uchun '～satsu', qog'ozlar uchun '～mai', qalamlar uchun '～hon', mashinalar uchun '～dai'.",
        },
      },
      {
        id: 'ja-minna-l11-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[11].practice],
        },
      },
      {
        id: 'ja-minna-l11-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[11].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l12',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u3',
    unitTitle: 'Minna Shokyu 1: 11–15 Darslar (Sanoq, Taqqoslash va Te-shakli)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 12,
    title: "12-dars: O'tgan zamon va Taqqoslash (Eng va Ko'ra)",
    description:
      "Minna no Nihongo Shokyu 1: 12-dars: O'tgan zamon va Taqqoslash (Eng va Ko'ra). Darsda 54 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l12-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "12-dars: O'tgan zamon va Taqqoslash (Eng va Ko'ra)",
          subtitle: '第12課：過去形と比較（〜より・一番）',
          explanation:
            "12-dars: O'tgan zamon va Taqqoslash (Eng va Ko'ra) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  Gapda kesim vazifasida keluvchi OT va  な -sifatning o`tgan zamondagi: ko'rinishi hozirgi / kelasi zamon o'tgan zamon Darak OT あめ OT あめ gap です でした な -sifat しずか な -sifat しず.",
            "📌 2.  Gapda kesim vazifasini bajaruvchi  い -sifatning o`tgan zamondagi: ko'rinishi hozirgi / kelasi zamon o'tgan zamon Darak gap あついです あつかったです Inkor gap あつくないです あつくなかったです.",
            '📌 3.   OT 1  は OT 2  より SIFAT  です: Ushbu turdagi gaplarda OT 1 ni OT 2 ga qiyoslagan holda uning sifati va holati ifodalanadi.',
            "📌 4. …OT 1 ／ OT 2  のほうが SIFAT  です: Gapning bu so'roq shakli yordamida so'zlovchi o'z suhbatdoshidan ma'lum bir shaxs yoki predmetning (OT 1 va OT 2 ) holatiga nisbatan munosabatini so'raydi.",
            "📌 5.: 何[なに] どこ OT 1 [ の中[なか] ] で が いちばん SIFAT ですか だれ いつ …OT 2 が いちばん SIFAT です Gapning ushbu shakli suhbatdoshdan bir guruh shaxs yoki predmet orasidan eng xususiyatlisini tanlagan holda javob kutilgan hollarda qo'llanadi.",
          ],
          vocabulary: [
            {
              term: '簡単な (かんたんな)',
              reading: 'かんたんな',
              meaning: 'oson',
              exampleSentence: 'これは わたしが 買[か]った 簡単[な][かんたん[な]] です。',
              exampleTranslation: 'Bu men sotib olgan oson.',
            },
            {
              term: '近い (ちかい)',
              reading: 'ちかい',
              meaning: 'yaqin',
              exampleSentence: 'この 部屋[へや]は 近い[ちかい]です。',
              exampleTranslation: 'Bu xona yaqin.',
            },
            {
              term: '遠い (とおい)',
              reading: 'とおい',
              meaning: 'uzoq, olis',
              exampleSentence: 'この 部屋[へや]は 遠い[とおい]です。',
              exampleTranslation: 'Bu xona uzoq, olis.',
            },
            {
              term: '速い,早い (はやい)',
              reading: 'はやい',
              meaning: 'tez, barvaqt',
              exampleSentence: 'この 部屋[へや]は 速い,早い[はやい]です。',
              exampleTranslation: 'Bu xona tez, barvaqt.',
            },
            {
              term: '遅い (おそい)',
              reading: 'おそい',
              meaning: 'sekin',
              exampleSentence: 'この 部屋[へや]は 遅い[おそい]です。',
              exampleTranslation: 'Bu xona sekin.',
            },
            {
              term: '多い (おおい)',
              reading: 'おおい',
              meaning: "ko'p",
              exampleSentence: 'この 部屋[へや]は 多い[おおい]です。',
              exampleTranslation: "Bu xona ko'p.",
            },
            {
              term: '人が～ (ひとが～)',
              reading: 'ひとが～',
              meaning: "(odam ko'p)",
              exampleSentence: '山田[やまだ][ひとが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (odam ko'p) samimiy inson.",
            },
            {
              term: '少ない (すくない)',
              reading: 'すくない',
              meaning: 'kam',
              exampleSentence: 'この 部屋[へや]は 少ない[すくない]です。',
              exampleTranslation: 'Bu xona kam.',
            },
            {
              term: '暖かい、温かい (あたたかい)',
              reading: 'あたたかい',
              meaning: 'iliq',
              exampleSentence: 'この 部屋[へや]は 暖かい、温かい[あたたかい]です。',
              exampleTranslation: 'Bu xona iliq.',
            },
            {
              term: '涼しい (すずしい)',
              reading: 'すずしい',
              meaning: 'salqin',
              exampleSentence: 'この 部屋[へや]は 涼しい[すずしい]です。',
              exampleTranslation: 'Bu xona salqin.',
            },
            {
              term: '甘い (あまい)',
              reading: 'あまい',
              meaning: 'shirin',
              exampleSentence: 'この 部屋[へや]は 甘い[あまい]です。',
              exampleTranslation: 'Bu xona shirin.',
            },
            {
              term: '辛い (からい)',
              reading: 'からい',
              meaning: 'achchiq',
              exampleSentence: 'この 部屋[へや]は 辛い[からい]です。',
              exampleTranslation: 'Bu xona achchiq.',
            },
            {
              term: '重い (おもい)',
              reading: 'おもい',
              meaning: "og'ir",
              exampleSentence: 'この 部屋[へや]は 重い[おもい]です。',
              exampleTranslation: "Bu xona og'ir.",
            },
            {
              term: '軽い (かるい)',
              reading: 'かるい',
              meaning: 'yengil',
              exampleSentence: 'この 部屋[へや]は 軽い[かるい]です。',
              exampleTranslation: 'Bu xona yengil.',
            },
            {
              term: 'いい',
              reading: 'いい',
              meaning: "yaxshi, zo'r",
              exampleSentence: 'この 部屋[へや]は いいです。',
              exampleTranslation: "Bu xona yaxshi, zo'r.",
            },
            {
              term: 'コーヒーが～',
              reading: 'コーヒーが～',
              meaning: '(yaxshi kofe)',
              exampleSentence: '山田[やまだ][コーヒーが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (yaxshi kofe) samimiy inson.',
            },
            {
              term: '季節 (きせつ)',
              reading: 'きせつ',
              meaning: 'fasl',
              exampleSentence: 'これは わたしが 買[か]った 季節[きせつ] です。',
              exampleTranslation: 'Bu men sotib olgan fasl.',
            },
            {
              term: '春 (はる)',
              reading: 'はる',
              meaning: 'bahor',
              exampleSentence: '毎日[まいにち] 春[はる]。',
              exampleTranslation: 'Har kuni bahor.',
            },
            {
              term: '夏 (なつ)',
              reading: 'なつ',
              meaning: 'yoz',
              exampleSentence: 'これは わたしが 買[か]った 夏[なつ] です。',
              exampleTranslation: 'Bu men sotib olgan yoz.',
            },
            {
              term: '秋 (あき)',
              reading: 'あき',
              meaning: 'kuz',
              exampleSentence: 'これは わたしが 買[か]った 秋[あき] です。',
              exampleTranslation: 'Bu men sotib olgan kuz.',
            },
            {
              term: '冬 (ふゆ)',
              reading: 'ふゆ',
              meaning: 'qish',
              exampleSentence: 'これは わたしが 買[か]った 冬[ふゆ] です。',
              exampleTranslation: 'Bu men sotib olgan qish.',
            },
            {
              term: '天気 (てんき)',
              reading: 'てんき',
              meaning: 'ob-havo',
              exampleSentence: 'これは わたしが 買[か]った 天気[てんき] です。',
              exampleTranslation: 'Bu men sotib olgan ob-havo.',
            },
            {
              term: '雨 (あめ)',
              reading: 'あめ',
              meaning: "yomg'ir",
              exampleSentence: 'これは わたしが 買[か]った 雨[あめ] です。',
              exampleTranslation: "Bu men sotib olgan yomg'ir.",
            },
            {
              term: '雪 (ゆき)',
              reading: 'ゆき',
              meaning: 'qor',
              exampleSentence: 'これは わたしが 買[か]った 雪[ゆき] です。',
              exampleTranslation: 'Bu men sotib olgan qor.',
            },
            {
              term: '曇り (くもり)',
              reading: 'くもり',
              meaning: 'bulutli (havo)',
              exampleSentence: 'これは わたしが 買[か]った 曇り[くもり] です。',
              exampleTranslation: 'Bu men sotib olgan bulutli (havo).',
            },
            {
              term: 'ホテル',
              reading: 'ホテル',
              meaning: 'mehmonxona',
              exampleSentence: 'これは わたしが 買[か]った ホテル です。',
              exampleTranslation: 'Bu men sotib olgan mehmonxona.',
            },
            {
              term: '空港 (くうこう)',
              reading: 'くうこう',
              meaning: 'aeroport',
              exampleSentence: '毎日[まいにち] 空港[くうこう]。',
              exampleTranslation: 'Har kuni aeroport.',
            },
            {
              term: '海 (うみ)',
              reading: 'うみ',
              meaning: 'dengiz',
              exampleSentence: 'これは わたしが 買[か]った 海[うみ] です。',
              exampleTranslation: 'Bu men sotib olgan dengiz.',
            },
            {
              term: '世界 (せかい)',
              reading: 'せかい',
              meaning: 'jahon, dunyo',
              exampleSentence: 'この 部屋[へや]は 世界[せかい]です。',
              exampleTranslation: 'Bu xona jahon, dunyo.',
            },
            {
              term: 'パーティー',
              reading: 'パーティー',
              meaning: 'kecha, ziyofat, bazm',
              exampleSentence: 'これは わたしが 買[か]った パーティー です。',
              exampleTranslation: 'Bu men sotib olgan kecha, ziyofat, bazm.',
            },
            {
              term: 'お祭り (おまつり)',
              reading: 'おまつり',
              meaning: 'bayram',
              exampleSentence: 'これは わたしが 買[か]った [お]祭り[[お]まつり] です。',
              exampleTranslation: 'Bu men sotib olgan bayram.',
            },
            {
              term: '試験 (しけん)',
              reading: 'しけん',
              meaning: 'imtihon, sinov',
              exampleSentence: 'これは わたしが 買[か]った 試験[しけん] です。',
              exampleTranslation: 'Bu men sotib olgan imtihon, sinov.',
            },
            {
              term: 'すき焼き (すきやき)',
              reading: 'すきやき',
              meaning: 'sukiyaki',
              exampleSentence: 'これは わたしが 買[か]った すき焼き[すきやき] です。',
              exampleTranslation: 'Bu men sotib olgan sukiyaki.',
            },
            {
              term: '刺身 (さしみ)',
              reading: 'さしみ',
              meaning: 'sashimi',
              exampleSentence: 'これは わたしが 買[か]った 刺身[さしみ] です。',
              exampleTranslation: 'Bu men sotib olgan sashimi.',
            },
            {
              term: 'おすし',
              reading: 'おすし',
              meaning: 'sushi- sirka arashalgan qaynatilgan guruch ustida xom baliq',
              exampleSentence: 'これは わたしが 買[か]った [お]すし です。',
              exampleTranslation:
                'Bu men sotib olgan sushi- sirka arashalgan qaynatilgan guruch ustida xom baliq.',
            },
            {
              term: 'てんぷら',
              reading: 'てんぷら',
              meaning: 'tempura- sabzavot va baliq qovurmasi',
              exampleSentence: 'これは わたしが 買[か]った てんぷら です。',
              exampleTranslation: 'Bu men sotib olgan tempura- sabzavot va baliq qovurmasi.',
            },
            {
              term: '生け花 (いけばな)',
              reading: 'いけばな',
              meaning: 'ikebana, gullar aranjirovkasi',
              exampleSentence: 'これは わたしが 買[か]った 生け花[いけばな] です。',
              exampleTranslation: 'Bu men sotib olgan ikebana, gullar aranjirovkasi.',
            },
            {
              term: '紅葉 (もみじ)',
              reading: 'もみじ',
              meaning: 'xazon, qizil barg',
              exampleSentence: 'これは わたしが 買[か]った 紅葉[もみじ] です。',
              exampleTranslation: 'Bu men sotib olgan xazon, qizil barg.',
            },
            {
              term: 'どちら',
              reading: 'どちら',
              meaning: 'qaysi biri, qay biri',
              exampleSentence: 'これは わたしが 買[か]った どちら です。',
              exampleTranslation: 'Bu men sotib olgan qaysi biri, qay biri.',
            },
            {
              term: 'どちらも',
              reading: 'どちらも',
              meaning: 'ikkalasi ham',
              exampleSentence: 'これは わたしが 買[か]った どちらも です。',
              exampleTranslation: 'Bu men sotib olgan ikkalasi ham.',
            },
            {
              term: 'ずっと',
              reading: 'ずっと',
              meaning: 'ancha; ancha vaqt oldin; ancha vaqt',
              exampleSentence: 'これは わたしが 買[か]った ずっと です。',
              exampleTranslation: 'Bu men sotib olgan ancha; ancha vaqt oldin; ancha vaqt.',
            },
            {
              term: '初めて (はじめて)',
              reading: 'はじめて',
              meaning: 'birinchi bor, ilk bor',
              exampleSentence: 'これは わたしが 買[か]った 初めて[はじめて] です。',
              exampleTranslation: 'Bu men sotib olgan birinchi bor, ilk bor.',
            },
            {
              term: 'ただいま。',
              reading: 'ただいま。',
              meaning: 'Men keldim (uyiga qaytib kelganda)',
              exampleSentence: 'これは わたしが 買[か]った ただいま。 です。',
              exampleTranslation: 'Bu men sotib olgan men keldim (uyiga qaytib kelganda).',
            },
            {
              term: 'お帰かえりなさい。',
              reading: 'お帰かえりなさい。',
              meaning: 'Yaxshi keldingizmi?',
              exampleSentence: 'これは わたしが 買[か]った お帰[かえ]りなさい。 です。',
              exampleTranslation: 'Bu men sotib olgan yaxshi keldingizmi?.',
            },
            {
              term: 'すごいですね。',
              reading: 'すごいですね。',
              meaning: 'Qoyil.',
              exampleSentence: 'これは わたしが 買[か]った すごいですね。 です。',
              exampleTranslation: 'Bu men sotib olgan qoyil..',
            },
            {
              term: 'でも',
              reading: 'でも',
              meaning: 'lekin, biroq, ammo',
              exampleSentence: 'これは わたしが 買[か]った でも です。',
              exampleTranslation: 'Bu men sotib olgan lekin, biroq, ammo.',
            },
            {
              term: '疲つかれました。',
              reading: '疲つかれました。',
              meaning: 'Charchadim. Gion bayrami',
              exampleSentence: 'これは わたしが 買[か]った 疲[つか]れました。 です。',
              exampleTranslation: 'Bu men sotib olgan charchadim. gion bayrami.',
            },
            {
              term: '祇園祭',
              reading: '祇園祭',
              meaning: '(Kiotodagi eng katta bayram)',
              exampleSentence: 'これは わたしが 買[か]った 祗[ぎ]園[おん]祭[まつり] です。',
              exampleTranslation: 'Bu men sotib olgan (kiotodagi eng katta bayram).',
            },
            {
              term: 'ホンコン',
              reading: 'ホンコン',
              meaning: 'Gonkong',
              exampleSentence: 'これは わたしが 買[か]った ホンコン です。',
              exampleTranslation: 'Bu men sotib olgan gonkong.',
            },
            {
              term: 'シンガポール',
              reading: 'シンガポール',
              meaning: 'Singapur',
              exampleSentence: 'これは わたしが 買[か]った シンガポール です。',
              exampleTranslation: 'Bu men sotib olgan singapur.',
            },
            {
              term: '毎日屋',
              reading: '毎日屋',
              meaning: "supermarket nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った 毎[まい]日[にち]屋[や] です。',
              exampleTranslation: "Bu men sotib olgan supermarket nomi (o'ylab topilgan).",
            },
            {
              term: 'ABCストア',
              reading: 'ABCストア',
              meaning: "supermarket nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った ABCストア です。',
              exampleTranslation: "Bu men sotib olgan supermarket nomi (o'ylab topilgan).",
            },
            {
              term: 'ジャパン',
              reading: 'ジャパン',
              meaning: 'supermarket nomi',
              exampleSentence: 'これは わたしが 買[か]った ジャパン です。',
              exampleTranslation: 'Bu men sotib olgan supermarket nomi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Gapda kesim vazifasida keluvchi OT va  な -sifatning o`tgan zamondagi',
              meaning:
                "ko'rinishi hozirgi / kelasi zamon o'tgan zamon Darak OT あめ OT あめ gap です でした な -sifat しずか な -sifat しずか Inkor OT あめ OT あめ gap じゃありません じゃありませんでした な -sifat しずか ( では ) な -sifat しずか ( では )",
              usageNotes:
                'Minna no Nihongo 12-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'きのうは 雨[あめ] でした。',
                  translation: "Kecha yomg'ir yog'di.",
                },
                {
                  sentence: 'きのうの 試[し] 験[けん] は 簡単[かんたん] じゃ ありませんでした。',
                  translation: "Kechagi imtihon oson bo'lmadi.",
                },
              ],
            },
            {
              pattern: 'Gapda kesim vazifasini bajaruvchi  い -sifatning o`tgan zamondagi',
              meaning:
                "ko'rinishi hozirgi / kelasi zamon o'tgan zamon Darak gap あついです あつかったです Inkor gap あつくないです あつくなかったです",
              usageNotes:
                'Minna no Nihongo 12-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'きのうは 暑[あつ] かったです。',
                  translation: "Kecha kun issiq bo'ldi.",
                },
                {
                  sentence: 'きのうの パーティーは あまり 楽[たの] しくなかった。',
                  translation: "Kechagi bazm unchalik qiziq o'tmadi.",
                },
              ],
            },
            {
              pattern: 'OT 1  は OT 2  より SIFAT  です',
              meaning:
                'Ushbu turdagi gaplarda OT 1 ni OT 2 ga qiyoslagan holda uning sifati va holati ifodalanadi.',
              usageNotes:
                'Minna no Nihongo 12-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'この 車[くるま] は あの 車[くるま] より 大[おお] きいです。',
                  translation: 'OT 1 と OT 2 と どちらが SIFAT ですか',
                },
              ],
            },
            {
              pattern: '…OT 1 ／ OT 2  のほうが SIFAT  です',
              meaning:
                "Gapning bu so'roq shakli yordamida so'zlovchi o'z suhbatdoshidan ma'lum bir shaxs yoki predmetning (OT 1 va OT 2 ) holatiga nisbatan munosabatini so'raydi. Ikki OTdan birini tanlagan holda javob berish mumkin. Agar ikki shaxs yoki predmet qiyoslanayotgan bo'lsa, u holda doim どちら so'roq so'zi OT 2 dan keyin qo'yiladi. Futbol bilan beysboldan qays biri qiziq?",
              usageNotes:
                'Minna no Nihongo 12-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'サッカーと 野[や] 球[きゅう] と どちらが おもしろいですか。',
                  translation: '･･･サッカーの ほうが おもしろいです。 … Futbol qiziq.',
                },
                {
                  sentence:
                    'ミラーさんと サントスさんと どちらが テニスが 上[じょう] 手[ず] ですか。',
                  translation:
                    "Janob Miller va janob Santosdan qaysi birlari tennisni yaxshi o'ynaydi?",
                },
                {
                  sentence:
                    '北海道[ほっかいどう] と大阪[おおさか] と どちらが 涼[すず] しいですか。',
                  translation: 'Hokkaydo va Osakadan qaysi biri salqin?',
                },
                {
                  sentence: '春[はる] と 秋[あき] と どちらが 好[す] きですか。',
                  translation: 'Bahor va kuzdan qay birini yoqtirasiz?',
                },
              ],
            },
            {
              pattern: '5.',
              meaning:
                "何[なに] どこ OT 1 [ の中[なか] ] で が いちばん SIFAT ですか だれ いつ …OT 2 が いちばん SIFAT です Gapning ushbu shakli suhbatdoshdan bir guruh shaxs yoki predmet orasidan eng xususiyatlisini tanlagan holda javob kutilgan hollarda qo'llanadi. Suhbatdosh OT 1 bilan ifodalanganlar orasidan tanlashi kerak. So'roq so'z OT 1 ning va tanlash taklif etilgan shaxs yoki predmetlarning turi, mazmuniga qarab belgilanadi. Yapon taomlari ichida eng mazalisi nima? Ovro'pada sizga eng yoqqan joy qayer bo'ldi? Oilangizda eng bo'yi baland kishi kim? Yilning eng sovuq payti qachon? 💡 Muhim eslatma: Agar so'roq so'z gapda ega vazifasida kelsa, u holda so'roq so'zga が yuklamasi qo'shiladi. (10-darsga qarang: なにが ありますか／だれが いますか ) Shuningdek, kesim sifat so'z turkumi bilan ifodalangan gaplarda egaga savol berilayotgan hollarda so'roq so'zga が qo'shimchasi qo'shiladi.",
              usageNotes:
                'Minna no Nihongo 12-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '日本[にほん] 料理[りょうり] [ の 中[なか] ] で 何[なに] が いちばん おいしいですか。',
                  translation: '･･･てんぷらが いちばん おいしいです。 … Eng mazalisi – “Tempura”.',
                },
                {
                  sentence: 'ヨーロッパで どこが いちばん よかったですか。',
                  translation:
                    "･･･スイスが いちばん よかったです。 … Eng yoqqani Shveytsariya bo'ldi.",
                },
                {
                  sentence: '家[か] 族[ぞく] で だれが いちばん 背[せ] が 高[たか] いですか。',
                  translation:
                    "･･･弟[おとうと] が いちばん 背[せ] が 高[たか] いです。 … Eng bo'yi balandi ukam.",
                },
                {
                  sentence: '１年[ねん] で いつが いちばん 寒[さむ] いですか。',
                  translation:
                    '･･･２月[がつ] が いちばん 寒[さむ] いです。 …Fevral oyi yilning eng sovuq payti.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada fasllar va mahalliy festivallar (matsuri) juda mashhur. Shaharlar taqqoslanganda 'A to B to dochira ga...' iborasi orqali tanlov so'raladi.",
        },
      },
      {
        id: 'ja-minna-l12-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[12].practice],
        },
      },
      {
        id: 'ja-minna-l12-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[12].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l13',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u3',
    unitTitle: 'Minna Shokyu 1: 11–15 Darslar (Sanoq, Taqqoslash va Te-shakli)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 13,
    title: '13-dars: Istak-xohish va Maqsad (Xohlamoq/Bormoq)',
    description:
      "Minna no Nihongo Shokyu 1: 13-dars: Istak-xohish va Maqsad (Xohlamoq/Bormoq). Darsda 47 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l13-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '13-dars: Istak-xohish va Maqsad (Xohlamoq/Bormoq)',
          subtitle: '第13課：希望と目的（欲しい・〜たい・に行きます）',
          explanation:
            "13-dars: Istak-xohish va Maqsad (Xohlamoq/Bormoq) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            '📌 1. OT  が 欲[ほ] しいです: Ushbu gap namunasi biror narsaga egalik qilish xohish istagini bildirish uchun ishlatiladi.',
            "📌 2. FE’Lning  ます -shakli  たいです: 1) FE'Lning ます -shakli ます bilan tugaydigan fe'llar, “FE'Lning ます -shakli” deb ataladi.",
            "📌 3.   OT(o`rin-joy) へ に行[い] きます／来[き] ます／帰[かえ] ります: OT Ushbu namuna yordamida いきます , きます , かえります kabi fe'llar orqali maqsad ifodalanadi.",
            "📌 4. OT  に  FE’L ／ OT  を  FE’L: に qo'shimchasi はいります , のります (transportga chiqmoq; 16-darsga qarang) kabi fe'llar bilan qo'llanilganda, tayinlangan, belgilangan joy yoki oxirgi yetib kelish punktini bildiradi.",
            "📌 5.    どこか／何[なに] か: どこか noaniq olmoshi “ qayerdir ” yoki “ biror yer ” degan ma'noni bildiradi.",
            "📌 6.    ご注文[ちゅうもん]: ご so'z oldi qo'shimchasi ba'zi so'zlarga qo'shilib hurmatni bildiradi.",
          ],
          vocabulary: [
            {
              term: '遊びます (あそびます)',
              reading: 'あそびます',
              meaning: "o'ynamoq, ko'ngil ochmoq",
              exampleSentence: '毎日[まいにち] 遊びます[あそびます]。',
              exampleTranslation: "Har kuni o'ynamoq, ko'ngil ochmoq.",
            },
            {
              term: '泳ぎます (およぎます)',
              reading: 'およぎます',
              meaning: "cho'milmoq, suzmoq",
              exampleSentence: '毎日[まいにち] 泳ぎます[およぎます]。',
              exampleTranslation: "Har kuni cho'milmoq, suzmoq.",
            },
            {
              term: '迎えます (むかえます)',
              reading: 'むかえます',
              meaning: 'kutib olmoq',
              exampleSentence: '毎日[まいにち] 迎えます[むかえます]。',
              exampleTranslation: 'Har kuni kutib olmoq.',
            },
            {
              term: '疲れます (つかれます)',
              reading: 'つかれます',
              meaning: 'charchamoq',
              exampleSentence: '毎日[まいにち] 疲れます[つかれます]。',
              exampleTranslation: 'Har kuni charchamoq.',
            },
            {
              term: '出します (だします)',
              reading: 'だします',
              meaning: "jo'natmoq",
              exampleSentence: '毎日[まいにち] 出します[だします]。',
              exampleTranslation: "Har kuni jo'natmoq.",
            },
            {
              term: '手紙を～ (てがみを～)',
              reading: 'てがみを～',
              meaning: "xat jo'natmoq",
              exampleSentence: '山田[やまだ][てがみを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada xat jo'natmoq samimiy inson.",
            },
            {
              term: '入ります (はいります)',
              reading: 'はいります',
              meaning: 'kirmoq',
              exampleSentence: '毎日[まいにち] 入ります[はいります]。',
              exampleTranslation: 'Har kuni kirmoq.',
            },
            {
              term: '喫茶店に～ (きっさてんに～)',
              reading: 'きっさてんに～',
              meaning: '(qahvaxonaga kirmoq)',
              exampleSentence: '山田[やまだ][きっさてんに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (qahvaxonaga kirmoq) samimiy inson.',
            },
            {
              term: '出ます (でます)',
              reading: 'でます',
              meaning: 'chiqmoq',
              exampleSentence: '毎日[まいにち] 出ます[でます]。',
              exampleTranslation: 'Har kuni chiqmoq.',
            },
            {
              term: '喫茶店を～ (きっさてんを～)',
              reading: 'きっさてんを～',
              meaning: '(qahvaxonadan chiqmoq)',
              exampleSentence: '山田[やまだ][きっさてんを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (qahvaxonadan chiqmoq) samimiy inson.',
            },
            {
              term: '結婚します (けっこんします)',
              reading: 'けっこんします',
              meaning: 'turmush qurmoq',
              exampleSentence: '毎日[まいにち] 結婚します[けっこんします]。',
              exampleTranslation: 'Har kuni turmush qurmoq.',
            },
            {
              term: '買い物します (かいものします)',
              reading: 'かいものします',
              meaning: 'xarid qilmoq',
              exampleSentence: '毎日[まいにち] 買い物します[かいものします]。',
              exampleTranslation: 'Har kuni xarid qilmoq.',
            },
            {
              term: '食事します (しょくじします)',
              reading: 'しょくじします',
              meaning: 'ovqatlanmoq',
              exampleSentence: '毎日[まいにち] 食事します[しょくじします]。',
              exampleTranslation: 'Har kuni ovqatlanmoq.',
            },
            {
              term: '散歩します (さんぽします)',
              reading: 'さんぽします',
              meaning: 'sayr qilmoq',
              exampleSentence: '毎日[まいにち] 散歩します[さんぽします]。',
              exampleTranslation: 'Har kuni sayr qilmoq.',
            },
            {
              term: '公園を～ (こうえんを～)',
              reading: 'こうえんを～',
              meaning: '(xiyobonda sayr qilmoq)',
              exampleSentence: '山田[やまだ][こうえんを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (xiyobonda sayr qilmoq) samimiy inson.',
            },
            {
              term: '大変な (たいへんな)',
              reading: 'たいへんな',
              meaning: "qiyin, og'ir",
              exampleSentence: 'これは わたしが 買[か]った 大変[な][たいへん[な]] です。',
              exampleTranslation: "Bu men sotib olgan qiyin, og'ir.",
            },
            {
              term: '欲しい (ほしい)',
              reading: 'ほしい',
              meaning: 'xohlagan, xohlamoq',
              exampleSentence: 'この 部屋[へや]は 欲しい[ほしい]です。',
              exampleTranslation: 'Bu xona xohlagan, xohlamoq.',
            },
            {
              term: '寂しい (さびしい)',
              reading: 'さびしい',
              meaning: "ma'yus, xafa",
              exampleSentence: 'この 部屋[へや]は 寂しい[さびしい]です。',
              exampleTranslation: "Bu xona ma'yus, xafa.",
            },
            {
              term: '広い (ひろい)',
              reading: 'ひろい',
              meaning: 'keng',
              exampleSentence: 'この 部屋[へや]は 広い[ひろい]です。',
              exampleTranslation: 'Bu xona keng.',
            },
            {
              term: '狭い (せまい)',
              reading: 'せまい',
              meaning: 'tor',
              exampleSentence: 'この 部屋[へや]は 狭い[せまい]です。',
              exampleTranslation: 'Bu xona tor.',
            },
            {
              term: '市役所 (しやくしょ)',
              reading: 'しやくしょ',
              meaning: 'shahar hokimiyati',
              exampleSentence: 'あそこは 市役所[しやくしょ] です。',
              exampleTranslation: 'Anavi yer shahar hokimiyati.',
            },
            {
              term: 'プール',
              reading: 'プール',
              meaning: 'basseyn, hovuz',
              exampleSentence: 'これは わたしが 買[か]った プール です。',
              exampleTranslation: 'Bu men sotib olgan basseyn, hovuz.',
            },
            {
              term: '川 (かわ)',
              reading: 'かわ',
              meaning: 'daryo',
              exampleSentence: 'これは わたしが 買[か]った 川[かわ] です。',
              exampleTranslation: 'Bu men sotib olgan daryo.',
            },
            {
              term: '経済 (けいざい)',
              reading: 'けいざい',
              meaning: 'iqtisod',
              exampleSentence: 'この 部屋[へや]は 経済[けいざい]です。',
              exampleTranslation: 'Bu xona iqtisod.',
            },
            {
              term: '美術 (びじゅつ)',
              reading: 'びじゅつ',
              meaning: "san'at",
              exampleSentence: 'これは わたしが 買[か]った 美術[びじゅつ] です。',
              exampleTranslation: "Bu men sotib olgan san'at.",
            },
            {
              term: '釣り (つり)',
              reading: 'つり',
              meaning: 'baliq tutish （～をします： baliq tutmoq ）',
              exampleSentence: 'これは わたしが 買[か]った 釣り[つり] です。',
              exampleTranslation: 'Bu men sotib olgan baliq tutish （～をします： baliq tutmoq ）.',
            },
            {
              term: 'スキー',
              reading: 'スキー',
              meaning: "chang'i; chang'i uchish （～をします： chang'i uchmoq ）",
              exampleSentence: 'これは わたしが 買[か]った スキー です。',
              exampleTranslation:
                "Bu men sotib olgan chang'i; chang'i uchish （～をします： chang'i uchmoq ）.",
            },
            {
              term: '会議 (かいぎ)',
              reading: 'かいぎ',
              meaning: "majlis, yig'in ( ～をします： majlis qilmoq)",
              exampleSentence: 'これは わたしが 買[か]った 会議[かいぎ] です。',
              exampleTranslation:
                "Bu men sotib olgan majlis, yig'in ( ～をします： majlis qilmoq).",
            },
            {
              term: '登録 (とうろく)',
              reading: 'とうろく',
              meaning: "ro'yxatga olish （～をします： ro'yxatga olmoq ）",
              exampleSentence: 'これは わたしが 買[か]った 登録[とうろく] です。',
              exampleTranslation:
                "Bu men sotib olgan ro'yxatga olish （～をします： ro'yxatga olmoq ）.",
            },
            {
              term: '週末 (しゅうまつ)',
              reading: 'しゅうまつ',
              meaning: 'hafta oxiri, dam olish kuni',
              exampleSentence: 'これは わたしが 買[か]った 週末[しゅうまつ] です。',
              exampleTranslation: 'Bu men sotib olgan hafta oxiri, dam olish kuni.',
            },
            {
              term: '～ごろ',
              reading: '～ごろ',
              meaning: "~larda (vaqt bilan qo'llaniladi.)",
              exampleSentence: '山田[やまだ]ごろは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada ~larda (vaqt bilan qo'llaniladi.) samimiy inson.",
            },
            {
              term: '何か (なにか)',
              reading: 'なにか',
              meaning: 'nimadir, biror narsa',
              exampleSentence: 'これは わたしが 買[か]った 何か[なにか] です。',
              exampleTranslation: 'Bu men sotib olgan nimadir, biror narsa.',
            },
            {
              term: 'どこか',
              reading: 'どこか',
              meaning: 'qayerdir, biror joy',
              exampleSentence: 'これは わたしが 買[か]った どこか です。',
              exampleTranslation: 'Bu men sotib olgan qayerdir, biror joy.',
            },
            {
              term: 'おなかがすきました。',
              reading: 'おなかがすきました。',
              meaning: 'Qorin ochdi.',
              exampleSentence: 'これは わたしが 買[か]った おなかがすきました。 です。',
              exampleTranslation: 'Bu men sotib olgan qorin ochdi..',
            },
            {
              term: 'おなかがいっぱいです。',
              reading: 'おなかがいっぱいです。',
              meaning: "Qorin to'ydi. Qorin to'q.",
              exampleSentence: 'これは わたしが 買[か]った おなかがいっぱいです。 です。',
              exampleTranslation: "Bu men sotib olgan qorin to'ydi. qorin to'q..",
            },
            {
              term: 'のどがかわきました。',
              reading: 'のどがかわきました。',
              meaning: 'Chanqadim.',
              exampleSentence: 'これは わたしが 買[か]った のどがかわきました。 です。',
              exampleTranslation: 'Bu men sotib olgan chanqadim..',
            },
            {
              term: 'そうですね。',
              reading: 'そうですね。',
              meaning: 'Nimasini aytsam sizga… .; Rost aytasiz. Ha-ya',
              exampleSentence: 'これは わたしが 買[か]った そうですね。 です。',
              exampleTranslation:
                'Bu men sotib olgan nimasini aytsam sizga… .; rost aytasiz. ha-ya.',
            },
            {
              term: 'そうしましょう。',
              reading: 'そうしましょう。',
              meaning: 'Shunday qilaylik.',
              exampleSentence: 'これは わたしが 買[か]った そうしましょう。 です。',
              exampleTranslation: 'Bu men sotib olgan shunday qilaylik..',
            },
            {
              term: 'ご注ちゅう文もんは？',
              reading: 'ご注ちゅう文もんは？',
              meaning: 'Nimani buyurasiz?',
              exampleSentence: 'これは わたしが 買[か]った ご注[ちゅう]文[もん]は？ です。',
              exampleTranslation: 'Bu men sotib olgan nimani buyurasiz?.',
            },
            {
              term: '定食',
              reading: '定食',
              meaning: "ovqatlar to'plami",
              exampleSentence: 'これは わたしが 買[か]った 定[てい]職[しょく] です。',
              exampleTranslation: "Bu men sotib olgan ovqatlar to'plami.",
            },
            {
              term: '牛丼',
              reading: '牛丼',
              meaning: "gyudon- qaynatilgan guruch ustida mol go'shti",
              exampleSentence: 'これは わたしが 買[か]った 牛[ぎゅう]どん です。',
              exampleTranslation:
                "Bu men sotib olgan gyudon- qaynatilgan guruch ustida mol go'shti.",
            },
            {
              term: '少々しょうしょうお待まちください。',
              reading: '少々しょうしょうお待まちください。',
              meaning: 'Bir oz kutib turing.',
              exampleSentence:
                'これは わたしが 買[か]った [少々[しょうしょう]]お待[ま]ちください。 です。',
              exampleTranslation: 'Bu men sotib olgan bir oz kutib turing..',
            },
            {
              term: '別々べつべつに',
              reading: '別々べつべつに',
              meaning: 'alohida',
              exampleSentence: 'これは わたしが 買[か]った 別々[べつべつ]に です。',
              exampleTranslation: 'Bu men sotib olgan alohida.',
            },
            {
              term: 'ロシア',
              reading: 'ロシア',
              meaning: 'Rossiya',
              exampleSentence: 'これは わたしが 買[か]った ロシア です。',
              exampleTranslation: 'Bu men sotib olgan rossiya.',
            },
            {
              term: 'つるや',
              reading: 'つるや',
              meaning: "yapon restorani nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った つるや です。',
              exampleTranslation: "Bu men sotib olgan yapon restorani nomi (o'ylab topilgan).",
            },
            {
              term: 'おはようテレビ',
              reading: 'おはようテレビ',
              meaning: "teledastur nomi (o'ylab topilgan)",
              exampleSentence: 'これは わたしが 買[か]った おはようテレビ です。',
              exampleTranslation: "Bu men sotib olgan teledastur nomi (o'ylab topilgan).",
            },
          ],
          grammarRules: [
            {
              pattern: 'OT  が 欲[ほ] しいです',
              meaning:
                "Ushbu gap namunasi biror narsaga egalik qilish xohish istagini bildirish uchun ishlatiladi. Bundan tashqari suhbatdoshning nimani xohlayotganini so'rash uchun ham qo'llaniladi. Gapda otdan keyin が yuklamasi qo'shiladi, 欲[ほ] しい esa い -sifatdir. ･･･車[くるま] が 欲[ほ] しいです。 … Mashinam bo'lishini xohlayapman. ･･･いいえ、欲[ほ] しくないです。 … Yo'q, xohlamayman.",
              usageNotes:
                'Minna no Nihongo 13-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは 友達[ともだち] が 欲[ほ] しいです。',
                  translation: "Men do'stlarim bo'lishini xohlayman.",
                },
                {
                  sentence: '今[いま] 何[なに] が いちばん 欲[ほ] しいですか。',
                  translation: 'Hozir nimani juda xohlaysiz?',
                },
                {
                  sentence: '子[こ] どもが 欲[ほ] しいですか。',
                  translation: "Farzandingiz bo'lishini xohlaysizmi?",
                },
              ],
            },
            {
              pattern: 'FE’Lning  ます -shakli  たいです',
              meaning:
                "1) FE'Lning ます -shakli ます bilan tugaydigan fe'llar, “FE'Lning ます -shakli” deb ataladi. Masalan, かいます fe'lida, かい “FE'Lning ます -shaklidagi” o'zagidir. 3) FE'Lning ます -shakli たいです Ushbu namuna orqali bir nima qilishni xohlash ifodalanadi. Shu bilan birga suhbatdoshning nima qilishni xohlayotganini so'rash uchun ham qo'llaniladi. Quyidagi ⑤ -misoldagidek, が yuklamasi を o'rnida qo'llanilishi mumkin. Boshqa yuklamalar o'rnida が ishlatilishi mumkin emas. “FE'Lning ます -shakli たい ” grammatik xususiyatiga ko'ra い -sifati bilan bir xil o'zgaradi. Men Okinavaga bormoqchiman. ( が ) ･･･靴[くつ] を買[か] いたいです。 … Oyoq-kiyim xarid qilmoqchiman. ( が ) [Eslatma 1] ほしいです yoki ～たいです shakllari uchunchi shaxsning xohish-istagini ifodalash uchun qo'llanilmaydi. [Eslatma 2] Suhbatdoshga biror narsa taklif qilayotganda yoki biror harakatga undaganda ほしいですか yoki “FE'Lning ます -shakli たいですか ”ni qo'llamagan ma'qul. Masalan, agar siz qahva taklif qilsangiz (yoki qahva ichishga borishni taklif qilsangiz), コーヒーが ほしいですか yoki コーヒーを 飲[の] みたいですか ni qo'llamasligingiz kerak. Uning o'rniga コーヒーは いかがですか yoki コーヒーを の みませんか kabi iboralarni qo'llagan ma'qul. FE'Lning ます -shakli",
              usageNotes:
                'Minna no Nihongo 13-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは 沖縄[おきなわ] へ 行[い] きたいです。',
                  translation: 'Men Okinavaga borishni xohlayman /',
                },
                {
                  sentence: 'わたしは てんぷらを 食[た] べたいです。',
                  translation: '( が ) Men tempura yemoqchiman.',
                },
                {
                  sentence: '神[こう] 戸[べ] で 何[なに] を 買[か] いたいですか。',
                  translation: 'Kobeda nima xarid qilmoqchisiz?',
                },
                {
                  sentence: 'おなかが 痛[いた] いですから、何[なに] も 食[た] べたくないです。',
                  translation: "Qornim og'riyotganligi uchun hech narsa yegim kelmayapti.",
                },
              ],
            },
            {
              pattern: 'OT(o`rin-joy) へ に行[い] きます／来[き] ます／帰[かえ] ります',
              meaning:
                "OT Ushbu namuna yordamida いきます , きます , かえります kabi fe'llar orqali maqsad ifodalanadi. Gapda maqsad に qo'shimchasi bilan belgilanadi. に dan oldin qo'llaniladigan ot harakat nomini bildiradi. Kobega hind taomlarini yegani 💡 Muhim eslatma: に dan oldin voqea-hodisa, masalan, bayram yoki konsertlar qo'llanilishi mumkin. Unda, so'zlovchining maqsadi shu voqeani ko'rish yoki unda ishtirok etish ekanligi ifodalanadi.",
              usageNotes:
                'Minna no Nihongo 13-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '神[こう] 戸[べ] へ インド料[りょう] 理[り] を 食[た] べに 行[い] きます。',
                  translation: 'boraman.',
                },
                {
                  sentence: '神[こう] 戸[べ] へ 買[か] い物[もの] に 行[い] きます。',
                  translation: "Yaponiyaga badiiy san'atni o'rgangani",
                },
                {
                  sentence:
                    '日[に] 本[ほん] へ 美[び] 術[じゅつ] の 勉強[べんきょう] に 来[き] ました。',
                  translation: 'keldim.',
                },
                {
                  sentence: 'あした 京[きょう] 都[と] の お祭[まつ] りに 行[い] きます。',
                  translation: 'Men ertaga Kiotoga bayramga boraman.',
                },
              ],
            },
            {
              pattern: 'OT  に  FE’L ／ OT  を  FE’L',
              meaning:
                "に qo'shimchasi はいります , のります (transportga chiqmoq; 16-darsga qarang) kabi fe'llar bilan qo'llanilganda, tayinlangan, belgilangan joy yoki oxirgi yetib kelish punktini bildiradi. を qo'shimchasi でます , おります kabi fe'llar bilan qo'llanilganda, jo'nash punktini, harakatning boshlanishini yoki chiqib ketayotgan joyni bildiradi.",
              usageNotes:
                'Minna no Nihongo 13-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'あの 喫茶店[きっさてん] に 入[はい] りましょう。',
                  translation: 'Ana u qahvaxonaga kiraylik.',
                },
                {
                  sentence: '７時[じ] に うちを 出[で] ます。',
                  translation: 'Soat yettida uydan chiqaman.',
                },
              ],
            },
            {
              pattern: 'どこか／何[なに] か',
              meaning:
                "どこか noaniq olmoshi “ qayerdir ” yoki “ biror yer ” degan ma'noni bildiradi. なにか esa “ nimadir ” yoki “ biror narsa ” degan ma'noni bildiradi. Bu holda へ va を qo'shimchasini qo'shmasa ham bo'ladi. ･･･はい、行[い] きました。 Qishki ta'tilda biror yerga bordingizmi? Chanqadim, biror narsa ichgim kelayapti.",
              usageNotes:
                'Minna no Nihongo 13-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '冬休[ふゆやす] みは どこか [ へ ]',
                  translation: '行[い] きましたか。 … Ha, bordim.',
                },
                {
                  sentence: 'のどが かわきましたから、何[なに] か [ を ]',
                  translation: '飲[の] みたいです。',
                },
              ],
            },
            {
              pattern: 'ご注文[ちゅうもん]',
              meaning:
                "ご so'z oldi qo'shimchasi ba'zi so'zlarga qo'shilib hurmatni bildiradi. ⑯ ご注[ちゅう] 文[もん] は？ Nima buyurtma qilasiz?",
              usageNotes:
                'Minna no Nihongo 13-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ご注文[ちゅうもん]',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
          ],
          culturalNotes:
            "Restoranlarda hisob-kitob qilinganda ko'pincha hamma o'zi uchun to'laydi ('別々にお願いします' - betsubetsu ni onegaishimasu deb aytiladi).",
        },
      },
      {
        id: 'ja-minna-l13-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[13].practice],
        },
      },
      {
        id: 'ja-minna-l13-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[13].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l14',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u3',
    unitTitle: 'Minna Shokyu 1: 11–15 Darslar (Sanoq, Taqqoslash va Te-shakli)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 14,
    title: "14-dars: Fe'lning Te-shakli va Iltimos (Buyruq va Iltimos)",
    description:
      "Minna no Nihongo Shokyu 1: 14-dars: Fe'lning Te-shakli va Iltimos (Buyruq va Iltimos). Darsda 45 ta yangi so'z, audio talaffuzli Furigana misollar va 8 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l14-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "14-dars: Fe'lning Te-shakli va Iltimos (Buyruq va Iltimos)",
          subtitle: '第14課：て形と依頼（〜てください・〜ています）',
          explanation:
            "14-dars: Fe'lning Te-shakli va Iltimos (Buyruq va Iltimos) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  Fe’llarning tuslanishi: Yapon tilida fe'llar tuslanishi orqali o'z ko'rinishlarini o'zgartiradi.",
            "📌 2.  Fe’l guruhlari: 1) Ⅰ guruh Bu guruh fe'llarning o'zagi い da tugaydi.",
            "📌 3.    Fe’llarning  て -shakli: Fe'llarning て yoki で qo'shimchasi bilan tugaydiganlarga “FE'Lning て -shakli” deyiladi.",
            "📌 4.   FE’Lning  て -shakli  ください BUYRUQ YOKI XOHISH VA ISTAK: Bu turdagi gaplar biror-bir harakatni iltimos, buyruq va xohish-istak maqsadida amalga oshirishda qo'llaniladi.",
            "📌 5.                                                            FE’Lning   て -shakli  います HARAKATNING DAVOMIY KO`RINISHI: Bunday turdagi gaplar harakatni aynan hozir davom etayotganligini ko'rsatish uchun qo'llaniladi.",
            "📌 6.                                                                        FE’Lning   ます -shakli  ましょうか YORDAMGA TAKLIF: Bu usul so'zlovchi suhbatdoshiga biror bir narsa qilib berishni taklif qilayotganda qo'llanadi.",
          ],
          vocabulary: [
            {
              term: 'つけます',
              reading: 'つけます',
              meaning: "yo'qmoq",
              exampleSentence: '毎日[まいにち] つけます。',
              exampleTranslation: "Har kuni yo'qmoq.",
            },
            {
              term: '消します (けします)',
              reading: 'けします',
              meaning: "o'chirmoq",
              exampleSentence: '毎日[まいにち] 消します[けします]。',
              exampleTranslation: "Har kuni o'chirmoq.",
            },
            {
              term: '開けます (あけます)',
              reading: 'あけます',
              meaning: 'ochmoq',
              exampleSentence: '毎日[まいにち] 開けます[あけます]。',
              exampleTranslation: 'Har kuni ochmoq.',
            },
            {
              term: '閉めます (しめます)',
              reading: 'しめます',
              meaning: 'yopmoq',
              exampleSentence: '毎日[まいにち] 閉めます[しめます]。',
              exampleTranslation: 'Har kuni yopmoq.',
            },
            {
              term: '急ぎます (いそぎます)',
              reading: 'いそぎます',
              meaning: 'shoshmoq',
              exampleSentence: '毎日[まいにち] 急ぎます[いそぎます]。',
              exampleTranslation: 'Har kuni shoshmoq.',
            },
            {
              term: '待ちます (まちます)',
              reading: 'まちます',
              meaning: 'kutmoq',
              exampleSentence: '毎日[まいにち] 待ちます[まちます]。',
              exampleTranslation: 'Har kuni kutmoq.',
            },
            {
              term: '止めます (とめます)',
              reading: 'とめます',
              meaning: "to'xtatmoq",
              exampleSentence: '毎日[まいにち] 止めます[とめます]。',
              exampleTranslation: "Har kuni to'xtatmoq.",
            },
            {
              term: '曲がります (まがります)',
              reading: 'まがります',
              meaning: 'burilmoq, qayrilmoq',
              exampleSentence: '毎日[まいにち] 曲がります[まがります]。',
              exampleTranslation: 'Har kuni burilmoq, qayrilmoq.',
            },
            {
              term: '右へ～ (みぎへ～)',
              reading: 'みぎへ～',
              meaning: "(o'ngga qayrilmoq)",
              exampleSentence: '山田[やまだ][みぎへ]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (o'ngga qayrilmoq) samimiy inson.",
            },
            {
              term: '持ちます (もちます)',
              reading: 'もちます',
              meaning: 'ushlab turmoq',
              exampleSentence: '毎日[まいにち] 持ちます[もちます]。',
              exampleTranslation: 'Har kuni ushlab turmoq.',
            },
            {
              term: '取ります (とります)',
              reading: 'とります',
              meaning: 'olmoq',
              exampleSentence: 'きれいな 花[はな]の 写真[しゃしん]を 撮[と]りました。',
              exampleTranslation: 'Chiroyli gulning suratini oldim.',
            },
            {
              term: '手伝います (てつだいます)',
              reading: 'てつだいます',
              meaning: "yordam bermoq, ko'maklashmoq",
              exampleSentence: '毎日[まいにち] 手伝います[てつだいます]。',
              exampleTranslation: "Har kuni yordam bermoq, ko'maklashmoq.",
            },
            {
              term: '呼びます (よびます)',
              reading: 'よびます',
              meaning: 'chaqirmoq',
              exampleSentence: '毎日[まいにち] 呼びます[よびます]。',
              exampleTranslation: 'Har kuni chaqirmoq.',
            },
            {
              term: '話します (はなします)',
              reading: 'はなします',
              meaning: 'suhbatlashmoq',
              exampleSentence: '毎日[まいにち] 話します[はなします]。',
              exampleTranslation: 'Har kuni suhbatlashmoq.',
            },
            {
              term: '見せます (みせます)',
              reading: 'みせます',
              meaning: "ko'rsatmoq",
              exampleSentence: '毎日[まいにち] 見せます[みせます]。',
              exampleTranslation: "Har kuni ko'rsatmoq.",
            },
            {
              term: '教えます (おしえます)',
              reading: 'おしえます',
              meaning: "o'rgatmoq, aytmoq, tushuntirmoq",
              exampleSentence: '毎日[まいにち] 教えます[おしえます]。',
              exampleTranslation: "Har kuni o'rgatmoq, aytmoq, tushuntirmoq.",
            },
            {
              term: '住所を～ (じゅうしょを～)',
              reading: 'じゅうしょを～',
              meaning: '(manzilni aytmoq)',
              exampleSentence: '山田[やまだ][じゅうしょを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (manzilni aytmoq) samimiy inson.',
            },
            {
              term: '始めます (はじめます)',
              reading: 'はじめます',
              meaning: 'boshlamoq',
              exampleSentence: '毎日[まいにち] 始めます[はじめます]。',
              exampleTranslation: 'Har kuni boshlamoq.',
            },
            {
              term: '降ります (ふります)',
              reading: 'ふります',
              meaning: "yog'moq",
              exampleSentence: '毎日[まいにち] 降ります[ふります]。',
              exampleTranslation: "Har kuni yog'moq.",
            },
            {
              term: '雨が～ (あめが～)',
              reading: 'あめが～',
              meaning: "(yomg'ir yog'moq)",
              exampleSentence: '山田[やまだ][あめが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (yomg'ir yog'moq) samimiy inson.",
            },
            {
              term: 'コピーします',
              reading: 'コピーします',
              meaning: "nusxa ko'chirmoq",
              exampleSentence: '毎日[まいにち] コピーします。',
              exampleTranslation: "Har kuni nusxa ko'chirmoq.",
            },
            {
              term: 'エアコン',
              reading: 'エアコン',
              meaning: 'havo sovutgich',
              exampleSentence: 'これは わたしが 買[か]った エアコン です。',
              exampleTranslation: 'Bu men sotib olgan havo sovutgich.',
            },
            {
              term: 'パスポート',
              reading: 'パスポート',
              meaning: 'pasport',
              exampleSentence: 'これは わたしが 買[か]った パスポート です。',
              exampleTranslation: 'Bu men sotib olgan pasport.',
            },
            {
              term: '名前 (なまえ)',
              reading: 'なまえ',
              meaning: 'ism, nom',
              exampleSentence: 'これは わたしが 買[か]った 名前[なまえ] です。',
              exampleTranslation: 'Bu men sotib olgan ism, nom.',
            },
            {
              term: '住所 (じゅうしょ)',
              reading: 'じゅうしょ',
              meaning: 'manzil',
              exampleSentence: 'あそこは 住所[じゅうしょ] です。',
              exampleTranslation: 'Anavi yer manzil.',
            },
            {
              term: '地図 (ちず)',
              reading: 'ちず',
              meaning: 'xarita',
              exampleSentence: 'これは わたしが 買[か]った 地図[ちず] です。',
              exampleTranslation: 'Bu men sotib olgan xarita.',
            },
            {
              term: '塩 (しお)',
              reading: 'しお',
              meaning: 'tuz',
              exampleSentence: 'これは わたしが 買[か]った 塩[しお] です。',
              exampleTranslation: 'Bu men sotib olgan tuz.',
            },
            {
              term: '砂糖 (さとう)',
              reading: 'さとう',
              meaning: 'shakar, qand',
              exampleSentence: '毎日[まいにち] 砂糖[さとう]。',
              exampleTranslation: 'Har kuni shakar, qand.',
            },
            {
              term: '読み方 (よみかた)',
              reading: 'よみかた',
              meaning: "o'qilish (o'qilish uslubi)",
              exampleSentence: 'これは わたしが 買[か]った 読み方[よみかた] です。',
              exampleTranslation: "Bu men sotib olgan o'qilish (o'qilish uslubi).",
            },
            {
              term: '～方 (～かた)',
              reading: '～かた',
              meaning: '~ish uslubi, ~ish odobi',
              exampleSentence: '山田[やまだ]かたは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ish uslubi, ~ish odobi samimiy inson.',
            },
            {
              term: 'ゆっくり',
              reading: 'ゆっくり',
              meaning: 'sekin, bemalol',
              exampleSentence: 'これは わたしが 買[か]った ゆっくり です。',
              exampleTranslation: 'Bu men sotib olgan sekin, bemalol.',
            },
            {
              term: 'すぐ',
              reading: 'すぐ',
              meaning: 'darhol',
              exampleSentence: 'これは わたしが 買[か]った すぐ です。',
              exampleTranslation: 'Bu men sotib olgan darhol.',
            },
            {
              term: 'また',
              reading: 'また',
              meaning: 'yana',
              exampleSentence: 'これは わたしが 買[か]った また です。',
              exampleTranslation: 'Bu men sotib olgan yana.',
            },
            {
              term: 'あとで',
              reading: 'あとで',
              meaning: 'keyin',
              exampleSentence: 'これは わたしが 買[か]った あとで です。',
              exampleTranslation: 'Bu men sotib olgan keyin.',
            },
            {
              term: 'もう少し (もうすこし)',
              reading: 'もうすこし',
              meaning: 'yana ozgina',
              exampleSentence: 'これは わたしが 買[か]った もう少し[もうすこし] です。',
              exampleTranslation: 'Bu men sotib olgan yana ozgina.',
            },
            {
              term: 'もう～',
              reading: 'もう～',
              meaning: 'yana~',
              exampleSentence: '毎日[まいにち] もう。',
              exampleTranslation: 'Har kuni yana~.',
            },
            {
              term: 'いいですよ。',
              reading: 'いいですよ。',
              meaning: 'Mayli.',
              exampleSentence: 'これは わたしが 買[か]った いいですよ。 です。',
              exampleTranslation: 'Bu men sotib olgan mayli..',
            },
            {
              term: 'さあ',
              reading: 'さあ',
              meaning: "demak, xo'sh",
              exampleSentence: 'これは わたしが 買[か]った さあ です。',
              exampleTranslation: "Bu men sotib olgan demak, xo'sh.",
            },
            {
              term: 'あれ？',
              reading: 'あれ？',
              meaning: "Voy! (hayron bo'lish iborasi)",
              exampleSentence: 'これは わたしが 買[か]った あれ？ です。',
              exampleTranslation: "Bu men sotib olgan voy! (hayron bo'lish iborasi).",
            },
            {
              term: '信号しんごうを右みぎへ曲まがってください。',
              reading: '信号しんごうを右みぎへ曲まがってください。',
              meaning: "Svetofordan o'ngga qayriling.",
              exampleSentence:
                'これは わたしが 買[か]った 信号[しんごう]を右[みぎ]へ曲[ま]がってください。 です。',
              exampleTranslation: "Bu men sotib olgan svetofordan o'ngga qayriling..",
            },
            {
              term: 'まっすぐ',
              reading: 'まっすぐ',
              meaning: "to'g'ri",
              exampleSentence: 'これは わたしが 買[か]った まっすぐ です。',
              exampleTranslation: "Bu men sotib olgan to'g'ri.",
            },
            {
              term: 'これでお願ねがいします。',
              reading: 'これでお願ねがいします。',
              meaning: 'Buni oling, marhamat.',
              exampleSentence: '毎日[まいにち] これでお願[ねが]いします。。',
              exampleTranslation: 'Har kuni buni oling, marhamat..',
            },
            {
              term: 'お釣つり',
              reading: 'お釣つり',
              meaning: 'qaytim',
              exampleSentence: 'これは わたしが 買[か]った お釣[つ]り です。',
              exampleTranslation: 'Bu men sotib olgan qaytim.',
            },
            {
              term: '梅田',
              reading: '梅田',
              meaning: 'Osakadagi tuman nomi',
              exampleSentence: 'これは わたしが 買[か]った 梅[うめ]田[だ] です。',
              exampleTranslation: 'Bu men sotib olgan osakadagi tuman nomi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Fe’llarning tuslanishi',
              meaning:
                "Yapon tilida fe'llar tuslanishi orqali o'z ko'rinishlarini o'zgartiradi. Tuslanish turiga ko'ra 3 guruhga bo'linadi.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'Fe’llarning tuslanishi',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'Fe’l guruhlari',
              meaning:
                "1) Ⅰ guruh Bu guruh fe'llarning o'zagi い da tugaydi. (Asosiy o'quv darsligining 2-betiga qarang: かな と 拍[はく] ) かきます yozmoq のみます ichmoq 2) Ⅱ guruh Garchi ayrim fe'l o'zaklari い da tugasa ham bu guruh fe'lining o'zak harflari え da tugaydi. たべます yemoq みせます ko'rsatmoq みます ko'rmoq 3) Ⅲ guruh Bu guruhga します , きます fe'llari kiradi (harakatni ifodalaydigan OT+ します )",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'Fe’l guruhlari',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'Fe’llarning  て -shakli',
              meaning:
                "Fe'llarning て yoki で qo'shimchasi bilan tugaydiganlarga “FE'Lning て -shakli” deyiladi. Quyida keltirilgan fe'l guruhlarining turiga qarab “FE'Lning て -shakli”ni hosil qilish jarayoni har xil bo'ladi. 1) Ⅰ guruh Jadvalda ko'rsatilganidek (Asosiy o'quv darsligining (14-dars) 116- betidagi 練習[れんしゅう] A1ga qarang), “FE'Lning て -shakli” “FE'Lning ます shakli”ning o'zgarishiga qarab hosil bo'ladi. いきます fe'lining て -shakli いって ga o'zgarishiga ahamiyat bering. Bu istisno ko'rinishdir. 2) Ⅱ guruh て , ます o'rniga qo'yiladi. 3) Ⅲ guruh て , ます o'rniga qo'yiladi.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'Fe’llarning  て -shakli',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'FE’Lning  て -shakli  ください BUYRUQ YOKI XOHISH VA ISTAK',
              meaning:
                "Bu turdagi gaplar biror-bir harakatni iltimos, buyruq va xohish-istak maqsadida amalga oshirishda qo'llaniladi. Agar suhbatdosh yuqori lavozim egasi bo'lsa, bunday turdagi gaplar qo'llanilmaydi. Quyida iltimos, buyruq va xohish-istakni bildirgan iboralarga misol keltirib o'tilgan. Birinchi ① -misolda ko'rsatilgandek, “FE'Lning て -shakli ください ” qo'llangan gapning boshida すみませんが so'zi iltimos ma'nosida qo'llanadi. Bunday ko'rinish faqat “FE'Lning て -shakli ください ” qo'llangan gapga qaraganda ancha yumshoqroq.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'すみませんが、この 漢[かん] 字[じ] の 読[よ] み方[かた] を 教[おし] えて ください。',
                  translation: "Kechirasiz, mana bu iyeroglifning o'qilishini o'rgatib yuboring.",
                },
                {
                  sentence:
                    'ここに 住[じゅう] 所[しょ] と 名[な] 前[まえ] を 書[か] いて ください。',
                  translation: 'Bu yerga manzilingiz bilan ismingizni yozing.',
                },
                {
                  sentence: 'ぜひ 遊[あそ] びに 来[き] て ください。',
                  translation: 'Albatta mehmonga keling. (25-darsga qarang)',
                },
              ],
            },
            {
              pattern: 'FE’Lning   て -shakli  います HARAKATNING DAVOMIY KO`RINISHI',
              meaning:
                "Bunday turdagi gaplar harakatni aynan hozir davom etayotganligini ko'rsatish uchun qo'llaniladi. ･･･いいえ、降[ふ] って いません。 …Yo'q, yog'mayapti.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ミラーさんは 今[いま] 電[でん] 話[わ] を かけています。',
                  translation: 'qilayapti.',
                },
                {
                  sentence: '今[いま] 雨[あめ] が 降[ふ] って いますか。',
                  translation: "･･･はい、降[ふ] って います。 …Ha, yog'ayapti.",
                },
              ],
            },
            {
              pattern: 'FE’Lning   ます -shakli  ましょうか YORDAMGA TAKLIF',
              meaning:
                "Bu usul so'zlovchi suhbatdoshiga biror bir narsa qilib berishni taklif qilayotganda qo'llanadi. Keltirilgan misollarda kimdandir biror-bir ishni muloyimlik bilan so'rash ⑥ , minnatdorchilik bilan taklifni qabul qilish ⑦ va hurmat bilan taklifni rad etish ⑧ da ko'rsatilgan.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'A:  あしたも 来[き] ましょうか。',
                  translation:
                    'B: ええ、１０時[じ] に 来[き] て ください。 …Ha, soat 10 ga keling.',
                },
                {
                  sentence: 'A:  傘[かさ] を 貸[か] しましょうか。',
                  translation: "B: すみません。お願[ねが] いします。 …Rahmat. Agar mumkin bo'lsa.",
                },
                {
                  sentence: 'A:  荷[に] 物[もつ] を 持[も] ちましょうか。',
                  translation: "B: いいえ、けっこうです。 …Yo'q, rahmat. Hojati yo'q.",
                },
              ],
            },
            {
              pattern: 'GAP 1  が、 GAP 2 KIRISH SO`ZLARI “KECHIRASIZ…?”, “KECHIRASIZ… .”',
              meaning:
                "が kabi kirish so'zlari bilan kelganda, o'zining boshlang'ich ma'nosini anglatmay, balki ularni shunchaki keyingi so'zlar bilan bog'lash uchun xizmat qiladi.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '失礼[しつれい] ですが、お名[な] 前[まえ] は？',
                  translation: 'Kechirasiz, ismingiz nima? (1-dars)',
                },
                {
                  sentence: 'すみませんが、塩[しお] を 取[と] って ください。',
                  translation:
                    '8-darsda が boglovchisi haqida bilib oldik. 「が」 - しつれいですが yoki すみません',
                },
              ],
            },
            {
              pattern: 'OT  が  FE’L',
              meaning:
                "Tabiat xodisalarini tasvirlayotganda EGA 「が」 bilan ajratib ko'rsatiladi.",
              usageNotes:
                'Minna no Nihongo 14-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '雨[あめ] が 降[ふ] って います。',
                  translation: "Yomg'ir yog'ayapti.",
                },
              ],
            },
          ],
          culturalNotes:
            "Birovdan yordam so'rashda yoki taksi haydovchisiga manzilni aytishda fe'lning Te-shakli + 'ください' qo'llaniladi (masalan: '駅まで 行ってください').",
        },
      },
      {
        id: 'ja-minna-l14-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[14].practice],
        },
      },
      {
        id: 'ja-minna-l14-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[14].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l15',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u3',
    unitTitle: 'Minna Shokyu 1: 11–15 Darslar (Sanoq, Taqqoslash va Te-shakli)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 15,
    title: "15-dars: Ruxsat, Taqiq va Holat fe'llari",
    description:
      "Minna no Nihongo Shokyu 1: 15-dars: Ruxsat, Taqiq va Holat fe'llari. Darsda 30 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l15-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "15-dars: Ruxsat, Taqiq va Holat fe'llari",
          subtitle: '第15課：許可と禁止（〜てもいいです・てはいけません）',
          explanation:
            "15-dars: Ruxsat, Taqiq va Holat fe'llari bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.                                                                           FE’Lning  て -shakli  も いいです HARAKATGA RUXSAT BERISH: Gapning ushbu shakli ish-harakatni bajarish mumkinligi, ruxsat berish kabi ma'nolarini ifodalaydi.",
            "📌 2.                                                                         FE’Lning  て -shakli  は いけません HARAKATNI TAQIQLASH: Gapning ushbu turi ish-harakatning bajarilishini man etilishni ifodalaydi ～ても いいですか ruxsat so'rash shaklidagi so'roq gaplarga inkor javobni qaytarayotganda ては shaklini qo'llamasdan, いいえ、いけません shaklini qo'llashning o'zi yetarli.",
            "📌 3.  FE’Lning  て -shakli  います: 14-darsda ko'rib o'tgan “FE'Lning て -shakli います ”ning qo'llanilishidan tashqari ushbu shakldagi gaplar ancha avval boshlangan va hozirgacha davom etayotgan holatni ifoda etib keladi.",
            "📌 4.   FE’Lning て -shakli  います: “FE'Lning て -shakli います ”, shuningdek ma'lum vaqt mobaynida davom etib, odat tusiga kirgan yoki takrorlanib kelgan ish-harakatni ifodalaydi.",
            "📌 5.  知[し] りません: しって います fe'li inkor shaklda しりません ga o'zgaradi.",
          ],
          vocabulary: [
            {
              term: '立ちます (たちます)',
              reading: 'たちます',
              meaning: 'turmoq',
              exampleSentence: '毎日[まいにち] 立ちます[たちます]。',
              exampleTranslation: 'Har kuni turmoq.',
            },
            {
              term: '座ります (すわります)',
              reading: 'すわります',
              meaning: "o'tirmoq",
              exampleSentence: '毎日[まいにち] 座ります[すわります]。',
              exampleTranslation: "Har kuni o'tirmoq.",
            },
            {
              term: '使います (つかいます)',
              reading: 'つかいます',
              meaning: "foydalanmoq, qo'llamoq, ishlatmoq",
              exampleSentence: '毎日[まいにち] 使います[つかいます]。',
              exampleTranslation: "Har kuni foydalanmoq, qo'llamoq, ishlatmoq.",
            },
            {
              term: '置きます (おきます)',
              reading: 'おきます',
              meaning: "qo'ymoq",
              exampleSentence: '毎朝[まいあさ] 6時[ろくじ]に 起[お]きます。',
              exampleTranslation: "Har kuni ertalab soat 6 da uyg'onaman.",
            },
            {
              term: '作ります、 (つくります)',
              reading: 'つくります',
              meaning: 'yasamoq; tayyorlamoq, pishirmoq 造ります',
              exampleSentence: '毎日[まいにち] 作ります、[つくります]。',
              exampleTranslation: 'Har kuni yasamoq; tayyorlamoq, pishirmoq 造ります.',
            },
            {
              term: '売ります (うります)',
              reading: 'うります',
              meaning: 'sotmoq',
              exampleSentence: '毎日[まいにち] 売ります[うります]。',
              exampleTranslation: 'Har kuni sotmoq.',
            },
            {
              term: '知ります (しります)',
              reading: 'しります',
              meaning: 'bilmoq',
              exampleSentence: '毎日[まいにち] 知ります[しります]。',
              exampleTranslation: 'Har kuni bilmoq.',
            },
            {
              term: '住みます (すみます)',
              reading: 'すみます',
              meaning: 'yashamoq',
              exampleSentence: '毎日[まいにち] 住みます[すみます]。',
              exampleTranslation: 'Har kuni yashamoq.',
            },
            {
              term: '研究します (けんきゅうします)',
              reading: 'けんきゅうします',
              meaning: 'ilmiy tadqiqot olib bormoq',
              exampleSentence: '毎日[まいにち] 研究します[けんきゅうします]。',
              exampleTranslation: 'Har kuni ilmiy tadqiqot olib bormoq.',
            },
            {
              term: '知っています (しっています)',
              reading: 'しっています',
              meaning: 'bila(~man, ~san, ~di)',
              exampleSentence: '毎日[まいにち] 知っています[しっています]。',
              exampleTranslation: 'Har kuni bila(~man, ~san, ~di).',
            },
            {
              term: '住んでいます (すんでいます)',
              reading: 'すんでいます',
              meaning: 'yashayap(~man, san, ~ti)',
              exampleSentence: '毎日[まいにち] 住んでいます[すんでいます]。',
              exampleTranslation: 'Har kuni yashayap(~man, san, ~ti).',
            },
            {
              term: '大阪に～ (おおさかに～)',
              reading: 'おおさかに～',
              meaning: '(Osakada yashayap(~man, ~san,~ti))',
              exampleSentence: '山田[やまだ][おおさかに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (osakada yashayap(~man, ~san,~ti)) samimiy inson.',
            },
            {
              term: '資料 (しりょう)',
              reading: 'しりょう',
              meaning: "material, ma'lumot",
              exampleSentence: '毎日[まいにち] 資料[しりょう]。',
              exampleTranslation: "Har kuni material, ma'lumot.",
            },
            {
              term: 'カタログ',
              reading: 'カタログ',
              meaning: 'katalog',
              exampleSentence: 'これは わたしが 買[か]った カタログ です。',
              exampleTranslation: 'Bu men sotib olgan katalog.',
            },
            {
              term: '時刻表 (じこくひょう)',
              reading: 'じこくひょう',
              meaning: 'vaqt jadval',
              exampleSentence: '毎日[まいにち] 時刻表[じこくひょう]。',
              exampleTranslation: 'Har kuni vaqt jadval.',
            },
            {
              term: '服 (ふく)',
              reading: 'ふく',
              meaning: 'kiyim',
              exampleSentence: 'これは わたしが 買[か]った 服[ふく] です。',
              exampleTranslation: 'Bu men sotib olgan kiyim.',
            },
            {
              term: '製品 (せいひん)',
              reading: 'せいひん',
              meaning: 'mahsulot',
              exampleSentence: 'これは わたしが 買[か]った 製品[せいひん] です。',
              exampleTranslation: 'Bu men sotib olgan mahsulot.',
            },
            {
              term: 'ソフト',
              reading: 'ソフト',
              meaning: "dastur ta'minoti (kompyuter)",
              exampleSentence: 'これは わたしが 買[か]った ソフト です。',
              exampleTranslation: "Bu men sotib olgan dastur ta'minoti (kompyuter).",
            },
            {
              term: '専門 (せんもん)',
              reading: 'せんもん',
              meaning: "mutaxassislik, yo'nalish",
              exampleSentence: 'これは わたしが 買[か]った 専門[せんもん] です。',
              exampleTranslation: "Bu men sotib olgan mutaxassislik, yo'nalish.",
            },
            {
              term: '歯医者 (はいしゃ)',
              reading: 'はいしゃ',
              meaning: 'tish doktori, stomatolog',
              exampleSentence: '田中[たなか]さんは 歯医者[はいしゃ] です。',
              exampleTranslation: 'Tanaka janoblari tish doktori, stomatolog.',
            },
            {
              term: '床屋 (とこや)',
              reading: 'とこや',
              meaning: 'erkaklar sartaroshxonasi',
              exampleSentence: 'あそこは 床屋[とこや] です。',
              exampleTranslation: 'Anavi yer erkaklar sartaroshxonasi.',
            },
            {
              term: 'プレイガイド',
              reading: 'プレイガイド',
              meaning: 'teatr kassasi',
              exampleSentence: 'これは わたしが 買[か]った プレイガイド です。',
              exampleTranslation: 'Bu men sotib olgan teatr kassasi.',
            },
            {
              term: '独身 (どくしん)',
              reading: 'どくしん',
              meaning: "bo'ydoq",
              exampleSentence: 'これは わたしが 買[か]った 独身[どくしん] です。',
              exampleTranslation: "Bu men sotib olgan bo'ydoq.",
            },
            {
              term: '特とくに',
              reading: '特とくに',
              meaning: 'ayniqsa',
              exampleSentence: 'これは わたしが 買[か]った 特[とく]に です。',
              exampleTranslation: 'Bu men sotib olgan ayniqsa.',
            },
            {
              term: '思おもい出だします',
              reading: '思おもい出だします',
              meaning: 'yodga olmoq, xotirlamoq',
              exampleSentence: '毎日[まいにち] 思[おも]い出[だ]します。',
              exampleTranslation: 'Har kuni yodga olmoq, xotirlamoq.',
            },
            {
              term: 'ご家か族ぞく',
              reading: 'ご家か族ぞく',
              meaning: 'oilangiz, oilasi',
              exampleSentence: 'これは わたしが 買[か]った ご家[か]族[ぞく] です。',
              exampleTranslation: 'Bu men sotib olgan oilangiz, oilasi.',
            },
            {
              term: 'いらっしゃいます',
              reading: 'いらっしゃいます',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: '毎日[まいにち] いらっしゃいます。',
              exampleTranslation: 'Har kuni u kishi (hurmat shakli).',
            },
            {
              term: '高校',
              reading: '高校',
              meaning: 'yuqori maktab',
              exampleSentence: 'これは わたしが 買[か]った 高校[こうこう] です。',
              exampleTranslation: 'Bu men sotib olgan yuqori maktab.',
            },
            {
              term: '日本橋',
              reading: '日本橋',
              meaning: 'Osakadagi savdo hududi nomi',
              exampleSentence: 'これは わたしが 買[か]った 日本橋[にっぽんばし] です。',
              exampleTranslation: 'Bu men sotib olgan osakadagi savdo hududi nomi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'FE’Lning  て -shakli  も いいです HARAKATGA RUXSAT BERISH',
              meaning:
                "Gapning ushbu shakli ish-harakatni bajarish mumkinligi, ruxsat berish kabi ma'nolarini ifodalaydi. Biror bir ish-harakatni bajarishga ruxsat so'ralayotgan paytda shu tuzilmaga so'roq tusini beruvchi か qo'shimchasi qo'shiladi. Quyida bunday turdagi savollarga javob namunasi keltirilgan. Inkor ma'nodagi javobda to'g'ridan-to'g'ri rad etish ko'rinishlari qo'llanilmaganligiga e'tibor bering. ･･･すみません。ちょっと。 Mana bu katalogni olsam maylimi?",
              usageNotes:
                'Minna no Nihongo 15-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '写真[しゃしん] を 撮[と] っても いいです。',
                  translation: 'Suratga olish(ingiz) mumkin.',
                },
                {
                  sentence: 'たばこを 吸[す] っても いいですか。',
                  translation: 'Cheksam maylimi?',
                },
                {
                  sentence: 'この カタログを もらっても いいですか。',
                  translation:
                    "･･･ええ、いいですよ。どうぞ。 …Ha, mayli. Marhamat. …Kechirasiz. Ilojim yo'q.",
                },
              ],
            },
            {
              pattern: 'FE’Lning  て -shakli  は いけません HARAKATNI TAQIQLASH',
              meaning:
                "Gapning ushbu turi ish-harakatning bajarilishini man etilishni ifodalaydi ～ても いいですか ruxsat so'rash shaklidagi so'roq gaplarga inkor javobni qaytarayotganda ては shaklini qo'llamasdan, いいえ、いけません shaklini qo'llashning o'zi yetarli. Ushbu inkor gaplarni o'zidan katta yoki lavozimi bo'yicha yuqori bo'lgan shaxslarga nisbatan qo'llab bo'lmaydi.",
              usageNotes:
                'Minna no Nihongo 15-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ここで たばこを 吸[す] っては いけません。禁煙[きんえん] ですから。',
                  translation:
                    'Bu yerda chekish mumkin emas. Chunki, bu yer chekish man etilgan joy.',
                },
                {
                  sentence: '先生[せんせい] 、ここで 遊[あそ] んでも いいですか。',
                  translation: "･･･いいえ、いけません。 …Yo'q, mumkin emas.",
                },
              ],
            },
            {
              pattern: 'FE’Lning  て -shakli  います',
              meaning:
                "14-darsda ko'rib o'tgan “FE'Lning て -shakli います ”ning qo'llanilishidan tashqari ushbu shakldagi gaplar ancha avval boshlangan va hozirgacha davom etayotgan holatni ifoda etib keladi. egasi ” kabi ma'nolarni ham ifodalaydi.",
              usageNotes:
                'Minna no Nihongo 15-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは 結婚[けっこん] して います。',
                  translation: 'Men turmush qurganman.',
                },
                {
                  sentence: 'わたしは 田[た] 中[なか] さんを 知[し] って います。',
                  translation: 'Men janob Tanakani taniyman.',
                },
                {
                  sentence: 'わたしは 大阪[おおさか] に 住[す] んで います。',
                  translation: 'Men Osakada yashayman.',
                },
                {
                  sentence: 'わたしは カメラを 持[も] って います。',
                  translation:
                    "もっています iborasi “ qo'lida ushlab turmoq ” ma'nosi bilan birga “ biror narsaning",
                },
              ],
            },
            {
              pattern: 'FE’Lning て -shakli  います',
              meaning:
                "“FE'Lning て -shakli います ”, shuningdek ma'lum vaqt mobaynida davom etib, odat tusiga kirgan yoki takrorlanib kelgan ish-harakatni ifodalaydi. tarzida qo'llashimiz ham mumkin.",
              usageNotes:
                'Minna no Nihongo 15-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'va  ⑬ -misollarda ko`rsatilganidek, ushbu tuzilma yordamida shaxsning faoliyat',
                  translation:
                    'turini ifodalash mumkin. Shuningdek 「おしごとはなんですか」 savoliga javob',
                },
                {
                  sentence: 'IMC  は コンピューターソフトを 作[つく] って います。',
                  translation:
                    "IMC korxonasi kompyuterning dastur ta'minoti qurilmalarini ishlab chiqaradi.",
                },
                {
                  sentence: 'スーパーで フィルムを 売[う] って います。',
                  translation: 'Supermarketda fototasma sotiladi.',
                },
                {
                  sentence: 'ミラーさんは  IMC  で 働[はたら] いて います。',
                  translation: 'Janob Miler IMC korxonasida ishlaydi.',
                },
                {
                  sentence: '妹[いもうと] は 大学[だいがく] で 勉[べん] 強[きょう] して います。',
                  translation: 'Singlim institutda tahsil oladi.',
                },
              ],
            },
            {
              pattern: '知[し] りません',
              meaning:
                "しって います fe'li inkor shaklda しりません ga o'zgaradi. ･･･いいえ、知[し] りません。 Shahar hokimiyatning telefon raqamini bilasizmi?",
              usageNotes:
                'Minna no Nihongo 15-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '市[し] 役[やく] 所[しょ] の 電[でん] 話[わ] 番[ばん] 号[ごう] を 知[し] って いますか。',
                  translation: "･･･はい、知[し] って います。 …Ha, bilaman. …Yo'q, bilmayman.",
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada qoidalar va tartibga qat'iy rioya qilinadi. Biron narsa qilishdan oldin ruxsat so'rash uchun '~てもいいですか' ishlatiladi. Taqiq uchun '~てはいけません' qo'llaniladi.",
        },
      },
      {
        id: 'ja-minna-l15-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[15].practice],
        },
      },
      {
        id: 'ja-minna-l15-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[15].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l16',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u4',
    unitTitle: 'Minna Shokyu 1: 16–20 Darslar (Ketma-ketlik, Nai-shakli va Futsuugo)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 16,
    title: "16-dars: Harakatlar ketma-ketligi va Sifatlarni bog'lash",
    description:
      "Minna no Nihongo Shokyu 1: 16-dars: Harakatlar ketma-ketligi va Sifatlarni bog'lash. Darsda 61 ta yangi so'z, audio talaffuzli Furigana misollar va 7 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l16-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "16-dars: Harakatlar ketma-ketligi va Sifatlarni bog'lash",
          subtitle: '第16課：動作の連続（〜てから・〜くて）',
          explanation:
            "16-dars: Harakatlar ketma-ketligi va Sifatlarni bog'lash bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.   FE’Lning  て -shakli 、 [FE’Lning  て -shakli]  、～: Fe'lli so'z birikmalarni bog'lash uchun “FE'Lning て -shakli” qo'llaniladi.",
            "📌 2.  い -SIFAT  (~ い )  → ～くて、～: い -sifatlarni sanab o'tayotganda sifatning oxirgi い harfi くて ga o'zgaradi.",
            "📌 3.   OT: で、～ な -SIFAT [ な ] OT yoki な -SIFAT so'z birikmalarini sanab o'tayotganda です - で ga o'zgaradi.",
            "📌 4.  FE’L 1 ning  て -shakli  から、 FE’L 2: Bunday turdagi gaplar FE'L 1 ning harakati tugagandan keyin FE'L 2 ning harakati bo'lib o'tganligini yoki bo'lib o'tishini bildirish uchun qo'llaniladi.",
            "📌 5.  OT 1  は  OT 2  が  SIFAT: Bunday turdagi gaplar inson yoki predmetning xususiyatini tasvirlayotganda qo'llaniladi.",
            "📌 6.  どうやって: どうやって iborasi biror bir harakatni amalga oshirish yo'llarini aniqlash uchun so'roq gaplarda qo'llaniladi.",
          ],
          vocabulary: [
            {
              term: '乗ります (のります)',
              reading: 'のります',
              meaning: 'minmoq, chiqmoq',
              exampleSentence: '毎日[まいにち] 乗ります[のります]。',
              exampleTranslation: 'Har kuni minmoq, chiqmoq.',
            },
            {
              term: '電車に～ (でんしゃに～)',
              reading: 'でんしゃに～',
              meaning: '(poyezdga chiqmoq)',
              exampleSentence: '山田[やまだ][でんしゃに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (poyezdga chiqmoq) samimiy inson.',
            },
            {
              term: '降ります (おります)',
              reading: 'おります',
              meaning: 'tushmoq',
              exampleSentence: '毎日[まいにち] 降ります[おります]。',
              exampleTranslation: 'Har kuni tushmoq.',
            },
            {
              term: '電車を～ (でんしゃを～)',
              reading: 'でんしゃを～',
              meaning: '(poyezddan tushmoq)',
              exampleSentence: '山田[やまだ][でんしゃを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (poyezddan tushmoq) samimiy inson.',
            },
            {
              term: '乗り換えます (のりかえます)',
              reading: 'のりかえます',
              meaning: 'boshqa transportga almashmoq',
              exampleSentence: '毎日[まいにち] 乗り換えます[のりかえます]。',
              exampleTranslation: 'Har kuni boshqa transportga almashmoq.',
            },
            {
              term: '浴びます (あびます)',
              reading: 'あびます',
              meaning: 'qabul qilmoq',
              exampleSentence: '毎日[まいにち] 浴びます[あびます]。',
              exampleTranslation: 'Har kuni qabul qilmoq.',
            },
            {
              term: 'シャワーを～',
              reading: 'シャワーを～',
              meaning: '(dush qabul qilmoq)',
              exampleSentence: '山田[やまだ][シャワーを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (dush qabul qilmoq) samimiy inson.',
            },
            {
              term: '入れます (いれます)',
              reading: 'いれます',
              meaning: 'solmoq, joylamoq',
              exampleSentence: '毎日[まいにち] 入れます[いれます]。',
              exampleTranslation: 'Har kuni solmoq, joylamoq.',
            },
            {
              term: '出します (だします)',
              reading: 'だします',
              meaning: 'chiqarmoq, olmoq (biror narasa ichidan)',
              exampleSentence: '毎日[まいにち] 出します[だします]。',
              exampleTranslation: 'Har kuni chiqarmoq, olmoq (biror narasa ichidan).',
            },
            {
              term: '入ります (はいります)',
              reading: 'はいります',
              meaning: 'kirmoq',
              exampleSentence: '毎日[まいにち] 入ります[はいります]。',
              exampleTranslation: 'Har kuni kirmoq.',
            },
            {
              term: '大学に～ (だいがくに～)',
              reading: 'だいがくに～',
              meaning: '(universitetga kirmoq)',
              exampleSentence: '山田[やまだ][だいがくに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (universitetga kirmoq) samimiy inson.',
            },
            {
              term: '出ます (でます)',
              reading: 'でます',
              meaning: 'bitirmoq, tugatmoq',
              exampleSentence: '毎日[まいにち] 出ます[でます]。',
              exampleTranslation: 'Har kuni bitirmoq, tugatmoq.',
            },
            {
              term: '大学を～ (だいがくを～)',
              reading: 'だいがくを～',
              meaning: '(universitetni bitirmoq)',
              exampleSentence: '山田[やまだ][だいがくを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (universitetni bitirmoq) samimiy inson.',
            },
            {
              term: 'やめます',
              reading: 'やめます',
              meaning: 'ketmoq, tashlamoq; bas qilmoq',
              exampleSentence: '毎日[まいにち] やめます。',
              exampleTranslation: 'Har kuni ketmoq, tashlamoq; bas qilmoq.',
            },
            {
              term: '会社を～ (かいしゃを～)',
              reading: 'かいしゃを～',
              meaning: '(korxonadan ketmoq)',
              exampleSentence: '山田[やまだ][かいしゃを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (korxonadan ketmoq) samimiy inson.',
            },
            {
              term: '押します (おします)',
              reading: 'おします',
              meaning: 'bosmoq; itarmoq',
              exampleSentence: '毎日[まいにち] 押します[おします]。',
              exampleTranslation: 'Har kuni bosmoq; itarmoq.',
            },
            {
              term: '若い (わかい)',
              reading: 'わかい',
              meaning: 'yosh',
              exampleSentence: 'この 部屋[へや]は 若い[わかい]です。',
              exampleTranslation: 'Bu xona yosh.',
            },
            {
              term: '長い (ながい)',
              reading: 'ながい',
              meaning: 'uzun',
              exampleSentence: 'この 部屋[へや]は 長い[ながい]です。',
              exampleTranslation: 'Bu xona uzun.',
            },
            {
              term: '短い (みじかい)',
              reading: 'みじかい',
              meaning: 'qisqa',
              exampleSentence: 'この 部屋[へや]は 短い[みじかい]です。',
              exampleTranslation: 'Bu xona qisqa.',
            },
            {
              term: '明るい (あかるい)',
              reading: 'あかるい',
              meaning: 'yorug',
              exampleSentence: 'この 部屋[へや]は 明るい[あかるい]です。',
              exampleTranslation: 'Bu xona yorug.',
            },
            {
              term: '暗い (くらい)',
              reading: 'くらい',
              meaning: "qorong'u",
              exampleSentence: 'この 部屋[へや]は 暗い[くらい]です。',
              exampleTranslation: "Bu xona qorong'u.",
            },
            {
              term: '背が高い (せがたかい)',
              reading: 'せがたかい',
              meaning: "bo'yi baland, novcha",
              exampleSentence: 'この 部屋[へや]は 背が高い[せがたかい]です。',
              exampleTranslation: "Bu xona bo'yi baland, novcha.",
            },
            {
              term: '頭がいい (あたまがいい)',
              reading: 'あたまがいい',
              meaning: "aqlli, kallasi o'tkir",
              exampleSentence: 'この 部屋[へや]は 頭がいい[あたまがいい]です。',
              exampleTranslation: "Bu xona aqlli, kallasi o'tkir.",
            },
            {
              term: '体 (からだ)',
              reading: 'からだ',
              meaning: 'tana, jussa',
              exampleSentence: 'これは わたしが 買[か]った 体[からだ] です。',
              exampleTranslation: 'Bu men sotib olgan tana, jussa.',
            },
            {
              term: '頭 (あたま)',
              reading: 'あたま',
              meaning: 'bosh',
              exampleSentence: 'これは わたしが 買[か]った 頭[あたま] です。',
              exampleTranslation: 'Bu men sotib olgan bosh.',
            },
            {
              term: '髪 (かみ)',
              reading: 'かみ',
              meaning: 'soch',
              exampleSentence: 'これは わたしが 買[か]った 髪[かみ] です。',
              exampleTranslation: 'Bu men sotib olgan soch.',
            },
            {
              term: '顔 (かお)',
              reading: 'かお',
              meaning: 'yuz',
              exampleSentence: 'これは わたしが 買[か]った 顔[かお] です。',
              exampleTranslation: 'Bu men sotib olgan yuz.',
            },
            {
              term: '目 (め)',
              reading: 'め',
              meaning: "ko'z",
              exampleSentence: 'これは わたしが 買[か]った 目[め] です。',
              exampleTranslation: "Bu men sotib olgan ko'z.",
            },
            {
              term: '耳 (みみ)',
              reading: 'みみ',
              meaning: 'quloq',
              exampleSentence: 'これは わたしが 買[か]った 耳[みみ] です。',
              exampleTranslation: 'Bu men sotib olgan quloq.',
            },
            {
              term: '口 (くち)',
              reading: 'くち',
              meaning: "og'iz",
              exampleSentence: 'これは わたしが 買[か]った 口[くち] です。',
              exampleTranslation: "Bu men sotib olgan og'iz.",
            },
            {
              term: '歯 (は)',
              reading: 'は',
              meaning: 'tish',
              exampleSentence: 'これは わたしが 買[か]った 歯[は] です。',
              exampleTranslation: 'Bu men sotib olgan tish.',
            },
            {
              term: 'おなか',
              reading: 'おなか',
              meaning: 'qorin',
              exampleSentence: 'これは わたしが 買[か]った おなか です。',
              exampleTranslation: 'Bu men sotib olgan qorin.',
            },
            {
              term: '足 (あし)',
              reading: 'あし',
              meaning: 'oyoq',
              exampleSentence: 'これは わたしが 買[か]った 足[あし] です。',
              exampleTranslation: 'Bu men sotib olgan oyoq.',
            },
            {
              term: 'サービス',
              reading: 'サービス',
              meaning: 'xizmat korsatish , servis',
              exampleSentence: 'これは わたしが 買[か]った サービス です。',
              exampleTranslation: 'Bu men sotib olgan xizmat korsatish , servis.',
            },
            {
              term: 'ジョギング',
              reading: 'ジョギング',
              meaning: 'yugurish ( ～を します： yugurmoq)',
              exampleSentence: 'これは わたしが 買[か]った ジョギング です。',
              exampleTranslation: 'Bu men sotib olgan yugurish ( ～を します： yugurmoq).',
            },
            {
              term: 'シャワー',
              reading: 'シャワー',
              meaning: 'dush',
              exampleSentence: 'これは わたしが 買[か]った シャワー です。',
              exampleTranslation: 'Bu men sotib olgan dush.',
            },
            {
              term: '緑 (みどり)',
              reading: 'みどり',
              meaning: 'yashil; yashilliklar',
              exampleSentence: 'これは わたしが 買[か]った 緑[みどり] です。',
              exampleTranslation: 'Bu men sotib olgan yashil; yashilliklar.',
            },
            {
              term: 'お寺 (おてら)',
              reading: 'おてら',
              meaning: 'budda ibodatxonasi',
              exampleSentence: 'これは わたしが 買[か]った [お]寺[[お]てら] です。',
              exampleTranslation: 'Bu men sotib olgan budda ibodatxonasi.',
            },
            {
              term: '神社 (じんじゃ)',
              reading: 'じんじゃ',
              meaning: 'jinjya',
              exampleSentence: 'これは わたしが 買[か]った 神社[じんじゃ] です。',
              exampleTranslation: 'Bu men sotib olgan jinjya.',
            },
            {
              term: '留学生 (りゅうがくせい)',
              reading: 'りゅうがくせい',
              meaning: 'xorijlik talaba',
              exampleSentence: '田中[たなか]さんは 留学生[りゅうがくせい] です。',
              exampleTranslation: 'Tanaka janoblari xorijlik talaba.',
            },
            {
              term: '～番 (～ばん)',
              reading: '～ばん',
              meaning: '~ raqam',
              exampleSentence: '山田[やまだ]ばんは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ raqam samimiy inson.',
            },
            {
              term: 'どうやって',
              reading: 'どうやって',
              meaning: 'qanday qilib',
              exampleSentence: 'これは わたしが 買[か]った どうやって です。',
              exampleTranslation: 'Bu men sotib olgan qanday qilib.',
            },
            {
              term: 'どの～',
              reading: 'どの～',
              meaning: 'qaysi~',
              exampleSentence: '山田[やまだ]どのは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada qaysi~ samimiy inson.',
            },
            {
              term: 'いいえ、まだまだです。',
              reading: 'いいえ、まだまだです。',
              meaning: "Halicha yo'q. / Hali ~ bo'lgani",
              exampleSentence: 'これは わたしが 買[か]った [いいえ、]まだまだです。 です。',
              exampleTranslation: "Bu men sotib olgan halicha yo'q. / hali ~ bo'lgani.",
            },
            {
              term: 'お引ひき出だしですか。',
              reading: 'お引ひき出だしですか。',
              meaning: 'Hisob raqamingizdan pul olmoqchimisiz?',
              exampleSentence: 'これは わたしが 買[か]った お引[ひ]き出[だ]しですか。 です。',
              exampleTranslation: 'Bu men sotib olgan hisob raqamingizdan pul olmoqchimisiz?.',
            },
            {
              term: 'まず',
              reading: 'まず',
              meaning: 'oldin, avvalambor',
              exampleSentence: 'これは わたしが 買[か]った まず です。',
              exampleTranslation: 'Bu men sotib olgan oldin, avvalambor.',
            },
            {
              term: 'キャッシュカード',
              reading: 'キャッシュカード',
              meaning: 'bank kartasi',
              exampleSentence: 'これは わたしが 買[か]った キャッシュカード です。',
              exampleTranslation: 'Bu men sotib olgan bank kartasi.',
            },
            {
              term: '暗証番号',
              reading: '暗証番号',
              meaning: 'shaxsiy maxfiy kod',
              exampleSentence:
                'これは わたしが 買[か]った 暗[あん]証[しょう]番[ばん]号[ごう] です。',
              exampleTranslation: 'Bu men sotib olgan shaxsiy maxfiy kod.',
            },
            {
              term: '次つぎに',
              reading: '次つぎに',
              meaning: "so'ng, keyin",
              exampleSentence: 'これは わたしが 買[か]った 次[つぎ]に です。',
              exampleTranslation: "Bu men sotib olgan so'ng, keyin.",
            },
            {
              term: '金額',
              reading: '金額',
              meaning: 'pul summasi',
              exampleSentence: 'これは わたしが 買[か]った 金額[きんがく] です。',
              exampleTranslation: 'Bu men sotib olgan pul summasi.',
            },
            {
              term: '確認',
              reading: '確認',
              meaning: 'tasdiq ( ～します tasdiqlamoq)',
              exampleSentence: 'これは わたしが 買[か]った 確認[かくにん] です。',
              exampleTranslation: 'Bu men sotib olgan tasdiq ( ～します tasdiqlamoq).',
            },
            {
              term: 'ボタン',
              reading: 'ボタン',
              meaning: 'tugmacha',
              exampleSentence: 'これは わたしが 買[か]った ボタン です。',
              exampleTranslation: 'Bu men sotib olgan tugmacha.',
            },
            {
              term: 'ＪＲ',
              reading: 'ＪＲ',
              meaning: "Yaponiya Temir yo'llari kompaniyasi",
              exampleSentence: 'これは わたしが 買[か]った ＪＲ です。',
              exampleTranslation: "Bu men sotib olgan yaponiya temir yo'llari kompaniyasi.",
            },
            {
              term: 'アジア',
              reading: 'アジア',
              meaning: 'Osiyo',
              exampleSentence: 'これは わたしが 買[か]った アジア です。',
              exampleTranslation: 'Bu men sotib olgan osiyo.',
            },
            {
              term: 'バンドン',
              reading: 'バンドン',
              meaning: 'Bandung (Indoneziyadagi shahar)',
              exampleSentence: 'これは わたしが 買[か]った バンドン です。',
              exampleTranslation: 'Bu men sotib olgan bandung (indoneziyadagi shahar).',
            },
            {
              term: 'ベラクルス',
              reading: 'ベラクルス',
              meaning: 'Verakruz (Meksikadagi shahar)',
              exampleSentence: 'これは わたしが 買[か]った ベラクルス です。',
              exampleTranslation: 'Bu men sotib olgan verakruz (meksikadagi shahar).',
            },
            {
              term: 'フランケン',
              reading: 'フランケン',
              meaning: 'Franken (Olmoniyadagi shahar)',
              exampleSentence: 'これは わたしが 買[か]った フランケン です。',
              exampleTranslation: 'Bu men sotib olgan franken (olmoniyadagi shahar).',
            },
            {
              term: 'ベトナム',
              reading: 'ベトナム',
              meaning: 'Vetnam',
              exampleSentence: 'これは わたしが 買[か]った ベトナム です。',
              exampleTranslation: 'Bu men sotib olgan vetnam.',
            },
            {
              term: 'フエ',
              reading: 'フエ',
              meaning: 'Xve (Vetnamdagi shahar)',
              exampleSentence: 'これは わたしが 買[か]った フエ です。',
              exampleTranslation: 'Bu men sotib olgan xve (vetnamdagi shahar).',
            },
            {
              term: '大学前',
              reading: '大学前',
              meaning: '“Daigakumae”',
              exampleSentence: 'これは わたしが 買[か]った 大学前[だいがくまえ] です。',
              exampleTranslation: 'Bu men sotib olgan “daigakumae”.',
            },
          ],
          grammarRules: [
            {
              pattern: 'FE’Lning  て -shakli 、 [FE’Lning  て -shakli]  、～',
              meaning:
                "Fe'lli so'z birikmalarni bog'lash uchun “FE'Lning て -shakli” qo'llaniladi. Fe'llar bir necha ketma-ket sodir bo'ladigan harakatlarni tasvirlayotganda davriy tartib bilan て -shaklini qo'llagan holda sanab o'tiladi. Bu tuzilmaning zamonini gapning oxirida kelgan fe'lga qarab bilib olamiz.",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '朝[あさ] ジョギングを して、シャワーを 浴[あ] びて、会社[かいしゃ] へ 行[い] きます。',
                  translation: 'Ertalab yugurib, dush qabul qilib, firmaga boraman.',
                },
                {
                  sentence:
                    '神[こう] 戸[べ] へ 行[い] って、映[えい] 画[が] を 見[み] て、お茶[ちゃ] を 飲[の] みました。',
                  translation: "Kobega borib, kino ko'rib, choy ichdim.",
                },
              ],
            },
            {
              pattern: 'い -SIFAT  (~ い )  → ～くて、～',
              meaning:
                "い -sifatlarni sanab o'tayotganda sifatning oxirgi い harfi くて ga o'zgaradi. おおき－い → おおき－くて katta ちいさ－い → ちいさ－くて kichik い－い → ＊よ－くて yaxshi (istisno)",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ミラーさんは 若[わか] くて、元[げん] 気[き] です。',
                  translation: "Janob Miller yosh va sog'lom.",
                },
                {
                  sentence: 'きのうは 天[てん] 気[き] が よくて、暑[あつ] かったです。',
                  translation: 'Kecha havo yaxshi va issiq edi.',
                },
              ],
            },
            {
              pattern: 'OT',
              meaning:
                "で、～ な -SIFAT [ な ] OT yoki な -SIFAT so'z birikmalarini sanab o'tayotganda です - で ga o'zgaradi. [Eslatma1] Bu tuzilma egalari har xil bo'lgan oddiy gaplarni yaxlit bitta gap ko'rinishida bog'lab kelishi ham mumkin. [Eslatma2] Bu tuzilma qarama-qarshi ma'noga ega bo'lgan gaplarni bog'lab kelmaydi. Bunday hollarda zid ma'nodagi gaplarni bog'lashda bog'lovchi が yuklamasidan foydalanamiz. (Ushbu o'quv qo'llamaning 8-dars, 7-bandiga qarang.) × この 部屋[へや] は 狭[せま] くて、きれいです。 ○ この 部屋[へや] は 狭[せま] いですが、きれいです。 Bu xona tor-u, shinam.",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'カリナさんは インドネシア人[じん] で、京[きょう] 都[と] 大[だい] 学[がく] の 留[りゅう] 学[がく] 生[せい] です。',
                  translation:
                    "Karina Indoneziyalik bo'lib, Kioto Universitetining chet ellik talabasidir.",
                },
                {
                  sentence: 'ミラーさんは ハンサムで、親切[しんせつ] です。',
                  translation: 'Janob Miller kelishgan va mehribon.',
                },
                {
                  sentence: '奈良[なら] は 静[しず] かで、きれいな 町[まち] です。',
                  translation: "Nara osuda va go'zal shahar.",
                },
                {
                  sentence: 'カリナさんは 学生[がくせい] で、マリアさんは 主[しゅ] 婦[ふ] です。',
                  translation: 'Karina talaba, Mariya esa uy bekasidir.',
                },
              ],
            },
            {
              pattern: 'FE’L 1 ning  て -shakli  から、 FE’L 2',
              meaning:
                "Bunday turdagi gaplar FE'L 1 ning harakati tugagandan keyin FE'L 2 ning harakati bo'lib o'tganligini yoki bo'lib o'tishini bildirish uchun qo'llaniladi. Bu gapning zamoni gapning oxirida kelgan fe'lga qarab bilib olamiz. 💡 Muhim eslatma: ⑩ -misolda ko'rsatilganidek gapda ega が bilan ajralib turadi.",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '国[くに] へ 帰[かえ] ってから、父[ちち] の 会社[かいしゃ] で 働[はたら] きます。',
                  translation: 'Vatanimga qaytgach otamning firmasida ishlayman.',
                },
                {
                  sentence:
                    'コンサートが 終[お] わってから、レストランで 食[しょく] 事[じ] しました。',
                  translation: "Konsert tugagandan so'ng restoranda ovqatlandim.",
                },
              ],
            },
            {
              pattern: 'OT 1  は  OT 2  が  SIFAT',
              meaning:
                "Bunday turdagi gaplar inson yoki predmetning xususiyatini tasvirlayotganda qo'llaniladi. Gapning mavzusi は yuklamasi bilan ajratiladi. OT 1 gapning mavzusini anglatadi. OT 2 esa sifat tegishli bo'lgan egani anglatadi.",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '大阪[おおさか] は 食[た] べ物[もの] が おいしいです。',
                  translation: 'Osakaning taomlari mazali.',
                },
                {
                  sentence: 'ドイツの フランケンは ワインが 有名[ゆうめい] です。',
                  translation: 'Olmoniyaning Frankeni sharobi bilan mashhur.',
                },
                {
                  sentence: 'マリアさんは 髪[かみ] が 長[なが] いです。',
                  translation: 'Mariya xonimning sochlari uzun.',
                },
              ],
            },
            {
              pattern: 'どうやって',
              meaning:
                "どうやって iborasi biror bir harakatni amalga oshirish yo'llarini aniqlash uchun so'roq gaplarda qo'llaniladi. Unga esa quyida ko'rsatilgan misoldagidek javob beramiz. Universitetgacha qanday borsa bo'ladi?",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '大学[だいがく] まで どう やって 行[い] きますか。',
                  translation:
                    '･･･京[きょう] 都[と] 駅[えき] から１６番[ばん] の バスに 乗[の] って、大学前[だいがくまえ] で 降[お] ります。 …Kioto vokzaldan 16-avtobusga chiqib, Daygakumae bekatida tushiladi.',
                },
              ],
            },
            {
              pattern: 'どの OT',
              meaning:
                "2-darsda otlarni aniqlab keluvchi この , その , あの ko'rsatish olmoshlari haqida bilib oldingiz. Bunga so'roq olmoshi sifatida どの qo'llaniladi. どの yordamida suhbatdoshdan ko'p narsalar ichidan birini tanlashni so'rash mumkin. Janob Santos qaysi kishi?",
              usageNotes:
                'Minna no Nihongo 16-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'サントスさんは どの 人[ひと] ですか。',
                  translation:
                    "･･･あの 背[せ] が 高[たか] くて、髪[かみ] が 黒[くろ] い 人[ひと] です。 …Ana u baland bo'yli, qora sochli kishi.",
                },
              ],
            },
          ],
          culturalNotes:
            "Bir nechta harakatni ketma-ket bajarganda fe'llar Te-shaklida bog'lanadi. Masalan: ertalab yugurib, dush qabul qilib, nonushta qilish.",
        },
      },
      {
        id: 'ja-minna-l16-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[16].practice],
        },
      },
      {
        id: 'ja-minna-l16-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[16].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l17',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u4',
    unitTitle: 'Minna Shokyu 1: 16–20 Darslar (Ketma-ketlik, Nai-shakli va Futsuugo)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 17,
    title: "17-dars: Fe'lning Nai-shakli va Majburiyat",
    description:
      "Minna no Nihongo Shokyu 1: 17-dars: Fe'lning Nai-shakli va Majburiyat. Darsda 42 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l17-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "17-dars: Fe'lning Nai-shakli va Majburiyat",
          subtitle: '第17課：ない形と義務（〜ないでください・なければなりません）',
          explanation:
            "17-dars: Fe'lning Nai-shakli va Majburiyat bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.    FE’Lning  ない -shakli: ない da tugaydigan fe'llarga “FE'Lning ない -shakli” deyiladi.",
            "📌 2. FE’Lning  ない -shakli  ないで ください HARAKATNI BAJARMASLIKKA: CHAQIRISH Bu tuzilma biror narsani qilmaslikni iltimos qilish yoki buyurishda qo'llaniladi.",
            "📌 3. FE’Lning  ない -shakli  なければ なりません HARAKATNI BAJARISH: SHARTLIGI IFODASI Bu tuzilma ish-harakat ijrochisining xohishidan qat'iy nazar harakatni amalga oshirish zarurligini ko'rsatadi.",
            "📌 4.    FE’Lning  ない -shakli  なくても いいです: BAJARMASLIKKA RUXSAT Bu gap tuzilmasi ish-harakatni ko'rsatuvchi fe'lni amalga oshirmasa ham bo'lishini anglatadi.",
            "📌 5.   OT (to`ldiruvchi)  は: 6-darsdan bilib olgan bo'lsangiz, を yuklamasi vositasiz to'ldiruvchini ifodalash uchun xizmat qiladi.",
            "📌 6.   OT (vaqt)  までに FE’L: までに ish-harakatning belgilangan vaqtgacha bajarilishini ko'rsatadi.",
          ],
          vocabulary: [
            {
              term: '覚えます (おぼえます)',
              reading: 'おぼえます',
              meaning: 'yod olmoq',
              exampleSentence: '毎日[まいにち] 覚えます[おぼえます]。',
              exampleTranslation: 'Har kuni yod olmoq.',
            },
            {
              term: '忘れます (わすれます)',
              reading: 'わすれます',
              meaning: 'unutmoq, esdan chiqarmoq',
              exampleSentence: '毎日[まいにち] 忘れます[わすれます]。',
              exampleTranslation: 'Har kuni unutmoq, esdan chiqarmoq.',
            },
            {
              term: 'なくします',
              reading: 'なくします',
              meaning: "yo'qotmoq",
              exampleSentence: '毎日[まいにち] なくします。',
              exampleTranslation: "Har kuni yo'qotmoq.",
            },
            {
              term: '出します (だします)',
              reading: 'だします',
              meaning: 'topshirmoq',
              exampleSentence: '毎日[まいにち] 出します[だします]。',
              exampleTranslation: 'Har kuni topshirmoq.',
            },
            {
              term: 'レポートを～',
              reading: 'レポートを～',
              meaning: '(hisobot topshirmoq)',
              exampleSentence: '山田[やまだ][レポートを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (hisobot topshirmoq) samimiy inson.',
            },
            {
              term: '払います (はらいます)',
              reading: 'はらいます',
              meaning: "to'lamoq",
              exampleSentence: '毎日[まいにち] 払います[はらいます]。',
              exampleTranslation: "Har kuni to'lamoq.",
            },
            {
              term: '返します (かえします)',
              reading: 'かえします',
              meaning: 'qaytarib bermoq',
              exampleSentence: '毎日[まいにち] 返します[かえします]。',
              exampleTranslation: 'Har kuni qaytarib bermoq.',
            },
            {
              term: '出かけます (でかけます)',
              reading: 'でかけます',
              meaning: 'chiqib ketmoq',
              exampleSentence: '毎日[まいにち] 出かけます[でかけます]。',
              exampleTranslation: 'Har kuni chiqib ketmoq.',
            },
            {
              term: '脱ぎます (ぬぎます)',
              reading: 'ぬぎます',
              meaning: 'yechmoq (kiyimni ~)',
              exampleSentence: '毎日[まいにち] 脱ぎます[ぬぎます]。',
              exampleTranslation: 'Har kuni yechmoq (kiyimni ~).',
            },
            {
              term: '持って行きます (もっていきます)',
              reading: 'もっていきます',
              meaning: 'olib bormoq',
              exampleSentence: '毎日[まいにち] 持って行きます[もっていきます]。',
              exampleTranslation: 'Har kuni olib bormoq.',
            },
            {
              term: '持って来ます (もってきます)',
              reading: 'もってきます',
              meaning: 'olib kelmoq',
              exampleSentence: '毎日[まいにち] 持って来ます[もってきます]。',
              exampleTranslation: 'Har kuni olib kelmoq.',
            },
            {
              term: '心配します (しんぱいします)',
              reading: 'しんぱいします',
              meaning: 'xavotir olmoq',
              exampleSentence: '毎日[まいにち] 心配します[しんぱいします]。',
              exampleTranslation: 'Har kuni xavotir olmoq.',
            },
            {
              term: '残業します (ざんぎょうします)',
              reading: 'ざんぎょうします',
              meaning: 'belgilangan ish vaqti tugagandan keyin qolib ishlamoq',
              exampleSentence: '毎日[まいにち] 残業します[ざんぎょうします]。',
              exampleTranslation: 'Har kuni belgilangan ish vaqti tugagandan keyin qolib ishlamoq.',
            },
            {
              term: '出張します (しゅっちょうします)',
              reading: 'しゅっちょうします',
              meaning: 'xizmat safariga ketmoq',
              exampleSentence: '毎日[まいにち] 出張します[しゅっちょうします]。',
              exampleTranslation: 'Har kuni xizmat safariga ketmoq.',
            },
            {
              term: '飲みます (のみます)',
              reading: 'のみます',
              meaning: 'ichmoq',
              exampleSentence: '毎日[まいにち] 水[みず]を 2リットル 飲[の]みます。',
              exampleTranslation: 'Har kuni 2 litr suv ichaman.',
            },
            {
              term: '薬を～ (くすりを～)',
              reading: 'くすりを～',
              meaning: '(dori ichmoq)',
              exampleSentence: '山田[やまだ][くすりを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (dori ichmoq) samimiy inson.',
            },
            {
              term: '入ります (はいります)',
              reading: 'はいります',
              meaning: 'kirmoq',
              exampleSentence: '毎日[まいにち] 入ります[はいります]。',
              exampleTranslation: 'Har kuni kirmoq.',
            },
            {
              term: 'お風呂に～ (おふろに～)',
              reading: 'おふろに～',
              meaning: '(hammomga kirmoq)',
              exampleSentence: '山田[やまだ][おふろに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (hammomga kirmoq) samimiy inson.',
            },
            {
              term: '大切な (たいせつな)',
              reading: 'たいせつな',
              meaning: 'muhim',
              exampleSentence: 'これは わたしが 買[か]った 大切[な][たいせつ[な]] です。',
              exampleTranslation: 'Bu men sotib olgan muhim.',
            },
            {
              term: '大丈夫な (だいじょうぶな)',
              reading: 'だいじょうぶな',
              meaning: "hammasi joyida, xavotirga o'rin yo'q",
              exampleSentence: 'これは わたしが 買[か]った 大丈夫[な][だいじょうぶ[な]] です。',
              exampleTranslation: "Bu men sotib olgan hammasi joyida, xavotirga o'rin yo'q.",
            },
            {
              term: '危ない (あぶない)',
              reading: 'あぶない',
              meaning: 'xavfli',
              exampleSentence: 'この 部屋[へや]は 危ない[あぶない]です。',
              exampleTranslation: 'Bu xona xavfli.',
            },
            {
              term: '問題 (もんだい)',
              reading: 'もんだい',
              meaning: 'masala; muammo',
              exampleSentence: 'この 部屋[へや]は 問題[もんだい]です。',
              exampleTranslation: 'Bu xona masala; muammo.',
            },
            {
              term: '答え (こたえ)',
              reading: 'こたえ',
              meaning: 'javob',
              exampleSentence: 'これは わたしが 買[か]った 答え[こたえ] です。',
              exampleTranslation: 'Bu men sotib olgan javob.',
            },
            {
              term: '禁煙 (きんえん)',
              reading: 'きんえん',
              meaning: 'chekish taqiqlanadi',
              exampleSentence: 'これは わたしが 買[か]った 禁煙[きんえん] です。',
              exampleTranslation: 'Bu men sotib olgan chekish taqiqlanadi.',
            },
            {
              term: '健康保険証 (けんこうほけんしょう)',
              reading: 'けんこうほけんしょう',
              meaning: "tibbiy sug'urta guvohnomasi",
              exampleSentence: '毎日[まいにち] [健康]保険証[[けんこう]ほけんしょう]。',
              exampleTranslation: "Har kuni tibbiy sug'urta guvohnomasi.",
            },
            {
              term: '風邪 (かぜ)',
              reading: 'かぜ',
              meaning: 'shamollash',
              exampleSentence: 'これは わたしが 買[か]った 風邪[かぜ] です。',
              exampleTranslation: 'Bu men sotib olgan shamollash.',
            },
            {
              term: '熱 (ねつ)',
              reading: 'ねつ',
              meaning: 'isitma',
              exampleSentence: 'これは わたしが 買[か]った 熱[ねつ] です。',
              exampleTranslation: 'Bu men sotib olgan isitma.',
            },
            {
              term: '病気 (びょうき)',
              reading: 'びょうき',
              meaning: 'kasal, betob; kasallik',
              exampleSentence: 'これは わたしが 買[か]った 病気[びょうき] です。',
              exampleTranslation: 'Bu men sotib olgan kasal, betob; kasallik.',
            },
            {
              term: '薬 (くすり)',
              reading: 'くすり',
              meaning: 'dori',
              exampleSentence: 'これは わたしが 買[か]った 薬[くすり] です。',
              exampleTranslation: 'Bu men sotib olgan dori.',
            },
            {
              term: 'お風呂 (おふろ)',
              reading: 'おふろ',
              meaning: 'hammom',
              exampleSentence: 'これは わたしが 買[か]った [お]風呂[[お]ふろ] です。',
              exampleTranslation: 'Bu men sotib olgan hammom.',
            },
            {
              term: '上着 (うわぎ)',
              reading: 'うわぎ',
              meaning: 'korjoma, kostyum',
              exampleSentence: 'これは わたしが 買[か]った 上着[うわぎ] です。',
              exampleTranslation: 'Bu men sotib olgan korjoma, kostyum.',
            },
            {
              term: '下着 (したぎ)',
              reading: 'したぎ',
              meaning: 'ichki kiyim',
              exampleSentence: 'これは わたしが 買[か]った 下着[したぎ] です。',
              exampleTranslation: 'Bu men sotib olgan ichki kiyim.',
            },
            {
              term: '先生 (せんせい)',
              reading: 'せんせい',
              meaning: 'doktor (shifokorga murojaat etish)',
              exampleSentence: '木村[きむら]先生は 日本語[にほんご]の 先生です。',
              exampleTranslation: "Kimura ustoz yapon tili o'qituvchisi.",
            },
            {
              term: '２、３日 (２、３にち)',
              reading: '２、３にち',
              meaning: 'ikki-uch kun',
              exampleSentence: 'これは わたしが 買[か]った ２、３日[２、３にち] です。',
              exampleTranslation: 'Bu men sotib olgan ikki-uch kun.',
            },
            {
              term: '２、３～',
              reading: '２、３～',
              meaning: 'ikki-uch (narsa, buyum)',
              exampleSentence: '山田[やまだ]２、３は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ikki-uch (narsa, buyum) samimiy inson.',
            },
            {
              term: '～までに',
              reading: '～までに',
              meaning: '~gacha',
              exampleSentence: '山田[やまだ]までには 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~gacha samimiy inson.',
            },
            {
              term: 'ですから',
              reading: 'ですから',
              meaning: 'shu sababli',
              exampleSentence: 'これは わたしが 買[か]った ですから です。',
              exampleTranslation: 'Bu men sotib olgan shu sababli.',
            },
            {
              term: 'どうしましたか。',
              reading: 'どうしましたか。',
              meaning: "Nima bo'ldi.",
              exampleSentence: 'これは わたしが 買[か]った どうしましたか。 です。',
              exampleTranslation: "Bu men sotib olgan nima bo'ldi..",
            },
            {
              term: '～が痛いたいです。',
              reading: '～が痛いたいです。',
              meaning: "~im og'riyapti",
              exampleSentence: '山田[やまだ][が]痛[いた]いです。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada ~im og'riyapti samimiy inson.",
            },
            {
              term: 'のど',
              reading: 'のど',
              meaning: 'tomoq',
              exampleSentence: 'これは わたしが 買[か]った のど です。',
              exampleTranslation: 'Bu men sotib olgan tomoq.',
            },
            {
              term: 'お大だい事じに。',
              reading: 'お大だい事じに。',
              meaning: "Sog'ayib keting.",
              exampleSentence: 'これは わたしが 買[か]った お大[だい]事[じ]に。 です。',
              exampleTranslation: "Bu men sotib olgan sog'ayib keting..",
            },
          ],
          grammarRules: [
            {
              pattern: 'FE’Lning  ない -shakli',
              meaning:
                "ない da tugaydigan fe'llarga “FE'Lning ない -shakli” deyiladi. かかない so'zining o'zagi bo'lgan かか , かきます felining ない -shaklidir. Quyida ない - shaklining qanday vujudga kelishi keltirilgan. (Asosiy o'quv darsligiing 17- darsi. 140-betdagi 練習[れんしゅう] A1ga qarang. ) 1) Ⅰ guruh fe'llari Bu guruh fe'llarida ます -shakli har doim い qatorda tugaydi. い Qatorni あ qatorga o'zgartirish orqali “FE'Lning ない -shakli” tuziladi. かいます , あいま す fe'llari bundan istisnodir. (Bu “FE'Llarning ない -shakli”da あ ning o'rniga わ qo'yiladi.) (Asosiy o'quv darsligining 2-betidagi “ かなと拍[はく] ”ga qarang) かき - ます → かか - ない いそぎ - ます → いそが - ない よみ - ます → よま - ない あそび - ます → あそば - ない とり - ます → とら - ない まち - ます → また - ない すい - ます → すわ - ない はなし - ます → はなさ - ない 2) Ⅱ guruh fe'llari Bu guruhda “FE'Lning ない -shakli” “FE'Lning ます -shakli” bilan mos tushadi. たべ - ます → たべ - ない み - ます → み - ない 3) Ⅲ guruh fe'llari します fe'li “FE'Lning ない -shakli”ga o'zgarishida “FE'Lning ます -shakli”ga o'xshab bir xil qo'llaniladi. きます こ ( ない )ga o'zgaradi. べんきょうし - ます → べんきょうし - ない し - ます → し - ない き - ます → こ - ない",
              usageNotes:
                'Minna no Nihongo 17-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'FE’Lning  ない -shakli',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'FE’Lning  ない -shakli  ないで ください HARAKATNI BAJARMASLIKKA',
              meaning:
                "CHAQIRISH Bu tuzilma biror narsani qilmaslikni iltimos qilish yoki buyurishda qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 17-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは 元[げん] 気[き] ですから、心配[しんぱい] しないで ください。',
                  translation: "Men sog'-salomatman, xavotir olmang.",
                },
                {
                  sentence: 'ここで 写真[しゃしん] を 撮[と] らないで ください。',
                  translation: 'Bu yerda suratga olmang.',
                },
              ],
            },
            {
              pattern: 'FE’Lning  ない -shakli  なければ なりません HARAKATNI BAJARISH',
              meaning:
                "SHARTLIGI IFODASI Bu tuzilma ish-harakat ijrochisining xohishidan qat'iy nazar harakatni amalga oshirish zarurligini ko'rsatadi. Keyingi misolda tuzilma inkor ma'noni anglatib kelmayotganligiga e'tibor bering.",
              usageNotes:
                'Minna no Nihongo 17-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '薬[くすり] を 飲[の] まなければ なりません。',
                  translation: 'HARAKATNI',
                },
              ],
            },
            {
              pattern: 'FE’Lning  ない -shakli  なくても いいです',
              meaning:
                "BAJARMASLIKKA RUXSAT Bu gap tuzilmasi ish-harakatni ko'rsatuvchi fe'lni amalga oshirmasa ham bo'lishini anglatadi.",
              usageNotes:
                'Minna no Nihongo 17-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'あした 来[こ] なくても いいです。',
                  translation: "Ertaga kelmasangiz ham bo'ladi.",
                },
              ],
            },
            {
              pattern: 'OT (to`ldiruvchi)  は',
              meaning:
                "6-darsdan bilib olgan bo'lsangiz, を yuklamasi vositasiz to'ldiruvchini ifodalash uchun xizmat qiladi. を ni は ga o'zgartirish yo'li bilan to'ldiruvchi gapning mavzusiga aylanadi. ここに 荷[に] 物[もつ] を 置[お] かないで ください。 Bu yerga yukingizni qo'ymang. 会社[かいしゃ] の 食[しょく] 堂[どう] で 昼[ひる] ごはんを 食[た] べます。 Korxona oshxonasida tushlik qilaman.",
              usageNotes:
                'Minna no Nihongo 17-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '荷[に] 物[もつ] は ここに 置[お] かないで ください。',
                  translation: "Yukingizni bu yerga qo'ymang.",
                },
                {
                  sentence:
                    '昼[ひる] ごはんは 会社[かいしゃ] の 食[しょく] 堂[どう] で 食[た] べます。',
                  translation: 'Tushlikni korxona oshxonasida qilaman.',
                },
              ],
            },
            {
              pattern: 'OT (vaqt)  までに FE’L',
              meaning:
                "までに ish-harakatning belgilangan vaqtgacha bajarilishini ko'rsatadi. 💡 Muhim eslatma: までに bilan まで o'rtasidagi faqqa e'tibor bering. ５時[じ] まで 働[はたら] きます。 Soat 5 gacha ishlayman. (4- dars)",
              usageNotes:
                'Minna no Nihongo 17-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '会[かい] 議[ぎ] は ５時[じ] までに 終[お] わります。',
                  translation: "Majlis soat 5 gacha (shungacha bo'lgan vaqtning ichida) tugaydi.",
                },
                {
                  sentence:
                    '土[ど] 曜[よう] 日[び] までに 本[ほん] を 返[かえ] さなければ なりません。',
                  translation:
                    "Shanbagacha (shungacha bo'lgan vaqtning ichida) kitobni qaytarishim kerak.",
                },
              ],
            },
          ],
          culturalNotes:
            "Kasal bo'lganda yoki shifokor qabulida alomatlarni aytib, dorilarni o'z vaqtida ichish lozim. 'Ichish shart' deganda '~なければなりません' ishlatiladi.",
        },
      },
      {
        id: 'ja-minna-l17-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[17].practice],
        },
      },
      {
        id: 'ja-minna-l17-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[17].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l18',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u4',
    unitTitle: 'Minna Shokyu 1: 16–20 Darslar (Ketma-ketlik, Nai-shakli va Futsuugo)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 18,
    title: "18-dars: Lug'at shakli (Jishokei) va Qobiliyat/Qiziqish",
    description:
      "Minna no Nihongo Shokyu 1: 18-dars: Lug'at shakli (Jishokei) va Qobiliyat/Qiziqish. Darsda 30 ta yangi so'z, audio talaffuzli Furigana misollar va 6 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l18-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "18-dars: Lug'at shakli (Jishokei) va Qobiliyat/Qiziqish",
          subtitle: '第18課：辞書形と可能・趣味（ことができます・まえに）',
          explanation:
            "18-dars: Lug'at shakli (Jishokei) va Qobiliyat/Qiziqish bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.   FE’Lning lug`atdagi shakli: “Fe'lning lug'atdagi shakli” fe'lning asosiy shakli hisoblanadi.",
            "📌 2.  FE’Lning lug`atdagi shakli  こと ができます BAJARA OLISH: IBORASI Ish-harakatni bajarish imkoniyati va qobiliyatini できます fe'li anglatadi.",
            "📌 3.   OT  Mening sevimli: わたしの 趣[しゅ] 味[み] です FE'Lning lug'atdagi shakli こと mashg'ulotim.",
            "📌 4.  OT  の まえに、 FE’L 2 BOSHQASIDAN OLDIN: SON (muddat) KELISHI 1) FE'L Bunday turdagi gaplarda FE'L 2 da ko'rsatilgan harakat FE'L 1 dagi harakatdan oldin amalga oshishini ko'rsatadi.",
            "📌 5.   なかなか: なかなか inkor gapda “ oson emas ”, “ hech ” degan ma'nolarni anglatadi.",
            "📌 6.   ぜひ: ぜひ ravishi 「ほしいです」 , “FE'Lning ます -shakli たいです ” , “FE'Lning て -shakli ください ”ga o'xshagan iboralar qo'llanilgan gapda ishonchni yoki tilakni kuchaytirib keladi.",
          ],
          vocabulary: [
            {
              term: 'できます',
              reading: 'できます',
              meaning: 'qila olmoq, bajara olmoq',
              exampleSentence: '毎日[まいにち] できます。',
              exampleTranslation: 'Har kuni qila olmoq, bajara olmoq.',
            },
            {
              term: '洗います (あらいます)',
              reading: 'あらいます',
              meaning: 'yuvmoq',
              exampleSentence: '毎日[まいにち] 洗います[あらいます]。',
              exampleTranslation: 'Har kuni yuvmoq.',
            },
            {
              term: '弾きます (ひきます)',
              reading: 'ひきます',
              meaning: 'chalmoq (musiqa asbobini~)',
              exampleSentence: '毎日[まいにち] 弾きます[ひきます]。',
              exampleTranslation: 'Har kuni chalmoq (musiqa asbobini~).',
            },
            {
              term: '歌います (うたいます)',
              reading: 'うたいます',
              meaning: "kuylamoq, qo'shiq aytmoq",
              exampleSentence: '毎日[まいにち] 歌います[うたいます]。',
              exampleTranslation: "Har kuni kuylamoq, qo'shiq aytmoq.",
            },
            {
              term: '集めます (あつめます)',
              reading: 'あつめます',
              meaning: "yig'moq, to'plamoq",
              exampleSentence: '毎日[まいにち] 集めます[あつめます]。',
              exampleTranslation: "Har kuni yig'moq, to'plamoq.",
            },
            {
              term: '捨てます (すてます)',
              reading: 'すてます',
              meaning: 'tashlamoq',
              exampleSentence: '毎日[まいにち] 捨てます[すてます]。',
              exampleTranslation: 'Har kuni tashlamoq.',
            },
            {
              term: '換えます (かえます)',
              reading: 'かえます',
              meaning: "almashtirmoq, o'zgartirmoq",
              exampleSentence: '毎日[まいにち] 換えます[かえます]。',
              exampleTranslation: "Har kuni almashtirmoq, o'zgartirmoq.",
            },
            {
              term: '運転します (うんてんします)',
              reading: 'うんてんします',
              meaning: 'haydamoq (transport ~)',
              exampleSentence: '毎日[まいにち] 運転します[うんてんします]。',
              exampleTranslation: 'Har kuni haydamoq (transport ~).',
            },
            {
              term: '予約します (よやくします)',
              reading: 'よやくします',
              meaning: 'buyurtma bermoq',
              exampleSentence: '毎日[まいにち] 予約します[よやくします]。',
              exampleTranslation: 'Har kuni buyurtma bermoq.',
            },
            {
              term: '見学します (けんがくします)',
              reading: 'けんがくします',
              meaning: "kuzatmoq, ko'rmoq (o'rganish maqsadida)",
              exampleSentence: '毎日[まいにち] 見学します[けんがくします]。',
              exampleTranslation: "Har kuni kuzatmoq, ko'rmoq (o'rganish maqsadida).",
            },
            {
              term: 'ピアノ',
              reading: 'ピアノ',
              meaning: 'pianino',
              exampleSentence: 'これは わたしが 買[か]った ピアノ です。',
              exampleTranslation: 'Bu men sotib olgan pianino.',
            },
            {
              term: '～メートル',
              reading: '～メートル',
              meaning: '~ metr',
              exampleSentence: '山田[やまだ]メートルは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ metr samimiy inson.',
            },
            {
              term: '国際～ (こくさい～)',
              reading: 'こくさい～',
              meaning: 'xalqaro ~',
              exampleSentence: 'この 部屋[へや]は 国際[こくさい]です。',
              exampleTranslation: 'Bu xona xalqaro ~.',
            },
            {
              term: '現金 (げんきん)',
              reading: 'げんきん',
              meaning: 'naqd pul',
              exampleSentence: 'これは わたしが 買[か]った 現金[げんきん] です。',
              exampleTranslation: 'Bu men sotib olgan naqd pul.',
            },
            {
              term: '趣味 (しゅみ)',
              reading: 'しゅみ',
              meaning: 'qiziqish',
              exampleSentence: 'これは わたしが 買[か]った 趣味[しゅみ] です。',
              exampleTranslation: 'Bu men sotib olgan qiziqish.',
            },
            {
              term: '日記 (にっき)',
              reading: 'にっき',
              meaning: 'kundalik daftar',
              exampleSentence: 'これは わたしが 買[か]った 日記[にっき] です。',
              exampleTranslation: 'Bu men sotib olgan kundalik daftar.',
            },
            {
              term: '［お］祈り (［お］いのり)',
              reading: '［お］いのり',
              meaning: 'ibodat ( ～を します ibodat qilmoq)',
              exampleSentence: 'これは わたしが 買[か]った ［お］祈り[［お］いのり] です。',
              exampleTranslation: 'Bu men sotib olgan ibodat ( ～を します ibodat qilmoq).',
            },
            {
              term: '課長 (かちょう)',
              reading: 'かちょう',
              meaning: "bo'lim boshlig'i",
              exampleSentence: '毎日[まいにち] 課長[かちょう]。',
              exampleTranslation: "Har kuni bo'lim boshlig'i.",
            },
            {
              term: '部長 (ぶちょう)',
              reading: 'ぶちょう',
              meaning: "departament boshlig'i",
              exampleSentence: '毎日[まいにち] 部長[ぶちょう]。',
              exampleTranslation: "Har kuni departament boshlig'i.",
            },
            {
              term: '社長 (しゃちょう)',
              reading: 'しゃちょう',
              meaning: "korxona boshlig'i",
              exampleSentence: '毎日[まいにち] 社長[しゃちょう]。',
              exampleTranslation: "Har kuni korxona boshlig'i.",
            },
            {
              term: '動物',
              reading: 'どうぶつ',
              meaning: 'jonivor, hayvon',
              exampleSentence: 'これは わたしが 買[か]った 動物[どうぶつ] です。',
              exampleTranslation: 'Bu men sotib olgan jonivor, hayvon.',
            },
            {
              term: '馬',
              reading: 'うま',
              meaning: 'ot',
              exampleSentence: 'これは わたしが 買[か]った 馬[うま] です。',
              exampleTranslation: 'Bu men sotib olgan ot.',
            },
            {
              term: 'へえ',
              reading: 'へえ',
              meaning: 'A?!',
              exampleSentence: 'これは わたしが 買[か]った へえ です。',
              exampleTranslation: 'Bu men sotib olgan a?!.',
            },
            {
              term: 'それはおもしろいですね。',
              reading: 'それはおもしろいですね。',
              meaning: 'Qiziq-a?',
              exampleSentence: 'これは わたしが 買[か]った それはおもしろいですね。 です。',
              exampleTranslation: 'Bu men sotib olgan qiziq-a?.',
            },
            {
              term: 'なかなか',
              reading: 'なかなか',
              meaning: "sira, hech (inkor gapda qo'llaniladi)",
              exampleSentence: 'これは わたしが 買[か]った なかなか です。',
              exampleTranslation: "Bu men sotib olgan sira, hech (inkor gapda qo'llaniladi).",
            },
            {
              term: '牧場',
              reading: 'ぼくじょう',
              meaning: 'ferma',
              exampleSentence: 'これは わたしが 買[か]った 牧[ぼく]場[じょう] です。',
              exampleTranslation: 'Bu men sotib olgan ferma.',
            },
            {
              term: 'ほんとうですか。',
              reading: 'ほんとうですか。',
              meaning: 'Rostdanmi?',
              exampleSentence: 'これは わたしが 買[か]った ほんとうですか。 です。',
              exampleTranslation: 'Bu men sotib olgan rostdanmi?.',
            },
            {
              term: 'ぜひ',
              reading: 'ぜひ',
              meaning: 'albatta',
              exampleSentence: 'これは わたしが 買[か]った ぜひ です。',
              exampleTranslation: 'Bu men sotib olgan albatta.',
            },
            {
              term: 'ビートルズ',
              reading: 'ビートルズ',
              meaning: '“Bitlz” – mashhur ingliz musiqa guruhi',
              exampleSentence: 'これは わたしが 買[か]った ビートルズ です。',
              exampleTranslation: 'Bu men sotib olgan “bitlz” – mashhur ingliz musiqa guruhi.',
            },
          ],
          grammarRules: [
            {
              pattern: 'FE’Lning lug`atdagi shakli',
              meaning:
                "“Fe'lning lug'atdagi shakli” fe'lning asosiy shakli hisoblanadi. Lug'atlarda fe'lning shunday shakli ko'rsatilib, u fe'lning boshlang'ich shakli hisoblanadi. “FE'Lning lug'atdagi shakli” quyidagicha yasaladi. (O'quv qo'llanma, 18-dars, 148-bet, 練習[れんしゅう] A1ga qarang) 1) Ⅰ guruh: Bu guruh fe'llarida ます -shakli har doim い qatorda tugaydi. FE'Lning lug'atdagi shakli い qatorini う qatoriga o'zgartirishi bilan tuziladi. (O'quv qo'llanma, 20-bet, “ かなと拍[はく] ” ga qarang) 2) Ⅱ guruh る→ます shaklidagi fe'lga qo'shiladi 3) Ⅲ guruh します→する ga va きます→くる ga o'zgaradi OT HARAKATNI",
              usageNotes:
                'Minna no Nihongo 18-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'FE’Lning lug`atdagi shakli',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'FE’Lning lug`atdagi shakli  こと ができます BAJARA OLISH',
              meaning:
                "IBORASI Ish-harakatni bajarish imkoniyati va qobiliyatini できます fe'li anglatadi. OT yoki “FE'Lning lug'atdagi shakli こと ” ning が dan oldin kelishi ayni mana shu harakat (modal shakl)ni ifodalash uchun xizmat qiladi. 1) OT Bu tuzilma odatda harakatni bildiruvchi otlar bilan birga qo'llaniladi. Masalan, mashina haydash, chang'i uchish, raqs va h.z. Shu bilan birga はなす fe'liga bog'liq ot- 日本語 yoki ひく fe'liga bog'liq ot- ピアノ so'zlarini ishlatish mumkin. 2) FE'L Imkoniyat, qobiliyat iboralarini ifodalash uchun “FE'Lning lug'atdagi shakli”ga こと qo'shiladi va ular shu bilan tayyor so'z birikmasiga qo'shiladi.",
              usageNotes:
                'Minna no Nihongo 18-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ミラーさんは 日本語[にほんご] が できます。',
                  translation: 'Janob Miller yapon tilida gaplasha oladi.',
                },
                {
                  sentence:
                    '雪[ゆき] が たくさん 降[ふ] りましたから、ことしは スキーが できます。',
                  translation: "Ko'p qor yoqqanligi sababli, bu yil chang'i ucha olamiz.",
                },
                {
                  sentence: 'ミラーさんは 漢[かん] 字[じ] を 読[よ] むことが できます。',
                  translation: "Janob Miller iyerogliflarni o'qiy oladi.",
                },
                {
                  sentence: 'カードで 払[はら] うことが できます。',
                  translation: "Kartochka yordamida to'lasa bo'ladi.",
                },
              ],
            },
            {
              pattern: 'OT  Mening sevimli',
              meaning: "わたしの 趣[しゅ] 味[み] です FE'Lning lug'atdagi shakli こと mashg'ulotim",
              usageNotes:
                'Minna no Nihongo 18-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'va  ⑥ -misollarda ko`rsatilganidek, FE’Lning lug`atdagi shakli  こと  OTga nisbatan',
                  translation: "mashg'ulotning turkumi haqida aniqroq ta'rifni beradi.",
                },
                {
                  sentence: 'わたしの 趣[しゅ] 味[み] は 音楽[おんがく] です。',
                  translation: "Mening sevimli mashg'ulotim-musiqa.",
                },
                {
                  sentence: 'わたしの 趣[しゅ] 味[み] は 音楽[おんがく] を 聞[き] くことです。',
                  translation: 'tinglash.',
                },
              ],
            },
            {
              pattern: 'OT  の まえに、 FE’L 2 BOSHQASIDAN OLDIN',
              meaning:
                "SON (muddat) KELISHI 1) FE'L Bunday turdagi gaplarda FE'L 2 da ko'rsatilgan harakat FE'L 1 dagi harakatdan oldin amalga oshishini ko'rsatadi. Garchi FE'L 2 o'tgan yoki kelasi zamonda kelsa ham, FE'L 1 har doim lug'atdagi shaklda qolaveradi. 2) OT OTlar bilan まえに qo'llanilganda ular orasiga の yuklamasi keladi. まえに bilan biror-bir harakatni bildiradigan yoki nazarda tutadigan otlar qo'llaniladi. 3) SON (muddat) まえに sonlar (vaqt muddati) bilan の yuklamasining qo'llanilmaydi.",
              usageNotes:
                'Minna no Nihongo 18-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '日[に] 本[ほん] へ 来[く] る まえに、日[に] 本[ほん] 語[ご] を 勉[べん] 強[きょう] しました。',
                  translation: "Yaponiyaga kelishimdan oldin yapon tilini o'rgandim.",
                },
                {
                  sentence: '寝[ね] る まえに、本[ほん] を 読[よ] みます。',
                  translation: "Uxlashdan oldin, kitob o'qiyman.",
                },
                {
                  sentence: '食[しょく] 事[じ] の まえに、手[て] を洗[あら] います。',
                  translation: "Men ovqatdan oldin qo'lni yuvaman.",
                },
                {
                  sentence: '田[た] 中[なか] さんは１時[じ] 間[かん] まえに、出[で] かけました。',
                  translation: 'Janob Tanaka bir soat oldin chiqib ketdi.',
                },
              ],
            },
            {
              pattern: 'なかなか',
              meaning:
                "なかなか inkor gapda “ oson emas ”, “ hech ” degan ma'nolarni anglatadi. 💡 Muhim eslatma: ⑪ -misolda ko'rsatilgan にほんでは so'zidagi は diqqatni gap ketayotgan joyga qaratish uchun qo'llanilgan.",
              usageNotes:
                'Minna no Nihongo 18-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '日[に] 本[ほん] では なかなか 馬[うま] を 見[み] ることが できません。',
                  translation: 'Yaponiyada osonlikcha otlarni uchrata olmaysan.',
                },
              ],
            },
            {
              pattern: 'ぜひ',
              meaning:
                "ぜひ ravishi 「ほしいです」 , “FE'Lning ます -shakli たいです ” , “FE'Lning て -shakli ください ”ga o'xshagan iboralar qo'llanilgan gapda ishonchni yoki tilakni kuchaytirib keladi. Bu ravish ibora ma'nosini kuchaytirib keladi.",
              usageNotes:
                'Minna no Nihongo 18-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ぜひ 北海道[ほっかいどう] へ 行[い] きたいです。',
                  translation: 'Jon deb Hokkaydoga borardim.',
                },
                {
                  sentence: 'ぜひ 遊[あそ] びに 来[き] て ください。',
                  translation: 'Albatta mehmonga keling.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada xobbi (shumi) va qobiliyat haqida suhbatlashish do'st orttirishning eng qulay yo'lidir ('〜が できます' - qila olaman).",
        },
      },
      {
        id: 'ja-minna-l18-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[18].practice],
        },
      },
      {
        id: 'ja-minna-l18-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[18].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l19',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u4',
    unitTitle: 'Minna Shokyu 1: 16–20 Darslar (Ketma-ketlik, Nai-shakli va Futsuugo)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 19,
    title: "19-dars: Fe'lning Ta-shakli, Tajriba va O'zgarish",
    description:
      "Minna no Nihongo Shokyu 1: 19-dars: Fe'lning Ta-shakli, Tajriba va O'zgarish. Darsda 34 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l19-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "19-dars: Fe'lning Ta-shakli, Tajriba va O'zgarish",
          subtitle: '第19課：た形・経験と変化（たことがあります・たり・くなります）',
          explanation:
            "19-dars: Fe'lning Ta-shakli, Tajriba va O'zgarish bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.     FE’Lning  た -shakli: Bu darsda “FE'Lning た -shakli” xususiyatlari haqida bilib olasizlar.",
            "📌 2. FE’Lning  た -shakli  ことが あります TAJRIBADA BO`LGANLIGI: IFODASI Bunday turdagi gaplar biror bir harakatni tasvirlashda tajribasi borligini bildirish uchun qo'llaniladi.",
            "📌 3.   FE’Lning た -shakli り、 FE’Lning  た -shakli り します: goh FE'L…goh FE'L va x.",
            "📌 4.   い -SIFAT  ( ～い )  → ～く: HOLAT YOKI SHAROITNING な -SIFAT ［な］ → に なります O'ZGARISHI IFODASI OT に Holat yoki shartlarning o'zgarishini ifodalash uchun なります xizmat qiladi.",
            '📌 5.  そう ですね: Suhbatdoshning fikrini tushunganligini yoki u bilan hamfikr ekanligini bildirish uchun そうですね xizmat qiladi.',
          ],
          vocabulary: [
            {
              term: '登ります (のぼります)',
              reading: 'のぼります',
              meaning: "chiqmoq, ko'tarilmoq",
              exampleSentence: '毎日[まいにち] 登ります[のぼります]。',
              exampleTranslation: "Har kuni chiqmoq, ko'tarilmoq.",
            },
            {
              term: '山に～ (やまに～)',
              reading: 'やまに～',
              meaning: '(toqqa chiqmoq)',
              exampleSentence: '山田[やまだ][やまに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (toqqa chiqmoq) samimiy inson.',
            },
            {
              term: '泊まります (とまります)',
              reading: 'とまります',
              meaning: 'tunamoq',
              exampleSentence: '毎日[まいにち] 泊まります[とまります]。',
              exampleTranslation: 'Har kuni tunamoq.',
            },
            {
              term: 'ホテルに～',
              reading: 'ホテルに～',
              meaning: '(mehmonxonada tunamoq)',
              exampleSentence: '山田[やまだ][ホテルに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (mehmonxonada tunamoq) samimiy inson.',
            },
            {
              term: '掃除します (そうじします)',
              reading: 'そうじします',
              meaning: 'tozalamoq',
              exampleSentence: '毎日[まいにち] 掃除します[そうじします]。',
              exampleTranslation: 'Har kuni tozalamoq.',
            },
            {
              term: '洗濯します (せんたくします)',
              reading: 'せんたくします',
              meaning: 'kir yuvmoq',
              exampleSentence: '毎日[まいにち] 洗濯します[せんたくします]。',
              exampleTranslation: 'Har kuni kir yuvmoq.',
            },
            {
              term: '練習します (れんしゅうします)',
              reading: 'れんしゅうします',
              meaning: 'mashq qilmoq',
              exampleSentence: '毎日[まいにち] 練習します[れんしゅうします]。',
              exampleTranslation: 'Har kuni mashq qilmoq.',
            },
            {
              term: 'なります',
              reading: 'なります',
              meaning: "bo'lmoq",
              exampleSentence: '毎日[まいにち] なります。',
              exampleTranslation: "Har kuni bo'lmoq.",
            },
            {
              term: '眠い (ねむい)',
              reading: 'ねむい',
              meaning: 'uyqisiramoq',
              exampleSentence: 'この 部屋[へや]は 眠い[ねむい]です。',
              exampleTranslation: 'Bu xona uyqisiramoq.',
            },
            {
              term: '強い (つよい)',
              reading: 'つよい',
              meaning: 'kuchli',
              exampleSentence: 'この 部屋[へや]は 強い[つよい]です。',
              exampleTranslation: 'Bu xona kuchli.',
            },
            {
              term: '弱い (よわい)',
              reading: 'よわい',
              meaning: 'kuchsiz',
              exampleSentence: 'この 部屋[へや]は 弱い[よわい]です。',
              exampleTranslation: 'Bu xona kuchsiz.',
            },
            {
              term: '調子がいい (ちょうしがいい)',
              reading: 'ちょうしがいい',
              meaning: "o'zini yaxshi his qilmoq; soz",
              exampleSentence: 'これは わたしが 買[か]った 調子がいい[ちょうしがいい] です。',
              exampleTranslation: "Bu men sotib olgan o'zini yaxshi his qilmoq; soz.",
            },
            {
              term: '調子が悪い (ちょうしがわるい)',
              reading: 'ちょうしがわるい',
              meaning: "o'zini yomon his qilmoq; nosoz",
              exampleSentence: 'これは わたしが 買[か]った 調子が悪い[ちょうしがわるい] です。',
              exampleTranslation: "Bu men sotib olgan o'zini yomon his qilmoq; nosoz.",
            },
            {
              term: '調子 (ちょうし)',
              reading: 'ちょうし',
              meaning: 'kayfiyat, holat',
              exampleSentence: 'これは わたしが 買[か]った 調子[ちょうし] です。',
              exampleTranslation: 'Bu men sotib olgan kayfiyat, holat.',
            },
            {
              term: 'ゴルフ',
              reading: 'ゴルフ',
              meaning: "golf ( ～を します : golf o'ynamoq)",
              exampleSentence: 'これは わたしが 買[か]った ゴルフ です。',
              exampleTranslation: "Bu men sotib olgan golf ( ～を します : golf o'ynamoq).",
            },
            {
              term: '相撲 (すもう)',
              reading: 'すもう',
              meaning: 'sumo kurashi',
              exampleSentence: '毎日[まいにち] 相撲[すもう]。',
              exampleTranslation: 'Har kuni sumo kurashi.',
            },
            {
              term: 'パチンコ',
              reading: 'パチンコ',
              meaning: "o'yin avtomati, pachinko",
              exampleSentence: 'これは わたしが 買[か]った パチンコ です。',
              exampleTranslation: "Bu men sotib olgan o'yin avtomati, pachinko.",
            },
            {
              term: 'お茶 (おちゃ)',
              reading: 'おちゃ',
              meaning: 'choy',
              exampleSentence: 'これは わたしが 買[か]った お茶[おちゃ] です。',
              exampleTranslation: 'Bu men sotib olgan choy.',
            },
            {
              term: '日 (ひ)',
              reading: 'ひ',
              meaning: 'kun',
              exampleSentence: 'これは わたしが 買[か]った 日[ひ] です。',
              exampleTranslation: 'Bu men sotib olgan kun.',
            },
            {
              term: '一度 (いちど)',
              reading: 'いちど',
              meaning: 'bir marta',
              exampleSentence: 'これは わたしが 買[か]った 一度[いちど] です。',
              exampleTranslation: 'Bu men sotib olgan bir marta.',
            },
            {
              term: '一度も (いちども)',
              reading: 'いちども',
              meaning: 'bir marta ham, hech, sira',
              exampleSentence: 'これは わたしが 買[か]った 一度も[いちども] です。',
              exampleTranslation: 'Bu men sotib olgan bir marta ham, hech, sira.',
            },
            {
              term: 'だんだん',
              reading: 'だんだん',
              meaning: 'asta-sekin, tobora',
              exampleSentence: 'これは わたしが 買[か]った だんだん です。',
              exampleTranslation: 'Bu men sotib olgan asta-sekin, tobora.',
            },
            {
              term: 'もうすぐ',
              reading: 'もうすぐ',
              meaning: 'tez orada',
              exampleSentence: 'これは わたしが 買[か]った もうすぐ です。',
              exampleTranslation: 'Bu men sotib olgan tez orada.',
            },
            {
              term: 'おかげさまで',
              reading: 'おかげさまで',
              meaning: 'sharofatingiz bilan',
              exampleSentence: 'これは わたしが 買[か]った おかげさまで です。',
              exampleTranslation: 'Bu men sotib olgan sharofatingiz bilan.',
            },
            {
              term: '乾杯',
              reading: 'かんぱい',
              meaning: 'Qani, oldik (qadah)',
              exampleSentence: 'これは わたしが 買[か]った 乾杯[かんぱい] です。',
              exampleTranslation: 'Bu men sotib olgan qani, oldik (qadah).',
            },
            {
              term: '実じつは',
              reading: '実じつは',
              meaning: "ochig'i, rostini aytsam",
              exampleSentence: 'これは わたしが 買[か]った 実[じつ]は です。',
              exampleTranslation: "Bu men sotib olgan ochig'i, rostini aytsam.",
            },
            {
              term: 'ダイエット',
              reading: 'ダイエット',
              meaning: 'parhez ( ～を します : parhez qilmoq)',
              exampleSentence: 'これは わたしが 買[か]った ダイエット です。',
              exampleTranslation: 'Bu men sotib olgan parhez ( ～を します : parhez qilmoq).',
            },
            {
              term: '何回なんかいも',
              reading: '何回なんかいも',
              meaning: 'bir necha marotaba',
              exampleSentence: 'これは わたしが 買[か]った 何回[なんかい]も です。',
              exampleTranslation: 'Bu men sotib olgan bir necha marotaba.',
            },
            {
              term: 'しかし',
              reading: 'しかし',
              meaning: 'lekin',
              exampleSentence: 'これは わたしが 買[か]った しかし です。',
              exampleTranslation: 'Bu men sotib olgan lekin.',
            },
            {
              term: '無理むり［な］',
              reading: '無理むり［な］',
              meaning: "imkoni yo'q (narsa), ilojsiz (narsa)",
              exampleSentence: 'これは わたしが 買[か]った 無理[むり]［な］ です。',
              exampleTranslation: "Bu men sotib olgan imkoni yo'q (narsa), ilojsiz (narsa).",
            },
            {
              term: '体からだにいい',
              reading: '体からだにいい',
              meaning: "sog'liqqa foyda",
              exampleSentence: 'これは わたしが 買[か]った 体[からだ]にいい です。',
              exampleTranslation: "Bu men sotib olgan sog'liqqa foyda.",
            },
            {
              term: 'ケーキ',
              reading: 'ケーキ',
              meaning: 'tort, pirojniy',
              exampleSentence: 'これは わたしが 買[か]った ケーキ です。',
              exampleTranslation: 'Bu men sotib olgan tort, pirojniy.',
            },
            {
              term: '葛かつ飾しか北ほく斎さい',
              reading: '葛かつ飾しか北ほく斎さい',
              meaning: 'Katsushika Hokusay',
              exampleSentence: 'これは わたしが 買[か]った 葛[かつ]飾[しか]北[ほく]斎[さい] です。',
              exampleTranslation: 'Bu men sotib olgan katsushika hokusay.',
            },
          ],
          grammarRules: [
            {
              pattern: 'FE’Lning  た -shakli',
              meaning:
                "Bu darsda “FE'Lning た -shakli” xususiyatlari haqida bilib olasizlar. “FE'Lning た - shakli”ning tuzilish qoidasi quyidagicha: (Asosiy o'quv qo'llanmaning, 19- darsi, 156-bet, 練習[れんしゅう] A 1ga qarang.) “FE'Lning て -shakli”dagi て、で qo'shimchalarini た、だ ga o'zgartirish yo'li bilan た -shakli tuziladi. て -shakl た -shakl I guruh かいて → かいた のんで → のんだ II guruh たべて → たべた III guruh きて → きた して → した BIROR HARAKATNING",
              usageNotes:
                'Minna no Nihongo 19-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'FE’Lning  た -shakli',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'FE’Lning  た -shakli  ことが あります TAJRIBADA BO`LGANLIGI',
              meaning:
                "IFODASI Bunday turdagi gaplar biror bir harakatni tasvirlashda tajribasi borligini bildirish uchun qo'llaniladi. 9-darsdan bilib olganingizdek, bunday gap tuzilishi “ わたしは OT があります ” ko'rinishi holati bilan o'zaro bog'liq. Tajriba “FE'Lning た -shakli こと ” so'z birikmasi orqali tuziladi. ifodalangan gaplarning farqiga e'tibor bering.",
              usageNotes:
                'Minna no Nihongo 19-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '馬[うま] に 乗[の] った ことが あります。',
                  translation:
                    "Bu turdagi gaplar bilan o'tgan zamonda shunchaki bo'lib o'tgan voqea",
                },
                {
                  sentence: '去年[きょねん] 北海道[ほっかいどう] で 馬[うま] に 乗[の] りました。',
                  translation: "Men o'tgan yili Xokkaydoda otga mindim.",
                },
              ],
            },
            {
              pattern: 'FE’Lning た -shakli り、 FE’Lning  た -shakli り します',
              meaning:
                "goh FE'L…goh FE'L va x. z 10-darsda siz ko'p narsalar ichidan bir nechtasini ko'rsatish usulini bilib oldingiz ( ～や～ [ など ]). Bu darsda sizlar ayrim harakatlarni sanab o'tishni o'rganib olasiz. Bu ko'rinishdagi gaplarning zamoni oxirida kelgan fe'lga qarab aniqlanadi. 💡 Muhim eslatma: 16-darsdan bilib olgan “ て -shakli”dagi tuzilma ⑤ bilan bu turdagi gaplarning farqlariga ahamiyat bering. yakshanba kuni nima ish qilganligi, shuningdek so'zlovchi yana boshqa harakatlarni ham qilganligi nazarda tutilib, misol uchun uyg'onish, nonushta, uyquga yotmoq kabi harakatlar tushib qolishi nazarda tutilayapti.",
              usageNotes:
                'Minna no Nihongo 19-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '日[にち] 曜[よう] 日[び] は テニスを したり、映[えい] 画[が] を 見[み] たり します。',
                  translation: "Men yakshanba kunlari tennis o'ynayman, kino ko'raman.",
                },
                {
                  sentence:
                    '日[にち] 曜[よう] 日[び] は テニスを したり、映[えい] 画[が] を 見[み] たり しました。',
                  translation: "Men o'tgan yakshanba kuni tennis o'ynadim, kino ko'rdim.",
                },
                {
                  sentence:
                    '日[にち] 曜[よう] 日[び] は テニスを して、映[えい] 画[が] を 見[み] ました。',
                  translation: "Men o'tgan yakshanba kuni tennis o'ynab, kino ko'rdim.",
                },
                {
                  sentence:
                    '-misolda harakat ketma-ketligini aniq ko`rsatilgan.  ④ -misolda harakatlar',
                  translation:
                    "orasida hech qanday vaqt bilan bog'liqlik yo'q. Bu harakatlar so'zlovchining",
                },
              ],
            },
            {
              pattern: 'い -SIFAT  ( ～い )  → ～く',
              meaning:
                "HOLAT YOKI SHAROITNING な -SIFAT ［な］ → に なります O'ZGARISHI IFODASI OT に Holat yoki shartlarning o'zgarishini ifodalash uchun なります xizmat qiladi.",
              usageNotes:
                'Minna no Nihongo 19-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '寒[さむ] い →  寒[さむ] く なります sovuq tushmoq',
                  translation: 'Namunaviy gap.',
                },
                {
                  sentence: '元[げん] 気[き]  [ な ]  →  元[げん] 気[き] に なります sog`aymoq',
                  translation: 'Namunaviy gap.',
                },
                {
                  sentence: '２５歳[さい] →  ２５歳[さい] に なります 25 yoshga to`lmoq',
                  translation: 'Namunaviy gap.',
                },
              ],
            },
            {
              pattern: 'そう ですね',
              meaning:
                "Suhbatdoshning fikrini tushunganligini yoki u bilan hamfikr ekanligini bildirish uchun そうですね xizmat qiladi. そうですか ham bir xil ma'noni anglatib, gap ohangini ( ° ) tushirgan holda qo'llaniladi (ushbu o'quv qo'llanmaning 2- dars, 6-bandiga qarang). Lekin, suhbatdoshning oldin xabari bo'lmagan ma'lumot bilan hayronligini ko'rsatadi. そうですね esa so'zlovchi, suhbatdoshi hamfikr yoki bildirmoqchi bo'lgan xabardan voqif bo'lgan narsa haqida gapirayotib, tushunganligi yoki hamdardligini ifodalashda qo'llaniladi.",
              usageNotes:
                'Minna no Nihongo 19-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '寒[さむ] く なりましたね。',
                  translation: '･･･そう ですね。 … Ha, nimasini aytasiz.',
                },
              ],
            },
          ],
          culturalNotes:
            "Fuji tog'iga chiqish yoki issiq buloqqa (onsen) borish yaponlar hayotidagi mashhur tajribalardandir. Buni ifodalashda '〜たことがあります' qo'llaniladi.",
        },
      },
      {
        id: 'ja-minna-l19-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[19].practice],
        },
      },
      {
        id: 'ja-minna-l19-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[19].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l20',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u4',
    unitTitle: 'Minna Shokyu 1: 16–20 Darslar (Ketma-ketlik, Nai-shakli va Futsuugo)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 20,
    title: "20-dars: Oddiy uslub (Futsuugo) va Do'stona muloqot",
    description:
      "Minna no Nihongo Shokyu 1: 20-dars: Oddiy uslub (Futsuugo) va Do'stona muloqot. Darsda 31 ta yangi so'z, audio talaffuzli Furigana misollar va 3 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l20-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: "20-dars: Oddiy uslub (Futsuugo) va Do'stona muloqot",
          subtitle: '第20課：普通形と会話体（丁寧体から普通体へ）',
          explanation:
            "20-dars: Oddiy uslub (Futsuugo) va Do'stona muloqot bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  Oddiy va hurmat shaklidagi ko`rinish: Yapon tilida gapning 2 xil ko'rinishi bor: hurmat shakl va oddiy shakl.",
            "📌 2.  Gapning hurmat shakli va oddiy shakllarining qo`llanilishi.: 1) Hurmat shaklini har doim, har qanday holatda hamma tinglovchiga nisbatan qo'llash mumkin.",
            "📌 3.  Og`zaki so`zlashuvda gapning oddiy shakli.: 1) Qoidaga ko'ra oddiy shakldagi so'roq gaplarda か so'roq yuklamasi qo'llanilmay, so'roq gapning oxirida ohangni ko'tarish bilan ifodalaniladi.",
          ],
          vocabulary: [
            {
              term: '要ります (いります)',
              reading: 'いります',
              meaning: "kerak bo'lmoq, zarur bo'lmoq",
              exampleSentence: '毎日[まいにち] 要ります[いります]。',
              exampleTranslation: "Har kuni kerak bo'lmoq, zarur bo'lmoq.",
            },
            {
              term: 'ビザが～',
              reading: 'ビザが～',
              meaning: '(viza kerak)',
              exampleSentence: '山田[やまだ][ビザが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (viza kerak) samimiy inson.',
            },
            {
              term: '調べます (しらべます)',
              reading: 'しらべます',
              meaning: "tekshirmoq, qarab ko'rmoq",
              exampleSentence: '毎日[まいにち] 調べます[しらべます]。',
              exampleTranslation: "Har kuni tekshirmoq, qarab ko'rmoq.",
            },
            {
              term: '直します (なおします)',
              reading: 'なおします',
              meaning: "to'g'rilamoq, tuzatmoq",
              exampleSentence: '毎日[まいにち] 直します[なおします]。',
              exampleTranslation: "Har kuni to'g'rilamoq, tuzatmoq.",
            },
            {
              term: '修理します (しゅうりします)',
              reading: 'しゅうりします',
              meaning: "tuzatmoq, ta'mirlamoq",
              exampleSentence: '毎日[まいにち] 修理します[しゅうりします]。',
              exampleTranslation: "Har kuni tuzatmoq, ta'mirlamoq.",
            },
            {
              term: '電話します (でんわします)',
              reading: 'でんわします',
              meaning: "qo'ng'iroq qilmoq, telefon qilmoq",
              exampleSentence: '毎日[まいにち] 電話します[でんわします]。',
              exampleTranslation: "Har kuni qo'ng'iroq qilmoq, telefon qilmoq.",
            },
            {
              term: '僕 (ぼく)',
              reading: 'ぼく',
              meaning: 'men',
              exampleSentence: 'これは わたしが 買[か]った 僕[ぼく] です。',
              exampleTranslation: 'Bu men sotib olgan men.',
            },
            {
              term: '君 (きみ)',
              reading: 'きみ',
              meaning: 'sen',
              exampleSentence: 'これは わたしが 買[か]った 君[きみ] です。',
              exampleTranslation: 'Bu men sotib olgan sen.',
            },
            {
              term: '～君 (～くん)',
              reading: '～くん',
              meaning:
                "( ～さん ning og'zaki shakli, odatda yoshi kichik yoki mavqei yuqori bo'lmagan erkak kishilarning ismiga qo'shib qo'llaniladi)",
              exampleSentence: '山田[やまだ]くんは サッカーが 好[す]きです。',
              exampleTranslation: "Yamada-kun futbolni yaxshi ko'radi.",
            },
            {
              term: 'うん',
              reading: 'うん',
              meaning: "ha, mayli, xo'p",
              exampleSentence: 'これは わたしが 買[か]った うん です。',
              exampleTranslation: "Bu men sotib olgan ha, mayli, xo'p.",
            },
            {
              term: 'ううん',
              reading: 'ううん',
              meaning: "yo'q ( いいえ ning og'zaki shakli)",
              exampleSentence: 'これは わたしが 買[か]った ううん です。',
              exampleTranslation: "Bu men sotib olgan yo'q ( いいえ ning og'zaki shakli).",
            },
            {
              term: 'サラリーマン',
              reading: 'サラリーマン',
              meaning: 'korxona xodimi',
              exampleSentence: 'これは わたしが 買[か]った サラリーマン です。',
              exampleTranslation: 'Bu men sotib olgan korxona xodimi.',
            },
            {
              term: 'ことば',
              reading: 'ことば',
              meaning: "so'z, til",
              exampleSentence: 'これは わたしが 買[か]った ことば です。',
              exampleTranslation: "Bu men sotib olgan so'z, til.",
            },
            {
              term: '物価 (ぶっか)',
              reading: 'ぶっか',
              meaning: 'narx-navo',
              exampleSentence: 'これは わたしが 買[か]った 物価[ぶっか] です。',
              exampleTranslation: 'Bu men sotib olgan narx-navo.',
            },
            {
              term: '着物 (きもの)',
              reading: 'きもの',
              meaning: 'kimono (yapon milliy kiyimi)',
              exampleSentence: 'これは わたしが 買[か]った 着物[きもの] です。',
              exampleTranslation: 'Bu men sotib olgan kimono (yapon milliy kiyimi).',
            },
            {
              term: 'ビザ',
              reading: 'ビザ',
              meaning: 'viza',
              exampleSentence: 'これは わたしが 買[か]った ビザ です。',
              exampleTranslation: 'Bu men sotib olgan viza.',
            },
            {
              term: '初め (はじめ)',
              reading: 'はじめ',
              meaning: 'boshi(da)',
              exampleSentence: 'これは わたしが 買[か]った 初め[はじめ] です。',
              exampleTranslation: 'Bu men sotib olgan boshi(da).',
            },
            {
              term: '終わり (おわり)',
              reading: 'おわり',
              meaning: 'oxiri(da)',
              exampleSentence: 'これは わたしが 買[か]った 終わり[おわり] です。',
              exampleTranslation: 'Bu men sotib olgan oxiri(da).',
            },
            {
              term: 'こっち',
              reading: 'こっち',
              meaning: 'bu yer, bu yoqqa',
              exampleSentence: 'これは わたしが 買[か]った こっち です。',
              exampleTranslation: 'Bu men sotib olgan bu yer, bu yoqqa.',
            },
            {
              term: 'そっち',
              reading: 'そっち',
              meaning: "o'sha yer, o'sha yoqqa",
              exampleSentence: 'これは わたしが 買[か]った そっち です。',
              exampleTranslation: "Bu men sotib olgan o'sha yer, o'sha yoqqa.",
            },
            {
              term: 'あっち',
              reading: 'あっち',
              meaning: 'u yer, u yoqqa',
              exampleSentence: 'これは わたしが 買[か]った あっち です。',
              exampleTranslation: 'Bu men sotib olgan u yer, u yoqqa.',
            },
            {
              term: 'どっち',
              reading: 'どっち',
              meaning: 'qayer, qayoqqa',
              exampleSentence: 'これは わたしが 買[か]った どっち です。',
              exampleTranslation: 'Bu men sotib olgan qayer, qayoqqa.',
            },
            {
              term: 'この間 (このあいだ)',
              reading: 'このあいだ',
              meaning: "yaqinda (vaqtga nisbatan), o'tgan safar",
              exampleSentence: 'これは わたしが 買[か]った この間[このあいだ] です。',
              exampleTranslation: "Bu men sotib olgan yaqinda (vaqtga nisbatan), o'tgan safar.",
            },
            {
              term: 'みんなで',
              reading: 'みんなで',
              meaning: 'hammamiz birga',
              exampleSentence: 'これは わたしが 買[か]った みんなで です。',
              exampleTranslation: 'Bu men sotib olgan hammamiz birga.',
            },
            {
              term: '～けど',
              reading: '～けど',
              meaning: '~u / yu, ~. ; ~, lekin, ~.',
              exampleSentence: '山田[やまだ]けどは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~u / yu, ~. ; ~, lekin, ~. samimiy inson.',
            },
            {
              term: '国くにへ帰かえるの？',
              reading: '国くにへ帰かえるの？',
              meaning: 'Vataningizga qaytasizmi?',
              exampleSentence: 'これは わたしが 買[か]った 国[くに]へ帰[かえ]るの？ です。',
              exampleTranslation: 'Bu men sotib olgan vataningizga qaytasizmi?.',
            },
            {
              term: 'どうするの？',
              reading: 'どうするの？',
              meaning: 'Endi nima qilasiz?',
              exampleSentence: 'これは わたしが 買[か]った どうするの？ です。',
              exampleTranslation: 'Bu men sotib olgan endi nima qilasiz?.',
            },
            {
              term: 'どうしようかな。',
              reading: 'どうしようかな。',
              meaning: 'Nima qilsak ekan-a?',
              exampleSentence: 'これは わたしが 買[か]った どうしようかな。 です。',
              exampleTranslation: 'Bu men sotib olgan nima qilsak ekan-a?.',
            },
            {
              term: 'よかったら',
              reading: 'よかったら',
              meaning: "Mumkin bo'lsa~. Lozim topsangiz~.",
              exampleSentence: 'これは わたしが 買[か]った よかったら です。',
              exampleTranslation: "Bu men sotib olgan mumkin bo'lsa~. lozim topsangiz~..",
            },
            {
              term: 'いろいろ',
              reading: 'いろいろ',
              meaning: 'turli, har xil',
              exampleSentence: 'これは わたしが 買[か]った いろいろ です。',
              exampleTranslation: 'Bu men sotib olgan turli, har xil.',
            },
          ],
          grammarRules: [
            {
              pattern: 'Oddiy va hurmat shaklidagi ko`rinish',
              meaning:
                "Yapon tilida gapning 2 xil ko'rinishi bor: hurmat shakl va oddiy shakl. Gapning hurmat shaklidagi ko'rinishi Gapning oddiy shaklidagi ko'rinishi (So'zlashuv shakli) あした 東[とう] 京[きょう] へ 行[い] きます。 あした 東[とう] 京[きょう] へ 行[い] く。 Men ertaga Tokioga boraman Men ertaga Tokioga boraman. 毎日[まいにち] 忙[いそが] しいです。 毎日[まいにち] 忙[いそが] しい。 Har kuni bandman. Har kuni bandman. 相[す] 撲[もう] が 好[す] きです。 相[す] 撲[もう] が 好[す] きだ。 Men sumo kurashini yoqtiraman. Men sumo kurashini yoqtiraman. 富[ふ] 士[じ] 山[さん] に 登[のぼ] りたいです。 富[ふ] 士[じ] 山[さん] に 登[のぼ] りたい。 Men Fuji tog'iga chiqmoqchiman. Men Fuji tog'iga chiqmoqchiman. ドイツへ 行[い] った ことが ありません。 ドイツへ 行[い] った ことが ない。 Men Olmoniyaga bormaganman. Men Olmoniyaga bormaganman. です yoki ます ga tugaydigan kesimlarni hurmat shakli, oddiy ko'rinishda tugaydigan kesimlarga oddiy shakl deyiladi. (Asosiy o'quv qo'llanmaning 20- dars, 166-bet, 練習[れんしゅう] A1ga qarang.)",
              usageNotes:
                'Minna no Nihongo 20-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'Oddiy va hurmat shaklidagi ko`rinish',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'Gapning hurmat shakli va oddiy shakllarining qo`llanilishi.',
              meaning:
                "1) Hurmat shaklini har doim, har qanday holatda hamma tinglovchiga nisbatan qo'llash mumkin. Gapning hurmat shakli odatda do'stlik aloqalarida bo'lmagan o'zidan yoshi katta insonlarga nisbatan qo'llaniladi. Bundan tashqari bu shaklni birinchi bor uchrashib turgan shaxs, mavqe jihatdan yuqori bo'lgan shaxs, yoki uncha tanish bo'lmagan tengdosh shaxsga nisbatan ham qo'llash mumkin. Hurmat shaklini yoshi, mavqe jihatdan kichik bo'lgan shaxs hamda uncha tanish bo'lmagan shaxsga nisbatan ham qo'llaniladi. Gapning oddiy shakli yaqin do'stlarga, hamkasblarga, oila a'zolariga nisbatan qo'llaniladi. Suhbatdoshning yoshiga va aloqaning qandayligiga qarab hurmat shaklini qo'llashga e'tibor bering. Oddiy shakl noto'g'ri qo'llanilsa, so'zlarning ma'nosi o'zgarib, qo'pol chiqishiga olib keladi. Shuning uchun agar suhbatdoshning tutgan o'rnini bilish iloji bo'lmasa, hurmat shaklini qo'llagan ma'qul. 2) Qoidaga ko'ra gapning oddiy shakli yozuvda qo'llaniladi. Gazeta (ro'znoma), kitob, asar va kundaliklar oddiy shaklda yoziladi. Xatlar odatda hurmat shaklida yoziladi.",
              usageNotes:
                'Minna no Nihongo 20-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'Gapning hurmat shakli va oddiy shakllarining qo`llanilishi.',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'Og`zaki so`zlashuvda gapning oddiy shakli.',
              meaning:
                "1) Qoidaga ko'ra oddiy shakldagi so'roq gaplarda か so'roq yuklamasi qo'llanilmay, so'roq gapning oxirida ohangni ko'tarish bilan ifodalaniladi. Masalan: のむ ( ® ) ･･･うん、飲[の] む。 ( ° ) … Ha, ichaman. 2) です ning oddiy shakli だ bo'lib, ular so'roq gapda ot va な -sifat bilan qo'llanilmaydi. Tasdiq gaplarning oxirida だ qo'llanilsa, juda ham qo'pol eshitilishi mumkin. だ ni tushirib qoldirish ham mumkin yoki unga boshqa yumshoqroq ifoda beradigan yuklamani qo'llash mumkin. Ayollarning nutqida だ juda ham kam uchraydi. (erkak, ayol) ･･･うん、暇[ひま] ／暇[ひま] だ／暇[ひま] だよ。 … Ha, bo'shman. (erkak) ･･･うん、暇[ひま] ／暇[ひま] よ。 … Ha bo'shman. (ayol) ･･･ううん、暇[ひま] じゃ ない。 … Yo'q, bo'sh emasman (ayol, erkak) 3) Oddiy shaklda ayrim yuklamalar tushirib qoldirilishi mumkin, agar gapning mazmuni gap jumlasidan ma'lum bo'lsa. Lekin oddiy shakldagi suhbat chog'ida で , に , から , まで , と va boshqa shunga o'xshash yuklamalarni tushirib qoldirish gapning xunuk chiqishiga olib kelib, ifoda etmoqchi bo'lgan ma'noning chiqmay qolish ehtimoli bor. 4) Oddiy shaklda yana “FE'Lning て -shakli いる ”dagi い ni ham tushirib qoldirish hollari ham bor. 5) けど ham が yuklamasiga o'xshagan holatda gaplarni bog'lash uchun qo'llaniladi (8-dars, 7-grammatika va 14-dars, 7-grammatikaga qarang). Bu ommaga yoyilgan so'zlashuv uslubi. ･･･うん、辛[から] いけど、おいしい。 … Ha, achchiq-u, lekin mazali. Menda sumo kurashiga 2 ta chipta bor, birga bomaysanmi?",
              usageNotes:
                'Minna no Nihongo 20-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'コーヒーを 飲[の] む？  ( ® )',
                  translation: 'Qahva ichasanmi?',
                },
                {
                  sentence: '今晩[こんばん] 暇[ひま] ？',
                  translation: "Sen bugun kechasi bo'shmisan?",
                },
                {
                  sentence: 'ごはん  [ を ]  食[た] べる？',
                  translation: 'Ovqat yeysanmi?',
                },
                {
                  sentence: 'あした 京[きょう] 都[と]  [ へ ]  行[い] かない？',
                  translation: 'Ertaga men bilan Kiotoga bormaysanmi?',
                },
                {
                  sentence: 'この りんご  [ は ]  おいしいね。',
                  translation: 'Bu olma shirin-a?',
                },
                {
                  sentence: 'そこに はさみ  [ が ]  ある？',
                  translation: 'U yerda qaychi bormi?',
                },
                {
                  sentence: '辞[じ] 書[しょ] 、持[も] って  [ い ]  る？',
                  translation:
                    "Senda lug'at bormi? … うん、持[も] って [ い ] る。 … Ha, bor. … ううん、持[も] って [ い ] ない。 … Yo'q.",
                },
                {
                  sentence: 'その カレーライス  [ は ]  おいしい？',
                  translation: "O'sha guruchli “karerays” mazalimi?",
                },
                {
                  sentence:
                    '相[す] 撲[もう] の チケット  [ が ]  あるけど いっしょに 行[い] かない？',
                  translation: '･･･いいね。 … Bajonudil.',
                },
              ],
            },
          ],
          culturalNotes:
            "Tengdoshlar, oila a'zolari va yaqin do'stlar bilan suhbatlashganda rasmiy 'Desu/Masu' o'rniga oddiy uslub (Futsuugo / 普通形) ishlatiladi.",
        },
      },
      {
        id: 'ja-minna-l20-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[20].practice],
        },
      },
      {
        id: 'ja-minna-l20-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[20].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l21',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u5',
    unitTitle: 'Minna Shokyu 1: 21–25 Darslar (Fikr, Aniqlovchi gaplar va Shart)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 21,
    title: '21-dars: Shaxsiy fikr va Iqtibos keltirish',
    description:
      "Minna no Nihongo Shokyu 1: 21-dars: Shaxsiy fikr va Iqtibos keltirish. Darsda 40 ta yangi so'z, audio talaffuzli Furigana misollar va 7 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l21-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '21-dars: Shaxsiy fikr va Iqtibos keltirish',
          subtitle: '第21課：意見と引用（〜と思います・〜と言いました）',
          explanation:
            "21-dars: Shaxsiy fikr va Iqtibos keltirish bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1. Oddiy shakl と 思[おも] います O`Z FIKRI VA TAXMININI IFODA ETISH: Bildiriladigan fikr yoki xabar 思[おも] います fe'li yordamida と bog'lovchi yuklamasi orqali ifodalanadi.",
            "📌 2.  “GAP”: と 言[い] います SHAXSNING FIKR VA MULOHAZASINI Oddiy shakl YETKAZISH 言[い] います so'zi bilan izohlanadigan gap と yordamida bog'lanadi.",
            "📌 3. FE’L  oddiy shakl  TASDIQNI TALAB QILIB: い -SIFAT KELADIGAN でしょう？ な -SIFAT oddiy shakl OYDINLASHTIRUVCHI OT ～だ SAVOL Agar so'zlovchi berayotgan savolning mazmuni haqida o'z suhbatdoshini xabardor va rozi ekanligini taxmin qilayotgan bo'lsa, u o'z savolining でしょう qismini ohangini yuqoriga ko'targan holda aytib, uni o'z fikriga qo'shilishga chorlaydi.",
            "📌 4.   OT 1  (o`rin-joy) で OT 2  が あります: Agar gapda konsert, bayram, tabiiy ofat va shu kabi ish-harakatni anglatadigan OT 2 (voqea-hodisalar) kelsa, ushbu gapdagi あります so'zi “ yuz bermoq ”, “ bo'lib o'tmoq ” kabi ma'nolarni anglatadi.",
            "📌 5.  OT (vaziyat) で: Agar biror-bir voqea-hodisa davomida harakat bajarilgan bo'lsa, ushbu voqea- hodisani ifodalovchi OTdan keyin で o'rin-payt kelishigi qo'shimchasi qo'yiladi.",
            "📌 6.   OT  でも FE’L: So'zlovchi bir turdagi predmetlar orasidan aynan bir narsani ajratib, uni suhbatdoshiga taklif qilayotgan paytlarda でも dan foydalaniladi.",
          ],
          vocabulary: [
            {
              term: '思います (おもいます)',
              reading: 'おもいます',
              meaning: "o'ylamoq, fikrlamoq",
              exampleSentence: '毎日[まいにち] 思います[おもいます]。',
              exampleTranslation: "Har kuni o'ylamoq, fikrlamoq.",
            },
            {
              term: '言います (いいます)',
              reading: 'いいます',
              meaning: 'demoq, aytmoq',
              exampleSentence: '毎日[まいにち] 言います[いいます]。',
              exampleTranslation: 'Har kuni demoq, aytmoq.',
            },
            {
              term: '足ります (たります)',
              reading: 'たります',
              meaning: "yetmoq, yetarli bo'lmoq (ulush)",
              exampleSentence: '毎日[まいにち] 足ります[たります]。',
              exampleTranslation: "Har kuni yetmoq, yetarli bo'lmoq (ulush).",
            },
            {
              term: '勝ちます (かちます)',
              reading: 'かちます',
              meaning: "g'olib bo'lmoq, yutmoq",
              exampleSentence: '毎日[まいにち] 勝ちます[かちます]。',
              exampleTranslation: "Har kuni g'olib bo'lmoq, yutmoq.",
            },
            {
              term: '負けます (まけます)',
              reading: 'まけます',
              meaning: "mag'lub bo'lmoq, yutqazmoq",
              exampleSentence: '毎日[まいにち] 負けます[まけます]。',
              exampleTranslation: "Har kuni mag'lub bo'lmoq, yutqazmoq.",
            },
            {
              term: 'あります',
              reading: 'あります',
              meaning: "bor bo'lmoq",
              exampleSentence: '毎日[まいにち] あります。',
              exampleTranslation: "Har kuni bor bo'lmoq.",
            },
            {
              term: 'お祭りが～ (おまつりが～)',
              reading: 'おまつりが～',
              meaning: "(bayram bor, bayram bo'lmoq)",
              exampleSentence: '山田[やまだ][おまつりが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (bayram bor, bayram bo'lmoq) samimiy inson.",
            },
            {
              term: '役に立ちます (やくにたちます)',
              reading: 'やくにたちます',
              meaning: "nafi tegmoq, foydasi bo'lmoq",
              exampleSentence: '毎日[まいにち] 役に立ちます[やくにたちます]。',
              exampleTranslation: "Har kuni nafi tegmoq, foydasi bo'lmoq.",
            },
            {
              term: 'むだ［な］',
              reading: 'むだ［な］',
              meaning: 'befoyda, bekorchi (narsa, buyum)',
              exampleSentence: 'これは わたしが 買[か]った むだ［な］ です。',
              exampleTranslation: 'Bu men sotib olgan befoyda, bekorchi (narsa, buyum).',
            },
            {
              term: '不便［な］ (ふべん［な］)',
              reading: 'ふべん［な］',
              meaning: 'noqulay (sharoit)',
              exampleSentence: 'これは わたしが 買[か]った 不便［な］[ふべん［な］] です。',
              exampleTranslation: 'Bu men sotib olgan noqulay (sharoit).',
            },
            {
              term: '同じ (おなじ)',
              reading: 'おなじ',
              meaning: 'bir xil',
              exampleSentence: 'これは わたしが 買[か]った 同じ[おなじ] です。',
              exampleTranslation: 'Bu men sotib olgan bir xil.',
            },
            {
              term: 'すごい',
              reading: 'すごい',
              meaning: "zo'r, ajoyib",
              exampleSentence: 'この 部屋[へや]は すごいです。',
              exampleTranslation: "Bu xona zo'r, ajoyib.",
            },
            {
              term: '首相 (しゅしょう)',
              reading: 'しゅしょう',
              meaning: 'bosh vazir',
              exampleSentence: '毎日[まいにち] 首相[しゅしょう]。',
              exampleTranslation: 'Har kuni bosh vazir.',
            },
            {
              term: '大統領 (だいとうりょう)',
              reading: 'だいとうりょう',
              meaning: 'prezident',
              exampleSentence: '毎日[まいにち] 大統領[だいとうりょう]。',
              exampleTranslation: 'Har kuni prezident.',
            },
            {
              term: '政治 (せいじ)',
              reading: 'せいじ',
              meaning: 'siyosat',
              exampleSentence: 'これは わたしが 買[か]った 政治[せいじ] です。',
              exampleTranslation: 'Bu men sotib olgan siyosat.',
            },
            {
              term: 'ニュース',
              reading: 'ニュース',
              meaning: 'yangilik',
              exampleSentence: 'これは わたしが 買[か]った ニュース です。',
              exampleTranslation: 'Bu men sotib olgan yangilik.',
            },
            {
              term: 'スピーチ',
              reading: 'スピーチ',
              meaning: "nutq （～をします： nutq so'zlamoq ）",
              exampleSentence: 'これは わたしが 買[か]った スピーチ です。',
              exampleTranslation: "Bu men sotib olgan nutq （～をします： nutq so'zlamoq ）.",
            },
            {
              term: '試合 (しあい)',
              reading: 'しあい',
              meaning: 'musobaqa',
              exampleSentence: 'この 部屋[へや]は 試合[しあい]です。',
              exampleTranslation: 'Bu xona musobaqa.',
            },
            {
              term: 'アルバイト',
              reading: 'アルバイト',
              meaning: "qo'shimcha ish （～をします： qo'shimcha ish qilmoq ）",
              exampleSentence: 'これは わたしが 買[か]った アルバイト です。',
              exampleTranslation:
                "Bu men sotib olgan qo'shimcha ish （～をします： qo'shimcha ish qilmoq ）.",
            },
            {
              term: '意見 (いけん)',
              reading: 'いけん',
              meaning: 'fikr',
              exampleSentence: 'これは わたしが 買[か]った 意見[いけん] です。',
              exampleTranslation: 'Bu men sotib olgan fikr.',
            },
            {
              term: '［お］話 (［お］はなし)',
              reading: '［お］はなし',
              meaning: 'gap, suhbat （～をします： suhbatlashmoq ）',
              exampleSentence: 'これは わたしが 買[か]った ［お］話[［お］はなし] です。',
              exampleTranslation: 'Bu men sotib olgan gap, suhbat （～をします： suhbatlashmoq ）.',
            },
            {
              term: 'ユーモア',
              reading: 'ユーモア',
              meaning: 'hajv, yumor',
              exampleSentence: 'これは わたしが 買[か]った ユーモア です。',
              exampleTranslation: 'Bu men sotib olgan hajv, yumor.',
            },
            {
              term: 'むだ',
              reading: 'むだ',
              meaning: 'befoyda (narsa), bekorchi (narsa)',
              exampleSentence: 'これは わたしが 買[か]った むだ です。',
              exampleTranslation: 'Bu men sotib olgan befoyda (narsa), bekorchi (narsa).',
            },
            {
              term: 'デザイン',
              reading: 'デザイン',
              meaning: 'dizayn',
              exampleSentence: 'これは わたしが 買[か]った デザイン です。',
              exampleTranslation: 'Bu men sotib olgan dizayn.',
            },
            {
              term: '交通 (こうつう)',
              reading: 'こうつう',
              meaning: 'transport qatnovi',
              exampleSentence: '毎日[まいにち] 交通[こうつう]。',
              exampleTranslation: 'Har kuni transport qatnovi.',
            },
            {
              term: 'ラッシュ',
              reading: 'ラッシュ',
              meaning: 'tiqilinch transport qatnovi',
              exampleSentence: 'これは わたしが 買[か]った ラッシュ です。',
              exampleTranslation: 'Bu men sotib olgan tiqilinch transport qatnovi.',
            },
            {
              term: '最近 (さいきん)',
              reading: 'さいきん',
              meaning: 'shu kunlarda',
              exampleSentence: 'これは わたしが 買[か]った 最近[さいきん] です。',
              exampleTranslation: 'Bu men sotib olgan shu kunlarda.',
            },
            {
              term: 'たぶん',
              reading: 'たぶん',
              meaning: 'balki',
              exampleSentence: 'これは わたしが 買[か]った たぶん です。',
              exampleTranslation: 'Bu men sotib olgan balki.',
            },
            {
              term: 'きっと',
              reading: 'きっと',
              meaning: 'shubhasiz',
              exampleSentence: 'これは わたしが 買[か]った きっと です。',
              exampleTranslation: 'Bu men sotib olgan shubhasiz.',
            },
            {
              term: 'ほんとうに',
              reading: 'ほんとうに',
              meaning: 'haqiqatan',
              exampleSentence: 'これは わたしが 買[か]った ほんとうに です。',
              exampleTranslation: 'Bu men sotib olgan haqiqatan.',
            },
            {
              term: 'そんなに',
              reading: 'そんなに',
              meaning: 'unchalik',
              exampleSentence: 'これは わたしが 買[か]った そんなに です。',
              exampleTranslation: 'Bu men sotib olgan unchalik.',
            },
            {
              term: '～について',
              reading: '～について',
              meaning: '~ haqida',
              exampleSentence: '山田[やまだ]については 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~ haqida samimiy inson.',
            },
            {
              term: 'しかたがありません。',
              reading: 'しかたがありません。',
              meaning: 'Na iloj.',
              exampleSentence: 'これは わたしが 買[か]った しかたがありません。 です。',
              exampleTranslation: 'Bu men sotib olgan na iloj..',
            },
            {
              term: 'しばらくですね。',
              reading: 'しばらくですね。',
              meaning: "Ko'rishmaganimizga ancha bo'ldi-ya? / Ko'rinmaysiz?",
              exampleSentence: 'これは わたしが 買[か]った しばらくですね。 です。',
              exampleTranslation:
                "Bu men sotib olgan ko'rishmaganimizga ancha bo'ldi-ya? / ko'rinmaysiz?.",
            },
            {
              term: '～でも飲のみませんか。',
              reading: '～でも飲のみませんか。',
              meaning: '~mi ichmaymizmi?',
              exampleSentence:
                '山田[やまだ]でも飲[の]みませんか。は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~mi ichmaymizmi? samimiy inson.',
            },
            {
              term: '見みないと･････。',
              reading: '見みないと･････。',
              meaning: "Qaramasak bo'lmaydi.",
              exampleSentence: 'これは わたしが 買[か]った 見[み]ないと･････。 です。',
              exampleTranslation: "Bu men sotib olgan qaramasak bo'lmaydi..",
            },
            {
              term: 'もちろん',
              reading: 'もちろん',
              meaning: 'albatta',
              exampleSentence: 'これは わたしが 買[か]った もちろん です。',
              exampleTranslation: 'Bu men sotib olgan albatta.',
            },
            {
              term: 'カンガルー',
              reading: 'カンガルー',
              meaning: 'kenguru',
              exampleSentence: 'これは わたしが 買[か]った カンガルー です。',
              exampleTranslation: 'Bu men sotib olgan kenguru.',
            },
            {
              term: 'キャプテン･クック',
              reading: 'キャプテン･クック',
              meaning: 'Kapitan Djeyms Kuk (1728-1779)',
              exampleSentence: 'これは わたしが 買[か]った キャプテン･クック です。',
              exampleTranslation: 'Bu men sotib olgan kapitan djeyms kuk (1728-1779).',
            },
          ],
          grammarRules: [
            {
              pattern: 'Oddiy shakl と 思[おも] います O`Z FIKRI VA TAXMININI IFODA ETISH',
              meaning:
                "Bildiriladigan fikr yoki xabar 思[おも] います fe'li yordamida と bog'lovchi yuklamasi orqali ifodalanadi. 1) Taxmin Agar gapda anglashilayotgan taxmin inkor ma'nosini anglatsa, と bog'lovchisidan oldingi so'z inkor shaklda keladi. ･･･いいえ、たぶん 知[し] らない と 思[おも] います。 2) Mulohaza Ma'lum bir predmet yoki shaxs haqida boshqalarning fikrini aniqlash kerak bo'lgan gaplarda 思いますか qo'llaniladi. ･･･きれいですが、ちょっと 交通[こうつう] が 不[ふ] 便[べん] だと 思います。 Boshqalar fikriga qo'shilish yoki uni inkor etishda quydagicha ifodalanadi. B: 私[わたし] も そう 思[おも] います。 …Ha, men ham shunday fikrdaman. C: 私[わたし] は そう [ は ] 思[おも] いません。 …Yo'q, men unday o'ylamayman. O'ZINING YOKI BOSHQA BIR",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'あした 雨[あめ] が 降[ふ] る と 思[おも] います。',
                  translation: "Ertaga yomg'ir yog'sa kerak (deb o'ylayman).",
                },
                {
                  sentence: 'テレサちゃんは もう 寝[ね] た と 思[おも] います。',
                  translation: "Tereza allaqachon uxlagan bo'lsa kerak (deb o'ylayman).",
                },
                {
                  sentence: 'ミラーさんは この ニュースを 知[し] って いますか。',
                  translation:
                    "Janob Millerning bu yangilikdan xabari bormi? …Yo'q, menimcha xabari bo'lmasa kerak (deb o'ylayman).",
                },
                {
                  sentence:
                    '日[に] 本[ほん] は 物[ぶっ] 価[か] が 高[たか] い と 思[おも] います。',
                  translation: "Yaponiyada narx-navo baland deb o'ylayman.",
                },
                {
                  sentence: '新[あたら] しい 空港[くうこう] に ついて どう 思[おも] いますか。',
                  translation:
                    "Yangi aeroport haqida qanday fikrdasiz? … Juda ko'rkam, ammo transport qatnovi biroz noqulay deb o'ylayman.",
                },
                {
                  sentence: 'A:  ファクスは 便[べん] 利[り] ですね。',
                  translation: 'Faks - juda qulay, shunday emasmi?',
                },
              ],
            },
            {
              pattern: '“GAP”',
              meaning:
                "と 言[い] います SHAXSNING FIKR VA MULOHAZASINI Oddiy shakl YETKAZISH 言[い] います so'zi bilan izohlanadigan gap と yordamida bog'lanadi. 1) Ko'chirma gaplarda muallif gapini to'g'ridan-to'g'ri yetkazib berishda qo'llaniladi va quyidagicha ifodalanadi: 2) Ko'chirma gaplarda と bog'lovchisidan avval oddiy shakldagi fe'llar qo'llaniladi. Bunday gaplarning zamoni muallif gapining qaysi zamonda aytilganligiga bog'liq bo'lmaydi.",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '寝[ね] るまえに「お休[やす] みなさい」と 言[い] います。',
                  translation: 'Uxlashga yotishdan avval “Hayrli tun” deyiladi.',
                },
                {
                  sentence:
                    'ミラーさんは「来[らい] 週[しゅう] 東[とう] 京[きょう] へ 出張[しゅっちょう] します」と 言[い] いました。',
                  translation:
                    'Janob Miller: “Kelasi hafta Tokioga xizmat safariga ketaman”, - deb aytdilar.',
                },
                {
                  sentence:
                    'ミラーさんは 来[らい] 週[しゅう] 東[とう] 京[きょう] へ 出張[しゅっちょう] する と 言[い] いました。',
                  translation: 'Janob Miller kelasi hafta Tokioga xizmat safariga ketishini aytdi.',
                },
              ],
            },
            {
              pattern: 'FE’L  oddiy shakl  TASDIQNI TALAB QILIB',
              meaning:
                "い -SIFAT KELADIGAN でしょう？ な -SIFAT oddiy shakl OYDINLASHTIRUVCHI OT ～だ SAVOL Agar so'zlovchi berayotgan savolning mazmuni haqida o'z suhbatdoshini xabardor va rozi ekanligini taxmin qilayotgan bo'lsa, u o'z savolining でしょう qismini ohangini yuqoriga ko'targan holda aytib, uni o'z fikriga qo'shilishga chorlaydi. ･･･ ええ、行[い] きます。 …Ha, boraman. ･･･ いいえ、そんなに 寒[さむ] くなかったです。 …Yo'q, unchalik sovuq emas edi.",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'あした パーティーに 行[い] くでしょう ?',
                  translation: 'Ertaga ziyofatga borasan-a?',
                },
                {
                  sentence: '北海道[ほっかいどう] は 寒[さむ] かったでしょう ?',
                  translation: "Hokkaydoda juda sovuq bo'lgan bo'lsa kerak-a?",
                },
              ],
            },
            {
              pattern: 'OT 1  (o`rin-joy) で OT 2  が あります',
              meaning:
                "Agar gapda konsert, bayram, tabiiy ofat va shu kabi ish-harakatni anglatadigan OT 2 (voqea-hodisalar) kelsa, ushbu gapdagi あります so'zi “ yuz bermoq ”, “ bo'lib o'tmoq ” kabi ma'nolarni anglatadi.",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '東[とう] 京[きょう] で 日[に] 本[ほん] と ブラジルの サッカーの 試[し] 合[あい] があります。',
                  translation:
                    "Tokioda Yaponiya va Braziliya o'rtasida futbol musobaqasi bo'lib o'tadi.",
                },
              ],
            },
            {
              pattern: 'OT (vaziyat) で',
              meaning:
                "Agar biror-bir voqea-hodisa davomida harakat bajarilgan bo'lsa, ushbu voqea- hodisani ifodalovchi OTdan keyin で o'rin-payt kelishigi qo'shimchasi qo'yiladi.",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '会[かい] 議[ぎ] で 何[なに] か 意[い] 見[けん] を 言[い] いましたか。',
                  translation: 'Majlisda biror-bir fikr bildirdingizmi?',
                },
              ],
            },
            {
              pattern: 'OT  でも FE’L',
              meaning:
                "So'zlovchi bir turdagi predmetlar orasidan aynan bir narsani ajratib, uni suhbatdoshiga taklif qilayotgan paytlarda でも dan foydalaniladi. ichmaymizmi?",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'ちょっと ビールでも 飲[の] みませんか。',
                  translation: 'Ozroq pivomi yoki u bu narsa',
                },
              ],
            },
            {
              pattern: 'FE’Lning  ない -shakli  ないと…',
              meaning:
                "Ushbu tuzilma “FE'Lning ない -shakli ないと いけません ” tuzilmasidan いけません so'zini tushirib qoldirish bilan hosil bo'ladi. Ushbu shakl xuddi 17-darsda siz bilib olgan “FE'Lning ない -shakli なければ なりません ” kabi ma'noni anglatadi.",
              usageNotes:
                'Minna no Nihongo 21-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'もう 帰[かえ] らないと …',
                  translation: "Endi qaytmasam bo'lmaydi.",
                },
              ],
            },
          ],
          culturalNotes:
            "O'z fikrini bildirayotganda yaponlar muloyimlik bilan '〜と思います' (deb o'ylayman) qo'shimchasini qo'shib, o'z fikrini qat'iy hukm qilmasdan aytadilar.",
        },
      },
      {
        id: 'ja-minna-l21-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[21].practice],
        },
      },
      {
        id: 'ja-minna-l21-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[21].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l22',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u5',
    unitTitle: 'Minna Shokyu 1: 21–25 Darslar (Fikr, Aniqlovchi gaplar va Shart)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 22,
    title: '22-dars: Aniqlovchi gaplar (Kanshi / Modifying Clauses)',
    description:
      "Minna no Nihongo Shokyu 1: 22-dars: Aniqlovchi gaplar (Kanshi / Modifying Clauses). Darsda 29 ta yangi so'z, audio talaffuzli Furigana misollar va 4 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l22-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '22-dars: Aniqlovchi gaplar (Kanshi / Modifying Clauses)',
          subtitle: '第22課：名詞修飾（連体修飾節）',
          explanation:
            "22-dars: Aniqlovchi gaplar (Kanshi / Modifying Clauses) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.  Aniqlovchi: S iz bilan 2 va 8-darslarda aniqlovchi hosil qilish qoidalarini bilib olgan edik ミラーさんの うち Janob Millerning uyi (2-dars) 新[あたら] しい うち yangi uy (8-dars) きれいな うち chiroyli uy (8-dars) Yapon tilida so'z birikmasi yoki gapdagi aniqlovchi har doim aniqlanmishdan oldin keladi.",
            "📌 2.  Aniqlovchi-GAPlar: 1) OT so'z turkumini aniqlab keluvchi kesim oddiy shaklda ifodalanadi.",
            "📌 3.  OT  が: Gapda otni aniqlab keluvchi egadan keyin が qo'shimchasi qo'yiladi.",
            "📌 4. FE’Lning lug`atdagi shakli  時[じ] 間[かん]  / 約束[やくそく]  / 用[よう] 事[じ]: Ish-harakatni bajarishga sarflanadigan vaqtni ko'rsatishda gapdagi じかん so'zidan avval “FE'Lning lug'atdagi shakli” keladi.",
          ],
          vocabulary: [
            {
              term: '着ます (きます)',
              reading: 'きます',
              meaning: "kiymoq (beldan yuqoriga qo'llaniladi)",
              exampleSentence: '友達[ともだち]が うちへ 来[き]ました。',
              exampleTranslation: "Do'stim uyimga keldi.",
            },
            {
              term: 'シャツを～',
              reading: 'シャツを～',
              meaning: "ko'ylak kiymoq",
              exampleSentence: '山田[やまだ][シャツを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada ko'ylak kiymoq samimiy inson.",
            },
            {
              term: 'はきます',
              reading: 'はきます',
              meaning: "kiymoq (beldan pastda qo'llaniladi)",
              exampleSentence: '毎日[まいにち] はきます。',
              exampleTranslation: "Har kuni kiymoq (beldan pastda qo'llaniladi).",
            },
            {
              term: '靴を～ (くつを～)',
              reading: 'くつを～',
              meaning: 'poyafzal kiymoq',
              exampleSentence: '山田[やまだ][くつを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada poyafzal kiymoq samimiy inson.',
            },
            {
              term: 'かぶります',
              reading: 'かぶります',
              meaning: "kiymoq (boshga qo'llaniladi)",
              exampleSentence: '毎日[まいにち] かぶります。',
              exampleTranslation: "Har kuni kiymoq (boshga qo'llaniladi).",
            },
            {
              term: '帽子を～ (ぼうし～)',
              reading: 'ぼうし～',
              meaning: 'bosh kiyim kiymoq',
              exampleSentence: '山田[やまだ][ぼうし]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada bosh kiyim kiymoq samimiy inson.',
            },
            {
              term: 'かけます',
              reading: 'かけます',
              meaning: 'Taqmoq',
              exampleSentence: '毎日[まいにち] かけます。',
              exampleTranslation: 'Har kuni taqmoq.',
            },
            {
              term: '眼鏡を～ (めがねを～)',
              reading: 'めがねを～',
              meaning: "ko'zoynak taqmoq",
              exampleSentence: '山田[やまだ][めがねを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada ko'zoynak taqmoq samimiy inson.",
            },
            {
              term: '生まれます (うまれます)',
              reading: 'うまれます',
              meaning: "tug'ilmoq, dunyoga kelmoq",
              exampleSentence: '毎日[まいにち] 生まれます[うまれます]。',
              exampleTranslation: "Har kuni tug'ilmoq, dunyoga kelmoq.",
            },
            {
              term: 'コート',
              reading: 'コート',
              meaning: 'palto',
              exampleSentence: 'これは わたしが 買[か]った コート です。',
              exampleTranslation: 'Bu men sotib olgan palto.',
            },
            {
              term: 'スーツ',
              reading: 'スーツ',
              meaning: 'kostum-shim',
              exampleSentence: 'これは わたしが 買[か]った スーツ です。',
              exampleTranslation: 'Bu men sotib olgan kostum-shim.',
            },
            {
              term: 'セーター',
              reading: 'セーター',
              meaning: 'sviter',
              exampleSentence: 'これは わたしが 買[か]った セーター です。',
              exampleTranslation: 'Bu men sotib olgan sviter.',
            },
            {
              term: '帽子 (ぼうし)',
              reading: 'ぼうし',
              meaning: 'bosh kiyim',
              exampleSentence: 'これは わたしが 買[か]った 帽子[ぼうし] です。',
              exampleTranslation: 'Bu men sotib olgan bosh kiyim.',
            },
            {
              term: '眼鏡 (めがね)',
              reading: 'めがね',
              meaning: "ko'zoynak",
              exampleSentence: 'これは わたしが 買[か]った 眼鏡[めがね] です。',
              exampleTranslation: "Bu men sotib olgan ko'zoynak.",
            },
            {
              term: 'よく',
              reading: 'よく',
              meaning: 'tez-tez, rosa',
              exampleSentence: 'これは わたしが 買[か]った よく です。',
              exampleTranslation: 'Bu men sotib olgan tez-tez, rosa.',
            },
            {
              term: 'おめでとうございます。',
              reading: 'おめでとうございます。',
              meaning: 'Tabriklayman.',
              exampleSentence: '毎日[まいにち] おめでとうございます。。',
              exampleTranslation: 'Har kuni tabriklayman..',
            },
            {
              term: 'こちら',
              reading: 'こちら',
              meaning: 'u kishi (hurmat shakli)',
              exampleSentence: 'これは わたしが 買[か]った こちら です。',
              exampleTranslation: 'Bu men sotib olgan u kishi (hurmat shakli).',
            },
            {
              term: '家賃',
              reading: '家賃',
              meaning: 'uyning ijara haqi',
              exampleSentence: 'これは わたしが 買[か]った 家[や]賃[ちん] です。',
              exampleTranslation: 'Bu men sotib olgan uyning ijara haqi.',
            },
            {
              term: 'うーん。',
              reading: 'うーん。',
              meaning: "Ha. / Xo'p.",
              exampleSentence: 'これは わたしが 買[か]った うーん。 です。',
              exampleTranslation: "Bu men sotib olgan ha. / xo'p..",
            },
            {
              term: 'ダイニングキチン',
              reading: 'ダイニングキチン',
              meaning: 'oshxona (uyning ~si)',
              exampleSentence: 'これは わたしが 買[か]った ダイニングキチン です。',
              exampleTranslation: 'Bu men sotib olgan oshxona (uyning ~si).',
            },
            {
              term: '和室',
              reading: '和室',
              meaning: 'yaponcha xona',
              exampleSentence: 'これは わたしが 買[か]った 和[わ]室[しつ] です。',
              exampleTranslation: 'Bu men sotib olgan yaponcha xona.',
            },
            {
              term: '押し入れ',
              reading: '押し入れ',
              meaning: 'taxmon',
              exampleSentence: 'これは わたしが 買[か]った 押[お]し入[い]れ です。',
              exampleTranslation: 'Bu men sotib olgan taxmon.',
            },
            {
              term: '布団',
              reading: '布団',
              meaning: "ko'rpa",
              exampleSentence: 'これは わたしが 買[か]った 布[ふ]団[とん] です。',
              exampleTranslation: "Bu men sotib olgan ko'rpa.",
            },
            {
              term: 'アパート',
              reading: 'アパート',
              meaning: "xonadon (ko'p qavatli uyda)",
              exampleSentence: 'これは わたしが 買[か]った アパート です。',
              exampleTranslation: "Bu men sotib olgan xonadon (ko'p qavatli uyda).",
            },
            {
              term: 'パリ',
              reading: 'パリ',
              meaning: 'Parij',
              exampleSentence: 'これは わたしが 買[か]った パリ です。',
              exampleTranslation: 'Bu men sotib olgan parij.',
            },
            {
              term: '万里の長城',
              reading: '万里の長城',
              meaning: 'Buyuk Xitoy devori',
              exampleSentence:
                'これは わたしが 買[か]った 万[ばん]里[り]の長城[ちょうじょう] です。',
              exampleTranslation: 'Bu men sotib olgan buyuk xitoy devori.',
            },
            {
              term: '余暇開発センター',
              reading: '余暇開発センター',
              meaning: "insonlarning bo'sh vatqlari bo'yicha tadqiqot olib boruvchi markaz",
              exampleSentence: 'これは わたしが 買[か]った 余暇[よか]開発[かいはつ]センター です。',
              exampleTranslation:
                "Bu men sotib olgan insonlarning bo'sh vatqlari bo'yicha tadqiqot olib boruvchi markaz.",
            },
            {
              term: 'レジャー白書',
              reading: 'レジャー白書',
              meaning: "insonlarning bo'sh vaqtlarini qanday o'tkazishi haqidagi “oq kitob”",
              exampleSentence: 'これは わたしが 買[か]った レジャー白書[はくしょ] です。',
              exampleTranslation:
                "Bu men sotib olgan insonlarning bo'sh vaqtlarini qanday o'tkazishi haqidagi “oq kitob”.",
            },
          ],
          grammarRules: [
            {
              pattern: 'Aniqlovchi',
              meaning:
                "S iz bilan 2 va 8-darslarda aniqlovchi hosil qilish qoidalarini bilib olgan edik ミラーさんの うち Janob Millerning uyi (2-dars) 新[あたら] しい うち yangi uy (8-dars) きれいな うち chiroyli uy (8-dars) Yapon tilida so'z birikmasi yoki gapdagi aniqlovchi har doim aniqlanmishdan oldin keladi.",
              usageNotes:
                'Minna no Nihongo 22-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'Aniqlovchi',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
            {
              pattern: 'Aniqlovchi-GAPlar',
              meaning:
                "1) OT so'z turkumini aniqlab keluvchi kesim oddiy shaklda ifodalanadi. Gapning kesimi な -sifat bilan ifodalangan gaplarda uning ~ だ oddiy shakli ~ な ga o'zgaradi. Shuningdek, kesim ot so'z turkumi bilan ifodalangan gaplarda ~ だ → ~ の ga o'zgaradi. 行[い] かない 人[ひと] bormaydigan 東京[とうきょう] へ Tokioga borgan kishi 行[い] った 人[ひと] 行[い] かなかった 人[ひと] bormagan 背[せ] が 高[たか] くて、髪[かみ] が 黒[くろ] い 人[ひと] baland bo'yli, qora sochli 親切[しんせつ] で、きれいな 人[ひと] mehribon va chiroyli kishi ６５歳[さい] の 人[ひと] 65 yoshli 2) Turli gap bo'laklari sifatida kelgan OT so'z turkumi turlicha aniqlanib kelishi mumkin. Men o'tgan hafta kino ko'rdim. → O'tgan hafta ko'rgan kinom. Janob Van kasalxonada ishlaydi. → Janob Van ishlaydigan kasalxona. Men ertaga do'stim bilan uchrashaman. → Ertaga uchrashadigan do'stim. 3) Gapda aniqlovchi sifatida kelgan otlar, gapning sintaktik qurilishining turli qismida kelishi mumkin.",
              usageNotes:
                'Minna no Nihongo 22-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'わたしは 先[せん] 週[しゅう] 映[えい] 画[が] を 見[み] ました',
                  translation: '→',
                },
                {
                  sentence: 'ワンさんは 病院[びょういん] で 働[はたら] いて います',
                  translation: '→ ワンさんが 働[はたら] いて いる 病[びょう] 院[いん]',
                },
                {
                  sentence: 'わたしは あした 友達[ともだち] に 会[あ] います',
                  translation: '→ わたしが あした 会[あ] う 友達[ともだち]',
                },
                {
                  sentence:
                    ',  ③  va  ④ -misollardagi tagiga chizilgan otlar aniqlanmish vazifasida',
                  translation: 'kelsa, を , で va に yuklamalari tushurib qoldiriladi.',
                },
                {
                  sentence: 'これは ミラーさんが 住[す] んで いた うちです。',
                  translation: 'Bu janob Miller yashagan uy.',
                },
                {
                  sentence: 'ミラーさんが 住[す] んで いた うちは 古[ふる] いです。',
                  translation: 'Janob Miller yashagan uy eski.',
                },
                {
                  sentence: 'ミラーさんが 住[す] んで いた うちを 買[か] いました。',
                  translation: 'Men janob Miller yashagan uyni sotib oldim.',
                },
                {
                  sentence: 'わたしは ミラーさんが 住[す] んで いた うちが 好[す] きです。',
                  translation: 'Menga janob Miller yashagan uy yoqadi.',
                },
                {
                  sentence: 'ミラーさんが 住[す] んで いた うちに 猫[ねこ] が いました。',
                  translation: 'Janob Miller yashagan uyda mushuk bor edi.',
                },
                {
                  sentence: 'ミラーさんが 住[す] んで いた うちへ 行[い] った ことが あります。',
                  translation: 'Janob Miller yashagan uyga borganman.',
                },
              ],
            },
            {
              pattern: 'OT  が',
              meaning:
                "Gapda otni aniqlab keluvchi egadan keyin が qo'shimchasi qo'yiladi. ミラーさんは ケーキを 作[つく] りました。 Janob Miller pirog pishirdilar.",
              usageNotes:
                'Minna no Nihongo 22-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'これは ミラーさんが 作[つく] った ケーキです。',
                  translation: 'Bu janob Miller(ning) pishirgan torti.',
                },
                {
                  sentence: 'わたしは カリナさんが かいた 絵[え] が 好[す] きです。',
                  translation: 'Menga Karina xonimning chizgan rasmi yoqadi.',
                },
                {
                  sentence:
                    '［あなたは］彼[かれ] が 生[う] まれた 所[ところ] を 知[し] って いますか。',
                  translation: "[Sen] u(ning) tug'ilgan joy(i)ni bilasanmi?",
                },
              ],
            },
            {
              pattern:
                'FE’Lning lug`atdagi shakli  時[じ] 間[かん]  / 約束[やくそく]  / 用[よう] 事[じ]',
              meaning:
                "Ish-harakatni bajarishga sarflanadigan vaqtni ko'rsatishda gapdagi じかん so'zidan avval “FE'Lning lug'atdagi shakli” keladi. Kelishuv ma'nosini anglatadigan gaplarda やくそく so'zidan avval FE'Lning lug'atdagi shakli keladi. ⑯ きょうは 市[し] 役[やく] 所[しょ] へ 行[い] く 用[よう] 事[じ] が あります。 Bugun hokimiyatga borib qiladigan ishlarim bor.",
              usageNotes:
                'Minna no Nihongo 22-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'わたしは 朝[あさ] ごはんを 食[た] べる 時[じ] 間[かん] が ありません。',
                  translation: "Menning ertalabki nonushtani yeyishga vaqtim yo'q.",
                },
                {
                  sentence:
                    'わたしは 友達[ともだち] と 映[えい] 画[が] を 見[み] る 約束[やくそく] が あります。',
                  translation: "Do'stim bilan kino ko'rishga kelishib qo'yganman.",
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada kvartira ijaraga olish (apāto sagashi) madaniyati o'ziga xos bo'lib, xonalar hajmi tatami to'shamlari soni bilan o'lchanadi.",
        },
      },
      {
        id: 'ja-minna-l22-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[22].practice],
        },
      },
      {
        id: 'ja-minna-l22-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[22].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l23',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u5',
    unitTitle: 'Minna Shokyu 1: 21–25 Darslar (Fikr, Aniqlovchi gaplar va Shart)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 23,
    title: '23-dars: Shart va Vaqt (Qachonki / Qilsa)',
    description:
      "Minna no Nihongo Shokyu 1: 23-dars: Shart va Vaqt (Qachonki / Qilsa). Darsda 42 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l23-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '23-dars: Shart va Vaqt (Qachonki / Qilsa)',
          subtitle: '第23課：時と条件（〜とき・〜と、〜）',
          explanation:
            "23-dars: Shart va Vaqt (Qachonki / Qilsa) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.   FE’Lning lug`atdagi shakli: FE'Lning ない -shakli PAYT ERGASH GAPLI い -SIFAT （～い） とき、～ QO'SHMA GAP な -SIFAT な OT の Payt ergash gapli qo'shma gaplar とき bog'lovchisi yordamida bog'lanadi.",
            "📌 2.   FE’Lning lug`atdagi shakli QO`SHMA GAPDA ISH-: とき、～ HARAKATNING FE'Lning た -shakli TUGALLANGANLIK VA TUGALLANMAGANLIK IFODASI とき dan avval kelgan “FE'Lning oddiy shakli” gapga tugallanmagan ish-harakat ma'nosini bersa, “FE'Lning た -shakli” harakat tugatilgan paytda boshqa bir ish- harakatning bajarilganligini anglatadi.",
            "📌 3.                                                                            FE’Lning lug`atdagi shakli  と、～ QO`SHMA GAP: と bog'lovchisi shart va payt ergash gapli qo'shma gaplarni bog'lash uchun xizmat qiladi va ma'lum bir harakat bajarilishi natijasida boshqa holat vujudga kelishini anglatadi.",
            "📌 4.   OT  が  SIFAT / FE’L: Siz 14-darsda tabiatdagi voqeliklarni tasvirlashda gapdagi egadan keyin が yuklamasi qo'yilishini bilib olgan edingiz.",
            "📌 5.   OT (o`rin-joy)  を  FE’L (harakat yo`nalishi): Biror-bir shaxs yoki predmetning harakatlanish joyini ifodalashda を qo'shimchasidan foydalaniladi.",
          ],
          vocabulary: [
            {
              term: '聞きます (ききます)',
              reading: 'ききます',
              meaning: "so'ramoq",
              exampleSentence: '音楽[おんがく]を 聞[き]きながら 散歩[さんぽ]します。',
              exampleTranslation: 'Musiqa tinglab sayr qilaman.',
            },
            {
              term: '先生に～ (せんせいに～)',
              reading: 'せんせいに～',
              meaning: "(o'qituvchidan so'ramoq)",
              exampleSentence: '山田[やまだ][せんせいに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (o'qituvchidan so'ramoq) samimiy inson.",
            },
            {
              term: '回します (まわします)',
              reading: 'まわします',
              meaning: 'aylantirmoq',
              exampleSentence: '毎日[まいにち] 回します[まわします]。',
              exampleTranslation: 'Har kuni aylantirmoq.',
            },
            {
              term: '引きます (ひきます)',
              reading: 'ひきます',
              meaning: 'tortmoq',
              exampleSentence: '毎日[まいにち] 引きます[ひきます]。',
              exampleTranslation: 'Har kuni tortmoq.',
            },
            {
              term: '変えます (かえます)',
              reading: 'かえます',
              meaning: "o'zgartirmoq",
              exampleSentence: '毎日[まいにち] 変えます[かえます]。',
              exampleTranslation: "Har kuni o'zgartirmoq.",
            },
            {
              term: '触ります (さわります)',
              reading: 'さわります',
              meaning: 'tegmoq',
              exampleSentence: '毎日[まいにち] 触ります[さわります]。',
              exampleTranslation: 'Har kuni tegmoq.',
            },
            {
              term: 'ドアに～',
              reading: 'ドアに～',
              meaning: '(eshikka tegmoq)',
              exampleSentence: '山田[やまだ][ドアに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (eshikka tegmoq) samimiy inson.',
            },
            {
              term: '出ます (でます)',
              reading: 'でます',
              meaning: 'qaytmoq, chiqmoq',
              exampleSentence: '毎日[まいにち] 出ます[でます]。',
              exampleTranslation: 'Har kuni qaytmoq, chiqmoq.',
            },
            {
              term: 'お釣りが～ (おつりが～)',
              reading: 'おつりが～',
              meaning: '(qaytim qaytmoq)',
              exampleSentence: '山田[やまだ][おつりが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (qaytim qaytmoq) samimiy inson.',
            },
            {
              term: '動きます (うごきます)',
              reading: 'うごきます',
              meaning: 'harakatlanmoq, yurmoq',
              exampleSentence: '毎日[まいにち] 動きます[うごきます]。',
              exampleTranslation: 'Har kuni harakatlanmoq, yurmoq.',
            },
            {
              term: '時計が～ (とけいが～)',
              reading: 'とけいが～',
              meaning: '(soat yurmoq)',
              exampleSentence: '山田[やまだ][とけいが]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (soat yurmoq) samimiy inson.',
            },
            {
              term: '歩きます (あるきます)',
              reading: 'あるきます',
              meaning: 'piyoda yurmoq',
              exampleSentence: '毎日[まいにち] 歩きます[あるきます]。',
              exampleTranslation: 'Har kuni piyoda yurmoq.',
            },
            {
              term: '道を～ (みちを～)',
              reading: 'みちを～',
              meaning: "(ko'chada piyoda yurmoq)",
              exampleSentence: '山田[やまだ][みちを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (ko'chada piyoda yurmoq) samimiy inson.",
            },
            {
              term: '渡ります (わたります)',
              reading: 'わたります',
              meaning: "o'tmoq; kesib o'tmoq",
              exampleSentence: '毎日[まいにち] 渡ります[わたります]。',
              exampleTranslation: "Har kuni o'tmoq; kesib o'tmoq.",
            },
            {
              term: '橋を～ (はしを～)',
              reading: 'はしを～',
              meaning: "(ko'prikdan o'tmoq)",
              exampleSentence: '山田[やまだ][はしを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (ko'prikdan o'tmoq) samimiy inson.",
            },
            {
              term: '気をつけます (きをつけます)',
              reading: 'きをつけます',
              meaning: "ehtiyot bo'lmoq",
              exampleSentence: '毎日[まいにち] 気をつけます[きをつけます]。',
              exampleTranslation: "Har kuni ehtiyot bo'lmoq.",
            },
            {
              term: '車に (くるまに～)',
              reading: 'くるまに～',
              meaning: "(mashinaga ehtiyot bo'lmoq)",
              exampleSentence: '山田[やまだ][くるまに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (mashinaga ehtiyot bo'lmoq) samimiy inson.",
            },
            {
              term: '引っ越しします (ひっこしします)',
              reading: 'ひっこしします',
              meaning: "ko'chib o'tmoq",
              exampleSentence: '毎日[まいにち] 引っ越しします[ひっこしします]。',
              exampleTranslation: "Har kuni ko'chib o'tmoq.",
            },
            {
              term: '電気屋 (でんきや)',
              reading: 'でんきや',
              meaning: "elektr buyumlar do'koni; elektr buyumlar do'koni sotuvchisi",
              exampleSentence: 'あそこは 電気屋[でんきや] です。',
              exampleTranslation:
                "Anavi yer elektr buyumlar do'koni; elektr buyumlar do'koni sotuvchisi.",
            },
            {
              term: '～屋 (～や)',
              reading: '～や',
              meaning: "~ do'koni; ~do'koni sotuvchisi",
              exampleSentence: 'あそこは 屋[や] です。',
              exampleTranslation: "Anavi yer ~ do'koni; ~do'koni sotuvchisi.",
            },
            {
              term: 'サイズ',
              reading: 'サイズ',
              meaning: "o'lcham, hajm",
              exampleSentence: 'これは わたしが 買[か]った サイズ です。',
              exampleTranslation: "Bu men sotib olgan o'lcham, hajm.",
            },
            {
              term: '音 (おと)',
              reading: 'おと',
              meaning: 'tovush',
              exampleSentence: 'これは わたしが 買[か]った 音[おと] です。',
              exampleTranslation: 'Bu men sotib olgan tovush.',
            },
            {
              term: '機械 (きかい)',
              reading: 'きかい',
              meaning: 'texnika, mashina',
              exampleSentence: 'この 部屋[へや]は 機械[きかい]です。',
              exampleTranslation: 'Bu xona texnika, mashina.',
            },
            {
              term: 'つまみ',
              reading: 'つまみ',
              meaning: 'murvat',
              exampleSentence: 'これは わたしが 買[か]った つまみ です。',
              exampleTranslation: 'Bu men sotib olgan murvat.',
            },
            {
              term: '故障 (こしょう)',
              reading: 'こしょう',
              meaning: 'buzulish, nosozlik ( ～します : buzilmoq)',
              exampleSentence: '毎日[まいにち] 故障[こしょう]。',
              exampleTranslation: 'Har kuni buzulish, nosozlik ( ～します : buzilmoq).',
            },
            {
              term: '道 (みち)',
              reading: 'みち',
              meaning: "ko'cha, yo'l",
              exampleSentence: 'これは わたしが 買[か]った 道[みち] です。',
              exampleTranslation: "Bu men sotib olgan ko'cha, yo'l.",
            },
            {
              term: '交差点 (こうさてん)',
              reading: 'こうさてん',
              meaning: 'chorraha',
              exampleSentence: 'これは わたしが 買[か]った 交差点[こうさてん] です。',
              exampleTranslation: 'Bu men sotib olgan chorraha.',
            },
            {
              term: '信号 (しんごう)',
              reading: 'しんごう',
              meaning: 'svetofor',
              exampleSentence: '毎日[まいにち] 信号[しんごう]。',
              exampleTranslation: 'Har kuni svetofor.',
            },
            {
              term: '角 (かど)',
              reading: 'かど',
              meaning: 'muyulish, burulish',
              exampleSentence: 'これは わたしが 買[か]った 角[かど] です。',
              exampleTranslation: 'Bu men sotib olgan muyulish, burulish.',
            },
            {
              term: '橋 (はし)',
              reading: 'はし',
              meaning: "ko'prik",
              exampleSentence: 'これは わたしが 買[か]った 橋[はし] です。',
              exampleTranslation: "Bu men sotib olgan ko'prik.",
            },
            {
              term: '駐車場 (ちゅうしゃじょう)',
              reading: 'ちゅうしゃじょう',
              meaning: "avto ulovlar to'xtash joyi",
              exampleSentence: '毎日[まいにち] 駐車場[ちゅうしゃじょう]。',
              exampleTranslation: "Har kuni avto ulovlar to'xtash joyi.",
            },
            {
              term: '～目 (～め)',
              reading: '～め',
              meaning: '~(i)nchi',
              exampleSentence: '山田[やまだ]めは 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada ~(i)nchi samimiy inson.',
            },
            {
              term: '［お］正月 (［お］しょうがつ)',
              reading: '［お］しょうがつ',
              meaning: 'yangi yil',
              exampleSentence: 'これは わたしが 買[か]った ［お］正月[［お］しょうがつ] です。',
              exampleTranslation: 'Bu men sotib olgan yangi yil.',
            },
            {
              term: 'ごちそうさまでした。',
              reading: 'ごちそうさまでした。',
              meaning: 'Rahmat. (ovqat uchun)',
              exampleSentence: 'これは わたしが 買[か]った ごちそうさま[でした]。 です。',
              exampleTranslation: 'Bu men sotib olgan rahmat. (ovqat uchun).',
            },
            {
              term: '建物',
              reading: 'たてもの',
              meaning: 'bino',
              exampleSentence: 'これは わたしが 買[か]った 建物[たてもの] です。',
              exampleTranslation: 'Bu men sotib olgan bino.',
            },
            {
              term: '外国人登録証',
              reading: '外国人登録証',
              meaning: "chet ellik fuqaroning ro'yxatga olinganlik to'g'risidagi hujjati",
              exampleSentence:
                'これは わたしが 買[か]った 外国人[がいこくじん]登[とう]録[ろく]証[しょう] です。',
              exampleTranslation:
                "Bu men sotib olgan chet ellik fuqaroning ro'yxatga olinganlik to'g'risidagi hujjati.",
            },
            {
              term: '聖徳太子',
              reading: '聖徳太子',
              meaning: 'Shahzoda Shotoku (574-622)',
              exampleSentence: 'これは わたしが 買[か]った 聖[しょう]徳[とく]太[たい]子[し] です。',
              exampleTranslation: 'Bu men sotib olgan shahzoda shotoku (574-622).',
            },
            {
              term: '法隆寺',
              reading: '法隆寺',
              meaning:
                'Horyuji- Nara viloyatidagi ibodatxona. U Ⅶ asr boshida shahzoda Shotoku tomonidan qurdirilgan.',
              exampleSentence: 'これは わたしが 買[か]った 法[ほう]隆[りゅう]寺[じ] です。',
              exampleTranslation:
                'Bu men sotib olgan horyuji- nara viloyatidagi ibodatxona. u ⅶ asr boshida shahzoda shotoku tomonidan qurdirilgan..',
            },
            {
              term: '元気茶',
              reading: '元気茶',
              meaning: "“Genkichya” choy navi (o'ylab topilgan )",
              exampleSentence: 'これは わたしが 買[か]った 元[げん]気[き]茶[ちゃ] です。',
              exampleTranslation: "Bu men sotib olgan “genkichya” choy navi (o'ylab topilgan ).",
            },
            {
              term: '本田駅',
              reading: '本田駅',
              meaning: "“Honda” bekati (o'ylab topilgan )",
              exampleSentence: 'これは わたしが 買[か]った 本[ほん]田[だ]駅[えき] です。',
              exampleTranslation: "Bu men sotib olgan “honda” bekati (o'ylab topilgan ).",
            },
            {
              term: '図書館前',
              reading: '図書館前',
              meaning: '“Toshokanmae” avtobus bekati',
              exampleSentence: 'これは わたしが 買[か]った 図[と]書[しょ]館[かん]前[まえ] です。',
              exampleTranslation: 'Bu men sotib olgan “toshokanmae” avtobus bekati.',
            },
          ],
          grammarRules: [
            {
              pattern: 'FE’Lning lug`atdagi shakli',
              meaning:
                "FE'Lning ない -shakli PAYT ERGASH GAPLI い -SIFAT （～い） とき、～ QO'SHMA GAP な -SIFAT な OT の Payt ergash gapli qo'shma gaplar とき bog'lovchisi yordamida bog'lanadi. とき - gapning asosi bo'lgan ikkinchi bo'lagidagi holat, harakat va voqeani ko'rsatib keladi. PAYT ERGASH GAPLI",
              usageNotes:
                'Minna no Nihongo 23-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '図[と] 書[しょ] 館[かん] で 本[ほん] を 借[か] りる とき、カードが 要[い] ります。',
                  translation:
                    "Kutubxonadan kitob olish paytida, kutubxona kartochkasi kerak bo'ladi.",
                },
                {
                  sentence:
                    '使[つか] い方[かた] が わからない とき、わたしに 聞[き] いて ください。',
                  translation: "Foydalanishni tushunmagan paytingizda, mendan so'rang.",
                },
                {
                  sentence:
                    '体[からだ] の 調[ちょう] 子[し] が 悪[わる] い とき、「元[げん] 気[き] 茶[ちゃ] 」を 飲[の] みます。',
                  translation: 'Tobim qochgan paytda, “Genkichya” choyidan ichaman.',
                },
                {
                  sentence: '暇[ひま] な とき、うちへ 遊[あそ] びに 来ませんか。',
                  translation: "Bo'sh paytingizda, uyimizga mehmonga kelmaysizmi?",
                },
                {
                  sentence:
                    '妻[つま] が 病[びょう] 気[き] の とき、会社[かいしゃ] を 休[やす] みます。',
                  translation: "Xotinim kasal bo'lib qolgan paytlarda, ishga bormayman.",
                },
                {
                  sentence: '若[わか] い とき、あまり 勉[べん] 強[きょう] しませんでした。',
                  translation: 'Yoshlik paytimda unchalik dars qilmadim.',
                },
                {
                  sentence: '子[こ] どもの とき、よく 川[かわ] で 泳[およ] ぎました。',
                  translation: "Bolalik chog'imda men daryoda rosa cho'milar edim.",
                },
                {
                  sentence:
                    'va  ⑦ -misollardagi sifat va ot bilan ifodalangan payt ergash gapli qo`shma',
                  translation: "gaplarning zamoni bosh gap zamoniga bog'liq bo'lmaydi.",
                },
              ],
            },
            {
              pattern: 'FE’Lning lug`atdagi shakli QO`SHMA GAPDA ISH-',
              meaning:
                "とき、～ HARAKATNING FE'Lning た -shakli TUGALLANGANLIK VA TUGALLANMAGANLIK IFODASI とき dan avval kelgan “FE'Lning oddiy shakli” gapga tugallanmagan ish-harakat ma'nosini bersa, “FE'Lning た -shakli” harakat tugatilgan paytda boshqa bir ish- harakatning bajarilganligini anglatadi. qaytib kelganidan so'ng xarid qilinganligini anglatadi. SHART ERGASH GAPLI",
              usageNotes:
                'Minna no Nihongo 23-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '国[くに] へ 帰[かえ] る とき、かばんを 買[か] いました。',
                  translation: "Yurtimga qaytar chog'imda, sumka sotib oldim.",
                },
                {
                  sentence: '国[くに] へ 帰[かえ] った とき、かばんを 買[か] いました。',
                  translation: "Yurtimga qaytgan chog'imda, sumka sotib oldim.",
                },
                {
                  sentence:
                    '-misoldagi  かえる  fe’li hali qaytib kelmasdan avval, ya’ni Yaponiyada yoki',
                  translation:
                    "aeroportda sumkaning sotib olinganligini anglatadi. ⑨ -misoldagi かえった fe'li esa,",
                },
              ],
            },
            {
              pattern: 'FE’Lning lug`atdagi shakli  と、～ QO`SHMA GAP',
              meaning:
                "と bog'lovchisi shart va payt ergash gapli qo'shma gaplarni bog'lash uchun xizmat qiladi va ma'lum bir harakat bajarilishi natijasida boshqa holat vujudga kelishini anglatadi. Maqsad, xohish-istak, taklif, iltimos kabi ma'nolarni anglatadigan gaplarda ~ と bog'lovchisini qo'llash mumkin emas. 映[えい] 画[が] を 見[み] に 行[い] きます。 (maqsad) 映[えい] 画[が] を 見[み] に 行[い] きたいです。 (xohish-istak) × 時[じ] 間[かん] が ある と、 映[えい] 画[が] を 見[み] に 行[い] きませんか。 (taklif) ちょっと 手伝[てつだ] って ください。 (iltimos) Bunday gaplarda ~ と o'rniga ~ たら shart mayli qo'shimchasi qo'llaniladi (25-darsga qarang)",
              usageNotes:
                'Minna no Nihongo 23-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'この ボタンを 押[お] す と、お釣[つ] りが 出[で] ます。',
                  translation: 'Mana bu tugmani bosishingiz bilan, qaytimingiz chiqadi.',
                },
                {
                  sentence: 'これを 回[まわ] す と、音[おと] が 大[おお] きく なります。',
                  translation: "Mana buni burashingiz bilan, ovozi baland bo'ladi.",
                },
                {
                  sentence:
                    '右[みぎ] へ 曲[ま] がる と、郵[ゆう] 便[びん] 局[きょく] が あります。',
                  translation: "O'ngga qayrilishingiz bilan, pochta boshqarmasi chiqadi.",
                },
              ],
            },
            {
              pattern: 'OT  が  SIFAT / FE’L',
              meaning:
                "Siz 14-darsda tabiatdagi voqeliklarni tasvirlashda gapdagi egadan keyin が yuklamasi qo'yilishini bilib olgan edingiz. Xuddi shuningdek, atrofdagi vaziyat yoki holatni tasvirlashda ham egadan keyin が qo'shimchasi qo'yiladi.",
              usageNotes:
                'Minna no Nihongo 23-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '音[おと] が 小[ちい] さいです。',
                  translation: 'Ovozi past.',
                },
                {
                  sentence: '電[でん] 気[き] が 明[あか] るく なりました。',
                  translation: 'Chiroq yorishdi.',
                },
                {
                  sentence: 'この ボタンを 押[お] す と、切[きっ] 符[ぷ] が 出[で] ます。',
                  translation: 'Mana bu tugmachani bosishingiz bilan, chiptangiz chiqadi.',
                },
              ],
            },
            {
              pattern: 'OT (o`rin-joy)  を  FE’L (harakat yo`nalishi)',
              meaning:
                "Biror-bir shaxs yoki predmetning harakatlanish joyini ifodalashda を qo'shimchasidan foydalaniladi. Shuningdek, ushbu qo'shimcha さんぽします、わ たります、あるきます kabi fe'llar bilan birga ifodalanadi. ⑯ 公園[こうえん] を 散[さん] 歩[ぽ] します。 Xiyobonda sayr qilaman (13-dars). ⑰ 道[みち] を 渡[わた] ります。 Yo'ldan (kesib) o'taman. ⑱ 交[こう] 差[さ] 点[てん] を 右[みぎ] へ 曲[ま] がります。 Chorrahadan o'ngga qayrilaman.",
              usageNotes:
                'Minna no Nihongo 23-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'OT (o`rin-joy)  を  FE’L (harakat yo`nalishi)',
                  translation: 'Grammatik qolip.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponiyada ko'chada adashib qolsangiz, mahalliy militsiya maskani — 'Koban' xodimlari doimo xaritadan yo'lni mehribonlik bilan tushuntirib berishadi.",
        },
      },
      {
        id: 'ja-minna-l23-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[23].practice],
        },
      },
      {
        id: 'ja-minna-l23-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[23].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l24',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u5',
    unitTitle: 'Minna Shokyu 1: 21–25 Darslar (Fikr, Aniqlovchi gaplar va Shart)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 24,
    title: '24-dars: Muruvvat va Yordam (Bermoq, Olib bermoq)',
    description:
      "Minna no Nihongo Shokyu 1: 24-dars: Muruvvat va Yordam (Bermoq, Olib bermoq). Darsda 22 ta yangi so'z, audio talaffuzli Furigana misollar va 4 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l24-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '24-dars: Muruvvat va Yordam (Bermoq, Olib bermoq)',
          subtitle: '第24課：授受動詞（くれます・〜てあげます・てもらいます）',
          explanation:
            "24-dars: Muruvvat va Yordam (Bermoq, Olib bermoq) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.    くれます: Siz 7-darsda あげます so'zi “ bermoq ” ma'nosini anglatishini bilib olgan edingiz.",
            "📌 2.  FE’Lning  て -shakli もらいます: くれます あげます、もらいます、くれます fe'llari faqatgina sovg'a berish yoki olish ma'nolarini anglatibgina qolmay, balki ish-harakatning kim tomonidan va kim uchun bajarilayotganligini aniq farqlash uchun ham xizmat qiladi.",
            "📌 3.    OT (atoqli)  が  FE’L: ･･･ええ、佐[さ] 藤[とう] さんが くれました。 「すてきな ネクタイですね」 bilan so'zlovchi o'z suhbatdoshini suhbatga chorlaydi va bunga javoban o'z suhbatdoshidan noma'lum bo'lgan xabarni eshitadi.",
            "📌 4.: 10 va 12-darslardan gapdagi kesim あります／います bilan ifodalanib, so'roq egaga berilsa, so'roq so'zga が qo'shimchasi qo'shilishini bilib olgan edingiz.",
          ],
          vocabulary: [
            {
              term: 'くれます',
              reading: 'くれます',
              meaning: 'bermoq (menga bermoq)',
              exampleSentence: '毎日[まいにち] くれます。',
              exampleTranslation: 'Har kuni bermoq (menga bermoq).',
            },
            {
              term: '連れて行きます (つれていきます)',
              reading: 'つれていきます',
              meaning: 'olib bormoq, ergashtirib bormoq',
              exampleSentence: '毎日[まいにち] 連れて行きます[つれていきます]。',
              exampleTranslation: 'Har kuni olib bormoq, ergashtirib bormoq.',
            },
            {
              term: '連れて来ます (つれてきます)',
              reading: 'つれてきます',
              meaning: 'olib kelmoq, ergashtirib kelmoq',
              exampleSentence: '毎日[まいにち] 連れて来ます[つれてきます]。',
              exampleTranslation: 'Har kuni olib kelmoq, ergashtirib kelmoq.',
            },
            {
              term: '送ります (おくります)',
              reading: 'おくります',
              meaning: "jo'natmoq; olib borib qo'ymoq",
              exampleSentence: '毎日[まいにち] 送ります[おくります]。',
              exampleTranslation: "Har kuni jo'natmoq; olib borib qo'ymoq.",
            },
            {
              term: '人を～ (ひとを～)',
              reading: 'ひとを～',
              meaning: "(odamni olib borib qo'ymoq)",
              exampleSentence: '山田[やまだ][ひとを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (odamni olib borib qo'ymoq) samimiy inson.",
            },
            {
              term: '紹介します (しょうかいします)',
              reading: 'しょうかいします',
              meaning: 'tanishtirmoq',
              exampleSentence: '毎日[まいにち] 紹介します[しょうかいします]。',
              exampleTranslation: 'Har kuni tanishtirmoq.',
            },
            {
              term: '案内します (あんないします)',
              reading: 'あんないします',
              meaning: "yo'l ko'rsatmoq; tanishtirmoq, ko'rsatmoq",
              exampleSentence: '毎日[まいにち] 案内します[あんないします]。',
              exampleTranslation: "Har kuni yo'l ko'rsatmoq; tanishtirmoq, ko'rsatmoq.",
            },
            {
              term: '説明します (せつめいします)',
              reading: 'せつめいします',
              meaning: 'tushuntirmoq, izoh bermoq',
              exampleSentence: '毎日[まいにち] 説明します[せつめいします]。',
              exampleTranslation: 'Har kuni tushuntirmoq, izoh bermoq.',
            },
            {
              term: 'いれます',
              reading: 'いれます',
              meaning: 'damlamoq; solmoq',
              exampleSentence: '毎日[まいにち] いれます。',
              exampleTranslation: 'Har kuni damlamoq; solmoq.',
            },
            {
              term: 'コーヒーを～',
              reading: 'コーヒーを～',
              meaning: '(kofe damlamoq)',
              exampleSentence: '山田[やまだ][コーヒーを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (kofe damlamoq) samimiy inson.',
            },
            {
              term: 'おじいさん／おじいちゃん',
              reading: 'おじいさん／おじいちゃん',
              meaning: 'buva / buvajon',
              exampleSentence: 'これは わたしが 買[か]った おじいさん／おじいちゃん です。',
              exampleTranslation: 'Bu men sotib olgan buva / buvajon.',
            },
            {
              term: 'おばあさん／おばあちゃん',
              reading: 'おばあさん／おばあちゃん',
              meaning: 'buvi / buvijon',
              exampleSentence: 'これは わたしが 買[か]った おばあさん／おばあちゃん です。',
              exampleTranslation: 'Bu men sotib olgan buvi / buvijon.',
            },
            {
              term: '準備 (じゅんび)',
              reading: 'じゅんび',
              meaning: 'tayyorgarlik （～をします： tayyorgarlik qilmoq ）',
              exampleSentence: 'これは わたしが 買[か]った 準備[じゅんび] です。',
              exampleTranslation:
                'Bu men sotib olgan tayyorgarlik （～をします： tayyorgarlik qilmoq ）.',
            },
            {
              term: '意味 (いみ)',
              reading: 'いみ',
              meaning: "ma'no",
              exampleSentence: 'これは わたしが 買[か]った 意味[いみ] です。',
              exampleTranslation: "Bu men sotib olgan ma'no.",
            },
            {
              term: '［お］菓子 (［お］かし)',
              reading: '［お］かし',
              meaning: 'shirinlik',
              exampleSentence: 'これは わたしが 買[か]った ［お］菓子[［お］かし] です。',
              exampleTranslation: 'Bu men sotib olgan shirinlik.',
            },
            {
              term: '全部 (ぜんぶ)',
              reading: 'ぜんぶ',
              meaning: 'hammasi',
              exampleSentence: 'これは わたしが 買[か]った 全部[ぜんぶ] です。',
              exampleTranslation: 'Bu men sotib olgan hammasi.',
            },
            {
              term: '自分で (じぶんで)',
              reading: 'じぶんで',
              meaning: "o'zi(~m, ~ng)",
              exampleSentence: 'これは わたしが 買[か]った 自分で[じぶんで] です。',
              exampleTranslation: "Bu men sotib olgan o'zi(~m, ~ng).",
            },
            {
              term: 'ほかに',
              reading: 'ほかに',
              meaning: 'undan boshqa, boshqa',
              exampleSentence: 'これは わたしが 買[か]った ほかに です。',
              exampleTranslation: 'Bu men sotib olgan undan boshqa, boshqa.',
            },
            {
              term: 'ワゴン車',
              reading: 'ワゴン車',
              meaning: "mikroavtobus, orqa tomonida ham eshik o'rnatilgan yengil mashina",
              exampleSentence: 'これは わたしが 買[か]った ワゴン車[しゃ] です。',
              exampleTranslation:
                "Bu men sotib olgan mikroavtobus, orqa tomonida ham eshik o'rnatilgan yengil mashina.",
            },
            {
              term: 'お弁当',
              reading: 'お弁当',
              meaning: "“Obento”- o'zi bilan olib keladigan ovqat",
              exampleSentence: 'これは わたしが 買[か]った ［お］弁当[べんとう] です。',
              exampleTranslation: "Bu men sotib olgan “obento”- o'zi bilan olib keladigan ovqat.",
            },
            {
              term: '母の日',
              reading: '母の日',
              meaning: 'Onalar kuni',
              exampleSentence: 'これは わたしが 買[か]った 母[はは]の日[ひ] です。',
              exampleTranslation: 'Bu men sotib olgan onalar kuni.',
            },
          ],
          grammarRules: [
            {
              pattern: 'くれます',
              meaning:
                "Siz 7-darsda あげます so'zi “ bermoq ” ma'nosini anglatishini bilib olgan edingiz. Shuni esdan chiqarmaslik kerakki, boshqa shaxslar tomonidan so'zlovchi va uning oila a'zolariga berilsa, ushbu fe'lni qo'llash mumkin emas. （×さとうさんは 私[わたし] に クリスマスカードを あげました。） Bunday hollarda くれます qo'llaniladi. あげます",
              usageNotes:
                'Minna no Nihongo 24-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '私[わたし] は 佐[さ] 藤[とう] さんに 花[はな] を あげました。',
                  translation: "Men Sato xonimga gul sovg'a qildim.",
                },
                {
                  sentence: '佐[さ] 藤[とう] さんは 私[わたし] に クリスマスカードを くれました。',
                  translation: "Sato xonim menga Krismas bayramining tabrik qog'ozini berdilar.",
                },
                {
                  sentence: '佐[さ] 藤[とう] さんは 妹[いもうと] に お菓子[かし] を くれました。',
                  translation: 'Sato xonim singlimga shirinlik berdilar.',
                },
              ],
            },
            {
              pattern: 'FE’Lning  て -shakli もらいます',
              meaning:
                "くれます あげます、もらいます、くれます fe'llari faqatgina sovg'a berish yoki olish ma'nolarini anglatibgina qolmay, balki ish-harakatning kim tomonidan va kim uchun bajarilayotganligini aniq farqlash uchun ham xizmat qiladi. Shuningdek, o'z xohishiga ko'ra kimningdir foydasiga bajarish yoki so'zlovchi uchun foydali ish-harakatni bajargan shaxsga nisbatan minnatdorchilik ma'nolarini anglatgan ish-harakat gapda “FE'Lning て -shakli” bilan ifodalanadi. 1) FE'Lning て -shakli あげます So'zlovchining o'z xohishiga ko'ra boshqa shaxslar uchun ularning foydasiga biron-bir harakat bajarishga tayyorligini anglatadigan gaplarda “FE'Lning て -shakli あげます ” qo'llaniladi. Agar so'zlovchi ish-harakatning sub'yekti, ya'ni bajaruvchisi, tinglovchi esa uning ob'yekti bo'lsa, ushbu tuzilmadan foydalangan so'zlovchiga nisbatan kekkayish, takabburlik taassurotlari qolishi mumkin. Shuning uchun ham tanimagan yoki o'zidan kattaroq lavozimdagilarga nisbatan fe'lning ushbu shaklidan foydalanmagan ma'qul. Yaqindan tanish bo'lmagan shaxslarga o'z xizmatingizni taklif qilishda ましょうか dan foydalanish kerak. (14-dars, 6-bandiga qarang) FE'Lning て -shakli もらいます 2) Gapning bu ko'rinishida iltifot ko'rsatgan shaxsga nisbatan so'zlovchining minnatdorchiligi aks etgan. FE'Lning て -shakli くれます 3) Fe'lning ushbu shakli xuddi ~ て もらいます kabi so'zlovchi uchun foydali bo'lgan ish-harakatni bajargan shaxsga nisbatan minnatdor bo'lib gapirishda qo'llanadi. Lekin, farqi shundaki, “FE'Lning ~ て もらいます shakli”da gapdagi ushbu ish-harakatning ob'yekti, “FE'Lning ~ て くれます shakli”da esa ish-harakatning sub'ekti ega gap bo'lagiga to'g'ri keladi. Odatda “FE'Lning ~ て くれます shakli”dagi gaplarda so'zlovchining o'zi ish- harakatning ob'yekti hisoblanib, わたしに (ob'yekt) tushurib qoldiriladi.",
              usageNotes:
                'Minna no Nihongo 24-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '私[わたし] は 木[き] 村[むら] さんに 本[ほん] を 貸[か] して あげました。',
                  translation: 'Men Kimura xonimga kitob berib turdim.',
                },
                {
                  sentence: 'タクシーを 呼[よ] びましょうか。',
                  translation: 'Taksi chaqiraymi? (14-dars)',
                },
                {
                  sentence: '手[てつ] 伝[だ] いましょうか。',
                  translation: 'Yordan beraymi? (14-dars)',
                },
                {
                  sentence:
                    'わたしは 山[やま] 田[だ] さんに 図[と] 書[しょ] 館[かん] の 電[でん] 話[わ] 番号[ばんごう] を 教[おし] えて もらいました。',
                  translation: 'Men janob Yamadadan kutubxonaning telefon raqamini bilib oldim.',
                },
                {
                  sentence: '母[はは] は［私[わたし] に］セーターを 送[おく] って くれました。',
                  translation: "Onam menga sviter jo'natib yuboribdilar.",
                },
              ],
            },
            {
              pattern: 'OT (atoqli)  が  FE’L',
              meaning:
                "･･･ええ、佐[さ] 藤[とう] さんが くれました。 「すてきな ネクタイですね」 bilan so'zlovchi o'z suhbatdoshini suhbatga chorlaydi va bunga javoban o'z suhbatdoshidan noma'lum bo'lgan xabarni eshitadi. Odatda ［この ネクタイは］ tushirib qoldirilib, faqat kishining ismi, so'ng が qo'shimchasi va fe'l, ya'ni 「さとうさんが くれました。」 tarzida javob qaytariladi. So'roq so'z が FE'L",
              usageNotes:
                'Minna no Nihongo 24-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'すてきな ネクタイですね。',
                  translation:
                    "Bo'yinbog'ingiz juda chiroyli ekan. … Ha, uni menga Sato xonim hadya etdilar.",
                },
              ],
            },
            {
              pattern: '4.',
              meaning:
                "10 va 12-darslardan gapdagi kesim あります／います bilan ifodalanib, so'roq egaga berilsa, so'roq so'zga が qo'shimchasi qo'shilishini bilib olgan edingiz. Xuddi shunga o'xshab, gapdagi kesim boshqa fe'llar bilan ifodalangan hollarda ham egadan keyin が qo'shimchasi qo'yiladi. ･･･カリナさんが 行[い] きます。",
              usageNotes:
                'Minna no Nihongo 24-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'だれが 手[てつ] 伝[だ] いに 行[い] きますか。',
                  translation: 'Kim yordamga boradi? … Karina boradi.',
                },
              ],
            },
          ],
          culturalNotes:
            "Yaponlar birovdan yordam olganda doimo '〜てもらいました' yoki '〜てくれました' deb alohida ehtirom va minnatdorchilik bildiradilar.",
        },
      },
      {
        id: 'ja-minna-l24-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[24].practice],
        },
      },
      {
        id: 'ja-minna-l24-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[24].test],
        },
      },
    ],
  },
  {
    id: 'ja-minna-l25',
    courseId: 'japanese-n5',
    unitId: 'ja-minna-u5',
    unitTitle: 'Minna Shokyu 1: 21–25 Darslar (Fikr, Aniqlovchi gaplar va Shart)',
    language: 'ja',
    level: 'N5',
    lessonNumber: 25,
    title: '25-dars: Shartli mayl va Davomiylik (Tara va Temo)',
    description:
      "Minna no Nihongo Shokyu 1: 25-dars: Shartli mayl va Davomiylik (Tara va Temo). Darsda 20 ta yangi so'z, audio talaffuzli Furigana misollar va 5 ta asosiy grammatik formula o'rganiladi.",
    estimatedDurationMinutes: 25,
    icon: '🌸',
    steps: [
      {
        id: 'ja-minna-l25-s1',
        title: "Lug'at va Qoidalar",
        type: 'learn',
        estimatedMinutes: 10,
        learnData: {
          title: '25-dars: Shartli mayl va Davomiylik (Tara va Temo)',
          subtitle: '第25課：条件表現（〜たら・〜ても）',
          explanation:
            "25-dars: Shartli mayl va Davomiylik (Tara va Temo) bo'yicha to'liq grammatik izohlar, formulalar va Furiganali misollar to'plami.",
          keyPoints: [
            "📌 1.                                                                             O`tgan zamondagi oddiy shakl  ら、: QO'SHMA GAP “Oddiy shakldagi o'tgan zamon fe'li” yoki sifatga ら qo'shimchasini qo'shish bilan o'zidan oldin kelgan so'zni shart qilib ko'rsatadi.",
            "📌 2.                                                                FE’Lning  た -shakli  ら、～: QO'SHMA GAP Biror-bir ish-harakat yoki shart bajarilishi bilan, darhol boshqa harakat yoki holat yuz beradigan hollarda “FE'Lning た -shakli ら ”dan foydalaniladi.",
            "📌 3.: な -SIFAT [ な ] ～で も、～ GAPDA ROZILIK OT で Ushbu andoza “o'tgan zamondagi FE'Lning oddiy shakli ら , ~” shakliga qarama-qarshi ma'noni anglatib, taxminlarga ko'ra yuz berishi kerak bo'lgan harakat yoki holatlarning yuz bermasligi yoki boshqacha tus olishini ifodalash uchun xizmat qiladi.",
            "📌 4.      もし  va  いくら: “O'tgan zamondagi oddiy shakli ~ たら ” bilan birga kelgan もし so'zi shart ma'nosini ifodalaydi.",
            "📌 5.   OT  が: 16-dars grammatikasining 4-bandida siz bilan ergash gapli qo'shma gaplarning egasi が qo'shimchasi bilan ajratib ko'rsatilishini bilib olgan edik.",
          ],
          vocabulary: [
            {
              term: '考えます (かんがえます)',
              reading: 'かんがえます',
              meaning: 'fikrlamoq',
              exampleSentence: '毎日[まいにち] 考えます[かんがえます]。',
              exampleTranslation: 'Har kuni fikrlamoq.',
            },
            {
              term: '着きます (つきます)',
              reading: 'つきます',
              meaning: "yetib bormoq / kelmoq, qo'nmoq",
              exampleSentence: '毎日[まいにち] 着きます[つきます]。',
              exampleTranslation: "Har kuni yetib bormoq / kelmoq, qo'nmoq.",
            },
            {
              term: '駅に～ (えきに～)',
              reading: 'えきに～',
              meaning: '(vokzalga borib tushmoq)',
              exampleSentence: '山田[やまだ][えきに]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada (vokzalga borib tushmoq) samimiy inson.',
            },
            {
              term: '留学します (りゅうがくします)',
              reading: 'りゅうがくします',
              meaning: "chet elda ta'lim olmoq",
              exampleSentence: '毎日[まいにち] 留学します[りゅうがくします]。',
              exampleTranslation: "Har kuni chet elda ta'lim olmoq.",
            },
            {
              term: '取ります (とります)',
              reading: 'とります',
              meaning: "ulg'aymoq; qarimoq",
              exampleSentence: 'きれいな 花[はな]の 写真[しゃしん]を 撮[と]りました。',
              exampleTranslation: 'Chiroyli gulning suratini oldim.',
            },
            {
              term: '年を～ (としを～)',
              reading: 'としを～',
              meaning: "(ulg'aymoq; qarimoq)",
              exampleSentence: '山田[やまだ][としを]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: "Yamada (ulg'aymoq; qarimoq) samimiy inson.",
            },
            {
              term: '田舎 (いなか)',
              reading: 'いなか',
              meaning: 'qishloq',
              exampleSentence: 'これは わたしが 買[か]った 田舎[いなか] です。',
              exampleTranslation: 'Bu men sotib olgan qishloq.',
            },
            {
              term: '大使館 (たいしかん)',
              reading: 'たいしかん',
              meaning: 'elchixona',
              exampleSentence: 'あそこは 大使館[たいしかん] です。',
              exampleTranslation: 'Anavi yer elchixona.',
            },
            {
              term: 'グループ',
              reading: 'グループ',
              meaning: 'guruh',
              exampleSentence: 'これは わたしが 買[か]った グループ です。',
              exampleTranslation: 'Bu men sotib olgan guruh.',
            },
            {
              term: 'チャンス',
              reading: 'チャンス',
              meaning: 'imkoniyat',
              exampleSentence: 'これは わたしが 買[か]った チャンス です。',
              exampleTranslation: 'Bu men sotib olgan imkoniyat.',
            },
            {
              term: '億 (おく)',
              reading: 'おく',
              meaning: '( いち～ ) yuz million',
              exampleSentence: 'これは わたしが 買[か]った 億[おく] です。',
              exampleTranslation: 'Bu men sotib olgan ( いち～ ) yuz million.',
            },
            {
              term: 'もし～たら',
              reading: 'もし～たら',
              meaning: 'agar (~sam, ~sang,~sa)',
              exampleSentence: '山田[やまだ]もし[たら]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada agar (~sam, ~sang,~sa) samimiy inson.',
            },
            {
              term: 'いくら～ても',
              reading: 'いくら～ても',
              meaning: 'qancha',
              exampleSentence: '山田[やまだ]いくら[ても]は 親切[しんせつ]な 人[ひと]です。',
              exampleTranslation: 'Yamada qancha samimiy inson.',
            },
            {
              term: '転勤',
              reading: 'てんきん',
              meaning: "ish yuzasidan boshqa ishga o'tish",
              exampleSentence: 'これは わたしが 買[か]った 転勤[てんきん] です。',
              exampleTranslation: "Bu men sotib olgan ish yuzasidan boshqa ishga o'tish.",
            },
            {
              term: 'こと',
              reading: 'こと',
              meaning: 'ish, masala ( ～の こと ~ning masalasi)',
              exampleSentence: 'これは わたしが 買[か]った こと です。',
              exampleTranslation: 'Bu men sotib olgan ish, masala ( ～の こと ~ning masalasi).',
            },
            {
              term: '一杯飲みましょう。',
              reading: '一杯飲みましょう。',
              meaning: 'Keling ichamiz.',
              exampleSentence: 'これは わたしが 買[か]った 一杯[いっぱい]飲[の]みましょう。 です。',
              exampleTranslation: 'Bu men sotib olgan keling ichamiz..',
            },
            {
              term: 'いろいろお世話せわになりました。',
              reading: 'いろいろお世話せわになりました。',
              meaning:
                "Ko'rsatgan mehribonchiligingiz uchun rahmat. / Bergan tuzingizga rozi bo'ling.",
              exampleSentence:
                'これは わたしが 買[か]った [いろいろ]お世話[せわ]になりました。 です。',
              exampleTranslation:
                "Bu men sotib olgan ko'rsatgan mehribonchiligingiz uchun rahmat. / bergan tuzingizga rozi bo'ling..",
            },
            {
              term: '頑張ります',
              reading: '頑張ります',
              meaning: 'harakat qilmoq, tirishmoq',
              exampleSentence: '毎日[まいにち] 頑[がん]張[ば]ります。',
              exampleTranslation: 'Har kuni harakat qilmoq, tirishmoq.',
            },
            {
              term: 'どうぞお元気で。',
              reading: 'どうぞお元気で。',
              meaning: "Salomat bo'ling.",
              exampleSentence: 'これは わたしが 買[か]った どうぞお元[げん]気[き]で。 です。',
              exampleTranslation: "Bu men sotib olgan salomat bo'ling..",
            },
          ],
          grammarRules: [
            {
              pattern: 'O`tgan zamondagi oddiy shakl  ら、',
              meaning:
                "QO'SHMA GAP “Oddiy shakldagi o'tgan zamon fe'li” yoki sifatga ら qo'shimchasini qo'shish bilan o'zidan oldin kelgan so'zni shart qilib ko'rsatadi. Ushbu andoza so'zlovchining fikri yoki turli holatlar shart tarzida bildirilgan hollarda qo'llaniladi. SHARTLI PAYT ERGASH GAPLI",
              usageNotes:
                'Minna no Nihongo 25-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: 'お金[かね] が あったら、旅行[りょこう] します。',
                  translation: "Pulim bo'lsa, sayohat qilar edim.",
                },
                {
                  sentence: '時[じ] 間[かん] が なかったら、テレビを 見[み] ません。',
                  translation: "Vaqtim bo'lmasa, televizor ko'rmayman.",
                },
                {
                  sentence: '安[やす] かったら、パソコンを 買[か] いたいです。',
                  translation: "Arzonroq bo'lsa, kompyuter sotib olmoqchiman.",
                },
                {
                  sentence: '暇[ひま] だったら、手[てつ] 伝[だ] って ください。',
                  translation: "Bo'sh bo'lsangiz, yordam bering?",
                },
                {
                  sentence: 'いい 天[てん] 気[き] だったら、散[さん] 歩[ぽ] しませんか。',
                  translation: "Havo ochiq bo'lsa, sayr qilmaymizmi?",
                },
              ],
            },
            {
              pattern: 'FE’Lning  た -shakli  ら、～',
              meaning:
                "QO'SHMA GAP Biror-bir ish-harakat yoki shart bajarilishi bilan, darhol boshqa harakat yoki holat yuz beradigan hollarda “FE'Lning た -shakli ら ”dan foydalaniladi. Bunday gaplarda bosh gap doim hozirgi zamonda keladi. FE'Lning て -shakli い -SIFAT （い） ～くて ERGASH GAPLI QO'SHMA",
              usageNotes:
                'Minna no Nihongo 25-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '１０時[じ] に なったら、出[で] かけましょう。',
                  translation: "Soat 10 bo'lsa chiqib ketaylik!",
                },
                {
                  sentence: 'うちへ 帰[かえ] ったら、すぐ シャワーを 浴[あ] びます。',
                  translation: 'Uyimga qaytsam, darhol dush qabul qilaman.',
                },
              ],
            },
            {
              pattern: '3.',
              meaning:
                "な -SIFAT [ な ] ～で も、～ GAPDA ROZILIK OT で Ushbu andoza “o'tgan zamondagi FE'Lning oddiy shakli ら , ~” shakliga qarama-qarshi ma'noni anglatib, taxminlarga ko'ra yuz berishi kerak bo'lgan harakat yoki holatlarning yuz bermasligi yoki boshqacha tus olishini ifodalash uchun xizmat qiladi.",
              usageNotes:
                'Minna no Nihongo 25-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence: '雨[あめ] が 降[ふ] っても、洗濯[せんたく] します。',
                  translation: "Yomg'ir yog'sa ham, kir yuvaman.",
                },
                {
                  sentence:
                    '安[やす] くても、わたしは グループ 旅行[りょこう] が 嫌[きら] いです。',
                  translation: "Arzon bo'lsa ham, guruh bilan sayohat qilishni yoqtirmayman.",
                },
                {
                  sentence: '便[べん] 利[り] でも、パソコンを 使[つか] いません。',
                  translation: "Qulay bo'lsa ham, kompyuterdan foydalanmayman.",
                },
                {
                  sentence: '日[にち] 曜[よう] 日[び] でも、働[はたら] きます。',
                  translation: "Yakshanba bo'lsada ishlayman.",
                },
              ],
            },
            {
              pattern: 'もし  va  いくら',
              meaning:
                "“O'tgan zamondagi oddiy shakli ~ たら ” bilan birga kelgan もし so'zi shart ma'nosini ifodalaydi. Xuddi shunday ma'noda いくら so'zi ~ ても（でも） bilan birga qo'llaniladi. Lekin, ushbu ikki so'zning farqi shundaki, もし - so'zlovchining taxmini va hayolini ajratib ko'rsatsa, いくら - shartning darajasini kuchayrib ko'rsatish uchun xizmat qiladi.",
              usageNotes:
                'Minna no Nihongo 25-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    'もし １億円[おくえん] が あったら、色々[いろいろ] な 国[くに] を 旅行[りょこう] したいです。',
                  translation:
                    "Agar 100 mln. iyena pulim bo'lsa edi, turli davlatlarga sayohat qilar edim.",
                },
                {
                  sentence: 'いくら 考[かんが] えても、わかりません。',
                  translation: 'Qanchalik urinmay, baribir tushunmayapman.',
                },
                {
                  sentence: 'いくら 高[たか] くても、買[か] います。',
                  translation: "Qanchalik qimmat bo'lmasin, sotib olaman.",
                },
              ],
            },
            {
              pattern: 'OT  が',
              meaning:
                "16-dars grammatikasining 4-bandida siz bilan ergash gapli qo'shma gaplarning egasi が qo'shimchasi bilan ajratib ko'rsatilishini bilib olgan edik. Xuddi shunga o'xshab, ~ から , ~ たら , ~ ても , ~ とき , ~ と , ~ まえに bilan ifodalangan ergash gapli qo'shma gaplarda egadan keyin が qo'shimchasi qo'yilladi va quyidagicha ifodalanadi. ⑯ 妻[つま] が 病[びょう] 気[き] の とき、会社[かいしゃ] を 休[やす] みます。 Xotinim kasal bo'lgan paytlarda, ishga bormayman. (23-dars) ⑰ 友達[ともだち] が 約束[やくそく] の 時[じ] 間[かん] に 来[こ] なかったら、どうしますか。 Do'stingiz kelishilgan vaqtga kelmasa nima qilasiz? (25-dars)",
              usageNotes:
                'Minna no Nihongo 25-dars muhim qoidasi. JLPT N5 grammatika savollarida muntazam uchraydi.',
              examples: [
                {
                  sentence:
                    '友達[ともだち] が 来[きた] る まえに、部屋[へや] を 掃[そう] 除[じ] します。',
                  translation: "Do'stim kelishidan oldin, xonamni tozalayman. (18-dars)",
                },
              ],
            },
          ],
          culturalNotes:
            "Xayrlashuv va yangi bosqichga o'tishda '今まで本当にお世話になりました' (Shu paytgacha ko'rsatgan yordamingiz uchun rahmat) deb ta'zim qilinadi.",
        },
      },
      {
        id: 'ja-minna-l25-s2',
        title: 'Mustahkamlash Mashqlari',
        type: 'practice',
        estimatedMinutes: 8,
        practiceData: {
          instructions:
            "Darsda o'rganilgan yangi so'zlar, zarrachalar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
          exercises: [...MINNA_N5_QUIZ_DATABASE[25].practice],
        },
      },
      {
        id: 'ja-minna-l25-s3',
        title: 'JLPT N5 Sinov Testi',
        type: 'test',
        estimatedMinutes: 7,
        testData: {
          instructions:
            "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
          passingScorePercentage: 80,
          questions: [...MINNA_N5_QUIZ_DATABASE[25].test],
        },
      },
    ],
  },
];
