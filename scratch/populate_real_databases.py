import json, re

# Read jlptGrammarKanji.ts which has all authentic N5 (39+), N4 (103), N3, N2, N1 & Kanji
with open('src/data/jlptGrammarKanji.ts') as f:
    text = f.read()

# We can parse JLPT_GRAMMAR_DATA from jlptGrammarKanji.ts by extracting the JS object definition
# Or we can write a python script that imports or evaluates JS/TS or parses using regex blocks.

# Let's write JLPT_GRAMMAR_DATABASE to re-export JLPT_GRAMMAR_DATA from ./jlptGrammarKanji
grammar_db_ts = """import { JLPT_GRAMMAR_DATA, JlptGrammarItem } from './jlptGrammarKanji';

export const JLPT_GRAMMAR_DATABASE: JlptGrammarItem[] = JLPT_GRAMMAR_DATA;
"""

kanji_db_ts = """import { JLPT_KANJI_DATA, JlptKanjiItem } from './jlptGrammarKanji';

export const JLPT_KANJI_DATABASE: JlptKanjiItem[] = JLPT_KANJI_DATA;
"""

with open('src/data/jlptGrammarDatabase.ts', 'w') as f:
    f.write(grammar_db_ts)

with open('src/data/jlptKanjiDatabase.ts', 'w') as f:
    f.write(kanji_db_ts)

print("Updated jlptGrammarDatabase.ts and jlptKanjiDatabase.ts to use clean, authentic datasets only!")
