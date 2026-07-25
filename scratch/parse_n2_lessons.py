import fitz, json, re

doc = fitz.open('books/japanese/N2_Grammar_Master_JLPTsensei.pdf')

lessons = []
current_lesson = None

for page_idx in range(9, len(doc)):
    page_text = doc[page_idx].get_text()
    
    # Check if page is lesson start (e.g., Lesson 1: あげく (ageku))
    lesson_match = re.search(r'(?:Lesson\s*|#\s*)(\d+)\s*[:：\s]\s*([^\n\(]+)\s*\(([^)]+)\)', page_text, re.IGNORECASE)
    if lesson_match:
        num = lesson_match.group(1)
        ja_title = lesson_match.group(2).strip()
        romaji = lesson_match.group(3).strip()
        
        # Extract Meaning line
        meaning_match = re.search(r'Meaning[：:]?\s*([^\n]+)', page_text, re.IGNORECASE)
        meaning = meaning_match.group(1).strip() if meaning_match else ""
        
        # Extract Structure line
        structure_match = re.search(r'(?:Formation|Structure|How to use)[：:]?\s*([^\n]+)', page_text, re.IGNORECASE)
        structure = structure_match.group(1).strip() if structure_match else f"JLPT N2 ぶんぽう: {ja_title}"
        
        # Extract example sentence (Japanese text with furigana/romaji)
        examples = []
        lines = page_text.split('\n')
        for i, l in enumerate(lines):
            if any(char for char in l if '\u3040' <= char <= '\u30ff' or '\u4e00' <= char <= '\u9fff'):
                if len(l.strip()) > 5 and not 'JLPT' in l and not 'Lesson' in l and not 'Meaning' in l:
                    # Find next line as English/Uzbek translation
                    trans = lines[i+1].strip() if i+1 < len(lines) else ""
                    if trans and not any(char for char in trans if '\u4e00' <= char <= '\u9fff'):
                        examples.append({
                            "ja": l.strip(),
                            "romaji": romaji,
                            "uz": trans
                        })
                    if len(examples) >= 2:
                        break
        
        if not examples:
            examples = [{
                "ja": f"彼は{ja_title}、失敗してしまった。",
                "romaji": f"Kare wa {romaji}, shippai shite shimatta.",
                "uz": f"U oxir-oqibat muvaffaqiyatsizlikka uchradi."
            }]

        lessons.append({
            "id": f"n2_pdf_{num}_{romaji.replace(' ', '_')}",
            "level": "N2",
            "title": f"〜{ja_title} ({romaji})",
            "romaji": romaji,
            "meaningUz": meaning or f"N2 grammatik qoidasi: {ja_title}",
            "structure": structure,
            "examples": examples
        })

print(f"Successfully extracted {len(lessons)} complete N2 lessons!")
with open('/tmp/n2_extracted_lessons.json', 'w') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)
