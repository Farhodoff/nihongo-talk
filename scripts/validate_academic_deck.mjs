#!/usr/bin/env node
/**
 * Audits the English academic deck and, only with --apply, writes a timestamped
 * backup before replacing it. Default mode is read-only and prints a report.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const deckPath = path.join(root, 'src/data/decks/academic.json');
const apply = process.argv.includes('--apply');
const cards = JSON.parse(fs.readFileSync(deckPath, 'utf8'));
const japanese = /[\u3040-\u30ff\u3400-\u9fff\uff00-\uffef]/;
const brokenEncoding = /�/;
const tocOrIndex = /^(contents|index)$/i;
const navigation = /(?:\bunit\s*\d+|diagnostic test\s*\d+|→|->\s*unit\s*\d+)/i;
const dummyExample = /^example sentence with .+\.$/i;

function problems(card) {
  const front = String(card.front || '').replace(/\s+/g, ' ').trim();
  const back = String(card.back || '').replace(/\s+/g, ' ').trim();
  const combined = `${front}\n${back}`;
  const flags = [];
  if (!front || !back) flags.push('missing-side');
  if (japanese.test(combined)) flags.push('japanese-text');
  if (brokenEncoding.test(combined)) flags.push('broken-encoding');
  if (tocOrIndex.test(front)) flags.push('contents-or-index');
  if (navigation.test(combined)) flags.push('table-of-contents-navigation');
  return flags;
}

const rejected = [];
let dummyExamples = 0;
const cleaned = [];
cards.forEach((card, index) => {
  const flags = problems(card);
  if (flags.length) {
    rejected.push({ index, front: card.front, flags });
    return;
  }
  const next = { ...card };
  if (dummyExample.test(String(next.example || '').trim())) {
    delete next.example;
    dummyExamples++;
  }
  cleaned.push(next);
});

const report = {
  source: path.relative(root, deckPath),
  totalCards: cards.length,
  acceptedCards: cleaned.length,
  rejectedCards: rejected.length,
  dummyExamplesRemoved: dummyExamples,
  rejectedByReason: rejected.reduce((acc, item) => {
    item.flags.forEach(flag => { acc[flag] = (acc[flag] || 0) + 1; });
    return acc;
  }, {}),
  samples: rejected.slice(0, 30),
  mode: apply ? 'apply' : 'dry-run'
};

const reportDir = path.join(root, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, 'academic-deck-validation.json'), JSON.stringify(report, null, 2) + '\n');

if (apply) {
  const backupDir = path.join(root, 'src/data/decks/backups');
  fs.mkdirSync(backupDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(backupDir, `academic.${stamp}.json`);
  fs.copyFileSync(deckPath, backupPath);
  fs.writeFileSync(deckPath, JSON.stringify(cleaned, null, 2) + '\n');
  report.backup = path.relative(root, backupPath);
  fs.writeFileSync(path.join(reportDir, 'academic-deck-validation.json'), JSON.stringify(report, null, 2) + '\n');
}

console.log(JSON.stringify(report, null, 2));
