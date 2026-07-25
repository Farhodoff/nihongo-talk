import json, re
from build_n1_full_shinkanzen import n1_shinkanzen_rules

# Re-run populate_all_n2_rules to get 182 N2 items
with open('scratch/populate_all_n2_rules.py') as f:
    exec(f.read())

with open('src/data/jlptGrammarKanji.ts') as f:
    content = f.read()

# Find the LAST N2 item
matches = list(re.finditer(r'\"id\":\s*\"n2_pdf_\d+_[^\"]+\"', content))
if matches:
    last_match = matches[-1]
    idx = content.find("}", last_match.end())
    base_content = content[:idx+1]

formatted_n1 = []
for i, (t, r, m, s, ja, r_ex, uz) in enumerate(n1_shinkanzen_rules):
    obj = {
        "id": f"n1_shinkanzen_{i+1}",
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

n1_block = ",\n" + ",\n".join(formatted_n1)

kanji_part_idx = content.find("export const JLPT_KANJI_DATA")
kanji_part = content[kanji_part_idx:]

new_ts = base_content + n1_block + "\n];\n\n" + kanji_part

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(new_ts)

print("Cleanly rebuilt jlptGrammarKanji.ts with 182 N2 items AND 42 official Shin Kanzen N1 rules!")
