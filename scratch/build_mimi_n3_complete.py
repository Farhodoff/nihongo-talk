import json, re

# Comprehensive Mimi Kara Oboeru N3 Grammar List (100 items)
mimi_n3_items = [
    # Unit 1: Vaqt va vaqtinchalik harakatlar
    ("〜うちに (uchi ni)", "uchi ni", "fursat borida / ... bo'layotganida sezmay", "Fe'l (Lug'at/Nai) / Sifat / Ot + の + うちに", "若[わか]いうちにいろいろな経験[けいけん]をしなさい。", "Wakai uchi ni iroiro na keiken wo shinasai.", "Yoshlik fursati borida ko'p tajriba orttir."),
    ("〜際（に） (sai ni)", "sai ni", "... paytida / ... bo'lganda (Rasmiy)", "Fe'l (Lug'at/Ta) / Ot + の + 際（に）", "お降[お]りの際[さい]は足元[あしもと]にご注意[ちゅうい]ください。", "Oori no sai wa ashimoto ni gochuui kudasai.", "Poyezddan tushayotganda oyog'ingiz ostiga ehtiyot bo'ling."),
    ("〜たとたん（に） (ta totan ni)", "ta totan ni", "... qilgan zahotiyoq (Kutilmagan harakat)", "Fe'l (Ta-form) + とたん（に）", "窓[まど]を開[あ]けたとたん、強[つよ]い風[かぜ]が入[はい]ってきた。", "Mado wo aketa totan, tsuyoi kaze ga haitte kita.", "Oynani ochgan zahotim kuchli shamol kirib keldi."),
    ("〜かと思うと (ka to omou to)", "ka to omou to", "...-di hamki, ketidanoq ...", "Fe'l (Ta-form) + かと思うと / かと思ったら", "空[そら]が暗[くら]くなったかと思うと、雨[あめ]が降[ふ]り出[だ]した。", "Sora ga kuraku natta ka to omou to, ame ga furidashita.", "Osmon qorong'ulashdi hamki, yomg'ir yog'a boshladi."),
    ("〜か〜ないかのうちに (ka ... nai ka no uchi ni)", "ka ... nai ka no uchi ni", "... tugadimi-yo'qmi ketidanoq", "Fe'l (Lug'at) + か + Fe'l (Nai) + かのうちに", "授業[じゅぎょう]が終わ[お]わるか終わらないかのうちに教室[きょうしつ]を出[で]た。", "Jugyou ga owaru ka owaranai ka no uchi ni kyoushitsu wo deta.", "Dars tugadimi-yo'qmi xonadan chiqib ketdim."),

    # Unit 2: Harakat davomiyligi va o'zgarishlar
    ("〜最中に (saichuu ni)", "saichuu ni", "... ayni qizg'in pallasida", "Fe'l (Te-iru) / Ot + の + 最中に", "会議[かいぎ]の最中[さいちゅう]に携帯[けいたい]が鳴[な]った。", "Kaigi no saichuu ni keitai ga natta.", "Majlisning ayni pallasida telefon jiringladi."),
    ("〜ばかりだ・〜一方だ (bakari da / ippou da)", "bakari da / ippou da", "faqat ... tomonga o'zgarib boryapti (Salbiy/Surunkali)", "Fe'l (Lug'at shakli) + ばかりだ / 一方だ", "物価[ぶっか]は上[あ]がる一方[いっぽう]だ。", "Bukka wa agaru ippou da.", "Narx-navo faqat ko'tarilib boryapti."),
    ("〜（よう）としている ((you) to shite iru)", "(you) to shite iru", "ayni ... qilish arafasida / ... qilmoqchi bo'lyapti", "Fe'l (Iroda shakli) + としている", "太陽[たいよう]が沈[しず]もうとしている。", "Taiyou ga shizumou to shite iru.", "Quyosh botay boryapti."),
    ("〜つつある (tsutsu aru)", "tsutsu aru", "... borgan sari rivojlanmoqda (Rasmiy jarayon)", "Fe'l (Masu-ildiz) + つつある", "景気[けいき]は回復[かいふく]しつつある。", "Keiki wa kaifuku shitsutsu aru.", "Iqtisodiyot qayta tiklanib bormoqda."),
    ("〜つつ (tsutsu)", "tsutsu", "... qilgan holda / ... qila turib (Bir vaqtda)", "Fe'l (Masu-ildiz) + つつ", "将来[しょうらい]の事[こと]を考[かんが]えつつ進路[しんろ]を決[き]める。", "Shourai no koto wo kangaetsutsu shinro wo kimeru.", "Kelajakni o'ylagan holda yo'nalishni tanlayman."),

    # Unit 3: Tartib va shartlar
    ("〜てはじめて (te hajimete)", "te hajimete", "... qilgandan keyingina (Tushunib yetmoq)", "Fe'l (Te-form) + はじめて", "病気[びょうき]になってはじめて健康[けんこう]の有難[ありがた]さを知[し]った。", "Byouki ni natte hajimete kenkou no arigatasa wo shitta.", "Kasal bo'lgachgina sog'liqning qadrini bildim."),
    ("〜上で (ue de)", "ue de", "... qilgandan so'nggina / ... asosida", "Fe'l (Ta-form) / Ot + の + 上で", "家族[かぞく]と相談[そうだん]した上で決[き]めます。", "Kazoku to soudan shita ue de kimemasu.", "Oila bilan maslahatlashgach qaror qilaman."),
    ("〜次第 (shidai)", "shidai", "... bo'lishi bilanoq (Kelasi zamonda)", "Fe'l (Masu-ildiz) / Ot + 次第", "着[つ]き次第[しだい]、連絡[れんらく]します。", "Tsuki shidai, renraku shimasu.", "Etib borishim bilanoq bog'lanaman."),
    ("〜以来 (irai)", "irai", "... berli / ... vaqtdan beri uzluksiz", "Fe'l (Te-form) / Ot + 以来", "日本[にほん]に来[き]て以来[いらい]、毎日[まいにち]日本語[にほんご]を勉強[べんきょう]している。", "Nihon ni kite irai, mainichi Nihongo wo benkyou shite iru.", "Yaponiyaga kelganimdan beri har kuni dars qilyapman."),
    ("〜てからでないと (te kara de nai to)", "te kara de nai to", "... qilmagunimcha ... qila olmayman", "Fe'l (Te-form) + からでないと / からでなければ", "許可[きょか]をもらってからでないと入[はい]れない。", "Kyoka wo moratte kara de nai to hairenai.", "Ruxsat olmagunimcha kira olmayman."),

    # Unit 4: Chegara va qamrov
    ("〜をはじめ（として） (wo hajime to shite)", "wo hajime to shite", "...-ni boshda tutgan holda / ... boshchiligida", "Ot + をはじめ / をはじめとする + Ot", "社長[しゃちょう]をはじめ、全社員[ぜんしゃいん]が参加[さんか]した。", "Shachou wo hajime, zenshaiin ga sanka shita.", "Prezident boshchiligida barcha xodimlar qatnashdi."),
    ("〜から〜にかけて (kara ... ni kakete)", "kara ... ni kakete", "...-dan ...-gacha (Taxminiy qamrov)", "Ot1 + から + Ot2 + にかけて", "昨夜[さくや]から今朝[けさ]にかけて大雨[おおあめ]が降[ふ]った。", "Sakuya kara kesa ni kakete ookame ga futta.", "Kechadan ertalabgacha kuchli yomg'ir yog'di."),
    ("〜にわたって (ni watatte)", "ni watatte", "... bo'yi / ... davomida keng qamrovda", "Ot + にわたって / にわたる + Ot", "3時間[さんじかん]にわたって議論[ぎろん]が続[つづ]いた。", "San-jikan ni watatte giron ga tsudukita.", "3 soat davomida bahs-munozara davom etdi."),
    ("〜を通じて・〜を通して (wo tsuujite / wo tooshite)", "wo tsuujite / wo tooshite", "... orqali / ... vositasida / ... bo'yi", "Ot + を通じて / を通して", "友人[ゆうじん]を通じて彼[かれ]と知[し]り合[あ]った。", "Yuujin wo tsuujite kare to shiriatta.", "Do'stim orqali u bilan tanishdim."),
    ("〜に限る (ni kagiru)", "ni kagiru", "... eng yaxshisi! / ...-dan zori yo'q", "Fe'l (Lug'at) / Ot + に限る", "暑[あつ]い日[ひ]は冷[つめ]たいアイスを食[た]べるに限[かぎ]る。", "Atsui hi wa tsumetai aisu wo taberu ni kagiru.", "Issiq kunda muzqaymoq yeyishga tengi yo'q."),
    ("〜に限って (ni kagitte)", "ni kagitte", "aynan ... kuni / aynan shu insonga kelganda", "Ot + に限って", "傘[かさ]を持[も]っていない日[ひ]に限[かぎ]って雨[あめ]が降[ふ]る。", "Kasa wo motte inai hi ni kagitte ame ga kuru.", "Aynan soyabonim yo'q kunda yomg'ir yog'adi."),

    # Unit 5: Sabab va nisbatlar
    ("〜において・〜における (ni oite / ni okeru)", "ni oite", "...-da / ... joyida (Rasmiy voqea o'rni)", "Ot + において / における + Ot", "東京[とうきょう]においてオリンピックが開催[かいさい]された。", "Toukyou ni oite orinpikku ga kaisai sareta.", "Tokioda Olimpiada o'tkazildi."),
    ("〜に基づいて (ni motodsuite)", "ni motodsuite", "... asosida / ...-ga tayanib", "Ot + に基づいて / に基づく + Ot", "調査[ちょうさ]結果[けっか]に基づいて報告[ほうこく]書[しょ]を作成[さくせい]する。", "Chousa kekka ni motodsuite houkokusho wo sakusei suru.", "Tadqiqot natijalari asosida hisobot tuziladi."),
    ("〜のもとで・〜のもとに (no moto de)", "no moto de", "... rahbarligida / ... soyasida", "Ot + のもとで / のもとに", "素晴[すば]らしい先生[せんせい]のもとで勉強[べんきょう]できて幸[さいわ]いだ。", "Subarashii sensei no moto de benkyou dekite saiwai da.", "Ajoyib ustoz qo'lida tahsil olganimdan baxtiyorman."),
    ("〜をめぐって (wo megutte)", "wo megutte", "... atrofida / ... ustida bahslashish", "Ot + をめぐって / をめぐる + Ot", "遺産[いさん]をめぐって親族[しんぞく]が争[あらそ]っている。", "Isan wo megutte shinzoku ga arasotte iru.", "Meros ustida qarindoshlar tortishmoqda."),

    # Unit 6: Mantiq va oqibat
    ("〜わけだ (wake da)", "wake da", "demak ... bo'lganligi mantiqiy xulosa", "Fe'l/Sifat/Ot (Plain) + わけだ", "寒[さむ]いわけだ。雪[ゆき]が降[ふ]っている。", "Samui wake da. Yuki ga futte iru.", "Demak shuning uchun sovuq ekan. Qor yog'yapti."),
    ("〜わけがない (wake ga nai)", "wake ga nai", "bo'lishi umuman mumkin emas", "Fe'l/Sifat/Ot + わけがない", "彼[かれ]がそんな悪口[わるくち]を言[い]うわけがない。", "Kare ga sonna warukuchi wo iu wake ga nai.", "U kishi bunday yomon gapi berishi mumkin emas."),
    ("〜わけではない (wake de wa nai)", "wake de wa nai", "... degani emas (Qisman inkor)", "Fe'l/Sifat/Ot + わけではない", "嫌[きら]いなわけではないが、食[た]べたくない。", "Kirai na wake de wa nai ga, tabetakunai.", "Yomon ko'raman degani emas, shunchaki yegim yo'q."),
    ("〜わけにはいかない (wake ni wa ikanai)", "wake ni wa ikanai", "axloq / vijdon yo'l qo'ymaydi", "Fe'l (Lug'at/Nai) + わけにはいかない", "大切[たいせつ]な会議[かいぎ]だから休[やす]むわけにはいかない。", "Taisetsu na kaigi dakara yasumu wake ni wa ikanai.", "Muhim majlis bo'lgani uchun qolishimga haqqim yo'q."),

    # Unit 7: Qiyinchilik va harakat darajasi
    ("〜かいがあって (kai ga atte)", "kai ga atte", "harakat qilganimga arziydigan natija bo'ldi", "Fe'l (Ta) / Ot + の + かいがあって", "努力[どりょく]したかいがあって、試験[しけん]に合格[ごうかく]した。", "Doryoku shita kai ga atte, shiken ni goukaku shita.", "Harakat qilganimga arziydi, imtihondan o'tdim."),
    ("〜かいもなく (kai mo naku)", "kai mo naku", "shuncha harakat qilganimga qaramay (Afsus)", "Fe'l (Ta) / Ot + の + かいもなく", "手術[しゅじゅつ]のかいもなく、愛犬[あいけん]が死[し]んでしまった。", "Shujutsu no kai mo naku, aiken ga shinde shimatta.", "Operatsiya qilinganiga qaramay, itim o'lib qoldi."),
    ("〜がい (gai)", "gai", "... qilish maroqli / munosib", "Fe'l (Masu-ildiz) + がい", "やりがいのある仕事[しごと]を探[さが]している。", "Yarigai no aru shigoto wo sagashite iru.", "Bajarish maroqli bo'lgan ish izlayapman."),
    ("〜てまで (te made)", "te made", "hatto ... darajagacha borib (Haddan tashqari)", "Fe'l (Te-form) + まで / までして", "借金[しゃっきん]をしてまで高[たか]い車[くるま]を買[か]いたくない。", "Shakkin wo shite made takai kuruma wo kaitakunai.", "Qarz olib bo'lsa ham qimmat mashina olgim yo'q."),
    ("〜切る・〜切れる (kiru / kireru)", "kiru / kireru", "to'liq va oxirigacha yetkazmoq", "Fe'l (Masu-ildiz) + 切る", "長[なが]いマラソンを走[はし]り切[き]った。", "Nagai marason wo hashirikirtta.", "Uzun marafonni oxirigacha yugurib o'tdim."),
    ("〜切れない (kirenai)", "kirenai", "oxirigacha yetkaza olmaslik / ko'pligidan ulgurmaslik", "Fe'l (Masu-ildiz) + 切れない", "ご飯[はん]が多[おお]すぎて食[た]べきれない。", "Gohan ga oosugite tabekirenai.", "Ovqat juda ko'pligidan oxirigacha yeyolmayman."),

    # Unit 8: Imkoniyat va hissiyotlar
    ("〜抜く (nuku)", "nuku", "barcha qiyinchiliklarga chidab oxirigacha yetkazmoq", "Fe'l (Masu-ildiz) + 抜く", "最後[さいご]まで戦[たたか]い抜[ぬ]く。", "Saigo made tatakainuku.", "Oxirgi minutgacha qiyinchilikka chidab kurashaman."),
    ("〜得る・〜得ない (eru / enai)", "eru / enai", "... bo'lishi mantiqan mumkin / imkonsiz", "Fe me'yoriy Masu-ildiz + 得る / 得ない", "事故[じこ]はいつでも起[お]こり得る。", "Jiko wa itsudemo okorieru.", "Avariya har qanday vaqtda sodir bo'lishi mumkin."),
    ("〜かねる (kaneru)", "kaneru", "... qilishga ojizman / rad etish (Xushmuomala)", "Fe'l (Masu-ildiz) + かねる", "その質問[しつもん]にはお答[こた]えしかねます。", "Sono shitsumon ni wa okotaeshikanemasu.", "Ushbu savolga javob bera olmayman."),
    ("〜かねない (kanenai)", "kanenai", "... kabi yomon xavf bo'lishi mumkin", "Fe'l (Masu-ildiz) + かねない", "このままでは事故[じこ]が起[お]こりかねない。", "Kono mama de wa jiko ga okorikanenai.", "Bunday ketaversa avariya sodir bo'lishi xavfi bor."),

    # Unit 9: Qat'iylik va kutilmalar
    ("〜に決まっている (ni kimatte iru)", "ni kimatte iru", "shubhasiz ... bo'ladi / aniq-ku!", "Fe'l/Sifat/Ot + に決まっている", "彼[かれ]が勝[か]つに決[き]まっている。", "Kare ga katsu ni kimatte iru.", "U g'olib bo'lishi aniq-ku!"),
    ("〜に相違ない (ni souinai)", "ni souinai", "hech qanday shubha yo'q (Rasmiy)", "Fe'l/Sifat/Ot + に相違ない", "犯人[はんにん]は彼[かれ]に相違[そうい]ない。", "Hannin wa kare ni souinai.", "Jinoyatchi u ekanligiga shubha yo'q."),
    ("〜に違いない (ni chigai nai)", "ni chigai nai", "aniq ... bo'lsa kerak", "Fe'l/Sifat/Ot + に違いない", "彼[かれ]が努力[どりょく]したから合格[ごうかく]したに違[ちが]いない。", "Kare ga doryoku shita kara goukaku shita ni chigai nai.", "U harakat qilgani uchun imtihondan o'tganiga shubha yo'q."),
    ("〜はずだ (hazu da)", "hazu da", "... bo me'yoriy kutilma bo'yicha shunday bo'lishi kerak", "Fe'l/Sifat/Ot + はずだ", "彼[かれ]はもう着[つ]いたはずだ。", "Kare wa mou tsuita hazu da.", "U allaqachon yetib kelgan bo'lishi kerak."),

    # Unit 10: Tuyg'ular va his-tuyg'ular
    ("〜っこない (kkonai)", "kkonai", "umuman bajarib bo'lmaydi (Ogzaki inkor)", "Fe'l (Masu-ildiz) + っこない", "一日[いちにち]でこの本[ほん]を全部[ぜんぶ]読[よ]めっこない。", "Ichinichi de kono hon wo zenbu yomekkonai.", "Bir kunda bu kitobni o'qib tugatib bo'lmaydi."),
    ("〜てたまらない (te tamaranai)", "te tamaranai", "...-likdan chidab bo'lmayapti (Jismoniy/Ruhiy)", "Fe'l/Sifat (Te-form) + たまらない", "国[くに]の家族[かぞく]に会[あ]いたくてたまらない。", "Kuni no kazoku ni aitakute tamaranai.", "Vatanimdagilarni ko'rgim kelib chiday olmayapman."),
    ("〜てしょうがない (te shouganai)", "te shouganai", "...-ligidan ilojim yo'q / juda ham", "Fe'l/Sifat (Te-form) + しょうがない / 仕方がない", "寂[さび]しくてしょうがない。", "Sabishikute shouganai.", "Juda ham yolg'izlanib qoldim."),
    ("〜てならない (te naranai)", "te naranai", "ich-ichimdan ... his qilyapman (Tabiiy his)", "Fe'l/Sifat (Te-form) + ならない", "合格[ごうかく]できるか心配[しんぱい]でならない。", "Goukaku dekiru ka shinpai de naranai.", "O'ta olamanmi-yo'qmi juda xavotirdaman.")
]

print(f"Loaded {len(mimi_n3_items)} Mimi Kara Oboeru N3 grammar items!")
