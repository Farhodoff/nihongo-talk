export interface SentenceOrderingQuestion {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  prefix: string; // e.g. "私[わたし]は"
  suffix: string; // e.g. "行[い]きます。"
  starPosition: number; // 1, 2, 3, or 4 (which slot is the ★)
  fragments: string[]; // 4 options (0-indexed: 0, 1, 2, 3)
  correctOrder: number[]; // 4 indices of fragments in correct sentence order
  explanationUzbek: string;
}

export const SENTENCE_ORDERING_QUESTIONS: SentenceOrderingQuestion[] = [
  // ==========================================
  // === N5 ===================================
  // ==========================================
  {
    id: 'so_n5_1',
    level: 'N5',
    prefix: '私[わたし]は',
    suffix: '行[い]きます。',
    starPosition: 3,
    fragments: ['友達[ともだち]と', '映画[えいが]を', '見[み]に', '日曜日[にちようび]に'],
    correctOrder: [3, 0, 1, 2], // 日曜日に 友達と 映画を★ 見に
    explanationUzbek:
      "To'g'ri tartib: 私[わたし]は「日曜日[にちようび]に (4) 友達[ともだち]と (1) ★映画[えいが]を (2) 見[み]に (3)」行[い]きます。\nQolip: [Vaqt] + [Kim bilan] + [Obyekt] + [Harakat maqsad: V-stem + に行く]. Yulduzcha (★) 3-o'rinda turgani uchun, to'g'ri javob 2-variant (映画を) bo'ladi.",
  },
  {
    id: 'so_n5_2',
    level: 'N5',
    prefix: 'この',
    suffix: '食[た]べられません。',
    starPosition: 3,
    fragments: ['辛[から]すぎて', '料理[りょうり]は', '私[わたし]には', 'ちょっと'],
    correctOrder: [1, 3, 0, 2], // 料理は ちょっと 辛すぎて★ 私には
    explanationUzbek:
      "To'g'ri tartib: この「料理[りょうり]は (2) ちょっと (4) ★辛[から]すぎて (1) 私[わたし]には (3)」食[た]べられません。\nQolip: [Mavzu + は] + [Daraja] + [Sifat + すぎて (sabab)] + [Obyekt + には]. Yulduzcha (★) 3-o'rinda, to'g'ri javob 1-variant (辛すぎて).",
  },

  // ==========================================
  // === N4 ===================================
  // ==========================================
  {
    id: 'so_n4_1',
    level: 'N4',
    prefix: '雨[あめ]が',
    suffix: '帰[かえ]りました。',
    starPosition: 3,
    fragments: ['降[ふ]らない', '家[うち]へ', 'うちに', '急[いそ]いで'],
    correctOrder: [0, 2, 3, 1], // 降らない うちに 急いで★ 家へ
    explanationUzbek:
      "To'g'ri tartib: 雨[あめ]が「降[ふ]らない (1) うちに (3) ★急[いそ]いで (4) 家[うち]へ (2)」帰[かえ]りました。\nQolip: [Fe'l nai-shakli] + うちに (yomg'ir yog'masidan avval) + [Ravish: 急いで] + [Yo'nalish: 家へ]. Yulduzcha (★) 3-o'rinda, to'g'ri javob 4-variant (急いで).",
  },
  {
    id: 'so_n4_2',
    level: 'N4',
    prefix: '田中[たなか]さんは',
    suffix: '遅刻[ちこく]しました。',
    starPosition: 3,
    fragments: ['途中で[とちゅうで]', '電車[でんしゃ]が', 'ために', '止[と]まった'],
    correctOrder: [0, 1, 3, 2], // 途中で 電車が 止まった★ ために
    explanationUzbek:
      "To'g'ri tartib: 田中[たなか]さんは「途中で[とちゅうで] (1) 電車[でんしゃ]が (2) ★止[と]まった (4) ために (3)」遅刻[ちこく]しました。\nQolip: [Holat] + [Ot + が] + [Fe'l past form] + ために (sababli). Yulduzcha (★) 3-o'rinda, to'g'ri javob 4-variant (止まった).",
  },

  // ==========================================
  // === N3 ===================================
  // ==========================================
  {
    id: 'so_n3_1',
    level: 'N3',
    prefix: 'どんなに',
    suffix: 'あきらめません。',
    starPosition: 3,
    fragments: ['困難[こんなん]で', 'あろうと', '私[わたし]は', '決[けっ]して'],
    correctOrder: [0, 1, 2, 3], // 困難で あろうと 私は★ 決して
    explanationUzbek:
      "To'g'ri tartib: どんなに「困難[こんなん]で (1) あろうと (2) ★私[わたし]は (3) 決[けっ]して (4)」あきらめません。\nQolip: どんなに + [Na-sifat + であろうと] (qanchalik qiyin bo'lmasin) + [Mavzu + は] + 決して...ない (aslo taslim bo'lmayman). Yulduzcha (★) 3-o'rinda, to'g'ri javob 3-variant (私は).",
  },
  {
    id: 'so_n3_2',
    level: 'N3',
    prefix: '健康[けんこう]の',
    suffix: '始[はじ]めました。',
    starPosition: 2,
    fragments: ['ために', '走[はし]ることを', '毎朝[まいあさ]', 'ジョギングで'],
    correctOrder: [0, 2, 3, 1], // ために 毎朝★ ジョギングで 走ることを
    explanationUzbek:
      "To'g'ri tartib: 健康[けんこう]の「ために (1) ★毎朝[まいあさ] (3) ジョギングで (4) 走[はし]ることを (2)」始[はじ]めました。\nQolip: Ot + のために (salomatlik uchun) + [Vaqt] + [Vosita] + [Maqsad fe'li]. Yulduzcha (★) 2-o'rinda, to'g'ri javob 3-variant (毎朝).",
  },

  // ==========================================
  // === N2 ===================================
  // ==========================================
  {
    id: 'so_n2_1',
    level: 'N2',
    prefix: 'この',
    suffix: 'できません。',
    starPosition: 3,
    fragments: ['専門家[せんもんか]の', 'なしには', '助言[じょげん]', '計画[けいかく]は'],
    correctOrder: [3, 0, 2, 1], // 計画は 専門家の 助言★ なしには
    explanationUzbek:
      "To'g'ri tartib: この「計画[けいかく]は (4) 専門家[せんもんか]の (1) ★助言[じょげん] (3) なしには (2)」できません。\nQolip: N2 grammatikasi [Ot] + なしには ... できない (…siz amalga oshirib bo'lmaydi). Yulduzcha (★) 3-o'rinda, to'g'ri javob 3-variant (助言).",
  },
  {
    id: 'so_n2_2',
    level: 'N2',
    prefix: '彼[かれ]の',
    suffix: '驚[おどろ]かされた。',
    starPosition: 3,
    fragments: ['才能[さいのう]には', '素晴[すば]らしき', '誰[だれ]もが', 'ピアノの'],
    correctOrder: [3, 1, 0, 2], // ピアノの 素晴らしき 才能には★ 誰もが
    explanationUzbek:
      "To'g'ri tartib: 彼[かれ]の「ピアノの (4) 素晴[すば]らしき (2) ★才能[さいのう]には (1) 誰[だれ]もが (3)」驚[おどろ]かされた。\nQolip: Ot + の + Sifat + Ot + には + 誰もが + Fe'l (passiv). Yulduzcha (★) 3-o'rinda, to'g'ri javob 1-variant (才能には).",
  },

  // ==========================================
  // === N1 ===================================
  // ==========================================
  {
    id: 'so_n1_1',
    level: 'N1',
    prefix: '国家[こっか]の',
    suffix: 'ならない。',
    starPosition: 3,
    fragments: [
      '存亡[そんぼう]に',
      '看過[かんか]しては',
      '関[かか]わる問題を',
      '軽々[かるがる]しく',
    ],
    correctOrder: [0, 2, 3, 1], // 存亡に 関わる問題を 軽々しく★ 看過しては
    explanationUzbek:
      "To'g'ri tartib: 国家[こっか]の「存亡[そんぼう]に (1) 関[かか]わる問題を (3) ★軽々[かるがる]しく (4) 看過[かんか]しては (2)」ならない。\nQolip: [〜に関わる] (taalluqli) + [Ravish: 軽々しく] + [〜てはならない] (ko'z yumib bo'lmaydi). Yulduzcha (★) 3-o'rinda, to'g'ri javob 4-variant (軽々しく).",
  },
  {
    id: 'so_n1_2',
    level: 'N1',
    prefix: '彼[かれ]の',
    suffix: 'ほかならない。',
    starPosition: 3,
    fragments: ['成功[せいこう]は', '努力[どりょく]の', '結晶[けっしょう]に', '日々[ひび]の'],
    correctOrder: [0, 3, 1, 2], // 成功は 日々の 努力の★ 結晶に
    explanationUzbek:
      "To'g'ri tartib: 彼[かれ]の「成功[せいこう]は (1) 日々[ひび]の (4) ★努力[どりょく]の (2) 結晶[けっしょう]に (3)」ほかならない。\nQolip: N1 qoidasi [〜にほかならない] (aynan ... dan boshqa narsa emas). [日々[ひび]の 努力[どりょく]の 結晶[けっしょう]に ほかならない]. Yulduzcha (★) 3-o'rinda, to'g'ri javob 2-variant (努力の).",
  },
];
