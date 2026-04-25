import { chromium } from 'playwright';
import dotenv from 'dotenv';
dotenv.config();

async function runRealAuthTest() {
    const email = process.env.VITE_TEST_USER_EMAIL;
    const password = process.env.VITE_TEST_USER_PASSWORD;

    if (!email || !password) {
        console.error("❌ Xato: .env faylida VITE_TEST_USER_EMAIL yoki VITE_TEST_USER_PASSWORD topilmadi!");
        process.exit(1);
    }

    console.log("🚀 Real autentifikatsiya orqali test boshlandi...");
    
    const browser = await chromium.launch({ headless: true }); // Oynani ko'rmaslik uchun headless: true
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // 1. Login sahifasiga kirish
        console.log("🔗 Login sahifasiga o'tilmoqda...");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

        // 2. Login ma'lumotlarini kiritish
        console.log("⌨️ Login va parol kiritilmoqda...");
        await page.fill('input[type="email"]', email);
        await page.fill('input[type="password"]', password);
        
        // "Kirish" tugmasini bosish
        // Tugma matni "Kirish" ekanligini App.test.tsx dan bilamiz
        await page.click('button:has-text("Kirish")');

        // 3. Dashboard yuklanishini kutish
        console.log("⏳ Dashboard yuklanishi kutilmoqda...");
        await page.waitForURL('**/dashboard', { timeout: 15000 });
        console.log("✅ Tizimga muvaffaqiyatli kirildi!");

        const pagesToTest = [
            '/dashboard',
            '/calendar',
            '/subjects',
            '/goals',
            '/tasks',
            '/focus',
            '/notes',
            '/flashcards',
            '/progress',
            '/settings'
        ];

        const results = [];

        for (const route of pagesToTest) {
            console.log(`\n🔍 Sahifa tekshirilmoqda: ${route}`);
            const errors = [];
            const networkFailures = [];

            page.on('console', msg => {
                if (msg.type() === 'error') errors.push(msg.text());
            });

            page.on('requestfailed', req => {
                networkFailures.push(`${req.url()} - ${req.failure().errorText}`);
            });

            await page.goto(`http://localhost:5173${route}`, { waitUntil: 'networkidle' });
            
            // Sahifada jiddiy xatolik (masalan, oq oyna) bor-yo'qligini tekshirish
            const content = await page.content();
            const hasErrorText = content.includes('error') || content.includes('Xatolik');

            results.push({
                route,
                success: errors.length === 0,
                errors,
                networkFailures
            });

            // Skrinshot olish
            await page.screenshot({ path: `./test_reports/real-auth-${route.replace('/', '')}.png` });
            console.log(`📸 ${route} skrinshoti saqlandi.`);

            page.removeAllListeners('console');
            page.removeAllListeners('requestfailed');
        }

        console.log("\n--- REAL AUTH TEST HISOBOTI ---");
        results.forEach(res => {
            const status = res.success ? "✅ PASS" : "❌ FAIL";
            console.log(`${status} [${res.route}]`);
            if (!res.success) {
                res.errors.forEach(e => console.log(`   - Error: ${e}`));
            }
        });

    } catch (e) {
        console.error(`❌ Test jarayonida xatolik: ${e.message}`);
        await page.screenshot({ path: './test_reports/error-crash.png' });
    } finally {
        await browser.close();
        console.log("\n🏁 Test yakunlandi.");
    }
}

runRealAuthTest();
