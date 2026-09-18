# -*- coding: utf-8 -*-
"""
Authoritative corrections and authentic example sentences for Minna no Nihongo Shokyu 1.
Each entry maps (front_key) -> {
    'front': clean_front (optional),
    'back': clean_back (optional),
    'phonetic': clean_phonetic (optional),
    'example': (ja_sentence, uz_translation)
}
"""

CORRECTIONS = {}

CORRECTIONS_L1 = {
    'だれどなた': {
        'front': 'だれ (どなた)',
        'back': 'kim? (どなた - hurmat shakli)',
        'phonetic': 'だれ (どなた) - dare (donata)',
        'example': 'あの方は どなたですか。 (U kishi kimlar?)'
    },
    'おいくつ': {
        'front': '何歳 (おいくつ)',
        'back': 'necha yosh? (おいくつ - hurmat shakli)',
        'phonetic': 'なんさい (おいくつ) - nansai (oikutsu)',
        'example': '失礼ですが、おいくつですか。 (Kechirasiz, yoshingiz nechada?)'
    },
    '失礼ですが': {
        'front': '失礼ですが',
        'back': 'Kechirasiz, ~ (murojaat oldidan)',
        'phonetic': 'しつれいですが - shitsureidesuga',
        'example': '失礼ですが、お名前は？ (Kechirasiz, ismingiz nima?)'
    },
    'お名前は？': {
        'front': 'お名前は？',
        'back': 'Ismingiz nima?',
        'phonetic': 'おなまえは？ - onamaewa',
        'example': 'お名前は 何ですか。 (Ismingiz nima?)'
    },
    '初めまして。': {
        'front': '初めまして',
        'back': 'Tanishganimdan xursandman / O'zimni tanishtirishga ruxsat bergaysiz',
        'phonetic': 'はじめまして - hajimemashite',
        'example': '初めまして、マイク・ミラーです。 (Tanishganimdan xursandman, men Mayk Miller.)'
    },
    'どうぞよろしく': {
        'front': 'どうぞよろしく',
        'back': 'Tanishganimdan mamnunman / Marhamat, yaxshi munosabatda bo'ling',
        'phonetic': 'どうぞよろしく - douzo yoroshiku',
        'example': 'どうぞ よろしく お願いします。 (Marhamat, yaxshi munosabatda bo'ling / Tanishganimdan xursandman.)'
    },
    'お願いします': {
        'front': 'お願いします',
        'back': 'iltimos, so'rayman',
        'phonetic': 'おねがいします - onegaishimasu',
        'example': 'これを お願いします。 (Buni iltimos qilaman.)'
    },
    'こちらは～さんです。': {
        'front': 'こちらは～さんです',
        'back': 'Bu kishi janob / xonim ~',
        'phonetic': 'こちらは～さんです - kochira wa ~ san desu',
        'example': 'こちらは ミラーさんです。 (Bu kishi janob Miller.)'
    },
    '～から来ました。': {
        'front': '～から来ました',
        'back': '~dan keldim',
        'phonetic': '～からきました - ~ kara kimashita',
        'example': 'わたしは アメリカから 来ました。 (Men Amerikadan keldim.)'
    },
    'アメリカ': {
        'example': 'ミラーさんは アメリカから 来ました。 (Janob Miller Amerikadan kelgan.)'
    },
    'イギリス': {
        'example': 'ワットさんは イギリス人です。 (Janob Watt ingliz.)'
    },
    'インド': {
        'example': 'グプタさんは インドから 来ました。 (Janob Gupta Hindistondan kelgan.)'
    },
    'インドネシア': {
        'example': 'インドネシアへ 旅行に 行きます。 (Indoneziyaga sayohatga boraman.)'
    },
    '韓国かんこく': {
        'front': '韓国',
        'back': 'Janubiy Koreya',
        'phonetic': 'かんこく - kankoku',
        'example': '韓国の 料理は からいです。 (Koreys taomlari achchiq.)'
    },
    'タイ': {
        'example': 'タワポンさんは タイ人です。 (Janob Tawapon tailandlik.)'
    },
    '中国ちゅうごく': {
        'front': '中国',
        'back': 'Xitoy',
        'phonetic': 'ちゅうごく - chuugoku',
        'example': 'ワンさんは 中国の 医者です。 (Janob Vang Xitoy shifokori.)'
    },
    'ドイツ': {
        'example': 'これは ドイツの 車です。 (Bu Germaniya mashinasi.)'
    },
    '日本': {
        'example': '日本の 生活は 楽しいです。 (Yaponiya hayoti maroqli.)'
    },
    'フランス': {
        'example': 'フランスの ワインを 飲みました。 (Fransiya vinosini ichdim.)'
    },
    'ブラジル': {
        'example': 'サントスさんは ブラジルから 来ました。 (Janob Santos Braziliyadan kelgan.)'
    },
    'さくら大学だいがく／富士ふじ大学だいがく': {
        'front': 'さくら大学 / 富士大学',
        'back': 'universitet nomlari (to'qima)',
        'phonetic': 'さくらだいがく / ふじだいがく - sakura daigaku / fuji daigaku',
        'example': '妹は さくら大学の 学生です。 (Singlim Sakura universiteti talabasi.)'
    },
    'パワー電気': {
        'front': 'パワー電気',
        'back': 'Power Denki (elektr kompaniyasi nomi)',
        'phonetic': 'パワーでんき - pawaa denki',
        'example': 'シュミットさんは パワー電気の 社員です。 (Janob Shmidt Power Denki xodimi.)'
    },
    '神戸病院': {
        'front': '神戸病院',
        'back': 'Kobe shifoxonasi',
        'phonetic': 'こうべびょういん - koube byouin',
        'example': 'あの人は 神戸病院の 医者です。 (Anavi kishi Kobe shifoxonasi shifokori.)'
    }
}
CORRECTIONS.update(CORRECTIONS_L1)
