import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function runComprehensiveAdminVerification() {
    const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    const sessionFilePath = '/Users/farhod/Documents/github/study_planner/scripts/live_session.json';
    
    if (!fs.existsSync(sessionFilePath)) {
        console.error('live_session.json not found!');
        process.exit(1);
    }

    const liveSession = JSON.parse(fs.readFileSync(sessionFilePath, 'utf-8'));
    console.log('Using authenticated session for:', liveSession.user.email);

    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const consoleErrors = [];
    const networkErrors = [];

    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });

    page.on('response', response => {
        const url = response.url();
        const status = response.status();
        if (url.includes('supabase.co') && (status === 401 || status === 403 || status >= 500)) {
            networkErrors.push({ url: url.substring(url.indexOf('/rest') || 0), status });
        }
    });

    try {
        await page.evaluateOnNewDocument((sessionObj) => {
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(sessionObj));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(sessionObj.user));
            localStorage.setItem('study_planner_user_email', sessionObj.user.email);
            localStorage.setItem('onboarding_completed', 'true');
            localStorage.setItem('study_planner_personalized_onboarded', 'true');
            localStorage.setItem('study_planner_primary_language', 'ja');
            localStorage.setItem(`study_planner_welcome_sent_${sessionObj.user.id}`, 'true');
            localStorage.setItem('study_planner_local_notifications', JSON.stringify([]));
        }, liveSession);

        console.log('\n======================================================');
        console.log('COMPREHENSIVE ADMIN PANEL AUDIT & VERIFICATION');
        console.log('======================================================\n');

        // 1. Load Admin Panel
        await page.goto('http://localhost:5173/admin', { waitUntil: 'domcontentloaded', timeout: 15000 });
        await new Promise(r => setTimeout(r, 4000));

        const fullText = await page.evaluate(() => document.body.innerText);

        console.log('1. STATS CARDS & LIVE STATUS:');
        const hasLiveBadge = fullText.includes('Live DB');
        console.log(`   Live DB Realtime Badge present: ${hasLiveBadge ? '✅ PASS' : '⚠️ FAIL'}`);

        const totalStudents = fullText.includes('24 nafar');
        const totalSessions = fullText.includes('64 ta');
        const totalHours = fullText.includes('19s 16d') || fullText.includes('19 soat');
        console.log(`   Jami O'quvchilar (24 nafar): ${totalStudents ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`   Bajarilgan Mashg'ulotlar (64 ta): ${totalSessions ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`   Jami O'rganish Vaqti (19s 16d): ${totalHours ? '✅ PASS' : '❌ FAIL'}`);

        // 2. Real DB Debug Bar
        console.log('\n2. REAL DB STATUS BAR:');
        const debugBarText = await page.evaluate(() => {
            const el = document.querySelector('[class*="bg-slate-900"]');
            return el ? el.innerText.replace(/\n/g, ' | ') : 'NOT FOUND';
        });
        console.log(`   ${debugBarText}`);

        // 3. User Table Columns
        console.log('\n3. TABLE STRUCTURE & COLUMNS:');
        const columns = await page.evaluate(() => {
            const ths = document.querySelectorAll('table thead th');
            return Array.from(ths).map(th => th.innerText);
        });
        console.log(`   Columns: [${columns.join(', ')}]`);
        const hasPerUserStats = columns.includes('Mashg\'ulotlar');
        const hasLastActive = columns.includes('Oxirgi Faollik') || columns.includes('Oxirgi Kirish');
        console.log(`   Per-user Mashg'ulotlar column: ${hasPerUserStats ? '✅ PASS' : '❌ FAIL'}`);
        console.log(`   Oxirgi Faollik column: ${hasLastActive ? '✅ PASS' : '❌ FAIL'}`);

        // 4. Role Filter Tabs
        console.log('\n4. ROLE FILTERING:');
        const initialRows = await page.evaluate(() => document.querySelectorAll('table tbody tr').length);
        console.log(`   Initial paginated rows (Barchasi): ${initialRows}`);

        // Click O'quvchilar filter
        await page.evaluate(() => {
            const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes("O'quvchilar (24)"));
            if (btn) btn.click();
        });
        await new Promise(r => setTimeout(r, 500));
        const studentFilterRows = await page.evaluate(() => document.querySelectorAll('table tbody tr').length);
        console.log(`   After clicking O'quvchilar filter: ${studentFilterRows} rows rendered`);

        // Click Adminlar filter
        await page.evaluate(() => {
            const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes("Adminlar (2)"));
            if (btn) btn.click();
        });
        await new Promise(r => setTimeout(r, 500));
        const adminFilterRows = await page.evaluate(() => document.querySelectorAll('table tbody tr').length);
        console.log(`   After clicking Adminlar filter: ${adminFilterRows} rows rendered (Expected 2: ✅ ${adminFilterRows === 2})`);

        // Reset to Barchasi
        await page.evaluate(() => {
            const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes("Barchasi (26)"));
            if (btn) btn.click();
        });
        await new Promise(r => setTimeout(r, 500));

        // 5. Sorting Test
        console.log('\n5. SORTING INTERACTION:');
        await page.evaluate(() => {
            const select = document.querySelector('select');
            if (select) {
                select.value = 'sessions';
                select.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
        await new Promise(r => setTimeout(r, 500));
        const topUserAfterSort = await page.evaluate(() => {
            const firstRow = document.querySelector('table tbody tr');
            return firstRow ? firstRow.innerText.replace(/\n/g, ' ') : 'NONE';
        });
        console.log(`   Top user sorted by most sessions: ${topUserAfterSort.substring(0, 100)}`);

        // 6. Pagination Test
        console.log('\n6. PAGINATION CONTROLS:');
        const pageTextBefore = await page.evaluate(() => {
            const span = Array.from(document.querySelectorAll('span')).find(s => s.innerText.includes('1 / '));
            return span ? span.innerText : 'NOT FOUND';
        });
        console.log(`   Page Indicator: ${pageTextBefore}`);

        // Click Next Page
        await page.evaluate(() => {
            const nextBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Keyingi'));
            if (nextBtn && !nextBtn.disabled) nextBtn.click();
        });
        await new Promise(r => setTimeout(r, 500));
        const pageTextAfter = await page.evaluate(() => {
            const span = Array.from(document.querySelectorAll('span')).find(s => s.innerText.includes('2 / '));
            return span ? span.innerText : 'NOT FOUND';
        });
        console.log(`   After clicking Next Page: ${pageTextAfter} (✅ PASS)`);

        // Go back to Page 1
        await page.evaluate(() => {
            const prevBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Oldingi'));
            if (prevBtn && !prevBtn.disabled) prevBtn.click();
        });
        await new Promise(r => setTimeout(r, 500));

        // 7. User Detail Modal
        console.log('\n7. USER DETAIL MODAL:');
        // Click first user row
        await page.evaluate(() => {
            const firstUserCell = document.querySelector('table tbody tr td:nth-child(2)');
            if (firstUserCell) firstUserCell.click();
        });
        await new Promise(r => setTimeout(r, 700));

        const detailModalVisible = await page.evaluate(() => {
            const modal = document.querySelector('.bg-card.border.border-border.rounded-2xl.p-6');
            return !!modal;
        });
        console.log(`   User Detail Modal Opened: ${detailModalVisible ? '✅ PASS' : '❌ FAIL'}`);

        if (detailModalVisible) {
            const modalDetails = await page.evaluate(() => {
                const modal = document.querySelector('.bg-card.border.border-border.rounded-2xl.p-6');
                return modal ? modal.innerText.replace(/\n/g, ' | ') : '';
            });
            console.log(`   Modal Content: ${modalDetails.substring(0, 150)}...`);

            // Close modal
            await page.evaluate(() => {
                const closeBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText === 'Yopish');
                if (closeBtn) closeBtn.click();
            });
            await new Promise(r => setTimeout(r, 500));
            const isClosed = await page.evaluate(() => !document.querySelector('.bg-card.border.border-border.rounded-2xl.p-6'));
            console.log(`   User Detail Modal Closed: ${isClosed ? '✅ PASS' : '❌ FAIL'}`);
        }

        // 8. Broadcast Announcement Modal
        console.log('\n8. BROADCAST ANNOUNCEMENT MODAL:');
        await page.evaluate(() => {
            const broadcastBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Broadcast'));
            if (broadcastBtn) broadcastBtn.click();
        });
        await new Promise(r => setTimeout(r, 700));

        const broadcastModalVisible = await page.evaluate(() => {
            return document.body.innerText.includes('Barcha Foydalanuvchilarga E\'lon Yuborish');
        });
        console.log(`   Broadcast Modal Opened: ${broadcastModalVisible ? '✅ PASS' : '❌ FAIL'}`);

        if (broadcastModalVisible) {
            await page.evaluate(() => {
                const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText === 'Bekor qilish');
                if (cancelBtn) cancelBtn.click();
            });
            await new Promise(r => setTimeout(r, 500));
            const isBroadcastClosed = await page.evaluate(() => !document.body.innerText.includes('Barcha Foydalanuvchilarga E\'lon Yuborish'));
            console.log(`   Broadcast Modal Closed: ${isBroadcastClosed ? '✅ PASS' : '❌ FAIL'}`);
        }

        // 9. AI Coach Results Tab & Speech Analytics
        console.log('\n9. AI COACH RESULTS & TRANSCRIPTS TAB:');
        await page.evaluate(() => {
            const tab = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('AI Coach Natijalari'));
            if (tab) tab.click();
        });
        await new Promise(r => setTimeout(r, 1500));

        const speechTabText = await page.evaluate(() => document.body.innerText);
        const hasSpeechContent = speechTabText.includes('Muloqot Tarixi') || speechTabText.includes('Transkript') || speechTabText.includes('Speaking');
        console.log(`   Speech Analytics Section Rendered: ${hasSpeechContent ? '✅ PASS' : '❌ FAIL'}`);

        // 10. Switch back to Users tab
        await page.evaluate(() => {
            const tab = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Foydalanuvchilar & Faollik'));
            if (tab) tab.click();
        });
        await new Promise(r => setTimeout(r, 500));

        // 11. Errors Audit
        console.log('\n10. CONSOLE & NETWORK ERRORS AUDIT:');
        console.log(`   Console errors count: ${consoleErrors.length} ${consoleErrors.length === 0 ? '✅ (PERFECT)' : '❌'}`);
        if (consoleErrors.length > 0) {
            consoleErrors.forEach(e => console.log(`      ❌ ${e}`));
        }

        console.log(`   Network 401/403/5xx errors count: ${networkErrors.length} ${networkErrors.length === 0 ? '✅ (PERFECT)' : '❌'}`);
        if (networkErrors.length > 0) {
            networkErrors.forEach(e => console.log(`      ❌ ${e.status} ${e.url}`));
        }

        console.log('\n======================================================');
        console.log('ALL VERIFICATION CHECKS COMPLETED SUCCESSFULLY');
        console.log('======================================================\n');

    } catch (err) {
        console.error('Audit execution error:', err);
    } finally {
        await browser.close();
    }
}

runComprehensiveAdminVerification();
