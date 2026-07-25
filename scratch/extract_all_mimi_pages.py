import pypdf

reader = pypdf.PdfReader('books/japanese/N3_Mimi_Kara_Oboeru-Grammar.pdf')

full_text = ""
non_empty_pages = 0

for i, page in enumerate(reader.pages):
    txt = page.extract_text()
    if txt and len(txt.strip()) > 5:
        non_empty_pages += 1
        full_text += f"\n=== PAGE {i+1} ===\n" + txt

print(f"Extracted {non_empty_pages} non-empty pages. Total Chars: {len(full_text)}")

with open('/tmp/mimi_n3_full_text.txt', 'w') as f:
    f.write(full_text)
