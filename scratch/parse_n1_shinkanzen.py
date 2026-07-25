import fitz, json, re

doc = fitz.open('books/japanese/N1_Shin_Kanzen_Grammar 文法.pdf')
print(f"Total Pages in N1_Shin_Kanzen_Grammar: {len(doc)}")

full_text = ""
for page_num in range(len(doc)):
    txt = doc[page_num].get_text()
    if txt.strip():
        full_text += f"\n=== PAGE {page_num+1} ===\n" + txt

print(f"Extracted Text Length: {len(full_text)}")

# Save raw text
with open('/tmp/n1_shinkanzen_text.txt', 'w') as f:
    f.write(full_text)
