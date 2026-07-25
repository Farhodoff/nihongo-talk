export interface JlptGrammarItem {
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    title: string;
    romaji: string;
    meaningUz: string;
    structure: string;
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
    {
        id: 'n5_masu_forms',
        level: 'N5',
        title: 'Fe\'l ます / ません / ました / ませんでした',
        romaji: 'masu / masen / mashita / masen deshita',
        meaningUz: 'Hozirgi-kelasi va o\'tgan zamon fe\'l tuslanishlari (Xushmuomala shakli)',
        structure: 'Fe\'l ildizi + ます / ません / ました / ませんでした',
        examples: [
            { ja: '毎日勉強します。', romaji: 'Mainichi benkyou shimasu.', uz: 'Har kuni dars qilaman.' },
            { ja: 'きのうは勉強しませんでした。', romaji: 'Kinou wa benkyou shimasen deshita.', uz: 'Kechasi dars qilmadim.' }
        ]
    },
    {
        id: 'n5_direction_e',
        level: 'N5',
        title: '〜へ行きます / 来ます / 帰ります (e ikimasu / kimasu / kaerimasu)',
        romaji: 'e ikimasu / kimasu / kaerimasu',
        meaningUz: '...-ga boraman / kelaman / uyga qaytaman (Yo\'nalish kelishigi へ)',
        structure: 'Joy + へ + 行きます/来ます/帰ります',
        examples: [
            { ja: '明日京都へ行きます。', romaji: 'Ashita Kyou-to e ikimasu.', uz: 'Ertaga Kyotoga boraman.' },
            { ja: 'うちへ帰ります。', romaji: 'Uchi e kaerimasu.', uz: 'Uyga qaytaman.' }
        ]
    },
    {
        id: 'n5_means_de',
        level: 'N5',
        title: '〜で [Transport/Vosita] (de)',
        romaji: 'de',
        meaningUz: '... bilan / ... orqali (Transport va vosita kelishigi で)',
        structure: 'Transport/Vosita + で',
        examples: [
            { ja: '電車で会社へ行きます。', romaji: 'Densha de kaisha e ikimasu.', uz: 'Poezd bilan kompaniyaga boraman.' },
            { ja: '箸で食べます。', romaji: 'Hashi de tabemasu.', uz: 'Tayoqcha bilan yeyman.' }
        ]
    },
    {
        id: 'n5_with_to',
        level: 'N5',
        title: '〜と (to)',
        romaji: 'to',
        meaningUz: '... bilan (Birgalikda bajarish yuklamasi)',
        structure: 'Shaxs + と + Fe\'l',
        examples: [
            { ja: '家族と日本へ来ました。', romaji: 'Kazoku to Nihon e kimashita.', uz: 'Ooilam bilan Yaponiyaga keldim.' }
        ]
    },
    {
        id: 'n5_object_wo',
        level: 'N5',
        title: '〜を [Fe\'l] (wo)',
        romaji: 'wo',
        meaningUz: '...-ni (Vositasiz to\'ldiruvchi / Tushum kelishigi を)',
        structure: 'Ot + を + Fe\'l',
        examples: [
            { ja: 'パンを食べます。水をごくごく飲みます。', romaji: 'Pan wo tabemasu. Mizu wo gokugoku nomimasu.', uz: 'Non yeyman. Suv ichaman.' }
        ]
    },
    {
        id: 'n5_location_de',
        level: 'N5',
        title: '〜で [Harakat joyi] (de)',
        romaji: 'de',
        meaningUz: '...-da (Harakat yoki voqea sodir bo\'ladigan joy kelishigi で)',
        structure: 'Joy + で + Harakat fe\'li',
        examples: [
            { ja: '図書館で本を読みます。', romaji: 'Toshokan de hon wo yomimasu.', uz: 'Kutubxonada kitob o\'qiyman.' }
        ]
    },
    {
        id: 'n5_issho_ni_masen_ka',
        level: 'N5',
        title: '〜を一緒に〜ませんか (issho ni ... masen ka)',
        romaji: 'issho ni ... masen ka',
        meaningUz: 'Birga ...-aylikmi? / ...-maysizmi? (Xushmuomala taklif)',
        structure: 'Fe\'l (Masu-ildizi) + ませんか',
        examples: [
            { ja: '一緒にコーヒーを飲みませんか。', romaji: 'Issho ni koohii wo nomimasen ka.', uz: 'Birga kofe ichmaysizmi?' }
        ]
    },
    {
        id: 'n5_mashou',
        level: 'N5',
        title: '〜ましょう (mashou)',
        romaji: 'mashou',
        meaningUz: 'Keling, ...-aylik! / ...-aylik (Chorlov va taklifga rozi bo\'lish)',
        structure: 'Fe\'l (Masu-ildizi) + ましょう',
        examples: [
            { ja: 'ちょっと休見ましょう。', romaji: 'Chotto yasumimashou.', uz: 'Biroz dam olaylik.' }
        ]
    },
    {
        id: 'n5_ni_agemasu_moraimasu',
        level: 'N5',
        title: '〜にあげます / もらいます (ni agemasu / moraimasu)',
        romaji: 'ni agemasu / moraimasu',
        meaningUz: '...-ga bermoq / ...-dan olmoq',
        structure: 'Shaxs + に + Narsa + を + あげます/もらいます',
        examples: [
            { ja: '山田さんに花をあげました。', romaji: 'Yamada-san ni hana wo agemashita.', uz: 'Yamada xonimga gul berdim.' },
            { ja: '木村さんに本をもらいました。', romaji: 'Kimura-san ni hon wo moraimashita.', uz: 'Kimura xonimdan kitob oldim.' }
        ]
    },
    {
        id: 'n5_mou_mashita',
        level: 'N5',
        title: 'もう〜ました (mou ... mashita)',
        romaji: 'mou ... mashita',
        meaningUz: 'Allaqachon ...-bajarib bo\'ldim',
        structure: 'もう + Fe\'l (O\'tgan zamon ました)',
        examples: [
            { ja: 'もう昼ご飯を食べました。', romaji: 'Mou hirugohan wo tabemashita.', uz: 'Allaqachon tushlik qilib bo\'ldim.' }
        ]
    },
    {
        id: 'n5_i_na_adjectives',
        level: 'N5',
        title: 'い-Sifat & な-Sifat tuslanishlari (い形容詞 / な形容詞)',
        romaji: 'i-adjectives / na-adjectives',
        meaningUz: 'Yapon tilida sifatlarning bo\'lishli va bo\'lishsiz shakllari',
        structure: 'い ➔ くないです | な ➔ じゃありません',
        examples: [
            { ja: 'この部屋は広いです。高くありません。', romaji: 'Kono heya wa hiroi desu. Takaku arimasen.', uz: 'Bu xona keng. Qimmat emas.' },
            { ja: '富士山は有名で綺麗です。', romaji: 'Fujisan wa yuumei de kirei desu.', uz: 'Fuji tog\'i mashhur va go\'zal.' }
        ]
    },
    {
        id: 'n5_ga_daisuki_jouzu',
        level: 'N5',
        title: '〜が大好きです / 上手です / 下手です (ga daisuki / jouzu / heta)',
        romaji: 'ga daisuki desu / jouzu desu / heta desu',
        meaningUz: '...-ni juda yaxshi ko\'raman / usta-man / no\'noq-man',
        structure: 'Ot + が + 好きです/上手です/下手です',
        examples: [
            { ja: '私は日本語が好きです。サッカーが上手です。', romaji: 'Watashi wa Nihongo ga suki desu. Sakkaa ga jouzu desu.', uz: 'Men yapon tilini yaxshi ko\'raman. Futbolda ustaman.' }
        ]
    },
    {
        id: 'n5_kara_reason',
        level: 'N5',
        title: '〜から、〜 (kara - sabab)',
        romaji: 'kara',
        meaningUz: '... bo\'lgani uchun / ... sababli',
        structure: 'Gap1 (Sabab) + から、Gap2 (Natija)',
        examples: [
            { ja: '時間がありませんから、タクシーで行きます。', romaji: 'Jikan ga arimasen kara, takushii de ikimasu.', uz: 'Vaqt yo\'qligi uchun taksida boraman.' }
        ]
    },
    {
        id: 'n5_arimasu_imasu',
        level: 'N5',
        title: '〜があります / います (ga arimasu / imasu)',
        romaji: 'ga arimasu / imasu',
        meaningUz: '... bor (Jansiz narsalar uchun あります / Jonli maxluqlar uchun います)',
        structure: 'Ot + が + あります / います',
        examples: [
            { ja: 'あそこに本があります。犬がいます。', romaji: 'Asoko ni hon ga arimasu. Inu ga imasu.', uz: 'Anavi yerda kitob bor. It bor.' }
        ]
    },
    {
        id: 'n5_yori_hou_ga',
        level: 'N5',
        title: '〜より〜のほうが〜です (yori ... no hou ga)',
        romaji: 'N1 yori N2 no hou ga ... desu',
        meaningUz: 'N1-dan ko\'ra N2 afzalroq/kattaroq (Solishtirish)',
        structure: 'Ot1 + より + Ot2 + のほうが + Sifat + です',
        examples: [
            { ja: '車より電車のほうが速いです。', romaji: 'Kuruma yori densha no hou ga hayai desu.', uz: 'Mashinadan ko\'ra poezd tezroq.' }
        ]
    },
    {
        id: 'n5_no_naka_de_ichiban',
        level: 'N5',
        title: '〜の中で〜が一番〜です (no naka de ... ga ichiban)',
        romaji: 'N1 no naka de N2 ga ichiban ... desu',
        meaningUz: 'N1-ning ichida N2 eng ...-si (Orttirma daraja)',
        structure: 'Guruh + の中で + Ot + が一番 + Sifat + です',
        examples: [
            { ja: '1年の中で夏が一番好きです。', romaji: 'Ichinen no naka de natsu ga ichiban suki desu.', uz: 'Bir yilning ichida yozni eng ko\'p yaxshi ko\'raman.' }
        ]
    },
    {
        id: 'n5_tai_desu',
        level: 'N5',
        title: '〜たいです (tai desu)',
        romaji: 'tai desu',
        meaningUz: '...-gim kelyapti / ...-shni xohlayman (Shaxsiy istak)',
        structure: 'Fe\'l (Masu-ildizi) + たいです',
        examples: [
            { ja: '日本へ行きたいです。', romaji: 'Nihon e ikitai desu.', uz: 'Yaponiyaga borgim kelyapti.' },
            { ja: '温かいお茶が飲みたいです。', romaji: 'Atatakai ocha ga nomitai desu.', uz: 'Issiq choy ichgim kelyapti.' }
        ]
    },
    {
        id: 'n5_ni_ikimasu_purpose',
        level: 'N5',
        title: '〜へ[Fe\'l]に行きます (e ... ni ikimasu)',
        romaji: 'e ... ni ikimasu',
        meaningUz: '...-gani boraman (Bormoqdan maqsad)',
        structure: 'Joy + へ + Fe\'l (Masu-ildizi) + に行きます',
        examples: [
            { ja: 'デパートへ買い物に行きます。', romaji: 'Depaato e kaimono ni ikimasu.', uz: 'Supermarketga xarid qilgani boraman.' }
        ]
    },
    {
        id: 'n5_te_kudasai',
        level: 'N5',
        title: '〜てください (te kudasai)',
        romaji: 'te kudasai',
        meaningUz: '...-ing / Iltimos, ...-bajarib bering (Xushmuomala iltimos)',
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
        meaningUz: '...-yapti / hozir bajarilayotgan harakat (Hozirgi davomli zamon)',
        structure: 'Fe\'l (Te-shakli) + います',
        examples: [
            { ja: '今雨が降っています。', romaji: 'Ima ame ga furutte imasu.', uz: 'Hozir yomg\'ir yog\'yapti.' },
            { ja: 'ミラーさんは今電話をかけています。', romaji: 'Miraa-san wa ima denwa wo kakete imasu.', uz: 'Mira janoblari hozir telefonda gaplashyapti.' }
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
            { ja: 'ここで写真を撮ってもいいです。', romaji: 'Koko de shashin wo totte mo ii desu.', uz: 'Bu yerda rasmga tushirsangiz bo\'ladi.' }
        ]
    },
    {
        id: 'n5_te_wa_ikemasen',
        level: 'N5',
        title: '〜てはいけません (te wa ikemasen)',
        romaji: 'te wa ikemasen',
        meaningUz: '...-sa bo\'lmaydi, taqiqlanadi (Man etilgan harakat)',
        structure: 'Fe\'l (Te-shakli) + はいいけません',
        examples: [
            { ja: 'ここでタバコを吸ってはいけません。', romaji: 'Koko de tabako wo sutte wa ikemasen.', uz: 'Bu yerda tamaki chekish taqiqlanadi.' }
        ]
    },
    {
        id: 'n5_naide_kudasai',
        level: 'N5',
        title: '〜ないでください (naide kudasai)',
        romaji: 'naide kudasai',
        meaningUz: '...-mang / Iltimos, ...-bajarib o\'tmang (Inkor iltimos)',
        structure: 'Fe\'l (Nai-shakli) + でください',
        examples: [
            { ja: '写真を撮らないでください。', romaji: 'Shashin wo toranaide kudasai.', uz: 'Rasmga tushurmang.' }
        ]
    },
    {
        id: 'n5_nakereba_narimosen',
        level: 'N5',
        title: '〜なければなりません (nakereba narimasen)',
        romaji: 'nakereba narimasen',
        meaningUz: '...-shim shart / bajarishim shart va zarur',
        structure: 'Fe\'l (Nai-shakli ildizi) + ければなりません',
        examples: [
            { ja: '薬を飲まなければなりません。', romaji: 'Kusuri wo nomanakereba narimasen.', uz: 'Dori ichishim shart.' }
        ]
    },
    {
        id: 'n5_nakute_mo_ii_desu',
        level: 'N5',
        title: '〜なくてもいいです (nakute mo ii desu)',
        romaji: 'nakute mo ii desu',
        meaningUz: '...-shingiz shart emas / bajarmasangiz ham bo\'ladi',
        structure: 'Fe\'l (Nai-shakli ildizi) + くてもいいです',
        examples: [
            { ja: '明日来なくてもいいです。', romaji: 'Ashita konakute mo ii desu.', uz: 'Ertaga kelmasangiz ham bo\'ladi.' }
        ]
    },
    {
        id: 'n5_tari_tari_shimasu',
        level: 'N5',
        title: '〜たり、〜たりします (tari, tari shimasu)',
        romaji: 'tari, tari shimasu',
        meaningUz: 'goh ...-bajaraman, goh ...-bajaraman (Harakatlar sanab o\'tish)',
        structure: 'Fe\'l1 (Ta-form) + り、Fe\'l2 (Ta-form) + りします',
        examples: [
            { ja: '日曜日本を読んだり、音楽を聞いたりします。', romaji: 'Nichiyoubi hon wo yondari, ongaku wo kikitari shimasu.', uz: 'Yakshanba kuni goh kitob o\'qiyman, goh musiqa tinglayman.' }
        ]
    },
    {
        id: 'n5_ta_koto_ga_arimasu',
        level: 'N5',
        title: '〜たことがあります (ta koto ga arimasu)',
        romaji: 'ta koto ga arimasu',
        meaningUz: '...-ganman / ...-gan tajribam bor',
        structure: 'Fe\'l (Ta-form) + ことがあります',
        examples: [
            { ja: '富士山に登ったことがあります。', romaji: 'Fujisan ni nobotta koto ga arimasu.', uz: 'Fuji tog\'iga ko\'tarilganman.' }
        ]
    },

    // ==========================================,

        {
        "id": "n4_pdf_1_amarinai",
        "level": "N4",
        "title": "あまり～ない (amari~nai)",
        "romaji": "amari~nai",
        "meaningUz": "not very, not much",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "今度の一件については、どうもあまり自信はない。",
                "romaji": "kondo no ikken ni tsuite wa, doumo amari jishin wa nai.",
                "uz": "I don't feel too sure about this whole affair."
            }
        ]
    },
    {
        "id": "n4_pdf_2_ato_de",
        "level": "N4",
        "title": "あとで (ato de)",
        "romaji": "ato de",
        "meaningUz": "after, later",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "私は会社を辞めたあとで、彼からの連絡もめっきり減っていた。",
                "romaji": "watashi wa kaisha o yameta ato de, kare kara no renraku mo mekkiri hette ita.",
                "uz": "After I quit my job, I hadn't heard from him much."
            }
        ]
    },
    {
        "id": "n4_pdf_3_ba",
        "level": "N4",
        "title": "ば (ba)",
        "romaji": "ba",
        "meaningUz": "if… then",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "人は死ねば、皮膚しか身につけていない。",
                "romaji": "hito wa shineba, hifu shika mi ni tsukete inai.",
                "uz": "When a man dies he has only his skin."
            }
        ]
    },
    {
        "id": "n4_pdf_4_baai_wa",
        "level": "N4",
        "title": "場合は (baai wa)",
        "romaji": "baai wa",
        "meaningUz": "in the event of",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "頭部の外傷の場合、最初の二十四時間は注意が必要です。",
                "romaji": "toubu no gaishou no baai, saisho no nijuuyo jikan wa chuui ga hitsuyou desu.",
                "uz": "Head trauma is delicate in the first twenty-four hours."
            }
        ]
    },
    {
        "id": "n4_pdf_5_dake_de",
        "level": "N4",
        "title": "だけで (dake de)",
        "romaji": "dake de",
        "meaningUz": "just by",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "安定した収入を得るだけでは満足できなかった。",
                "romaji": "antei shita shuunyuu o eru dake de wa manzoku dekinakatta.",
                "uz": "I wasn't satisfied just to earn a good living."
            }
        ]
    },
    {
        "id": "n4_pdf_6_dasu",
        "level": "N4",
        "title": "だす (dasu)",
        "romaji": "dasu",
        "meaningUz": "to suddenly begin, to suddenly appear",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼の話を聞いて、つい笑い出してしまった。",
                "romaji": "kare no hanashi o kiite, tsui warai dashite shimatta.",
                "uz": "I burst into laughing when I heard his story."
            }
        ]
    },
    {
        "id": "n4_pdf_7_demo",
        "level": "N4",
        "title": "でも (demo)",
        "romaji": "demo",
        "meaningUz": "or something",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "何か暖かいものでも飲む？",
                "romaji": "nanika atatakai mono demo nomu.",
                "uz": "How about something hot to drink?"
            }
        ]
    },
    {
        "id": "n4_pdf_8_de_gozaimasu",
        "level": "N4",
        "title": "でございます (de gozaimasu)",
        "romaji": "de gozaimasu",
        "meaningUz": "to be (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ほんとに冬の間は、ここはおそろしいほど閑静なんでございますのよ。",
                "romaji": "honto ni fuyu no aida wa, koko wa osoroshii hodo kansei nan de gozaimasu no yo.",
                "uz": "It's very quiet here in the winter."
            }
        ]
    },
    {
        "id": "n4_pdf_9_garu",
        "level": "N4",
        "title": "がる (garu)",
        "romaji": "garu",
        "meaningUz": "to show signs of, to feel",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "手に入れるのが難しいものほど、人は欲しがるのだ。",
                "romaji": "te ni ireru no ga muzukashii mono hodo, hito wa hoshigaru no da.",
                "uz": "The more unattainable something seems, the more people want it."
            }
        ]
    },
    {
        "id": "n4_pdf_10_ga_suru",
        "level": "N4",
        "title": "がする (ga suru)",
        "romaji": "ga suru",
        "meaningUz": "smell, hear, taste",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "背後で重厚なドアが閉じる音がした。",
                "romaji": "haigo de juukou na doa ga tojiru oto ga shita.",
                "uz": "The heavy door clicked shut behind me."
            }
        ]
    },
    {
        "id": "n4_pdf_11_goro",
        "level": "N4",
        "title": "ごろ (goro)",
        "romaji": "goro",
        "meaningUz": "around, about",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "オフィスには八時頃行き、電話をかけたり受けたりし始めます。",
                "romaji": "ofisu ni wa hachiji goro iki, denwa o kaketari uketari shihajimemasu.",
                "uz": "I usually arrive at my office by eight, and I start getting on the phone."
            }
        ]
    },
    {
        "id": "n4_pdf_12_gozaimasu",
        "level": "N4",
        "title": "ございます (gozaimasu)",
        "romaji": "gozaimasu",
        "meaningUz": "to be, to exist (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ここに私の出生証明書がございます。",
                "romaji": "koko ni watashi no shussei shoumeisho ga gozaimasu.",
                "uz": "Here is the register of my birth."
            }
        ]
    },
    {
        "id": "n4_pdf_13_hajimeru",
        "level": "N4",
        "title": "始める (hajimeru)",
        "romaji": "hajimeru",
        "meaningUz": "to start, to begin to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "私はとても暑く感じ始めました。",
                "romaji": "watashi wa totemo atsuku kanji hajimemashita.",
                "uz": "I started to feel very hot."
            }
        ]
    },
    {
        "id": "n4_pdf_14_hazu_da",
        "level": "N4",
        "title": "はずだ (hazu da)",
        "romaji": "hazu da",
        "meaningUz": "it must be, it should be",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "容疑者に裁判を拒否することはできないはずです。",
                "romaji": "yougisha ni saiban o kyohi suru koto wa dekinai hazu desu.",
                "uz": "A trial surely cannot be denied to one who is accused."
            }
        ]
    },
    {
        "id": "n4_pdf_15_hazu_ga_nai",
        "level": "N4",
        "title": "はずがない (hazu ga nai)",
        "romaji": "hazu ga nai",
        "meaningUz": "cannot be",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ご主人の悪口を奥さんに聞かせていいはずがないんだ。",
                "romaji": "goshujin no warukuchi o okusan ni kikasete ii hazu ga nain da.",
                "uz": "No one has a right to criticize a husband to a wife."
            }
        ]
    },
    {
        "id": "n4_pdf_16_hitsuyou_ga_aru",
        "level": "N4",
        "title": "必要がある (hitsuyou ga aru)",
        "romaji": "hitsuyou ga aru",
        "meaningUz": "it is necessary to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "もう一度お会いする必要があります。",
                "romaji": "mou ichido oai suru hitsuyou ga arimasu.",
                "uz": "We need to meet again."
            }
        ]
    },
    {
        "id": "n4_pdf_17_hoshii",
        "level": "N4",
        "title": "欲しい (hoshii)",
        "romaji": "hoshii",
        "meaningUz": "to want something, to be in need of",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "イエスという答がほしい。あなたはこの仕事の最適任者だ。",
                "romaji": "iesu to iu kotae ga hoshii. anata wa kono shigoto no saitekininsha da.",
                "uz": "I want you to say yes. You're the best person for the job."
            }
        ]
    },
    {
        "id": "n4_pdf_18_irassharu",
        "level": "N4",
        "title": "いらっしゃる (irassharu)",
        "romaji": "irassharu",
        "meaningUz": "to be, to come, to go (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "またいらっしゃってください。",
                "romaji": "Reibun desu.",
                "uz": "mata irasshatte kudasai."
            }
        ]
    },
    {
        "id": "n4_pdf_19_itasu",
        "level": "N4",
        "title": "いたす (itasu)",
        "romaji": "itasu",
        "meaningUz": "to do (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "お邪魔いたしまして申しわけございませんでした。",
                "romaji": "ojama itashimashite moushiwake gozaimasen deshita.",
                "uz": "I'm sorry for interrupting you."
            }
        ]
    },
    {
        "id": "n4_pdf_20_janai_ka",
        "level": "N4",
        "title": "じゃないか (janai ka)",
        "romaji": "janai ka",
        "meaningUz": "isn’t it",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "隠れるところがないじゃないか！",
                "romaji": "kakureru tokoro ga nai janai ka.",
                "uz": "There's nowhere to hide!"
            }
        ]
    },
    {
        "id": "n4_pdf_21_ka_dou_ka",
        "level": "N4",
        "title": "かどうか (ka dou ka)",
        "romaji": "ka dou ka",
        "meaningUz": "whether or not",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "自分が本当に正しいことをしているのかどうか、確信がもてなくなることがある。",
                "romaji": "jibun ga hontou ni tadashii koto o shite iru no ka dou ka, kakushin ga motenakunaru koto ga aru.",
                "uz": "Sometimes I'm not sure whether I'm doing the right thing or not."
            }
        ]
    },
    {
        "id": "n4_pdf_22_kai",
        "level": "N4",
        "title": "かい (kai)",
        "romaji": "kai",
        "meaningUz": "[turns a sentence into a yes/no question]",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "それで、学校はどうだった？友だちはできたかい？",
                "romaji": "sore de, gakkou wa dou datta. tomodachi wa dekita kai.",
                "uz": "So, how did you like school? Have you made any friends?"
            }
        ]
    },
    {
        "id": "n4_pdf_23_kamoshirenai",
        "level": "N4",
        "title": "かもしれない (kamoshirenai)",
        "romaji": "kamoshirenai",
        "meaningUz": "might, maybe",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "私は本当はあなたに会わなかったほうがよかったのかもしれない。",
                "romaji": "watashi wa hontou wa anata ni awanakatta hou ga yokatta no kamoshirenai.",
                "uz": "Maybe I shouldn't have met you, after all."
            }
        ]
    },
    {
        "id": "n4_pdf_24_kana",
        "level": "N4",
        "title": "かな (kana)",
        "romaji": "kana",
        "meaningUz": "I wonder",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "あなたはわたしといっしょに旅行するのはいやなのかな？",
                "romaji": "anata wa watashi to issho ni ryokou suru no wa iya na no kana.",
                "uz": "You wouldn't like me to travel with you, would you?"
            }
        ]
    },
    {
        "id": "n4_pdf_25_kata",
        "level": "N4",
        "title": "かた (kata)",
        "romaji": "kata",
        "meaningUz": "how to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "その初めて投票したときのやり方は、誇れるようなものではありません。",
                "romaji": "sono hajimete touhyou shita toki no yarikata wa, hokoreru you na mono de wa arimasen.",
                "uz": "I'm not proud of how I voted that first time."
            }
        ]
    },
    {
        "id": "n4_pdf_26_kashira",
        "level": "N4",
        "title": "かしら (kashira)",
        "romaji": "kashira",
        "meaningUz": "I wonder",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "今度の土曜日に電話かけていいかしら？",
                "romaji": "kondo no doyoubi ni denwa kakete ii kashira.",
                "uz": "Can I call you on Saturday?"
            }
        ]
    },
    {
        "id": "n4_pdf_27_koto",
        "level": "N4",
        "title": "こと (koto)",
        "romaji": "koto",
        "meaningUz": "Verb nominalizer",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼は休息に多くの時間をあたえることになれていない。",
                "romaji": "kare wa kyuusoku ni ooku no jikan o ataeru koto ni narete inai.",
                "uz": "He's not accustomed to devote many hours to rest."
            }
        ]
    },
    {
        "id": "n4_pdf_28_koto_ga_dekiru",
        "level": "N4",
        "title": "ことができる (koto ga dekiru)",
        "romaji": "koto ga dekiru",
        "meaningUz": "can, be able to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼女はどうかこうか字は読めたが、書くことができなかった。",
                "romaji": "kanojo wa douka kouka ji wa yometa ga, kaku koto ga dekinakatta.",
                "uz": "She barely knew how to read, and did not know how to write."
            }
        ]
    },
    {
        "id": "n4_pdf_29_made_ni",
        "level": "N4",
        "title": "までに (made ni)",
        "romaji": "made ni",
        "meaningUz": "by, by the time",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "僕はこれまでに何度か彼女に嘘をついた。",
                "romaji": "boku wa kore made ni nando ka kanojo ni uso o tsuita.",
                "uz": "I've lied to her before."
            }
        ]
    },
    {
        "id": "n4_pdf_30_mitai",
        "level": "N4",
        "title": "みたい (mitai)",
        "romaji": "mitai",
        "meaningUz": "like, sort of",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "あまり頭のいい人物じゃなかったけど、かなり儲けているみたいだった。",
                "romaji": "amari atama no ii jinbutsu janakatta kedo, kanari moukete iru mitai datta.",
                "uz": "He wasn't that bright, but he seemed to be making a fortune."
            }
        ]
    },
    {
        "id": "n4_pdf_31_mitai_nimitai_na",
        "level": "N4",
        "title": "みたいに/みたいな (mitai ni/mitai na)",
        "romaji": "mitai ni/mitai na",
        "meaningUz": "like, similar to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼女の心は氷みたいに冷たい。",
                "romaji": "Her heart is as cold as ice.",
                "uz": "kanojo no kokoro wa koori mitai ni tsumetai."
            }
        ]
    },
    {
        "id": "n4_pdf_32_nado",
        "level": "N4",
        "title": "など (nado)",
        "romaji": "nado",
        "meaningUz": "such as, things like",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "これ以上人生から学ぶことなどないと考えていた。",
                "romaji": "kore ijou jinsei kara manabu koto nado nai to kangaete ita.",
                "uz": "I thought life could teach me no more."
            }
        ]
    },
    {
        "id": "n4_pdf_33_nagara",
        "level": "N4",
        "title": "ながら (nagara)",
        "romaji": "nagara",
        "meaningUz": "while, during, as",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "子どものころは誰もがバービー人形で遊びながら育ちますよね。",
                "romaji": "kodomo no koro wa daremo ga baabii ningyou de asobinagara sodachimasu yo ne.",
                "uz": "Everyone grew up playing Barbie dolls, right?"
            }
        ]
    },
    {
        "id": "n4_pdf_34_naide",
        "level": "N4",
        "title": "ないで (naide)",
        "romaji": "naide",
        "meaningUz": "without doing, don’t",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "僕たちは誰にも気付かれないで村を出てきたんだ。",
                "romaji": "bokutachi wa dare ni mo kidzukarenaide mura o dete kitan da.",
                "uz": "We left the village without anyone knowing."
            }
        ]
    },
    {
        "id": "n4_pdf_35_nakereba_ikenainakereba_naranai",
        "level": "N4",
        "title": "なければいけない/なければならない (nakereba ikenai/nakereba naranai)",
        "romaji": "nakereba ikenai/nakereba naranai",
        "meaningUz": "must, have to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "だが私は行かなければならない。私を引きとめようとしても無駄だからね。",
                "romaji": "da ga watashi wa ikanakereba naranai. watashi o hikitomeyou to shite mo muda dakara ne.",
                "uz": "But I must go. It is no use your trying to keep me."
            }
        ]
    },
    {
        "id": "n4_pdf_36_nakutewa_ikenainakutewa_naranai",
        "level": "N4",
        "title": "なくてはいけない/なくてはならない (nakutewa ikenai/nakutewa naranai)",
        "romaji": "nakutewa ikenai/nakutewa naranai",
        "meaningUz": "must, have to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "報告書を書き直さなくてはならない。",
                "romaji": "houkokusho o kakinaosanakute wa naranai.",
                "uz": "I have to do my report over."
            }
        ]
    },
    {
        "id": "n4_pdf_37_nakute_mo_ii",
        "level": "N4",
        "title": "なくてもいい (nakute mo ii)",
        "romaji": "nakute mo ii",
        "meaningUz": "don’t have to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "もうこの問題については考えなくていい。",
                "romaji": "mou kono mondai ni tsuite wa kangaenakute ii.",
                "uz": "You don't need to worry about this anymore."
            }
        ]
    },
    {
        "id": "n4_pdf_38_nara",
        "level": "N4",
        "title": "なら (nara)",
        "romaji": "nara",
        "meaningUz": "if, in case, as for",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼女を殺したいのなら、僕も殺しなさい！",
                "romaji": "kanojo o koroshitai no nara, boku mo koroshinasai.",
                "uz": "If you want to kill her, you'll have to kill me too!"
            }
        ]
    },
    {
        "id": "n4_pdf_39_nasai",
        "level": "N4",
        "title": "なさい (nasai)",
        "romaji": "nasai",
        "meaningUz": "command (order somebody to do something)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "元気を出しなさい。来週には京都に連れていってやろう。",
                "romaji": "genki o dashinasai. raishuu ni wa kyouto ni tsurete itte yarou.",
                "uz": "Cheer up, and I'll take you to Kyoto next week."
            }
        ]
    },
    {
        "id": "n4_pdf_40_nasaru",
        "level": "N4",
        "title": "なさる (nasaru)",
        "romaji": "nasaru",
        "meaningUz": "to do (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "あまり期待なさらないでくださいよ。",
                "romaji": "amari kitai nasaranaide kudasai yo.",
                "uz": "Please do not expect too much."
            }
        ]
    },
    {
        "id": "n4_pdf_41_ni_ki_ga_tsuku",
        "level": "N4",
        "title": "に気がつく (ni ki ga tsuku)",
        "romaji": "ni ki ga tsuku",
        "meaningUz": "to notice, to realize",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "そのとき彼は、彼女が泣いているのに気がついた。",
                "romaji": "Then he noticed that she was crying.",
                "uz": "sono toki kare wa, kanojo ga naite iru noni ki ga tsuita."
            }
        ]
    },
    {
        "id": "n4_pdf_42_nikui",
        "level": "N4",
        "title": "にくい (nikui)",
        "romaji": "nikui",
        "meaningUz": "difficult, hard to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "悪い知らせって言いにくい。",
                "romaji": "warui shirase tte iinikui.",
                "uz": "It's not easy to tell people bad news."
            }
        ]
    },
    {
        "id": "n4_pdf_43_ni_mieru",
        "level": "N4",
        "title": "に見える (ni mieru)",
        "romaji": "ni mieru",
        "meaningUz": "to look, to seem",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "私には、彼は少し腹を立てているように見えた。",
                "romaji": "watashi ni wa, kare wa sukoshi hara o tatete iru you ni mieta.",
                "uz": "I could see he was a little upset."
            }
        ]
    },
    {
        "id": "n4_pdf_44_no_naka_de",
        "level": "N4",
        "title": "のなかで (no naka de)",
        "romaji": "no naka de",
        "meaningUz": "in, among",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼は俺に人生の中で一番の親友だ。",
                "romaji": "kare wa ore ni jinsei no naka de ichiban no shin'yuu da.",
                "uz": "He is the closest friend I ever had."
            }
        ]
    },
    {
        "id": "n4_pdf_45_no_you_nino_you_na",
        "level": "N4",
        "title": "のように / のような (no you ni/no you na)",
        "romaji": "no you ni/no you na",
        "meaningUz": "like, similar to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼の眼は錐のように、冷たく、そして鋭かった。",
                "romaji": "kare no me wa kiri no you ni, tsumetaku, soshite surudokatta.",
                "uz": "His glance was like a drill, cold and piercing."
            }
        ]
    },
    {
        "id": "n4_pdf_46_okudasai",
        "level": "N4",
        "title": "お～ください (o~kudasai)",
        "romaji": "o~kudasai",
        "meaningUz": "please do (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ドアが閉まります。ご注意ください。",
                "romaji": "doa ga shimarimasu. go chuui kudasai.",
                "uz": "The door is being closed. Please be careful."
            }
        ]
    },
    {
        "id": "n4_pdf_47_oni_naru",
        "level": "N4",
        "title": "お～になる (o~ni naru)",
        "romaji": "o~ni naru",
        "meaningUz": "to do (honorific)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "いつ招待状をお出しになりますか？",
                "romaji": "itsu shoutaijou o odashi ni narimasu ka.",
                "uz": "When will you send your invitations?"
            }
        ]
    },
    {
        "id": "n4_pdf_48_oki_ni",
        "level": "N4",
        "title": "おきに (oki ni)",
        "romaji": "oki ni",
        "meaningUz": "repeated at intervals, every",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼は一週間おきに問題を起こす生徒だ。",
                "romaji": "kare wa isshuukan oki ni mondai o okosu seito da.",
                "uz": "He's the kind of student who gets in trouble every other week."
            }
        ]
    },
    {
        "id": "n4_pdf_49_owaru",
        "level": "N4",
        "title": "終わる (owaru)",
        "romaji": "owaru",
        "meaningUz": "to finish, to end",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "話し終わると、記者たちの質問が殺到した。",
                "romaji": "hanashiowaru to, kishatachi no shitsumon ga sattou shita.",
                "uz": "After I finished, the reporters asked a million questions."
            }
        ]
    },
    {
        "id": "n4_pdf_50_rashii",
        "level": "N4",
        "title": "らしい (rashii)",
        "romaji": "rashii",
        "meaningUz": "seems like",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "どうも最近、物覚えがわるくなっているらしい。",
                "romaji": "doumo saikin, monooboe ga waruku natte iru rashii.",
                "uz": "I suppose my memory is getting faulty."
            }
        ]
    },
    {
        "id": "n4_pdf_51_sa",
        "level": "N4",
        "title": "さ (sa)",
        "romaji": "sa",
        "meaningUz": "[nominalizer for adjectives]",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "あなたの強さは、どこから来ているのでしょうか？",
                "romaji": "anata no tsuyosa wa, doko kara kite iru no deshou ka.",
                "uz": "Where's your strength coming from, I wonder?"
            }
        ]
    },
    {
        "id": "n4_pdf_52_saseru",
        "level": "N4",
        "title": "させる (saseru)",
        "romaji": "saseru",
        "meaningUz": "to make/let somebody do something",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "なぜかその人たちは、わたしを不安な気持にさせた。",
                "romaji": "nazeka sono hitotachi wa, watashi o fuan na kimochi ni saseta.",
                "uz": "I didn't know why, but those people made me uneasy."
            }
        ]
    },
    {
        "id": "n4_pdf_53_saserareru",
        "level": "N4",
        "title": "させられる (saserareru)",
        "romaji": "saserareru",
        "meaningUz": "to be made to do something",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "母は家計を支えるために高校をやめさせられた。",
                "romaji": "haha wa kakei o sasaeru tame ni koukou o yamesaserareta.",
                "uz": "My mother was pulled out of school to help support her family."
            }
        ]
    },
    {
        "id": "n4_pdf_54_sasuga",
        "level": "N4",
        "title": "さすが (sasuga)",
        "romaji": "sasuga",
        "meaningUz": "as one would expect",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "さすがにこういうところには住みたくないな…",
                "romaji": "sasuga ni kou iu tokoro ni wa sumitakunai na.",
                "uz": "Just as I thought, I wouldn't wanna live in a place like this..."
            }
        ]
    },
    {
        "id": "n4_pdf_55_shishi",
        "level": "N4",
        "title": "し～し (shi~shi)",
        "romaji": "shi~shi",
        "meaningUz": "and",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼は勉強も運動もできるし背も高いし…",
                "romaji": "kare wa benkyou mo undou mo dekiru shi se mo takai shi.",
                "uz": "He's good at studying and sports, and he's tall."
            }
        ]
    },
    {
        "id": "n4_pdf_56_shikanai",
        "level": "N4",
        "title": "しか～ない (shika~nai)",
        "romaji": "shika~nai",
        "meaningUz": "only, nothing but",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "正しくやれるチャンスは１回しかないんだ。",
                "romaji": "tadashiku yareru chansu wa ikkai shika nain da.",
                "uz": "You only have one chance to do things right."
            }
        ]
    },
    {
        "id": "n4_pdf_57_sonna_ni",
        "level": "N4",
        "title": "そんなに (sonna ni)",
        "romaji": "sonna ni",
        "meaningUz": "so, so much, like that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "わたしのことがそんなに大切？",
                "romaji": "watashi no koto ga sonna ni taisetsu.",
                "uz": "Do I mean so much to you?"
            }
        ]
    },
    {
        "id": "n4_pdf_58_sore_demo",
        "level": "N4",
        "title": "それでも (sore demo)",
        "romaji": "sore demo",
        "meaningUz": "but still, and yet",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼女は食べることに集中しようとした。それでも手は震え、顔は怒りで火照りはじめた。",
                "romaji": "kanojo wa taberu koto ni shuuchuu shiyou to shita. sore demo te wa furue, kao wa ikari de hoteri",
                "uz": "She tried to concentrate on her food, but her hands shook and her face was starting to burn with anger."
            }
        ]
    },
    {
        "id": "n4_pdf_59_sou_nisou_na",
        "level": "N4",
        "title": "そうに/そうな (sou ni/sou na)",
        "romaji": "sou ni/sou na",
        "meaningUz": "seem, look like",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ヒカルだけがかなり快活そうな様子をしていました。",
                "romaji": "hikaru dake ga kanari kaikatsu sou na yousu o shite imashita.",
                "uz": "Hikaru alone seemed fairly cheerful."
            }
        ]
    },
    {
        "id": "n4_pdf_60_ta_bakari",
        "level": "N4",
        "title": "たばかり (ta bakari)",
        "romaji": "ta bakari",
        "meaningUz": "just did, something just happened",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "その話を聞いていたら、うちの娘が生まれたばかりのころを思い出した。",
                "romaji": "sono hanashi o kiite itara, uchi no musume ga umareta bakari no koro o omoidashita.",
                "uz": "That story reminded me of when my daughter was just born."
            }
        ]
    },
    {
        "id": "n4_pdf_61_tagaru",
        "level": "N4",
        "title": "たがる (tagaru)",
        "romaji": "tagaru",
        "meaningUz": "to want to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "三浦さんは私の演説に目を通したがっていた。",
                "romaji": "miurasan wa watashi no enzetsu ni me o tooshitagatte ita.",
                "uz": "Miura wanted to see my speech."
            }
        ]
    },
    {
        "id": "n4_pdf_62_tara",
        "level": "N4",
        "title": "たら (tara)",
        "romaji": "tara",
        "meaningUz": "if, after, when",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "もしあなたがお亡くなりになったら、私も死にます。",
                "romaji": "moshi anata ga onakunari ni nattara, watashi mo shinimasu.",
                "uz": "If you were to die, I would die too."
            }
        ]
    },
    {
        "id": "n4_pdf_63_tara_dou",
        "level": "N4",
        "title": "たらどう (tara dou)",
        "romaji": "tara dou",
        "meaningUz": "why don’t you?",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "それはネットで調べたらどう？",
                "romaji": "sore wa netto de shirabetara dou.",
                "uz": "Why don't you look it up on the Internet?"
            }
        ]
    },
    {
        "id": "n4_pdf_64_taritari",
        "level": "N4",
        "title": "たり～たり (tari~tari)",
        "romaji": "tari~tari",
        "meaningUz": "do such things like",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "友達と一緒にご飯を食べたり話したりするのが楽しかったです。",
                "romaji": "tomodachi to issho ni gohan o tabetari hanashitari suru no ga tanoshikatta desu.",
                "uz": "It was fun eating and chatting with my friends."
            }
        ]
    },
    {
        "id": "n4_pdf_65_ta_tokoro",
        "level": "N4",
        "title": "たところ (ta tokoro)",
        "romaji": "ta tokoro",
        "meaningUz": "just finished doing, was just doing",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "高木が、書斎のガラス戸から庭へ出たところだ。",
                "romaji": "takagi ga, shosai no garasuto kara niwa e deta tokoro da.",
                "uz": "Takagi just stepped out from his study window into the garden."
            }
        ]
    },
    {
        "id": "n4_pdf_66_te_ageru",
        "level": "N4",
        "title": "てあげる (te ageru)",
        "romaji": "te ageru",
        "meaningUz": "to do something for someone",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "タクシーを拾ってあげようか？",
                "romaji": "takushii o hirotte ageyou ka.",
                "uz": "Shall I call you a cab?"
            }
        ]
    },
    {
        "id": "n4_pdf_67_te_aru",
        "level": "N4",
        "title": "てある (te aru)",
        "romaji": "te aru",
        "meaningUz": "something is/has been done",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "何かが骨のなかに差し込んである。",
                "romaji": "nanika ga hone no naka ni sashikonde aru.",
                "uz": "There's something inserted inside this bone."
            }
        ]
    },
    {
        "id": "n4_pdf_68_te_hoshii",
        "level": "N4",
        "title": "てほしい (te hoshii)",
        "romaji": "te hoshii",
        "meaningUz": "I need you to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "向こうで待っていてほしい。あとから私も行く。",
                "romaji": "mukou de matte ite hoshii. ato kara watashi mo iku.",
                "uz": "Wait for me there, and I will soon join you."
            }
        ]
    },
    {
        "id": "n4_pdf_69_te_iku",
        "level": "N4",
        "title": "ていく (te iku)",
        "romaji": "te iku",
        "meaningUz": "to go on, to start",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼はもう一度詫びを述べて、別のドアから出て行った。",
                "romaji": "kare wa mou ichido wabi o nobete, betsu no doa kara dete itta.",
                "uz": "He apologized again and left by another door."
            }
        ]
    },
    {
        "id": "n4_pdf_70_teiru_tokoro",
        "level": "N4",
        "title": "ているところ (teiru tokoro)",
        "romaji": "teiru tokoro",
        "meaningUz": "in the process of doing",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "どうぞお楽に、ちょうどお茶を淹れているところです。",
                "romaji": "douzo oraku ni, choudo ocha o irete iru tokoro desu.",
                "uz": "Please make yourself comfortable. I'm just steeping some tea."
            }
        ]
    },
    {
        "id": "n4_pdf_71_te_ita",
        "level": "N4",
        "title": "ていた (te ita)",
        "romaji": "te ita",
        "meaningUz": "was doing something",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "真純の眼はじっと地面を見つめていた。",
                "romaji": "masumi no me wa jitto jimen o mitsumete ita.",
                "uz": "Masumi's eyes remained fixed on the earth."
            }
        ]
    },
    {
        "id": "n4_pdf_72_te_itadakemasen_ka",
        "level": "N4",
        "title": "ていただけませんか (te itadakemasen ka)",
        "romaji": "te itadakemasen ka",
        "meaningUz": "could you please",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "手紙ではとても説明できません。どうかお帰りになっていただけませんか？",
                "romaji": "tegami dewa totemo setsumei dekimasen. douka okaeri ni natte itadakemasen ka.",
                "uz": "I can't explain in a letter. Won't you come back?"
            }
        ]
    },
    {
        "id": "n4_pdf_73_te_kureru",
        "level": "N4",
        "title": "てくれる (te kureru)",
        "romaji": "te kureru",
        "meaningUz": "to do something for me or somebody's sake",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "僕たちのためにいろいろ助けてくれたことは忘れない。",
                "romaji": "bokutachi no tame ni iroiro tasukete kureta koto wa wasurenai.",
                "uz": "We'll never forget all the things you did for us."
            }
        ]
    },
    {
        "id": "n4_pdf_74_te_kuru",
        "level": "N4",
        "title": "てくる (te kuru)",
        "romaji": "te kuru",
        "meaningUz": "to come to, to become, to continue",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "喉が渇いたから飲み物を買ってくる。",
                "romaji": "nodo ga kawaita kara nomimono o katte kuru.",
                "uz": "I'm thirsty so I'll go buy something to drink."
            }
        ]
    },
    {
        "id": "n4_pdf_75_te_miru",
        "level": "N4",
        "title": "てみる (te miru)",
        "romaji": "te miru",
        "meaningUz": "to try to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ロック・クライミングにも挑戦してみたいです。",
                "romaji": "rokku kuraimingu ni mo chousen shite mitai desu.",
                "uz": "I want to try rock climbing too."
            }
        ]
    },
    {
        "id": "n4_pdf_76_temo",
        "level": "N4",
        "title": "ても (temo)",
        "romaji": "temo",
        "meaningUz": "even if, even though",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "自分が疲れていても、ひもじくても、わたしを看護して、食べさせてくれたわ。",
                "romaji": "jibun ga tsukarete ite mo, himojikute mo, watashi o kango shite, tabesasete kureta wa.",
                "uz": "She nursed and fed me, even if she was tired and even if she went hungry."
            }
        ]
    },
    {
        "id": "n4_pdf_77_te_morau",
        "level": "N4",
        "title": "てもらう (te morau)",
        "romaji": "te morau",
        "meaningUz": "to get somebody to do something",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "あなたに認めてもらいたいんです。わたしとエミリーとの結婚を。",
                "romaji": "anata ni mitomete moraitain desu. watashi to emirii to no kekkon o.",
                "uz": "I just wanted your approval to my marrying Emily."
            }
        ]
    },
    {
        "id": "n4_pdf_78_te_oku",
        "level": "N4",
        "title": "ておく (te oku)",
        "romaji": "te oku",
        "meaningUz": "to do something in advance",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "この恐ろしい秘密は、われわれ二人の胸中深く秘めておこう。",
                "romaji": "kono osoroshii himitsu wa, wareware futari no kyouchuu bukaku himete okou.",
                "uz": "Let us bury this terrible secret in the deepest recesses of our hearts."
            }
        ]
    },
    {
        "id": "n4_pdf_79_te_shimau",
        "level": "N4",
        "title": "てしまう (te shimau)",
        "romaji": "te shimau",
        "meaningUz": "to do something by accident, to finish completely",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "いったい誰がこの致命的な秘密をあの子に知らせてしまったのか、私どもにはわかりませ",
                "romaji": "ittai dare ga kono chimeiteki na himitsu o ano ko ni shirasete shimatta no ka, watashidomo ni wa",
                "uz": "We never knew who had revealed this fatal secret to that child."
            }
        ]
    },
    {
        "id": "n4_pdf_80_te_sumimasen",
        "level": "N4",
        "title": "てすみません (te sumimasen)",
        "romaji": "te sumimasen",
        "meaningUz": "I’m sorry for",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "この件についてだまっていてすみません。",
                "romaji": "kono ken ni tsuite damatte ite sumimasen.",
                "uz": "I'm sorry for not mentioning this earlier."
            }
        ]
    },
    {
        "id": "n4_pdf_81_te_yokatta",
        "level": "N4",
        "title": "てよかった (te yokatta)",
        "romaji": "te yokatta",
        "meaningUz": "I’m glad that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "あなたが早めに席を予約してくれてよかった。",
                "romaji": "anata ga hayame ni seki o yoyaku shite kurete yokatta.",
                "uz": "I'm glad you booked our seats early."
            }
        ]
    },
    {
        "id": "n4_pdf_82_to",
        "level": "N4",
        "title": "と (to)",
        "romaji": "to",
        "meaningUz": "if, when",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "この手紙を朗読すると、詩的に聞こえませんか？",
                "romaji": "kono tegami o roudoku suru to, shiteki ni kikoemasen ka.",
                "uz": "When you read this letter out loud, doesn't it sound poetic?"
            }
        ]
    },
    {
        "id": "n4_pdf_83_toto_dochira_ga",
        "level": "N4",
        "title": "と～と、どちらが (to~to, dochira ga)",
        "romaji": "to~to, dochira ga",
        "meaningUz": "which one",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "日本語と英語とどちらが難しいですか。",
                "romaji": "nihongo to eigo to dochira ga muzukashii desu ka.",
                "uz": "Which language is more difficult, Japanese or English?"
            }
        ]
    },
    {
        "id": "n4_pdf_84_to_iu_koto",
        "level": "N4",
        "title": "ということ (to iu koto)",
        "romaji": "to iu koto",
        "meaningUz": "[changes a sentence or phrase into a Noun]",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼が金持だということが一般に知れ渡る。",
                "romaji": "kare ga kanemochi da to iu koto ga ippan ni shirewataru.",
                "uz": "He is known to be rich."
            }
        ]
    },
    {
        "id": "n4_pdf_85_to_itte_mo_ii",
        "level": "N4",
        "title": "と言ってもいい (to itte mo ii)",
        "romaji": "to itte mo ii",
        "meaningUz": "you could say, you might say",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "そんな事は、ほとんど不可能といってもいいが…",
                "romaji": "sonna koto wa, hotondo fukanou to itte mo ii ga.",
                "uz": "I should say it was almost impossible."
            }
        ]
    },
    {
        "id": "n4_pdf_86_to_iwarete_iru",
        "level": "N4",
        "title": "と言われている (to iwarete iru)",
        "romaji": "to iwarete iru",
        "meaningUz": "it is said that…",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ベーカー通りにあるその古い屋敷には、よく幽霊が出ると言われている。",
                "romaji": "beekaa doori ni aru sono furui yashiki ni wa, yoku yuurei ga deru to iwarete iru.",
                "uz": "People say the old house on Baker Street is haunted."
            }
        ]
    },
    {
        "id": "n4_pdf_87_toka__toka",
        "level": "N4",
        "title": "とか～とか (toka ~ toka)",
        "romaji": "toka ~ toka",
        "meaningUz": "among other things, such as",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "右とか左とかっていうのはよくわからなくなるもんですよ。",
                "romaji": "migi toka hidari toka tte iu no wa yoku wakaranaku naru mon desu yo.",
                "uz": "Left and right are always puzzling."
            }
        ]
    },
    {
        "id": "n4_pdf_88_toki",
        "level": "N4",
        "title": "とき (toki)",
        "romaji": "toki",
        "meaningUz": "when, at the time",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "じつは私もここに初めて入ったときには、同じことを考えましたよ。",
                "romaji": "jitsu wa watashi mo koko ni hajimete haitta toki ni wa, onaji koto o kangaemashita yo.",
                "uz": "Actually, the same idea came across me the first time I came here."
            }
        ]
    },
    {
        "id": "n4_pdf_89_to_kiita",
        "level": "N4",
        "title": "と聞いた (to kiita)",
        "romaji": "to kiita",
        "meaningUz": "I heard that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "たしかあなたはずっと独身だと聞きましたが…",
                "romaji": "tashika anata wa zutto dokushin da to kikimashita ga.",
                "uz": "I always understood you were a bachelor."
            }
        ]
    },
    {
        "id": "n4_pdf_90_tokoro",
        "level": "N4",
        "title": "ところ (tokoro)",
        "romaji": "tokoro",
        "meaningUz": "about to, on the verge of",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "私たちはもうすぐ到着するところです。",
                "romaji": "watashitachi wa mou sugu touchaku suru tokoro desu.",
                "uz": "We are just arriving."
            }
        ]
    },
    {
        "id": "n4_pdf_91_to_mieru",
        "level": "N4",
        "title": "と見える (to mieru)",
        "romaji": "to mieru",
        "meaningUz": "it seems that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "彼女のひどい仕打ちは、よっぽど深い印象をあなたの心にあたえたとみえるわ！",
                "romaji": "kanojo no hidoi shiuchi wa, yoppodo fukai inshou o anata no kokoro ni ataeta to mieru wa.",
                "uz": "What a singularly deep impression her injustice seems to have made on your heart!"
            }
        ]
    },
    {
        "id": "n4_pdf_92_to_omou",
        "level": "N4",
        "title": "と思う (to omou)",
        "romaji": "to omou",
        "meaningUz": "to think",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "オリンピックの後、いろんなことがぐんとよくなったと思う。",
                "romaji": "orinpikku no ato, iron na koto ga gun to yoku natta to omou.",
                "uz": "I think things really improved after the Olympics."
            }
        ]
    },
    {
        "id": "n4_pdf_93_tsuzukeru",
        "level": "N4",
        "title": "続ける (tsuzukeru)",
        "romaji": "tsuzukeru",
        "meaningUz": "to continue",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "銃弾が重いドアノブをなおもたたきつづけている。",
                "romaji": "juudan ga omoi doanobu o nao mo tatakitsudzukete iru.",
                "uz": "Bullets continue to slam against the heavy doorknob."
            }
        ]
    },
    {
        "id": "n4_pdf_94_yasui",
        "level": "N4",
        "title": "やすい (yasui)",
        "romaji": "yasui",
        "meaningUz": "easy to, likely to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "お互いへの信頼があれば、取引はずっと進めやすくなる。",
                "romaji": "otagai e no shinrai ga areba, torihiki wa zutto susumeyasuku naru.",
                "uz": "Mutual trust makes it much easier to do business."
            }
        ]
    },
    {
        "id": "n4_pdf_95_yori",
        "level": "N4",
        "title": "より (yori)",
        "romaji": "yori",
        "meaningUz": "more than",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "とても内気だったけど、芯はわたしよりずっと強い人だった。",
                "romaji": "totemo uchiki datta kedo, shin wa watashi yori zutto tsuyoi hito datta.",
                "uz": "He was very shy, but deep down he was stronger than me."
            }
        ]
    },
    {
        "id": "n4_pdf_96_yotei_da",
        "level": "N4",
        "title": "予定だ (yotei da)",
        "romaji": "yotei da",
        "meaningUz": "plan to, intend to",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "今日、午前八時に飛行機で長野を出発する予定だ。",
                "romaji": "kyou, gozen hachiji ni hikouki de nagano o shuppatsu suru yotei da.",
                "uz": "I am to leave Kyoto by plane at eight a.m. today."
            }
        ]
    },
    {
        "id": "n4_pdf_97_you_da",
        "level": "N4",
        "title": "ようだ (you da)",
        "romaji": "you da",
        "meaningUz": "it seems that, it appears that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "いまの彼は審判を待つ罪人のようだ。",
                "romaji": "ima no kare wa shinpan o matsu zainin no you da.",
                "uz": "He looks so like a criminal waiting judgment."
            }
        ]
    },
    {
        "id": "n4_pdf_98_you_niyou_na",
        "level": "N4",
        "title": "ように/ような (you ni/you na)",
        "romaji": "you ni/you na",
        "meaningUz": "as, like",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "栄介は逃げるようにして町を出ていった。",
                "romaji": "eisuke wa nigeru you ni shite machi o dete itta.",
                "uz": "Eisuke left the town as though he was fleeing from it."
            }
        ]
    },
    {
        "id": "n4_pdf_99_you_ni_naru",
        "level": "N4",
        "title": "ようになる (you ni naru)",
        "romaji": "you ni naru",
        "meaningUz": "to reach the point that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "最近では、不愉快な思いはうまく頭から締め出せるようになった。",
                "romaji": "saikin de wa, fuyukai na omoi wa umaku atama kara shimedaseru you ni natta.",
                "uz": "I've become adept at putting unpleasant thoughts out of my mind these days."
            }
        ]
    },
    {
        "id": "n4_pdf_100_you_ni_suru",
        "level": "N4",
        "title": "ようにする (you ni suru)",
        "romaji": "you ni suru",
        "meaningUz": "to try to, to make sure that",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "このプロジェクト、私に担当させてください。期待に沿うようにします。",
                "romaji": "kono purojekuto, watashi ni tantou sasete kudasai. kitai ni sou you ni shimasu.",
                "uz": "Let me take charge of this project. I won't let you down."
            }
        ]
    },
    {
        "id": "n4_pdf_101_you_to_omou",
        "level": "N4",
        "title": "ようと思う (you to omou)",
        "romaji": "you to omou",
        "meaningUz": "I think I will… (I’m thinking of doing…)",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "明日、ランチのあとで天文学の本を買おうと思う。",
                "romaji": "ashita, ranchi no ato de tenmongaku no hon o kaou to omou.",
                "uz": "I'll buy a book on astronomy tomorrow right after lunch."
            }
        ]
    },
    {
        "id": "n4_pdf_102_zenzen",
        "level": "N4",
        "title": "全然 (zenzen)",
        "romaji": "zenzen",
        "meaningUz": "(not) at all",
        "structure": "JLPT N4 Grammatika qoidasi",
        "examples": [
            {
                "ja": "ちょっと待ってくれ、ぼくには、そんなことはぜんぜん理解できないよ。",
                "romaji": "chotto matte kure, boku ni wa, sonna koto wa zenzen rikai dekinai yo.",
                "uz": "Excuse me, but I’m absolutely unable to comprehend how."
            }
        ]
    },

    {
        "id": "n3_mimi_1",
        "level": "N3",
        "title": "〜うちに (uchi ni)",
        "romaji": "uchi ni",
        "meaningUz": "fursat borida / ... bo'layotganida sezmay",
        "structure": "Fe'l (Lug'at/Nai) / Sifat / Ot + の + うちに",
        "examples": [
            {
                "ja": "若[わか]いうちにいろいろな経験[けいけん]をしなさい。",
                "romaji": "Wakai uchi ni iroiro na keiken wo shinasai.",
                "uz": "Yoshlik fursati borida ko'p tajriba orttir."
            }
        ]
    },
    {
        "id": "n3_mimi_2",
        "level": "N3",
        "title": "〜際（に） (sai ni)",
        "romaji": "sai ni",
        "meaningUz": "... paytida / ... bo'lganda (Rasmiy)",
        "structure": "Fe'l (Lug'at/Ta) / Ot + の + 際（に）",
        "examples": [
            {
                "ja": "お降[お]りの際[さい]は足元[あしもと]にご注意[ちゅうい]ください。",
                "romaji": "Oori no sai wa ashimoto ni gochuui kudasai.",
                "uz": "Poyezddan tushayotganda oyog'ingiz ostiga ehtiyot bo'ling."
            }
        ]
    },
    {
        "id": "n3_mimi_3",
        "level": "N3",
        "title": "〜たとたん（に） (ta totan ni)",
        "romaji": "ta totan ni",
        "meaningUz": "... qilgan zahotiyoq (Kutilmagan harakat)",
        "structure": "Fe'l (Ta-form) + とたん（に）",
        "examples": [
            {
                "ja": "窓[まど]を開[あ]けたとたん、強[つよ]い風[かぜ]が入[はい]ってきた。",
                "romaji": "Mado wo aketa totan, tsuyoi kaze ga haitte kita.",
                "uz": "Oynani ochgan zahotim kuchli shamol kirib keldi."
            }
        ]
    },
    {
        "id": "n3_mimi_4",
        "level": "N3",
        "title": "〜かと思うと (ka to omou to)",
        "romaji": "ka to omou to",
        "meaningUz": "...-di hamki, ketidanoq ...",
        "structure": "Fe'l (Ta-form) + かと思うと / かと思ったら",
        "examples": [
            {
                "ja": "空[そら]が暗[くら]くなったかと思うと、雨[あめ]が降[ふ]り出[だ]した。",
                "romaji": "Sora ga kuraku natta ka to omou to, ame ga furidashita.",
                "uz": "Osmon qorong'ulashdi hamki, yomg'ir yog'a boshladi."
            }
        ]
    },
    {
        "id": "n3_mimi_5",
        "level": "N3",
        "title": "〜か〜ないかのうちに (ka ... nai ka no uchi ni)",
        "romaji": "ka ... nai ka no uchi ni",
        "meaningUz": "... tugadimi-yo'qmi ketidanoq",
        "structure": "Fe'l (Lug'at) + か + Fe'l (Nai) + かのうちに",
        "examples": [
            {
                "ja": "授業[じゅぎょう]が終わ[お]わるか終わらないかのうちに教室[きょうしつ]を出[で]た。",
                "romaji": "Jugyou ga owaru ka owaranai ka no uchi ni kyoushitsu wo deta.",
                "uz": "Dars tugadimi-yo'qmi xonadan chiqib ketdim."
            }
        ]
    },
    {
        "id": "n3_mimi_6",
        "level": "N3",
        "title": "〜最中に (saichuu ni)",
        "romaji": "saichuu ni",
        "meaningUz": "... ayni qizg'in pallasida",
        "structure": "Fe'l (Te-iru) / Ot + の + 最中に",
        "examples": [
            {
                "ja": "会議[かいぎ]の最中[さいちゅう]に携帯[けいたい]が鳴[な]った。",
                "romaji": "Kaigi no saichuu ni keitai ga natta.",
                "uz": "Majlisning ayni pallasida telefon jiringladi."
            }
        ]
    },
    {
        "id": "n3_mimi_7",
        "level": "N3",
        "title": "〜ばかりだ・〜一方だ (bakari da / ippou da)",
        "romaji": "bakari da / ippou da",
        "meaningUz": "faqat ... tomonga o'zgarib boryapti (Salbiy/Surunkali)",
        "structure": "Fe'l (Lug'at shakli) + ばかりだ / 一方だ",
        "examples": [
            {
                "ja": "物価[ぶっか]は上[あ]がる一方[いっぽう]だ。",
                "romaji": "Bukka wa agaru ippou da.",
                "uz": "Narx-navo faqat ko'tarilib boryapti."
            }
        ]
    },
    {
        "id": "n3_mimi_8",
        "level": "N3",
        "title": "〜（よう）としている ((you) to shite iru)",
        "romaji": "(you) to shite iru",
        "meaningUz": "ayni ... qilish arafasida / ... qilmoqchi bo'lyapti",
        "structure": "Fe'l (Iroda shakli) + としている",
        "examples": [
            {
                "ja": "太陽[たいよう]が沈[しず]もうとしている。",
                "romaji": "Taiyou ga shizumou to shite iru.",
                "uz": "Quyosh botay boryapti."
            }
        ]
    },
    {
        "id": "n3_mimi_9",
        "level": "N3",
        "title": "〜つつある (tsutsu aru)",
        "romaji": "tsutsu aru",
        "meaningUz": "... borgan sari rivojlanmoqda (Rasmiy jarayon)",
        "structure": "Fe'l (Masu-ildiz) + つつある",
        "examples": [
            {
                "ja": "景気[けいき]は回復[かいふく]しつつある。",
                "romaji": "Keiki wa kaifuku shitsutsu aru.",
                "uz": "Iqtisodiyot qayta tiklanib bormoqda."
            }
        ]
    },
    {
        "id": "n3_mimi_10",
        "level": "N3",
        "title": "〜つつ (tsutsu)",
        "romaji": "tsutsu",
        "meaningUz": "... qilgan holda / ... qila turib (Bir vaqtda)",
        "structure": "Fe'l (Masu-ildiz) + つつ",
        "examples": [
            {
                "ja": "将来[しょうらい]の事[こと]を考[かんが]えつつ進路[しんろ]を決[き]める。",
                "romaji": "Shourai no koto wo kangaetsutsu shinro wo kimeru.",
                "uz": "Kelajakni o'ylagan holda yo'nalishni tanlayman."
            }
        ]
    },
    {
        "id": "n3_mimi_11",
        "level": "N3",
        "title": "〜てはじめて (te hajimete)",
        "romaji": "te hajimete",
        "meaningUz": "... qilgandan keyingina (Tushunib yetmoq)",
        "structure": "Fe'l (Te-form) + はじめて",
        "examples": [
            {
                "ja": "病気[びょうき]になってはじめて健康[けんこう]の有難[ありがた]さを知[し]った。",
                "romaji": "Byouki ni natte hajimete kenkou no arigatasa wo shitta.",
                "uz": "Kasal bo'lgachgina sog'liqning qadrini bildim."
            }
        ]
    },
    {
        "id": "n3_mimi_12",
        "level": "N3",
        "title": "〜上で (ue de)",
        "romaji": "ue de",
        "meaningUz": "... qilgandan so'nggina / ... asosida",
        "structure": "Fe'l (Ta-form) / Ot + の + 上で",
        "examples": [
            {
                "ja": "家族[かぞく]と相談[そうだん]した上で決[き]めます。",
                "romaji": "Kazoku to soudan shita ue de kimemasu.",
                "uz": "Oila bilan maslahatlashgach qaror qilaman."
            }
        ]
    },
    {
        "id": "n3_mimi_13",
        "level": "N3",
        "title": "〜次第 (shidai)",
        "romaji": "shidai",
        "meaningUz": "... bo'lishi bilanoq (Kelasi zamonda)",
        "structure": "Fe'l (Masu-ildiz) / Ot + 次第",
        "examples": [
            {
                "ja": "着[つ]き次第[しだい]、連絡[れんらく]します。",
                "romaji": "Tsuki shidai, renraku shimasu.",
                "uz": "Etib borishim bilanoq bog'lanaman."
            }
        ]
    },
    {
        "id": "n3_mimi_14",
        "level": "N3",
        "title": "〜以来 (irai)",
        "romaji": "irai",
        "meaningUz": "... berli / ... vaqtdan beri uzluksiz",
        "structure": "Fe'l (Te-form) / Ot + 以来",
        "examples": [
            {
                "ja": "日本[にほん]に来[き]て以来[いらい]、毎日[まいにち]日本語[にほんご]を勉強[べんきょう]している。",
                "romaji": "Nihon ni kite irai, mainichi Nihongo wo benkyou shite iru.",
                "uz": "Yaponiyaga kelganimdan beri har kuni dars qilyapman."
            }
        ]
    },
    {
        "id": "n3_mimi_15",
        "level": "N3",
        "title": "〜てからでないと (te kara de nai to)",
        "romaji": "te kara de nai to",
        "meaningUz": "... qilmagunimcha ... qila olmayman",
        "structure": "Fe'l (Te-form) + からでないと / からでなければ",
        "examples": [
            {
                "ja": "許可[きょか]をもらってからでないと入[はい]れない。",
                "romaji": "Kyoka wo moratte kara de nai to hairenai.",
                "uz": "Ruxsat olmagunimcha kira olmayman."
            }
        ]
    },
    {
        "id": "n3_mimi_16",
        "level": "N3",
        "title": "〜をはじめ（として） (wo hajime to shite)",
        "romaji": "wo hajime to shite",
        "meaningUz": "...-ni boshda tutgan holda / ... boshchiligida",
        "structure": "Ot + をはじめ / をはじめとする + Ot",
        "examples": [
            {
                "ja": "社長[しゃちょう]をはじめ、全社員[ぜんしゃいん]が参加[さんか]した。",
                "romaji": "Shachou wo hajime, zenshaiin ga sanka shita.",
                "uz": "Prezident boshchiligida barcha xodimlar qatnashdi."
            }
        ]
    },
    {
        "id": "n3_mimi_17",
        "level": "N3",
        "title": "〜から〜にかけて (kara ... ni kakete)",
        "romaji": "kara ... ni kakete",
        "meaningUz": "...-dan ...-gacha (Taxminiy qamrov)",
        "structure": "Ot1 + から + Ot2 + にかけて",
        "examples": [
            {
                "ja": "昨夜[さくや]から今朝[けさ]にかけて大雨[おおあめ]が降[ふ]った。",
                "romaji": "Sakuya kara kesa ni kakete ookame ga futta.",
                "uz": "Kechadan ertalabgacha kuchli yomg'ir yog'di."
            }
        ]
    },
    {
        "id": "n3_mimi_18",
        "level": "N3",
        "title": "〜にわたって (ni watatte)",
        "romaji": "ni watatte",
        "meaningUz": "... bo'yi / ... davomida keng qamrovda",
        "structure": "Ot + にわたって / にわたる + Ot",
        "examples": [
            {
                "ja": "3時間[さんじかん]にわたって議論[ぎろん]が続[つづ]いた。",
                "romaji": "San-jikan ni watatte giron ga tsudukita.",
                "uz": "3 soat davomida bahs-munozara davom etdi."
            }
        ]
    },
    {
        "id": "n3_mimi_19",
        "level": "N3",
        "title": "〜を通じて・〜を通して (wo tsuujite / wo tooshite)",
        "romaji": "wo tsuujite / wo tooshite",
        "meaningUz": "... orqali / ... vositasida / ... bo'yi",
        "structure": "Ot + を通じて / を通して",
        "examples": [
            {
                "ja": "友人[ゆうじん]を通じて彼[かれ]と知[し]り合[あ]った。",
                "romaji": "Yuujin wo tsuujite kare to shiriatta.",
                "uz": "Do'stim orqali u bilan tanishdim."
            }
        ]
    },
    {
        "id": "n3_mimi_20",
        "level": "N3",
        "title": "〜に限る (ni kagiru)",
        "romaji": "ni kagiru",
        "meaningUz": "... eng yaxshisi! / ...-dan zori yo'q",
        "structure": "Fe'l (Lug'at) / Ot + に限る",
        "examples": [
            {
                "ja": "暑[あつ]い日[ひ]は冷[つめ]たいアイスを食[た]べるに限[かぎ]る。",
                "romaji": "Atsui hi wa tsumetai aisu wo taberu ni kagiru.",
                "uz": "Issiq kunda muzqaymoq yeyishga tengi yo'q."
            }
        ]
    },
    {
        "id": "n3_mimi_21",
        "level": "N3",
        "title": "〜に限って (ni kagitte)",
        "romaji": "ni kagitte",
        "meaningUz": "aynan ... kuni / aynan shu insonga kelganda",
        "structure": "Ot + に限って",
        "examples": [
            {
                "ja": "傘[かさ]を持[も]っていない日[ひ]に限[かぎ]って雨[あめ]が降[ふ]る。",
                "romaji": "Kasa wo motte inai hi ni kagitte ame ga kuru.",
                "uz": "Aynan soyabonim yo'q kunda yomg'ir yog'adi."
            }
        ]
    },
    {
        "id": "n3_mimi_22",
        "level": "N3",
        "title": "〜において・〜における (ni oite / ni okeru)",
        "romaji": "ni oite",
        "meaningUz": "...-da / ... joyida (Rasmiy voqea o'rni)",
        "structure": "Ot + において / における + Ot",
        "examples": [
            {
                "ja": "東京[とうきょう]においてオリンピックが開催[かいさい]された。",
                "romaji": "Toukyou ni oite orinpikku ga kaisai sareta.",
                "uz": "Tokioda Olimpiada o'tkazildi."
            }
        ]
    },
    {
        "id": "n3_mimi_23",
        "level": "N3",
        "title": "〜に基づいて (ni motodsuite)",
        "romaji": "ni motodsuite",
        "meaningUz": "... asosida / ...-ga tayanib",
        "structure": "Ot + に基づいて / に基づく + Ot",
        "examples": [
            {
                "ja": "調査[ちょうさ]結果[けっか]に基づいて報告[ほうこく]書[しょ]を作成[さくせい]する。",
                "romaji": "Chousa kekka ni motodsuite houkokusho wo sakusei suru.",
                "uz": "Tadqiqot natijalari asosida hisobot tuziladi."
            }
        ]
    },
    {
        "id": "n3_mimi_24",
        "level": "N3",
        "title": "〜のもとで・〜のもとに (no moto de)",
        "romaji": "no moto de",
        "meaningUz": "... rahbarligida / ... soyasida",
        "structure": "Ot + のもとで / のもとに",
        "examples": [
            {
                "ja": "素晴[すば]らしい先生[せんせい]のもとで勉強[べんきょう]できて幸[さいわ]いだ。",
                "romaji": "Subarashii sensei no moto de benkyou dekite saiwai da.",
                "uz": "Ajoyib ustoz qo'lida tahsil olganimdan baxtiyorman."
            }
        ]
    },
    {
        "id": "n3_mimi_25",
        "level": "N3",
        "title": "〜をめぐって (wo megutte)",
        "romaji": "wo megutte",
        "meaningUz": "... atrofida / ... ustida bahslashish",
        "structure": "Ot + をめぐって / をめぐる + Ot",
        "examples": [
            {
                "ja": "遺産[いさん]をめぐって親族[しんぞく]が争[あらそ]っている。",
                "romaji": "Isan wo megutte shinzoku ga arasotte iru.",
                "uz": "Meros ustida qarindoshlar tortishmoqda."
            }
        ]
    },
    {
        "id": "n3_mimi_26",
        "level": "N3",
        "title": "〜わけだ (wake da)",
        "romaji": "wake da",
        "meaningUz": "demak ... bo'lganligi mantiqiy xulosa",
        "structure": "Fe'l/Sifat/Ot (Plain) + わけだ",
        "examples": [
            {
                "ja": "寒[さむ]いわけだ。雪[ゆき]が降[ふ]っている。",
                "romaji": "Samui wake da. Yuki ga futte iru.",
                "uz": "Demak shuning uchun sovuq ekan. Qor yog'yapti."
            }
        ]
    },
    {
        "id": "n3_mimi_27",
        "level": "N3",
        "title": "〜わけがない (wake ga nai)",
        "romaji": "wake ga nai",
        "meaningUz": "bo'lishi umuman mumkin emas",
        "structure": "Fe'l/Sifat/Ot + わけがない",
        "examples": [
            {
                "ja": "彼[かれ]がそんな悪口[わるくち]を言[い]うわけがない。",
                "romaji": "Kare ga sonna warukuchi wo iu wake ga nai.",
                "uz": "U kishi bunday yomon gapi berishi mumkin emas."
            }
        ]
    },
    {
        "id": "n3_mimi_28",
        "level": "N3",
        "title": "〜わけではない (wake de wa nai)",
        "romaji": "wake de wa nai",
        "meaningUz": "... degani emas (Qisman inkor)",
        "structure": "Fe'l/Sifat/Ot + わけではない",
        "examples": [
            {
                "ja": "嫌[きら]いなわけではないが、食[た]べたくない。",
                "romaji": "Kirai na wake de wa nai ga, tabetakunai.",
                "uz": "Yomon ko'raman degani emas, shunchaki yegim yo'q."
            }
        ]
    },
    {
        "id": "n3_mimi_29",
        "level": "N3",
        "title": "〜わけにはいかない (wake ni wa ikanai)",
        "romaji": "wake ni wa ikanai",
        "meaningUz": "axloq / vijdon yo'l qo'ymaydi",
        "structure": "Fe'l (Lug'at/Nai) + わけにはいかない",
        "examples": [
            {
                "ja": "大切[たいせつ]な会議[かいぎ]だから休[やす]むわけにはいかない。",
                "romaji": "Taisetsu na kaigi dakara yasumu wake ni wa ikanai.",
                "uz": "Muhim majlis bo'lgani uchun qolishimga haqqim yo'q."
            }
        ]
    },
    {
        "id": "n3_mimi_30",
        "level": "N3",
        "title": "〜かいがあって (kai ga atte)",
        "romaji": "kai ga atte",
        "meaningUz": "harakat qilganimga arziydigan natija bo'ldi",
        "structure": "Fe'l (Ta) / Ot + の + かいがあって",
        "examples": [
            {
                "ja": "努力[どりょく]したかいがあって、試験[しけん]に合格[ごうかく]した。",
                "romaji": "Doryoku shita kai ga atte, shiken ni goukaku shita.",
                "uz": "Harakat qilganimga arziydi, imtihondan o'tdim."
            }
        ]
    },
    {
        "id": "n3_mimi_31",
        "level": "N3",
        "title": "〜かいもなく (kai mo naku)",
        "romaji": "kai mo naku",
        "meaningUz": "shuncha harakat qilganimga qaramay (Afsus)",
        "structure": "Fe'l (Ta) / Ot + の + かいもなく",
        "examples": [
            {
                "ja": "手術[しゅじゅつ]のかいもなく、愛犬[あいけん]が死[し]んでしまった。",
                "romaji": "Shujutsu no kai mo naku, aiken ga shinde shimatta.",
                "uz": "Operatsiya qilinganiga qaramay, itim o'lib qoldi."
            }
        ]
    },
    {
        "id": "n3_mimi_32",
        "level": "N3",
        "title": "〜がい (gai)",
        "romaji": "gai",
        "meaningUz": "... qilish maroqli / munosib",
        "structure": "Fe'l (Masu-ildiz) + がい",
        "examples": [
            {
                "ja": "やりがいのある仕事[しごと]を探[さが]している。",
                "romaji": "Yarigai no aru shigoto wo sagashite iru.",
                "uz": "Bajarish maroqli bo'lgan ish izlayapman."
            }
        ]
    },
    {
        "id": "n3_mimi_33",
        "level": "N3",
        "title": "〜てまで (te made)",
        "romaji": "te made",
        "meaningUz": "hatto ... darajagacha borib (Haddan tashqari)",
        "structure": "Fe'l (Te-form) + まで / までして",
        "examples": [
            {
                "ja": "借金[しゃっきん]をしてまで高[たか]い車[くるま]を買[か]いたくない。",
                "romaji": "Shakkin wo shite made takai kuruma wo kaitakunai.",
                "uz": "Qarz olib bo'lsa ham qimmat mashina olgim yo'q."
            }
        ]
    },
    {
        "id": "n3_mimi_34",
        "level": "N3",
        "title": "〜切る・〜切れる (kiru / kireru)",
        "romaji": "kiru / kireru",
        "meaningUz": "to'liq va oxirigacha yetkazmoq",
        "structure": "Fe'l (Masu-ildiz) + 切る",
        "examples": [
            {
                "ja": "長[なが]いマラソンを走[はし]り切[き]った。",
                "romaji": "Nagai marason wo hashirikirtta.",
                "uz": "Uzun marafonni oxirigacha yugurib o'tdim."
            }
        ]
    },
    {
        "id": "n3_mimi_35",
        "level": "N3",
        "title": "〜切れない (kirenai)",
        "romaji": "kirenai",
        "meaningUz": "oxirigacha yetkaza olmaslik / ko'pligidan ulgurmaslik",
        "structure": "Fe'l (Masu-ildiz) + 切れない",
        "examples": [
            {
                "ja": "ご飯[はん]が多[おお]すぎて食[た]べきれない。",
                "romaji": "Gohan ga oosugite tabekirenai.",
                "uz": "Ovqat juda ko'pligidan oxirigacha yeyolmayman."
            }
        ]
    },
    {
        "id": "n3_mimi_36",
        "level": "N3",
        "title": "〜抜く (nuku)",
        "romaji": "nuku",
        "meaningUz": "barcha qiyinchiliklarga chidab oxirigacha yetkazmoq",
        "structure": "Fe'l (Masu-ildiz) + 抜く",
        "examples": [
            {
                "ja": "最後[さいご]まで戦[たたか]い抜[ぬ]く。",
                "romaji": "Saigo made tatakainuku.",
                "uz": "Oxirgi minutgacha qiyinchilikka chidab kurashaman."
            }
        ]
    },
    {
        "id": "n3_mimi_37",
        "level": "N3",
        "title": "〜得る・〜得ない (eru / enai)",
        "romaji": "eru / enai",
        "meaningUz": "... bo'lishi mantiqan mumkin / imkonsiz",
        "structure": "Fe me'yoriy Masu-ildiz + 得る / 得ない",
        "examples": [
            {
                "ja": "事故[じこ]はいつでも起[お]こり得る。",
                "romaji": "Jiko wa itsudemo okorieru.",
                "uz": "Avariya har qanday vaqtda sodir bo'lishi mumkin."
            }
        ]
    },
    {
        "id": "n3_mimi_38",
        "level": "N3",
        "title": "〜かねる (kaneru)",
        "romaji": "kaneru",
        "meaningUz": "... qilishga ojizman / rad etish (Xushmuomala)",
        "structure": "Fe'l (Masu-ildiz) + かねる",
        "examples": [
            {
                "ja": "その質問[しつもん]にはお答[こた]えしかねます。",
                "romaji": "Sono shitsumon ni wa okotaeshikanemasu.",
                "uz": "Ushbu savolga javob bera olmayman."
            }
        ]
    },
    {
        "id": "n3_mimi_39",
        "level": "N3",
        "title": "〜かねない (kanenai)",
        "romaji": "kanenai",
        "meaningUz": "... kabi yomon xavf bo'lishi mumkin",
        "structure": "Fe'l (Masu-ildiz) + かねない",
        "examples": [
            {
                "ja": "このままでは事故[じこ]が起[お]こりかねない。",
                "romaji": "Kono mama de wa jiko ga okorikanenai.",
                "uz": "Bunday ketaversa avariya sodir bo'lishi xavfi bor."
            }
        ]
    },
    {
        "id": "n3_mimi_40",
        "level": "N3",
        "title": "〜に決まっている (ni kimatte iru)",
        "romaji": "ni kimatte iru",
        "meaningUz": "shubhasiz ... bo'ladi / aniq-ku!",
        "structure": "Fe'l/Sifat/Ot + に決まっている",
        "examples": [
            {
                "ja": "彼[かれ]が勝[か]つに決[き]まっている。",
                "romaji": "Kare ga katsu ni kimatte iru.",
                "uz": "U g'olib bo'lishi aniq-ku!"
            }
        ]
    },
    {
        "id": "n3_mimi_41",
        "level": "N3",
        "title": "〜に相違ない (ni souinai)",
        "romaji": "ni souinai",
        "meaningUz": "hech qanday shubha yo'q (Rasmiy)",
        "structure": "Fe'l/Sifat/Ot + に相違ない",
        "examples": [
            {
                "ja": "犯人[はんにん]は彼[かれ]に相違[そうい]ない。",
                "romaji": "Hannin wa kare ni souinai.",
                "uz": "Jinoyatchi u ekanligiga shubha yo'q."
            }
        ]
    },
    {
        "id": "n3_mimi_42",
        "level": "N3",
        "title": "〜に違いない (ni chigai nai)",
        "romaji": "ni chigai nai",
        "meaningUz": "aniq ... bo'lsa kerak",
        "structure": "Fe'l/Sifat/Ot + に違いない",
        "examples": [
            {
                "ja": "彼[かれ]が努力[どりょく]したから合格[ごうかく]したに違[ちが]いない。",
                "romaji": "Kare ga doryoku shita kara goukaku shita ni chigai nai.",
                "uz": "U harakat qilgani uchun imtihondan o'tganiga shubha yo'q."
            }
        ]
    },
    {
        "id": "n3_mimi_43",
        "level": "N3",
        "title": "〜はずだ (hazu da)",
        "romaji": "hazu da",
        "meaningUz": "... bo me'yoriy kutilma bo'yicha shunday bo'lishi kerak",
        "structure": "Fe'l/Sifat/Ot + はずだ",
        "examples": [
            {
                "ja": "彼[かれ]はもう着[つ]いたはずだ。",
                "romaji": "Kare wa mou tsuita hazu da.",
                "uz": "U allaqachon yetib kelgan bo'lishi kerak."
            }
        ]
    },
    {
        "id": "n3_mimi_44",
        "level": "N3",
        "title": "〜っこない (kkonai)",
        "romaji": "kkonai",
        "meaningUz": "umuman bajarib bo'lmaydi (Ogzaki inkor)",
        "structure": "Fe'l (Masu-ildiz) + っこない",
        "examples": [
            {
                "ja": "一日[いちにち]でこの本[ほん]を全部[ぜんぶ]読[よ]めっこない。",
                "romaji": "Ichinichi de kono hon wo zenbu yomekkonai.",
                "uz": "Bir kunda bu kitobni o'qib tugatib bo'lmaydi."
            }
        ]
    },
    {
        "id": "n3_mimi_45",
        "level": "N3",
        "title": "〜てたまらない (te tamaranai)",
        "romaji": "te tamaranai",
        "meaningUz": "...-likdan chidab bo'lmayapti (Jismoniy/Ruhiy)",
        "structure": "Fe'l/Sifat (Te-form) + たまらない",
        "examples": [
            {
                "ja": "国[くに]の家族[かぞく]に会[あ]いたくてたまらない。",
                "romaji": "Kuni no kazoku ni aitakute tamaranai.",
                "uz": "Vatanimdagilarni ko'rgim kelib chiday olmayapman."
            }
        ]
    },
    {
        "id": "n3_mimi_46",
        "level": "N3",
        "title": "〜てしょうがない (te shouganai)",
        "romaji": "te shouganai",
        "meaningUz": "...-ligidan ilojim yo'q / juda ham",
        "structure": "Fe'l/Sifat (Te-form) + しょうがない / 仕方がない",
        "examples": [
            {
                "ja": "寂[さび]しくてしょうがない。",
                "romaji": "Sabishikute shouganai.",
                "uz": "Juda ham yolg'izlanib qoldim."
            }
        ]
    },
    {
        "id": "n3_mimi_47",
        "level": "N3",
        "title": "〜てならない (te naranai)",
        "romaji": "te naranai",
        "meaningUz": "ich-ichimdan ... his qilyapman (Tabiiy his)",
        "structure": "Fe'l/Sifat (Te-form) + ならない",
        "examples": [
            {
                "ja": "合格[ごうかく]できるか心配[しんぱい]でならない。",
                "romaji": "Goukaku dekiru ka shinpai de naranai.",
                "uz": "O'ta olamanmi-yo'qmi juda xavotirdaman."
            }
        ]
    },

    {
        "id": "n2_pdf_1_ageku",
        "level": "N2",
        "title": "〜あげく (ageku)",
        "romaji": "ageku",
        "meaningUz": "to end up; in the end; finally; after all~",
        "structure": "Verb (た form) あげく（に） Noun + の 2時間も待たされたあげく、結局に試合は延期になった。 2じかんもまたされたあげく、けっきょくにしあいはえんきになった。 After waiting for 2 hours, the match ended up being postponed.",
        "examples": [
            {
                "ja": "2時間も待たされたあげく、結局に試合は延期になった。",
                "romaji": "2じかんもまたされたあげく、けっきょくにしあいはえんきになった。",
                "uz": "After waiting for 2 hours, the match ended up being postponed."
            },
            {
                "ja": "毎⽇の残業のあげく、彼⼥は倒れて⼊院することになりました。",
                "romaji": "まいにちのざんぎょうのあげく、かのじょはたおれてにゅういんすることになりまし",
                "uz": "た。"
            }
        ]
    },
    {
        "id": "n2_pdf_2_aruiwa",
        "level": "N2",
        "title": "〜あるいは (aruiwa)",
        "romaji": "aruiwa",
        "meaningUz": "or; either; maybe; perhaps; possibly~",
        "structure": "あるいは other option 今⽇中にファックス、あるいは、メールで送ってください。 きょうじゅうにファックス、あるいは、メールおくってください。 Please send it today via fax or mail.",
        "examples": [
            {
                "ja": "今⽇中にファックス、あるいは、メールで送ってください。",
                "romaji": "きょうじゅうにファックス、あるいは、メールおくってください。",
                "uz": "Please send it today via fax or mail."
            },
            {
                "ja": "ご注⽂は電話か、あるいはインターネットでお願いします。",
                "romaji": "ごちゅうもんはでんわか、あるいはインターネットでおねがいします。",
                "uz": "Please order either by phone or online."
            }
        ]
    },
    {
        "id": "n2_pdf_3_bakari",
        "level": "N2",
        "title": "〜ばかり (bakari)",
        "romaji": "bakari",
        "meaningUz": "about, approximately~",
        "structure": "Noun (indicates time or distance) ばかり 彼⼥は30分ばかりベッドに横になった。 かのじょは30ぷんばかりベッドによこになった。 She lay in bed for about a half-hour.",
        "examples": [
            {
                "ja": "彼⼥は30分ばかりベッドに横になった。",
                "romaji": "かのじょは30ぷんばかりベッドによこになった。",
                "uz": "She lay in bed for about a half-hour."
            },
            {
                "ja": "５分ばかりこの道を⾏けば、右⼿にその店があります。",
                "romaji": "５ふんばかりこのみちをいけば、みぎてにそのみせがあります。",
                "uz": "If you continue on this road for about 5 minutes, that shop will be on your right."
            }
        ]
    },
    {
        "id": "n2_pdf_4_bakari_da",
        "level": "N2",
        "title": "〜ばかりだ (bakari da)",
        "romaji": "bakari da",
        "meaningUz": "continue to (go in negative direction)",
        "structure": "Verb (dictionary) ばかりだ ばかりです あの⼆⼈の関係は悪くなるばかりだ。 あのふたりのかんけいはわるくなるばかりだ。 Their relationship just keeps getting worse.",
        "examples": [
            {
                "ja": "あの⼆⼈の関係は悪くなるばかりだ。",
                "romaji": "あのふたりのかんけいはわるくなるばかりだ。",
                "uz": "Their relationship just keeps getting worse."
            },
            {
                "ja": "物価は上がるばかりだ。",
                "romaji": "ぶっかはあがるばかりだ。",
                "uz": "Prices just keep going up and up."
            }
        ]
    },
    {
        "id": "n2_pdf_5_bakari_ka__bakarika",
        "level": "N2",
        "title": "〜ばかりか (bakari ka / bakarika)",
        "romaji": "bakari ka / bakarika",
        "meaningUz": "not only",
        "structure": "Verb (casual) ばかりか Noun な-adjective + な い-adjective + い このマンションは狭いばかりか、暗いです。 このマンションはせまいばかりか、くらいです。 This apartment is not only very small, it's also quite dark.",
        "examples": [
            {
                "ja": "このマンションは狭いばかりか、暗いです。",
                "romaji": "このマンションはせまいばかりか、くらいです。",
                "uz": "This apartment is not only very small, it's also quite dark."
            },
            {
                "ja": "私は、漢字ばかりか、ひらがなもカタカナも書けません。",
                "romaji": "わたしは、かんじばかりか、ひらがなもかけません。",
                "uz": "Not only can I not write kanji, but I can't even write hiragana or katakana."
            }
        ]
    },
    {
        "id": "n2_pdf_6_bakari_ni",
        "level": "N2",
        "title": "〜ばかりに (bakari ni)",
        "romaji": "bakari ni",
        "meaningUz": "simply because; on account of~ (negative",
        "structure": "Verb (casual) ばかりに Noun (+ である) な-adjective + な/である い-adjective お⾦がないばかりに、今度の旅⾏に⾏けなかった。 おかねがないばかりに、こんどのりょこうにいけなかった。 I wasn't able to go on this trip since I don't have any money.",
        "examples": [
            {
                "ja": "お⾦がないばかりに、今度の旅⾏に⾏けなかった。",
                "romaji": "おかねがないばかりに、こんどのりょこうにいけなかった。",
                "uz": "I wasn't able to go on this trip since I don't have any money."
            },
            {
                "ja": "ホラー映画を⾒たばかりに、怖くてなかなか寝られない。",
                "romaji": "ホラーえいがをみたばかりに、こわくてなかなかねられない。",
                "uz": "I watched a horror movie, which was really scary and now I can't seem to fall asleep."
            }
        ]
    },
    {
        "id": "n2_pdf_7_chinamini",
        "level": "N2",
        "title": "〜因みに 【ちなみに】 (chinamini)",
        "romaji": "chinamini",
        "meaningUz": "by the way; in this connection;",
        "structure": "ちなみに phrase これ、お⼟産だよ。ちなみにベトナムで買ったんだよ。 これ、おみやげだよ。ちなみにベトナムでかったんだよ。 Here is a souvenir. I bought it in Vietnam by the way.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 因みに 【ちなみに】 (chinamini). Meaning: by the way; in this connection;",
                "romaji": "incidentally; (conjunction).",
                "uz": "Example Sentences"
            },
            {
                "ja": "これ、お⼟産だよ。ちなみにベトナムで買ったんだよ。",
                "romaji": "これ、おみやげだよ。ちなみにベトナムでかったんだよ。",
                "uz": "Here is a souvenir. I bought it in Vietnam by the way."
            }
        ]
    },
    {
        "id": "n2_pdf_8_chitto_monai",
        "level": "N2",
        "title": "〜ちっとも〜ない (chitto mo~nai)",
        "romaji": "chitto mo~nai",
        "meaningUz": "(not) at all; (not) in the least~",
        "structure": "ちっとも Verb (ない form) 彼は酒はちっとも飲まない。 かれはさけはちっとものまない。 He doesn't drink any alcohol at all.",
        "examples": [
            {
                "ja": "彼は酒はちっとも飲まない。",
                "romaji": "かれはさけはちっとものまない。",
                "uz": "He doesn't drink any alcohol at all."
            },
            {
                "ja": "この商品はちっとも売れない。",
                "romaji": "このしょうひんはちっともうれない。",
                "uz": "This product does not sell at all."
            }
        ]
    },
    {
        "id": "n2_pdf_9_dake_atte",
        "level": "N2",
        "title": "〜だけあって (dake atte)",
        "romaji": "dake atte",
        "meaningUz": "being the case; precisely because; as",
        "structure": "Verb (casual) だけあって だけのことはあって Noun な-adjective + な い-adjective このアパートは駅に近いだけあって、やっぱり家賃も⾼い。 このアパートはえきにちかいだけあって、やっぱりやちんもたかい。 This apartment is close to the station, so as expected the rent is expensive.",
        "examples": [
            {
                "ja": "このアパートは駅に近いだけあって、やっぱり家賃も⾼い。",
                "romaji": "このアパートはえきにちかいだけあって、やっぱりやちんもたかい。",
                "uz": "This apartment is close to the station, so as expected the rent is expensive."
            },
            {
                "ja": "さすが⼤都会だけあって何かしら仕事がある。",
                "romaji": "さすがだいとかいだけあってなにかしらしごとがある。",
                "uz": "As expected of a big city, there is always work to do."
            }
        ]
    },
    {
        "id": "n2_pdf_10_dake_mashi_da",
        "level": "N2",
        "title": "〜だけましだ (dake mashi da)",
        "romaji": "dake mashi da",
        "meaningUz": "it’s better than; one should feel",
        "structure": "Verb (casual) だけましだ Noun + である な-adjective + な い-adjective 今⽇は暑いが、湿度が⾼くないだけましだ。 きょうはあついが、しつどがたかくないだけましだ。 It's hot today, but I'm glad the humidity is low.",
        "examples": [
            {
                "ja": "今⽇は暑いが、湿度が⾼くないだけましだ。",
                "romaji": "きょうはあついが、しつどがたかくないだけましだ。",
                "uz": "It's hot today, but I'm glad the humidity is low."
            },
            {
                "ja": "君は仕事があるだけましだよ。俺は⾸になってしまった。",
                "romaji": "きみはしごとがあるだけましだよ。おれはくびになってしまった。",
                "uz": "You should be grateful for even having a job. I got fired."
            }
        ]
    },
    {
        "id": "n2_pdf_11_dake_ni",
        "level": "N2",
        "title": "〜だけに (dake ni)",
        "romaji": "dake ni",
        "meaningUz": "being the case; precisely because; as one would",
        "structure": "Verb (casual) だけに Noun な-adjective + な い-adjective 駅が近いだけに家賃も⾼い。 えきがちかいだけにやちんもたかい。 The station is nearby, which is also why the rent is so high.",
        "examples": [
            {
                "ja": "駅が近いだけに家賃も⾼い。",
                "romaji": "えきがちかいだけにやちんもたかい。",
                "uz": "The station is nearby, which is also why the rent is so high."
            },
            {
                "ja": "このホテルは５つ星ホテルなだけに、サービスが充実している。",
                "romaji": "このホテルは５つぼしホテルなだけに、サービスがじゅうじつしている。",
                "uz": "As one would expect of a 5-star hotel, the service is perfect."
            }
        ]
    },
    {
        "id": "n2_pdf_12_dake_no_koto_wa_aru",
        "level": "N2",
        "title": "〜だけのことはある (dake no koto wa aru)",
        "romaji": "dake no koto wa aru",
        "meaningUz": "no wonder; as expected",
        "structure": "JLPT N2 ぶんぽう",
        "examples": [
            {
                "ja": "彼はだけのことはある、成功を収めた。",
                "romaji": "Kare wa dake no koto wa aru, seikou wo osameta.",
                "uz": "U oxir-oqibat muvaffaqiyatga erishdi."
            }
        ]
    },
    {
        "id": "n2_pdf_13_dake_wa",
        "level": "N2",
        "title": "〜だけは (dake wa)",
        "romaji": "dake wa",
        "meaningUz": "to do all that one can",
        "structure": "Verb  (dictionary form) だけは Same verb  (past form) ⾛れるだけは速く⾛った。 はしれるだけははやくはしった。 I ran as fast as my legs could carry me.",
        "examples": [
            {
                "ja": "⾛れるだけは速く⾛った。",
                "romaji": "はしれるだけははやくはしった。",
                "uz": "I ran as fast as my legs could carry me."
            },
            {
                "ja": "私はあなたを⼿伝えるだけは⼿伝ったよ。",
                "romaji": "わたしはあなたをてつだえるだけはてつだったよ。",
                "uz": "I did everything I could to help you."
            }
        ]
    },
    {
        "id": "n2_pdf_14_datte",
        "level": "N2",
        "title": "〜だって (datte)",
        "romaji": "datte",
        "meaningUz": "because; but; after all; even; too",
        "structure": "Noun + だって even, too だって + phrase because, but 彼だって⼈間だ。 かれだってにんげんだ。 He is only human.",
        "examples": [
            {
                "ja": "彼だって⼈間だ。",
                "romaji": "かれだってにんげんだ。",
                "uz": "He is only human."
            },
            {
                "ja": "私だってあなたに会いたい。",
                "romaji": "わたしだってあなたにあいたい。",
                "uz": "I miss you too."
            }
        ]
    },
    {
        "id": "n2_pdf_15_de_shika_nai",
        "level": "N2",
        "title": "〜でしかない (de shika nai)",
        "romaji": "de shika nai",
        "meaningUz": "merely; nothing but; no more than; there",
        "structure": "Noun でしかない これらの考えは推測でしかない。 これらのかんがえはすいそくでしかない。 This idea is nothing more than a guess.",
        "examples": [
            {
                "ja": "これらの考えは推測でしかない。",
                "romaji": "これらのかんがえはすいそくでしかない。",
                "uz": "This idea is nothing more than a guess."
            },
            {
                "ja": "この作業は時間の無駄でしかない。",
                "romaji": "このさぎょうはじかんのむだでしかない。",
                "uz": "This work is nothing but a waste of time."
            }
        ]
    },
    {
        "id": "n2_pdf_16_dokoro_dewa_nai",
        "level": "N2",
        "title": "〜どころではない (dokoro dewa nai)",
        "romaji": "dokoro dewa nai",
        "meaningUz": "not the time for; not the place",
        "structure": "Verb (casual) どころではない どころじゃない Noun 彼はよく間違いをするが、バカどころではない。 かれはよくまちがいをするが、バカどころではない。 He often makes mistakes, but he is no fool.",
        "examples": [
            {
                "ja": "彼はよく間違いをするが、バカどころではない。",
                "romaji": "かれはよくまちがいをするが、バカどころではない。",
                "uz": "He often makes mistakes, but he is no fool."
            },
            {
                "ja": "宿題がたくさんあってテレビを⾒るどころではない。",
                "romaji": "しゅくだいがたくさんあってテレビをみるどころではない。",
                "uz": "There's a bunch of homework to do, this is no time to be watching TV."
            }
        ]
    },
    {
        "id": "n2_pdf_17_dokoro_ka",
        "level": "N2",
        "title": "〜どころか (dokoro ka)",
        "romaji": "dokoro ka",
        "meaningUz": "far from; anything but; let alone; not to",
        "structure": "Verb (casual, non-past) どころか Noun な-adjective + (な) い-adjective もっと勉強しないと、N2どころかN3も無理だ。 もっとべんきょうしないと、N2どころかN3もむりだ。 If you do not study more, you will not be able to pass N2, let alone N",
        "examples": [
            {
                "ja": "もっと勉強しないと、N2どころかN3も無理だ。",
                "romaji": "もっとべんきょうしないと、N2どころかN3もむりだ。",
                "uz": "If you do not study more, you will not be able to pass N2, let alone N3."
            },
            {
                "ja": "そんな⾷べ物、健康になるどころか、病気になっちゃうよ。",
                "romaji": "そんなたべもの、けんこうになるどころか、びょうきになっちゃうよ。",
                "uz": "That food isn't going to make you healthy, on the contrary it will make you sick."
            }
        ]
    },
    {
        "id": "n2_pdf_18_dou_yara",
        "level": "N2",
        "title": "〜どうやら (dou yara)",
        "romaji": "dou yara",
        "meaningUz": "possibly; apparently; seems like; somehow;",
        "structure": "どうやら phrase どうやら明⽇は⾬になりそうだ。 どうやらあしたはあめになりそうだ。 Apparently, it's going to rain tomorrow.",
        "examples": [
            {
                "ja": "どうやら明⽇は⾬になりそうだ。",
                "romaji": "どうやらあしたはあめになりそうだ。",
                "uz": "Apparently, it's going to rain tomorrow."
            },
            {
                "ja": "どうやら、彼は知らないらしい。",
                "romaji": "どうやら、かれはしらないらしい。",
                "uz": "It seems he doesn’t know."
            }
        ]
    },
    {
        "id": "n2_pdf_19_douse",
        "level": "N2",
        "title": "〜どうせ (douse)",
        "romaji": "douse",
        "meaningUz": "anyhow; in any case; at any rate; after all; no matter",
        "structure": "どうせ phrase どうせやるなら上⼿にやれ。 どうせやるならじょうずにやれ。 If you're going to do it no matter what, do it well!",
        "examples": [
            {
                "ja": "どうせやるなら上⼿にやれ。",
                "romaji": "どうせやるならじょうずにやれ。",
                "uz": "If you're going to do it no matter what, do it well!"
            },
            {
                "ja": "どうせ参加しないのなら、早めに伝えたほうがいい。",
                "romaji": "どうせさんかしないのなら、はやめにつたえたほうがいい。",
                "uz": "If you're not going to participate after all, it's best to say so as quick as possible."
            }
        ]
    },
    {
        "id": "n2_pdf_20_enai",
        "level": "N2",
        "title": "〜得ない 【えない】 (enai)",
        "romaji": "enai",
        "meaningUz": "unable to; cannot; it is not possible to~",
        "structure": "Verb ます (stem form) 得ない あの⼈が結婚したって本当︕︖え〜︕あり得ないよ︕ あのひとがけっこんしたってほんとう︕︖え〜︕ありえないよ︕ Is it true that he got married? No way! It's not possible!",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 得ない 【えない】(enai). Meaning: unable to; cannot; it is not possible to~.",
                "romaji": "To say the opposite, use 得る「える/うる」(eru/uru).",
                "uz": "Example Sentences"
            },
            {
                "ja": "To say the opposite, use 得る「える/うる」(eru/uru).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_21_eruuru",
        "level": "N2",
        "title": "〜得る 【える/うる】 (eru/uru)",
        "romaji": "eru/uru",
        "meaningUz": "can; to be able to; is possible to~",
        "structure": "Verb ます (stem form) 得る  (える/うる) 君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。 君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。 I believe in your story. I mean, anything is possible in this world.",
        "examples": [
            {
                "ja": "Both can be used with the same meaning for the negative form, you must use 得ない (enai).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。",
                "romaji": "君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。",
                "uz": "I believe in your story. I mean, anything is possible in this world."
            }
        ]
    },
    {
        "id": "n2_pdf_22_futatabi",
        "level": "N2",
        "title": "〜再び 【ふたたび】 (futatabi)",
        "romaji": "futatabi",
        "meaningUz": "again; once more",
        "structure": "再び ふたたび phrase 来週の⽉曜⽇からレッスンを再び開始したいですか︖ らいしゅうのげつようびからレッスンをふたたびかいししたいですか︖ Would you like to restart your lessons from next Monday?",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 再び 【ふたたび】(futatabi). Meaning: again; once more.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "来週の⽉曜⽇からレッスンを再び開始したいですか︖",
                "romaji": "らいしゅうのげつようびからレッスンをふたたびかいししたいですか︖",
                "uz": "Would you like to restart your lessons from next Monday?"
            }
        ]
    },
    {
        "id": "n2_pdf_23_fuu_ni",
        "level": "N2",
        "title": "〜⾵に 【 ふうに 】 (fuu ni)",
        "romaji": "fuu ni",
        "meaningUz": "this way; that way; in such a way; how",
        "structure": "どんな あんな こんな どういう ふうに + Verb Verb (casual) こんなふうにやりなさい。 こんなふうにやりなさい。 Please do it like this.",
        "examples": [
            {
                "ja": "私もあんなふうになりたいです。",
                "romaji": "わたしもあんなふうになりたいです。",
                "uz": "I also want to become that way."
            },
            {
                "ja": "どういうふうに動くか⾒せてください。",
                "romaji": "どういうふうにうごくかみせてください。",
                "uz": "Please show me how it works."
            }
        ]
    },
    {
        "id": "n2_pdf_24_o_kikkake_ni",
        "level": "N2",
        "title": "〜をきっかけに (o kikkake ni)",
        "romaji": "o kikkake ni",
        "meaningUz": "with… as a start; as a result of; taking",
        "structure": "Verb (た form) + の/こと がきっかけで をきっかけに Noun 彼⼥は病気をきっかけにそのつまらない仕事を辞めた。 かのじょはびょうきをきっかけにそのつまらないしごとをやめた。 She used her illness to quit that boring job.",
        "examples": [
            {
                "ja": "彼⼥は病気をきっかけにそのつまらない仕事を辞めた。",
                "romaji": "かのじょはびょうきをきっかけにそのつまらないしごとをやめた。",
                "uz": "She used her illness to quit that boring job."
            },
            {
                "ja": "昨年の事故をきっかけとして、安全対策が強化された。",
                "romaji": "さくねんのじこをきっかけとして、あんぜんたいさくがきょうかされた。",
                "uz": "As a result of last year's accident, safety measures have been strengthened."
            }
        ]
    },
    {
        "id": "n2_pdf_25_gyaku_ni",
        "level": "N2",
        "title": "〜逆に 【ぎゃくに】 (gyaku ni)",
        "romaji": "gyaku ni",
        "meaningUz": "conversely; on the contrary~",
        "structure": "逆に phrase 娘はスポーツが好きだが、逆に息⼦はスポーツが嫌いだ。 娘はスポーツが好きだが、逆に息⼦はスポーツが嫌いだ。 My daughter likes sports, but on the other hand my son hates them.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 逆に 【ぎゃくに】(gyaku ni). Meaning: conversely; on the contrary~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "娘はスポーツが好きだが、逆に息⼦はスポーツが嫌いだ。",
                "romaji": "娘はスポーツが好きだが、逆に息⼦はスポーツが嫌いだ。",
                "uz": "My daughter likes sports, but on the other hand my son hates them."
            }
        ]
    },
    {
        "id": "n2_pdf_26_hanmen",
        "level": "N2",
        "title": "〜反⾯ 【はんめん】 (hanmen)",
        "romaji": "hanmen",
        "meaningUz": "while, although; on the other hand~",
        "structure": "Verb (casual, non-past) 反⾯ Noun + である な-adjective + な/である い-adjective Phrase 1 + その反⾯ + Phrase 2 この部屋は⽇当たりがいい反⾯、夏はかなり暑いです。 このへやはひあたりがいいはんめん、なつはかなりあついです。 This room has great light exposure, but on the other hand it is very hot in the summer.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 反⾯ 【はんめん】(hanmen). Meaning: while, although; on the other hand~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "Phrase 1 + その反⾯ + Phrase 2",
                "romaji": "この部屋は⽇当たりがいい反⾯、夏はかなり暑いです。",
                "uz": "このへやはひあたりがいいはんめん、なつはかなりあついです。"
            }
        ]
    },
    {
        "id": "n2_pdf_27_hatashite",
        "level": "N2",
        "title": "〜果たして 【はたして】 (hatashite)",
        "romaji": "hatashite",
        "meaningUz": "as was expected; sure enough;",
        "structure": "果たして phrase 果たしてそうだろうか。 はたしてそうだろうか。 Can it really be so?",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 果たして 【はたして】(hatashite). Meaning: as was expected; sure enough;",
                "romaji": "really; actually~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "果たしてそうだろうか。",
                "romaji": "はたしてそうだろうか。",
                "uz": "Can it really be so?"
            }
        ]
    },
    {
        "id": "n2_pdf_28_ichiou",
        "level": "N2",
        "title": "〜⼀応 【いちおう】 (ichiou)",
        "romaji": "ichiou",
        "meaningUz": "more or less; pretty much; roughly;",
        "structure": "⼀応 phrase ⼀応やりました。 いちおうやりました。 I did it (but it may still need some work).",
        "examples": [
            {
                "ja": "Learn Japanese grammar: ⼀応 【いちおう】(ichiou). Meaning: more or less; pretty much; roughly;",
                "romaji": "tentatively~.",
                "uz": "This is often used to sound more humble when expressing you can do something so as to not sound like"
            },
            {
                "ja": "⼀応やりました。",
                "romaji": "いちおうやりました。",
                "uz": "I did it (but it may still need some work)."
            }
        ]
    },
    {
        "id": "n2_pdf_29_igai",
        "level": "N2",
        "title": "〜以外 【いがい】 (igai)",
        "romaji": "igai",
        "meaningUz": "with the exception of; excepting~",
        "structure": "Noun 以外 + (の、は、に） ⾷事以外には何ができる︖ しょくじいがいにはなにができる︖ Apart from eating, what else can we do?",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 以外 【いがい】(igai). Meaning: with the exception of; excepting~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "以外 + (の、は、に）",
                "romaji": "⾷事以外には何ができる︖",
                "uz": "しょくじいがいにはなにができる︖"
            }
        ]
    },
    {
        "id": "n2_pdf_30_ijou_ni",
        "level": "N2",
        "title": "〜以上に 【いじょうに】 (ijou ni)",
        "romaji": "ijou ni",
        "meaningUz": "more than; not less than; beyond~",
        "structure": "Verb (casual) 以上に Noun な-adjective 以上の Noun 今まで以上に仕事を頑張ります。 いままでいじょうにしごとをがんばります。 I will work even harder at work than I have until now.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 以上に 【いじょうに】(ijou ni). Meaning: more than; not less than; beyond~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "今まで以上に仕事を頑張ります。",
                "romaji": "いままでいじょうにしごとをがんばります。",
                "uz": "I will work even harder at work than I have until now."
            }
        ]
    },
    {
        "id": "n2_pdf_31_ijou_wa",
        "level": "N2",
        "title": "〜以上は 【いじょうは】 (ijou wa)",
        "romaji": "ijou wa",
        "meaningUz": "because; since; seeing that~",
        "structure": "Verb (casual) 以上（は） Noun + である な-adjective + である 約束した以上、きちんと守ってくださいね。 やくそくしたいじょう、きちんとまもってくださいね。 You've made a promise, so be sure to keep it!",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 以上は 【いじょうは】(ijou wa). Meaning: because; since; seeing that~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "以上（は）",
                "romaji": "Noun + である",
                "uz": "な-adjective + である"
            }
        ]
    },
    {
        "id": "n2_pdf_32_ikinari",
        "level": "N2",
        "title": "〜⾏き成り 【いきなり】 (ikinari)",
        "romaji": "ikinari",
        "meaningUz": "abruptly; suddenly; all of a",
        "structure": "いきなり action いきなり男の⼈に道を聞かれた。 いきなりおとこのひとにみちをきかれた。 A man suddenly asked me for directions.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: ⾏き成り 【いきなり】 (ikinari). Meaning: abruptly; suddenly; all of a",
                "romaji": "sudden; without warning.",
                "uz": "This is often written in hiragana form."
            },
            {
                "ja": "いきなり男の⼈に道を聞かれた。",
                "romaji": "いきなりおとこのひとにみちをきかれた。",
                "uz": "A man suddenly asked me for directions."
            }
        ]
    },
    {
        "id": "n2_pdf_33_ikki_ni",
        "level": "N2",
        "title": "〜⼀気に 【いっきに】 (ikki ni)",
        "romaji": "ikki ni",
        "meaningUz": "in one go; without stopping; all at",
        "structure": "⼀気に phrase お茶を⼀気に飲みました。 おちゃをいっきにのみました。 I drank all of the tea at once.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: ⼀気に 【いっきに】(ikki ni). Meaning: in one go; without stopping; all at",
                "romaji": "once; immediately; instantly; right away~.",
                "uz": "Meaning 1"
            },
            {
                "ja": "お茶を⼀気に飲みました。",
                "romaji": "おちゃをいっきにのみました。",
                "uz": "I drank all of the tea at once."
            }
        ]
    },
    {
        "id": "n2_pdf_34_ippou_de",
        "level": "N2",
        "title": "〜⼀⽅で 【いっぽうで】 (ippou de)",
        "romaji": "ippou de",
        "meaningUz": "on one hand, on the other hand;",
        "structure": "Verb (casual) ⼀⽅（で） Noun + である な-adjective + である い-adjective お⺟さんは優しい⼀⽅で、お⽗さんはこわい。 おかあさんはやさしいいっぽうで、おとうさんはこわい。 My mother is kind, but on the other hand my father is scary.",
        "examples": [
            {
                "ja": "お⺟さんは優しい⼀⽅で、お⽗さんはこわい。",
                "romaji": "おかあさんはやさしいいっぽうで、おとうさんはこわい。",
                "uz": "My mother is kind, but on the other hand my father is scary."
            },
            {
                "ja": "⽗は⾃分に厳しい⼀⽅で、他⼈には優しい。",
                "romaji": "ちちはじぶんにきびしいいっぽうで、たにんにはやさしい。",
                "uz": "My father is very strict with himself but very kind to others."
            }
        ]
    },
    {
        "id": "n2_pdf_35_iwayuru",
        "level": "N2",
        "title": "〜いわゆる (iwayuru)",
        "romaji": "iwayuru",
        "meaningUz": "what is called; as it is called; the so-called; so to",
        "structure": "いわゆる Noun 彼はいわゆる語学の天才だ。 かれはいわゆるごがくのてんさいだ。 He is what is called a genius in language.",
        "examples": [
            {
                "ja": "彼はいわゆる語学の天才だ。",
                "romaji": "かれはいわゆるごがくのてんさいだ。",
                "uz": "He is what is called a genius in language."
            },
            {
                "ja": "彼⼥はいわゆる本の⾍です。",
                "romaji": "かのじょはいわゆるほんのむしです。",
                "uz": "She is what we call a bookworm."
            }
        ]
    },
    {
        "id": "n2_pdf_36_iyoiyo",
        "level": "N2",
        "title": "〜いよいよ (iyoiyo)",
        "romaji": "iyoiyo",
        "meaningUz": "at last; finally; beyond doubt",
        "structure": "いよいよ phrase いよいよ⼤学の⽣活が始まります。初めて親に離れるからちょっと⼼配する。 いよいよだいがくのせいかつがはじまります。はじめておやにはなれるからちょっと しんぱいする。 My university life has finally begun. Though it is my first time to be away from my parents so I am a little nervous.",
        "examples": [
            {
                "ja": "いよいよ⼤学の⽣活が始まります。初めて親に離れるからちょっと⼼配する。",
                "romaji": "いよいよだいがくのせいかつがはじまります。はじめておやにはなれるからちょっと",
                "uz": "しんぱいする。"
            },
            {
                "ja": "いよいよ来週の⽇曜⽇が⺟の⽇だ。⺟に何を買って上げたほうがいいかな。",
                "romaji": "いよいよらいしゅうのにちようびがははのひだ。ははになにをかってあげたほうがい",
                "uz": "いかな。"
            }
        ]
    },
    {
        "id": "n2_pdf_37_jou",
        "level": "N2",
        "title": "〜上 【じょう】 (jou)",
        "romaji": "jou",
        "meaningUz": "for the sake of; from the standpoint of; as a",
        "structure": "Noun 上 健康上ではポテトフライや揚げ物などは⾷べない⽅がいいと思います。 けんこうじょうではポテトフライやあげものなどはたべないほうがいいとおもいま す。 For the sake of one's health, I think it's best to not eat french fries or other fried foods.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 上 【じょう】(jou). Meaning: for the sake of; from the standpoint of; as a",
                "romaji": "matter of; in terms of~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "健康上ではポテトフライや揚げ物などは⾷べない⽅がいいと思います。",
                "romaji": "けんこうじょうではポテトフライやあげものなどはたべないほうがいいとおもいま",
                "uz": "す。"
            }
        ]
    },
    {
        "id": "n2_pdf_38_ka_to_omottara",
        "level": "N2",
        "title": "〜かと思ったら 【かとおもったら】 (ka to omottara)",
        "romaji": "ka to omottara",
        "meaningUz": "just when; no",
        "structure": "Verb (た form) かと思ったら かと思うと かと思えば 空が急に暗くなってきたかと思うと、⾬が降ってきた。 そらがきゅうにくらくなってきたかとおもうと、あめがふってきた。 It started raining no sooner than when the sky suddenly turned dark.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: かと思ったら 【かとおもったら】(ka to omottara). Meaning: just when; no",
                "romaji": "sooner than~.",
                "uz": "This may also be used as:"
            },
            {
                "ja": "かと思うと (ka to omou to).",
                "romaji": "かと思えば (ka to omoeba).",
                "uz": "Example Sentences"
            }
        ]
    },
    {
        "id": "n2_pdf_39_kanai_ka_no_uchi_ni",
        "level": "N2",
        "title": "〜か〜ないかのうちに (ka~nai ka no uchi ni)",
        "romaji": "ka~nai ka no uchi ni",
        "meaningUz": "just as; right after; as",
        "structure": "Verb + か (dictionary form) Verb ない + か のうちに 授業が終わるか終わらないかのうちに彼は教室を出た。 じゅぎょうがおわるかおわらないかのうちにかれはきょうしつをでた。 He left the classrom as soon as class ended.",
        "examples": [
            {
                "ja": "授業が終わるか終わらないかのうちに彼は教室を出た。",
                "romaji": "じゅぎょうがおわるかおわらないかのうちにかれはきょうしつをでた。",
                "uz": "He left the classrom as soon as class ended."
            },
            {
                "ja": "彼が電⾞が⽌まるか⽌まらないかのうちにホームに⾶び降りた。",
                "romaji": "かれがでんしゃがとまるかとまらないかのうちにホームにとびおりた。",
                "uz": "He jumped onto the platform just as the train stopped."
            }
        ]
    },
    {
        "id": "n2_pdf_40_kaette",
        "level": "N2",
        "title": "〜かえって (kaette)",
        "romaji": "kaette",
        "meaningUz": "on the contrary; rather; all the more;",
        "structure": "Phrase 1 かえって phrase 2 彼は⼿助けどころかかえって邪魔になった。 かれはてだすけどころかかえってじゃまになった。 He was in no position to help, on the contrary he got in the way.",
        "examples": [
            {
                "ja": "彼は⼿助けどころかかえって邪魔になった。",
                "romaji": "かれはてだすけどころかかえってじゃまになった。",
                "uz": "He was in no position to help, on the contrary he got in the way."
            },
            {
                "ja": "彼⼥は痩せるどころかかえって体重が増えた。",
                "romaji": "かのじょはやせるどころかかえってたいじゅうがふえた。",
                "uz": "Her weight went up instead of down."
            }
        ]
    },
    {
        "id": "n2_pdf_41_kagiri",
        "level": "N2",
        "title": "〜限り 【かぎり】 (kagiri)",
        "romaji": "kagiri",
        "meaningUz": "as long as; while… is the case; as far as;",
        "structure": "Verb (casual, non-past) 限り Noun + である 明⽇は、⾬が降らない限り、10時に学校で会いましょう。 あしたは、あめがふらないかぎり、10じゅうじにがっこうであいましょう。 As long as it doesn't rain tomorrow, let's meet at the school at 10 am.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 限り 【かぎり】(kagiri). Meaning: as long as; while… is the case; as far as;",
                "romaji": "while~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "明⽇は、⾬が降らない限り、10時に学校で会いましょう。",
                "romaji": "あしたは、あめがふらないかぎり、10じゅうじにがっこうであいましょう。",
                "uz": "As long as it doesn't rain tomorrow, let's meet at the school at 10 am."
            }
        ]
    },
    {
        "id": "n2_pdf_42_kai_ga_aru",
        "level": "N2",
        "title": "〜甲斐がある 【かいがある】 (kai ga aru)",
        "romaji": "kai ga aru",
        "meaningUz": "it’s worth one’s efforts to do",
        "structure": "Verb (casual, past) Verb (ます stem) 甲斐がある かいがある /  がいがある Noun + の 努⼒の甲斐があって、希望の⼤学に合格した。 どりょくのかいがあって、きぼうのだいがくにごうかくした。 It was worth working so hard. I got into my target university.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 甲斐がある 【かいがある】(kai ga aru). Meaning: it’s worth one’s efforts to do",
                "romaji": "something.",
                "uz": "This may change to がいがある, depending on the preceding verb. This is especially true when used with"
            },
            {
                "ja": "甲斐がある",
                "romaji": "かいがある /",
                "uz": "がいがある"
            }
        ]
    },
    {
        "id": "n2_pdf_43_kanenai",
        "level": "N2",
        "title": "〜かねない (kanenai)",
        "romaji": "kanenai",
        "meaningUz": "(someone) might do something; something",
        "structure": "Verb ます (stem form) かねない この問題が⻑期化すれば、会社は倒産しかねない。早く対策を考えましょう。 このもんだいがちょうきかすれば、かいしゃはとうさんしかねない。はやくたいさく をかんがえましょう。 If this problem gets any bigger, this company might go bankcrupt. Let's hurry and think of a counterplan.",
        "examples": [
            {
                "ja": "この問題が⻑期化すれば、会社は倒産しかねない。早く対策を考えましょう。",
                "romaji": "このもんだいがちょうきかすれば、かいしゃはとうさんしかねない。はやくたいさく",
                "uz": "をかんがえましょう。"
            },
            {
                "ja": "休まずに⻑時間運転したら、事故を起こしかねない。",
                "romaji": "やすまずにちょうじかんうんてんしたら、じこをおこしかねない。",
                "uz": "If you drive for a long time without taking any breaks, you might get into an accident."
            }
        ]
    },
    {
        "id": "n2_pdf_44_kaneru__kanemasu",
        "level": "N2",
        "title": "〜かねる / かねます (kaneru / kanemasu)",
        "romaji": "kaneru / kanemasu",
        "meaningUz": "unable to do something;",
        "structure": "Verb ます (stem form) かねる かねます すぐにお返事はできかねます。 すぐにおへんじはできかねます。 I can not give you an immediate answer.",
        "examples": [
            {
                "ja": "すぐにお返事はできかねます。",
                "romaji": "すぐにおへんじはできかねます。",
                "uz": "I can not give you an immediate answer."
            },
            {
                "ja": "私はそれに賛同しかねます。",
                "romaji": "わたしはそれにさんどうしかねます。",
                "uz": "I am not able to agree with that."
            }
        ]
    },
    {
        "id": "n2_pdf_45_kara_iu_to",
        "level": "N2",
        "title": "〜から⾔うと 【からいうと】 (kara iu to)",
        "romaji": "kara iu to",
        "meaningUz": "in terms of; from the point",
        "structure": "Noun から⾔うと から⾔えば から⾔って 僕の成績から⾔えば、国⽴⼤学は無理だと思う。 ぼくのせいせきからいえば、こくりつだいがくはむりだとおもう。 With these grades, I don’t think I'm going to be able to get into a national university",
        "examples": [
            {
                "ja": "僕の成績から⾔えば、国⽴⼤学は無理だと思う。",
                "romaji": "ぼくのせいせきからいえば、こくりつだいがくはむりだとおもう。",
                "uz": "With these grades, I don’t think I'm going to be able to get into a national university"
            },
            {
                "ja": "能⼒から⾔って、彼がこの仕事に⼀番適切だと思います。",
                "romaji": "のうりょくからいって、かれがこのしごとにいちばんてきせつだとおもいます。",
                "uz": "In terms of ability, I think he’s the best candidate for the job."
            }
        ]
    },
    {
        "id": "n2_pdf_46_kara_koso",
        "level": "N2",
        "title": "〜からこそ (kara koso)",
        "romaji": "kara koso",
        "meaningUz": "precisely because~",
        "structure": "Verb (casual) からこそ Noun + だ だからこそ + phrase 早く起きたからこそ私は始発電⾞に間に合った。 はやくおきたからこそわたしはしはつでんしゃにまにあった 。 I was able to catch the first train because I woke up early.",
        "examples": [
            {
                "ja": "早く起きたからこそ私は始発電⾞に間に合った。",
                "romaji": "はやくおきたからこそわたしはしはつでんしゃにまにあった 。",
                "uz": "I was able to catch the first train because I woke up early."
            },
            {
                "ja": "毎⽇⼀⽣懸命に練習したからこそ、優勝できたのです。",
                "romaji": "まいにちいっしょうけんめいにれんしゅうしたからこそ、ゆうしょうできたのです。",
                "uz": "I was able to win because I trained every day to the best of my ability."
            }
        ]
    },
    {
        "id": "n2_pdf_47_kara_miru_to",
        "level": "N2",
        "title": "〜から⾒ると 【からみると】 (kara miru to)",
        "romaji": "kara miru to",
        "meaningUz": "from the point of view",
        "structure": "Noun から⾒ると から⾒れば から⾒て ⾍嫌いな私から⾒ると、ゴキブリを⼿でつかむなんてありえない。 むしきらいなわたしからみると、ゴキブリをてでつかむなんてありえない。 For someone who hates bugs like me, catching cockroaches by hand is unthinkable.",
        "examples": [
            {
                "ja": "⾍嫌いな私から⾒ると、ゴキブリを⼿でつかむなんてありえない。",
                "romaji": "むしきらいなわたしからみると、ゴキブリをてでつかむなんてありえない。",
                "uz": "For someone who hates bugs like me, catching cockroaches by hand is unthinkable."
            },
            {
                "ja": "緊張している様⼦から⾒て、彼らは新⼊社員だろう。",
                "romaji": "きんちょうしているようすからみて、かれらはしんにゅうしゃいんだろう。",
                "uz": "Judjing from their nervious appearance, they must be new to the company."
            }
        ]
    },
    {
        "id": "n2_pdf_48_kara_niwa",
        "level": "N2",
        "title": "〜からには (kara niwa)",
        "romaji": "kara niwa",
        "meaningUz": "now that; since; so long as; because~",
        "structure": "Verb (dictionary form) からには Verb (casual, past) 約束したからにはその約束を守らなければならない。 やくそくしたからにはそのやくそくをまもらなければならない。 Since you’ve made a promise, you must keep it.",
        "examples": [
            {
                "ja": "約束したからにはその約束を守らなければならない。",
                "romaji": "やくそくしたからにはそのやくそくをまもらなければならない。",
                "uz": "Since you’ve made a promise, you must keep it."
            },
            {
                "ja": "私はJLPT N2 試験を受けるからには、合格したいです。",
                "romaji": "わたしはJLPT N2 しけんをうけるからには、ごうかくしたいです。",
                "uz": "Now that I will be taking the JLPT N2, I want to pass!"
            }
        ]
    },
    {
        "id": "n2_pdf_49_kara_shite",
        "level": "N2",
        "title": "〜からして (kara shite)",
        "romaji": "kara shite",
        "meaningUz": "judging from; based on; since; from; even~",
        "structure": "Noun からして タイトルからして、⾯⽩そうな本ですね。 タイトルからして、おもしろそうなほんですね。 Judging from the title, this book sounds interesting.",
        "examples": [
            {
                "ja": "タイトルからして、⾯⽩そうな本ですね。",
                "romaji": "タイトルからして、おもしろそうなほんですね。",
                "uz": "Judging from the title, this book sounds interesting."
            },
            {
                "ja": "その新社員は顔つきからして優しそうだ。",
                "romaji": "そのしんしゃいんはかおつきからしてやさしそうだ。",
                "uz": "That new employee looks very friendly (based on their expression)."
            }
        ]
    },
    {
        "id": "n2_pdf_50_kara_suru_to__kara_sureba",
        "level": "N2",
        "title": "〜からすると / からすれば (kara suru to / kara sureba)",
        "romaji": "kara suru to / kara sureba",
        "meaningUz": "judging from;",
        "structure": "Noun からすると からすれば 彼の症状からすると、⼼臓の病気かもしれません。 かれのしょうじょうからすると、しんぞうのびょうきかもしれません。 Judging from his condition, it might be a heart illness.",
        "examples": [
            {
                "ja": "彼の症状からすると、⼼臓の病気かもしれません。",
                "romaji": "かれのしょうじょうからすると、しんぞうのびょうきかもしれません。",
                "uz": "Judging from his condition, it might be a heart illness."
            },
            {
                "ja": "今度のJLPTですが、今の皆さんの実⼒からすると問題なく合格できるでしょ",
                "romaji": "う。",
                "uz": "こんどのJLPTですが、いまのみなさんのじつりょくからするともんだいなくごうかく"
            }
        ]
    },
    {
        "id": "n2_pdf_51_kara_to_itte",
        "level": "N2",
        "title": "〜からと⾔って 【からといって】 (kara to itte)",
        "romaji": "kara to itte",
        "meaningUz": "just because; even if;",
        "structure": "Verb (casual) からといって Noun + だ な-adjective + だ い-adjective お⾦がたくさんあるからといって使いすぎるのはよくない。 おかねがたくさんあるからといってつかいすぎるのはよくない。 It’s not good to spend too much just because you have a lot of money.",
        "examples": [
            {
                "ja": "お⾦がたくさんあるからといって使いすぎるのはよくない。",
                "romaji": "おかねがたくさんあるからといってつかいすぎるのはよくない。",
                "uz": "It’s not good to spend too much just because you have a lot of money."
            },
            {
                "ja": "安いからといって、要らないものまで買うのはよくない。",
                "romaji": "やすいからといって、いらないものまでかうのはよくない。",
                "uz": "It’s not good to buy unnecessary things just because they’re cheap."
            }
        ]
    },
    {
        "id": "n2_pdf_52_kkonai",
        "level": "N2",
        "title": "〜っこない (kkonai)",
        "romaji": "kkonai",
        "meaningUz": "no chance of; …is definitely not possible",
        "structure": "Verb ます (stem form) っこない Verb (potential stem form) ⾞なんて買えっこないよ、⾃転⾞を買うお⾦もないんだから。 くるまなんてかえっこないよ、じてんしゃをかうおかねもないんだから。 There's no way I can buy a car! I don't even have enough money to buy a bicycle..",
        "examples": [
            {
                "ja": "⾞なんて買えっこないよ、⾃転⾞を買うお⾦もないんだから。",
                "romaji": "くるまなんてかえっこないよ、じてんしゃをかうおかねもないんだから。",
                "uz": "There's no way I can buy a car! I don't even have enough money to buy a bicycle.."
            },
            {
                "ja": "3歳の⼦供にそんな難しいことを⾔っても分かりっこないよ。",
                "romaji": "3さいのこどもにそんなむずかしいことをいってもわかりっこないよ。",
                "uz": "If you say something that difficult to a 3-year-old, there's no way they are going to be"
            }
        ]
    },
    {
        "id": "n2_pdf_53_koto_da",
        "level": "N2",
        "title": "〜ことだ (koto da)",
        "romaji": "koto da",
        "meaningUz": "should do~ (used for suggestions or giving",
        "structure": "Verb (dictionary form) ことだ Verb (ない form) ⾵邪ぎみなら、早く寝ることですよ。 かぜぎみなら、はやくねることですよ。 If you feel like you're catching a cold, you should go to bed early.",
        "examples": [
            {
                "ja": "⾵邪ぎみなら、早く寝ることですよ。",
                "romaji": "かぜぎみなら、はやくねることですよ。",
                "uz": "If you feel like you're catching a cold, you should go to bed early."
            },
            {
                "ja": "無理をしないことだよ。",
                "romaji": "むりをしないことだよ。",
                "uz": "You shouldn't push yourself too hard"
            }
        ]
    },
    {
        "id": "n2_pdf_54_koto_dakara",
        "level": "N2",
        "title": "〜ことだから (koto dakara)",
        "romaji": "koto dakara",
        "meaningUz": "because; since~",
        "structure": "JLPT N2 ぶんぽう",
        "examples": [
            {
                "ja": "よくできる彼⼥のことだから、合格は間違いないだろう。",
                "romaji": "yoku dekiru kanojo no koto dakara, goukaku wa machigai nai darou.",
                "uz": "She will surely pass the exam because she does everything well."
            },
            {
                "ja": "全員そろったことだから、時間前だけれど始めましょうか。",
                "romaji": "zenin sorotta koto dakara, jikan mae dakeredo hajimemashouka.",
                "uz": "It is not time to start yet, but since everyone is here, shall we go ahead and start?"
            }
        ]
    },
    {
        "id": "n2_pdf_55_koto_ka",
        "level": "N2",
        "title": "〜ことか (koto ka)",
        "romaji": "koto ka",
        "meaningUz": "how…!; what…!",
        "structure": "Verb (casual) ことか Noun + である な-adjective + な い-adjective 何度注意したことか︖ なんどちゅういしたことか︖ How many times have I warned you?",
        "examples": [
            {
                "ja": "何度 (nando).",
                "romaji": "何時間 (nan jikan).",
                "uz": "etc.."
            },
            {
                "ja": "何時間 (nan jikan).",
                "romaji": "etc..",
                "uz": "Example Sentences"
            }
        ]
    },
    {
        "id": "n2_pdf_56_koto_naku",
        "level": "N2",
        "title": "〜ことなく (koto naku)",
        "romaji": "koto naku",
        "meaningUz": "without doing something even once",
        "structure": "Verb (dictionary form) ことなく お⽗さんは10年間休むことなく会社に通った。 おとうさんは10ねんかんやすむことなくかいしゃにかよった。 My father worked for 10 years without taking a break.",
        "examples": [
            {
                "ja": "お⽗さんは10年間休むことなく会社に通った。",
                "romaji": "おとうさんは10ねんかんやすむことなくかいしゃにかよった。",
                "uz": "My father worked for 10 years without taking a break."
            },
            {
                "ja": "彼らは試合に勝つために、1⽇も休むことなく練習に励んだ。",
                "romaji": "かれらはしあいにかつために、いちにちもやすむことなくれんしゅうにはげんだ。",
                "uz": "In order to win the match, they practiced continually without any days off."
            }
        ]
    },
    {
        "id": "n2_pdf_57_koto_ni",
        "level": "N2",
        "title": "〜ことに (koto ni)",
        "romaji": "koto ni",
        "meaningUz": "emphasize speaker’s feelings; to my (surprise/etc)",
        "structure": "Verb (た form) ことに な-adjective + な い-adjective 嬉しいことに、明⽇退院できるんです。 うれしいことに、あしたたいいんできるんです。 I'm happy that tomorrow I will be able to leave the hospital.",
        "examples": [
            {
                "ja": "驚いた 【おどろいた】 = to my surprise~",
                "romaji": "悲しい 【かなしい】= to my sadness; sadly~",
                "uz": "⾯⽩い【おもしろい】= to my amusement; interestingly~"
            },
            {
                "ja": "困った【こまった】= to my trouble~",
                "romaji": "嬉しい【うれしい】= to my pleasure~",
                "uz": "ありがたい = thankfully~"
            }
        ]
    },
    {
        "id": "n2_pdf_58_koto_niwa_naranai",
        "level": "N2",
        "title": "〜ことにはならない (koto niwa naranai)",
        "romaji": "koto niwa naranai",
        "meaningUz": "just because… doesn’t",
        "structure": "Verb (casual, past) + (とい う) ことにはならな い な-adjective + だという い-adjective + という でも、どうやらそんなことにはならないようです。 でも、どうやらそんなことにはならないようです。 But this did not seem likely to happen.",
        "examples": [
            {
                "ja": "彼が絵が好きだからといって絵がうまいということにはならない。",
                "romaji": "かれがえがすきだからといってえがうまいということにはならない。",
                "uz": "Just because he likes painting does not mean that he paints well."
            },
            {
                "ja": "彼⼥は貧しいからといって不幸だということにはならない。",
                "romaji": "かのじょはまずしいからといってふこうだということにはならない。",
                "uz": "Just because she’s poor does not mean that she is unhappy."
            }
        ]
    },
    {
        "id": "n2_pdf_59_kuse_shite",
        "level": "N2",
        "title": "〜くせして (kuse shite)",
        "romaji": "kuse shite",
        "meaningUz": "although~; despite the fact that~; even",
        "structure": "Verb (dictionary form) くせして Noun + の な-adjective + な い-adjective ⼤学⽣のくせして、そんなことも知らないの。 だいがくのくせして、そんなこともしらないの。 Even though you are a university student, you don't know that?",
        "examples": [
            {
                "ja": "⼤学⽣のくせして、そんなことも知らないの。",
                "romaji": "だいがくのくせして、そんなこともしらないの。",
                "uz": "Even though you are a university student, you don't know that?"
            },
            {
                "ja": "彼は歌が下⼿なくせして、いつもカラオケに⾏きたがる。",
                "romaji": "かれはうたがへたなくせして、いつもカラオケにいきたがる。",
                "uz": "Despite being bad at singing, he always wants to go to do karaoke."
            }
        ]
    },
    {
        "id": "n2_pdf_60_nara_madashimo",
        "level": "N2",
        "title": "〜未だしも 【ならまだしも】 (nara madashimo)",
        "romaji": "nara madashimo",
        "meaningUz": "rather; better ~",
        "structure": "Noun + なら まだしも Noun + は ⼀度だけならまだしも、⼆度も失敗してしまった。 いちどだけならまだしも、にどもしっぱいしてしまった。 It would be alright if I only messed up once, but I failed twice..",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 未だしも 【ならまだしも】 (nara madashimo). Meaning: rather; better ~.",
                "romaji": "There are two main patterns that are used.",
                "uz": "Pattern 1) Noun[A] + ならまだしも + [B]"
            },
            {
                "ja": "⼀度だけならまだしも、⼆度も失敗してしまった。",
                "romaji": "いちどだけならまだしも、にどもしっぱいしてしまった。",
                "uz": "It would be alright if I only messed up once, but I failed twice.."
            }
        ]
    },
    {
        "id": "n2_pdf_61_mai",
        "level": "N2",
        "title": "〜まい (mai)",
        "romaji": "mai",
        "meaningUz": "will not; will probably not; intend not to; must not~",
        "structure": "U-verb (dictionary form) まい Ru-verb ます (stem form) Exception: する => すまい Exception: くる => こまい あんなところは⼆度と⾏くまい。 あんなところはにどといくまい。 I'll never go to such a place again.",
        "examples": [
            {
                "ja": "あんなところは⼆度と⾏くまい。",
                "romaji": "あんなところはにどといくまい。",
                "uz": "I'll never go to such a place again."
            },
            {
                "ja": "彼はそう簡単に態度を変えるまい。",
                "romaji": "かれはそうかんたんにたいどをかえるまい。",
                "uz": "He won't be able to change his behavior that easily."
            }
        ]
    },
    {
        "id": "n2_pdf_62_mama_ni",
        "level": "N2",
        "title": "〜ままに (mama ni)",
        "romaji": "mama ni",
        "meaningUz": "as, to do as~",
        "structure": "Verb (dictionary form) +（が） まま（に） Verb (られる form) +（が） Noun + の 今のままにしておこう。 いまのままにしておこう。 Let's leave this as is.",
        "examples": [
            {
                "ja": "今のままにしておこう。",
                "romaji": "いまのままにしておこう。",
                "uz": "Let's leave this as is."
            },
            {
                "ja": "思うままにどうぞ意⾒を⾔ってください。",
                "romaji": "おもうままにどうぞいけんをいってください。",
                "uz": "Please tell me your honest opinion."
            }
        ]
    },
    {
        "id": "n2_pdf_63_mattakunai",
        "level": "N2",
        "title": "〜全く〜ない 【まったく〜ない】 (mattaku~nai)",
        "romaji": "mattaku~nai",
        "meaningUz": "not at all~",
        "structure": "まったく Verb (ない form) 全く漢字が書けない。 まったくかんじがかけない。 I cannot write kanji at all.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 全く〜ない 【まったく〜ない】(mattaku~nai). Meaning: not at all~.",
                "romaji": "Both the kanji and hiragana versions are commonly used.",
                "uz": "Example Sentences"
            },
            {
                "ja": "全く漢字が書けない。",
                "romaji": "まったくかんじがかけない。",
                "uz": "I cannot write kanji at all."
            }
        ]
    },
    {
        "id": "n2_pdf_64_mo_kamawazu",
        "level": "N2",
        "title": "〜も構わず【もかまわず】 (mo kamawazu)",
        "romaji": "mo kamawazu",
        "meaningUz": "without caring; without",
        "structure": "Verb (casual) + (の) も構わず もかまわず Noun 彼⼥は服が汚れるのもかまわず、公園で⽝と遊んでいる。 かのじょはふくがよごれるのもかまらず、こうえんでいぬとあそんでいる。 She played in the park with her dog without worrying about her clothes getting dirty.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: も構わず【もかまわず】 (mo kamawazu). Meaning: without caring; without",
                "romaji": "worrying about~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "彼⼥は服が汚れるのもかまわず、公園で⽝と遊んでいる。",
                "romaji": "かのじょはふくがよごれるのもかまらず、こうえんでいぬとあそんでいる。",
                "uz": "She played in the park with her dog without worrying about her clothes getting dirty."
            }
        ]
    },
    {
        "id": "n2_pdf_65_mo_touzen_da",
        "level": "N2",
        "title": "〜も当然だ 【もとうぜんだ】 (mo touzen da)",
        "romaji": "mo touzen da",
        "meaningUz": "it’s only natural; no",
        "structure": "Verb (casual) + の も当然だ Verb (て form) 彼⼥は美⼈で優しい⼈だから、みんなが好きになるのも当然だ。 かのじょはびじんでやさしいひとだから、みんながすきになるのもとうぜんだ。 She is beautiful and kind, so it's only natural that everyone likes her.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: も当然だ 【もとうぜんだ】(mo touzen da). Meaning: it’s only natural; no",
                "romaji": "wonder; might as well~.",
                "uz": "This is used either as:"
            },
            {
                "ja": "ても当然だ (temo touzen da).",
                "romaji": "Also review lesson for て当然だ (te touzen da).",
                "uz": "Example Sentences"
            }
        ]
    },
    {
        "id": "n2_pdf_66_mono_da",
        "level": "N2",
        "title": "〜ものだ (mono da)",
        "romaji": "mono da",
        "meaningUz": "normally; in general; should~; must~",
        "structure": "JLPT N2 ぶんぽう",
        "examples": [
            {
                "ja": "彼はものだ、成功を収めた。",
                "romaji": "Kare wa mono da, seikou wo osameta.",
                "uz": "U oxir-oqibat muvaffaqiyatga erishdi."
            }
        ]
    },
    {
        "id": "n2_pdf_67_mono_dakara",
        "level": "N2",
        "title": "〜ものだから (mono dakara)",
        "romaji": "mono dakara",
        "meaningUz": "so; therefore; the reason for something",
        "structure": "Verb (casual) ものだから ものですから もんだから (spoken) Noun + な な-Adjective + な い-Adjective ⽬覚まし時計が壊れたものだから、遅刻してしまった。 めざましどけいがこわれたものだから、ちこくしてしまった。 My alarm clock broke, so I was late.",
        "examples": [
            {
                "ja": "⽬覚まし時計が壊れたものだから、遅刻してしまった。",
                "romaji": "めざましどけいがこわれたものだから、ちこくしてしまった。",
                "uz": "My alarm clock broke, so I was late."
            },
            {
                "ja": "すみません、⾵邪を引いてしまったものですから、今⽇は⽋席です。",
                "romaji": "すみません、かぜをひいてしまったものですから、きょうはけっせきです。",
                "uz": "Sorry, I caught a cold and so I will be absent today."
            }
        ]
    },
    {
        "id": "n2_pdf_68_mono_dewa_nai",
        "level": "N2",
        "title": "〜ものではない (mono dewa nai)",
        "romaji": "mono dewa nai",
        "meaningUz": "can either mean one shouldn’t do",
        "structure": "Verb (casual, past) ものではない 何が起こるかわかったものではない。 なにがおこるかわかったものではない。 There is no knowing what will happen.",
        "examples": [
            {
                "ja": "何が起こるかわかったものではない。",
                "romaji": "なにがおこるかわかったものではない。",
                "uz": "There is no knowing what will happen."
            },
            {
                "ja": "⽬上の⼈にそんな⾔い⽅をするものではない。",
                "romaji": "めうえのひとにそんないいかたをするものではない。",
                "uz": "You should't talk that way to your superiors/seniors."
            }
        ]
    },
    {
        "id": "n2_pdf_69_mono_ga_aru",
        "level": "N2",
        "title": "〜ものがある (mono ga aru)",
        "romaji": "mono ga aru",
        "meaningUz": "there is such a thing; to be the case that ;",
        "structure": "Verb (dictionary form) ものがある な-adjective い-adjective 彼の話にはどこか納得できないものがある。 かれのはなしにはどこかなっとくできないものがある。 There’s something unconvincing about his story.",
        "examples": [
            {
                "ja": "彼の話にはどこか納得できないものがある。",
                "romaji": "かれのはなしにはどこかなっとくできないものがある。",
                "uz": "There’s something unconvincing about his story."
            },
            {
                "ja": "社⻑の⾔葉には、こころに響くものがある。この会社を成⻑させるために、も",
                "romaji": "っと頑張りたい。",
                "uz": "しゃちょうのことばには、こころにひびくものがある。このかいしゃをせいちょうさ"
            }
        ]
    },
    {
        "id": "n2_pdf_70_mono_ka__mon_ka",
        "level": "N2",
        "title": "〜ものか / もんか (mono ka / mon ka)",
        "romaji": "mono ka / mon ka",
        "meaningUz": "as if (something untrue were",
        "structure": "Verb (dictionary form) ものか もんか ものですか もんですか Noun + な な-adjective + な い-adjective あんな所へ誰が⾏くものか。 あんなところへだれがいくものか。 Who would think of going there?",
        "examples": [
            {
                "ja": "あんな所へ誰が⾏くものか。",
                "romaji": "あんなところへだれがいくものか。",
                "uz": "Who would think of going there?"
            },
            {
                "ja": "そんな事知るものか。",
                "romaji": "そんなことしるものか。",
                "uz": "How in the world should I know?"
            }
        ]
    },
    {
        "id": "n2_pdf_71_mono_nara",
        "level": "N2",
        "title": "〜ものなら (mono nara)",
        "romaji": "mono nara",
        "meaningUz": "if I/we could; if [A] is possible, then [B]; if",
        "structure": "Verb (potential form れる) ものなら もんなら (spoken) やれるもんなら、やってみろ。 やれるもんなら、やってみろ。 If you can do it, let's see you try.",
        "examples": [
            {
                "ja": "戻れるものなら 【もどれるものなら】= If I can return, then..",
                "romaji": "休めるものなら 【やすめるものなら】= If I can take a vacation, then..",
                "uz": "Example Sentences"
            },
            {
                "ja": "休めるものなら 【やすめるものなら】= If I can take a vacation, then..",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_72_monono",
        "level": "N2",
        "title": "〜ものの (monono)",
        "romaji": "monono",
        "meaningUz": "but; although; even though~",
        "structure": "Verb (casual) ものの Noun + である な-adjective + な い-adjective 秋であるものの、まだ暑い。 あきであるものの、まだあつい。 Although it's fall, it is still hot.",
        "examples": [
            {
                "ja": "秋であるものの、まだ暑い。",
                "romaji": "あきであるものの、まだあつい。",
                "uz": "Although it's fall, it is still hot."
            },
            {
                "ja": "申し込みはしたものの、試験を受けるかどうか未定です。",
                "romaji": "もうしこみはしたものの、しけんをうけるかどうかみていです。",
                "uz": "Although I applied to take the test, I'm not sure if I'll take it or not."
            }
        ]
    },
    {
        "id": "n2_pdf_73_motto_mo",
        "level": "N2",
        "title": "〜尤も 【もっとも】 (motto mo)",
        "romaji": "motto mo",
        "meaningUz": "but then; although; though~",
        "structure": "もっとも phrase 全員が参加しなければなりません。もっとも病気の場合は別です。 ぜんいんがさんかしなければなりません。もっともびょうきのばあいはべつです。 Everyone must participate, unless you are sick.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 尤も 【もっとも】(motto mo). Meaning: but then; although; though~.",
                "romaji": "Do not confuse this with the adverb 最も (motto mo), which means extremely. This grammar takes on a",
                "uz": "completely different meaning."
            },
            {
                "ja": "Do not confuse this with the adverb 最も (motto mo), which means extremely. This grammar takes on a",
                "romaji": "completely different meaning.",
                "uz": "Example Sentences"
            }
        ]
    },
    {
        "id": "n2_pdf_74_mou_sukoshi_de",
        "level": "N2",
        "title": "〜もう少しで 【もうすこしで】 (mou sukoshi de)",
        "romaji": "mou sukoshi de",
        "meaningUz": "almost; nearly,",
        "structure": "もう少しで Verb (ます stem) +  そうだった/そうになった Verb (dictionary form) +  ところだった\" もう少しであの川でおぼれるところでした. もうすこしであのかわでおぼれるところでした. I almost drowned in that river.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: もう少しで 【もうすこしで】(mou sukoshi de). Meaning: almost; nearly,",
                "romaji": "close to~.",
                "uz": "This is often used in combination with ところだった (tokoro datta)."
            },
            {
                "ja": "もう少しで",
                "romaji": "Verb (ます stem) +",
                "uz": "そうだった/そうになった"
            }
        ]
    },
    {
        "id": "n2_pdf_75_nai_dewa_irarenai",
        "level": "N2",
        "title": "〜ないではいられない (nai dewa irarenai)",
        "romaji": "nai dewa irarenai",
        "meaningUz": "can’t help but feel; can’t",
        "structure": "Verb (ない form) ではいられない 試験の前だから、勉強しないではいられない。 しけんのまえだから、べんきょうしないではいられない。 Because it's before the test, I can't help but to study.",
        "examples": [
            {
                "ja": "試験の前だから、勉強しないではいられない。",
                "romaji": "しけんのまえだから、べんきょうしないではいられない。",
                "uz": "Because it's before the test, I can't help but to study."
            },
            {
                "ja": "態度悪いの店員に、⼀⾔⽂句を⾔わないではいられない。",
                "romaji": "たいどわるいのてんいんに、ひとこともんくをいわないではいられない。",
                "uz": "I can't help but to say something to staff with a bad attitude."
            }
        ]
    },
    {
        "id": "n2_pdf_76_nai_koto_niwanai",
        "level": "N2",
        "title": "〜ないことには〜ない (nai koto niwa~nai)",
        "romaji": "nai koto niwa~nai",
        "meaningUz": "unless you~",
        "structure": "Verb (ない form) ことには + Verb  (ない form) Noun + でない な-adjective + でない い-adjective + いくない 彼が来ないことには、会議を始めることができない。 かれがこないことには、かいぎをはじめることができない。 Unless he comes, we cannot start the meeting.",
        "examples": [
            {
                "ja": "彼が来ないことには、会議を始めることができない。",
                "romaji": "かれがこないことには、かいぎをはじめることができない。",
                "uz": "Unless he comes, we cannot start the meeting."
            },
            {
                "ja": "⼀⼝⾷べてみないことには、美味しいかどうかわかりません。",
                "romaji": "ひとくちたべてみないことには、おいしいかどうかわかりません。",
                "uz": "Unless you try a bite, you won't know if it tastes good or not."
            }
        ]
    },
    {
        "id": "n2_pdf_77_naka_onaka_dewa",
        "level": "N2",
        "title": "〜中を/中では 【なかを/なかでは】 (naka o/naka dewa)",
        "romaji": "naka o/naka dewa",
        "meaningUz": "in; on; in",
        "structure": "Verb (casual form) 中を 中では Noun + の Adjective 私はお店の中をうろうろしていた。 わたしはおみせのなかをうろうろしていた。 I wandered around in the store.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 中を/中では 【なかを/なかでは】(naka o/naka dewa). Meaning: in; on; in",
                "romaji": "the midst of; when; while~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "私はお店の中をうろうろしていた。",
                "romaji": "わたしはおみせのなかをうろうろしていた。",
                "uz": "I wandered around in the store."
            }
        ]
    },
    {
        "id": "n2_pdf_78_naku_wa_nai",
        "level": "N2",
        "title": "〜なくはない (naku wa nai)",
        "romaji": "naku wa nai",
        "meaningUz": "it’s not that; I may (double negative)",
        "structure": "Verb ない くはない くもない Noun + がな な-adjective + じゃな い-adjective + いくな ⾃信がなくはないが、ただちょっと緊張している。 じしんがなくはないが、ただちょっときんちょうしている。 It’s not that I have no confidence, I’m just a little nervous.",
        "examples": [
            {
                "ja": "⾃信がなくはないが、ただちょっと緊張している。",
                "romaji": "じしんがなくはないが、ただちょっときんちょうしている。",
                "uz": "It’s not that I have no confidence, I’m just a little nervous."
            },
            {
                "ja": "息⼦は野菜を⾷べなくはないが、あまり好きではない。",
                "romaji": "むすこはやさいをたべなくはないが、あまりすきではない 。",
                "uz": "It’s not that my son doesn’t eat vegetables, he just doesn’t like them very much."
            }
        ]
    },
    {
        "id": "n2_pdf_79_nani_monai",
        "level": "N2",
        "title": "〜何も〜ない 【なにも〜ない】 (nani mo~nai)",
        "romaji": "nani mo~nai",
        "meaningUz": "nothing; (not) ~ at all;",
        "structure": "なにも Verb/Noun/Adj (ない form) 私達はなにもいらない。 わたしたちはなにもいらない。 We don't need anything.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 何も〜ない 【なにも〜ない】(nani mo~nai). Meaning: nothing; (not) ~ at all;",
                "romaji": "there’s no need to~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "私達はなにもいらない。",
                "romaji": "わたしたちはなにもいらない。",
                "uz": "We don't need anything."
            }
        ]
    },
    {
        "id": "n2_pdf_80_nao",
        "level": "N2",
        "title": "〜なお (nao)",
        "romaji": "nao",
        "meaningUz": "still; yet ; furthermore; in addition~",
        "structure": "なお phrase かなり多くの⼈々が今なおそれを信じている。 かなりおおくのひとびとがいまなおそれをしんじている。 Many people still believe that.",
        "examples": [
            {
                "ja": "かなり多くの⼈々が今なおそれを信じている。",
                "romaji": "かなりおおくのひとびとがいまなおそれをしんじている。",
                "uz": "Many people still believe that."
            },
            {
                "ja": "とても寒く、なお悪いことに、⾬が降り始めた。",
                "romaji": "とてもさむく、なおわるいことに、あめがふりはじめた。",
                "uz": "It was very cold, and what was worse, it began to rain."
            }
        ]
    },
    {
        "id": "n2_pdf_81_neba_naranai",
        "level": "N2",
        "title": "〜ねばならない (neba naranai)",
        "romaji": "neba naranai",
        "meaningUz": "have to do; must; should~",
        "structure": "Verb ない ねばならない ⻭医者に⾏かねばならない。 はいしゃにいかねばならない。 I must go to the dentist.",
        "examples": [
            {
                "ja": "⻭医者に⾏かねばならない。",
                "romaji": "はいしゃにいかねばならない。",
                "uz": "I must go to the dentist."
            },
            {
                "ja": "9時までに戻らねばならない。",
                "romaji": "9じまでにもどらねばならない。",
                "uz": "I'm supposed to be back by nine."
            }
        ]
    },
    {
        "id": "n2_pdf_82_ni_hoka_naranai",
        "level": "N2",
        "title": "〜にほかならない (ni hoka naranai)",
        "romaji": "ni hoka naranai",
        "meaningUz": "nothing but; none other than~",
        "structure": "Noun にほかならない 合格したのは、彼の努⼒の結果にほかならない。 ごうかくしたのは、かれのどりょくのけっかにほかならない。 Him being able to pass is nothing else but the result of his hard effort.",
        "examples": [
            {
                "ja": "合格したのは、彼の努⼒の結果にほかならない。",
                "romaji": "ごうかくしたのは、かれのどりょくのけっかにほかならない。",
                "uz": "Him being able to pass is nothing else but the result of his hard effort."
            },
            {
                "ja": "緊急時に⼀番⼤切なことは、まず落ち着くことにほかならない。",
                "romaji": "きんきゅうときにいちばんたいせつなことは、まずおちつくことにほかならない。",
                "uz": "In an emergency, the most important thing is nothing other than to first calm down."
            }
        ]
    },
    {
        "id": "n2_pdf_83_ni_kagirazu",
        "level": "N2",
        "title": "〜に限らず 【にかぎらず】 (ni kagirazu)",
        "romaji": "ni kagirazu",
        "meaningUz": "not just; not only",
        "structure": "Noun に限らず 最近は、⼥性に限らず男性も化粧をする。 さいきんは、じょせいにかぎらずだんせいもけしょうをする。 Lately, not only women but also men have been wearing makeup.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に限らず 【にかぎらず】(ni kagirazu). Meaning: not just; not only.. but also~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "最近は、⼥性に限らず男性も化粧をする。",
                "romaji": "さいきんは、じょせいにかぎらずだんせいもけしょうをする。",
                "uz": "Lately, not only women but also men have been wearing makeup."
            }
        ]
    },
    {
        "id": "n2_pdf_84_ni_kagiru",
        "level": "N2",
        "title": "〜に限る (ni kagiru)",
        "romaji": "ni kagiru",
        "meaningUz": "is best; nothing is better than~",
        "structure": "Verb (casual, non-past) に限る Noun 寒い⽇は、熱いラーメンに限る。 さむいひは、あついラーメンにかぎる。 On a cold day, nothing beats a hot bowl of ramen.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に限る (ni kagiru). Meaning: is best; nothing is better than~.",
                "romaji": "Is used to express that the speaker believes that something is the best.",
                "uz": "Example Sentences"
            },
            {
                "ja": "寒い⽇は、熱いラーメンに限る。",
                "romaji": "さむいひは、あついラーメンにかぎる。",
                "uz": "On a cold day, nothing beats a hot bowl of ramen."
            }
        ]
    },
    {
        "id": "n2_pdf_85_ni_kagitte",
        "level": "N2",
        "title": "〜に限って 【にかぎって】 (ni kagitte)",
        "romaji": "ni kagitte",
        "meaningUz": "only; in particular~",
        "structure": "Noun に限って うちの娘に限って、⼈をいじめるようなことはしません。 うちのむすめにかぎって、ひとをいじめるようなことはしません。 Our daughter would be the last person to do something like bully another person.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に限って 【にかぎって】(ni kagitte). Meaning: only; in particular~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "うちの娘に限って、⼈をいじめるようなことはしません。",
                "romaji": "うちのむすめにかぎって、ひとをいじめるようなことはしません。",
                "uz": "Our daughter would be the last person to do something like bully another person."
            }
        ]
    },
    {
        "id": "n2_pdf_86_ni_kakawarazu",
        "level": "N2",
        "title": "〜に関わらず 【にかかわらず】 (ni kakawarazu)",
        "romaji": "ni kakawarazu",
        "meaningUz": "in spite of;",
        "structure": "Verb (dictionary form) に関わらず にかかわらず Noun Adjective このバスは距離にかかわらず、どこまで⾏っても200円だ。 このバスはきょりにかかわらず、どこまでいっても200えんだ。 This bus costs 200 yen regardless of the distance you go.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に関わらず 【にかかわらず】 (ni kakawarazu). Meaning: in spite of;",
                "romaji": "regardless of~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "に関わらず",
                "romaji": "にかかわらず",
                "uz": "Noun"
            }
        ]
    },
    {
        "id": "n2_pdf_87_ni_kakawaru",
        "level": "N2",
        "title": "〜に関わる 【にかかわる】 (ni kakawaru)",
        "romaji": "ni kakawaru",
        "meaningUz": "to relate to; to have to do",
        "structure": "Noun 関わる にかかわる にかかわって にかかわり 息⼦はマスコミに関わる仕事をしている。 むすこはマスコミにかかわるしごとをしている。 My son works in a job related to mass communications.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に関わる 【にかかわる】(ni kakawaru). Meaning: to relate to; to have to do",
                "romaji": "with; relating to~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "息⼦はマスコミに関わる仕事をしている。",
                "romaji": "むすこはマスコミにかかわるしごとをしている。",
                "uz": "My son works in a job related to mass communications."
            }
        ]
    },
    {
        "id": "n2_pdf_88_ni_kimatte_iru",
        "level": "N2",
        "title": "〜に決まっている 【にきまっている】 (ni kimatte iru)",
        "romaji": "ni kimatte iru",
        "meaningUz": "certainly; I’m",
        "structure": "Verb (casual) に決まっている Noun な-adjective い-adjective 毎⽇、⼀⽣懸命勉強したから、絶対合格するに決まっている。 まいにち、いっしょうけんめいべんきょうしたから、ぜったいごうかくするにきまっ ている。 I've studied very hard every day so I am certain that I will pass the exam.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に決まっている 【にきまっている】(ni kimatte iru). Meaning: certainly; I’m",
                "romaji": "sure/certain that; it must be the case that~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "に決まっている",
                "romaji": "Noun",
                "uz": "な-adjective"
            }
        ]
    },
    {
        "id": "n2_pdf_89_ni_koshita_koto_wa_nai",
        "level": "N2",
        "title": "〜に越したことはない 【にこしたことはない】 (ni koshita koto wa nai)",
        "romaji": "ni koshita koto wa nai",
        "meaningUz": "it’s best that, there’s nothing better than~",
        "structure": "Verb (casual, non-past) に越したことはない Noun な-adjective い-adjective そうするに越したことはない。 そうするにこしたことはない。 That is the best thing to do.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に越したことはない 【にこしたことはない】(ni koshita koto wa nai).",
                "romaji": "Meaning: it’s best that, there’s nothing better than~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "に越したことはない",
                "romaji": "Noun",
                "uz": "な-adjective"
            }
        ]
    },
    {
        "id": "n2_pdf_90_ni_kotaete",
        "level": "N2",
        "title": "〜に応えて 【にこたえて】 (ni kotaete)",
        "romaji": "ni kotaete",
        "meaningUz": "in response to~",
        "structure": "Noun に応えて に応える に応え ⼤学は、学⽣たちの要望にこたえて、図書館の利⽤時間を延ばした。 だいがくは、がくせいたちのようぼうにこたえて、としょかんのりようじかんをのば した。 The university extended the library hours in response to student requests.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に応えて 【にこたえて】(ni kotaete). Meaning: in response to~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "⼤学は、学⽣たちの要望にこたえて、図書館の利⽤時間を延ばした。",
                "romaji": "だいがくは、がくせいたちのようぼうにこたえて、としょかんのりようじかんをのば",
                "uz": "した。"
            }
        ]
    },
    {
        "id": "n2_pdf_91_ni_kuwaete",
        "level": "N2",
        "title": "〜に加えて 【にくわえて】 (ni kuwaete)",
        "romaji": "ni kuwaete",
        "meaningUz": "in addition~",
        "structure": "Noun に加えて のどの痛みに加えて、熱も出てきたので学校を休むしかない。 のどのいたみにくわえて、ねつもでてきたのでがっこうをやすむしかない。 In addition to throat pain, I've started getting a fever and have no choice but to miss school.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に加えて 【にくわえて】(ni kuwaete). Meaning: in addition~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "のどの痛みに加えて、熱も出てきたので学校を休むしかない。",
                "romaji": "のどのいたみにくわえて、ねつもでてきたのでがっこうをやすむしかない。",
                "uz": "In addition to throat pain, I've started getting a fever and have no choice but to miss"
            }
        ]
    },
    {
        "id": "n2_pdf_92_ni_motozuite",
        "level": "N2",
        "title": "〜に基づいて 【にもとづいて】 (ni motozuite)",
        "romaji": "ni motozuite",
        "meaningUz": "based on; on the basis",
        "structure": "Noun に基づいて に基づき この⼩説は実際にあったことに基づいて書かれたそうです。 このしょうせつはじっさいにあったことにもとづいてかかれたそうです。 This novel is apparently written based on things that actually happened.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に基づいて 【にもとづいて】(ni motozuite). Meaning: based on; on the basis",
                "romaji": "of~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "この⼩説は実際にあったことに基づいて書かれたそうです。",
                "romaji": "このしょうせつはじっさいにあったことにもとづいてかかれたそうです。",
                "uz": "This novel is apparently written based on things that actually happened."
            }
        ]
    },
    {
        "id": "n2_pdf_93_ni_oujite",
        "level": "N2",
        "title": "〜に応じて 【におうじて】 (ni oujite)",
        "romaji": "ni oujite",
        "meaningUz": "depending on; in accordance",
        "structure": "Noun に応じて に応じた この学校は⽣徒の⽇本語のレベルに応じて、クラスを分けます。 このがっこうはせいとのにほんごのレベルにおうじて、クラスをわけます。 At this school students are divided up based on their Japanese ability level.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に応じて 【におうじて】(ni oujite). Meaning: depending on; in accordance",
                "romaji": "with~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "この学校は⽣徒の⽇本語のレベルに応じて、クラスを分けます。",
                "romaji": "このがっこうはせいとのにほんごのレベルにおうじて、クラスをわけます。",
                "uz": "At this school students are divided up based on their Japanese ability level."
            }
        ]
    },
    {
        "id": "n2_pdf_94_ni_saishite",
        "level": "N2",
        "title": "〜に際して 【にさいして】 (ni saishite)",
        "romaji": "ni saishite",
        "meaningUz": "on the occasion of; at the",
        "structure": "Verb (dictionary form) に際して（は） Noun ⾞を買うに際しては、保険に⼊らなければならない。 くるまをかうにさいしては、ほけんにはいらなければならない。 When you buy a new car, you must buy insurance.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に際して 【にさいして】(ni saishite). Meaning: on the occasion of; at the",
                "romaji": "time of~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "⾞を買うに際しては、保険に⼊らなければならない。",
                "romaji": "くるまをかうにさいしては、ほけんにはいらなければならない。",
                "uz": "When you buy a new car, you must buy insurance."
            }
        ]
    },
    {
        "id": "n2_pdf_95_ni_sakidachi",
        "level": "N2",
        "title": "〜に先⽴ち 【にさきだち】 (ni sakidachi)",
        "romaji": "ni sakidachi",
        "meaningUz": "before; prior to~",
        "structure": "Verb (dictionary form) に先⽴ち に先⽴って に先⽴つ Noun 会議に先⽴って、資料を集めておかなければならない。 かいぎにさきだって、しりょうをあつめておかなければならない Before the meeting, we must gather the resources.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に先⽴ち 【にさきだち】(ni sakidachi). Meaning: before; prior to~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "に先⽴って",
                "romaji": "に先⽴つ",
                "uz": "Noun"
            }
        ]
    },
    {
        "id": "n2_pdf_96_ni_shironi_shiro",
        "level": "N2",
        "title": "〜にしろ〜にしろ (ni shiro~ni shiro)",
        "romaji": "ni shiro~ni shiro",
        "meaningUz": "whether… or~",
        "structure": "Verb  (dict. form) にしろ にせよ Verb  ない form にしろ にせよ Noun Noun な-adj な-adj い-adj い-adj 明⽇のパーティーに⾏くにしろ⾏かないにしろ、連絡してくださいね。 あしたのパーティーにいくにしろいかないにしろ、れんらくしてくださいね。 Whether you go to the party tomorrow or not, please contact me.",
        "examples": [
            {
                "ja": "明⽇のパーティーに⾏くにしろ⾏かないにしろ、連絡してくださいね。",
                "romaji": "あしたのパーティーにいくにしろいかないにしろ、れんらくしてくださいね。",
                "uz": "Whether you go to the party tomorrow or not, please contact me."
            },
            {
                "ja": "就職するにしろ進学するにしろ、⾃分でよく考えてください。",
                "romaji": "しゅうしょくするにしろしんがくするにしろ、じぶんでよくかんがえてください。",
                "uz": "Think carefully by yourself whether you’ll start working or pursue higher education."
            }
        ]
    },
    {
        "id": "n2_pdf_97_ni_shitemoni_shitemo",
        "level": "N2",
        "title": "〜にしても〜にしても (ni shitemo~ni shitemo)",
        "romaji": "ni shitemo~ni shitemo",
        "meaningUz": "regardless of",
        "structure": "Verb (dict. form) にしても にしろ Verb (dict. form) にしても にしろ Noun Noun な-adj な-adj い-adj い-adj ⾏くにしても⾏かないにしても、早く決めてください。 いくにしてもいかないにしても、はやくきめてください。 Hurry up and decide whether you will go or not.",
        "examples": [
            {
                "ja": "⾏くにしても⾏かないにしても、早く決めてください。",
                "romaji": "いくにしてもいかないにしても、はやくきめてください。",
                "uz": "Hurry up and decide whether you will go or not."
            },
            {
                "ja": "⾼いにしろ安いにしろ、この教科書は買わないといけません。",
                "romaji": "たかいにしろやすいにしろ、このきょうかしょはかわないといけません。",
                "uz": "Regardless of cost, I need to buy this textbook."
            }
        ]
    },
    {
        "id": "n2_pdf_98_ni_sotte",
        "level": "N2",
        "title": "〜に沿って 【にそって】 (ni sotte)",
        "romaji": "ni sotte",
        "meaningUz": "along with; in accordance with~",
        "structure": "Noun に沿って に沿い に沿う に沿った この坂道に沿って⾃転⾞で⾏けば、1時間半ぐらいで頂上に着きます。 このさかみちにそってじてんしゃでいけば、1じかんはんぐらいでちょうじょうにつき ます。 If you go along this mountain road by bicycle, you will reach the peak in about an hour and a half.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に沿って 【にそって】(ni sotte). Meaning: along with; in accordance with~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "この坂道に沿って⾃転⾞で⾏けば、1時間半ぐらいで頂上に着きます。",
                "romaji": "このさかみちにそってじてんしゃでいけば、1じかんはんぐらいでちょうじょうにつき",
                "uz": "ます。"
            }
        ]
    },
    {
        "id": "n2_pdf_99_ni_soui_nai",
        "level": "N2",
        "title": "〜に相違ない 【にそういない】 (ni soui nai)",
        "romaji": "ni soui nai",
        "meaningUz": "without a doubt; certain;",
        "structure": "Verb (casual) に相違ない Noun + （である） な-adjective + （である） い-adjective 冷蔵庫に⼊れていたアイスクリームを⾷べたのは、娘に相違ない。 れいぞうこにいれていたアイスクリームをたべたのは、むすめにそういない。 I'm certain it was my daughter who ate the ice cream I put in the freezer.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に相違ない 【にそういない】(ni soui nai). Meaning: without a doubt; certain;",
                "romaji": "sure.",
                "uz": "Example Sentences"
            },
            {
                "ja": "に相違ない",
                "romaji": "Noun + （である）",
                "uz": "な-adjective + （である）"
            }
        ]
    },
    {
        "id": "n2_pdf_100_ni_suginai",
        "level": "N2",
        "title": "〜に過ぎない 【にすぎない】 (ni suginai)",
        "romaji": "ni suginai",
        "meaningUz": "no more than; just; merely;",
        "structure": "Verb (casual) に過ぎない に過ぎません Noun + (である) な-adjective + (である) い-adjective 単に幸運だったにすぎない。 たんにこううんだったにすぎない。 That was just pure luck.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に過ぎない 【にすぎない】(ni suginai). Meaning: no more than; just; merely;",
                "romaji": "only~.",
                "uz": "This is used to emphasize that something is of a lower quality / quantity / level."
            },
            {
                "ja": "に過ぎない",
                "romaji": "に過ぎません",
                "uz": "Noun + (である)"
            }
        ]
    },
    {
        "id": "n2_pdf_101_ni_tomonatte",
        "level": "N2",
        "title": "〜に伴って 【にともなって】 (ni tomonatte)",
        "romaji": "ni tomonatte",
        "meaningUz": "as; due to; with; along",
        "structure": "Verb (dictionary form) に伴って に伴い に伴う Noun それに伴って私たちの予定は再度変わるかもしれません。 それにともなってわたしたちのよていはさいどかわるかもしれません。 Accordingly, our plans may change again.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に伴って 【にともなって】(ni tomonatte). Meaning: as; due to; with; along",
                "romaji": "with; following; accordingly~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "それに伴って私たちの予定は再度変わるかもしれません。",
                "romaji": "それにともなってわたしたちのよていはさいどかわるかもしれません。",
                "uz": "Accordingly, our plans may change again."
            }
        ]
    },
    {
        "id": "n2_pdf_102_ni_tsuke",
        "level": "N2",
        "title": "〜につけ (ni tsuke)",
        "romaji": "ni tsuke",
        "meaningUz": "every time; whenever; as; whether; in (either",
        "structure": "Verb (dictionary form) につけ につけて Noun その写真を⾒るにつけ、⼩学校のころを思い出す。 そのしゃしんをみるにつけ、しょうがっこうのころをおもいだす。 Whenever I see that photo, I think back to my elementary school days.",
        "examples": [
            {
                "ja": "その写真を⾒るにつけ、⼩学校のころを思い出す。",
                "romaji": "そのしゃしんをみるにつけ、しょうがっこうのころをおもいだす。",
                "uz": "Whenever I see that photo, I think back to my elementary school days."
            },
            {
                "ja": "環境汚染のニュースを聞くにつけて、健康への影響に不安を感じる。",
                "romaji": "かんきょうおせんのニュースをきくにつけて、けんこうへのえいきょうにふあんをか",
                "uz": "んじる。"
            }
        ]
    },
    {
        "id": "n2_pdf_103_ni_tsuki",
        "level": "N2",
        "title": "〜につき (ni tsuki)",
        "romaji": "ni tsuki",
        "meaningUz": "due to; because of; per; each",
        "structure": "Noun + につき 昼休みにつき、事務所は2時まで休みです。 ひるやすみにつき、じむしょはじまでやすみです。 The office will be closed until 2 o’clock due to the lunch break.",
        "examples": [
            {
                "ja": "昼休みにつき、事務所は2時まで休みです。",
                "romaji": "ひるやすみにつき、じむしょはじまでやすみです。",
                "uz": "The office will be closed until 2 o’clock due to the lunch break."
            },
            {
                "ja": "現在、⼯事中につき、このエリアは通⾏ができません。",
                "romaji": "げんざい、こうじちゅうにつき、このエリアはつうこうができません。",
                "uz": "Due to this area being currently under construction, you cannot pass through."
            }
        ]
    },
    {
        "id": "n2_pdf_104_ni_watatte",
        "level": "N2",
        "title": "〜に渡って 【にわたって】 (ni watatte)",
        "romaji": "ni watatte",
        "meaningUz": "throughout; over a period",
        "structure": "Noun にわたって 道路は数マイルにわたってまっすぐ続いていた。 どうろはすうまいるにわたってまっすぐつづいていた。 The road ran straight for several miles.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: に渡って 【にわたって】 (ni watatte). Meaning: throughout; over a period",
                "romaji": "of~.",
                "uz": "This is usually used in hiragana form and can be conjugated and used in various forms, including:"
            },
            {
                "ja": "道路は数マイルにわたってまっすぐ続いていた。",
                "romaji": "どうろはすうまいるにわたってまっすぐつづいていた。",
                "uz": "The road ran straight for several miles."
            }
        ]
    },
    {
        "id": "n2_pdf_105_nimo_kakawarazu",
        "level": "N2",
        "title": "〜にも関わらず 【にもかかわらず】 (nimo kakawarazu)",
        "romaji": "nimo kakawarazu",
        "meaningUz": "despite; in",
        "structure": "Verb (casual) にも関わらず にもかかわらず Noun + （である） な-adjective + （である） い-adjective ⼤学⽣にも関わらず、基本的な漢字が書けない⼈もいる。 だいがくせいにもかかわらず、きほんてきなかんじがかけないひともいる。 Despite being university students, there are some people who cannot write basic kanji.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: にも関わらず 【にもかかわらず】(nimo kakawarazu). Meaning: despite; in",
                "romaji": "spite of; nevertheless; although~.",
                "uz": "This is used in both kanji and hiragana form."
            },
            {
                "ja": "にも関わらず",
                "romaji": "にもかかわらず",
                "uz": "Noun + （である）"
            }
        ]
    },
    {
        "id": "n2_pdf_106_nite",
        "level": "N2",
        "title": "〜にて (nite)",
        "romaji": "nite",
        "meaningUz": "in, at, with, by (formal particle)",
        "structure": "Noun にて 今回のイベントは駅前にて⾏います。 こんかいのイベントはえきまえにておこないます。 This event will be held in front of the station.",
        "examples": [
            {
                "ja": "今回のイベントは駅前にて⾏います。",
                "romaji": "こんかいのイベントはえきまえにておこないます。",
                "uz": "This event will be held in front of the station."
            },
            {
                "ja": "質問があれば電話かメールにて連絡ください。",
                "romaji": "しつもんがあればでんわかメールにてれんらくください。",
                "uz": "If there are any questions, please contact us by phone or email."
            }
        ]
    },
    {
        "id": "n2_pdf_107_no_mo_motto_mo_da",
        "level": "N2",
        "title": "〜のももっともだ (no mo motto mo da)",
        "romaji": "no mo motto mo da",
        "meaningUz": "no wonder; …is only natural",
        "structure": "Verb (casual) + のも （は）もっともだ Noun + も 彼が仕事を辞めるのももっともだ。 かれがしごとをやめるのももっともだ。 He has every reason to quit his job.",
        "examples": [
            {
                "ja": "彼が仕事を辞めるのももっともだ。",
                "romaji": "かれがしごとをやめるのももっともだ。",
                "uz": "He has every reason to quit his job."
            },
            {
                "ja": "彼⼥は毎⽇頑張って勉強している。N2に合格したのももっともだ。",
                "romaji": "かのじょはまいにちがんばってべんきょうしている。N2にごうかくしたのももっとも",
                "uz": "だ。"
            }
        ]
    },
    {
        "id": "n2_pdf_108_no_moto_de",
        "level": "N2",
        "title": "〜の下で 【のもとで】 (no moto de)",
        "romaji": "no moto de",
        "meaningUz": "under; with~",
        "structure": "Noun + の 下で 下に 下 もと ⽇本語を勉強するなら英語が話せる先⽣の下で勉強したいです。 にほんごをべんきょうするならえいごがはなせるせんせいのもとでべんきょうしたい です。 If I am going to study Japanese, I want to study under a teacher who can speak English.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: の下で 【のもとで】(no moto de). Meaning: under; with~.",
                "romaji": "The ending で particle may be removed or replaced with a に to become の下に (no moto ni).",
                "uz": "Example Sentences"
            },
            {
                "ja": "The ending で particle may be removed or replaced with a に to become の下に (no moto ni).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_109_no_ue_de_wa",
        "level": "N2",
        "title": "〜の上では 【のうえでは】 (no ue de wa)",
        "romaji": "no ue de wa",
        "meaningUz": "according to; from the",
        "structure": "Noun の上で（は） 上の 規則の上では彼はまだ学⽣だ。 きそくのうえではかれはまだがくせいだ。 According to the rules, he is still a student.",
        "examples": [
            {
                "ja": "Sometimes, the extra particles around 上 (ue) may be removed.",
                "romaji": "Another pattern used is Noun + 上の (ue no).",
                "uz": "Example Sentences"
            },
            {
                "ja": "Another pattern used is Noun + 上の (ue no).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_110_nominarazu",
        "level": "N2",
        "title": "〜のみならず (nominarazu)",
        "romaji": "nominarazu",
        "meaningUz": "not only; besides; as well as~",
        "structure": "Verb (dictionary form) のみならず Noun な-adjective + である い-adjective 彼は英語のみならず、スペイン語も話せる。 かれはえいごのみならず、スペインごもはなせる。 Not only does he speak English, he speaks Spanish as well.",
        "examples": [
            {
                "ja": "彼は英語のみならず、スペイン語も話せる。",
                "romaji": "かれはえいごのみならず、スペインごもはなせる。",
                "uz": "Not only does he speak English, he speaks Spanish as well."
            },
            {
                "ja": "彼のアニメは国内のみならず、海外でも⼈気がある。",
                "romaji": "かれのアニメはこくないのみならず、かいがいでもにんきがある。",
                "uz": "His anime is popular not only in Japan, but internationally as well."
            }
        ]
    },
    {
        "id": "n2_pdf_111_nu",
        "level": "N2",
        "title": "〜ぬ (nu)",
        "romaji": "nu",
        "meaningUz": "negative verb conjugation; traditional version of ない",
        "structure": "Verb ない ぬ 知らぬが仏。 しらぬがほとけ。 Ignorance is bliss.",
        "examples": [
            {
                "ja": "知らぬが仏。",
                "romaji": "しらぬがほとけ。",
                "uz": "Ignorance is bliss."
            },
            {
                "ja": "彼は何にも知らぬ。",
                "romaji": "かれはなにもしらぬ。",
                "uz": "He knows nothing."
            }
        ]
    },
    {
        "id": "n2_pdf_112_nuki_de",
        "level": "N2",
        "title": "〜抜きにして 【ぬきにして】nuki ni shite & 抜きで 【ぬきで】 (nuki de)",
        "romaji": "nuki de",
        "meaningUz": "without; leaving out; cutting out~",
        "structure": "JLPT N2 ぶんぽう",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 抜きにして 【ぬきにして】nuki ni shite & 抜きで 【ぬきで】 (nuki de).",
                "romaji": "Meaning: without; leaving out; cutting out~.",
                "uz": "This generally follows the pattern “without [A], [B]”. A simple example of this is “Without him, we cannot"
            },
            {
                "ja": "社⻑抜きでは会議は始められません。",
                "romaji": "shachou nuki de wa kaigi wa hajimeraremasen",
                "uz": "We cannot start the meeting without the boss."
            }
        ]
    },
    {
        "id": "n2_pdf_113_nuku",
        "level": "N2",
        "title": "〜抜く 【ぬく】 (nuku)",
        "romaji": "nuku",
        "meaningUz": "to do something from beginning to end;",
        "structure": "Verb ます (stem form) 抜く 彼は、何においても頑張り抜く。 かれは、なににおいてもがんばりぬく。 He tries to do his best in everything.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 抜く 【ぬく】(nuku). Meaning: to do something from beginning to end;",
                "romaji": "completely, extremely~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "彼は、何においても頑張り抜く。",
                "romaji": "かれは、なににおいてもがんばりぬく。",
                "uz": "He tries to do his best in everything."
            }
        ]
    },
    {
        "id": "n2_pdf_114_o_megutte",
        "level": "N2",
        "title": "〜をめぐって (o megutte)",
        "romaji": "o megutte",
        "meaningUz": "concerning; in regard to~",
        "structure": "Noun をめぐって をめぐる ⽗の残した⼟地をめぐって、兄弟喧嘩が続いていく。 ちちののこしたとちをめぐって、きょうだいけんかがつづいていく。 Concerning the father's leftover land, the fight among siblings continues.",
        "examples": [
            {
                "ja": "⽗の残した⼟地をめぐって、兄弟喧嘩が続いていく。",
                "romaji": "ちちののこしたとちをめぐって、きょうだいけんかがつづいていく。",
                "uz": "Concerning the father's leftover land, the fight among siblings continues."
            },
            {
                "ja": "昨⽇の会議では、新しい計画をめぐって、様々な意⾒が出された。",
                "romaji": "きのうのかいぎでは、あたらしいけいかくをめぐって、さまざまないけんがだされ",
                "uz": "た。"
            }
        ]
    },
    {
        "id": "n2_pdf_115_o_moto_ni",
        "level": "N2",
        "title": "〜元にして 【をもとに】 (o moto ni)",
        "romaji": "o moto ni",
        "meaningUz": "based on; derived from;",
        "structure": "Noun をもとに をもとにして 試験の結果をもとにしてクラス分けを⾏います。 しけんのけっかをもとにしてクラスわけをおこないます。 We’ll divide the class based on the test results.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 元にして 【をもとに】(o moto ni). Meaning: based on; derived from;",
                "romaji": "building on; beginning with~.",
                "uz": "This is usually written in hiragana form."
            },
            {
                "ja": "試験の結果をもとにしてクラス分けを⾏います。",
                "romaji": "しけんのけっかをもとにしてクラスわけをおこないます。",
                "uz": "We’ll divide the class based on the test results."
            }
        ]
    },
    {
        "id": "n2_pdf_116_o_nozoite",
        "level": "N2",
        "title": "〜を除いて 【をのぞいて】 (o nozoite)",
        "romaji": "o nozoite",
        "meaningUz": "except; with the exception of;",
        "structure": "Noun を除いて(は) を除けば 彼は⽇曜⽇を除いて毎⽇働いている。 かれはにちようびをのぞいてまいにちはたらいている。 He works every day except Sundays.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: を除いて 【をのぞいて】(o nozoite). Meaning: except; with the exception of;",
                "romaji": "excluding~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "彼は⽇曜⽇を除いて毎⽇働いている。",
                "romaji": "かれはにちようびをのぞいてまいにちはたらいている。",
                "uz": "He works every day except Sundays."
            }
        ]
    },
    {
        "id": "n2_pdf_117_o_towazu",
        "level": "N2",
        "title": "〜を問わず 【をとわず】 (o towazu)",
        "romaji": "o towazu",
        "meaningUz": "regardless of; irrespective of; no",
        "structure": "Noun を問わず この公園では季節を問わず美しい花が⾒られます。 このこうえんではきせつをとわずうつくしいはながみられます。 You can see beautiful flowers in this park regardless of the season.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: を問わず 【をとわず】(o towazu). Meaning: regardless of; irrespective of; no",
                "romaji": "matter~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "この公園では季節を問わず美しい花が⾒られます。",
                "romaji": "このこうえんではきせつをとわずうつくしいはながみられます。",
                "uz": "You can see beautiful flowers in this park regardless of the season."
            }
        ]
    },
    {
        "id": "n2_pdf_118_onegau",
        "level": "N2",
        "title": "〜お〜願う 【お〜ねがう】 (o~negau)",
        "romaji": "o~negau",
        "meaningUz": "please do; could you please…; I",
        "structure": "お + Verb ます (stem form) 願います 願えますか お/ご + Noun (action) しばらくお待ち願います。 しばらくおまちねがいます。 Please wait a moment.",
        "examples": [
            {
                "ja": "お + Verb + 願う",
                "romaji": "When used with a verb, it is preceded by the お (o) honorific.",
                "uz": "See examples 1~5."
            },
            {
                "ja": "お/ご + Noun + 願う",
                "romaji": "When used with a noun, it is preceded by either お (o) or ご (go), but is limited to only nouns which",
                "uz": "indicate actions (suru verbs)."
            }
        ]
    },
    {
        "id": "n2_pdf_119_omake_ni",
        "level": "N2",
        "title": "〜お負けに 【おまけに】 (omake ni)",
        "romaji": "omake ni",
        "meaningUz": "to make matters worse; besides;",
        "structure": "Phrase おまけに 寒くておまけに⾵も強かった。 さむくておまけにかぜもつよかった。 It was cold, and to make matters worse, the wind was strong.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: お負けに 【おまけに】(omake ni). Meaning: to make matters worse; besides;",
                "romaji": "what’s more; in addition; on top of that .",
                "uz": "This can be used for both positive and negative situations for further emphasis."
            },
            {
                "ja": "寒くておまけに⾵も強かった。",
                "romaji": "さむくておまけにかぜもつよかった。",
                "uz": "It was cold, and to make matters worse, the wind was strong."
            }
        ]
    },
    {
        "id": "n2_pdf_120_osoraku",
        "level": "N2",
        "title": "〜恐らく 【おそらく】 (osoraku)",
        "romaji": "osoraku",
        "meaningUz": "perhaps; likely; probably; I dare",
        "structure": "おそらく phrase これは恐らく間違いです。 これはおそらくまちがいです。 This is likely a mistake.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 恐らく 【おそらく】(osoraku). Meaning: perhaps; likely; probably; I dare",
                "romaji": "say~.",
                "uz": "Is often used in both the kanji and hiragana forms."
            },
            {
                "ja": "これは恐らく間違いです。",
                "romaji": "これはおそらくまちがいです。",
                "uz": "This is likely a mistake."
            }
        ]
    },
    {
        "id": "n2_pdf_121_osore_ga_aru",
        "level": "N2",
        "title": "〜恐れがある 【おそれがある】 (osore ga aru)",
        "romaji": "osore ga aru",
        "meaningUz": "it is feared that; to be",
        "structure": "Verb (casual) 恐れがある おそれがある Noun + の 梅⾬に⼊ってからほとんど⾬が降っていない。このまま降らないと、⽔不⾜に なる恐れがある。 つゆにはいってからほとんどあめがふっていない。このままふらないと、みずふそく になるおそれがある。 It has barely rained since entering the rainy season. If things continue like this, there is worry of a water shortage.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 恐れがある 【おそれがある】(osore ga aru). Meaning: it is feared that; to be",
                "romaji": "in danger of; to be liable to; possibility of; risk of~.",
                "uz": "This is used when there is a chance of something bad happening."
            },
            {
                "ja": "恐れがある",
                "romaji": "おそれがある",
                "uz": "Noun + の"
            }
        ]
    },
    {
        "id": "n2_pdf_122_oyobi",
        "level": "N2",
        "title": "〜及び 【および】 (oyobi)",
        "romaji": "oyobi",
        "meaningUz": "and; as well as~",
        "structure": "Noun および Noun 鉛筆及び紙を持ってきてください。 えんぴつおよびかみをもってきてください。 Please bring a Pencil and a Paper.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 及び 【および】(oyobi). Meaning: and; as well as~.",
                "romaji": "This is used to list multiple nouns, it is similar in meaning to と (to) and や (ya), but is mostly used in",
                "uz": "more formal settings or for listing information / rules."
            },
            {
                "ja": "鉛筆及び紙を持ってきてください。",
                "romaji": "えんぴつおよびかみをもってきてください。",
                "uz": "Please bring a Pencil and a Paper."
            }
        ]
    },
    {
        "id": "n2_pdf_123_roku_ninai",
        "level": "N2",
        "title": "〜碌に〜無い 【ろくに〜ない】 (roku ni~nai)",
        "romaji": "roku ni~nai",
        "meaningUz": "not well; not enough;",
        "structure": "ろくに Verb (ない form) 昨夜はろくに寝なかった。 きのうはろくにねなかった。 I did not sleep well last night.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 碌に〜無い 【ろくに〜ない】(roku ni~nai). Meaning: not well; not enough;",
                "romaji": "improperly; insufficiently; unsatisfactorily ~.",
                "uz": "This is commonly written in hiragana, but you will need to know the kanji for N1~."
            },
            {
                "ja": "昨夜はろくに寝なかった。",
                "romaji": "きのうはろくにねなかった。",
                "uz": "I did not sleep well last night."
            }
        ]
    },
    {
        "id": "n2_pdf_124_sei_ka",
        "level": "N2",
        "title": "〜せいか (sei ka)",
        "romaji": "sei ka",
        "meaningUz": "perhaps because~",
        "structure": "Verb (casual) せいか Noun + の な-adjective + な/だった い-adjective たくさん仕事をしたせいか、病気になってしまった。 たくさんしごとをしたせいか、びょうきになってしまった。 I got sick perhaps because I worked too much",
        "examples": [
            {
                "ja": "たくさん仕事をしたせいか、病気になってしまった。",
                "romaji": "たくさんしごとをしたせいか、びょうきになってしまった。",
                "uz": "I got sick perhaps because I worked too much"
            },
            {
                "ja": "薬を飲んだせいか頭痛が治った。",
                "romaji": "くすりをのんだせいかずつうがなおった。",
                "uz": "My headache has gone away, likely from the medicine I took."
            }
        ]
    },
    {
        "id": "n2_pdf_125_sekkaku",
        "level": "N2",
        "title": "〜折⾓ 【せっかく】 (sekkaku)",
        "romaji": "sekkaku",
        "meaningUz": "especially; (thank you for) troubling",
        "structure": "せっかく clause (+ conjunction) せっかく勉強したのに合格できなかった。 せっかくべんきょうしたのにごうかくできなかった。 Even though I went through the effort of studying, I couldn't pass (the test).",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 折⾓ 【せっかく】(sekkaku). Meaning: especially; (thank you for) troubling",
                "romaji": "to, going to great pains for~.",
                "uz": "This is mostly written in hiragana form."
            },
            {
                "ja": "せっかく勉強したのに合格できなかった。",
                "romaji": "せっかくべんきょうしたのにごうかくできなかった。",
                "uz": "Even though I went through the effort of studying, I couldn't pass (the test)."
            }
        ]
    },
    {
        "id": "n2_pdf_126_semete",
        "level": "N2",
        "title": "〜せめて (semete)",
        "romaji": "semete",
        "meaningUz": "at least; at most~",
        "structure": "せめて phrase せめてあと⼗分待ってくれませんか。 せめてあとじゅうぷんまってくれませんか。 Can't you wait just ten more minutes?",
        "examples": [
            {
                "ja": "せめてあと⼗分待ってくれませんか。",
                "romaji": "せめてあとじゅうぷんまってくれませんか。",
                "uz": "Can't you wait just ten more minutes?"
            },
            {
                "ja": "⼀⽇にせめて⼆回は⻭を磨くべきだ。",
                "romaji": "いちにちにせめてにかいははをみがくべきだ。",
                "uz": "You should brush your teeth at least twice a day."
            }
        ]
    },
    {
        "id": "n2_pdf_127_shidai",
        "level": "N2",
        "title": "〜次第 【しだい】 (shidai)",
        "romaji": "shidai",
        "meaningUz": "depending on; as soon as~",
        "structure": "Verb ます (stem form) 次第 部屋の準備ができ次第、会議を始めます。 へやのじゅんびができしだい、かいぎをはじめます。 Once the room preparations are complete, we will begin the meeting.",
        "examples": [
            {
                "ja": "This may also be used with a Noun. See lesson for 次第で (shidai de).",
                "romaji": "It can also be used as an adverb with 次第に (shidai ni).",
                "uz": "Example Sentences"
            },
            {
                "ja": "It can also be used as an adverb with 次第に (shidai ni).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_128_shidai_de",
        "level": "N2",
        "title": "〜次第で 【しだいで】 (shidai de)",
        "romaji": "shidai de",
        "meaningUz": "depending on; so~",
        "structure": "Noun 次第で（は） 次第だ 我々が成功できるかどうかは君次第だ。 われわれがせいこうできるかどうかはきみしだいだ。 It is up to you whether we can succeed or not.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 次第で 【しだいで】(shidai de). Meaning: depending on; so~.",
                "romaji": "To use with a Verb, see lesson for 次第 (shidai).",
                "uz": "Example Sentences"
            },
            {
                "ja": "To use with a Verb, see lesson for 次第 (shidai).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_129_shidai_ni",
        "level": "N2",
        "title": "〜次第に 【しだいに】 (shidai ni)",
        "romaji": "shidai ni",
        "meaningUz": "gradually (progress into a state); in",
        "structure": "次第に phrase ⾵は次第におさまった。 かぜはしだいにおさまった。 The wind gradually died down.",
        "examples": [
            {
                "ja": "A popular expression is ⼿当たり次第 【てあたりしだい】meaning: using anything one can lay one’s",
                "romaji": "hands on; haphazardly; on the rebound; at random; indiscriminately.",
                "uz": "Example Sentences"
            },
            {
                "ja": "⾵は次第におさまった。",
                "romaji": "かぜはしだいにおさまった。",
                "uz": "The wind gradually died down."
            }
        ]
    },
    {
        "id": "n2_pdf_130_shikamo",
        "level": "N2",
        "title": "〜しかも (shikamo)",
        "romaji": "shikamo",
        "meaningUz": "moreover; furthermore; and yet; what’s more~",
        "structure": "しかも phrase この教科書の説明はわかりやすくて、しかも詳しい 。 このきょうかしょのせつめいはわかりやすくて、しかもくわしい。 This textbook’s explanations are easy to understand and what’s more, they’re very detailed.",
        "examples": [
            {
                "ja": "この教科書の説明はわかりやすくて、しかも詳しい 。",
                "romaji": "このきょうかしょのせつめいはわかりやすくて、しかもくわしい。",
                "uz": "This textbook’s explanations are easy to understand and what’s more, they’re very"
            },
            {
                "ja": "今⽇はとても暑い。しかも、湿度も⾼いので何もしたくないだ。",
                "romaji": "きょうはとてもあつい。しかも、しつどもたかいのでなにもしたくないだ。",
                "uz": "It's very hot today, and furthermore it's very humid so I don't feel like doing anything."
            }
        ]
    },
    {
        "id": "n2_pdf_131_sono_ue",
        "level": "N2",
        "title": "〜その上 【そのうえ】 (sono ue)",
        "romaji": "sono ue",
        "meaningUz": "besides; in addition; furthermore~",
        "structure": "その上 phrase その上、そのレストランは私たちのホテルからとても近い。 そのうえ、そのレストランはわたしたちのホテルからとてもちかい。 In addition, the restaurant is very near to our hotel.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: その上 【そのうえ】(sono ue). Meaning: besides; in addition; furthermore~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "その上、そのレストランは私たちのホテルからとても近い。",
                "romaji": "そのうえ、そのレストランはわたしたちのホテルからとてもちかい。",
                "uz": "In addition, the restaurant is very near to our hotel."
            }
        ]
    },
    {
        "id": "n2_pdf_132_sore_na_noni",
        "level": "N2",
        "title": "〜それなのに (sore na noni)",
        "romaji": "sore na noni",
        "meaningUz": "and yet; despite this; but even so~",
        "structure": "それなのに phrase 毎⽇残業しているし、休⽇も出勤した。それなのに給料がまだ少ない。 まいにちざんぎょうしているし、きゅうじつもしゅっきんした。それなのにきゅうり ょうがまだすくない。 I work overtime everyday and even work on holidays. Despite that, my salary is still low.",
        "examples": [
            {
                "ja": "毎⽇残業しているし、休⽇も出勤した。それなのに給料がまだ少ない。",
                "romaji": "まいにちざんぎょうしているし、きゅうじつもしゅっきんした。それなのにきゅうり",
                "uz": "ょうがまだすくない。"
            },
            {
                "ja": "この間に買った時計は⾼かった。それなのにすぐに壊れた。",
                "romaji": "このあいだにかったとけいはたかかった。それなのにすぐにこわれた。",
                "uz": "The watch I bought recently was really expensive, but despite that it broke right away."
            }
        ]
    },
    {
        "id": "n2_pdf_133_sore_nara",
        "level": "N2",
        "title": "〜それなら (sore nara)",
        "romaji": "sore nara",
        "meaningUz": "if that’s the case; if so~",
        "structure": "それなら phrase 「朝から、調⼦が悪いです。」 「それなら、早く帰って病院へ⾏ったほうがいいですよ。」 「あさから、ちょうしがわるいです。」  「それなら、はやくかえってびょういんへいったほうがいいですよ。」 \"I've not been feeling well since this morning.\" \"If that's the case, then you should head home early and go to the hospital.\"",
        "examples": [
            {
                "ja": "「朝から、調⼦が悪いです。」",
                "romaji": "「それなら、早く帰って病院へ⾏ったほうがいいですよ。」",
                "uz": "「あさから、ちょうしがわるいです。」"
            },
            {
                "ja": "「それなら、早く帰って病院へ⾏ったほうがいいですよ。」",
                "romaji": "「あさから、ちょうしがわるいです。」",
                "uz": "「それなら、はやくかえってびょういんへいったほうがいいですよ。」"
            }
        ]
    },
    {
        "id": "n2_pdf_134_sore_ni_shitemo",
        "level": "N2",
        "title": "〜それにしても (sore ni shitemo)",
        "romaji": "sore ni shitemo",
        "meaningUz": "nevertheless; at any rate; even so;",
        "structure": "それにしても phrase それにしてもあなたは絵が上⼿ですね。 それにしてもあなたはえがじょうずですね。 At any rate, I think you are great at drawing.",
        "examples": [
            {
                "ja": "それにしてもあなたは絵が上⼿ですね。",
                "romaji": "それにしてもあなたはえがじょうずですね。",
                "uz": "At any rate, I think you are great at drawing."
            },
            {
                "ja": "それにしても私はあなたが優秀だと思います。",
                "romaji": "それにしてもわたしはあなたがゆうしゅうだとおもいます。",
                "uz": "At any rate, I think you are exceptional."
            }
        ]
    },
    {
        "id": "n2_pdf_135_sou_ieba",
        "level": "N2",
        "title": "〜そう⾔えば 【そういえば】 (sou ieba)",
        "romaji": "sou ieba",
        "meaningUz": "come to think of it…; now",
        "structure": "そういえば phrase そういえば、⼦供のころ、両親と⼀緒にここに来たことを覚えている。 そういえば、こどものころ、りょうしんといっしょにここにきたことをおぼえてい る。 Come to think of it, I remember coming here together with my parents during my childhood.",
        "examples": [
            {
                "ja": "そういえば、⼦供のころ、両親と⼀緒にここに来たことを覚えている。",
                "romaji": "そういえば、こどものころ、りょうしんといっしょにここにきたことをおぼえてい",
                "uz": "る。"
            },
            {
                "ja": "いい家ですね。そういえば、お兄さんは建築家さんでしたよね。",
                "romaji": "いいいえですね。そういえば、おにいさんはけんちくかさんでしたよね。",
                "uz": "It’s a very nice house. Come to think of it, isn’t your big brother an architect?"
            }
        ]
    },
    {
        "id": "n2_pdf_136_sou_suru_to",
        "level": "N2",
        "title": "〜そうすると (sou suru to)",
        "romaji": "sou suru to",
        "meaningUz": "having done that; if that is done; if it is",
        "structure": "そうすると phrase まだ出発しないの︖そうすると、約束の時間に間に合わないよ。 まだしゅっぱつしないの︖そうすると、やくそくのじかんにまにあわないよ。 You haven't left yet? You're not going to make it on time now.",
        "examples": [
            {
                "ja": "まだ出発しないの︖そうすると、約束の時間に間に合わないよ。",
                "romaji": "まだしゅっぱつしないの︖そうすると、やくそくのじかんにまにあわないよ。",
                "uz": "You haven't left yet? You're not going to make it on time now."
            },
            {
                "ja": "私は⼤学を早く卒業したいです。そうすると、仕事をやって親に返報できま",
                "romaji": "す。",
                "uz": "わたしはだいがくをはやくそつぎょうしたいです。そうすると、しごとをやっておや"
            }
        ]
    },
    {
        "id": "n2_pdf_137_sue_ni",
        "level": "N2",
        "title": "〜末に 【すえに】 (sue ni)",
        "romaji": "sue ni",
        "meaningUz": "finally; after; following; at the end/",
        "structure": "Verb (た form) 末（に） Noun + の いろいろ迷った末に、留学することにした。 いろいろまよったすえに、りゅうがくすることにした。 After worrying about various things, I decided to study abroad.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 末に 【すえに】(sue ni). Meaning: finally; after; following; at the end/",
                "romaji": "conclusion of~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "いろいろ迷った末に、留学することにした。",
                "romaji": "いろいろまよったすえに、りゅうがくすることにした。",
                "uz": "After worrying about various things, I decided to study abroad."
            }
        ]
    },
    {
        "id": "n2_pdf_138_sukoshi_monai",
        "level": "N2",
        "title": "〜少しも〜ない 【すこしも〜ない】 (sukoshi mo~nai)",
        "romaji": "sukoshi mo~nai",
        "meaningUz": "not one bit;",
        "structure": "少しも Verb (ない form) Noun + ではない な-adjective + ではない い-adjective + いくない こんな暑い天気でピクニックするなんて、少しも楽しくないよ。 こんなあついてんきでピクニックするなんて、すこしもたのしくないよ。 Having a picnic in such hot weather isn't fun at all.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 少しも〜ない 【すこしも〜ない】(sukoshi mo~nai). Meaning: not one bit;",
                "romaji": "not even a little~.",
                "uz": "This must be followed with a negative sentence."
            },
            {
                "ja": "こんな暑い天気でピクニックするなんて、少しも楽しくないよ。",
                "romaji": "こんなあついてんきでピクニックするなんて、すこしもたのしくないよ。",
                "uz": "Having a picnic in such hot weather isn't fun at all."
            }
        ]
    },
    {
        "id": "n2_pdf_139_sukunaku_tomo",
        "level": "N2",
        "title": "〜少なくとも 【すくなくとも】 (sukunaku tomo)",
        "romaji": "sukunaku tomo",
        "meaningUz": "at least~",
        "structure": "少なくとも phrase 彼⼥は少なくとも３０歳だ。 かのじょはすくなくとも３０さいだ。 She is not less than thirty.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 少なくとも 【すくなくとも】(sukunaku tomo). Meaning: at least~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "彼⼥は少なくとも３０歳だ。",
                "romaji": "かのじょはすくなくとも３０さいだ。",
                "uz": "She is not less than thirty."
            }
        ]
    },
    {
        "id": "n2_pdf_140_tadachi_ni",
        "level": "N2",
        "title": "〜直ちに 【ただちに】 (tadachi ni)",
        "romaji": "tadachi ni",
        "meaningUz": "at once; immediately; directly; in",
        "structure": "直ちに phrase 彼らは直ちに彼⼥に⼿術をしなければならないだろう。 かれらはただちにかのじょにしゅじゅつをしなければならないだろう。 They will have to operate on the woman immediately.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 直ちに 【ただちに】(tadachi ni). Meaning: at once; immediately; directly; in",
                "romaji": "person; automatically~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "彼らは直ちに彼⼥に⼿術をしなければならないだろう。",
                "romaji": "かれらはただちにかのじょにしゅじゅつをしなければならないだろう。",
                "uz": "They will have to operate on the woman immediately."
            }
        ]
    },
    {
        "id": "n2_pdf_141_tamae",
        "level": "N2",
        "title": "〜たまえ (tamae)",
        "romaji": "tamae",
        "meaningUz": "do~; order somebody to do something",
        "structure": "Verb ます (stem form) たまえ ⼊りたまえ。 はいりたまえ。 Come in.",
        "examples": [
            {
                "ja": "分からない事があったら何でも聞きたまえ。",
                "romaji": "わからないことがあったらなんでもききたまえ。",
                "uz": "Ask anything if you don't understand."
            },
            {
                "ja": "この⾦は君の好きなように使いたまえ。",
                "romaji": "このかねはきみのすきなようにつかいたまえ。",
                "uz": "Use this money as you like."
            }
        ]
    },
    {
        "id": "n2_pdf_142_te_bakari_wa_irarenai",
        "level": "N2",
        "title": "〜てばかりはいられない (te bakari wa irarenai)",
        "romaji": "te bakari wa irarenai",
        "meaningUz": "can’t keep doing~",
        "structure": "Verb (て form) ばかりは ばかりも いられない どんなに⾟くても、泣いてばかりもいられない。 いつも泣くのはできない No matter how tough it gets, I can't keep crying like this.",
        "examples": [
            {
                "ja": "どんなに⾟くても、泣いてばかりもいられない。",
                "romaji": "いつも泣くのはできない",
                "uz": "No matter how tough it gets, I can't keep crying like this."
            },
            {
                "ja": "いつも泣くのはできない",
                "romaji": "No matter how tough it gets, I can't keep crying like this.",
                "uz": "1."
            }
        ]
    },
    {
        "id": "n2_pdf_143_te_demo",
        "level": "N2",
        "title": "〜てでも (te demo)",
        "romaji": "te demo",
        "meaningUz": "even if I have to; by all means~",
        "structure": "Verb (て form) でも 何としてでも痩せたい。 たんとしてでもやせたい。 I'll do whatever it takes to lose weight.",
        "examples": [
            {
                "ja": "何としてでも痩せたい。",
                "romaji": "たんとしてでもやせたい。",
                "uz": "I'll do whatever it takes to lose weight."
            },
            {
                "ja": "どんな⼿を使ってでも勝ちとってみせる。",
                "romaji": "どんなてをつかってでもかちとってみせる。",
                "uz": "I will win by any means necessary."
            }
        ]
    },
    {
        "id": "n2_pdf_144_te_irai",
        "level": "N2",
        "title": "〜て以来 【ていらい】 (te irai)",
        "romaji": "te irai",
        "meaningUz": "since; henceforth~",
        "structure": "Verb (てform) 以来 Noun ⽇本に来て以来、⺟の料理を⾷べていない。 にほんにきていらい、ははのりょうりをたべていない。 I haven't eaten my mother's cooking since coming to Japan.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: て以来 【ていらい】(te irai). Meaning: since; henceforth~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "⽇本に来て以来、⺟の料理を⾷べていない。",
                "romaji": "にほんにきていらい、ははのりょうりをたべていない。",
                "uz": "I haven't eaten my mother's cooking since coming to Japan."
            }
        ]
    },
    {
        "id": "n2_pdf_145_te_ite_wa",
        "level": "N2",
        "title": "〜ていては (te ite wa)",
        "romaji": "te ite wa",
        "meaningUz": "if one keeps doing~",
        "structure": "Verb (て form) いては そんなに⽢いものばかり⾷べていては、太りますよ。 そんなにあまいものばかりたべていては、ふりますよ。 If you only eat sweets, you will gain weight.",
        "examples": [
            {
                "ja": "そんなに⽢いものばかり⾷べていては、太りますよ。",
                "romaji": "そんなにあまいものばかりたべていては、ふりますよ。",
                "uz": "If you only eat sweets, you will gain weight."
            },
            {
                "ja": "そんな暗いところで本を読んでいては⽬が悪くなってしまうよ。",
                "romaji": "そんなくらいところでほんをよんでいてはめがわるくなってしまうよ。",
                "uz": "If you keep reading books in such a dark place, your eyes will go bad."
            }
        ]
    },
    {
        "id": "n2_pdf_146_te_koso",
        "level": "N2",
        "title": "〜てこそ (te koso)",
        "romaji": "te koso",
        "meaningUz": "now that; since (something happened)",
        "structure": "Verb (て form) こそ 親になってこそ、親の苦労や気持ちがわかるものだ。 おやになってこそ、おやのくろうやきもちがわかるものだ。 Only after you become a parent can you understand the struggles and feelings of raising children.",
        "examples": [
            {
                "ja": "親になってこそ、親の苦労や気持ちがわかるものだ。",
                "romaji": "おやになってこそ、おやのくろうやきもちがわかるものだ。",
                "uz": "Only after you become a parent can you understand the struggles and feelings of raising"
            },
            {
                "ja": "⽣活費を⾃分で稼いでこそ、⾃⽴していると⾔えます。",
                "romaji": "せいかつひをじぶんでかせいでこそ、じりつしているといえます。",
                "uz": "Only after you start earning a living for yourself can you claim to be independent."
            }
        ]
    },
    {
        "id": "n2_pdf_147_te_naranai",
        "level": "N2",
        "title": "〜てならない (te naranai)",
        "romaji": "te naranai",
        "meaningUz": "can’t help but; dying to; extremely~",
        "structure": "Verb (て form) ならない な-adjective + で い-adjective + いくて うちの息⼦が⼤学に合格して、うれしくてならない。 うちのむすこがだいがくにごうかくして、うれしくてならない。 I’m so glad that my son passed the university entrance exam.",
        "examples": [
            {
                "ja": "うちの息⼦が⼤学に合格して、うれしくてならない。",
                "romaji": "うちのむすこがだいがくにごうかくして、うれしくてならない。",
                "uz": "I’m so glad that my son passed the university entrance exam."
            },
            {
                "ja": "外国で⽣活した時、不安でならなかった。",
                "romaji": "がいこくでせいかつしたとき、ふあんでならなかった。",
                "uz": "I was very nervous when I lived abroad."
            }
        ]
    },
    {
        "id": "n2_pdf_148_te_tamaranai",
        "level": "N2",
        "title": "〜てたまらない (te tamaranai)",
        "romaji": "te tamaranai",
        "meaningUz": "can’t help but; dying to; extremely~",
        "structure": "Verb (たくて form) たまらない な-adjective + なで い-adjective + いくて あなたに会いたくてたまらない。 あなたにあいたくてたまらない。 I want to see you so bad...",
        "examples": [
            {
                "ja": "てたまらない (te tamaranai) comes from the Japanese word 堪る (tamaru), which means to bear or",
                "romaji": "endure something (with emphasis).",
                "uz": "たまらない is the negative version of that, meaning will not bear / endure, though it can actually mean"
            },
            {
                "ja": "あなたに会いたくてたまらない。",
                "romaji": "あなたにあいたくてたまらない。",
                "uz": "I want to see you so bad..."
            }
        ]
    },
    {
        "id": "n2_pdf_149_te_touzen_da",
        "level": "N2",
        "title": "〜て当然だ 【てとうぜんだ】 (te touzen da)",
        "romaji": "te touzen da",
        "meaningUz": "natural; as a matter of",
        "structure": "Verb (て form) 当然だ 当たり前だ な-adjective + で い-adjective + いくて 毎⽇遅くまで残業しているから、疲れて当然だ。 まいにちおそくまでざんぎょうしているから、つかれてとうぜんだ。 You're working overtime late everyday, so it's only natural to be tired.",
        "examples": [
            {
                "ja": "This can also be changed with て当たり前だ 【てあたりまえだ】 (te atarimae da).",
                "romaji": "Also review lesson for も当然だ (mo touzen da).",
                "uz": "Example Sentences"
            },
            {
                "ja": "Also review lesson for も当然だ (mo touzen da).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },
    {
        "id": "n2_pdf_150_tewa__dewa",
        "level": "N2",
        "title": "〜ては / では (tewa / dewa)",
        "romaji": "tewa / dewa",
        "meaningUz": "whenever; if; when~; repetitive action",
        "structure": "JLPT N2 ぶんぽう",
        "examples": [
            {
                "ja": "彼はては / では、成功を収めた。",
                "romaji": "Kare wa tewa / dewa, seikou wo osameta.",
                "uz": "U oxir-oqibat muvaffaqiyatga erishdi."
            }
        ]
    },
    {
        "id": "n2_pdf_151_tewa_irarenai",
        "level": "N2",
        "title": "〜てはいられない (tewa irarenai)",
        "romaji": "tewa irarenai",
        "meaningUz": "can’t afford to; unable to~",
        "structure": "Verb (て form) はいられない Noun + で な-adjective + で ぐずぐずしてはいられない。 ぐずぐずしてはいられない。 We have no time to lose.",
        "examples": [
            {
                "ja": "泣かないではいられない。",
                "romaji": "なかないではいられない。",
                "uz": "I can't help crying."
            },
            {
                "ja": "彼の⾔うことを信じないではいられない。",
                "romaji": "かれのいうことをしんじないではいられない。",
                "uz": "I cannot help believing what he says."
            }
        ]
    },
    {
        "id": "n2_pdf_152_tewa_naranai",
        "level": "N2",
        "title": "〜てはならない (tewa naranai)",
        "romaji": "tewa naranai",
        "meaningUz": "must not; cannot; should not~",
        "structure": "Verb (て form) はならない 過去を忘れてはならない。 かこをわすれてはならない。 We must never forget the past.",
        "examples": [
            {
                "ja": "過去を忘れてはならない。",
                "romaji": "かこをわすれてはならない。",
                "uz": "We must never forget the past."
            },
            {
                "ja": "教師はいじめを⾒逃してはならない。",
                "romaji": "きょうしはいじめをみのがしてはならない。",
                "uz": "Teachers must not overlook bullying."
            }
        ]
    },
    {
        "id": "n2_pdf_153_tewatewa",
        "level": "N2",
        "title": "〜ては〜ては (tewa~tewa)",
        "romaji": "tewa~tewa",
        "meaningUz": "repetitive situations/actions",
        "structure": "V ては V て V ては V て V ます V ます 1 2 1 2 2 2 ⽴っては座り、座っては⽴ち、気分が落ち着かない。 たってはすわり、すわってはたち、きぶんがおちつかない。 I keep standing and sitting down again, and can't seem to settle down.",
        "examples": [
            {
                "ja": "⽴っては座り、座っては⽴ち、気分が落ち着かない。",
                "romaji": "たってはすわり、すわってはたち、きぶんがおちつかない。",
                "uz": "I keep standing and sitting down again, and can't seem to settle down."
            },
            {
                "ja": "⾷べては寝て、寝ては⾷べの⽣活は必ず太る。",
                "romaji": "たべてはねて、ねてはたべのせいかつはかならずふとる。",
                "uz": "If you do nothing but sleep and eat, you will definitely gain weight."
            }
        ]
    },
    {
        "id": "n2_pdf_154_to_douji_ni",
        "level": "N2",
        "title": "〜と同時に 【とどうじに】 (to douji ni)",
        "romaji": "to douji ni",
        "meaningUz": "at the same time as; while;",
        "structure": "Verb (casual, non-past) と同時に Noun な-adj + である 彼らは笑うと同時に泣いた。 かれらはわらうとどうじにないた。 They laughed and cried at the same time.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: と同時に 【とどうじに】(to douji ni). Meaning: at the same time as; while;",
                "romaji": "simultaneously~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "彼らは笑うと同時に泣いた。",
                "romaji": "かれらはわらうとどうじにないた。",
                "uz": "They laughed and cried at the same time."
            }
        ]
    },
    {
        "id": "n2_pdf_155_to_itta",
        "level": "N2",
        "title": "〜と⾔った 【といった】 (to itta)",
        "romaji": "to itta",
        "meaningUz": "like; such as~",
        "structure": "Noun といった バスケットボール、サッカーといったスポーツは⼤学⽣に⼈気がある。 バスケットボール、サッカーといったスポーツはだいがくせいににんきがある。 Sports such as basketball and soccer are popular with college students.",
        "examples": [
            {
                "ja": "バスケットボール、サッカーといったスポーツは⼤学⽣に⼈気がある。",
                "romaji": "バスケットボール、サッカーといったスポーツはだいがくせいににんきがある。",
                "uz": "Sports such as basketball and soccer are popular with college students."
            },
            {
                "ja": "とんかつや天ぷらといった揚げ物の料理が好きです。",
                "romaji": "とんかつやてんぷらといったあげものりょうりがすきです。",
                "uz": "I love fried foods like \"tonkatsu\" and \"tempura\"."
            }
        ]
    },
    {
        "id": "n2_pdf_156_to_iu_fuu_ni",
        "level": "N2",
        "title": "〜という⾵に 【というふうに】 (to iu fuu ni)",
        "romaji": "to iu fuu ni",
        "meaningUz": "in such a way that~",
        "structure": "Phrase という⾵に というふうに 彼⼥は信じられないというふうに頭を振った。 かのじょはしんじられないというふうにあたまをふった。 She shook her head in disbelief.",
        "examples": [
            {
                "ja": "When expressing one’s opinion, a common pattern is to use というふうに + 思う (omou).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "彼⼥は信じられないというふうに頭を振った。",
                "romaji": "かのじょはしんじられないというふうにあたまをふった。",
                "uz": "She shook her head in disbelief."
            }
        ]
    },
    {
        "id": "n2_pdf_157_to_iu_koto_wa",
        "level": "N2",
        "title": "〜と⾔うことは 【ということは】 (to iu koto wa)",
        "romaji": "to iu koto wa",
        "meaningUz": "that is to say; so",
        "structure": "Clause 1 ということは clause 2 あなたが会社を辞めるということは本当ですか。 あなたがかいしゃをやめるということはほんとうですか。 Is it true that you are quitting the company?",
        "examples": [
            {
                "ja": "あなたが会社を辞めるということは本当ですか。",
                "romaji": "あなたがかいしゃをやめるということはほんとうですか。",
                "uz": "Is it true that you are quitting the company?"
            },
            {
                "ja": "彼は、まだ来ませんね。ということは、今⽇は⽋席ですね。",
                "romaji": "かれは、まだきませんね。ということは、きょうはけっせきですね。",
                "uz": "He still hasn't come, so he will be marked as absent for today."
            }
        ]
    },
    {
        "id": "n2_pdf_158_to_iu_mono_dewa_nai",
        "level": "N2",
        "title": "〜と⾔うものではない 【というものではない】 (to iu mono dewa nai)",
        "romaji": "to iu mono dewa nai",
        "meaningUz": "there is no guarantee that…; not necessarily~",
        "structure": "Verb (casual form) というものではない というものでもない Noun + だ な-adjective + だ い-adjective + い お⾦があれば幸せだというものでもない。 おかねがあればしあわせだというものでもない。 Just by having no money is no guarantee that you will be happy.",
        "examples": [
            {
                "ja": "お⾦があれば幸せだというものでもない。",
                "romaji": "おかねがあればしあわせだというものでもない。",
                "uz": "Just by having no money is no guarantee that you will be happy."
            },
            {
                "ja": "私の仕事は誰でもできるというものではない︕",
                "romaji": "わたしのしごとはだれでもできるというものではない︕",
                "uz": "My work is not something that just anybody can do!"
            }
        ]
    },
    {
        "id": "n2_pdf_159_to_kangaerareru",
        "level": "N2",
        "title": "〜と考えられる 【とかんがえられる】 (to kangaerareru)",
        "romaji": "to kangaerareru",
        "meaningUz": "one can",
        "structure": "Phrase と考えられる これは今年最⾼の映画だと考えられている。 これはことしさいこうのえいがだとかんがえられている。 This is thought of to be this year's best movie.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: と考えられる 【とかんがえられる】(to kangaerareru). Meaning: one can",
                "romaji": "think that; it is conceivable that; considered~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "と考えられる",
                "romaji": "これは今年最⾼の映画だと考えられている。",
                "uz": "これはことしさいこうのえいがだとかんがえられている。"
            }
        ]
    },
    {
        "id": "n2_pdf_160_toka_de",
        "level": "N2",
        "title": "〜とか（で) (toka de)",
        "romaji": "toka de",
        "meaningUz": "I heard that~",
        "structure": "Verb (casual form) とか（で） Noun + だ な-adjective + だ い-adjective アメリカで育ったとかで。 あめりかでそだったとかで。 I heard they were raised in America.",
        "examples": [
            {
                "ja": "アメリカで育ったとかで。",
                "romaji": "あめりかでそだったとかで。",
                "uz": "I heard they were raised in America."
            },
            {
                "ja": "今度の試験はかなり難しいとかで。",
                "romaji": "こんどのしけんはかなりむずかしいとかで。",
                "uz": "I heard the next test is going to be really hard."
            }
        ]
    },
    {
        "id": "n2_pdf_161_tokku_ni",
        "level": "N2",
        "title": "〜とっくに (tokku ni)",
        "romaji": "tokku ni",
        "meaningUz": "long ago; already; a long time ago",
        "structure": "とっくに Verb 彼はとっくに帰りました。 かれはとっくにかえりました。 He came home a long while ago.",
        "examples": [
            {
                "ja": "彼はとっくに帰りました。",
                "romaji": "かれはとっくにかえりました。",
                "uz": "He came home a long while ago."
            },
            {
                "ja": "もうとっくに学校へ出かけている時間じゃないの。",
                "romaji": "もうとっくにがっこうへでかけているじかんじゃないの。",
                "uz": "It's high time you left for school, isn't it?"
            }
        ]
    },
    {
        "id": "n2_pdf_162_tokoro_datta",
        "level": "N2",
        "title": "〜ところだった (tokoro datta)",
        "romaji": "tokoro datta",
        "meaningUz": "was just about to do something;",
        "structure": "Verb (dictionary form) ところだった 危ないところだった。 あぶないところだった。 That was a close call.",
        "examples": [
            {
                "ja": "危ないところだった。",
                "romaji": "あぶないところだった。",
                "uz": "That was a close call."
            },
            {
                "ja": "ちょうど寝るところだった。",
                "romaji": "ちょうどねるところだった。",
                "uz": "I was just about to head to bed."
            }
        ]
    },
    {
        "id": "n2_pdf_163_tokoro_ni",
        "level": "N2",
        "title": "〜ところに (tokoro ni)",
        "romaji": "tokoro ni",
        "meaningUz": "at the time; just as I was~",
        "structure": "Verb (た / ている / ていた) ところに ところへ ところを Noun + の Adjective 私はちょうど家を出ようと思っているところに、⼩⾬が降り始めた。 わたしはちょうどいえをでようとおもっているところに、こさめがふりはじめた。 I was just about to leave home when a light rain started to fall.",
        "examples": [
            {
                "ja": "私はちょうど家を出ようと思っているところに、⼩⾬が降り始めた。",
                "romaji": "わたしはちょうどいえをでようとおもっているところに、こさめがふりはじめた。",
                "uz": "I was just about to leave home when a light rain started to fall."
            },
            {
                "ja": "駅に着いたところに財布を忘れたことに気づいた。",
                "romaji": "えきについたところにさいふをわすれたことにきづいた。",
                "uz": "When I arrived at the station I realized I forgot my wallet."
            }
        ]
    },
    {
        "id": "n2_pdf_164_tokoro_o_miru_to",
        "level": "N2",
        "title": "〜ところを⾒ると 【ところをみると】 (tokoro o miru to)",
        "romaji": "tokoro o miru to",
        "meaningUz": "judging",
        "structure": "Verb (casual) ところを⾒ると 彼⼥はラーメンを⾷べているところを⾒ると、ダイエットはやめたんだね。 かのじょはラーメンをたべているところをみると、ダイエットはやめたんだね。 Judjing from the fact that she's eating ramen, she must have quit her diet.",
        "examples": [
            {
                "ja": "彼⼥はラーメンを⾷べているところを⾒ると、ダイエットはやめたんだね。",
                "romaji": "かのじょはラーメンをたべているところをみると、ダイエットはやめたんだね。",
                "uz": "Judjing from the fact that she's eating ramen, she must have quit her diet."
            },
            {
                "ja": "顔が⾚くなっているところを⾒ると、私が⾔ったことは本当だ。",
                "romaji": "かおがあかくなっているところをみると、わたしがいったことはほんとうだ。",
                "uz": "Seeing their face turn red means that what I said must have been true."
            }
        ]
    },
    {
        "id": "n2_pdf_165_tomo",
        "level": "N2",
        "title": "〜とも (tomo)",
        "romaji": "tomo",
        "meaningUz": "certainly; even if; no matter; although; without even;",
        "structure": "Verb ないく とも い-adjective + いく phrase え、そうですとも。 え、そうですとも。 Yes, that is most certainly so.",
        "examples": [
            {
                "ja": "see lesson for 少なくとも (sukunaku tomo).",
                "romaji": "It can also be used as a suffix to express both or all.",
                "uz": "Example Sentences"
            }
        ]
    },
    {
        "id": "n2_pdf_166_toshitemo",
        "level": "N2",
        "title": "〜としても (toshitemo)",
        "romaji": "toshitemo",
        "meaningUz": "assuming; even if~",
        "structure": "Verb (casual form) としても Noun + だ な-adjective + だ い-adjective 今回の試験で不合格になったとしても、諦めずに次回も受験するつもりです。 こんかいのしけんでふごうかくになったとしても、あきらめずにじかいもじゅけんす るつもりです。 Even if I were to fail the exam this time, I plan to not give up and take the exam again.",
        "examples": [
            {
                "ja": "今回の試験で不合格になったとしても、諦めずに次回も受験するつもりです。",
                "romaji": "こんかいのしけんでふごうかくになったとしても、あきらめずにじかいもじゅけんす",
                "uz": "るつもりです。"
            },
            {
                "ja": "たとえ買えるとしても，そんな家は買わないだろう。",
                "romaji": "たとえかえるとしても、そんないえはかわないだろう。",
                "uz": "I wouldn't buy such a house even if I could."
            }
        ]
    },
    {
        "id": "n2_pdf_167_tsutsu",
        "level": "N2",
        "title": "〜つつ (tsutsu)",
        "romaji": "tsutsu",
        "meaningUz": "while; even though; despite~",
        "structure": "Verb ます (stem form) つつ (も) 彼は時々⾞を運転しつつ、電話をする。 かれはときどきくるまをうんてんしつつ、でんわをする。 He sometimes talks on the phone while driving.",
        "examples": [
            {
                "ja": "彼は時々⾞を運転しつつ、電話をする。",
                "romaji": "かれはときどきくるまをうんてんしつつ、でんわをする。",
                "uz": "He sometimes talks on the phone while driving."
            },
            {
                "ja": "彼は忙しいと⾔いつつ、⻑電話をしている。",
                "romaji": "かれはいそがしいといいつつ、ながでんわをしている。",
                "uz": "Although he says he is busy, he has been talking on the phone for a long time."
            }
        ]
    },
    {
        "id": "n2_pdf_168_tsutsu_aru",
        "level": "N2",
        "title": "〜つつある (tsutsu aru)",
        "romaji": "tsutsu aru",
        "meaningUz": "to be doing; to be in the process of doing~",
        "structure": "Verb ます (stem form) つつある スマホの登場で、デジタルカメラの⼈気がなくなりつつある。 スマホのとうじょうで、デジタルカメラのにんきがなくなりつつある。 Since the release of the smartphone, digital camera's have been losing popularity.",
        "examples": [
            {
                "ja": "スマホの登場で、デジタルカメラの⼈気がなくなりつつある。",
                "romaji": "スマホのとうじょうで、デジタルカメラのにんきがなくなりつつある。",
                "uz": "Since the release of the smartphone, digital camera's have been losing popularity."
            },
            {
                "ja": "最近はゴルフをしていないので、下⼿になりつつあります。",
                "romaji": "さいきんはゴルフをしていないので、へたになりつつあります。",
                "uz": "Lately I haven't been playing golf, so I am losing my touch."
            }
        ]
    },
    {
        "id": "n2_pdf_169_ue_wa",
        "level": "N2",
        "title": "〜上は 【うえは】 (ue wa)",
        "romaji": "ue wa",
        "meaningUz": "now that; since; as long as~",
        "structure": "Verb (dictionary form) 上は Verb (た form) 約束した上は、どんなことがあっても守ります。 やくそくしたうえは、どんなことがあってもまもります。 Since I’ve made a promise, I will keep it no matter what happens.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 上は 【うえは】(ue wa). Meaning: now that; since; as long as~.",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            },
            {
                "ja": "約束した上は、どんなことがあっても守ります。",
                "romaji": "やくそくしたうえは、どんなことがあってもまもります。",
                "uz": "Since I’ve made a promise, I will keep it no matter what happens."
            }
        ]
    },
    {
        "id": "n2_pdf_170_wa_moto_yori",
        "level": "N2",
        "title": "〜は元より 【はもとより】 (wa moto yori)",
        "romaji": "wa moto yori",
        "meaningUz": "also; let alone; from the",
        "structure": "JLPT N2 ぶんぽう",
        "examples": [
            {
                "ja": "Learn Japanese grammar: は元より 【はもとより】(wa moto yori). Meaning: also; let alone; from the",
                "romaji": "beginning.",
                "uz": "This has 3 main meanings, outlined below:"
            }
        ]
    },
    {
        "id": "n2_pdf_171_wa_tomokaku",
        "level": "N2",
        "title": "〜はともかく (wa tomokaku)",
        "romaji": "wa tomokaku",
        "meaningUz": "anyhow; anyway; regardless; in any",
        "structure": "Noun はともかく（として） ⾏くか⾏かないかはともかく、レストランの予約だけはしておこう。 いくかいかないかはともかく、レストランのよやくだけはしておこう。 Whether or not we are going, let's at least make the restaurant reservation.",
        "examples": [
            {
                "ja": "⾏くか⾏かないかはともかく、レストランの予約だけはしておこう。",
                "romaji": "いくかいかないかはともかく、レストランのよやくだけはしておこう。",
                "uz": "Whether or not we are going, let's at least make the restaurant reservation."
            },
            {
                "ja": "この店の品物は、質はともかく種類は多い。",
                "romaji": "このみせのしなものは、しつはともかくしゅるいはおおい。",
                "uz": "Regardless of the quality of the goods at this store, they have a lot of variety."
            }
        ]
    },
    {
        "id": "n2_pdf_172_wazuka_ni",
        "level": "N2",
        "title": "〜わずかに (wazuka ni)",
        "romaji": "wazuka ni",
        "meaningUz": "slightly; only; barely; narrowly~",
        "structure": "わずかに Phrase 電⾞がわずかに遅れている。 でんしゃがわずかにおくれている。 The train is running slightly late.",
        "examples": [
            {
                "ja": "電⾞がわずかに遅れている。",
                "romaji": "でんしゃがわずかにおくれている。",
                "uz": "The train is running slightly late."
            },
            {
                "ja": "道はここでわずかに右に曲がっている。",
                "romaji": "みちはここでわずかにみぎにまがっている。",
                "uz": "The road bends slightly to the right here."
            }
        ]
    },
    {
        "id": "n2_pdf_173_yagate",
        "level": "N2",
        "title": "〜やがて (yagate)",
        "romaji": "yagate",
        "meaningUz": "before long; soon; almost; eventually~",
        "structure": "やがて phrase やがて真っ暗になった。 やがてまっくらになった。 It soon became completely dark.",
        "examples": [
            {
                "ja": "やがて真っ暗になった。",
                "romaji": "やがてまっくらになった。",
                "uz": "It soon became completely dark."
            },
            {
                "ja": "やがて考えがまとまってきた。",
                "romaji": "やがてかんがえがまとまってきた。",
                "uz": "My ideas finally began to take shape."
            }
        ]
    },
    {
        "id": "n2_pdf_174_yarayara",
        "level": "N2",
        "title": "〜やら〜やら (yara~yara)",
        "romaji": "yara~yara",
        "meaningUz": "such things as A and B; A and B and so",
        "structure": "Verb (dictionary) やら + [B]やら Noun い-adjective ⼤学⽣は宿題やらアルバイトやらで忙しい。 だいがくせいはしゅくだいやらアルバイトやらでいそがしい。 University students are quite busy with things like homework and part time jobs.",
        "examples": [
            {
                "ja": "⼤学⽣は宿題やらアルバイトやらで忙しい。",
                "romaji": "だいがくせいはしゅくだいやらアルバイトやらでいそがしい。",
                "uz": "University students are quite busy with things like homework and part time jobs."
            },
            {
                "ja": "さっきコンビニでおにぎりやらお茶やらを買った。",
                "romaji": "さっきコンビニでおにぎりやらおちゃやらをかった。",
                "uz": "A short while ago I bought some rice balls and tea from the convenience store."
            }
        ]
    },
    {
        "id": "n2_pdf_175_yohodo__yoppodo",
        "level": "N2",
        "title": "〜よほど / よっぽど (yohodo / yoppodo)",
        "romaji": "yohodo / yoppodo",
        "meaningUz": "very; greatly; much; to a",
        "structure": "よほど よっぽど explanation よほど前にあった事です。 よほどまえにあったことです。 It happened a long time ago.",
        "examples": [
            {
                "ja": "よほど前にあった事です。",
                "romaji": "よほどまえにあったことです。",
                "uz": "It happened a long time ago."
            },
            {
                "ja": "そこはここからよほど離れている。",
                "romaji": "そこはここからよほどはなれている。",
                "uz": "That place is quite far from here."
            }
        ]
    },
    {
        "id": "n2_pdf_176_yori",
        "level": "N2",
        "title": "〜より (yori)",
        "romaji": "yori",
        "meaningUz": "from~ (a time, place, or person)",
        "structure": "time, place or person より 今⽇より、毎⽇⽇本語を勉強します。 きょうより、まいにちにほんごをべんきょうします。 From today, I will study Japanese everyday.",
        "examples": [
            {
                "ja": "今⽇より、毎⽇⽇本語を勉強します。",
                "romaji": "きょうより、まいにちにほんごをべんきょうします。",
                "uz": "From today, I will study Japanese everyday."
            },
            {
                "ja": "昨⽇、⼭⽥さんよりお電話を頂きました。",
                "romaji": "きのう、やまださんよりおでんわをいただきました。",
                "uz": "I received a call from Mr. Yamada yesterday."
            }
        ]
    },
    {
        "id": "n2_pdf_177_yori_hoka_nai",
        "level": "N2",
        "title": "〜よりほかない (yori hoka nai)",
        "romaji": "yori hoka nai",
        "meaningUz": "to have no choice but~",
        "structure": "Verb (dictionary) （より）ほか（は）ない （より）ほか（しかたが）な い この仕事は君に信頼するよりほかはない。 このしごとはきみにしんらいするよりほかはない。 I have no choice but to trust you with this job.",
        "examples": [
            {
                "ja": "よりほか仕⽅がない【よりほかしかたがない】(yori hoka shikata ga nai).",
                "romaji": "To use with a Noun, instead use にほかならない (ni hoka naranai).",
                "uz": "Example Sentences"
            },
            {
                "ja": "この仕事は君に信頼するよりほかはない。",
                "romaji": "このしごとはきみにしんらいするよりほかはない。",
                "uz": "I have no choice but to trust you with this job."
            }
        ]
    },
    {
        "id": "n2_pdf_178_you_dewa",
        "level": "N2",
        "title": "〜ようでは (you dewa)",
        "romaji": "you dewa",
        "meaningUz": "if~ (bad result)",
        "structure": "Verb (casual form) ようでは bad result この問題が分からないようではN２には合格できないよ。 このもんだいがわからないようではN２にはごうかくできないよ。 If you don't understand this problem, then you won't be able to pass the N",
        "examples": [
            {
                "ja": "この問題が分からないようではN２には合格できないよ。",
                "romaji": "このもんだいがわからないようではN２にはごうかくできないよ。",
                "uz": "If you don't understand this problem, then you won't be able to pass the N2."
            },
            {
                "ja": "試験の前の⽇に勉強を始めるようでは、合格はできない。",
                "romaji": "しけんのまえのひにべんきょうをはじめるようでは、ごうかくはできない。",
                "uz": "If you start studying the day before the exam, you will not be able to pass."
            }
        ]
    },
    {
        "id": "n2_pdf_179_you_kamai_ka",
        "level": "N2",
        "title": "〜ようか〜まいか (you ka~mai ka)",
        "romaji": "you ka~mai ka",
        "meaningUz": "whether or not; considering",
        "structure": "V (volational) + か V + まいか Special rules for 2nd verb Ru-verb: dictionary form OR ます + まい U-verb: dictionary form + まい くる: こまい / くるまい する: しまい / すまい / するまい ⾬だ。買い物をしに⾏こうか、⾏くまいか。 あめだ。かいものをしにいこうか、いくまいか。 It's raining.. Should I go to buy groceries or not?",
        "examples": [
            {
                "ja": "⾬だ。買い物をしに⾏こうか、⾏くまいか。",
                "romaji": "あめだ。かいものをしにいこうか、いくまいか。",
                "uz": "It's raining.. Should I go to buy groceries or not?"
            }
        ]
    },
    {
        "id": "n2_pdf_180_you_suru_ni",
        "level": "N2",
        "title": "〜要するに 【ようするに】 (you suru ni)",
        "romaji": "you suru ni",
        "meaningUz": "in short; in a word; to sum",
        "structure": "要するに phrase 要するに時と⾦の問題だ。 ようするにときとかねのもんだいだ。 In short, it is a question of time and money.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: 要するに 【ようするに】(you suru ni). Meaning: in short; in a word; to sum",
                "romaji": "up; to put it simply~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "要するに時と⾦の問題だ。",
                "romaji": "ようするにときとかねのもんだいだ。",
                "uz": "In short, it is a question of time and money."
            }
        ]
    },
    {
        "id": "n2_pdf_181_zaru_o_enai",
        "level": "N2",
        "title": "〜ざるを得ない 【ざるをえない】 (zaru o enai)",
        "romaji": "zaru o enai",
        "meaningUz": "cannot help (doing);",
        "structure": "Verb (ない root) ざるを得ない Exception: しない -> せ 私はそうせざるを得ない。 わたしはそうせざるをえない。 I have no choice but to do that.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: ざるを得ない 【ざるをえない】(zaru o enai). Meaning: cannot help (doing);",
                "romaji": "have no choice but to~.",
                "uz": "Example Sentences"
            },
            {
                "ja": "私はそうせざるを得ない。",
                "romaji": "わたしはそうせざるをえない。",
                "uz": "I have no choice but to do that."
            }
        ]
    },
    {
        "id": "n2_pdf_182_zu_ni_sumu",
        "level": "N2",
        "title": "〜ずに済む 【ずにすむ】 (zu ni sumu)",
        "romaji": "zu ni sumu",
        "meaningUz": "get by without doing~",
        "structure": "Verb ない ずに済む Exception: する => せずに済む 今年は涼しかったので、エアコンを使わずに済みました。 ことしはすずしかったので、エアコンをつかわずにすみました。 This year was cool and I got by without using my air conditioner.",
        "examples": [
            {
                "ja": "Learn Japanese grammar: ずに済む 【ずにすむ】(zu ni sumu). Meaning: get by without doing~.",
                "romaji": "This can also can be used as なくて済む (nakute sumu).",
                "uz": "Example Sentences"
            },
            {
                "ja": "This can also can be used as なくて済む (nakute sumu).",
                "romaji": "Example Sentences",
                "uz": "Meaning"
            }
        ]
    },

    {
        "id": "n1_zaru_wo_eta_nai",
        "level": "N1",
        "title": "〜ざるを得ない (zaru wo eta nai)",
        "romaji": "zaru wo eta nai",
        "meaningUz": "...-shga majbur bo'lmoq / boshqa chora yo'q",
        "structure": "Fe'l (Nai-shakli ildizi) + ざるを得ない",
        "examples": [
            {
                "ja": "台風[たいふう]のため、計画[けいかく]を変更[へんこう]せざるを得[え]ない。",
                "romaji": "Taifu no tame, keikaku wo henkou sezaru wo etanai.",
                "uz": "Tayfun sababli rejani o'zgartirishga majburmiz."
            }
        ]
    },
    {
        "id": "n1_you_ga_nai",
        "level": "N1",
        "title": "〜ようがない (you ga nai)",
        "romaji": "you ga nai",
        "meaningUz": "...-shning umuman iloji yo'q",
        "structure": "Fe'l (Masu-ildizi) + ようがない",
        "examples": [
            {
                "ja": "連絡先[れんらくさき]が分[わ]からなければ、連絡[れんらく]しようがない。",
                "romaji": "Renrakusaki ga wakaranakereba, renroku shiyou ga nai.",
                "uz": "Bog'lanish manzili bo'lmasa, bog'lanishning iloji yo'q."
            }
        ]
    }
];

export const JLPT_KANJI_DATA: JlptKanjiItem[] = [
    // --- N5 KANJI ---
    {
        id: "kanji_n5_sun",
        level: "N5",
        kanji: "日",
        onyomi: "ニチ (nichi), ジツ (jitsu)",
        kunyomi: "ひ (hi), び (bi), か (ka)",
        meaningUz: "Quyosh, Kun (Sun, Day)",
        strokeCount: 4,
        examples: [
            { word: "日本", reading: "にほん (Nihon)", meaning: "Yaponiya" },
            { word: "日曜日", reading: "にちようび (Nichiyoubi)", meaning: "Yakshanba" }
        ]
    },
    {
        id: "kanji_n5_moon",
        level: "N5",
        kanji: "月",
        onyomi: "ゲツ (getsu), ガツ (gatsu)",
        kunyomi: "つき (tsuki)",
        meaningUz: "Oy, Oygoh (Moon, Month)",
        strokeCount: 4,
        examples: [
            { word: "今月", reading: "こんげつ (Kongetsu)", meaning: "Bu oy" },
            { word: "月曜日", reading: "げつようび (Getsuyoubi)", meaning: "Dushanba" }
        ]
    },
    // --- N4 KANJI ---
    {
        id: "kanji_n4_learn",
        level: "N4",
        kanji: "習",
        onyomi: "シュウ (shuu)",
        kunyomi: "なら・う (nara-u)",
        meaningUz: "O'rganmoq, Mashq qilmoq (Learn)",
        strokeCount: 11,
        examples: [
            { word: "練習", reading: "れんしゅう (Renshuu)", meaning: "Mashq / Praktika" }
        ]
    }
];
