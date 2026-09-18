-- ==============================================================================
-- JLPT N5 - N1 Baseline Mock Exams Seeding Migration
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- JLPT N5 Exam
-- ------------------------------------------------------------------------------
INSERT INTO public.exams (id, title, description, type, is_published)
VALUES ('a0000005-0000-4000-8000-000000000001', 'JLPT N5 Rasmiy Mock Test (2026)', 'Boshlang''ich yapon tili darajasi. Lug''at, grammatika, o''qish va eshitish bo''limlari.', 'JLPT N5', true)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  type = EXCLUDED.type,
  is_published = EXCLUDED.is_published;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000005-0001-4000-8000-000000000001', 'a0000005-0000-4000-8000-000000000001', '言語知識 (Language Knowledge)', 'Language Knowledge', NULL, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000005-0002-4000-8000-000000000001', 'a0000005-0000-4000-8000-000000000001', '読解 (Reading Comprehension)', 'Reading', 'リーさんは 毎朝（まいあさ）７時に おきます。朝ご飯を 食べてから、８時に 自転車で 学校へ 行きます。学校は ８時半に 始まります。

---

きのう 田中さんと レストランへ 行きました。わたしは さかなを 食べました。田中さんは にくを 食べました。とても おいしかったです。二人で 3000円でした。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000005-0003-4000-8000-000000000001', 'a0000005-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '女の人が話しています。テーブルの上に何を置きますか？
女：食事の準備をしましょう。お皿を並べて、その右側にスプーンを置いてください。

---

男の人と女の人が話しています。男の人はあした何時に起きますか？
女：あしたは何時に出かけるの？
男：8時の電車に乗るから、7時に起きるよ。', 3)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

DELETE FROM public.exam_questions WHERE section_id IN ('b0000005-0001-4000-8000-000000000001', 'b0000005-0002-4000-8000-000000000001', 'b0000005-0003-4000-8000-000000000001');

INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000101-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  'きょうは 水曜日（すいようび）です。あしたは（　）曜日です。',
  'multiple_choice',
  '["火","木","金","土"]'::jsonb,
  '木',
  'Bugun Chorshanba (水曜日). Ertaga esa Payshanba (木曜日) bo''ladi.',
  1
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000102-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '教室（きょうしつ）の なかに つくえ（　）いすが あります。',
  'multiple_choice',
  '["と","が","を","も"]'::jsonb,
  'と',
  'Narsalarni sanashda ''va'' ma''nosida ''と'' yuklamasi keladi: tsukue to isu (stol va stul).',
  2
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000103-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '毎朝、新聞を（　）から、会社へ行きます。',
  'multiple_choice',
  '["読みます","読んで","読んだ","読む"]'::jsonb,
  '読んで',
  'Ketma-ket harakatlarda ''~te kara'' (qilib bo''lgach) grammatikasi qo''llanadi: Yonde kara.',
  3
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000104-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '駅まで バスで どの（　）かかりますか。',
  'multiple_choice',
  '["いくら","ぐらい","ごろ","なんにん"]'::jsonb,
  'ぐらい',
  'Vaqt yoki muddat miqdorini so''rashda ''dono gurai'' (taxminan qancha) birikmasi ishlatiladi.',
  4
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000105-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  'リーさんは 何で 学校へ 行きますか？',
  'multiple_choice',
  '["歩いて","バスで","自転車で","電車で"]'::jsonb,
  '自転車で',
  'Matnda aniq keltirilgan: ''jitensha de gakkou e ikimasu'' (velosipedda maktabga boradi).',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000106-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  '二人の 食事は いくらでしたか？',
  'multiple_choice',
  '["1500円","2000円","3000円","6000円"]'::jsonb,
  '3000円',
  'Matnda ''Futari de 3000-en deshita'' (ikkalamizga 3000 yen bo''ldi) deyilgan.',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000107-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  'お皿の右側に何を置きますか？',
  'multiple_choice',
  '["フォーク","ナイフ","スプーン","はし"]'::jsonb,
  'スプーン',
  'Ayol kishi: ''migi gawa ni supuun o oite kudasai'' (o''ng tomonga qoshiqni qo''ying) deb aytadi.',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000108-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  '男の人はあした何時に起きますか？',
  'multiple_choice',
  '["6時","7時","8時","9時"]'::jsonb,
  '7時',
  'Erkak kishi: ''7-ji ni okiru yo'' (soat 7 da uyg''onaman) deb javob beradi.',
  8
);

-- ------------------------------------------------------------------------------
-- JLPT N4 Exam
-- ------------------------------------------------------------------------------
INSERT INTO public.exams (id, title, description, type, is_published)
VALUES ('a0000004-0000-4000-8000-000000000001', 'JLPT N4 Rasmiy Mock Test (2026)', 'Bazaviy yapon tili darajasi. Kundalik suhbatlar, o''qish va tinglab tushunish.', 'JLPT N4', true)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  type = EXCLUDED.type,
  is_published = EXCLUDED.is_published;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000004-0001-4000-8000-000000000001', 'a0000004-0000-4000-8000-000000000001', '言語知識 (Language Knowledge)', 'Language Knowledge', NULL, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000004-0002-4000-8000-000000000001', 'a0000004-0000-4000-8000-000000000001', '読解 (Reading Comprehension)', 'Reading', '先週 新しい アパートに 引っ越しました。前の 部屋より 広くて 明るいですが、駅から 少し 遠くなりました。でも、近くに 静かな 公園が あるので 気に入っています。

---

【図書館の お知らせ】
本は 一人 5冊まで 2週間 借りられます。ただし、DVDや 雑誌の 最新号は 借りることが できません。図書館の 中で 見てください。返却期限は 必ず 守ってください。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000004-0003-4000-8000-000000000001', 'a0000004-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '女の学生と男の学生が話しています。男の学生はどうしてパーティーに来られませんか？
女：明日の夜、みんなでタワポンさんの送別会をするんだけど、来られる？
男：あー、明日はアルバイトのシフトが入っていて、休めないんだ。ごめんね。

---

駅で案内放送を聞いています。新幹線は何番線から発車しますか？
放送：まもなく11番線に、博多行き新幹線が到着いたします。黄色い線の内側までお下がりください。', 3)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

DELETE FROM public.exam_questions WHERE section_id IN ('b0000004-0001-4000-8000-000000000001', 'b0000004-0002-4000-8000-000000000001', 'b0000004-0003-4000-8000-000000000001');

INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000201-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '雨が 降って（　）、試合は 中止になりました。',
  'multiple_choice',
  '["きたので","くるのに","きたら","きても"]'::jsonb,
  'きたので',
  'Sabab-oqibatni bildirishda ''node'' qo''llaniladi: Ame ga futte kita node (yomg''ir yog''ib boshlaganligi sababli).',
  1
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000202-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '先生に 本を（　）。ありがとうございました。',
  'multiple_choice',
  '["あげました","くれました","いただきました","やりました"]'::jsonb,
  'いただきました',
  'Ustoz yoki hurmatli shaxsdan biror narsa qabul qilganda kamtarlik fe''li ''itadakimasu'' ishlatiladi.',
  2
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000203-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  'この漢字は どういう（　）ですか。',
  'multiple_choice',
  '["いみ","わけ","こと","りゆう"]'::jsonb,
  'いみ',
  'So''z yoki belgining ma''nosi so''ralganda ''imi'' (意味 - ma''no) so''zi to''g''ri keladi.',
  3
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000204-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '毎日 走る（　）に しています。健康のためです。',
  'multiple_choice',
  '["こと","よう","はず","わけ"]'::jsonb,
  'よう',
  'O''ziga odat qilib olish ma''nosida ''fe''l oddiy shakli + you ni suru'' ifodasi ishlatiladi.',
  4
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000205-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  '新しい アパートの どんなところが 気に入っていますか？',
  'multiple_choice',
  '["駅から とても 近いところ","近くに 静かな 公園が あるところ","家賃が 前より 安いところ","近くに 大きな スーパーが あるところ"]'::jsonb,
  '近くに 静かな 公園が あるところ',
  'Matnda aniq keltirilgan: ''chikaku ni shizukana kouen ga aru node ki ni itte imasu'' (yaqinida tinch bog'' borligi yoqmoqda).',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000206-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  '借りることが できないものは 何ですか？',
  'multiple_choice',
  '["古い小説","歴史の本","DVDや最新号の雑誌","辞書"]'::jsonb,
  'DVDや最新号の雑誌',
  'E''londa yozilgan: ''DVD ya zasshi no saishingou wa kariru koto ga dekimasen'' (DVD va yangi son jurnallarni qarzga olib ketib bo''lmaydi).',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000207-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '男の学生はどうしてパーティーに来られませんか？',
  'multiple_choice',
  '["風邪をひいたから","アルバイトがあるから","お金がないから","宿題が多いから"]'::jsonb,
  'アルバイトがあるから',
  'Erkak talaba: ''arubaito no shifuto ga haitte ite'' (yarim kunlik ish navbati borligi sababli) kela olmasligini aytadi.',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000208-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '新幹線は何番線から発車しますか？',
  'multiple_choice',
  '["10番線","11番線","12番線","13番線"]'::jsonb,
  '11番線',
  'E''londa aniq eshitiladi: ''11-bansen ni Hakata-yuki shinkansen ga touchaku itashimasu'' (11-yo''lga yetib keladi).',
  8
);

-- ------------------------------------------------------------------------------
-- JLPT N3 Exam
-- ------------------------------------------------------------------------------
INSERT INTO public.exams (id, title, description, type, is_published)
VALUES ('a0000003-0000-4000-8000-000000000001', 'JLPT N3 Rasmiy Mock Test (2026)', 'O''rta yapon tili darajasi. Murakkab grammatik tuzilmalar, maqolalar va suhbatlar.', 'JLPT N3', true)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  type = EXCLUDED.type,
  is_published = EXCLUDED.is_published;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000003-0001-4000-8000-000000000001', 'a0000003-0000-4000-8000-000000000001', '言語知識 (Language Knowledge)', 'Language Knowledge', NULL, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000003-0002-4000-8000-000000000001', 'a0000003-0000-4000-8000-000000000001', '読解 (Reading Comprehension)', 'Reading', '環境保護の観点から、プラスチックごみの削減が世界的な課題となっている。レジ袋の有料化以降、エコバッグを持参する消費者は確実に増えたが、容器包装プラスチックの総量は依然として高水準にある。単に消費者の意識に頼るだけでなく、企業側が分解可能な代替素材を積極的に採用することが不可欠である。

---

時間を有効に使うためには、「緊急度」と「重要度」の2つの軸でタスクを整理するとよい。多くの人は「緊急だが重要ではないこと」に追われがちだが、自己成長につながるのは「緊急ではないが重要なこと」である。毎日の読書や健康管理がその典型例だ。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000003-0003-4000-8000-000000000001', 'a0000003-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '会社で上司と部下が話しています。部下はこれから何を修正しますか？
上司：山田さん、提出してもらった企画書、大筋はいいんだけど、予算のグラフが去年のデータのままだよ。
部下：あ、大変失礼しました！すぐに最新のデータに差し替えます。
上司：うん、それとスケジュールのフォントも統一しておいてね。

---

留学生と先生が相談しています。留学生は何のビザを申請しなければなりませんか？
学生：先生、卒業後も日本で就職活動を続けたいのですが。
先生：それなら、「特定活動ビザ」への変更手続きが必要になりますよ。推薦状を準備しましょう。', 3)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

DELETE FROM public.exam_questions WHERE section_id IN ('b0000003-0001-4000-8000-000000000001', 'b0000003-0002-4000-8000-000000000001', 'b0000003-0003-4000-8000-000000000001');

INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000301-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '大事な 会議の 最中に、携帯電話が 鳴って（　）。',
  'multiple_choice',
  '["しまった","おいた","みた","いった"]'::jsonb,
  'しまった',
  'Kutilmagan yoki noxush hodisa yuz berganda ''~te shimatta'' (afsuski bo''lib qoldi) grammatikasi ishlatiladi.',
  1
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000302-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  'どんなに 頼まれても、この仕事を 引き受ける（　）には いかない。',
  'multiple_choice',
  '["もの","こと","わけ","はず"]'::jsonb,
  'わけ',
  '''~wake ni wa ikanai'' ijtimoiy yoki ahloqiy sababga ko''ra ''bunday qilib bo''lmaydi'' degan ma''noni ifodalaydi.',
  2
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000303-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '試験の 結果は、ウェブサイトに（　）次第、メールで ご連絡します。',
  'multiple_choice',
  '["発表する","発表した","発表され","発表して"]'::jsonb,
  '発表され',
  '''fe''l o''zagi (stem) + shidai'' (darhol, bo''lishi bilanoq) ma''nosini bildiradi: happyousare-shidai (e''lon qilinishi bilanoq).',
  3
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000304-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '最近の パソコンは 小型化される（　）、性能も 著しく 向上している。',
  'multiple_choice',
  '["反面","一方","途端","次第"]'::jsonb,
  '一方',
  'Biror tendensiyaning bir tomonlama rivojlanib borishini bildirishda ''ippou'' qo''llaniladi.',
  4
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000305-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '筆者が最も強調したい点はどれですか？',
  'multiple_choice',
  '["レジ袋の価格をもっと引き上げるべきだ","消費者の努力だけに頼らず、企業が代替素材を採用すべきだ","プラスチック製品の製造を完全に禁止すべきだ","エコバッグの普及率をさらに高める必要がある"]'::jsonb,
  '消費者の努力だけに頼らず、企業が代替素材を採用すべきだ',
  'Muallif: ''iste''molchilar ongi bilangina cheklanmay, korxonalar parchalanishi mumkin bo''lgan muqobil materiallarni qo''llashi shart'' deb ta''kidlaydi.',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000306-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '自己成長にとって最も重要だとされているのはどのようなことですか？',
  'multiple_choice',
  '["緊急かつ重要なこと","緊急だが重要ではないこと","緊急ではないが重要なこと","緊急でも重要でもないこと"]'::jsonb,
  '緊急ではないが重要なこと',
  'Matnda o''sish uchun eng muhimi: ''kinkyuu dewa nai ga juuyou na koto'' (shoshilinch bo''lmagan, lekin muhim ishlar) deb aniq aytilgan.',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000307-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '部下はまず何を修正しますか？',
  'multiple_choice',
  '["企画書のタイトル","予算のグラフのデータ","全体の構成","参加者のリスト"]'::jsonb,
  '予算のグラフのデータ',
  'Xodim o''tgan yilgi eski byudjet grafik ma''lumotlarini eng so''nggisiga almashtirishini aytadi.',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000308-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '留学生が申請するビザの種類は何ですか？',
  'multiple_choice',
  '["留学ビザ","特定活動ビザ","就労ビザ","観光ビザ"]'::jsonb,
  '特定活動ビザ',
  'O''qituvchi o''qishni tugatgach ish qidirish uchun ''Tokutei Katsudou Visa'' kerakligini tushuntiradi.',
  8
);

-- ------------------------------------------------------------------------------
-- JLPT N2 Exam
-- ------------------------------------------------------------------------------
INSERT INTO public.exams (id, title, description, type, is_published)
VALUES ('a0000002-0000-4000-8000-000000000001', 'JLPT N2 Rasmiy Mock Test (2026)', 'Yuqori o''rta daraja. Ilmiy va ijtimoiy matnlar, tezkor yaponcha dialoglar.', 'JLPT N2', true)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  type = EXCLUDED.type,
  is_published = EXCLUDED.is_published;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000002-0001-4000-8000-000000000001', 'a0000002-0000-4000-8000-000000000001', '言語知識 (Language Knowledge)', 'Language Knowledge', NULL, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000002-0002-4000-8000-000000000001', 'a0000002-0000-4000-8000-000000000001', '読解 (Reading Comprehension)', 'Reading', 'テレワークの普及により、労働者は通勤ストレスから解放された一方で、業務と私生活の境界が曖昧になるという弊害が指摘されている。常時接続された環境下では、終業後も連絡への対応を迫られ、慢性的な疲労蓄積を招く恐れがある。この問題に対処すべく、諸外国では「つながらない権利」を法制化する動きが加速している。日本においても、単なる柔軟な働き方の推進にとどまらず、労働者の心身の健康を守る明確なルール作りが喫緊の課題といえよう。

---

人工知能（AI）の急速な進化は、定型的な業務のみならず、創造性を要する分野にまで影響を及ぼし始めている。しかし、AIが生成する作品は過去の厖大なデータの再構成に過ぎず、人間特有の「個人的な体験や葛藤から生じる独自性」を代替することは原理的に不可能である。したがって、人間はAIを競合相手とみなすのではなく、自らの創造性を拡張するための道具として共生を図るべきである。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000002-0003-4000-8000-000000000001', 'a0000002-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', 'テレビで経済アナリストが話しています。今年度の個人消費の特徴は何ですか？
アナリスト：今年度は物価高の影響で生活必需品の節約志向が強まる一方、旅行やコンサートなど体験型の消費には惜しみなく支出する傾向が見られます。二極化が顕著になっています。

---

セミナーで講師が話しています。チームの生産性を高めるために最も重要な要素は何ですか？
講師：心理的安全性の確保です。失敗を恐れず率直に意見を言える環境こそが、イノベーションの土台となります。', 3)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

DELETE FROM public.exam_questions WHERE section_id IN ('b0000002-0001-4000-8000-000000000001', 'b0000002-0002-4000-8000-000000000001', 'b0000002-0003-4000-8000-000000000001');

INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000401-0000-4000-8000-000000000001',
  'b0000002-0001-4000-8000-000000000001',
  '景気の 低迷に（　）、多くの 企業が 採用人数を 削減した。',
  'multiple_choice',
  '["ともなって","関わらず","限らず","おいて"]'::jsonb,
  'ともなって',
  '''~ni tomonatte'' (biror narsa sodir bo''lishi bilan birga, mutanosib ravishda) ma''nosini beradi.',
  1
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000402-0000-4000-8000-000000000001',
  'b0000002-0001-4000-8000-000000000001',
  'いくら 経験が 豊富だからと（　）、過信は 禁物だ。',
  'multiple_choice',
  '["いっても","いったら","いえば","いって"]'::jsonb,
  'いっても',
  '''~kara to itte / to ittemo'' (garchi ... bo''lgan taqdirda ham) qolipi to''g''ri keladi.',
  2
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000403-0000-4000-8000-000000000001',
  'b0000002-0001-4000-8000-000000000001',
  '新商品の 発売を（　）、大規模な キャンペーンを 展開する。',
  'multiple_choice',
  '["めぐって","皮切りに","契機に","よそに"]'::jsonb,
  '皮切りに',
  '''~o kawakiri ni'' biror ketma-ket hodisalar zanjirining boshlanishi va startini ifodalaydi.',
  3
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000404-0000-4000-8000-000000000001',
  'b0000002-0001-4000-8000-000000000001',
  'あの 作家の 新作は、期待を（　）素晴らしい 傑作だった。',
  'multiple_choice',
  '["通して","裏切らない","もとにした","めざした"]'::jsonb,
  '裏切らない',
  '''kitai o uragiranai'' (kutilmalarni puchga chiqarmagan, ishonchni oqlagan) iborasi qo''llaniladi.',
  4
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000405-0000-4000-8000-000000000001',
  'b0000002-0002-4000-8000-000000000001',
  '筆者が日本社会に求めていることは何ですか？',
  'multiple_choice',
  '["テレワークを廃止し、全員がオフィスに出社すること","終業後の連絡を規制するなど、労働者の健康を守る明確なルールを作ること","諸外国と同じ労働法をそのまま無条件に導入すること","IT機器の利用時間を個人が自己責任で管理すること"]'::jsonb,
  '終業後の連絡を規制するなど、労働者の健康を守る明確なルールを作ること',
  'Muallif ish vaqtidan keyin aloqaga chiqmaslik huquqi kabi aniq himoya qoidalari zarurligini ta''kidlaydi.',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000406-0000-4000-8000-000000000001',
  'b0000002-0002-4000-8000-000000000001',
  '筆者によると、人間にしか生み出せないものとは何ですか？',
  'multiple_choice',
  '["膨大なデータに基づく正確な分析結果","個人的な体験や葛藤から生じる独自性","短時間で大量に作成できる絵画や文章","過去の様式を忠実に模倣した作品"]'::jsonb,
  '個人的な体験や葛藤から生じる独自性',
  'Matnda odamning o''z shaxsiy kechinmalari va ziddiyatlaridan kelib chiquvchi o''ziga xoslikni (独自性) sun''iy intellekt o''rnini bosa olmasligi yozilgan.',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000407-0000-4000-8000-000000000001',
  'b0000002-0003-4000-8000-000000000001',
  '今年度の個人消費の特徴として述べられているのはどれですか？',
  'multiple_choice',
  '["すべての分野で消費が均等に落ち込んでいる","日用品は節約するが、体験型のことにはお金を使うという二極化","高級ブランド品の売上だけが伸びている","オンラインショッピングの利用が激減している"]'::jsonb,
  '日用品は節約するが、体験型のことにはお金を使うという二極化',
  'Iste''molchilar ro''zg''or mahsulotlarida tejab, sayohat va konsert kabi tajriba (taiken) sohalariga pul sarflamoqda (qutblanish).',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000408-0000-4000-8000-000000000001',
  'b0000002-0003-4000-8000-000000000001',
  'チームの生産性を高めるために最重要とされているものは何ですか？',
  'multiple_choice',
  '["厳格な上下関係","心理的安全性","労働時間の延長","成果主義による競争"]'::jsonb,
  '心理的安全性',
  'Spiker jamoada psixologik xavfsizlik (shinriteki anzensei) eng asosiy omil ekanligini aytadi.',
  8
);

-- ------------------------------------------------------------------------------
-- JLPT N1 Exam
-- ------------------------------------------------------------------------------
INSERT INTO public.exams (id, title, description, type, is_published)
VALUES ('a0000001-0000-4000-8000-000000000001', 'JLPT N1 Rasmiy Mock Test (2026)', 'Professional yuqori daraja. Gazeta maqolalari, falsafiy va ijtimoiy tahliliy matnlar.', 'JLPT N1', true)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  type = EXCLUDED.type,
  is_published = EXCLUDED.is_published;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000001-0001-4000-8000-000000000001', 'a0000001-0000-4000-8000-000000000001', '言語知識 (Language Knowledge)', 'Language Knowledge', NULL, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000001-0002-4000-8000-000000000001', 'a0000001-0000-4000-8000-000000000001', '読解 (Reading Comprehension)', 'Reading', '近代合理主義の進展は、自然を人間が支配・利用すべき客体として捉える二元論的世界観を定着させた。この知のパラダイムは産業革命を駆動し、物質的繁栄をもたらしたが、同時に生態系の深刻な破壊と人間自身の疎外という未曽有の危機を胚胎していた。今求められているのは、人間を自然の支配者ではなく、生命圏の不可分な一環として再定位する思想的転回である。東洋の伝統思想に見られる「天人合一」の境地は、持続可能な文明を再構築する上で、極めて示唆に富む洞察を提供している。

---

古典を読む意義は、単なる過去の知識の蓄積にあるのではない。同時代の価値観に無批判に同調しがちな我々の思考の偏りを、異なる時代精神の鏡に照らし出すことによって自覚化させ、相対化する点にこそある。古典との対話は、自明視されている現代の前提を疑う批判的思考の契機となるのである。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000001-0003-4000-8000-000000000001', 'a0000001-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '大学の公開講座で教授が話しています。科学哲学においてパラダイムシフトが起こる契機とは何ですか？
教授：既存の理論的枠組みでは到底説明のつかない「アノマリー（変則事象）」が累積し、もはや無視できないレベルに達したとき、根本的な転換が促されるのです。

---

国際シンポジウムで言語学者が話しています。言語の多様性を保持すべき理由は何ですか？
言語学者：言語の消滅は、単なる語彙の喪失にとどまりません。その言語共同体が何世代にもわたって培ってきた独自の認識体系や世界観そのものが永遠に失われることを意味するからです。', 3)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

DELETE FROM public.exam_questions WHERE section_id IN ('b0000001-0001-4000-8000-000000000001', 'b0000001-0002-4000-8000-000000000001', 'b0000001-0003-4000-8000-000000000001');

INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000501-0000-4000-8000-000000000001',
  'b0000001-0001-4000-8000-000000000001',
  '国家の 安全保障に 関わる 重大な 秘密を（　）漏らすことは 許されない。',
  'multiple_choice',
  '["たりとも","だに","すら","まじき"]'::jsonb,
  'たりとも',
  '''~taritomo (...nai)'' qolipi ''hatto zarracha ham'' degan kuchli inkor ma''nosini bildiradi: ichi-nichi taritomo / sukoshi taritomo.',
  1
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000502-0000-4000-8000-000000000001',
  'b0000001-0001-4000-8000-000000000001',
  '親友の 突然の 訃報に、悲しみを（　）ことが できなかった。',
  'multiple_choice',
  '["禁じ得ない","禁じざる","禁じかねない","禁じ得る"]'::jsonb,
  '禁じ得ない',
  '''~kinji enai'' hissiyotlarni bosib tura olmaslik, tiyib bo''lmas qayg''uni bildiradi: kanashimi o kinji enai.',
  2
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000503-0000-4000-8000-000000000001',
  'b0000001-0001-4000-8000-000000000001',
  '誠心誠意の 謝罪が あって（　）、初めて 和解への 道が 開かれる。',
  'multiple_choice',
  '["こそあれ","ならでは","をおいて","なりに"]'::jsonb,
  'こそあれ',
  '''A atte koso / koso are'' ta''kid qolipi: chin dildan uzr bo''lgandagina yo''l ochiladi.',
  3
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000504-0000-4000-8000-000000000001',
  'b0000001-0001-4000-8000-000000000001',
  '公職に ある者が、私利私欲を 肥やすなど 断じて（　）行為だ。',
  'multiple_choice',
  '["あるまじき","ありがちな","あるべき","あり得る"]'::jsonb,
  'あるまじき',
  '''~aru majiki'' qolipi kasbiy yoki mavqe nuqtai nazaridan ''aslo yo''l qo''yib bo''lmaydigan'' ma''nosini anglatadi.',
  4
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000505-0000-4000-8000-000000000001',
  'b0000001-0002-4000-8000-000000000001',
  '筆者の主張の核心として最も適切なものはどれですか？',
  'multiple_choice',
  '["近代合理主義による産業革命の成果を全面的に放棄すべきだ","自然を支配の対象とみなす思想を改め、自然と共生する世界観へ転換すべきだ","東洋思想は西洋の科学技術と一切相容れないものである","生態系の破壊は科学技術のさらなる進歩によってのみ解決できる"]'::jsonb,
  '自然を支配の対象とみなす思想を改め、自然と共生する世界観へ転換すべきだ',
  'Muallif inson tabiat ustidan hukmronlik qilishi haqidagi qarashdan voz kechib, tabiat bilan uyg''unlikdagi falsafaga o''tish lozimligini ta''kidlaydi.',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000506-0000-4000-8000-000000000001',
  'b0000001-0002-4000-8000-000000000001',
  '筆者が考える「古典を読む最大の意義」とは何ですか？',
  'multiple_choice',
  '["過去の歴史的事実を暗記し、教養を高めること","現代の価値観を絶対的な基準として過去の誤りを批判すること","自らの時代の前提を相対化し、批判的に省察する契機を得ること","古風な文体を模倣して美しい文章を書けるようになること"]'::jsonb,
  '自らの時代の前提を相対化し、批判的に省察する契機を得ること',
  'Klassik asarlarni o''qish orqali zamonamiz qoliplaridan chiqib, tanqidiy fikrlash (批判的思考) imkoniyati paydo bo''ladi.',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000507-0000-4000-8000-000000000001',
  'b0000001-0003-4000-8000-000000000001',
  'パラダイムシフトが起こる根本的な契機として述べられているのはどれですか？',
  'multiple_choice',
  '["学会の指導者が交代したとき","既存の理論で説明できない変則事象が累積したとき","実験機器の予算が大幅に増額されたとき","社会一般の関心が科学から離れたとき"]'::jsonb,
  '既存の理論で説明できない変則事象が累積したとき',
  'Professor mavjud nazariyalar tushuntirib bera olmaydigan anomaliyalar to''planib ketganda paradigma o''zgarishini aytadi.',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000508-0000-4000-8000-000000000001',
  'b0000001-0003-4000-8000-000000000001',
  '言語学者が言語の多様性を重要視する最大の理由は何ですか？',
  'multiple_choice',
  '["観光産業の発展に直結するから","独自の認識体系や世界観の喪失を防ぐため","外国語学習者の教材を増やすため","翻訳技術の精度を測る指標になるから"]'::jsonb,
  '独自の認識体系や世界観の喪失を防ぐため',
  'Tilning yo''qolishi shu xalqning asrlar davomida shakllangan o''ziga xos dunyoqarashi va idrok tizimining yo''qolishidir.',
  8
);

