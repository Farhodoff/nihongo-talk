const fs = require('fs');
let content = fs.readFileSync('src/pages/CalendarPage.tsx', 'utf-8');

// Replace imports
content = content.replace("import moment from 'moment';", 
`import { format, startOfMonth, endOfMonth, isSameMonth, isSameDay, subMonths, addMonths, setHours, setMinutes, isBefore, isAfter, getDate } from 'date-fns';
import { uz } from 'date-fns/locale';`);

// Replace startOfMonth / endOfMonth
content = content.replace("const startOfMonth = moment(currentDate).startOf('month');", "const monthStart = startOfMonth(currentDate);");
content = content.replace("const endOfMonth = moment(currentDate).endOf('month');", "const monthEnd = endOfMonth(currentDate);");

// Replace moment(date).format('YYYY-MM-DD')
content = content.replace(/moment\((.*?)\)\.format\('YYYY-MM-DD'\)/g, "format(new Date($1), 'yyyy-MM-dd')");

// Replace moment(currentDate).format('MMMM YYYY')
content = content.replace(/moment\(currentDate\)\.format\('MMMM YYYY'\)/g, "format(currentDate, 'MMMM yyyy', { locale: uz })");

// Replace moment(date).isSame(..., 'month')
content = content.replace(/moment\((.*?)\)\.isSame\((.*?), 'month'\)/g, "isSameMonth(new Date($1), new Date($2))");

// Replace moment(date).isSame(..., 'day')
content = content.replace(/moment\((.*?)\)\.isSame\((.*?), 'day'\)/g, "isSameDay(new Date($1), new Date($2))");

// Replace subtract/add month
content = content.replace(/moment\(currentDate\)\.subtract\(1, 'month'\)\.toDate\(\)/g, "subMonths(currentDate, 1)");
content = content.replace(/moment\(currentDate\)\.add\(1, 'month'\)\.toDate\(\)/g, "addMonths(currentDate, 1)");

// Replace newIso
content = content.replace(/const newIso = moment\(newDateStr\)\.hour\(9\)\.minute\(0\)\.toISOString\(\);/g, "const newIso = setMinutes(setHours(new Date(newDateStr), 9), 0).toISOString();");

fs.writeFileSync('src/pages/CalendarPage.tsx', content);
