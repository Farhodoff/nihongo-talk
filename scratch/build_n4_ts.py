import json, re

with open('/tmp/n4_parsed.json') as f:
    items = json.load(f)

print(f"Loaded {len(items)} items")

# Generate TypeScript code string
ts_code = "    // ==========================================\n"
ts_code += "    // 🎌 JLPT N4 EXHAUSTIVE GRAMMAR (jlpt-n4-grammar-list.pdf)\n"
ts_code += "    // ==========================================\n"

for idx, item in enumerate(items):
    clean_id = re.sub(r'[^a-z0-9_]', '', item['romaji'].lower().replace('~', '').replace(' ', '_')) or f'n4_item_{idx}'
    item_id = f"n4_pdf_{idx+1}_{clean_id}"
    
    title = item['title'].replace("'", "\\'")
    romaji = item['romaji'].replace("'", "\\'")
    meaning = item['meaningEn'].replace("'", "\\'")
    ja_ex = item['jaEx'].replace("'", "\\'")
    romaji_ex = item['romajiEx'].replace("'", "\\'")
    en_ex = item['enEx'].replace("'", "\\'")
    
    ts_code += f"""    {{
        id: '{item_id}',
        level: 'N4',
        title: '{title}',
        romaji: '{romaji}',
        meaningUz: '{meaning}',
        structure: 'JLPT N4 Grammatika qoidasi',
        examples: [
            {{ ja: '{ja_ex}', romaji: '{romaji_ex}', uz: '{en_ex}' }}
        ]
    }},\n"""

with open('/tmp/n4_ts_snippet.txt', 'w') as f:
    f.write(ts_code)

print("TS Snippet generated successfully!")
