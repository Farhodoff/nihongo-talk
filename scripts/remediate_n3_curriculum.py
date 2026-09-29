import json

N3_PATH = 'src/data/curriculum/levels/n3/japaneseLessons.json'

with open(N3_PATH, 'r', encoding='utf-8') as f:
    lessons = json.load(f)

# Contextual high-register N3 practice exercises replacing the repetitive N5 distractors
N3_PRACTICE_REPLACEMENTS = {
    'ja-n3-u1-l1': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri majhul shaklni tanlang: 「満員[まんいん] 電車[でんしゃ]の 中[なか]で、見知[みし]らぬ 人[ひと]に 足[あし]を （　　）。」',
        'options': ['踏[ふ]まれました', '踏[ふ]みました', '踏[ふ]ませました', '踏[ふ]みあいました'],
        'correctAnswer': 0,
        'explanation': '«足を踏まれました» — Meiwaku no Ukemi (boshqa birov oyog\'imni bosib olib, noqulaylik yetkazdi).'
    },
    'ja-n3-u1-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri orttirma shaklni tanlang: 「両親[りょうしん]は 息子[むすこ]に 自分[じぶん]の 好[す]きな 楽器[がっき]を （　　）。」',
        'options': ['習[なら]わせました', '習[なら]いました', '習[なら]われました', '習[なら]わせられました'],
        'correctAnswer': 0,
        'explanation': '«習わせました» — bolaga ixtiyoriy ravishda cholg\'uni o\'rganishga ruxsat berish / imkoniyat yaratish (shieki shakli).'
    },
    'ja-n3-u1-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri majburiy shaklni tanlang: 「子[こ]どもの 頃[ころ]、母[はは]に 嫌[きら]いな ピーマンを （　　）。」',
        'options': ['食[た]べさせられました', '食[た]べさせました', '食[た]べられました', '食[た]べてしまいました'],
        'correctAnswer': 0,
        'explanation': '«食べさせられました» — xohlamagan holda onasi tomonidan majburlab yedirilishi (shieki-ukemi).'
    },
    'ja-n3-u1-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri oldindan tayyorgarlik shaklini tanlang: 「旅行[りょこう]に 行[い]く 前[まえ]に、ホテルを 予約[よやく]（　　）。」',
        'options': ['しておきました', 'してありました', 'してしまいました', 'してみます'],
        'correctAnswer': 0,
        'explanation': '«予約しておきました» — oldindan tayyorgarlik sifatida mehmonxonani band qilib qo\'yish (〜ておく).'
    },
    'ja-n3-u1-l5': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri afsuslanish shaklini tanlang: 「うっかり 大切[たいせつ]な 約束[やくそく]を （　　）。」',
        'options': ['忘[わす]れてしまいました', '忘[わす]れておきました', '忘[わす]れてありました', '忘[わす]れるようにしました'],
        'correctAnswer': 0,
        'explanation': '«忘れてしまいました» — xohlamagan holda esdan chiqarib qo\'yganlikdan pushaymonlik (〜てしまう).'
    },
    'ja-n3-u2-l1': {
        'prompt': 'Quyidagi jumlada o\'z shaxsiy qarorini ifodalovchi to\'g\'ri shaklni tanlang: 「健康[けんこう]の ために、毎朝[まいあさ] 30分[さんじゅっぷん] ジョギングを （　　）。」',
        'options': ['することにしました', 'することになりました', 'するはずでした', 'するわけでした'],
        'correctAnswer': 0,
        'explanation': '«することにしました» — shaxsning o\'z qat\'iy qarori (〜ことにする).'
    },
    'ja-n3-u2-l2': {
        'prompt': 'Quyidagi jumlada maqsad ifodasini tanlang: 「風邪[かぜ]を ひかない（　　）、温[あたた]かい 格好[かっこう]を しています。」',
        'options': ['ように', 'ために', 'ようにして', 'ことになって'],
        'correctAnswer': 0,
        'explanation': '«風邪をひかないように» — inkor fe\'llar bilan maqsadda «〜ように» qo\'llanadi.'
    },
    'ja-n3-u2-l3': {
        'prompt': 'Quyidagi jumlada tashqi ko\'rinishdan taxminni tanlang: 「今[いま]にも 雨[あめ]が （　　）空[そら]を している。」',
        'options': ['降[ふ]りそうな', '降[ふ]るそうな', '降[ふ]ったような', '降[ふ]るらしい'],
        'correctAnswer': 0,
        'explanation': '«今にも降りそうな» — hoziroq yog\'ib yuboradigandek ko\'rinish (fe\'l masu-ildiz + そうな).'
    },
    'ja-n3-u2-l4': {
        'prompt': 'Quyidagi jumlada kutilgandek bo\'lmagan nomutanosiblikni tanlang: 「この 料理[りょうり]は 値段[ねだん]が 高[たか]い（　　）、あまり 美味[おい]しくない。」',
        'options': ['わりに', 'ために', 'ように', 'せいで'],
        'correctAnswer': 0,
        'explanation': '«高いわりに» — narxi qimmatligiga nomutanosib ravishda unchalik mazali emas (〜わりに).'
    },
    'ja-n3-u2-l5': {
        'prompt': 'Quyidagi jumlada to\'g\'ri kontekstual N3 so\'zini tanlang: 「労働[ろうどう] 環境[かんきょう]の 改善[かいぜん]が 企業[きぎょう]の 喫緊[きっきん]の （　　）と なっている。」',
        'options': ['課題[かだい]', '趣味[しゅみ]', '道具[どうぐ]', '季節[きせつ]'],
        'correctAnswer': 0,
        'explanation': '«企業の課題» — zamonaviy korxonalar oldidagi dolzarb vazifa/muammo.'
    },
    'ja-n3-u3-l1': {
        'prompt': 'Quyidagi jumlada mijoz yoki xo\'jayinga nisbatan to\'g\'ri hurmat fe\'lini tanlang: 「社長[しゃちょう]、コーヒーを （　　）ですか。」',
        'options': ['召[め]し上[あ]がります', 'いただきます', 'まいります', '拝見[はいけん]します'],
        'correctAnswer': 0,
        'explanation': '«召し上がりますか» — Ichmoq/Yemoq fe\'lining hurmat (Sonkeigo) shakli.'
    },
    'ja-n3-u3-l2': {
        'prompt': 'Quyidagi jumlada o\'z harakatini kamtarona bildirish shaklini tanlang: 「明日[あした]の 10時[じゅうじ]に 先生[せんせい]の 研究室[けんきゅうしつ]に （　　）。」',
        'options': ['伺[うかが]います', 'いらっしゃいます', 'おいでになります', 'おっしゃいます'],
        'correctAnswer': 0,
        'explanation': '«伺います» — Bormoq/Ziyorat qilmoq fe\'lining kamtarlik (Kenjougo) shakli.'
    },
    'ja-n3-u3-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri N3 kanji so\'zini tanlang: 「円安[えんやす]が 日本[にほん]の 輸出[ゆしゅつ]に 大[おお]きな （　　）を 与[あた]えている。」',
        'options': ['影響[えいきょう]', '政治[せいじ]', '関係[かんけい]', '相談[そうだん]'],
        'correctAnswer': 0,
        'explanation': '«大きな影響を与える» — katta ta\'sir ko\'rsatmoq.'
    },
    'ja-n3-u3-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri ob-havo hodisasini tanlang: 「大型[おおがた]の （　　）が 近[ちか]づいているため、厳重[げんじゅう]な 警戒[けいかい]が 必要[ひつよう]だ。」',
        'options': ['台風[たいふう]', '被害[ひがい]', '変化[へんか]', '気温[きおん]'],
        'correctAnswer': 0,
        'explanation': '«大型の台風» — yirik to\'fon/tayfun yaqinlashmoqda.'
    },
    'ja-n3-u3-l5': {
        'prompt': 'Tinglash savoliga tezkor javob: 「この 仕事[しごと]、手伝[てつだ]ってもらえない？」ga eng mos javob: ',
        'options': ['ええ、いいですよ。今[いま] 手[て]が 空[あ]いていますから。', 'いいえ、どうぞ 食[た]べてください。', 'はい、お先[さき]に 失礼[しつれい]します。', 'いいえ、昨日[きのう] 行[い]きました。'],
        'correctAnswer': 0,
        'explanation': 'Iltimosga ijobiy va xushmuomala javob qaytarish.'
    },
    'ja-n3-u4-l1': {
        'prompt': 'Quyidagi jumlada taqqoslash ifodasini tanlang: 「兄[あに]が 外向的[がいこうてき]な（　　）、弟[おとうと]は 内向的[ないこうてき]で おとなしい。」',
        'options': ['のに対[たい]して', 'ために', 'ように', 'せいで'],
        'correctAnswer': 0,
        'explanation': '«〜のに対して» — ikki shaxs yoki hodisani qiyosan qarama-qarshi qo\'yish.'
    },
    'ja-n3-u4-l2': {
        'prompt': 'Quyidagi jumlada salbiy oqibat sababchisini tanlang: 「事故[じこ]の（　　）、電車[でんしゃ]が 1時間[いちじかん]も 遅[おく]れた。」',
        'options': ['せいで', 'おかげで', 'ために', 'ように'],
        'correctAnswer': 0,
        'explanation': '«事故のせいで» — salbiy natija yoki noqulaylikka sababchi bo\'lgan omil (〜せいで).'
    },
    'ja-n3-u4-l3': {
        'prompt': 'Quyidagi jumlada tanqidiy ko\'p takrorlanish ifodasini tanlang: 「彼[かれ]は 勉強[べんきょう]も せずに ゲーム（　　） している。」',
        'options': ['ばかり', 'だけ', 'しか', 'のみ'],
        'correctAnswer': 0,
        'explanation': '«ゲームばかりしている» — me\'yoridan ortiq faqat bitta nojo\'ya ish bilan band bo\'lish (〜ばかり).'
    },
    'ja-n3-u4-l4': {
        'prompt': 'Quyidagi jumlada to\'g\'ri muallif nuqtai nazarini tanlang: 「文章[ぶんしょう]の 全体[ぜんたい]から （　　）の 最[もっと]も 言[い]いたい 主張[しゅちょう]を 読[よ]み取[と]る。」',
        'options': ['筆者[ひっしゃ]', '読者[どくしゃ]', '登場人物[とうじょうじんぶつ]', '記者[きしゃ]'],
        'correctAnswer': 0,
        'explanation': '«筆者の主張» — matn muallifining asosiy da\'vosi.'
    },
    'ja-n3-u4-l5': {
        'prompt': 'Quyidagi jumlada mantiqiy xulosa ifodasini tanlang: 「彼[かれ]は 日本[にほん]に 10年[じゅうねん]も 住[す]んでいたのだから、日本語[にほんご]が 上手[じょうず]な（　　）。」',
        'options': ['わけだ', 'べきだ', 'そうだ', 'らしい'],
        'correctAnswer': 0,
        'explanation': '«上手なわけだ» — aniq asosga tayangan tabiiy va tushunarli mantiqiy xulosa (〜わけだ).'
    },
    'ja-n3-u5-l1': {
        'prompt': 'Quyidagi jumlada to\'g\'ri texnologik atamani tanlang: 「最新[さいしん]の （　　）を 用[もち]いて 新[あたら]しい ロボットを 開発[かいはつ]した。」',
        'options': ['技術[ぎじゅつ]', '実験[じっけん]', '発明[はつめい]', '研究[けんきゅう]'],
        'correctAnswer': 0,
        'explanation': '«最新の技術» — zamonaviy eng ilg\'or texnologiya.'
    },
    'ja-n3-u5-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri holat so\'zini tanlang: 「人前[ひとまえ]で スピーチを するとき、とても （　　）した。」',
        'options': ['緊張[きんちょう]', '苦痛[くつう]', '感情[かんじょう]', '単純[たんじゅん]'],
        'correctAnswer': 0,
        'explanation': '«緊張する» — hayajonlanmoq, asabiylashmoq.'
    },
    'ja-n3-u5-l3': {
        'prompt': 'Quyidagi jumlada tabiiy muqarrar oqibat shartini tanlang: 「春[はる]に （　　）、桜[さくら]の 花[はな]が 咲[さ]きます。」',
        'options': ['なると', 'なれば', 'なったら', 'なら'],
        'correctAnswer': 0,
        'explanation': '«春になると» — fasllar almashishi kabi tabiiy va muqarrar hodisalar uchun «〜と» shart mayli xosdir.'
    },
    'ja-n3-u5-l4': {
        'prompt': 'Ilmiy yoki rasmiy hisobot uslubiga mos fe\'l shaklini tanlang: 「地球[ちきゅう] 温暖化[おんだんか]は 深刻[しんこく]な 問題[もんだい]で （　　）。」',
        'options': ['ある', 'です', 'であります', 'でした'],
        'correctAnswer': 0,
        'explanation': '«〜である» — rasmiy, akademik va ilmiy maqolalar uchun qat\'iy standart oddiy uslub.'
    },
    'ja-n3-u5-l5': {
        'prompt': 'Quyidagi jumlada to\'g\'ri tahlil tushunchasini tanlang: 「二[ふた]つの 異[こと]なる 視点[してん]を （　　）して 共通点[きょうつうてん]を 見出[みいだ]す。」',
        'options': ['比較[ひかく]', '克服[こくふく]', '維持[いじ]', '意識[いしき]'],
        'correctAnswer': 0,
        'explanation': '«比較する» — ikki qarashni o\'zaro taqqoslash.'
    },
    'ja-n3-u6-l1': {
        'prompt': 'Qisqa xabardan asosiy mazmunni chiqarish: 「アナウンスの 最[もっと]も 伝[つた]えたい 主旨[しゅし]は 何[なん]ですか。」',
        'options': ['運行[うんこう]の 見合[みあ]わせと 振替[ふりかえ] 輸送[ゆそう]の 案内[あんない]', '駅弁[えきべん]の 販売[はんばい] 開始[かいし]', '明日[あした]の 天気[てんき] 予報[よほう]', '乗車券[じょうしゃけん]の 値上[ねあ]げ'],
        'correctAnswer': 0,
        'explanation': 'Poyezd to\'xtashi va alternativ transport yo\'nalishlarini tushunish.'
    },
    'ja-n3-u6-l2': {
        'prompt': 'Gap tartibini to\'g\'ri tiklang: 「どんなに ★ （　） （　） （　）、あきらめない。」da yulduzcha o\'rnidagi so\'z:',
        'options': ['大変[たいへん]でも', '困難[こんなん]で', 'つらくても', '苦[くる]しくても'],
        'correctAnswer': 0,
        'explanation': '«どんなに大変でも» shakli to\'g\'ri grammatik bog\'lanishdir.'
    },
    'ja-n3-u6-l3': {
        'prompt': 'Telefonda o\'zini tanishtirishda eng to\'g\'ri rasmiy ibora: ',
        'options': ['いつも お世話[せわ]に なっております。〇〇社[しゃ]の 田中[たなか]で ございます。', 'もしもし、田中[たなか]だけど 部長[ぶちょう]いる？', 'おはよう、田中[たなか]です。', '今[いま] 暇[ひま]ですか？'],
        'correctAnswer': 0,
        'explanation': 'Yapon biznes etiketiga ko\'ra qo\'ng\'iroqni «いつもお世話になっております» bilan boshlash shart.'
    },
    'ja-n3-u6-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri bog\'lovchini tanlang: 「雨[あめ]が 降[ふ]っていた。（　　）、試合[しあい]は 予定[よてい]通[どお]り 行[おこな]われた。」',
        'options': ['しかし', 'だから', 'つまり', 'ところで'],
        'correctAnswer': 0,
        'explanation': '«しかし» — zidlovchi bog\'lovchi.'
    },
    'ja-n3-u6-l5': {
        'prompt': 'Quyidagi jumlada maqsadga erishish ifodasini tanlang: 「毎日[まいにち]の 地道[じみち]な 努力[どりょく]を （　　）、N3に 合格[ごうかく]した。」',
        'options': ['重[かさ]ねて', '怠[おこた]って', 'あきらめて', '逃[に]げて'],
        'correctAnswer': 0,
        'explanation': '«努力を重ねて» — tinimsiz mehnat va tirishqoqlik evaziga muvaffaqiyat qozonish.'
    },
}

for l_idx, lesson in enumerate(lessons):
    lid = lesson['id']
    
    # 1. Update practice exercise 2
    for step in lesson['steps']:
        if step['type'] == 'practice':
            exs = step.get('practiceData', {}).get('exercises', [])
            if lid in N3_PRACTICE_REPLACEMENTS and len(exs) >= 2:
                repl = N3_PRACTICE_REPLACEMENTS[lid]
                target_idx = (l_idx + 1) % 4
                raw_opts = repl['options']
                correct_text = raw_opts[0]
                other_opts = raw_opts[1:]
                rotated_opts = other_opts[:target_idx] + [correct_text] + other_opts[target_idx:]
                
                exs[1] = {
                    'id': f'{lid}-e2',
                    'type': 'multiple-choice',
                    'prompt': repl['prompt'],
                    'options': rotated_opts,
                    'correctAnswer': target_idx,
                    'explanation': repl['explanation']
                }

    # 2. Rebalance test questions
    for step in lesson['steps']:
        if step['type'] == 'test':
            qs = step.get('testData', {}).get('questions', [])
            # Questions 5 to 10 in 24 lessons were all 0.
            # Let's rebalance questions across each lesson so that answers are well distributed.
            # We want each of 0, 1, 2, 3 to appear 2 or 3 times in 10 questions.
            target_distribution = [(q_i * 3 + l_idx) % 4 for q_i in range(len(qs))]
            
            # If the lesson had heavy index 0 skew (more than 4 out of 10 is 0):
            indices = [q.get('correctAnswerIndex') for q in qs]
            if indices.count(0) >= 5:
                for q_idx, q in enumerate(qs):
                    old_idx = q['correctAnswerIndex']
                    old_opts = q['options']
                    correct_opt = old_opts[old_idx]
                    other_opts = [opt for i, opt in enumerate(old_opts) if i != old_idx]
                    
                    target_idx = target_distribution[q_idx]
                    new_opts = other_opts[:target_idx] + [correct_opt] + other_opts[target_idx:]
                    
                    assert new_opts[target_idx] == correct_opt
                    q['options'] = new_opts
                    q['correctAnswerIndex'] = target_idx

with open(N3_PATH, 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print('N3 curriculum successfully remediated and written!')
