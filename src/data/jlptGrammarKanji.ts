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
    // N5
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
        structure: 'Fe\'l (Ta-otgan zamon shakli) + ことがあります',
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
    // N4
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
    // N3
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
    // N2
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
    // N1
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
    }
];

export const JLPT_KANJI_DATA: JlptKanjiItem[] = [
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
        id: 'kanji_n3_dream',
        level: 'N3',
        kanji: '夢',
        onyomi: 'ム (mu)',
        kunyomi: 'ゆめ (yume)',
        meaningUz: 'Tush, Orzu (Dream)',
        strokeCount: 13,
        examples: [
            { word: '夢', reading: 'ゆめ (Yume)', meaning: 'Orzu / Tush' },
            { word: '夢中', reading: 'むちゅう (Muchuu)', meaning: 'Beshukash berilgan / Ishqiboz' }
        ]
    },
    {
        id: 'kanji_n2_residence',
        level: 'N2',
        kanji: '住',
        onyomi: 'ジュウ (juu)',
        kunyomi: 'す・む (su-mu)',
        meaningUz: 'Yashamoq, Istiqomat qilmoq (Dwell, Live)',
        strokeCount: 7,
        examples: [
            { word: '住所', reading: 'じゅうしょ (Juusho)', meaning: 'Manzil / Yashash joyi' },
            { word: '住む', reading: 'すむ (Sumu)', meaning: 'Yashamoq' }
        ]
    }
];
