const fs = require('fs');

// 1. Update StudyPlannerContext.tsx
let ctxPath = 'src/context/StudyPlannerContext.tsx';
let ctx = fs.readFileSync(ctxPath, 'utf8');

// Add import
ctx = ctx.replace(
    "import { dbOps } from '../utils/db';",
    "import { dbOps } from '../utils/db';\nimport { generateUUID } from '../utils/uuid';"
);

// Fix mapped subjects in fetchData
ctx = ctx.replace(
    /const fetchedSubjects = subjectsRes\.data\.map\([\s\S]*?as Subject\[\];/g,
    `const fetchedSubjects = subjectsRes.data.map(s => ({
                        id: s.id,
                        name: s.name,
                        color: s.color,
                        schedule: s.schedule,
                        teacherName: s.teacher_name,
                        roomLocation: s.room_location,
                        description: s.description,
                        icon: s.icon,
                        createdAt: s.created_at
                    })) as Subject[];`
);

// Replace random string with generateUUID()
ctx = ctx.replace(
    /typeof crypto !== 'undefined' && crypto\.randomUUID \? crypto\.randomUUID\(\) : Math\.random\(\)\.toString\(36\)\.substring\(2, 15\)/g,
    "generateUUID()"
);

// Fix addSubject to save to dbOps
ctx = ctx.replace(
    /setSubjects\(prev => prev\.map\(s => s\.id === tempId \? newSubject : s\)\);\n\s*return newSubject;/g,
    "setSubjects(prev => prev.map(s => s.id === tempId ? newSubject : s));\n                dbOps.delete('subjects', tempId).catch(console.error);\n                dbOps.put('subjects', newSubject).catch(console.error);\n                return newSubject;"
);

// Fix optimistic subject cache
ctx = ctx.replace(
    /\/\/ Optimistic update\n\s*setSubjects\(prev => \[\.\.\.prev, optimisticSubject\]\);/g,
    "// Optimistic update\n        setSubjects(prev => [...prev, optimisticSubject]);\n        dbOps.put('subjects', optimisticSubject).catch(console.error);"
);

fs.writeFileSync(ctxPath, ctx);

// 2. Update FlashcardService.ts
let fcPath = 'src/services/FlashcardService.ts';
let fc = fs.readFileSync(fcPath, 'utf8');

// Add import
fc = fc.replace(
    "import { dbOps } from '../utils/db';",
    "import { dbOps } from '../utils/db';\nimport { generateUUID } from '../utils/uuid';"
);

// Replace random string with generateUUID()
fc = fc.replace(
    /typeof crypto !== 'undefined' && crypto\.randomUUID \? crypto\.randomUUID\(\) : Math\.random\(\)\.toString\(36\)\.substring\(2, 15\)/g,
    "generateUUID()"
);

fs.writeFileSync(fcPath, fc);
console.log("Done");
