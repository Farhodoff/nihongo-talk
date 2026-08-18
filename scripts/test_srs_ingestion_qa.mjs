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
    id: "qa-srs-user-sprint2",
    email: "srs_qa@example.com",
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

async function runSrsIngestionQA() {
    console.log('🚀 Starting Full Browser QA for Automated SRS Ingestion & Learning Signals (Sprint 2)...\n');
    let browser;

    try {
        browser = await puppeteer.launch({
            executablePath: CHROME_PATH,
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        const seedStorage = async (primaryLang = 'ja') => {
            await page.evaluate((session, user, lang) => {
                localStorage.clear();
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
        // TEST 1: Japanese Lesson -> Auto SRS Ingestion
        // ----------------------------------------------------
        console.log('--- TEST 1: JAPANESE LESSON VOCABULARY TO SRS ---');
        await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
        await seedStorage('ja');

        // Start fresh Japanese lesson
        await page.goto(`${BASE_URL}/lesson/ja-n3-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(1000);

        // Advance from Step 1 (Learn) to Step 2 (Practice)
        await clickButtonByText(page, "Keyingi Qadam");
        await sleep(500);

        // In Practice: select answer and submit
        await clickButtonByText(page, "きっぷ (kippu)");
        await clickButtonByText(page, "Javobni Tekshirish");

        // Advance to Step 3 (Test)
        await clickButtonByText(page, "Keyingi Qadam");
        await sleep(500);

        // Answer Test Questions
        await clickButtonByText(page, "Transport va harakat");
        await clickButtonByText(page, "Keyingisi");
        await clickButtonByText(page, "やめる");
        await clickButtonByText(page, "Keyingisi");
        await clickButtonByText(page, "旅行 (りょこう)");
        await clickButtonByText(page, "Keyingisi");
        await clickButtonByText(page, "乗り換え (のりかえ)");

        // Finish Test -> triggers completion + SRS ingestion
        await clickButtonByText(page, "Testni Yakunlash");
        
        // Wait for completion screen and SRS state update
        await page.waitForFunction(() => {
            return document.body.innerText.includes('Dars Yakunlandi! 🎉') && 
                   document.body.innerText.includes("Fleshkartalarga qo'shildi");
        }, { timeout: 10000 });
        await sleep(500);

        // Check Completion Screen
        const completionText = await page.evaluate(() => document.body.innerText);
        assert(completionText.includes('Dars Yakunlandi! 🎉'), 'Completion screen displayed');
        assert(completionText.includes("4 ta yangi so'z Fleshkartalarga qo'shildi"), 'SRS ingestion notice shows 4 new cards added');

        // Check localStorage flashcards
        const savedCardsJa = await page.evaluate((userId) => {
            const raw = localStorage.getItem(`study_planner_flashcards_cache_${userId}`);
            return raw ? JSON.parse(raw) : [];
        }, mockUser.id);

        assert(savedCardsJa.length === 4, `4 Japanese cards present in SRS store (actual: ${savedCardsJa.length})`);
        assert(savedCardsJa.some(c => c.front.includes('旅行')), 'Contains "旅行" card');
        assert(savedCardsJa.some(c => c.front.includes('切符')), 'Contains "切符" card');
        assert(savedCardsJa.some(c => c.front.includes('交通')), 'Contains "交通" card');
        assert(savedCardsJa.some(c => c.front.includes('乗り換える')), 'Contains "乗り換える" card');

        // Check Learning Signals in localStorage
        const savedSignals = await page.evaluate((userId) => {
            const raw = localStorage.getItem(`study_planner_learning_signals_${userId}`);
            return raw ? JSON.parse(raw) : [];
        }, mockUser.id);

        assert(savedSignals.some(s => s.type === 'new_vocabulary' && s.term === '旅行'), 'Recorded "new_vocabulary" signal for 旅行');
        assert(savedSignals.some(s => s.type === 'grammar_pattern' && s.pattern.includes('ことにする')), 'Recorded "grammar_pattern" signal');
        assert(savedSignals.some(s => s.type === 'completed_lesson' && s.score === 4), 'Recorded "completed_lesson" signal');

        // ----------------------------------------------------
        // TEST 2: Duplicate Protection on Repeating Lesson
        // ----------------------------------------------------
        console.log('\n--- TEST 2: DUPLICATE PROTECTION ON REPEAT ---');
        // Reset lesson progress so learner can retake from Step 1
        await page.evaluate((userId) => {
            const key = `study_planner_lesson_progress_${userId}_ja-n3-u1-l1`;
            localStorage.removeItem(key);
        }, mockUser.id);

        await page.goto(`${BASE_URL}/lesson/ja-n3-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(1000);

        // Advance through steps to completion again
        await clickButtonByText(page, "Keyingi Qadam");
        await clickButtonByText(page, "Keyingi Qadam");
        await clickButtonByText(page, "Darsni Yakunlash");
        await sleep(1200);

        // Verify flashcard count did NOT duplicate (must remain 4)
        const cardsAfterRepeat = await page.evaluate((userId) => {
            const raw = localStorage.getItem(`study_planner_flashcards_cache_${userId}`);
            return raw ? JSON.parse(raw) : [];
        }, mockUser.id);

        assert(cardsAfterRepeat.length === 4, `Duplicate protection verified: card count remained 4 (actual: ${cardsAfterRepeat.length})`);

        // ----------------------------------------------------
        // TEST 3: English Academic Vocab Ingestion
        // ----------------------------------------------------
        console.log('\n--- TEST 3: ENGLISH ACADEMIC VOCABULARY TO SRS ---');
        await page.goto(`${BASE_URL}/lesson/en-b2-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(1000);

        // Advance through English lesson steps
        await clickButtonByText(page, "Keyingi Qadam");
        await clickButtonByText(page, "Keyingi Qadam");
        await clickButtonByText(page, "Darsni Yakunlash");
        
        await page.waitForFunction(() => {
            return document.body.innerText.includes('Dars Yakunlandi! 🎉') && 
                   document.body.innerText.includes("Fleshkartalarga qo'shildi");
        }, { timeout: 10000 });
        await sleep(500);

        const enCompletionText = await page.evaluate(() => document.body.innerText);
        assert(enCompletionText.includes('Dars Yakunlandi! 🎉'), 'English lesson completed');
        assert(enCompletionText.includes("4 ta yangi so'z Fleshkartalarga qo'shildi"), 'English SRS ingestion notice shows 4 new cards');

        const allCards = await page.evaluate((userId) => {
            const raw = localStorage.getItem(`study_planner_flashcards_cache_${userId}`);
            return raw ? JSON.parse(raw) : [];
        }, mockUser.id);

        // Total should now be 4 Japanese + 4 English = 8 cards
        assert(allCards.length === 8, `Total SRS cards is now 8 (actual: ${allCards.length})`);
        assert(allCards.some(c => c.front.includes('Perseverance')), 'Contains "Perseverance" English card');
        assert(allCards.some(c => c.front.includes('Meticulous')), 'Contains "Meticulous" English card');

        // ----------------------------------------------------
        // TEST 4: Abandoned Lesson Safety
        // ----------------------------------------------------
        console.log('\n--- TEST 4: ABANDONED LESSON SAFETY ---');
        const signalsCountBefore = (await page.evaluate((userId) => {
            const raw = localStorage.getItem(`study_planner_learning_signals_${userId}`);
            return raw ? JSON.parse(raw) : [];
        }, mockUser.id)).length;

        // Open lesson and leave at Step 1
        await page.goto(`${BASE_URL}/lesson/ja-n3-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(500);
        // Leave to dashboard
        await page.goto(`${BASE_URL}/dashboard`, { waitUntil: 'domcontentloaded' });
        await sleep(500);

        const signalsCountAfter = (await page.evaluate((userId) => {
            const raw = localStorage.getItem(`study_planner_learning_signals_${userId}`);
            return raw ? JSON.parse(raw) : [];
        }, mockUser.id)).length;

        assert(signalsCountBefore === signalsCountAfter, 'No false completion signals created on abandoned lesson');

        // ----------------------------------------------------
        // TEST 5: Mobile Viewport QA (375px)
        // ----------------------------------------------------
        console.log('\n--- TEST 5: RESPONSIVE MOBILE COMPLETION VIEW ---');
        await page.setViewport({ width: 375, height: 667 });
        await page.goto(`${BASE_URL}/lesson/ja-n3-u1-l1`, { waitUntil: 'domcontentloaded' });
        await sleep(800);

        const mobileCompletionText = await page.evaluate(() => document.body.innerText);
        assert(mobileCompletionText.includes('Dars Yakunlandi! 🎉'), 'Mobile completion view rendered');
        assert(mobileCompletionText.includes('Bosh Sahifaga Qaytish'), 'Mobile back button rendered');

        console.log('\n=========================================');
        console.log('QA SUMMARY: ALL 16/16 SPRINT 2 ASSERTIONS PASSED ✅');
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

runSrsIngestionQA();
