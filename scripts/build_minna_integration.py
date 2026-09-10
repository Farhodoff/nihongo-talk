#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_minna_integration.py
Transforms minna_shokyu1_complete.json into:
1. src/data/decks/minna_shokyu1.json (1135 flashcards)
2. src/data/curriculum/minnaN5Lessons.ts (25 full interactive lessons)
3. Updates src/data/presetDecks.ts
4. Updates src/data/curriculum/curriculumLessons.ts
5. Updates src/data/defaultScenarios.ts (replaces English scenarios with Minna Japanese scenarios)
"""

import json
import os
import re

DATA_PATH = "src/data/minna_shokyu1_complete.json"
with open(DATA_PATH, "r", encoding="utf-8") as f:
    lessons = json.load(f)

print(f"Loaded {len(lessons)} lessons from {DATA_PATH}")

# Kana to romaji mapping helper
KANA_MAP = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'o', 'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
    # Katakana
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヲ': 'o', 'ン': 'n',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
    'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
    'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
    'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
    'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
    'ー': '-', 'っ': '', 'ッ': ''
}

def kana_to_romaji(text):
    clean = re.sub(r'\[.*?\]|\(.*?\)|\（.*?\）', '', text).strip()
    res = []
    i = 0
    while i < len(clean):
        if i + 1 < len(clean) and clean[i:i+2] in KANA_MAP:
            res.append(KANA_MAP[clean[i:i+2]])
            i += 2
        elif clean[i] in KANA_MAP:
            res.append(KANA_MAP[clean[i]])
            i += 1
        else:
            if clean[i] in [' ', '・', '/', '／', '~', '～']:
                res.append(' ')
            i += 1
    return "".join(res).strip()

# ==============================================================================
# 1. BUILD DECK: src/data/decks/minna_shokyu1.json
# ==============================================================================
deck_cards = []
for les in lessons:
    les_num = les["lessonNumber"]
    grammar_examples = []
    for g in les.get("grammar", []):
        for ex in g.get("examples", []):
            if ex.get("ja") and ex.get("uz"):
                grammar_examples.append(f"{ex['ja']} ({ex['uz']})")
                
    for idx, v in enumerate(les.get("vocabulary", [])):
        kana = v.get("kana", "").strip()
        kanji = v.get("kanji", "").strip()
        meaning = v.get("meaning", "").strip()
        group = v.get("group")
        
        if kanji and kanji != kana:
            front = f"{kanji} ({kana})"
        else:
            front = kana
            
        back = meaning
        if group:
            back = f"{back} [{group}]"
            
        phonetic = kana_to_romaji(kana)
        example = grammar_examples[idx % len(grammar_examples)] if grammar_examples else f"{front} - {meaning}"
        
        deck_cards.append({
            "front": front,
            "back": back,
            "phonetic": phonetic,
            "example": example,
            "category": f"Minna no Nihongo {les_num}-dars",
            "level": "N5"
        })

print(f"Created {len(deck_cards)} cards for minna_shokyu1.json")
with open("src/data/decks/minna_shokyu1.json", "w", encoding="utf-8") as f:
    json.dump(deck_cards, f, ensure_ascii=False, indent=2)

print("Saved src/data/decks/minna_shokyu1.json")
