export interface JlptGrammarItem {
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    title: string; // e.g. 〜てはいけません
    romaji: string;
    meaningUz: string; // e.g. -sa bo'lmaydi / taqiqlanadi
    structure: string; // e.g. Verb (Te-form) + はいいけません
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
    // ==========================================
    // 🎌 JLPT N5 COMPLETE GRAMMAR (Minna no Nihongo Lessons 1-25)
    // ==========================================
    {
        id: 'n5_wa_desu',
        level: 'N5',
        title: 'N1 は N2 です (wa desu)',
        romaji: 'N1 wa N2 desu',
        meaningUz: 'N1 - N2 dir (Ego: Men talabaman / U shifokor)',
        structure: 'Ot1 + は + Ot2 + です',
        examples: [
            { ja: '私は学生です。', romaji: 'Watashi wa gakusei desu.', uz: 'Men talabaman.' },
            { ja: 'サントスさんはブラジル人です。', romaji: 'Santosu-san wa Burajiru-jin desu.', uz: 'Santos bobi braziliyalik.' }
        ]
    },
    {
        id: 'n5_ja_arimasen',
        level: 'N5',
        title: 'N1 は N2 じゃありません (ja arimasen)',
        romaji: 'N1 wa N2 ja arimasen / de wa arimasen',
        meaningUz: 'N1 - N2 emas (Inkor shakli)',
        structure: 'Ot1 + は + Ot2 + じゃありません / ではありません',
        examples: [
            { ja: '私は先生じゃありません。', romaji: 'Watashi wa sensei ja arimasen.', uz: 'Men o\'qituvchi emasman.' },
            { ja: 'マイクさんはエンジニアではありません。', romaji: 'Maiku-san wa enjinier de wa arimasen.', uz: 'Mayk muhandis emas.' }
        ]
    },
    {
        id: 'n5_ka_question',
        level: 'N5',
        title: '〜ですか (desu ka)',
        romaji: '... desu ka',
        meaningUz: '...-mi? (So\'roq gap va savol berish)',
        structure: 'Gap + か',
        examples: [
            { ja: 'ミラーさんは会社員ですか。', romaji: 'Miraa-san wa kaishain desu ka.', uz: 'Mira janoblari kompaniya xodimimi?' }
        ]
    },
    {
        id: 'n5_mo_particle',
        level: 'N5',
        title: '〜も (mo)',
        romaji: 'mo',
        meaningUz: '... ham (Tenglik va o\'xshashlik yuklamasi)',
        structure: 'Ot + も',
        examples: [
            { ja: '私も学生です。', romaji: 'Watashi mo gakusei desu.', uz: 'Men ham talabaman.' }
        ]
    },
    {
        id: 'n5_no_possession',
        level: 'N5',
        title: 'N1 の N2 (no)',
        romaji: 'N1 no N2',
        meaningUz: 'N1-ning N2-si (Tegishlilik kelishigi)',
        structure: 'Ot1 + の + Ot2',
        examples: [
            { ja: 'これは私の本です。', romaji: 'Kore wa watashi no hon desu.', uz: 'Bu mening kitobim.' },
            { ja: 'IMCの社員です。', romaji: 'IMC no shain desu.', uz: 'IMC kompaniyasi xodimi.' }
        ]
    },
    {
        id: 'n5_kore_sore_are',
        level: 'N5',
        title: 'これ / それ / あれ (kore / sore / are)',
        romaji: 'kore / sore / are',
        meaningUz: 'Bu / U / Anavi (Narsa-buyum ko\'rsatish olmoshlari)',
        structure: 'これ/それ/あれ + は + Ot + です',
        examples: [
            { ja: 'これは辞書です。', romaji: 'Kore wa jisho desu.', uz: 'Bu lug\'at.' },
            { ja: 'あれは誰のかばんですか。', romaji: 'Are wa dare no kaban desu ka.', uz: 'Anavi kimning sumkasi?' }
        ]
    },
    {
        id: 'n5_koko_soko_asoko',
        level: 'N5',
        title: 'ここ / そこ / あそこ / どこ (koko / soko / asoko / doko)',
        romaji: 'koko / soko / asoko / doko',
        meaningUz: 'Bu yer / U yer / Anavi yer / Qayer (Joy ko\'rsatish olmoshlari)',
        structure: 'Joy + は + ここ/そこ/あそこ + です',
        examples: [
            { ja: '事務所はあそこです。', romaji: 'Jimusho wa asoko desu.', uz: 'Ofis anavi yerda.' },
            { ja: 'お手洗いはどこですか。', romaji: 'Oterai wa doko desu ka.', uz: 'Hojatxona qayerda?' }
        ]
    },
    {
        id: 'n5_time_kara_made',
        level: 'N5',
        title: '〜から〜まで (kara ... made)',
        romaji: 'kara ... made',
        meaningUz: '...-dan ...-gacha (Vaqt va masofa chegaralari)',
        structure: 'Vaqt/Joy1 + から + Vaqt/Joy2 + まで',
        examples: [
            { ja: '9時から5時まで働きます。', romaji: 'Ku-ji kara go-ji made hatarakimasu.', uz: 'Soat 9 dan 5 gacha ishlayman.' },
            { ja: '東京から大阪まで新幹線で行きます。', romaji: 'Toukyou kara Oosaka made shinkansen de ikimasu.', uz: 'Tokyodan Osakagacha Shinkansen poezdida boraman.' }
        ]
    },

    // ==========================================
    // 🎌 JLPT N4 COMPLETE GRAMMAR (Shin Kanzen Master N4)
    // ==========================================
    {
        id: 'n4_younini_suru',
        level: 'N4',
        title: '〜ようにする (you ni suru)',
        romaji: 'you ni suru',
        meaningUz: '...-shga harakat qilmoq / odat qilmoq',
        structure: 'Fe\'l (Lug\'at shakli / ない-shakli) + ようにする',
        examples: [
            { ja: '毎日甘いものを食べないようにしています。', romaji: 'Mainichi amai mono wo tabenai you ni shite imasu.', uz: 'Har kuni shirinlik yemaslikka harakat qilyapman.' }
        ]
    },
    {
        id: 'n4_younini_naru',
        level: 'N4',
        title: '〜ようになる (you ni naru)',
        romaji: 'you ni naru',
        meaningUz: '...-shni o\'rganmoq / ... bo\'lib qolmoq (Qobiliyat yoki holat o\'zgarishi)',
        structure: 'Fe\'l (Qobiliyat/Lug\'at shakli) + ようになる',
        examples: [
            { ja: '日本語で話せるようになりました。', romaji: 'Nihongo de hanaseru you ni narimashita.', uz: 'Yapon tilida gapira oladigan bo\'ldim.' }
        ]
    },

    // ==========================================
    // 🎌 JLPT N3 COMPLETE GRAMMAR (Shin Kanzen Master N3)
    // ==========================================
    {
        id: 'n3_bakari_ka',
        level: 'N3',
        title: '〜ばかりか (bakari ka)',
        romaji: 'bakari ka',
        meaningUz: 'nafaqat ..., balki ... ham (Kuchaytirish)',
        structure: 'Fe\'l/Sifat/Ot + ばかりか',
        examples: [
            { ja: '彼は英語ばかりか日本語も話せます。', romaji: 'Kare wa Eigo bakari ka Nihongo mo hanasemasu.', uz: 'U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi.' }
        ]
    },
    {
        id: 'n3_ni_kanshite',
        level: 'N3',
        title: '〜に関して (ni kanshite)',
        romaji: 'ni kanshite',
        meaningUz: '... ga oid / ... xususida',
        structure: 'Ot + に関して / に関する + Ot',
        examples: [
            { ja: 'この問題に関して意見を言わせてください。', romaji: 'Kono mondai ni kanshite iken wo iwasete kudasai.', uz: 'Ushbu masala xususida o\'z fikrimni bildirishga ruxsat bering.' }
        ]
    },
    {
        id: 'n3_ni_yotte',
        level: 'N3',
        title: '〜によって (ni yotte)',
        romaji: 'ni yotte',
        meaningUz: '... ga qarab / ... tomonidan / ... tufayli',
        structure: 'Ot + によって',
        examples: [
            { ja: '人によって考え方が違います。', romaji: 'Hito ni yotte kangaekata ga chigaimasu.', uz: 'Odamga qarab fikrlash tarzi har xil bo\'ladi.' }
        ]
    },
    {
        id: 'n3_ni_nsuite',
        level: 'N3',
        title: '〜について (ni tsuite)',
        romaji: 'ni tsuite',
        meaningUz: '... haqida / ... to\'g\'risida',
        structure: 'Ot + について / についての + Ot',
        examples: [
            { ja: '日本の文化について調べています。', romaji: 'Nihon no bunka ni tsuite shirabete imasu.', uz: 'Yaponiya madaniyati haqida izlanyapman.' }
        ]
    },
    {
        id: 'n3_ni_tootte',
        level: 'N3',
        title: '〜にとって (ni totte)',
        romaji: 'ni totte',
        meaningUz: '... uchun / ... nuqtai nazaridan (baholash kelishigi)',
        structure: 'Ot + にとって',
        examples: [
            { ja: '私にとって家族が一番大切です。', romaji: 'Watashi ni totte kazoku ga ichiban taisetsu desu.', uz: 'Men uchun oila eng muhim narsadir.' }
        ]
    },
    {
        id: 'n3_ni_taishite',
        level: 'N3',
        title: '〜に対して (ni taishite)',
        romaji: 'ni taishite',
        meaningUz: '...-ga nisbatan / ...-ga qarama-qarshi',
        structure: 'Ot + に対して',
        examples: [
            { ja: '目上の人に対して丁寧な言葉を使います。', romaji: 'Meue no hito ni taishite teinei na kotoba wo tsukaimasu.', uz: 'Kattalarga nisbatan xushmuomala so\'zlardan foydalaniladi.' }
        ]
    },
    {
        id: 'n3_wo_chuushin_ni',
        level: 'N3',
        title: '〜を中心に (wo chuushin ni)',
        romaji: 'wo chuushin ni',
        meaningUz: '...-ni markazga qo\'ygan holda / ... boshchiligida',
        structure: 'Ot + を中心に / を中心として',
        examples: [
            { ja: '駅を中心に新しい街が作られています。', romaji: 'Eki wo chuushin ni atarashii machi ga tsukurarete imasu.', uz: 'Vokzalni markazga qo\'ygan holda yangi shahar barpo etilmoqda.' }
        ]
    },
    {
        id: 'n3_wo_komete',
        level: 'N3',
        title: '〜をこめて (wo komete)',
        romaji: 'wo komete',
        meaningUz: '...-ni bag\'ishlab / mehri bilan (samimiy hissiyot)',
        structure: 'Ot (Hissiyot) + をこめて',
        examples: [
            { ja: '感謝の気持ちをこめて手紙を書きました。', romaji: 'Kansha no kimochi wo komete tegami wo kakimashita.', uz: 'Minnatdorlik hissini bag\'ishlab xat yozdim.' }
        ]
    },
    {
        id: 'n3_wo_toushite',
        level: 'N3',
        title: '〜を通して (wo toushite)',
        romaji: 'wo toushite / wo tsuujite',
        meaningUz: '... orqali / ... vositasida (Vositachi manba)',
        structure: 'Ot + を通して / を通じて',
        examples: [
            { ja: 'インターネットを通して世界中のニュースを知る。', romaji: 'Intaanetto wo toushite sekaijuu no nyuusu wo shiru.', uz: 'Internet orqali dunyo yangiliklaridan xabardor bo\'laman.' }
        ]
    },
    {
        id: 'n3_wo_megutte',
        level: 'N3',
        title: '〜をめぐって (wo megutte)',
        romaji: 'wo megutte',
        meaningUz: '... ustida / ... borasida (Bahs va munozara)',
        structure: 'Ot + をめぐって / をめぐる + Ot',
        examples: [
            { ja: '新しい法律をめぐって議論が続いている。', romaji: 'Atarashii houritsu wo megutte giron ga tsuduzite iru.', uz: 'Yangi qonun ustida bahs-munozara davom etmoqda.' }
        ]
    },
    {
        id: 'n3_wake_ga_nai',
        level: 'N3',
        title: '〜わけがない / 〜はずがない (wake ga nai)',
        romaji: 'wake ga nai / hazu ga nai',
        meaningUz: '... bo\'lishi umuman iloji yo\'q / ... emasligi aniq',
        structure: 'Fe\'l/Sifat/Ot (Oddiy shakl) + わけがない',
        examples: [
            { ja: '真面目な彼が嘘をつくわけがない。', romaji: 'Majime na kare ga uso wo tsuku wake ga nai.', uz: 'Jiddiy yigitning yolg\'on gapirishiga umuman ishonib bo\'lmaydi.' }
        ]
    },
    {
        id: 'n3_wake_ni_wa_ikano',
        level: 'N3',
        title: '〜わけにはいかない (wake ni wa ikanai)',
        romaji: 'wake ni wa ikanai',
        meaningUz: '... qila olmayman (axloqiy/ijtimoiy sabab tufayli)',
        structure: 'Fe\'l (Lug\'at shakli) + わけにはいかない',
        examples: [
            { ja: '大事な会議だから、休むわけにはいかない。', romaji: 'Daiji na kaigi dakara, yasumu wake ni wa ikanai.', uz: 'Muhim majlis bo\'lgani uchun qolib keta olmayman.' }
        ]
    },
    {
        id: 'n3_saichuu_ni',
        level: 'N3',
        title: '〜最中に (saichuu ni)',
        romaji: 'saichuu ni',
        meaningUz: 'aynan ... qilayotgan eng qizg\'in pallada',
        structure: 'Fe\'l (ています) / Ot の + 最中に',
        examples: [
            { ja: '食事の最中に電話がかかってきた。', romaji: 'Shokuji no saichuu ni denwa ga kakatte kita.', uz: 'Aynan ovqatlanayotgan eng qizg\'in pallamda telefon bo\'lib qoldi.' }
        ]
    },
    {
        id: 'n3_uchini',
        level: 'N3',
        title: '〜うちに (uchi ni)',
        romaji: 'uchi ni',
        meaningUz: '...-gacha / ... davomida (fursatdan foydalanib bajarish)',
        structure: 'Fe\'l/Sifat/Ot + うちに',
        examples: [
            { ja: '温かいうちに召し上がってください。', romaji: 'Atatakai uchi ni meshagatte kudasai.', uz: 'Issiq davrida fursatdan foydalanib yeb oling.' }
        ]
    },
    {
        id: 'n3_okage_de',
        level: 'N3',
        title: '〜おかげで (okage de)',
        romaji: 'okage de',
        meaningUz: '... sharofati bilan / ... tufayli (Ijobiy sabab)',
        structure: 'Fe\'l/Sifat/Ot + おかげで',
        examples: [
            { ja: '先生のおかげで、試験に合格しました。', romaji: 'Sensei no okage de, shiken ni goukaku shimashita.', uz: 'Ustozim sharofati bilan imtihondan o\'tdim.' }
        ]
    },

    // ==========================================
    // 🎌 JLPT N2 COMPLETE GRAMMAR (Shin Kanzen Master N2)
    // ==========================================
    {
        id: 'n2_ni_chigai_nai',
        level: 'N2',
        title: '〜に違いない (ni chigai nai)',
        romaji: 'ni chigai nai',
        meaningUz: 'shubhasiz ... / aniq ... bo\'lsa kerak',
        structure: 'Fe\'l/Sifat/Ot + に違いない',
        examples: [
            { ja: '彼が合格したに違いない。', romaji: 'Kare ga goukaku shita ni chigai nai.', uz: 'U imtihondan o\'tganiga shubha yo\'q.' }
        ]
    },
    {
        id: 'n2_wo_kikkake_ni',
        level: 'N2',
        title: '〜をきっかけに (wo kikkake ni)',
        romaji: 'wo kikkake ni',
        meaningUz: '... munosabati bilan / ... bahona bo\'lib',
        structure: 'Ot / Fe\'l (Ta-form) + のをきっかけに',
        examples: [
            { ja: 'アニメを見たのをきっかけに日本語を勉強し始めた。', romaji: 'Anime wo mita no wo kikkake ni Nihongo wo benkyou shihajimeta.', uz: 'Anime ko\'rganim bahona bo\'lib, yapon tilini o\'rganishni boshladim.' }
        ]
    },
    {
        id: 'n2_ni_mo_kakawarazu',
        level: 'N2',
        title: '〜にもかかわらず (ni mo kakawarazu)',
        romaji: 'ni mo kakawarazu',
        meaningUz: '...-ga qaramay / qaramasdan',
        structure: 'Fe\'l/Sifat/Ot + にもかかわらず',
        examples: [
            { ja: '大雨にもかかわらず、多くの人が集まった。', romaji: 'Ookame ni mo kakawarazu, ooku no hito ga atsumatta.', uz: 'Kattalashgan yomg\'irga qaramay, ko\'plab odamlar yig\'ildi.' }
        ]
    },

    // ==========================================
    // 🎌 JLPT N1 COMPLETE GRAMMAR (Nihongo Sou Matome N1)
    // ==========================================
    {
        id: 'n1_zaru_wo_eta_nai',
        level: 'N1',
        title: '〜ざるを得ない (zaru wo eta nai)',
        romaji: 'zaru wo eta nai',
        meaningUz: '...-shga majbur bo\'lmoq / boshqa chora yo\'q',
        structure: 'Fe\'l (Nai-shakli ildizi) + ざるを得ない',
        examples: [
            { ja: '台風のため、計画を変更せざるを得ない。', romaji: 'Taifu no tame, keikaku wo henkou sezaru wo etanai.', uz: 'Tayfun sababli rejani o\'zgartirishga majburmiz.' }
        ]
    },
    {
        id: 'n1_yoshi_no_nai',
        level: 'N1',
        title: '〜ようがない (you ga nai)',
        romaji: 'you ga nai',
        meaningUz: '...-shning umuman iloji yo\'q',
        structure: 'Fe\'l (Masu-ildizi) + ようがない',
        examples: [
            { ja: '連絡先が分からなければ、連絡しようがない。', romaji: 'Renrakusaki ga wakaranakereba, renroku shiyou ga nai.', uz: 'Bog\'lanish manzili bo\'lmasa, bog\'lanishning iloji yo\'q.' }
        ]
    }
];

export const JLPT_KANJI_DATA: JlptKanjiItem[] = [
    // --- N5 KANJI ---
    {
        id: 'kanji_n5_sun',
        level: 'N5',
        kanji: '日',
        onyomi: 'ニチ (nichi), ジツ (jitsu)',
        kunyomi: 'ひ (hi), び (bi), か (ka)',
        meaningUz: 'Quyosh, Kun (Sun, Day)',
        strokeCount: 4,
        examples: [
            { word: '日本', reading: 'にほん (Nihon)', meaning: 'Yaponiya' },
            { word: '日曜日', reading: 'にちようび (Nichiyoubi)', meaning: 'Yakshanba' }
        ]
    },
    {
        id: 'kanji_n5_moon',
        level: 'N5',
        kanji: '月',
        onyomi: 'ゲツ (getsu), ガツ (gatsu)',
        kunyomi: 'つき (tsuki)',
        meaningUz: 'Oy, Oygoh (Moon, Month)',
        strokeCount: 4,
        examples: [
            { word: '今月', reading: 'こんげつ (Kongetsu)', meaning: 'Bu oy' },
            { word: '月曜日', reading: 'げつようび (Getsuyoubi)', meaning: 'Dushanba' }
        ]
    },
    {
        id: 'kanji_n5_water',
        level: 'N5',
        kanji: '水',
        onyomi: 'スイ (sui)',
        kunyomi: 'みず (mizu)',
        meaningUz: 'Suv (Water)',
        strokeCount: 4,
        examples: [
            { word: '水着', reading: 'みずぎ (Mizugi)', meaning: 'Cho\'milish kiyimi' },
            { word: '水曜日', reading: 'すいようび (Suiyoubi)', meaning: 'Chorshanba' }
        ]
    },

    // --- N4 KANJI ---
    {
        id: 'kanji_n4_learn',
        level: 'N4',
        kanji: '習',
        onyomi: 'シュウ (shuu)',
        kunyomi: 'なら・う (nara-u)',
        meaningUz: 'O\'rganmoq, Mashq qilmoq (Learn)',
        strokeCount: 11,
        examples: [
            { word: '練習', reading: 'れんしゅう (Renshuu)', meaning: 'Mashq / Praktika' },
            { word: '習う', reading: 'ならう (Narau)', meaning: 'O\'rganmoq' }
        ]
    },
    {
        id: 'kanji_n4_study',
        level: 'N4',
        kanji: '強',
        onyomi: 'キョウ (kyou), ゴウ (gou)',
        kunyomi: 'つよ・い (tsuyo-i)',
        meaningUz: 'Kuchli, Majburlamoq (Strong)',
        strokeCount: 11,
        examples: [
            { word: '勉強', reading: 'べんきょう (Benkyou)', meaning: 'Dars qilish' },
            { word: '強い', reading: 'つよい (Tsuyoi)', meaning: 'Kuchli' }
        ]
    },

    // --- N3 KANJI ---
    {
        id: 'kanji_n3_dream',
        level: 'N3',
        kanji: '夢',
        onyomi: 'ム (mu)',
        kunyomi: 'ゆめ (yume)',
        meaningUz: 'Tush, Orzu (Dream)',
        strokeCount: 13,
        examples: [
            { word: '夢', reading: 'ゆめ (Yume)', meaning: 'Orzu / Tush' },
            { word: '夢中', reading: 'むちゅう (Muchuu)', meaning: 'Berilgan / Ishqiboz' }
        ]
    },

    // --- N2 KANJI ---
    {
        id: 'kanji_n2_residence',
        level: 'N2',
        kanji: '住',
        onyomi: 'ジュウ (juu)',
        kunyomi: 'す・む (su-mu)',
        meaningUz: 'Yashamoq, Istiqomat qilmoq (Live)',
        strokeCount: 7,
        examples: [
            { word: '住所', reading: 'じゅうしょ (Juusho)', meaning: 'Manzil' },
            { word: '住む', reading: 'すむ (Sumu)', meaning: 'Yashamoq' }
        ]
    },

    // --- N1 KANJI ---
    {
        id: 'kanji_n1_flourish',
        level: 'N1',
        kanji: '繁',
        onyomi: 'ハン (han)',
        kunyomi: 'しげ・る (shige-ru)',
        meaningUz: 'Rivojlanmoq, Gullab-yashnamoq (Flourish)',
        strokeCount: 16,
        examples: [
            { word: '繁栄', reading: 'はんえい (Hanei)', meaning: 'Gullab-yashnash' }
        ]
    }
];
