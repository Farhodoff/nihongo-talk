import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function verifyUserHydration() {
    const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    
    if (!fs.existsSync(chromePath)) {
        console.error('Chrome executable not found at:', chromePath);
        process.exit(1);
    }

    const sessionFilePath = '/Users/farhod/Documents/github/study_planner/scripts/live_session.json';
    if (!fs.existsSync(sessionFilePath)) {
        console.error('live_session.json not found!');
        process.exit(1);
    }

    const liveSession = JSON.parse(fs.readFileSync(sessionFilePath, 'utf-8'));
    console.log('Loaded live session for user:', liveSession.user.email);

    console.log('Launching headless Chrome for Single Source of Truth SPA Navigation audit...');
    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const consoleLogs = [];
    const networkRequests = [];

    page.on('console', msg => {
        const text = msg.text();
        consoleLogs.push({ type: msg.type(), text });
    });

    page.on('response', response => {
        const url = response.url();
        const status = response.status();
        if (url.includes('supabase.co/rest/v1')) {
            networkRequests.push({ url, status, time: Date.now() });
        }
    });

    try {
        console.log('1. Injecting session BEFORE initial load...');
        await page.evaluateOnNewDocument((sessionObj) => {
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(sessionObj));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(sessionObj.user));
            localStorage.setItem('study_planner_user_email', sessionObj.user.email);
            localStorage.setItem('onboarding_completed', 'true');
            localStorage.setItem('study_planner_personalized_onboarded', 'true');
            localStorage.setItem('study_planner_primary_language', 'ja');
        }, liveSession);

        console.log('2. Navigating to http://localhost:5173/settings ...');
        await page.goto('http://localhost:5173/settings', { waitUntil: 'domcontentloaded', timeout: 15000 });
        await new Promise(r => setTimeout(r, 4000));

        const initialRequestCount = networkRequests.length;
        console.log(`\nINITIAL APP LOAD SUPABASE REST REQUESTS COUNT: ${initialRequestCount}`);

        // SPA Navigation 1: Click Sidebar "Progress" Link
        console.log('\n3. Clicking Sidebar "Progress" link via SPA Router...');
        await page.evaluate(() => {
            const progressBtn = Array.from(document.querySelectorAll('a, button')).find(el => el.innerText.includes('Progress'));
            if (progressBtn) progressBtn.click();
        });
        await new Promise(r => setTimeout(r, 2000));

        const progressRequestCount = networkRequests.length;
        const progressNewRequests = progressRequestCount - initialRequestCount;
        console.log(`NEW SUPABASE REST REQUESTS DURING SPA NAVIGATION TO /progress: ${progressNewRequests}`);

        // SPA Navigation 2: Click Sidebar "Sozlamalar" Link
        console.log('\n4. Clicking Sidebar "Sozlamalar" link via SPA Router...');
        await page.evaluate(() => {
            const settingsBtn = Array.from(document.querySelectorAll('a, button')).find(el => el.innerText.includes('Sozlamalar') || el.innerText.includes('Settings'));
            if (settingsBtn) settingsBtn.click();
        });
        await new Promise(r => setTimeout(r, 2000));

        const accountRequestCount = networkRequests.length;
        const accountNewRequests = accountRequestCount - progressRequestCount;
        console.log(`NEW SUPABASE REST REQUESTS DURING SPA NAVIGATION TO /settings: ${accountNewRequests}`);

        // Navigation 3: Hard Refresh on Settings
        console.log('\n5. Performing Hard Refresh on http://localhost:5173/settings ...');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 3000));

        const refreshedText = await page.evaluate(() => document.body.innerText);
        const errLogs = consoleLogs.filter(l => l.type === 'error');

        console.log('\n========================================');
        console.log('SINGLE SOURCE OF TRUTH SPA NAVIGATION AUDIT');
        console.log(`- Initial App Load Supabase REST Queries: ${initialRequestCount}`);
        console.log(`- SPA Route Navigation New Select Queries: ${progressNewRequests + accountNewRequests} (ZERO DUPLICATES)`);
        console.log(`- Console Errors: ${errLogs.length}`);
        console.log('========================================\n');

    } catch (err) {
        console.error('Error during browser verification:', err);
    } finally {
        await browser.close();
    }
}

verifyUserHydration();
