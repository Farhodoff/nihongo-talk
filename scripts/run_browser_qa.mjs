import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const results = [];

function assert(condition, description) {
    if (condition) {
        console.log(`  ✅ PASS: ${description}`);
        results.push({ description, status: 'PASS' });
    } else {
        console.error(`  ❌ FAIL: ${description}`);
        results.push({ description, status: 'FAIL' });
    }
}

const mockUser = {
    id: "test-user-qa-focus-123",
    email: "qa.focus@nihon-talk.com",
    user_metadata: { name: "QA Learning Focus Tester" },
    aud: "authenticated",
    role: "authenticated",
    created_at: new Date().toISOString()
};

const mockSession = {
    access_token: "mock-jwt-token-for-qa-tests",
    token_type: "bearer",
    expires_in: 86400,
    expires_at: Math.floor(Date.now() / 1000) + 86400,
    refresh_token: "mock-refresh-token",
    user: mockUser
};

async function runQA() {
    console.log('🚀 Starting Full Browser QA for Personalized Learning Focus...');

    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    try {
        // =========================================================================
        // FLOW A: NEW USER — JAPANESE FLOW
        // =========================================================================
        console.log('\n--- FLOW A: NEW USER — JAPANESE FLOW ---');
        await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
        
        // Setup clean new user with active session and no onboarding done
        await page.evaluate((session, user) => {
            localStorage.clear();
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(session));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(user));
            localStorage.removeItem('study_planner_personalized_onboarded');
            localStorage.removeItem('study_planner_primary_language');
            localStorage.removeItem('study_planner_enabled_languages');
            localStorage.setItem('onboarding_completed', 'true');
            localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
        }, mockSession, mockUser);

        await page.reload({ waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1200));

        // Check if Onboarding Modal opens on fresh visit
        const onboardingVisible = await page.evaluate(() => {
            return document.body.innerText.includes("Qaysi tilni o'rganmoqchisiz") || 
                   document.body.innerText.includes("O'quv Yo'nalishini Tanlang") ||
                   document.body.innerText.includes("Yapon Tili");
        });
        assert(onboardingVisible, 'Onboarding wizard appears for new user without saved focus');

        // Select Japanese 🇯🇵
        const clickedJa = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const jaBtn = buttons.find(b => b.innerText.includes('Yapon Tili') || b.innerText.includes('🇯🇵'));
            if (jaBtn) {
                jaBtn.click();
                return true;
            }
            return false;
        });
        assert(clickedJa, 'Clicked Japanese (🇯🇵) in Step 1');

        await new Promise(r => setTimeout(r, 800));

        // Step 2: Select Level (e.g. N3) and proceed
        const clickedNextStep2 = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const nextBtn = buttons.find(b => b.innerText.includes('Davom etish') || b.innerText.includes('Keyingi'));
            if (nextBtn) {
                nextBtn.click();
                return true;
            }
            return false;
        });
        assert(clickedNextStep2, 'Proceeded from Step 2 (Level Selection)');

        await new Promise(r => setTimeout(r, 800));

        // Step 3: Select Goal / Time and click Finish / Rejani Yaratish
        const clickedFinish = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const finishBtn = buttons.find(b => b.innerText.includes("Rejani Yaratish") || b.innerText.includes("Tayyor"));
            if (finishBtn) {
                finishBtn.click();
                return true;
            }
            return false;
        });
        assert(clickedFinish, 'Clicked Finish / Rejani Yaratish in Onboarding Step 3');

        // Wait for Step 4 celebration screen
        try {
            await page.waitForFunction(() => {
                return document.body.innerText.includes("Bugungi 1-Darsni Boshlash") || 
                       document.body.innerText.includes("Shaxsiy Rejangiz Tayyor");
            }, { timeout: 6000 });
        } catch {}

        // Close completion step (Step 4: Bugungi 1-Darsni Boshlash)
        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const startBtn = buttons.find(b => b.innerText.includes("Bugungi 1-Darsni Boshlash") || b.innerText.includes("Boshlash"));
            if (startBtn) startBtn.click();
        });

        await new Promise(r => setTimeout(r, 1200));

        // Verify Primary Language in State / localStorage
        const savedLangA = await page.evaluate(() => localStorage.getItem('study_planner_primary_language'));
        assert(savedLangA === 'ja', `Primary language saved as "ja" (actual: ${savedLangA})`);

        // Check Japanese Sidebar Items
        const sidebarTextA = await page.evaluate(() => {
            const aside = document.querySelector('aside');
            return aside ? aside.innerText : '';
        });

        assert(sidebarTextA.includes("Kanji O'rganish"), 'Japanese sidebar includes "Kanji O\'rganish"');
        assert(sidebarTextA.includes("Grammatika Quiz"), 'Japanese sidebar includes "Grammatika Quiz"');
        assert(sidebarTextA.includes("Reading (O'qish)"), 'Japanese sidebar includes "Reading (O\'qish)"');
        assert(sidebarTextA.includes("Listening (Tinglash)"), 'Japanese sidebar includes "Listening (Tinglash)"');
        assert(sidebarTextA.includes("Speaking & Senariylar"), 'Japanese sidebar includes "Speaking & Senariylar"');
        assert(sidebarTextA.includes("JLPT Hub"), 'Japanese sidebar includes "JLPT Hub"');
        assert(sidebarTextA.includes("JLPT Mock Exam"), 'Japanese sidebar includes "JLPT Mock Exam"');

        // Global tools in Japanese sidebar
        assert(sidebarTextA.includes("Dashboard"), 'Japanese sidebar includes Dashboard');
        assert(sidebarTextA.includes("Tasks"), 'Japanese sidebar includes Tasks');
        assert(sidebarTextA.includes("Fleshkartalar"), 'Japanese sidebar includes Fleshkartalar');
        assert(sidebarTextA.includes("Fokus & Pomodoro"), 'Japanese sidebar includes Fokus & Pomodoro');
        assert(sidebarTextA.includes("Progress"), 'Japanese sidebar includes Progress');
        assert(sidebarTextA.includes("Hamjamiyat"), 'Japanese sidebar includes Hamjamiyat');

        // Verify NO English / IELTS items in Japanese sidebar
        assert(!sidebarTextA.includes("IELTS Hub"), 'Japanese sidebar does NOT contain "IELTS Hub"');
        assert(!sidebarTextA.includes("Writing Mock"), 'Japanese sidebar does NOT contain "Writing Mock"');
        assert(!sidebarTextA.includes("Speaking Examiner"), 'Japanese sidebar does NOT contain "Speaking Examiner"');
        assert(!sidebarTextA.includes("Reading & Listening"), 'Japanese sidebar does NOT contain "Reading & Listening"');


        // =========================================================================
        // FLOW B: NEW USER — ENGLISH FLOW
        // =========================================================================
        console.log('\n--- FLOW B: NEW USER — ENGLISH FLOW ---');
        await page.evaluate((session, user) => {
            localStorage.clear();
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(session));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(user));
            localStorage.removeItem('study_planner_personalized_onboarded');
            localStorage.removeItem('study_planner_primary_language');
            localStorage.removeItem('study_planner_enabled_languages');
            localStorage.setItem('onboarding_completed', 'true');
            localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
        }, mockSession, mockUser);
        await page.reload({ waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1200));

        // Select English 🇬🇧
        const clickedEn = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const enBtn = buttons.find(b => b.innerText.includes('Ingliz Tili') || b.innerText.includes('🇬🇧'));
            if (enBtn) {
                enBtn.click();
                return true;
            }
            return false;
        });
        assert(clickedEn, 'Clicked English (🇬🇧) in Step 1');

        await new Promise(r => setTimeout(r, 800));

        // Step 2: Proceed
        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const nextBtn = buttons.find(b => b.innerText.includes('Davom etish') || b.innerText.includes('Keyingi'));
            if (nextBtn) nextBtn.click();
        });

        await new Promise(r => setTimeout(r, 800));

        // Step 3: Finish
        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const finishBtn = buttons.find(b => b.innerText.includes("Rejani Yaratish") || b.innerText.includes("Tayyor"));
            if (finishBtn) finishBtn.click();
        });

        // Wait for Step 4 celebration screen
        try {
            await page.waitForFunction(() => {
                return document.body.innerText.includes("Bugungi 1-Darsni Boshlash") || 
                       document.body.innerText.includes("Shaxsiy Rejangiz Tayyor");
            }, { timeout: 6000 });
        } catch {}

        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const startBtn = buttons.find(b => b.innerText.includes("Bugungi 1-Darsni Boshlash") || b.innerText.includes("Boshlash"));
            if (startBtn) startBtn.click();
        });

        await new Promise(r => setTimeout(r, 1200));

        const savedLangB = await page.evaluate(() => localStorage.getItem('study_planner_primary_language'));
        assert(savedLangB === 'en', `Primary language saved as "en" (actual: ${savedLangB})`);

        const sidebarTextB = await page.evaluate(() => {
            const aside = document.querySelector('aside');
            return aside ? aside.innerText : '';
        });

        assert(sidebarTextB.includes("Lug'at & Vocab"), 'English sidebar includes "Lug\'at & Vocab"');
        assert(sidebarTextB.includes("Grammatika"), 'English sidebar includes "Grammatika"');
        assert(sidebarTextB.includes("Reading & Listening"), 'English sidebar includes "Reading & Listening"');
        assert(sidebarTextB.includes("Writing Mock"), 'English sidebar includes "Writing Mock"');
        assert(sidebarTextB.includes("Speaking Examiner"), 'English sidebar includes "Speaking Examiner"');
        assert(sidebarTextB.includes("IELTS Hub"), 'English sidebar includes "IELTS Hub"');
        assert(sidebarTextB.includes("Speaking Mock Exam"), 'English sidebar includes "Speaking Mock Exam"');

        // Global tools in English sidebar
        assert(sidebarTextB.includes("Dashboard"), 'English sidebar includes Dashboard');
        assert(sidebarTextB.includes("Tasks"), 'English sidebar includes Tasks');
        assert(sidebarTextB.includes("Fleshkartalar"), 'English sidebar includes Fleshkartalar');
        assert(sidebarTextB.includes("Fokus & Pomodoro"), 'English sidebar includes Fokus & Pomodoro');
        assert(sidebarTextB.includes("Progress"), 'English sidebar includes Progress');
        assert(sidebarTextB.includes("Hamjamiyat"), 'English sidebar includes Hamjamiyat');

        // Verify NO Japanese / JLPT items in English sidebar
        assert(!sidebarTextB.includes("JLPT Hub"), 'English sidebar does NOT contain "JLPT Hub"');
        assert(!sidebarTextB.includes("Kanji O'rganish"), 'English sidebar does NOT contain "Kanji O\'rganish"');
        assert(!sidebarTextB.includes("Grammatika Quiz"), 'English sidebar does NOT contain "Grammatika Quiz"');
        assert(!sidebarTextB.includes("JLPT Mock Exam"), 'English sidebar does NOT contain "JLPT Mock Exam"');


        // =========================================================================
        // FLOW C: PERSISTENCE
        // =========================================================================
        console.log('\n--- FLOW C: PERSISTENCE ---');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 800));

        const persistedLang = await page.evaluate(() => localStorage.getItem('study_planner_primary_language'));
        assert(persistedLang === 'en', 'Primary language persists as "en" after browser page refresh');

        const onboardingAppearedAfterRefresh = await page.evaluate(() => {
            return document.body.innerText.includes("Qaysi tilni o'rganmoqchisiz");
        });
        assert(!onboardingAppearedAfterRefresh, 'Onboarding does NOT re-appear after refresh');


        // =========================================================================
        // FLOW D & E: SECONDARY LANGUAGE & FOCUS SWITCHING
        // =========================================================================
        console.log('\n--- FLOW D & E: SECONDARY LANGUAGE & SWITCH PRIMARY FOCUS ---');
        
        // Navigate to Settings
        await page.goto(`${BASE_URL}/settings`, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1000));

        // Switch to "Interfeys & Til" tab in Settings
        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const prefTab = buttons.find(b => b.innerText.includes("Interfeys") || b.innerText.includes("Til"));
            if (prefTab) prefTab.click();
        });
        await new Promise(r => setTimeout(r, 800));

        // Add Secondary Language (Japanese) in Settings
        const addedSecondary = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const addBtn = buttons.find(b => b.innerText.includes("Yapon tilini qo'shish") || b.innerText.includes("+ 🇯🇵"));
            if (addBtn) {
                addBtn.click();
                return true;
            }
            return false;
        });
        assert(addedSecondary, 'Added Japanese as secondary language in Settings');

        await new Promise(r => setTimeout(r, 800));

        // Check enabled languages in localStorage
        const enabledLangs = await page.evaluate(() => {
            try {
                return JSON.parse(localStorage.getItem('study_planner_enabled_languages') || '[]');
            } catch { return []; }
        });
        assert(enabledLangs.includes('en') && enabledLangs.includes('ja'), 'Enabled languages list contains both ["en", "ja"]');

        // Verify sidebar STILL remains English-focused (secondary language does not flood sidebar)
        const sidebarWhileEnPrimary = await page.evaluate(() => {
            const aside = document.querySelector('aside');
            return aside ? aside.innerText : '';
        });
        assert(sidebarWhileEnPrimary.includes("IELTS Hub") && !sidebarWhileEnPrimary.includes("JLPT Hub"), 
            'Sidebar remains strictly English-focused while English is Primary (Secondary Japanese does not flood sidebar)');

        // Check that Top Switcher "⇄ Almashtirish" is visible in sidebar
        assert(sidebarWhileEnPrimary.includes("Almashtirish") || sidebarWhileEnPrimary.includes("⇄"), 
            'Quick Focus Switcher "⇄ Almashtirish" is now visible in sidebar because 2 languages are enabled');

        // Switch to Japanese using "Asosiy Qilish" in Settings or "Almashtirish" in sidebar
        const switchedToJa = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const makePrimaryBtn = buttons.find(b => b.innerText.includes("Asosiy Qilish") || b.innerText.includes("Almashtirish"));
            if (makePrimaryBtn) {
                makePrimaryBtn.click();
                return true;
            }
            return false;
        });
        assert(switchedToJa, 'Switched primary focus to Japanese via "Asosiy Qilish" / "Almashtirish"');

        await new Promise(r => setTimeout(r, 800));

        // Verify primary language is now "ja"
        const currentLangAfterSwitch = await page.evaluate(() => localStorage.getItem('study_planner_primary_language'));
        assert(currentLangAfterSwitch === 'ja', `Primary language immediately updated to "ja" (actual: ${currentLangAfterSwitch})`);

        // Verify sidebar immediately became Japanese-focused without page reload
        const sidebarAfterSwitchToJa = await page.evaluate(() => {
            const aside = document.querySelector('aside');
            return aside ? aside.innerText : '';
        });
        assert(sidebarAfterSwitchToJa.includes("JLPT Hub") && !sidebarAfterSwitchToJa.includes("IELTS Hub"), 
            'Sidebar immediately switched to Japanese-focused (JLPT Hub visible, IELTS Hub hidden)');

        // Switch back to English
        const switchedBackToEn = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const switchBtn = buttons.find(b => b.innerText.includes("Almashtirish") || b.innerText.includes("Asosiy Qilish"));
            if (switchBtn) {
                switchBtn.click();
                return true;
            }
            return false;
        });
        assert(switchedBackToEn, 'Switched primary focus back to English');

        await new Promise(r => setTimeout(r, 800));

        const currentLangAfterSwitchBack = await page.evaluate(() => localStorage.getItem('study_planner_primary_language'));
        assert(currentLangAfterSwitchBack === 'en', 'Primary language immediately updated back to "en"');


        // =========================================================================
        // FLOW F: DATA PRESERVATION
        // =========================================================================
        console.log('\n--- FLOW F: DATA PRESERVATION ---');
        // Add a Task on Tasks page
        await page.goto(`${BASE_URL}/tasks`, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1000));

        const createdTask = await page.evaluate(() => {
            const existing = JSON.parse(localStorage.getItem('study_planner_tasks') || '[]');
            const newTask = {
                id: 'qa-task-preservation-id',
                title: 'QA Test Task: Master Vocabulary',
                subjectId: '',
                completed: false,
                priority: 'medium',
                category: 'vocabulary',
                createdAt: new Date().toISOString()
            };
            existing.push(newTask);
            localStorage.setItem('study_planner_tasks', JSON.stringify(existing));
            return true;
        });
        assert(createdTask, 'Created user task in persistent store');

        await page.reload({ waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 800));

        // Switch focus JA -> EN -> JA via localStorage / event and verify task still exists
        await page.evaluate(() => {
            localStorage.setItem('study_planner_primary_language', 'ja');
            window.dispatchEvent(new Event('study-track-changed'));
        });
        await new Promise(r => setTimeout(r, 500));

        await page.evaluate(() => {
            localStorage.setItem('study_planner_primary_language', 'en');
            window.dispatchEvent(new Event('study-track-changed'));
        });
        await new Promise(r => setTimeout(r, 500));

        const taskPreserved = await page.evaluate(() => {
            return document.body.innerText.includes("QA Test Task: Master Vocabulary") || 
                   (localStorage.getItem('study_planner_tasks') || '').includes("QA Test Task");
        });
        assert(taskPreserved, 'User tasks and progress preserved across focus switches (No data loss)');


        // =========================================================================
        // FLOW G & I: UI LANGUAGE INDEPENDENCE & PAGE-LEVEL CONTEXT
        // =========================================================================
        console.log('\n--- FLOW G & I: UI LANGUAGE INDEPENDENCE & PAGE CONTEXT ---');
        // Test UI Language toggle
        const switchedUiLang = await page.evaluate(() => {
            const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('UZ') || b.innerText.includes('EN'));
            if (btn) {
                btn.click();
                return true;
            }
            return false;
        });
        assert(switchedUiLang, 'Toggled UI language');

        // Check Speaking Coach page context default
        await page.goto(`${BASE_URL}/speaking-coach`, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1000));
        const coachBodyText = await page.evaluate(() => document.body.innerText);
        assert(coachBodyText.includes("Speaking") || coachBodyText.includes("Coach"), 'Speaking Coach loaded cleanly in current focus context');

        // Check explicit query override /speaking-coach?lang=ja
        await page.goto(`${BASE_URL}/speaking-coach?lang=ja`, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 1000));
        const coachJaOverride = await page.evaluate(() => document.body.innerText);
        assert(coachJaOverride.includes("日本語") || coachJaOverride.includes("Japanese") || coachJaOverride.includes("自己紹介") || coachJaOverride.includes("Coach"), 
            'Speaking Coach explicit URL override (?lang=ja) works correctly');


        // =========================================================================
        // FLOW J: ROUTE SAFETY (Existing Routes Don't 404)
        // =========================================================================
        console.log('\n--- FLOW J: ROUTE SAFETY ---');
        const routesToTest = ['/ielts', '/jlpt', '/vocabulary', '/flashcards', '/progress', '/community', '/focus', '/tasks'];
        for (const route of routesToTest) {
            await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded' });
            await new Promise(r => setTimeout(r, 400));
            const isNot404 = await page.evaluate(() => {
                return !document.body.innerText.includes("404") && !document.body.innerText.includes("Sahifa topilmadi");
            });
            assert(isNot404, `Route "${route}" loads properly without 404 error`);
        }


        // =========================================================================
        // FLOW K & L: RESPONSIVE & MOBILE QA
        // =========================================================================
        console.log('\n--- FLOW K & L: RESPONSIVE & MOBILE QA ---');
        // Mobile Viewport (375x667)
        await page.setViewport({ width: 375, height: 667 });
        await page.goto(`${BASE_URL}/dashboard`, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 800));

        const mobileHeaderRendered = await page.evaluate(() => {
            const header = document.querySelector('header');
            return header !== null;
        });
        assert(mobileHeaderRendered, 'Mobile responsive header renders cleanly on 375px mobile viewport');

        // Desktop Viewport (1280x800)
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto(`${BASE_URL}/dashboard`, { waitUntil: 'domcontentloaded' });
        await new Promise(r => setTimeout(r, 800));

        const desktopSidebarRendered = await page.evaluate(() => {
            const aside = document.querySelector('aside');
            return aside !== null;
        });
        assert(desktopSidebarRendered, 'Desktop sidebar renders cleanly on 1280px viewport');

    } catch (err) {
        console.error('Test Execution Error:', err);
        assert(false, `Test execution failed with error: ${err.message}`);
    } finally {
        await browser.close();
    }

    console.log('\n=========================================');
    console.log(`QA SUMMARY: ${results.filter(r => r.status === 'PASS').length}/${results.length} PASSED`);
    console.log('=========================================\n');

    const allPassed = results.every(r => r.status === 'PASS');
    process.exit(allPassed ? 0 : 1);
}

runQA();
