import json

with open('src/data/jlptGrammarKanji.ts') as f:
    text = f.read()

grammar_part = text.split('export const JLPT_KANJI_DATA')[0]

# Extract array content
start_idx = grammar_part.find('[')
array_str = grammar_part[start_idx:]

try:
    data = json.loads(array_str.rstrip(';\n '))
    print("Parsed JSON successfully! Array length:", len(data))
except Exception as e:
    print("JSON Error:", e)
