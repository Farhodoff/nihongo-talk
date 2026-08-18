import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

function assert(condition, message) {
    if (!condition) {
        console.error(`  ❌ FAIL: ${message}`);
        throw new Error(message);
    }
    console.log(`  ✅ PASS: ${message}`);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickButtonByText(page, text) {
    const clicked = await page.evaluate((t) => {
        const buttons = Array.from(document.querySelectorAll('button'));
        let btn = buttons.find(b => b.innerText.trim() === t || b.textContent.trim() === t);
        if (!btn) {
            btn = buttons.find(b => (b.innerText.includes(t) || b.textContent.includes(t)) && !b.disabled);
        }
        if (btn) {
            btn.click();
            return true;
        }
        return false;
    }, text);

    if (!clicked) {
        throw new Error(`Button with text "${text}" not found.`);
    }
    await sleep(400);
}

const mockUser = {
    id: "qa-lesson-user-123",
    email: "lesson_qa@example.com",
    role: "authenticated",
    aud: "authenticated",
    created_at: new Date().toISOString(),
    user_metadata: {}
};

const mockSession = {
    access_token: "mock-access-token",
    token_type: "bearer",
    expires_in: 86400,
    expires_at: Math.floor(Date.now() / 1000) + 86400,
    refresh_token: "mock-refresh-token",
    user: mockUser
};

async function runLessonBrowserQA() {
    console.log('🚀 Starting Full Browser QA for Lesson Player Engine (Sprint 1)...\n');
    let browser;

    try {
        browser = await puppeteer.launch({
            executablePath: CHROME_PATH,
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        // Helper to seed localStorage
        const seedStorage = async (primaryLang = 'ja') => {
            await page.evaluate((session, user, lang) => {
                localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(session));
                localStorage.setItem('study_planner_user_cache', JSON.stringify(user));
                localStorage.setItem('study_planner_primary_language', lang);
                localStorage.setItem('study_planner_enabled_languages', JSON.stringify([lang]));
                localStorage.setItem('study_planner_target_level', lang === 'ja' ? 'N3' : 'B2');
                localStorage.setItem('study_planner_target_goal', lang === 'ja' ? 'JLPT N3 Sertifikati' : 'IELTS 6.5');
                localStorage.setItem('study_planner_personalized_onboarded', 'true');
                localStorage.setItem('onboarding_completed', 'true');
                localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
                localStorage.setItem(`study_planner_welcome_sent_${user.id}`, 'true');
            }, mockSession, mockUser, primaryLang);
        };

        // ----------------------------------------------------
        // TEST 1: Japanese Lesson Flow from Dashboard
        // ----------------------------------------------------
        console.log('--- TEST 1: JAPANESE LESSON FLOW (JLPT N3) ---');
        await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
        await seedStorage('ja');
        await page.goto(`${BASE_URL}/dashboard`, { waitUntil: 'domcontentloaded' });
        
        // Wait for dashboard hero text to load
        await page.waitForFunction(() => {
            return document.body.innerText.includes("Bugungi Yapon Tili") || document.body.innerText.includes("1-Darsni Boshlash");
        }, { timeout: 10000 });
        await sleep(500);

        console.log('DEBUG: URL is', page.url());
        console.log('DEBUG: Body Text is:\n', (await page.evaluate(() => document.body.innerText)).slice(0, 500));

        // Verify Hero button
        const heroHasLesson = await page.evaluate(() => {
            const btn = document.querySelector('a[href="/lesson/ja-n3-u1-l1"]');
            return btn !== null;
        });
        assert(heroHasLesson, 'Dashboard hero contains "1-Darsni Boshlash" link');

        // Click to open Lesson Player
        await page.evaluate(() => {
            document.querySelector('a[href="/lesson/ja-n3-u1-l1"]')?.click();
        });
        await sleep(1500);

        // Verify Lesson Player Header
        const pageUrl = page.url();
        assert(pageUrl.includes('/lesson/ja-n3-u1-l1'), `Navigated to /lesson/ja-n3-u1-l1 (actual: ${pageUrl})`);

        const headerText = await page.evaluate(() => document.body.innerText);
        assert(headerText.includes('Sayohat va Transport'), 'Lesson title "Sayohat va Transport" rendered');
        assert(headerText.includes('JLPT N3'), 'Track badge "JLPT N3" rendered');
        assert(headerText.includes('1 / 3'), 'Step counter "1 / 3" rendered');

        // Verify Step 1: Learn Content
        assert(headerText.includes('旅行'), 'Vocabulary "旅行" rendered');
        assert(headerText.includes('切符'), 'Vocabulary "切符" rendered');
        assert(headerText.includes('ことにする'), 'Grammar pattern "ことにする" rendered');

        // Advance to Step 2: Practice
        await clickButtonByText(page, "Keyingi Qadam");
        await sleep(800);

        const step2Text = await page.evaluate(() => document.body.innerText);
        assert(step2Text.includes('2 / 3'), 'Advanced to Step 2 / 3');
        assert(step2Text.includes('Interaktiv Mashq'), 'Practice step rendered');

        // Select an answer in Practice
        await clickButtonByText(page, "きっぷ (kippu)");
        await clickButtonByText(page, "Javobni Tekshirish");

        const practiceResultText = await page.evaluate(() => document.body.innerText);
        assert(practiceResultText.includes("To'g'ri javob"), 'Practice check validates answer with positive feedback');

        // Advance to Step 3: Test
        await clickButtonByText(page, "Keyingi Qadam");
        await sleep(800);

        const step3Text = await page.evaluate(() => document.body.innerText);
        assert(step3Text.includes('3 / 3'), 'Advanced to Step 3 / 3');
        assert(step3Text.includes('Dars Testi (Quiz)'), 'Test step rendered');

        // Answer Question 1
        await clickButtonByText(page, "Transport va harakat");
        await clickButtonByText(page, "Keyingisi");

        // Answer Question 2
        await clickButtonByText(page, "やめる");
        await clickButtonByText(page, "Keyingisi");

        // Answer Question 3
        await clickButtonByText(page, "旅行 (りょこう)");
        await clickButtonByText(page, "Keyingisi");

        // Answer Question 4
        await clickButtonByText(page, "乗り換え (のりかえ)");

        // Finish Test (triggers completion)
        await clickButtonByText(page, "Testni Yakunlash");
        await sleep(1000);

        // Verify Completion Screen
        const completionText = await page.evaluate(() => document.body.innerText);
        assert(completionText.includes('Dars Yakunlandi! 🎉'), 'Completion Celebration Screen displayed');
        assert(completionText.includes('4/4') || completionText.includes('4 / 4') || completionText.includes('100%'), 'Test score (4/4) displayed on completion screen');
        assert(completionText.includes('+50 XP'), 'XP Bonus (+50 XP) awarded on completion screen');
        assert(completionText.includes('Bosh Sahifaga Qaytish'), '"Bosh Sahifaga Qaytish" button is present');

        // ----------------------------------------------------
        // TEST 2: English Lesson Flow (B2)
        // ----------------------------------------------------
        console.log('\n--- TEST 2: ENGLISH LESSON FLOW (B2) ---');
        await seedStorage('en');
        await page.goto(`${BASE_URL}/lesson/en-b2-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(1000);

        const enHeaderText = await page.evaluate(() => document.body.innerText);
        assert(enHeaderText.includes('Academic Learning & Inversion'), 'English lesson title rendered');
        assert(enHeaderText.toUpperCase().includes('ENGLISH B2'), 'Track badge "English B2" rendered');
        assert(enHeaderText.includes('Perseverance'), 'Academic vocabulary "Perseverance" rendered');
        assert(enHeaderText.includes('Meticulous'), 'Academic vocabulary "Meticulous" rendered');
        assert(enHeaderText.includes('Not only'), 'Grammar pattern "Not only... but also" rendered');

        // ----------------------------------------------------
        // TEST 3: Persistence & Resume
        // ----------------------------------------------------
        console.log('\n--- TEST 3: REFRESH & RESUME PERSISTENCE ---');
        // Clear progress for JA lesson to start fresh
        await page.evaluate(() => {
            localStorage.removeItem('study_planner_lesson_progress_qa-lesson-user-123_ja-n3-u1-l1');
            localStorage.removeItem('study_planner_lesson_progress_guest_ja-n3-u1-l1');
        });

        await seedStorage('ja');
        await page.goto(`${BASE_URL}/lesson/ja-n3-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(800);
        // Advance to Step 2
        await clickButtonByText(page, "Keyingi Qadam");
        await sleep(500);

        // Reload page
        await page.reload({ waitUntil: 'domcontentloaded' });
        await sleep(1000);

        const reloadedText = await page.evaluate(() => document.body.innerText);
        assert(reloadedText.includes('2 / 3'), 'User resumes on Step 2 / 3 after page refresh');
        assert(reloadedText.includes('Interaktiv Mashq'), 'Practice step view active upon reload');

        // ----------------------------------------------------
        // TEST 4: Invalid Lesson ID Handling
        // ----------------------------------------------------
        console.log('\n--- TEST 4: INVALID LESSON ID SAFETY ---');
        await page.goto(`${BASE_URL}/lesson/non-existent-lesson-999`, { waitUntil: 'domcontentloaded' });
        await sleep(800);

        const errorText = await page.evaluate(() => document.body.innerText);
        assert(errorText.includes('Dars Topilmadi'), 'Clean error screen displayed for invalid lesson ID');
        assert(errorText.includes('Bosh Sahifaga Qaytish'), 'Back to dashboard action button available');

        // ----------------------------------------------------
        // TEST 5: Mobile Viewport QA (375px)
        // ----------------------------------------------------
        console.log('\n--- TEST 5: RESPONSIVE MOBILE VIEWPORT (375px) ---');
        await page.setViewport({ width: 375, height: 667 });
        await page.goto(`${BASE_URL}/lesson/ja-n3-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(800);

        const mobileTitle = await page.evaluate(() => document.body.innerText);
        assert(mobileTitle.includes('Sayohat va Transport'), 'Mobile layout renders title');
        assert(mobileTitle.includes('JLPT N3'), 'Mobile layout renders badge');

        const hasStickyBtn = await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            return btns.some(b => b.innerText.includes('Keyingi Qadam'));
        });
        assert(hasStickyBtn, 'Sticky bottom navigation button accessible on mobile');

        console.log('\n=========================================');
        console.log('QA SUMMARY: ALL 24/24 ASSERTIONS PASSED ✅');
        console.log('=========================================\n');

    } catch (err) {
        console.error('Test Suite Failed:', err);
        process.exitCode = 1;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

runLessonBrowserQA();
