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

        {"id": "n4_pdf_1_amarinai", "level": "N4", "title": "あまり～ない (amari~nai)", "romaji": "amari~nai", "meaningUz": "not very, not much", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "今度の一件については、どうもあまり自信はない。", "romaji": "kondo no ikken ni tsuite wa, doumo amari jishin wa nai.", "uz": "I don't feel too sure about this whole affair."}]},
    {"id": "n4_pdf_2_ato_de", "level": "N4", "title": "あとで (ato de)", "romaji": "ato de", "meaningUz": "after, later", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "私は会社を辞めたあとで、彼からの連絡もめっきり減っていた。", "romaji": "watashi wa kaisha o yameta ato de, kare kara no renraku mo mekkiri hette ita.", "uz": "After I quit my job, I hadn't heard from him much."}]},
    {"id": "n4_pdf_3_ba", "level": "N4", "title": "ば (ba)", "romaji": "ba", "meaningUz": "if… then", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "人は死ねば、皮膚しか身につけていない。", "romaji": "hito wa shineba, hifu shika mi ni tsukete inai.", "uz": "When a man dies he has only his skin."}]},
    {"id": "n4_pdf_4_baai_wa", "level": "N4", "title": "場合は (baai wa)", "romaji": "baai wa", "meaningUz": "in the event of", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "頭部の外傷の場合、最初の二十四時間は注意が必要です。", "romaji": "toubu no gaishou no baai, saisho no nijuuyo jikan wa chuui ga hitsuyou desu.", "uz": "Head trauma is delicate in the first twenty-four hours."}]},
    {"id": "n4_pdf_5_dake_de", "level": "N4", "title": "だけで (dake de)", "romaji": "dake de", "meaningUz": "just by", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "安定した収入を得るだけでは満足できなかった。", "romaji": "antei shita shuunyuu o eru dake de wa manzoku dekinakatta.", "uz": "I wasn't satisfied just to earn a good living."}]},
    {"id": "n4_pdf_6_dasu", "level": "N4", "title": "だす (dasu)", "romaji": "dasu", "meaningUz": "to suddenly begin, to suddenly appear", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼の話を聞いて、つい笑い出してしまった。", "romaji": "kare no hanashi o kiite, tsui warai dashite shimatta.", "uz": "I burst into laughing when I heard his story."}]},
    {"id": "n4_pdf_7_demo", "level": "N4", "title": "でも (demo)", "romaji": "demo", "meaningUz": "or something", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "何か暖かいものでも飲む？", "romaji": "nanika atatakai mono demo nomu.", "uz": "How about something hot to drink?"}]},
    {"id": "n4_pdf_8_de_gozaimasu", "level": "N4", "title": "でございます (de gozaimasu)", "romaji": "de gozaimasu", "meaningUz": "to be (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ほんとに冬の間は、ここはおそろしいほど閑静なんでございますのよ。", "romaji": "honto ni fuyu no aida wa, koko wa osoroshii hodo kansei nan de gozaimasu no yo.", "uz": "It's very quiet here in the winter."}]},
    {"id": "n4_pdf_9_garu", "level": "N4", "title": "がる (garu)", "romaji": "garu", "meaningUz": "to show signs of, to feel", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "手に入れるのが難しいものほど、人は欲しがるのだ。", "romaji": "te ni ireru no ga muzukashii mono hodo, hito wa hoshigaru no da.", "uz": "The more unattainable something seems, the more people want it."}]},
    {"id": "n4_pdf_10_ga_suru", "level": "N4", "title": "がする (ga suru)", "romaji": "ga suru", "meaningUz": "smell, hear, taste", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "背後で重厚なドアが閉じる音がした。", "romaji": "haigo de juukou na doa ga tojiru oto ga shita.", "uz": "The heavy door clicked shut behind me."}]},
    {"id": "n4_pdf_11_goro", "level": "N4", "title": "ごろ (goro)", "romaji": "goro", "meaningUz": "around, about", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "オフィスには八時頃行き、電話をかけたり受けたりし始めます。", "romaji": "ofisu ni wa hachiji goro iki, denwa o kaketari uketari shihajimemasu.", "uz": "I usually arrive at my office by eight, and I start getting on the phone."}]},
    {"id": "n4_pdf_12_gozaimasu", "level": "N4", "title": "ございます (gozaimasu)", "romaji": "gozaimasu", "meaningUz": "to be, to exist (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ここに私の出生証明書がございます。", "romaji": "koko ni watashi no shussei shoumeisho ga gozaimasu.", "uz": "Here is the register of my birth."}]},
    {"id": "n4_pdf_13_hajimeru", "level": "N4", "title": "始める (hajimeru)", "romaji": "hajimeru", "meaningUz": "to start, to begin to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "私はとても暑く感じ始めました。", "romaji": "watashi wa totemo atsuku kanji hajimemashita.", "uz": "I started to feel very hot."}]},
    {"id": "n4_pdf_14_hazu_da", "level": "N4", "title": "はずだ (hazu da)", "romaji": "hazu da", "meaningUz": "it must be, it should be", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "容疑者に裁判を拒否することはできないはずです。", "romaji": "yougisha ni saiban o kyohi suru koto wa dekinai hazu desu.", "uz": "A trial surely cannot be denied to one who is accused."}]},
    {"id": "n4_pdf_15_hazu_ga_nai", "level": "N4", "title": "はずがない (hazu ga nai)", "romaji": "hazu ga nai", "meaningUz": "cannot be", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ご主人の悪口を奥さんに聞かせていいはずがないんだ。", "romaji": "goshujin no warukuchi o okusan ni kikasete ii hazu ga nain da.", "uz": "No one has a right to criticize a husband to a wife."}]},
    {"id": "n4_pdf_16_hitsuyou_ga_aru", "level": "N4", "title": "必要がある (hitsuyou ga aru)", "romaji": "hitsuyou ga aru", "meaningUz": "it is necessary to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "もう一度お会いする必要があります。", "romaji": "mou ichido oai suru hitsuyou ga arimasu.", "uz": "We need to meet again."}]},
    {"id": "n4_pdf_17_hoshii", "level": "N4", "title": "欲しい (hoshii)", "romaji": "hoshii", "meaningUz": "to want something, to be in need of", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "イエスという答がほしい。あなたはこの仕事の最適任者だ。", "romaji": "iesu to iu kotae ga hoshii. anata wa kono shigoto no saitekininsha da.", "uz": "I want you to say yes. You're the best person for the job."}]},
    {"id": "n4_pdf_18_irassharu", "level": "N4", "title": "いらっしゃる (irassharu)", "romaji": "irassharu", "meaningUz": "to be, to come, to go (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "またいらっしゃってください。", "romaji": "Reibun desu.", "uz": "mata irasshatte kudasai."}]},
    {"id": "n4_pdf_19_itasu", "level": "N4", "title": "いたす (itasu)", "romaji": "itasu", "meaningUz": "to do (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "お邪魔いたしまして申しわけございませんでした。", "romaji": "ojama itashimashite moushiwake gozaimasen deshita.", "uz": "I'm sorry for interrupting you."}]},
    {"id": "n4_pdf_20_janai_ka", "level": "N4", "title": "じゃないか (janai ka)", "romaji": "janai ka", "meaningUz": "isn’t it", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "隠れるところがないじゃないか！", "romaji": "kakureru tokoro ga nai janai ka.", "uz": "There's nowhere to hide!"}]},
    {"id": "n4_pdf_21_ka_dou_ka", "level": "N4", "title": "かどうか (ka dou ka)", "romaji": "ka dou ka", "meaningUz": "whether or not", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "自分が本当に正しいことをしているのかどうか、確信がもてなくなることがある。", "romaji": "jibun ga hontou ni tadashii koto o shite iru no ka dou ka, kakushin ga motenakunaru koto ga aru.", "uz": "Sometimes I'm not sure whether I'm doing the right thing or not."}]},
    {"id": "n4_pdf_22_kai", "level": "N4", "title": "かい (kai)", "romaji": "kai", "meaningUz": "[turns a sentence into a yes/no question]", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "それで、学校はどうだった？友だちはできたかい？", "romaji": "sore de, gakkou wa dou datta. tomodachi wa dekita kai.", "uz": "So, how did you like school? Have you made any friends?"}]},
    {"id": "n4_pdf_23_kamoshirenai", "level": "N4", "title": "かもしれない (kamoshirenai)", "romaji": "kamoshirenai", "meaningUz": "might, maybe", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "私は本当はあなたに会わなかったほうがよかったのかもしれない。", "romaji": "watashi wa hontou wa anata ni awanakatta hou ga yokatta no kamoshirenai.", "uz": "Maybe I shouldn't have met you, after all."}]},
    {"id": "n4_pdf_24_kana", "level": "N4", "title": "かな (kana)", "romaji": "kana", "meaningUz": "I wonder", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "あなたはわたしといっしょに旅行するのはいやなのかな？", "romaji": "anata wa watashi to issho ni ryokou suru no wa iya na no kana.", "uz": "You wouldn't like me to travel with you, would you?"}]},
    {"id": "n4_pdf_25_kata", "level": "N4", "title": "かた (kata)", "romaji": "kata", "meaningUz": "how to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "その初めて投票したときのやり方は、誇れるようなものではありません。", "romaji": "sono hajimete touhyou shita toki no yarikata wa, hokoreru you na mono de wa arimasen.", "uz": "I'm not proud of how I voted that first time."}]},
    {"id": "n4_pdf_26_kashira", "level": "N4", "title": "かしら (kashira)", "romaji": "kashira", "meaningUz": "I wonder", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "今度の土曜日に電話かけていいかしら？", "romaji": "kondo no doyoubi ni denwa kakete ii kashira.", "uz": "Can I call you on Saturday?"}]},
    {"id": "n4_pdf_27_koto", "level": "N4", "title": "こと (koto)", "romaji": "koto", "meaningUz": "Verb nominalizer", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼は休息に多くの時間をあたえることになれていない。", "romaji": "kare wa kyuusoku ni ooku no jikan o ataeru koto ni narete inai.", "uz": "He's not accustomed to devote many hours to rest."}]},
    {"id": "n4_pdf_28_koto_ga_dekiru", "level": "N4", "title": "ことができる (koto ga dekiru)", "romaji": "koto ga dekiru", "meaningUz": "can, be able to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼女はどうかこうか字は読めたが、書くことができなかった。", "romaji": "kanojo wa douka kouka ji wa yometa ga, kaku koto ga dekinakatta.", "uz": "She barely knew how to read, and did not know how to write."}]},
    {"id": "n4_pdf_29_made_ni", "level": "N4", "title": "までに (made ni)", "romaji": "made ni", "meaningUz": "by, by the time", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "僕はこれまでに何度か彼女に嘘をついた。", "romaji": "boku wa kore made ni nando ka kanojo ni uso o tsuita.", "uz": "I've lied to her before."}]},
    {"id": "n4_pdf_30_mitai", "level": "N4", "title": "みたい (mitai)", "romaji": "mitai", "meaningUz": "like, sort of", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "あまり頭のいい人物じゃなかったけど、かなり儲けているみたいだった。", "romaji": "amari atama no ii jinbutsu janakatta kedo, kanari moukete iru mitai datta.", "uz": "He wasn't that bright, but he seemed to be making a fortune."}]},
    {"id": "n4_pdf_31_mitai_nimitai_na", "level": "N4", "title": "みたいに/みたいな (mitai ni/mitai na)", "romaji": "mitai ni/mitai na", "meaningUz": "like, similar to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼女の心は氷みたいに冷たい。", "romaji": "Her heart is as cold as ice.", "uz": "kanojo no kokoro wa koori mitai ni tsumetai."}]},
    {"id": "n4_pdf_32_nado", "level": "N4", "title": "など (nado)", "romaji": "nado", "meaningUz": "such as, things like", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "これ以上人生から学ぶことなどないと考えていた。", "romaji": "kore ijou jinsei kara manabu koto nado nai to kangaete ita.", "uz": "I thought life could teach me no more."}]},
    {"id": "n4_pdf_33_nagara", "level": "N4", "title": "ながら (nagara)", "romaji": "nagara", "meaningUz": "while, during, as", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "子どものころは誰もがバービー人形で遊びながら育ちますよね。", "romaji": "kodomo no koro wa daremo ga baabii ningyou de asobinagara sodachimasu yo ne.", "uz": "Everyone grew up playing Barbie dolls, right?"}]},
    {"id": "n4_pdf_34_naide", "level": "N4", "title": "ないで (naide)", "romaji": "naide", "meaningUz": "without doing, don’t", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "僕たちは誰にも気付かれないで村を出てきたんだ。", "romaji": "bokutachi wa dare ni mo kidzukarenaide mura o dete kitan da.", "uz": "We left the village without anyone knowing."}]},
    {"id": "n4_pdf_35_nakereba_ikenainakereba_naranai", "level": "N4", "title": "なければいけない/なければならない (nakereba ikenai/nakereba naranai)", "romaji": "nakereba ikenai/nakereba naranai", "meaningUz": "must, have to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "だが私は行かなければならない。私を引きとめようとしても無駄だからね。", "romaji": "da ga watashi wa ikanakereba naranai. watashi o hikitomeyou to shite mo muda dakara ne.", "uz": "But I must go. It is no use your trying to keep me."}]},
    {"id": "n4_pdf_36_nakutewa_ikenainakutewa_naranai", "level": "N4", "title": "なくてはいけない/なくてはならない (nakutewa ikenai/nakutewa naranai)", "romaji": "nakutewa ikenai/nakutewa naranai", "meaningUz": "must, have to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "報告書を書き直さなくてはならない。", "romaji": "houkokusho o kakinaosanakute wa naranai.", "uz": "I have to do my report over."}]},
    {"id": "n4_pdf_37_nakute_mo_ii", "level": "N4", "title": "なくてもいい (nakute mo ii)", "romaji": "nakute mo ii", "meaningUz": "don’t have to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "もうこの問題については考えなくていい。", "romaji": "mou kono mondai ni tsuite wa kangaenakute ii.", "uz": "You don't need to worry about this anymore."}]},
    {"id": "n4_pdf_38_nara", "level": "N4", "title": "なら (nara)", "romaji": "nara", "meaningUz": "if, in case, as for", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼女を殺したいのなら、僕も殺しなさい！", "romaji": "kanojo o koroshitai no nara, boku mo koroshinasai.", "uz": "If you want to kill her, you'll have to kill me too!"}]},
    {"id": "n4_pdf_39_nasai", "level": "N4", "title": "なさい (nasai)", "romaji": "nasai", "meaningUz": "command (order somebody to do something)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "元気を出しなさい。来週には京都に連れていってやろう。", "romaji": "genki o dashinasai. raishuu ni wa kyouto ni tsurete itte yarou.", "uz": "Cheer up, and I'll take you to Kyoto next week."}]},
    {"id": "n4_pdf_40_nasaru", "level": "N4", "title": "なさる (nasaru)", "romaji": "nasaru", "meaningUz": "to do (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "あまり期待なさらないでくださいよ。", "romaji": "amari kitai nasaranaide kudasai yo.", "uz": "Please do not expect too much."}]},
    {"id": "n4_pdf_41_ni_ki_ga_tsuku", "level": "N4", "title": "に気がつく (ni ki ga tsuku)", "romaji": "ni ki ga tsuku", "meaningUz": "to notice, to realize", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "そのとき彼は、彼女が泣いているのに気がついた。", "romaji": "Then he noticed that she was crying.", "uz": "sono toki kare wa, kanojo ga naite iru noni ki ga tsuita."}]},
    {"id": "n4_pdf_42_nikui", "level": "N4", "title": "にくい (nikui)", "romaji": "nikui", "meaningUz": "difficult, hard to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "悪い知らせって言いにくい。", "romaji": "warui shirase tte iinikui.", "uz": "It's not easy to tell people bad news."}]},
    {"id": "n4_pdf_43_ni_mieru", "level": "N4", "title": "に見える (ni mieru)", "romaji": "ni mieru", "meaningUz": "to look, to seem", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "私には、彼は少し腹を立てているように見えた。", "romaji": "watashi ni wa, kare wa sukoshi hara o tatete iru you ni mieta.", "uz": "I could see he was a little upset."}]},
    {"id": "n4_pdf_44_no_naka_de", "level": "N4", "title": "のなかで (no naka de)", "romaji": "no naka de", "meaningUz": "in, among", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼は俺に人生の中で一番の親友だ。", "romaji": "kare wa ore ni jinsei no naka de ichiban no shin'yuu da.", "uz": "He is the closest friend I ever had."}]},
    {"id": "n4_pdf_45_no_you_nino_you_na", "level": "N4", "title": "のように / のような (no you ni/no you na)", "romaji": "no you ni/no you na", "meaningUz": "like, similar to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼の眼は錐のように、冷たく、そして鋭かった。", "romaji": "kare no me wa kiri no you ni, tsumetaku, soshite surudokatta.", "uz": "His glance was like a drill, cold and piercing."}]},
    {"id": "n4_pdf_46_okudasai", "level": "N4", "title": "お～ください (o~kudasai)", "romaji": "o~kudasai", "meaningUz": "please do (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ドアが閉まります。ご注意ください。", "romaji": "doa ga shimarimasu. go chuui kudasai.", "uz": "The door is being closed. Please be careful."}]},
    {"id": "n4_pdf_47_oni_naru", "level": "N4", "title": "お～になる (o~ni naru)", "romaji": "o~ni naru", "meaningUz": "to do (honorific)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "いつ招待状をお出しになりますか？", "romaji": "itsu shoutaijou o odashi ni narimasu ka.", "uz": "When will you send your invitations?"}]},
    {"id": "n4_pdf_48_oki_ni", "level": "N4", "title": "おきに (oki ni)", "romaji": "oki ni", "meaningUz": "repeated at intervals, every", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼は一週間おきに問題を起こす生徒だ。", "romaji": "kare wa isshuukan oki ni mondai o okosu seito da.", "uz": "He's the kind of student who gets in trouble every other week."}]},
    {"id": "n4_pdf_49_owaru", "level": "N4", "title": "終わる (owaru)", "romaji": "owaru", "meaningUz": "to finish, to end", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "話し終わると、記者たちの質問が殺到した。", "romaji": "hanashiowaru to, kishatachi no shitsumon ga sattou shita.", "uz": "After I finished, the reporters asked a million questions."}]},
    {"id": "n4_pdf_50_rashii", "level": "N4", "title": "らしい (rashii)", "romaji": "rashii", "meaningUz": "seems like", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "どうも最近、物覚えがわるくなっているらしい。", "romaji": "doumo saikin, monooboe ga waruku natte iru rashii.", "uz": "I suppose my memory is getting faulty."}]},
    {"id": "n4_pdf_51_sa", "level": "N4", "title": "さ (sa)", "romaji": "sa", "meaningUz": "[nominalizer for adjectives]", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "あなたの強さは、どこから来ているのでしょうか？", "romaji": "anata no tsuyosa wa, doko kara kite iru no deshou ka.", "uz": "Where's your strength coming from, I wonder?"}]},
    {"id": "n4_pdf_52_saseru", "level": "N4", "title": "させる (saseru)", "romaji": "saseru", "meaningUz": "to make/let somebody do something", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "なぜかその人たちは、わたしを不安な気持にさせた。", "romaji": "nazeka sono hitotachi wa, watashi o fuan na kimochi ni saseta.", "uz": "I didn't know why, but those people made me uneasy."}]},
    {"id": "n4_pdf_53_saserareru", "level": "N4", "title": "させられる (saserareru)", "romaji": "saserareru", "meaningUz": "to be made to do something", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "母は家計を支えるために高校をやめさせられた。", "romaji": "haha wa kakei o sasaeru tame ni koukou o yamesaserareta.", "uz": "My mother was pulled out of school to help support her family."}]},
    {"id": "n4_pdf_54_sasuga", "level": "N4", "title": "さすが (sasuga)", "romaji": "sasuga", "meaningUz": "as one would expect", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "さすがにこういうところには住みたくないな…", "romaji": "sasuga ni kou iu tokoro ni wa sumitakunai na.", "uz": "Just as I thought, I wouldn't wanna live in a place like this..."}]},
    {"id": "n4_pdf_55_shishi", "level": "N4", "title": "し～し (shi~shi)", "romaji": "shi~shi", "meaningUz": "and", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼は勉強も運動もできるし背も高いし…", "romaji": "kare wa benkyou mo undou mo dekiru shi se mo takai shi.", "uz": "He's good at studying and sports, and he's tall."}]},
    {"id": "n4_pdf_56_shikanai", "level": "N4", "title": "しか～ない (shika~nai)", "romaji": "shika~nai", "meaningUz": "only, nothing but", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "正しくやれるチャンスは１回しかないんだ。", "romaji": "tadashiku yareru chansu wa ikkai shika nain da.", "uz": "You only have one chance to do things right."}]},
    {"id": "n4_pdf_57_sonna_ni", "level": "N4", "title": "そんなに (sonna ni)", "romaji": "sonna ni", "meaningUz": "so, so much, like that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "わたしのことがそんなに大切？", "romaji": "watashi no koto ga sonna ni taisetsu.", "uz": "Do I mean so much to you?"}]},
    {"id": "n4_pdf_58_sore_demo", "level": "N4", "title": "それでも (sore demo)", "romaji": "sore demo", "meaningUz": "but still, and yet", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼女は食べることに集中しようとした。それでも手は震え、顔は怒りで火照りはじめた。", "romaji": "kanojo wa taberu koto ni shuuchuu shiyou to shita. sore demo te wa furue, kao wa ikari de hoteri", "uz": "She tried to concentrate on her food, but her hands shook and her face was starting to burn with anger."}]},
    {"id": "n4_pdf_59_sou_nisou_na", "level": "N4", "title": "そうに/そうな (sou ni/sou na)", "romaji": "sou ni/sou na", "meaningUz": "seem, look like", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ヒカルだけがかなり快活そうな様子をしていました。", "romaji": "hikaru dake ga kanari kaikatsu sou na yousu o shite imashita.", "uz": "Hikaru alone seemed fairly cheerful."}]},
    {"id": "n4_pdf_60_ta_bakari", "level": "N4", "title": "たばかり (ta bakari)", "romaji": "ta bakari", "meaningUz": "just did, something just happened", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "その話を聞いていたら、うちの娘が生まれたばかりのころを思い出した。", "romaji": "sono hanashi o kiite itara, uchi no musume ga umareta bakari no koro o omoidashita.", "uz": "That story reminded me of when my daughter was just born."}]},
    {"id": "n4_pdf_61_tagaru", "level": "N4", "title": "たがる (tagaru)", "romaji": "tagaru", "meaningUz": "to want to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "三浦さんは私の演説に目を通したがっていた。", "romaji": "miurasan wa watashi no enzetsu ni me o tooshitagatte ita.", "uz": "Miura wanted to see my speech."}]},
    {"id": "n4_pdf_62_tara", "level": "N4", "title": "たら (tara)", "romaji": "tara", "meaningUz": "if, after, when", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "もしあなたがお亡くなりになったら、私も死にます。", "romaji": "moshi anata ga onakunari ni nattara, watashi mo shinimasu.", "uz": "If you were to die, I would die too."}]},
    {"id": "n4_pdf_63_tara_dou", "level": "N4", "title": "たらどう (tara dou)", "romaji": "tara dou", "meaningUz": "why don’t you?", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "それはネットで調べたらどう？", "romaji": "sore wa netto de shirabetara dou.", "uz": "Why don't you look it up on the Internet?"}]},
    {"id": "n4_pdf_64_taritari", "level": "N4", "title": "たり～たり (tari~tari)", "romaji": "tari~tari", "meaningUz": "do such things like", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "友達と一緒にご飯を食べたり話したりするのが楽しかったです。", "romaji": "tomodachi to issho ni gohan o tabetari hanashitari suru no ga tanoshikatta desu.", "uz": "It was fun eating and chatting with my friends."}]},
    {"id": "n4_pdf_65_ta_tokoro", "level": "N4", "title": "たところ (ta tokoro)", "romaji": "ta tokoro", "meaningUz": "just finished doing, was just doing", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "高木が、書斎のガラス戸から庭へ出たところだ。", "romaji": "takagi ga, shosai no garasuto kara niwa e deta tokoro da.", "uz": "Takagi just stepped out from his study window into the garden."}]},
    {"id": "n4_pdf_66_te_ageru", "level": "N4", "title": "てあげる (te ageru)", "romaji": "te ageru", "meaningUz": "to do something for someone", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "タクシーを拾ってあげようか？", "romaji": "takushii o hirotte ageyou ka.", "uz": "Shall I call you a cab?"}]},
    {"id": "n4_pdf_67_te_aru", "level": "N4", "title": "てある (te aru)", "romaji": "te aru", "meaningUz": "something is/has been done", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "何かが骨のなかに差し込んである。", "romaji": "nanika ga hone no naka ni sashikonde aru.", "uz": "There's something inserted inside this bone."}]},
    {"id": "n4_pdf_68_te_hoshii", "level": "N4", "title": "てほしい (te hoshii)", "romaji": "te hoshii", "meaningUz": "I need you to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "向こうで待っていてほしい。あとから私も行く。", "romaji": "mukou de matte ite hoshii. ato kara watashi mo iku.", "uz": "Wait for me there, and I will soon join you."}]},
    {"id": "n4_pdf_69_te_iku", "level": "N4", "title": "ていく (te iku)", "romaji": "te iku", "meaningUz": "to go on, to start", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼はもう一度詫びを述べて、別のドアから出て行った。", "romaji": "kare wa mou ichido wabi o nobete, betsu no doa kara dete itta.", "uz": "He apologized again and left by another door."}]},
    {"id": "n4_pdf_70_teiru_tokoro", "level": "N4", "title": "ているところ (teiru tokoro)", "romaji": "teiru tokoro", "meaningUz": "in the process of doing", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "どうぞお楽に、ちょうどお茶を淹れているところです。", "romaji": "douzo oraku ni, choudo ocha o irete iru tokoro desu.", "uz": "Please make yourself comfortable. I'm just steeping some tea."}]},
    {"id": "n4_pdf_71_te_ita", "level": "N4", "title": "ていた (te ita)", "romaji": "te ita", "meaningUz": "was doing something", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "真純の眼はじっと地面を見つめていた。", "romaji": "masumi no me wa jitto jimen o mitsumete ita.", "uz": "Masumi's eyes remained fixed on the earth."}]},
    {"id": "n4_pdf_72_te_itadakemasen_ka", "level": "N4", "title": "ていただけませんか (te itadakemasen ka)", "romaji": "te itadakemasen ka", "meaningUz": "could you please", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "手紙ではとても説明できません。どうかお帰りになっていただけませんか？", "romaji": "tegami dewa totemo setsumei dekimasen. douka okaeri ni natte itadakemasen ka.", "uz": "I can't explain in a letter. Won't you come back?"}]},
    {"id": "n4_pdf_73_te_kureru", "level": "N4", "title": "てくれる (te kureru)", "romaji": "te kureru", "meaningUz": "to do something for me or somebody's sake", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "僕たちのためにいろいろ助けてくれたことは忘れない。", "romaji": "bokutachi no tame ni iroiro tasukete kureta koto wa wasurenai.", "uz": "We'll never forget all the things you did for us."}]},
    {"id": "n4_pdf_74_te_kuru", "level": "N4", "title": "てくる (te kuru)", "romaji": "te kuru", "meaningUz": "to come to, to become, to continue", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "喉が渇いたから飲み物を買ってくる。", "romaji": "nodo ga kawaita kara nomimono o katte kuru.", "uz": "I'm thirsty so I'll go buy something to drink."}]},
    {"id": "n4_pdf_75_te_miru", "level": "N4", "title": "てみる (te miru)", "romaji": "te miru", "meaningUz": "to try to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ロック・クライミングにも挑戦してみたいです。", "romaji": "rokku kuraimingu ni mo chousen shite mitai desu.", "uz": "I want to try rock climbing too."}]},
    {"id": "n4_pdf_76_temo", "level": "N4", "title": "ても (temo)", "romaji": "temo", "meaningUz": "even if, even though", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "自分が疲れていても、ひもじくても、わたしを看護して、食べさせてくれたわ。", "romaji": "jibun ga tsukarete ite mo, himojikute mo, watashi o kango shite, tabesasete kureta wa.", "uz": "She nursed and fed me, even if she was tired and even if she went hungry."}]},
    {"id": "n4_pdf_77_te_morau", "level": "N4", "title": "てもらう (te morau)", "romaji": "te morau", "meaningUz": "to get somebody to do something", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "あなたに認めてもらいたいんです。わたしとエミリーとの結婚を。", "romaji": "anata ni mitomete moraitain desu. watashi to emirii to no kekkon o.", "uz": "I just wanted your approval to my marrying Emily."}]},
    {"id": "n4_pdf_78_te_oku", "level": "N4", "title": "ておく (te oku)", "romaji": "te oku", "meaningUz": "to do something in advance", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "この恐ろしい秘密は、われわれ二人の胸中深く秘めておこう。", "romaji": "kono osoroshii himitsu wa, wareware futari no kyouchuu bukaku himete okou.", "uz": "Let us bury this terrible secret in the deepest recesses of our hearts."}]},
    {"id": "n4_pdf_79_te_shimau", "level": "N4", "title": "てしまう (te shimau)", "romaji": "te shimau", "meaningUz": "to do something by accident, to finish completely", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "いったい誰がこの致命的な秘密をあの子に知らせてしまったのか、私どもにはわかりませ", "romaji": "ittai dare ga kono chimeiteki na himitsu o ano ko ni shirasete shimatta no ka, watashidomo ni wa", "uz": "We never knew who had revealed this fatal secret to that child."}]},
    {"id": "n4_pdf_80_te_sumimasen", "level": "N4", "title": "てすみません (te sumimasen)", "romaji": "te sumimasen", "meaningUz": "I’m sorry for", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "この件についてだまっていてすみません。", "romaji": "kono ken ni tsuite damatte ite sumimasen.", "uz": "I'm sorry for not mentioning this earlier."}]},
    {"id": "n4_pdf_81_te_yokatta", "level": "N4", "title": "てよかった (te yokatta)", "romaji": "te yokatta", "meaningUz": "I’m glad that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "あなたが早めに席を予約してくれてよかった。", "romaji": "anata ga hayame ni seki o yoyaku shite kurete yokatta.", "uz": "I'm glad you booked our seats early."}]},
    {"id": "n4_pdf_82_to", "level": "N4", "title": "と (to)", "romaji": "to", "meaningUz": "if, when", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "この手紙を朗読すると、詩的に聞こえませんか？", "romaji": "kono tegami o roudoku suru to, shiteki ni kikoemasen ka.", "uz": "When you read this letter out loud, doesn't it sound poetic?"}]},
    {"id": "n4_pdf_83_toto_dochira_ga", "level": "N4", "title": "と～と、どちらが (to~to, dochira ga)", "romaji": "to~to, dochira ga", "meaningUz": "which one", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "日本語と英語とどちらが難しいですか。", "romaji": "nihongo to eigo to dochira ga muzukashii desu ka.", "uz": "Which language is more difficult, Japanese or English?"}]},
    {"id": "n4_pdf_84_to_iu_koto", "level": "N4", "title": "ということ (to iu koto)", "romaji": "to iu koto", "meaningUz": "[changes a sentence or phrase into a Noun]", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼が金持だということが一般に知れ渡る。", "romaji": "kare ga kanemochi da to iu koto ga ippan ni shirewataru.", "uz": "He is known to be rich."}]},
    {"id": "n4_pdf_85_to_itte_mo_ii", "level": "N4", "title": "と言ってもいい (to itte mo ii)", "romaji": "to itte mo ii", "meaningUz": "you could say, you might say", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "そんな事は、ほとんど不可能といってもいいが…", "romaji": "sonna koto wa, hotondo fukanou to itte mo ii ga.", "uz": "I should say it was almost impossible."}]},
    {"id": "n4_pdf_86_to_iwarete_iru", "level": "N4", "title": "と言われている (to iwarete iru)", "romaji": "to iwarete iru", "meaningUz": "it is said that…", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ベーカー通りにあるその古い屋敷には、よく幽霊が出ると言われている。", "romaji": "beekaa doori ni aru sono furui yashiki ni wa, yoku yuurei ga deru to iwarete iru.", "uz": "People say the old house on Baker Street is haunted."}]},
    {"id": "n4_pdf_87_toka__toka", "level": "N4", "title": "とか～とか (toka ~ toka)", "romaji": "toka ~ toka", "meaningUz": "among other things, such as", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "右とか左とかっていうのはよくわからなくなるもんですよ。", "romaji": "migi toka hidari toka tte iu no wa yoku wakaranaku naru mon desu yo.", "uz": "Left and right are always puzzling."}]},
    {"id": "n4_pdf_88_toki", "level": "N4", "title": "とき (toki)", "romaji": "toki", "meaningUz": "when, at the time", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "じつは私もここに初めて入ったときには、同じことを考えましたよ。", "romaji": "jitsu wa watashi mo koko ni hajimete haitta toki ni wa, onaji koto o kangaemashita yo.", "uz": "Actually, the same idea came across me the first time I came here."}]},
    {"id": "n4_pdf_89_to_kiita", "level": "N4", "title": "と聞いた (to kiita)", "romaji": "to kiita", "meaningUz": "I heard that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "たしかあなたはずっと独身だと聞きましたが…", "romaji": "tashika anata wa zutto dokushin da to kikimashita ga.", "uz": "I always understood you were a bachelor."}]},
    {"id": "n4_pdf_90_tokoro", "level": "N4", "title": "ところ (tokoro)", "romaji": "tokoro", "meaningUz": "about to, on the verge of", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "私たちはもうすぐ到着するところです。", "romaji": "watashitachi wa mou sugu touchaku suru tokoro desu.", "uz": "We are just arriving."}]},
    {"id": "n4_pdf_91_to_mieru", "level": "N4", "title": "と見える (to mieru)", "romaji": "to mieru", "meaningUz": "it seems that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "彼女のひどい仕打ちは、よっぽど深い印象をあなたの心にあたえたとみえるわ！", "romaji": "kanojo no hidoi shiuchi wa, yoppodo fukai inshou o anata no kokoro ni ataeta to mieru wa.", "uz": "What a singularly deep impression her injustice seems to have made on your heart!"}]},
    {"id": "n4_pdf_92_to_omou", "level": "N4", "title": "と思う (to omou)", "romaji": "to omou", "meaningUz": "to think", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "オリンピックの後、いろんなことがぐんとよくなったと思う。", "romaji": "orinpikku no ato, iron na koto ga gun to yoku natta to omou.", "uz": "I think things really improved after the Olympics."}]},
    {"id": "n4_pdf_93_tsuzukeru", "level": "N4", "title": "続ける (tsuzukeru)", "romaji": "tsuzukeru", "meaningUz": "to continue", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "銃弾が重いドアノブをなおもたたきつづけている。", "romaji": "juudan ga omoi doanobu o nao mo tatakitsudzukete iru.", "uz": "Bullets continue to slam against the heavy doorknob."}]},
    {"id": "n4_pdf_94_yasui", "level": "N4", "title": "やすい (yasui)", "romaji": "yasui", "meaningUz": "easy to, likely to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "お互いへの信頼があれば、取引はずっと進めやすくなる。", "romaji": "otagai e no shinrai ga areba, torihiki wa zutto susumeyasuku naru.", "uz": "Mutual trust makes it much easier to do business."}]},
    {"id": "n4_pdf_95_yori", "level": "N4", "title": "より (yori)", "romaji": "yori", "meaningUz": "more than", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "とても内気だったけど、芯はわたしよりずっと強い人だった。", "romaji": "totemo uchiki datta kedo, shin wa watashi yori zutto tsuyoi hito datta.", "uz": "He was very shy, but deep down he was stronger than me."}]},
    {"id": "n4_pdf_96_yotei_da", "level": "N4", "title": "予定だ (yotei da)", "romaji": "yotei da", "meaningUz": "plan to, intend to", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "今日、午前八時に飛行機で長野を出発する予定だ。", "romaji": "kyou, gozen hachiji ni hikouki de nagano o shuppatsu suru yotei da.", "uz": "I am to leave Kyoto by plane at eight a.m. today."}]},
    {"id": "n4_pdf_97_you_da", "level": "N4", "title": "ようだ (you da)", "romaji": "you da", "meaningUz": "it seems that, it appears that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "いまの彼は審判を待つ罪人のようだ。", "romaji": "ima no kare wa shinpan o matsu zainin no you da.", "uz": "He looks so like a criminal waiting judgment."}]},
    {"id": "n4_pdf_98_you_niyou_na", "level": "N4", "title": "ように/ような (you ni/you na)", "romaji": "you ni/you na", "meaningUz": "as, like", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "栄介は逃げるようにして町を出ていった。", "romaji": "eisuke wa nigeru you ni shite machi o dete itta.", "uz": "Eisuke left the town as though he was fleeing from it."}]},
    {"id": "n4_pdf_99_you_ni_naru", "level": "N4", "title": "ようになる (you ni naru)", "romaji": "you ni naru", "meaningUz": "to reach the point that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "最近では、不愉快な思いはうまく頭から締め出せるようになった。", "romaji": "saikin de wa, fuyukai na omoi wa umaku atama kara shimedaseru you ni natta.", "uz": "I've become adept at putting unpleasant thoughts out of my mind these days."}]},
    {"id": "n4_pdf_100_you_ni_suru", "level": "N4", "title": "ようにする (you ni suru)", "romaji": "you ni suru", "meaningUz": "to try to, to make sure that", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "このプロジェクト、私に担当させてください。期待に沿うようにします。", "romaji": "kono purojekuto, watashi ni tantou sasete kudasai. kitai ni sou you ni shimasu.", "uz": "Let me take charge of this project. I won't let you down."}]},
    {"id": "n4_pdf_101_you_to_omou", "level": "N4", "title": "ようと思う (you to omou)", "romaji": "you to omou", "meaningUz": "I think I will… (I’m thinking of doing…)", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "明日、ランチのあとで天文学の本を買おうと思う。", "romaji": "ashita, ranchi no ato de tenmongaku no hon o kaou to omou.", "uz": "I'll buy a book on astronomy tomorrow right after lunch."}]},
    {"id": "n4_pdf_102_zenzen", "level": "N4", "title": "全然 (zenzen)", "romaji": "zenzen", "meaningUz": "(not) at all", "structure": "JLPT N4 Grammatika qoidasi", "examples": [{"ja": "ちょっと待ってくれ、ぼくには、そんなことはぜんぜん理解できないよ。", "romaji": "chotto matte kure, boku ni wa, sonna koto wa zenzen rikai dekinai yo.", "uz": "Excuse me, but I’m absolutely unable to comprehend how."}]},

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
        "id": "n2_ni_chigai_nai",
        "level": "N2",
        "title": "〜に違いない (ni chigai nai)",
        "romaji": "ni chigai nai",
        "meaningUz": "shubhasiz ... / aniq ... bo'lsa kerak",
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
        "id": "n2_wo_kikkake_ni",
        "level": "N2",
        "title": "〜をきっかけに (wo kikkake ni)",
        "romaji": "wo kikkake ni",
        "meaningUz": "... munosabati bilan / ... bahona bo'lib",
        "structure": "Ot / Fe'l (Ta-form) + のをきっかけに",
        "examples": [
            {
                "ja": "アニメを見たのをきっかけに日本語[にほんご]を勉強[べんきょう]し始[はじ]めた。",
                "romaji": "Anime wo mita no wo kikkake ni Nihongo wo benkyou shihajimeta.",
                "uz": "Anime ko'rganim bahona bo'lib, yapon tilini o'rganishni boshladim."
            }
        ]
    },
    {
        "id": "n2_ni_mo_kakawarazu",
        "level": "N2",
        "title": "〜にもかかわらず (ni mo kakawarazu)",
        "romaji": "ni mo kakawarazu",
        "meaningUz": "...-ga qaramay / qaramasdan",
        "structure": "Fe'l/Sifat/Ot + にもかかわらず",
        "examples": [
            {
                "ja": "大雨[おおあめ]にもかかわらず、多[おお]くの人[ひと]が集[あつ]まった。",
                "romaji": "Ookame ni mo kakawarazu, ooku no hito ga atsumatta.",
                "uz": "Kattalashgan yomg'irga qaramay, ko'plab odamlar yig'ildi."
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
