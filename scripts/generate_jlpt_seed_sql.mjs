import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import JLPT_MOCK_EXAM_DATA
const { JLPT_MOCK_EXAM_DATA } = await import('../src/data/jlptMockExamData.ts');

const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

const LEVEL_CONFIG = {
  N5: {
    examId: 'a0000005-0000-4000-8000-000000000001',
    title: 'JLPT N5 Rasmiy Mock Test (2026)',
    desc: 'Boshlang\'ich yapon tili darajasi. Lug\'at, grammatika, o\'qish va eshitish bo\'limlari.',
    secKnowledgeId: 'b0000005-0001-4000-8000-000000000001',
    secReadingId: 'b0000005-0002-4000-8000-000000000001',
    secListeningId: 'b0000005-0003-4000-8000-000000000001',
  },
  N4: {
    examId: 'a0000004-0000-4000-8000-000000000001',
    title: 'JLPT N4 Rasmiy Mock Test (2026)',
    desc: 'Bazaviy yapon tili darajasi. Kundalik suhbatlar, o\'qish va tinglab tushunish.',
    secKnowledgeId: 'b0000004-0001-4000-8000-000000000001',
    secReadingId: 'b0000004-0002-4000-8000-000000000001',
    secListeningId: 'b0000004-0003-4000-8000-000000000001',
  },
  N3: {
    examId: 'a0000003-0000-4000-8000-000000000001',
    title: 'JLPT N3 Rasmiy Mock Test (2026)',
    desc: 'O\'rta yapon tili darajasi. Murakkab grammatik tuzilmalar, maqolalar va suhbatlar.',
    secKnowledgeId: 'b0000003-0001-4000-8000-000000000001',
    secReadingId: 'b0000003-0002-4000-8000-000000000001',
    secListeningId: 'b0000003-0003-4000-8000-000000000001',
  },
  N2: {
    examId: 'a0000002-0000-4000-8000-000000000001',
    title: 'JLPT N2 Rasmiy Mock Test (2026)',
    desc: 'Yuqori o\'rta daraja. Ilmiy va ijtimoiy matnlar, tezkor yaponcha dialoglar.',
    secKnowledgeId: 'b0000002-0001-4000-8000-000000000001',
    secReadingId: 'b0000002-0002-4000-8000-000000000001',
    secListeningId: 'b0000002-0003-4000-8000-000000000001',
  },
  N1: {
    examId: 'a0000001-0000-4000-8000-000000000001',
    title: 'JLPT N1 Rasmiy Mock Test (2026)',
    desc: 'Professional yuqori daraja. Gazeta maqolalari, falsafiy va ijtimoiy tahliliy matnlar.',
    secKnowledgeId: 'b0000001-0001-4000-8000-000000000001',
    secReadingId: 'b0000001-0002-4000-8000-000000000001',
    secListeningId: 'b0000001-0003-4000-8000-000000000001',
  },
};

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

let sql = `-- ==============================================================================
-- JLPT N5 - N1 Baseline Mock Exams Seeding Migration
-- ==============================================================================

`;

for (const lvl of LEVELS) {
  const cfg = LEVEL_CONFIG[lvl];
  const questions = JLPT_MOCK_EXAM_DATA[lvl];

  sql += `-- ------------------------------------------------------------------------------\n`;
  sql += `-- JLPT ${lvl} Exam\n`;
  sql += `-- ------------------------------------------------------------------------------\n`;
  sql += `INSERT INTO public.exams (id, title, description, type, is_published)\n`;
  sql += `VALUES (${escapeSql(cfg.examId)}, ${escapeSql(cfg.title)}, ${escapeSql(cfg.desc)}, 'JLPT ${lvl}', true)\n`;
  sql += `ON CONFLICT (id) DO UPDATE SET\n`;
  sql += `  title = EXCLUDED.title,\n`;
  sql += `  description = EXCLUDED.description,\n`;
  sql += `  type = EXCLUDED.type,\n`;
  sql += `  is_published = EXCLUDED.is_published;\n\n`;

  // Sections
  const readingContent = questions.filter(q => q.section === 'reading' && q.passageText).map(q => q.passageText).join('\n\n---\n\n');
  const listeningContent = questions.filter(q => q.section === 'listening' && q.script).map(q => q.script).join('\n\n---\n\n');

  sql += `INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)\n`;
  sql += `VALUES (${escapeSql(cfg.secKnowledgeId)}, ${escapeSql(cfg.examId)}, '言語知識 (Language Knowledge)', 'Language Knowledge', NULL, 1)\n`;
  sql += `ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, order_index = EXCLUDED.order_index;\n\n`;

  sql += `INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)\n`;
  sql += `VALUES (${escapeSql(cfg.secReadingId)}, ${escapeSql(cfg.examId)}, '読解 (Reading Comprehension)', 'Reading', ${escapeSql(readingContent)}, 2)\n`;
  sql += `ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;\n\n`;

  sql += `INSERT INTO public.exam_sections (id, exam_id, title, type, content, order_index)\n`;
  sql += `VALUES (${escapeSql(cfg.secListeningId)}, ${escapeSql(cfg.examId)}, '聴解 (Listening Comprehension)', 'Listening', ${escapeSql(listeningContent)}, 3)\n`;
  sql += `ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, type = EXCLUDED.type, content = EXCLUDED.content, order_index = EXCLUDED.order_index;\n\n`;

  // Questions
  // First delete previous questions for these sections to allow clean updates
  sql += `DELETE FROM public.exam_questions WHERE section_id IN (${escapeSql(cfg.secKnowledgeId)}, ${escapeSql(cfg.secReadingId)}, ${escapeSql(cfg.secListeningId)});\n\n`;

  let idx = 1;
  for (const q of questions) {
    const secId = q.section === 'knowledge' ? cfg.secKnowledgeId : q.section === 'reading' ? cfg.secReadingId : cfg.secListeningId;
    const optionsJson = JSON.stringify(q.options);
    const correctOpt = q.options[q.correctAnswer];
    const qId = `c0000${String(q.id).padStart(3, '0')}-0000-4000-8000-000000000001`;

    sql += `INSERT INTO public.exam_questions (id, section_id, question_text, type, options, correct_answer, explanation, order_index)\n`;
    sql += `VALUES (\n`;
    sql += `  ${escapeSql(qId)},\n`;
    sql += `  ${escapeSql(secId)},\n`;
    sql += `  ${escapeSql(q.questionText)},\n`;
    sql += `  'multiple_choice',\n`;
    sql += `  ${escapeSql(optionsJson)}::jsonb,\n`;
    sql += `  ${escapeSql(correctOpt)},\n`;
    sql += `  ${escapeSql(q.explanationUzbek || null)},\n`;
    sql += `  ${idx++}\n`;
    sql += `);\n`;
  }
  sql += `\n`;
}

const targetPath = path.resolve(__dirname, '../supabase/migrations/20260918000002_seed_jlpt_mock_exams.sql');
fs.writeFileSync(targetPath, sql, 'utf8');
console.log(`✅ Generated seed migration at: ${targetPath}`);
