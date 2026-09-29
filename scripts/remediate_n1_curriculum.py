import json
import os

N1_PATH = 'src/data/curriculum/levels/n1/japaneseLessons.json'

with open(N1_PATH, 'r', encoding='utf-8') as f:
    lessons = json.load(f)

# Contextual high-register N1 practice exercises replacing the repetitive N5 distractors
N1_PRACTICE_REPLACEMENTS = {
    'ja-n1-u1-l1': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri grammatik iborani tanlang: 「理由[りゆう]が 何[なに]（　　）、無断[むだん]で 欠席[けっせき]することは 許[ゆる]されない。」',
        'options': ['であれ', 'まみれ', 'ずくめ', 'まじき'],
        'correctAnswer': 0,
        'explanation': '«何であれ» — har qanday sabab bo\'lishidan qat\'i nazar ma\'nosidagi rasmiy ifoda.'
    },
    'ja-n1-u1-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「患者[かんじゃ]の 個人[こじん]情報[じょうほう]を 漏洩[ろうえい]するなど、医師[いし]として ある（　　） 行為[こうい]だ。」',
        'options': ['まじき', 'ずくめ', '至る', 'ならでは'],
        'correctAnswer': 0,
        'explanation': '«あるまじき» — ma\'lum kasb yoki maqom egasiga aslo yarashmaydigan, kechirib bo\'lmas nojo\'ya xatti-harakat.'
    },
    'ja-n1-u1-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「この 繊細[せんさい]な 技法[ぎほう]は、熟練[じゅくれん]の 職人[しょくにん]（　　）の 技[わざ]である。」',
        'options': ['ならでは', 'まみれ', 'たるもの', 'が早いか'],
        'correctAnswer': 0,
        'explanation': '«〜ならでは» — faqat shu shaxs yoki narsagagina xos bo\'lgan yuksak mahoratni ifodalaydi.'
    },
    'ja-n1-u1-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「泥[どろ]（　　）に なって 一日中[いちにちじゅう] 救助[きゅうじょ]活動[かつどう]を 続[つづ]けた。」',
        'options': ['まみれ', 'ずくめ', 'ならでは', 'たるもの'],
        'correctAnswer': 0,
        'explanation': '«泥まみれ» — butun vujudi yoki yuzasi loy, qon kabi yoqimsiz narsa bilan qoplanishida «まみれ» qo\'llanadi.'
    },
    'ja-n1-u1-l5': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「言語[げんご]は 人間[にんげん]の 認識[にんしき]を （　　）する 根本的[こんぽんてき]な 媒体[ばいたい]である。」',
        'options': ['規定[きてい]', '妥協[だきょう]', '余儀[よぎ]', '漏洩[ろうえい]'],
        'correctAnswer': 0,
        'explanation': '«認識を規定する» — til inson tafakkuri va dunyoni anglash chegaralarini belgilab berishini ifodalovchi falsafiy atama.'
    },
    'ja-n1-u2-l1': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「理想[りそう]と 現実[げんじつ]との 間[あいだ]に 大[おお]きな （　　）が 生[しょう]じている。」',
        'options': ['乖離[かいり]', '齟齬[そご]', '曖昧[あいまい]', '葛藤[かっとう]'],
        'correctAnswer': 0,
        'explanation': '«乖離» — ikki tushuncha yoki reallik o\'rtasida katta masofa yoki uzilish paydo bo\'lishi.'
    },
    'ja-n1-u2-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「サイバー攻撃[こうげき]に対[たい]する システムの （　　）が 指摘[してき]された。」',
        'options': ['脆弱[ぜいじゃく]性', '隠蔽[いんぺい]', '覇権[はけん]', '諮問[しもん]'],
        'correctAnswer': 0,
        'explanation': '«脆弱性» — tizimning zaif, himoyasiz yoki xavfga moyil bo\'lgan nuqtasi.'
    },
    'ja-n1-u2-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「講義[こうぎ]の 核心[かくしん]は、従来[じゅうらい]の 定説[ていせつ]を （　　）する 点[てん]に あった。」',
        'options': ['覆[くつがえ]す', '怠[おこた]る', 'かまける', '屈[くっ]する'],
        'correctAnswer': 0,
        'explanation': '«定説を覆す» — avvaldan o\'rnatilgan ilmiy qarash yoki nazariyani inkor etib, yangisini kashf qilish.'
    },
    'ja-n1-u2-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「新技術[しんぎじゅつ]の 導入[どうにゅう]が 業務[ぎょうむ]の 効率化[こうりつか]に （　　）を かけた。」',
        'options': ['拍車[はくしゃ]', '妥協[だきょう]', '余儀[よぎ]', '皮切り[かわきり]'],
        'correctAnswer': 0,
        'explanation': '«拍車をかける» — jarayonning rivojlanishiga yanada kuchli turtki berib, tezlashtirish.'
    },
    'ja-n1-u2-l5': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「最高[さいこう]の 品質[ひんしつ]を 追求[ついきゅう]するにあたり、いかなる （　　）も 許[ゆる]さない。」',
        'options': ['妥協[だきょう]', '乖離[かいり]', '齟齬[そご]', '隠蔽[いんぺい]'],
        'correctAnswer': 0,
        'explanation': '«妥協を許さない» — hech qanday murosa yoki sifatni pasaytirishga yo\'l qo\'ymaslik.'
    },
    'ja-n1-u3-l1': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「指導者[しどうしゃ]たる（　　）、常[つね]に 謙虚[けんきょ]な 姿勢[しせい]を 忘[わす]れてはならない。」',
        'options': ['者[もの]', 'まじき', 'ずくめ', 'に至る'],
        'correctAnswer': 0,
        'explanation': '«指導者たる者» — rahbar bo\'lgan shaxs o\'z mavqeiga mos fazilatni namoyon etishi kerakligini ifodalaydi.'
    },
    'ja-n1-u3-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「事態[じたい]が ここ（　　）以上[いじょう]、もはや 隠蔽[いんぺい]することは できない。」',
        'options': ['に至[いた]った', 'に先立[さきだ]った', 'を皮切り[かわきり]にした', 'にかまけた'],
        'correctAnswer': 0,
        'explanation': '«事態がここに至った以上» — voqealar rivoji shu darajaga yetib kelgan ekan degan vaziyatni ifodalaydi.'
    },
    'ja-n1-u3-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「不採算[ふさいさん] 部門[ぶもん]の 閉鎖[へいさ]を （　　）された。」',
        'options': ['余儀[よぎ]なく', '拍車[はくしゃ]をかけ', '妥協[だきょう]を許[ゆる]さず', 'かまけて'],
        'correctAnswer': 0,
        'explanation': '«閉鎖を余儀なくされた» — o\'z xohishiga qarshi o\'laroq, majburlikdan bo\'limni yopishga to\'g\'ri keldi.'
    },
    'ja-n1-u3-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「終業[しゅうぎょう]の チャイムが （　　）が 早[はや]いか、彼[かれ]は 走[はし]り出[で]た。」',
        'options': ['鳴[な]る', '鳴[な]った', '鳴[な]りそう', '鳴[な]れば'],
        'correctAnswer': 0,
        'explanation': '«鳴るが早いか» — jiringlashi bilanoq darhol keyingi kutilmagan harakat sodir bo\'ldi (fe\'l lug\'at shakli + が早いか).'
    },
    'ja-n1-u3-l5': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「教員[きょういん]として ある（　　） 暴言[ぼうげん]を 吐[は]いて 処分[しょぶん]された。」',
        'options': ['まじき', 'ずくめ', 'ならでは', 'たるもの'],
        'correctAnswer': 0,
        'explanation': '«あるまじき暴言» — o\'qituvchilik sha\'niga aslo loyiq bo\'lmagan, qabul qilib bo\'lmas haqoratli so\'zlar.'
    },
    'ja-n1-u4-l1': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「近代[きんだい] 合理性[ごうりせい]への 盲従[もうじゅう]を 厳[きび]しく （　　）する 論文[ろんぶん]だ。」',
        'options': ['批判[ひはん]', '妥協[だきょう]', '拍車[はくしゃ]', '余儀[よぎ]'],
        'correctAnswer': 0,
        'explanation': '«盲従を厳しく批判する» — zamonaviy ratsionallikka ko\'r-ko\'rona ergashishni keskin tanqid ostiga oluvchi tahlil.'
    },
    'ja-n1-u4-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「夢[ゆめ]を 実現[じつげん]させ（　　）、あらゆる 辛苦[しんく]を 舐[な]めてきた。」',
        'options': ['んがため', 'まじき', 'ずくめ', 'たるもの'],
        'correctAnswer': 0,
        'explanation': '«実現させんがため» — orzuni amalga oshirish oliy maqsadida degan arxaik-adabiy uslub (fe\'l inkor negizi + んがため).'
    },
    'ja-n1-u4-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「この 重責[じゅうせき]を 担[にな]える 人材[じんざい]は、彼[かれ]（　　） 他[ほか]にいない。」',
        'options': ['をおいて', 'に至[いた]って', 'にかまけて', 'を皮切り[かわきり]に'],
        'correctAnswer': 0,
        'explanation': '«彼をおいて他にいない» — undan boshqa hech kim bu ulkan mas\'uliyatni zimmaga ola olmaydi.'
    },
    'ja-n1-u4-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「相手[あいて]の 発言[はつげん]を 途切[とぎ]らせるのは、失礼[しつれい]（　　） 態度[たいど]だ。」',
        'options': ['極[きわ]まりない', 'ずくめ', 'まじき', 'ならでは'],
        'correctAnswer': 0,
        'explanation': '«失礼極まりない» — o\'ta beodoblik, haddan ziyod hurmatsizlik ifodasi.'
    },
    'ja-n1-u4-l5': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「対立[たいりつ]する 両者[りょうしゃ]の 主張[しゅちょう]を （　　）的[てき]に 整理[せいり]して 理解[りかい]する。」',
        'options': ['統合[とうごう]', '妥協[だきょう]', '余儀[よぎ]', '脆弱[ぜいじゃく]'],
        'correctAnswer': 0,
        'explanation': '«統合的に整理する» — ikkala tomonning qarama-qarshi fikrlarini birlashtirib, yaxlit tahlil qilish.'
    },
    'ja-n1-u5-l1': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「物価[ぶっか]の 高騰[こうとう]が 家計[かけい]を （　　）している。」',
        'options': ['圧迫[あっぱく]', '隠蔽[いんぺい]', '乖離[かいり]', '諮問[しもん]'],
        'correctAnswer': 0,
        'explanation': '«家計を圧迫する» — narx-navoning ko\'tarilishi oilaviy byudjetga jiddiy og\'irlik va bosim o\'tkazmoqda.'
    },
    'ja-n1-u5-l2': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「困難[こんなん]に 直面[ちょくめん]しても （　　）の 精神[せいしん]で 立[た]ち向[む]かう。」',
        'options': ['臥薪嘗胆[がしんしょうたん]', '四面楚歌[しめんそか]', '言語道断[ごんごどうだん]', '朝三暮四[ちょうさんぼし]'],
        'correctAnswer': 0,
        'explanation': '«臥薪嘗胆» — kelajakdagi katta maqsad yo\'lida barcha mashaqqatlarga chidab, sabot bilan intilish ramzi.'
    },
    'ja-n1-u5-l3': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「彼[かれ]の 演説[えんぜつ]は、聴衆[ちょうしゅう]の 心[こころ]を （　　）には おかなかった。」',
        'options': ['捉[とら]えず', '捉[とら]えて', '捉[とら]える', '捉[とら]えた'],
        'correctAnswer': 0,
        'explanation': '«捉えずにはおかなかった» — tinglovchilarning qalbini zabt etmay qo\'ymadi (〜ずにはおかない shakli).'
    },
    'ja-n1-u5-l4': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「法律[ほうりつ]の 改正[かいせい]に （　　）、公聴会[こうちょうかい]が 開[ひら]かれた。」',
        'options': ['先立[さきだ]って', 'かまけて', 'まじき', 'ずくめ'],
        'correctAnswer': 0,
        'explanation': '«改正に先立って» — qonun o\'zgartirilishidan oldin jamoatchilik eshituvi o\'tkazildi.'
    },
    'ja-n1-u5-l5': {
        'prompt': 'Quyidagi jumlada qoldirilgan to\'g\'ri so\'zni tanlang: 「幾多[いくた]の 試練[しれん]を （　　）、堂々[どうどう]たる 成果[せいか]を 収[おさ]めた。」',
        'options': ['乗[の]り越[こ]え', '余儀[よぎ]なくされ', 'かまけて', '怠[おこた]り'],
        'correctAnswer': 0,
        'explanation': '«幾多の試練を乗り越え» — son-sanoqsiz qiyinchilik va sinovlarni yengib o\'tib, faxrli natijaga erishdi.'
    },
}

# Distinct N1 Choukai tracks to enrich listening lessons
CHOUKAI_TRACKS_L08 = [
    ('/audio/choukai/n1/n1_lecture_l08.mp3', 'N1 Track 08: Ilmiy Ma\'ruza'),
    ('/audio/choukai/n1/n1_track_10.mp3', 'N1 Track 10: Akademik Muhokama'),
    ('/audio/choukai/n1/n1_track_20.mp3', 'N1 Track 20: Tadqiqot Tahlili'),
    ('/audio/choukai/n1/n1_track_42.mp3', 'N1 Track 42: Tezis Sintezi'),
    ('/audio/choukai/n1/n1_track_44.mp3', 'N1 Track 44: Nazariya Xulosasi'),
]

CHOUKAI_TRACKS_L20 = [
    ('/audio/choukai/n1/n1_dialogue_l20.mp3', 'N1 Track 20: Integratsion Dialog'),
    ('/audio/choukai/n1/n1_track_45.mp3', 'N1 Track 45: Ekspertlar Bahsi'),
    ('/audio/choukai/n1/n1_track_46.mp3', 'N1 Track 46: Jamiyat va Qaror'),
    ('/audio/choukai/n1/n1_track_77.mp3', 'N1 Track 77: Boshqaruv Munozarasi'),
    ('/audio/choukai/n1/n1_track_78.mp3', 'N1 Track 78: Strategik Fikr'),
]

# Process N1 lessons
for l_idx, lesson in enumerate(lessons):
    lid = lesson['id']
    
    # 1. Update practice exercises
    for step in lesson['steps']:
        if step['type'] == 'practice':
            exs = step.get('practiceData', {}).get('exercises', [])
            
            # Check if this lesson has a replacement for exercise 2
            if lid in N1_PRACTICE_REPLACEMENTS and len(exs) >= 2:
                repl = N1_PRACTICE_REPLACEMENTS[lid]
                # Rotate options to balance correctAnswer index (e.g. (l_idx + 1) % 4)
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
            
            # Add missing exercise 2 for ja-n1-u6-l4
            if lid == 'ja-n1-u6-l4' and len(exs) == 1:
                exs.append({
                    'id': f'{lid}-e2',
                    'type': 'multiple-choice',
                    'prompt': 'Quyidagi jumlada bo\'sh joyga eng mos keluvchi rasmiy iborani tanlang: 「所定[しょてい]の 手続き[てつづき]を （　　）うえ、お申し込みください。」',
                    'options': ['忘[わす]れた', '経[へ]た', '遮[さえぎ]った', '断[ことわ]った'],
                    'correctAnswer': 1,
                    'explanation': '«所定の手続きを経たうえで» — belgilangan rasmiy tartib-qoidalarni bosqichma-bosqich o\'tagan holda ro\'yxatdan o\'tish degan rasmiy ifodadir.'
                })
                
            # Add missing exercise 2 for ja-n1-u6-l5
            if lid == 'ja-n1-u6-l5' and len(exs) == 1:
                exs.append({
                    'id': f'{lid}-e2',
                    'type': 'multiple-choice',
                    'prompt': 'Quyidagi jumlada bo\'sh joyga eng mos keluvchi oliy darajadagi so\'zni tanlang: 「長年[ながねん]の 研鑽[けんさん]の （　　）、ついに N1 合格[ごうかく]の 栄冠[えいかん]を 勝ち取った[かちとった]。」',
                    'options': ['皮切り[かわきり]に', 'かまけて', '末[すえ]に', 'まじき'],
                    'correctAnswer': 2,
                    'explanation': '«研鑽の末に» — uzoq yillik mashaqqatli izlanish va chuqur o\'rganishlar yakunida natijaga erishishni ifodalaydi.'
                })
                
            # Enrich listening practice
            if lid == 'ja-n1-u2-l3' and len(exs) >= 2:
                exs[1]['audioUrl'] = CHOUKAI_TRACKS_L08[1][0]
                exs[1]['audioTitle'] = CHOUKAI_TRACKS_L08[1][1]
            elif lid == 'ja-n1-u4-l5' and len(exs) >= 2:
                exs[1]['audioUrl'] = CHOUKAI_TRACKS_L20[1][0]
                exs[1]['audioTitle'] = CHOUKAI_TRACKS_L20[1][1]

    # 2. Rebalance test questions
    for step in lesson['steps']:
        if step['type'] == 'test':
            qs = step.get('testData', {}).get('questions', [])
            
            # Enrich listening test audio
            if lid == 'ja-n1-u2-l3' and len(qs) >= 4:
                for q_idx in range(len(qs)):
                    track = CHOUKAI_TRACKS_L08[q_idx % len(CHOUKAI_TRACKS_L08)]
                    qs[q_idx]['audioUrl'] = track[0]
                    qs[q_idx]['audioTitle'] = track[1]
            elif lid == 'ja-n1-u4-l5' and len(qs) >= 4:
                for q_idx in range(len(qs)):
                    track = CHOUKAI_TRACKS_L20[q_idx % len(CHOUKAI_TRACKS_L20)]
                    qs[q_idx]['audioUrl'] = track[0]
                    qs[q_idx]['audioTitle'] = track[1]

            # Rebalance answers if monotonous or skewed
            indices = [q.get('correctAnswerIndex') for q in qs]
            if len(set(indices)) == 1 or indices.count(0) >= 3:
                # Distribute target indices nicely across 0, 1, 2, 3
                target_distribution = [(l_idx + q_idx) % 4 for q_idx in range(len(qs))]
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

with open(N1_PATH, 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print('N1 curriculum successfully remediated and written!')
