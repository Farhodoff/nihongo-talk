import fitz, os

path = "/Users/farhod/Downloads/JLPT N1 Grammar Master Ebook by JLPTsensei.com.pdf"

if os.path.exists(path):
    doc = fitz.open(path)
    print(f"Total Pages in JLPTsensei N1: {len(doc)}")
    full_text = ""
    for page_num in range(len(doc)):
        txt = doc[page_num].get_text()
        if txt.strip():
            full_text += f"\n=== PAGE {page_num+1} ===\n" + txt

    print(f"Extracted Text Length: {len(full_text)}")
    with open('/tmp/n1_jlptsensei_extracted.txt', 'w') as f:
        f.write(full_text)
else:
    print("Path does not exist:", path)
