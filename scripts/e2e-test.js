import { chromium } from 'playwright';

async function runTest() {
    console.log("🚀 Loyihani to'liq avtomatik test qilish boshlandi...");
    
    const browser = await chromium.launch({ headless: true }); // Headless mode for speed, set to false to see
    const context = await browser.newContext();
    const page = await context.newPage();

    const errors = [];
    const consoleLogs = [];
    const networkFailures = [];

    // Console loglarni yig'ish
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(`[Console Error]: ${msg.text()}`);
        }
        consoleLogs.push(`[${msg.type()}]: ${msg.text()}`);
    });

    // Network xatolarini yig'ish
    page.on('requestfailed', request => {
        networkFailures.push(`[Network Error]: ${request.url()} - ${request.failure().errorText}`);
    });

    try {
        // 1. Sahifaga kirish
        console.log("🔗 URL ga ulanilmoqda: http://localhost:5173");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

        // 2. Sahifa sarlavhasini tekshirish
        const title = await page.title();
        console.log(`📄 Sahifa sarlavhasi: ${title || "Noma'lum"}`);

        // 3. AuthPage elementlarini tekshirish
        console.log("🔍 AuthPage elementlari tekshirilmoqda...");
        const loginForm = await page.isVisible('form');
        if (loginForm) {
            console.log("✅ Login formasi topildi.");
        } else {
            console.warn("⚠️ Login formasi topilmadi (Balki allaqachon login qilingandir).");
        }

        // 4. Skrinshot olish (Test holati uchun)
        await page.screenshot({ path: 'test-report-screenshot.png' });
        console.log("📸 Sahifa skrinshoti 'test-report-screenshot.png' ga saqlandi.");

        // 5. Har bir navigatsiya elementini simulyatsiya qilish (agar mavjud bo'lsa)
        // Eslatma: Login bo'lmasdan hamma sahifani ko'rib bo'lmaydi, lekin AuthPage dagi barcha tugmalarni tekshiramiz.
        const buttons = await page.$$eval('button', btns => btns.map(b => b.innerText));
        console.log(`🔘 Topilgan tugmalar: ${buttons.join(', ')}`);

    } catch (e) {
        errors.push(`[Test Execution Error]: ${e.message}`);
    } finally {
        // 6. Hisobot tayyorlash
        console.log("\n--- TEST HISOBOTI ---");
        console.log(`Jami Console Loglar: ${consoleLogs.length}`);
        console.log(`Console Xatolar: ${errors.length}`);
        console.log(`Network Xatolar: ${networkFailures.length}`);

        if (errors.length > 0) {
            console.log("\n❌ ANIQLANGAN XATOLAR:");
            errors.forEach(err => console.log(err));
        } else {
            console.log("\n✅ UI darajasida jiddiy xatoliklar aniqlanmadi.");
        }

        if (networkFailures.length > 0) {
            console.log("\n🌐 NETWORK MUAMMOLARI:");
            networkFailures.forEach(err => console.log(err));
        }

        await browser.close();
        console.log("\n🏁 Test yakunlandi.");
        
        if (errors.length > 0 || networkFailures.length > 0) {
            process.exit(1);
        } else {
            process.exit(0);
        }
    }
}

runTest();
