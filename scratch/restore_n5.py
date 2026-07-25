import subprocess, json, re

# Get git file content at commit 7273ee0
cmd = ["git", "show", "7273ee0:src/data/jlptGrammarKanji.ts"]
res = subprocess.run(cmd, capture_output=True, text=True, cwd="/Users/farhod/Desktop/github/study_planner")
old_ts = res.stdout

# Extract all N5 objects from old_ts using regex
# We look for objects between JLPT_GRAMMAR_DATA = [ and // JLPT N4
n5_block_match = re.search(r'JLPT_GRAMMAR_DATA:\s*JlptGrammarItem\[\]\s*=\s*\[(.*?)//\s*=*', old_ts, re.DOTALL)

if n5_block_match:
    n5_text = n5_block_match.group(1).strip()
    print("Found N5 block from commit 7273ee0!")
else:
    print("Failed to find N5 block in commit 7273ee0")
    exit(1)

# Now read current jlptGrammarKanji.ts to get current N4, N3, N2, N1 items
with open('src/data/jlptGrammarKanji.ts') as f:
    current_ts = f.read()

# Replace N5 section in current_ts with full n5_text
pattern = re.compile(r'JLPT_GRAMMAR_DATA:\s*JlptGrammarItem\[\]\s*=\s*\[(.*?)//\s*=\s*JLPT N4', re.DOTALL)

new_ts = pattern.sub(f'JLPT_GRAMMAR_DATA: JlptGrammarItem[] = [\n    {n5_text}\n\n    // =', current_ts)

with open('src/data/jlptGrammarKanji.ts', 'w') as f:
    f.write(new_ts)

print("Successfully restored full N5 dataset alongside N4!")
