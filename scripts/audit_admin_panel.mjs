import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function auditAdminPanel() {
    const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    const sessionFilePath = '/Users/farhod/Documents/github/study_planner/scripts/live_session.json';
    
    if (!fs.existsSync(sessionFilePath)) {
        console.error('live_session.json not found!');
        process.exit(1);
    }

    const liveSession = JSON.parse(fs.readFileSync(sessionFilePath, 'utf-8'));
    console.log('Loaded live session for user:', liveSession.user.email);

    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const consoleLogs = [];
    const networkErrors = [];

    page.on('console', msg => {
        consoleLogs.push({ type: msg.type(), text: msg.text() });
    });

    page.on('response', response => {
        const url = response.url();
        const status = response.status();
        if (url.includes('supabase.co') && (status === 401 || status === 403 || status >= 500)) {
            networkErrors.push({ url: url.substring(url.indexOf('/rest')), status });
        }
    });

    try {
        // Inject session
        await page.evaluateOnNewDocument((sessionObj) => {
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(sessionObj));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(sessionObj.user));
            localStorage.setItem('study_planner_user_email', sessionObj.user.email);
            localStorage.setItem('onboarding_completed', 'true');
            localStorage.setItem('study_planner_personalized_onboarded', 'true');
            localStorage.setItem('study_planner_primary_language', 'ja');
        }, liveSession);

        // Navigate to Admin Panel
        console.log('\n========================================');
        console.log('ADMIN PANEL AUDIT');
        console.log('========================================\n');

        await page.goto('http://localhost:5173/admin', { waitUntil: 'domcontentloaded', timeout: 15000 });
        await new Promise(r => setTimeout(r, 5000));

        const fullText = await page.evaluate(() => document.body.innerText);

        // Extract stat card values
        console.log('1. STATS CARDS AUDIT:');
        
        const extractStat = (label) => {
            const regex = new RegExp(`([\\d.,]+[^\\n]*)\\n.*${label}`, 'i');
            const match = fullText.match(regex);
            return match ? match[1].trim() : 'NOT FOUND';
        };

        const stats = {
            'Jami O\'quvchilar': extractStat("Jami O'quvchilar"),
            'Bugun Faol': extractStat("Bugun Faol"),
            'Bajarilgan Mashg\'ulotlar': extractStat("Bajarilgan Mashg"),
            'Jami O\'rganish Vaqti': extractStat("Jami O'rganish"),
            'Bugungi Suhbatlar': extractStat("Bugungi Suhbatlar"),
            'Kunlik O\'rtacha Foiz': extractStat("Kunlik O'rtacha"),
            'Haftalik O\'rtacha Foiz': extractStat("Haftalik O'rtacha"),
            'Jami Gapirilgan Vaqt': extractStat("Jami Gapirilgan"),
        };
        
        for (const [k, v] of Object.entries(stats)) {
            const isZero = v === '0' || v === '0%' || v === '0 nafar' || v === '0 ta' || v === '0 min' || v === '0 seans' || v === '0 daqiqa';
            console.log(`   ${isZero ? '⚠️' : '✅'} ${k}: ${v}`);
        }

        // Check users table
        console.log('\n2. USERS TABLE AUDIT:');
        const usersTableText = await page.evaluate(() => {
            const rows = document.querySelectorAll('table tbody tr');
            return rows.length;
        });
        console.log(`   Users in table: ${usersTableText}`);

        // Check chart
        console.log('\n3. CHART AUDIT:');
        const hasChart = fullText.includes('Foydalanuvchilar Faolligi Graph');
        const hasEmptyChart = fullText.includes('Real faollik statistikasi mavjud emas');
        console.log(`   Chart section exists: ${hasChart}`);
        console.log(`   Chart is empty: ${hasEmptyChart}`);
        
        // Check SVG chart rendered
        const svgCount = await page.evaluate(() => document.querySelectorAll('svg').length);
        console.log(`   SVG elements rendered: ${svgCount}`);

        // Check DB Debug Bar
        console.log('\n4. REAL DB DEBUG BAR:');
        const debugBarText = await page.evaluate(() => {
            const bar = document.querySelector('[class*="bg-slate-900"]');
            return bar ? bar.innerText : 'NOT FOUND';
        });
        console.log(`   ${debugBarText}`);

        // Check tabs
        console.log('\n5. TABS AUDIT:');
        const tabTexts = await page.evaluate(() => {
            const tabs = document.querySelectorAll('[class*="bg-muted"] button');
            return Array.from(tabs).map(t => t.innerText);
        });
        tabTexts.forEach(t => console.log(`   Tab: ${t}`));

        // Check for broken elements
        console.log('\n6. BROKEN UI ELEMENTS:');
        const brokenImages = await page.evaluate(() => {
            const imgs = document.querySelectorAll('img');
            return Array.from(imgs).filter(img => !img.complete || img.naturalWidth === 0).length;
        });
        console.log(`   Broken images: ${brokenImages}`);

        // Check admin actions
        console.log('\n7. ACTION BUTTONS AUDIT:');
        const actionButtons = await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            return Array.from(buttons).map(b => b.innerText).filter(t => t.includes('Xabar') || t.includes('Admin') || t.includes('Yangilash') || t.includes('AI Cleaner') || t.includes('Imtihonlar'));
        });
        actionButtons.forEach(b => console.log(`   Button: "${b}"`));

        // Check for user_email display issues
        console.log('\n8. USER EMAIL MAPPING AUDIT:');
        const emailsDisplayed = await page.evaluate(() => {
            const cells = document.querySelectorAll('table tbody td');
            const emails = [];
            cells.forEach(cell => {
                const text = cell.innerText;
                if (text.includes('@')) emails.push(text.trim());
            });
            return emails.slice(0, 10);
        });
        emailsDisplayed.forEach(e => console.log(`   ${e}`));

        // Check "last_sign_in_at" column display
        console.log('\n9. TABLE COLUMN AUDIT:');
        const tableHeaders = await page.evaluate(() => {
            const ths = document.querySelectorAll('table thead th');
            return Array.from(ths).map(th => th.innerText);
        });
        tableHeaders.forEach(h => console.log(`   Column: "${h}"`));

        // Console errors
        console.log('\n10. CONSOLE ERRORS:');
        const errors = consoleLogs.filter(l => l.type === 'error');
        console.log(`   Console errors: ${errors.length}`);
        errors.slice(0, 5).forEach(e => console.log(`   ❌ ${e.text.substring(0, 200)}`));

        // Network errors
        console.log('\n11. NETWORK ERRORS (401/403/5xx):');
        console.log(`   Network errors: ${networkErrors.length}`);
        networkErrors.forEach(e => console.log(`   ❌ ${e.status} → ${e.url}`));

        // Architecture issues check
        console.log('\n12. ARCHITECTURE KAMCHILIKLARI:');
        
        // Check if "Admin qilish"/"Adminlikni olish" buttons actually work
        const adminToggleButtons = await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            return Array.from(buttons).filter(b => b.innerText.includes('Admin qilish') || b.innerText.includes('Adminlikni olish')).length;
        });
        console.log(`   Admin toggle buttons: ${adminToggleButtons}`);

        // Mobile responsiveness check
        console.log('\n13. MOBILE RESPONSIVENESS:');
        await page.setViewport({ width: 375, height: 812 });
        await new Promise(r => setTimeout(r, 1000));
        const mobileOverflow = await page.evaluate(() => {
            return document.body.scrollWidth > window.innerWidth;
        });
        console.log(`   Horizontal overflow on mobile: ${mobileOverflow}`);
        
        // Reset viewport
        await page.setViewport({ width: 1280, height: 800 });

        console.log('\n========================================');
        console.log('ADMIN PANEL AUDIT COMPLETE');
        console.log('========================================\n');

    } catch (err) {
        console.error('Audit error:', err);
    } finally {
        await browser.close();
    }
}

auditAdminPanel();
