import { chromium } from 'playwright';
import dotenv from 'dotenv';
dotenv.config();

async function runUltimateTest() {
    const email = process.env.VITE_TEST_USER_EMAIL;
    const password = process.env.VITE_TEST_USER_PASSWORD;

    console.log("🚀 YAKUNIY TO'LIQ TIZIM TESTI BOSHLANDI...");
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        console.log("🔗 Tizimga kirilmoqda...");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
        await page.fill('input[type="email"]', email);
        await page.fill('input[type="password"]', password);
        await page.click('button:has-text("Kirish")');
        await page.waitForURL('**/dashboard', { timeout: 15000 });
        console.log("✅ Autentifikatsiya muvaffaqiyatli.");

        const allRoutes = [
            '/dashboard',
            '/calendar',
            '/subjects',
            '/goals',
            '/tasks',
            '/focus',
            '/notes',
            '/study-notes',
            '/flashcards',
            '/progress',
            '/community',
            '/settings'
        ];

        const report = [];

        for (const route of allRoutes) {
            console.log(`\n🔎 [Testing]: ${route}`);
            const logs = [];
            const networks = [];

            page.on('console', msg => msg.type() === 'error' && logs.push(msg.text()));
            page.on('requestfailed', req => networks.push(`${req.url()} (${req.failure().errorText})`));

            await page.goto(`http://localhost:5173${route}`, { waitUntil: 'networkidle' });
            
            // Sahifa sarlavhasi yoki biror asosiy element yuklanganini tekshirish
            const hasContent = await page.isVisible('nav') || await page.isVisible('main') || await page.isVisible('h1');

            report.push({
                route,
                status: logs.length === 0 ? "✅ SOG'LOM" : "⚠️ MUAMMO BOR",
                logs,
                networks,
                contentOk: hasContent
            });

            await page.screenshot({ path: `./test_reports/final-${route.replace('/', '')}.png` });
            
            page.removeAllListeners('console');
            page.removeAllListeners('requestfailed');
        }

        console.log("\n========================================");
        console.log("       YAKUNIY TIZIM TEST HISOBOTI      ");
        console.log("========================================");
        report.forEach(r => {
            console.log(`${r.status.padEnd(12)} | ${r.route.padEnd(15)} | Content: ${r.contentOk ? "OK" : "Error"}`);
            if (r.logs.length > 0) r.logs.forEach(l => console.log(`   └─ Console Error: ${l.substring(0, 80)}...`));
            if (r.networks.length > 0) r.networks.forEach(n => console.log(`   └─ Network Error: ${n}`));
        });
        console.log("========================================");

    } catch (e) {
        console.error(`❌ Testda kutilmagan xato: ${e.message}`);
    } finally {
        await browser.close();
        console.log("\n🏁 Barcha sahifalar tekshirildi. Test yakunlandi.");
    }
}

runUltimateTest();
