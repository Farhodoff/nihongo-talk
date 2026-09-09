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

export type { JlptVocabItem } from './jlptVocabData';
export { JLPT_VOCAB_DATA } from './jlptVocabData';
export { JLPT_VOCAB_DATABASE } from './jlptVocabDatabase';

export const JLPT_GRAMMAR_DATA: JlptGrammarItem[] = [
  {
    id: 'n5_wa_desu',
    level: 'N5',
    title: 'N1 は N2 です (wa desu)',
    romaji: 'N1 wa N2 desu',
    meaningUz: 'N1 - N2 dir (Ego: Men talabaman / U shifokor)',
    structure: 'Ot1 + は + Ot2 + です',
    examples: [
      {
        ja: '私は学生です。',
        romaji: 'Watashi wa gakusei desu.',
        uz: 'Men talabaman.',
      },
      {
        ja: 'サントスさんはブラジル人です。',
        romaji: 'Santosu-san wa Burajiru-jin desu.',
        uz: 'Santos bobi braziliyalik.',
      },
    ],
  },
  {
    id: 'n5_ja_arimasen',
    level: 'N5',
    title: 'N1 は N2 じゃありません (ja arimasen)',
    romaji: 'N1 wa N2 ja arimasen / de wa arimasen',
    meaningUz: 'N1 - N2 emas (Inkor shakli)',
    structure: 'Ot1 + は + Ot2 + じゃありません / ではありません',
    examples: [
      {
        ja: '私は先生じゃありません。',
        romaji: 'Watashi wa sensei ja arimasen.',
        uz: "Men o'qituvchi emasman.",
      },
      {
        ja: 'マイクさんはエンジニアではありません。',
        romaji: 'Maiku-san wa enjinier de wa arimasen.',
        uz: 'Mayk muhandis emas.',
      },
    ],
  },
  {
    id: 'n5_ka_question',
    level: 'N5',
    title: '〜ですか (desu ka)',
    romaji: '... desu ka',
    meaningUz: "...-mi? (So'roq gap va savol berish)",
    structure: 'Gap + か',
    examples: [
      {
        ja: 'ミラーさんは会社員ですか。',
        romaji: 'Miraa-san wa kaishain desu ka.',
        uz: 'Mira janoblari kompaniya xodimimi?',
      },
    ],
  },
  {
    id: 'n5_mo_particle',
    level: 'N5',
    title: '〜も (mo)',
    romaji: 'mo',
    meaningUz: "... ham (Tenglik va o'xshashlik yuklamasi)",
    structure: 'Ot + も',
    examples: [
      {
        ja: '私も学生です。',
        romaji: 'Watashi mo gakusei desu.',
        uz: 'Men ham talabaman.',
      },
    ],
  },
  {
    id: 'n5_no_possession',
    level: 'N5',
    title: 'N1 の N2 (no)',
    romaji: 'N1 no N2',
    meaningUz: 'N1-ning N2-si (Tegishlilik kelishigi)',
    structure: 'Ot1 + の + Ot2',
    examples: [
      {
        ja: 'これは私の本です。',
        romaji: 'Kore wa watashi no hon desu.',
        uz: 'Bu mening kitobim.',
      },
      {
        ja: 'IMCの社員です。',
        romaji: 'IMC no shain desu.',
        uz: 'IMC kompaniyasi xodimi.',
      },
    ],
  },
  {
    id: 'n5_kore_sore_are',
    level: 'N5',
    title: 'これ / それ / あれ (kore / sore / are)',
    romaji: 'kore / sore / are',
    meaningUz: "Bu / U / Anavi (Narsa-buyum ko'rsatish olmoshlari)",
    structure: 'これ/それ/あれ + は + Ot + です',
    examples: [
      {
        ja: 'これは辞書です。',
        romaji: 'Kore wa jisho desu.',
        uz: "Bu lug'at.",
      },
      {
        ja: 'あれは誰のかばんですか。',
        romaji: 'Are wa dare no kaban desu ka.',
        uz: 'Anavi kimning sumkasi?',
      },
    ],
  },
  {
    id: 'n5_koko_soko_asoko',
    level: 'N5',
    title: 'ここ / そこ / あそこ / どこ (koko / soko / asoko / doko)',
    romaji: 'koko / soko / asoko / doko',
    meaningUz: "Bu yer / U yer / Anavi yer / Qayer (Joy ko'rsatish olmoshlari)",
    structure: 'Joy + は + ここ/そこ/あそこ + です',
    examples: [
      {
        ja: '事務所はあそこです。',
        romaji: 'Jimusho wa asoko desu.',
        uz: 'Ofis anavi yerda.',
      },
      {
        ja: 'お手洗いはどこですか。',
        romaji: 'Oterai wa doko desu ka.',
        uz: 'Hojatxona qayerda?',
      },
    ],
  },
  {
    id: 'n5_time_kara_made',
    level: 'N5',
    title: '〜から〜まで (kara ... made)',
    romaji: 'kara ... made',
    meaningUz: '...-dan ...-gacha (Vaqt va masofa chegaralari)',
    structure: 'Vaqt/Joy1 + から + Vaqt/Joy2 + まで',
    examples: [
      {
        ja: '9時から5時まで働きます。',
        romaji: 'Ku-ji kara go-ji made hatarakimasu.',
        uz: 'Soat 9 dan 5 gacha ishlayman.',
      },
      {
        ja: '東京から大阪まで新幹線で行きます。',
        romaji: 'Toukyou kara Oosaka made shinkansen de ikimasu.',
        uz: 'Tokyodan Osakagacha Shinkansen poezdida boraman.',
      },
    ],
  },
  {
    id: 'n5_masu_forms',
    level: 'N5',
    title: "Fe'l ます / ません / ました / ませんでした",
    romaji: 'masu / masen / mashita / masen deshita',
    meaningUz: "Hozirgi-kelasi va o'tgan zamon fe'l tuslanishlari (Xushmuomala shakli)",
    structure: "Fe'l ildizi + ます / ません / ました / ませんでした",
    examples: [
      {
        ja: '毎日勉強します。',
        romaji: 'Mainichi benkyou shimasu.',
        uz: 'Har kuni dars qilaman.',
      },
      {
        ja: 'きのうは勉強しませんでした。',
        romaji: 'Kinou wa benkyou shimasen deshita.',
        uz: 'Kechasi dars qilmadim.',
      },
    ],
  },
  {
    id: 'n5_direction_e',
    level: 'N5',
    title: '〜へ行きます / 来ます / 帰ります (e ikimasu / kimasu / kaerimasu)',
    romaji: 'e ikimasu / kimasu / kaerimasu',
    meaningUz: "...-ga boraman / kelaman / uyga qaytaman (Yo'nalish kelishigi へ)",
    structure: 'Joy + へ + 行きます/来ます/帰ります',
    examples: [
      {
        ja: '明日京都へ行きます。',
        romaji: 'Ashita Kyou-to e ikimasu.',
        uz: 'Ertaga Kyotoga boraman.',
      },
      {
        ja: 'うちへ帰ります。',
        romaji: 'Uchi e kaerimasu.',
        uz: 'Uyga qaytaman.',
      },
    ],
  },
  {
    id: 'n5_means_de',
    level: 'N5',
    title: '〜で [Transport/Vosita] (de)',
    romaji: 'de',
    meaningUz: '... bilan / ... orqali (Transport va vosita kelishigi で)',
    structure: 'Transport/Vosita + で',
    examples: [
      {
        ja: '電車で会社へ行きます。',
        romaji: 'Densha de kaisha e ikimasu.',
        uz: 'Poezd bilan kompaniyaga boraman.',
      },
      {
        ja: '箸で食べます。',
        romaji: 'Hashi de tabemasu.',
        uz: 'Tayoqcha bilan yeyman.',
      },
    ],
  },
  {
    id: 'n5_with_to',
    level: 'N5',
    title: '〜と [Birgalikda] (to)',
    romaji: 'to',
    meaningUz: '... bilan (Birgalikda bajarish yuklamasi)',
    structure: "Shaxs + と + Fe'l",
    examples: [
      {
        ja: '家族と日本へ来ました。',
        romaji: 'Kazoku to Nihon e kimashita.',
        uz: 'Ooilam bilan Yaponiyaga keldim.',
      },
    ],
  },
  {
    id: 'n5_object_wo',
    level: 'N5',
    title: "〜を [Fe'l] (wo)",
    romaji: 'wo',
    meaningUz: "...-ni (Vositasiz to'ldiruvchi / Tushum kelishigi を)",
    structure: "Ot + を + Fe'l",
    examples: [
      {
        ja: 'パンを食べます。水をごくごく飲みます。',
        romaji: 'Pan wo tabemasu. Mizu wo gokugoku nomimasu.',
        uz: 'Non yeyman. Suv ichaman.',
      },
    ],
  },
  {
    id: 'n5_location_de',
    level: 'N5',
    title: '〜で [Harakat joyi] (de)',
    romaji: 'de',
    meaningUz: "...-da (Harakat yoki voqea sodir bo'ladigan joy kelishigi で)",
    structure: "Joy + で + Harakat fe'li",
    examples: [
      {
        ja: '図書館で本を読みます。',
        romaji: 'Toshokan de hon wo yomimasu.',
        uz: "Kutubxonada kitob o'qiyman.",
      },
    ],
  },
  {
    id: 'n5_issho_ni_masen_ka',
    level: 'N5',
    title: '〜を一緒に〜ませんか (issho ni ... masen ka)',
    romaji: 'issho ni ... masen ka',
    meaningUz: 'Birga ...-aylikmi? / ...-maysizmi? (Xushmuomala taklif)',
    structure: "Fe'l (Masu-ildizi) + ませんか",
    examples: [
      {
        ja: '一緒にコーヒーを飲みませんか。',
        romaji: 'Issho ni koohii wo nomimasen ka.',
        uz: 'Birga kofe ichmaysizmi?',
      },
    ],
  },
  {
    id: 'n5_mashou',
    level: 'N5',
    title: '〜ましょう (mashou)',
    romaji: 'mashou',
    meaningUz: "Keling, ...-aylik! / ...-aylik (Chorlov va taklifga rozi bo'lish)",
    structure: "Fe'l (Masu-ildizi) + ましょう",
    examples: [
      {
        ja: 'ちょっと休見ましょう。',
        romaji: 'Chotto yasumimashou.',
        uz: 'Biroz dam olaylik.',
      },
    ],
  },
  {
    id: 'n5_ni_agemasu_moraimasu',
    level: 'N5',
    title: '〜にあげます / もらいます (ni agemasu / moraimasu)',
    romaji: 'ni agemasu / moraimasu',
    meaningUz: '...-ga bermoq / ...-dan olmoq',
    structure: 'Shaxs + に + Narsa + を + あげます/もらいます',
    examples: [
      {
        ja: '山田さんに花をあげました。',
        romaji: 'Yamada-san ni hana wo agemashita.',
        uz: 'Yamada xonimga gul berdim.',
      },
      {
        ja: '木村さんに本をもらいました。',
        romaji: 'Kimura-san ni hon wo moraimashita.',
        uz: 'Kimura xonimdan kitob oldim.',
      },
    ],
  },
  {
    id: 'n5_mou_mashita',
    level: 'N5',
    title: 'もう〜ました (mou ... mashita)',
    romaji: 'mou ... mashita',
    meaningUz: "Allaqachon ...-bajarib bo'ldim",
    structure: "もう + Fe'l (O'tgan zamon ました)",
    examples: [
      {
        ja: 'もう昼ご飯を食べました。',
        romaji: 'Mou hirugohan wo tabemashita.',
        uz: "Allaqachon tushlik qilib bo'ldim.",
      },
    ],
  },
  {
    id: 'n5_i_na_adjectives',
    level: 'N5',
    title: 'い-Sifat & な-Sifat tuslanishlari (い形容詞 / な形容詞)',
    romaji: 'i-adjectives / na-adjectives',
    meaningUz: "Yapon tilida sifatlarning bo'lishli va bo'lishsiz shakllari",
    structure: 'い ➔ くないです | な ➔ じゃありません',
    examples: [
      {
        ja: 'この部屋は広いです。高くありません。',
        romaji: 'Kono heya wa hiroi desu. Takaku arimasen.',
        uz: 'Bu xona keng. Qimmat emas.',
      },
      {
        ja: '富士山は有名で綺麗です。',
        romaji: 'Fujisan wa yuumei de kirei desu.',
        uz: "Fuji tog'i mashhur va go'zal.",
      },
    ],
  },
  {
    id: 'n5_ga_daisuki_jouzu',
    level: 'N5',
    title: '〜が大好きです / 上手です / 下手です (ga daisuki / jouzu / heta)',
    romaji: 'ga daisuki desu / jouzu desu / heta desu',
    meaningUz: "...-ni juda yaxshi ko'raman / usta-man / no'noq-man",
    structure: 'Ot + が + 好きです/上手です/下手です',
    examples: [
      {
        ja: '私は日本語が好きです。サッカーが上手です。',
        romaji: 'Watashi wa Nihongo ga suki desu. Sakkaa ga jouzu desu.',
        uz: "Men yapon tilini yaxshi ko'raman. Futbolda ustaman.",
      },
    ],
  },
  {
    id: 'n5_kara_reason',
    level: 'N5',
    title: '〜から、〜 (kara - sabab)',
    romaji: 'kara',
    meaningUz: "... bo'lgani uchun / ... sababli",
    structure: 'Gap1 (Sabab) + から、Gap2 (Natija)',
    examples: [
      {
        ja: '時間がありませんから、タクシーで行きます。',
        romaji: 'Jikan ga arimasen kara, takushii de ikimasu.',
        uz: "Vaqt yo'qligi uchun taksida boraman.",
      },
    ],
  },
  {
    id: 'n5_arimasu_imasu',
    level: 'N5',
    title: '〜があります / います (ga arimasu / imasu)',
    romaji: 'ga arimasu / imasu',
    meaningUz: '... bor (Jansiz narsalar uchun あります / Jonli maxluqlar uchun います)',
    structure: 'Ot + が + あります / います',
    examples: [
      {
        ja: 'あそこに本があります。犬がいます。',
        romaji: 'Asoko ni hon ga arimasu. Inu ga imasu.',
        uz: 'Anavi yerda kitob bor. It bor.',
      },
    ],
  },
  {
    id: 'n5_yori_hou_ga',
    level: 'N5',
    title: '〜より〜のほうが〜です (yori ... no hou ga)',
    romaji: 'N1 yori N2 no hou ga ... desu',
    meaningUz: "N1-dan ko'ra N2 afzalroq/kattaroq (Solishtirish)",
    structure: 'Ot1 + より + Ot2 + のほうが + Sifat + です',
    examples: [
      {
        ja: '車より電車のほうが速いです。',
        romaji: 'Kuruma yori densha no hou ga hayai desu.',
        uz: "Mashinadan ko'ra poezd tezroq.",
      },
    ],
  },
  {
    id: 'n5_no_naka_de_ichiban',
    level: 'N5',
    title: '〜の中で〜が一番〜です (no naka de ... ga ichiban)',
    romaji: 'N1 no naka de N2 ga ichiban ... desu',
    meaningUz: 'N1-ning ichida N2 eng ...-si (Orttirma daraja)',
    structure: 'Guruh + の中で + Ot + が一番 + Sifat + です',
    examples: [
      {
        ja: '1年の中で夏が一番好きです。',
        romaji: 'Ichinen no naka de natsu ga ichiban suki desu.',
        uz: "Bir yilning ichida yozni eng ko'p yaxshi ko'raman.",
      },
    ],
  },
  {
    id: 'n5_tai_desu',
    level: 'N5',
    title: '〜たいです (tai desu)',
    romaji: 'tai desu',
    meaningUz: '...-gim kelyapti / ...-shni xohlayman (Shaxsiy istak)',
    structure: "Fe'l (Masu-ildizi) + たいです",
    examples: [
      {
        ja: '日本へ行きたいです。',
        romaji: 'Nihon e ikitai desu.',
        uz: 'Yaponiyaga borgim kelyapti.',
      },
      {
        ja: '温かいお茶が飲みたいです。',
        romaji: 'Atatakai ocha ga nomitai desu.',
        uz: 'Issiq choy ichgim kelyapti.',
      },
    ],
  },
  {
    id: 'n5_ni_ikimasu_purpose',
    level: 'N5',
    title: "〜へ[Fe'l]に行きます (e ... ni ikimasu)",
    romaji: 'e ... ni ikimasu',
    meaningUz: '...-gani boraman (Bormoqdan maqsad)',
    structure: "Joy + へ + Fe'l (Masu-ildizi) + に行きます",
    examples: [
      {
        ja: 'デパートへ買い物に行きます。',
        romaji: 'Depaato e kaimono ni ikimasu.',
        uz: 'Supermarketga xarid qilgani boraman.',
      },
    ],
  },
  {
    id: 'n5_te_kudasai',
    level: 'N5',
    title: '〜てください (te kudasai)',
    romaji: 'te kudasai',
    meaningUz: '...-ing / Iltimos, ...-bajarib bering (Xushmuomala iltimos)',
    structure: "Fe'l (Te-shakli) + ください",
    examples: [
      {
        ja: 'ここに名前を書いてください。',
        romaji: 'Koko ni namae wo kaite kudasai.',
        uz: 'Bu yerga ismingizni yozing.',
      },
    ],
  },
  {
    id: 'n5_te_imasu',
    level: 'N5',
    title: '〜ています (te imasu)',
    romaji: 'te imasu',
    meaningUz: '...-yapti / hozir bajarilayotgan harakat (Hozirgi davomli zamon)',
    structure: "Fe'l (Te-shakli) + います",
    examples: [
      {
        ja: '今雨が降っています。',
        romaji: 'Ima ame ga furutte imasu.',
        uz: "Hozir yomg'ir yog'yapti.",
      },
      {
        ja: 'ミラーさんは今電話をかけています。',
        romaji: 'Miraa-san wa ima denwa wo kakete imasu.',
        uz: 'Mira janoblari hozir telefonda gaplashyapti.',
      },
    ],
  },
  {
    id: 'n5_te_mo_ii_desu',
    level: 'N5',
    title: '〜てもいいです (te mo ii desu)',
    romaji: 'te mo ii desu',
    meaningUz: "...-sa ham bo'ladi / ruxsat beriladi",
    structure: "Fe'l (Te-shakli) + もいいです",
    examples: [
      {
        ja: 'ここで写真を撮ってもいいです。',
        romaji: 'Koko de shashin wo totte mo ii desu.',
        uz: "Bu yerda rasmga tushirsangiz bo'ladi.",
      },
    ],
  },
  {
    id: 'n5_te_wa_ikemasen',
    level: 'N5',
    title: '〜てはいけません (te wa ikemasen)',
    romaji: 'te wa ikemasen',
    meaningUz: "...-sa bo'lmaydi, taqiqlanadi (Man etilgan harakat)",
    structure: "Fe'l (Te-shakli) + はいいけません",
    examples: [
      {
        ja: 'ここでタバコを吸ってはいけません。',
        romaji: 'Koko de tabako wo sutte wa ikemasen.',
        uz: 'Bu yerda tamaki chekish taqiqlanadi.',
      },
    ],
  },
  {
    id: 'n5_naide_kudasai',
    level: 'N5',
    title: '〜ないでください (naide kudasai)',
    romaji: 'naide kudasai',
    meaningUz: "...-mang / Iltimos, ...-bajarib o'tmang (Inkor iltimos)",
    structure: "Fe'l (Nai-shakli) + でください",
    examples: [
      {
        ja: '写真を撮らないでください。',
        romaji: 'Shashin wo toranaide kudasai.',
        uz: 'Rasmga tushurmang.',
      },
    ],
  },
  {
    id: 'n5_nakereba_narimosen',
    level: 'N5',
    title: '〜なければなりません (nakereba narimasen)',
    romaji: 'nakereba narimasen',
    meaningUz: '...-shim shart / bajarishim shart va zarur',
    structure: "Fe'l (Nai-shakli ildizi) + ければなりません",
    examples: [
      {
        ja: '薬を飲まなければなりません。',
        romaji: 'Kusuri wo nomanakereba narimasen.',
        uz: 'Dori ichishim shart.',
      },
    ],
  },
  {
    id: 'n5_nakute_mo_ii_desu',
    level: 'N5',
    title: '〜なくてもいいです (nakute mo ii desu)',
    romaji: 'nakute mo ii desu',
    meaningUz: "...-shingiz shart emas / bajarmasangiz ham bo'ladi",
    structure: "Fe'l (Nai-shakli ildizi) + くてもいいです",
    examples: [
      {
        ja: '明日来なくてもいいです。',
        romaji: 'Ashita konakute mo ii desu.',
        uz: "Ertaga kelmasangiz ham bo'ladi.",
      },
    ],
  },
  {
    id: 'n5_tari_tari_shimasu',
    level: 'N5',
    title: '〜たり、〜たりします (tari, tari shimasu)',
    romaji: 'tari, tari shimasu',
    meaningUz: "goh ...-bajaraman, goh ...-bajaraman (Harakatlar sanab o'tish)",
    structure: "Fe'l1 (Ta-form) + り、Fe'l2 (Ta-form) + りします",
    examples: [
      {
        ja: '日曜日本を読んだり、音楽を聞いたりします。',
        romaji: 'Nichiyoubi hon wo yondari, ongaku wo kikitari shimasu.',
        uz: "Yakshanba kuni goh kitob o'qiyman, goh musiqa tinglayman.",
      },
    ],
  },
  {
    id: 'n5_ta_koto_ga_arimasu',
    level: 'N5',
    title: '〜たことがあります (ta koto ga arimasu)',
    romaji: 'ta koto ga arimasu',
    meaningUz: '...-ganman / ...-gan tajribam bor',
    structure: "Fe'l (Ta-form) + ことがあります",
    examples: [
      {
        ja: '富士山に登ったことがあります。',
        romaji: 'Fujisan ni nobotta koto ga arimasu.',
        uz: "Fuji tog'iga ko'tarilganman.",
      },
    ],
  },
  {
    id: 'n4_pdf_1_amarinai',
    level: 'N4',
    title: 'あまり～ない (amari~nai)',
    romaji: 'amari~nai',
    meaningUz: "unchalik ... emas / uncha ko'p emas",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '今度の一件については、どうもあまり自信はない。',
        romaji: 'kondo no ikken ni tsuite wa, doumo amari jishin wa nai.',
        uz: "Bu safargi ish bo'yicha unchalik o'zimga ishonchim yo'q.",
      },
    ],
  },
  {
    id: 'n4_pdf_2_ato_de',
    level: 'N4',
    title: 'あとで (ato de)',
    romaji: 'ato de',
    meaningUz: "...-dan keyin / so'ng",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '私は会社を辞めたあとで、彼からの連絡もめっきり減っていた。',
        romaji: 'watashi wa kaisha o yameta ato de, kare kara no renraku mo mekkiri hette ita.',
        uz: "Men ishdan ketganimdan so'ng, undan keladigan xabarlar ancha kamayib ketdi.",
      },
    ],
  },
  {
    id: 'n4_pdf_3_ba',
    level: 'N4',
    title: 'ば (ba)',
    romaji: 'ba',
    meaningUz: 'agar ...-sa (shart mayli)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '人は死ねば、皮膚しか身につけていない。',
        romaji: 'hito wa shineba, hifu shika mi ni tsukete inai.',
        uz: "Inson vafot etsa, uning o'zidan faqat tanasi qoladi xolos.",
      },
    ],
  },
  {
    id: 'n4_pdf_4_baai_wa',
    level: 'N4',
    title: '場合は (baai wa)',
    romaji: 'baai wa',
    meaningUz: "... bo'lgan holda / ... vaziyatda",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '頭部の外傷の場合、最初の二十四時間は注意が必要です。',
        romaji: 'toubu no gaishou no baai, saisho no nijuuyo jikan wa chuui ga hitsuyou desu.',
        uz: 'Bosh jarohati holatida dastlabki 24 soat davomida ehtiyotkorlik zarur.',
      },
    ],
  },
  {
    id: 'n4_pdf_5_dake_de',
    level: 'N4',
    title: 'だけで (dake de)',
    romaji: 'dake de',
    meaningUz: "faqatgina ... bilan / shunchaki ...ning o'zi yetarli",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '安定した収入を得るだけでは満足できなかった。',
        romaji: 'antei shita shuunyuu o eru dake de wa manzoku dekinakatta.',
        uz: "Faqatgina barqaror daromad olishning o'zi bilan qoniqa olmadim.",
      },
    ],
  },
  {
    id: 'n4_pdf_6_dasu',
    level: 'N4',
    title: 'だす (dasu)',
    romaji: 'dasu',
    meaningUz: "to'satdan ... boshlamoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼の話を聞いて、つい笑い出してしまった。',
        romaji: 'kare no hanashi o kiite, tsui warai dashite shimatta.',
        uz: 'Uning gapini eshitib, beixtiyor kulib yubordim.',
      },
    ],
  },
  {
    id: 'n4_pdf_7_demo',
    level: 'N4',
    title: 'でも (demo)',
    romaji: 'demo',
    meaningUz: "... kabi biror narsa / bo'lsa ham",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '何か暖かいものでも飲む？',
        romaji: 'nanika atatakai mono demo nomu.',
        uz: 'Issiqroq biror narsa ichasanmi?',
      },
    ],
  },
  {
    id: 'n4_pdf_8_de_gozaimasu',
    level: 'N4',
    title: 'でございます (de gozaimasu)',
    romaji: 'de gozaimasu',
    meaningUz: '... hisoblanadi / ...dir (です ning hurmat shakli)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ほんとに冬の間は、ここはおそろしいほど閑静なんでございますのよ。',
        romaji: 'honto ni fuyu no aida wa, koko wa osoroshii hodo kansei nan de gozaimasu no yo.',
        uz: "Haqiqatan ham qish faslida bu yer juda sokin va tinch bo'ladi.",
      },
    ],
  },
  {
    id: 'n4_pdf_9_garu',
    level: 'N4',
    title: 'がる (garu)',
    romaji: 'garu',
    meaningUz: '... hissini bildirmoq / ...-gisi kelmoq (3-shaxs)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '手に入れるのが難しいものほど、人は欲しがるのだ。',
        romaji: 'te ni ireru no ga muzukashii mono hodo, hito wa hoshigaru no da.',
        uz: "Qo'lga kiritish qanchalik qiyin bo'lsa, insonlar uni shunchalik ko'proq xohlashadi.",
      },
    ],
  },
  {
    id: 'n4_pdf_10_ga_suru',
    level: 'N4',
    title: 'がする (ga suru)',
    romaji: 'ga suru',
    meaningUz: "... ovozi / hidi / ta'mi / tuyg'usi kelmoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '背後で重厚なドアが閉じる音がした。',
        romaji: 'haigo de juukou na doa ga tojiru oto ga shita.',
        uz: "Ortimda og'ir eshik yopilayotganining ovozi eshitildi.",
      },
    ],
  },
  {
    id: 'n4_pdf_11_goro',
    level: 'N4',
    title: 'ごろ (goro)',
    romaji: 'goro',
    meaningUz: '... atrofida / chamasi (vaqtga nisbatan)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'オフィスには八時頃行き、電話をかけたり受けたりし始めます。',
        romaji: 'ofisu ni wa hachiji goro iki, denwa o kaketari uketari shihajimemasu.',
        uz: "Ofisga soat sakkizlar atrofida borib, qo'ng'iroqlarga javob bera boshlayman.",
      },
    ],
  },
  {
    id: 'n4_pdf_12_gozaimasu',
    level: 'N4',
    title: 'ございます (gozaimasu)',
    romaji: 'gozaimasu',
    meaningUz: 'bor / mavjud (あります ning hurmat shakli)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ここに私の出生証明書がございます。',
        romaji: 'koko ni watashi no shussei shoumeisho ga gozaimasu.',
        uz: "Mana bu yerda mening tug'ilganlik haqidagi guvohnomam bor.",
      },
    ],
  },
  {
    id: 'n4_pdf_13_hajimeru',
    level: 'N4',
    title: '始める (hajimeru)',
    romaji: 'hajimeru',
    meaningUz: "... boshlamoq (fe'l harakatini)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '私はとても暑く感じ始めました。',
        romaji: 'watashi wa totemo atsuku kanji hajimemashita.',
        uz: 'Men juda issiq his qila boshladim.',
      },
    ],
  },
  {
    id: 'n4_pdf_15_hazu_ga_nai',
    level: 'N4',
    title: 'はずがない (hazu ga nai)',
    romaji: 'hazu ga nai',
    meaningUz: "... bo'lishi mumkin emas / aslo bo'lmaydi",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ご主人の悪口を奥さんに聞かせていいはずがないんだ。',
        romaji: 'goshujin no warukuchi o okusan ni kikasete ii hazu ga nain da.',
        uz: "Eri haqidagi yomon gaplarni xotiniga eshittirish aslo to'g'ri bo'lishi mumkin emas.",
      },
    ],
  },
  {
    id: 'n4_pdf_16_hitsuyou_ga_aru',
    level: 'N4',
    title: '必要がある (hitsuyou ga aru)',
    romaji: 'hitsuyou ga aru',
    meaningUz: '... qilish zarur / kerak',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'もう一度お会いする必要があります。',
        romaji: 'mou ichido oai suru hitsuyou ga arimasu.',
        uz: 'Yana bir bor uchrashishimiz zarur.',
      },
    ],
  },
  {
    id: 'n4_pdf_17_hoshii',
    level: 'N4',
    title: '欲しい (hoshii)',
    romaji: 'hoshii',
    meaningUz: '... kerak / xohlamoq (otlar uchun)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'イエスという答がほしい。あなたはこの仕事の最適任者だ。',
        romaji: 'iesu to iu kotae ga hoshii. anata wa kono shigoto no saitekininsha da.',
        uz: "Menga 'ha' degan javobingiz kerak. Siz bu ish uchun eng munosib kishisiz.",
      },
    ],
  },
  {
    id: 'n4_pdf_18_irassharu',
    level: 'N4',
    title: 'いらっしゃる (irassharu)',
    romaji: 'irassharu',
    meaningUz: "bo'lmoq / kelmoq / bormoq (hurmat shakli)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'またいらっしゃってください。',
        romaji: 'Reibun desu.',
        uz: 'Yana marhamat qilib kelib turing.',
      },
    ],
  },
  {
    id: 'n4_pdf_19_itasu',
    level: 'N4',
    title: 'いたす (itasu)',
    romaji: 'itasu',
    meaningUz: "qilmoq (kamtarona shakl: します o'rnida)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'お邪魔いたしまして申しわけございませんでした。',
        romaji: 'ojama itashimashite moushiwake gozaimasen deshita.',
        uz: "Bezovta qilganim uchun ming bor uzr so'rayman.",
      },
    ],
  },
  {
    id: 'n4_pdf_20_janai_ka',
    level: 'N4',
    title: 'じゃないか (janai ka)',
    romaji: 'janai ka',
    meaningUz: '... emasmi! / ...-ku axir!',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '隠れるところがないじゃないか！',
        romaji: 'kakureru tokoro ga nai janai ka.',
        uz: "Yashirinadigan joy yo'q-ku axir!",
      },
    ],
  },
  {
    id: 'n4_pdf_21_ka_dou_ka',
    level: 'N4',
    title: 'かどうか (ka dou ka)',
    romaji: 'ka dou ka',
    meaningUz: "... yoki yo'qligi",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '自分が本当に正しいことをしているのかどうか、確信がもてなくなることがある。',
        romaji:
          'jibun ga hontou ni tadashii koto o shite iru no ka dou ka, kakushin ga motenakunaru koto ga aru.',
        uz: "O'zim haqiqatan ham to'g'ri ish qilyapmanmi yoki yo'qmi, ba'zan ishonchim komil bo'lmay qoladi.",
      },
    ],
  },
  {
    id: 'n4_pdf_22_kai',
    level: 'N4',
    title: 'かい (kai)',
    romaji: 'kai',
    meaningUz: "...-mi? (norasmiy so'roq yuklamasi)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'それで、学校はどうだった？友だちはできたかい？',
        romaji: 'sore de, gakkou wa dou datta. tomodachi wa dekita kai.',
        uz: "Xo'sh, maktab qanday o'tdi? Do'stlar orttira oldingmi?",
      },
    ],
  },
  {
    id: 'n4_pdf_23_kamoshirenai',
    level: 'N4',
    title: 'かもしれない (kamoshirenai)',
    romaji: 'kamoshirenai',
    meaningUz: "... bo'lsa kerak / ehtimol / mumkin",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '私は本当はあなたに会わなかったほうがよかったのかもしれない。',
        romaji: 'watashi wa hontou wa anata ni awanakatta hou ga yokatta no kamoshirenai.',
        uz: "Aslida siz bilan uchrashmaganim ma'qulroq bo'larmidi deb o'ylab qoldim.",
      },
    ],
  },
  {
    id: 'n4_pdf_24_kana',
    level: 'N4',
    title: 'かな (kana)',
    romaji: 'kana',
    meaningUz: '... ekan-a? / ...-mikan?',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'あなたはわたしといっしょに旅行するのはいやなのかな？',
        romaji: 'anata wa watashi to issho ni ryokou suru no wa iya na no kana.',
        uz: 'Sen men bilan birga sayohat qilishni xohlamayapsanmikan?',
      },
    ],
  },
  {
    id: 'n4_pdf_25_kata',
    level: 'N4',
    title: 'かた (kata)',
    romaji: 'kata',
    meaningUz: "... qilish usuli / yo'li",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'その初めて投票したときのやり方は、誇れるようなものではありません。',
        romaji:
          'sono hajimete touhyou shita toki no yarikata wa, hokoreru you na mono de wa arimasen.',
        uz: "Ilk bor ovoz berganimda qo'llagan usulim maqtangulik narsa emas edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_26_kashira',
    level: 'N4',
    title: 'かしら (kashira)',
    romaji: 'kashira',
    meaningUz: "...-mikan? (ayollar nutqida o'y-xayol)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '今度の土曜日に電話かけていいかしら？',
        romaji: 'kondo no doyoubi ni denwa kakete ii kashira.',
        uz: "Bu shanba kuni qo'ng'iroq qilsam bo'larmikan?",
      },
    ],
  },
  {
    id: 'n4_pdf_27_koto',
    level: 'N4',
    title: 'こと (koto)',
    romaji: 'koto',
    meaningUz: "fe'lni otga aylantiruvchi (-sh, -ish)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼は休息に多くの時間をあたえることになれていない。',
        romaji: 'kare wa kyuusoku ni ooku no jikan o ataeru koto ni narete inai.',
        uz: "U dam olishga ko'p vaqt ajratishga o'rganmagan.",
      },
    ],
  },
  {
    id: 'n4_pdf_28_koto_ga_dekiru',
    level: 'N4',
    title: 'ことができる (koto ga dekiru)',
    romaji: 'koto ga dekiru',
    meaningUz: '... qila olmoq (imkoniyat / qobiliyat)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼女はどうかこうか字は読めたが、書くことができなかった。',
        romaji: 'kanojo wa douka kouka ji wa yometa ga, kaku koto ga dekinakatta.',
        uz: "U amallab o'qiy olardi, lekin yoza olmas edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_29_made_ni',
    level: 'N4',
    title: 'までに (made ni)',
    romaji: 'made ni',
    meaningUz: '...-gacha (muddat chegarasi)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '僕はこれまでに何度か彼女に嘘をついた。',
        romaji: 'boku wa kore made ni nando ka kanojo ni uso o tsuita.',
        uz: "Men hozirgacha unga bir necha bor yolg'on gapirganman.",
      },
    ],
  },
  {
    id: 'n4_pdf_30_mitai',
    level: 'N4',
    title: 'みたい (mitai)',
    romaji: 'mitai',
    meaningUz: "... kabi / ...ga o'xshaydi",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'あまり頭のいい人物じゃなかったけど、かなり儲けているみたいだった。',
        romaji: 'amari atama no ii jinbutsu janakatta kedo, kanari moukete iru mitai datta.',
        uz: "U unchalik aqlli bo'lmasa-da, katta boylik orttirayotganga o'xshardi.",
      },
    ],
  },
  {
    id: 'n4_pdf_31_mitai_nimitai_na',
    level: 'N4',
    title: 'みたいに/みたいな (mitai ni/mitai na)',
    romaji: 'mitai ni/mitai na',
    meaningUz: "... kabi / ...dek / ...ga o'xshash",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼女の心は氷みたいに冷たい。',
        romaji: 'Her heart is as cold as ice.',
        uz: 'Uning qalbi muzdek sovuq.',
      },
    ],
  },
  {
    id: 'n4_pdf_32_nado',
    level: 'N4',
    title: 'など (nado)',
    romaji: 'nado',
    meaningUz: "... kabi / va shunga o'xshashlar",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'これ以上人生から学ぶことなどないと考えていた。',
        romaji: 'kore ijou jinsei kara manabu koto nado nai to kangaete ita.',
        uz: "Bundan ortiq hayotdan o'rganadigan narsa qolmadi deb o'ylagan edim.",
      },
    ],
  },
  {
    id: 'n4_pdf_33_nagara',
    level: 'N4',
    title: 'ながら (nagara)',
    romaji: 'nagara',
    meaningUz: '... qila turib / ... holda (bir vaqtda)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '子どものころは誰もがバービー人形で遊びながら育ちますよね。',
        romaji: 'kodomo no koro wa daremo ga baabii ningyou de asobinagara sodachimasu yo ne.',
        uz: "Bolalikda hamma Barbi qo'g'irchoqlari bilan o'ynab ulg'ayadi, to'g'rimi?",
      },
    ],
  },
  {
    id: 'n4_pdf_34_naide',
    level: 'N4',
    title: 'ないで (naide)',
    romaji: 'naide',
    meaningUz: '... qilmasdan / ... qilmasdan turib',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '僕たちは誰にも気付かれないで村を出てきたんだ。',
        romaji: 'bokutachi wa dare ni mo kidzukarenaide mura o dete kitan da.',
        uz: 'Biz hech kimga sezdirmasdan qishloqdan chiqib ketdik.',
      },
    ],
  },
  {
    id: 'n4_pdf_35_nakereba_ikenainakereba_naranai',
    level: 'N4',
    title: 'なければいけない/なければならない (nakereba ikenai/nakereba naranai)',
    romaji: 'nakereba ikenai/nakereba naranai',
    meaningUz: '... qilish shart / lozim',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'だが私は行かなければならない。私を引きとめようとしても無駄だからね。',
        romaji:
          'da ga watashi wa ikanakereba naranai. watashi o hikitomeyou to shite mo muda dakara ne.',
        uz: 'Biroq men ketishim kerak. Meni ushlab qolishga urinishingiz befoyda.',
      },
    ],
  },
  {
    id: 'n4_pdf_36_nakutewa_ikenainakutewa_naranai',
    level: 'N4',
    title: 'なくてはいけない/なくてはならない (nakutewa ikenai/nakutewa naranai)',
    romaji: 'nakutewa ikenai/nakutewa naranai',
    meaningUz: '... qilish kerak / majbur',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '報告書を書き直さなくてはならない。',
        romaji: 'houkokusho o kakinaosanakute wa naranai.',
        uz: 'Hisobotni qaytadan yozishim kerak.',
      },
    ],
  },
  {
    id: 'n4_pdf_37_nakute_mo_ii',
    level: 'N4',
    title: 'なくてもいい (nakute mo ii)',
    romaji: 'nakute mo ii',
    meaningUz: "... qilmasa ham bo'ladi (ixtiyoriy)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'もうこの問題については考えなくていい。',
        romaji: 'mou kono mondai ni tsuite wa kangaenakute ii.',
        uz: "Endi bu masala haqida bosh qotirmasang ham bo'ladi.",
      },
    ],
  },
  {
    id: 'n4_pdf_38_nara',
    level: 'N4',
    title: 'なら (nara)',
    romaji: 'nara',
    meaningUz: "agar ... bo'lsa / ...ga kelsak",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼女を殺したいのなら、僕も殺しなさい！',
        romaji: 'kanojo o koroshitai no nara, boku mo koroshinasai.',
        uz: "Agar uni o'ldirmoqchi bo'lsang, meni ham o'ldirishingga to'g'ri keladi!",
      },
    ],
  },
  {
    id: 'n4_pdf_39_nasai',
    level: 'N4',
    title: 'なさい (nasai)',
    romaji: 'nasai',
    meaningUz: '... qiling (buyruq shakli)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '元気を出しなさい。来週には京都に連れていってやろう。',
        romaji: 'genki o dashinasai. raishuu ni wa kyouto ni tsurete itte yarou.',
        uz: "Tetik bo'ling! Kelasi haftada sizni Kiotoga olib boraman.",
      },
    ],
  },
  {
    id: 'n4_pdf_40_nasaru',
    level: 'N4',
    title: 'なさる (nasaru)',
    romaji: 'nasaru',
    meaningUz: 'qilmoq (hurmat shakli)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'あまり期待なさらないでくださいよ。',
        romaji: 'amari kitai nasaranaide kudasai yo.',
        uz: "Iltimos, ortiqcha katta umid bog'lamang.",
      },
    ],
  },
  {
    id: 'n4_pdf_41_ni_ki_ga_tsuku',
    level: 'N4',
    title: 'に気がつく (ni ki ga tsuku)',
    romaji: 'ni ki ga tsuku',
    meaningUz: '...ni sezib qolmoq / payqamoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'そのとき彼は、彼女が泣いているのに気がついた。',
        romaji: 'Then he noticed that she was crying.',
        uz: "O'sha paytda u qiz yig'layotganini sezib qoldi.",
      },
    ],
  },
  {
    id: 'n4_pdf_42_nikui',
    level: 'N4',
    title: 'にくい (nikui)',
    romaji: 'nikui',
    meaningUz: '... qilish qiyin / noqulay',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '悪い知らせって言いにくい。',
        romaji: 'warui shirase tte iinikui.',
        uz: 'Yomon xabarni aytish juda qiyin.',
      },
    ],
  },
  {
    id: 'n4_pdf_43_ni_mieru',
    level: 'N4',
    title: 'に見える (ni mieru)',
    romaji: 'ni mieru',
    meaningUz: "... ko'rinmoq / tuyulmoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '私には、彼は少し腹を立てているように見えた。',
        romaji: 'watashi ni wa, kare wa sukoshi hara o tatete iru you ni mieta.',
        uz: "Menga u biroz jahli chiqqandek ko'rindi.",
      },
    ],
  },
  {
    id: 'n4_pdf_44_no_naka_de',
    level: 'N4',
    title: 'のなかで (no naka de)',
    romaji: 'no naka de',
    meaningUz: '... ichida / orasida',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼は俺に人生の中で一番の親友だ。',
        romaji: "kare wa ore ni jinsei no naka de ichiban no shin'yuu da.",
        uz: "U butun hayotimdagi eng yaqin qadrdon do'stimdir.",
      },
    ],
  },
  {
    id: 'n4_pdf_45_no_you_nino_you_na',
    level: 'N4',
    title: 'のように / のような (no you ni/no you na)',
    romaji: 'no you ni/no you na',
    meaningUz: '... kabi / ...dek',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼の眼は錐のように、冷たく、そして鋭かった。',
        romaji: 'kare no me wa kiri no you ni, tsumetaku, soshite surudokatta.',
        uz: "Uning nigohi parma kabi sovuq va o'tkir edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_46_okudasai',
    level: 'N4',
    title: 'お～ください (o~kudasai)',
    romaji: 'o~kudasai',
    meaningUz: 'iltimos, ... qiling (hurmatli murojaat)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ドアが閉まります。ご注意ください。',
        romaji: 'doa ga shimarimasu. go chuui kudasai.',
        uz: "Eshiklar yopilmoqda. Iltimos, ehtiyot bo'ling.",
      },
    ],
  },
  {
    id: 'n4_pdf_47_oni_naru',
    level: 'N4',
    title: 'お～になる (o~ni naru)',
    romaji: 'o~ni naru',
    meaningUz: '... qilmoq (hurmat shakli)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'いつ招待状をお出しになりますか？',
        romaji: 'itsu shoutaijou o odashi ni narimasu ka.',
        uz: "Taklifnomalarni qachon jo'natasiz?",
      },
    ],
  },
  {
    id: 'n4_pdf_48_oki_ni',
    level: 'N4',
    title: 'おきに (oki ni)',
    romaji: 'oki ni',
    meaningUz: 'har ... oraliqda / ...da bir',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼は一週間おきに問題を起こす生徒だ。',
        romaji: 'kare wa isshuukan oki ni mondai o okosu seito da.',
        uz: "U har ikki haftada bir muammo chiqaradigan o'quvchi.",
      },
    ],
  },
  {
    id: 'n4_pdf_49_owaru',
    level: 'N4',
    title: '終わる (owaru)',
    romaji: 'owaru',
    meaningUz: "... qilib bo'lmoq / tugatmoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '話し終わると、記者たちの質問が殺到した。',
        romaji: 'hanashiowaru to, kishatachi no shitsumon ga sattou shita.',
        uz: "Gapirib bo'lganimdan so'ng, jurnalistlarning savollari yog'ilib ketdi.",
      },
    ],
  },
  {
    id: 'n4_pdf_50_rashii',
    level: 'N4',
    title: 'らしい (rashii)',
    romaji: 'rashii',
    meaningUz: "...ga o'xshaydi / eshitishimcha",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'どうも最近、物覚えがわるくなっているらしい。',
        romaji: 'doumo saikin, monooboe ga waruku natte iru rashii.',
        uz: "Oxirgi paytlarda xotiram ancha yomonlashib borayotganga o'xshaydi.",
      },
    ],
  },
  {
    id: 'n4_pdf_51_sa',
    level: 'N4',
    title: 'さ (sa)',
    romaji: 'sa',
    meaningUz: 'sifatdan ot yasovchi (-lik)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'あなたの強さは、どこから来ているのでしょうか？',
        romaji: 'anata no tsuyosa wa, doko kara kite iru no deshou ka.',
        uz: 'Sizning bu kuch-qudratingiz qayerdan kelayotgan ekan-a?',
      },
    ],
  },
  {
    id: 'n4_pdf_52_saseru',
    level: 'N4',
    title: 'させる (saseru)',
    romaji: 'saseru',
    meaningUz: '... qildirmoq / ijozat bermoq (orttirma nisbat)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'なぜかその人たちは、わたしを不安な気持にさせた。',
        romaji: 'nazeka sono hitotachi wa, watashi o fuan na kimochi ni saseta.',
        uz: "Negadir u odamlar meni xavotirli holatga solib qo'ydi.",
      },
    ],
  },
  {
    id: 'n4_pdf_53_saserareru',
    level: 'N4',
    title: 'させられる (saserareru)',
    romaji: 'saserareru',
    meaningUz: '... qilishga majbur etilmoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '母は家計を支えるために高校をやめさせられた。',
        romaji: 'haha wa kakei o sasaeru tame ni koukou o yamesaserareta.',
        uz: "Onam oilani boqishga yordam berish uchun maktabni tashlashga majbur bo'lgan.",
      },
    ],
  },
  {
    id: 'n4_pdf_54_sasuga',
    level: 'N4',
    title: 'さすが (sasuga)',
    romaji: 'sasuga',
    meaningUz: 'kutilganidek / qoyilmaqom',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'さすがにこういうところには住みたくないな…',
        romaji: 'sasuga ni kou iu tokoro ni wa sumitakunai na.',
        uz: "Har qancha bo'lsa ham, bunaqa joyda yashashni xohlamasdim...",
      },
    ],
  },
  {
    id: 'n4_pdf_55_shishi',
    level: 'N4',
    title: 'し～し (shi~shi)',
    romaji: 'shi~shi',
    meaningUz: 'ham ... ham ... (sabablar qatori)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼は勉強も運動もできるし背も高いし…',
        romaji: 'kare wa benkyou mo undou mo dekiru shi se mo takai shi.',
        uz: "U o'qishda ham, sportda ham zo'r, bo'yi ham baland...",
      },
    ],
  },
  {
    id: 'n4_pdf_56_shikanai',
    level: 'N4',
    title: 'しか～ない (shika~nai)',
    romaji: 'shika~nai',
    meaningUz: "faqatgina ... bor xolos / ...dan boshqa yo'q",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '正しくやれるチャンスは１回しかないんだ。',
        romaji: 'tadashiku yareru chansu wa ikkai shika nain da.',
        uz: "Ishni to'g'ri bajarish uchun atigi bitta imkoniyat bor xolos.",
      },
    ],
  },
  {
    id: 'n4_pdf_57_sonna_ni',
    level: 'N4',
    title: 'そんなに (sonna ni)',
    romaji: 'sonna ni',
    meaningUz: "bunchalik / shunchalik ko'p",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'わたしのことがそんなに大切？',
        romaji: 'watashi no koto ga sonna ni taisetsu.',
        uz: 'Men sen uchun shunchalik qadrlanamanmi?',
      },
    ],
  },
  {
    id: 'n4_pdf_58_sore_demo',
    level: 'N4',
    title: 'それでも (sore demo)',
    romaji: 'sore demo',
    meaningUz: 'shunga qaramay / baribir',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼女は食べることに集中しようとした。それでも手は震え、顔は怒りで火照りはじめた。',
        romaji:
          'kanojo wa taberu koto ni shuuchuu shiyou to shita. sore demo te wa furue, kao wa ikari de hoteri',
        uz: "U ovqatga diqqatini qaratmoqchi bo'ldi. Shunga qaramay, qo'llari qaltirar, yuzi esa g'azabdan yonar edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_59_sou_nisou_na',
    level: 'N4',
    title: 'そうに/そうな (sou ni/sou na)',
    romaji: 'sou ni/sou na',
    meaningUz: "...dek tuyulgan / ko'ringan",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ヒカルだけがかなり快活そうな様子をしていました。',
        romaji: 'hikaru dake ga kanari kaikatsu sou na yousu o shite imashita.',
        uz: "Faqatgina Xikaruning o'zi ancha xushchaqchaq ko'rinardi.",
      },
    ],
  },
  {
    id: 'n4_pdf_60_ta_bakari',
    level: 'N4',
    title: 'たばかり (ta bakari)',
    romaji: 'ta bakari',
    meaningUz: 'hozirgina ... qilgan / yangigina',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'その話を聞いていたら、うちの娘が生まれたばかりのころを思い出した。',
        romaji:
          'sono hanashi o kiite itara, uchi no musume ga umareta bakari no koro o omoidashita.',
        uz: "Bu hikoyani eshitib, qizim yangi tug'ilgan paytlarni esladim.",
      },
    ],
  },
  {
    id: 'n4_pdf_61_tagaru',
    level: 'N4',
    title: 'たがる (tagaru)',
    romaji: 'tagaru',
    meaningUz: '... qilishni xohlamoq (3-shaxs)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '三浦さんは私の演説に目を通したがっていた。',
        romaji: 'miurasan wa watashi no enzetsu ni me o tooshitagatte ita.',
        uz: "Miura xonim mening nutqimni ko'rib chiqishni xohlayotgan edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_62_tara',
    level: 'N4',
    title: 'たら (tara)',
    romaji: 'tara',
    meaningUz: 'agar ...-sa / ...gach',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'もしあなたがお亡くなりになったら、私も死にます。',
        romaji: 'moshi anata ga onakunari ni nattara, watashi mo shinimasu.',
        uz: "Agar siz olamdan o'tsangiz, men ham yashay olmayman.",
      },
    ],
  },
  {
    id: 'n4_pdf_63_tara_dou',
    level: 'N4',
    title: 'たらどう (tara dou)',
    romaji: 'tara dou',
    meaningUz: "... qilsangiz qanday bo'larkan? (taklif)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'それはネットで調べたらどう？',
        romaji: 'sore wa netto de shirabetara dou.',
        uz: "Buni internetdan izlab ko'rsangiz qanday bo'larkan?",
      },
    ],
  },
  {
    id: 'n4_pdf_64_taritari',
    level: 'N4',
    title: 'たり～たり (tari~tari)',
    romaji: 'tari~tari',
    meaningUz: 'goh ... goh ... qilib (harakatlar)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '友達と一緒にご飯を食べたり話したりするのが楽しかったです。',
        romaji: 'tomodachi to issho ni gohan o tabetari hanashitari suru no ga tanoshikatta desu.',
        uz: "Do'stlarim bilan ovqatlanish va dildan suhbatlashish juda maroqli bo'ldi.",
      },
    ],
  },
  {
    id: 'n4_pdf_65_ta_tokoro',
    level: 'N4',
    title: 'たところ (ta tokoro)',
    romaji: 'ta tokoro',
    meaningUz: 'ayni ... qilgan paytda / endigina ... qilganda',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '高木が、書斎のガラス戸から庭へ出たところだ。',
        romaji: 'takagi ga, shosai no garasuto kara niwa e deta tokoro da.',
        uz: 'Takagi ish xonasining oynali eshigidan hovliga endigina chiqqan edi.',
      },
    ],
  },
  {
    id: 'n4_pdf_66_te_ageru',
    level: 'N4',
    title: 'てあげる (te ageru)',
    romaji: 'te ageru',
    meaningUz: '... qilib bermoq (boshqa shaxsga)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'タクシーを拾ってあげようか？',
        romaji: 'takushii o hirotte ageyou ka.',
        uz: 'Sizga taksi chaqirib beraymi?',
      },
    ],
  },
  {
    id: 'n4_pdf_67_te_aru',
    level: 'N4',
    title: 'てある (te aru)',
    romaji: 'te aru',
    meaningUz: "... qilib qo'yilgan (natijaviy holat)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '何かが骨のなかに差し込んである。',
        romaji: 'nanika ga hone no naka ni sashikonde aru.',
        uz: 'Suyak ichiga biror narsa qistirilgan ekan.',
      },
    ],
  },
  {
    id: 'n4_pdf_68_te_hoshii',
    level: 'N4',
    title: 'てほしい (te hoshii)',
    romaji: 'te hoshii',
    meaningUz: '... qilib berishingizni xohlayman',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '向こうで待っていてほしい。あとから私も行く。',
        romaji: 'mukou de matte ite hoshii. ato kara watashi mo iku.',
        uz: "U yerda meni kutib turishingizni xohlayman. Keyinroq o'zim ham yetib boraman.",
      },
    ],
  },
  {
    id: 'n4_pdf_69_te_iku',
    level: 'N4',
    title: 'ていく (te iku)',
    romaji: 'te iku',
    meaningUz: '... qilib bormoq / ketmoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼はもう一度詫びを述べて、別のドアから出て行った。',
        romaji: 'kare wa mou ichido wabi o nobete, betsu no doa kara dete itta.',
        uz: "U yana bir bor uzr so'rab, narigi eshikdan chiqib ketdi.",
      },
    ],
  },
  {
    id: 'n4_pdf_70_teiru_tokoro',
    level: 'N4',
    title: 'ているところ (teiru tokoro)',
    romaji: 'teiru tokoro',
    meaningUz: 'ayni ... qilayotgan palla',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'どうぞお楽に、ちょうどお茶を淹れているところです。',
        romaji: 'douzo oraku ni, choudo ocha o irete iru tokoro desu.',
        uz: "Bemalol o'tiring, ayni damda choy damlayotgan edim.",
      },
    ],
  },
  {
    id: 'n4_pdf_71_te_ita',
    level: 'N4',
    title: 'ていた (te ita)',
    romaji: 'te ita',
    meaningUz: '... qilayotgan edi (davomiylik)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '真純の眼はじっと地面を見つめていた。',
        romaji: 'masumi no me wa jitto jimen o mitsumete ita.',
        uz: "Masumining ko'zlari yerga qadalib qolgan edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_72_te_itadakemasen_ka',
    level: 'N4',
    title: 'ていただけませんか (te itadakemasen ka)',
    romaji: 'te itadakemasen ka',
    meaningUz: '... qilib bera olmaysizmi? (iltimos)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '手紙ではとても説明できません。どうかお帰りになっていただけませんか？',
        romaji: 'tegami dewa totemo setsumei dekimasen. douka okaeri ni natte itadakemasen ka.',
        uz: "Buni maktub orqali tushuntirib bo'lmaydi. Iltimos, qaytib kelolmaysizmi?",
      },
    ],
  },
  {
    id: 'n4_pdf_73_te_kureru',
    level: 'N4',
    title: 'てくれる (te kureru)',
    romaji: 'te kureru',
    meaningUz: '... qilib bermoq (menga / bizga)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '僕たちのためにいろいろ助けてくれたことは忘れない。',
        romaji: 'bokutachi no tame ni iroiro tasukete kureta koto wa wasurenai.',
        uz: "Biz uchun ko'rsatgan hamma yordamlaringizni aslo unutmaymiz.",
      },
    ],
  },
  {
    id: 'n4_pdf_74_te_kuru',
    level: 'N4',
    title: 'てくる (te kuru)',
    romaji: 'te kuru',
    meaningUz: '... qilib kelmoq / ... boshlamoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '喉が渇いたから飲み物を買ってくる。',
        romaji: 'nodo ga kawaita kara nomimono o katte kuru.',
        uz: 'Tashnaman, shuning uchun biror ichimlik sotib kelaman.',
      },
    ],
  },
  {
    id: 'n4_pdf_75_te_miru',
    level: 'N4',
    title: 'てみる (te miru)',
    romaji: 'te miru',
    meaningUz: "... qilib ko'rmoq (sinab ko'rish)",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ロック・クライミングにも挑戦してみたいです。',
        romaji: 'rokku kuraimingu ni mo chousen shite mitai desu.',
        uz: "Qoyaga tirmashib chiqishni ham sinab ko'rmoqchiman.",
      },
    ],
  },
  {
    id: 'n4_pdf_76_temo',
    level: 'N4',
    title: 'ても (temo)',
    romaji: 'temo',
    meaningUz: "...sa ham / ... bo'lsa ham",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '自分が疲れていても、ひもじくても、わたしを看護して、食べさせてくれたわ。',
        romaji:
          'jibun ga tsukarete ite mo, himojikute mo, watashi o kango shite, tabesasete kureta wa.',
        uz: "O'zi charchagan, hatto och bo'lsa ham, menga qarab ovqatlantirib turardi.",
      },
    ],
  },
  {
    id: 'n4_pdf_77_te_morau',
    level: 'N4',
    title: 'てもらう (te morau)',
    romaji: 'te morau',
    meaningUz: '... qildirib olmoq / qabul qilmoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'あなたに認めてもらいたいんです。わたしとエミリーとの結婚を。',
        romaji: 'anata ni mitomete moraitain desu. watashi to emirii to no kekkon o.',
        uz: 'Mening Emili bilan turmush qurishimga sizning roziligingizni olmoqchiman.',
      },
    ],
  },
  {
    id: 'n4_pdf_78_te_oku',
    level: 'N4',
    title: 'ておく (te oku)',
    romaji: 'te oku',
    meaningUz: "oldindan ... qilib qo'ymoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'この恐ろしい秘密は、われわれ二人の胸中深く秘めておこう。',
        romaji: 'kono osoroshii himitsu wa, wareware futari no kyouchuu bukaku himete okou.',
        uz: "Bu mudhish sirni ikkalamiz qalbimiz tubida saqlab qo'yaylik.",
      },
    ],
  },
  {
    id: 'n4_pdf_79_te_shimau',
    level: 'N4',
    title: 'てしまう (te shimau)',
    romaji: 'te shimau',
    meaningUz: "beixtiyor ... qilib qo'ymoq / butunlay tugatmoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'いったい誰がこの致命的な秘密をあの子に知らせてしまったのか、私どもにはわかりませ',
        romaji:
          'ittai dare ga kono chimeiteki na himitsu o ano ko ni shirasete shimatta no ka, watashidomo ni wa',
        uz: "Bu halokatli sirni bolaga kim aytib qo'yganini biz bilmaymiz.",
      },
    ],
  },
  {
    id: 'n4_pdf_80_te_sumimasen',
    level: 'N4',
    title: 'てすみません (te sumimasen)',
    romaji: 'te sumimasen',
    meaningUz: '... qilganim uchun kechirasiz',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'この件についてだまっていてすみません。',
        romaji: 'kono ken ni tsuite damatte ite sumimasen.',
        uz: "Bu masala haqida oldinroq aytmaganim uchun uzr so'rayman.",
      },
    ],
  },
  {
    id: 'n4_pdf_81_te_yokatta',
    level: 'N4',
    title: 'てよかった (te yokatta)',
    romaji: 'te yokatta',
    meaningUz: "... qilganim yaxshi bo'ldi / xursandman",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'あなたが早めに席を予約してくれてよかった。',
        romaji: 'anata ga hayame ni seki o yoyaku shite kurete yokatta.',
        uz: "Joyimizni oldindan band qilib qo'yganingiz qanday yaxshi bo'ldi.",
      },
    ],
  },
  {
    id: 'n4_pdf_82_to',
    level: 'N4',
    title: '〜と [Shart / Natija] (to - if, when)',
    romaji: 'to',
    meaningUz: '...-ganda / ... bilanoq (tabiiy oqibat)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'この手紙を朗読すると、詩的に聞こえませんか？',
        romaji: 'kono tegami o roudoku suru to, shiteki ni kikoemasen ka.',
        uz: "Bu xatni ovoz chiqarib o'qiganingizda, u she'riy jaranglamayaptimi?",
      },
    ],
  },
  {
    id: 'n4_pdf_83_toto_dochira_ga',
    level: 'N4',
    title: 'と～と、どちらが (to~to, dochira ga)',
    romaji: 'to~to, dochira ga',
    meaningUz: '... bilan ...dan qaysi biri?',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '日本語と英語とどちらが難しいですか。',
        romaji: 'nihongo to eigo to dochira ga muzukashii desu ka.',
        uz: 'Yapon tili bilan ingliz tilidan qaysi biri qiyinroq?',
      },
    ],
  },
  {
    id: 'n4_pdf_84_to_iu_koto',
    level: 'N4',
    title: 'ということ (to iu koto)',
    romaji: 'to iu koto',
    meaningUz: '... ekanligi (fakt / voqelik)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼が金持だということが一般に知れ渡る。',
        romaji: 'kare ga kanemochi da to iu koto ga ippan ni shirewataru.',
        uz: "Uning juda badavlat ekanligi hammaga ma'lum bo'ldi.",
      },
    ],
  },
  {
    id: 'n4_pdf_85_to_itte_mo_ii',
    level: 'N4',
    title: 'と言ってもいい (to itte mo ii)',
    romaji: 'to itte mo ii',
    meaningUz: "... desa ham bo'ladi",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'そんな事は、ほとんど不可能といってもいいが…',
        romaji: 'sonna koto wa, hotondo fukanou to itte mo ii ga.',
        uz: "Bunday narsani deyarli imkonsiz desa ham bo'ladi, biroq...",
      },
    ],
  },
  {
    id: 'n4_pdf_86_to_iwarete_iru',
    level: 'N4',
    title: 'と言われている (to iwarete iru)',
    romaji: 'to iwarete iru',
    meaningUz: '... deb aytishadi / aytiladi',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ベーカー通りにあるその古い屋敷には、よく幽霊が出ると言われている。',
        romaji: 'beekaa doori ni aru sono furui yashiki ni wa, yoku yuurei ga deru to iwarete iru.',
        uz: "Beyker ko'chasidagi eski saroyda tez-tez sharpalar ko'rinadi deb aytishadi.",
      },
    ],
  },
  {
    id: 'n4_pdf_87_toka__toka',
    level: 'N4',
    title: 'とか～とか (toka ~ toka)',
    romaji: 'toka ~ toka',
    meaningUz: '... kabi, ... kabi (misollar)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '右とか左とかっていうのはよくわからなくなるもんですよ。',
        romaji: 'migi toka hidari toka tte iu no wa yoku wakaranaku naru mon desu yo.',
        uz: "O'ng yoki chap kabi tushunchalarda inson adashib ketishi mumkin.",
      },
    ],
  },
  {
    id: 'n4_pdf_88_toki',
    level: 'N4',
    title: 'とき (toki)',
    romaji: 'toki',
    meaningUz: '... paytda / vaqtda',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'じつは私もここに初めて入ったときには、同じことを考えましたよ。',
        romaji:
          'jitsu wa watashi mo koko ni hajimete haitta toki ni wa, onaji koto o kangaemashita yo.',
        uz: "Rostini aytsam, men ham bu yerga ilk bor kelganimda xuddi shu narsani o'ylagan edim.",
      },
    ],
  },
  {
    id: 'n4_pdf_89_to_kiita',
    level: 'N4',
    title: 'と聞いた (to kiita)',
    romaji: 'to kiita',
    meaningUz: '... deb eshitgan edim',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'たしかあなたはずっと独身だと聞きましたが…',
        romaji: 'tashika anata wa zutto dokushin da to kikimashita ga.',
        uz: "Adashmasam, sizni hali ham bo'ydoq deb eshitgan edim...",
      },
    ],
  },
  {
    id: 'n4_pdf_90_tokoro',
    level: 'N4',
    title: 'ところ (tokoro)',
    romaji: 'tokoro',
    meaningUz: 'ayni ... qilayotgan / qilish arafasidagi dam',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '私たちはもうすぐ到着するところです。',
        romaji: 'watashitachi wa mou sugu touchaku suru tokoro desu.',
        uz: 'Biz hozir yetib borish arafasidamiz.',
      },
    ],
  },
  {
    id: 'n4_pdf_91_to_mieru',
    level: 'N4',
    title: 'と見える (to mieru)',
    romaji: 'to mieru',
    meaningUz: "...dek ko'rinadi / seziladi",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '彼女のひどい仕打ちは、よっぽど深い印象をあなたの心にあたえたとみえるわ！',
        romaji:
          'kanojo no hidoi shiuchi wa, yoppodo fukai inshou o anata no kokoro ni ataeta to mieru wa.',
        uz: "Uning bu qilmishi qalbingizga g'oyat chuqur asorat qoldirgandek ko'rinadi!",
      },
    ],
  },
  {
    id: 'n4_pdf_92_to_omou',
    level: 'N4',
    title: 'と思う (to omou)',
    romaji: 'to omou',
    meaningUz: "... deb o'ylayman",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'オリンピックの後、いろんなことがぐんとよくなったと思う。',
        romaji: 'orinpikku no ato, iron na koto ga gun to yoku natta to omou.',
        uz: "Olimpiadadan so'ng ko'p ishlar ancha yaxshilandi deb o'ylayman.",
      },
    ],
  },
  {
    id: 'n4_pdf_93_tsuzukeru',
    level: 'N4',
    title: '続ける (tsuzukeru)',
    romaji: 'tsuzukeru',
    meaningUz: '... qilishda davom etmoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '銃弾が重いドアノブをなおもたたきつづけている。',
        romaji: 'juudan ga omoi doanobu o nao mo tatakitsudzukete iru.',
        uz: "O'qlar hamon og'ir eshik tutqichiga tinimsiz urilishda davom etmoqda.",
      },
    ],
  },
  {
    id: 'n4_pdf_94_yasui',
    level: 'N4',
    title: 'やすい (yasui)',
    romaji: 'yasui',
    meaningUz: '... qilish oson / qulay',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'お互いへの信頼があれば、取引はずっと進めやすくなる。',
        romaji: 'otagai e no shinrai ga areba, torihiki wa zutto susumeyasuku naru.',
        uz: "O'zaro ishonch bo'lsa, kelishuvlarni olib borish ancha osonlashadi.",
      },
    ],
  },
  {
    id: 'n4_pdf_95_yori',
    level: 'N4',
    title: '〜より [Qiyoslash] (yori - than)',
    romaji: 'yori',
    meaningUz: "...-dan ko'ra / nisbatan",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'とても内気だったけど、芯はわたしよりずっと強い人だった。',
        romaji: 'totemo uchiki datta kedo, shin wa watashi yori zutto tsuyoi hito datta.',
        uz: "U juda tortinchoq bo'lsa-da, ichki ruhiyati mendan ko'ra ancha baquvvat inson edi.",
      },
    ],
  },
  {
    id: 'n4_pdf_96_yotei_da',
    level: 'N4',
    title: '予定だ (yotei da)',
    romaji: 'yotei da',
    meaningUz: '... qilish rejalashtirilgan',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '今日、午前八時に飛行機で長野を出発する予定だ。',
        romaji: 'kyou, gozen hachiji ni hikouki de nagano o shuppatsu suru yotei da.',
        uz: "Bugun ertalab soat sakkizda samolyotda Naganodan jo'nab ketish rejalashtirilgan.",
      },
    ],
  },
  {
    id: 'n4_pdf_97_you_da',
    level: 'N4',
    title: 'ようだ (you da)',
    romaji: 'you da',
    meaningUz: "...dek ko'rinadi / ...ga o'xshaydi",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'いまの彼は審判を待つ罪人のようだ。',
        romaji: 'ima no kare wa shinpan o matsu zainin no you da.',
        uz: "Hozir u sud hukmini kutayotgan aybdorga o'xshaydi.",
      },
    ],
  },
  {
    id: 'n4_pdf_98_you_niyou_na',
    level: 'N4',
    title: 'ように/ような (you ni/you na)',
    romaji: 'you ni/you na',
    meaningUz: '... kabi / ...dek',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '栄介は逃げるようにして町を出ていった。',
        romaji: 'eisuke wa nigeru you ni shite machi o dete itta.',
        uz: 'Eysuke shahardan xuddi qochib ketayotgandek chiqib ketdi.',
      },
    ],
  },
  {
    id: 'n4_pdf_99_you_ni_naru',
    level: 'N4',
    title: 'ようになる (you ni naru)',
    romaji: 'you ni naru',
    meaningUz: "... qiladigan bo'lib qolmoq / o'rganmoq",
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '最近では、不愉快な思いはうまく頭から締め出せるようになった。',
        romaji: 'saikin de wa, fuyukai na omoi wa umaku atama kara shimedaseru you ni natta.',
        uz: "So'nggi paytlarda ko'ngilsiz o'y-xayollarni miyamdan chiqarib tashlashni yaxshi o'zlashtirib oldim.",
      },
    ],
  },
  {
    id: 'n4_pdf_100_you_ni_suru',
    level: 'N4',
    title: 'ようにする (you ni suru)',
    romaji: 'you ni suru',
    meaningUz: '... qilishga intilmoq / odat qilmoq',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'このプロジェクト、私に担当させてください。期待に沿うようにします。',
        romaji: 'kono purojekuto, watashi ni tantou sasete kudasai. kitai ni sou you ni shimasu.',
        uz: "Bu loyihani menga topshiring. Ishonchingizni to'liq oqlashga harakat qilaman.",
      },
    ],
  },
  {
    id: 'n4_pdf_101_you_to_omou',
    level: 'N4',
    title: 'ようと思う (you to omou)',
    romaji: 'you to omou',
    meaningUz: '... qilmoqchiman / niyatdaman',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: '明日、ランチのあとで天文学の本を買おうと思う。',
        romaji: 'ashita, ranchi no ato de tenmongaku no hon o kaou to omou.',
        uz: "Ertaga tushlikdan so'ng astronomiya kitobini sotib olmoqchiman.",
      },
    ],
  },
  {
    id: 'n4_pdf_102_zenzen',
    level: 'N4',
    title: '全然 (zenzen)',
    romaji: 'zenzen',
    meaningUz: 'umuman / aslo ... emas (inkor bilan)',
    structure: 'JLPT N4 Grammatika qoidasi',
    examples: [
      {
        ja: 'ちょっと待ってくれ、ぼくには、そんなことはぜんぜん理解できないよ。',
        romaji: 'chotto matte kure, boku ni wa, sonna koto wa zenzen rikai dekinai yo.',
        uz: "Biroz to'xtab turing, men bunday gaplarni umuman tushuna olmayapman.",
      },
    ],
  },
  {
    id: 'n3_mimi_1',
    level: 'N3',
    title: '〜うちに (uchi ni)',
    romaji: 'uchi ni',
    meaningUz: "fursat borida / ... bo'layotganida sezmay",
    structure: "Fe'l (Lug'at/Nai) / Sifat / Ot + の + うちに",
    examples: [
      {
        ja: '若[わか]いうちにいろいろな経験[けいけん]をしなさい。',
        romaji: 'Wakai uchi ni iroiro na keiken wo shinasai.',
        uz: "Yoshlik fursati borida ko'p tajriba orttir.",
      },
    ],
  },
  {
    id: 'n3_mimi_2',
    level: 'N3',
    title: '〜際（に） (sai ni)',
    romaji: 'sai ni',
    meaningUz: "... paytida / ... bo'lganda (Rasmiy)",
    structure: "Fe'l (Lug'at/Ta) / Ot + の + 際（に）",
    examples: [
      {
        ja: 'お降[お]りの際[さい]は足元[あしもと]にご注意[ちゅうい]ください。',
        romaji: 'Oori no sai wa ashimoto ni gochuui kudasai.',
        uz: "Poyezddan tushayotganda oyog'ingiz ostiga ehtiyot bo'ling.",
      },
    ],
  },
  {
    id: 'n3_mimi_3',
    level: 'N3',
    title: '〜たとたん（に） (ta totan ni)',
    romaji: 'ta totan ni',
    meaningUz: '... qilgan zahotiyoq (Kutilmagan harakat)',
    structure: "Fe'l (Ta-form) + とたん（に）",
    examples: [
      {
        ja: '窓[まど]を開[あ]けたとたん、強[つよ]い風[かぜ]が入[はい]ってきた。',
        romaji: 'Mado wo aketa totan, tsuyoi kaze ga haitte kita.',
        uz: 'Oynani ochgan zahotim kuchli shamol kirib keldi.',
      },
    ],
  },
  {
    id: 'n3_mimi_4',
    level: 'N3',
    title: '〜かと思うと (ka to omou to)',
    romaji: 'ka to omou to',
    meaningUz: '...-di hamki, ketidanoq ...',
    structure: "Fe'l (Ta-form) + かと思うと / かと思ったら",
    examples: [
      {
        ja: '空[そら]が暗[くら]くなったかと思うと、雨[あめ]が降[ふ]り出[だ]した。',
        romaji: 'Sora ga kuraku natta ka to omou to, ame ga furidashita.',
        uz: "Osmon qorong'ulashdi hamki, yomg'ir yog'a boshladi.",
      },
    ],
  },
  {
    id: 'n3_mimi_5',
    level: 'N3',
    title: '〜か〜ないかのうちに (ka ... nai ka no uchi ni)',
    romaji: 'ka ... nai ka no uchi ni',
    meaningUz: "... tugadimi-yo'qmi ketidanoq",
    structure: "Fe'l (Lug'at) + か + Fe'l (Nai) + かのうちに",
    examples: [
      {
        ja: '授業[じゅぎょう]が終わ[お]わるか終わらないかのうちに教室[きょうしつ]を出[で]た。',
        romaji: 'Jugyou ga owaru ka owaranai ka no uchi ni kyoushitsu wo deta.',
        uz: "Dars tugadimi-yo'qmi xonadan chiqib ketdim.",
      },
    ],
  },
  {
    id: 'n3_mimi_6',
    level: 'N3',
    title: '〜最中に (saichuu ni)',
    romaji: 'saichuu ni',
    meaningUz: "... ayni qizg'in pallasida",
    structure: "Fe'l (Te-iru) / Ot + の + 最中に",
    examples: [
      {
        ja: '会議[かいぎ]の最中[さいちゅう]に携帯[けいたい]が鳴[な]った。',
        romaji: 'Kaigi no saichuu ni keitai ga natta.',
        uz: 'Majlisning ayni pallasida telefon jiringladi.',
      },
    ],
  },
  {
    id: 'n3_mimi_7',
    level: 'N3',
    title: '〜ばかりだ・〜一方だ (bakari da / ippou da)',
    romaji: 'bakari da / ippou da',
    meaningUz: "faqat ... tomonga o'zgarib boryapti (Salbiy/Surunkali)",
    structure: "Fe'l (Lug'at shakli) + ばかりだ / 一方だ",
    examples: [
      {
        ja: '物価[ぶっか]は上[あ]がる一方[いっぽう]だ。',
        romaji: 'Bukka wa agaru ippou da.',
        uz: "Narx-navo faqat ko'tarilib boryapti.",
      },
    ],
  },
  {
    id: 'n3_mimi_8',
    level: 'N3',
    title: '〜（よう）としている ((you) to shite iru)',
    romaji: '(you) to shite iru',
    meaningUz: "ayni ... qilish arafasida / ... qilmoqchi bo'lyapti",
    structure: "Fe'l (Iroda shakli) + としている",
    examples: [
      {
        ja: '太陽[たいよう]が沈[しず]もうとしている。',
        romaji: 'Taiyou ga shizumou to shite iru.',
        uz: 'Quyosh botay boryapti.',
      },
    ],
  },
  {
    id: 'n3_mimi_9',
    level: 'N3',
    title: '〜つつある (tsutsu aru)',
    romaji: 'tsutsu aru',
    meaningUz: '... borgan sari rivojlanmoqda (Rasmiy jarayon)',
    structure: "Fe'l (Masu-ildiz) + つつある",
    examples: [
      {
        ja: '景気[けいき]は回復[かいふく]しつつある。',
        romaji: 'Keiki wa kaifuku shitsutsu aru.',
        uz: 'Iqtisodiyot qayta tiklanib bormoqda.',
      },
    ],
  },
  {
    id: 'n3_mimi_10',
    level: 'N3',
    title: '〜つつ (tsutsu)',
    romaji: 'tsutsu',
    meaningUz: '... qilgan holda / ... qila turib (Bir vaqtda)',
    structure: "Fe'l (Masu-ildiz) + つつ",
    examples: [
      {
        ja: '将来[しょうらい]の事[こと]を考[かんが]えつつ進路[しんろ]を決[き]める。',
        romaji: 'Shourai no koto wo kangaetsutsu shinro wo kimeru.',
        uz: "Kelajakni o'ylagan holda yo'nalishni tanlayman.",
      },
    ],
  },
  {
    id: 'n3_mimi_11',
    level: 'N3',
    title: '〜てはじめて (te hajimete)',
    romaji: 'te hajimete',
    meaningUz: '... qilgandan keyingina (Tushunib yetmoq)',
    structure: "Fe'l (Te-form) + はじめて",
    examples: [
      {
        ja: '病気[びょうき]になってはじめて健康[けんこう]の有難[ありがた]さを知[し]った。',
        romaji: 'Byouki ni natte hajimete kenkou no arigatasa wo shitta.',
        uz: "Kasal bo'lgachgina sog'liqning qadrini bildim.",
      },
    ],
  },
  {
    id: 'n3_mimi_12',
    level: 'N3',
    title: '〜上で (ue de)',
    romaji: 'ue de',
    meaningUz: "... qilgandan so'nggina / ... asosida",
    structure: "Fe'l (Ta-form) / Ot + の + 上で",
    examples: [
      {
        ja: '家族[かぞく]と相談[そうだん]した上で決[き]めます。',
        romaji: 'Kazoku to soudan shita ue de kimemasu.',
        uz: 'Oila bilan maslahatlashgach qaror qilaman.',
      },
    ],
  },
  {
    id: 'n3_mimi_13',
    level: 'N3',
    title: '〜次第 (shidai)',
    romaji: 'shidai',
    meaningUz: "... bo'lishi bilanoq (Kelasi zamonda)",
    structure: "Fe'l (Masu-ildiz) / Ot + 次第",
    examples: [
      {
        ja: '着[つ]き次第[しだい]、連絡[れんらく]します。',
        romaji: 'Tsuki shidai, renraku shimasu.',
        uz: "Etib borishim bilanoq bog'lanaman.",
      },
    ],
  },
  {
    id: 'n3_mimi_14',
    level: 'N3',
    title: '〜以来 (irai)',
    romaji: 'irai',
    meaningUz: '... berli / ... vaqtdan beri uzluksiz',
    structure: "Fe'l (Te-form) / Ot + 以来",
    examples: [
      {
        ja: '日本[にほん]に来[き]て以来[いらい]、毎日[まいにち]日本語[にほんご]を勉強[べんきょう]している。',
        romaji: 'Nihon ni kite irai, mainichi Nihongo wo benkyou shite iru.',
        uz: 'Yaponiyaga kelganimdan beri har kuni dars qilyapman.',
      },
    ],
  },
  {
    id: 'n3_mimi_15',
    level: 'N3',
    title: '〜てからでないと (te kara de nai to)',
    romaji: 'te kara de nai to',
    meaningUz: '... qilmagunimcha ... qila olmayman',
    structure: "Fe'l (Te-form) + からでないと / からでなければ",
    examples: [
      {
        ja: '許可[きょか]をもらってからでないと入[はい]れない。',
        romaji: 'Kyoka wo moratte kara de nai to hairenai.',
        uz: 'Ruxsat olmagunimcha kira olmayman.',
      },
    ],
  },
  {
    id: 'n3_mimi_16',
    level: 'N3',
    title: '〜をはじめ（として） (wo hajime to shite)',
    romaji: 'wo hajime to shite',
    meaningUz: '...-ni boshda tutgan holda / ... boshchiligida',
    structure: 'Ot + をはじめ / をはじめとする + Ot',
    examples: [
      {
        ja: '社長[しゃちょう]をはじめ、全社員[ぜんしゃいん]が参加[さんか]した。',
        romaji: 'Shachou wo hajime, zenshaiin ga sanka shita.',
        uz: 'Prezident boshchiligida barcha xodimlar qatnashdi.',
      },
    ],
  },
  {
    id: 'n3_mimi_17',
    level: 'N3',
    title: '〜から〜にかけて (kara ... ni kakete)',
    romaji: 'kara ... ni kakete',
    meaningUz: '...-dan ...-gacha (Taxminiy qamrov)',
    structure: 'Ot1 + から + Ot2 + にかけて',
    examples: [
      {
        ja: '昨夜[さくや]から今朝[けさ]にかけて大雨[おおあめ]が降[ふ]った。',
        romaji: 'Sakuya kara kesa ni kakete ookame ga futta.',
        uz: "Kechadan ertalabgacha kuchli yomg'ir yog'di.",
      },
    ],
  },
  {
    id: 'n3_mimi_18',
    level: 'N3',
    title: '〜にわたって (ni watatte)',
    romaji: 'ni watatte',
    meaningUz: "... bo'yi / ... davomida keng qamrovda",
    structure: 'Ot + にわたって / にわたる + Ot',
    examples: [
      {
        ja: '3時間[さんじかん]にわたって議論[ぎろん]が続[つづ]いた。',
        romaji: 'San-jikan ni watatte giron ga tsudukita.',
        uz: '3 soat davomida bahs-munozara davom etdi.',
      },
    ],
  },
  {
    id: 'n3_mimi_19',
    level: 'N3',
    title: '〜を通じて・〜を通して (wo tsuujite / wo tooshite)',
    romaji: 'wo tsuujite / wo tooshite',
    meaningUz: "... orqali / ... vositasida / ... bo'yi",
    structure: 'Ot + を通じて / を通して',
    examples: [
      {
        ja: '友人[ゆうじん]を通じて彼[かれ]と知[し]り合[あ]った。',
        romaji: 'Yuujin wo tsuujite kare to shiriatta.',
        uz: "Do'stim orqali u bilan tanishdim.",
      },
    ],
  },
  {
    id: 'n3_mimi_20',
    level: 'N3',
    title: '〜に限る (ni kagiru)',
    romaji: 'ni kagiru',
    meaningUz: "... eng yaxshisi! / ...-dan zori yo'q",
    structure: "Fe'l (Lug'at) / Ot + に限る",
    examples: [
      {
        ja: '暑[あつ]い日[ひ]は冷[つめ]たいアイスを食[た]べるに限[かぎ]る。',
        romaji: 'Atsui hi wa tsumetai aisu wo taberu ni kagiru.',
        uz: "Issiq kunda muzqaymoq yeyishga tengi yo'q.",
      },
    ],
  },
  {
    id: 'n3_mimi_21',
    level: 'N3',
    title: '〜に限って (ni kagitte)',
    romaji: 'ni kagitte',
    meaningUz: 'aynan ... kuni / aynan shu insonga kelganda',
    structure: 'Ot + に限って',
    examples: [
      {
        ja: '傘[かさ]を持[も]っていない日[ひ]に限[かぎ]って雨[あめ]が降[ふ]る。',
        romaji: 'Kasa wo motte inai hi ni kagitte ame ga kuru.',
        uz: "Aynan soyabonim yo'q kunda yomg'ir yog'adi.",
      },
    ],
  },
  {
    id: 'n3_mimi_22',
    level: 'N3',
    title: '〜において・〜における (ni oite / ni okeru)',
    romaji: 'ni oite',
    meaningUz: "...-da / ... joyida (Rasmiy voqea o'rni)",
    structure: 'Ot + において / における + Ot',
    examples: [
      {
        ja: '東京[とうきょう]においてオリンピックが開催[かいさい]された。',
        romaji: 'Toukyou ni oite orinpikku ga kaisai sareta.',
        uz: "Tokioda Olimpiada o'tkazildi.",
      },
    ],
  },
  {
    id: 'n3_mimi_23',
    level: 'N3',
    title: '〜に基づいて (ni motodsuite)',
    romaji: 'ni motodsuite',
    meaningUz: '... asosida / ...-ga tayanib',
    structure: 'Ot + に基づいて / に基づく + Ot',
    examples: [
      {
        ja: '調査[ちょうさ]結果[けっか]に基づいて報告[ほうこく]書[しょ]を作成[さくせい]する。',
        romaji: 'Chousa kekka ni motodsuite houkokusho wo sakusei suru.',
        uz: 'Tadqiqot natijalari asosida hisobot tuziladi.',
      },
    ],
  },
  {
    id: 'n3_mimi_24',
    level: 'N3',
    title: '〜のもとで・〜のもとに (no moto de)',
    romaji: 'no moto de',
    meaningUz: '... rahbarligida / ... soyasida',
    structure: 'Ot + のもとで / のもとに',
    examples: [
      {
        ja: '素晴[すば]らしい先生[せんせい]のもとで勉強[べんきょう]できて幸[さいわ]いだ。',
        romaji: 'Subarashii sensei no moto de benkyou dekite saiwai da.',
        uz: "Ajoyib ustoz qo'lida tahsil olganimdan baxtiyorman.",
      },
    ],
  },
  {
    id: 'n3_mimi_25',
    level: 'N3',
    title: '〜をめぐって (wo megutte)',
    romaji: 'wo megutte',
    meaningUz: '... atrofida / ... ustida bahslashish',
    structure: 'Ot + をめぐって / をめぐる + Ot',
    examples: [
      {
        ja: '遺産[いさん]をめぐって親族[しんぞく]が争[あらそ]っている。',
        romaji: 'Isan wo megutte shinzoku ga arasotte iru.',
        uz: 'Meros ustida qarindoshlar tortishmoqda.',
      },
    ],
  },
  {
    id: 'n3_mimi_26',
    level: 'N3',
    title: '〜わけだ (wake da)',
    romaji: 'wake da',
    meaningUz: "demak ... bo'lganligi mantiqiy xulosa",
    structure: "Fe'l/Sifat/Ot (Plain) + わけだ",
    examples: [
      {
        ja: '寒[さむ]いわけだ。雪[ゆき]が降[ふ]っている。',
        romaji: 'Samui wake da. Yuki ga futte iru.',
        uz: "Demak shuning uchun sovuq ekan. Qor yog'yapti.",
      },
    ],
  },
  {
    id: 'n3_mimi_27',
    level: 'N3',
    title: '〜わけがない (wake ga nai)',
    romaji: 'wake ga nai',
    meaningUz: "bo'lishi umuman mumkin emas",
    structure: "Fe'l/Sifat/Ot + わけがない",
    examples: [
      {
        ja: '彼[かれ]がそんな悪口[わるくち]を言[い]うわけがない。',
        romaji: 'Kare ga sonna warukuchi wo iu wake ga nai.',
        uz: 'U kishi bunday yomon gapi berishi mumkin emas.',
      },
    ],
  },
  {
    id: 'n3_mimi_28',
    level: 'N3',
    title: '〜わけではない (wake de wa nai)',
    romaji: 'wake de wa nai',
    meaningUz: '... degani emas (Qisman inkor)',
    structure: "Fe'l/Sifat/Ot + わけではない",
    examples: [
      {
        ja: '嫌[きら]いなわけではないが、食[た]べたくない。',
        romaji: 'Kirai na wake de wa nai ga, tabetakunai.',
        uz: "Yomon ko'raman degani emas, shunchaki yegim yo'q.",
      },
    ],
  },
  {
    id: 'n3_mimi_29',
    level: 'N3',
    title: '〜わけにはいかない (wake ni wa ikanai)',
    romaji: 'wake ni wa ikanai',
    meaningUz: "axloq / vijdon yo'l qo'ymaydi",
    structure: "Fe'l (Lug'at/Nai) + わけにはいかない",
    examples: [
      {
        ja: '大切[たいせつ]な会議[かいぎ]だから休[やす]むわけにはいかない。',
        romaji: 'Taisetsu na kaigi dakara yasumu wake ni wa ikanai.',
        uz: "Muhim majlis bo'lgani uchun qolishimga haqqim yo'q.",
      },
    ],
  },
  {
    id: 'n3_mimi_30',
    level: 'N3',
    title: '〜かいがあって (kai ga atte)',
    romaji: 'kai ga atte',
    meaningUz: "harakat qilganimga arziydigan natija bo'ldi",
    structure: "Fe'l (Ta) / Ot + の + かいがあって",
    examples: [
      {
        ja: '努力[どりょく]したかいがあって、試験[しけん]に合格[ごうかく]した。',
        romaji: 'Doryoku shita kai ga atte, shiken ni goukaku shita.',
        uz: "Harakat qilganimga arziydi, imtihondan o'tdim.",
      },
    ],
  },
  {
    id: 'n3_mimi_31',
    level: 'N3',
    title: '〜かいもなく (kai mo naku)',
    romaji: 'kai mo naku',
    meaningUz: 'shuncha harakat qilganimga qaramay (Afsus)',
    structure: "Fe'l (Ta) / Ot + の + かいもなく",
    examples: [
      {
        ja: '手術[しゅじゅつ]のかいもなく、愛犬[あいけん]が死[し]んでしまった。',
        romaji: 'Shujutsu no kai mo naku, aiken ga shinde shimatta.',
        uz: "Operatsiya qilinganiga qaramay, itim o'lib qoldi.",
      },
      {
        ja: '努力[どりょく]のかいもなく、不合格[ふごうかく]だった。',
        romaji: 'Doryoku no kai mo naku, fugoukaku datta.',
        uz: 'Shuncha harakat qilganiga qaramay yiqildi.',
      },
    ],
  },
  {
    id: 'n3_mimi_32',
    level: 'N3',
    title: '〜がい (gai)',
    romaji: 'gai',
    meaningUz: '... qilish maroqli / munosib',
    structure: "Fe'l (Masu-ildiz) + がい",
    examples: [
      {
        ja: 'やりがいのある仕事[しごと]を探[さが]している。',
        romaji: 'Yarigai no aru shigoto wo sagashite iru.',
        uz: "Bajarish maroqli bo'lgan ish izlayapman.",
      },
    ],
  },
  {
    id: 'n3_mimi_33',
    level: 'N3',
    title: '〜てまで (te made)',
    romaji: 'te made',
    meaningUz: 'hatto ... darajagacha borib (Haddan tashqari)',
    structure: "Fe'l (Te-form) + まで / までして",
    examples: [
      {
        ja: '借金[しゃっきん]をしてまで高[たか]い車[くるま]を買[か]いたくない。',
        romaji: 'Shakkin wo shite made takai kuruma wo kaitakunai.',
        uz: "Qarz olib bo'lsa ham qimmat mashina olgim yo'q.",
      },
    ],
  },
  {
    id: 'n3_mimi_34',
    level: 'N3',
    title: '〜切る・〜切れる (kiru / kireru)',
    romaji: 'kiru / kireru',
    meaningUz: "to'liq va oxirigacha yetkazmoq",
    structure: "Fe'l (Masu-ildiz) + 切る",
    examples: [
      {
        ja: '長[なが]いマラソンを走[はし]り切[き]った。',
        romaji: 'Nagai marason wo hashirikirtta.',
        uz: "Uzun marafonni oxirigacha yugurib o'tdim.",
      },
    ],
  },
  {
    id: 'n3_mimi_35',
    level: 'N3',
    title: '〜切れない (kirenai)',
    romaji: 'kirenai',
    meaningUz: "oxirigacha yetkaza olmaslik / ko'pligidan ulgurmaslik",
    structure: "Fe'l (Masu-ildiz) + 切れない",
    examples: [
      {
        ja: 'ご飯[はん]が多[おお]すぎて食[た]べきれない。',
        romaji: 'Gohan ga oosugite tabekirenai.',
        uz: "Ovqat juda ko'pligidan oxirigacha yeyolmayman.",
      },
    ],
  },
  {
    id: 'n3_mimi_36',
    level: 'N3',
    title: '〜抜く (nuku)',
    romaji: 'nuku',
    meaningUz: 'barcha qiyinchiliklarga chidab oxirigacha yetkazmoq',
    structure: "Fe'l (Masu-ildiz) + 抜く",
    examples: [
      {
        ja: '最後[さいご]まで戦[たたか]い抜[ぬ]く。',
        romaji: 'Saigo made tatakainuku.',
        uz: 'Oxirgi minutgacha qiyinchilikka chidab kurashaman.',
      },
    ],
  },
  {
    id: 'n3_mimi_37',
    level: 'N3',
    title: '〜得る・〜得ない (eru / enai)',
    romaji: 'eru / enai',
    meaningUz: "... bo'lishi mantiqan mumkin / imkonsiz",
    structure: "Fe me'yoriy Masu-ildiz + 得る / 得ない",
    examples: [
      {
        ja: '事故[じこ]はいつでも起[お]こり得る。',
        romaji: 'Jiko wa itsudemo okorieru.',
        uz: "Avariya har qanday vaqtda sodir bo'lishi mumkin.",
      },
    ],
  },
  {
    id: 'n3_mimi_38',
    level: 'N3',
    title: '〜かねる (kaneru)',
    romaji: 'kaneru',
    meaningUz: '... qilishga ojizman / rad etish (Xushmuomala)',
    structure: "Fe'l (Masu-ildiz) + かねる",
    examples: [
      {
        ja: 'その質問[しつもん]にはお答[こた]えしかねます。',
        romaji: 'Sono shitsumon ni wa okotaeshikanemasu.',
        uz: 'Ushbu savolga javob bera olmayman.',
      },
    ],
  },
  {
    id: 'n3_mimi_39',
    level: 'N3',
    title: '〜かねない (kanenai)',
    romaji: 'kanenai',
    meaningUz: "... kabi yomon xavf bo'lishi mumkin",
    structure: "Fe'l (Masu-ildiz) + かねない",
    examples: [
      {
        ja: 'このままでは事故[じこ]が起[お]こりかねない。',
        romaji: 'Kono mama de wa jiko ga okorikanenai.',
        uz: "Bunday ketaversa avariya sodir bo'lishi xavfi bor.",
      },
    ],
  },
  {
    id: 'n3_mimi_40',
    level: 'N3',
    title: '〜に決まっている (ni kimatte iru)',
    romaji: 'ni kimatte iru',
    meaningUz: "shubhasiz ... bo'ladi / aniq-ku!",
    structure: "Fe'l/Sifat/Ot + に決まっている",
    examples: [
      {
        ja: '彼[かれ]が勝[か]つに決[き]まっている。',
        romaji: 'Kare ga katsu ni kimatte iru.',
        uz: "U g'olib bo'lishi aniq-ku!",
      },
    ],
  },
  {
    id: 'n3_mimi_41',
    level: 'N3',
    title: '〜に相違ない (ni souinai)',
    romaji: 'ni souinai',
    meaningUz: "hech qanday shubha yo'q (Rasmiy)",
    structure: "Fe'l/Sifat/Ot + に相違ない",
    examples: [
      {
        ja: '犯人[はんにん]は彼[かれ]に相違[そうい]ない。',
        romaji: 'Hannin wa kare ni souinai.',
        uz: "Jinoyatchi u ekanligiga shubha yo'q.",
      },
    ],
  },
  {
    id: 'n3_mimi_42',
    level: 'N3',
    title: '〜に違いない (ni chigai nai)',
    romaji: 'ni chigai nai',
    meaningUz: "aniq ... bo'lsa kerak",
    structure: "Fe'l/Sifat/Ot + に違いない",
    examples: [
      {
        ja: '彼[かれ]が努力[どりょく]したから合格[ごうかく]したに違[ちが]いない。',
        romaji: 'Kare ga doryoku shita kara goukaku shita ni chigai nai.',
        uz: "U harakat qilgani uchun imtihondan o'tganiga shubha yo'q.",
      },
    ],
  },
  {
    id: 'n3_mimi_43',
    level: 'N3',
    title: '〜はずだ (hazu da)',
    romaji: 'hazu da',
    meaningUz: "... bo me'yoriy kutilma bo'yicha shunday bo'lishi kerak",
    structure: "Fe'l/Sifat/Ot + はずだ",
    examples: [
      {
        ja: '彼[かれ]はもう着[つ]いたはずだ。',
        romaji: 'Kare wa mou tsuita hazu da.',
        uz: "U allaqachon yetib kelgan bo'lishi kerak.",
      },
    ],
  },
  {
    id: 'n3_mimi_44',
    level: 'N3',
    title: '〜っこない (kkonai)',
    romaji: 'kkonai',
    meaningUz: "umuman bajarib bo'lmaydi (Ogzaki inkor)",
    structure: "Fe'l (Masu-ildiz) + っこない",
    examples: [
      {
        ja: '一日[いちにち]でこの本[ほん]を全部[ぜんぶ]読[よ]めっこない。',
        romaji: 'Ichinichi de kono hon wo zenbu yomekkonai.',
        uz: "Bir kunda bu kitobni o'qib tugatib bo'lmaydi.",
      },
    ],
  },
  {
    id: 'n3_mimi_45',
    level: 'N3',
    title: '〜てたまらない (te tamaranai)',
    romaji: 'te tamaranai',
    meaningUz: "...-likdan chidab bo'lmayapti (Jismoniy/Ruhiy)",
    structure: "Fe'l/Sifat (Te-form) + たまらない",
    examples: [
      {
        ja: '国[くに]の家族[かぞく]に会[あ]いたくてたまらない。',
        romaji: 'Kuni no kazoku ni aitakute tamaranai.',
        uz: "Vatanimdagilarni ko'rgim kelib chiday olmayapman.",
      },
    ],
  },
  {
    id: 'n3_mimi_46',
    level: 'N3',
    title: '〜てしょうがない (te shouganai)',
    romaji: 'te shouganai',
    meaningUz: "...-ligidan ilojim yo'q / juda ham",
    structure: "Fe'l/Sifat (Te-form) + しょうがない / 仕方がない",
    examples: [
      {
        ja: '寂[さび]しくてしょうがない。',
        romaji: 'Sabishikute shouganai.',
        uz: "Juda ham yolg'izlanib qoldim.",
      },
    ],
  },
  {
    id: 'n3_mimi_47',
    level: 'N3',
    title: '〜てならない (te naranai)',
    romaji: 'te naranai',
    meaningUz: 'ich-ichimdan ... his qilyapman (Tabiiy his)',
    structure: "Fe'l/Sifat (Te-form) + ならない",
    examples: [
      {
        ja: '合格[ごうかく]できるか心配[しんぱい]でならない。',
        romaji: 'Goukaku dekiru ka shinpai de naranai.',
        uz: "O'ta olamanmi-yo'qmi juda xavotirdaman.",
      },
    ],
  },
  {
    id: 'n2_pdf_1_ageku',
    level: 'N2',
    title: '〜あげく (ageku)',
    romaji: 'ageku',
    meaningUz: 'oxir-oqibat ... bilan tugamoq (odatda salbiy natija)',
    structure:
      'Verb (た form) あげく（に） Noun + の 2時間も待たされたあげく、結局に試合は延期になった。 2じかんもまたされたあげく、けっきょくにしあいはえんきになった。 After waiting for 2 hours, the match ended up being postponed.',
    examples: [
      {
        ja: '2時間も待たされたあげく、結局に試合は延期になった。',
        romaji: '2-jikan mo matasareta ageku, kekkyoku ni shiai wa enki ni natta.',
        uz: "2 soatlab kuttirilganidan so'ng, oxir-oqibat o'yin qoldirildi.",
      },
      {
        ja: '毎日の残業のあげく、彼女は倒れて入院することになりました。',
        romaji: 'Mainichi no zangyou no ageku, kanojo wa taorete nyuuin suru koto ni narimashita.',
        uz: 'Har kungi ortiqcha ishlar oqibatida, oxiri u yiqilib kasalxonaga yotqizildi.',
      },
    ],
  },
  {
    id: 'n2_pdf_2_aruiwa',
    level: 'N2',
    title: '〜あるいは (aruiwa)',
    romaji: 'aruiwa',
    meaningUz: 'yoki / yoxud / balki',
    structure:
      'あるいは other option 今⽇中にファックス、あるいは、メールで送ってください。 きょうじゅうにファックス、あるいは、メールおくってください。 Please send it today via fax or mail.',
    examples: [
      {
        ja: '今日中にファックス、あるいは、メールで送ってください。',
        romaji: 'Kyoujuu ni fakkusu, aruiwa, meeru de okutte kudasai.',
        uz: 'Bugun kun davomida faks yoki elektron pochta orqali yuboring.',
      },
      {
        ja: 'ご注文は電話か、あるいはインターネットでお願いします。',
        romaji: 'Gochuumon wa denwa ka, aruiwa intaanetto de onegai shimasu.',
        uz: "Buyurtmani telefon orqali yoki internet orqali berishingizni so'raymiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_3_bakari',
    level: 'N2',
    title: '〜ばかり (bakari)',
    romaji: 'bakari',
    meaningUz: 'taxminan / chamasi (vaqt yoki miqdor)',
    structure:
      'Noun (indicates time or distance) ばかり 彼⼥は30分ばかりベッドに横になった。 かのじょは30ぷんばかりベッドによこになった。 She lay in bed for about a half-hour.',
    examples: [
      {
        ja: '彼女は30分ばかりベッドに横になった。',
        romaji: 'Kanojo wa 30-pun bakari beddo ni yoko ni natta.',
        uz: "U 30 daqiqacha karavotda cho'zilib yotdi.",
      },
      {
        ja: '５分ばかりこの道を行けば、右手にその店があります。',
        romaji: '5-fun bakari kono michi o ikeba, migite ni sono mise ga arimasu.',
        uz: "Bu yo'ldan 5 daqiqacha yursangiz, o'ng qo'lingizda o'sha do'kon bo'ladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_4_bakari_da',
    level: 'N2',
    title: '〜ばかりだ (bakari da)',
    romaji: 'bakari da',
    meaningUz: "faqatgina ... bo'lib bormoqda (salbiy tomonga o'sish)",
    structure:
      'Verb (dictionary) ばかりだ ばかりです あの⼆⼈の関係は悪くなるばかりだ。 あのふたりのかんけいはわるくなるばかりだ。 Their relationship just keeps getting worse.',
    examples: [
      {
        ja: 'あの二人の関係は悪くなるばかりだ。',
        romaji: 'Ano futari no kankei wa waruku naru bakari da.',
        uz: 'U ikki kishining munosabati tobora yomonlashib bormoqda.',
      },
      {
        ja: '物価は上がるばかりだ。',
        romaji: 'Bukka wa agaru bakari da.',
        uz: "Narx-navo tinimsiz ko'tarilib bormoqda.",
      },
    ],
  },
  {
    id: 'n2_pdf_5_bakari_ka__bakarika',
    level: 'N2',
    title: '〜ばかりか (bakari ka / bakarika)',
    romaji: 'bakari ka / bakarika',
    meaningUz: 'nafaqat ... balki ... ham',
    structure:
      "Verb (casual) ばかりか Noun な-adjective + な い-adjective + い このマンションは狭いばかりか、暗いです。 このマンションはせまいばかりか、くらいです。 This apartment is not only very small, it's also quite dark.",
    examples: [
      {
        ja: 'このマンションは狭いばかりか、暗いです。',
        romaji: 'Kono manshon wa semai bakari ka, kurai desu.',
        uz: "Bu kvartira nafaqat juda tor, balki qorong'i hamdir.",
      },
      {
        ja: '私は、漢字ばかりか、ひらがなもカタカナも書けません。',
        romaji: 'Watashi wa, kanji bakari ka, hiragana mo katakana mo kakemasen.',
        uz: 'Men nafaqat kanjini, balki hiragana va katakanani ham yoza olmayman.',
      },
    ],
  },
  {
    id: 'n2_pdf_6_bakari_ni',
    level: 'N2',
    title: '〜ばかりに (bakari ni)',
    romaji: 'bakari ni',
    meaningUz: "faqatgina ... bo'lgani sababli (kutilmagan yomon oqibat)",
    structure:
      "Verb (casual) ばかりに Noun (+ である) な-adjective + な/である い-adjective お⾦がないばかりに、今度の旅⾏に⾏けなかった。 おかねがないばかりに、こんどのりょこうにいけなかった。 I wasn't able to go on this trip since I don't have any money.",
    examples: [
      {
        ja: 'お金がないばかりに、今度の旅行に行けなかった。',
        romaji: 'Okane ga nai bakari ni, kondo no ryokou ni ikenakatta.',
        uz: "Faqat pulim bo'lmagani sababli bu galgi sayohatga bora olmadim.",
      },
      {
        ja: 'ホラー映画を見たばかりに、怖くてなかなか寝られない。',
        romaji: 'Horaa eiga o mita bakari ni, kowakute nakanaka nerarenai.',
        uz: "Dahshatli film ko'rganim oqibatida, qo'rqqanimdan ko'zimga uyqu kelmayapti.",
      },
    ],
  },
  {
    id: 'n2_pdf_7_chinamini',
    level: 'N2',
    title: '〜因みに 【ちなみに】 (chinamini)',
    romaji: 'chinamini',
    meaningUz: "aytgancha / darvoqe / shu o'rinda",
    structure:
      'ちなみに phrase これ、お⼟産だよ。ちなみにベトナムで買ったんだよ。 これ、おみやげだよ。ちなみにベトナムでかったんだよ。 Here is a souvenir. I bought it in Vietnam by the way.',
    examples: [
      {
        ja: 'これ、お土産だよ。ちなみにベトナムで買ったんだよ。',
        romaji: 'Kore, omiyage da yo. Chinamini Betonamu de katta n da yo.',
        uz: "Mana bu sovg'a. Aytgancha, buni Vetnamdan sotib olgandim.",
      },
      {
        ja: 'ちなみに、明日の会議は何時からですか？',
        romaji: 'Chinamini, ashita no kaigi wa nanji kara desu ka?',
        uz: 'Darvoqe, ertangi majlis soat nechada boshlanadi?',
      },
    ],
  },
  {
    id: 'n2_pdf_8_chitto_monai',
    level: 'N2',
    title: '〜ちっとも〜ない (chitto mo~nai)',
    romaji: 'chitto mo~nai',
    meaningUz: 'zarra ham / mutlaqo ... emas',
    structure:
      "ちっとも Verb (ない form) 彼は酒はちっとも飲まない。 かれはさけはちっとものまない。 He doesn't drink any alcohol at all.",
    examples: [
      {
        ja: '彼は酒はちっとも飲まない。',
        romaji: 'Kare wa sake wa chittomo nomanai.',
        uz: "U spirtli ichimliklarni mutlaqo og'ziga olmaydi.",
      },
      {
        ja: 'この商品はちっとも売れない。',
        romaji: 'Kono shouhin wa chittomo urenai.',
        uz: 'Bu mahsulot umuman sotilmayapti.',
      },
    ],
  },
  {
    id: 'n2_pdf_9_dake_atte',
    level: 'N2',
    title: '〜だけあって (dake atte)',
    romaji: 'dake atte',
    meaningUz: "... bo'lganiga yarasha / mos ravishda (ijobiy e'tirof)",
    structure:
      'Verb (casual) だけあって だけのことはあって Noun な-adjective + な い-adjective このアパートは駅に近いだけあって、やっぱり家賃も⾼い。 このアパートはえきにちかいだけあって、やっぱりやちんもたかい。 This apartment is close to the station, so as expected the rent is expensive.',
    examples: [
      {
        ja: 'このアパートは駅に近いだけあって、やっぱり家賃も高い。',
        romaji: 'Kono apaato wa eki ni chikai dake atte, yappari yachin mo takai.',
        uz: "Bu xonadon vokzalga yaqin bo'lganiga yarasha, ijara narxi ham ancha qimmat.",
      },
      {
        ja: 'さすが大都会だけあって何かしら仕事がある。',
        romaji: 'Sasuga daitokai dake atte nanikashira shigoto ga aru.',
        uz: "Katta shahar bo'lganiga yarasha, albatta qandaydir ish topiladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_10_dake_mashi_da',
    level: 'N2',
    title: '〜だけましだ (dake mashi da)',
    romaji: 'dake mashi da',
    meaningUz: "... bo'lgani ham katta gap / shukr qilsa arziydi",
    structure:
      "Verb (casual) だけましだ Noun + である な-adjective + な い-adjective 今⽇は暑いが、湿度が⾼くないだけましだ。 きょうはあついが、しつどがたかくないだけましだ。 It's hot today, but I'm glad the humidity is low.",
    examples: [
      {
        ja: '今日は暑いが、湿度が高くないだけましだ。',
        romaji: 'Kyou wa atsui ga, shitsudo ga takakunai dake mashi da.',
        uz: "Bugun havo issiq, biroq namlik yuqori bo'lmaganiga ham shukr.",
      },
      {
        ja: '君は仕事があるだけましだよ。俺は首になってしまった。',
        romaji: 'Kimi wa shigoto ga aru dake mashi da yo. Ore wa kubi ni natte shimatta.',
        uz: "Senda ish borligining o'zi katta baxt. Meni esa ishdan bo'shatib yuborishdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_11_dake_ni',
    level: 'N2',
    title: '〜だけに (dake ni)',
    romaji: 'dake ni',
    meaningUz: "aynan ... bo'lgani sababli ham yana-da ko'proq",
    structure:
      'Verb (casual) だけに Noun な-adjective + な い-adjective 駅が近いだけに家賃も⾼い。 えきがちかいだけにやちんもたかい。 The station is nearby, which is also why the rent is so high.',
    examples: [
      {
        ja: '駅が近いだけに家賃も高い。',
        romaji: 'Eki ga chikai dake ni yachin mo takai.',
        uz: "Vokzalga yaqin bo'lgani sababli ham ijara haqi shunchalik qimmat.",
      },
      {
        ja: 'このホテルは５つ星ホテルなだけに、サービスが充実している。',
        romaji: 'Kono hoteru wa 5-tsu boshi hoteru na dake ni, saabisu ga juujitsu shite iru.',
        uz: "Bu mehmonxona besh yulduzli bo'lgani bois xizmat ko'rsatishi ham a'lo darajada.",
      },
    ],
  },
  {
    id: 'n2_pdf_12_dake_no_koto_wa_aru',
    level: 'N2',
    title: '〜だけのことはある (dake no koto wa aru)',
    romaji: 'dake no koto wa aru',
    meaningUz: '...ga loyiq / bejiz emas (qilingan mehnat samarasiga)',
    structure: 'JLPT N2 ぶんぽう',
    examples: [
      {
        ja: '彼は一生懸命勉強しただけのことはあって、見事に合格した。',
        romaji: 'Kare wa isshoukenmei benkyou shita dake no koto wa atte, migoto ni goukaku shita.',
        uz: "U sidqidildan o'qiganiga arziydi, ajoyib natija bilan imtihondan o'tdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_13_dake_wa',
    level: 'N2',
    title: '〜だけは (dake wa)',
    romaji: 'dake wa',
    meaningUz: "qo'ldan kelgancha / imkon qadar hamma narsani",
    structure:
      'Verb  (dictionary form) だけは Same verb  (past form) ⾛れるだけは速く⾛った。 はしれるだけははやくはしった。 I ran as fast as my legs could carry me.',
    examples: [
      {
        ja: '走れるだけは速く走った。',
        romaji: 'Hashireru dake wa hayaku hashitta.',
        uz: 'Yugura olganimcha bor tezlikda yugurdim.',
      },
      {
        ja: '私はあなたを手伝えるだけは手伝ったよ。',
        romaji: 'Watashi wa anata o tetsudaeru dake wa tetsudatta yo.',
        uz: "Men sizga qo'limdan kelgan barcha yordamni berdim.",
      },
    ],
  },
  {
    id: 'n2_pdf_14_datte',
    level: 'N2',
    title: '〜だって (datte)',
    romaji: 'datte',
    meaningUz: 'hatto ... ham / axir ... ham',
    structure:
      'Noun + だって even, too だって + phrase because, but 彼だって⼈間だ。 かれだってにんげんだ。 He is only human.',
    examples: [
      {
        ja: '彼だって人間だ。',
        romaji: 'Kare datte ningen da.',
        uz: 'Axir u ham inson-ku.',
      },
      {
        ja: '私だってあなたに会いたい。',
        romaji: 'Watashi datte anata ni aitai.',
        uz: "Men ham sizni ko'rishni xohlayman.",
      },
    ],
  },
  {
    id: 'n2_pdf_15_de_shika_nai',
    level: 'N2',
    title: '〜でしかない (de shika nai)',
    romaji: 'de shika nai',
    meaningUz: 'faqatgina ... xolos / boshqa narsa emas',
    structure:
      'Noun でしかない これらの考えは推測でしかない。 これらのかんがえはすいそくでしかない。 This idea is nothing more than a guess.',
    examples: [
      {
        ja: 'これらの考えは推測でしかない。',
        romaji: 'Korera no kangae wa suisoku de shika nai.',
        uz: 'Bu fikrlar shunchaki taxmin xolos.',
      },
      {
        ja: 'この作業は時間の無駄でしかない。',
        romaji: 'Kono sagyou wa jikan no muda de shika nai.',
        uz: 'Bu ish faqatgina vaqtni behuda sarflash xolos.',
      },
    ],
  },
  {
    id: 'n2_pdf_16_dokoro_dewa_nai',
    level: 'N2',
    title: '〜どころではない (dokoro dewa nai)',
    romaji: 'dokoro dewa nai',
    meaningUz: "... qilishning ayni payti emas / mutlaqo iloji yo'q",
    structure:
      'Verb (casual) どころではない どころじゃない Noun 彼はよく間違いをするが、バカどころではない。 かれはよくまちがいをするが、バカどころではない。 He often makes mistakes, but he is no fool.',
    examples: [
      {
        ja: '彼はよく間違いをするが、バカどころではない。',
        romaji: 'Kare wa yoku machigai o suru ga, baka dokoro dewa nai.',
        uz: 'U tez-tez xato qilib turadi, biroq aslo nodon emas.',
      },
      {
        ja: '宿題がたくさんあってテレビを見るどころではない。',
        romaji: 'Shukudai ga takusan atte terebi o miru dokoro dewa nai.',
        uz: "Vazifa shunchalik ko'pki, televizor ko'rish haqida o'ylashning mavridi emas.",
      },
    ],
  },
  {
    id: 'n2_pdf_17_dokoro_ka',
    level: 'N2',
    title: '〜どころか (dokoro ka)',
    romaji: 'dokoro ka',
    meaningUz: '... u yoqda tursin / aksincha',
    structure:
      'Verb (casual, non-past) どころか Noun な-adjective + (な) い-adjective もっと勉強しないと、N2どころかN3も無理だ。 もっとべんきょうしないと、N2どころかN3もむりだ。 If you do not study more, you will not be able to pass N2, let alone N',
    examples: [
      {
        ja: 'もっと勉強しないと、N2どころかN3も無理だ。',
        romaji: 'Motto benkyou shinai to, N2 dokoroka N3 mo muri da.',
        uz: "Ko'proq o'qimasangiz, N2 u yoqda tursin, N3 dan ham o'ta olmaysiz.",
      },
      {
        ja: 'そんな食べ物、健康になるどころか、病気になっちゃうよ。',
        romaji: 'Sonna tabemono, kenkou ni naru dokoroka, byouki ni nacchau yo.',
        uz: "Bunday yegulik foyda berish u yoqda tursin, kasal qilib qo'yadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_18_dou_yara',
    level: 'N2',
    title: '〜どうやら (dou yara)',
    romaji: 'dou yara',
    meaningUz: "aftidan / ko'rinishidan / ehtimol",
    structure:
      "どうやら phrase どうやら明⽇は⾬になりそうだ。 どうやらあしたはあめになりそうだ。 Apparently, it's going to rain tomorrow.",
    examples: [
      {
        ja: 'どうやら明日は雨になりそうだ。',
        romaji: 'Douyara ashita wa ame ni nari sou da.',
        uz: "Aftidan, ertaga yomg'ir yog'ganga o'xshaydi.",
      },
      {
        ja: 'どうやら、彼は知らないらしい。',
        romaji: 'Douyara, kare wa shiranai rashii.',
        uz: "Ko'rinishidan, u bundan bexabar shekilli.",
      },
    ],
  },
  {
    id: 'n2_pdf_19_douse',
    level: 'N2',
    title: '〜どうせ (douse)',
    romaji: 'douse',
    meaningUz: "baribir / qanday bo'lmasin",
    structure:
      "どうせ phrase どうせやるなら上⼿にやれ。 どうせやるならじょうずにやれ。 If you're going to do it no matter what, do it well!",
    examples: [
      {
        ja: 'どうせやるなら上手にやれ。',
        romaji: 'Douse yaru nara jouzu ni yare.',
        uz: "Baribir qiladigan bo'lsang, chiroyli va qoyilmaqom qilib bajar.",
      },
      {
        ja: 'どうせ参加しないのなら、早めに伝えたほうがいい。',
        romaji: 'Douse sanka shinai no nara, hayame ni tsutaeta hou ga ii.',
        uz: "Baribir qatnashmasang, buni oldinroq aytib qo'yganing ma'qul.",
      },
    ],
  },
  {
    id: 'n2_pdf_20_enai',
    level: 'N2',
    title: '〜得ない 【えない】 (enai)',
    romaji: 'enai',
    meaningUz: "... bo'lishi aslo mumkin emas / imkonsiz",
    structure:
      "Verb ます (stem form) 得ない あの⼈が結婚したって本当︕︖え〜︕あり得ないよ︕ あのひとがけっこんしたってほんとう︕︖え〜︕ありえないよ︕ Is it true that he got married? No way! It's not possible!",
    examples: [
      {
        ja: 'あの人が結婚したって本当！？え〜！あり得ないよ！',
        romaji: 'Ano hito ga kekkon shita tte hontou!? E~! Arienai yo!',
        uz: "Uning uylangani rostmi?! Yo'g'-e! Aslo bo'lishi mumkin emas!",
      },
    ],
  },
  {
    id: 'n2_pdf_21_eruuru',
    level: 'N2',
    title: '〜得る 【える/うる】 (eru/uru)',
    romaji: 'eru/uru',
    meaningUz: "... bo'lishi mumkin / ehtimoldan xoli emas",
    structure:
      'Verb ます (stem form) 得る  (える/うる) 君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。 君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。 I believe in your story. I mean, anything is possible in this world.',
    examples: [
      {
        ja: '君の話を信じるよ。だってこの世界ではどんなことでも起こり得るから。',
        romaji:
          'Kimi no hanashi o shinjiru yo. Datte kono sekai dewa donna koto demo okoriuru kara.',
        uz: "Gapingga ishonaman. Axir bu dunyoda har qanday narsa sodir bo'lishi mumkin.",
      },
    ],
  },
  {
    id: 'n2_pdf_22_futatabi',
    level: 'N2',
    title: '〜再び 【ふたたび】 (futatabi)',
    romaji: 'futatabi',
    meaningUz: 'yana / yana bir bor / qaytadan',
    structure:
      '再び ふたたび phrase 来週の⽉曜⽇からレッスンを再び開始したいですか︖ らいしゅうのげつようびからレッスンをふたたびかいししたいですか︖ Would you like to restart your lessons from next Monday?',
    examples: [
      {
        ja: '来週の月曜日からレッスンを再び開始したいですか？',
        romaji: 'Raishuu no getsuyoubi kara ressun o futatabi kaishi shitai desu ka?',
        uz: 'Kelasi dushanbadan boshlab darslarni yana qaytadan boshlashni xohlaysizmi?',
      },
    ],
  },
  {
    id: 'n2_pdf_23_fuu_ni',
    level: 'N2',
    title: '〜⾵に 【 ふうに 】 (fuu ni)',
    romaji: 'fuu ni',
    meaningUz: "... tarzda / shunday yo'sinda",
    structure:
      'どんな あんな こんな どういう ふうに + Verb Verb (casual) こんなふうにやりなさい。 こんなふうにやりなさい。 Please do it like this.',
    examples: [
      {
        ja: '私もあんなふうになりたいです。',
        romaji: 'Watashi mo anna fuu ni naritai desu.',
        uz: "Men ham anavi kishi kabi bo'lishni xohlayman.",
      },
      {
        ja: 'どういうふうに動くか見せてください。',
        romaji: 'Dou iu fuu ni ugoku ka misete kudasai.',
        uz: "U qanday tarzda ishlashini ko'rsatib bering.",
      },
    ],
  },
  {
    id: 'n2_pdf_24_o_kikkake_ni',
    level: 'N2',
    title: '〜をきっかけに (o kikkake ni)',
    romaji: 'o kikkake ni',
    meaningUz: "... sabab bo'lib / ... turtkisi bilan",
    structure:
      'Verb (た form) + の/こと がきっかけで をきっかけに Noun 彼⼥は病気をきっかけにそのつまらない仕事を辞めた。 かのじょはびょうきをきっかけにそのつまらないしごとをやめた。 She used her illness to quit that boring job.',
    examples: [
      {
        ja: '彼女は病気をきっかけにそのつまらない仕事を辞めた。',
        romaji: 'Kanojo wa byouki o kikkake ni sono tsumaranai shigoto o yameta.',
        uz: "U kasalligi sabab bo'lib o'sha zerikarli ishidan bo'shadi.",
      },
      {
        ja: '昨年の事故をきっかけとして、安全対策が強化された。',
        romaji: 'Sakunen no jiko o kikkake to shite, anzen taisaku ga kyouka sareta.',
        uz: "O'tgan yilgi baxtsiz hodisa turtkisi bilan xavfsizlik choralari kuchaytirildi.",
      },
    ],
  },
  {
    id: 'n2_pdf_25_gyaku_ni',
    level: 'N2',
    title: '〜逆に 【ぎゃくに】 (gyaku ni)',
    romaji: 'gyaku ni',
    meaningUz: 'aksincha / aks holda / teskarisiga',
    structure:
      '逆に phrase 娘はスポーツが好きだが、逆に息⼦はスポーツが嫌いだ。 娘はスポーツが好きだが、逆に息⼦はスポーツが嫌いだ。 My daughter likes sports, but on the other hand my son hates them.',
    examples: [
      {
        ja: '娘はスポーツが好きだが、逆に息子はスポーツが嫌いだ。',
        romaji: 'Musume wa supootsu ga suki da ga, gyaku ni musuko wa supootsu ga kirai da.',
        uz: "Qizim sportni yaxshi ko'radi, ammo aksincha, o'g'lim sportni yoqtirmaydi.",
      },
    ],
  },
  {
    id: 'n2_pdf_26_hanmen',
    level: 'N2',
    title: '〜反⾯ 【はんめん】 (hanmen)',
    romaji: 'hanmen',
    meaningUz: "boshqa tomondan esa / ... bo'lishiga qaramay",
    structure:
      'Verb (casual, non-past) 反⾯ Noun + である な-adjective + な/である い-adjective Phrase 1 + その反⾯ + Phrase 2 この部屋は⽇当たりがいい反⾯、夏はかなり暑いです。 このへやはひあたりがいいはんめん、なつはかなりあついです。 This room has great light exposure, but on the other hand it is very hot in the summer.',
    examples: [
      {
        ja: 'この部屋は日当たりがいい反面、夏はかなり暑いです。',
        romaji: 'Kono heya wa hiatari ga ii hanmen, natsu wa kanari atsui desu.',
        uz: "Bu xonaga quyosh nuri yaxshi tushadi, ammo boshqa tomondan, yozda juda issiq bo'lib ketadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_27_hatashite',
    level: 'N2',
    title: '〜果たして 【はたして】 (hatashite)',
    romaji: 'hatashite',
    meaningUz: 'haqiqatan ham / rostdan ham (savol ohangida)',
    structure: '果たして phrase 果たしてそうだろうか。 はたしてそうだろうか。 Can it really be so?',
    examples: [
      {
        ja: '果たしてそうだろうか。',
        romaji: 'Hatashite sou darou ka.',
        uz: 'Rostdan ham shundaymikan?',
      },
    ],
  },
  {
    id: 'n2_pdf_28_ichiou',
    level: 'N2',
    title: '〜⼀応 【いちおう】 (ichiou)',
    romaji: 'ichiou',
    meaningUz: "har holda / har ehtimolga qarshi / qisman bo'lsa ham",
    structure:
      '⼀応 phrase ⼀応やりました。 いちおうやりました。 I did it (but it may still need some work).',
    examples: [
      {
        ja: '一応やりました。',
        romaji: 'Ichiou yarimashita.',
        uz: "Qo'ldan kelgancha bajarib qo'ydim.",
      },
    ],
  },
  {
    id: 'n2_pdf_29_igai',
    level: 'N2',
    title: '〜以外 【いがい】 (igai)',
    romaji: 'igai',
    meaningUz: "...dan tashqari / ...dan bo'lak",
    structure:
      'Noun 以外 + (の、は、に） ⾷事以外には何ができる︖ しょくじいがいにはなにができる︖ Apart from eating, what else can we do?',
    examples: [
      {
        ja: '食事以外には何ができる？',
        romaji: 'Shokuji igai ni wa nani ga dekiru?',
        uz: "Ovqatlanishdan tashqari yana nima qilsa bo'ladi?",
      },
    ],
  },
  {
    id: 'n2_pdf_30_ijou_ni',
    level: 'N2',
    title: '〜以上に 【いじょうに】 (ijou ni)',
    romaji: 'ijou ni',
    meaningUz: '...dan ham ortiqroq / ...dan ziyoda',
    structure:
      'Verb (casual) 以上に Noun な-adjective 以上の Noun 今まで以上に仕事を頑張ります。 いままでいじょうにしごとをがんばります。 I will work even harder at work than I have until now.',
    examples: [
      {
        ja: '今まで以上に仕事を頑張ります。',
        romaji: 'Ima made ijou ni shigoto o gambarimasu.',
        uz: "Hozirgacha bo'lganidan ham qattiqroq ishlayman.",
      },
    ],
  },
  {
    id: 'n2_pdf_31_ijou_wa',
    level: 'N2',
    title: '〜以上は 【いじょうは】 (ijou wa)',
    romaji: 'ijou wa',
    meaningUz: "modomiki ... ekan / ... bo'lgach esa",
    structure:
      "Verb (casual) 以上（は） Noun + である な-adjective + である 約束した以上、きちんと守ってくださいね。 やくそくしたいじょう、きちんとまもってくださいね。 You've made a promise, so be sure to keep it!",
    examples: [
      {
        ja: '日本で生活する以上は、日本の法律を守らなければならない。',
        romaji: 'Nihon de seikatsu suru ijou wa, Nihon no houritsu o mamoranakereba naranai.',
        uz: "Modomiki Yaponiyada yashar ekansiz, Yaponiya qonunlariga bo'ysunishingiz shart.",
      },
    ],
  },
  {
    id: 'n2_pdf_32_ikinari',
    level: 'N2',
    title: '〜⾏き成り 【いきなり】 (ikinari)',
    romaji: 'ikinari',
    meaningUz: "to'satdan / kutilmaganda / birdaniga",
    structure:
      'いきなり action いきなり男の⼈に道を聞かれた。 いきなりおとこのひとにみちをきかれた。 A man suddenly asked me for directions.',
    examples: [
      {
        ja: 'いきなり男の人に道を聞かれた。',
        romaji: 'Ikinari otoko no hito ni michi o kikareta.',
        uz: "Kutilmaganda bir erkak kishi mendan yo'l so'rab qoldi.",
      },
    ],
  },
  {
    id: 'n2_pdf_33_ikki_ni',
    level: 'N2',
    title: '〜⼀気に 【いっきに】 (ikki ni)',
    romaji: 'ikki ni',
    meaningUz: "bir zumda / bir nafasda / to'xtamasdan",
    structure:
      '⼀気に phrase お茶を⼀気に飲みました。 おちゃをいっきにのみました。 I drank all of the tea at once.',
    examples: [
      {
        ja: 'お茶を一気に飲みました。',
        romaji: 'Ocha o ikki ni nomimashita.',
        uz: 'Choyni bir nafasda ichib yubordim.',
      },
    ],
  },
  {
    id: 'n2_pdf_34_ippou_de',
    level: 'N2',
    title: '〜⼀⽅で 【いっぽうで】 (ippou de)',
    romaji: 'ippou de',
    meaningUz: 'bir tomondan ... ikkinchi tomondan esa',
    structure:
      'Verb (casual) ⼀⽅（で） Noun + である な-adjective + である い-adjective お⺟さんは優しい⼀⽅で、お⽗さんはこわい。 おかあさんはやさしいいっぽうで、おとうさんはこわい。 My mother is kind, but on the other hand my father is scary.',
    examples: [
      {
        ja: 'お母さんは優しい一方で、お父さんはこわい。',
        romaji: 'Okaasan wa yasashii ippou de, otousan wa kowai.',
        uz: "Onam mehribon, ikkinchi tomondan esa dadam juda qattiqqo'l.",
      },
      {
        ja: '父は自分に厳しい一方で、他人には優しい。',
        romaji: 'Chichi wa jibun ni kibishii ippou de, tanin ni wa yasashii.',
        uz: "Otam o'ziga nisbatan juda talabchan, boshqalarga esa mehribondir.",
      },
    ],
  },
  {
    id: 'n2_pdf_35_iwayuru',
    level: 'N2',
    title: '〜いわゆる (iwayuru)',
    romaji: 'iwayuru',
    meaningUz: 'xalq tilida aytganda / deb ataladigan',
    structure:
      'いわゆる Noun 彼はいわゆる語学の天才だ。 かれはいわゆるごがくのてんさいだ。 He is what is called a genius in language.',
    examples: [
      {
        ja: '彼はいわゆる語学の天才だ。',
        romaji: 'Kare wa iwayuru gogaku no tensai da.',
        uz: "U til o'rganish bo'yicha haqiqiy daho deb ataladigan inson.",
      },
      {
        ja: '彼女はいわゆる本の虫です。',
        romaji: 'Kanojo wa iwayuru hon no mushi desu.',
        uz: 'U kitob qurtiga aylangan odam deb ataladi.',
      },
    ],
  },
  {
    id: 'n2_pdf_36_iyoiyo',
    level: 'N2',
    title: '〜いよいよ (iyoiyo)',
    romaji: 'iyoiyo',
    meaningUz: 'nihoyat / oxir-oqibat (kutilgan dam)',
    structure:
      'いよいよ phrase いよいよ⼤学の⽣活が始まります。初めて親に離れるからちょっと⼼配する。 いよいよだいがくのせいかつがはじまります。はじめておやにはなれるからちょっと しんぱいする。 My university life has finally begun. Though it is my first time to be away from my parents so I am a little nervous.',
    examples: [
      {
        ja: 'いよいよ大学の生活が始まります。初めて親に離れるからちょっと心配する。',
        romaji:
          'Iyoiyo daigaku no seikatsu ga hajimarimasu. Hajimete oya ni hanareru kara chotto shinpai suru.',
        uz: 'Nihoyat universitet hayoti boshlanmoqda. Ilk bor ota-onamdan uzoqda yashayotganim uchun biroz xavotirdaman.',
      },
      {
        ja: 'いよいよ来週の日曜日が母の日だ。母に何を買って上げたほうがいいかな。',
        romaji:
          'Iyoiyo raishuu no nichiyoubi ga haha no hi da. Haha ni nani o katte ageta hou ga ii ka na.',
        uz: "Nihoyat kelasi yakshanba Onalar kuni. Onamga nima sovg'a qilib bersam ekan-a?",
      },
    ],
  },
  {
    id: 'n2_pdf_37_jou',
    level: 'N2',
    title: '〜上 【じょう】 (jou)',
    romaji: 'jou',
    meaningUz: '... nuqtai nazaridan / jihatidan',
    structure:
      "Noun 上 健康上ではポテトフライや揚げ物などは⾷べない⽅がいいと思います。 けんこうじょうではポテトフライやあげものなどはたべないほうがいいとおもいま す。 For the sake of one's health, I think it's best to not eat french fries or other fried foods.",
    examples: [
      {
        ja: '健康上ではポテトフライや揚げ物などは食べない方がいいと思います。',
        romaji: 'Kenkoujou dewa poteto furai ya agemono nado wa tabenai hou ga ii to omoimasu.',
        uz: "Salomatlik nuqtai nazaridan qovurilgan kartoshka va yog'li taomlarni yemagan ma'qul.",
      },
    ],
  },
  {
    id: 'n2_pdf_38_ka_to_omottara',
    level: 'N2',
    title: '〜かと思ったら 【かとおもったら】 (ka to omottara)',
    romaji: 'ka to omottara',
    meaningUz: "... deb o'ylagan edimki / ... bilanoq kutilmaganda",
    structure:
      'Verb (た form) かと思ったら かと思うと かと思えば 空が急に暗くなってきたかと思うと、⾬が降ってきた。 そらがきゅうにくらくなってきたかとおもうと、あめがふってきた。 It started raining no sooner than when the sky suddenly turned dark.',
    examples: [
      {
        ja: '空が急に暗くなってきたかと思うと、雨が降ってきた。',
        romaji: 'Sora ga kyuu ni kuraku natte kita ka to omou to, ame ga futte kita.',
        uz: "Osmon to'satdan qorayib ketishi bilanoq, yomg'ir yog'a boshladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_40_kaette',
    level: 'N2',
    title: '〜かえって (kaette)',
    romaji: 'kaette',
    meaningUz: 'aksincha / kutilganga zid ravishda battarroq',
    structure:
      'Phrase 1 かえって phrase 2 彼は⼿助けどころかかえって邪魔になった。 かれはてだすけどころかかえってじゃまになった。 He was in no position to help, on the contrary he got in the way.',
    examples: [
      {
        ja: '彼は手助けどころかかえって邪魔になった。',
        romaji: 'Kare wa tedasuke dokoroka kaette jama ni natta.',
        uz: 'U yordam berish u yoqda tursin, aksincha xalal berdi.',
      },
      {
        ja: '彼女は痩せるどころかかえって体重が増えた。',
        romaji: 'Kanojo wa yaseru dokoroka kaette taijuu ga fueta.',
        uz: "U ozish o'rniga, aksincha vazni yanada oshib ketdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_41_kagiri',
    level: 'N2',
    title: '〜限り 【かぎり】 (kagiri)',
    romaji: 'kagiri',
    meaningUz: 'modomiki ... ekan / ... ekanligicha',
    structure:
      "Verb (casual, non-past) 限り Noun + である 明⽇は、⾬が降らない限り、10時に学校で会いましょう。 あしたは、あめがふらないかぎり、10じゅうじにがっこうであいましょう。 As long as it doesn't rain tomorrow, let's meet at the school at 10 am.",
    examples: [
      {
        ja: '明日は、雨が降らない限り、10時に学校で会いましょう。',
        romaji: 'Ashita wa, ame ga furanai kagiri, 10-ji ni gakkou de aimashou.',
        uz: "Ertaga yomg'ir yog'mas ekan, soat 10 da maktabda ko'rishamiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_42_kai_ga_aru',
    level: 'N2',
    title: '〜甲斐がある 【かいがある】 (kai ga aru)',
    romaji: 'kai ga aru',
    meaningUz: 'harakat zoye ketmadi / samarasini berdi',
    structure:
      'Verb (casual, past) Verb (ます stem) 甲斐がある かいがある /  がいがある Noun + の 努⼒の甲斐があって、希望の⼤学に合格した。 どりょくのかいがあって、きぼうのだいがくにごうかくした。 It was worth working so hard. I got into my target university.',
    examples: [
      {
        ja: '一生懸命努力した甲斐があって、試験に合格できた。',
        romaji: 'Isshoukenmei doryoku shita kai ga atte, shiken ni goukaku dekita.',
        uz: "Sidqidildan qilingan mehnat zoye ketmadi va imtihondan muvaffaqiyatli o'tdim.",
      },
    ],
  },
  {
    id: 'n2_pdf_44_kaneru__kanemasu',
    level: 'N2',
    title: '〜かねる / かねます (kaneru / kanemasu)',
    romaji: 'kaneru / kanemasu',
    meaningUz: '... qila olmayman / imkonsiz (xushmuomala rad etish)',
    structure:
      'Verb ます (stem form) かねる かねます すぐにお返事はできかねます。 すぐにおへんじはできかねます。 I can not give you an immediate answer.',
    examples: [
      {
        ja: 'すぐにお返事はできかねます。',
        romaji: 'Sugu ni ohenji wa dekikanemasu.',
        uz: 'Darhol javob bera olmayman (kechirasiz).',
      },
      {
        ja: '私はそれに賛同しかねます。',
        romaji: 'Watashi wa sore ni sandou shikanemasu.',
        uz: "Men bunga qo'shila olmayman.",
      },
    ],
  },
  {
    id: 'n2_pdf_45_kara_iu_to',
    level: 'N2',
    title: '〜から⾔うと 【からいうと】 (kara iu to)',
    romaji: 'kara iu to',
    meaningUz: '... nuqtai nazaridan olib qaraganda',
    structure:
      "Noun から⾔うと から⾔えば から⾔って 僕の成績から⾔えば、国⽴⼤学は無理だと思う。 ぼくのせいせきからいえば、こくりつだいがくはむりだとおもう。 With these grades, I don’t think I'm going to be able to get into a national university",
    examples: [
      {
        ja: '僕の成績から言えば、国立大学は無理だと思う。',
        romaji: 'Boku no seiseki kara ieba, kokuritsu daigaku wa muri da to omou.',
        uz: "Mening baholarim nuqtai nazaridan, davlat universitetiga kirish imkonsiz deb o'ylayman.",
      },
      {
        ja: '能力から言って、彼がこの仕事に一番適切だと思います。',
        romaji: 'Nouryoku kara itte, kare ga kono shigoto ni ichiban tekisetsu da to omoimasu.',
        uz: 'Qobiliyati jihatidan olib qaraganda, u bu ish uchun eng mos nomzoddir.',
      },
    ],
  },
  {
    id: 'n2_pdf_46_kara_koso',
    level: 'N2',
    title: '〜からこそ (kara koso)',
    romaji: 'kara koso',
    meaningUz: "aynan ... bo'lgani uchungina",
    structure:
      'Verb (casual) からこそ Noun + だ だからこそ + phrase 早く起きたからこそ私は始発電⾞に間に合った。 はやくおきたからこそわたしはしはつでんしゃにまにあった 。 I was able to catch the first train because I woke up early.',
    examples: [
      {
        ja: '早く起きたからこそ私は始発電車に間に合った。',
        romaji: 'Hayaku okita kara koso watashi wa shihatsu densha ni maniatta.',
        uz: "Aynan erta uyg'onganim uchungina ilk poyezdga ulgura oldim.",
      },
      {
        ja: '毎日一生懸命に練習したからこそ、優勝できたのです。',
        romaji: 'Mainichi isshoukenmei ni renshuu shita kara koso, yuushou dekita no desu.',
        uz: "Aynan har kuni sidqidildan mashq qilganim uchungina g'olib bo'la oldim.",
      },
    ],
  },
  {
    id: 'n2_pdf_47_kara_miru_to',
    level: 'N2',
    title: '〜から⾒ると 【からみると】 (kara miru to)',
    romaji: 'kara miru to',
    meaningUz: '... nuqtai nazaridan / qaralganda',
    structure:
      'Noun から⾒ると から⾒れば から⾒て ⾍嫌いな私から⾒ると、ゴキブリを⼿でつかむなんてありえない。 むしきらいなわたしからみると、ゴキブリをてでつかむなんてありえない。 For someone who hates bugs like me, catching cockroaches by hand is unthinkable.',
    examples: [
      {
        ja: '虫嫌いな私から見ると、ゴキブリを手でつかむなんてありえない。',
        romaji: 'Mushi kirai na watashi kara miru to, gokiburi o te de tsukamu nante arienai.',
        uz: "Hasharotlarni yoqtirmaydigan men uchun suvarakni qo'l bilan ushlash aqlga sig'maydi.",
      },
      {
        ja: '緊張している様子から見て、彼らは新入社員だろう。',
        romaji: 'Kinchou shite iru yousu kara mite, karera wa shinnyuu shain darou.',
        uz: "Hayajonlanayotgan ko'rinishidan qaraganda, ular yangi xodimlar bo'lsa kerak.",
      },
    ],
  },
  {
    id: 'n2_pdf_48_kara_niwa',
    level: 'N2',
    title: '〜からには (kara niwa)',
    romaji: 'kara niwa',
    meaningUz: "modomiki ... ekan / ... bo'lgandan keyin",
    structure:
      'Verb (dictionary form) からには Verb (casual, past) 約束したからにはその約束を守らなければならない。 やくそくしたからにはそのやくそくをまもらなければならない。 Since you’ve made a promise, you must keep it.',
    examples: [
      {
        ja: '約束したからにはその約束を守らなければならない。',
        romaji: 'Yakusoku shita kara niwa sono yakusoku o mamoranakereba naranai.',
        uz: "Modomiki va'da bergan ekansiz, uning ustidan chiqishingiz shart.",
      },
      {
        ja: '私はJLPT N2 試験を受けるからには、合格したいです。',
        romaji: 'Watashi wa JLPT N2 shiken o ukeru kara niwa, goukaku shitai desu.',
        uz: "JLPT N2 imtihonini topshirar ekanman, albatta undan muvaffaqiyatli o'tishni xohlayman.",
      },
    ],
  },
  {
    id: 'n2_pdf_49_kara_shite',
    level: 'N2',
    title: '〜からして (kara shite)',
    romaji: 'kara shite',
    meaningUz: "hatto ...ning o'zidan ham ko'rinib turibdiki",
    structure:
      'Noun からして タイトルからして、⾯⽩そうな本ですね。 タイトルからして、おもしろそうなほんですね。 Judging from the title, this book sounds interesting.',
    examples: [
      {
        ja: 'タイトルからして、面白そうな本ですね。',
        romaji: 'Taitoru kara shite, omoshirosou na hon desu ne.',
        uz: "Sarlavhasining o'zidan ham bu juda qiziqarli kitobga o'xshaydi.",
      },
      {
        ja: 'その新社員は顔つきからして優しそうだ。',
        romaji: 'Sono shinshain wa kaotsuki kara shite yasashisou da.',
        uz: "U yangi xodim chehrasining o'zidan ham juda mehribondek ko'rinadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_50_kara_suru_to__kara_sureba',
    level: 'N2',
    title: '〜からすると / からすれば (kara suru to / kara sureba)',
    romaji: 'kara suru to / kara sureba',
    meaningUz: '...dan xulosa qilganda / ...ga qaraganda',
    structure:
      'Noun からすると からすれば 彼の症状からすると、⼼臓の病気かもしれません。 かれのしょうじょうからすると、しんぞうのびょうきかもしれません。 Judging from his condition, it might be a heart illness.',
    examples: [
      {
        ja: '彼の症状からすると、心臓の病気かもしれません。',
        romaji: 'Kare no shoujou kara suru to, shinzou no byouki kamoshiremasen.',
        uz: "Uning alomatlaridan kelib chiqib xulosa qilinsa, yurak xastaligi bo'lishi mumkin.",
      },
      {
        ja: '今度のJLPTですが、今の皆さんの実力からすると問題なく合格できるでしょう。',
        romaji:
          'Kondo no JLPT desu ga, ima no minasan no jitsuryoku kara suru to mondainaku goukaku dekiru deshou.',
        uz: "Navbatdagi JLPTga kelsak, hozirgi bilim darajangizdan qaraganda, bemalol o'ta olasiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_51_kara_to_itte',
    level: 'N2',
    title: '〜からと⾔って 【からといって】 (kara to itte)',
    romaji: 'kara to itte',
    meaningUz: "faqat ... deb / ... bo'lgani bilan (har doim ham shunday emas)",
    structure:
      'Verb (casual) からといって Noun + だ な-adjective + だ い-adjective お⾦がたくさんあるからといって使いすぎるのはよくない。 おかねがたくさんあるからといってつかいすぎるのはよくない。 It’s not good to spend too much just because you have a lot of money.',
    examples: [
      {
        ja: 'お金がたくさんあるからといって使いすぎるのはよくない。',
        romaji: 'Okane ga takusan aru kara to itte tsukaisugiru no wa yokunai.',
        uz: "Pulingiz ko'p bo'lgani bilan uni behuda sovurish yaxshi emas.",
      },
      {
        ja: '安いからといって、要らないものまで買うのはよくない。',
        romaji: 'Yasui kara to itte, iranai mono made kau no wa yokunai.',
        uz: "Arzon ekan deb keraksiz narsalarni ham sotib olaverish to'g'ri emas.",
      },
    ],
  },
  {
    id: 'n2_pdf_53_koto_da',
    level: 'N2',
    title: '〜ことだ (koto da)',
    romaji: 'koto da',
    meaningUz: "... qilish kerak / ma'qul (do'stona maslahat)",
    structure:
      "Verb (dictionary form) ことだ Verb (ない form) ⾵邪ぎみなら、早く寝ることですよ。 かぜぎみなら、はやくねることですよ。 If you feel like you're catching a cold, you should go to bed early.",
    examples: [
      {
        ja: '風邪ぎみなら、早く寝ることですよ。',
        romaji: 'Kaze gimi nara, hayaku neru koto desu yo.',
        uz: "Shamollash alomatlari bo'lsa, vaqtliroq uxlash kerak.",
      },
      {
        ja: '無理をしないことだよ。',
        romaji: 'Muri o shinai koto da yo.',
        uz: "O'zingizni ortiqcha zo'riqtirmasligingiz kerak.",
      },
    ],
  },
  {
    id: 'n2_pdf_54_koto_dakara',
    level: 'N2',
    title: '〜ことだから (koto dakara)',
    romaji: 'koto dakara',
    meaningUz: "... bo'lgani sababli (fe'l-atvoriga xos)",
    structure: 'JLPT N2 ぶんぽう',
    examples: [
      {
        ja: 'よくできる彼女のことだから、合格は間違いないだろう。',
        romaji: 'Yoku dekiru kanojo no koto dakara, goukaku wa machigainai darou.',
        uz: "Hamma narsani puxta bajaradigan u qiz albatta imtihondan o'tishi shubhasiz.",
      },
      {
        ja: '全員そろったことだから、時間前だけれど始めましょうか。',
        romaji: 'Zenin sorotta koto dakara, jikan mae dakeredo hajimemashou ka.',
        uz: "Hamma to'plangan ekan, vaqtidan sal oldin bo'lsa ham boshlayveramizmi?",
      },
    ],
  },
  {
    id: 'n2_pdf_55_koto_ka',
    level: 'N2',
    title: '〜ことか (koto ka)',
    romaji: 'koto ka',
    meaningUz: "qanchalar ham ...-a! (chuqur his-tuyg'u / nadomat)",
    structure:
      'Verb (casual) ことか Noun + である な-adjective + な い-adjective 何度注意したことか︖ なんどちゅういしたことか︖ How many times have I warned you?',
    examples: [
      {
        ja: '合格を知ったとき、どんなに嬉しかったことか。',
        romaji: 'Goukaku o shitta toki, donna ni ureshikatta koto ka.',
        uz: "Imtihondan o'tganimni bilganimda qanchalar quvonganimni tasavvur ham qilolmaysiz!",
      },
    ],
  },
  {
    id: 'n2_pdf_56_koto_naku',
    level: 'N2',
    title: '〜ことなく (koto naku)',
    romaji: 'koto naku',
    meaningUz: "... qilmasdan / to'xtovsiz ravishda",
    structure:
      'Verb (dictionary form) ことなく お⽗さんは10年間休むことなく会社に通った。 おとうさんは10ねんかんやすむことなくかいしゃにかよった。 My father worked for 10 years without taking a break.',
    examples: [
      {
        ja: 'お父さんは10年間休むことなく会社に通った。',
        romaji: 'Otousan wa 10-nenkan yasumu koto naku kaisha ni kayotta.',
        uz: 'Otam 10 yil davomida biror kun ham qoldirmasdan ishga qatnadi.',
      },
      {
        ja: '彼らは試合に勝つために、1日も休むことなく練習に励んだ。',
        romaji: 'Karera wa shiai ni katsu tame ni, 1-nichi mo yasumu koto naku renshuu ni hagenda.',
        uz: "Ular musobaqada g'alaba qozonish uchun bir kun ham to'xtamasdan mashg'ulot olib bordilar.",
      },
    ],
  },
  {
    id: 'n2_pdf_57_koto_ni',
    level: 'N2',
    title: '〜ことに (koto ni)',
    romaji: 'koto ni',
    meaningUz: '...si shundaki / hayratlanarlisi shundaki',
    structure:
      "Verb (た form) ことに な-adjective + な い-adjective 嬉しいことに、明⽇退院できるんです。 うれしいことに、あしたたいいんできるんです。 I'm happy that tomorrow I will be able to leave the hospital.",
    examples: [
      {
        ja: '嬉しいことに、希望していた大学に合格できた。',
        romaji: 'Ureshii koto ni, kibou shite ita daigaku ni goukaku dekita.',
        uz: "Quvonarlisi shundaki, o'zim orzu qilgan universitetga o'qishga qabul qilindim.",
      },
    ],
  },
  {
    id: 'n2_pdf_58_koto_niwa_naranai',
    level: 'N2',
    title: '〜ことにはならない (koto niwa naranai)',
    romaji: 'koto niwa naranai',
    meaningUz: '... degani emas / mutlaqo shunday xulosa chiqmaydi',
    structure:
      'Verb (casual, past) + (とい う) ことにはならな い な-adjective + だという い-adjective + という でも、どうやらそんなことにはならないようです。 でも、どうやらそんなことにはならないようです。 But this did not seem likely to happen.',
    examples: [
      {
        ja: '彼が絵が好きだからといって絵がうまいということにはならない。',
        romaji: 'Kare ga e ga suki dakara to itte e ga umai to iu koto niwa naranai.',
        uz: "U rasm chizishni yaxshi ko'rishi uning zo'r chizishini anglatmaydi.",
      },
      {
        ja: '彼女は貧しいからといって不幸だということにはならない。',
        romaji: 'Kanojo wa mazushii kara to itte fukou da to iu koto niwa naranai.',
        uz: 'Uning kamtarona yashashi baxtsiz ekanligini bildirmaydi.',
      },
    ],
  },
  {
    id: 'n2_pdf_59_kuse_shite',
    level: 'N2',
    title: '〜くせして (kuse shite)',
    romaji: 'kuse shite',
    meaningUz: "... bo'la turib / shunga qaramay (norozilik yoki tanqid)",
    structure:
      "Verb (dictionary form) くせして Noun + の な-adjective + な い-adjective ⼤学⽣のくせして、そんなことも知らないの。 だいがくのくせして、そんなこともしらないの。 Even though you are a university student, you don't know that?",
    examples: [
      {
        ja: '大学生のくせして、そんなことも知らないの。',
        romaji: 'Daigakusei no kuse shite, sonna koto mo shiranai no.',
        uz: "Talaba bo'la turib, shunday oddiy narsani ham bilmaysanmi?",
      },
      {
        ja: '彼は歌が下手なくせして、いつもカラオケに行きたがる。',
        romaji: 'Kare wa uta ga heta na kuse shite, itsumo karaoke ni ikitagaru.',
        uz: "Qo'shiq aytishni eplay olmasa ham, doim karaokega borishni xohlayveradi.",
      },
    ],
  },
  {
    id: 'n2_pdf_60_nara_madashimo',
    level: 'N2',
    title: '〜未だしも 【ならまだしも】 (nara madashimo)',
    romaji: 'nara madashimo',
    meaningUz: "... bo'lsa mayli edi, biroq",
    structure:
      'Noun + なら まだしも Noun + は ⼀度だけならまだしも、⼆度も失敗してしまった。 いちどだけならまだしも、にどもしっぱいしてしまった。 It would be alright if I only messed up once, but I failed twice..',
    examples: [
      {
        ja: '一度だけならまだしも、二度も失敗してしまった。',
        romaji: 'Ichido dake nara madashimo, nido mo shippai shite shimatta.',
        uz: "Bir marta bo'lsa ham mayli edi, lekin ikki marta xatoga yo'l qo'yildi.",
      },
    ],
  },
  {
    id: 'n2_pdf_62_mama_ni',
    level: 'N2',
    title: '〜ままに (mama ni)',
    romaji: 'mama ni',
    meaningUz: "... holaticha / ko'ngildagidek",
    structure:
      "Verb (dictionary form) +（が） まま（に） Verb (られる form) +（が） Noun + の 今のままにしておこう。 いまのままにしておこう。 Let's leave this as is.",
    examples: [
      {
        ja: '今のままにしておこう。',
        romaji: 'Ima no mama ni shite okou.',
        uz: 'Hozirgi holaticha qoldiraylik.',
      },
      {
        ja: '思うままにどうぞ意見を言ってください。',
        romaji: 'Omou mama ni douzo iken o itte kudasai.',
        uz: "Ko'nglingizdagidek erkin fikr bildiring.",
      },
    ],
  },
  {
    id: 'n2_pdf_63_mattakunai',
    level: 'N2',
    title: '〜全く〜ない 【まったく〜ない】 (mattaku~nai)',
    romaji: 'mattaku~nai',
    meaningUz: 'mutlaqo ... emas / zarra ham',
    structure:
      'まったく Verb (ない form) 全く漢字が書けない。 まったくかんじがかけない。 I cannot write kanji at all.',
    examples: [
      {
        ja: '全く漢字が書けない。',
        romaji: 'Mattaku kanji ga kakenai.',
        uz: 'Kanjilarni mutlaqo yoza olmayman.',
      },
    ],
  },
  {
    id: 'n2_pdf_64_mo_kamawazu',
    level: 'N2',
    title: '〜も構わず【もかまわず】 (mo kamawazu)',
    romaji: 'mo kamawazu',
    meaningUz: "...ga ham e'tibor bermasdan / parvo qilmay",
    structure:
      'Verb (casual) + (の) も構わず もかまわず Noun 彼⼥は服が汚れるのもかまわず、公園で⽝と遊んでいる。 かのじょはふくがよごれるのもかまらず、こうえんでいぬとあそんでいる。 She played in the park with her dog without worrying about her clothes getting dirty.',
    examples: [
      {
        ja: '彼女は服が汚れるのもかまわず、公園で犬と遊んでいる。',
        romaji: 'Kanojo wa fuku ga yogoreru no mo kamawazu, kouen de inu to asonde iru.',
        uz: "U kiyimlari kir bo'lishiga ham parvo qilmasdan, xiyobonda iti bilan o'ynamoqda.",
      },
    ],
  },
  {
    id: 'n2_pdf_65_mo_touzen_da',
    level: 'N2',
    title: '〜も当然だ 【もとうぜんだ】 (mo touzen da)',
    romaji: 'mo touzen da',
    meaningUz: "... bo'lishi tabiiy hol / ajablanarli emas",
    structure:
      "Verb (casual) + の も当然だ Verb (て form) 彼⼥は美⼈で優しい⼈だから、みんなが好きになるのも当然だ。 かのじょはびじんでやさしいひとだから、みんながすきになるのもとうぜんだ。 She is beautiful and kind, so it's only natural that everyone likes her.",
    examples: [
      {
        ja: '彼女は美人で優しい人だから、みんなが好きになるのも当然だ。',
        romaji: 'Kanojo wa bijin de yasashii hito dakara, minna ga suki ni naru no mo touzen da.',
        uz: "U go'zal va oqko'ngil inson bo'lgani uchun hamma uni yaxshi ko'rishi tabiiy hol.",
      },
    ],
  },
  {
    id: 'n2_pdf_66_mono_da',
    level: 'N2',
    title: '〜ものだ (mono da)',
    romaji: 'mono da',
    meaningUz: "odatda shunday bo'ladi / ... qilish kerak",
    structure: 'JLPT N2 ぶんぽう',
    examples: [
      {
        ja: '人の悪口は言うものではない。',
        romaji: 'Hito no warukuchi wa iu mono dewa nai.',
        uz: "Odamlarning orqasidan yomon gap aytish to'g'ri emas.",
      },
    ],
  },
  {
    id: 'n2_pdf_67_mono_dakara',
    level: 'N2',
    title: '〜ものだから (mono dakara)',
    romaji: 'mono dakara',
    meaningUz: "... bo'lgani sababli (sabab / bahona)",
    structure:
      'Verb (casual) ものだから ものですから もんだから (spoken) Noun + な な-Adjective + な い-Adjective ⽬覚まし時計が壊れたものだから、遅刻してしまった。 めざましどけいがこわれたものだから、ちこくしてしまった。 My alarm clock broke, so I was late.',
    examples: [
      {
        ja: '目覚まし時計が壊れたものだから、遅刻してしまった。',
        romaji: 'Mezamashidokei ga kowareta mono dakara, chikoku shite shimatta.',
        uz: 'Budilnik buzilib qolgani sababli ishga kechikdim.',
      },
      {
        ja: 'すみません、風邪を引いてしまったものですから、今日は欠席です。',
        romaji: 'Sumimasen, kaze o hiite shimatta mono desu kara, kyou wa kesseki desu.',
        uz: 'Kechirasiz, shamollab qolganim sababli bugun darsga qatnasha olmayman.',
      },
    ],
  },
  {
    id: 'n2_pdf_68_mono_dewa_nai',
    level: 'N2',
    title: '〜ものではない (mono dewa nai)',
    romaji: 'mono dewa nai',
    meaningUz: "... qilish mutlaqo to'g'ri emas / yaramaydi",
    structure:
      'Verb (casual, past) ものではない 何が起こるかわかったものではない。 なにがおこるかわかったものではない。 There is no knowing what will happen.',
    examples: [
      {
        ja: '何が起こるかわかったものではない。',
        romaji: 'Nani ga okoru ka wakatta mono dewa nai.',
        uz: "Nima sodir bo'lishini oldindan bilib bo'lmaydi.",
      },
      {
        ja: '目上の人にそんな言い方をするものではない。',
        romaji: 'Meue no hito ni sonna iikata o suru mono dewa nai.',
        uz: "Kattalarga bunday ohangda gapirish aslo to'g'ri kelmaydi.",
      },
    ],
  },
  {
    id: 'n2_pdf_69_mono_ga_aru',
    level: 'N2',
    title: '〜ものがある (mono ga aru)',
    romaji: 'mono ga aru',
    meaningUz: '...dek tuyuladigan jihati bor',
    structure:
      'Verb (dictionary form) ものがある な-adjective い-adjective 彼の話にはどこか納得できないものがある。 かれのはなしにはどこかなっとくできないものがある。 There’s something unconvincing about his story.',
    examples: [
      {
        ja: '彼の話にはどこか納得できないものがある。',
        romaji: 'Kare no hanashi ni wa dokoka nattoku dekinai mono ga aru.',
        uz: "Uning gaplarida negadir odamni to'liq qoniqtirmaydigan bir jihat bor.",
      },
      {
        ja: '社長の言葉には、こころに響くものがある。',
        romaji: 'Shachou no kotoba ni wa, kokoro ni hibiku mono ga aru.',
        uz: "Rahbarning so'zlarida qalbga chuqur ta'sir qiladigan kuch bor.",
      },
    ],
  },
  {
    id: 'n2_pdf_70_mono_ka__mon_ka',
    level: 'N2',
    title: '〜ものか / もんか (mono ka / mon ka)',
    romaji: 'mono ka / mon ka',
    meaningUz: "aslo ... qilmayman / qayoqda! (qat'iy rad etish)",
    structure:
      'Verb (dictionary form) ものか もんか ものですか もんですか Noun + な な-adjective + な い-adjective あんな所へ誰が⾏くものか。 あんなところへだれがいくものか。 Who would think of going there?',
    examples: [
      {
        ja: 'あんな所へ誰が行くものか。',
        romaji: 'Anna tokoro e dare ga iku mono ka.',
        uz: "Bunday noxush joyga kim ham borardi deb o'ylaysiz?!",
      },
      {
        ja: 'そんな事知るものか。',
        romaji: 'Sonna koto shiru mono ka.',
        uz: 'Bunday narsani qayoqdan bilay axir?!',
      },
    ],
  },
  {
    id: 'n2_pdf_71_mono_nara',
    level: 'N2',
    title: '〜ものなら (mono nara)',
    romaji: 'mono nara',
    meaningUz: "agar iloji bo'lsa / qo'ldan kelsa",
    structure:
      "Verb (potential form れる) ものなら もんなら (spoken) やれるもんなら、やってみろ。 やれるもんなら、やってみろ。 If you can do it, let's see you try.",
    examples: [
      {
        ja: 'やれるもんなら、やってみろ。',
        romaji: 'Yareru mon nara, yatte miro.',
        uz: "Qo'lingdan kelsa, qilib ko'r-chi!",
      },
    ],
  },
  {
    id: 'n2_pdf_72_monono',
    level: 'N2',
    title: '〜ものの (monono)',
    romaji: 'monono',
    meaningUz: "... bo'lsa-da / ammo shunga qaramay",
    structure:
      "Verb (casual) ものの Noun + である な-adjective + な い-adjective 秋であるものの、まだ暑い。 あきであるものの、まだあつい。 Although it's fall, it is still hot.",
    examples: [
      {
        ja: '秋であるものの、まだ暑い。',
        romaji: 'Aki de aru monono, mada atsui.',
        uz: "Kuz fasli kirgan bo'lsa-da, havo hamon issiq.",
      },
      {
        ja: '申し込みはしたものの、試験を受けるかどうか未定です。',
        romaji: 'Moushikomi wa shita monono, shiken o ukeru ka dou ka mitei desu.',
        uz: "Ariza topshirgan bo'lsam-da, imtihonga kirish-kirmasligim hali noma'lum.",
      },
    ],
  },
  {
    id: 'n2_pdf_73_motto_mo',
    level: 'N2',
    title: '〜尤も 【もっとも】 (motto mo)',
    romaji: 'motto mo',
    meaningUz: "to'g'ri, albatta / lekin shuni ham aytish joizki",
    structure:
      'もっとも phrase 全員が参加しなければなりません。もっとも病気の場合は別です。 ぜんいんがさんかしなければなりません。もっともびょうきのばあいはべつです。 Everyone must participate, unless you are sick.',
    examples: [
      {
        ja: '全員が参加しなければなりません。もっとも病気の場合は別です。',
        romaji: 'Zenin ga sanka shinakereba narimasen. Motto mo byouki no baai wa betsu desu.',
        uz: "Hamma qatnashishi shart. To'g'ri, bemor bo'lgan holatlar bundan mustasno.",
      },
    ],
  },
  {
    id: 'n2_pdf_74_mou_sukoshi_de',
    level: 'N2',
    title: '〜もう少しで 【もうすこしで】 (mou sukoshi de)',
    romaji: 'mou sukoshi de',
    meaningUz: 'sal qolsa / ozgina qolganda',
    structure:
      'もう少しで Verb (ます stem) +  そうだった/そうになった Verb (dictionary form) +  ところだった" もう少しであの川でおぼれるところでした. もうすこしであのかわでおぼれるところでした. I almost drowned in that river.',
    examples: [
      {
        ja: 'もう少しで電車に乗り遅れるところだった。',
        romaji: 'Mou sukoshi de densha ni noriokureru tokoro datta.',
        uz: "Sal bo'lmasa poyezddan qolib ketayozdim.",
      },
    ],
  },
  {
    id: 'n2_pdf_75_nai_dewa_irarenai',
    level: 'N2',
    title: '〜ないではいられない (nai dewa irarenai)',
    romaji: 'nai dewa irarenai',
    meaningUz: '... qilmasdan tura olmayman / ilojsizman',
    structure:
      "Verb (ない form) ではいられない 試験の前だから、勉強しないではいられない。 しけんのまえだから、べんきょうしないではいられない。 Because it's before the test, I can't help but to study.",
    examples: [
      {
        ja: '試験の前だから、勉強しないではいられない。',
        romaji: 'Shiken no mae dakara, benkyou shinai dewa irarenai.',
        uz: "Imtihon oldi bo'lgani bois o'qimasdan tura olmayapman.",
      },
      {
        ja: '態度悪いの店員に、一言文句を言わないではいられない。',
        romaji: "Taido warui no ten'in ni, hitokoto monku o iwanai dewa irarenai.",
        uz: "Muomalasi qo'pol sotuvchiga biror og'iz e'tiroz bildirmasdan tura olmadim.",
      },
    ],
  },
  {
    id: 'n2_pdf_76_nai_koto_niwanai',
    level: 'N2',
    title: '〜ないことには〜ない (nai koto niwa~nai)',
    romaji: 'nai koto niwa~nai',
    meaningUz: "... qilmasdan turib ... qilib bo'lmaydi",
    structure:
      'Verb (ない form) ことには + Verb  (ない form) Noun + でない な-adjective + でない い-adjective + いくない 彼が来ないことには、会議を始めることができない。 かれがこないことには、かいぎをはじめることができない。 Unless he comes, we cannot start the meeting.',
    examples: [
      {
        ja: '彼が来ないことには、会議を始めることができない。',
        romaji: 'Kare ga konai koto niwa, kaigi o hajimeru koto ga dekinai.',
        uz: "U yetib kelmaguncha yig'ilishni boshlay olmaymiz.",
      },
      {
        ja: '一口食べてみないことには、美味しいかどうかわかりません。',
        romaji: 'Hitokuchi tabete minai koto niwa, oishii ka dou ka wakarimasen.',
        uz: "Bir luqma tatib ko'rmaguningizcha, uning shirin yoki yo'qligini bila olmaysiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_77_naka_onaka_dewa',
    level: 'N2',
    title: '〜中を/中では 【なかを/なかでは】 (naka o/naka dewa)',
    romaji: 'naka o/naka dewa',
    meaningUz: '... ichida / ... sharoitida',
    structure:
      'Verb (casual form) 中を 中では Noun + の Adjective 私はお店の中をうろうろしていた。 わたしはおみせのなかをうろうろしていた。 I wandered around in the store.',
    examples: [
      {
        ja: '私はお店の中をうろうろしていた。',
        romaji: 'Watashi wa omise no naka o urouro shite ita.',
        uz: "Men do'kon ichida aylanib yurgan edim.",
      },
    ],
  },
  {
    id: 'n2_pdf_78_naku_wa_nai',
    level: 'N2',
    title: '〜なくはない (naku wa nai)',
    romaji: 'naku wa nai',
    meaningUz: '... emas deb ayta olmayman / qisman shunday',
    structure:
      'Verb ない くはない くもない Noun + がな な-adjective + じゃな い-adjective + いくな ⾃信がなくはないが、ただちょっと緊張している。 じしんがなくはないが、ただちょっときんちょうしている。 It’s not that I have no confidence, I’m just a little nervous.',
    examples: [
      {
        ja: '自信がなくはないが、ただちょっと緊張している。',
        romaji: 'Jishin ga naku wa nai ga, tada chotto kinchou shite iru.',
        uz: "Ishonchim yo'q emas, shunchaki biroz hayajonlanyapman.",
      },
      {
        ja: '息子は野菜を食べなくはないが、あまり好きではない。',
        romaji: 'Musuko wa yasai o tabenaku wa nai ga, amari suki dewa nai.',
        uz: "O'g'lim sabzavotlarni umuman yemaydi emas, biroq unchalik xush ko'rmaydi.",
      },
    ],
  },
  {
    id: 'n2_pdf_79_nani_monai',
    level: 'N2',
    title: '〜何も〜ない 【なにも〜ない】 (nani mo~nai)',
    romaji: 'nani mo~nai',
    meaningUz: 'hech narsa ... emas / mutlaqo',
    structure:
      "なにも Verb/Noun/Adj (ない form) 私達はなにもいらない。 わたしたちはなにもいらない。 We don't need anything.",
    examples: [
      {
        ja: '私達はなにもいらない。',
        romaji: 'Watashitachi wa nanimo iranai.',
        uz: 'Bizga hech narsa kerak emas.',
      },
    ],
  },
  {
    id: 'n2_pdf_80_nao',
    level: 'N2',
    title: '〜なお (nao)',
    romaji: 'nao',
    meaningUz: 'bundan tashqari / hamon / shuningdek',
    structure:
      'なお phrase かなり多くの⼈々が今なおそれを信じている。 かなりおおくのひとびとがいまなおそれをしんじている。 Many people still believe that.',
    examples: [
      {
        ja: '彼はなお走り続けている。',
        romaji: 'Kare wa nao hashiritsuzukete iru.',
        uz: 'U hamon yugurishda davom etmoqda.',
      },
    ],
  },
  {
    id: 'n2_pdf_81_neba_naranai',
    level: 'N2',
    title: '〜ねばならない (neba naranai)',
    romaji: 'neba naranai',
    meaningUz: '... qilish shart / lozim (adabiy uslub)',
    structure:
      'Verb ない ねばならない ⻭医者に⾏かねばならない。 はいしゃにいかねばならない。 I must go to the dentist.',
    examples: [
      {
        ja: '真実を明らかにせねばならない。',
        romaji: 'Shinjitsu o akiraka ni seneba naranai.',
        uz: 'Haqiqatni fosh etishimiz shart.',
      },
    ],
  },
  {
    id: 'n2_pdf_82_ni_hoka_naranai',
    level: 'N2',
    title: '〜にほかならない (ni hoka naranai)',
    romaji: 'ni hoka naranai',
    meaningUz: 'aynan ...dan boshqa narsa emas',
    structure:
      'Noun にほかならない 合格したのは、彼の努⼒の結果にほかならない。 ごうかくしたのは、かれのどりょくのけっかにほかならない。 Him being able to pass is nothing else but the result of his hard effort.',
    examples: [
      {
        ja: '今回の成功は、皆さんの努力の結果にほかならない。',
        romaji: 'Konkai no seikou wa, minasan no doryoku no kekka ni hoka naranai.',
        uz: 'Bu galgi muvaffaqiyat barchangizning tinimsiz mehnatingiz samarasidan boshqa narsa emas.',
      },
    ],
  },
  {
    id: 'n2_pdf_83_ni_kagirazu',
    level: 'N2',
    title: '〜に限らず 【にかぎらず】 (ni kagirazu)',
    romaji: 'ni kagirazu',
    meaningUz: 'nafaqat ... balki barcha...',
    structure:
      'Noun に限らず 最近は、⼥性に限らず男性も化粧をする。 さいきんは、じょせいにかぎらずだんせいもけしょうをする。 Lately, not only women but also men have been wearing makeup.',
    examples: [
      {
        ja: '若者に限らず、高齢者もスマートフォンを使っている。',
        romaji: 'Wakamono ni kagirazu, koureisha mo sumaatofon o tsukatte iru.',
        uz: 'Nafaqat yoshlar, balki keksalar ham smartfondan foydalanishmoqda.',
      },
    ],
  },
  {
    id: 'n2_pdf_85_ni_kagitte',
    level: 'N2',
    title: '〜に限って 【にかぎって】 (ni kagitte)',
    romaji: 'ni kagitte',
    meaningUz: 'aynan ...ga kelganda / faqatgina ...da',
    structure:
      'Noun に限って うちの娘に限って、⼈をいじめるようなことはしません。 うちのむすめにかぎって、ひとをいじめるようなことはしません。 Our daughter would be the last person to do something like bully another person.',
    examples: [
      {
        ja: '傘を持っていない日に限って、雨が降る。',
        romaji: 'Kasa o motte inai hi ni kagitte, ame ga furu.',
        uz: "Aynan soyabon olmagan kunimga to'g'rilab yomg'ir yog'adi.",
      },
    ],
  },
  {
    id: 'n2_pdf_86_ni_kakawarazu',
    level: 'N2',
    title: '〜に関わらず 【にかかわらず】 (ni kakawarazu)',
    romaji: 'ni kakawarazu',
    meaningUz: "...ga qaramasdan / qat'i nazar",
    structure:
      'Verb (dictionary form) に関わらず にかかわらず Noun Adjective このバスは距離にかかわらず、どこまで⾏っても200円だ。 このバスはきょりにかかわらず、どこまでいっても200えんだ。 This bus costs 200 yen regardless of the distance you go.',
    examples: [
      {
        ja: '天候に関わらず、試合は行われます。',
        romaji: 'Tenkou ni kakawarazu, shiai wa okonawaremasu.',
        uz: "Ob-havoga qaramasdan, o'yin o'tkaziladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_87_ni_kakawaru',
    level: 'N2',
    title: '〜に関わる 【にかかわる】 (ni kakawaru)',
    romaji: 'ni kakawaru',
    meaningUz: "...ga daxldor / taqdiriga ta'sir qiluvchi",
    structure:
      'Noun 関わる にかかわる にかかわって にかかわり 息⼦はマスコミに関わる仕事をしている。 むすこはマスコミにかかわるしごとをしている。 My son works in a job related to mass communications.',
    examples: [
      {
        ja: 'これは命に関わる重大な問題だ。',
        romaji: 'Kore wa inochi ni kakawaru juudai na mondai da.',
        uz: "Bu inson hayotiga daxldor bo'lgan o'ta jiddiy masaladir.",
      },
    ],
  },
  {
    id: 'n2_pdf_88_ni_kimatte_iru',
    level: 'N2',
    title: '〜に決まっている 【にきまっている】 (ni kimatte iru)',
    romaji: 'ni kimatte iru',
    meaningUz: "shubhasiz ... bo'ladi / albatta",
    structure:
      "Verb (casual) に決まっている Noun な-adjective い-adjective 毎⽇、⼀⽣懸命勉強したから、絶対合格するに決まっている。 まいにち、いっしょうけんめいべんきょうしたから、ぜったいごうかくするにきまっ ている。 I've studied very hard every day so I am certain that I will pass the exam.",
    examples: [
      {
        ja: 'そんな嘘、すぐにばれるに決まっている。',
        romaji: 'Sonna uso, sugu ni bareru ni kimatte iru.',
        uz: "Bunday yolg'onning fosh bo'lishi aniq.",
      },
    ],
  },
  {
    id: 'n2_pdf_89_ni_koshita_koto_wa_nai',
    level: 'N2',
    title: '〜に越したことはない 【にこしたことはない】 (ni koshita koto wa nai)',
    romaji: 'ni koshita koto wa nai',
    meaningUz: "... bo'lgani ma'qul / ...dan yaxshisi yo'q",
    structure:
      'Verb (casual, non-past) に越したことはない Noun な-adjective い-adjective そうするに越したことはない。 そうするにこしたことはない。 That is the best thing to do.',
    examples: [
      {
        ja: '健康であるに越したことはない。',
        romaji: 'Kenkou de aru ni koshita koto wa nai.',
        uz: "Sog'-salomat bo'lishdan yaxshiroq narsa yo'q.",
      },
    ],
  },
  {
    id: 'n2_pdf_90_ni_kotaete',
    level: 'N2',
    title: '〜に応えて 【にこたえて】 (ni kotaete)',
    romaji: 'ni kotaete',
    meaningUz: '...ga javoban / umidlarini oqlab',
    structure:
      'Noun に応えて に応える に応え ⼤学は、学⽣たちの要望にこたえて、図書館の利⽤時間を延ばした。 だいがくは、がくせいたちのようぼうにこたえて、としょかんのりようじかんをのば した。 The university extended the library hours in response to student requests.',
    examples: [
      {
        ja: 'ファンの期待に応えて、彼は素晴らしいホームランを打った。',
        romaji: 'Fan no kitai ni kotaete, kare wa subarashii hoomuran o utta.',
        uz: 'Muxlislarining ishonchini oqlab, u ajoyib zarba bilan ochko keltirdi.',
      },
    ],
  },
  {
    id: 'n2_pdf_91_ni_kuwaete',
    level: 'N2',
    title: '〜に加えて 【にくわえて】 (ni kuwaete)',
    romaji: 'ni kuwaete',
    meaningUz: "...ga qo'shimcha tarzda / ustiga-ustak",
    structure:
      "Noun に加えて のどの痛みに加えて、熱も出てきたので学校を休むしかない。 のどのいたみにくわえて、ねつもでてきたのでがっこうをやすむしかない。 In addition to throat pain, I've started getting a fever and have no choice but to miss school.",
    examples: [
      {
        ja: '風雨に加えて、激しい雷まで鳴り始めた。',
        romaji: 'Fuuu ni kuwaete, hageshii kaminari made narihajimeta.',
        uz: "Kuchli shamol va yomg'ir ustiga, hatto dahshatli momaqaldiroq boshlandi.",
      },
    ],
  },
  {
    id: 'n2_pdf_92_ni_motozuite',
    level: 'N2',
    title: '〜に基づいて 【にもとづいて】 (ni motozuite)',
    romaji: 'ni motozuite',
    meaningUz: '...ga asoslanib / binoan',
    structure:
      'Noun に基づいて に基づき この⼩説は実際にあったことに基づいて書かれたそうです。 このしょうせつはじっさいにあったことにもとづいてかかれたそうです。 This novel is apparently written based on things that actually happened.',
    examples: [
      {
        ja: 'この小説は実際にあったことに基づいて書かれたそうです。',
        romaji: 'Kono shousetsu wa jissai ni atta koto ni motozuite kakareta sou desu.',
        uz: "Bu roman real hayotda bo'lib o'tgan voqealarga asoslanib yozilgan ekan.",
      },
    ],
  },
  {
    id: 'n2_pdf_93_ni_oujite',
    level: 'N2',
    title: '〜に応じて 【におうじて】 (ni oujite)',
    romaji: 'ni oujite',
    meaningUz: '...ga mos ravishda / qarab',
    structure:
      'Noun に応じて に応じた この学校は⽣徒の⽇本語のレベルに応じて、クラスを分けます。 このがっこうはせいとのにほんごのレベルにおうじて、クラスをわけます。 At this school students are divided up based on their Japanese ability level.',
    examples: [
      {
        ja: '能力や経験に応じて、給料が決められます。',
        romaji: 'Nouryoku ya keiken ni oujite, kyuuryou ga kimeraremasu.',
        uz: 'Qobiliyat va tajribaga mos ravishda maosh belgilanadi.',
      },
    ],
  },
  {
    id: 'n2_pdf_94_ni_saishite',
    level: 'N2',
    title: '〜に際して 【にさいして】 (ni saishite)',
    romaji: 'ni saishite',
    meaningUz: '... munosabati bilan / arafasida',
    structure:
      'Verb (dictionary form) に際して（は） Noun ⾞を買うに際しては、保険に⼊らなければならない。 くるまをかうにさいしては、ほけんにはいらなければならない。 When you buy a new car, you must buy insurance.',
    examples: [
      {
        ja: '新年の出発に際して、一言ご挨拶を申し上げます。',
        romaji: 'Shinnen no shuppatsu ni saishite, hitokoto goaisatsu o moushiagemasu.',
        uz: "Yangi yil kirib kelishi munosabati bilan barchangizga o'z tilaklarimni bildiraman.",
      },
    ],
  },
  {
    id: 'n2_pdf_95_ni_sakidachi',
    level: 'N2',
    title: '〜に先⽴ち 【にさきだち】 (ni sakidachi)',
    romaji: 'ni sakidachi',
    meaningUz: '...dan oldin / avval',
    structure:
      'Verb (dictionary form) に先⽴ち に先⽴って に先⽴つ Noun 会議に先⽴って、資料を集めておかなければならない。 かいぎにさきだって、しりょうをあつめておかなければならない Before the meeting, we must gather the resources.',
    examples: [
      {
        ja: '試合の開始に先立ち、両チームの選手が紹介された。',
        romaji: 'Shiai no kaishi ni sakidachi, ryou chiimu no senshu ga shoukai sareta.',
        uz: "O'yin boshlanishidan avval har ikki jamoa o'yinchilari tanishtirildi.",
      },
    ],
  },
  {
    id: 'n2_pdf_96_ni_shironi_shiro',
    level: 'N2',
    title: '〜にしろ〜にしろ (ni shiro~ni shiro)',
    romaji: 'ni shiro~ni shiro',
    meaningUz: "... bo'ladimi yoki ... bo'ladimi, baribir",
    structure:
      'Verb  (dict. form) にしろ にせよ Verb  ない form にしろ にせよ Noun Noun な-adj な-adj い-adj い-adj 明⽇のパーティーに⾏くにしろ⾏かないにしろ、連絡してくださいね。 あしたのパーティーにいくにしろいかないにしろ、れんらくしてくださいね。 Whether you go to the party tomorrow or not, please contact me.',
    examples: [
      {
        ja: '行くにしろ行かないにしろ、早く決めてください。',
        romaji: 'Iku ni shiro ikanai ni shiro, hayaku kimete kudasai.',
        uz: 'Borasizmi yo bormaysizmi, tezroq bir qarorga keling.',
      },
    ],
  },
  {
    id: 'n2_pdf_97_ni_shitemoni_shitemo',
    level: 'N2',
    title: '〜にしても〜にしても (ni shitemo~ni shitemo)',
    romaji: 'ni shitemo~ni shitemo',
    meaningUz: "... bo'lgan taqdirda ham / qanday bo'lmasin",
    structure:
      'Verb (dict. form) にしても にしろ Verb (dict. form) にしても にしろ Noun Noun な-adj な-adj い-adj い-adj ⾏くにしても⾏かないにしても、早く決めてください。 いくにしてもいかないにしても、はやくきめてください。 Hurry up and decide whether you will go or not.',
    examples: [
      {
        ja: '賛成するにしても反対するにしても、理由を説明してください。',
        romaji: 'Sansei suru ni shitemo hantai suru ni shitemo, riyuu o setsumei shite kudasai.',
        uz: "Rozi bo'lasizmi yoki qarshi chiqasizmi, sababini tushuntirib bering.",
      },
    ],
  },
  {
    id: 'n2_pdf_98_ni_sotte',
    level: 'N2',
    title: '〜に沿って 【にそって】 (ni sotte)',
    romaji: 'ni sotte',
    meaningUz: "... yoqasidan / ...ga mos ravishda (yo'riqnoma, qoida)",
    structure:
      'Noun に沿って に沿い に沿う に沿った この坂道に沿って⾃転⾞で⾏けば、1時間半ぐらいで頂上に着きます。 このさかみちにそってじてんしゃでいけば、1じかんはんぐらいでちょうじょうにつき ます。 If you go along this mountain road by bicycle, you will reach the peak in about an hour and a half.',
    examples: [
      {
        ja: 'マニュアルに沿って、機械を操作してください。',
        romaji: 'Manyuaru ni sotte, kikai o sousa shite kudasai.',
        uz: "Yo'riqnomaga qat'iy amal qilgan holda apparatni boshqaring.",
      },
    ],
  },
  {
    id: 'n2_pdf_99_ni_soui_nai',
    level: 'N2',
    title: '〜に相違ない 【にそういない】 (ni soui nai)',
    romaji: 'ni soui nai',
    meaningUz: "shubhasiz ... bo'lsa kerak / aniq",
    structure:
      "Verb (casual) に相違ない Noun + （である） な-adjective + （である） い-adjective 冷蔵庫に⼊れていたアイスクリームを⾷べたのは、娘に相違ない。 れいぞうこにいれていたアイスクリームをたべたのは、むすめにそういない。 I'm certain it was my daughter who ate the ice cream I put in the freezer.",
    examples: [
      {
        ja: '犯人はあの男に相違ない。',
        romaji: 'Hannin wa ano otoko ni soui nai.',
        uz: "Jinoyatchi o'sha odam ekanligi shubhasiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_100_ni_suginai',
    level: 'N2',
    title: '〜に過ぎない 【にすぎない】 (ni suginai)',
    romaji: 'ni suginai',
    meaningUz: 'shunchaki ... xolos / ...dan ortiq emas',
    structure:
      'Verb (casual) に過ぎない に過ぎません Noun + (である) な-adjective + (である) い-adjective 単に幸運だったにすぎない。 たんにこううんだったにすぎない。 That was just pure luck.',
    examples: [
      {
        ja: '私はただ自分の義務を果たしたにすぎない。',
        romaji: 'Watashi wa tada jibun no gimu o hatashita ni suginai.',
        uz: "Men shunchaki o'z burchimni bajardim xolos.",
      },
    ],
  },
  {
    id: 'n2_pdf_101_ni_tomonatte',
    level: 'N2',
    title: '〜に伴って 【にともなって】 (ni tomonatte)',
    romaji: 'ni tomonatte',
    meaningUz: '... bilan parallel ravishda / ... oqibatida',
    structure:
      'Verb (dictionary form) に伴って に伴い に伴う Noun それに伴って私たちの予定は再度変わるかもしれません。 それにともなってわたしたちのよていはさいどかわるかもしれません。 Accordingly, our plans may change again.',
    examples: [
      {
        ja: '人口の増加に伴って、様々な問題が生じている。',
        romaji: 'Jinkou no zouka ni tomonatte, samazama na mondai ga shoujite iru.',
        uz: "Aholi sonining o'sishi bilan birga turli xil muammolar yuzaga kelmoqda.",
      },
    ],
  },
  {
    id: 'n2_pdf_102_ni_tsuke',
    level: 'N2',
    title: '〜につけ (ni tsuke)',
    romaji: 'ni tsuke',
    meaningUz: "har safar ...ganda / ... bo'ladimi yo ... bo'ladimi",
    structure:
      'Verb (dictionary form) につけ につけて Noun その写真を⾒るにつけ、⼩学校のころを思い出す。 そのしゃしんをみるにつけ、しょうがっこうのころをおもいだす。 Whenever I see that photo, I think back to my elementary school days.',
    examples: [
      {
        ja: 'この写真を見るにつけ、故郷を思い出す。',
        romaji: 'Kono shashin o miru ni tsuke, kokyou o omoidasu.',
        uz: "Bu suratni ko'rgan har safarimda qadrdon vatanim yodimga tushadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_103_ni_tsuki',
    level: 'N2',
    title: '〜につき (ni tsuki)',
    romaji: 'ni tsuki',
    meaningUz: "... sababli / har bir ...ga (e'lonlarda)",
    structure:
      'Noun + につき 昼休みにつき、事務所は2時まで休みです。 ひるやすみにつき、じむしょはじまでやすみです。 The office will be closed until 2 o’clock due to the lunch break.',
    examples: [
      {
        ja: '工事中につき、立ち入り禁止。',
        romaji: 'Koujichuu ni tsuki, tachiiri kinshi.',
        uz: "Ta'mirlash ishlari olib borilayotganligi sababli kirish taqiqlanadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_104_ni_watatte',
    level: 'N2',
    title: '〜に渡って 【にわたって】 (ni watatte)',
    romaji: 'ni watatte',
    meaningUz: "... mobaynida / ... bo'ylab (butun hudud yoki davr)",
    structure:
      'Noun にわたって 道路は数マイルにわたってまっすぐ続いていた。 どうろはすうまいるにわたってまっすぐつづいていた。 The road ran straight for several miles.',
    examples: [
      {
        ja: '3日間にわたって、お祭りが開催された。',
        romaji: '3-mikkakan ni watatte, omatsuri ga kaisai sareta.',
        uz: 'Uch kun mobaynida bayram tadbirlari davom etdi.',
      },
    ],
  },
  {
    id: 'n2_pdf_105_nimo_kakawarazu',
    level: 'N2',
    title: '〜にも関わらず 【にもかかわらず】 (nimo kakawarazu)',
    romaji: 'nimo kakawarazu',
    meaningUz: "...ga qaramasdan / shunday bo'lsa ham",
    structure:
      'Verb (casual) にも関わらず にもかかわらず Noun + （である） な-adjective + （である） い-adjective ⼤学⽣にも関わらず、基本的な漢字が書けない⼈もいる。 だいがくせいにもかかわらず、きほんてきなかんじがかけないひともいる。 Despite being university students, there are some people who cannot write basic kanji.',
    examples: [
      {
        ja: '大雨にもかかわらず、多くの人が集まった。',
        romaji: 'Ooame nimo kakawarazu, ooku no hito ga atsumatta.',
        uz: "Kuchli yomg'ir yog'ayotganiga qaramay, juda ko'p odam to'plandi.",
      },
    ],
  },
  {
    id: 'n2_pdf_106_nite',
    level: 'N2',
    title: '〜にて (nite)',
    romaji: 'nite',
    meaningUz: '...da / ... orqali (rasmiy uslubdagi de yuklamasi)',
    structure:
      'Noun にて 今回のイベントは駅前にて⾏います。 こんかいのイベントはえきまえにておこないます。 This event will be held in front of the station.',
    examples: [
      {
        ja: '東京ドームにてコンサートが開催されます。',
        romaji: 'Toukyou Doumu nite konsaato ga kaisai saremasu.',
        uz: "Tokyo Dome saroyida katta konsert bo'lib o'tadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_107_no_mo_motto_mo_da',
    level: 'N2',
    title: '〜のももっともだ (no mo motto mo da)',
    romaji: 'no mo motto mo da',
    meaningUz: "... qilishi mutlaqo tabiiy / ajablanmasa ham bo'ladi",
    structure:
      'Verb (casual) + のも （は）もっともだ Noun + も 彼が仕事を辞めるのももっともだ。 かれがしごとをやめるのももっともだ。 He has every reason to quit his job.',
    examples: [
      {
        ja: '彼があんなに怒るのももっともだ。',
        romaji: 'Kare ga anna ni okoru no mo motto mo da.',
        uz: "Uning bunchalik g'azablanishi mutlaqo tabiiy.",
      },
    ],
  },
  {
    id: 'n2_pdf_108_no_moto_de',
    level: 'N2',
    title: '〜の下で 【のもとで】 (no moto de)',
    romaji: 'no moto de',
    meaningUz: "... qo'l ostida / rahnamoligida",
    structure:
      'Noun + の 下で 下に 下 もと ⽇本語を勉強するなら英語が話せる先⽣の下で勉強したいです。 にほんごをべんきょうするならえいごがはなせるせんせいのもとでべんきょうしたい です。 If I am going to study Japanese, I want to study under a teacher who can speak English.',
    examples: [
      {
        ja: '日本語を勉強するなら英語が話せる先生の下で勉強したいです。',
        romaji:
          'Nihongo o benkyou suru nara eigo ga hanaseru sensei no moto de benkyou shitai desu.',
        uz: "Agar yapon tilini o'rganadigan bo'lsam, ingliz tilini biladigan ustoz qo'l ostida o'rganmoqchiman.",
      },
    ],
  },
  {
    id: 'n2_pdf_109_no_ue_de_wa',
    level: 'N2',
    title: '〜の上では 【のうえでは】 (no ue de wa)',
    romaji: 'no ue de wa',
    meaningUz: '...ga binoan / qoida jihatidan',
    structure:
      'Noun の上で（は） 上の 規則の上では彼はまだ学⽣だ。 きそくのうえではかれはまだがくせいだ。 According to the rules, he is still a student.',
    examples: [
      {
        ja: '規則の上では彼はまだ学生だ。',
        romaji: 'Kisoku no ue de wa kare wa mada gakusei da.',
        uz: "Qoidaga ko'ra u hali ham talaba hisoblanadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_110_nominarazu',
    level: 'N2',
    title: '〜のみならず (nominarazu)',
    romaji: 'nominarazu',
    meaningUz: 'nafaqat ... balki ... ham (kitobiy uslub)',
    structure:
      'Verb (dictionary form) のみならず Noun な-adjective + である い-adjective 彼は英語のみならず、スペイン語も話せる。 かれはえいごのみならず、スペインごもはなせる。 Not only does he speak English, he speaks Spanish as well.',
    examples: [
      {
        ja: '彼は日本のみならず、世界中で知られている。',
        romaji: 'Kare wa Nihon nominarazu, sekaijuu de shirarete iru.',
        uz: 'U nafaqat Yaponiyada, balki butun jahonda mashhur.',
      },
    ],
  },
  {
    id: 'n2_pdf_111_nu',
    level: 'N2',
    title: '〜ぬ (nu)',
    romaji: 'nu',
    meaningUz: "...mas / inkor shakli (ない fe'lining adabiy varianti)",
    structure: 'Verb ない ぬ 知らぬが仏。 しらぬがほとけ。 Ignorance is bliss.',
    examples: [
      {
        ja: '知らぬ顔をする。',
        romaji: 'Shiranu kao o suru.',
        uz: "O'zini hech narsani bilmaydigandek tutmoq.",
      },
    ],
  },
  {
    id: 'n2_pdf_112_nuki_de',
    level: 'N2',
    title: '〜抜きにして 【ぬきにして】nuki ni shite & 抜きで 【ぬきで】 (nuki de)',
    romaji: 'nuki de',
    meaningUz: '...siz / ...ni qoldirgan holda',
    structure: 'JLPT N2 ぶんぽう',
    examples: [
      {
        ja: '冗談抜きで、真面目に話しましょう。',
        romaji: 'Joudan nuki de, majime ni hanashimashou.',
        uz: 'Hazilni bir chetga surib, jiddiy gaplashaylik.',
      },
    ],
  },
  {
    id: 'n2_pdf_113_nuku',
    level: 'N2',
    title: '〜抜く 【ぬく】 (nuku)',
    romaji: 'nuku',
    meaningUz: 'oxirigacha yetkazmoq / sabot bilan yengmoq',
    structure:
      'Verb ます (stem form) 抜く 彼は、何においても頑張り抜く。 かれは、なににおいてもがんばりぬく。 He tries to do his best in everything.',
    examples: [
      {
        ja: '困難を乗り越えて、最後まで走り抜いた。',
        romaji: 'Konnan o norikoete, saigo made hashirinuita.',
        uz: "Qiyinchiliklarni yengib, marragacha yugurib o'tdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_115_o_moto_ni',
    level: 'N2',
    title: '〜元にして 【をもとに】 (o moto ni)',
    romaji: 'o moto ni',
    meaningUz: '... asosida / negizida',
    structure:
      'Noun をもとに をもとにして 試験の結果をもとにしてクラス分けを⾏います。 しけんのけっかをもとにしてクラスわけをおこないます。 We’ll divide the class based on the test results.',
    examples: [
      {
        ja: '実話をもとにして映画が作られた。',
        romaji: 'Jitsuwa o moto ni shite eiga ga tsukurareta.',
        uz: 'Haqiqiy voqealar asosida film suratga olindi.',
      },
    ],
  },
  {
    id: 'n2_pdf_116_o_nozoite',
    level: 'N2',
    title: '〜を除いて 【をのぞいて】 (o nozoite)',
    romaji: 'o nozoite',
    meaningUz: '...dan tashqari / ...ni hisobga olmaganda',
    structure:
      'Noun を除いて(は) を除けば 彼は⽇曜⽇を除いて毎⽇働いている。 かれはにちようびをのぞいてまいにちはたらいている。 He works every day except Sundays.',
    examples: [
      {
        ja: '日曜日を除いて、毎日図書館で勉強している。',
        romaji: 'Nichiyoubi o nozoite, mainichi toshokan de benkyou shite iru.',
        uz: "Yakshanbadan tashqari har kuni kutubxonada o'qiyman.",
      },
    ],
  },
  {
    id: 'n2_pdf_117_o_towazu',
    level: 'N2',
    title: '〜を問わず 【をとわず】 (o towazu)',
    romaji: 'o towazu',
    meaningUz: "...dan qat'i nazar / farqsiz",
    structure:
      'Noun を問わず この公園では季節を問わず美しい花が⾒られます。 このこうえんではきせつをとわずうつくしいはながみられます。 You can see beautiful flowers in this park regardless of the season.',
    examples: [
      {
        ja: '年齢を問わず、誰でも参加できます。',
        romaji: 'Nenrei o towazu, dare demo sanka dekimasu.',
        uz: "Yoshidan qat'i nazar, har kim qatnashishi mumkin.",
      },
    ],
  },
  {
    id: 'n2_pdf_118_onegau',
    level: 'N2',
    title: '〜お〜願う 【お〜ねがう】 (o~negau)',
    romaji: 'o~negau',
    meaningUz: "iltimos, ... qilishingizni so'rayman (hurmat shakli)",
    structure:
      'お + Verb ます (stem form) 願います 願えますか お/ご + Noun (action) しばらくお待ち願います。 しばらくおまちねがいます。 Please wait a moment.',
    examples: [
      {
        ja: 'こちらにご記入願います。',
        romaji: 'Kochira ni gokinyuu negaimasu.',
        uz: "Iltimos, mana bu joyni to'ldirib bersangiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_119_omake_ni',
    level: 'N2',
    title: '〜お負けに 【おまけに】 (omake ni)',
    romaji: 'omake ni',
    meaningUz: 'ustiga-ustak / qolaversa',
    structure:
      'Phrase おまけに 寒くておまけに⾵も強かった。 さむくておまけにかぜもつよかった。 It was cold, and to make matters worse, the wind was strong.',
    examples: [
      {
        ja: '雨が降り出し、おまけに風まで強くなってきた。',
        romaji: 'Ame ga furidashi, omake ni kaze made tsuyoku natte kita.',
        uz: "Yomg'ir yog'a boshladi, ustiga-ustak shamol ham kuchayib ketdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_120_osoraku',
    level: 'N2',
    title: '〜恐らく 【おそらく】 (osoraku)',
    romaji: 'osoraku',
    meaningUz: 'ehtimol / katta ehtimol bilan',
    structure:
      'おそらく phrase これは恐らく間違いです。 これはおそらくまちがいです。 This is likely a mistake.',
    examples: [
      {
        ja: '恐らく明日は晴れるだろう。',
        romaji: 'Osoraku ashita wa hareru darou.',
        uz: "Katta ehtimol bilan ertaga havo ochiq bo'ladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_121_osore_ga_aru',
    level: 'N2',
    title: '〜恐れがある 【おそれがある】 (osore ga aru)',
    romaji: 'osore ga aru',
    meaningUz: '... xavfi mavjud / ehtimoli bor (xatarli oqibat)',
    structure:
      'Verb (casual) 恐れがある おそれがある Noun + の 梅⾬に⼊ってからほとんど⾬が降っていない。このまま降らないと、⽔不⾜に なる恐れがある。 つゆにはいってからほとんどあめがふっていない。このままふらないと、みずふそく になるおそれがある。 It has barely rained since entering the rainy season. If things continue like this, there is worry of a water shortage.',
    examples: [
      {
        ja: 'この病気は命を落とす恐れがある。',
        romaji: 'Kono byouki wa inochi o otosu osore ga aru.',
        uz: "Bu kasallik hayotdan ko'z yumish xavfini keltirib chiqarishi mumkin.",
      },
    ],
  },
  {
    id: 'n2_pdf_122_oyobi',
    level: 'N2',
    title: '〜及び 【および】 (oyobi)',
    romaji: 'oyobi',
    meaningUz: 'va / hamda (rasmiy uslub)',
    structure:
      'Noun および Noun 鉛筆及び紙を持ってきてください。 えんぴつおよびかみをもってきてください。 Please bring a Pencil and a Paper.',
    examples: [
      {
        ja: '筆記用具及び身分証明書をご持参ください。',
        romaji: 'Hikkiyougu oyobi mibun shoumeisho o gojisan kudasai.',
        uz: "Yozuv qurollari hamda shaxsingizni tasdiqlovchi hujjatni o'zingiz bilan olib keling.",
      },
    ],
  },
  {
    id: 'n2_pdf_123_roku_ninai',
    level: 'N2',
    title: '〜碌に〜無い 【ろくに〜ない】 (roku ni~nai)',
    romaji: 'roku ni~nai',
    meaningUz: 'tuzuk-quruq ... emas / arzigulik emas',
    structure:
      'ろくに Verb (ない form) 昨夜はろくに寝なかった。 きのうはろくにねなかった。 I did not sleep well last night.',
    examples: [
      {
        ja: '忙しくて、最近ろくに寝ていない。',
        romaji: 'Isogashikute, saikin roku ni nete inai.',
        uz: "Ish ko'pligidan so'nggi paytlarda tuzuk-quruq uxlaganim ham yo'q.",
      },
    ],
  },
  {
    id: 'n2_pdf_124_sei_ka',
    level: 'N2',
    title: '〜せいか (sei ka)',
    romaji: 'sei ka',
    meaningUz: '... sabablimikan / tufaylimikan (salbiy gumon)',
    structure:
      'Verb (casual) せいか Noun + の な-adjective + な/だった い-adjective たくさん仕事をしたせいか、病気になってしまった。 たくさんしごとをしたせいか、びょうきになってしまった。 I got sick perhaps because I worked too much',
    examples: [
      {
        ja: '寝不足のせいか、頭が痛い。',
        romaji: 'Nebusoku no sei ka, atama ga itai.',
        uz: "Uyqu yetishmasligi tufaylimikan, boshim og'riyapti.",
      },
    ],
  },
  {
    id: 'n2_pdf_125_sekkaku',
    level: 'N2',
    title: '〜折⾓ 【せっかく】 (sekkaku)',
    romaji: 'sekkaku',
    meaningUz: 'shuncha harakat qilib / fursat kelganda',
    structure:
      "せっかく clause (+ conjunction) せっかく勉強したのに合格できなかった。 せっかくべんきょうしたのにごうかくできなかった。 Even though I went through the effort of studying, I couldn't pass (the test).",
    examples: [
      {
        ja: 'せっかく日本に来たのだから、富士山に登りたい。',
        romaji: 'Sekkaku Nihon ni kita no dakara, Fujisan ni noboritai.',
        uz: "Shuncha yo'l bosib Yaponiyaga kelgan ekanman, Fuji tog'iga ko'tarilmoqchiman.",
      },
    ],
  },
  {
    id: 'n2_pdf_126_semete',
    level: 'N2',
    title: '〜せめて (semete)',
    romaji: 'semete',
    meaningUz: "hech bo'lmaganda / loaqal",
    structure:
      "せめて phrase せめてあと⼗分待ってくれませんか。 せめてあとじゅうぷんまってくれませんか。 Can't you wait just ten more minutes?",
    examples: [
      {
        ja: 'せめて日曜日くらいはゆっくり休みたい。',
        romaji: 'Semete nichiyoubi kurai wa yukkuri yasumitai.',
        uz: "Hech bo'lmasa yakshanba kuni maroqli dam olgim keladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_127_shidai',
    level: 'N2',
    title: '〜次第 【しだい】 (shidai)',
    romaji: 'shidai',
    meaningUz: '... bilanoq / darhol',
    structure:
      'Verb ます (stem form) 次第 部屋の準備ができ次第、会議を始めます。 へやのじゅんびができしだい、かいぎをはじめます。 Once the room preparations are complete, we will begin the meeting.',
    examples: [
      {
        ja: '部屋の準備ができ次第、会議を始めます。',
        romaji: 'Heya no junbi ga deki shidai, kaigi o hajimemasu.',
        uz: "Xona tayyor bo'lishi bilanoq majlisni boshlaymiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_128_shidai_de',
    level: 'N2',
    title: '〜次第で 【しだいで】 (shidai de)',
    romaji: 'shidai de',
    meaningUz: "...ga bog'liq / ...ga qarab",
    structure:
      'Noun 次第で（は） 次第だ 我々が成功できるかどうかは君次第だ。 われわれがせいこうできるかどうかはきみしだいだ。 It is up to you whether we can succeed or not.',
    examples: [
      {
        ja: '我々が成功できるかどうかは君次第だ。',
        romaji: 'Wareware ga seikou dekiru ka dou ka wa kimi shidai da.',
        uz: "Muvaffaqiyat qozonish-qozonmasligimiz senga bog'liq.",
      },
    ],
  },
  {
    id: 'n2_pdf_129_shidai_ni',
    level: 'N2',
    title: '〜次第に 【しだいに】 (shidai ni)',
    romaji: 'shidai ni',
    meaningUz: 'asta-sekin / borgan sari',
    structure:
      '次第に phrase ⾵は次第におさまった。 かぜはしだいにおさまった。 The wind gradually died down.',
    examples: [
      {
        ja: '天候は次第に回復する見込みです。',
        romaji: 'Tenkou wa shidai ni kaifuku suru mikomi desu.',
        uz: 'Ob-havo asta-sekin yaxshilanib borishi kutilmoqda.',
      },
    ],
  },
  {
    id: 'n2_pdf_130_shikamo',
    level: 'N2',
    title: '〜しかも (shikamo)',
    romaji: 'shikamo',
    meaningUz: 'ustiga-ustak / bundan tashqari',
    structure:
      'しかも phrase この教科書の説明はわかりやすくて、しかも詳しい 。 このきょうかしょのせつめいはわかりやすくて、しかもくわしい。 This textbook’s explanations are easy to understand and what’s more, they’re very detailed.',
    examples: [
      {
        ja: 'このレストランの料理は安くて、しかも美味しい。',
        romaji: 'Kono resutoran no ryouri wa yasukute, shikamo oishii.',
        uz: 'Bu restoranning taomlari arzon, ustiga-ustak juda mazali.',
      },
    ],
  },
  {
    id: 'n2_pdf_131_sono_ue',
    level: 'N2',
    title: '〜その上 【そのうえ】 (sono ue)',
    romaji: 'sono ue',
    meaningUz: "uning ustiga / qo'shimchasiga",
    structure:
      'その上 phrase その上、そのレストランは私たちのホテルからとても近い。 そのうえ、そのレストランはわたしたちのホテルからとてもちかい。 In addition, the restaurant is very near to our hotel.',
    examples: [
      {
        ja: '彼は頭が良く、その上スポーツも万能だ。',
        romaji: 'Kare wa atama ga yoku, sono ue supootsu mo bannou da.',
        uz: 'U juda aqlli, uning ustiga sportda ham har tomonlama yetuk.',
      },
    ],
  },
  {
    id: 'n2_pdf_132_sore_na_noni',
    level: 'N2',
    title: '〜それなのに (sore na noni)',
    romaji: 'sore na noni',
    meaningUz: "shunday bo'lsa ham / shunga qaramasdan",
    structure:
      'それなのに phrase 毎⽇残業しているし、休⽇も出勤した。それなのに給料がまだ少ない。 まいにちざんぎょうしているし、きゅうじつもしゅっきんした。それなのにきゅうり ょうがまだすくない。 I work overtime everyday and even work on holidays. Despite that, my salary is still low.',
    examples: [
      {
        ja: '雨が降っている。それなのに、彼は傘を持たずに出かけた。',
        romaji: 'Ame ga futte iru. Sore na noni, kare wa kasa o motazu ni dekaketa.',
        uz: "Yomg'ir yog'moqda. Shunday bo'lsa-da, u soyabonsiz ko'chaga chiqib ketdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_133_sore_nara',
    level: 'N2',
    title: '〜それなら (sore nara)',
    romaji: 'sore nara',
    meaningUz: "agar shunday bo'lsa / u holda",
    structure:
      'それなら phrase 「朝から、調⼦が悪いです。」 「それなら、早く帰って病院へ⾏ったほうがいいですよ。」 「あさから、ちょうしがわるいです。」  「それなら、はやくかえってびょういんへいったほうがいいですよ。」 "I\'ve not been feeling well since this morning." "If that\'s the case, then you should head home early and go to the hospital."',
    examples: [
      {
        ja: '「時間がありません」「それなら急ぎましょう」',
        romaji: "'Jikan ga arimasen' 'Sorenara isogimashou'",
        uz: "'Vaqtimiz yo'q' — 'U holda shoshilaylik'.",
      },
    ],
  },
  {
    id: 'n2_pdf_134_sore_ni_shitemo',
    level: 'N2',
    title: '〜それにしても (sore ni shitemo)',
    romaji: 'sore ni shitemo',
    meaningUz: "shunda ham / har holda / nima bo'lganda ham",
    structure:
      'それにしても phrase それにしてもあなたは絵が上⼿ですね。 それにしてもあなたはえがじょうずですね。 At any rate, I think you are great at drawing.',
    examples: [
      {
        ja: 'それにしても、今日は特別に寒いですね。',
        romaji: 'Sore ni shitemo, kyou wa tokubetsu ni samui desu ne.',
        uz: "Nima bo'lganda ham, bugun havo nihoyatda sovuq.",
      },
    ],
  },
  {
    id: 'n2_pdf_135_sou_ieba',
    level: 'N2',
    title: '〜そう⾔えば 【そういえば】 (sou ieba)',
    romaji: 'sou ieba',
    meaningUz: 'aytmoqchi / shuni aytganda yodimga tushdi',
    structure:
      'そういえば phrase そういえば、⼦供のころ、両親と⼀緒にここに来たことを覚えている。 そういえば、こどものころ、りょうしんといっしょにここにきたことをおぼえてい る。 Come to think of it, I remember coming here together with my parents during my childhood.',
    examples: [
      {
        ja: 'そういえば、昨日の約束はどうなりましたか？',
        romaji: 'Sou ieba, kinou no yakusoku wa dou narimashita ka?',
        uz: "Aytmoqchi, kechagi va'dalashuv nima bo'ldi?",
      },
    ],
  },
  {
    id: 'n2_pdf_136_sou_suru_to',
    level: 'N2',
    title: '〜そうすると (sou suru to)',
    romaji: 'sou suru to',
    meaningUz: "shunday qilinsa / shundan so'ng",
    structure:
      "そうすると phrase まだ出発しないの︖そうすると、約束の時間に間に合わないよ。 まだしゅっぱつしないの︖そうすると、やくそくのじかんにまにあわないよ。 You haven't left yet? You're not going to make it on time now.",
    examples: [
      {
        ja: 'このボタンを押します。そうすると、ドアが開きます。',
        romaji: 'Kono botan o oshimasu. Sou suru to, doa ga akimasu.',
        uz: 'Bu tugmani bosasiz. Shunda eshik ochiladi.',
      },
    ],
  },
  {
    id: 'n2_pdf_137_sue_ni',
    level: 'N2',
    title: '〜末に 【すえに】 (sue ni)',
    romaji: 'sue ni',
    meaningUz: "uzoq ...dan so'ng / oxirida",
    structure:
      'Verb (た form) 末（に） Noun + の いろいろ迷った末に、留学することにした。 いろいろまよったすえに、りゅうがくすることにした。 After worrying about various things, I decided to study abroad.',
    examples: [
      {
        ja: '悩んだ末に、仕事を辞めることにした。',
        romaji: 'Nayanda sue ni, shigoto o yameru koto ni shita.',
        uz: "Uzoq o'ylanishlar ortidan, nihoyat ishdan ketishga qaror qildim.",
      },
    ],
  },
  {
    id: 'n2_pdf_138_sukoshi_monai',
    level: 'N2',
    title: '〜少しも〜ない 【すこしも〜ない】 (sukoshi mo~nai)',
    romaji: 'sukoshi mo~nai',
    meaningUz: 'zarra ham ... emas / mutlaqo',
    structure:
      "少しも Verb (ない form) Noun + ではない な-adjective + ではない い-adjective + いくない こんな暑い天気でピクニックするなんて、少しも楽しくないよ。 こんなあついてんきでピクニックするなんて、すこしもたのしくないよ。 Having a picnic in such hot weather isn't fun at all.",
    examples: [
      {
        ja: '彼の言っていることは少しも理解できない。',
        romaji: 'Kare no itte iru koto wa sukoshi mo rikai dekinai.',
        uz: 'U nima deyayotganini zarra ham tushuna olmayapman.',
      },
    ],
  },
  {
    id: 'n2_pdf_139_sukunaku_tomo',
    level: 'N2',
    title: '〜少なくとも 【すくなくとも】 (sukunaku tomo)',
    romaji: 'sukunaku tomo',
    meaningUz: 'kamida / kam deganda',
    structure:
      '少なくとも phrase 彼⼥は少なくとも３０歳だ。 かのじょはすくなくとも３０さいだ。 She is not less than thirty.',
    examples: [
      {
        ja: '合格するには少なくとも300時間は勉強が必要だ。',
        romaji: 'Goukaku suru ni wa sukunaku tomo 300-jikan wa benkyou ga hitsuyou da.',
        uz: "O'tish uchun kamida 300 soatlik dars qilish zarur.",
      },
    ],
  },
  {
    id: 'n2_pdf_140_tadachi_ni',
    level: 'N2',
    title: '〜直ちに 【ただちに】 (tadachi ni)',
    romaji: 'tadachi ni',
    meaningUz: 'zudlik bilan / darhol',
    structure:
      '直ちに phrase 彼らは直ちに彼⼥に⼿術をしなければならないだろう。 かれらはただちにかのじょにしゅじゅつをしなければならないだろう。 They will have to operate on the woman immediately.',
    examples: [
      {
        ja: '危険ですから、直ちに避難してください。',
        romaji: 'Kiken desu kara, tadachi ni hinan shite kudasai.',
        uz: "Xavfli bo'lgani sababli zudlik bilan xavfsiz joyga o'ting.",
      },
    ],
  },
  {
    id: 'n2_pdf_141_tamae',
    level: 'N2',
    title: '〜たまえ (tamae)',
    romaji: 'tamae',
    meaningUz: '...gin / ...gin-chi (erkaklar buyruq shakli)',
    structure: 'Verb ます (stem form) たまえ ⼊りたまえ。 はいりたまえ。 Come in.',
    examples: [
      {
        ja: 'もっと自信を持ちたまえ。',
        romaji: 'Motto jishin o mochitamae.',
        uz: "O'zingga yanada qat'iyroq ishonch hosil qilgin.",
      },
    ],
  },
  {
    id: 'n2_pdf_142_te_bakari_wa_irarenai',
    level: 'N2',
    title: '〜てばかりはいられない (te bakari wa irarenai)',
    romaji: 'te bakari wa irarenai',
    meaningUz: "tinimsiz ... qilib o'tira olmayman / chek qo'yish kerak",
    structure:
      "Verb (て form) ばかりは ばかりも いられない どんなに⾟くても、泣いてばかりもいられない。 いつも泣くのはできない No matter how tough it gets, I can't keep crying like this.",
    examples: [
      {
        ja: 'いつまでも泣いてばかりはいられない。',
        romaji: 'Itsu made mo naite bakari wa irarenai.',
        uz: "Doim yig'lab o'tira olmayman, oldinga harakat qilishim kerak.",
      },
    ],
  },
  {
    id: 'n2_pdf_143_te_demo',
    level: 'N2',
    title: '〜てでも (te demo)',
    romaji: 'te demo',
    meaningUz: "hatto ... qilishga to'g'ri kelsa ham (har qanday yo'l bilan)",
    structure:
      "Verb (て form) でも 何としてでも痩せたい。 たんとしてでもやせたい。 I'll do whatever it takes to lose weight.",
    examples: [
      {
        ja: '借金をしてでも、この家を買いたい。',
        romaji: 'Shakkin o shite demo, kono ie o kaitai.',
        uz: "Qarz olib bo'lsa ham bu uyni sotib olishni xohlayman.",
      },
    ],
  },
  {
    id: 'n2_pdf_144_te_irai',
    level: 'N2',
    title: '〜て以来 【ていらい】 (te irai)',
    romaji: 'te irai',
    meaningUz: "... qilgandan buyon / beri (o'zgarmas holat)",
    structure:
      "Verb (てform) 以来 Noun ⽇本に来て以来、⺟の料理を⾷べていない。 にほんにきていらい、ははのりょうりをたべていない。 I haven't eaten my mother's cooking since coming to Japan.",
    examples: [
      {
        ja: '日本に来て以来、毎日日本語で日記を書いている。',
        romaji: 'Nihon ni kite irai, mainichi nihongo de nikki o kaite iru.',
        uz: 'Yaponiyaga kelganimdan buyon har kuni yapon tilida kundalik yozib kelmoqdaman.',
      },
    ],
  },
  {
    id: 'n2_pdf_145_te_ite_wa',
    level: 'N2',
    title: '〜ていては (te ite wa)',
    romaji: 'te ite wa',
    meaningUz: 'agar doim shunday qilinsa (yomon oqibat muqarrar)',
    structure:
      'Verb (て form) いては そんなに⽢いものばかり⾷べていては、太りますよ。 そんなにあまいものばかりたべていては、ふりますよ。 If you only eat sweets, you will gain weight.',
    examples: [
      {
        ja: 'そんなに遊んでいては、試験に落ちてしまうよ。',
        romaji: 'Sonna ni asonde ite wa, shiken ni ochite shimau yo.',
        uz: "Shunchalik ko'p o'yin-kulgi qilaversang, imtihondan yiqilib qolasan.",
      },
    ],
  },
  {
    id: 'n2_pdf_146_te_koso',
    level: 'N2',
    title: '〜てこそ (te koso)',
    romaji: 'te koso',
    meaningUz: 'aynan ... qilgandagina / ... ortidangina',
    structure:
      'Verb (て form) こそ 親になってこそ、親の苦労や気持ちがわかるものだ。 おやになってこそ、おやのくろうやきもちがわかるものだ。 Only after you become a parent can you understand the struggles and feelings of raising children.',
    examples: [
      {
        ja: '自分でやってみてこそ、その難しさがわかる。',
        romaji: 'Jibun de yatte mite koso, sono muzukashisa ga wakaru.',
        uz: "O'zingiz sinab ko'rganingizdagina uning qanchalik qiyinligini tushunasiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_149_te_touzen_da',
    level: 'N2',
    title: '〜て当然だ 【てとうぜんだ】 (te touzen da)',
    romaji: 'te touzen da',
    meaningUz: "... bo'lishi tabiiy hol / kutilganidek",
    structure:
      "Verb (て form) 当然だ 当たり前だ な-adjective + で い-adjective + いくて 毎⽇遅くまで残業しているから、疲れて当然だ。 まいにちおそくまでざんぎょうしているから、つかれてとうぜんだ。 You're working overtime late everyday, so it's only natural to be tired.",
    examples: [
      {
        ja: '毎日遅くまで残業しているから、疲れて当然だ。',
        romaji: 'Mainichi osoku made zangyou shite iru kara, tsukarete touzen da.',
        uz: 'Har kuni kechgacha ortiqcha ishlayotganingiz sababli charchashingiz tabiiy.',
      },
    ],
  },
  {
    id: 'n2_pdf_150_tewa__dewa',
    level: 'N2',
    title: '〜ては / では (tewa / dewa)',
    romaji: 'tewa / dewa',
    meaningUz: "agar ... qilinsa / har gal ... bo'lganda",
    structure: 'JLPT N2 ぶんぽう',
    examples: [
      {
        ja: 'こんなに雨が降っては、出かけられない。',
        romaji: 'Konna ni ame ga futte wa, dekakerarenai.',
        uz: "Bunday kuchli yomg'ir yog'ayotganda ko'chaga chiqa olmaymiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_151_tewa_irarenai',
    level: 'N2',
    title: '〜てはいられない (tewa irarenai)',
    romaji: 'tewa irarenai',
    meaningUz: "... qilib tura olmayman / vaqtni boy berib bo'lmaydi",
    structure:
      'Verb (て form) はいられない Noun + で な-adjective + で ぐずぐずしてはいられない。 ぐずぐずしてはいられない。 We have no time to lose.',
    examples: [
      {
        ja: 'もう時間がないから、のんびりしてはいられない。',
        romaji: 'Mou jikan ga nai kara, nonbiri shite wa irarenai.',
        uz: "Vaqt qolmadi, shuning uchun bemalol o'tirishga haqqimiz yo'q.",
      },
    ],
  },
  {
    id: 'n2_pdf_152_tewa_naranai',
    level: 'N2',
    title: '〜てはならない (tewa naranai)',
    romaji: 'tewa naranai',
    meaningUz: '... qilish mutlaqo mumkin emas / taqiqlanadi',
    structure:
      'Verb (て form) はならない 過去を忘れてはならない。 かこをわすれてはならない。 We must never forget the past.',
    examples: [
      {
        ja: 'この秘密を誰にも話してはならない。',
        romaji: 'Kono himitsu o dare nimo hanashite wa naranai.',
        uz: "Bu sirni hech kimga aytib qo'yish mumkin emas.",
      },
    ],
  },
  {
    id: 'n2_pdf_153_tewatewa',
    level: 'N2',
    title: '〜ては〜ては (tewa~tewa)',
    romaji: 'tewa~tewa',
    meaningUz: 'bir ... qilib, bir ... qilib (takroriy harakat)',
    structure:
      "V ては V て V ては V て V ます V ます 1 2 1 2 2 2 ⽴っては座り、座っては⽴ち、気分が落ち着かない。 たってはすわり、すわってはたち、きぶんがおちつかない。 I keep standing and sitting down again, and can't seem to settle down.",
    examples: [
      {
        ja: '書いては消し、書いては消して、手紙をやっと書き上げた。',
        romaji: 'Kaite wa keshi, kaite wa keshite, tegami o yatto kakiageta.',
        uz: "Bir yozib, bir o'chirib, nihoyat maktubni yozib tugatdim.",
      },
    ],
  },
  {
    id: 'n2_pdf_154_to_douji_ni',
    level: 'N2',
    title: '〜と同時に 【とどうじに】 (to douji ni)',
    romaji: 'to douji ni',
    meaningUz: "... bilan bir vaqtning o'zida",
    structure:
      'Verb (casual, non-past) と同時に Noun な-adj + である 彼らは笑うと同時に泣いた。 かれらはわらうとどうじにないた。 They laughed and cried at the same time.',
    examples: [
      {
        ja: 'ベルが鳴ると同時に、生徒たちは教室から飛び出した。',
        romaji: 'Beru ga naru to douji ni, seitotachi wa kyoushitsu kara tobidashita.',
        uz: "Qo'ng'iroq chalinishi bilanoq, o'quvchilar xonadan yugurib chiqishdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_155_to_itta',
    level: 'N2',
    title: '〜と⾔った 【といった】 (to itta)',
    romaji: 'to itta',
    meaningUz: '... kabi / ... singari',
    structure:
      'Noun といった バスケットボール、サッカーといったスポーツは⼤学⽣に⼈気がある。 バスケットボール、サッカーといったスポーツはだいがくせいににんきがある。 Sports such as basketball and soccer are popular with college students.',
    examples: [
      {
        ja: '京都や奈良といった古い町を訪れたい。',
        romaji: 'Kyouto ya Nara to itta furui machi o otozuretai.',
        uz: 'Kioto va Nara kabi qadimiy shaharlarga bormoqchiman.',
      },
    ],
  },
  {
    id: 'n2_pdf_156_to_iu_fuu_ni',
    level: 'N2',
    title: '〜という⾵に 【というふうに】 (to iu fuu ni)',
    romaji: 'to iu fuu ni',
    meaningUz: '... tarzda / ... degan fikrda',
    structure:
      'Phrase という⾵に というふうに 彼⼥は信じられないというふうに頭を振った。 かのじょはしんじられないというふうにあたまをふった。 She shook her head in disbelief.',
    examples: [
      {
        ja: '私はいつも早起きをするというふうに習慣づけている。',
        romaji: 'Watashi wa itsumo hayaoki o suru to iu fuu ni shuukanzukete iru.',
        uz: "Men doim erta turish tarzida o'zimda odat shakllantirganman.",
      },
    ],
  },
  {
    id: 'n2_pdf_157_to_iu_koto_wa',
    level: 'N2',
    title: '〜と⾔うことは 【ということは】 (to iu koto wa)',
    romaji: 'to iu koto wa',
    meaningUz: 'bu degani shuki / demak',
    structure:
      'Clause 1 ということは clause 2 あなたが会社を辞めるということは本当ですか。 あなたがかいしゃをやめるということはほんとうですか。 Is it true that you are quitting the company?',
    examples: [
      {
        ja: '彼が来ないということは、何か事故があったのかもしれない。',
        romaji: 'Kare ga konai to iu koto wa, nanika jiko ga atta no kamoshirenai.',
        uz: "Uning kelmagani — demak qandaydir noxushlik yuz bergan bo'lishi mumkin.",
      },
    ],
  },
  {
    id: 'n2_pdf_158_to_iu_mono_dewa_nai',
    level: 'N2',
    title: '〜と⾔うものではない 【というものではない】 (to iu mono dewa nai)',
    romaji: 'to iu mono dewa nai',
    meaningUz: 'doim ham ... degani emas / shart emas',
    structure:
      'Verb (casual form) というものではない というものでもない Noun + だ な-adjective + だ い-adjective + い お⾦があれば幸せだというものでもない。 おかねがあればしあわせだというものでもない。 Just by having no money is no guarantee that you will be happy.',
    examples: [
      {
        ja: 'お金があれば幸せになれるというものではない。',
        romaji: 'Okane ga areba shiawase ni nareru to iu mono dewa nai.',
        uz: "Pul ko'p bo'lsa baxtli bo'linadi degani emas.",
      },
    ],
  },
  {
    id: 'n2_pdf_159_to_kangaerareru',
    level: 'N2',
    title: '〜と考えられる 【とかんがえられる】 (to kangaerareru)',
    romaji: 'to kangaerareru',
    meaningUz: "... deb hisoblanadi / o'ylash mumkin",
    structure:
      "Phrase と考えられる これは今年最⾼の映画だと考えられている。 これはことしさいこうのえいがだとかんがえられている。 This is thought of to be this year's best movie.",
    examples: [
      {
        ja: 'この現象は温暖化の影響によるものと考えられている。',
        romaji: 'Kono genshou wa ondanka no eikyou ni yoru mono to kangaerarete iru.',
        uz: "Bu hodisa global isish ta'sirida yuz bergan deb hisoblanadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_160_toka_de',
    level: 'N2',
    title: '〜とか（で) (toka de)',
    romaji: 'toka de',
    meaningUz: '... sababli emish / deb eshitdim',
    structure:
      'Verb (casual form) とか（で） Noun + だ な-adjective + だ い-adjective アメリカで育ったとかで。 あめりかでそだったとかで。 I heard they were raised in America.',
    examples: [
      {
        ja: '風邪を引いたとかで、彼は今日休みだ。',
        romaji: 'Kaze o hiita toka de, kare wa kyou yasumi da.',
        uz: 'Shamollab qolgan emish, shuning uchun u bugun ishga kelmadi.',
      },
    ],
  },
  {
    id: 'n2_pdf_161_tokku_ni',
    level: 'N2',
    title: '〜とっくに (tokku ni)',
    romaji: 'tokku ni',
    meaningUz: 'allaqachon / ancha burun',
    structure:
      'とっくに Verb 彼はとっくに帰りました。 かれはとっくにかえりました。 He came home a long while ago.',
    examples: [
      {
        ja: 'そんなことはとっくに知っているよ。',
        romaji: 'Sonna koto wa tokku ni shitte iru yo.',
        uz: 'Bunday narsani allaqachon bilaman.',
      },
    ],
  },
  {
    id: 'n2_pdf_162_tokoro_datta',
    level: 'N2',
    title: '〜ところだった (tokoro datta)',
    romaji: 'tokoro datta',
    meaningUz: "sal qolsa ... bo'layozdi",
    structure:
      'Verb (dictionary form) ところだった 危ないところだった。 あぶないところだった。 That was a close call.',
    examples: [
      {
        ja: 'もう少しで階段から落ちるところだった。',
        romaji: 'Mou sukoshi de kaidan kara ochiru tokoro datta.',
        uz: 'Sal qolsa zinadan qulab tushayozdim.',
      },
    ],
  },
  {
    id: 'n2_pdf_163_tokoro_ni',
    level: 'N2',
    title: '〜ところに (tokoro ni)',
    romaji: 'tokoro ni',
    meaningUz: 'ayni ... qilayotgan paytda kutilmaganda',
    structure:
      'Verb (た / ている / ていた) ところに ところへ ところを Noun + の Adjective 私はちょうど家を出ようと思っているところに、⼩⾬が降り始めた。 わたしはちょうどいえをでようとおもっているところに、こさめがふりはじめた。 I was just about to leave home when a light rain started to fall.',
    examples: [
      {
        ja: '出かけようとしたところに、電話がかかってきた。',
        romaji: 'Dekakeyou to shita tokoro ni, denwa ga kakatte kita.',
        uz: "Ayni ko'chaga chiqmoqchi bo'lib turganimda qo'ng'iroq bo'lib qoldi.",
      },
    ],
  },
  {
    id: 'n2_pdf_164_tokoro_o_miru_to',
    level: 'N2',
    title: '〜ところを⾒ると 【ところをみると】 (tokoro o miru to)',
    romaji: 'tokoro o miru to',
    meaningUz: '...ga qarab xulosa qilsak / qaraganda',
    structure:
      "Verb (casual) ところを⾒ると 彼⼥はラーメンを⾷べているところを⾒ると、ダイエットはやめたんだね。 かのじょはラーメンをたべているところをみると、ダイエットはやめたんだね。 Judjing from the fact that she's eating ramen, she must have quit her diet.",
    examples: [
      {
        ja: '電気がついているところを見ると、彼は家にいるようだ。',
        romaji: 'Denki ga tsuite iru tokoro o miru to, kare wa ie ni iru you da.',
        uz: 'Chiroq yonib turganiga qaraganda, u uyida shekilli.',
      },
    ],
  },
  {
    id: 'n2_pdf_165_tomo',
    level: 'N2',
    title: '〜とも (tomo)',
    romaji: 'tomo',
    meaningUz: "ha, albatta / so'zsiz shunday",
    structure:
      'Verb ないく とも い-adjective + いく phrase え、そうですとも。 え、そうですとも。 Yes, that is most certainly so.',
    examples: [
      {
        ja: 'え、そうですとも。',
        romaji: 'E, sou desu tomo.',
        uz: 'Ha, albatta shunday.',
      },
    ],
  },
  {
    id: 'n2_pdf_166_toshitemo',
    level: 'N2',
    title: '〜としても (toshitemo)',
    romaji: 'toshitemo',
    meaningUz: "hatto ... bo'lgan taqdirda ham",
    structure:
      'Verb (casual form) としても Noun + だ な-adjective + だ い-adjective 今回の試験で不合格になったとしても、諦めずに次回も受験するつもりです。 こんかいのしけんでふごうかくになったとしても、あきらめずにじかいもじゅけんす るつもりです。 Even if I were to fail the exam this time, I plan to not give up and take the exam again.',
    examples: [
      {
        ja: 'たとえ失敗したとしても、後悔はしない。',
        romaji: 'Tatoe shippai shita to shitemo, koukai wa shinai.',
        uz: 'Hatto muvaffaqiyatsizlikka uchragan taqdirimda ham, afsuslanmayman.',
      },
    ],
  },
  {
    id: 'n2_pdf_169_ue_wa',
    level: 'N2',
    title: '〜上は 【うえは】 (ue wa)',
    romaji: 'ue wa',
    meaningUz: "modomiki ... ekan / ... bo'lgach esa",
    structure:
      'Verb (dictionary form) 上は Verb (た form) 約束した上は、どんなことがあっても守ります。 やくそくしたうえは、どんなことがあってもまもります。 Since I’ve made a promise, I will keep it no matter what happens.',
    examples: [
      {
        ja: '引き受けた上は、最後まで責任を持ってやり遂げます。',
        romaji: 'Hikiuketa ue wa, saigo made sekinin o motte yaritogemasu.',
        uz: "Modomiki bu ishni zimmamga olgan ekanman, oxirigacha mas'uliyat bilan bajaraman.",
      },
    ],
  },
  {
    id: 'n2_pdf_170_wa_moto_yori',
    level: 'N2',
    title: '〜は元より 【はもとより】 (wa moto yori)',
    romaji: 'wa moto yori',
    meaningUz: "... u yoqda tursin / aytmasa ham ma'lum",
    structure: 'JLPT N2 ぶんぽう',
    examples: [
      {
        ja: 'この店は味は元より、サービスも素晴らしい。',
        romaji: 'Kono mise wa aji wa moto yori, saabisu mo subarashii.',
        uz: 'Bu restoran taomining mazasi u yoqda tursin, xizmati ham ajoyib.',
      },
    ],
  },
  {
    id: 'n2_pdf_171_wa_tomokaku',
    level: 'N2',
    title: '〜はともかく (wa tomokaku)',
    romaji: 'wa tomokaku',
    meaningUz: '...ni bir chetga surib turganda ham',
    structure:
      "Noun はともかく（として） ⾏くか⾏かないかはともかく、レストランの予約だけはしておこう。 いくかいかないかはともかく、レストランのよやくだけはしておこう。 Whether or not we are going, let's at least make the restaurant reservation.",
    examples: [
      {
        ja: '値段はともかく、デザインがとても気に入った。',
        romaji: 'Nedan wa tomokaku, dezain ga totemo kiniitta.',
        uz: 'Narxini bir chetga surib turganda ham, dizayni menga juda yoqdi.',
      },
    ],
  },
  {
    id: 'n2_pdf_172_wazuka_ni',
    level: 'N2',
    title: '〜わずかに (wazuka ni)',
    romaji: 'wazuka ni',
    meaningUz: "arang / salgina / bor-yo'g'i",
    structure:
      'わずかに Phrase 電⾞がわずかに遅れている。 でんしゃがわずかにおくれている。 The train is running slightly late.',
    examples: [
      {
        ja: 'わずか数票の差で選挙に勝利した。',
        romaji: 'Wazuka suuhyou no sa de senkyo ni shouri shita.',
        uz: "Bor-yo'g'i bir necha ovoz farqi bilan saylovda g'alaba qozondi.",
      },
    ],
  },
  {
    id: 'n2_pdf_173_yagate',
    level: 'N2',
    title: '〜やがて (yagate)',
    romaji: 'yagate',
    meaningUz: 'tez orada / bora-bora / oxir-oqibat',
    structure:
      'やがて phrase やがて真っ暗になった。 やがてまっくらになった。 It soon became completely dark.',
    examples: [
      {
        ja: '雨はやがて雪へと変わった。',
        romaji: 'Ame wa yagate yuki e to kawatta.',
        uz: "Yomg'ir tez orada qorga aylanib ketdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_174_yarayara',
    level: 'N2',
    title: '〜やら〜やら (yara~yara)',
    romaji: 'yara~yara',
    meaningUz: 'goh ... goh ... (tartibsiz sanash)',
    structure:
      'Verb (dictionary) やら + [B]やら Noun い-adjective ⼤学⽣は宿題やらアルバイトやらで忙しい。 だいがくせいはしゅくだいやらアルバイトやらでいそがしい。 University students are quite busy with things like homework and part time jobs.',
    examples: [
      {
        ja: '宿題やら部屋の掃除やらで、週末は大忙しだった。',
        romaji: 'Shukudai yara heya no souji yara de, shuumatsu wa oo-isogashi datta.',
        uz: "Vazifalar, xona tozalash degandek, dam olish kunim juda tig'iz o'tdi.",
      },
    ],
  },
  {
    id: 'n2_pdf_175_yohodo__yoppodo',
    level: 'N2',
    title: '〜よほど / よっぽど (yohodo / yoppodo)',
    romaji: 'yohodo / yoppodo',
    meaningUz: "ancha / g'oyat / favqulodda",
    structure:
      'よほど よっぽど explanation よほど前にあった事です。 よほどまえにあったことです。 It happened a long time ago.',
    examples: [
      {
        ja: '彼はよほど疲れていたのか、座ったまま眠ってしまった。',
        romaji: 'Kare wa yohodo tsukarete ita no ka, suwatta mama nemutte shimatta.',
        uz: "U favqulodda charchagan bo'lsa kerak, o'tirgan joyida uxlab qoldi.",
      },
    ],
  },
  {
    id: 'n2_pdf_176_yori',
    level: 'N2',
    title: "〜より [Rasmiy 'Dan'] (yori - from)",
    romaji: 'yori',
    meaningUz: "...dan (rasmiy uslubdagi 'dan' qo'shimchasi)",
    structure:
      'time, place or person より 今⽇より、毎⽇⽇本語を勉強します。 きょうより、まいにちにほんごをべんきょうします。 From today, I will study Japanese everyday.',
    examples: [
      {
        ja: '午後1時より開会式を行います。',
        romaji: 'Gogo 1-ji yori kaikaishiki o okonaimasu.',
        uz: "Soat 13:00 dan boshlab ochilish marosimi o'tkaziladi.",
      },
    ],
  },
  {
    id: 'n2_pdf_177_yori_hoka_nai',
    level: 'N2',
    title: '〜よりほかない (yori hoka nai)',
    romaji: 'yori hoka nai',
    meaningUz: "...dan boshqa chora yo'q / majburmiz",
    structure:
      'Verb (dictionary) （より）ほか（は）ない （より）ほか（しかたが）な い この仕事は君に信頼するよりほかはない。 このしごとはきみにしんらいするよりほかはない。 I have no choice but to trust you with this job.',
    examples: [
      {
        ja: '電車が止まったので、歩いて行くよりほかない。',
        romaji: 'Densha ga tomatta node, aruite iku yori hoka nai.',
        uz: "Poyezd to'xtab qolgani sababli piyoda borishdan boshqa chora qolmadi.",
      },
    ],
  },
  {
    id: 'n2_pdf_178_you_dewa',
    level: 'N2',
    title: '〜ようでは (you dewa)',
    romaji: 'you dewa',
    meaningUz: "agar shunday bo'lsa (yomon oqibat kelib chiqadi)",
    structure:
      "Verb (casual form) ようでは bad result この問題が分からないようではN２には合格できないよ。 このもんだいがわからないようではN２にはごうかくできないよ。 If you don't understand this problem, then you won't be able to pass the N",
    examples: [
      {
        ja: 'この問題が分からないようではN2には合格できないよ。',
        romaji: 'Kono mondai ga wakaranai you dewa N2 niwa goukaku dekinai yo.',
        uz: "Agar bu masalani tushunmaydigan bo'lsang, N2 dan aslo o'ta olmaysan.",
      },
      {
        ja: '試験の前日に勉強を始めるようでは、合格はできない。',
        romaji: 'Shiken no zenjitsu ni benkyou o hajimeru you dewa, goukaku wa dekinai.',
        uz: "Imtihondan bir kun oldin dars qilishni boshlaydigan bo'lsangiz, o'ta olmaysiz.",
      },
    ],
  },
  {
    id: 'n2_pdf_179_you_kamai_ka',
    level: 'N2',
    title: '〜ようか〜まいか (you ka~mai ka)',
    romaji: 'you ka~mai ka',
    meaningUz: '... qilsammikin yoki qilmasammikin (ikkilanish)',
    structure:
      "V (volational) + か V + まいか Special rules for 2nd verb Ru-verb: dictionary form OR ます + まい U-verb: dictionary form + まい くる: こまい / くるまい する: しまい / すまい / するまい ⾬だ。買い物をしに⾏こうか、⾏くまいか。 あめだ。かいものをしにいこうか、いくまいか。 It's raining.. Should I go to buy groceries or not?",
    examples: [
      {
        ja: '雨だ。買い物をしに行こうか、行くまいか。',
        romaji: 'Ame da. Kaimono o shi ni ikou ka, ikumai ka.',
        uz: "Yomg'ir yog'yapti. Xaridga borsammikan yoki bormasammikan deb ikkilanyapman.",
      },
    ],
  },
  {
    id: 'n2_pdf_180_you_suru_ni',
    level: 'N2',
    title: '〜要するに 【ようするに】 (you suru ni)',
    romaji: 'you suru ni',
    meaningUz: 'qisqasi / xulosa qilib aytganda',
    structure:
      '要するに phrase 要するに時と⾦の問題だ。 ようするにときとかねのもんだいだ。 In short, it is a question of time and money.',
    examples: [
      {
        ja: '要するに時と金の問題だ。',
        romaji: 'You suru ni toki to kane no mondai da.',
        uz: 'Xulosa qilib aytganda, bu vaqt va pul masalasidir.',
      },
    ],
  },
  {
    id: 'n2_pdf_181_zaru_o_enai',
    level: 'N2',
    title: '〜ざるを得ない 【ざるをえない】 (zaru o enai)',
    romaji: 'zaru o enai',
    meaningUz: "... qilishga majbur bo'lmoq / boshqa yo'l yo'q",
    structure:
      'Verb (ない root) ざるを得ない Exception: しない -> せ 私はそうせざるを得ない。 わたしはそうせざるをえない。 I have no choice but to do that.',
    examples: [
      {
        ja: '私はそうせざるを得ない。',
        romaji: 'Watashi wa sou sezaru o enai.',
        uz: "Men shunday qilishga majburman (boshqa ilojim yo'q).",
      },
    ],
  },
  {
    id: 'n2_pdf_182_zu_ni_sumu',
    level: 'N2',
    title: '〜ずに済む 【ずにすむ】 (zu ni sumu)',
    romaji: 'zu ni sumu',
    meaningUz: "... qilmasdan ham o'tkazib yubormoq / amallamoq",
    structure:
      'Verb ない ずに済む Exception: する => せずに済む 今年は涼しかったので、エアコンを使わずに済みました。 ことしはすずしかったので、エアコンをつかわずにすみました。 This year was cool and I got by without using my air conditioner.',
    examples: [
      {
        ja: '今年は涼しかったので、エアコンを使わずに済みました。',
        romaji: 'Kotoshi wa suzushikatta node, eakon o tsukawazu ni sumimashita.',
        uz: "Bu yil havo salqin bo'lgani bois konditsionerdan foydalanmasdan ham amalladik.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_1',
    level: 'N1',
    title: '〜を余儀なくされる (wo yoginakusareru)',
    romaji: 'wo yoginakusareru',
    meaningUz: "kutilmagan sharoit sababli majbur bo'lmoq / chora qolmaslik",
    structure: 'Ot + を余儀なくされる',
    examples: [
      {
        ja: '台風[たいふう]のため、計画[けいかく]の変更[へんこう]を余儀[よぎ]なくされた。',
        romaji: 'Taifu no tame, keikaku no henkou wo yoginakusareta.',
        uz: "Tayfun sababli rejani o'zgartirishga majbur bo'lindi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_2',
    level: 'N1',
    title: '〜を余儀なくさせる (wo yoginakusaseru)',
    romaji: 'wo yoginakusaseru',
    meaningUz: 'sharoit shaxsni majbur qilmoq',
    structure: 'Ot + を余儀なくさせる',
    examples: [
      {
        ja: '不況[ふきょう]が企業[きぎょう]にリストラを余儀[よぎ]なくさせた。',
        romaji: 'Fukyou ga kigyou ni risutora wo yoginakusaseta.',
        uz: 'Inqiroz kompaniyalarni qisqartirishga majbur qildi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_3',
    level: 'N1',
    title: '〜てやまない (te yamanai)',
    romaji: 'te yamanai',
    meaningUz: "chin dildan / samimiy tilamoq (to'xtovsiz)",
    structure: "Fe'l (Te-form) + やまない",
    examples: [
      {
        ja: '皆様[みなさま]の健康[けんこう]とご多幸[たこう]を祈[いの]ってやみません。',
        romaji: 'Minasama no kenkou to gotakou wo inotte yamamisen.',
        uz: 'Barchangizga sihat-salomatlik va baxt-saodat tilab qolaman.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_4',
    level: 'N1',
    title: '〜を皮切りに (wo kawakiri ni)',
    romaji: 'wo kawakiri ni',
    meaningUz: '...-dan boshlab ketma-ket hodisalar yuz bermoq',
    structure: 'Ot + を皮切りに',
    examples: [
      {
        ja: '東京[とうきょう]公演[こうえん]を皮切[かわき]りに、全国[ぜんこく]ツアーが始[はじ]まる。',
        romaji: 'Toukyou kouen wo kawakiri ni, zenkoku tsuaa ga hajimaru.',
        uz: "Tokio konsertidan boshlab, butun mamlakat bo'ylab turne boshlanadi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_5',
    level: 'N1',
    title: '〜をもって (wo motte)',
    romaji: 'wo motte',
    meaningUz: '... bilan / ... sana bilan rasman yakunlanadi',
    structure: 'Ot + ををもって',
    examples: [
      {
        ja: '本日[ほんじつ]をもって、今年[ことし]の営業[えいぎょう]を終了[しゅうりょう]いたします。',
        romaji: 'Honjitsu wo motte, kotoshi no eigyou wo shuuryou itashimasu.',
        uz: 'Bugungi kun bilan bu yilgi faoliyatimizni rasman yakunlaymiz.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_6',
    level: 'N1',
    title: '〜ばこそ (ba koso)',
    romaji: 'ba koso',
    meaningUz: "aynan o'sha sabab bo'lgani uchungina (boshqa sabab emas)",
    structure: "Fe'l (Ba-form) / Sifat + ばこそ",
    examples: [
      {
        ja: '愛[あい]していればこそ、厳[きび]しく叱[しか]るのだ。',
        romaji: 'Aishite ireba koso, kibishiku shikaru noda.',
        uz: "Yaxshi ko'rganim uchungina qattiq urishaman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_7',
    level: 'N1',
    title: '〜がてら (gatera)',
    romaji: 'gatera',
    meaningUz: "... qilish bahonasida bir yo'la ... ham qilmoq",
    structure: "Fe'l (Masu-ildiz) / Ot + がてら",
    examples: [
      {
        ja: '散歩[さんぽ]がてら、本屋[ほんや]に行ってくる。',
        romaji: "Sanpo gatera, hon'ya ni itte kuru.",
        uz: "Aylanish bahonasida bir yo'la kitob do'koniga borib kelaman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_8',
    level: 'N1',
    title: '〜かたがた (katagata)',
    romaji: 'katagata',
    meaningUz: '... munosabati bilan bir vaqtda (Rasmiy)',
    structure: 'Ot + かたがた',
    examples: [
      {
        ja: 'お礼[れい]かたがた、ご挨拶[あいさつ]に伺[うかが]いました。',
        romaji: 'Orei katagata, goaisatsu ni伺imashita.',
        uz: "Minnatdorchilik bildirish munosabati bilan ko'rishgani keldim.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_9',
    level: 'N1',
    title: '〜にかかわる (ni kakawaru)',
    romaji: 'ni kakawaru',
    meaningUz: "shaxsiyati / hayoti / obro'siga daxldor muhim masala",
    structure: 'Ot + にかかわる',
    examples: [
      {
        ja: '名誉[めいよ]にかかわる問題[もんだい]だから、黙[だま]っていられない。',
        romaji: 'Meiyo ni kakawaru mondai dakara, damatte irarenai.',
        uz: "Bu obro'ga daxldor masala bo'lgani uchun jim tura olmayman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_10',
    level: 'N1',
    title: '〜と相まって (to aimatte)',
    romaji: 'to aimatte',
    meaningUz: '... bilan birgalikda yanada kuchaymoq',
    structure: 'Ot + と相まって',
    examples: [
      {
        ja: '努力[どりょく]と運[うん]が相[あい]まって、成功[せいこう]を収[おさ]めた。',
        romaji: 'Doryoku to un ga aimatte, seikou wo osameta.',
        uz: 'Mehnat va omad birgalikda muvaffaqiyat keltirdi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_11',
    level: 'N1',
    title: '〜をおいて (wo oite)',
    romaji: 'wo oite',
    meaningUz: "...-dan boshqa munosib nomzod umuman yo'q",
    structure: 'Ot + をおいて（ほかにない）',
    examples: [
      {
        ja: 'この仕事[しごと]を任[まか]せられるのは、彼[かれ]をおいてほかにいない。',
        romaji: 'Kono shigoto wo makaserareru no wa, kare wo oite hoka ni inai.',
        uz: "Bu ishni topshirishga undan boshqa munosib odam yo'q.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_12',
    level: 'N1',
    title: '〜ならでは (naradewa)',
    romaji: 'naradewa',
    meaningUz: "faqat va faqat ...-gagina xos bo'lgan ajoyib sifat",
    structure: 'Ot + ならではの',
    examples: [
      {
        ja: '京都[きょうと]ならではの伝統的[でんとうてき]な風景[ふうけい]',
        romaji: 'Kyouto naradewa no dentouteki na fuukei',
        uz: "Faqat Kioto shahrigagina xos bo'lgan an'anaviy manzara.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_13',
    level: 'N1',
    title: '〜なくしては (nakushite wa)',
    romaji: 'nakushite wa',
    meaningUz: "... bo'lmasa iloji yo'q / amalga oshmaydi",
    structure: 'Ot + なくしては',
    examples: [
      {
        ja: '皆様[みなさま]の協力[きょうりょく]なくしては、成功[せいこう]し得[え]ない。',
        romaji: 'Minasama no kyouryoku nakushite wa, seikou shienai.',
        uz: "Sizlarning hamkorlingizsiz muvaffaqiyatga erishib bo'lmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_14',
    level: 'N1',
    title: '〜たる者 (taru mono)',
    romaji: 'taru mono',
    meaningUz: "... kabi yuksak mavqega ega bo'la turib",
    structure: 'Ot + たる者',
    examples: [
      {
        ja: '指導者[しどうしゃ]たる者、常[つね]に誠実[せいじつ]でなければならない。',
        romaji: 'Shidousha taru mono, tsune ni seijitsu de nakereba naranai.',
        uz: "Rahbar bo'lgan shaxs har doim halol bo'lishi shart.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_15',
    level: 'N1',
    title: '〜ともなると (tomo naruto)',
    romaji: 'tomo naruto',
    meaningUz: "... yuqori darajaga etganda shunday bo'ladi",
    structure: 'Ot + ともなると',
    examples: [
      {
        ja: 'プロの選手[せんしゅ]ともなると、練習[れんしゅう]の質[しつ]が違[ちが]う。',
        romaji: 'Puro no senshu tomo naruto, renshuu no shitsu ga chigau.',
        uz: "Professional sportchi darajasiga etganda mashq sifati boshqacha bo'ladi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_16',
    level: 'N1',
    title: '〜まじき (majiki)',
    romaji: 'majiki',
    meaningUz: "... qilish kasbga/axloqqa mutlaqo to'g'ri kelmaydi",
    structure: "Fe'l (Lug'at) + まじき + Ot",
    examples: [
      {
        ja: '許[ゆる]すまじき行為[こうい]',
        romaji: 'Yurusumajiki koui',
        uz: "Kechirib bo'lmaydigan qilmish.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_17',
    level: 'N1',
    title: '〜を限りに (wo kagiri ni)',
    romaji: 'wo kagiri ni',
    meaningUz: 'oxirgi marta / shu sana bilan tugaydi',
    structure: 'Ot + を限りに',
    examples: [
      {
        ja: '今日[きょう]を限[かぎ]りに、タバコをやめる。',
        romaji: 'Kyou wo kagiri ni, tabako wo yameru.',
        uz: "Bugun oxirgi kuni bo'lib, chekishni tashlayman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_18',
    level: 'N1',
    title: '〜を踏まえて (wo fumaete)',
    romaji: 'wo fumaete',
    meaningUz: "... ma'lumotlar / tajribaga tayanib",
    structure: 'Ot + を踏まえて',
    examples: [
      {
        ja: '前回[ぜんかい]の反省[はんせい]を踏[ふ]まえて、改善[かいぜん]する。',
        romaji: 'Zenkai no hansei wo fumaete, nihon_talk suru.',
        uz: "O'tgan safargi xatolarni hisobga olib o'nglaymiz.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_19',
    level: 'N1',
    title: '〜に照らして (ni terashite)',
    romaji: 'ni terashite',
    meaningUz: "qonun va axloq me'yorlariga solishtirgan holda",
    structure: 'Ot + に照らして',
    examples: [
      {
        ja: '法律[ほうりつ]に照[て]らして、厳[きび]しく処罰[しょばつ]する。',
        romaji: 'Houritsu ni terashite, kibishiku shobatsu suru.',
        uz: 'Qonunga solishtirgan holda qattiq jazolanadi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_20',
    level: 'N1',
    title: '〜に則って (ni norotto)',
    romaji: 'ni norotto',
    meaningUz: "qoidalarga va an'analarga qat'iy amal qilib",
    structure: 'Ot + に則って',
    examples: [
      {
        ja: '伝統[でんとう]に則[のっと]って、儀式[ぎしき]を行[おこな]う。',
        romaji: 'Dentou ni norotto, gishiki wo okonau.',
        uz: "An'analarga qat'iy amal qilib marosim o'tkaziladi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_21',
    level: 'N1',
    title: '〜をものの (wo monono)',
    romaji: 'wo monono',
    meaningUz: "... bo'lsa-da / shunday bo'lishiga qaramay",
    structure: "Fe'l (Plain) + ものの",
    examples: [
      {
        ja: '免許[めんきょ]は取[と]ったものの、運転[うんてん]していない。',
        romaji: 'Menkyo wa totta monono, unten shite inai.',
        uz: "Guvohnoma olgan bo'lsam-da, mashina haydamayman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_22',
    level: 'N1',
    title: '〜に耐え得る (ni tae uru)',
    romaji: 'ni tae uru',
    meaningUz: '...-shga loyiq / chiday oladigan',
    structure: "Ot / Fe'l + に耐え得る",
    examples: [
      {
        ja: '鑑賞[かんしょう]に耐[た]え得[う]る作品[さくひん]',
        romaji: 'Kanshou ni tae uru sakuhin',
        uz: "Tomosha qilishga loyiq san'at asari.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_23',
    level: 'N1',
    title: '〜をものともせずに (wo monotomo sezu ni)',
    romaji: 'wo monotomo sezu ni',
    meaningUz: 'xavf-xatarga umuman pisand qilmay',
    structure: 'Ot + をものともせずに',
    examples: [
      {
        ja: '大雨[おおあめ]をものともせずに、作業[さぎょう]を続[つづ]けた。',
        romaji: 'Ooame wo monotomo sezu ni, sagyou wo tsuduketa.',
        uz: "Katta yomg'irga pisand qilmay ishni davom ettirishdi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_24',
    level: 'N1',
    title: '〜極まる・〜極まりない (kiwamaru / kiwamarinai)',
    romaji: 'kiwamaru',
    meaningUz: 'chegarasiz / juda ham yuqori darajada',
    structure: 'Ot / Sifat + 極まる / 極まりない',
    examples: [
      {
        ja: '無礼[ぶれい]極[きわ]まりない態度[たいど]',
        romaji: 'Burei kiwamarinai taido',
        uz: 'Juda ham odabsiz munosabat.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_25',
    level: 'N1',
    title: '〜ずにはおかない (zu ni wa okanai)',
    romaji: 'zu ni wa okanai',
    meaningUz: "albatta shunday bo'ladi / shunday qilmasdan qo'ymaydi",
    structure: "Fe'l (Nai-ildiz) + ずにはおかない",
    examples: [
      {
        ja: '彼[かれ]の演技[えんぎ]は観客[かんきゃく]を感動[かんどう]させずにはおかない。',
        romaji: 'Kare no engi wa kankaku wo kandou sasezu ni wa okanai.',
        uz: 'Uning mahorati tomoshabinlarni albatta hayratda qoldiradi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_26',
    level: 'N1',
    title: '〜んがため（に） (n ga tame ni)',
    romaji: 'n ga tame ni',
    meaningUz: "biror oliy maqsad yo'lida (juda harakat qilmoq)",
    structure: "Fe'l (Nai-ildiz) + んがため",
    examples: [
      {
        ja: '夢[ゆめ]を叶[かな]えんがために、日々[ひび]努力[どりょく]する。',
        romaji: 'Yume wo kanaen ga tame ni, hibi doryoku suru.',
        uz: "Orzusiga erishish yo'lida har kuni astoydil harakat qiladi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_27',
    level: 'N1',
    title: '〜べからず (bekarazu)',
    romaji: 'bekarazu',
    meaningUz: "mutlaqo man etiladi (Rasmiy e'lonlar)",
    structure: "Fe'l (Lug'at) + べからず",
    examples: [
      {
        ja: '芝生[しばふ]に入[はい]るべからず。',
        romaji: 'Shibafu ni hairu bekarazu.',
        uz: 'Maysazorga kirish mutlaqo man etiladi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_28',
    level: 'N1',
    title: '〜まい (mai)',
    romaji: 'mai',
    meaningUz: "umuman qilmaslikka ahd qilmoq / bo'lmasa kerak",
    structure: "Fe'l (Lug'at) + まい",
    examples: [
      {
        ja: '二度[にど]とあのような過[あや]まちを繰り返[くりかえ]すまい。',
        romaji: 'Nido to ano you na ayamachi wo kurikaesumai.',
        uz: 'Bunday xatoni ikkinchi bor takrorlamaslikka ahd qildim.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_29',
    level: 'N1',
    title: '〜つ〜つ (tsu tsu)',
    romaji: 'tsu tsu',
    meaningUz: "navbatma-navbat sodir bo'lmoq",
    structure: "Fe'l (Masu-ildiz) + つ + Fe'l + つ",
    examples: [
      {
        ja: '持ちつ持たれつ',
        romaji: 'Mochitsu motaretsu',
        uz: 'Bir-biriga yordam berib yashash.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_30',
    level: 'N1',
    title: '〜であれ (de are)',
    romaji: 'de are',
    meaningUz: "kim/nima bo'lishidan qat'i nazar",
    structure: 'Ot + であれ',
    examples: [
      {
        ja: '理由[りゆう]が何[なに]であれ、暴力[ぼうりょく]は許[ゆる]されない。',
        romaji: 'Riyuu ga nani de are, bouryoku wa yurusarenai.',
        uz: "Sababi nima bo'lishidan qat'i nazar, zo'ravonlikka yo'l qo'yilmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_31',
    level: 'N1',
    title: '〜とあれば (to areba)',
    romaji: 'to areba',
    meaningUz: "agar shunday muhim sharoit bo'lsa albatta qilaman",
    structure: "Ot / Fe'l + とあれば",
    examples: [
      {
        ja: '子供[こども]のためとあれば、どんな苦労[くろう]も耐[た]えられる。',
        romaji: 'Kodomo no tame to areba, donna kurou mo taerareru.',
        uz: "Farzandim uchun bo'lsa barcha mashaqqatlarga chidayman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_32',
    level: 'N1',
    title: '〜たら最後 (tara saigo)',
    romaji: 'tara saigo',
    meaningUz: "bir bor shunday bo'lsa tamom, ortga yo'l yo'q",
    structure: "Fe'l (Ta-form) + ら最後",
    examples: [
      {
        ja: '信用[しんよう]を失[うしな]ったら最後、取り戻[もど]せない。',
        romaji: 'Shinyou wo ushinattara saigo, torimodosenai.',
        uz: "Ishonchni boy bersangiz tamom, uni qaytarib bo'lmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_33',
    level: 'N1',
    title: '〜ないではすまない (nai de wa sumanai)',
    romaji: 'nai de wa sumanai',
    meaningUz: "majburiyat bo'lgani uchun qilmasdan iloj yo'q",
    structure: "Fe'l (Nai-form) + ではすまない",
    examples: [
      {
        ja: '他人物[たにんぶつ]を壊[こわ]したのだから、弁償[べんしょう]しないではすまない。',
        romaji: 'Taninbutsu wo kowashita nodakara, benshou shinai de wa sumanai.',
        uz: "Boshqaning narsasini sindirdingizmi, to'lab bermasdan iloj yo'q.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_34',
    level: 'N1',
    title: '〜てはかなわない (te wa kanawanai)',
    romaji: 'te wa kanawanai',
    meaningUz: "bunday vaziyatga chidab bo'lmaydi",
    structure: "Fe'l (Te-form) + はかなわない",
    examples: [
      {
        ja: '毎日[まいにち]残業[ざんぎょう]ばかりではかなわない。',
        romaji: 'Mainichi zangyou bakari de wa kanawanai.',
        uz: "Har kuni faqat ortiqcha ishda qolishga chidab bo'lmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_35',
    level: 'N1',
    title: '〜を控えて (wo hikaete)',
    romaji: 'wo hikaete',
    meaningUz: "... arafasida bo'lmoq / yaqinlashib kelayotganida",
    structure: 'Ot + を控えて',
    examples: [
      {
        ja: '試験[しけん]を控[ひか]えて、学生[がくせい]たちは猛勉強[もうべんきょう]している。',
        romaji: 'Shiken wo hikaete, gakuseitachi wa moubenkyou shite iru.',
        uz: "Imtihon arafasida talabalar astoydil tayyorgarlik ko'rishmoqda.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_36',
    level: 'N1',
    title: '〜の極み (no kiwami)',
    romaji: 'no kiwami',
    meaningUz: "oliy darajasi / cho'qqisi",
    structure: 'Ot + の極み',
    examples: [
      {
        ja: '痛恨[つうこん]の極[きわ]みだ。',
        romaji: 'Tsuukon no kiwami da.',
        uz: 'Juda katta afsusdaman.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_37',
    level: 'N1',
    title: '〜を兼ねて (wo kanete)',
    romaji: 'wo kanete',
    meaningUz: "bir vaqtda ikkita maqsadni ko'zlab",
    structure: 'Ot + を兼ねて',
    examples: [
      {
        ja: '出張[しゅっちょう]を兼[かね]て、観光[かんこう]する。',
        romaji: 'Shutchou wo kanete, kankou suru.',
        uz: "Xizmat safariga bir vaqtda sayohatni ham qo'shaman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_38',
    level: 'N1',
    title: '〜に忍びない (ni shinobinai)',
    romaji: 'ni shinobinai',
    meaningUz: 'qarab turishga yurak oshmaydi / rahm keladi',
    structure: "Fe'l (Lug'at) + に忍びない",
    examples: [
      {
        ja: '捨[す]てられた子犬[こいぬ]を見[み]るに忍[しの]びない。',
        romaji: 'Suterareta koinu wo miru ni shinobinai.',
        uz: "Tashlab ketilgan kuchukchani ko'rib ko'z qiymaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_39',
    level: 'N1',
    title: '〜を禁じ得ない (wo kinjienai)',
    romaji: 'wo kinjienai',
    meaningUz: "hissiyotni (ko'zyosh/kulgi) tiyib bo'lmaydi",
    structure: 'Ot + を禁じ得ない',
    examples: [
      {
        ja: 'その話[はなし]を聞[き]いて、涙[なみだ]を禁[きん]じ得[え]なかった。',
        romaji: 'Sono hanashi wo kiite, namida wo kinjienakatta.',
        uz: "U voqeani eshitib ko'zyoshlarimni tiya olmadim.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_40',
    level: 'N1',
    title: '〜いかんにかかわらず (ikan ni kakawarazu)',
    romaji: 'ikan ni kakawarazu',
    meaningUz: "natijasi yoki sababi qanday bo'lishidan qat'i nazar",
    structure: 'Ot + のいかんにかかわらず',
    examples: [
      {
        ja: '理由[りゆう]のいかんにかかわらず、遅刻[ちこく]は認めない。',
        romaji: 'Riyuu no ikan ni kakawarazu, chikoku wa mitomenai.',
        uz: "Sababi qanday bo'lishidan qat'i nazar kechikishga yo'l qo'yilmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_41',
    level: 'N1',
    title: '〜を問わず (wo towazu)',
    romaji: 'wo towazu',
    meaningUz: 'yosh, jins yoki millat farqisiz',
    structure: 'Ot + を問わず',
    examples: [
      {
        ja: '年齢[ねんれい]性別[せいべつ]を問[と]わず、誰[だれ]でも参加[さんか]できる。',
        romaji: 'Nenrei seibetsu wo towazu, dare demo sanka dekiru.',
        uz: "Yoshi va jinsidan qat'i nazar barcha qatnashishi mumkin.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_42',
    level: 'N1',
    title: '〜にかこつけて (ni kakotsukete)',
    romaji: 'ni kakotsukete',
    meaningUz: '...-ni bahona qilib aslida boshqa narsa qilmoq',
    structure: 'Ot + にかこつけて',
    examples: [
      {
        ja: '取材[しゅざい]にかこつけて、旅行[りょこう]を楽[たの]しんだ。',
        romaji: 'Shuzai ni kakotsukete, ryokou wo tanoshimda.',
        uz: 'Intervyuni bahona qilib sayohat qilib keldim.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_43',
    level: 'N1',
    title: '〜こととて (koto tote)',
    romaji: 'koto tote',
    meaningUz: "... bo'lgani uchun (Samimiy uzr va tushuntirish)",
    structure: "Ot の / Fe'l Plain + こととて",
    examples: [
      {
        ja: '知[し]らぬこととて、失礼[しつれい]いたしました。',
        romaji: 'Shiranu koto tote, shitsurei itashimashita.',
        uz: "Bilmganim sababli odabsizlik bo'ldi, kechiring.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_44',
    level: 'N1',
    title: '〜が早いか (ga hayai ka)',
    romaji: 'ga hayai ka',
    meaningUz: '... qilib-qilmay darhol zudlik bilan ...',
    structure: "Fe'l (Lug'at/Ta) + が早いか",
    examples: [
      {
        ja: 'ベルが鳴[な]るが早[はや]いか、教室[きょうしつ]を飛び出[だ]した。',
        romaji: 'Beru ga naru ga hayai ka, kyoushitsu wo tobidashita.',
        uz: "Qo'ng'iroq chalinishi bilanoq sinfdan otilib chiqdi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_45',
    level: 'N1',
    title: '〜や否や (ya ina ya)',
    romaji: 'ya ina ya',
    meaningUz: "... qilishi bilanoq daryoda hodisa ro'y berdi",
    structure: "Fe'l (Lug'at) + や否や",
    examples: [
      {
        ja: '彼[かれ]は顔[かお]を見るや否や、泣[な]き出した。',
        romaji: 'Kare wa kao wo miru ya ina ya, nakidashita.',
        uz: "U yuzimni ko'rishi bilanoq yig'lab yubordi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_46',
    level: 'N1',
    title: '〜なり (nari)',
    romaji: 'nari',
    meaningUz: '... qilishi bilanoq kutilmagan ish qildi',
    structure: "Fe'l (Lug'at) + なり",
    examples: [
      {
        ja: '彼[かれ]は部屋[へや]に入るなり、倒[たお]れ込んだ。',
        romaji: 'Kare wa heya ni hairu nari, taorekondai.',
        uz: 'U xonaga kirishi bilanoq yiqilib tushdi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_47',
    level: 'N1',
    title: '〜そばから (soba kara)',
    romaji: 'soba kara',
    meaningUz: '... qilishing bilan darhol ortidan yana ...',
    structure: "Fe'l (Lug'at/Ta) + そばから",
    examples: [
      {
        ja: '覚[おぼ]えるそばから、忘[わす]れてしまう。',
        romaji: 'Oboeru soba kara, wasurete shimau.',
        uz: "Yodlashim bilanoq darhol esdan chiqarib qo'yaman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_48',
    level: 'N1',
    title: '〜てからというもの (te kara to iu mono)',
    romaji: 'te kara to iu mono',
    meaningUz: "... hodisasidan beri mutlaqo o'zgardi",
    structure: "Fe'l (Te-form) + からというもの",
    examples: [
      {
        ja: '日本[にほん]に来[き]てからというもの、毎日[まいにち]が刺激的[しげきてき]だ。',
        romaji: 'Nihon ni kite kara to iu mono, mainichi ga shigekiteki da.',
        uz: "Yaponiyaga kelganimdan beri har bir kunim sarguzashtga to'la.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_49',
    level: 'N1',
    title: '〜にあって (ni atte)',
    romaji: 'ni atte',
    meaningUz: '... kabi favqulodda vaziyatda / sharoitda',
    structure: 'Ot + にあって',
    examples: [
      {
        ja: '逆境[ぎゃっきょう]にあっても、希望[きぼう]を捨てない。',
        romaji: 'Gyakkyou ni atte mo, kibou wo sutenai.',
        uz: "Qiyin sharoitda bo'lsa ham umidni uzmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_50',
    level: 'N1',
    title: '〜傍ら (katawara)',
    romaji: 'katawara',
    meaningUz: 'asosiy kasbidan tashqari yonidan ... ham qilmoq',
    structure: "Ot の / Fe'l Lug'at + 傍ら",
    examples: [
      {
        ja: '会社員[かいしゃいん]の傍[かたわ]ら、小説[しょうせつ]を書[か]いている。',
        romaji: 'Kaishaiin no katawara, shousetsu wo kaite iru.',
        uz: "Kompaniya xodimi bo'lish bilan birga romanchilik ham qiladi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_51',
    level: 'N1',
    title: '〜ところを (tokoro wo)',
    romaji: 'tokoro wo',
    meaningUz: "... band bo'lgan paytingizda bezovta qilganim uchun uzr",
    structure: "Ot の / Fe'l Plain + ところを",
    examples: [
      {
        ja: 'お忙[いそが]しいところを、お邪魔[じゃま]いたしました。',
        romaji: 'Oisogashii tokoro wo, ojama itashimashita.',
        uz: "Band bo'lgan vaqtingizda bezovta qildim, kechirasiz.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_52',
    level: 'N1',
    title: '〜ものを (mono wo)',
    romaji: 'mono wo',
    meaningUz: "... qilganda yaxshi bo'lardi-ya (Afsuslanish)",
    structure: "Fe'l Plain + ものを",
    examples: [
      {
        ja: '早[はや]く連絡[れんらく]してくれればいいものを。',
        romaji: 'Hayaku renraku shite kurereba ii mono wo.',
        uz: "Vaqtliroq xabar berganingda yaxshi bo'lardi-ya.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_53',
    level: 'N1',
    title: '〜とはいえ (to wa ie)',
    romaji: 'to wa ie',
    meaningUz: "... bo'lishiga qaramay / baribir",
    structure: "Ot / Fe'l Plain + とはいえ",
    examples: [
      {
        ja: '春[はる]とはいえ、まだ肌寒[はだざむ]い。',
        romaji: 'Haru to wa ie, mada hadazamui.',
        uz: "Bahor bo'lishiga qaramay hali ham havo salqin.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_54',
    level: 'N1',
    title: '〜といえども (to iedomo)',
    romaji: 'to iedomo',
    meaningUz: "hatto ... bo'lsa ham (Mutaxassis bo'lsa ham)",
    structure: "Ot / Fe'l Plain + といえども",
    examples: [
      {
        ja: 'プロといえども、失敗[しっぱい]することはある。',
        romaji: 'Puro to iedomo, shippai suru koto wa aru.',
        uz: "Hatto professional bo'lsa ham xato qilishi mumkin.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_55',
    level: 'N1',
    title: '〜と思いきや (to omoikiya)',
    romaji: 'to omoikiya',
    meaningUz: "... deb o'ylasammikan desam aksincha bo'lib chiqdi",
    structure: "Fe'l Plain + と思いきや",
    examples: [
      {
        ja: '合格[ごうかく]したと思[おも]いきや、不合格[ふごうかく]だった。',
        romaji: 'Goukaku shita to omoikiya, fugoukaku datta.',
        uz: "O'tdim desam, yiqilgan ekanman.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_56',
    level: 'N1',
    title: '〜に至るまで (ni itaru made)',
    romaji: 'ni itaru made',
    meaningUz: '... minutigacha / mayda-chuyasigacha qamrab olgan',
    structure: 'Ot + に至るまで',
    examples: [
      {
        ja: '服装[ふくそう]から髪型[かみがた]に至[いた]るまで注意[ちゅうい]された。',
        romaji: 'Fukusou kara kamigata ni itaru made chuui sareta.',
        uz: 'Kiyinishdan tortib soch turmagimga qadar tanbeh berishdi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_57',
    level: 'N1',
    title: '〜に至っては (ni itatte wa)',
    romaji: 'ni itatte wa',
    meaningUz: '...-ga kelganda esa vaziyat yanada yomonroq',
    structure: 'Ot + に至っては',
    examples: [
      {
        ja: '今年[ことし]の不景気[ふけいき]に至っては、倒産[とうさん]が相次[あいつ]いでいる。',
        romaji: 'Kotoshi no fukyou ni itatte wa, tousan ga aitsuide iru.',
        uz: "Bu yilgi inqirozga kelganda esa ketma-ket bankrotliklar sodir bo'lmoqda.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_58',
    level: 'N1',
    title: '〜にかまけて (ni kamakete)',
    romaji: 'ni kamakete',
    meaningUz: '...-ga berilib ketib boshqa muhim ishni unutmoq',
    structure: 'Ot + にかまけて',
    examples: [
      {
        ja: '仕事[しごと]にかまけて、健康[けんこう]管理[かんり]を怠[おこた]る。',
        romaji: 'Shigoto ni kamakete, kenkou kanri wo okotaru.',
        uz: "Faqat ishga berilib ketib sog'liqni unutib qo'ydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_59',
    level: 'N1',
    title: '〜からある (kara aru)',
    romaji: 'kara aru',
    meaningUz: "...-dan kam bo'lmagan ulkan og'irlik yoki miqdor",
    structure: 'Sonlar/Birlik + からある',
    examples: [
      {
        ja: '10キロからある荷物[にもつ]を運[はこ]んだ。',
        romaji: 'Jukkiro kara aru nimotsu wo hakonda.',
        uz: "10 kg dan kam bo'lmagan og'ir yukni tashidim.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_60',
    level: 'N1',
    title: '〜たりとも (tari tomo)',
    romaji: 'tari tomo',
    meaningUz: "hatto bir soniya/bir so'm ham bo'lsa ham ... emas",
    structure: '1 (Birlik) + たりとも ~ない',
    examples: [
      {
        ja: '1秒[いちびょう]たりとも無駄[むだ]にできない。',
        romaji: 'Ichibyou tari tomo muda ni dekinai.',
        uz: "Hatto 1 sekundni ham bekorga sarflab bo'lmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_61',
    level: 'N1',
    title: '〜すら (sura)',
    romaji: 'sura',
    meaningUz: 'hatto ... ham (eng oddiy narsani bajara olmaslik)',
    structure: 'Ot + すら',
    examples: [
      {
        ja: 'ひらがなすら読[よ]めない。',
        romaji: 'Hiragana sura yomenai.',
        uz: "Hatto xiraganani ham o'qiy olmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_62',
    level: 'N1',
    title: '〜だに (dani)',
    romaji: 'dani',
    meaningUz: "bitta o'ylashning o'ziyoq / tushga ham kirmagan",
    structure: "Ot / Fe'l Lug'at + だに",
    examples: [
      {
        ja: '想像[そうぞう]するだに恐[おそ]ろしい。',
        romaji: 'Souzou suru dani osoroshii.',
        uz: "Tasavvur qilishning o'ziyoq daxshatli.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_63',
    level: 'N1',
    title: '〜にして (ni shite)',
    romaji: 'ni shite',
    meaningUz: '... yoshga yetibgina / ... darajaga kelibgina',
    structure: 'Ot + にして',
    examples: [
      {
        ja: '40歳[よんじゅっさい]にして初めて家[いえ]を買[か]った。',
        romaji: 'Yonjussai ni shite hajimete ie wo katta.',
        uz: '40 yoshga etibgina birinchi marta uy sotib oldim.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_64',
    level: 'N1',
    title: '〜あっての (atte no)',
    romaji: 'atte no',
    meaningUz: "... bo'lgani uchungina bu narsa mavjud",
    structure: 'Ot + あっての',
    examples: [
      {
        ja: '健康[けんこう]あっての幸[しあわ]せだ。',
        romaji: 'Kenkou atte no shiawase da.',
        uz: "Sog'liq bo'lgani uchungina baxt bor.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_66',
    level: 'N1',
    title: '〜を抜きにしては (wo nuki ni shite wa)',
    romaji: 'wo nuki ni shite wa',
    meaningUz: "...-ni chetga surib bo'lmaydi / ...-siz iloj yo'q",
    structure: 'Ot + を抜きにしては',
    examples: [
      {
        ja: '彼[かれ]の協力[きょうりょく]を抜きにしては成功[せいこう]しない。',
        romaji: 'Kare no kyouryoku wo nuki ni shite wa seikou shinai.',
        uz: "Uning yordamisiz muvaffaqiyatga erishib bo'lmaydi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_67',
    level: 'N1',
    title: '〜を押して (wo oshite)',
    romaji: 'wo oshite',
    meaningUz: 'barcha qarshilik va kasallikka qaramay bajardi',
    structure: 'Ot + を押して',
    examples: [
      {
        ja: '病気[びょうき]を押して、大会[たいかい]に出場[しゅつじょう]した。',
        romaji: 'Byouki wo oshite, taikai ni shutsujou shita.',
        uz: 'Kasalligiga qaramay musobaqada qatnashdi.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_68',
    level: 'N1',
    title: '〜をよそに (wo yoso ni)',
    romaji: 'wo yoso ni',
    meaningUz: "boshqalarning xavotir/buyrug'iga e'tibor bermay",
    structure: 'Ot + をよそに',
    examples: [
      {
        ja: '親[おや]の心配[しんぱい]をよそに、遊[あそ]び回[まわ]っている。',
        romaji: 'Oya no shinpai wo yoso ni, asobimawatte iru.',
        uz: "Ota-onasining xavotiriga e'tibor bermay o'ynab yuribdi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_69',
    level: 'N1',
    title: '〜にたえない (ni taenai)',
    romaji: 'ni taenai',
    meaningUz: "hissiyotni (shukronalik/g'am) jilovlab bo'lmaydi",
    structure: 'Ot + にたえない',
    examples: [
      {
        ja: '感謝[かんしゃ]の念[ねん]にたえません。',
        romaji: 'Kansha no nen ni taemasen.',
        uz: 'Cheksiz minnatdorchilik bildiraman.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_70',
    level: 'N1',
    title: '〜に足る (ni taru)',
    romaji: 'ni taru',
    meaningUz: "... qilishga to'liq loyiq / ishonchga loyiq",
    structure: "Fe'l Lug'at / Ot + に足る",
    examples: [
      {
        ja: '信頼[しんらい]するに足る人物[じんぶつ]',
        romaji: 'Shinrai suru ni taru jinbutsu',
        uz: 'Ishonishga loyiq inson.',
      },
    ],
  },
  {
    id: 'n1_shinkanzen_71',
    level: 'N1',
    title: '〜でなくてなんだろう (de nakute nan de arou)',
    romaji: 'de nakute nan de arou',
    meaningUz: "bu ... bo me'ay nima bo me'sin! (Haqiqiy narsa)",
    structure: 'Ot + でなくてなんだろう',
    examples: [
      {
        ja: 'これが愛[あい]でなくてなんだろう。',
        romaji: 'Kore ga ai de nakute nan de arou.',
        uz: "Bu muhabbat bo'lmay nima bo'lsin!",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_72',
    level: 'N1',
    title: '〜ともあろう (tomo arou)',
    romaji: 'tomo arou',
    meaningUz: "... kabi mavqedagi odam bo'la turib shunday qildimi?!",
    structure: 'Ot + ともあろう者',
    examples: [
      {
        ja: '大学[だいがく]教授[きょうじゅ]ともあろう者が、カンニングをした。',
        romaji: 'Daigaku kyouju tomo arou mono ga, kanningu wo shita.',
        uz: "Universitet professori bo'la turib shpargalka ishlatdimi?!",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_73',
    level: 'N1',
    title: '〜羽目になる (hame ni naru)',
    romaji: 'hame ni naru',
    meaningUz: "oxir-oqibat g'irt nochor ahvolga tushib qolmoq",
    structure: "Fe'l Lug'at + 羽目になる",
    examples: [
      {
        ja: '終電[しゅうでん]を逃[逃]して、歩[ある]いて帰[かえ]る羽目になった。',
        romaji: 'Shuuden wo逃shite, aruite kaeru hame ni natta.',
        uz: "Oxirgi poyezdni o'tkazib yuborib, pyada qaytishga majbur bo'ldim.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_74',
    level: 'N1',
    title: '〜始末だ (shimatsu da)',
    romaji: 'shimatsu da',
    meaningUz: 'oxir-oqibat shunday xunuk ahvolga kelib qoldi',
    structure: 'Fe me Plain + 始末だ',
    examples: [
      {
        ja: '嘘[うそ]をつき続[つづ]けて、信頼[しんらい]を失[うしな]う始末だ。',
        romaji: 'Uso wo tsukitsudukete, shinyou wo ushinau shimatsu da.',
        uz: "Faqat yolg'on gapirib yurib, oxiri ishonchni yo me'tdi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_75',
    level: 'N1',
    title: '〜ずくめ (zukume)',
    romaji: 'zukume',
    meaningUz: "faqat yaxshi/yomon narsalarga to'la bo me'moq",
    structure: 'Ot + ずくめ',
    examples: [
      {
        ja: '今年[ことし]はいいことずくめの一年[いちねん]だった。',
        romaji: 'Kotoshi wa ii koto zukume no ichinen datta.',
        uz: "Bu yil faqat yaxshiliklarga to me'a yil bo'ldi.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_76',
    level: 'N1',
    title: '〜まみれ (mamire)',
    romaji: 'mamire',
    meaningUz: "ust-boshi loy, qon, changga bo'kib ketmoq",
    structure: 'Ot + まみれ',
    examples: [
      {
        ja: '泥[どろ]まみれになってサッカーをした。',
        romaji: 'Doro mamire ni natte sakkaa wo shita.',
        uz: "Loyga bo'kib futbol o'ynadik.",
      },
    ],
  },
  {
    id: 'n1_shinkanzen_77',
    level: 'N1',
    title: '〜ぐるみ (gurumi)',
    romaji: 'gurumi',
    meaningUz: "butun tashkilot / oila bo'lib birgalikda",
    structure: 'Ot + ぐるみ',
    examples: [
      {
        ja: '町[まち]ぐるみでリサイクル運動[うんどう]に取り組[く]む。',
        romaji: 'Machi gurumi de risaikuru undou ni torikumu.',
        uz: "Butun shahar bo'lib qayta ishlash harakatiga qo'shildik.",
      },
    ],
  },
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
      {
        word: '日本',
        reading: 'にほん (Nihon)',
        meaning: 'Yaponiya',
      },
      {
        word: '日曜日',
        reading: 'にちようび (Nichiyoubi)',
        meaning: 'Yakshanba',
      },
    ],
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
      {
        word: '今月',
        reading: 'こんげつ (Kongetsu)',
        meaning: 'Bu oy',
      },
      {
        word: '月曜日',
        reading: 'げつようび (Getsuyoubi)',
        meaning: 'Dushanba',
      },
    ],
  },
  {
    id: 'kanji_n5_tree',
    level: 'N5',
    kanji: '木',
    onyomi: 'モク (moku), ボク (boku)',
    kunyomi: 'き (ki)',
    meaningUz: "Daraxt, Yog'och (Tree, Wood)",
    strokeCount: 4,
    examples: [
      {
        word: '木曜日',
        reading: 'もくようび (Mokuyoubi)',
        meaning: 'Payshanba',
      },
      {
        word: '大木',
        reading: 'たいぼく (Taiboku)',
        meaning: 'Katta daraxt',
      },
    ],
  },
  {
    id: 'kanji_n5_fire',
    level: 'N5',
    kanji: '火',
    onyomi: 'カ (ka)',
    kunyomi: 'ひ (hi), ほ (ho)',
    meaningUz: 'Olov, Olovli (Fire)',
    strokeCount: 4,
    examples: [
      {
        word: '火曜日',
        reading: 'かようび (Kayoubi)',
        meaning: 'Seshanba',
      },
      {
        word: '花火',
        reading: 'はなび (Hanabi)',
        meaning: 'Mushak / Mushakbozlik',
      },
    ],
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
      {
        word: '水曜日',
        reading: 'すいようび (Suiyoubi)',
        meaning: 'Chorshanba',
      },
      {
        word: '水泳',
        reading: 'すいえい (Suiei)',
        meaning: 'Suzish',
      },
    ],
  },
  {
    id: 'kanji_n5_gold',
    level: 'N5',
    kanji: '金',
    onyomi: 'キン (kin), コン (kon)',
    kunyomi: 'かね (kane), かな (kana)',
    meaningUz: 'Oltin, Pul, Juma (Gold, Money)',
    strokeCount: 8,
    examples: [
      {
        word: 'お金',
        reading: 'おかね (Okane)',
        meaning: 'Pul',
      },
      {
        word: '金曜日',
        reading: 'きんようび (Kinyoubi)',
        meaning: 'Juma',
      },
    ],
  },
  {
    id: 'kanji_n5_soil',
    level: 'N5',
    kanji: '土',
    onyomi: 'ド (do), ト (to)',
    kunyomi: 'つち (tsuchi)',
    meaningUz: 'Tuproq, Yer, Shanba (Soil, Earth)',
    strokeCount: 3,
    examples: [
      {
        word: '土曜日',
        reading: 'どようび (Doyoubi)',
        meaning: 'Shanba',
      },
      {
        word: '土地',
        reading: 'とち (Tochi)',
        meaning: 'Yer maydoni',
      },
    ],
  },
  {
    id: 'kanji_n5_mountain',
    level: 'N5',
    kanji: '山',
    onyomi: 'サン (san), セン (sen)',
    kunyomi: 'やま (yama)',
    meaningUz: "Tog' (Mountain)",
    strokeCount: 3,
    examples: [
      {
        word: '富士山',
        reading: 'ふじさん (Fujisan)',
        meaning: "Fuji tog'i",
      },
      {
        word: '山登り',
        reading: 'やまのぼり (Yamanobori)',
        meaning: "Tog'ga chiqish",
      },
    ],
  },
  {
    id: 'kanji_n5_river',
    level: 'N5',
    kanji: '川',
    onyomi: 'セン (sen)',
    kunyomi: 'かわ (kawa)',
    meaningUz: 'Daryo (River)',
    strokeCount: 3,
    examples: [
      {
        word: 'ナイル川',
        reading: 'ないるがわ (Nairugawa)',
        meaning: 'Nil daryosi',
      },
      {
        word: '川上',
        reading: 'かわかみ (Kawakami)',
        meaning: 'Daryo yuqorisi',
      },
    ],
  },
  {
    id: 'kanji_n5_person',
    level: 'N5',
    kanji: '人',
    onyomi: 'ジン (jin), ニン (nin)',
    kunyomi: 'ひと (hito)',
    meaningUz: 'Odam, Inson (Person)',
    strokeCount: 2,
    examples: [
      {
        word: '日本人',
        reading: 'にほんじん (Nihonjin)',
        meaning: 'Yapon yigit/qizi',
      },
      {
        word: '三人',
        reading: 'さんにん (Sannin)',
        meaning: 'Uch kishi',
      },
    ],
  },
  {
    id: 'kanji_n5_mouth',
    level: 'N5',
    kanji: '口',
    onyomi: 'コウ (kou), ク (ku)',
    kunyomi: 'くち (kuchi)',
    meaningUz: "Og'iz, Kirish joyi (Mouth, Entrance)",
    strokeCount: 3,
    examples: [
      {
        word: '入口',
        reading: 'いりぐち (Iriguchi)',
        meaning: 'Kirish eshigi',
      },
      {
        word: '出口',
        reading: 'でぐち (Deguchi)',
        meaning: 'Chiqish eshigi',
      },
    ],
  },
  {
    id: 'kanji_n5_car',
    level: 'N5',
    kanji: '車',
    onyomi: 'シャ (sha)',
    kunyomi: 'くるま (kuruma)',
    meaningUz: "Mashina, G'ildirak (Car, Wheel)",
    strokeCount: 7,
    examples: [
      {
        word: '電車',
        reading: 'でんしゃ (Densha)',
        meaning: 'Poyezd / Elektrчка',
      },
      {
        word: '自動車',
        reading: 'じどうしゃ (Jidousha)',
        meaning: 'Avtomobil',
      },
    ],
  },
  {
    id: 'kanji_n5_female',
    level: 'N5',
    kanji: '女',
    onyomi: 'ジョ (jo), ニョ (nyo)',
    kunyomi: 'おんな (onna), め (me)',
    meaningUz: 'Ayol, Qiz (Female, Woman)',
    strokeCount: 3,
    examples: [
      {
        word: '女性',
        reading: 'じょせい (Josei)',
        meaning: 'Ayol kishi',
      },
      {
        word: '女の子',
        reading: 'おんなのこ (Onnanoko)',
        meaning: 'Qiz bola',
      },
    ],
  },
  {
    id: 'kanji_n5_male',
    level: 'N5',
    kanji: '男',
    onyomi: 'ダン (dan), ナン (nan)',
    kunyomi: 'おとこ (otoko)',
    meaningUz: 'Erkak, Yigit (Male, Man)',
    strokeCount: 7,
    examples: [
      {
        word: '男性',
        reading: 'だんせい (Dansei)',
        meaning: 'Erkak kishi',
      },
      {
        word: '男の子',
        reading: 'おとこのこ (Otokonoko)',
        meaning: "O'g'il bola",
      },
    ],
  },
  {
    id: 'kanji_n5_child',
    level: 'N5',
    kanji: '子',
    onyomi: 'シ (shi), ス (su)',
    kunyomi: 'こ (ko)',
    meaningUz: 'Bola (Child)',
    strokeCount: 3,
    examples: [
      {
        word: '子供',
        reading: 'こども (Kodomo)',
        meaning: 'Yosh bola',
      },
      {
        word: '電子',
        reading: 'でんし (Denshi)',
        meaning: 'Elektron',
      },
    ],
  },
  {
    id: 'kanji_n5_learn',
    level: 'N5',
    kanji: '学',
    onyomi: 'ガク (gaku)',
    kunyomi: 'まな・ぶ (mana-bu)',
    meaningUz: "O'rganmoq, Ilm (Study, Learn)",
    strokeCount: 8,
    examples: [
      {
        word: '学生',
        reading: 'がくせい (Gakusei)',
        meaning: "Talaba / O'quvchi",
      },
      {
        word: '大学',
        reading: 'だいがく (Daigaku)',
        meaning: 'Universitet',
      },
    ],
  },
  {
    id: 'kanji_n5_school',
    level: 'N5',
    kanji: '校',
    onyomi: 'コウ (kou)',
    kunyomi: '-',
    meaningUz: 'Maktab (School)',
    strokeCount: 10,
    examples: [
      {
        word: '学校',
        reading: 'がっこう (Gakkou)',
        meaning: 'Maktab',
      },
      {
        word: '校長',
        reading: 'こうちょう (Kouchou)',
        meaning: 'Maktab direktori',
      },
    ],
  },
  {
    id: 'kanji_n5_ahead',
    level: 'N5',
    kanji: '先',
    onyomi: 'セン (sen)',
    kunyomi: 'さき (saki)',
    meaningUz: 'Oldin, Avval (Ahead, Previous)',
    strokeCount: 6,
    examples: [
      {
        word: '先生',
        reading: 'せんせい (Sensei)',
        meaning: "O'qituvchi / Ustoz",
      },
      {
        word: '先月',
        reading: 'せんげつ (Sengetsu)',
        meaning: "O'tgan oy",
      },
    ],
  },
  {
    id: 'kanji_n5_life',
    level: 'N5',
    kanji: '生',
    onyomi: 'セイ (sei), ショウ (shou)',
    kunyomi: 'い・きる (iki-ru), う・まれる (uma-reru)',
    meaningUz: "Hayot, Tug'ilish (Life, Birth)",
    strokeCount: 5,
    examples: [
      {
        word: '生活',
        reading: 'せいかつ (Seikatsu)',
        meaning: 'Turmush / Hayot',
      },
      {
        word: '誕生日',
        reading: 'たんじょうび (Tanjoubi)',
        meaning: "Tug'ilgan kun",
      },
    ],
  },
  {
    id: 'kanji_n5_book',
    level: 'N5',
    kanji: '本',
    onyomi: 'ホン (hon)',
    kunyomi: 'もと (moto)',
    meaningUz: 'Kitob, Asos (Book, Origin)',
    strokeCount: 5,
    examples: [
      {
        word: '山本さん',
        reading: 'やまもとさん (Yamamoto-san)',
        meaning: 'Yamamoto janoblari',
      },
      {
        word: '本屋',
        reading: "ほんや (Hon'ya)",
        meaning: "Kitob do'koni",
      },
    ],
  },
  {
    id: 'kanji_n5_year',
    level: 'N5',
    kanji: '年',
    onyomi: 'ネン (nen)',
    kunyomi: 'とし (toshi)',
    meaningUz: 'Yil (Year)',
    strokeCount: 6,
    examples: [
      {
        word: '今年',
        reading: 'ことし (Kotoshi)',
        meaning: 'Bu yil',
      },
      {
        word: '来年',
        reading: 'らいねん (Rainen)',
        meaning: 'Kelasi yil',
      },
    ],
  },
  {
    id: 'kanji_n5_time',
    level: 'N5',
    kanji: '時',
    onyomi: 'ジ (ji)',
    kunyomi: 'とき (toki)',
    meaningUz: 'Soat, Vaqt (Time, Hour)',
    strokeCount: 10,
    examples: [
      {
        word: '時間',
        reading: 'じかん (Jikan)',
        meaning: 'Vaqt',
      },
      {
        word: '時計',
        reading: 'とけい (Tokei)',
        meaning: 'Soat (buyum)',
      },
    ],
  },
  {
    id: 'kanji_n5_minute',
    level: 'N5',
    kanji: '分',
    onyomi: 'フン (fun), ブン (bun), プン (pun)',
    kunyomi: 'わ・かる (waka-ru)',
    meaningUz: "Daqiqa, Bo'lish, Tushunish (Minute, Understand)",
    strokeCount: 4,
    examples: [
      {
        word: '五分',
        reading: 'ごふん (Gofun)',
        meaning: '5 daqiqa',
      },
      {
        word: '半分',
        reading: 'はんぶん (Hanbun)',
        meaning: 'Yarmi',
      },
    ],
  },
  {
    id: 'kanji_n5_big',
    level: 'N5',
    kanji: '大',
    onyomi: 'ダイ (dai), タイ (tai)',
    kunyomi: 'おお・きい (oo-kii)',
    meaningUz: 'Katta (Big, Large)',
    strokeCount: 3,
    examples: [
      {
        word: '大人',
        reading: 'おとな (Otona)',
        meaning: 'Katta yoshli inson',
      },
      {
        word: '大切',
        reading: 'たいせつ (Taisetsu)',
        meaning: 'Muhim / Qadrli',
      },
    ],
  },
  {
    id: 'kanji_n5_small',
    level: 'N5',
    kanji: '小',
    onyomi: 'ショウ (shou)',
    kunyomi: 'ちい・さい (chii-sai), こ (ko)',
    meaningUz: 'Kichik (Small, Little)',
    strokeCount: 3,
    examples: [
      {
        word: '小学生',
        reading: 'しょうがくせい (Shougakusei)',
        meaning: "Boshlang'ich sinf o'quvchisi",
      },
      {
        word: '小川',
        reading: 'おがわ (Ogawa)',
        meaning: 'Kichik soy',
      },
    ],
  },
  {
    id: 'kanji_n5_middle',
    level: 'N5',
    kanji: '中',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'なか (naka)',
    meaningUz: "Ichida, O'rta (Inside, Middle)",
    strokeCount: 4,
    examples: [
      {
        word: '一日中',
        reading: 'いちにちじゅう (Ichinichijuu)',
        meaning: "Kun bo'yi",
      },
      {
        word: '中国',
        reading: 'ちゅうごく (Chuugoku)',
        meaning: 'Xitoy',
      },
    ],
  },
  {
    id: 'kanji_n5_up',
    level: 'N5',
    kanji: '上',
    onyomi: 'ジョウ (jou)',
    kunyomi: 'うえ (ue), あ・がる (a-garu)',
    meaningUz: 'Yuqori, Ustida (Up, Above)',
    strokeCount: 3,
    examples: [
      {
        word: '上手',
        reading: 'じょうず (Jouzu)',
        meaning: 'Mohir / Usta',
      },
      {
        word: '屋上',
        reading: 'おくじょう (Okujou)',
        meaning: 'Tom / Tom usti',
      },
    ],
  },
  {
    id: 'kanji_n5_down',
    level: 'N5',
    kanji: '下',
    onyomi: 'カ (ka), ゲ (ge)',
    kunyomi: 'した (shita), さ・がる (sa-garu)',
    meaningUz: 'Pastda, Ostida (Down, Below)',
    strokeCount: 3,
    examples: [
      {
        word: '下手',
        reading: 'へた (Heta)',
        meaning: "No'noq / Tajribasiz",
      },
      {
        word: '地下鉄',
        reading: 'ちかてつ (Chikatetsu)',
        meaning: 'Metro',
      },
    ],
  },
  {
    id: 'kanji_n5_front',
    level: 'N5',
    kanji: '前',
    onyomi: 'ゼン (zen)',
    kunyomi: 'まえ (mae)',
    meaningUz: 'Oldida, Avval (Front, Before)',
    strokeCount: 9,
    examples: [
      {
        word: '午前',
        reading: 'ごぜん (Gozen)',
        meaning: 'Tushdan oldin (AM)',
      },
      {
        word: '名前',
        reading: 'なまえ (Namae)',
        meaning: 'Ism',
      },
    ],
  },
  {
    id: 'kanji_n5_back',
    level: 'N5',
    kanji: '後',
    onyomi: 'ゴ (go), コウ (kou)',
    kunyomi: 'うしろ (ushiro), あと (ato)',
    meaningUz: 'Ketida, Ortida (Back, After)',
    strokeCount: 9,
    examples: [
      {
        word: '午後',
        reading: 'ごご (Gogo)',
        meaning: 'Tushdan keyin (PM)',
      },
      {
        word: '最後',
        reading: 'さいご (Saigo)',
        meaning: "Oxirgi / So'nggi",
      },
    ],
  },
  {
    id: 'kanji_n5_left',
    level: 'N5',
    kanji: '左',
    onyomi: 'サ (sa)',
    kunyomi: 'ひだり (hidari)',
    meaningUz: 'Chap taraf (Left)',
    strokeCount: 5,
    examples: [
      {
        word: '左手',
        reading: 'ひだりて (Hidarite)',
        meaning: "Chap qo'l",
      },
      {
        word: '左右',
        reading: 'さゆう (Sayuu)',
        meaning: "Chap va o'ng",
      },
    ],
  },
  {
    id: 'kanji_n5_right',
    level: 'N5',
    kanji: '右',
    onyomi: 'ウ (u), ユウ (yuu)',
    kunyomi: 'みぎ (migi)',
    meaningUz: "O'ng taraf (Right)",
    strokeCount: 5,
    examples: [
      {
        word: '右手',
        reading: 'みぎて (Migite)',
        meaning: "O'ng qo'l",
      },
      {
        word: '右側',
        reading: 'みぎがわ (Migigawa)',
        meaning: "O'ng tomon",
      },
    ],
  },
  {
    id: 'kanji_n5_east',
    level: 'N5',
    kanji: '東',
    onyomi: 'トウ (tou)',
    kunyomi: 'ひがし (higashi)',
    meaningUz: 'Sharq (East)',
    strokeCount: 8,
    examples: [
      {
        word: '東京',
        reading: 'とうきょう (Toukyou)',
        meaning: 'Tokio',
      },
      {
        word: '東口',
        reading: 'ひがしぐち (Higashiguchi)',
        meaning: 'Sharqiy chiqish eshigi',
      },
    ],
  },
  {
    id: 'kanji_n5_west',
    level: 'N5',
    kanji: '西',
    onyomi: 'セイ (sei), サイ (sai)',
    kunyomi: 'にし (nishi)',
    meaningUz: "G'arb (West)",
    strokeCount: 6,
    examples: [
      {
        word: '西洋',
        reading: 'せいよう (Seiyou)',
        meaning: "G'arbiy mamlakatlar",
      },
      {
        word: '関西',
        reading: 'かんさい (Kansai)',
        meaning: 'Kansai mintaqasi',
      },
    ],
  },
  {
    id: 'kanji_n5_south',
    level: 'N5',
    kanji: '南',
    onyomi: 'ナン (nan)',
    kunyomi: 'みなみ (minami)',
    meaningUz: 'Janub (South)',
    strokeCount: 9,
    examples: [
      {
        word: '南米',
        reading: 'なんべい (Nanbei)',
        meaning: 'Janubiy Amerika',
      },
      {
        word: '南口',
        reading: 'みなみぐち (Minamiguchi)',
        meaning: 'Janubiy chiqish eshigi',
      },
    ],
  },
  {
    id: 'kanji_n5_north',
    level: 'N5',
    kanji: '北',
    onyomi: 'ホク (hoku)',
    kunyomi: 'きた (kita)',
    meaningUz: 'Shimol (North)',
    strokeCount: 5,
    examples: [
      {
        word: '北海道',
        reading: 'ほっかいどう (Hokkaidou)',
        meaning: 'Xokkaydo adiri',
      },
      {
        word: '南北',
        reading: 'なんぼく (Nanboku)',
        meaning: 'Janub va shimol',
      },
    ],
  },
  {
    id: 'kanji_n5_white',
    level: 'N5',
    kanji: '白',
    onyomi: 'ハク (haku)',
    kunyomi: 'しろ・い (shiro-i)',
    meaningUz: 'Oq rang (White)',
    strokeCount: 5,
    examples: [
      {
        word: '面白い',
        reading: 'おもしろい (Omoshiroi)',
        meaning: 'Qiziqarli',
      },
      {
        word: '白鳥',
        reading: 'はくちょう (Hakuchou)',
        meaning: 'Oqqush',
      },
    ],
  },
  {
    id: 'kanji_n5_rain',
    level: 'N5',
    kanji: '雨',
    onyomi: 'ウ (u)',
    kunyomi: 'あめ (ame)',
    meaningUz: "Yomg'ir (Rain)",
    strokeCount: 8,
    examples: [
      {
        word: '大雨',
        reading: 'おおあめ (Ooame)',
        meaning: "Katta yomg'ir",
      },
      {
        word: '雨天',
        reading: 'うてん (Uten)',
        meaning: "Yomg'irli ob-havo",
      },
    ],
  },
  {
    id: 'kanji_n5_heaven',
    level: 'N5',
    kanji: '天',
    onyomi: 'テン (ten)',
    kunyomi: 'あま (ama)',
    meaningUz: 'Osmon, Tabiati (Heaven, Sky)',
    strokeCount: 4,
    examples: [
      {
        word: '天気',
        reading: 'てんき (Tenki)',
        meaning: 'Ob-havo',
      },
      {
        word: '天才',
        reading: 'てんさい (Tensai)',
        meaning: 'Dahshatli daho',
      },
    ],
  },
  {
    id: 'kanji_n5_spirit',
    level: 'N5',
    kanji: '気',
    onyomi: 'キ (ki), ケ (ke)',
    kunyomi: '-',
    meaningUz: 'Havo, Kayfiyat, Ruh (Spirit, Air)',
    strokeCount: 6,
    examples: [
      {
        word: '電気',
        reading: 'でんき (Denki)',
        meaning: 'Elektr',
      },
      {
        word: '気持',
        reading: 'きもち (Kimochi)',
        meaning: 'Hissiyot / Kayfiyat',
      },
    ],
  },
  {
    id: 'kanji_n5_electricity',
    level: 'N5',
    kanji: '電',
    onyomi: 'デン (den)',
    kunyomi: '-',
    meaningUz: 'Elektr (Electricity)',
    strokeCount: 13,
    examples: [
      {
        word: '電話',
        reading: 'でんわ (Denwa)',
        meaning: 'Telefon',
      },
      {
        word: '電力',
        reading: 'でんりょく (Denryoku)',
        meaning: 'Elektr quvvati',
      },
    ],
  },
  {
    id: 'kanji_n4_meet',
    level: 'N4',
    kanji: '会',
    onyomi: 'カイ (kai), エ (e)',
    kunyomi: 'あ・う (a-u)',
    meaningUz: 'Uchrashmoq, Jamiyat (Meet, Society)',
    strokeCount: 6,
    examples: [
      {
        word: '会社',
        reading: 'かいしゃ (Kaisha)',
        meaning: 'Kompaniya / Firma',
      },
      {
        word: '会話',
        reading: 'かいわ (Kaiwa)',
        meaning: 'Muloqot / Suhbat',
      },
    ],
  },
  {
    id: 'kanji_n4_company',
    level: 'N4',
    kanji: '社',
    onyomi: 'シャ (sha)',
    kunyomi: 'やしろ (yashiro)',
    meaningUz: 'Kompaniya, Ibodatxona (Company, Shrine)',
    strokeCount: 7,
    examples: [
      {
        word: '社長',
        reading: 'しゃちょう (Shachou)',
        meaning: 'Kompaniya direktori',
      },
      {
        word: 'jinja',
        reading: '神社 (Jinja)',
        meaning: 'Ziyoratgoh',
      },
    ],
  },
  {
    id: 'kanji_n4_new',
    level: 'N4',
    kanji: '新',
    onyomi: 'シン (shin)',
    kunyomi: 'あたら・しい (atara-shii)',
    meaningUz: 'Yangi (New)',
    strokeCount: 13,
    examples: [
      {
        word: '新聞',
        reading: 'しんぶん (Shinbun)',
        meaning: 'Gazeta',
      },
      {
        word: '新幹線',
        reading: 'しんかんせん (Shinkansen)',
        meaning: 'Tezyurar poyezd',
      },
    ],
  },
  {
    id: 'kanji_n4_old',
    level: 'N4',
    kanji: '古',
    onyomi: 'コ (ko)',
    kunyomi: 'ふる・い (furu-i)',
    meaningUz: 'Eski (Old)',
    strokeCount: 5,
    examples: [
      {
        word: '中古',
        reading: 'ちゅうこ (Chuuko)',
        meaning: "Ishlatilgan / Ikkinchi qo'l",
      },
      {
        word: '古代',
        reading: 'こだい (Kodai)',
        meaning: 'Qadimgi zamon',
      },
    ],
  },
  {
    id: 'kanji_n4_high',
    level: 'N4',
    kanji: '高',
    onyomi: 'コウ (kou)',
    kunyomi: 'たか・い (taka-i)',
    meaningUz: 'Baland, Qimmat (High, Expensive)',
    strokeCount: 10,
    examples: [
      {
        word: '高校',
        reading: 'こうこう (Koukou)',
        meaning: 'Yuqori maktab / Litsey',
      },
      {
        word: '最高',
        reading: 'さいこう (Saikou)',
        meaning: 'Ajoyib / Oliy daraja',
      },
    ],
  },
  {
    id: 'kanji_n4_cheap',
    level: 'N4',
    kanji: '安',
    onyomi: 'アン (an)',
    kunyomi: 'やす・い (yasu-i)',
    meaningUz: 'Arzon, Tinch (Cheap, Peaceful)',
    strokeCount: 6,
    examples: [
      {
        word: '安心',
        reading: 'あんしん (Anshin)',
        meaning: 'Xotirjamlik',
      },
      {
        word: '安全',
        reading: 'あんぜん (Anzen)',
        meaning: 'Xavfsizlik',
      },
    ],
  },
  {
    id: 'kanji_n4_many',
    level: 'N4',
    kanji: '多',
    onyomi: 'タ (ta)',
    kunyomi: 'おお・い (oo-i)',
    meaningUz: "Ko'p (Many, Much)",
    strokeCount: 6,
    examples: [
      {
        word: '多数',
        reading: 'たすう (Tasuu)',
        meaning: "Ko'pchilik",
      },
      {
        word: '多分',
        reading: 'たぶん (Tabun)',
        meaning: 'Ehtimol',
      },
    ],
  },
  {
    id: 'kanji_n4_few',
    level: 'N4',
    kanji: '少',
    onyomi: 'ショウ (shou)',
    kunyomi: 'すく・ない (suku-nai), すこ・し (suko-shi)',
    meaningUz: 'Oz, Kichik (Few, Little)',
    strokeCount: 4,
    examples: [
      {
        word: '少年',
        reading: 'しょうねん (Shounen)',
        meaning: "O'smir yigit",
      },
      {
        word: '少女',
        reading: 'しょうじょ (Shoujo)',
        meaning: "O'smir qiz",
      },
    ],
  },
  {
    id: 'kanji_n4_long',
    level: 'N4',
    kanji: '長',
    onyomi: 'チョウ (chou)',
    kunyomi: 'なが・い (naga-i)',
    meaningUz: 'Uzun, Boshliq (Long, Leader)',
    strokeCount: 8,
    examples: [
      {
        word: '社長',
        reading: 'しゃちょう (Shachou)',
        meaning: 'Direktor',
      },
      {
        word: '長男',
        reading: 'ちょうなん (Chounan)',
        meaning: "Katta o'g'il",
      },
    ],
  },
  {
    id: 'kanji_n3_economy',
    level: 'N3',
    kanji: '経',
    onyomi: 'ケイ (kei), キョウ (kyou)',
    kunyomi: 'へ・る (he-ru)',
    meaningUz: "O'tmoq, Iqtisodiyot (Pass, Economy)",
    strokeCount: 11,
    examples: [
      {
        word: '経済',
        reading: 'けいざい (Keizai)',
        meaning: 'Iqtisodiyot',
      },
      {
        word: '経験',
        reading: 'けいけん (Keiken)',
        meaning: 'Tajriba',
      },
    ],
  },
  {
    id: 'kanji_n3_finance',
    level: 'N3',
    kanji: '済',
    onyomi: 'サイ (sai), ザイ (zai)',
    kunyomi: 'す・む (su-mu)',
    meaningUz: 'Tugamoq, Hal qilmoq (Finish, Settle)',
    strokeCount: 11,
    examples: [
      {
        word: '済む',
        reading: 'すむ (Sumu)',
        meaning: 'Tugallanmoq',
      },
      {
        word: '返済',
        reading: 'へんさい (Hensai)',
        meaning: 'Qarzni qaytarish',
      },
    ],
  },
  {
    id: 'kanji_n3_theory',
    level: 'N3',
    kanji: '論',
    onyomi: 'ロン (ron)',
    kunyomi: '-',
    meaningUz: 'Bahs, Tezis, Nazariya (Theory, Logic)',
    strokeCount: 15,
    examples: [
      {
        word: '論文',
        reading: 'ろんぶん (Ronbun)',
        meaning: 'Ilmiy maqola',
      },
      {
        word: '討論',
        reading: 'とうろん (Touron)',
        meaning: 'Debat / Muhokama',
      },
    ],
  },
  {
    id: 'kanji_n3_discuss',
    level: 'N3',
    kanji: '議',
    onyomi: 'ギ (gi)',
    kunyomi: '-',
    meaningUz: 'Muhokama, Majlis (Discuss)',
    strokeCount: 20,
    examples: [
      {
        word: '会議',
        reading: 'かいぎ (Kaigi)',
        meaning: 'Majlis / Konferensiya',
      },
      {
        word: '議員',
        reading: 'ぎいん (Giin)',
        meaning: "Deputat / Parlament a'zosi",
      },
    ],
  },
  {
    id: 'kanji_n3_select',
    level: 'N3',
    kanji: '選',
    onyomi: 'セン (sen)',
    kunyomi: 'えら・ぶ (era-bu)',
    meaningUz: 'Tanlamoq, Saylamoq (Select, Choose)',
    strokeCount: 15,
    examples: [
      {
        word: '選挙',
        reading: 'せんきょ (Senkyo)',
        meaning: 'Saylov',
      },
      {
        word: '選手',
        reading: 'せんしゅ (Senshu)',
        meaning: "Sportchi / O'yinchi",
      },
    ],
  },
  {
    id: 'kanji_n3_raise',
    level: 'N3',
    kanji: '挙',
    onyomi: 'キョ (kyo)',
    kunyomi: 'あ・げる (a-geru)',
    meaningUz: "Ko'tarmoq, Saylov (Raise, Cite)",
    strokeCount: 10,
    examples: [
      {
        word: '挙動',
        reading: 'きょどう (Kyodou)',
        meaning: 'Xulq-atvor',
      },
      {
        word: '一挙に',
        reading: 'いっきに (Ikki ni)',
        meaning: 'Bir urinishda',
      },
    ],
  },
  {
    id: 'kanji_n3_propose',
    level: 'N3',
    kanji: '提',
    onyomi: 'テイ (tei)',
    kunyomi: 'さ・げる (sa-geru)',
    meaningUz: "Taklif qilmoq, Ko'tarib yurmoq (Propose)",
    strokeCount: 12,
    examples: [
      {
        word: '提案',
        reading: 'ていあん (Teian)',
        meaning: 'Taklif / Reja',
      },
      {
        word: '提供',
        reading: 'ていきょう (Teikyou)',
        meaning: 'Taqdim etish',
      },
    ],
  },
  {
    id: 'kanji_n3_plan',
    level: 'N3',
    kanji: '案',
    onyomi: 'アン (an)',
    kunyomi: '-',
    meaningUz: "Reja, G'oya (Plan, Idea)",
    strokeCount: 10,
    examples: [
      {
        word: '案内',
        reading: 'あんない (Annai)',
        meaning: "Yo'l ko'rsatish / Ekskursiya",
      },
      {
        word: '考案',
        reading: 'こうあん (Kouan)',
        meaning: "G'oya o'ylab topish",
      },
    ],
  },
  {
    id: 'kanji_n3_relation',
    level: 'N3',
    kanji: '関',
    onyomi: 'カン (kan)',
    kunyomi: 'せき (seki)',
    meaningUz: 'Aloqa, Bojxona (Relation, Gate)',
    strokeCount: 14,
    examples: [
      {
        word: '関係',
        reading: 'かんけい (Kankei)',
        meaning: 'Aloqa / Munosabat',
      },
      {
        word: '関税',
        reading: 'かんぜい (Kanzei)',
        meaning: 'Bojxona boji',
      },
    ],
  },
  {
    id: 'kanji_n3_duty',
    level: 'N3',
    kanji: '係',
    onyomi: 'ケイ (kei)',
    kunyomi: 'かか・る (kaka-ru)',
    meaningUz: "Mas'ul shaxs, Aloqador (Duty, Person in charge)",
    strokeCount: 9,
    examples: [
      {
        word: '係員',
        reading: 'かかりいん (Kakariin)',
        meaning: "Mas'ul xodim",
      },
      {
        word: '連係',
        reading: 'れんけい (Renkei)',
        meaning: "O'zaro hamkorlik",
      },
    ],
  },
  {
    id: 'kanji_n3_tax',
    level: 'N3',
    kanji: '税',
    onyomi: 'ゼイ (zei)',
    kunyomi: '-',
    meaningUz: 'Soliq (Tax)',
    strokeCount: 12,
    examples: [
      {
        word: '税金',
        reading: 'ぜいきん (Zeikin)',
        meaning: 'Soliq',
      },
      {
        word: '消費税',
        reading: 'しょうひぜい (Shouhizei)',
        meaning: "QQS solig'i",
      },
    ],
  },
  {
    id: 'kanji_n3_right',
    level: 'N3',
    kanji: '権',
    onyomi: 'ケン (ken), ゴン (gon)',
    kunyomi: '-',
    meaningUz: 'Huquq, Vakolat (Right, Power)',
    strokeCount: 15,
    examples: [
      {
        word: '人権',
        reading: 'じんけん (Jinken)',
        meaning: 'Inson huquqlari',
      },
      {
        word: '権利',
        reading: 'けんり (Kenri)',
        meaning: 'Huquq',
      },
    ],
  },
  {
    id: 'kanji_n3_justice',
    level: 'N3',
    kanji: '義',
    onyomi: 'ギ (gi)',
    kunyomi: '-',
    meaningUz: "Burch, Ma'no (Justice, Meaning)",
    strokeCount: 13,
    examples: [
      {
        word: '義務',
        reading: 'ぎむ (Gimu)',
        meaning: 'Burch / Majburiyat',
      },
      {
        word: '定義',
        reading: 'ていぎ (Teigi)',
        meaning: "Ta'rif / Definitsiya",
      },
    ],
  },
  {
    id: 'kanji_n3_work',
    level: 'N3',
    kanji: '務',
    onyomi: 'ム (mu)',
    kunyomi: 'つと・める (tsuto-meru)',
    meaningUz: 'Bajarmoq, Vazifa (Duty, Work)',
    strokeCount: 11,
    examples: [
      {
        word: '公務員',
        reading: 'こうむいん (Koumuin)',
        meaning: 'Davlat xizmatchisi',
      },
      {
        word: '事務所',
        reading: 'じむしょ (Jimusho)',
        meaning: 'Ofis / Idora',
      },
    ],
  },
  {
    id: 'kanji_n3_total',
    level: 'N3',
    kanji: '総',
    onyomi: 'ソウ (sou)',
    kunyomi: '-',
    meaningUz: 'Umumiy, Barcha (Total, General)',
    strokeCount: 14,
    examples: [
      {
        word: '総理大臣',
        reading: 'そうりだいじん (Souridaijin)',
        meaning: 'Bosh vazir',
      },
      {
        word: '総合',
        reading: 'そうごう (Sougou)',
        meaning: 'Umumiy qamrov',
      },
    ],
  },
  {
    id: 'kanji_n3_territory',
    level: 'N3',
    kanji: '領',
    onyomi: 'リョウ (ryou)',
    kunyomi: '-',
    meaningUz: 'Hudud, Boshqarmoq (Territory, Lead)',
    strokeCount: 14,
    examples: [
      {
        word: '大統領',
        reading: 'だいとうりょう (Daitouryou)',
        meaning: 'Prezident',
      },
      {
        word: '領収書',
        reading: 'りょうしゅうしょ (Ryoushuusho)',
        meaning: 'Kvitansiya / Chek',
      },
    ],
  },
  {
    id: 'kanji_n3_check',
    level: 'N3',
    kanji: '査',
    onyomi: 'サ (sa)',
    kunyomi: '-',
    meaningUz: 'Tekshiruv, Tergov (Check, Investigate)',
    strokeCount: 9,
    examples: [
      {
        word: '調査',
        reading: 'ちょうさ (Chousa)',
        meaning: "Tadqiqot / So'rovnoma",
      },
      {
        word: '検査',
        reading: 'けんさ (Kensa)',
        meaning: 'Tibbiy / Texnik tekshiruv',
      },
    ],
  },
  {
    id: 'kanji_n3_politics',
    level: 'N3',
    kanji: '政',
    onyomi: 'セイ (sei), ショウ (shou)',
    kunyomi: 'まつりごと (matsurigoto)',
    meaningUz: 'Siyosat (Politics)',
    strokeCount: 9,
    examples: [
      {
        word: '政治',
        reading: 'せいじ (Seiji)',
        meaning: 'Siyosat',
      },
      {
        word: '政党',
        reading: 'せいとう (Seitou)',
        meaning: 'Siyosiy partiya',
      },
    ],
  },
  {
    id: 'kanji_n2_outline',
    level: 'N2',
    kanji: '概',
    onyomi: 'ガイ (gai)',
    kunyomi: '-',
    meaningUz: 'Umumiylik, Konsept (Outline, General)',
    strokeCount: 14,
    examples: [
      {
        word: '概要',
        reading: 'がいよう (Gaiyou)',
        meaning: 'Qisqacha konspekt / Sharh',
      },
      {
        word: '概念',
        reading: 'がいねん (Gainen)',
        meaning: 'Tushuncha / Konsepsiya',
      },
    ],
  },
  {
    id: 'kanji_n2_abridge',
    level: 'N2',
    kanji: '略',
    onyomi: 'リャク (ryaku)',
    kunyomi: '-',
    meaningUz: 'Qisqacha, Reja (Abridge, Strategy)',
    strokeCount: 11,
    examples: [
      {
        word: '省略',
        reading: 'しょうりゃク (Shouryaku)',
        meaning: 'Qisqartirish / Tushirib qoldirish',
      },
      {
        word: '戦略',
        reading: 'せんりゃく (Senryaku)',
        meaning: 'Strategiya',
      },
    ],
  },
  {
    id: 'kanji_n2_obstacle',
    level: 'N2',
    kanji: '障',
    onyomi: 'ショウ (shou)',
    kunyomi: 'さわ・わる (sawa-waru)',
    meaningUz: "To'siq, G'ov (Obstacle, Harm)",
    strokeCount: 14,
    examples: [
      {
        word: '障害',
        reading: 'しょうがい (Shougai)',
        meaning: "Nogironlik / To'siq",
      },
      {
        word: '保障',
        reading: 'ほしょう (Hoshou)',
        meaning: 'Kafolat',
      },
    ],
  },
  {
    id: 'kanji_n2_harm',
    level: 'N2',
    kanji: '害',
    onyomi: 'ガイ (gai)',
    kunyomi: '-',
    meaningUz: 'Ziyon, Zarar (Harm, Damage)',
    strokeCount: 10,
    examples: [
      {
        word: '被害',
        reading: 'ひがい (Higai)',
        meaning: 'Zarar / Talafot',
      },
      {
        word: '公害',
        reading: 'こうがい (Kougai)',
        meaning: 'Atrof-muhit ifloslanishi',
      },
    ],
  },
  {
    id: 'kanji_n2_expand',
    level: 'N2',
    kanji: '拡',
    onyomi: 'カク (kaku)',
    kunyomi: 'ひろ・げる (hiro-geru)',
    meaningUz: 'Kengaytirmoq (Expand, Enlarge)',
    strokeCount: 8,
    examples: [
      {
        word: '拡大',
        reading: 'かくだい (Kakudai)',
        meaning: 'Kengaytirish / Masshtablashtirish',
      },
      {
        word: '拡張',
        reading: 'かくちょう (Kakuchou)',
        meaning: 'Kengaytma / Rivojlantirish',
      },
    ],
  },
  {
    id: 'kanji_n2_shrink',
    level: 'N2',
    kanji: '縮',
    onyomi: 'シュク (shuku)',
    kunyomi: 'ちぢ・む (chiji-mu)',
    meaningUz: 'Qisqartirmoq (Shrink, Reduce)',
    strokeCount: 17,
    examples: [
      {
        word: '縮小',
        reading: 'しゅくしょう (Shukushou)',
        meaning: 'Qisqartirish',
      },
      {
        word: '圧縮',
        reading: 'あっしゅく (Asshuku)',
        meaning: 'Siqish / Arxivlash',
      },
    ],
  },
  {
    id: 'kanji_n2_suppress',
    level: 'N2',
    kanji: '抑',
    onyomi: 'ヨク (yoku)',
    kunyomi: 'おさ・える (osa-eru)',
    meaningUz: 'Bosmoq, Tiymoq (Suppress, Control)',
    strokeCount: 7,
    examples: [
      {
        word: '抑制',
        reading: 'よくせい (Yokusei)',
        meaning: 'Jilovlash / Boshqarish',
      },
      {
        word: '抑圧',
        reading: 'よくあつ (Yokuatsu)',
        meaning: 'Tazyiq / Zulm',
      },
    ],
  },
  {
    id: 'kanji_n2_urge',
    level: 'N2',
    kanji: '促',
    onyomi: 'ソク (soku)',
    kunyomi: 'うなが・す (unaga-su)',
    meaningUz: 'Undamoq, Tezlatmoq (Urge, Stimulate)',
    strokeCount: 9,
    examples: [
      {
        word: '促進',
        reading: 'そくしん (Sokushin)',
        meaning: 'Rivojlantirishni tezlatish',
      },
      {
        word: '促す',
        reading: 'うながす (Unagasu)',
        meaning: 'Chaqirmoq / Undamoq',
      },
    ],
  },
  {
    id: 'kanji_n2_advise',
    level: 'N2',
    kanji: '勧',
    onyomi: 'カン (kan)',
    kunyomi: 'すす・める (susu-meru)',
    meaningUz: 'Taklif qilmoq, Maslahat (Advise, Encourage)',
    strokeCount: 13,
    examples: [
      {
        word: '勧誘',
        reading: 'かんゆう (Kanyuu)',
        meaning: "Taklif qilish / Da'vat",
      },
      {
        word: '勧告',
        reading: 'かんこく (Kankoku)',
        meaning: 'Tavsiya / Ogohlantirish',
      },
    ],
  },
  {
    id: 'kanji_n2_fear',
    level: 'N2',
    kanji: '恐',
    onyomi: 'キョウ (kyou)',
    kunyomi: 'おそ・ろしい (oso-roshii)',
    meaningUz: "Qo'rqinch, Xavf (Fear, Dread)",
    strokeCount: 10,
    examples: [
      {
        word: '恐縮',
        reading: 'きょうしゅく (Kyoushuku)',
        meaning: "Uzr so'rash / Minnatdorchilik",
      },
      {
        word: '恐竜',
        reading: 'きょうりゅう (Kyouryuu)',
        meaning: 'Dinozavr',
      },
    ],
  },
  {
    id: 'kanji_n2_prudent',
    level: 'N2',
    kanji: '慎',
    onyomi: 'シン (shin)',
    kunyomi: 'つつし・む (tsutsushi-mu)',
    meaningUz: 'Ehtiyotkorlik (Prudent, Discreet)',
    strokeCount: 13,
    examples: [
      {
        word: '慎重',
        reading: 'しんちょう (Shinchou)',
        meaning: 'Ehtiyotkor / Bosiq',
      },
      {
        word: '不慎',
        reading: 'ふしん (Fushin)',
        meaning: 'Ehtiyotsizlik',
      },
    ],
  },
  {
    id: 'kanji_n2_loosen',
    level: 'N2',
    kanji: '緩',
    onyomi: 'カン (kan)',
    kunyomi: 'ゆる・む (yuru-mu)',
    meaningUz: "Bo'shashmoq, Yumshatmoq (Loosen, Relax)",
    strokeCount: 15,
    examples: [
      {
        word: '緩和',
        reading: 'かんわ (Kanwa)',
        meaning: 'Yumshatish / Yengillashtirish',
      },
      {
        word: '緩慢',
        reading: 'かんまん (Kanman)',
        meaning: 'Sekinlik',
      },
    ],
  },
  {
    id: 'kanji_n2_intense',
    level: 'N2',
    kanji: '激',
    onyomi: 'ゲキ (geki)',
    kunyomi: 'はげ・しい (hage-shii)',
    meaningUz: 'Shiddatli, Qattiq (Intense, Violent)',
    strokeCount: 16,
    examples: [
      {
        word: '感激',
        reading: 'かんげき (Kangeki)',
        meaning: 'Tolqinlanish',
      },
      {
        word: '激増',
        reading: 'げきぞう (Gekizou)',
        meaning: "Keskin ko'payish",
      },
    ],
  },
  {
    id: 'kanji_n2_fall',
    level: 'N2',
    kanji: '陥',
    onyomi: 'カン (kan)',
    kunyomi: 'おち・いる (ochi-iru)',
    meaningUz: 'Tuzoqqa tushmoq (Fall into, Cave in)',
    strokeCount: 10,
    examples: [
      {
        word: '陥没',
        reading: 'かんぼつ (Kanbotsu)',
        meaning: "O'pirilish / Cho'kish",
      },
      {
        word: '欠陥',
        reading: 'けっかん (Kekkan)',
        meaning: 'Kamchilik / Nuqson',
      },
    ],
  },
  {
    id: 'kanji_n2_melt',
    level: 'N2',
    kanji: '融',
    onyomi: 'ユウ (yuu)',
    kunyomi: '-',
    meaningUz: 'Erish, Moliya (Melt, Finance)',
    strokeCount: 16,
    examples: [
      {
        word: '金融',
        reading: 'きんゆう (Kinyuu)',
        meaning: 'Moliya / Bank tizimi',
      },
      {
        word: '融通',
        reading: 'ゆうずう (Yuuzuu)',
        meaning: 'Moslashuvchanlik',
      },
    ],
  },
  {
    id: 'kanji_n2_exchange',
    level: 'N2',
    kanji: '換',
    onyomi: 'カン (kan)',
    kunyomi: 'か・える (ka-eru)',
    meaningUz: 'Almashtirmoq (Exchange, Swap)',
    strokeCount: 12,
    examples: [
      {
        word: '交換',
        reading: 'こうかん (Koukan)',
        meaning: 'Almashtirish / Ayirboshlash',
      },
      {
        word: '変換',
        reading: 'へんかん (Henkan)',
        meaning: "O'zgartirish",
      },
    ],
  },
  {
    id: 'kanji_n2_replace',
    level: 'N2',
    kanji: '替',
    onyomi: 'タイ (tai)',
    kunyomi: 'か・える (ka-eru)',
    meaningUz: 'Qaytadan almashtirmoq (Replace)',
    strokeCount: 12,
    examples: [
      {
        word: '両替',
        reading: 'りょうがえ (Ryougae)',
        meaning: 'Valyuta ayirboshlash',
      },
      {
        word: '着替え',
        reading: 'きがえ (Kigae)',
        meaning: 'Kiyim almashtirish',
      },
    ],
  },
  {
    id: 'kanji_n2_discard',
    level: 'N2',
    kanji: '棄',
    onyomi: 'キ (ki)',
    kunyomi: 'す・てる (su-teru)',
    meaningUz: 'Tashlab yubormoq (Discard, Abandon)',
    strokeCount: 13,
    examples: [
      {
        word: '破棄',
        reading: 'はき (Haki)',
        meaning: 'Shartnomani bekor qilish',
      },
      {
        word: '棄権',
        reading: 'きけん (Kiken)',
        meaning: 'Ovoz berishdan voz kechish',
      },
    ],
  },
  {
    id: 'kanji_n2_evade',
    level: 'N2',
    kanji: '避',
    onyomi: 'ヒ (hi)',
    kunyomi: 'さ・ける (sake-ru)',
    meaningUz: 'Qochmoq, Chetlanmoq (Evade, Avoid)',
    strokeCount: 16,
    examples: [
      {
        word: '避難',
        reading: 'ひなん (Hinan)',
        meaning: 'Evakuatsiya qilish',
      },
      {
        word: '回避',
        reading: 'かいひ (Kaihi)',
        meaning: "Chetlab o'tish",
      },
    ],
  },
  {
    id: 'kanji_n2_thwart',
    level: 'N2',
    kanji: '阻',
    onyomi: 'ソ (so)',
    kunyomi: 'はば・む (haba-mu)',
    meaningUz: "To'smoq (Thwart, Block)",
    strokeCount: 8,
    examples: [
      {
        word: '阻止',
        reading: 'そし (Soshi)',
        meaning: "To'sqinlik qilish",
      },
      {
        word: '阻害',
        reading: 'そがい (Sogai)',
        meaning: "Rivojlanishga g'ov bo'lish",
      },
    ],
  },
  {
    id: 'kanji_n1_anonymous',
    level: 'N1',
    kanji: '匿',
    onyomi: 'トク (toku)',
    kunyomi: 'かく・す (kaku-su)',
    meaningUz: 'Yashirin, Anonim (Anonymous, Hide)',
    strokeCount: 10,
    examples: [
      {
        word: '匿名',
        reading: 'とくめい (Tokumei)',
        meaning: 'Anonim / Maxfiy ism',
      },
      {
        word: '隠匿',
        reading: 'いんとく (Intoku)',
        meaning: 'Yashirish / Bekitish',
      },
    ],
  },
  {
    id: 'kanji_n1_vast',
    level: 'N1',
    kanji: '茫',
    onyomi: 'ボウ (bou)',
    kunyomi: '-',
    meaningUz: 'Cheksiz, Xira (Vast, Dim)',
    strokeCount: 8,
    examples: [
      {
        word: '茫然',
        reading: 'ぼうぜん (Bouzen)',
        meaning: 'Lol qolmoq / Hayratda turish',
      },
      {
        word: '茫々',
        reading: 'ぼうぼう (Boubou)',
        meaning: 'Cheksiz yaxta',
      },
    ],
  },
  {
    id: 'kanji_n1_desert',
    level: 'N1',
    kanji: '漠',
    onyomi: 'バク (baku)',
    kunyomi: '-',
    meaningUz: 'Sahro, Noaniq (Desert, Vague)',
    strokeCount: 13,
    examples: [
      {
        word: '砂漠',
        reading: 'さばく (Sabaku)',
        meaning: "Sahro / Cho'l",
      },
      {
        word: '漠然',
        reading: 'ばくぜん (Bakuzen)',
        meaning: "Noaniq / G'ira-shira",
      },
    ],
  },
  {
    id: 'kanji_n1_evil',
    level: 'N1',
    kanji: '弊',
    onyomi: 'ヘイ (hei)',
    kunyomi: '-',
    meaningUz: 'Yomon odat, Kompaniyamiz (Evil, Our company)',
    strokeCount: 15,
    examples: [
      {
        word: '弊害',
        reading: 'へいがい (Heigai)',
        meaning: 'Zararli oqibat',
      },
      {
        word: '弊社',
        reading: 'へいしゃ (Heisha)',
        meaning: 'Bizning kompaniyamiz (Kamtarona)',
      },
    ],
  },
  {
    id: 'kanji_n1_warp',
    level: 'N1',
    kanji: '歪',
    onyomi: 'ワイ (wai)',
    kunyomi: 'ひず・む (hizu-mu), ゆが・む (yuga-mu)',
    meaningUz: 'Qiyshaymoq, Burmoq (Warp, Distort)',
    strokeCount: 9,
    examples: [
      {
        word: '歪曲',
        reading: 'わいきょく (Waikyoku)',
        meaning: "Haqiqatni buzip ko'rsatish",
      },
      {
        word: '歪み',
        reading: 'ひずみ (Hizumi)',
        meaning: 'Deformatsiya',
      },
    ],
  },
  {
    id: 'kanji_n1_ridicule',
    level: 'N1',
    kanji: '嘲',
    onyomi: 'チョウ (chou)',
    kunyomi: 'あざけ・る (azake-ru)',
    meaningUz: 'Masxara qilmoq (Ridicule, Mock)',
    strokeCount: 15,
    examples: [
      {
        word: '嘲笑',
        reading: 'ちょうしょう (Choushou)',
        meaning: 'Ustidan kulish',
      },
      {
        word: '嘲る',
        reading: 'あざける (Azakeru)',
        meaning: 'Mazax qilmoq',
      },
    ],
  },
  {
    id: 'kanji_n1_play_with',
    level: 'N1',
    kanji: '弄',
    onyomi: 'ロウ (rou)',
    kunyomi: 'もてあそ・ぶ (moteaso-bu)',
    meaningUz: "O'ynashmoq, Ustidan kulmoq (Play with, Manipulate)",
    strokeCount: 7,
    examples: [
      {
        word: '翻弄',
        reading: 'ほんろう (Honrou)',
        meaning: "O'yinchoq qilish",
      },
      {
        word: '弄ぶ',
        reading: 'もてあそぶ (Moteasobu)',
        meaning: "Hissiyotlar bilan o'ynashmoq",
      },
    ],
  },
  {
    id: 'kanji_n1_scorn',
    level: 'N1',
    kanji: '蔑',
    onyomi: 'ベツ (betsu)',
    kunyomi: 'さげす・む (sagesu-mu)',
    meaningUz: 'Mensimaslik (Scorn, Despise)',
    strokeCount: 14,
    examples: [
      {
        word: '蔑視',
        reading: 'べっし (Besshi)',
        meaning: 'Patsga urib qarash',
      },
      {
        word: '軽蔑',
        reading: 'けいべつ (Keibetsu)',
        meaning: 'Nafrat / Mensimaslik',
      },
    ],
  },
  {
    id: 'kanji_n1_haughty',
    level: 'N1',
    kanji: '傲',
    onyomi: 'ゴウ (gou)',
    kunyomi: 'おご・る (ogo-ru)',
    meaningUz: 'Kibrli, Mansabparast (Haughty, Proud)',
    strokeCount: 13,
    examples: [
      {
        word: '傲慢',
        reading: 'ごうまん (Gouman)',
        meaning: 'Kibrli / Takabbur',
      },
      {
        word: '傲慢無礼',
        reading: 'ごうまんぶれい (Goumanburei)',
        meaning: "O'ta odabsiz va kibrli",
      },
    ],
  },
  {
    id: 'kanji_n1_arrogant',
    level: 'N1',
    kanji: '慢',
    onyomi: 'マン (man)',
    kunyomi: '-',
    meaningUz: 'Manmanlik, Sekin (Arrogant, Chronic)',
    strokeCount: 14,
    examples: [
      {
        word: '自慢',
        reading: 'じまん (Jiman)',
        meaning: 'Maqtanchoqlik',
      },
      {
        word: '慢性',
        reading: 'まんせい (Mansei)',
        meaning: 'Surunkali kasallik',
      },
    ],
  },
  {
    id: 'kanji_n1_hesitate1',
    level: 'N1',
    kanji: '躊',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'tamera-u',
    meaningUz: 'Ikkilanish (Hesitate)',
    strokeCount: 21,
    examples: [
      {
        word: '躊躇',
        reading: 'ちゅうちょ (Chuucho)',
        meaning: 'Ikkilanish / Ikkilanib turish',
      },
    ],
  },
  {
    id: 'kanji_n1_hesitate2',
    level: 'N1',
    kanji: '躇',
    onyomi: 'チョ (cho)',
    kunyomi: 'tamera-u',
    meaningUz: 'Ikkilanish (Hesitate)',
    strokeCount: 19,
    examples: [
      {
        word: '躊躇う',
        reading: 'ためらう (Tamerau)',
        meaning: 'Ikkilanmoq',
      },
    ],
  },
  {
    id: 'kanji_n1_obscure',
    level: 'N1',
    kanji: '曖',
    onyomi: 'アイ (ai)',
    kunyomi: '-',
    meaningUz: 'Noaniq, Xira (Obscure, Vague)',
    strokeCount: 17,
    examples: [
      {
        word: '曖昧',
        reading: 'あいまい (Aimai)',
        meaning: 'Noaniq / Ikkitaraflama',
      },
    ],
  },
  {
    id: 'kanji_n1_dark',
    level: 'N1',
    kanji: '昧',
    onyomi: 'マイ (mai), バイ (bai)',
    kunyomi: 'くら・い (kura-i)',
    meaningUz: "Xira, Qorong'u (Dark, Foolish)",
    strokeCount: 9,
    examples: [
      {
        word: '三昧',
        reading: 'ざんまい (Zanmai)',
        meaning: 'Haddan tashqari berilish',
      },
    ],
  },
  {
    id: 'kanji_n1_willful',
    level: 'N1',
    kanji: '恣',
    onyomi: 'シ (shi)',
    kunyomi: 'ほしいまま (hoshiimama)',
    meaningUz: "O'z bilganicha, Erkin (Willful, Arbitrary)",
    strokeCount: 10,
    examples: [
      {
        word: '恣意',
        reading: 'しい (Shii)',
        meaning: "Subyektivlik / O'zboshimchalik",
      },
    ],
  },
  {
    id: 'kanji_n1_harsh',
    level: 'N1',
    kanji: '苛',
    onyomi: 'カ (ka)',
    kunyomi: 'いら・だつ (ira-datsu)',
    meaningUz: 'Qattiq, Asabiy (Harsh, Severe)',
    strokeCount: 8,
    examples: [
      {
        word: '苛酷',
        reading: 'かこく (Kakoku)',
        meaning: "O'ta shafqatsiz sharoit",
      },
      {
        word: '苛立ち',
        reading: 'いらだち (Iradachi)',
        meaning: 'Jahli chiqish',
      },
    ],
  },
  {
    id: 'kanji_n1_taboo',
    level: 'N1',
    kanji: '忌',
    onyomi: 'キ (ki)',
    kunyomi: 'い・む (i-mu)',
    meaningUz: 'Nafratlanmoq, Tabu (Taboo, Avoid)',
    strokeCount: 7,
    examples: [
      {
        word: '忌避',
        reading: 'きひ (Kihi)',
        meaning: 'Rad etish / Qochish',
      },
      {
        word: '禁忌',
        reading: 'きんき (Kinki)',
        meaning: 'Tibbiy man etilgan holat',
      },
    ],
  },
  {
    id: 'kanji_n1_dread',
    level: 'N1',
    kanji: '憚',
    onyomi: 'タン (tan)',
    kunyomi: 'はばか・る (habaka-ru)',
    meaningUz: "Cho'chimoq, Tortinmoq (Dread, Hesitate)",
    strokeCount: 15,
    examples: [
      {
        word: '憚る',
        reading: 'はばかる (Habakaru)',
        meaning: "Tortinmoq / Cho'chimoq",
      },
    ],
  },
  {
    id: 'kanji_n1_fabricate',
    level: 'N1',
    kanji: '捏',
    onyomi: 'ネツ (netsu)',
    kunyomi: 'ね・る (ne-ru)',
    meaningUz: 'Soxtalashtirmoq (Fabricate, Knead)',
    strokeCount: 10,
    examples: [
      {
        word: '捏造',
        reading: 'ねつぞう (Netsuzou)',
        meaning: 'Soxtalashtirish / Uydirma',
      },
    ],
  },
  {
    id: 'kanji_n1_slash',
    level: 'N1',
    kanji: '斬',
    onyomi: 'ザン (zan), サン (san)',
    kunyomi: 'き・る (ki-ru)',
    meaningUz: 'Qilich bilan kesmoq (Slash)',
    strokeCount: 11,
    examples: [
      {
        word: '斬新',
        reading: 'ざんしん (Zanshin)',
        meaning: "O'ta noodatiy va yangicha",
      },
      {
        word: '斬首',
        reading: 'ざんしゅ (Zanshu)',
        meaning: 'Boshni chopish',
      },
    ],
  },
  {
    id: 'kanji_n4_1_不',
    level: 'N4',
    kanji: '不',
    onyomi: 'フ, ブ (fu, bu)',
    kunyomi: '-',
    meaningUz: 'Emas, inkor, no- (No-, not, non-)',
    strokeCount: 4,
    examples: [
      {
        word: '不便',
        reading: 'ふべん (Fuben)',
        meaning: 'Noqulay',
      },
      {
        word: '不安',
        reading: 'ふあん (Fuan)',
        meaning: 'Xavotir, bezovtalik',
      },
    ],
  },
  {
    id: 'kanji_n4_2_世',
    level: 'N4',
    kanji: '世',
    onyomi: 'セイ, セ (sei, se)',
    kunyomi: 'よ (yo)',
    meaningUz: 'Dunyo, zamon, avlod (World, generation)',
    strokeCount: 5,
    examples: [
      {
        word: '世界',
        reading: 'せかい (Sekai)',
        meaning: 'Dunyo',
      },
      {
        word: '世話',
        reading: 'せわ (Sewa)',
        meaning: "G'amxo'rlik",
      },
    ],
  },
  {
    id: 'kanji_n4_3_主',
    level: 'N4',
    kanji: '主',
    onyomi: 'シュ, ス (shu, su)',
    kunyomi: 'おも, ぬし (omo, nushi)',
    meaningUz: "Asosiy, xo'jayin (Main, master)",
    strokeCount: 5,
    examples: [
      {
        word: '主人',
        reading: 'しゅじん (Shujin)',
        meaning: "Xo'jayin, er",
      },
      {
        word: '主に',
        reading: 'おもに (Omoni)',
        meaning: 'Asosan',
      },
    ],
  },
  {
    id: 'kanji_n4_4_乗',
    level: 'N4',
    kanji: '乗',
    onyomi: 'ジョウ (jou)',
    kunyomi: 'の・る, の・せる (no-ru, no-seru)',
    meaningUz: 'Minmoq, chiqmoq (Ride, board)',
    strokeCount: 9,
    examples: [
      {
        word: '乗る',
        reading: 'のる (Noru)',
        meaning: 'Minmoq',
      },
      {
        word: '乗り物',
        reading: 'のりもの (Norimono)',
        meaning: 'Transport vositasi',
      },
    ],
  },
  {
    id: 'kanji_n4_5_事',
    level: 'N4',
    kanji: '事',
    onyomi: 'ジ, ズ (ji, zu)',
    kunyomi: 'こと (koto)',
    meaningUz: 'Ish, hodisa, narsa (Thing, matter, accident)',
    strokeCount: 8,
    examples: [
      {
        word: '仕事',
        reading: 'しごと (Shigoto)',
        meaning: 'Ish, mehnat',
      },
      {
        word: '事故',
        reading: 'じこ (Jiko)',
        meaning: 'Avariya, hodisa',
      },
    ],
  },
  {
    id: 'kanji_n4_6_京',
    level: 'N4',
    kanji: '京',
    onyomi: 'キョウ, ケイ (kyou, kei)',
    kunyomi: 'みやこ (miyako)',
    meaningUz: 'Poytaxt (Capital)',
    strokeCount: 8,
    examples: [
      {
        word: '東京',
        reading: 'とうきょう (Toukyou)',
        meaning: 'Tokio',
      },
      {
        word: '京都',
        reading: 'きょうと (Kyouto)',
        meaning: 'Kioto',
      },
    ],
  },
  {
    id: 'kanji_n4_7_仕',
    level: 'N4',
    kanji: '仕',
    onyomi: 'シ, ジ (shi, ji)',
    kunyomi: 'つか・える (tsuka-eru)',
    meaningUz: 'Xizmat qilmoq, ish (Serve, doing)',
    strokeCount: 5,
    examples: [
      {
        word: '仕事',
        reading: 'しごと (Shigoto)',
        meaning: 'Ish, xizmat',
      },
      {
        word: '仕方',
        reading: 'しかた (Shikata)',
        meaning: 'Usul, iloj',
      },
    ],
  },
  {
    id: 'kanji_n4_8_代',
    level: 'N4',
    kanji: '代',
    onyomi: 'ダイ, タイ (dai, tai)',
    kunyomi: 'か・わる, か・える, よ, しろ (ka-waru, ka-eru, yo, shiro)',
    meaningUz: "O'rinbosar, davr, narx (Substitute, era, fee)",
    strokeCount: 5,
    examples: [
      {
        word: '時代',
        reading: 'じだい (Jidai)',
        meaning: 'Davr, zamon',
      },
      {
        word: '電気代',
        reading: 'でんきだい (Denkidai)',
        meaning: "Elektr to'lovi",
      },
    ],
  },
  {
    id: 'kanji_n4_9_以',
    level: 'N4',
    kanji: '以',
    onyomi: 'イ (i)',
    kunyomi: '-',
    meaningUz: '...dan boshlab, orqali (By means of, since)',
    strokeCount: 5,
    examples: [
      {
        word: '以上',
        reading: 'いじょう (Ijou)',
        meaning: '...dan ortiq',
      },
      {
        word: '以下',
        reading: 'いか (Ika)',
        meaning: '...dan kam',
      },
    ],
  },
  {
    id: 'kanji_n4_10_低',
    level: 'N4',
    kanji: '低',
    onyomi: 'テイ (tei)',
    kunyomi: 'ひく・い, ひく・める (hiku-i, hiku-meru)',
    meaningUz: 'Past (Low, short)',
    strokeCount: 7,
    examples: [
      {
        word: '低い',
        reading: 'ひくい (Hikui)',
        meaning: 'Past',
      },
      {
        word: '最低',
        reading: 'さいてい (Saitei)',
        meaning: 'Eng past, eng yomon',
      },
    ],
  },
  {
    id: 'kanji_n4_11_住',
    level: 'N4',
    kanji: '住',
    onyomi: 'ジュウ, チュウ (juu, chuu)',
    kunyomi: 'す・む, す・まう (su-mu, su-mau)',
    meaningUz: 'Yashamoq (Live, reside)',
    strokeCount: 7,
    examples: [
      {
        word: '住む',
        reading: 'すむ (Sumu)',
        meaning: 'Yashamoq',
      },
      {
        word: '住所',
        reading: 'じゅうしょ (Juusho)',
        meaning: 'Yashash manzili',
      },
    ],
  },
  {
    id: 'kanji_n4_12_体',
    level: 'N4',
    kanji: '体',
    onyomi: 'タイ, テイ (tai, tei)',
    kunyomi: 'からだ (karada)',
    meaningUz: 'Tana, gavda (Body)',
    strokeCount: 7,
    examples: [
      {
        word: '体',
        reading: 'からだ (Karada)',
        meaning: 'Tana',
      },
      {
        word: '体重',
        reading: 'たいじゅう (Taijuu)',
        meaning: 'Tana vazni',
      },
    ],
  },
  {
    id: 'kanji_n4_13_作',
    level: 'N4',
    kanji: '作',
    onyomi: 'サク, サ (saku, sa)',
    kunyomi: 'つく・る (tsuku-ru)',
    meaningUz: 'Yasamoq, tayyorlamoq (Make, create)',
    strokeCount: 7,
    examples: [
      {
        word: '作る',
        reading: 'つくる (Tsukuru)',
        meaning: 'Yasamoq',
      },
      {
        word: '作文',
        reading: 'さくぶん (Sakubun)',
        meaning: 'Insho',
      },
    ],
  },
  {
    id: 'kanji_n4_14_使',
    level: 'N4',
    kanji: '使',
    onyomi: 'シ (shi)',
    kunyomi: 'つか・う (tsuka-u)',
    meaningUz: 'Ishlatmoq, elchi (Use, messenger)',
    strokeCount: 8,
    examples: [
      {
        word: '使う',
        reading: 'つかう (Tsukau)',
        meaning: 'Ishlatmoq',
      },
      {
        word: '大使館',
        reading: 'たいしかん (Taishikan)',
        meaning: 'Elchixona',
      },
    ],
  },
  {
    id: 'kanji_n4_15_便',
    level: 'N4',
    kanji: '便',
    onyomi: 'ベン, ビン (ben, bin)',
    kunyomi: 'たよ・り (tayo-ri)',
    meaningUz: 'Qulaylik, pochta (Convenience, mail)',
    strokeCount: 9,
    examples: [
      {
        word: '便利',
        reading: 'べんり (Benri)',
        meaning: 'Qulay',
      },
      {
        word: '郵便局',
        reading: 'ゆうびんきょく (Yuubinkyoku)',
        meaning: 'Pochtaxona',
      },
    ],
  },
  {
    id: 'kanji_n4_16_借',
    level: 'N4',
    kanji: '借',
    onyomi: 'シャク (shaku)',
    kunyomi: 'か・りる (ka-riru)',
    meaningUz: 'Qarzga olmoq (Borrow)',
    strokeCount: 10,
    examples: [
      {
        word: '借りる',
        reading: 'かりる (Kariru)',
        meaning: 'Qarz olmoq',
      },
      {
        word: '借金',
        reading: 'しゃっきん (Shakkin)',
        meaning: 'Qarz',
      },
    ],
  },
  {
    id: 'kanji_n4_17_働',
    level: 'N4',
    kanji: '働',
    onyomi: 'ドウ (dou)',
    kunyomi: 'はたら・く (hatara-ku)',
    meaningUz: 'Ishlamoq, mehnat qilmoq (Work)',
    strokeCount: 13,
    examples: [
      {
        word: '働く',
        reading: 'はたらく (Hataraku)',
        meaning: 'Ishlamoq',
      },
      {
        word: '労働',
        reading: 'ろうどう (Roudou)',
        meaning: 'Mehnat',
      },
    ],
  },
  {
    id: 'kanji_n4_18_元',
    level: 'N4',
    kanji: '元',
    onyomi: 'ゲン, ガン (gen, gan)',
    kunyomi: 'もと (moto)',
    meaningUz: "Asos, boshlang'ich, tetik (Origin, health)",
    strokeCount: 4,
    examples: [
      {
        word: '元気',
        reading: 'げんき (Genki)',
        meaning: "Tetik, sog'lom",
      },
      {
        word: '足元',
        reading: 'あしもと (Ashimoto)',
        meaning: 'Oyoq osti',
      },
    ],
  },
  {
    id: 'kanji_n4_19_兄',
    level: 'N4',
    kanji: '兄',
    onyomi: 'ケイ, キョウ (kei, kyou)',
    kunyomi: 'あに (ani)',
    meaningUz: 'Aka (Older brother)',
    strokeCount: 5,
    examples: [
      {
        word: '兄',
        reading: 'あに (Ani)',
        meaning: 'Akam',
      },
      {
        word: 'お兄さん',
        reading: 'おにいさん (Oniisan)',
        meaning: 'Aka',
      },
    ],
  },
  {
    id: 'kanji_n4_20_光',
    level: 'N4',
    kanji: '光',
    onyomi: 'コウ (kou)',
    kunyomi: 'ひか・る, ひかり (hika-ru, hikari)',
    meaningUz: "Nur, yorug'lik (Light, ray)",
    strokeCount: 6,
    examples: [
      {
        word: '光る',
        reading: 'ひかる (Hikaru)',
        meaning: 'Yaltiramoq',
      },
      {
        word: '日光',
        reading: 'にっこう (Nikkou)',
        meaning: 'Quyosh nuri',
      },
    ],
  },
  {
    id: 'kanji_n4_21_写',
    level: 'N4',
    kanji: '写',
    onyomi: 'シャ (sha)',
    kunyomi: 'うつ・す, うつ・る (utsu-su, utsu-ru)',
    meaningUz: 'Nusxa olmoq, rasmga olmoq (Copy, photograph)',
    strokeCount: 5,
    examples: [
      {
        word: '写真',
        reading: 'しゃしん (Shashin)',
        meaning: 'Fotosurat',
      },
      {
        word: '写す',
        reading: 'うつす (Utsusu)',
        meaning: "Nusxasini ko'chirmoq",
      },
    ],
  },
  {
    id: 'kanji_n4_22_冬',
    level: 'N4',
    kanji: '冬',
    onyomi: 'トウ (tou)',
    kunyomi: 'ふゆ (fuyu)',
    meaningUz: 'Qish (Winter)',
    strokeCount: 5,
    examples: [
      {
        word: '冬',
        reading: 'ふゆ (Fuyu)',
        meaning: 'Qish',
      },
      {
        word: '冬休み',
        reading: 'ふゆやすみ (Fuyuyasumi)',
        meaning: "Qishki ta'til",
      },
    ],
  },
  {
    id: 'kanji_n4_23_切',
    level: 'N4',
    kanji: '切',
    onyomi: 'セツ, サイ (setsu, sai)',
    kunyomi: 'き・る, き・れる (ki-ru, ki-reru)',
    meaningUz: 'Kesmoq (Cut)',
    strokeCount: 4,
    examples: [
      {
        word: '切る',
        reading: 'きる (Kiru)',
        meaning: 'Kesmoq',
      },
      {
        word: '切手',
        reading: 'きって (Kitte)',
        meaning: 'Pochta markasi',
      },
    ],
  },
  {
    id: 'kanji_n4_24_別',
    level: 'N4',
    kanji: '別',
    onyomi: 'ベツ (betsu)',
    kunyomi: 'わか・れる (waka-reru)',
    meaningUz: 'Boshqa, ajralmoq (Separate, another)',
    strokeCount: 7,
    examples: [
      {
        word: '別れる',
        reading: 'わかれる (Wakareru)',
        meaning: 'Ajralmoq',
      },
      {
        word: '特別',
        reading: 'とくべつ (Tokubetsu)',
        meaning: 'Maxsus',
      },
    ],
  },
  {
    id: 'kanji_n4_25_力',
    level: 'N4',
    kanji: '力',
    onyomi: 'リョク, リキ (ryoku, riki)',
    kunyomi: 'ちから (chikara)',
    meaningUz: 'Kuch, quvvat (Power, strength)',
    strokeCount: 2,
    examples: [
      {
        word: '力',
        reading: 'ちから (Chikara)',
        meaning: 'Kuch',
      },
      {
        word: '体力',
        reading: 'たいりょく (Tairyoku)',
        meaning: 'Jismoniy quvvat',
      },
    ],
  },
  {
    id: 'kanji_n4_26_勉',
    level: 'N4',
    kanji: '勉',
    onyomi: 'ベン (ben)',
    kunyomi: 'つと・める (tsuto-meru)',
    meaningUz: "Tirishmoq, g'ayrat (Endeavor, strive)",
    strokeCount: 10,
    examples: [
      {
        word: '勉強',
        reading: 'べんきょう (Benkyou)',
        meaning: "O'qish, ta'lim",
      },
      {
        word: '勤勉',
        reading: 'きんべん (Kinben)',
        meaning: 'Tirishqoqlik',
      },
    ],
  },
  {
    id: 'kanji_n4_27_動',
    level: 'N4',
    kanji: '動',
    onyomi: 'ドウ (dou)',
    kunyomi: 'うご・く, うご・かす (ugo-ku, ugo-kasu)',
    meaningUz: 'Qimirlamoq, harakatlanmoq (Move)',
    strokeCount: 11,
    examples: [
      {
        word: '動く',
        reading: 'うごく (Ugoku)',
        meaning: 'Harakatlanmoq',
      },
      {
        word: '運動',
        reading: 'うんどう (Undou)',
        meaning: 'Jismoniy mashq',
      },
    ],
  },
  {
    id: 'kanji_n4_28_区',
    level: 'N4',
    kanji: '区',
    onyomi: 'ク (ku)',
    kunyomi: '-',
    meaningUz: 'Tuman, hudud (Ward, district)',
    strokeCount: 4,
    examples: [
      {
        word: '区役所',
        reading: 'くやくしょ (Kuyakusho)',
        meaning: 'Tuman hokimiyati',
      },
      {
        word: '区分',
        reading: 'くぶん (Kubun)',
        meaning: "Bo'linish",
      },
    ],
  },
  {
    id: 'kanji_n4_29_医',
    level: 'N4',
    kanji: '医',
    onyomi: 'イ (i)',
    kunyomi: '-',
    meaningUz: 'Tibbiyot, davolash (Medicine, doctor)',
    strokeCount: 7,
    examples: [
      {
        word: '医者',
        reading: 'いしゃ (Isha)',
        meaning: 'Shifokor',
      },
      {
        word: '医学',
        reading: 'いがく (Igaku)',
        meaning: 'Tibbiyot ilmi',
      },
    ],
  },
  {
    id: 'kanji_n4_30_去',
    level: 'N4',
    kanji: '去',
    onyomi: 'キョ, コ (kyo, ko)',
    kunyomi: 'さ・る (sa-ru)',
    meaningUz: "O'tgan, tark etmoq (Past, leave)",
    strokeCount: 5,
    examples: [
      {
        word: '去年',
        reading: 'きょねん (Kyonen)',
        meaning: "O'tgan yil",
      },
      {
        word: '過去',
        reading: 'かこ (Kako)',
        meaning: "O'tmish",
      },
    ],
  },
  {
    id: 'kanji_n4_31_台',
    level: 'N4',
    kanji: '台',
    onyomi: 'ダイ, タイ (dai, tai)',
    kunyomi: '-',
    meaningUz: "Taglik, apparat sanog'i (Platform, counter for machines)",
    strokeCount: 5,
    examples: [
      {
        word: '台所',
        reading: 'だいどころ (Daidokoro)',
        meaning: 'Oshxona',
      },
      {
        word: '一台',
        reading: 'いちだい (Ichidai)',
        meaning: 'Bitta mashina/jihoz',
      },
    ],
  },
  {
    id: 'kanji_n4_32_合',
    level: 'N4',
    kanji: '合',
    onyomi: 'ゴウ, ガッ (gou, gatsu)',
    kunyomi: 'あ・う, あ・わせる (a-u, a-waseru)',
    meaningUz: "Birlashmoq, to'g'ri kelmoq (Fit, match, join)",
    strokeCount: 6,
    examples: [
      {
        word: '間に合う',
        reading: 'まにあう (Maniau)',
        meaning: 'Ulgurolmoq',
      },
      {
        word: '場合',
        reading: 'ばあい (Baai)',
        meaning: 'Vaziyat, holat',
      },
    ],
  },
  {
    id: 'kanji_n4_33_同',
    level: 'N4',
    kanji: '同',
    onyomi: 'ドウ (dou)',
    kunyomi: 'おな・じ (ona-ji)',
    meaningUz: 'Bir xil, teng (Same)',
    strokeCount: 6,
    examples: [
      {
        word: '同じ',
        reading: 'おなじ (Onaji)',
        meaning: 'Bir xil',
      },
      {
        word: '同時',
        reading: 'どうじ (Douji)',
        meaning: 'Bir vaqtda',
      },
    ],
  },
  {
    id: 'kanji_n4_34_味',
    level: 'N4',
    kanji: '味',
    onyomi: 'ミ (mi)',
    kunyomi: 'あじ, あじ・わう (aji, aji-wau)',
    meaningUz: "Ta'm, maza, ma'no (Flavor, taste)",
    strokeCount: 8,
    examples: [
      {
        word: '意味',
        reading: 'いみ (Imi)',
        meaning: "Ma'no",
      },
      {
        word: '味わう',
        reading: 'あじわう (Ajiwau)',
        meaning: "Tatib ko'rmoq",
      },
    ],
  },
  {
    id: 'kanji_n4_35_品',
    level: 'N4',
    kanji: '品',
    onyomi: 'ヒン (hin)',
    kunyomi: 'しな (shina)',
    meaningUz: 'Mahsulot, tovar (Goods, refinement)',
    strokeCount: 9,
    examples: [
      {
        word: '品物',
        reading: 'しなもの (Shinamono)',
        meaning: 'Mahsulot',
      },
      {
        word: '作品',
        reading: 'さくひん (Sakuhin)',
        meaning: 'Ijodiy asar',
      },
    ],
  },
  {
    id: 'kanji_n4_36_員',
    level: 'N4',
    kanji: '員',
    onyomi: 'イン (in)',
    kunyomi: '-',
    meaningUz: "Xodim, a'zo (Member, employee)",
    strokeCount: 10,
    examples: [
      {
        word: '会社員',
        reading: 'かいしゃいん (Kaishain)',
        meaning: 'Firma xodimi',
      },
      {
        word: '店員',
        reading: "てんいん (Ten'in)",
        meaning: 'Sotuvchi',
      },
    ],
  },
  {
    id: 'kanji_n4_37_問',
    level: 'N4',
    kanji: '問',
    onyomi: 'モン (mon)',
    kunyomi: 'と・う, と・い (to-u, to-i)',
    meaningUz: "Savol, so'ramoq (Question, ask)",
    strokeCount: 11,
    examples: [
      {
        word: '質問',
        reading: 'しつもん (Shitsumon)',
        meaning: 'Savol',
      },
      {
        word: '問題',
        reading: 'もんだい (Mondai)',
        meaning: 'Muammo, masala',
      },
    ],
  },
  {
    id: 'kanji_n4_38_回',
    level: 'N4',
    kanji: '回',
    onyomi: 'カイ, エ (kai, e)',
    kunyomi: 'まわ・る, まわ・す (mawa-ru, mawa-su)',
    meaningUz: 'Aylanmoq, marta (Times, turn)',
    strokeCount: 6,
    examples: [
      {
        word: '回る',
        reading: 'まわる (Mawaru)',
        meaning: 'Aylanmoq',
      },
      {
        word: '一回',
        reading: 'いっかい (Ikkai)',
        meaning: 'Bir marta',
      },
    ],
  },
  {
    id: 'kanji_n4_39_図',
    level: 'N4',
    kanji: '図',
    onyomi: 'ズ, ト (zu, to)',
    kunyomi: 'はか・る (haka-ru)',
    meaningUz: 'Chizma, reja (Drawing, plan)',
    strokeCount: 7,
    examples: [
      {
        word: '地図',
        reading: 'ちず (Chizu)',
        meaning: 'Xarita',
      },
      {
        word: '図書館',
        reading: 'としょかん (Toshokan)',
        meaning: 'Kutubxona',
      },
    ],
  },
  {
    id: 'kanji_n4_40_地',
    level: 'N4',
    kanji: '地',
    onyomi: 'チ, ジ (chi, ji)',
    kunyomi: '-',
    meaningUz: 'Yer, zamin (Earth, ground)',
    strokeCount: 6,
    examples: [
      {
        word: '地下',
        reading: 'ちか (Chika)',
        meaning: 'Yer osti',
      },
      {
        word: '地震',
        reading: 'じしん (Jishin)',
        meaning: 'Zilzila',
      },
    ],
  },
  {
    id: 'kanji_n4_41_堂',
    level: 'N4',
    kanji: '堂',
    onyomi: 'ドウ (dou)',
    kunyomi: '-',
    meaningUz: 'Zal, bino (Hall, shrine)',
    strokeCount: 11,
    examples: [
      {
        word: '食堂',
        reading: 'しょくどう (Shokudou)',
        meaning: 'Oshxona',
      },
      {
        word: '講堂',
        reading: 'こうどう (Koudou)',
        meaning: 'Majlislar zali',
      },
    ],
  },
  {
    id: 'kanji_n4_42_場',
    level: 'N4',
    kanji: '場',
    onyomi: 'ジョウ (jou)',
    kunyomi: 'ば (ba)',
    meaningUz: 'Joy, maydon (Place, location)',
    strokeCount: 12,
    examples: [
      {
        word: '場所',
        reading: 'ばしょ (Basho)',
        meaning: 'Joy',
      },
      {
        word: '工場',
        reading: 'こうじょう (Koujou)',
        meaning: 'Zavod',
      },
    ],
  },
  {
    id: 'kanji_n4_43_声',
    level: 'N4',
    kanji: '声',
    onyomi: 'セイ, ショウ (sei, shou)',
    kunyomi: 'こえ (koe)',
    meaningUz: 'Ovoz (Voice)',
    strokeCount: 7,
    examples: [
      {
        word: '声',
        reading: 'こえ (Koe)',
        meaning: 'Ovoz',
      },
      {
        word: '大声',
        reading: 'おおごえ (Oogoe)',
        meaning: 'Baland ovoz',
      },
    ],
  },
  {
    id: 'kanji_n4_44_売',
    level: 'N4',
    kanji: '売',
    onyomi: 'バイ (bai)',
    kunyomi: 'う・る, う・れる (u-ru, u-reru)',
    meaningUz: 'Sotmoq (Sell)',
    strokeCount: 7,
    examples: [
      {
        word: '売る',
        reading: 'うる (Uru)',
        meaning: 'Sotmoq',
      },
      {
        word: '売り場',
        reading: 'うりば (Uriba)',
        meaning: 'Savdo rastasi',
      },
    ],
  },
  {
    id: 'kanji_n4_45_夏',
    level: 'N4',
    kanji: '夏',
    onyomi: 'カ, ゲ (ka, ge)',
    kunyomi: 'なつ (natsu)',
    meaningUz: 'Yoz (Summer)',
    strokeCount: 10,
    examples: [
      {
        word: '夏',
        reading: 'なつ (Natsu)',
        meaning: 'Yoz',
      },
      {
        word: '夏休み',
        reading: 'なつやすみ (Natsuyasumi)',
        meaning: "Yozgi ta'til",
      },
    ],
  },
  {
    id: 'kanji_n4_46_夕',
    level: 'N4',
    kanji: '夕',
    onyomi: 'セキ (seki)',
    kunyomi: 'ゆう (yuu)',
    meaningUz: 'Oqshom, shom (Evening)',
    strokeCount: 3,
    examples: [
      {
        word: '夕方',
        reading: 'ゆうがた (Yuugata)',
        meaning: 'Kechki payt',
      },
      {
        word: '夕食',
        reading: 'ゆうしょく (Yuushoku)',
        meaning: 'Kechki ovqat',
      },
    ],
  },
  {
    id: 'kanji_n4_47_夜',
    level: 'N4',
    kanji: '夜',
    onyomi: 'ヤ (ya)',
    kunyomi: 'よる, よ (yoru, yo)',
    meaningUz: 'Tun, kecha (Night)',
    strokeCount: 8,
    examples: [
      {
        word: '夜',
        reading: 'よる (Yoru)',
        meaning: 'Tun',
      },
      {
        word: '今夜',
        reading: 'こんや (Konya)',
        meaning: 'Bugun kechqurun',
      },
    ],
  },
  {
    id: 'kanji_n4_48_太',
    level: 'N4',
    kanji: '太',
    onyomi: 'タイ, タ (tai, ta)',
    kunyomi: 'ふと・い, ふと・る (futo-i, futo-ru)',
    meaningUz: "Semiz, yo'g'on (Fat, thick)",
    strokeCount: 4,
    examples: [
      {
        word: '太い',
        reading: 'ふとい (Futoi)',
        meaning: "Yo'g'on",
      },
      {
        word: '太る',
        reading: 'ふとる (Futoru)',
        meaning: 'Semirmoq',
      },
    ],
  },
  {
    id: 'kanji_n4_49_好',
    level: 'N4',
    kanji: '好',
    onyomi: 'コウ (kou)',
    kunyomi: 'す・き, この・む (su-ki, kono-mu)',
    meaningUz: 'Yoqtirmoq (Like, fond of)',
    strokeCount: 6,
    examples: [
      {
        word: '好き',
        reading: 'すき (Suki)',
        meaning: 'Sevimli',
      },
      {
        word: '好物',
        reading: 'こうぶつ (Koubutsu)',
        meaning: 'Sevimli taom',
      },
    ],
  },
  {
    id: 'kanji_n4_50_妹',
    level: 'N4',
    kanji: '妹',
    onyomi: 'マイ (mai)',
    kunyomi: 'いもうと (imouto)',
    meaningUz: 'Singil (Younger sister)',
    strokeCount: 8,
    examples: [
      {
        word: '妹',
        reading: 'いもうと (Imouto)',
        meaning: 'Singlim',
      },
      {
        word: '姉妹',
        reading: 'しまい (Shimai)',
        meaning: 'Opa-singillar',
      },
    ],
  },
  {
    id: 'kanji_n4_51_姉',
    level: 'N4',
    kanji: '姉',
    onyomi: 'シ (shi)',
    kunyomi: 'あね (ane)',
    meaningUz: 'Opa (Older sister)',
    strokeCount: 8,
    examples: [
      {
        word: '姉',
        reading: 'あね (Ane)',
        meaning: 'Opam',
      },
      {
        word: 'お姉さん',
        reading: 'おねえさん (Oneesan)',
        meaning: 'Opa',
      },
    ],
  },
  {
    id: 'kanji_n4_52_始',
    level: 'N4',
    kanji: '始',
    onyomi: 'シ (shi)',
    kunyomi: 'はじ・まる, はじ・める (haji-maru, haji-meru)',
    meaningUz: 'Boshlanmoq, boshlamoq (Begin, start)',
    strokeCount: 8,
    examples: [
      {
        word: '始まる',
        reading: 'はじまる (Hajimaru)',
        meaning: 'Boshlanmoq',
      },
      {
        word: '開始',
        reading: 'かいし (Kaishi)',
        meaning: 'Boshlanish',
      },
    ],
  },
  {
    id: 'kanji_n4_53_字',
    level: 'N4',
    kanji: '字',
    onyomi: 'ジ (ji)',
    kunyomi: 'あざ (aza)',
    meaningUz: 'Harf, yozuv (Letter, character)',
    strokeCount: 6,
    examples: [
      {
        word: '漢字',
        reading: 'かんじ (Kanji)',
        meaning: 'Kanji',
      },
      {
        word: '文字',
        reading: 'もじ (Moji)',
        meaning: 'Yozuv',
      },
    ],
  },
  {
    id: 'kanji_n4_54_室',
    level: 'N4',
    kanji: '室',
    onyomi: 'シツ (shitsu)',
    kunyomi: 'むろ (muro)',
    meaningUz: 'Xona (Room)',
    strokeCount: 9,
    examples: [
      {
        word: '教室',
        reading: 'きょうしつ (Kyoushitsu)',
        meaning: 'Sinfxona',
      },
      {
        word: '研究室',
        reading: 'けんきゅうしつ (Kenkyuushitsu)',
        meaning: 'Laboratoriya',
      },
    ],
  },
  {
    id: 'kanji_n4_55_家',
    level: 'N4',
    kanji: '家',
    onyomi: 'カ, ケ (ka, ke)',
    kunyomi: 'いえ, や (ie, ya)',
    meaningUz: 'Uy, oila (House, family)',
    strokeCount: 10,
    examples: [
      {
        word: '家族',
        reading: 'かぞく (Kazoku)',
        meaning: 'Oila',
      },
      {
        word: '家',
        reading: 'いえ (Ie)',
        meaning: 'Uy',
      },
    ],
  },
  {
    id: 'kanji_n4_56_寒',
    level: 'N4',
    kanji: '寒',
    onyomi: 'カン (kan)',
    kunyomi: 'さむ・い (samu-i)',
    meaningUz: 'Sovuq (havo) (Cold)',
    strokeCount: 12,
    examples: [
      {
        word: '寒い',
        reading: 'さむい (Samui)',
        meaning: 'Sovuq',
      },
      {
        word: '寒気',
        reading: 'さむけ (Samuke)',
        meaning: 'Titroq',
      },
    ],
  },
  {
    id: 'kanji_n4_57_屋',
    level: 'N4',
    kanji: '屋',
    onyomi: 'オク (oku)',
    kunyomi: 'や (ya)',
    meaningUz: "Tom, do'kon, xona (Roof, shop)",
    strokeCount: 9,
    examples: [
      {
        word: '部屋',
        reading: 'へや (Heya)',
        meaning: 'Xona',
      },
      {
        word: '本屋',
        reading: "ほんや (Hon'ya)",
        meaning: "Kitob do'koni",
      },
    ],
  },
  {
    id: 'kanji_n4_58_工',
    level: 'N4',
    kanji: '工',
    onyomi: 'コウ, ク (kou, ku)',
    kunyomi: '-',
    meaningUz: 'Muhandislik, hunar (Craft, construction)',
    strokeCount: 3,
    examples: [
      {
        word: '工場',
        reading: 'こうじょう (Koujou)',
        meaning: 'Zavod',
      },
      {
        word: '工事',
        reading: 'こうじ (Kouji)',
        meaning: 'Qurilish',
      },
    ],
  },
  {
    id: 'kanji_n4_59_市',
    level: 'N4',
    kanji: '市',
    onyomi: 'シ (shi)',
    kunyomi: 'いち (ichi)',
    meaningUz: 'Shahar, bozor (City, market)',
    strokeCount: 5,
    examples: [
      {
        word: '市民',
        reading: 'しみん (Shimin)',
        meaning: 'Shahar aholisi',
      },
      {
        word: '市場',
        reading: 'いちば (Ichiba)',
        meaning: 'Bozor',
      },
    ],
  },
  {
    id: 'kanji_n4_60_帰',
    level: 'N4',
    kanji: '帰',
    onyomi: 'キ (ki)',
    kunyomi: 'かえ・る, かえ・す (kae-ru, kae-su)',
    meaningUz: 'Qaytmoq (Return)',
    strokeCount: 10,
    examples: [
      {
        word: '帰る',
        reading: 'かえる (Kaeru)',
        meaning: 'Qaytmoq',
      },
      {
        word: '帰国',
        reading: 'きこく (Kikoku)',
        meaning: 'Vatanga qaytish',
      },
    ],
  },
  {
    id: 'kanji_n4_61_広',
    level: 'N4',
    kanji: '広',
    onyomi: 'コウ (kou)',
    kunyomi: 'ひろ・い, ひろ・がる (hiro-i, hiro-garu)',
    meaningUz: 'Keng (Wide, spacious)',
    strokeCount: 5,
    examples: [
      {
        word: '広い',
        reading: 'ひろい (Hiroi)',
        meaning: 'Keng',
      },
      {
        word: '広場',
        reading: 'ひろば (Hiroba)',
        meaning: 'Maydon',
      },
    ],
  },
  {
    id: 'kanji_n4_62_度',
    level: 'N4',
    kanji: '度',
    onyomi: 'ド, ト (do, to)',
    kunyomi: 'たび (tabi)',
    meaningUz: 'Daraja, marta (Degree, time)',
    strokeCount: 9,
    examples: [
      {
        word: '一度',
        reading: 'いちど (Ichido)',
        meaning: 'Bir marta',
      },
      {
        word: '温度',
        reading: 'おんど (Ondo)',
        meaning: 'Harorat',
      },
    ],
  },
  {
    id: 'kanji_n4_63_建',
    level: 'N4',
    kanji: '建',
    onyomi: 'ケン, コン (ken, kon)',
    kunyomi: 'た・てる, た・つ (ta-teru, ta-tsu)',
    meaningUz: 'Qurmoq (Build)',
    strokeCount: 9,
    examples: [
      {
        word: '建てる',
        reading: 'たてる (Tateru)',
        meaning: 'Qurmoq',
      },
      {
        word: '建物',
        reading: 'たてもの (Tatemono)',
        meaning: 'Bino',
      },
    ],
  },
  {
    id: 'kanji_n4_64_引',
    level: 'N4',
    kanji: '引',
    onyomi: 'イン (in)',
    kunyomi: 'ひ・く, ひ・ける (hi-ku, hi-keru)',
    meaningUz: 'Tortmoq (Pull)',
    strokeCount: 4,
    examples: [
      {
        word: '引く',
        reading: 'ひく (Hiku)',
        meaning: 'Tortmoq',
      },
      {
        word: '引き出し',
        reading: 'ひきだし (Hikidashi)',
        meaning: "G'aladon",
      },
    ],
  },
  {
    id: 'kanji_n4_65_弟',
    level: 'N4',
    kanji: '弟',
    onyomi: 'テイ, ダイ (tei, dai)',
    kunyomi: 'おとうと (otouto)',
    meaningUz: 'Uka (Younger brother)',
    strokeCount: 7,
    examples: [
      {
        word: '弟',
        reading: 'おとうと (Otouto)',
        meaning: 'Ukam',
      },
      {
        word: '兄弟',
        reading: 'きょうだい (Kyoudai)',
        meaning: 'Aka-uka',
      },
    ],
  },
  {
    id: 'kanji_n4_66_弱',
    level: 'N4',
    kanji: '弱',
    onyomi: 'ジャク (jaku)',
    kunyomi: 'よわ・い, よわ・る (yowa-i, yowa-ru)',
    meaningUz: 'Zaif, kuchsiz (Weak)',
    strokeCount: 10,
    examples: [
      {
        word: '弱い',
        reading: 'よわい (Yowai)',
        meaning: 'Zaif',
      },
      {
        word: '弱点',
        reading: 'じゃくてん (Jakuten)',
        meaning: 'Kuchsiz tomon',
      },
    ],
  },
  {
    id: 'kanji_n4_67_強',
    level: 'N4',
    kanji: '強',
    onyomi: 'キョウ, ゴウ (kyou, gou)',
    kunyomi: 'つよ・い, つよ・まる (tsuyo-i, tsuyo-maru)',
    meaningUz: 'Kuchli (Strong)',
    strokeCount: 11,
    examples: [
      {
        word: '強い',
        reading: 'つよい (Tsuyoi)',
        meaning: 'Kuchli',
      },
      {
        word: '勉強',
        reading: 'べんきょう (Benkyou)',
        meaning: "O'qish",
      },
    ],
  },
  {
    id: 'kanji_n4_68_待',
    level: 'N4',
    kanji: '待',
    onyomi: 'タイ (tai)',
    kunyomi: 'ま・つ (ma-tsu)',
    meaningUz: 'Kutmoq (Wait)',
    strokeCount: 9,
    examples: [
      {
        word: '待つ',
        reading: 'まつ (Matsu)',
        meaning: 'Kutmoq',
      },
      {
        word: '招待',
        reading: 'しょうたい (Shoutai)',
        meaning: 'Taklif',
      },
    ],
  },
  {
    id: 'kanji_n4_69_心',
    level: 'N4',
    kanji: '心',
    onyomi: 'シン (shin)',
    kunyomi: 'こころ (kokoro)',
    meaningUz: 'Qalb, yurak (Heart, mind)',
    strokeCount: 4,
    examples: [
      {
        word: '心',
        reading: 'こころ (Kokoro)',
        meaning: 'Qalb',
      },
      {
        word: '安心',
        reading: 'あんしん (Anshin)',
        meaning: 'Xotirjamlik',
      },
    ],
  },
  {
    id: 'kanji_n4_70_思',
    level: 'N4',
    kanji: '思',
    onyomi: 'シ (shi)',
    kunyomi: 'おも・う (omo-u)',
    meaningUz: "O'ylamoq (Think)",
    strokeCount: 9,
    examples: [
      {
        word: '思う',
        reading: 'おもう (Omou)',
        meaning: "O'ylamoq",
      },
      {
        word: '思い出',
        reading: 'おもいで (Omoide)',
        meaning: 'Xotira',
      },
    ],
  },
  {
    id: 'kanji_n4_71_急',
    level: 'N4',
    kanji: '急',
    onyomi: 'キュウ (kyuu)',
    kunyomi: 'いそ・ぐ (iso-gu)',
    meaningUz: "Shoshilmoq, to'satdan (Hurry, sudden)",
    strokeCount: 9,
    examples: [
      {
        word: '急ぐ',
        reading: 'いそぐ (Isogu)',
        meaning: 'Shoshilmoq',
      },
      {
        word: '急行',
        reading: 'きゅうこう (Kyuukou)',
        meaning: 'Tezkor poyezd',
      },
    ],
  },
  {
    id: 'kanji_n4_72_悪',
    level: 'N4',
    kanji: '悪',
    onyomi: 'アク, オ (aku, o)',
    kunyomi: 'わる・い (waru-i)',
    meaningUz: 'Yomon (Bad)',
    strokeCount: 11,
    examples: [
      {
        word: '悪い',
        reading: 'わるい (Warui)',
        meaning: 'Yomon',
      },
      {
        word: '悪化',
        reading: 'あっか (Akka)',
        meaning: 'Yomonlashuv',
      },
    ],
  },
  {
    id: 'kanji_n4_73_意',
    level: 'N4',
    kanji: '意',
    onyomi: 'イ (i)',
    kunyomi: '-',
    meaningUz: "Fikr, ma'no, niyat (Mind, meaning)",
    strokeCount: 13,
    examples: [
      {
        word: '意見',
        reading: 'いけん (Iken)',
        meaning: 'Fikr',
      },
      {
        word: '意味',
        reading: 'いみ (Imi)',
        meaning: "Ma'no",
      },
    ],
  },
  {
    id: 'kanji_n4_74_所',
    level: 'N4',
    kanji: '所',
    onyomi: 'ショ (sho)',
    kunyomi: 'ところ (tokoro)',
    meaningUz: 'Joy, makon (Place)',
    strokeCount: 8,
    examples: [
      {
        word: '場所',
        reading: 'ばしょ (Basho)',
        meaning: 'Joy',
      },
      {
        word: '住所',
        reading: 'じゅうしょ (Juusho)',
        meaning: 'Manzil',
      },
    ],
  },
  {
    id: 'kanji_n4_75_持',
    level: 'N4',
    kanji: '持',
    onyomi: 'ジ (ji)',
    kunyomi: 'も・つ, も・てる (mo-tsu, mo-teru)',
    meaningUz: "Ushlamoq, ega bo'lmoq (Hold, possess)",
    strokeCount: 9,
    examples: [
      {
        word: '持つ',
        reading: 'もつ (Motsu)',
        meaning: 'Ushlamoq',
      },
      {
        word: '気持ち',
        reading: 'きもち (Kimochi)',
        meaning: 'Kayfiyat, his',
      },
    ],
  },
  {
    id: 'kanji_n4_76_教',
    level: 'N4',
    kanji: '教',
    onyomi: 'キョウ (kyou)',
    kunyomi: 'おし・える, おそ・わる (oshi-eru, oso-waru)',
    meaningUz: "O'rgatmoq, ta'lim (Teach, religion)",
    strokeCount: 11,
    examples: [
      {
        word: '教える',
        reading: 'おしえる (Oshieru)',
        meaning: "O'rgatmoq",
      },
      {
        word: '教室',
        reading: 'きょうしつ (Kyoushitsu)',
        meaning: 'Sinfxona',
      },
    ],
  },
  {
    id: 'kanji_n4_77_文',
    level: 'N4',
    kanji: '文',
    onyomi: 'ブン, モン (bun, mon)',
    kunyomi: 'ふみ (fumi)',
    meaningUz: 'Matn, jumla, adabiyot (Sentence, literature)',
    strokeCount: 4,
    examples: [
      {
        word: '作文',
        reading: 'さくぶん (Sakubun)',
        meaning: 'Insho',
      },
      {
        word: '文法',
        reading: 'ぶんぽう (Bunpou)',
        meaning: 'Grammatika',
      },
    ],
  },
  {
    id: 'kanji_n4_78_料',
    level: 'N4',
    kanji: '料',
    onyomi: 'リョウ (ryou)',
    kunyomi: '-',
    meaningUz: "To'lov, xomashyo (Fee, ingredients)",
    strokeCount: 10,
    examples: [
      {
        word: '料理',
        reading: 'りょうり (Ryouri)',
        meaning: 'Taom',
      },
      {
        word: '料金',
        reading: 'りょうきん (Ryoukin)',
        meaning: "To'lov",
      },
    ],
  },
  {
    id: 'kanji_n4_79_方',
    level: 'N4',
    kanji: '方',
    onyomi: 'ホウ (hou)',
    kunyomi: 'かた (kata)',
    meaningUz: 'Tomon, shaxs, usul (Direction, person, way)',
    strokeCount: 4,
    examples: [
      {
        word: '方法',
        reading: 'ほうほう (Houhou)',
        meaning: 'Usul',
      },
      {
        word: '夕方',
        reading: 'ゆうがた (Yuugata)',
        meaning: 'Kechki payt',
      },
    ],
  },
  {
    id: 'kanji_n4_80_旅',
    level: 'N4',
    kanji: '旅',
    onyomi: 'リョ (ryo)',
    kunyomi: 'たび (tabi)',
    meaningUz: 'Sayohat (Travel, trip)',
    strokeCount: 10,
    examples: [
      {
        word: '旅行',
        reading: 'りょこう (Ryokou)',
        meaning: 'Sayohat',
      },
      {
        word: '旅',
        reading: 'たび (Tabi)',
        meaning: 'Safar',
      },
    ],
  },
  {
    id: 'kanji_n4_81_族',
    level: 'N4',
    kanji: '族',
    onyomi: 'ゾク (zoku)',
    kunyomi: '-',
    meaningUz: 'Oila, toifa (Family, tribe)',
    strokeCount: 11,
    examples: [
      {
        word: '家族',
        reading: 'かぞく (Kazoku)',
        meaning: 'Oila',
      },
      {
        word: '民族',
        reading: 'みんぞく (Minzoku)',
        meaning: 'Xalq, millat',
      },
    ],
  },
  {
    id: 'kanji_n4_82_早',
    level: 'N4',
    kanji: '早',
    onyomi: 'ソウ, サッ (sou, satsu)',
    kunyomi: 'はや・い, はや・まる (haya-i, haya-maru)',
    meaningUz: 'Erta, tez (Early, fast)',
    strokeCount: 6,
    examples: [
      {
        word: '早い',
        reading: 'はやい (Hayai)',
        meaning: 'Erta',
      },
      {
        word: '早朝',
        reading: 'そうちょう (Souchou)',
        meaning: 'Tong sahar',
      },
    ],
  },
  {
    id: 'kanji_n4_83_明',
    level: 'N4',
    kanji: '明',
    onyomi: 'メイ, ミョウ (mei, myou)',
    kunyomi: 'あか・るい, あき・らか (aka-rui, aki-raka)',
    meaningUz: "Yorug', ravshan (Bright, clear)",
    strokeCount: 8,
    examples: [
      {
        word: '明るい',
        reading: 'あかるい (Akarui)',
        meaning: "Yorug'",
      },
      {
        word: '明日',
        reading: 'あした (Ashita)',
        meaning: 'Ertaga',
      },
    ],
  },
  {
    id: 'kanji_n4_84_映',
    level: 'N4',
    kanji: '映',
    onyomi: 'エイ (ei)',
    kunyomi: 'うつ・る, うつ・す, は・える (utsu-ru, utsu-su, ha-eru)',
    meaningUz: 'Aks ettirmoq, proyeksiyalamoq (Reflect, project)',
    strokeCount: 9,
    examples: [
      {
        word: '映画',
        reading: 'えいが (Eiga)',
        meaning: 'Film, kino',
      },
      {
        word: '映る',
        reading: 'うつる (Utsuru)',
        meaning: 'Aks etmoq',
      },
    ],
  },
  {
    id: 'kanji_n4_85_春',
    level: 'N4',
    kanji: '春',
    onyomi: 'シュン (shun)',
    kunyomi: 'はる (haru)',
    meaningUz: 'Bahor (Spring)',
    strokeCount: 9,
    examples: [
      {
        word: '春',
        reading: 'はる (Haru)',
        meaning: 'Bahor',
      },
      {
        word: '青春',
        reading: 'せいしゅん (Seishun)',
        meaning: 'Yoshlik',
      },
    ],
  },
  {
    id: 'kanji_n4_86_昼',
    level: 'N4',
    kanji: '昼',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'ひる (hiru)',
    meaningUz: 'Kunduz, tush (Noon, daytime)',
    strokeCount: 9,
    examples: [
      {
        word: '昼ご飯',
        reading: 'ひるごはん (Hirugohan)',
        meaning: 'Tushlik',
      },
      {
        word: '昼休み',
        reading: 'ひるやすみ (Hiruyasumi)',
        meaning: 'Tushki tanaffus',
      },
    ],
  },
  {
    id: 'kanji_n4_87_暑',
    level: 'N4',
    kanji: '暑',
    onyomi: 'ショ (sho)',
    kunyomi: 'あつ・い (atsu-i)',
    meaningUz: 'Issiq (havo) (Hot weather)',
    strokeCount: 12,
    examples: [
      {
        word: '暑い',
        reading: 'あつい (Atsui)',
        meaning: 'Issiq',
      },
      {
        word: '残暑',
        reading: 'ざんしょ (Zansho)',
        meaning: "Yoz oxirgi issig'i",
      },
    ],
  },
  {
    id: 'kanji_n4_88_暗',
    level: 'N4',
    kanji: '暗',
    onyomi: 'アン (an)',
    kunyomi: 'くら・い (kura-i)',
    meaningUz: "Qorong'i (Dark)",
    strokeCount: 13,
    examples: [
      {
        word: '暗い',
        reading: 'くらい (Kurai)',
        meaning: "Qorong'i",
      },
      {
        word: '暗記',
        reading: 'あんき (Anki)',
        meaning: 'Yod olish',
      },
    ],
  },
  {
    id: 'kanji_n4_89_曜',
    level: 'N4',
    kanji: '曜',
    onyomi: 'ヨウ (you)',
    kunyomi: '-',
    meaningUz: 'Hafta kuni (Day of week)',
    strokeCount: 18,
    examples: [
      {
        word: '日曜日',
        reading: 'にちようび (Nichiyoubi)',
        meaning: 'Yakshanba',
      },
      {
        word: '火曜日',
        reading: 'かようび (Kayoubi)',
        meaning: 'Seshanba',
      },
    ],
  },
  {
    id: 'kanji_n4_90_有',
    level: 'N4',
    kanji: '有',
    onyomi: 'ユウ, ウ (yuu, u)',
    kunyomi: 'あ・る (a-ru)',
    meaningUz: "Bor, mavjud bo'lmoq (Have, exist)",
    strokeCount: 6,
    examples: [
      {
        word: '有名',
        reading: 'ゆうめい (Yuumei)',
        meaning: 'Mashhur',
      },
      {
        word: '有料',
        reading: 'ゆうりょう (Yuuryou)',
        meaning: 'Pullik',
      },
    ],
  },
  {
    id: 'kanji_n4_91_服',
    level: 'N4',
    kanji: '服',
    onyomi: 'フク (fuku)',
    kunyomi: '-',
    meaningUz: 'Kiyim, itoat qilmoq (Clothes)',
    strokeCount: 8,
    examples: [
      {
        word: '服',
        reading: 'ふく (Fuku)',
        meaning: 'Kiyim',
      },
      {
        word: '洋服',
        reading: 'ようふく (Youfuku)',
        meaning: "G'arbcha kiyim",
      },
    ],
  },
  {
    id: 'kanji_n4_92_朝',
    level: 'N4',
    kanji: '朝',
    onyomi: 'チョウ (chou)',
    kunyomi: 'あさ (asa)',
    meaningUz: 'Tong, ertalab (Morning)',
    strokeCount: 12,
    examples: [
      {
        word: '朝',
        reading: 'あさ (Asa)',
        meaning: 'Tong',
      },
      {
        word: '朝食',
        reading: 'ちょうしょく (Choushoku)',
        meaning: 'Nonushta',
      },
    ],
  },
  {
    id: 'kanji_n4_93_村',
    level: 'N4',
    kanji: '村',
    onyomi: 'ソン (son)',
    kunyomi: 'むら (mura)',
    meaningUz: 'Qishloq (Village)',
    strokeCount: 7,
    examples: [
      {
        word: '村',
        reading: 'むら (Mura)',
        meaning: 'Qishloq',
      },
      {
        word: '農村',
        reading: 'のうそん (Nouson)',
        meaning: 'Qishloq joy',
      },
    ],
  },
  {
    id: 'kanji_n4_94_林',
    level: 'N4',
    kanji: '林',
    onyomi: 'リン (rin)',
    kunyomi: 'はやし (hayashi)',
    meaningUz: "O'rmoncha, daraxtzor (Grove, woods)",
    strokeCount: 8,
    examples: [
      {
        word: '林',
        reading: 'はやし (Hayashi)',
        meaning: 'Daraxtzor',
      },
      {
        word: '森林',
        reading: 'しんりん (Shinrin)',
        meaning: "O'rmon",
      },
    ],
  },
  {
    id: 'kanji_n4_95_森',
    level: 'N4',
    kanji: '森',
    onyomi: 'シン (shin)',
    kunyomi: 'もり (mori)',
    meaningUz: "Katta o'rmon (Forest)",
    strokeCount: 12,
    examples: [
      {
        word: '森',
        reading: 'もり (Mori)',
        meaning: "O'rmon",
      },
      {
        word: '森林',
        reading: 'しんりん (Shinrin)',
        meaning: "Katta o'rmon",
      },
    ],
  },
  {
    id: 'kanji_n4_96_業',
    level: 'N4',
    kanji: '業',
    onyomi: 'ギョウ, ゴウ (gyou, gou)',
    kunyomi: 'わざ (waza)',
    meaningUz: 'Ish, sanoat, kasb (Business, industry)',
    strokeCount: 13,
    examples: [
      {
        word: '授業',
        reading: 'じゅぎょう (Jugyou)',
        meaning: 'Dars',
      },
      {
        word: '卒業',
        reading: 'そつぎょう (Sotsugyou)',
        meaning: 'Bitiruv',
      },
    ],
  },
  {
    id: 'kanji_n4_97_楽',
    level: 'N4',
    kanji: '楽',
    onyomi: 'ガク, ラク (gaku, raku)',
    kunyomi: 'たの・しい, たの・しむ (tano-shii, tano-shimu)',
    meaningUz: 'Musiqa, quvonch, qulay (Music, fun, ease)',
    strokeCount: 13,
    examples: [
      {
        word: '音楽',
        reading: 'おんがく (Ongaku)',
        meaning: 'Musiqa',
      },
      {
        word: '楽しい',
        reading: 'たのしい (Tanoshii)',
        meaning: 'Quvnoq, maroqli',
      },
    ],
  },
  {
    id: 'kanji_n4_98_歌',
    level: 'N4',
    kanji: '歌',
    onyomi: 'カ (ka)',
    kunyomi: 'うた, うた・う (uta, uta-u)',
    meaningUz: "Qo'shiq, kuylamoq (Song, sing)",
    strokeCount: 14,
    examples: [
      {
        word: '歌',
        reading: 'うた (Uta)',
        meaning: "Qo'shiq",
      },
      {
        word: '歌う',
        reading: 'うたう (Utau)',
        meaning: 'Kuvlamoq',
      },
    ],
  },
  {
    id: 'kanji_n4_99_止',
    level: 'N4',
    kanji: '止',
    onyomi: 'シ (shi)',
    kunyomi: 'と・まる, と・める (to-maru, to-meru)',
    meaningUz: "To'xtamoq (Stop)",
    strokeCount: 4,
    examples: [
      {
        word: '止まる',
        reading: 'とまる (Tomaru)',
        meaning: "To'xtamoq",
      },
      {
        word: '中止',
        reading: 'ちゅうし (Chuushi)',
        meaning: "To'xtatish, bekor qilish",
      },
    ],
  },
  {
    id: 'kanji_n4_100_正',
    level: 'N4',
    kanji: '正',
    onyomi: 'セイ, ショウ (sei, shou)',
    kunyomi: 'ただ・しい, ただ・す, まさ (tada-shii, tada-su, masa)',
    meaningUz: "To'g'ri, adolatli (Correct, right)",
    strokeCount: 5,
    examples: [
      {
        word: '正しい',
        reading: 'ただしい (Tadashii)',
        meaning: "To'g'ri",
      },
      {
        word: 'お正月',
        reading: 'おしょうがつ (Oshougatsu)',
        meaning: 'Yangi yil bayrami',
      },
    ],
  },
  {
    id: 'kanji_n4_101_歩',
    level: 'N4',
    kanji: '歩',
    onyomi: 'ホ, ブ (ho, bu)',
    kunyomi: 'ある・く, あゆ・む (aru-ku, ayu-mu)',
    meaningUz: 'Yurmoq, qadam (Walk, step)',
    strokeCount: 8,
    examples: [
      {
        word: '歩く',
        reading: 'あるく (Aruku)',
        meaning: 'Piyoda yurmoq',
      },
      {
        word: '散歩',
        reading: 'さんぽ (Sanpo)',
        meaning: 'Sayr',
      },
    ],
  },
  {
    id: 'kanji_n4_102_死',
    level: 'N4',
    kanji: '死',
    onyomi: 'シ (shi)',
    kunyomi: 'し・ぬ (shi-nu)',
    meaningUz: "O'lmoq, o'lim (Death, die)",
    strokeCount: 6,
    examples: [
      {
        word: '死ぬ',
        reading: 'しぬ (Shinu)',
        meaning: "O'lmoq",
      },
      {
        word: '死者',
        reading: 'ししゃ (Shisha)',
        meaning: 'Vafot etganlar',
      },
    ],
  },
  {
    id: 'kanji_n4_103_民',
    level: 'N4',
    kanji: '民',
    onyomi: 'ミン (min)',
    kunyomi: 'たみ (tami)',
    meaningUz: 'Xalq, aholi (People, citizen)',
    strokeCount: 5,
    examples: [
      {
        word: '市民',
        reading: 'しみん (Shimin)',
        meaning: 'Shahar aholisi',
      },
      {
        word: '国民',
        reading: 'こくみん (Kokumin)',
        meaning: 'Xalq',
      },
    ],
  },
  {
    id: 'kanji_n4_104_池',
    level: 'N4',
    kanji: '池',
    onyomi: 'チ (chi)',
    kunyomi: 'いけ (ike)',
    meaningUz: 'Hovuz (Pond)',
    strokeCount: 6,
    examples: [
      {
        word: '池',
        reading: 'いけ (Ike)',
        meaning: 'Hovuz',
      },
      {
        word: '電池',
        reading: 'でんち (Denchi)',
        meaning: 'Batareya',
      },
    ],
  },
  {
    id: 'kanji_n4_105_注',
    level: 'N4',
    kanji: '注',
    onyomi: 'チュウ (chuu)',
    kunyomi: 'そそ・ぐ (soso-gu)',
    meaningUz: "Quymoq, e'tibor (Pour, concentrate)",
    strokeCount: 8,
    examples: [
      {
        word: '注意',
        reading: 'ちゅうい (Chuui)',
        meaning: 'Diqqat',
      },
      {
        word: '注文',
        reading: 'ちゅうもん (Chuumon)',
        meaning: 'Buyurtma',
      },
    ],
  },
  {
    id: 'kanji_n4_106_洋',
    level: 'N4',
    kanji: '洋',
    onyomi: 'ヨウ (you)',
    kunyomi: '-',
    meaningUz: "Okean, g'arbcha (Ocean, western)",
    strokeCount: 9,
    examples: [
      {
        word: '洋服',
        reading: 'ようふく (Youfuku)',
        meaning: "G'arbcha kiyim",
      },
      {
        word: '西洋',
        reading: 'せいよう (Seiyou)',
        meaning: "G'arb dunyosi",
      },
    ],
  },
  {
    id: 'kanji_n4_107_洗',
    level: 'N4',
    kanji: '洗',
    onyomi: 'セン (sen)',
    kunyomi: 'あら・う (ara-u)',
    meaningUz: 'Yuvmoq (Wash)',
    strokeCount: 9,
    examples: [
      {
        word: '洗う',
        reading: 'あらう (Arau)',
        meaning: 'Yuvmoq',
      },
      {
        word: '洗濯',
        reading: 'せんたく (Sentaku)',
        meaning: 'Kir yuvish',
      },
    ],
  },
  {
    id: 'kanji_n4_108_海',
    level: 'N4',
    kanji: '海',
    onyomi: 'カイ (kai)',
    kunyomi: 'うみ (umi)',
    meaningUz: 'Dengiz (Sea, ocean)',
    strokeCount: 9,
    examples: [
      {
        word: '海',
        reading: 'うみ (Umi)',
        meaning: 'Dengiz',
      },
      {
        word: '海外',
        reading: 'かいがい (Kaigai)',
        meaning: 'Chet el',
      },
    ],
  },
  {
    id: 'kanji_n4_109_漢',
    level: 'N4',
    kanji: '漢',
    onyomi: 'カン (kan)',
    kunyomi: '-',
    meaningUz: 'Xitoy (China, Han)',
    strokeCount: 13,
    examples: [
      {
        word: '漢字',
        reading: 'かんじ (Kanji)',
        meaning: 'Kanji',
      },
      {
        word: '漢方',
        reading: 'かんぽう (Kanpou)',
        meaning: 'Xitoy tabobati',
      },
    ],
  },
  {
    id: 'kanji_n4_110_牛',
    level: 'N4',
    kanji: '牛',
    onyomi: 'ギュウ (gyuu)',
    kunyomi: 'うし (ushi)',
    meaningUz: 'Mol, sigir (Cow, beef)',
    strokeCount: 4,
    examples: [
      {
        word: '牛乳',
        reading: 'ぎゅうにゅう (Gyuunyuu)',
        meaning: 'Sut',
      },
      {
        word: '牛肉',
        reading: 'ぎゅうにく (Gyuuniku)',
        meaning: "Mol go'shti",
      },
    ],
  },
  {
    id: 'kanji_n4_111_物',
    level: 'N4',
    kanji: '物',
    onyomi: 'ブツ, モツ (butsu, motsu)',
    kunyomi: 'もの (mono)',
    meaningUz: 'Narsa, buyum (Thing, object)',
    strokeCount: 8,
    examples: [
      {
        word: '食べ物',
        reading: 'たべもの (Tabemono)',
        meaning: 'Yegulik',
      },
      {
        word: '動物',
        reading: 'どうぶつ (Doubutsu)',
        meaning: 'Hayvon',
      },
    ],
  },
  {
    id: 'kanji_n4_112_特',
    level: 'N4',
    kanji: '特',
    onyomi: 'トク (toku)',
    kunyomi: '-',
    meaningUz: 'Maxsus (Special)',
    strokeCount: 10,
    examples: [
      {
        word: '特別',
        reading: 'とくべつ (Tokubetsu)',
        meaning: 'Maxsus',
      },
      {
        word: '特に',
        reading: 'とくに (Tokuni)',
        meaning: 'Ayniqsa',
      },
    ],
  },
  {
    id: 'kanji_n4_113_犬',
    level: 'N4',
    kanji: '犬',
    onyomi: 'ケン (ken)',
    kunyomi: 'いぬ (inu)',
    meaningUz: 'It (Dog)',
    strokeCount: 4,
    examples: [
      {
        word: '犬',
        reading: 'いぬ (Inu)',
        meaning: 'It',
      },
      {
        word: '子犬',
        reading: 'こいぬ (Koinu)',
        meaning: 'Kuchukcha',
      },
    ],
  },
  {
    id: 'kanji_n4_114_理',
    level: 'N4',
    kanji: '理',
    onyomi: 'リ (ri)',
    kunyomi: '-',
    meaningUz: 'Mantiq, qonuniyat (Reason, logic)',
    strokeCount: 11,
    examples: [
      {
        word: '料理',
        reading: 'りょうり (Ryouri)',
        meaning: 'Taom',
      },
      {
        word: '理由',
        reading: 'りゆう (Riyuu)',
        meaning: 'Sabab',
      },
    ],
  },
  {
    id: 'kanji_n4_115_産',
    level: 'N4',
    kanji: '産',
    onyomi: 'サン (san)',
    kunyomi: 'う・む, う・まれる (u-mu, u-mareru)',
    meaningUz: "Tug'moq, ishlab chiqarish (Birth, produce)",
    strokeCount: 11,
    examples: [
      {
        word: '生産',
        reading: 'せいさん (Seisan)',
        meaning: 'Ishlab chiqarish',
      },
      {
        word: 'お土産',
        reading: 'おみやげ (Omiyage)',
        meaning: "Eshelik sovg'a",
      },
    ],
  },
  {
    id: 'kanji_n4_116_用',
    level: 'N4',
    kanji: '用',
    onyomi: 'ヨウ (you)',
    kunyomi: 'もち・いる (mochi-iru)',
    meaningUz: 'Foydalanmoq, vazifa (Use, business)',
    strokeCount: 5,
    examples: [
      {
        word: '用事',
        reading: 'ようじ (Youji)',
        meaning: 'Yumush',
      },
      {
        word: '利用',
        reading: 'りよう (Riyou)',
        meaning: 'Foydalanish',
      },
    ],
  },
  {
    id: 'kanji_n4_117_田',
    level: 'N4',
    kanji: '田',
    onyomi: 'デン (den)',
    kunyomi: 'た (ta)',
    meaningUz: 'Sholizor, dala (Rice field)',
    strokeCount: 5,
    examples: [
      {
        word: '田んぼ',
        reading: 'たんぼ (Tanbo)',
        meaning: 'Sholizor',
      },
      {
        word: '田舎',
        reading: 'いなか (Inaka)',
        meaning: 'Qishloq',
      },
    ],
  },
  {
    id: 'kanji_n4_118_町',
    level: 'N4',
    kanji: '町',
    onyomi: 'チョウ (chou)',
    kunyomi: 'まち (machi)',
    meaningUz: 'Shaharcha (Town)',
    strokeCount: 7,
    examples: [
      {
        word: '町',
        reading: 'まち (Machi)',
        meaning: 'Shaharcha',
      },
      {
        word: '町長',
        reading: 'ちょうちょう (Chouchou)',
        meaning: 'Shahar hokimi',
      },
    ],
  },
  {
    id: 'kanji_n4_119_画',
    level: 'N4',
    kanji: '画',
    onyomi: 'ガ, カク (ga, kaku)',
    kunyomi: '-',
    meaningUz: 'Tasvir, reja, chiziq (Picture, plan, stroke)',
    strokeCount: 8,
    examples: [
      {
        word: '映画',
        reading: 'えいが (Eiga)',
        meaning: 'Kino',
      },
      {
        word: '計画',
        reading: 'けいかく (Keikaku)',
        meaning: 'Reja',
      },
    ],
  },
  {
    id: 'kanji_n4_120_界',
    level: 'N4',
    kanji: '界',
    onyomi: 'カイ (kai)',
    kunyomi: '-',
    meaningUz: 'Chegara, dunyo (World, boundary)',
    strokeCount: 9,
    examples: [
      {
        word: '世界',
        reading: 'せかい (Sekai)',
        meaning: 'Dunyo',
      },
      {
        word: '限界',
        reading: 'げんかい (Genkai)',
        meaning: 'Chegara',
      },
    ],
  },
  {
    id: 'kanji_n4_121_病',
    level: 'N4',
    kanji: '病',
    onyomi: 'ビョウ, ヘイ (byou, hei)',
    kunyomi: 'や・む, やまい (ya-mu, yamai)',
    meaningUz: 'Kasallik (Illness, disease)',
    strokeCount: 10,
    examples: [
      {
        word: '病気',
        reading: 'びょうき (Byouki)',
        meaning: 'Kasallik',
      },
      {
        word: '病院',
        reading: 'びょういん (Byouin)',
        meaning: 'Kasalxona',
      },
    ],
  },
  {
    id: 'kanji_n4_122_発',
    level: 'N4',
    kanji: '発',
    onyomi: 'ハツ, ホツ (hatsu, hotsu)',
    kunyomi: '-',
    meaningUz: "Boshlanish, jo'nash, ixtiro (Depart, emit)",
    strokeCount: 9,
    examples: [
      {
        word: '出発',
        reading: 'しゅっぱつ (Shuppatsu)',
        meaning: "Jo'nash",
      },
      {
        word: '発明',
        reading: 'はつめい (Hatsumei)',
        meaning: 'Ixtiro',
      },
    ],
  },
  {
    id: 'kanji_n4_123_県',
    level: 'N4',
    kanji: '県',
    onyomi: 'ケン (ken)',
    kunyomi: '-',
    meaningUz: 'Prefektura, viloyat (Prefecture)',
    strokeCount: 9,
    examples: [
      {
        word: '県',
        reading: 'けん (Ken)',
        meaning: 'Prefektura',
      },
      {
        word: '青森県',
        reading: 'あおもりけん (Aomoriken)',
        meaning: 'Aomori prefekturasi',
      },
    ],
  },
  {
    id: 'kanji_n4_124_真',
    level: 'N4',
    kanji: '真',
    onyomi: 'シン (shin)',
    kunyomi: 'ま, まこと (ma, makoto)',
    meaningUz: 'Haqiqat, sof (True, reality)',
    strokeCount: 10,
    examples: [
      {
        word: '写真',
        reading: 'しゃしん (Shashin)',
        meaning: 'Fotosurat',
      },
      {
        word: '真ん中',
        reading: 'まんなか (Mannaka)',
        meaning: "Qoqqis o'rtasi",
      },
    ],
  },
  {
    id: 'kanji_n4_125_着',
    level: 'N4',
    kanji: '着',
    onyomi: 'チャク, ジャク (chaku, jaku)',
    kunyomi: 'き・る, つ・く (ki-ru, tsu-ku)',
    meaningUz: 'Kiymoq, yetib bormoq (Wear, arrive)',
    strokeCount: 12,
    examples: [
      {
        word: '着る',
        reading: 'きる (Kiru)',
        meaning: 'Kiymoq',
      },
      {
        word: '着く',
        reading: 'つく (Tsuku)',
        meaning: 'Yetib bormoq',
      },
    ],
  },
  {
    id: 'kanji_n4_126_知',
    level: 'N4',
    kanji: '知',
    onyomi: 'チ (chi)',
    kunyomi: 'し・る (shi-ru)',
    meaningUz: 'Bilmoq (Know)',
    strokeCount: 8,
    examples: [
      {
        word: '知る',
        reading: 'しる (Shiru)',
        meaning: 'Bilmoq',
      },
      {
        word: '知らせる',
        reading: 'しらせる (Shiraseru)',
        meaning: 'Xabar bermoq',
      },
    ],
  },
  {
    id: 'kanji_n4_127_短',
    level: 'N4',
    kanji: '短',
    onyomi: 'タン (tan)',
    kunyomi: 'みじか・い (mijika-i)',
    meaningUz: 'Qisqa (Short)',
    strokeCount: 12,
    examples: [
      {
        word: '短い',
        reading: 'みじかい (Mijikai)',
        meaning: 'Qisqa',
      },
      {
        word: '短所',
        reading: 'たんしょ (Tansho)',
        meaning: 'Kamchilik',
      },
    ],
  },
  {
    id: 'kanji_n4_128_研',
    level: 'N4',
    kanji: '研',
    onyomi: 'ケン (ken)',
    kunyomi: 'と・ぐ (to-gu)',
    meaningUz: 'Tadqiqot, sayqallash (Polish, study)',
    strokeCount: 9,
    examples: [
      {
        word: '研究',
        reading: 'けんきゅう (Kenkyuu)',
        meaning: 'Tadqiqot',
      },
      {
        word: '研究所',
        reading: 'けんきゅうじょ (Kenkyuujo)',
        meaning: 'Tadqiqot markazi',
      },
    ],
  },
  {
    id: 'kanji_n4_129_私',
    level: 'N4',
    kanji: '私',
    onyomi: 'シ (shi)',
    kunyomi: 'わたし, わたくし (watashi, watakushi)',
    meaningUz: 'Men, shaxsiy (I, private)',
    strokeCount: 7,
    examples: [
      {
        word: '私',
        reading: 'わたし (Watashi)',
        meaning: 'Men',
      },
      {
        word: '私立',
        reading: 'しりつ (Shiritsu)',
        meaning: 'Xususiy',
      },
    ],
  },
  {
    id: 'kanji_n4_130_秋',
    level: 'N4',
    kanji: '秋',
    onyomi: 'シュウ (shuu)',
    kunyomi: 'あき (aki)',
    meaningUz: 'Kuz (Autumn)',
    strokeCount: 9,
    examples: [
      {
        word: '秋',
        reading: 'あき (Aki)',
        meaning: 'Kuz',
      },
      {
        word: '秋風',
        reading: 'あきかぜ (Akikaze)',
        meaning: 'Kuzgi shabada',
      },
    ],
  },
  {
    id: 'kanji_n4_131_究',
    level: 'N4',
    kanji: '究',
    onyomi: 'キュウ (kyuu)',
    kunyomi: 'きわ・める (kiwa-meru)',
    meaningUz: "Chuqur o'rganish (Research thoroughly)",
    strokeCount: 7,
    examples: [
      {
        word: '研究',
        reading: 'けんきゅう (Kenkyuu)',
        meaning: 'Tadqiqot',
      },
      {
        word: '究明',
        reading: 'きゅうめい (Kyuumei)',
        meaning: 'Oydinlashtirish',
      },
    ],
  },
  {
    id: 'kanji_n4_132_答',
    level: 'N4',
    kanji: '答',
    onyomi: 'トウ (tou)',
    kunyomi: 'こた・える, こた・え (kota-eru, kota-e)',
    meaningUz: 'Javob bermoq (Answer)',
    strokeCount: 12,
    examples: [
      {
        word: '答える',
        reading: 'こたえる (Kotaeru)',
        meaning: 'Javob bermoq',
      },
      {
        word: '答え',
        reading: 'こたえ (Kotae)',
        meaning: 'Javob',
      },
    ],
  },
  {
    id: 'kanji_n4_133_紙',
    level: 'N4',
    kanji: '紙',
    onyomi: 'シ (shi)',
    kunyomi: 'かみ (kami)',
    meaningUz: "Qog'oz (Paper)",
    strokeCount: 10,
    examples: [
      {
        word: '手紙',
        reading: 'てがみ (Tegami)',
        meaning: 'Xat',
      },
      {
        word: '折り紙',
        reading: 'おりがみ (Origami)',
        meaning: 'Origami',
      },
    ],
  },
  {
    id: 'kanji_n4_134_終',
    level: 'N4',
    kanji: '終',
    onyomi: 'シュウ (shuu)',
    kunyomi: 'お・わる, お・える (o-waru, o-eru)',
    meaningUz: 'Tugamoq, tugatmoq (End, finish)',
    strokeCount: 11,
    examples: [
      {
        word: '終わる',
        reading: 'おわる (Owaru)',
        meaning: 'Tugamoq',
      },
      {
        word: '終点',
        reading: 'しゅうてん (Shuuten)',
        meaning: 'Oxirgi bekat',
      },
    ],
  },
  {
    id: 'kanji_n4_135_習',
    level: 'N4',
    kanji: '習',
    onyomi: 'シュウ (shuu)',
    kunyomi: 'なら・う (nara-u)',
    meaningUz: "O'rganmoq (Learn)",
    strokeCount: 11,
    examples: [
      {
        word: '習う',
        reading: 'ならう (Narau)',
        meaning: "O'rganmoq",
      },
      {
        word: '練習',
        reading: 'れんしゅう (Renshuu)',
        meaning: 'Mashq',
      },
    ],
  },
  {
    id: 'kanji_n4_136_考',
    level: 'N4',
    kanji: '考',
    onyomi: 'コウ (kou)',
    kunyomi: 'かんが・える (kanga-eru)',
    meaningUz: "O'ylamoq, fikr yuritmoq (Think, consider)",
    strokeCount: 6,
    examples: [
      {
        word: '考える',
        reading: 'かんがえる (Kangaeru)',
        meaning: "O'ylamoq",
      },
      {
        word: '考え',
        reading: 'かんがえ (Kangae)',
        meaning: 'Fikr',
      },
    ],
  },
  {
    id: 'kanji_n4_137_者',
    level: 'N4',
    kanji: '者',
    onyomi: 'シャ (sha)',
    kunyomi: 'もの (mono)',
    meaningUz: 'Kishi, odam (Person)',
    strokeCount: 8,
    examples: [
      {
        word: '医者',
        reading: 'いしゃ (Isha)',
        meaning: 'Shifokor',
      },
      {
        word: '学者',
        reading: 'がくしゃ (Gakusha)',
        meaning: 'Olim',
      },
    ],
  },
  {
    id: 'kanji_n4_138_肉',
    level: 'N4',
    kanji: '肉',
    onyomi: 'ニク (niku)',
    kunyomi: '-',
    meaningUz: "Go'sht (Meat)",
    strokeCount: 6,
    examples: [
      {
        word: '牛肉',
        reading: 'ぎゅうにく (Gyuuniku)',
        meaning: "Mol go'shti",
      },
      {
        word: '肉体',
        reading: 'にくたい (Nikutai)',
        meaning: 'Jism, tana',
      },
    ],
  },
  {
    id: 'kanji_n4_139_自',
    level: 'N4',
    kanji: '自',
    onyomi: 'ジ, シ (ji, shi)',
    kunyomi: 'みずか・ら (mizuka-ra)',
    meaningUz: "O'zi (Self)",
    strokeCount: 6,
    examples: [
      {
        word: '自分',
        reading: 'じぶん (Jibun)',
        meaning: "O'zi",
      },
      {
        word: '自由',
        reading: 'じゆう (Jiyuu)',
        meaning: 'Erkinlik',
      },
    ],
  },
  {
    id: 'kanji_n4_140_色',
    level: 'N4',
    kanji: '色',
    onyomi: 'ショク, シキ (shoku, shiki)',
    kunyomi: 'いろ (iro)',
    meaningUz: 'Rang (Color)',
    strokeCount: 6,
    examples: [
      {
        word: '色',
        reading: 'いろ (Iro)',
        meaning: 'Rang',
      },
      {
        word: '景色',
        reading: 'けしき (Keshiki)',
        meaning: 'Manzara',
      },
    ],
  },
  {
    id: 'kanji_n4_141_英',
    level: 'N4',
    kanji: '英',
    onyomi: 'エイ (ei)',
    kunyomi: '-',
    meaningUz: 'Ingliz, ajoyib (English, brilliant)',
    strokeCount: 8,
    examples: [
      {
        word: '英語',
        reading: 'えいご (Eigo)',
        meaning: 'Ingliz tili',
      },
      {
        word: '英雄',
        reading: 'えいゆう (Eiyuu)',
        meaning: 'Qahramon',
      },
    ],
  },
  {
    id: 'kanji_n4_142_茶',
    level: 'N4',
    kanji: '茶',
    onyomi: 'チャ, サ (cha, sa)',
    kunyomi: '-',
    meaningUz: 'Choy (Tea)',
    strokeCount: 9,
    examples: [
      {
        word: 'お茶',
        reading: 'おちゃ (Ocha)',
        meaning: 'Choy',
      },
      {
        word: '紅茶',
        reading: 'こうちゃ (Koucha)',
        meaning: 'Qora choy',
      },
    ],
  },
  {
    id: 'kanji_n4_143_菜',
    level: 'N4',
    kanji: '菜',
    onyomi: 'サイ (sai)',
    kunyomi: 'な (na)',
    meaningUz: "Sabzavot, ko'kat (Vegetable)",
    strokeCount: 11,
    examples: [
      {
        word: '野菜',
        reading: 'やさい (Yasai)',
        meaning: 'Sabzavot',
      },
      {
        word: '菜園',
        reading: 'さいえん (Saien)',
        meaning: "Sabzavot bog'i",
      },
    ],
  },
  {
    id: 'kanji_n4_144_薬',
    level: 'N4',
    kanji: '薬',
    onyomi: 'ヤク (yaku)',
    kunyomi: 'くすり (kusuri)',
    meaningUz: 'Dori (Medicine)',
    strokeCount: 16,
    examples: [
      {
        word: '薬',
        reading: 'くすり (Kusuri)',
        meaning: 'Dori',
      },
      {
        word: '薬屋',
        reading: 'くすりや (Kusuriya)',
        meaning: 'Dorixona',
      },
    ],
  },
  {
    id: 'kanji_n4_145_親',
    level: 'N4',
    kanji: '親',
    onyomi: 'シン (shin)',
    kunyomi: 'おや, した・しい (oya, shita-shii)',
    meaningUz: 'Ota-ona, yaqin (Parent, close)',
    strokeCount: 16,
    examples: [
      {
        word: '両親',
        reading: 'りょうしん (Ryoushin)',
        meaning: 'Ota-ona',
      },
      {
        word: '親切',
        reading: 'しんせつ (Shinsetsu)',
        meaning: 'Mehribon',
      },
    ],
  },
  {
    id: 'kanji_n4_146_計',
    level: 'N4',
    kanji: '計',
    onyomi: 'ケイ (kei)',
    kunyomi: 'はか・る (haka-ru)',
    meaningUz: "O'lchamoq, hisoblamoq (Measure, plan)",
    strokeCount: 9,
    examples: [
      {
        word: '時計',
        reading: 'とけい (Tokei)',
        meaning: 'Soat',
      },
      {
        word: '計画',
        reading: 'けいかく (Keikaku)',
        meaning: 'Reja',
      },
    ],
  },
  {
    id: 'kanji_n4_147_試',
    level: 'N4',
    kanji: '試',
    onyomi: 'シ (shi)',
    kunyomi: 'こころ・みる, ため・す (kokoro-miru, tame-su)',
    meaningUz: "Sinab ko'rmoq (Try, test)",
    strokeCount: 13,
    examples: [
      {
        word: '試合',
        reading: 'しあい (Shiai)',
        meaning: 'Musobaqa',
      },
      {
        word: '試験',
        reading: 'しけん (Shiken)',
        meaning: 'Imtihon',
      },
    ],
  },
  {
    id: 'kanji_n4_148_説',
    level: 'N4',
    kanji: '説',
    onyomi: 'セツ (setsu)',
    kunyomi: 'と・く (to-ku)',
    meaningUz: 'Tushuntirmoq, nazariya (Explain, theory)',
    strokeCount: 14,
    examples: [
      {
        word: '説明',
        reading: 'せつめい (Setsumei)',
        meaning: 'Tushuntirish',
      },
      {
        word: '小説',
        reading: 'しょうせつ (Shousetsu)',
        meaning: 'Roman',
      },
    ],
  },
  {
    id: 'kanji_n4_149_貸',
    level: 'N4',
    kanji: '貸',
    onyomi: 'タイ (tai)',
    kunyomi: 'か・す (ka-su)',
    meaningUz: 'Qarzga bermoq (Lend)',
    strokeCount: 12,
    examples: [
      {
        word: '貸す',
        reading: 'かす (Kasu)',
        meaning: 'Qarzga bermoq',
      },
      {
        word: '賃貸',
        reading: 'ちんたい (Chintai)',
        meaning: 'Ijara',
      },
    ],
  },
  {
    id: 'kanji_n4_150_質',
    level: 'N4',
    kanji: '質',
    onyomi: 'シツ, シチ (shitsu, shichi)',
    kunyomi: '-',
    meaningUz: 'Sifat, garov (Quality, matter)',
    strokeCount: 15,
    examples: [
      {
        word: '質問',
        reading: 'しつもん (Shitsumon)',
        meaning: 'Savol',
      },
      {
        word: '品質',
        reading: 'ひんしつ (Hinshitsu)',
        meaning: 'Mahsulot sifati',
      },
    ],
  },
  {
    id: 'kanji_n4_151_赤',
    level: 'N4',
    kanji: '赤',
    onyomi: 'セキ, シャク (seki, shaku)',
    kunyomi: 'あか, あか・い (aka, aka-i)',
    meaningUz: 'Qizil (Red)',
    strokeCount: 7,
    examples: [
      {
        word: '赤い',
        reading: 'あかい (Akai)',
        meaning: 'Qizil',
      },
      {
        word: '赤ちゃん',
        reading: 'あかちゃん (Akachan)',
        meaning: 'Chaqaloq',
      },
    ],
  },
  {
    id: 'kanji_n4_152_走',
    level: 'N4',
    kanji: '走',
    onyomi: 'ソウ (sou)',
    kunyomi: 'はし・る (hashi-ru)',
    meaningUz: 'Yugurmoq (Run)',
    strokeCount: 7,
    examples: [
      {
        word: '走る',
        reading: 'はしる (Hashiru)',
        meaning: 'Yugurmoq',
      },
      {
        word: '走者',
        reading: 'そうしゃ (Sousha)',
        meaning: 'Yuguruvchi',
      },
    ],
  },
  {
    id: 'kanji_n4_153_起',
    level: 'N4',
    kanji: '起',
    onyomi: 'キ (ki)',
    kunyomi: 'お・きる, お・こす (o-kiru, o-kosu)',
    meaningUz: "Uyg'onmoq, qo'zg'atmoq (Wake up, rise)",
    strokeCount: 10,
    examples: [
      {
        word: '起きる',
        reading: 'おきる (Okiru)',
        meaning: "Uyg'onmoq",
      },
      {
        word: '起こす',
        reading: 'おこす (Okosu)',
        meaning: "Uyg'otmoq",
      },
    ],
  },
  {
    id: 'kanji_n4_154_転',
    level: 'N4',
    kanji: '転',
    onyomi: 'テン (ten)',
    kunyomi: 'ころ・がる, ころ・ぶ (koro-garu, koro-bu)',
    meaningUz: 'Aylanmoq, yiqilmoq (Revolve, roll)',
    strokeCount: 11,
    examples: [
      {
        word: '自転車',
        reading: 'じてんしゃ (Jitensha)',
        meaning: 'Velosiped',
      },
      {
        word: '運転',
        reading: 'うんてん (Unten)',
        meaning: 'Haydash',
      },
    ],
  },
  {
    id: 'kanji_n4_155_軽',
    level: 'N4',
    kanji: '軽',
    onyomi: 'ケイ (kei)',
    kunyomi: 'かる・い (karu-i)',
    meaningUz: 'Yengil (Light)',
    strokeCount: 12,
    examples: [
      {
        word: '軽い',
        reading: 'かるい (Karui)',
        meaning: 'Yengil',
      },
      {
        word: '手軽',
        reading: 'てがる (Tegaru)',
        meaning: 'Qulay, oson',
      },
    ],
  },
  {
    id: 'kanji_n4_156_近',
    level: 'N4',
    kanji: '近',
    onyomi: 'キン (kin)',
    kunyomi: 'ちか・い (chika-i)',
    meaningUz: 'Yaqin (Near)',
    strokeCount: 7,
    examples: [
      {
        word: '近い',
        reading: 'ちかい (Chikai)',
        meaning: 'Yaqin',
      },
      {
        word: '近所',
        reading: 'きんじょ (Kinjo)',
        meaning: "Qo'shnichilik",
      },
    ],
  },
  {
    id: 'kanji_n4_157_送',
    level: 'N4',
    kanji: '送',
    onyomi: 'ソウ (sou)',
    kunyomi: 'おく・る (oku-ru)',
    meaningUz: "Jo'natmoq (Send)",
    strokeCount: 9,
    examples: [
      {
        word: '送る',
        reading: 'おくる (Okuru)',
        meaning: "Jo'natmoq",
      },
      {
        word: '送料',
        reading: 'そうりょう (Souryou)',
        meaning: 'Yetkazib berish narxi',
      },
    ],
  },
  {
    id: 'kanji_n4_158_通',
    level: 'N4',
    kanji: '通',
    onyomi: 'ツウ (tsuu)',
    kunyomi: 'とお・る, かよ・う (too-ru, kayo-u)',
    meaningUz: "O'tmoq, qatnamoq (Pass, commute)",
    strokeCount: 10,
    examples: [
      {
        word: '通る',
        reading: 'とおる (Tooru)',
        meaning: "O'tib ketmoq",
      },
      {
        word: '通う',
        reading: 'かよう (Kayou)',
        meaning: 'Qatnamoq',
      },
    ],
  },
  {
    id: 'kanji_n4_159_進',
    level: 'N4',
    kanji: '進',
    onyomi: 'シン (shin)',
    kunyomi: 'すす・む, すす・める (susu-mu, susu-meru)',
    meaningUz: 'Oldinga siljimoq (Advance)',
    strokeCount: 11,
    examples: [
      {
        word: '進む',
        reading: 'すすむ (Susumu)',
        meaning: 'Oldinga siljimoq',
      },
      {
        word: '進歩',
        reading: 'しんぽ (Shinpo)',
        meaning: 'Taraqqiyot',
      },
    ],
  },
  {
    id: 'kanji_n4_160_運',
    level: 'N4',
    kanji: '運',
    onyomi: 'ウン (un)',
    kunyomi: 'はこ・ぶ (hako-bu)',
    meaningUz: 'Tashimoq, omad (Carry, luck)',
    strokeCount: 12,
    examples: [
      {
        word: '運動',
        reading: 'うんどう (Undou)',
        meaning: 'Mashq',
      },
      {
        word: '運転',
        reading: 'うんてん (Unten)',
        meaning: 'Haydash',
      },
    ],
  },
  {
    id: 'kanji_n4_161_遠',
    level: 'N4',
    kanji: '遠',
    onyomi: 'エン (en)',
    kunyomi: 'とお・い (too-i)',
    meaningUz: 'Uzoq (Far)',
    strokeCount: 13,
    examples: [
      {
        word: '遠い',
        reading: 'とおい (Tooi)',
        meaning: 'Uzoq',
      },
      {
        word: '遠慮',
        reading: 'えんりょ (Enryo)',
        meaning: 'Tortinish',
      },
    ],
  },
  {
    id: 'kanji_n4_162_都',
    level: 'N4',
    kanji: '都',
    onyomi: 'ト, ツ (to, tsu)',
    kunyomi: 'みやこ (miyako)',
    meaningUz: 'Metropoliya, sharoit (Metropolis, capital)',
    strokeCount: 11,
    examples: [
      {
        word: '都会',
        reading: 'とかい (Tokai)',
        meaning: 'Katta shahar',
      },
      {
        word: '都合',
        reading: 'つごう (Tsugou)',
        meaning: 'Qulaylik, sharoit',
      },
    ],
  },
  {
    id: 'kanji_n4_163_重',
    level: 'N4',
    kanji: '重',
    onyomi: 'ジュウ, チョウ (juu, chou)',
    kunyomi: 'おも・い, かさ・なる (omo-i, kasa-naru)',
    meaningUz: "Og'ir, qatlam (Heavy, pile)",
    strokeCount: 9,
    examples: [
      {
        word: '重い',
        reading: 'おもい (Omoi)',
        meaning: "Og'ir",
      },
      {
        word: '体重',
        reading: 'たいじゅう (Taijuu)',
        meaning: 'Tana vazni',
      },
    ],
  },
  {
    id: 'kanji_n4_164_野',
    level: 'N4',
    kanji: '野',
    onyomi: 'ヤ (ya)',
    kunyomi: 'の (no)',
    meaningUz: 'Dala, soha (Field, plains)',
    strokeCount: 11,
    examples: [
      {
        word: '野菜',
        reading: 'やさい (Yasai)',
        meaning: 'Sabzavot',
      },
      {
        word: '分野',
        reading: 'ぶんや (Bunya)',
        meaning: 'Soha',
      },
    ],
  },
  {
    id: 'kanji_n4_165_銀',
    level: 'N4',
    kanji: '銀',
    onyomi: 'ギン (gin)',
    kunyomi: '-',
    meaningUz: 'Kumush (Silver)',
    strokeCount: 14,
    examples: [
      {
        word: '銀行',
        reading: 'ぎんこう (Ginkou)',
        meaning: 'Bank',
      },
      {
        word: '銀色',
        reading: "ぎんいろ (Gin'iro)",
        meaning: 'Kumush rang',
      },
    ],
  },
  {
    id: 'kanji_n4_166_門',
    level: 'N4',
    kanji: '門',
    onyomi: 'モン (mon)',
    kunyomi: 'かど (kado)',
    meaningUz: 'Darvoza (Gate)',
    strokeCount: 8,
    examples: [
      {
        word: '校門',
        reading: 'こうもん (Koumon)',
        meaning: 'Maktab darvozasi',
      },
      {
        word: '専門',
        reading: 'せんもん (Senmon)',
        meaning: 'Mutaxassislik',
      },
    ],
  },
  {
    id: 'kanji_n4_167_開',
    level: 'N4',
    kanji: '開',
    onyomi: 'カイ (kai)',
    kunyomi: 'ひら・く, あ・く, あ・ける (hira-ku, a-ku, a-keru)',
    meaningUz: 'Ochmoq, ochilmoq (Open)',
    strokeCount: 12,
    examples: [
      {
        word: '開ける',
        reading: 'あける (Akeru)',
        meaning: 'Ochmoq',
      },
      {
        word: '開会',
        reading: 'かいかい (Kaikai)',
        meaning: "Yig'ilishni ochish",
      },
    ],
  },
  {
    id: 'kanji_n4_168_院',
    level: 'N4',
    kanji: '院',
    onyomi: 'イン (in)',
    kunyomi: '-',
    meaningUz: 'Muassasa, bino (Institution)',
    strokeCount: 10,
    examples: [
      {
        word: '病院',
        reading: 'びょういん (Byouin)',
        meaning: 'Kasalxona',
      },
      {
        word: '大学院',
        reading: 'だいがくいん (Daigakuin)',
        meaning: 'Magistratura',
      },
    ],
  },
  {
    id: 'kanji_n4_169_集',
    level: 'N4',
    kanji: '集',
    onyomi: 'シュウ (shuu)',
    kunyomi: 'あつ・まる, あつ・める (atsu-maru, atsu-meru)',
    meaningUz: "Yig'ilmoq, to'plamoq (Gather, collect)",
    strokeCount: 12,
    examples: [
      {
        word: '集める',
        reading: 'あつめる (Atsumeru)',
        meaning: "To'plamoq",
      },
      {
        word: '集合',
        reading: 'しゅうごう (Shuugou)',
        meaning: "Yig'ilish",
      },
    ],
  },
  {
    id: 'kanji_n4_170_青',
    level: 'N4',
    kanji: '青',
    onyomi: 'セイ, ショウ (sei, shou)',
    kunyomi: 'あお, あお・い (ao, ao-i)',
    meaningUz: "Moviy, ko'k (Blue)",
    strokeCount: 8,
    examples: [
      {
        word: '青い',
        reading: 'あおい (Aoi)',
        meaning: 'Moviy',
      },
      {
        word: '青年',
        reading: 'せいねん (Seinen)',
        meaning: "O'smir yoshlar",
      },
    ],
  },
  {
    id: 'kanji_n4_171_音',
    level: 'N4',
    kanji: '音',
    onyomi: 'オン, イン (on, in)',
    kunyomi: 'おと, ね (oto, ne)',
    meaningUz: 'Tovush, ovoz (Sound)',
    strokeCount: 9,
    examples: [
      {
        word: '音',
        reading: 'おと (Oto)',
        meaning: 'Tovush',
      },
      {
        word: '音楽',
        reading: 'おんがく (Ongaku)',
        meaning: 'Musiqa',
      },
    ],
  },
  {
    id: 'kanji_n4_172_頭',
    level: 'N4',
    kanji: '頭',
    onyomi: 'トウ, ズ (tou, zu)',
    kunyomi: 'あたま, かしら (atama, kashira)',
    meaningUz: 'Bosh (Head)',
    strokeCount: 16,
    examples: [
      {
        word: '頭',
        reading: 'あたま (Atama)',
        meaning: 'Bosh',
      },
      {
        word: '頭痛',
        reading: 'ずつう (Zutsuu)',
        meaning: "Bosh og'rig'i",
      },
    ],
  },
  {
    id: 'kanji_n4_173_題',
    level: 'N4',
    kanji: '題',
    onyomi: 'ダイ (dai)',
    kunyomi: '-',
    meaningUz: 'Mavzu, sarlavha (Topic, title)',
    strokeCount: 18,
    examples: [
      {
        word: '宿題',
        reading: 'しゅくだい (Shukudai)',
        meaning: 'Uyga vazifa',
      },
      {
        word: '問題',
        reading: 'もんだい (Mondai)',
        meaning: 'Savol, masala',
      },
    ],
  },
  {
    id: 'kanji_n4_174_顔',
    level: 'N4',
    kanji: '顔',
    onyomi: 'ガン (gan)',
    kunyomi: 'かお (kao)',
    meaningUz: 'Yuz, chehra (Face)',
    strokeCount: 18,
    examples: [
      {
        word: '顔',
        reading: 'かお (Kao)',
        meaning: 'Yuz',
      },
      {
        word: '笑顔',
        reading: 'えがお (Egao)',
        meaning: 'Tabassum',
      },
    ],
  },
  {
    id: 'kanji_n4_175_風',
    level: 'N4',
    kanji: '風',
    onyomi: 'フウ, フ (fuu, fu)',
    kunyomi: 'かぜ, かざ (kaze, kaza)',
    meaningUz: 'Shamol, uslub (Wind, style)',
    strokeCount: 9,
    examples: [
      {
        word: '風',
        reading: 'かぜ (Kaze)',
        meaning: 'Shamol',
      },
      {
        word: '台風',
        reading: 'たいふう (Taifuu)',
        meaning: 'Tayfun',
      },
    ],
  },
  {
    id: 'kanji_n4_176_飯',
    level: 'N4',
    kanji: '飯',
    onyomi: 'ハン (han)',
    kunyomi: 'めし (meshi)',
    meaningUz: 'Ovqat, pishirilgan guruch (Meal, rice)',
    strokeCount: 12,
    examples: [
      {
        word: 'ご飯',
        reading: 'ごはん (Gohan)',
        meaning: 'Ovqat',
      },
      {
        word: '夕飯',
        reading: 'ゆうはん (Yuuhan)',
        meaning: 'Kechki ovqat',
      },
    ],
  },
  {
    id: 'kanji_n4_177_館',
    level: 'N4',
    kanji: '館',
    onyomi: 'カン (kan)',
    kunyomi: 'やかた (yakata)',
    meaningUz: 'Katta bino, saroy (Building, mansion)',
    strokeCount: 16,
    examples: [
      {
        word: '図書館',
        reading: 'としょかん (Toshokan)',
        meaning: 'Kutubxona',
      },
      {
        word: '映画館',
        reading: 'えいがかん (Eigakan)',
        meaning: 'Kinoteatr',
      },
    ],
  },
  {
    id: 'kanji_n4_178_首',
    level: 'N4',
    kanji: '首',
    onyomi: 'シュ (shu)',
    kunyomi: 'くび (kubi)',
    meaningUz: "Bo'yin, rahbar (Neck, leader)",
    strokeCount: 9,
    examples: [
      {
        word: '首',
        reading: 'くび (Kubi)',
        meaning: "Bo'yin",
      },
      {
        word: '手首',
        reading: 'てくび (Tekubi)',
        meaning: 'Bilak',
      },
    ],
  },
  {
    id: 'kanji_n4_179_験',
    level: 'N4',
    kanji: '験',
    onyomi: 'ケン, ゲン (ken, gen)',
    kunyomi: '-',
    meaningUz: 'Sinov, tajriba (Test, verify)',
    strokeCount: 18,
    examples: [
      {
        word: '試験',
        reading: 'しけん (Shiken)',
        meaning: 'Imtihon',
      },
      {
        word: '経験',
        reading: 'けいけん (Keiken)',
        meaning: 'Tajriba',
      },
    ],
  },
  {
    id: 'kanji_n4_180_鳥',
    level: 'N4',
    kanji: '鳥',
    onyomi: 'チョウ (chou)',
    kunyomi: 'とり (tori)',
    meaningUz: 'Qush (Bird)',
    strokeCount: 11,
    examples: [
      {
        word: '鳥',
        reading: 'とり (Tori)',
        meaning: 'Qush',
      },
      {
        word: '小鳥',
        reading: 'ことり (Kotori)',
        meaning: 'Qushcha',
      },
    ],
  },
  {
    id: 'kanji_n4_181_黒',
    level: 'N4',
    kanji: '黒',
    onyomi: 'コク (koku)',
    kunyomi: 'くろ, くろ・い (kuro, kuro-i)',
    meaningUz: 'Qora (Black)',
    strokeCount: 11,
    examples: [
      {
        word: '黒い',
        reading: 'くろい (Kuroi)',
        meaning: 'Qora',
      },
      {
        word: '黒板',
        reading: 'こくばん (Kokuban)',
        meaning: 'Sinf doskasi',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_1_府',
    level: 'N4',
    kanji: '府',
    onyomi: 'フ (fu)',
    kunyomi: '-',
    meaningUz: "Prefektura, ma'muriy markaz (Prefecture, government)",
    strokeCount: 8,
    examples: [
      {
        word: '政府',
        reading: 'せいふ (Seifu)',
        meaning: 'Hukumat',
      },
      {
        word: '京都府',
        reading: 'きょうとふ (Kyoutofu)',
        meaning: 'Kioto prefekturasi',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_2_細',
    level: 'N4',
    kanji: '細',
    onyomi: 'サイ (sai)',
    kunyomi: 'ほそ・い, こま・かい (hoso-i, koma-kai)',
    meaningUz: 'Ingichka, mayda (Thin, slender, detailed)',
    strokeCount: 11,
    examples: [
      {
        word: '細かい',
        reading: 'こまかい (Komakai)',
        meaning: 'Mayda, batafsil',
      },
      {
        word: '細い',
        reading: 'ほそい (Hosoi)',
        meaning: 'Ingichka',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_3_利',
    level: 'N4',
    kanji: '利',
    onyomi: 'リ (ri)',
    kunyomi: 'き・く (ki-ku)',
    meaningUz: 'Foyda, daromad, qulaylik (Benefit, advantage)',
    strokeCount: 7,
    examples: [
      {
        word: '便利',
        reading: 'べんり (Benri)',
        meaning: 'Qulay',
      },
      {
        word: '利用',
        reading: 'りよう (Riyou)',
        meaning: 'Foydalanish',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_4_良',
    level: 'N4',
    kanji: '良',
    onyomi: 'リョウ (ryou)',
    kunyomi: 'よ・い, い・い (yo-i, i-i)',
    meaningUz: "Yaxshi, a'lo (Good, excellent)",
    strokeCount: 7,
    examples: [
      {
        word: '良い',
        reading: 'よい (Yoi)',
        meaning: 'Yaxshi',
      },
      {
        word: '良心',
        reading: 'りょうしん (Ryoushin)',
        meaning: 'Vijdon',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_5_変',
    level: 'N4',
    kanji: '変',
    onyomi: 'ヘン (hen)',
    kunyomi: 'か・わる, か・える (ka-waru, ka-eru)',
    meaningUz: "G'alati, o'zgarmoq (Change, strange)",
    strokeCount: 9,
    examples: [
      {
        word: '大変',
        reading: 'たいへん (Taihen)',
        meaning: 'Juda qiyin, jiddiy',
      },
      {
        word: '変わる',
        reading: 'かわる (Kawaru)',
        meaning: "O'zgamoq",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_6_雪',
    level: 'N4',
    kanji: '雪',
    onyomi: 'セツ (setsu)',
    kunyomi: 'ゆき (yuki)',
    meaningUz: 'Qor (Snow)',
    strokeCount: 11,
    examples: [
      {
        word: '雪',
        reading: 'ゆき (Yuki)',
        meaning: 'Qor',
      },
      {
        word: '大雪',
        reading: 'おおゆき (Ooyuki)',
        meaning: 'Qalin qor',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_7_季',
    level: 'N4',
    kanji: '季',
    onyomi: 'キ (ki)',
    kunyomi: '-',
    meaningUz: 'Fasl (Season)',
    strokeCount: 8,
    examples: [
      {
        word: '季節',
        reading: 'きせつ (Kisetsu)',
        meaning: 'Yil fasli',
      },
      {
        word: '四季',
        reading: 'しき (Shiki)',
        meaning: "To'rt fasl",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_8_節',
    level: 'N4',
    kanji: '節',
    onyomi: 'セツ, セチ (setsu, sechi)',
    kunyomi: 'ふし (fushi)',
    meaningUz: "Fasl, bo'g'in, tejamkorlik (Node, season, clause)",
    strokeCount: 13,
    examples: [
      {
        word: '季節',
        reading: 'きせつ (Kisetsu)',
        meaning: 'Fasl',
      },
      {
        word: '節約',
        reading: 'せつやく (Setsuyaku)',
        meaning: 'Tejamkorlik',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_9_暖',
    level: 'N4',
    kanji: '暖',
    onyomi: 'ダン (dan)',
    kunyomi: 'あたた・かい, あたた・まる (atata-kai, atata-maru)',
    meaningUz: 'Iliq (havo) (Warm weather)',
    strokeCount: 13,
    examples: [
      {
        word: '暖かい',
        reading: 'あたたかい (Atatakai)',
        meaning: 'Iliq',
      },
      {
        word: '暖房',
        reading: 'だんぼう (Danbou)',
        meaning: 'Isitish tizimi',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_10_涼',
    level: 'N4',
    kanji: '涼',
    onyomi: 'リョウ (ryou)',
    kunyomi: 'すず・しい, すず・む (suzu-shii, suzu-mu)',
    meaningUz: 'Salqin (Cool, refreshing)',
    strokeCount: 11,
    examples: [
      {
        word: '涼しい',
        reading: 'すずしい (Suzushii)',
        meaning: 'Salqin',
      },
      {
        word: '涼む',
        reading: 'すずむ (Suzumu)',
        meaning: 'Salqinlamoq',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_11_科',
    level: 'N4',
    kanji: '科',
    onyomi: 'カ (ka)',
    kunyomi: '-',
    meaningUz: "Bo'lim, fan, soha (Department, course, science)",
    strokeCount: 9,
    examples: [
      {
        word: '科学',
        reading: 'かがく (Kagaku)',
        meaning: 'Fan, ilm-fan',
      },
      {
        word: '教科書',
        reading: 'きょうかしょ (Kyoukasho)',
        meaning: 'Darslik',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_12_内',
    level: 'N4',
    kanji: '内',
    onyomi: 'ナイ, ダイ (nai, dai)',
    kunyomi: 'うち (uchi)',
    meaningUz: 'Ichkari, ichki (Inside, within)',
    strokeCount: 4,
    examples: [
      {
        word: '案内',
        reading: 'あんない (Annai)',
        meaning: "Yo'l ko'rsatish",
      },
      {
        word: '内部',
        reading: 'ないぶ (Naibu)',
        meaning: 'Ichki qism',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_13_晩',
    level: 'N4',
    kanji: '晩',
    onyomi: 'バン (ban)',
    kunyomi: '-',
    meaningUz: 'Oqshom, kechqurun (Night, evening)',
    strokeCount: 12,
    examples: [
      {
        word: '今晩',
        reading: 'こんばん (Konban)',
        meaning: 'Bugun kechqurun',
      },
      {
        word: '晩ご飯',
        reading: 'ばんごはん (Bangohan)',
        meaning: 'Kechki ovqat',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_14_両',
    level: 'N4',
    kanji: '両',
    onyomi: 'リョウ (ryou)',
    kunyomi: 'てる, ふたつ (teru, futatsu)',
    meaningUz: 'Ikkala, har ikki (Both)',
    strokeCount: 6,
    examples: [
      {
        word: '両親',
        reading: 'りょうしん (Ryoushin)',
        meaning: 'Ota-ona',
      },
      {
        word: '両方',
        reading: 'りょうほう (Ryouhou)',
        meaning: 'Har ikkalasi',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_15_活',
    level: 'N4',
    kanji: '活',
    onyomi: 'カツ (katsu)',
    kunyomi: 'い・きる, い・かす (i-kiru, i-kasu)',
    meaningUz: 'Jonli, faoliyat (Active, lively)',
    strokeCount: 9,
    examples: [
      {
        word: '生活',
        reading: 'せいかつ (Seikatsu)',
        meaning: 'Hayot, turmush',
      },
      {
        word: '活動',
        reading: 'かつどう (Katsudou)',
        meaning: 'Faoliyat',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_16_形',
    level: 'N4',
    kanji: '形',
    onyomi: 'ケイ, ギョウ (kei, gyou)',
    kunyomi: 'かたち, かた (katachi, kata)',
    meaningUz: "Shakl, ko'rinish (Shape, form)",
    strokeCount: 7,
    examples: [
      {
        word: '人形',
        reading: 'にんぎょう (Ningyou)',
        meaning: "Qo'g'irchoq",
      },
      {
        word: '形式',
        reading: 'けいしき (Keishiki)',
        meaning: 'Format, shakl',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_17_米',
    level: 'N4',
    kanji: '米',
    onyomi: 'ベイ, マイ (bei, mai)',
    kunyomi: 'こめ, よね (kome, yone)',
    meaningUz: 'Guruch, Amerika (Rice, America)',
    strokeCount: 6,
    examples: [
      {
        word: 'お米',
        reading: 'おこめ (Okome)',
        meaning: 'Guruch',
      },
      {
        word: '米国',
        reading: 'べいこく (Beikoku)',
        meaning: 'AQSH',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_18_信',
    level: 'N4',
    kanji: '信',
    onyomi: 'シン (shin)',
    kunyomi: '-',
    meaningUz: 'Ishonch, xabar, maktub (Trust, faith, message)',
    strokeCount: 9,
    examples: [
      {
        word: '信号',
        reading: 'しんごう (Shingou)',
        meaning: 'Svetofor',
      },
      {
        word: '信じる',
        reading: 'しんじる (Shinjiru)',
        meaning: 'Ishonmoq',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_19_返',
    level: 'N4',
    kanji: '返',
    onyomi: 'ヘン (hen)',
    kunyomi: 'かえ・す, かえ・る (kae-su, kae-ru)',
    meaningUz: 'Qaytarmoq (Return, reply)',
    strokeCount: 7,
    examples: [
      {
        word: '返す',
        reading: 'かえす (Kaesu)',
        meaning: 'Qaytarmoq',
      },
      {
        word: '返事',
        reading: 'へんじ (Henji)',
        meaning: 'Javob',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_20_号',
    level: 'N4',
    kanji: '号',
    onyomi: 'ゴウ (gou)',
    kunyomi: 'さけ・ぶ, よびな (sake-bu, yobina)',
    meaningUz: 'Raqam, belgi (Number, issue)',
    strokeCount: 5,
    examples: [
      {
        word: '信号',
        reading: 'しんごう (Shingou)',
        meaning: 'Svetofor',
      },
      {
        word: '番号',
        reading: 'ばんごう (Bangou)',
        meaning: 'Raqam',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_21_交',
    level: 'N4',
    kanji: '交',
    onyomi: 'コウ (kou)',
    kunyomi: 'まじ・わる, ま・ぜる, かわ・す (maji-waru, ma-zeru, kawa-su)',
    meaningUz: 'Kesishtirmoq, aralashtirmoq, aloqa (Intersect, mingle, exchange)',
    strokeCount: 6,
    examples: [
      {
        word: '交通',
        reading: 'こうつう (Koutsuu)',
        meaning: "Yo'l harakati",
      },
      {
        word: '交番',
        reading: 'こうばん (Kouban)',
        meaning: 'Politsiya maskani',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_22_降',
    level: 'N4',
    kanji: '降',
    onyomi: 'コウ, ゴ (kou, go)',
    kunyomi: 'ふ・る, お・りる (fu-ru, o-riru)',
    meaningUz: "Yog'moq, tushmoq (Fall, get off)",
    strokeCount: 10,
    examples: [
      {
        word: '降りる',
        reading: 'おりる (Oriru)',
        meaning: 'Tushmoq',
      },
      {
        word: '降る',
        reading: 'ふる (Furu)',
        meaning: "Yog'moq",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_23_閉',
    level: 'N4',
    kanji: '閉',
    onyomi: 'ヘイ (hei)',
    kunyomi: 'し・める, し・まる, と・じる (shi-meru, shi-maru, to-jiru)',
    meaningUz: 'Yopmoq, yopilmoq (Close, shut)',
    strokeCount: 11,
    examples: [
      {
        word: '閉める',
        reading: 'しめる (Shimeru)',
        meaning: 'Yopmoq',
      },
      {
        word: '閉店',
        reading: 'へいてん (Heiten)',
        meaning: "Do'kon yopilishi",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_24_全',
    level: 'N4',
    kanji: '全',
    onyomi: 'ゼン (zen)',
    kunyomi: 'すべ・て, まった・く (sube-te, matta-ku)',
    meaningUz: "Butun, to'liq, barcha (All, whole)",
    strokeCount: 6,
    examples: [
      {
        word: '全部',
        reading: 'ぜんぶ (Zenbu)',
        meaning: 'Barchasi',
      },
      {
        word: '安全',
        reading: 'あんぜん (Anzen)',
        meaning: 'Xavfsizlik',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_25_若',
    level: 'N4',
    kanji: '若',
    onyomi: 'ジャク, ニャク (jaku, nyaku)',
    kunyomi: 'わか・い, も・しくわ (waka-i, mo-shikuwa)',
    meaningUz: 'Yosh (Young)',
    strokeCount: 8,
    examples: [
      {
        word: '若い',
        reading: 'わかい (Wakai)',
        meaning: 'Yosh',
      },
      {
        word: '若者',
        reading: 'わかもの (Wakamono)',
        meaning: 'Yoshlar',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_26_消',
    level: 'N4',
    kanji: '消',
    onyomi: 'ショウ (shou)',
    kunyomi: 'き・える, け・す (ki-eru, ke-su)',
    meaningUz: "O'chirmoq, o'chmoq (Extinguish, turn off)",
    strokeCount: 10,
    examples: [
      {
        word: '消す',
        reading: 'けす (Kesu)',
        meaning: "O'chirmoq",
      },
      {
        word: '消しゴム',
        reading: 'けしごむ (Keshigomu)',
        meaning: "O'chirg'ich",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_27_捨',
    level: 'N4',
    kanji: '捨',
    onyomi: 'シャ (sha)',
    kunyomi: 'す・てる (sute-ru)',
    meaningUz: 'Tashlab yubormoq (Throw away, discard)',
    strokeCount: 11,
    examples: [
      {
        word: '捨てる',
        reading: 'すてる (Suteru)',
        meaning: 'Tashlab yubormoq',
      },
      {
        word: '四捨五入',
        reading: 'ししゃごにゅう (Shishagonyuu)',
        meaning: 'Yaxlitlash',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_28_座',
    level: 'N4',
    kanji: '座',
    onyomi: 'ザ (za)',
    kunyomi: 'すわ・る (suwa-ru)',
    meaningUz: "O'tirmoq, o'rindiq (Sit, seat)",
    strokeCount: 10,
    examples: [
      {
        word: '座る',
        reading: 'すわる (Suwaru)',
        meaning: "O'tirmoq",
      },
      {
        word: '座席',
        reading: 'ざせき (Zaseki)',
        meaning: "O'rindiq",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_29_落',
    level: 'N4',
    kanji: '落',
    onyomi: 'ラク (raku)',
    kunyomi: 'お・ちる, お・とす (o-chiru, o-tosu)',
    meaningUz: 'Tushib ketmoq, tushirib qoldirmoq (Fall, drop)',
    strokeCount: 12,
    examples: [
      {
        word: '落ちる',
        reading: 'おちる (Ochiru)',
        meaning: 'Yiqilmoq, tushmoq',
      },
      {
        word: '落とす',
        reading: 'おとす (Otosu)',
        meaning: 'Tushirib yubormoq',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_30_公',
    level: 'N4',
    kanji: '公',
    onyomi: 'コウ, ク (kou, ku)',
    kunyomi: 'おおやけ (ooyake)',
    meaningUz: 'Jamoat, rasmiy, davlat (Public, official)',
    strokeCount: 4,
    examples: [
      {
        word: '公園',
        reading: 'こうえん (Kouen)',
        meaning: "Park, istirohat bog'i",
      },
      {
        word: '公共',
        reading: 'こうきょう (Koukyou)',
        meaning: 'Jamoat',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_31_伝',
    level: 'N4',
    kanji: '伝',
    onyomi: 'デン, テン (den, ten)',
    kunyomi: 'つた・わる, つた・える, つだ・う (tsuta-waru, tsuta-eru, tsuda-u)',
    meaningUz: "Yetkazmoq, o'tkazmoq (Transmit, convey)",
    strokeCount: 6,
    examples: [
      {
        word: '伝える',
        reading: 'つたえる (Tsutaeru)',
        meaning: 'Yetkazmoq',
      },
      {
        word: '手伝う',
        reading: 'てつだう (Tetsudau)',
        meaning: 'Yordam bermoq',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_32_忘',
    level: 'N4',
    kanji: '忘',
    onyomi: 'ボウ (bou)',
    kunyomi: 'わす・れる (wasu-reru)',
    meaningUz: 'Unitmoq (Forget)',
    strokeCount: 7,
    examples: [
      {
        word: '忘れる',
        reading: 'わすれる (Wasureru)',
        meaning: 'Unitmoq',
      },
      {
        word: '忘れ物',
        reading: 'わすれもの (Wasuremono)',
        meaning: 'Esdan chiqqan narsa',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_33_受',
    level: 'N4',
    kanji: '受',
    onyomi: 'ジュ (ju)',
    kunyomi: 'う・ける, う・かる (u-keru, u-karu)',
    meaningUz: 'Qabul qilmoq, topshirmoq (Receive, accept)',
    strokeCount: 8,
    examples: [
      {
        word: '受ける',
        reading: 'うける (Ukeru)',
        meaning: 'Qabul qilmoq',
      },
      {
        word: '受付',
        reading: 'うけつけ (Uketsuke)',
        meaning: 'Qabulxona',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_34_残',
    level: 'N4',
    kanji: '残',
    onyomi: 'ザン (zan)',
    kunyomi: 'のこ・る, のこ・す (noko-ru, noko-su)',
    meaningUz: 'Qolmoq, qoldirmoq (Remain, leave over)',
    strokeCount: 10,
    examples: [
      {
        word: '残る',
        reading: 'のこる (Nokoru)',
        meaning: 'Qolmoq',
      },
      {
        word: '残業',
        reading: 'ざんぎょう (Zangyou)',
        meaning: "Qo'shimcha ish",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_35_寝',
    level: 'N4',
    kanji: '寝',
    onyomi: 'シン (shin)',
    kunyomi: 'ね・る, ね・かす (ne-ru, ne-kasu)',
    meaningUz: 'Uxlamoq (Sleep, lie down)',
    strokeCount: 13,
    examples: [
      {
        word: '寝る',
        reading: 'ねる (Neru)',
        meaning: 'Uxlamoq',
      },
      {
        word: '寝室',
        reading: 'しんしつ (Shinshitsu)',
        meaning: 'Yotoqxona',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_36_園',
    level: 'N4',
    kanji: '園',
    onyomi: 'エン (en)',
    kunyomi: 'その (sono)',
    meaningUz: "Bog', istirohat bog'i (Garden, park)",
    strokeCount: 13,
    examples: [
      {
        word: '公園',
        reading: 'こうえん (Kouen)',
        meaning: "Bog', park",
      },
      {
        word: '動物園',
        reading: 'どうぶつえん (Doubutsuen)',
        meaning: "Hayvonot bog'i",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_37_決',
    level: 'N4',
    kanji: '決',
    onyomi: 'ケツ (ketsu)',
    kunyomi: 'き・める, き・まる (ki-meru, ki-maru)',
    meaningUz: 'Qaror qilmoq, hal qilmoq (Decide, determine)',
    strokeCount: 7,
    examples: [
      {
        word: '決める',
        reading: 'きめる (Kimeru)',
        meaning: 'Qaror qilmoq',
      },
      {
        word: '決して',
        reading: 'けっして (Kesshite)',
        meaning: 'Hech qachon',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_38_呼',
    level: 'N4',
    kanji: '呼',
    onyomi: 'コ (ko)',
    kunyomi: 'よ・ぶ (yo-bu)',
    meaningUz: 'Chaqirmoq (Call)',
    strokeCount: 8,
    examples: [
      {
        word: '呼ぶ',
        reading: 'よぶ (Yobu)',
        meaning: 'Chaqirmoq',
      },
      {
        word: '呼吸',
        reading: 'こきゅう (Kokyuu)',
        meaning: 'Nafas olish',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_39_取',
    level: 'N4',
    kanji: '取',
    onyomi: 'シュ (shu)',
    kunyomi: 'と・る, と・り (to-ru, to-ri)',
    meaningUz: 'Olmoq, ushlamoq (Take, fetch)',
    strokeCount: 8,
    examples: [
      {
        word: '取る',
        reading: 'とる (Toru)',
        meaning: 'Olmoq',
      },
      {
        word: '取り替える',
        reading: 'とりかえる (Torikaeru)',
        meaning: 'Almashtirmoq',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_40_調',
    level: 'N4',
    kanji: '調',
    onyomi: 'チョウ (chou)',
    kunyomi: 'しら・べる, ととの・う (shira-beru, totono-u)',
    meaningUz: 'Tekshirmoq, sozlamoq, ohang (Investigate, tune)',
    strokeCount: 15,
    examples: [
      {
        word: '調べる',
        reading: 'しらべる (Shiraberu)',
        meaning: 'Tekshirmoq',
      },
      {
        word: '調子',
        reading: 'ちょうし (Choushi)',
        meaning: 'Ahvol',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_41_遅',
    level: 'N4',
    kanji: '遅',
    onyomi: 'チ (chi)',
    kunyomi: 'おく・れる, おそ・い (oku-reru, oso-i)',
    meaningUz: 'Kech, sekin (Slow, late)',
    strokeCount: 12,
    examples: [
      {
        word: '遅い',
        reading: 'おそい (Osoi)',
        meaning: 'Sekin, kech',
      },
      {
        word: '遅刻',
        reading: 'ちこく (Chikoku)',
        meaning: 'Kechikish',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_42_部',
    level: 'N4',
    kanji: '部',
    onyomi: 'ブ (bu)',
    kunyomi: '-',
    meaningUz: "Bo'lim, qism, xona (Section, department, part)",
    strokeCount: 11,
    examples: [
      {
        word: '全部',
        reading: 'ぜんぶ (Zenbu)',
        meaning: 'Hammasi',
      },
      {
        word: '部屋',
        reading: 'へや (Heya)',
        meaning: 'Xona',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_43_困',
    level: 'N4',
    kanji: '困',
    onyomi: 'コン (kon)',
    kunyomi: 'こま・る (koma-ru)',
    meaningUz: 'Qiyinchilikda qolmoq (Troubled, distressed)',
    strokeCount: 7,
    examples: [
      {
        word: '困る',
        reading: 'こまる (Komaru)',
        meaning: 'Qiyin ahvolda qolmoq',
      },
      {
        word: '困難',
        reading: 'こんなん (Konnan)',
        meaning: 'Qiyinchilik',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_44_押',
    level: 'N4',
    kanji: '押',
    onyomi: 'オウ (ou)',
    kunyomi: 'お・す, お・さえる (o-su, o-saeru)',
    meaningUz: 'Bosmoq, itarmoq (Push, press)',
    strokeCount: 8,
    examples: [
      {
        word: '押す',
        reading: 'おす (Osu)',
        meaning: 'Bosmoq, itarmoq',
      },
      {
        word: '押入れ',
        reading: 'おしいれ (Oshiire)',
        meaning: 'Devoriy shkaf',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_45_席',
    level: 'N4',
    kanji: '席',
    onyomi: 'セキ (seki)',
    kunyomi: '-',
    meaningUz: "O'rindiq, joy (Seat)",
    strokeCount: 10,
    examples: [
      {
        word: '席',
        reading: 'せき (Seki)',
        meaning: "Joy, o'rindiq",
      },
      {
        word: '出席',
        reading: 'しゅっせき (Shusseki)',
        meaning: 'Qatnashish',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_46_続',
    level: 'N4',
    kanji: '続',
    onyomi: 'ゾク (zoku)',
    kunyomi: 'つづ・く, つづ・ける (tsudu-ku, tsudu-keru)',
    meaningUz: 'Davom etmoq, davom ettirmoq (Continue)',
    strokeCount: 13,
    examples: [
      {
        word: '続ける',
        reading: 'つづける (Tsudukeru)',
        meaning: 'Davom ettirmoq',
      },
      {
        word: '手続き',
        reading: 'てつづき (Tetsuduki)',
        meaning: 'Tartib-qoida',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_47_鉄',
    level: 'N4',
    kanji: '鉄',
    onyomi: 'テツ (tetsu)',
    kunyomi: 'くろがね (kurogane)',
    meaningUz: 'Temir (Iron, steel)',
    strokeCount: 13,
    examples: [
      {
        word: '地下鉄',
        reading: 'ちかてつ (Chikatetsu)',
        meaning: 'Metro',
      },
      {
        word: '鉄道',
        reading: 'てつどう (Tetsudou)',
        meaning: "Temir yo'l",
      },
    ],
  },
  {
    id: 'kanji_n4_b2_48_祖',
    level: 'N4',
    kanji: '祖',
    onyomi: 'ソ (so)',
    kunyomi: '-',
    meaningUz: 'Ajdod, bobo (Ancestor, founder)',
    strokeCount: 9,
    examples: [
      {
        word: '祖父',
        reading: 'そふ (Sofu)',
        meaning: 'Bobom',
      },
      {
        word: '祖母',
        reading: 'そぼ (Sobo)',
        meaning: 'Buvim',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_49_泳',
    level: 'N4',
    kanji: '泳',
    onyomi: 'エイ (ei)',
    kunyomi: 'およ・ぐ (oyo-gu)',
    meaningUz: 'Suzmoq (Swim)',
    strokeCount: 8,
    examples: [
      {
        word: '泳ぐ',
        reading: 'およぐ (Oyogu)',
        meaning: 'Suzmoq',
      },
      {
        word: '水泳',
        reading: 'すいえい (Suiei)',
        meaning: 'Suzish sporti',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_50_拾',
    level: 'N4',
    kanji: '拾',
    onyomi: 'シュウ, ジュウ (shuu, juu)',
    kunyomi: 'ひろ・う (hiro-u)',
    meaningUz: 'Terib olmoq, topib olmoq (Pick up, find)',
    strokeCount: 9,
    examples: [
      {
        word: '拾う',
        reading: 'ひろう (Hirou)',
        meaning: 'Terib olmoq',
      },
      {
        word: '拾得物',
        reading: 'しゅうとくぶつ (Shuutokubutsu)',
        meaning: 'Topilma buyum',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_51_連',
    level: 'N4',
    kanji: '連',
    onyomi: 'レン (ren)',
    kunyomi: 'つ・れる, つら・なる (tsu-reru, tsura-naru)',
    meaningUz: 'Birga olib bormoq, ulanmoq (Connect, lead)',
    strokeCount: 10,
    examples: [
      {
        word: '連れて行く',
        reading: 'つれていく (Tsureteiku)',
        meaning: 'Olib bormoq',
      },
      {
        word: '連絡',
        reading: 'れんらく (Renraku)',
        meaning: 'Aloqa',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_52_練',
    level: 'N4',
    kanji: '練',
    onyomi: 'レン (ren)',
    kunyomi: 'ね・る (ne-ru)',
    meaningUz: 'Mashq qilmoq, charxlamoq (Practice, train)',
    strokeCount: 14,
    examples: [
      {
        word: '練習',
        reading: 'れんしゅう (Renshuu)',
        meaning: 'Mashq',
      },
      {
        word: '訓練',
        reading: 'くんれん (Kunren)',
        meaning: 'Trenirovka',
      },
    ],
  },
  {
    id: 'kanji_n4_b2_53_線',
    level: 'N4',
    kanji: '線',
    onyomi: 'セン (sen)',
    kunyomi: 'すじ (suji)',
    meaningUz: "Chiziq, yo'nalish (Line, track)",
    strokeCount: 15,
    examples: [
      {
        word: '線',
        reading: 'せん (Sen)',
        meaning: 'Chiziq',
      },
      {
        word: '新幹線',
        reading: 'しんかんせん (Shinkansen)',
        meaning: 'Tezyurar poyezd',
      },
    ],
  },
];
