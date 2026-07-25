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
    // ==========================================
    // 🎌 JLPT N5 COMPLETE GRAMMAR (Minna no Nihongo Lessons 1-25)
    // ==========================================
    {
        id: "n5_wa_desu",
        level: "N5",
        title: "N1 は N2 です (wa desu)",
        romaji: "N1 wa N2 desu",
        meaningUz: "N1 - N2 dir (Ego: Men talabaman / U shifokor)",
        structure: "Ot1 + は + Ot2 + です",
        examples: [
            { ja: "私は学生です。", romaji: "Watashi wa gakusei desu.", uz: "Men talabaman." },
            { ja: "サントスさんはブラジル人です。", romaji: "Santosu-san wa Burajiru-jin desu.", uz: "Santos bobi braziliyalik." }
        ]
    },
    {
        id: "n5_ja_arimasen",
        level: "N5",
        title: "N1 は N2 じゃありません (ja arimasen)",
        romaji: "N1 wa N2 ja arimasen / de wa arimasen",
        meaningUz: "N1 - N2 emas (Inkor shakli)",
        structure: "Ot1 + は + Ot2 + じゃありません / ではありません",
        examples: [
            { ja: "私は先生じゃありません。", romaji: "Watashi wa sensei ja arimasen.", uz: "Men o'qituvchi emasman." }
        ]
    },

    // ==========================================
    // 🎌 JLPT N4 EXHAUSTIVE GRAMMAR (jlpt-n4-grammar-list.pdf - 102 items)
    // ==========================================
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

    // ==========================================
    // 🎌 JLPT N3 COMPLETE GRAMMAR (Shin Kanzen Master N3)
    // ==========================================
    {
        id: "n3_bakari_ka",
        level: "N3",
        title: "〜ばかりか (bakari ka)",
        romaji: "bakari ka",
        meaningUz: "nafaqat ..., balki ... ham",
        structure: "Fe'l/Sifat/Ot + ばかりか",
        examples: [
            { ja: "彼は英語ばかりか日本語も話せます。", romaji: "Kare wa Eigo bakari ka Nihongo mo hanasemasu.", uz: "U nafaqat ingliz tilida, balki yapon tilida ham gapira oladi." }
        ]
    },
    {
        id: "n3_ni_kanshite",
        level: "N3",
        title: "〜に関して (ni kanshite)",
        romaji: "ni kanshite",
        meaningUz: "... ga oid / ... xususida",
        structure: "Ot + に関して / に関する + Ot",
        examples: [
            { ja: "この問題に関して意見を言わせてください。", romaji: "Kono mondai ni kanshite iken wo iwasete kudasai.", uz: "Ushbu masala xususida o'z fikrimni bildirishga ruxsat bering." }
        ]
    },
    {
        id: "n3_ni_yotte",
        level: "N3",
        title: "〜によって (ni yotte)",
        romaji: "ni yotte",
        meaningUz: "... ga qarab / ... tomonidan / ... tufayli",
        structure: "Ot + によって",
        examples: [
            { ja: "人によって考え方が違います。", romaji: "Hito ni yotte kangaekata ga chigaimasu.", uz: "Odamga qarab fikrlash tarzi har xil bo'ladi." }
        ]
    },

    // ==========================================
    // 🎌 JLPT N2 COMPLETE GRAMMAR (Shin Kanzen Master N2)
    // ==========================================
    {
        id: "n2_ni_chigai_nai",
        level: "N2",
        title: "〜に違いない (ni chigai nai)",
        romaji: "ni chigai nai",
        meaningUz: "shubhasiz ... / aniq ... bo'lsa kerak",
        structure: "Fe'l/Sifat/Ot + に違いない",
        examples: [
            { ja: "彼が努力したから合格したに違いない。", romaji: "Kare ga doryoku shita kara goukaku shita ni chigai nai.", uz: "U harakat qilgani uchun imtihondan o'tganiga shubha yo'q." }
        ]
    },

    // ==========================================
    // 🎌 JLPT N1 COMPLETE GRAMMAR (Nihongo Sou Matome N1)
    // ==========================================
    {
        id: "n1_zaru_wo_eta_nai",
        level: "N1",
        title: "〜ざるを得ない (zaru wo eta nai)",
        romaji: "zaru wo eta nai",
        meaningUz: "...-shga majbur bo'lmoq / boshqa chora yo'q",
        structure: "Fe'l (Nai-shakli ildizi) + ざるを得ない",
        examples: [
            { ja: "台風のため、計画を変更せざるを得ない。", romaji: "Taifu no tame, keikaku wo henkou sezaru wo etanai.", uz: "Tayfun sababli rejani o'zgartirishga majburmiz." }
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
