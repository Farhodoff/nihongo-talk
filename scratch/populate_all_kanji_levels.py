import json

n5_kanji = [
    ("kanji_n5_sun", "N5", "日", "ニチ (nichi), ジツ (jitsu)", "ひ (hi), び (bi), か (ka)", "Quyosh, Kun (Sun, Day)", 4, [("日本", "にほん (Nihon)", "Yaponiya"), ("日曜日", "にちようび (Nichiyoubi)", "Yakshanba")]),
    ("kanji_n5_moon", "N5", "月", "ゲツ (getsu), ガツ (gatsu)", "つき (tsuki)", "Oy, Oygoh (Moon, Month)", 4, [("今月", "こんげつ (Kongetsu)", "Bu oy"), ("月曜日", "げつようび (Getsuyoubi)", "Dushanba")]),
    ("kanji_n5_tree", "N5", "木", "モク (moku), ボク (boku)", "き (ki)", "Daraxt, Yog'och (Tree, Wood)", 4, [("木曜日", "もくようび (Mokuyoubi)", "Payshanba"), ("大木", "たいぼく (Taiboku)", "Katta daraxt")]),
    ("kanji_n5_fire", "N5", "火", "カ (ka)", "ひ (hi), ほ (ho)", "Olov, Olovli (Fire)", 4, [("火曜日", "かようび (Kayoubi)", "Seshanba"), ("花火", "はなび (Hanabi)", "Mushak / Mushakbozlik")]),
    ("kanji_n5_water", "N5", "水", "スイ (sui)", "みず (mizu)", "Suv (Water)", 4, [("水曜日", "すいようび (Suiyoubi)", "Chorshanba"), ("水泳", "すいえい (Suiei)", "Suzish")]),
    ("kanji_n5_gold", "N5", "金", "キン (kin), コン (kon)", "かね (kane), かな (kana)", "Oltin, Pul, Juma (Gold, Money)", 8, [("お金", "おかね (Okane)", "Pul"), ("金曜日", "きんようび (Kinyoubi)", "Juma")]),
    ("kanji_n5_soil", "N5", "土", "ド (do), ト (to)", "つち (tsuchi)", "Tuproq, Yer, Shanba (Soil, Earth)", 3, [("土曜日", "どようび (Doyoubi)", "Shanba"), ("土地", "とち (Tochi)", "Yer maydoni")]),
    ("kanji_n5_mountain", "N5", "山", "サン (san), セン (sen)", "やま (yama)", "Tog' (Mountain)", 3, [("富士山", "ふじさん (Fujisan)", "Fuji tog'i"), ("山登り", "やまのぼり (Yamanobori)", "Tog'ga chiqish")]),
    ("kanji_n5_river", "N5", "川", "セン (sen)", "かわ (kawa)", "Daryo (River)", 3, [("ナイル川", "ないるがわ (Nairugawa)", "Nil daryosi"), ("川上", "かわかみ (Kawakami)", "Daryo yuqorisi")]),
    ("kanji_n5_field", "N5", "田", "デン (den)", "た (ta)", "Guruch dalasi (Rice Field)", 5, [("田んぼ", "たんぼ (Tanbo)", "Guruch dalasi"), ("山田さん", "やまださん (Yamada-san)", "Yamada janoblari")]),
    ("kanji_n5_person", "N5", "人", "ジン (jin), ニン (nin)", "ひと (hito)", "Odam, Inson (Person)", 2, [("日本人", "にほんじん (Nihonjin)", "Yapon yigit/qizi"), ("三人", "さんにん (Sannin)", "Uch kishi")]),
    ("kanji_n5_mouth", "N5", "口", "コウ (kou), ク (ku)", "くち (kuchi)", "Og'iz, Kirish joyi (Mouth, Entrance)", 3, [("入口", "いりぐち (Iriguchi)", "Kirish eshigi"), ("出口", "でぐち (Deguchi)", "Chiqish eshigi")]),
    ("kanji_n5_car", "N5", "車", "シャ (sha)", "くるま (kuruma)", "Mashina, G'ildirak (Car, Wheel)", 7, [("電車", "でんしゃ (Densha)", "Poyezd / Elektrчка"), ("自動車", "じどうしゃ (Jidousha)", "Avtomobil")]),
    ("kanji_n5_gate", "N5", "門", "モン (mon)", "かど (kado)", "Darvoza (Gate)", 8, [("正門", "せいもん (Seimon)", "Asosiy darvoza"), ("専門", "せんもん (Senmon)", "Mutaxassislik")]),
    ("kanji_n5_female", "N5", "女", "ジョ (jo), ニョ (nyo)", "おんな (onna), め (me)", "Ayol, Qiz (Female, Woman)", 3, [("女性", "じょせい (Josei)", "Ayol kishi"), ("女の子", "おんなのこ (Onnanoko)", "Qiz bola")]),
    ("kanji_n5_male", "N5", "男", "ダン (dan), ナン (nan)", "おとこ (otoko)", "Erkak, Yigit (Male, Man)", 7, [("男性", "だんせい (Dansei)", "Erkak kishi"), ("男の子", "おとこのこ (Otokonoko)", "O'g'il bola")]),
    ("kanji_n5_child", "N5", "子", "シ (shi), ス (su)", "こ (ko)", "Bola (Child)", 3, [("子供", "こども (Kodomo)", "Yosh bola"), ("電子", "でんし (Denshi)", "Elektron")]),
    ("kanji_n5_learn", "N5", "学", "ガク (gaku)", "まな・ぶ (mana-bu)", "O'rganmoq, Ilm (Study, Learn)", 8, [("学生", "がくせい (Gakusei)", "Talaba / O'quvchi"), ("大学", "だいがく (Daigaku)", "Universitet")]),
    ("kanji_n5_school", "N5", "校", "コウ (kou)", "-", "Maktab (School)", 10, [("学校", "がっこう (Gakkou)", "Maktab"), ("校長", "こうちょう (Kouchou)", "Maktab direktori")]),
    ("kanji_n5_ahead", "N5", "先", "セン (sen)", "さき (saki)", "Oldin, Avval (Ahead, Previous)", 6, [("先生", "せんせい (Sensei)", "O'qituvchi / Ustoz"), ("先月", "せんげつ (Sengetsu)", "O'tgan oy")]),
    ("kanji_n5_life", "N5", "生", "セイ (sei), ショウ (shou)", "い・きる (iki-ru), う・まれる (uma-reru)", "Hayot, Tug'ilish (Life, Birth)", 5, [("生活", "せいかつ (Seikatsu)", "Turmush / Hayot"), ("誕生日", "たんじょうび (Tanjoubi)", "Tug'ilgan kun")]),
    ("kanji_n5_book", "N5", "本", "ホン (hon)", "もと (moto)", "Kitob, Asos (Book, Origin)", 5, [("山本さん", "やまもとさん (Yamamoto-san)", "Yamamoto janoblari"), ("本屋", "ほんや (Hon'ya)", "Kitob do'koni")]),
    ("kanji_n5_year", "N5", "年", "ネン (nen)", "とし (toshi)", "Yil (Year)", 6, [("今年", "ことし (Kotoshi)", "Bu yil"), ("来年", "らいねん (Rainen)", "Kelasi yil")]),
    ("kanji_n5_time", "N5", "時", "ジ (ji)", "とき (toki)", "Soat, Vaqt (Time, Hour)", 10, [("時間", "じかん (Jikan)", "Vaqt"), ("時計", "とけい (Tokei)", "Soat (buyum)")]),
    ("kanji_n5_minute", "N5", "分", "フン (fun), ブン (bun), プン (pun)", "わ・かる (waka-ru)", "Daqiqa, Bo'lish, Tushunish (Minute, Understand)", 4, [("五分", "ごふん (Gofun)", "5 daqiqa"), ("半分", "はんぶん (Hanbun)", "Yarmi")]),
    ("kanji_n5_big", "N5", "大", "ダイ (dai), タイ (tai)", "おお・きい (oo-kii)", "Katta (Big, Large)", 3, [("大人", "おとな (Otona)", "Katta yoshli inson"), ("大切", "たいせつ (Taisetsu)", "Muhim / Qadrli")]),
    ("kanji_n5_small", "N5", "小", "ショウ (shou)", "ちい・さい (chii-sai), こ (ko)", "Kichik (Small, Little)", 3, [("小学生", "しょうがくせい (Shougakusei)", "Boshlang'ich sinf o'quvchisi"), ("小川", "おがわ (Ogawa)", "Kichik soy")]),
    ("kanji_n5_middle", "N5", "中", "チュウ (chuu)", "なか (naka)", "Ichida, O'rta (Inside, Middle)", 4, [("一日中", "いちにちじゅう (Ichinichijuu)", "Kun bo'yi"), ("中国", "ちゅうごく (Chuugoku)", "Xitoy")]),
    ("kanji_n5_up", "N5", "上", "ジョウ (jou)", "うえ (ue), あ・がる (a-garu)", "Yuqori, Ustida (Up, Above)", 3, [("上手", "じょうず (Jouzu)", "Mohir / Usta"), ("屋上", "おくじょう (Okujou)", "Tom / Tom usti")]),
    ("kanji_n5_down", "N5", "下", "カ (ka), ゲ (ge)", "した (shita), さ・がる (sa-garu)", "Pastda, Ostida (Down, Below)", 3, [("下手", "へた (Heta)", "No'noq / Tajribasiz"), ("地下鉄", "ちかてつ (Chikatetsu)", "Metro")]),
    ("kanji_n5_front", "N5", "前", "ゼン (zen)", "まえ (mae)", "Oldida, Avval (Front, Before)", 9, [("午前", "ごぜん (Gozen)", "Tushdan oldin (AM)"), ("名前", "なまえ (Namae)", "Ism")]),
    ("kanji_n5_back", "N5", "後", "ゴ (go), コウ (kou)", "うしろ (ushiro), あと (ato)", "Ketida, Ortida (Back, After)", 9, [("午後", "ごご (Gogo)", "Tushdan keyin (PM)"), ("最後", "さいご (Saigo)", "Oxirgi / So'nggi")]),
    ("kanji_n5_left", "N5", "左", "サ (sa)", "ひだり (hidari)", "Chap taraf (Left)", 5, [("左手", "ひだりて (Hidarite)", "Chap qo'l"), ("左右", "さゆう (Sayuu)", "Chap va o'ng")]),
    ("kanji_n5_right", "N5", "右", "ウ (u), ユウ (yuu)", "みぎ (migi)", "O'ng taraf (Right)", 5, [("右手", "みぎて (Migite)", "O'ng qo'l"), ("右側", "みぎがわ (Migigawa)", "O'ng tomon")]),
    ("kanji_n5_east", "N5", "東", "トウ (tou)", "ひがし (higashi)", "Sharq (East)", 8, [("東京", "とうきょう (Toukyou)", "Tokio"), ("東口", "ひがしぐち (Higashiguchi)", "Sharqiy chiqish eshigi")]),
    ("kanji_n5_west", "N5", "西", "セイ (sei), サイ (sai)", "にし (nishi)", "G'arb (West)", 6, [("西洋", "せいよう (Seiyou)", "G'arbiy mamlakatlar"), ("関西", "かんさい (Kansai)", "Kansai mintaqasi")]),
    ("kanji_n5_south", "N5", "南", "ナン (nan)", "みなみ (minami)", "Janub (South)", 9, [("南米", "なんべい (Nanbei)", "Janubiy Amerika"), ("南口", "みなみぐち (Minamiguchi)", "Janubiy chiqish eshigi")]),
    ("kanji_n5_north", "N5", "北", "ホク (hoku)", "きた (kita)", "Shimol (North)", 5, [("北海道", "ほっかいどう (Hokkaidou)", "Xokkaydo adiri"), ("南北", "なんぼく (Nanboku)", "Janub va shimol")]),
    ("kanji_n5_white", "N5", "白", "ハク (haku)", "しろ・い (shiro-i)", "Oq rang (White)", 5, [("面白い", "おもしろい (Omoshiroi)", "Qiziqarli"), ("白鳥", "はくちょう (Hakuchou)", "Oqqush")]),
    ("kanji_n5_rain", "N5", "雨", "ウ (u)", "あめ (ame)", "Yomg'ir (Rain)", 8, [("大雨", "おおあめ (Ooame)", "Katta yomg'ir"), ("雨天", "うてん (Uten)", "Yomg'irli ob-havo")]),
    ("kanji_n5_heaven", "N5", "天", "テン (ten)", "あま (ama)", "Osmon, Tabiati (Heaven, Sky)", 4, [("天気", "てんき (Tenki)", "Ob-havo"), ("天才", "てんさい (Tensai)", "Dahshatli daho")]),
    ("kanji_n5_spirit", "N5", "気", "キ (ki), ケ (ke)", "-", "Havo, Kayfiyat, Ruh (Spirit, Air)", 6, [("電気", "でんき (Denki)", "Elektr"), ("気持", "きもち (Kimochi)", "Hissiyot / Kayfiyat")]),
    ("kanji_n5_electricity", "N5", "電", "デン (den)", "-", "Elektr (Electricity)", 13, [("電話", "でんわ (Denwa)", "Telefon"), ("電力", "でんりょく (Denryoku)", "Elektr quvvati")])
]

n4_kanji = [
    ("kanji_n4_meet", "N4", "会", "カイ (kai), エ (e)", "あ・う (a-u)", "Uchrashmoq, Jamiyat (Meet, Society)", 6, [("会社", "かいしゃ (Kaisha)", "Kompaniya / Firma"), ("会話", "かいわ (Kaiwa)", "Muloqot / Suhbat")]),
    ("kanji_n4_same", "N4", "同", "ドウ (dou)", "おな・じ (ona-ji)", "Bir xil, Teng (Same)", 6, [("同時", "どうじ (Douji)", "Bir vaqtning o'zida"), ("同僚", "どうりょう (Douryou)", "Hamkasb")]),
    ("kanji_n4_thing", "N4", "事", "ジ (ji), ズ (zu)", "こと (koto)", "Ish, Hodisa (Thing, Event)", 8, [("仕事", "しごと (Shigoto)", "Ish / Kasb"), ("事故", "じこ (Jiko)", "Baxtsiz hodisa")]),
    ("kanji_n4_self", "N4", "自", "ジ (ji), シ (shi)", "みずか・ら (mizuka-ra)", "O'zi, Shaxsiy (Self)", 6, [("自分", "じぶん (Jibun)", "O'zi / O'zim"), ("自由", "じゆう (Jiyuu)", "Erkinlik")]),
    ("kanji_n4_company", "N4", "社", "シャ (sha)", "やしろ (yashiro)", "Kompaniya, Ibodatxona (Company, Shrine)", 7, [("社長", "しゃちょう (Shachou)", "Kompaniya direktori"), ("jinja", "神社 (Jinja)", "Ziyoratgoh")]),
    ("kanji_n4_depart", "N4", "発", "ハツ (hatsu), ホツ (hotsu)", "-", "Chiqish, Portlash (Depart, Emit)", 9, [("出発", "しゅっぱつ (Shuppatsu)", "Jo'nab ketish"), ("発表", "はっぴょう (Happyou)", "Taqdimot / E'lon")]),
    ("kanji_n4_person_role", "N4", "者", "シャ (sha)", "もの (mono)", "Shaxs, Mutaxassis (Person)", 8, [("医者", "いしゃ (Isha)", "Shifokor / Shifokor"), ("学者", "がくしゃ (Gakusha)", "Olim")]),
    ("kanji_n4_ground", "N4", "地", "チ (chi), ジ (ji)", "-", "Yer, Hudud (Ground, Place)", 6, [("地震", "じしん (Jishin)", "Zilzila"), ("地図", "ちず (Chizu)", "Xarita")]),
    ("kanji_n4_business", "N4", "業", "ギョウ (gyou), ゴウ (gou)", "わざ (waza)", "Kasb, Sanoat (Business, Industry)", 13, [("授業", "じゅぎょう (Jugyou)", "Dars / Mashg'ulot"), ("産業", "さんぎょう (Sangyou)", "Sanoat")]),
    ("kanji_n4_direction", "N4", "方", "ホウ (hou)", "かた (kata)", "Yo'nalish, Usul, Shaxs (Direction, Method)", 4, [("方法", "ほうほう (Houhou)", "Usul / Metod"), ("書き方", "かきかた (Kakikata)", "Yozish usuli")]),
    ("kanji_n4_new", "N4", "新", "シン (shin)", "あたら・しい (atara-shii)", "Yangi (New)", 13, [("新聞", "しんぶん (Shinbun)", "Gazeta"), ("新幹線", "しんかんせん (Shinkansen)", "Tezyurar poyezd")]),
    ("kanji_n4_old", "N4", "古", "コ (ko)", "ふる・い (furu-i)", "Eski (Old)", 5, [("中古", "ちゅうこ (Chuuko)", "Ishlatilgan / Ikkinchi qo'l"), ("古代", "こだい (Kodai)", "Qadimgi zamon")]),
    ("kanji_n4_high", "N4", "高", "コウ (kou)", "たか・い (taka-i)", "Baland, Qimmat (High, Expensive)", 10, [("高校", "こうこう (Koukou)", "Yuqori maktab / Litsey"), ("最高", "さいこう (Saikou)", "Ajoyib / Oliy daraja")]),
    ("kanji_n4_cheap", "N4", "安", "アン (an)", "やす・い (yasu-i)", "Arzon, Tinch (Cheap, Peaceful)", 6, [("安心", "あんしん (Anshin)", "Xotirjamlik"), ("安全", "あんぜん (Anzen)", "Xavfsizlik")]),
    ("kanji_n4_many", "N4", "多", "タ (ta)", "おお・い (oo-i)", "Ko'p (Many, Much)", 6, [("多数", "たすう (Tasuu)", "Ko'pchilik"), ("多分", "たぶん (Tabun)", "Ehtimol")]),
    ("kanji_n4_few", "N4", "少", "ショウ (shou)", "すく・ない (suku-nai), すこ・し (suko-shi)", "Oz, Kichik (Few, Little)", 4, [("少年", "しょうねん (Shounen)", "O'smir yigit"), ("少女", "しょうじょ (Shoujo)", "O'smir qiz")]),
    ("kanji_n4_long", "N4", "長", "チョウ (chou)", "なが・い (naga-i)", "Uzun, Boshliq (Long, Leader)", 8, [("社長", "しゃちょう (Shachou)", "Direktor"), ("長男", "ちょうなん (Chounan)", "Katta o'g'il")]),
    ("kanji_n4_short", "N4", "短", "タン (tan)", "みじか・い (mijika-i)", "Kalta (Short)", 12, [("短所", "たんしょ (Tansho)", "Kamchilik"), ("短時間", "たんじかん (Tanjikan)", "Qisqa vaqt")]),
    ("kanji_n4_run", "N4", "走", "ソウ (sou)", "はし・る (hashi-ru)", "Yugurmoq (Run)", 7, [("走者", "そうしゃ (Sousha)", "Yuguruvchi"), ("爆走", "ばくそう (Bakusou)", "Shiddat bilan yugurish")]),
    ("kanji_n4_wake", "N4", "起", "キ (ki)", "お・きる (oki-ru), お・こす (o-kosu)", "Uyg'onmoq, Ro'y bermoq (Wake up, Cause)", 10, [("起床", "きしょう (Kishou)", "O'rindan turish"), ("起業", "きぎょう (Kigyou)", "Biznes boshlash")]),
    ("kanji_n4_walk", "N4", "歩", "ホ (ho), ブ (bu)", "ある・く (aru-ku)", "Piyoda yurmoq (Walk)", 8, [("散歩", "さんぽ (Sanpo)", "Aylanish / Sayr"), ("歩道", "ほどう (Hodou)", "Piyodalar yo'lagi")]),
    ("kanji_n4_stop", "N4", "止", "シ (shi)", "と・まる (toma-ru), と・める (tome-ru)", "To'xtamoq (Stop)", 4, [("中止", "ちゅうし (Chuushi)", "Bekor qilish"), ("禁止", "きんし (Kinshi)", "Taqiq")]),
    ("kanji_n4_make", "N4", "作", "サク (saku), サ (sa)", "つく・る (tsuku-ru)", "Yasamoq, Yaratmoq (Make, Create)", 7, [("作文", "さくぶん (Sakubun)", "Insho / Yozma ish"), ("作品", "さくひん (Sakuhin)", "San'at asari")]),
    ("kanji_n4_use", "N4", "使", "シ (shi)", "つか・う (tsuka-u)", "Ishlatmoq, Elchi (Use)", 8, [("大使館", "たいしかん (Taishikan)", "Elchixona"), ("使用", "しよう (Shiyou)", "Foydalanish")]),
    ("kanji_n4_borrow", "N4", "借", "シャク (shaku)", "か・りる (kari-ru)", "Qarz olmoq (Borrow)", 10, [("借金", "しゃっきん (Shakkin)", "Qarz pul"), ("借用", "しゃくよう (Shakuyou)", "Qarzga olish")]),
    ("kanji_n4_lend", "N4", "貸", "タイ (tai)", "か・す (ka-su)", "Qarz bermoq (Lend)", 12, [("賃貸", "ちんたい (Chintai)", "Ijaraga berish"), ("貸出", "かしだし (Kashidashi)", "Kutubxona kitob beringi")]),
    ("kanji_n4_return", "N4", "帰", "キ (ki)", "かえ・る (kae-ru)", "Qaytmoq (Return home)", 10, [("帰国", "きこく (Kikoku)", "Vataniga qaytish"), ("帰宅", "きたく (Kitaku)", "Uyga qaytish")]),
    ("kanji_n4_send", "N4", "送", "ソウ (sou)", "おく・る (oku-ru)", "Yubormoq, Kuzatmoq (Send)", 9, [("送信", "そうしん (Soushin)", "Xabar yuborish"), ("送金", "そうきん (Soukin)", "Pul o'tkazmasi")]),
    ("kanji_n4_cut", "N4", "切", "セツ (setsu), サイ (sai)", "き・る (ki-ru)", "Kesmoq, Qattiq (Cut)", 4, [("親切", "しんせつ (Shinsetsu)", "G'amxo'r / Mehribon"), ("切符", "きっぷ (Kippu)", "Chipta")]),
    ("kanji_n4_learn", "N4", "習", "シュウ (shuu)", "なら・う (nara-u)", "O'rganmoq, Mashq qilmoq (Learn)", 11, [("練習", "れんしゅう (Renshuu)", "Mashq / Praktika"), ("学習", "がくしゅう (Gakushuu)", "Ta'lim / O'rganish")])
]

n3_kanji = [
    ("kanji_n3_economy", "N3", "経", "ケイ (kei), キョウ (kyou)", "へ・る (he-ru)", "O'tmoq, Iqtisodiyot (Pass, Economy)", 11, [("経済", "けいざい (Keizai)", "Iqtisodiyot"), ("経験", "けいけん (Keiken)", "Tajriba")]),
    ("kanji_n3_finance", "N3", "済", "サイ (sai), ザイ (zai)", "す・む (su-mu)", "Tugamoq, Hal qilmoq (Finish, Settle)", 11, [("済む", "すむ (Sumu)", "Tugallanmoq"), ("返済", "へんさい (Hensai)", "Qarzni qaytarish")]),
    ("kanji_n3_think", "N3", "考", "コウ (kou)", "かんが・える (kanga-eru)", "O'ylamoq, Fikr (Think, Consider)", 6, [("思考", "しこう (Shikou)", "Tafakkur / Fikrlash"), ("参考", "さんこう (Sankou)", "Ma'lumot / Ma'lumotnoma")]),
    ("kanji_n3_theory", "N3", "論", "ロン (ron)", "-", "Bahs, Tezis, Nazariya (Theory, Logic)", 15, [("論文", "ろんぶん (Ronbun)", "Ilmiy maqola"), ("討論", "とうろん (Touron)", "Debat / Muhokama")]),
    ("kanji_n3_discuss", "N3", "議", "ギ (gi)", "-", "Muhokama, Majlis (Discuss)", 20, [("会議", "かいぎ (Kaigi)", "Majlis / Konferensiya"), ("議員", "ぎいん (Giin)", "Deputat / Parlament a'zosi")]),
    ("kanji_n3_select", "N3", "選", "セン (sen)", "えら・ぶ (era-bu)", "Tanlamoq, Saylamoq (Select, Choose)", 15, [("選挙", "せんきょ (Senkyo)", "Saylov"), ("選手", "せんしゅ (Senshu)", "Sportchi / O'yinchi")]),
    ("kanji_n3_raise", "N3", "挙", "キョ (kyo)", "あ・げる (a-geru)", "Ko'tarmoq, Saylov (Raise, Cite)", 10, [("挙動", "きょどう (Kyodou)", "Xulq-atvor"), ("一挙に", "いっきに (Ikki ni)", "Bir urinishda")]),
    ("kanji_n3_propose", "N3", "提", "テイ (tei)", "さ・げる (sa-geru)", "Taklif qilmoq, Ko'tarib yurmoq (Propose)", 12, [("提案", "ていあん (Teian)", "Taklif / Reja"), ("提供", "ていきょう (Teikyou)", "Taqdim etish")]),
    ("kanji_n3_plan", "N3", "案", "アン (an)", "-", "Reja, G'oya (Plan, Idea)", 10, [("案内", "あんない (Annai)", "Yo'l ko'rsatish / Ekskursiya"), ("考案", "こうあん (Kouan)", "G'oya o'ylab topish")]),
    ("kanji_n3_relation", "N3", "関", "カン (kan)", "せき (seki)", "Aloqa, Bojxona (Relation, Gate)", 14, [("関係", "かんけい (Kankei)", "Aloqa / Munosabat"), ("関税", "かんぜい (Kanzei)", "Bojxona boji")]),
    ("kanji_n3_duty", "N3", "係", "ケイ (kei)", "かか・る (kaka-ru)", "Mas'ul shaxs, Aloqador (Duty, Person in charge)", 9, [("係員", "かかりいん (Kakariin)", "Mas'ul xodim"), ("連係", "れんけい (Renkei)", "O'zaro hamkorlik")]),
    ("kanji_n3_tax", "N3", "税", "ゼイ (zei)", "-", "Soliq (Tax)", 12, [("税金", "ぜいきん (Zeikin)", "Soliq"), ("消費税", "しょうひぜい (Shouhizei)", "QQS solig'i")]),
    ("kanji_n3_right", "N3", "権", "ケン (ken), ゴン (gon)", "-", "Huquq, Vakolat (Right, Power)", 15, [("人権", "じんけん (Jinken)", "Inson huquqlari"), ("権利", "けんり (Kenri)", "Huquq")]),
    ("kanji_n3_profit", "N3", "利", "リ (ri)", "き・く (ki-ku)", "Foyda, Foiz (Profit, Advantage)", 7, [("利用", "りよう (Riyou)", "Foydalanish"), ("金利", "きんり (Kinri)", "Bank foizi")]),
    ("kanji_n3_justice", "N3", "義", "ギ (gi)", "-", "Burch, Ma'no (Justice, Meaning)", 13, [("義務", "ぎむ (Gimu)", "Burch / Majburiyat"), ("定義", "ていぎ (Teigi)", "Ta'rif / Definitsiya")]),
    ("kanji_n3_work", "N3", "務", "ム (mu)", "つと・める (tsuto-meru)", "Bajarmoq, Vazifa (Duty, Work)", 11, [("公務員", "こうむいん (Koumuin)", "Davlat xizmatchisi"), ("事務所", "じむしょ (Jimusho)", "Ofis / Idora")]),
    ("kanji_n3_total", "N3", "総", "ソウ (sou)", "-", "Umumiy, Barcha (Total, General)", 14, [("総理大臣", "そうりだいじん (Souridaijin)", "Bosh vazir"), ("総合", "そうごう (Sougou)", "Umumiy qamrov")]),
    ("kanji_n3_territory", "N3", "領", "リョウ (ryou)", "-", "Hudud, Boshqarmoq (Territory, Lead)", 14, [("大統領", "だいとうりょう (Daitouryou)", "Prezident"), ("領収書", "りょうしゅうしょ (Ryoushuusho)", "Kvitansiya / Chek")]),
    ("kanji_n3_government", "N3", "府", "フ (fu)", "-", "Prefektura, Hukumat (Government)", 8, [("政府", "せいふ (Seifu)", "Hukumat"), ("京都府", "きょうとふ (Kyoutofu)", "Kioto prefekturasi")]),
    ("kanji_n3_prefecture", "N3", "県", "ケン (ken)", "-", "Viloyat, Prefektura (Prefecture)", 9, [("県庁", "けんちょう (Kenchou)", "Viloyat hokimiyati"), ("青森県", "あおもりけん (Aomoriken)", "Aomori prefekturasi")]),
    ("kanji_n3_city", "N3", "市", "シ (shi)", "いち (ichi)", "Shahar, Bozor (City, Market)", 5, [("市長", "しちょう (Shichou)", "Hokim / Mayor"), ("市民", "しみん (Shimin)", "Shahar fuqarosi")]),
    ("kanji_n3_ward", "N3", "区", "ク (ku)", "-", "Tuman, Hudud (Ward, District)", 4, [("区役所", "くやくしょ (Kuyakusho)", "Tuman hokimiyati"), ("区分", "くぶん (Kubun)", "Tasniflash")]),
    ("kanji_n3_village", "N3", "村", "ソン (son)", "むら (mura)", "Qishloq (Village)", 7, [("村長", "そんちょう (Sonchou)", "Qishloq oqsoqoli"), ("農村", "のうそん (Nouson)", "Qishloq xo'jalik mintaqasi")]),
    ("kanji_n3_check", "N3", "査", "サ (sa)", "-", "Tekshiruv, Tergov (Check, Investigate)", 9, [("調査", "ちょうさ (Chousa)", "Tadqiqot / So'rovnoma"), ("検査", "けんさ (Kensa)", "Tibbiy / Texnik tekshiruv")]),
    ("kanji_n3_politics", "N3", "政", "セイ (sei), ショウ (shou)", "まつりごと (matsurigoto)", "Siyosat (Politics)", 9, [("政治", "せいじ (Seiji)", "Siyosat"), ("政党", "せいとう (Seitou)", "Siyosiy partiya")])
]

n2_kanji = [
    ("kanji_n2_outline", "N2", "概", "ガイ (gai)", "-", "Umumiylik, Konsept (Outline, General)", 14, [("概要", "がいよう (Gaiyou)", "Qisqacha konspekt / Sharh"), ("概念", "がいねん (Gainen)", "Tushuncha / Konsepsiya")]),
    ("kanji_n2_abridge", "N2", "略", "リャク (ryaku)", "-", "Qisqacha, Reja (Abridge, Strategy)", 11, [("省略", "しょうりゃク (Shouryaku)", "Qisqartirish / Tushirib qoldirish"), ("戦略", "せんりゃく (Senryaku)", "Strategiya")]),
    ("kanji_n2_obstacle", "N2", "障", "ショウ (shou)", "さわ・わる (sawa-waru)", "To'siq, G'ov (Obstacle, Harm)", 14, [("障害", "しょうがい (Shougai)", "Nogironlik / To'siq"), ("保障", "ほしょう (Hoshou)", "Kafolat")]),
    ("kanji_n2_harm", "N2", "害", "ガイ (gai)", "-", "Ziyon, Zarar (Harm, Damage)", 10, [("被害", "ひがい (Higai)", "Zarar / Talafot"), ("公害", "こうがい (Kougai)", "Atrof-muhit ifloslanishi")]),
    ("kanji_n2_expand", "N2", "拡", "カク (kaku)", "ひろ・げる (hiro-geru)", "Kengaytirmoq (Expand, Enlarge)", 8, [("拡大", "かくだい (Kakudai)", "Kengaytirish / Masshtablashtirish"), ("拡張", "かくちょう (Kakuchou)", "Kengaytma / Rivojlantirish")]),
    ("kanji_n2_shrink", "N2", "縮", "シュク (shuku)", "ちぢ・む (chiji-mu)", "Qisqartirmoq (Shrink, Reduce)", 17, [("縮小", "しゅくしょう (Shukushou)", "Qisqartirish"), ("圧縮", "あっしゅく (Asshuku)", "Siqish / Arxivlash")]),
    ("kanji_n2_suppress", "N2", "抑", "ヨク (yoku)", "おさ・える (osa-eru)", "Bosmoq, Tiymoq (Suppress, Control)", 7, [("抑制", "よくせい (Yokusei)", "Jilovlash / Boshqarish"), ("抑圧", "よくあつ (Yokuatsu)", "Tazyiq / Zulm")]),
    ("kanji_n2_urge", "N2", "促", "ソク (soku)", "うなが・す (unaga-su)", "Undamoq, Tezlatmoq (Urge, Stimulate)", 9, [("促進", "そくしん (Sokushin)", "Rivojlantirishni tezlatish"), ("促す", "うながす (Unagasu)", "Chaqirmoq / Undamoq")]),
    ("kanji_n2_advise", "N2", "勧", "カン (kan)", "すす・める (susu-meru)", "Taklif qilmoq, Maslahat (Advise, Encourage)", 13, [("勧誘", "かんゆう (Kanyuu)", "Taklif qilish / Da'vat"), ("勧告", "かんこく (Kankoku)", "Tavsiya / Ogohlantirish")]),
    ("kanji_n2_fear", "N2", "恐", "キョウ (kyou)", "おそ・ろしい (oso-roshii)", "Qo'rqinch, Xavf (Fear, Dread)", 10, [("恐縮", "きょうしゅく (Kyoushuku)", "Uzr so'rash / Minnatdorchilik"), ("恐竜", "きょうりゅう (Kyouryuu)", "Dinozavr")]),
    ("kanji_n2_prudent", "N2", "慎", "シン (shin)", "つつし・む (tsutsushi-mu)", "Ehtiyotkorlik (Prudent, Discreet)", 13, [("慎重", "しんちょう (Shinchou)", "Ehtiyotkor / Bosiq"), ("不慎", "ふしん (Fushin)", "Ehtiyotsizlik")]),
    ("kanji_n2_loosen", "N2", "緩", "カン (kan)", "ゆる・む (yuru-mu)", "Bo'shashmoq, Yumshatmoq (Loosen, Relax)", 15, [("緩和", "かんわ (Kanwa)", "Yumshatish / Yengillashtirish"), ("緩慢", "かんまん (Kanman)", "Sekinlik")]),
    ("kanji_n2_intense", "N2", "激", "ゲキ (geki)", "はげ・しい (hage-shii)", "Shiddatli, Qattiq (Intense, Violent)", 16, [("感激", "かんげき (Kangeki)", "Tolqinlanish"), ("激増", "げきぞう (Gekizou)", "Keskin ko'payish")]),
    ("kanji_n2_fall", "N2", "陥", "カン (kan)", "おち・いる (ochi-iru)", "Tuzoqqa tushmoq (Fall into, Cave in)", 10, [("陥没", "かんぼつ (Kanbotsu)", "O'pirilish / Cho'kish"), ("欠陥", "けっかん (Kekkan)", "Kamchilik / Nuqson")]),
    ("kanji_n2_melt", "N2", "融", "ユウ (yuu)", "-", "Erish, Moliya (Melt, Finance)", 16, [("金融", "きんゆう (Kinyuu)", "Moliya / Bank tizimi"), ("融通", "ゆうずう (Yuuzuu)", "Moslashuvchanlik")]),
    ("kanji_n2_exchange", "N2", "換", "カン (kan)", "か・える (ka-eru)", "Almashtirmoq (Exchange, Swap)", 12, [("交換", "こうかん (Koukan)", "Almashtirish / Ayirboshlash"), ("変換", "へんかん (Henkan)", "O'zgartirish")]),
    ("kanji_n2_replace", "N2", "替", "タイ (tai)", "か・える (ka-eru)", "Qaytadan almashtirmoq (Replace)", 12, [("両替", "りょうがえ (Ryougae)", "Valyuta ayirboshlash"), ("着替え", "きがえ (Kigae)", "Kiyim almashtirish")]),
    ("kanji_n2_discard", "N2", "棄", "キ (ki)", "す・てる (su-teru)", "Tashlab yubormoq (Discard, Abandon)", 13, [("破棄", "はき (Haki)", "Shartnomani bekor qilish"), ("棄権", "きけん (Kiken)", "Ovoz berishdan voz kechish")]),
    ("kanji_n2_evade", "N2", "避", "ヒ (hi)", "さ・ける (sake-ru)", "Qochmoq, Chetlanmoq (Evade, Avoid)", 16, [("避難", "ひなん (Hinan)", "Evakuatsiya qilish"), ("回避", "かいひ (Kaihi)", "Chetlab o'tish")]),
    ("kanji_n2_thwart", "N2", "阻", "ソ (so)", "はば・む (haba-mu)", "To'smoq (Thwart, Block)", 8, [("阻止", "そし (Soshi)", "To'sqinlik qilish"), ("阻害", "そがい (Sogai)", "Rivojlanishga g'ov bo'lish")])
]

n1_kanji = [
    ("kanji_n1_anonymous", "N1", "匿", "トク (toku)", "かく・す (kaku-su)", "Yashirin, Anonim (Anonymous, Hide)", 10, [("匿名", "とくめい (Tokumei)", "Anonim / Maxfiy ism"), ("隠匿", "いんとく (Intoku)", "Yashirish / Bekitish")]),
    ("kanji_n1_vast", "N1", "茫", "ボウ (bou)", "-", "Cheksiz, Xira (Vast, Dim)", 8, [("茫然", "ぼうぜん (Bouzen)", "Lol qolmoq / Hayratda turish"), ("茫々", "ぼうぼう (Boubou)", "Cheksiz yaxta")]),
    ("kanji_n1_desert", "N1", "漠", "バク (baku)", "-", "Sahro, Noaniq (Desert, Vague)", 13, [("砂漠", "さばく (Sabaku)", "Sahro / Cho'l"), ("漠然", "ばくぜん (Bakuzen)", "Noaniq / G'ira-shira")]),
    ("kanji_n1_evil", "N1", "弊", "ヘイ (hei)", "-", "Yomon odat, Kompaniyamiz (Evil, Our company)", 15, [("弊害", "へいがい (Heigai)", "Zararli oqibat"), ("弊社", "へいしゃ (Heisha)", "Bizning kompaniyamiz (Kamtarona)")]),
    ("kanji_n1_warp", "N1", "歪", "ワイ (wai)", "ひず・む (hizu-mu), ゆが・む (yuga-mu)", "Qiyshaymoq, Burmoq (Warp, Distort)", 9, [("歪曲", "わいきょく (Waikyoku)", "Haqiqatni buzip ko'rsatish"), ("歪み", "ひずみ (Hizumi)", "Deformatsiya")]),
    ("kanji_n1_ridicule", "N1", "嘲", "チョウ (chou)", "あざけ・る (azake-ru)", "Masxara qilmoq (Ridicule, Mock)", 15, [("嘲笑", "ちょうしょう (Choushou)", "Ustidan kulish"), ("嘲る", "あざける (Azakeru)", "Mazax qilmoq")]),
    ("kanji_n1_play_with", "N1", "弄", "ロウ (rou)", "もてあそ・ぶ (moteaso-bu)", "O'ynashmoq, Ustidan kulmoq (Play with, Manipulate)", 7, [("翻弄", "ほんろう (Honrou)", "O'yinchoq qilish"), ("弄ぶ", "もてあそぶ (Moteasobu)", "Hissiyotlar bilan o'ynashmoq")]),
    ("kanji_n1_scorn", "N1", "蔑", "ベツ (betsu)", "さげす・む (sagesu-mu)", "Mensimaslik (Scorn, Despise)", 14, [("蔑視", "べっし (Besshi)", "Patsga urib qarash"), ("軽蔑", "けいべつ (Keibetsu)", "Nafrat / Mensimaslik")]),
    ("kanji_n1_haughty", "N1", "傲", "ゴウ (gou)", "おご・る (ogo-ru)", "Kibrli, Mansabparast (Haughty, Proud)", 13, [("傲慢", "ごうまん (Gouman)", "Kibrli / Takabbur"), ("傲慢無礼", "ごうまんぶれい (Goumanburei)", "O'ta odabsiz va kibrli")]),
    ("kanji_n1_arrogant", "N1", "慢", "マン (man)", "-", "Manmanlik, Sekin (Arrogant, Chronic)", 14, [("自慢", "じまん (Jiman)", "Maqtanchoqlik"), ("慢性", "まんせい (Mansei)", "Surunkali kasallik")]),
    ("kanji_n1_hesitate1", "N1", "躊", "チュウ (chuu)", "tamera-u", "Ikkilanish (Hesitate)", 21, [("躊躇", "ちゅうちょ (Chuucho)", "Ikkilanish / Ikkilanib turish")]),
    ("kanji_n1_hesitate2", "N1", "躇", "チョ (cho)", "tamera-u", "Ikkilanish (Hesitate)", 19, [("躊躇う", "ためらう (Tamerau)", "Ikkilanmoq")]),
    ("kanji_n1_obscure", "N1", "曖", "アイ (ai)", "-", "Noaniq, Xira (Obscure, Vague)", 17, [("曖昧", "あいまい (Aimai)", "Noaniq / Ikkitaraflama")]),
    ("kanji_n1_dark", "N1", "昧", "マイ (mai), バイ (bai)", "くら・い (kura-i)", "Xira, Qorong'u (Dark, Foolish)", 9, [("三昧", "ざんまい (Zanmai)", "Haddan tashqari berilish")]),
    ("kanji_n1_willful", "N1", "恣", "シ (shi)", "ほしいまま (hoshiimama)", "O'z bilganicha, Erkin (Willful, Arbitrary)", 10, [("恣意", "しい (Shii)", "Subyektivlik / O'zboshimchalik")]),
    ("kanji_n1_harsh", "N1", "苛", "カ (ka)", "いら・だつ (ira-datsu)", "Qattiq, Asabiy (Harsh, Severe)", 8, [("苛酷", "かこく (Kakoku)", "O'ta shafqatsiz sharoit"), ("苛立ち", "いらだち (Iradachi)", "Jahli chiqish")]),
    ("kanji_n1_taboo", "N1", "忌", "キ (ki)", "い・む (i-mu)", "Nafratlanmoq, Tabu (Taboo, Avoid)", 7, [("忌避", "きひ (Kihi)", "Rad etish / Qochish"), ("禁忌", "きんき (Kinki)", "Tibbiy man etilgan holat")]),
    ("kanji_n1_dread", "N1", "憚", "タン (tan)", "はばか・る (habaka-ru)", "Cho'chimoq, Tortinmoq (Dread, Hesitate)", 15, [("憚る", "はばかる (Habakaru)", "Tortinmoq / Cho'chimoq")]),
    ("kanji_n1_fabricate", "N1", "捏", "ネツ (netsu)", "ね・る (ne-ru)", "Soxtalashtirmoq (Fabricate, Knead)", 10, [("捏造", "ねつぞう (Netsuzou)", "Soxtalashtirish / Uydirma")]),
    ("kanji_n1_slash", "N1", "斬", "ザン (zan), サン (san)", "き・る (ki-ru)", "Qilich bilan kesmoq (Slash)", 11, [("斬新", "ざんしん (Zanshin)", "O'ta noodatiy va yangicha"), ("斬首", "ざんしゅ (Zanshu)", "Boshni chopish")])
]

all_kanji_raw = n5_kanji + n4_kanji + n3_kanji + n2_kanji + n1_kanji

print(f"Total authentic Kanji collected across N5-N1: {len(all_kanji_raw)}")

formatted_kanji = []
for k_id, lvl, kanji, onyomi, kunyomi, meaning, stroke, ex_list in all_kanji_raw:
    examples = []
    for w, r, m in ex_list:
        examples.append({ "word": w, "reading": r, "meaning": m })
    obj = {
        "id": k_id,
        "level": lvl,
        "kanji": kanji,
        "onyomi": onyomi,
        "kunyomi": kunyomi,
        "meaningUz": meaning,
        "strokeCount": stroke,
        "examples": examples
    }
    formatted_kanji.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

kanji_ts_code = "export const JLPT_KANJI_DATA: JlptKanjiItem[] = [\n" + ",\n".join(formatted_kanji) + "\n];\n"

# Now let's update jlptGrammarKanji.ts
with open('src/data/jlptGrammarKanji.ts') as f:
    text = f.read()

kanji_part_idx = text.find("export const JLPT_KANJI_DATA")
grammar_part = text[:kanji_part_idx]

full_new_ts = grammar_part + kanji_ts_code

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(full_new_ts)

print("Successfully updated jlptGrammarKanji.ts with 110+ official Kanji items across N5, N4, N3, N2, and N1!")
