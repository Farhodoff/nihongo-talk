const fs = require('fs');

let ctxPath = 'src/context/StudyPlannerContext.tsx';
let ctx = fs.readFileSync(ctxPath, 'utf8');

// Remove imports
ctx = ctx.replace(/import \{ queueMutation, syncOfflineQueue \} from '\.\.\/utils\/offlineSync';\n/g, '');
ctx = ctx.replace(/import \{ dbOps \} from '\.\.\/utils\/db';\n/g, '');

// Remove Fast Path
ctx = ctx.replace(/\/\/ --- FAST PATH: Load local cached data first to unblock UI ---\n\s*try \{\n\s*const \[localTasks, localCards, localSubjects, localGoals, localSessions\] = await Promise\.all\(\[\n\s*dbOps\.getAll\('tasks'\),\n\s*dbOps\.getAll\('flashcards'\),\n\s*dbOps\.getAll\('subjects'\),\n\s*dbOps\.getAll\('goals'\),\n\s*dbOps\.getAll\('sessions'\)\n\s*\]\);\n\s*if \(localTasks && localTasks\.length > 0\) setTasks\(localTasks as Task\[\]\);\n\s*if \(localCards && localCards\.length > 0\) setFlashcards\(localCards as Flashcard\[\]\);\n\s*if \(localSubjects && localSubjects\.length > 0\) setSubjects\(localSubjects as Subject\[\]\);\n\s*if \(localGoals && localGoals\.length > 0\) setGoals\(localGoals as Goal\[\]\);\n\s*if \(localSessions && localSessions\.length > 0\) setSessions\(localSessions as StudySession\[\]\);\n\s*\/\/ Unblock UI immediately with local data\n\s*setLoading\(false\);\n\s*\} catch \(localErr\) \{\n\s*console\.warn\("Failed to load local data quickly:", localErr\);\n\s*\}/g, '');

// Remove dbOps from fetchData
ctx = ctx.replace(/await dbOps\.clear\('[^']+'\);\n\s*await dbOps\.putAll\('[^']+', [a-zA-Z]+\);/g, '');
ctx = ctx.replace(/await dbOps\.putAll\('[^']+', [a-zA-Z]+\);/g, '');

// Remove syncOfflineQueue useEffect
ctx = ctx.replace(/useEffect\(\(\) => \{\n\s*const handleOnline = \(\) => \{\n\s*console\.log\('\[Offline Sync\] App is online, starting sync\.\.\.'\);\n\s*syncOfflineQueue\(supabase\)\.then\(\(\) => \{\n\s*fetchData\(\);\n\s*\}\);\n\s*\};\n\s*window\.addEventListener\('online', handleOnline\);\n\s*if \(navigator\.onLine\) \{\n\s*syncOfflineQueue\(supabase\)\.then\(\(\) => \{\n\s*fetchData\(\);\n\s*\}\);\n\s*\}\n\s*return \(\) => window\.removeEventListener\('online', handleOnline\);\n\s*\}, \[fetchData\]\);/g, '');

// Fix addGoal
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('goals', 'insert', fullGoalData\);\n\s*return optimisticGoal;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Add goal error, queued for sync:', error\);\n\s*queueMutation\('goals', 'insert', fullGoalData\);\n\s*return optimisticGoal;\n\s*\}/g, 'catch (error) {\n            console.error(\'Add goal error:\', error);\n            throw error;\n        }');

// Fix updateGoal
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('goals', 'update', updates, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Update goal error, queued for sync:', error\);\n\s*queueMutation\('goals', 'update', updates, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Update goal error:\', error);\n            throw error;\n        }');

// Fix deleteGoal
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('goals', 'delete', null, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Delete goal error, queued for sync:', error\);\n\s*queueMutation\('goals', 'delete', null, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Delete goal error:\', error);\n            throw error;\n        }');

// Fix addSubject
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('subjects', 'insert', dbSubject\);\n\s*return optimisticSubject;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Add subject error, queued for sync:', error\);\n\s*queueMutation\('subjects', 'insert', dbSubject\);\n\s*return optimisticSubject;\n\s*\}/g, 'catch (error) {\n            console.error(\'Add subject error:\', error);\n            throw error;\n        }');
ctx = ctx.replace(/dbOps\.delete\('subjects', tempId\)\.catch\(console\.error\);\n\s*dbOps\.put\('subjects', newSubject\)\.catch\(console\.error\);/g, '');
ctx = ctx.replace(/dbOps\.put\('subjects', optimisticSubject\)\.catch\(console\.error\);/g, '');

// Fix deleteSubject
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('subjects', 'delete', null, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Delete subject error, queued for sync:', error\);\n\s*queueMutation\('subjects', 'delete', null, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Delete subject error:\', error);\n            throw error;\n        }');
ctx = ctx.replace(/dbOps\.delete\('subjects', id\)\.catch\(console\.error\);/g, '');

// Fix updateSubject
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('subjects', 'update', dbUpdates, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Update subject error, queued for sync:', error\);\n\s*queueMutation\('subjects', 'update', dbUpdates, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Update subject error:\', error);\n            throw error;\n        }');
ctx = ctx.replace(/dbOps\.put\('subjects', updatedSubject\)\.catch\(console\.error\);/g, '');

// Fix addNote
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('notes', 'insert', dbNote\);\n\s*return optimisticNote;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Add note error, queued for sync:', error\);\n\s*queueMutation\('notes', 'insert', dbNote\);\n\s*return optimisticNote;\n\s*\}/g, 'catch (error) {\n            console.error(\'Add note error:\', error);\n            throw error;\n        }');

// Fix updateNote
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('notes', 'update', dbUpdates, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Update note error, queued for sync:', error\);\n\s*queueMutation\('notes', 'update', dbUpdates, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Update note error:\', error);\n            throw error;\n        }');

// Fix deleteNote
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('notes', 'delete', null, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Delete note error, queued for sync:', error\);\n\s*queueMutation\('notes', 'delete', null, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Delete note error:\', error);\n            throw error;\n        }');

// Fix addStudyNote
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('study_notes', 'insert', dbNote\);\n\s*return optimisticNote;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Add study note error, queued for sync:', error\);\n\s*queueMutation\('study_notes', 'insert', dbNote\);\n\s*return optimisticNote;\n\s*\}/g, 'catch (error) {\n            console.error(\'Add study note error:\', error);\n            throw error;\n        }');

// Fix updateStudyNote
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('study_notes', 'update', dbUpdates, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Update study note error, queued for sync:', error\);\n\s*queueMutation\('study_notes', 'update', dbUpdates, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Update study note error:\', error);\n            throw error;\n        }');

// Fix deleteStudyNote
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('study_notes', 'delete', null, id\);\n\s*return;\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Delete study note error, queued for sync:', error\);\n\s*queueMutation\('study_notes', 'delete', null, id\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Delete study note error:\', error);\n            throw error;\n        }');

// Fix addSession
ctx = ctx.replace(/if \(!navigator\.onLine\) \{\n\s*queueMutation\('study_sessions', 'insert', supabaseData\);\n\s*\}/g, '');
ctx = ctx.replace(/catch \(error\) \{\n\s*console\.error\('Add session error, queued for sync:', error\);\n\s*queueMutation\('study_sessions', 'insert', supabaseData\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Add session error:\', error);\n            throw error;\n        }');
ctx = ctx.replace(/await dbOps\.put\('sessions', optimisticSession\);\n/g, '');


fs.writeFileSync(ctxPath, ctx);
console.log('StudyPlannerContext done');
