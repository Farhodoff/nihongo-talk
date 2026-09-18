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

きのう 田中さんと レストランへ 行きました。わたしは さかなを 食べました。田中さんは にくを 食べました。とても おいしかったです。二人で 3000円でした。

---

【母からのメモ】
タケシへ。
冷蔵庫の中にカレーがあります。電子レンジで2分温めて食べてください。食べたあとで、お皿を洗っておいてね。お母さんは8時に帰ります。

---

山田さんの日記：
土曜日は朝から雨が降っていましたから、一日中うちで映画を見ました。日曜日はとてもいい天気でした。山田さんは朝9時から公園を散歩して、午後から友達とお茶を飲みました。楽しかったです。

---

はじめまして、マリアです。ブラジルから来ました。日本に来て3か月になります。最初は日本語が全然わかりませんでしたが、クラスの友達や先生が親切に教えてくれました。今はひらがなとカタカナが読めます。来週から漢字の勉強が始まります。少し難しいですが、一生懸命がんばります。

---

【さくらクリニック 診療案内】
・月曜日〜金曜日：午前 9:00〜12:30 / 午後 14:30〜18:00
・土曜日：午前 9:00〜13:00（午後は休診）
・休診日：日曜日・祝日
※予約がない方は、受付終了の30分前までにお越しください。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000005-0003-4000-8000-000000000001', 'a0000005-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '女の人が話しています。テーブルの上に何を置きますか？
女：食事の準備をしましょう。お皿を並べて、その右側にスプーンを置いてください。

---

男の人と女の人が話しています。男の人はあした何時に起きますか？
女：あしたは何時に出かけるの？
男：8時の電車に乗るから、7時に起きるよ。

---

男の人と女の人が話しています。二人はどこで会いますか？
男：明日の待ち合わせ、駅の改札口にする？
女：うーん、改札口は人が多くて見つけにくいよ。北口の本屋さんの前にしない？
男：そうだね、じゃあそこにしよう。

---

先生が学生に話しています。学生は明日何を持ってこなければなりませんか？
先生：みなさん、明日は作文のテストをします。えんぴつと消しゴムを必ず持ってきてください。辞書や教科書は使えませんから、机の上に出さないでください。

---

女の人と男の人が話しています。男の人は何を着て出かけますか？
女：外は風が強くて寒いよ。上着を着ていったほうがいいよ。
男：うん、じゃあ厚いコートを着ていくよ。帽子もかぶろう。

---

レストランで男の人と店員が話しています。男の人は飲み物に何を頼みましたか？
店員：ご注文はお決まりですか？
男：カレーライスを一つお願いします。それから、冷たいお茶をください。
店員：かしこまりました。冷たいお茶ですね。', 3)
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
  'Bugun Chorshanba (水曜日). Ertaga esa Payshanba (木曜日 - もくようび) bo''ladi. 火曜日 - Seshanba, 金曜日 - Juma, 土曜日 - Shanba.',
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
  'Narsalarni to''liq sanab o''tishda ''va'' ma''nosida ''と'' yuklamasi keladi: つくえ と いす (stol va stul).',
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
  'Ketma-ket harakatlarda ''~te kara'' (qilib bo''lgach) grammatikasi qo''llanadi: 読んでから (o''qib bo''lgach).',
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
  'Vaqt yoki muddat miqdorini (taxminan qancha) so''rashda ''どのぐらい'' (dono gurai) birikmasi ishlatiladi.',
  4
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000105-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '田中さんは（毎朝）ジョギングを します。',
  'multiple_choice',
  '["まいあさ","まいばん","まいとし","まいにち"]'::jsonb,
  'まいあさ',
  '「毎朝」kanjisining to''g''ri o''qilishi — まいあさ (har tong). 毎晩 - har oqshom, 毎日 - har kun.',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000106-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  'わたしは 毎朝 7時半（　）起きます。',
  'multiple_choice',
  '["に","で","を","へ"]'::jsonb,
  'に',
  'Aniq vaqt ko''rsatkichlaridan keyin (soat, daqiqa) ''に'' yuklamasi qo''yiladi: 7時半に 起きます (7 yarimda uyg''onaman).',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000107-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '日本人は はし（　）ご飯を 食べます。',
  'multiple_choice',
  '["に","で","を","へ"]'::jsonb,
  'で',
  'Biror vosita yoki qurol yordamida harakat bajarilganda ''で'' yuklamasi ishlatiladi: はしで (cho''p bilan).',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000108-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '部屋が 暗いですから、電気を（　）ください。',
  'multiple_choice',
  '["つけて","消して","あけて","しめて"]'::jsonb,
  'つけて',
  'Xona qorong''i bo''lgani uchun chiroqni yoqish so''ralmoqda. Chiroqni yoqish — つける (つけます -> つけて). 消す - o''chirmoq.',
  8
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000109-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '日曜日、デパートへ（友だち）と 行きました。',
  'multiple_choice',
  '["こども","ともだち","きょうだい","かぞく"]'::jsonb,
  'ともだち',
  '「友だち」kanjisining to''g''ri o''qilishi — ともだち (do''st). 子ども - bola, 家族 - oila.',
  9
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000110-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  'ここは 図書館ですから、大きな声で（　）で ください。',
  'multiple_choice',
  '["話さない","話す","話して","話した"]'::jsonb,
  '話さない',
  'Biror ishni qilmaslikni so''rashda inkor ''〜ないでください'' qolipi ishlatiladi: 話さないでください (gapirmang).',
  10
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000111-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  'この みかんは 甘くて、（　）です。',
  'multiple_choice',
  '["おいしい","おいしくて","おいしかった","おいしくない"]'::jsonb,
  'おいしい',
  'Gap oxirida kesim sifatida i-sifatning lug''aviy shakli + です keladi: 甘くて、おいしいです (shirin va mazali).',
  11
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000112-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  'テーブルの上に ペンが（　）あります。',
  'multiple_choice',
  '["3ぽん","3まい","3さつ","3だい"]'::jsonb,
  '3ぽん',
  'Qalam, ruchka kabi uzun ingichka buyumlar ''本 (ほん/ぼん/ぽん)'' sanoq so''zi bilan sanaladi: 3本 (さんぼん).',
  12
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000113-0000-4000-8000-000000000001',
  'b0000005-0001-4000-8000-000000000001',
  '正しい文を作ってください：
昨日 ＿＿ ＿＿ ★ ＿＿ 買いました。',
  'multiple_choice',
  '["デパートで","新しい","靴（くつ）を","友達と"]'::jsonb,
  '靴（くつ）を',
  'To''g''ri tartib: 昨日 [友達と] [デパートで] [★ 靴を] [新しい] 買いました (yoki 新しい 靴を). Yulduzcha o''rnida 靴を (3-variant) turadi.',
  13
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000114-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  'リーさんは 何で 学校へ 行きますか？',
  'multiple_choice',
  '["歩いて","バスで","自転車で","電車で"]'::jsonb,
  '自転車で',
  'Matnda aniq keltirilgan: ''jitensha de gakkou e ikimasu'' (velosipedda maktabga boradi).',
  14
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000115-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  '二人の 食事は いくらでしたか？',
  'multiple_choice',
  '["1500円","2000円","3000円","6000円"]'::jsonb,
  '3000円',
  'Matnda ''Futari de 3000-en deshita'' (ikkalamizga jami 3000 yen bo''ldi) deyilgan.',
  15
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000116-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  'タケシさんは カレーを 食べた後で、何を しなければなりませんか？',
  'multiple_choice',
  '["カレーを作る","お皿を洗う","母を駅へ迎えに行く","冷蔵庫を掃除する"]'::jsonb,
  'お皿を洗う',
  'Onaning xatida: ''食べたあとで、お皿を洗っておいてね'' (ovqatlangandan so''ng likopchalarni yuvib qo''y) deb topshiriq berilgan.',
  16
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000117-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  '山田さんは 日曜日の午前に 何を しましたか？',
  'multiple_choice',
  '["映画を見た","友達とお茶を飲んだ","公園を散歩した","一日中うちにいた"]'::jsonb,
  '公園を散歩した',
  'Matnda: ''日曜日はとてもいい天気でした。山田さんは朝9時から公園を散歩して...'' (yakshanba ertalab 9 dan parkda sayr qildi) deb yozilgan.',
  17
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000118-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  'マリアさんは 今、何が できますか？',
  'multiple_choice',
  '["漢字がたくさん読める","ひらがなとカタカナが読める","日本語でスピーチができる","英語を教えている"]'::jsonb,
  'ひらがなとカタカナが読める',
  'Matnda: ''今はひらがなとカタカナが読めます'' (Hozir hiragana va katakanani o''qiy olaman) deb yozilgan. Kanji o''rganish kelasi hafta boshlanadi.',
  18
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000119-0000-4000-8000-000000000001',
  'b0000005-0002-4000-8000-000000000001',
  '土曜日の 午後3時に このクリニックで 診察を 受けることが できますか？',
  'multiple_choice',
  '["受けることができる","予約があれば受けられる","午後は休診なので受けることができない","祝日なら受けられる"]'::jsonb,
  '午後は休診なので受けることができない',
  'E''londa yozilgan: ''土曜日：午前 9:00〜13:00（午後は休診）'' — Shanba kuni tushdan keyin klinika ishlamaydi (休診 - qabul yo''q).',
  19
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000120-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  'お皿の右側に何を置きますか？',
  'multiple_choice',
  '["フォーク","ナイフ","スプーン","はし"]'::jsonb,
  'スプーン',
  'Ayol kishi: ''migi gawa ni supuun o oite kudasai'' (o''ng tomonga qoshiqni qo''ying) deb aytadi.',
  20
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000121-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  '男の人はあした何時に起きますか？',
  'multiple_choice',
  '["6時","7時","8時","9時"]'::jsonb,
  '7時',
  'Erkak kishi: ''7-ji ni okiru yo'' (soat 7 da uyg''onaman) deb javob beradi.',
  21
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000122-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  '二人は 明日 どこで 会いますか？',
  'multiple_choice',
  '["駅の改札口","北口の本屋の前","南口のカフェ","映画館の入り口"]'::jsonb,
  '北口の本屋の前',
  'Suhbatda ayol ''北口の本屋さんの前にしない？'' (Shimoliy chiqishdagi kitob do''koni oldi bo''lsinmi?) deb taklif qiladi va erkak rozi bo''ladi.',
  22
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000123-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  '学生は 明日 机の上に 何を 出しますか？',
  'multiple_choice',
  '["辞書と教科書","えんぴつと消しゴム","ノートと教科書","携帯電話"]'::jsonb,
  'えんぴつと消しゴム',
  'O''qituvchi: ''えんぴつと消しゴムを必ず持ってきてください'' (Qalam va o''chirg''ichni albatta olib keling) deb ta''kidlaydi.',
  23
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000124-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  '男の人は 何を着て 出かけますか？',
  'multiple_choice',
  '["薄いシャツ","厚いコート","レインコート","セーターだけ"]'::jsonb,
  '厚いコート',
  'Erkak kishi: ''じゃあ厚いコートを着ていくよ'' (U holda qalin palto kiyib boraman) deb javob beradi.',
  24
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000125-0000-4000-8000-000000000001',
  'b0000005-0003-4000-8000-000000000001',
  '男の人は 飲み物に 何を 頼みましたか？',
  'multiple_choice',
  '["温かいコーヒー","冷たいお茶","ジュース","コーラ"]'::jsonb,
  '冷たいお茶',
  'Mijoz: ''冷たいお茶をください'' (Muzdek choy bering) deb buyurtma qiladi.',
  25
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
本は 一人 5冊まで 2週間 借りられます。ただし、DVDや 雑誌の 最新号は 借りることが できません。図書館の 中で 見てください。返却期限は 必ず 守ってください。

---

【ごみ収集（しゅうしゅう）の ルール】
・燃えるごみ：火曜日・金曜日の 朝8時まで。
・燃えないごみ：第2・第4水曜日の 朝8時まで。
・資源ごみ（ペットボトル・びん・缶）：木曜日の 朝8時まで。
※前日の夜には 絶対に 出さないでください。カラスや猫が ごみを荒らす原因になります。

---

先週の日曜日、留学生センターの料理教室に参加しました。先生から「肉じゃが」の作り方を習いました。じゃがいもや牛肉をしょうゆと砂糖で煮る日本の家庭料理です。思ったより簡単で、とても美味しかったです。来週、自分の国から来た友達をアパートに招待して作ってあげるつもりです。

---

【業務連絡メール】
宛先：田中課長
発信：営業部 佐藤
お疲れ様です。本日15時に予定していたABC商事との打ち合わせですが、先方の担当者が急な出張となったため、来週月曜日の午前10時に変更となりました。会議室の予約も変更済みです。よろしくお願いいたします。

---

【休日メトロ1日乗り放題きっぷ】
・土曜日、日曜日、国民の祝日に限り利用可能。
・大人：600円 / 子ども：300円
・地下鉄全線が1日中何度でも乗り降り自由。
※JR線や民間鉄道、都営バスにはご利用いただけません。自動券売機でお買い求めください。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000004-0003-4000-8000-000000000001', 'a0000004-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '女の学生と男の学生が話しています。男の学生はどうしてパーティーに来られませんか？
女：明日の夜、みんなでタワポンさんの送別会をするんだけど、来られる？
男：あー、明日はアルバイトのシフトが入っていて、休めないんだ。ごめんね。

---

駅で案内放送を聞いています。新幹線は何番線から発車しますか？
放送：まもなく11番線に、博多行き新幹線が到着いたします。黄色い線の内側までお下がりください。

---

会社で課長と女性社員が話しています。女性社員はまず何をしますか？
課長：佐藤さん、午後の会議の準備だけど、資料のコピーはできた？
女性：あ、まだ会議室の予約をしただけです。
課長：そうか。じゃあ、先にこの資料を20部コピーして会議室に持っていって。パソコンの準備はその後でいいから。
女性：はい、わかりました。すぐやります。

---

病院で医者と男の人が話しています。男の人は白い薬をいつ飲みますか？
医者：喉の痛みを抑える白い薬と、熱が出たときだけの青い薬を出しますね。
男：はい。
医者：白い薬は毎食後、必ず水と一緒に飲んでください。青い薬は38度以上の熱が出たときだけですよ。
男：わかりました。

---

店で客と店員が話しています。客はどうやって支払いますか？
店員：お会計は4200円になります。
客：クレジットカードは使えますか？
店員：すみません、ただいま通信端末の故障でカードとバーコード決済が使えないんです。現金かSuicaなどの交通系電子マネーのみとなります。
客：そうですか。じゃあSuicaでお願いします。

---

男の人と女の人が明日の旅行について話しています。二人は何時の電車に乗りますか？
男：明日は9時の特急に乗る予定だったよね？
女：うん。でも現地の博物館が10時から特別展をやるから、できればもう一本早い8時半の電車にしない？
男：いいね。じゃあ8時半のに乗ろう。駅には8時15分に集合ね。', 3)
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
  'b0000004-0001-4000-8000-000000000001',
  '来年の（計画）を 立てています。',
  'multiple_choice',
  '["けいかく","けいがく","けいかっ","かいかく"]'::jsonb,
  'けいかく',
  '「計画」kanjisining to''g''ri o''qilishi — けいかく (reja).',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000206-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '漢字が 難しくて、日本の新聞が まだ（　）。',
  'multiple_choice',
  '["読めません","読みません","読まれません","読ませません"]'::jsonb,
  '読めません',
  'Qobiliyat yetmasligida imkoniyat/potentsial fe''lining inkori ishlatiladi: 読めません (o''qiy olmayman).',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000207-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '風で ドアが（　）しまいました。',
  'multiple_choice',
  '["閉めて","閉まって","開けて","止めて"]'::jsonb,
  '閉まって',
  'Eshik shamolda o''z-o''zidan yopilgani uchun o''timsiz fe''l (jidoushi) ''閉まる'' (しまって) ishlatiladi.',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000208-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '熱が ありますから、今日は 早く 寝た（　）が いいですよ。',
  'multiple_choice',
  '["ほう","こと","もの","よう"]'::jsonb,
  'ほう',
  'Tavsiya va maslahat berishda ''fe''l ta-shakli + ほうがいい'' qo''llaniladi: 寝たほうがいい (uxlaganingiz ma''qul).',
  8
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000209-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '弟に 大切な ケーキを（　）しまいました。',
  'multiple_choice',
  '["食べて","食べられて","食べさせて","食べられても"]'::jsonb,
  '食べられて',
  'Birovning harakatidan noxush zarar ko''rilganda majhullik (ukemi) ishlatiladi: 食べられてしまいました.',
  9
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000210-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '空が 暗くなってきました。今にも 雨が（　）そうです。',
  'multiple_choice',
  '["降る","降り","降った","降って"]'::jsonb,
  '降り',
  'Ko''rinishdan sodir bo''lish arafasidagi holat uchun ''fe''l o''zagi + そうだ'' ishlatiladi: 降りそうです.',
  10
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000211-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '駅前の 図書館へ 本を（　）に 行きます。',
  'multiple_choice',
  '["返し","返す","返して","返した"]'::jsonb,
  '返し',
  'Maqsad bilan borishda ''fe''l o''zagi + に行く'' qo''llanadi: 返しに行きます (topshirgani boraman).',
  11
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000212-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '田中さんは 用事があるから、今日のパーティーには（　）と 言っていました。',
  'multiple_choice',
  '["来られない","来ないで","来させる","来られる"]'::jsonb,
  '来られない',
  'Kela olmaslik haqidagi iqtibos: potentsial inkor ''来られない'' (korarenai to itte imashita).',
  12
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000213-0000-4000-8000-000000000001',
  'b0000004-0001-4000-8000-000000000001',
  '正しい文を作ってください：
日本へ ＿＿ ＿＿ ★ ＿＿ 勉強しています。',
  'multiple_choice',
  '["留学するために","大学で","経済を","一生懸命"]'::jsonb,
  '経済を',
  'To''g''ri tartib: 日本へ [留学するために] [大学で] [★ 経済を] [一生懸命] 勉強しています -> 経済を (3-variant).',
  13
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000214-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  '新しい アパートの どんなところが 気に入っていますか？',
  'multiple_choice',
  '["駅から とても 近いところ","近くに 静かな 公園が あるところ","家賃が 前より 安いところ","近くに 大きな スーパーが あるところ"]'::jsonb,
  '近くに 静かな 公園が あるところ',
  'Matnda aniq keltirilgan: ''chikaku ni shizukana kouen ga aru node ki ni itte imasu'' (yaqinida tinch bog'' borligi yoqmoqda).',
  14
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000215-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  '借りることが できないものは 何ですか？',
  'multiple_choice',
  '["古い小説","歴史の本","DVDや最新号の雑誌","辞書"]'::jsonb,
  'DVDや最新号の雑誌',
  'E''londa yozilgan: ''DVD ya zasshi no saishingou wa kariru koto ga dekimasen'' (DVD va yangi son jurnallarni qarzga olib ketib bo''lmaydi).',
  15
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000216-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  'ペットボトルや空き缶は、いつ 出さなければなりませんか？',
  'multiple_choice',
  '["火曜日の夜","水曜日の朝8時まで","木曜日の朝8時まで","金曜日の午後"]'::jsonb,
  '木曜日の朝8時まで',
  'Qoidalarda resurs chiqindilari (資源ごみ: pet butilkalar, bankalar) ''木曜日の 朝8時まで'' (Payshanba ertalab soat 8 gacha) deb belgilangan.',
  16
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000217-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  'この文章の内容と合っているものはどれですか？',
  'multiple_choice',
  '["肉じゃがを作るのはとても難しかった","友達のためにすでにアパートで作った","来週友達を招待して肉じゃがを作るつもりだ","先生に料理を振る舞った"]'::jsonb,
  '来週友達を招待して肉じゃがを作るつもりだ',
  'Matn oxirida yozilgan: ''来週、自分の国から来た友達をアパートに招待して作ってあげるつもりです'' (Kelasi hafta do''stlarimni chaqirib pishirib bermoqchiman).',
  17
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000218-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  '打ち合わせの日時が変更になった理由は何ですか？',
  'multiple_choice',
  '["会議室が予約できなかったから","佐藤さんが病気になったから","田中課長が不在だったから","先方の担当者が急に出張になったから"]'::jsonb,
  '先方の担当者が急に出張になったから',
  'Email matnida aniq ko''rsatilgan: ''先方の担当者が急な出張となったため'' (hamkor tomon mas''ul xodimi to''satdan xizmat safariga ketgani sababli).',
  18
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000219-0000-4000-8000-000000000001',
  'b0000004-0002-4000-8000-000000000001',
  'この切符について 正しい 説明は どれですか？',
  'multiple_choice',
  '["平日の通勤時にも使える","バスにも自由に乗ることができる","土日や祝日に地下鉄全線で何度でも使える","JR線にも自由に乗ることができる"]'::jsonb,
  '土日や祝日に地下鉄全線で何度でも使える',
  'Qoidalarda aytilganidek: dam olish va bayram kunlarida metroning barcha liniyalarida cheksiz foydalanish mumkin. Boshqa transportlarda esa amal qilmaydi.',
  19
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000220-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '男の学生はどうしてパーティーに来られませんか？',
  'multiple_choice',
  '["風邪をひいたから","アルバイトがあるから","お金がないから","宿題が多いから"]'::jsonb,
  'アルバイトがあるから',
  'Erkak talaba: ''arubaito no shifuto ga haitte ite'' (yarim kunlik ish navbati borligi sababli) kela olmasligini aytadi.',
  20
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000221-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '新幹線は何番線から発車しますか？',
  'multiple_choice',
  '["10番線","11番線","12番線","13番線"]'::jsonb,
  '11番線',
  'E''londa aniq eshitiladi: ''11-bansen ni Hakata-yuki shinkansen ga touchaku itashimasu'' (11-yo''lga yetib keladi).',
  21
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000222-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '女性社員は まず 何を しますか？',
  'multiple_choice',
  '["会議室を予約する","資料を20部コピーする","パソコンの準備をする","お茶を入れる"]'::jsonb,
  '資料を20部コピーする',
  'Boshliq: ''先にこの資料を20部コピーして会議室に持っていって'' (avval ushbu hujjatdan 20 nusxa ko''chirib majlis xonasiga olib bor) deb buyuradi.',
  22
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000223-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '男の人は 白い薬を いつ 飲みますか？',
  'multiple_choice',
  '["毎食後","寝る前","熱が38度以上出たときだけ","朝起きたときだけ"]'::jsonb,
  '毎食後',
  'Shifokor: ''白い薬は毎食後、必ず水と一緒に飲んでください'' (oq dorini har ovqatdan keyin iching) deb uqtiradi.',
  23
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000224-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '客は どうやって 支払いますか？',
  'multiple_choice',
  '["クレジットカード","スマホのバーコード決済","交通系電子マネー（Suica）","商品券"]'::jsonb,
  '交通系電子マネー（Suica）',
  'Xaridor bank kartasi ishlamagach: ''じゃあSuicaでお願いします'' (undog'' bo''lsa Suica transport elektron puli bilan to''layman) deydi.',
  24
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000225-0000-4000-8000-000000000001',
  'b0000004-0003-4000-8000-000000000001',
  '二人は 明日 何時の 電車に 乗りますか？',
  'multiple_choice',
  '["8時","8時15分","8時半","9時"]'::jsonb,
  '8時半',
  'Ayol 8:30 dagi poyezdni taklif qiladi va erkak ham rozi bo''ladi (''8時半のに乗ろう''). 8:15 esa stantsiyada uchrashish vaqti.',
  25
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

時間を有効に使うためには、「緊急度」と「重要度」の2つの軸でタスクを整理するとよい。多くの人は「緊急だが重要ではないこと」に追われがちだが、自己成長につながるのは「緊急ではないが重要なこと」である。毎日の読書や健康管理がその典型例だ。

---

テレワークの普及により通勤負担は激減したが、オフィスでの偶然の立ち話や雑談から生まれていたクリエイティブな発想やチームの一体感が薄れるという弊害も生じている。テキストチャットや画面越しの定例会議だけでは相手の微妙な感情の機微を察知しにくいため、週に数日の出社日を設けたり、オンライン上で気軽に雑談できる場を意図的に設ける企業が増えている。

---

現代はインターネット上で膨大な要約や解説動画を即座に閲覧できる時代である。しかし、一冊の書物を最初から最後までじっくりと読み通す経験には、それに代えがたい独自の価値が存在する。著者が長い論理の筋道をどのように組み立て、どのような葛藤を経て結論に至ったのかを追体験することによってのみ、表面的な知識にとどまらない「本質を見抜く深い洞察力」が培われるからである。

---

【クラウドサービス利用規約および料金改定のお知らせ】
平素は当ストレージサービスをご利用いただき、誠にありがとうございます。
このたび、最新のセキュリティ基盤強化およびAI検索機能の標準搭載に伴い、2026年10月1日より月額利用料を現行の1,200円から1,500円に改定いたします。
なお、現行プランをご契約中のお客様は、9月30日までに1年契約の自動更新をお申し込みいただくことで、向こう1年間は旧料金（月額1,200円）のまま新機能をご利用いただけます。

---

【コワーキングスペース『MIRAI』料金プランのご案内】
・デイタイム会員（平日 9:00〜18:00利用可能）：月額15,000円
・ナイト＆ホリデー会員（平日 18:00〜23:00 および 土日祝日終日）：月額12,000円
・フルタイム会員（24時間365日利用可能、登記利用可）：月額28,000円
※全プランでフリードリンク、高速Wi-Fi、通話専用ブースが無料利用可能。会議室利用は1時間あたり別途1,000円（フルタイム会員は月3時間まで無料）。', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;

INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)
VALUES ('b0000003-0003-4000-8000-000000000001', 'a0000003-0000-4000-8000-000000000001', '聴解 (Listening Comprehension)', 'Listening', '会社で上司と部下が話しています。部下はこれから何を修正しますか？
上司：山田さん、提出してもらった企画書、大筋はいいんだけど、予算のグラフが去年のデータのままだよ。
部下：あ、大変失礼しました！すぐに最新のデータに差し替えます。
上司：うん、それとスケジュールのフォントも統一しておいてね。

---

留学生と先生が相談しています。留学生は何のビザを申請しなければなりませんか？
学生：先生、卒業後も日本で就職活動を続けたいのですが。
先生：それなら、「特定活動ビザ」への変更手続きが必要になりますよ。推薦状を準備しましょう。

---

会社で男性社員と女性上司が話しています。男性社員は今日中に何を終わらせなければなりませんか？
男：課長、来週のセミナーの発表スライドと、取引先へ送る見積書の作成があるのですが、どちらを優先しましょうか？
上司：スライドは明日一緒に見直すから、今日はまず見積書を直ちに完成させて先方にメール送信しておいて。
男：承知しました。見積書を最優先で片付けます。

---

デパートの館内放送を聞いています。迷子のお子様の特徴は何ですか？
放送：お客様にお呼び出しを申し上げます。4階おもちゃ売り場にて、4歳くらいの男の子がお連れ様をお探しです。青い長袖Tシャツに、黒い半ズボンを着用し、赤い帽子をかぶっております。お心当たりのあるお客様は、1階案内所までお越しください。

---

ホテルのフロントで客と係員が話しています。客は何時の朝食券をもらいましたか？
係員：ご朝食は7時、8時、9時の時間指定制となっておりますが、何時がよろしいでしょうか？
客：明日は朝8時半にチェックアウトして出発したいんです。
係員：それでしたら、7時からの回が最もゆっくり召し上がっていただけます。
客：わかりました。では7時でお願いします。

---

ラジオで専門家が節電について話しています。家庭で最も簡単に効果が出る節電対策は何ですか？
専門家：みなさんエアコンの設定温度を気にされますが、実は長期間使っていない家電製品の待機電力を減らすこと、特にスイッチ付きタップでこまめに電源を切ることが、生活の快適さを損なわずに最も効果的な節電になります。', 3)
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
  '''~wake ni wa ikanai'' ijtimoiy yoki axloqiy sababga ko''ra ''bunday qilib bo''lmaydi'' degan ma''noni ifodalaydi.',
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
  'b0000003-0001-4000-8000-000000000001',
  '契約を結ぶ前に、条件を（慎重）に 確認してください。',
  'multiple_choice',
  '["しんちょう","きんちょう","しんじょう","きんじょう"]'::jsonb,
  'しんちょう',
  '「慎重」kanjisining to''g''ri o''qilishi — しんちょう (ehtiyotkorlik bilan, chuqur o''ylab).',
  5
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000306-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '今回の 新規事業の 計画（　）、役員会で 詳しい 説明が あった。',
  'multiple_choice',
  '["に関して","にとって","に反して","を通じて"]'::jsonb,
  'に関して',
  'Biror mavzu yoki masala to''g''risida gap ketganda ''〜に関して'' (to''g''risida / haqida) grammatikasi ishlatiladi.',
  6
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000307-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '毎日 仕事で 多忙な 現代人（　）、質の良い 睡眠は 不可欠だ。',
  'multiple_choice',
  '["にとって","に対して","によって","につれて"]'::jsonb,
  'にとって',
  'Muayyan shaxs yoki toifa nuqtai nazaridan baholaganda ''〜にとって'' (... uchun) ifodasi to''g''ri keladi.',
  7
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000308-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '冬の 寒い 時期は、どうしても 運動不足に（　）になる。',
  'multiple_choice',
  '["なりがち","なりぎみ","なりそう","なりかけ"]'::jsonb,
  'なりがち',
  'Noxush odat yoki tendensiyaga moyillikni bildirishda ''fe''l o''zagi + がち'' (〜がち) qo''llanadi: なりがち (bo''lib qolishga moyil).',
  8
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000309-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '明日、午前10時に 貴社へ（　）。よろしくお願いいたします。',
  'multiple_choice',
  '["お伺いします","いらっしゃいます","参られます","おいでになります"]'::jsonb,
  'お伺いします',
  'Hamkor kompaniyaga borishda o''z harakatini kamtarin qilish uchun kenjougo (kamtarlik) fe''li ''お伺いします'' ishlatiladi.',
  9
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000310-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '午後から 天気が 崩れると 思っていたが、（　）雷雨になった。',
  'multiple_choice',
  '["案の定","かえって","むしろ","せっかく"]'::jsonb,
  '案の定',
  '''案の定'' (あんのじょう) - kutilganidek, taxmin qilinganidek (ko''pincha salbiy holatlarda) ma''nosidagi ravishdir.',
  10
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000311-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  'あんなに 毎日 猛練習を 積み重ねて きたのだから、彼なら 必ず 合格する（　）。',
  'multiple_choice',
  '["に違いない","にすぎない","わけがない","はずがない"]'::jsonb,
  'に違いない',
  'Kuchli ishonch bilan xulosa chiqarishda ''〜に違いない'' (shubhasiz, aniq shunday bo''ladi) qo''llanadi.',
  11
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000312-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '会社の 就業規則により、勤務中の 私用電話は 原則禁止という（　）。',
  'multiple_choice',
  '["ことになっている","ことにしている","わけになっている","ようにしている"]'::jsonb,
  'ことになっている',
  'Ijtimoiy qoida, qonun yoki tashkiliy tartib-qoidani bildirishda ''〜ことになっている'' (shunday tartib belgilangan) ishlatiladi.',
  12
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000313-0000-4000-8000-000000000001',
  'b0000003-0001-4000-8000-000000000001',
  '正しい文を作ってください：
困難な 状況でも、＿＿ ＿＿ ★ ＿＿ 努力した。',
  'multiple_choice',
  '["決して","目標に向かって","諦めることなく","最後まで"]'::jsonb,
  '諦めることなく',
  'To''g''ri tartib: 困難な 状況でも、[決して] [目標に向かって] [★ 諦めることなく] [最後まで] 努力した -> 諦めることなく (3-variant).',
  13
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000314-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '筆者が最も強調したい点はどれですか？',
  'multiple_choice',
  '["レジ袋の価格をもっと引き上げるべきだ","消費者の努力だけに頼らず、企業が代替素材を採用すべきだ","プラスチック製品の製造を完全に禁止すべきだ","エコバッグの普及率をさらに高める必要がある"]'::jsonb,
  '消費者の努力だけに頼らず、企業が代替素材を採用すべきだ',
  'Muallif: ''iste''molchilar ongi bilangina cheklanmay, korxonalar parchalanishi mumkin bo''lgan muqobil materiallarni qo''llashi shart'' deb ta''kidlaydi.',
  14
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000315-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '自己成長にとって最も重要だとされているのはどのようなことですか？',
  'multiple_choice',
  '["緊急かつ重要なこと","緊急だが重要ではないこと","緊急ではないが重要なこと","緊急でも重要でもないこと"]'::jsonb,
  '緊急ではないが重要なこと',
  'Matnda o''sish uchun eng muhimi: ''kinkyuu dewa nai ga juuyou na koto'' (shoshilinch bo''lmagan, lekin muhim ishlar) deb aniq aytilgan.',
  15
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000316-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '文章によると、テレワークにおいてどのような課題が生じていますか？',
  'multiple_choice',
  '["通勤時間が以前より長くなってしまったこと","業務の生産性が完全にゼロになってしまうこと","偶発的な雑談から生まれるアイデアや一体感が減少すること","社員同士の給与格差が広がること"]'::jsonb,
  '偶発的な雑談から生まれるアイデアや一体感が減少すること',
  'Matnda tasvirlanishicha, teleworkning asosiy muammosi — tasodifiy suhbatlardan tug''iladigan ijodiy g''oyalar va jamoaviy birdamlikning susayishidir.',
  16
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000317-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '筆者が考える「1冊の本を読み通すことの最大の価値」は何ですか？',
  'multiple_choice',
  '["短時間で大量のトリビアを記憶できること","著者の思考過程を追体験し、本質を見抜く深い洞察力を養えること","最新の流行やトレンドをいち早く知ること","要約動画を作るスキルが身につくこと"]'::jsonb,
  '著者の思考過程を追体験し、本質を見抜く深い洞察力を養えること',
  'Muallif kitobni to''liq o''qish orqali muallifning fikrlash zanjirini bosib o''tish va chuqur mohiyatni tushunish ko''nikmasi shakllanishini ta''kidlaydi.',
  17
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000318-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '現行の利用者が来年も旧料金のまま利用し続けるにはどうすればよいですか？',
  'multiple_choice',
  '["何もしないで待っていればよい","9月30日までに1年契約の自動更新を申し込む","セキュリティ機能を無効にする","10月1日以降に新規アカウントを作成する"]'::jsonb,
  '9月30日までに1年契約の自動更新を申し込む',
  'E''lon shartida aytilgan: ''9月30日までに1年契約の自動更新をお申し込みいただくことで、向こう1年間は旧料金（月額1,200円）のまま新機能をご利用いただけます''.',
  18
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000319-0000-4000-8000-000000000001',
  'b0000003-0002-4000-8000-000000000001',
  '平日夜（19時以降）と日曜日を中心に利用し、費用を最も抑えたい人に最適なプランはどれですか？',
  'multiple_choice',
  '["デイタイム会員","ナイト＆ホリデー会員","フルタイム会員","会議室専用プラン"]'::jsonb,
  'ナイト＆ホリデー会員',
  'Ish kunlari kechasi (18:00 dan keyin) va dam olish kunlari foydalanuvchilar uchun eng arzon va mos tarif — ''ナイト＆ホリデー会員'' (oyiga 12,000 yen).',
  19
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000320-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '部下はまず何を修正しますか？',
  'multiple_choice',
  '["企画書のタイトル","予算のグラフのデータ","全体の構成","参加者のリスト"]'::jsonb,
  '予算のグラフのデータ',
  'Xodim o''tgan yilgi eski byudjet grafik ma''lumotlarini eng so''nggisiga almashtirishini aytadi.',
  20
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000321-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '留学生が申請するビザの種類は何ですか？',
  'multiple_choice',
  '["留学ビザ","特定活動ビザ","就労ビザ","観光ビザ"]'::jsonb,
  '特定活動ビザ',
  'O''qituvchi o''qishni tugatgach ish qidirish uchun ''Tokutei Katsudou Visa'' kerakligini tushuntiradi.',
  21
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000322-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '男性社員は 今日中に 何を 終わらせますか？',
  'multiple_choice',
  '["セミナーの発表スライド","取引先への見積書の作成と送信","会議室の手配","出張の精算手続き"]'::jsonb,
  '取引先への見積書の作成と送信',
  'Boshliq taqdimot slaydlarini ertaga birga ko''rishlarini, bugun esa kechiktirmasdan hisob-faktura (見積書) ni yuborishni buyuradi.',
  22
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000323-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '迷子の男の子が 着ている 服装の 特徴は どれですか？',
  'multiple_choice',
  '["黄色いシャツに白いズボン","青い長袖Tシャツに黒い半ズボン、赤い帽子","緑のセーターにジーンズ","白いシャツに茶色い帽子"]'::jsonb,
  '青い長袖Tシャツに黒い半ズボン、赤い帽子',
  'E''londa aniq aytildi: ''青い長袖Tシャツに、黒い半ズボンを着用し、赤い帽子をかぶっております''.',
  23
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000324-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '客は 何時の 朝食券を もらいましたか？',
  'multiple_choice',
  '["7時","8時","8時半","9時"]'::jsonb,
  '7時',
  'Mijoz 8:30 da jo''nab ketishi kerak bo''lgani sababli soat 7 dagi nonushta vaqtini tanlaydi.',
  24
);
INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)
VALUES (
  'c0000325-0000-4000-8000-000000000001',
  'b0000003-0003-4000-8000-000000000001',
  '専門家が 勧めている 最も 手軽で 効果的な 節電対策は何ですか？',
  'multiple_choice',
  '["エアコンを一切つけないこと","スイッチ付きタップなどを活用して待機電力を切ること","夜間は照明をすべて消すこと","冷蔵庫の電源を定期的に抜くこと"]'::jsonb,
  'スイッチ付きタップなどを活用して待機電力を切ること',
  'Mutaxassis maishiy texnikalarning kutish rejimidagi quvvatini o''chirish (スイッチ付きタップ orqali) eng samarali ekanligini ta''kidlaydi.',
  25
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

