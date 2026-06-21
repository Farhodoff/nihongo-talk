const fs = require('fs');

// 1. FlashcardService
let fcPath = 'src/services/FlashcardService.ts';
let fc = fs.readFileSync(fcPath, 'utf8');

fc = fc.replace(/import \{ dbOps \} from '\.\.\/utils\/db';\n/g, '');
fc = fc.replace(/import \{ queueMutation \} from '\.\.\/utils\/offlineSync';\n/g, '');

fc = fc.replace(/\/\/ Cache locally\n\s*await dbOps\.clear\('flashcards'\);\n\s*await dbOps\.putAll\('flashcards', cards\);/g, '');
fc = fc.replace(/catch \(error\) \{\n\s*console\.error\('Fetch flashcards error, falling back to local:', error\);\n\s*const localCards = await dbOps\.getAll\('flashcards'\) as Flashcard\[\];\n\s*return localCards\.filter\(c => !c\.deletedAt\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Fetch flashcards error:\', error);\n            throw error;\n        }');

fc = fc.replace(/await dbOps\.put\('flashcards', localCard\);\n\s*if \(!navigator\.onLine\) \{\n\s*queueMutation\('flashcards', 'insert', dbCard\);\n\s*return localCard;\n\s*\}/g, '');
fc = fc.replace(/await dbOps\.delete\('flashcards', tempId\);\n\s*await dbOps\.put\('flashcards', finalCard\);/g, '');
fc = fc.replace(/catch \(error\) \{\n\s*console\.error\('Add flashcard error, queued for sync:', error\);\n\s*queueMutation\('flashcards', 'insert', dbCard\);\n\s*return localCard;\n\s*\}/g, 'catch (error) {\n            console.error(\'Add flashcard error:\', error);\n            throw error;\n        }');

fc = fc.replace(/const localCards = await dbOps\.getAll\('flashcards'\) as Flashcard\[\];\n\s*const card = localCards\.find\(c => c\.id === id\);\n\s*if \(card\) \{\n\s*const updatedCard = \{ \.\.\.card, \.\.\.updates \};\n\s*await dbOps\.put\('flashcards', updatedCard\);\n\s*\}/g, '');
fc = fc.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('flashcards', 'update', dbUpdates, id\);\n\s*return;\n\s*\}/g, '');
fc = fc.replace(/catch \(error\) \{\n\s*console\.error\('Update flashcard error, queued for sync:', error\);\n\s*queueMutation\('flashcards', 'update', dbUpdates, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Update flashcard error:\', error);\n            throw error;\n        }');

fc = fc.replace(/const localCards = await dbOps\.getAll\('flashcards'\) as Flashcard\[\];\n\s*const card = localCards\.find\(c => c\.id === id\);\n\s*if \(permanent\) \{\n\s*await dbOps\.delete\('flashcards', id\);\n\s*if \(!navigator\.onLine\) \{\n\s*queueMutation\('flashcards', 'delete', null, id\);\n\s*return;\n\s*\}/g, 'if (permanent) {');
fc = fc.replace(/catch \(error\) \{\n\s*console\.error\('Delete flashcard error, queued for sync:', error\);\n\s*queueMutation\('flashcards', 'delete', null, id\);\n\s*\}/g, 'catch (error) {\n                console.error(\'Delete flashcard error:\', error);\n                throw error;\n            }');
fc = fc.replace(/\} else \{\n\s*if \(card\) \{\n\s*const updatedCard = \{ \.\.\.card, deletedAt: new Date\(\)\.toISOString\(\) \};\n\s*await dbOps\.put\('flashcards', updatedCard\);\n\s*\}\n\s*if \(!navigator\.onLine\) \{\n\s*queueMutation\('flashcards', 'update', \{ deleted_at: new Date\(\)\.toISOString\(\) \}, id\);\n\s*return;\n\s*\}/g, '} else {');
fc = fc.replace(/catch \(error\) \{\n\s*console\.error\('Soft delete flashcard error, queued for sync:', error\);\n\s*queueMutation\('flashcards', 'update', \{ deleted_at: new Date\(\)\.toISOString\(\) \}, id\);\n\s*\}/g, 'catch (error) {\n                console.error(\'Soft delete flashcard error:\', error);\n                throw error;\n            }');

fc = fc.replace(/const localCards = await dbOps\.getAll\('flashcards'\) as Flashcard\[\];\n\s*const card = localCards\.find\(c => c\.id === id\);\n\s*if \(card\) \{\n\s*const updatedCard = \{ \.\.\.card \};\n\s*delete updatedCard\.deletedAt;\n\s*await dbOps\.put\('flashcards', updatedCard\);\n\s*\}/g, '');
fc = fc.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('flashcards', 'update', \{ deleted_at: null \}, id\);\n\s*return;\n\s*\}/g, '');
fc = fc.replace(/catch \(error\) \{\n\s*console\.error\('Restore flashcard error, queued for sync:', error\);\n\s*queueMutation\('flashcards', 'update', \{ deleted_at: null \}, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Restore flashcard error:\', error);\n            throw error;\n        }');

fc = fc.replace(/\/\/ Local cache\n\s*const localCards: Flashcard\[\] = dbCards\.map\(c => \(\{\n\s*id: c\.id,\n\s*subjectId: c\.subject_id,\n\s*front: c\.front,\n\s*back: c\.back,\n\s*nextReviewDate: c\.next_review_date,\n\s*easeFactor: c\.ease_factor,\n\s*interval: c\.interval,\n\s*repetitions: c\.repetitions,\n\s*\}\)\);\n\s*await dbOps\.putAll\('flashcards', localCards\);/g, '');
fc = fc.replace(/if \(!navigator\.onLine\) \{\n\s*for \(const dbCard of dbCards\) \{\n\s*queueMutation\('flashcards', 'insert', dbCard\);\n\s*\}\n\s*return true;\n\s*\}/g, '');

fs.writeFileSync(fcPath, fc);
console.log('FlashcardService done');
