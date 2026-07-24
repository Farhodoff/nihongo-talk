export interface JlptPresetCard {
    id: string;
    front: string; // Kanji / Phrase
    back: string;  // Uzbek translation + Grammar explanation
    romaji?: string;
    furigana?: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    type: 'kanji' | 'vocab' | 'grammar';
    example?: string;
}

export interface JlptPresetDeck {
    id: string;
    title: string;
    description: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    icon: string;
    cards: JlptPresetCard[];
}

export const JLPT_PRESET_DECKS: JlptPresetDeck[] = [
    {
        id: 'jlpt-n5-kanji',
        title: '⛩️ JLPT N5 Essential Kanji (漢字 80)',
        description: 'Boshlovchilar uchun eng muhim 80 ta bazaviy Kanji iyerogliflari',
        level: 'N5',
        icon: 'Sparkles',
        cards: [
            {
                id: 'n5-k1',
                front: '日 (Nichi / Hi)',
                back: 'Kun, Quyosh (Sun, Day)',
                romaji: 'hi, nichi',
                furigana: 'ひ、にち',
                level: 'N5',
                type: 'kanji',
                example: '今日 (きょう - Kyou): Bugun'
            },
            {
                id: 'n5-k2',
                front: '本 (Hon / Moto)',
                back: 'Kitob, Asos (Book, Origin)',
                romaji: 'hon, moto',
                furigana: 'ほん、もと',
                level: 'N5',
                type: 'kanji',
                example: '日本 (にほん - Nihon): Yaponya'
            },
            {
                id: 'n5-k3',
                front: '人 (Jin / Hito)',
                back: 'Odam, Shaxs (Person, Human)',
                romaji: 'hito, jin',
                furigana: 'ひと、じん',
                level: 'N5',
                type: 'kanji',
                example: '日本人 (にほんじん - Nihonjin): Yapon kishi'
            },
            {
                id: 'n5-k4',
                front: '月 (Getsu / Tsuki)',
                back: 'Oy, Qamariy oy (Moon, Month)',
                romaji: 'tsuki, getsu',
                furigana: 'つき、げつ',
                level: 'N5',
                type: 'kanji',
                example: '月曜日 (げつようび - Getsuyoubi): Dushanba'
            },
            {
                id: 'n5-k5',
                front: '水 (Mizu / Sui)',
                back: 'Suv (Water)',
                romaji: 'mizu, sui',
                furigana: 'みず、すい',
                level: 'N5',
                type: 'kanji',
                example: '水を飲む (みずをのむ): Suv ichish'
            }
        ]
    },
    {
        id: 'jlpt-n5-vocab',
        title: '🌸 JLPT N5 Daily Vocabulary (語彙 800)',
        description: 'Kundalik yaponcha muloqot va iboralar',
        level: 'N5',
        icon: 'BookOpen',
        cards: [
            {
                id: 'n5-v1',
                front: 'おはようございます',
                back: 'Xayrli tong! (Good morning)',
                romaji: 'Ohayou gozaimasu',
                level: 'N5',
                type: 'vocab',
                example: '先生、おはようございます！'
            },
            {
                id: 'n5-v2',
                front: 'ありがとうございます',
                back: 'Rahmat! (Thank you very much)',
                romaji: 'Arigatou gozaimasu',
                level: 'N5',
                type: 'vocab',
                example: '手伝ってくれてありがとうございます。'
            },
            {
                id: 'n5-v3',
                front: '食べる (たべる)',
                back: 'Yemoq (To eat)',
                romaji: 'taberu',
                furigana: 'たべる',
                level: 'N5',
                type: 'vocab',
                example: '朝ご飯を食べる (Asa gohan wo taberu): Nonushta qilish'
            },
            {
                id: 'n5-v4',
                front: '行く (いく)',
                back: 'Bormoq (To go)',
                romaji: 'iku',
                furigana: 'いく',
                level: 'N5',
                type: 'vocab',
                example: '学校へ行く (Gakkou e iku): Maktabga borish'
            }
        ]
    },
    {
        id: 'jlpt-n4-grammar',
        title: '📜 JLPT N4 Essential Grammar Pattern (文法)',
        description: 'N4 bosqichining asosiy grammatik konstruksiyalari',
        level: 'N4',
        icon: 'CheckCircle2',
        cards: [
            {
                id: 'n4-g1',
                front: '～ほうがいい (Hou ga ii)',
                back: '...ganing ma\'qul (Had better do...)',
                romaji: 'hou ga ii',
                level: 'N4',
                type: 'grammar',
                example: '薬を飲んだほうがいいですよ。(Kusuri wo nonda hou ga ii desu yo)'
            },
            {
                id: 'n4-g2',
                front: '～つもりの (Tsumori desu)',
                back: '...moqchiman / rejalashtirganman (Intend to do...)',
                romaji: 'tsumori desu',
                level: 'N4',
                type: 'grammar',
                example: '来年日本へ行くつもりです。(Rainen Nihon e iku tsumori desu)'
            }
        ]
    },
    {
        id: 'jlpt-n3-n2-kanji',
        title: '🗾 JLPT N3-N2 Intermediate Kanji & Idioms (四字熟語)',
        description: 'O\'rta va yuqori darajadagi yaponcha iyerogliflar va murakkab so\'zlar',
        level: 'N3',
        icon: 'Award',
        cards: [
            {
                id: 'n3-k1',
                front: '準備 (じゅんび - Junbi)',
                back: 'Tayyorgarlik, Hozirlik (Preparation)',
                romaji: 'junbi',
                level: 'N3',
                type: 'vocab',
                example: '試験の準備をする (Shiken no junbi wo suru): Imtihonga tayyorgarlik ko\'rish'
            },
            {
                id: 'n2-k2',
                front: '一生懸命 (いっしょうけんめい)',
                back: 'Bor kuch bilan shug\'ullanish / Harakat qilish (With utmost effort)',
                romaji: 'isshoukenmei',
                level: 'N2',
                type: 'vocab',
                example: '一生懸命日本語を勉強します。'
            }
        ]
    }
];
