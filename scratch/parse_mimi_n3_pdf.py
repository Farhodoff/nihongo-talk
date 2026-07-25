import sys

try:
    import pypdf
except ImportError:
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

pdf_path = 'books/japanese/N3_Mimi_Kara_Oboeru-Grammar.pdf'

reader = pypdf.PdfReader(pdf_path)
print(f"Total Pages in N3_Mimi_Kara_Oboeru-Grammar.pdf: {len(reader.pages)}")

text_sample = ""
for page_num in range(min(15, len(reader.pages))):
    text_sample += f"\n--- PAGE {page_num+1} ---\n" + reader.pages[page_num].extract_text()

with open('/tmp/mimi_n3_sample.txt', 'w') as f:
    f.write(text_sample)

print("Saved sample text to /tmp/mimi_n3_sample.txt. Length:", len(text_sample))
