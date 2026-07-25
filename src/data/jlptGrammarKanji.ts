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
            { ja: 'これは私の本です。', romaji: 'Kore wa watashi no hon desu.', uz: 'Bu mening kitobim.' }
        ]
    },
    {
        id: 'n5_te_kudasai',
        level: 'N5',
        title: '〜てください (te kudasai)',
        romaji: 'te kudasai',
        meaningUz: '...-ing / Iltimos, ...-bajarib bering',
        structure: 'Fe\'l (Te-shakli) + ください',
        examples: [
            { ja: 'ここに名前を書いてください。', romaji: 'Koko ni namae wo kaite kudasai.', uz: 'Bu yerga ismingizni yozing.' }
        ]
    },
    {
        id: 'n5_te_imasu',
        level: 'N5',
        title: '〜ています (te imasu)',
        romaji: 'te imasu',
        meaningUz: '...-yapti / hozir bajarilayotgan harakat',
        structure: 'Fe\'l (Te-shakli) + います',
        examples: [
            { ja: '今雨が降っています。', romaji: 'Ima ame ga furutte imasu.', uz: 'Hozir yomg\'ir yog\'yapti.' }
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
        meaningUz: '...-shni o\'rganmoq / ... bo\'lib qolmoq',
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
        meaningUz: 'nafaqat ..., balki ... ham',
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
            { ja: '彼が努力したから合格したに違いない。', romaji: 'Kare ga doryoku shita kara goukaku shita ni chigai nai.', uz: 'U harakat qilgani uchun imtihondan o\'tganiga shubha yo\'q.' }
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
    {
        id: 'n2_ni_sootte',
        level: 'N2',
        title: '〜に沿って (ni sootte)',
        romaji: 'ni sootte',
        meaningUz: '... bo\'ylab / ... reja va yo\'riqnomaga binoan',
        structure: 'Ot + に沿って / に沿う + Ot',
        examples: [
            { ja: '計画に沿って着実に準備を進めましょう。', romaji: 'Keikaku ni sootte chakujitsu ni junbi wo susumemashou.', uz: 'Rejaga binoan puxta tayyorgarlikni davom ettiraylik.' }
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
        meaningUz: '...-shga majbur bo\'lmoq / boshqa chora yo\'q (Oliy darajadagi majburiyat)',
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
    },
    {
        id: 'n1_wo_kagi_ni',
        level: 'N1',
        title: '〜を限りに (wo kagiri ni)',
        romaji: 'wo kagiri ni',
        meaningUz: '...-ni oxirgi sana/chegara deb bilgan holda',
        structure: 'Ot + を限りに',
        examples: [
            { ja: '今日を限りに、この店を閉店いたします。', romaji: 'Kyou wo kagiri ni, kono mise wo heiten itashimasu.', uz: 'Bugungi kunni oxirgi chegara deb bilgan holda, ushbu do\'konni yopamiz.' }
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
            { word: '夢', reading: 'ゆめ (Yume)', meaning: 'Orzu / Tush' }
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
            { word: '住所', reading: 'じゅうしょ (Juusho)', meaning: 'Manzil' }
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
