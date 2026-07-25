import fitz

doc = fitz.open('books/japanese/N2_Grammar_Master_JLPTsensei.pdf')
print(f"Total Pages in N2_Grammar_Master_JLPTsensei.pdf: {len(doc)}")

full_text = ""
for page_num in range(len(doc)):
    txt = doc[page_num].get_text()
    if txt.strip():
        full_text += f"\n=== PAGE {page_num+1} ===\n" + txt

print(f"Extracted Text Length: {len(full_text)}")
with open('/tmp/n2_jlptsensei_extracted.txt', 'w') as f:
    f.write(full_text)
