import re

with open('src/data/jlptGrammarKanji.ts') as f:
    text = f.read()

print("--- Inspecting jlptGrammarKanji.ts ---")
titles = re.findall(r'title:\s*["\'](.*?)["\']', text)
meanings = re.findall(r'meaningUz:\s*["\'](.*?)["\']', text)

print(f"Total titles found: {len(titles)}")
for idx, (t, m) in enumerate(zip(titles[:20], meanings[:20])):
    print(f"[{idx+1}] Title: {t} | Meaning: {m}")

suspicious = [t for t in titles if 'pattern' in t or 'Qoida' in t or 'n1_' in t or 'n2_' in t or 'n3_' in t or 'n4_' in t or 'n5_' in t]
print(f"Suspicious items count: {len(suspicious)}")
if suspicious:
    print("Suspicious samples:", suspicious[:10])
