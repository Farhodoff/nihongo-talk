import json, re
from expand_n2_grammar import n2_grammar_rules

# Format all N2 rules
formatted_n2 = []
for idx, (t, r, m, s, ja, r_ex, uz) in enumerate(n2_grammar_rules):
    obj = {
        "id": f"n2_official_{idx+1}",
        "level": "N2",
        "title": t,
        "romaji": r,
        "meaningUz": m,
        "structure": s,
        "examples": [
            { "ja": ja, "romaji": r_ex, "uz": uz }
        ]
    }
    formatted_n2.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

n2_block = ",\n".join(formatted_n2)

with open('src/data/jlptGrammarKanji.ts') as f:
    text = f.read()

# Replace existing N2 block (which had only 3 items) with the rich 34 N2 items block!
# Find where N2 items start in JLPT_GRAMMAR_DATA
n2_pattern = re.compile(r'(    \{\s*\"id\":\s*\"n2_[^\}]+\}(?:\s*,\s*\{\s*\"id\":\s*\"n2_[^\}]+\})*)', re.DOTALL)

match = n2_pattern.search(text)
if match:
    text = text[:match.start()] + n2_block + text[match.end():]
    with open('src/data/jlptGrammarKanji.ts', 'w') as f:
        f.write(text)
    print(f"Successfully replaced N2 grammar block with {len(n2_grammar_rules)} official JLPT N2 rules!")
else:
    print("Could not match N2 pattern, checking manual replacement...")
