import json, re

# Read current jlptGrammarKanji.ts content which has authentic N5 (39) & N4 (103) & N3/N2/N1 rules
with open('src/data/jlptGrammarKanji.ts', 'r') as f:
    gk_content = f.read()

# Also let's extract all authentic items from jlptGrammarDatabase.ts and jlptKanjiDatabase.ts
with open('src/data/jlptGrammarDatabase.ts', 'r') as f:
    g_db_str = f.read()

with open('src/data/jlptKanjiDatabase.ts', 'r') as f:
    k_db_str = f.read()

# Filter grammar database string to remove any item with pattern_ or Qoida
# We can do this in Python by loading json objects and filtering!
g_json_match = re.search(r'const rawGrammarData = (\[.*?\]);', g_db_str, re.DOTALL)
k_json_match = re.search(r'const rawKanjiData = (\[.*?\]);', k_db_str, re.DOTALL)

if g_json_match:
    g_items = json.loads(g_json_match.group(1))
    clean_g_items = [
        item for item in g_items
        if not re.search(r'pattern_\d+|Qoida \d+|grammatik qoidasi \d+', item.get('title', '') + item.get('meaningUz', ''))
    ]
    print(f"Cleaned Grammar items: {len(clean_g_items)} (Removed {len(g_items) - len(clean_g_items)} placeholders)")
    
    grammar_ts = """import { JlptGrammarItem } from './jlptGrammarKanji';

const rawGrammarData = """ + json.dumps(clean_g_items, ensure_ascii=False, indent=2) + """;

export const JLPT_GRAMMAR_DATABASE: JlptGrammarItem[] = rawGrammarData as unknown as JlptGrammarItem[];
"""
    with open('src/data/jlptGrammarDatabase.ts', 'w') as f:
        f.write(grammar_ts)

if k_json_match:
    k_items = json.loads(k_json_match.group(1))
    clean_k_items = [
        item for item in k_items
        if not re.search(r'Iyeroglifi #\d+|kan_\w+_\d+', item.get('meaningUz', '') + item.get('onyomi', ''))
    ]
    print(f"Cleaned Kanji items: {len(clean_k_items)} (Removed {len(k_items) - len(clean_k_items)} placeholders)")

    kanji_ts = """import { JlptKanjiItem } from './jlptGrammarKanji';

const rawKanjiData = """ + json.dumps(clean_k_items, ensure_ascii=False, indent=2) + """;

export const JLPT_KANJI_DATABASE: JlptKanjiItem[] = rawKanjiData as unknown as JlptKanjiItem[];
"""
    with open('src/data/jlptKanjiDatabase.ts', 'w') as f:
        f.write(kanji_ts)
