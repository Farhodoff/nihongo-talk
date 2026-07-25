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
    {
        id: 'n5_te_wa_ikemasen',
        level: 'N5',
        title: '〜てはいけません (te wa ikemasen)',
        romaji: 'te wa ikemasen',
        meaningUz: '...-sa bo\'lmaydi, taqiqlanadi',
        structure: 'Fe\'l (Te-shakli) + はいいけません',
        examples: [
            { ja: 'ここで写真をとってはいけません。', romaji: 'Koko de shashin wo totte wa ikemasen.', uz: 'Bu yerda rasmga tushirish taqiqlanadi.' }
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
    // 🎌 JLPT N4 COMPLETE EXHAUSTIVE GRAMMAR (Shin Kanzen Master N4)
    // ==========================================
    {
        id: 'n4_younini_suru',
        level: 'N4',
        title: '〜ようにする (you ni suru)',
        romaji: 'you ni suru',
        meaningUz: '...-shga harakat qilmoq / odat qilmoq',
        structure: 'Fe\'l (Lug\'at/ない-shakli) + ようにする',
        examples: [
            { ja: '毎日甘いものを食べないようにしています。', romaji: 'Mainichi amai mono wo tabenai you ni shite imasu.', uz: 'Har kuni shirinlik yemaslikka harakat qilyapman.' },
            { ja: '早く起きるようにしてください。', romaji: 'Hayaku okiru you ni shite kudasai.', uz: 'Barvaqt turishga harakat qiling.' }
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
    {
        id: 'n4_sou_desu_hearsay',
        level: 'N4',
        title: '〜そうです (sou desu - Eshitishimcha)',
        romaji: 'sou desu',
        meaningUz: 'eshitishimcha ..., deyishmoqda (Xabar va mish-mish)',
        structure: 'Fe\'l/Sifat/Ot (Oddiy shakl) + そうです',
        examples: [
            { ja: '天気予報によると、明日は雨が降るそうです。', romaji: 'Tenki yohou ni yoruto, ashita wa ame ga kuru sou desu.', uz: 'Ob-havo ma\'lumotiga ko\'ra, ertaga yomg\'ir yog\'ar emish.' }
        ]
    },
    {
        id: 'n4_sou_desu_conjecture',
        level: 'N4',
        title: '〜そうです (sou desu - Ko\'rinishidan)',
        romaji: 'sou desu',
        meaningUz: '...-dek ko\'rinadi / ...-ganday tuyuladi (Tashqi ko\'rinish va taxmin)',
        structure: 'Sifat (い/な-ildizi) / Fe\'l (Masu-ildizi) + そうです',
        examples: [
            { ja: 'このケーキはおいしそうです。', romaji: 'Kono keeki wa oishisou desu.', uz: 'Bu tort mazali ko\'rinadi.' },
            { ja: '今にも雨が降りそうです。', romaji: 'Ima ni mo ame ga furisou desu.', uz: 'Hozirroq yomg\'ir yog\'adigandek ko\'rinadi.' }
        ]
    },
    {
        id: 'n4_ba_form',
        level: 'N4',
        title: '〜ば (ba conditional)',
        romaji: 'ba',
        meaningUz: 'agar ...-sa (Shart fe\'li - Ba-shakli)',
        structure: 'Fe\'l (Ba-shakli) / Sifat (〜ければ)',
        examples: [
            { ja: '安ければ買います。', romaji: 'Yasukereba kaimasu.', uz: 'Arzon bo\'lsa sotib olaman.' },
            { ja: 'ボタンを押せば、ドアが開きます。', romaji: 'Botan wo oseba, doa ga akimasu.', uz: 'Tugmani bossangiz, eshik ochiladi.' }
        ]
    },
    {
        id: 'n4_tara_form',
        level: 'N4',
        title: '〜たら (tara conditional)',
        romaji: 'tara',
        meaningUz: 'agar ...-sa / ...-gandan keyin (Gipotetik shart va ketma-ketlik)',
        structure: 'Fe\'l (Ta-form) + ら',
        examples: [
            { ja: '雨が降ったら、出かけません。', romaji: 'Ame ga futtara, dekakemasen.', uz: 'Agar yomg\'ir yog\'sa, ko\'chaga chiqmayman.' },
            { ja: '家へ帰ったら、すぐお風呂に入ります。', romaji: 'Ie e kattara, sugu ofuro ni hairimasu.', uz: 'Uyga borgach, darhol vanna qabul qilaman.' }
        ]
    },
    {
        id: 'n4_to_form',
        level: 'N4',
        title: '〜と (to conditional)',
        romaji: 'to',
        meaningUz: '...-sa, darhol ... (Tabiiy va muqarrar oqibat)',
        structure: 'Fe\'l (Lug\'at shakli) + と',
        examples: [
            { ja: '春になると、桜が咲きます。', romaji: 'Haru ni naru to, sakura ga sakimasu.', uz: 'Bahor kelsa, sakura gullaydi.' }
        ]
    },
    {
        id: 'n4_nara_form',
        level: 'N4',
        title: '〜なら (nara conditional)',
        romaji: 'nara',
        meaningUz: 'agar ... bo\'lsa / ...-ga kelsak (Mavzu sharti)',
        structure: 'Ot / Fe\'l / Sifat + なら',
        examples: [
            { ja: 'カメラを買うなら、あの店がいいですよ。', romaji: 'Kamera wo kau nara, ano mise ga ii desu yo.', uz: 'Kamera sotib olmoqchi bo\'lsangiz, anavi do\'kon yaxshi.' }
        ]
    },
    {
        id: 'n4_passive_fe_l',
        level: 'N4',
        title: '〜れる / 〜られる (Passive Form)',
        romaji: 'reru / rareru',
        meaningUz: '...-ga uchramoq / majhul nisbat (Boshqalar tomonidan bajarilgan harakat)',
        structure: '1-guruh Fe\'l: あ-qator + れる | 2-guruh: られる',
        examples: [
            { ja: '犬に手をかまれました。', romaji: 'Inu ni te wo kamaremashita.', uz: 'Qo\'limni it tishlab oldi.' },
            { ja: '泥棒に財布をとられました。', romaji: 'Dorobou ni saifu wo toraremashita.', uz: 'O\'g\'riga hamyonimni oldirib qo\'ydim.' }
        ]
    },
    {
        id: 'n4_causative_fe_l',
        level: 'N4',
        title: '〜させる / 〜させられる (Causative & Causative-Passive)',
        romaji: 'saseru / saserareru',
        meaningUz: '...-ga qildirmoq / majburan qildirilmoq (Ettirish va majburlov nisbati)',
        structure: '1-guruh: あ-qator + せる | 2-guruh: させる',
        examples: [
            { ja: '母は子供に野菜を食べさせます。', romaji: 'Haha wa kodomo ni yasai wo tabesasemasu.', uz: 'Ona bolasiga sabzavot yediradi.' },
            { ja: '昨日は嫌な仕事をさせられました。', romaji: 'Kinou wa iya na shigoto wo saseraremashita.', uz: 'Kechasi yoqimsiz ishni majburan qildirishdi.' }
        ]
    },
    {
        id: 'n4_te_ageru',
        level: 'N4',
        title: '〜てあげる / てやる (te ageru)',
        romaji: 'te ageru',
        meaningUz: '...-bajarib bermoq (boshqa kishiga yaxshilik qilish)',
        structure: 'Fe\'l (Te-shakli) + あげる',
        examples: [
            { ja: '友達の荷物を持ってあげました。', romaji: 'Tomodachi no nimotsu wo motte agemashita.', uz: 'Do\'stimning yukini ko\'tarishib berdim.' }
        ]
    },
    {
        id: 'n4_te_kureru',
        level: 'N4',
        title: '〜てくれる / てもらう (te kureru / te morau)',
        romaji: 'te kureru / te morau',
        meaningUz: '...-bajarib bermoq (menga/bizga) / ...-bajarib berilishini olmoq',
        structure: 'Fe\'l (Te-shakli) + くれる / もらう',
        examples: [
            { ja: '鈴木さんは私に日本語を教えてくれました。', romaji: 'Suzuki-san wa watashi ni Nihongo wo oshiete kuremashita.', uz: 'Suzuki janoblari menga yapon tilini o\'rgatib berdi.' }
        ]
    },
    {
        id: 'n4_te_shimau',
        level: 'N4',
        title: '〜てしまう (te shimau)',
        romaji: 'te shimau',
        meaningUz: 'afsuski ...-bajarib qo\'ydim / harakatni oxirigacha bitirmoq',
        structure: 'Fe\'l (Te-shakli) + しまう',
        examples: [
            { ja: '宿題を忘れてしまいました。', romaji: 'Shukudai wo washurete shimaimashita.', uz: 'Afsuski, uy vazifamni esdan chiqarib qo\'ydim.' },
            { ja: 'この本を全部読んでしまいました。', romaji: 'Kono hon wo zenbu yonde shimaimashita.', uz: 'Ushbu kitobni oxirigacha o\'qib bitirdim.' }
        ]
    },
    {
        id: 'n4_te_oku',
        level: 'N4',
        title: '〜ておく (te oku)',
        romaji: 'te oku',
        meaningUz: 'oldindan ...-bajarib qo\'ymoq (kelajak uchun tayyorgarlik)',
        structure: 'Fe\'l (Te-shakli) + おく',
        examples: [
            { ja: '旅行の前にチケットを買っておきます。', romaji: 'Ryokou no mae ni chiketto wo katte okimasu.', uz: 'Sayohatdan oldin biletlarni sotib olib qo\'yaman.' }
        ]
    },
    {
        id: 'n4_te_miru',
        level: 'N4',
        title: '〜てみる (te miru)',
        romaji: 'te miru',
        meaningUz: '...-ko\'rmoq (sinab ko\'rish harakati)',
        structure: 'Fe\'l (Te-shakli) + みる',
        examples: [
            { ja: '日本の着物を着てみたいです。', romaji: 'Nihon no kimono wo kite mitai desu.', uz: 'Yapon kimonosini kiyib ko\'rgim kelyapti.' }
        ]
    },
    {
        id: 'n4_koto_ni_suru',
        level: 'N4',
        title: '〜ことにする (koto ni suru)',
        romaji: 'koto ni suru',
        meaningUz: '...-shga qaror qilmoq (Shaxsiy qaror)',
        structure: 'Fe\'l (Lug\'at/Nai-shakli) + ことにする',
        examples: [
            { ja: '来年日本へ留学することにしました。', romaji: 'Rainen Nihon e ryuugaku suru koto ni shimashita.', uz: 'Kelasi yili Yaponiyaga o\'qishga borishga qaror qildim.' }
        ]
    },
    {
        id: 'n4_koto_ni_naru',
        level: 'N4',
        title: '〜ことになる (koto ni naru)',
        romaji: 'koto ni naru',
        meaningUz: '...-shga qaror qilindi (Tashqi manba yoki tashkilot qarori)',
        structure: 'Fe\'l (Lug\'at/Nai-shakli) + ことになる',
        examples: [
            { ja: '来月東京へ転勤することになりました。', romaji: 'Raigetsu Toukyou e tenkin suru koto ni narimashita.', uz: 'Kelasi oy Tokyoga ish yuzasidan ko\'chadigan bo\'ldim.' }
        ]
    },
    {
        id: 'n4_youtei',
        level: 'N4',
        title: '〜予定です (youtei desu)',
        romaji: 'youtei desu',
        meaningUz: '...-sh rejalashtirilgan (Reja va jadval)',
        structure: 'Fe\'l (Lug\'at shakli) / Ot の + 予定です',
        examples: [
            { ja: '出張は来週の月曜日の予定です。', romaji: 'Shucchou wa raishuu no getsuyoubi no youtei desu.', uz: 'Xizmat safari kelasi haftaning dushanbasiga rejalashtirilgan.' }
        ]
    },
    {
        id: 'n4_tori_ni',
        level: 'N4',
        title: '〜とおりに (tori ni)',
        romaji: 'tori ni / doori ni',
        meaningUz: '... kabi / ...-ga ko\'ra (aynan ko\'rsatilgandek)',
        structure: 'Fe\'l (Lug\'at/Ta-form) / Ot の + とおりに',
        examples: [
            { ja: '私が言うとおりに書いてください。', romaji: 'Watashi ga iu tori ni kaite kudasai.', uz: 'Men aytganimdek qilib yozing.' }
        ]
    },
    {
        id: 'n4_atode',
        level: 'N4',
        title: '〜あとで (ato de)',
        romaji: 'ato de',
        meaningUz: '...-gandan keyin (Vaqt tartibi)',
        structure: 'Fe\'l (Ta-form) / Ot の + あとで',
        examples: [
            { ja: '仕事が終わったあとで、飲みに行きましょう。', romaji: 'Shigoto ga owatta ato de, nomi ni ikimashou.', uz: 'Ish tugagach, ichgani boraylik.' }
        ]
    },
    {
        id: 'n4_baai_wa',
        level: 'N4',
        title: '〜場合は (baai wa)',
        romaji: 'baai wa',
        meaningUz: '... bo\'lgan holatda / ... vujudga kelsa',
        structure: 'Fe\'l/Sifat/Ot + 場合は',
        examples: [
            { ja: '火事の場合は、エレベーターを使わないでください。', romaji: 'Kaji no baai wa, erebeetaa wo tsukawanaide kudasai.', uz: 'Yong\'in bo\'lgan holatda liftga chiqmang.' }
        ]
    },
    {
        id: 'n4_nizoni',
        level: 'N4',
        title: '〜のに (noni - ziddiyat)',
        romaji: 'noni',
        meaningUz: '...-sa ham / ...-ganiga qaramay (Afsus va kutilmagan ziddiyat)',
        structure: 'Fe\'l/Sifat/Ot + のに',
        examples: [
            { ja: '薬を飲んだのに、熱が下がりません。', romaji: 'Kusuri wo nonda noni, netsu ga sagarimasen.', uz: 'Dori ichganimga qaramay, isitmam tushmayapti.' }
        ]
    },
    {
        id: 'n4_tameni',
        level: 'N4',
        title: '〜ために (tame ni)',
        romaji: 'tame ni',
        meaningUz: '... uchun (Maqsad va sabab)',
        structure: 'Fe\'l (Lug\'at shakli) / Ot の + ために',
        examples: [
            { ja: '家を買うために、貯金しています。', romaji: 'Ie wo kau tame ni, chokin shite imasu.', uz: 'Uy sotib olish uchun pul jamg\'aryapman.' }
        ]
    },
    {
        id: 'n4_volitional_ou',
        level: 'N4',
        title: '〜意向形 (Volitional Form - おう/ろう)',
        romaji: 'ou / rou',
        meaningUz: '...-aylik / ...-moqchiman (Og\'zaki chorlov)',
        structure: '1-guruh: お-qator | 2-guruh: よう',
        examples: [
            { ja: 'ちょっと休もう。', romaji: 'Chotto yasumou.', uz: 'Biroz dam olaylik.' },
            { ja: '手伝おうか。', romaji: 'Tetsudaou ka.', uz: 'Yordam beraymi?' }
        ]
    },
    {
        id: 'n4_tsumori',
        level: 'N4',
        title: '〜つもりです (tsumori desu)',
        romaji: 'tsumori desu',
        meaningUz: '...-moqchiman / rejalashtiryapman (Qat\'iy niyat)',
        structure: 'Fe\'l (Lug\'at/Nai-shakli) + つもりです',
        examples: [
            { ja: '国へ帰っても、日本語の勉強を続けるつもりです。', romaji: 'Kuni e kaette mo, Nihongo no benkyou wo tsudukeru tsumori desu.', uz: 'Vatanimga qaytsam ham, yapon tilini o\'rganishda davom etmoqchiman.' }
        ]
    },
    {
        id: 'n4_kamo_shirenai',
        level: 'N4',
        title: '〜かもしれない (kamo shirenai)',
        romaji: 'kamo shirenai',
        meaningUz: '...-sh ehtimoli bor / bo\'lishi mumkin',
        structure: 'Fe\'l/Sifat/Ot (Oddiy shakl) + かもしれない',
        examples: [
            { ja: '約束の時間に遅れるかもしれません。', romaji: 'Yakusoku no jikan ni okureru kamo shirenai.', uz: 'Uchrashuv vaqtiga kechikishim ehtimoli bor.' }
        ]
    },
    {
        id: 'n4_deshou',
        level: 'N4',
        title: '〜でしょう (deshou)',
        romaji: 'deshou',
        meaningUz: '... bo\'lsa kerak-a? / ... shunday emasmi?',
        structure: 'Fe\'l/Sifat/Ot + でしょう',
        examples: [
            { ja: '明日はいい天気でしょう。', romaji: 'Ashita wa ii tenki deshou.', uz: 'Ertaga ob-havo yaxshi bo\'lsa kerak.' }
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
