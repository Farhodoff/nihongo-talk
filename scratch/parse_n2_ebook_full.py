import re, json

with open('/tmp/n2_jlptsensei_extracted.txt') as f:
    text = f.read()

# Pattern for index lines: # Grammar Romaji Meaning Page
# Example: 1 あげく ageku to end up; in the end; finally; after all 10
index_matches = re.findall(r'^(\d+)\s+([^\n\t]+?)\s+([a-zA-Z\s\~\-\?\!\,\.]+)\s+([^\n\d]+?)\s+(\d+)\s*$', text, re.MULTILINE)

print(f"Found {len(index_matches)} grammar points in index regex match!")

parsed_items = []
for match in index_matches:
    num, ja_title, romaji, meaning_en, page = match
    ja_title = ja_title.strip()
    romaji = romaji.strip()
    meaning_en = meaning_en.strip()
    
    # Map common English meanings to Uzbek
    parsed_items.append({
        "num": num,
        "title": f"〜{ja_title} ({romaji})",
        "romaji": romaji,
        "meaningEn": meaning_en,
        "jaTitle": ja_title
    })

print("Sample parsed items:")
for item in parsed_items[:10]:
    print(item)

with open('/tmp/n2_index_parsed.json', 'w') as f:
    json.dump(parsed_items, f, ensure_ascii=False, indent=2)
