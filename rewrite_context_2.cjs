const fs = require('fs');

let ctxPath = 'src/context/StudyPlannerContext.tsx';
let ctx = fs.readFileSync(ctxPath, 'utf8');

ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('goals', 'insert', fullGoalData\);\n\s*const optimisticGoal = \{ \.\.\.fullGoalData, progress: goalData\.progress \|\| 0, completed: goalData\.completed \|\| false \} as Goal;\n\s*setGoals\(prev => \[\.\.\.prev, optimisticGoal\]\);\n\s*return optimisticGoal;\n\s*\}/g, '');

ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('notes', 'insert', dbNote\);\n\s*return newNote;\n\s*\}/g, '');

ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('study_notes', 'insert', dbNote\);\n\s*return;\n\s*\}/g, '');

ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('study_sessions', 'insert', supabaseData\);\n\s*return;\n\s*\}/g, '');

fs.writeFileSync(ctxPath, ctx);
console.log('StudyPlannerContext fixes done');

// Fix unused var in FlashcardService
let fcPath = 'src/services/FlashcardService.ts';
let fc = fs.readFileSync(fcPath, 'utf8');
fc = fc.replace(/const localCard: Flashcard = \{\n\s*id: tempId,\n\s*subjectId: dbCard\.subject_id \|\| '',\n\s*front: dbCard\.front \|\| '',\n\s*back: dbCard\.back \|\| '',\n\s*nextReviewDate: dbCard\.next_review_date,\n\s*easeFactor: dbCard\.ease_factor,\n\s*interval: dbCard\.interval,\n\s*repetitions: dbCard\.repetitions,\n\s*\};\n/g, '');
fs.writeFileSync(fcPath, fc);
console.log('FlashcardService fixes done');

// Fix unused var in TaskService
let tsPath = 'src/services/TaskService.ts';
let ts = fs.readFileSync(tsPath, 'utf8');
ts = ts.replace(/const tempId = taskData\.id \|\| `temp-\$\{Date\.now\(\)\}`;/g, '');
fs.writeFileSync(tsPath, ts);
console.log('TaskService fixes done');
