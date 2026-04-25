import { chromium } from 'playwright';

async function runFullTest() {
    console.log("🚀 Barcha sahifalarni avtomatik test qilish boshlandi...");
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Mock Supabase Session to bypass Auth
    await page.addInitScript(() => {
        const mockSession = {
            access_token: 'fake-token',
            refresh_token: 'fake-refresh-token',
            expires_at: Math.floor(Date.now() / 1000) + 3600,
            user: { id: 'test-user-id', email: 'test@example.com' }
        };
        window.localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(mockSession));
    });

    const pagesToTest = [
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

    const results = [];

    for (const route of pagesToTest) {
        const url = `http://localhost:5173${route}`;
        console.log(`\n🔍 Sahifa tekshirilmoqda: ${route}`);
        
        const errors = [];
        const networkFailures = [];

        page.on('console', msg => {
            if (msg.type() === 'error') errors.push(msg.text());
        });

        page.on('requestfailed', req => {
            networkFailures.push(`${req.url()} - ${req.failure().errorText}`);
        });

        try {
            await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
            console.log(`✅ ${route} yuklandi.`);
            
            // Check for common UI elements that should be in Layout
            const hasSidebar = await page.isVisible('nav') || await page.isVisible('aside');
            console.log(`   Sidebar/Nav: ${hasSidebar ? "Bor" : "Yo'q"}`);

            // Take screenshot for each page
            await page.screenshot({ path: `./test_reports/screenshot-${route.replace('/', '')}.png` });

        } catch (e) {
            errors.push(`Yuklashda xato: ${e.message}`);
        }

        results.push({
            route,
            success: errors.length === 0 && networkFailures.length === 0,
            errors,
            networkFailures
        });

        // Clear listeners for next page
        page.removeAllListeners('console');
        page.removeAllListeners('requestfailed');
    }

    console.log("\n--- YAKUNIY TEST HISOBOTI ---");
    let totalFailed = 0;

    results.forEach(res => {
        const status = res.success ? "✅ PASS" : "❌ FAIL";
        console.log(`${status} [${res.route}]`);
        if (!res.success) {
            totalFailed++;
            res.errors.forEach(e => console.log(`   - Error: ${e}`));
            res.networkFailures.forEach(e => console.log(`   - Network: ${e}`));
        }
    });

    console.log(`\n🏁 Jami: ${results.length} sahifa, O'tgan: ${results.length - totalFailed}, Qalgan: ${totalFailed}`);
    
    await browser.close();
    process.exit(totalFailed > 0 ? 1 : 0);
}

runFullTest();
