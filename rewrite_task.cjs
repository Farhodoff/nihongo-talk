const fs = require('fs');

let tsPath = 'src/services/TaskService.ts';
let ts = fs.readFileSync(tsPath, 'utf8');

ts = ts.replace(/import \{ dbOps \} from '\.\.\/utils\/db';\n/g, '');

ts = ts.replace(/\/\/ Lokal bazani yangilash\n\s*await dbOps\.clear\('tasks'\);\n\s*await dbOps\.putAll\('tasks', tasks\);/g, '');
ts = ts.replace(/catch \(error\) \{\n\s*console\.error\('Fetch tasks error, falling back to local:', error\);\n\s*return await dbOps\.getAll\('tasks'\) as Task\[\];\n\s*\}/g, 'catch (error) {\n            console.error(\'Fetch tasks error:\', error);\n            throw error;\n        }');

ts = ts.replace(/\/\/ 2\. Lokal bazaga yozish\n\s*const localTask = \{ \.\.\.taskData, id: tempId, userId, createdAt: new Date\(\)\.toISOString\(\), googleEventId: dbTask\.google_event_id \} as Task;\n\s*await dbOps\.put\('tasks', localTask\);/g, '');
ts = ts.replace(/\/\/ Lokal bazani yangi ID bilan yangilash\n\s*await dbOps\.delete\('tasks', tempId\);\n\s*await dbOps\.put\('tasks', newTask\);/g, '');
ts = ts.replace(/catch \(error\) \{\n\s*console\.error\('Add task error, queued for sync:', error\);\n\s*await dbOps\.addToQueue\('CREATE', 'tasks', dbTask\);\n\s*return localTask;\n\s*\}/g, 'catch (error) {\n            console.error(\'Add task error:\', error);\n            throw error;\n        }');

ts = ts.replace(/\/\/ 1\. Lokal yangilash\n\s*const localTasks = await dbOps\.getAll\('tasks'\) as Task\[\];\n\s*const task = localTasks\.find\(t => t\.id === id\);\n\s*if \(task\) \{\n\s*const updatedTask = \{ \.\.\.task, \.\.\.updates \};\n\s*await dbOps\.put\('tasks', updatedTask\);/g, 'const { data: taskData } = await supabase.from(\'tasks\').select(\'google_event_id\').eq(\'id\', id).single();\n        if (taskData) {\n            const task = { googleEventId: taskData.google_event_id };');
ts = ts.replace(/catch \(error\) \{\n\s*console\.error\('Update task error, queued for sync:', error\);\n\s*await dbOps\.addToQueue\('UPDATE', 'tasks', \{ id, updates \}\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Update task error:\', error);\n            throw error;\n        }');

ts = ts.replace(/\/\/ 1\. Lokal o'chirish\n\s*const localTasks = await dbOps\.getAll\('tasks'\) as Task\[\];\n\s*const task = localTasks\.find\(t => t\.id === id\);/g, 'const { data: taskData } = await supabase.from(\'tasks\').select(\'google_event_id\').eq(\'id\', id).single();\n        const task = taskData ? { googleEventId: taskData.google_event_id } : null;');
ts = ts.replace(/await dbOps\.delete\('tasks', id\);/g, '');
ts = ts.replace(/catch \(error\) \{\n\s*console\.error\('Delete task error, queued for sync:', error\);\n\s*await dbOps\.addToQueue\('DELETE', 'tasks', \{ id \}\);\n\s*\}/g, 'catch (error) {\n                console.error(\'Delete task error:\', error);\n                throw error;\n            }');
ts = ts.replace(/\/\/ Soft delete\n\s*if \(task\) \{\n\s*const updatedTask = \{ \.\.\.task, deletedAt: new Date\(\)\.toISOString\(\) \};\n\s*await dbOps\.put\('tasks', updatedTask\);\n\s*\}/g, '');
ts = ts.replace(/catch \(error\) \{\n\s*console\.error\('Soft delete task error, queued for sync:', error\);\n\s*\}/g, 'catch (error) {\n                console.error(\'Soft delete task error:\', error);\n                throw error;\n            }');

ts = ts.replace(/const localTasks = await dbOps\.getAll\('tasks'\) as Task\[\];\n\s*const task = localTasks\.find\(t => t\.id === id\);\n\s*if \(task\) \{\n\s*const updatedTask = \{ \.\.\.task \};\n\s*delete updatedTask\.deletedAt;\n\s*await dbOps\.put\('tasks', updatedTask\);\n\s*\}/g, '');
ts = ts.replace(/catch \(error\) \{\n\s*console\.error\('Restore task error:', error\);\n\s*\}/g, 'catch (error) {\n            console.error(\'Restore task error:\', error);\n            throw error;\n        }');

fs.writeFileSync(tsPath, ts);
console.log('TaskService done');
