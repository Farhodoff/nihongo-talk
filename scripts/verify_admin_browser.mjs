import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function verifyBrowser() {
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
    console.log('Loaded superadmin live session for user:', liveSession.user.email);

    console.log('Launching headless Chrome for NIHON-TALK verification...');
    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const consoleLogs = [];
    const networkRequests = [];
    const rlsErrors = [];
    const authErrors = [];

    page.on('console', msg => {
        const text = msg.text();
        consoleLogs.push({ type: msg.type(), text });
        if (text.includes('RLS') || text.includes('row-level security') || text.includes('policy')) {
            rlsErrors.push(text);
        }
        if (text.includes('401') || text.includes('403') || text.includes('Unauthorized') || text.includes('Forbidden')) {
            authErrors.push(text);
        }
    });

    page.on('response', response => {
        const url = response.url();
        const status = response.status();
        networkRequests.push({ url, status });
    });

    let browserUiStatus = 'FAIL';
    let refreshTestStatus = 'FAIL';
    let networkStatus = 'FAIL';
    let consoleStatus = 'FAIL';

    try {
        console.log('1. Injecting session BEFORE navigation via evaluateOnNewDocument...');
        await page.evaluateOnNewDocument((sessionObj) => {
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(sessionObj));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(sessionObj.user));
            localStorage.setItem('study_planner_user_email', sessionObj.user.email);
            localStorage.setItem('onboarding_completed', 'true');
            localStorage.setItem('study_planner_personalized_onboarded', 'true');
            localStorage.setItem('study_planner_primary_language', 'ja');
        }, liveSession);

        console.log('2. Navigating directly to http://localhost:5173/admin ...');
        await page.goto('http://localhost:5173/admin', { waitUntil: 'domcontentloaded', timeout: 15000 });
        await new Promise(r => setTimeout(r, 5000));

        console.log('URL AFTER DOM LOAD:', page.url());

        const pageText = await page.evaluate(() => document.body.innerText);

        console.log('\n================ PAGE TEXT HEAD (First 2500 chars) ================');
        console.log(pageText.substring(0, 2500));
        console.log('===================================================================\n');

        // Check required rendered values in DOM
        const hasStudents = pageText.includes('24 nafar');
        const hasAccounts = pageText.includes('26 akkount') || pageText.includes('26 ta') || pageText.includes('26');
        const hasAdmin = pageText.includes('2 admin');
        const hasSessions = pageText.includes('64 ta');
        const hasTime = pageText.includes('19s 16d') || pageText.includes('19 soat 16 daqiqa');
        const hasTodayConvs = pageText.includes('4 seans');
        const hasDailyAvg = pageText.includes('73%');
        const hasWeeklyAvg = pageText.includes('73%');
        const hasSpeakingTime = pageText.includes('4 min');
        const hasHistoryCount = pageText.includes('16');

        console.log('DOM VALUE CHECKS:');
        console.log('- Jami O\'quvchilar (24 nafar):', hasStudents);
        console.log('- Jami Accounts (26):', hasAccounts);
        console.log('- Admin (2 admin):', hasAdmin);
        console.log('- Bajarilgan Mashg\'ulotlar (64 ta):', hasSessions);
        console.log('- Jami O\'rganish Vaqti (19s 16d):', hasTime);
        console.log('- Bugungi Suhbatlar (4 seans):', hasTodayConvs);
        console.log('- Kunlik O\'rtacha (73%):', hasDailyAvg);
        console.log('- Haftalik O\'rtacha (73%):', hasWeeklyAvg);
        console.log('- Jami Gapirilgan Vaqt (4 min):', hasSpeakingTime);
        console.log('- Muloqot Tarixi (16):', hasHistoryCount);

        if (hasStudents && hasSessions && hasTime && hasTodayConvs && hasDailyAvg && hasWeeklyAvg) {
            browserUiStatus = 'PASS';
        }

        // 3. Network Audit
        const network401s = networkRequests.filter(r => r.status === 401);
        const network403s = networkRequests.filter(r => r.status === 403);
        const targetEndpoints = networkRequests.filter(r => 
            r.url.includes('get_admin_all_users') ||
            r.url.includes('study_sessions') ||
            r.url.includes('speaking_sessions') ||
            r.url.includes('speaking_coach_sessions') ||
            r.url.includes('ai_coach_sessions')
        );

        console.log('\nNETWORK AUDIT:');
        console.log('- Total 401 Statuses:', network401s.length);
        console.log('- Total 403 Statuses:', network403s.length);
        console.log('- Target API Endpoints Recorded:', targetEndpoints.length);
        targetEndpoints.forEach(e => console.log(`  -> ${e.status} : ${e.url}`));

        if (network401s.length === 0 && network403s.length === 0) {
            networkStatus = 'PASS';
        }

        // 4. Console Audit
        const consoleErrors = consoleLogs.filter(l => l.type === 'error');
        console.log('\nCONSOLE AUDIT:');
        console.log('- Total Console Errors:', consoleErrors.length);
        console.log('- Total RLS Violations:', rlsErrors.length);
        console.log('- Total Auth Errors:', authErrors.length);

        if (consoleErrors.length === 0 && rlsErrors.length === 0 && authErrors.length === 0) {
            consoleStatus = 'PASS';
        }

        // 5. Hard Refresh Test
        console.log('\n5. Performing Hard Refresh on http://localhost:5173/admin ...');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 4000));

        const refreshedText = await page.evaluate(() => document.body.innerText);
        const refHasStudents = refreshedText.includes('24 nafar');
        const refHasSessions = refreshedText.includes('64 ta');
        const refHasTime = refreshedText.includes('19s 16d');

        console.log('HARD REFRESH CHECKS:');
        console.log('- Refreshed Students (24 nafar):', refHasStudents);
        console.log('- Refreshed Sessions (64 ta):', refHasSessions);
        console.log('- Refreshed Time (19s 16d):', refHasTime);

        if (refHasStudents && refHasSessions && refHasTime) {
            refreshTestStatus = 'PASS';
        }

        console.log('\n========================================');
        console.log(`BROWSER UI: ${browserUiStatus}`);
        console.log(`REFRESH TEST: ${refreshTestStatus}`);
        console.log(`NETWORK: ${networkStatus}`);
        console.log(`CONSOLE: ${consoleStatus}`);
        console.log('========================================\n');

    } catch (err) {
        console.error('Error during browser verification:', err);
    } finally {
        await browser.close();
    }
}

verifyBrowser();
