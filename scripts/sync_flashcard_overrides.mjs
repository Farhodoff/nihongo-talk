/**
 * scripts/sync_flashcard_overrides.mjs
 * Syncs all global flashcard overrides from Supabase database directly into src/data/decks/*.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Load Supabase credentials from .env.local or .env
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  let env = {};
  for (const f of envFiles) {
    const fullPath = path.join(rootDir, f);
    if (fs.existsSync(fullPath)) {
      const lines = fs.readFileSync(fullPath, 'utf8').split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
          if (!env[key]) env[key] = val;
        }
      }
    }
  }
  return env;
}

const env = loadEnv();
const supabaseUrl = env.VITE_SUPABASE_URL || env.SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const supabaseKey = env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase credentials missing in .env or .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function normalizeKey(text) {
  if (!text) return '';
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000]+/g, '')
    .replace(/[\[（(［「【].*?[\]）)］」】]/g, '');
}

const DECKS_DIR = path.join(rootDir, 'src', 'data', 'decks');

const DECK_FILE_MAP = {
  deck_minna_shokyu1: 'minna_shokyu1.json',
  minna_shokyu1: 'minna_shokyu1.json',
  deck_minna_shokyu2: 'minna_shokyu2.json',
  minna_shokyu2: 'minna_shokyu2.json',
  deck_jlpt_n5: 'jlpt_n5.json',
  jlpt_n5: 'jlpt_n5.json',
  deck_jlpt_n4: 'jlpt_n4.json',
  jlpt_n4: 'jlpt_n4.json',
  deck_jlpt_n3: 'jlpt_n3.json',
  jlpt_n3: 'jlpt_n3.json',
  deck_jlpt_n2: 'jlpt_n2.json',
  jlpt_n2: 'jlpt_n2.json',
  deck_jlpt_n1: 'jlpt_n1.json',
  jlpt_n1: 'jlpt_n1.json',
};

async function syncOverrides() {
  console.log('🔄 Fetching global flashcard overrides from Supabase...');
  const { data: overrides, error } = await supabase
    .from('global_flashcard_overrides')
    .select('*')
    .order('updated_at', { ascending: true });

  if (error) {
    console.error('❌ Error fetching overrides:', error.message);
    return;
  }

  console.log(`📦 Found ${overrides?.length || 0} overrides in Supabase.`);

  // Load all JSON deck files into memory
  const deckFiles = fs.readdirSync(DECKS_DIR).filter(f => f.endsWith('.json') && !f.includes('backups'));
  const deckContents = {};
  for (const df of deckFiles) {
    try {
      const raw = fs.readFileSync(path.join(DECKS_DIR, df), 'utf8');
      deckContents[df] = {
        path: path.join(DECKS_DIR, df),
        cards: JSON.parse(raw),
        modified: false,
      };
    } catch (err) {
      console.warn(`⚠️ Could not read ${df}:`, err.message);
    }
  }

  let totalUpdated = 0;

  if (overrides && overrides.length > 0) {
    for (const ov of overrides) {
      const targetWord = (ov.word || ov.front || '').trim();
      const normWord = normalizeKey(targetWord);
      const newFront = (ov.front || targetWord).trim();
      const newBack = (ov.back || '').trim();
      const newPhonetic = ov.phonetic ? ov.phonetic.trim() : undefined;
      const newExample = ov.example ? ov.example.trim() : undefined;

      let matched = false;

      // If specific deck_id mapped
      const targetFile = ov.deck_id ? DECK_FILE_MAP[ov.deck_id] : null;
      const filesToSearch = targetFile && deckContents[targetFile]
        ? [targetFile, ...deckFiles.filter(f => f !== targetFile)]
        : deckFiles;

      for (const df of filesToSearch) {
        const deckData = deckContents[df];
        if (!deckData || !Array.isArray(deckData.cards)) continue;

        for (let i = 0; i < deckData.cards.length; i++) {
          const card = deckData.cards[i];
          const cardFront = (card.front || '').trim();
          const cardNorm = normalizeKey(cardFront);

          const isMatch =
            cardFront === targetWord ||
            cardNorm === normWord ||
            cardFront.toLowerCase() === targetWord.toLowerCase() ||
            (ov.front && (cardFront === ov.front || cardNorm === normalizeKey(ov.front)));

          if (isMatch) {
            deckData.cards[i] = {
              ...card,
              front: newFront,
              back: newBack,
              phonetic: newPhonetic !== undefined ? newPhonetic : card.phonetic,
              example: newExample !== undefined ? newExample : card.example,
            };
            deckData.modified = true;
            matched = true;
            totalUpdated++;
            break;
          }
        }

        if (matched) break;
      }

      // If override was targeted to a deck but not found, append it
      if (!matched && targetFile && deckContents[targetFile]) {
        deckContents[targetFile].cards.push({
          front: newFront,
          back: newBack,
          phonetic: newPhonetic,
          example: newExample,
        });
        deckContents[targetFile].modified = true;
        totalUpdated++;
      }
    }
  }

  // 2. Also check preset_deck_curations table
  try {
    const { data: curations } = await supabase.from('preset_deck_curations').select('*');
    if (curations && curations.length > 0) {
      for (const cur of curations) {
        const targetFile = DECK_FILE_MAP[cur.deck_id];
        if (targetFile && deckContents[targetFile] && Array.isArray(cur.cards) && cur.cards.length > 0) {
          deckContents[targetFile].cards = cur.cards;
          deckContents[targetFile].modified = true;
          console.log(`✅ Applied verified curation to ${targetFile} (${cur.cards.length} cards)`);
        }
      }
    }
  } catch (err) {
    console.warn('Notice while checking preset_deck_curations:', err.message);
  }

  // 3. Write back modified JSON files
  let savedFilesCount = 0;
  for (const [fileName, fileInfo] of Object.entries(deckContents)) {
    if (fileInfo.modified) {
      fs.writeFileSync(fileInfo.path, JSON.stringify(fileInfo.cards, null, 2) + '\n', 'utf8');
      savedFilesCount++;
      console.log(`💾 Saved updated deck: ${fileName}`);
    }
  }

  console.log(`✨ Done! Total card updates: ${totalUpdated} across ${savedFilesCount} files.`);
}

syncOverrides().catch(err => {
  console.error('Fatal sync error:', err);
  process.exit(1);
});
