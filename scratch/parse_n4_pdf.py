import pypdf, re, json

pdf_path = 'books/japanese/jlpt-n4-grammar-list.pdf'
reader = pypdf.PdfReader(pdf_path)
text = '\n'.join([p.extract_text() for p in reader.pages])

# Split by grammar headers
# Pattern: Japanese (romaji): meaning
blocks = re.split(r'\n(?=[^\n()]+?\s*\([^()]+?\):\s*[^\n]+)', text)

n4_items = []

for block in blocks:
    lines = [l.strip() for l in block.split('\n') if l.strip() and not l.strip().isdigit() and 'Japanesetest4you' not in l and 'visit' not in l]
    if not lines:
        continue
    
    header_match = re.match(r'([^\n()]+?)\s*\(([^()]+?)\):\s*(.+)', lines[0])
    if header_match:
        ja_title = header_match.group(1).strip()
        romaji = header_match.group(2).strip()
        meaning_en = header_match.group(3).strip()
        
        # Find sentence example if available
        ja_ex = ""
        en_ex = ""
        romaji_ex = ""
        
        for idx in range(1, len(lines)):
            l = lines[idx]
            if re.search(r'[\u3040-\u30ff\u4e00-\u9faf]', l) and not ja_ex:
                ja_ex = l
            elif re.search(r'[a-zA-Z]', l) and not romaji_ex and ja_ex:
                if 'http' not in l and 'Japanesetest' not in l:
                    if not en_ex:
                        en_ex = l
                    elif not romaji_ex:
                        romaji_ex = l
                        
        n4_items.append({
            'title': f'{ja_title} ({romaji})',
            'romaji': romaji,
            'meaningEn': meaning_en,
            'jaEx': ja_ex or f'{ja_title}の例文です。',
            'enEx': en_ex or 'Example sentence.',
            'romajiEx': romaji_ex or 'Reibun desu.'
        })

print(f"Total parsed N4 items: {len(n4_items)}")
with open('/tmp/n4_parsed.json', 'w') as f:
    json.dump(n4_items, f, ensure_ascii=False, indent=2)
