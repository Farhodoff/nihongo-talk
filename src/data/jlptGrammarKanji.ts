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

    // ==========================================
    // 🎌 JLPT N4 GRAMMAR (Shin Kanzen Master N4)
    // ==========================================
    {
        id: 'n4_younini_suru',
        level: 'N4',
        title: '〜ようにする (you ni suru)',
        romaji: 'you ni suru',
        meaningUz: '...-shga harakat qilmoq / odat qilmoq',
        structure: 'Fe\'l (Lug\'at shakli) + ようにする',
        examples: [
            { ja: '毎日野菜を食べるようにしています。', romaji: 'Mainichi yasai wo taberu you ni shite imasu.', uz: 'Har kuni sabzavot yeyishga harakat qilyapman.' }
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
            { ja: '明日は雨が降るそうです。', romaji: 'Ashita wa ame ga kuru sou desu.', uz: 'Eshitishimcha, ertaga yomg\'ir yog\'ar emish.' }
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
            { ja: '安ければ買います。', romaji: 'Yasukereba kaimasu.', uz: 'Arzon bo\'lsa sotib olaman.' }
        ]
    },

    // ==========================================
    // 🎌 JLPT N3 GRAMMAR (Shin Kanzen Master N3)
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
    // 🎌 JLPT N2 GRAMMAR (Shin Kanzen Master N2)
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
    // 🎌 JLPT N1 GRAMMAR (Nihongo Sou Matome N1)
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
