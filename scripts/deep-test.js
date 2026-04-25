import { chromium } from 'playwright';
import dotenv from 'dotenv';
dotenv.config();

async function runDeepTest() {
    const email = process.env.VITE_TEST_USER_EMAIL;
    const password = process.env.VITE_TEST_USER_PASSWORD;

    console.log("🛠 [Deep Functional Test]: Optimistik yangilanishlar bilan qayta tekshirilmoqda...");
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const report = [];
    const logStatus = (name, status) => {
        report.push({ name, status });
        console.log(`${status === 'OK' ? '✅' : '❌'} ${name}: ${status}`);
    };

    try {
        // 1. LOGIN
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
        await page.fill('input[type="email"]', email);
        await page.fill('input[type="password"]', password);
        await page.click('button:has-text("Kirish")');
        await page.waitForURL('**/dashboard', { timeout: 10000 });
        logStatus("Auth (Login)", "OK");

        // 2. TASK MANAGEMENT
        await page.goto('http://localhost:5173/tasks', { waitUntil: 'networkidle' });
        const taskTitle = `Auto Task ${Date.now()}`;
        await page.fill('input[placeholder="Yangi vazifa qo\'shish..."]', taskTitle);
        await page.click('button:has-text("Qo\'shish")');
        
        // Optimistik yangilanish tufayli kutish shart emas, lekin ishonch uchun 500ms
        await page.waitForTimeout(500);
        const isTaskAdded = await page.isVisible(`text="${taskTitle}"`);
        logStatus("Task Creation (Optimistic)", isTaskAdded ? "OK" : "FAIL");

        // 3. SUBJECT CREATION
        await page.goto('http://localhost:5173/subjects', { waitUntil: 'networkidle' });
        // Correcting button text to "Fan Qo'shish" as per SubjectsPage.tsx
        const addSubjectBtn = page.locator('button:has-text("Fan Qo\'shish")').first();
        await addSubjectBtn.click();
        
        const subjectName = `Subject ${Date.now()}`;
        await page.fill('input[placeholder="Fan nomi (masalan: Matematika)"]', subjectName);
        await page.click('button:has-text("Saqlash")');
        
        await page.waitForTimeout(500);
        const isSubjectAdded = await page.isVisible(`text="${subjectName}"`);
        logStatus("Subject Creation (Optimistic)", isSubjectAdded ? "OK" : "FAIL");

        // 4. AI MODAL TEST
        await page.goto('http://localhost:5173/flashcards', { waitUntil: 'networkidle' });
        await page.click('button:has-text("AI orqali Yaratish")');
        await page.waitForSelector('text="AI Fleshkarta Sehrgari"', { timeout: 5000 });
        logStatus("AI Modal Opening", "OK");
        await page.click('button:has-text("✕")');

        // 5. FOCUS TIMER
        await page.goto('http://localhost:5173/focus', { waitUntil: 'networkidle' });
        await page.click('button:has-text("Boshlash")');
        const isRunning = await page.isVisible('button:has-text("To\'xtatish")');
        logStatus("Focus Timer Logic", isRunning ? "OK" : "FAIL");

    } catch (e) {
        console.error(`❌ Testda xatolik: ${e.message}`);
        await page.screenshot({ path: './test_reports/deep-test-final-error.png' });
    } finally {
        console.log("\n========================================");
        console.log("    YAKUNIY FUNKSIONAL TEST HISOBOTI    ");
        console.log("========================================");
        report.forEach(r => {
            console.log(`${r.status.padEnd(6)} | ${r.name}`);
        });
        console.log("========================================");
        await browser.close();
    }
}

runDeepTest();
