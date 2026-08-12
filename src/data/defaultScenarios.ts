import { ConversationScenario } from '../components/speaking/scenarioTypes';

export const DEFAULT_SCENARIOS: ConversationScenario[] = [
    {
        id: 'jikoshoukai',
        title_ja: '自己紹介 (Jikoshoukai)',
        title_uz: "O'zini tanishtirish",
        emoji: '🙋',
        difficulty: 'N5',
        category: 'social',
        description_uz: "Ismingiz, kelib chiqishingiz va qiziqishlaringiz haqida yaponcha gaplashish mashqi.",
        opening_line_ja: 'はじめまして！自己紹介の練習をしましょう。お名前と出身を教えていただけますか？',
        context_prompt: `Siz yapon tili o'qituvchisiz. Foydalanuvchi o'zini tanishtirmoqda (Jikoshoukai).
Maqsad: Ism, kasb, hobbi, yapon tili o'rganish sabablarini so'rang.
Tone: Muloyim va qo'llab-quvvatlovchi (Desu/Masu shakli).
Mavzuga oid key iboralar: はじめまして, と申します, から来ました, よろしくお願いします, 趣味は`,
        key_phrases: ['はじめまして', 'と申します', 'から来ました', 'よろしくお願いします', '趣味は'],
        is_custom: false
    },
    {
        id: 'kaimono',
        title_ja: '買い物 (Kaimono)',
        title_uz: "Do'konda xarid qilish",
        emoji: '🛍️',
        difficulty: 'N4',
        category: 'daily',
        description_uz: "Kombini yoki kiyim do'konida narx so meyorlarini so'rash, chegirma va to'lov qilish.",
        opening_line_ja: 'いらっしゃいませ！何かお探しでしょうか？',
        context_prompt: `Siz Tokiodagi kiyim do'koni sotuvchisisiz.
Maqsad: Mijozga kiyim o'lchami, rangi va narxini tushuntiring, kassa to'lovini amalga oshiring.
Tone: Professional yapon xizmat ko'rsatish tili (Keigo).
Mavzuga oid key iboralar: いくらですか, これをください, サイズ, カードで払えますか, 試着室`,
        key_phrases: ['いくらですか', 'これをください', 'サイズ', 'カードで払えますか', '試着室'],
        is_custom: false
    },
    {
        id: 'restaurant',
        title_ja: 'レストラン (Resutoran)',
        title_uz: "Restoranda buyurtma",
        emoji: '🍣',
        difficulty: 'N4',
        category: 'daily',
        description_uz: "Ramen yoki sushi restoranda joy band qilish, menyudan buyurtma va hisob-kitob qilish.",
        opening_line_ja: 'いらっしゃいませ！何名様でしょうか？こちらの席へどうぞ。ご注文が決まりましたらお呼びください。',
        context_prompt: `Siz yapon restorani da ofitsiant rolini o'ynaysiz.
Maqsad: Necha kishi ekanini so'rang, menyu tavsiya qiling, suv/ichimlik keltiring va hisobni taqdim eting.
Tone: Restoran xodimi tili (Irashshaimase, kashikomarimashita).
Mavzuga oid key iboralar: おすすめは何ですか, これをお願いします, お会計をお願いします, 水をください, 美味しい`,
        key_phrases: ['おすすめは何ですか', 'これをお願いします', 'お会計をお願いします', '水をください', '美味しい'],
        is_custom: false
    },
    {
        id: 'michiannai',
        title_ja: '道案内 (Michiannai)',
        title_uz: "Yo'l so'rash",
        emoji: '🗺️',
        difficulty: 'N3',
        category: 'travel',
        description_uz: "Bekat, mehmonxona yoki diqqatga sazovor joylarga qanday borishni so'rash mashqi.",
        opening_line_ja: 'すみません、何かお困りですか？どこへ行きたいですか？',
        context_prompt: `Siz ko'chada yo'lovchi yapon fuqarosisiz. Chet ellik sayyoh sizdan yo'l so'ramoqda.
Maqsad: Yo'nalishlarni tushuntiring (o'ngga buriling, to'g'ri yuring, bekatga boring).
Tone: Samimiy mahalliy aholi tili.
Mavzuga oid key iboralar: 〜はどこですか, まっすぐ行ってください, 右に曲がって, 駅まで徒歩, すみません`,
        key_phrases: ['〜はどこですか', 'まっすぐ行ってください', '右に曲がって', '徒歩で', 'すみません'],
        is_custom: false
    },
    {
        id: 'byouin',
        title_ja: '病院 (Byouin)',
        title_uz: "Kasalxonada muloqot",
        emoji: '🏥',
        difficulty: 'N3',
        category: 'daily',
        description_uz: "Shifokorga belgilaringizni tushuntirish, dori so'rash va tibbiy ko'rik suhbati.",
        opening_line_ja: 'こんにちは。今日はどうされましたか？どこが痛みますか？',
        context_prompt: `Siz klinika shifokorisiz. Bemor o'zini yomon his qilmoqda.
Maqsad: Qachondan beri og'riyotgani, isitmasi bor-yo'qligini so'rang va dori tayinlang.
Tone: E'tiborli shifokor tili.
Mavzuga oid key iboralar: 頭が痛いです, 熱があります, 昨日から, 薬を出します, お大事に`,
        key_phrases: ['頭が痛いです', '熱があります', '昨日から', '薬を出します', 'お大事に'],
        is_custom: false
    },
    {
        id: 'hotel',
        title_ja: 'ホテル (Hoteru)',
        title_uz: "Mehmonxonada Check-in",
        emoji: '🏨',
        difficulty: 'N4',
        category: 'travel',
        description_uz: "Check-in qilish, Wi-Fi parolini so'rash va nonushta vaqtini bilib olish suhbati.",
        opening_line_ja: 'いらっしゃいませ。ようこそグランドホテルへ。チェックインでしょうか？',
        context_prompt: `Siz mehmonxona resepshn xodimisiz.
Maqsad: Bron passport ma'lumotlarini so'rang, xona kalitini bering va nonushta vaqtini ayting.
Tone: Oliy darajadagi yapon mehmonxona servisi.
Mavzuga oid key iboralar: チェックインしたいです, 予約しました, Wi-Fiのパスワード, 朝食は何時ですか, 鍵`,
        key_phrases: ['チェックインしたいです', '予約しました', 'パスワード', '朝食は何時ですか', '鍵'],
        is_custom: false
    }
];
