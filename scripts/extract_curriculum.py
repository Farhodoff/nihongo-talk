import os
import re
import json
import pypdf

BOOKS_DIR = "books"
OUTPUT_FILE = "src/data/curriculumData.ts"

LEVEL_MAPPING = {
    "a1-a2": "A1-A2",
    "b1-b2": "B1-B2",
    "c1-c2": "C1-C2"
}

def scan_books():
    curriculum = {
        "A1-A2": {"vocab": [], "grammar": [], "speaking": []},
        "B1-B2": {"vocab": [], "grammar": [], "speaking": []},
        "C1-C2": {"vocab": [], "grammar": [], "speaking": []}
    }

    if not os.path.exists(BOOKS_DIR):
        print("Books directory not found.")
        return curriculum

    for level_dir in os.listdir(BOOKS_DIR):
        level_path = os.path.join(BOOKS_DIR, level_dir)
        if os.path.isdir(level_path) and level_dir.lower() in LEVEL_MAPPING:
            cefr_level = LEVEL_MAPPING[level_dir.lower()]
            print(f"\nProcessing level: {cefr_level}")
            
            for file_name in os.listdir(level_path):
                if file_name.endswith(".pdf"):
                    pdf_path = os.path.join(level_path, file_name)
                    print(f" Reading: {file_name}")
                    try:
                        reader = pypdf.PdfReader(pdf_path)
                        full_text = ""
                        max_p = min(len(reader.pages), 25)
                        for idx in range(max_p):
                            txt = reader.pages[idx].extract_text()
                            if txt:
                                full_text += txt + "\n"

                        # Extract vocabulary / collocations patterns (Word: Definition / Example)
                        vocab_matches = re.findall(r'([A-Z][a-z]{3,15}(?:\s[a-z]{3,15})?)\s*[:–-]\s*([^\n.]{15,100})', full_text)
                        for word, desc in vocab_matches[:25]:
                            if len(word) > 3 and not word.startswith("Chapter") and not word.startswith("Cambridge"):
                                curriculum[cefr_level]["vocab"].append({
                                    "front": word.strip(),
                                    "back": desc.strip(),
                                    "level": cefr_level,
                                    "source": file_name
                                })
                        
                        # Extract Grammar rules (Unit / Module headers)
                        grammar_matches = re.findall(r'(Unit\s+\d+|Module\s+\d+|Grammar\s+\d+)\s*[:–-]?\s*([^\n]{10,60})', full_text, re.IGNORECASE)
                        for g_unit, g_title in grammar_matches[:15]:
                            curriculum[cefr_level]["grammar"].append({
                                "unit": g_unit.strip(),
                                "topic": g_title.strip(),
                                "level": cefr_level,
                                "source": file_name
                            })

                        # Extract Speaking questions
                        speaking_matches = re.findall(r'(\d+\.\s*Do you[^\n?]+\?|\d+\.\s*What[^\n?]+\?|\d+\.\s*How[^\n?]+\?)', full_text)
                        for q in speaking_matches[:15]:
                            curriculum[cefr_level]["speaking"].append({
                                "question": q.strip(),
                                "level": cefr_level,
                                "source": file_name
                            })

                    except Exception as err:
                        print(f"  Error parsing {file_name}: {err}")

    return curriculum

def write_ts_output(data):
    ts_content = f"""// AUTO-GENERATED FROM /books PDF CURRICULUM DATABASE
export interface CurriculumVocabItem {{
    front: string;
    back: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2';
    source: string;
}}

export interface CurriculumGrammarItem {{
    unit: string;
    topic: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2';
    source: string;
}}

export interface CurriculumSpeakingItem {{
    question: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2';
    source: string;
}}

export const EXTRACTED_CURRICULUM = {json.dumps(data, indent=2)};
"""
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(ts_content)
    print(f"\nSuccessfully generated {OUTPUT_FILE}!")

if __name__ == "__main__":
    result = scan_books()
    write_ts_output(result)
