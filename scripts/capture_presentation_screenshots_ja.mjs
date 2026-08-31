import puppeteer from 'puppeteer-core';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = '/Users/farhod/Documents/github/study_planner/presentation_screenshots_ja';

if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log('🚀 Starting Vite preview server on port 4174...');
    const previewProcess = spawn('npx', ['vite', 'preview', '--port', '4174', '--strictPort'], {
        cwd: '/Users/farhod/Documents/github/study_planner',
        stdio: 'pipe',
        env: { ...process.env, PORT: '4174' }
    });

    previewProcess.stdout.on('data', data => console.log(`[Preview] ${data.toString().trim()}`));
    previewProcess.stderr.on('data', data => console.log(`[Preview Err] ${data.toString().trim()}`));

    await sleep(3000);

    console.log('🌐 Launching headless Chrome via Puppeteer-core...');
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--window-size=1920,1080',
            '--hide-scrollbars',
            '--font-render-hinting=max'
        ],
        defaultViewport: {
            width: 1920,
            height: 1080,
            deviceScaleFactor: 2 // Crisp Retina Quality for presentations
        }
    });

    try {
        const page = await browser.newPage();

        const mockJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDAwMDAwMC0wMDAwLTQwMDAtODAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJlbWFpbCI6ImFkbWluQG5paG9uZ28tdGFsay5qcCIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImZ1bGxfbmFtZSI6IumbieeQhuiAhSAoQWRtaW4pIiwicm9sZSI6InN1cGVyYWRtaW4iLCJsYW5ndWFnZV9wcmVmZXJlbmNlIjoiamEifSwiZXhwIjoxOTk5OTk5OTk5fQ.mock_signature_for_presentation_demo';

        const mockSession = {
            access_token: mockJwt,
            token_type: 'bearer',
            expires_in: 360000,
            refresh_token: 'mock-refresh-token',
            user: {
                id: 'a0000000-0000-4000-8000-000000000001',
                aud: 'authenticated',
                role: 'authenticated',
                email: 'admin@nihongo-talk.jp',
                app_metadata: { provider: 'email', providers: ['email'] },
                user_metadata: {
                    full_name: '管理者 (Admin)',
                    role: 'superadmin',
                    language_preference: 'ja'
                },
                created_at: '2026-08-01T00:00:00.000Z',
                last_sign_in_at: '2026-08-31T09:00:00.000Z'
            }
        };

        const mockAdminUsers = [
            { id: 'a0000000-0000-4000-8000-000000000001', email: 'admin@nihongo-talk.jp', full_name: '管理者 (Super Admin)', role: 'superadmin', created_at: '2026-08-01T00:00:00.000Z', last_sign_in_at: '2026-08-31T09:00:00.000Z' },
            { id: 'u0000000-0000-4000-8000-000000000002', email: 'tanaka.kenji@tokyo-tech.jp', full_name: '田中 健二 (Tokyo Tech)', role: 'user', created_at: '2026-08-05T10:30:00.000Z', last_sign_in_at: '2026-08-31T08:45:00.000Z' },
            { id: 'u0000000-0000-4000-8000-000000000003', email: 'yamamoto.yuki@waseda.jp', full_name: '山本 由紀 (Waseda Univ)', role: 'user', created_at: '2026-08-10T14:15:00.000Z', last_sign_in_at: '2026-08-31T07:20:00.000Z' },
            { id: 'u0000000-0000-4000-8000-000000000004', email: 'sato.daiki@kyoto-u.ac.jp', full_name: '佐藤 大樹 (Kyoto Univ)', role: 'user', created_at: '2026-08-12T11:00:00.000Z', last_sign_in_at: '2026-08-30T22:10:00.000Z' },
            { id: 'u0000000-0000-4000-8000-000000000005', email: 'suzuki.mai@osaka-u.ac.jp', full_name: '鈴木 舞 (Osaka Univ)', role: 'user', created_at: '2026-08-15T09:40:00.000Z', last_sign_in_at: '2026-08-30T19:35:00.000Z' },
            { id: 'u0000000-0000-4000-8000-000000000006', email: 'kobayashi.ren@tsukuba.ac.jp', full_name: '小林 蓮 (Tsukuba Univ)', role: 'user', created_at: '2026-08-18T16:20:00.000Z', last_sign_in_at: '2026-08-30T15:00:00.000Z' }
        ];

        await page.evaluateOnNewDocument((session, users) => {
            localStorage.setItem('study_planner_theme', 'dark');
            localStorage.setItem('study_planner_lang', 'ja');
            localStorage.setItem('study_planner_primary_language', 'ja');
            localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
            localStorage.setItem('study_planner_user_cache', JSON.stringify(session.user));
            localStorage.setItem('study_planner_admin_users_cache', JSON.stringify(users));
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(session));
            localStorage.setItem('sb-prj_CxM8d2mfZ1jyKPKHLhlTxVm7qraP-auth-token', JSON.stringify(session));
            localStorage.setItem('supabase.auth.token', JSON.stringify(session));
        }, mockSession, mockAdminUsers);

        // Helper to suppress toasts and overlays
        const cleanOverlaysAndCapture = async (filename, waitMs = 2000) => {
            await sleep(waitMs);
            await page.evaluate(() => {
                // Set dismissal keys
                localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
                localStorage.setItem('pwa_prompt_dismissed', 'true');
                
                // Remove toasts, prompts, debug overlays
                document.querySelectorAll(
                    '[data-sonner-toaster], .pwa-toast, #pwa-install-prompt, [role="alert"], div.fixed.bottom-24, div.fixed.bottom-8, div.fixed.bottom-6, div.fixed.bottom-4, .toast'
                ).forEach(el => el.remove());
            });
            const filePath = path.join(OUT_DIR, filename);
            await page.screenshot({ path: filePath, fullPage: false });
            console.log(`✅ Captured: ${filename}`);
            return filePath;
        };

        // Helper for setting Japanese auth session
        const setJapaneseSession = async () => {
            await page.evaluate(() => {
                localStorage.setItem('study_planner_theme', 'dark');
                localStorage.setItem('study_planner_lang', 'ja');
                localStorage.setItem('study_planner_primary_language', 'ja');
                localStorage.setItem('study_planner_push_prompt_dismissed', 'true');

                const mockSession = {
                    access_token: 'mock-jwt-presentation-token',
                    token_type: 'bearer',
                    expires_in: 360000,
                    refresh_token: 'mock-refresh-token',
                    user: {
                        id: 'a0000000-0000-4000-8000-000000000001',
                        aud: 'authenticated',
                        role: 'authenticated',
                        email: 'admin@nihongo-talk.jp',
                        app_metadata: { provider: 'email', providers: ['email'] },
                        user_metadata: {
                            full_name: '管理者 (Admin)',
                            role: 'superadmin',
                            language_preference: 'ja'
                        },
                        created_at: '2026-08-01T00:00:00.000Z',
                        last_sign_in_at: '2026-08-31T09:00:00.000Z'
                    }
                };
                localStorage.setItem('study_planner_user_cache', JSON.stringify(mockSession.user));
                localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(mockSession));
                localStorage.setItem('sb-prj_CxM8d2mfZ1jyKPKHLhlTxVm7qraP-auth-token', JSON.stringify(mockSession));
                localStorage.setItem('supabase.auth.token', JSON.stringify(mockSession));
            });
        };

        // ==========================================
        // 1. Landing Page (Sumi-e & Hanko Hero, JA)
        // ==========================================
        console.log('\n📸 1. Capturing 01_landing_page_ja.png...');
        await page.goto('http://localhost:4174/?lang=ja', { waitUntil: 'domcontentloaded' });
        await page.evaluate(() => {
            localStorage.clear();
            localStorage.setItem('study_planner_theme', 'dark');
            localStorage.setItem('study_planner_lang', 'ja');
            localStorage.setItem('study_planner_primary_language', 'ja');
            localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
        });
        await page.goto('http://localhost:4174/?lang=ja', { waitUntil: 'networkidle0' });
        await cleanOverlaysAndCapture('01_landing_page_ja.png', 2500);

        // Authenticate for internal pages
        await setJapaneseSession();

        // ==========================================
        // 2. JLPT Master Hub (Kanji & Grammar, JA)
        // ==========================================
        console.log('\n📸 2. Capturing 02_jlpt_master_ja.png...');
        await page.goto('http://localhost:4174/jlpt?tab=kanji&lang=ja', { waitUntil: 'networkidle0' });
        await page.evaluate(() => {
            window.scrollTo({ top: 120, behavior: 'instant' });
        });
        await cleanOverlaysAndCapture('02_jlpt_master_ja.png', 2000);

        // ==========================================
        // 3. Vocabulary Builder (AI Word Analysis, JA)
        // ==========================================
        console.log('\n📸 3. Capturing 03_vocabulary_builder_ja.png...');
        await page.goto('http://localhost:4174/vocabulary?lang=ja', { waitUntil: 'networkidle0' });
        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const sampleBtn = buttons.find(b => b.textContent && b.textContent.includes('維持'));
            if (sampleBtn) sampleBtn.click();
        });
        await sleep(1500);
        await page.evaluate(() => {
            window.scrollTo({ top: 80, behavior: 'instant' });
        });
        await cleanOverlaysAndCapture('03_vocabulary_builder_ja.png', 2000);

        // ==========================================
        // 4. Speaking Coach (Active Dialogue, JA)
        // ==========================================
        console.log('\n📸 4. Capturing 04_speaking_coach_ja.png...');
        await page.goto('http://localhost:4174/speaking-coach?lang=ja', { waitUntil: 'networkidle0' });
        await sleep(1000);
        await page.evaluate(() => {
            const promptButtons = Array.from(document.querySelectorAll('button'));
            const introPrompt = promptButtons.find(b => b.textContent && b.textContent.includes('自己紹介'));
            if (introPrompt) introPrompt.click();
        });
        await sleep(1500);
        await cleanOverlaysAndCapture('04_speaking_coach_ja.png', 2000);

        // ==========================================
        // 5. Flashcards Page (Deck Library / SRS, JA)
        // ==========================================
        console.log('\n📸 5. Capturing 05_flashcards_srs_ja.png...');
        await page.goto('http://localhost:4174/flashcards?lang=ja', { waitUntil: 'networkidle0' });
        // Click Official Library tab
        await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const libBtn = buttons.find(b => b.textContent && (b.textContent.includes('公式') || b.textContent.includes('ライブラリ') || b.textContent.includes('Standart')));
            if (libBtn) libBtn.click();
        });
        await sleep(1000);
        await cleanOverlaysAndCapture('05_flashcards_srs_ja.png', 2000);

        // ==========================================
        // 6. Scenarios Picker (Japanese Business, JA)
        // ==========================================
        console.log('\n📸 6. Capturing 06_scenarios_picker_ja.png...');
        await page.goto('http://localhost:4174/scenarios?lang=ja', { waitUntil: 'networkidle0' });
        await cleanOverlaysAndCapture('06_scenarios_picker_ja.png', 2000);

        // ==========================================
        // 7. Admin Panel (Privacy-Safe Japanese, JA)
        // ==========================================
        console.log('\n📸 7. Capturing 07_admin_dashboard_ja.png...');
        await setJapaneseSession();
        await page.goto('http://localhost:4174/admin?lang=ja', { waitUntil: 'networkidle0' });
        await page.evaluate(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        });
        await cleanOverlaysAndCapture('07_admin_dashboard_ja.png', 2500);

        console.log('\n🎉 All 7 Japanese presentation screenshots successfully generated in:');
        console.log(OUT_DIR);
    } finally {
        await browser.close();
        previewProcess.kill();
    }
}

run().catch(err => {
    console.error('Fatal error during capture:', err);
    process.exit(1);
});
