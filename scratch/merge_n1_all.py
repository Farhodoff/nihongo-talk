import json, re
from expand_n1_grammar import n1_grammar_rules

formatted_n1 = []
for idx, (t, r, m, s, ja, r_ex, uz) in enumerate(n1_grammar_rules):
    obj = {
        "id": f"n1_official_{idx+1}",
        "level": "N1",
        "title": t,
        "romaji": r,
        "meaningUz": m,
        "structure": s,
        "examples": [
            { "ja": ja, "romaji": r_ex, "uz": uz }
        ]
    }
    formatted_n1.append("    " + json.dumps(obj, ensure_ascii=False, indent=4).replace("\n", "\n    "))

n1_block = ",\n".join(formatted_n1)

with open('src/data/jlptGrammarKanji.ts') as f:
    text = f.read()

# Replace existing N1 block
n1_pattern = re.compile(r'(    \{\s*\"id\":\s*\"n1_[^\}]+\}(?:\s*,\s*\{\s*\"id\":\s*\"n1_[^\}]+\})*)', re.DOTALL)

match = n1_pattern.search(text)
if match:
    text = text[:match.start()] + n1_block + text[match.end():]
    with open('src/data/jlptGrammarKanji.ts', 'w') as f:
        f.write(text)
    print(f"Successfully replaced N1 grammar block with {len(n1_grammar_rules)} official JLPT N1 rules!")
else:
    print("Could not match N1 pattern, checking manual replacement...")
