#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/clean_minna_shokyu1.py
Applies curated corrections from minna_corrections.json to minna_shokyu1.json.
"""

import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MINNA_DECK = os.path.join(BASE_DIR, 'src', 'data', 'decks', 'minna_shokyu1.json')
CORRECTIONS_FILE = os.path.join(BASE_DIR, 'scripts', 'minna_corrections.json')

def clean_minna():
    if not os.path.exists(MINNA_DECK):
        print(f"Deck file not found: {MINNA_DECK}")
        return

    if not os.path.exists(CORRECTIONS_FILE):
        print(f"Corrections file not found: {CORRECTIONS_FILE}")
        return

    with open(MINNA_DECK, 'r', encoding='utf-8') as f:
        cards = json.load(f)

    with open(CORRECTIONS_FILE, 'r', encoding='utf-8') as f:
        corrections = json.load(f)

    updated = 0
    for card in cards:
        front_key = card.get('front', '').strip()
        if front_key in corrections:
            corr = corrections[front_key]
            card['front'] = corr.get('front', card.get('front'))
            card['back'] = corr.get('back', card.get('back'))
            if 'phonetic' in corr:
                card['phonetic'] = corr['phonetic']
            if 'example' in corr:
                card['example'] = corr['example']
            updated += 1

    with open(MINNA_DECK, 'w', encoding='utf-8') as f:
        json.dump(cards, f, ensure_ascii=False, indent=2)
        f.write('\n')

    print(f"Successfully applied {updated} corrections to {MINNA_DECK}")

if __name__ == '__main__':
    clean_minna()
