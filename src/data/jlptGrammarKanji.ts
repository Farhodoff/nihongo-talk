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
    // --- N5 GRAMMAR ---
    {
        id: 'n5_te_wa_ikemasen',
        level: 'N5',
        title: '〜てはいけません (te wa ikemasen)',
        romaji: 'te wa ikemasen',
        meaningUz: '...-sa bo\'lmaydi, taqiqlanadi (bajarish man etiladi)',
        structure: 'Fe\'l (Te-shakli) + はいいけません',
        examples: [
            {
                ja: 'ここで写真を撮ってはいけません。',
                romaji: 'Koko de shashin wo totte wa ikemasen.',
                uz: 'Bu yerda rasmga tushirish mumkin emas.'
            },
            {
                ja: '教室でタバコを吸ってはいけません。',
                romaji: 'Kyoushitsu de tabako wo sutte wa ikemasen.',
                uz: 'Xonada tamaki chekish taqiqlanadi.'
            }
        ]
    },
    {
        id: 'n5_ta_koto_ga_arimasu',
        level: 'N5',
        title: '〜たことがあります (ta koto ga arimasu)',
        romaji: 'ta koto ga arimasu',
        meaningUz: '...-ganman / ...-gan tajribam bor',
        structure: 'Fe\'l (Ta-o\'tgan zamon) + ことがあります',
        examples: [
            {
                ja: '日本へ行ったことがあります。',
                romaji: 'Nihon e itta koto ga arimasu.',
                uz: 'Men Yaponiyaga borganman (tajribam bor).'
            },
            {
                ja: '寿司を食べたことがありますか。',
                romaji: 'Sushi wo tabeta koto ga arimasu ka.',
                uz: 'Sushini yeb ko\'rganmisiz?'
            }
        ]
    },
    {
        id: 'n5_te_mo_ii_desu',
        level: 'N5',
        title: '〜てもいいです (te mo ii desu)',
        romaji: 'te mo ii desu',
        meaningUz: '...-sa ham bo\'ladi / ruxsat beriladi',
        structure: 'Fe\'l (Te-shakli) + もいいです',
        examples: [
            {
                ja: 'ここで写真を撮ってもいいです。',
                romaji: 'Koko de shashin wo totte mo ii desu.',
                uz: 'Bu yerda rasmga tushirsangiz bo\'ladi.'
            }
        ]
    },
    {
        id: 'n5_ni_iku_kuru',
        level: 'N5',
        title: '〜に行きます / 来ます (ni ikimasu / kimasu)',
        romaji: 'ni ikimasu / kimasu',
        meaningUz: '...-gani bormoq / kelmoq (maqsad)',
        structure: 'Fe\'l (Masu-ildizi) + に行きます',
        examples: [
            {
                ja: '図書館へ本を借りに行きます。',
                romaji: 'Toshokan e hon wo kari ni ikimasu.',
                uz: 'Kutubxonaga kitob olgani boraman.'
            }
        ]
    },

    // --- N4 GRAMMAR ---
    {
        id: 'n4_younini_suru',
        level: 'N4',
        title: '〜ようにする (you ni suru)',
        romaji: 'you ni suru',
        meaningUz: '...-shga harakat qilmoq / odat qilmoq',
        structure: 'Fe\'l (Lug\'at shakli) + ようにする',
        examples: [
            {
                ja: '毎日野菜を食べるようにしています。',
                romaji: 'Mainichi yasai wo taberu you ni shite imasu.',
                uz: 'Har kuni sabzavot yeyishga harakat qilyapman.'
            }
        ]
    },
    {
        id: 'n4_sou_desu_hearsay',
        level: 'N4',
        title: '〜そうです (sou desu - eshitishimcha)',
        romaji: 'sou desu',
        meaningUz: 'eshitishimcha ..., deyishmoqda',
        structure: 'Fe\'l/Sifat/Ot (Oddiy shakl) + そうです',
        examples: [
            {
                ja: '明日は雨が降るそうです。',
                romaji: 'Ashita wa ame ga kuru sou desu.',
                uz: 'Eshitishimcha, ertaga yomg\'ir yog\'ar emish.'
            }
        ]
    },
    {
        id: 'n4_ba_form',
        level: 'N4',
        title: '〜ば (ba conditional)',
        romaji: 'ba',
        meaningUz: 'agar ...-sa (shart fe\'li)',
        structure: 'Fe\'l (Ba-shakli) / Sifat + ければ',
        examples: [
            {
                ja: '安ければ買います。',
                romaji: 'Yasukereba kaimasu.',
                uz: 'Arzon bo\'lsa sotib olaman.'
            }
        ]
    },

    // --- N3 GRAMMAR ---
    {
        id: 'n3_bakari_ka',
        level: 'N3',
        title: '〜ばかりか (bakari ka)',
        romaji: 'bakari ka',
        meaningUz: 'nafaqat ..., balki ... ham',
        structure: 'Fe\'l/Sifat/Ot + ばかりか',
        examples: [
            {
                ja: '彼は英語ばかりか日本語も話せます。',
                romaji: 'Kare wa Eigo bakari ka Nihongo mo hanasemasu.',
                uz: 'U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi.'
            }
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
            {
                ja: 'この問題に関して意見を言わせてください。',
                romaji: 'Kono mondai ni kanshite iken wo iwasete kudasai.',
                uz: 'Ushbu masala xususida o\'z fikrimni bildirishga ruxsat bering.'
            }
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
            {
                ja: '人によって考え方が違います。',
                romaji: 'Hito ni yotte kangaekata ga chigaimasu.',
                uz: 'Odamga qarab fikrlash tarzi har xil bo\'ladi.'
            }
        ]
    },

    // --- N2 GRAMMAR ---
    {
        id: 'n2_ni_chigai_nai',
        level: 'N2',
        title: '〜に違いない (ni chigai nai)',
        romaji: 'ni chigai nai',
        meaningUz: 'shubhasiz ... / aniq ... bo\'lsa kerak',
        structure: 'Fe\'l/Sifat/Ot + に違いない',
        examples: [
            {
                ja: '彼が合格したに違いない。',
                romaji: 'Kare ga goukaku shita ni chigai nai.',
                uz: 'U imtihondan o\'tganiga shubha yo\'q.'
            }
        ]
    },
    {
        id: 'n2_wo_kechi_ni',
        level: 'N2',
        title: '〜をきっかけに (wo kikkake ni)',
        romaji: 'wo kikkake ni',
        meaningUz: '... munosabati bilan / ... bahona bo\'lib',
        structure: 'Ot / Fe\'l (Ta-form) + のをきっかけに',
        examples: [
            {
                ja: 'アニメを見たのをきっかけに日本語を勉強し始めた。',
                romaji: 'Anime wo mita no wo kikkake ni Nihongo wo benkyou shihajimeta.',
                uz: 'Anime ko\'rganim bahona bo\'lib, yapon tilini o\'rganishni boshladim.'
            }
        ]
    },
    {
        id: 'n2_ni mekurazu',
        level: 'N2',
        title: '〜にもかかわらず (ni mo kakawarazu)',
        romaji: 'ni mo kakawarazu',
        meaningUz: '...-ga qaramay / qaramasdan',
        structure: 'Fe\'l/Sifat/Ot + にもかかわらず',
        examples: [
            {
                ja: '大雨にもかかわらず、多くの人が集まった。',
                romaji: 'Ooame ni mo kakawarazu, ooku no hito ga atsumatta.',
                uz: 'Kattalashgan yomg\'irga qaramay, ko\'plab odamlar yig\'ildi.'
            }
        ]
    },

    // --- N1 GRAMMAR ---
    {
        id: 'n1_zaru_wo_eta_nai',
        level: 'N1',
        title: '〜ざるを得ない (zaru wo eta nai)',
        romaji: 'zaru wo eta nai',
        meaningUz: '...-shga majbur bo\'lmoq / boshqa chora yo\'q',
        structure: 'Fe\'l (Nai-shakli ildizi) + ざるを得ない',
        examples: [
            {
                ja: '台風のため、計画を変更せざるを得ない。',
                romaji: 'Taifu no tame, keikaku wo henkou sezaru wo etanai.',
                uz: 'Tayfun sababli rejani o\'zgartirishga majburmiz.'
            }
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
            {
                ja: '連絡先が分からなければ、連絡しようがない。',
                romaji: 'Renrakusaki ga wakaranakereba, renroku shiyou ga nai.',
                uz: 'Bog\'lanish manzili bo\'lmasa, bog\'lanishning iloji yo\'q.'
            }
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
    {
        id: 'kanji_n3_feeling',
        level: 'N3',
        kanji: '感',
        onyomi: 'カン (kan)',
        kunyomi: 'かん・じる (kan-jiru)',
        meaningUz: 'His qilmoq, Tuyg\'u (Feeling)',
        strokeCount: 13,
        examples: [
            { word: '感情', reading: 'かんじょう (Kanjou)', meaning: 'His-tuyg\'u' },
            { word: '感謝', reading: 'かんしゃ (Kansha)', meaning: 'Minnatdorchilik' }
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
    {
        id: 'kanji_n2_environment',
        level: 'N2',
        kanji: '環',
        onyomi: 'カン (kan)',
        kunyomi: 'わ (wa)',
        meaningUz: 'Atrof-muhit, Halka (Environment)',
        strokeCount: 17,
        examples: [
            { word: '環境', reading: 'かんきょう (Kankyou)', meaning: 'Atrof-muhit' }
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
            { word: '繁栄', reading: 'はんえい (Hanei)', meaning: 'Gullab-yashnash' },
            { word: '繁華街', reading: 'はんかがい (Hankagai)', meaning: 'Gavjum savdo ko\'chasi' }
        ]
    }
];
