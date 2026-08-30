import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9223;
const USER_DATA_DIR = '/tmp/nihongo_talk_chrome_profile_' + Date.now();

async function startChrome() {
    const chrome = spawn(CHROME_PATH, [
        '--headless=new',
        '--remote-debugging-port=' + PORT,
        '--user-data-dir=' + USER_DATA_DIR,
        '--disable-gpu',
        '--no-sandbox',
        '--window-size=1920,1080',
        '--hide-scrollbars'
    ]);

    for (let i = 0; i < 30; i++) {
        try {
            const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
            if (res.ok) {
                console.log('Chrome CDP ready on port', PORT);
                return chrome;
            }
        } catch (e) {}
        await new Promise(r => setTimeout(r, 200));
    }
    throw new Error('Failed to connect to Chrome CDP');
}

class CDPClient {
    constructor(wsUrl) {
        this.wsUrl = wsUrl;
        this.ws = null;
        this.id = 1;
        this.callbacks = new Map();
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(this.wsUrl);
            this.ws.onopen = () => resolve();
            this.ws.onerror = (err) => reject(err);
            this.ws.onmessage = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id && this.callbacks.has(data.id)) {
                    const { resolve, reject } = this.callbacks.get(data.id);
                    this.callbacks.delete(data.id);
                    if (data.error) reject(data.error);
                    else resolve(data.result);
                }
            };
        });
    }

    send(method, params = {}) {
        return new Promise((resolve, reject) => {
            const id = this.id++;
            this.callbacks.set(id, { resolve, reject });
            this.ws.send(JSON.stringify({ id, method, params }));
        });
    }

    async evaluate(expression) {
        const res = await this.send('Runtime.evaluate', {
            expression,
            returnByValue: true,
            awaitPromise: true
        });
        return res?.result?.value;
    }

    async navigate(url) {
        await this.send('Page.navigate', { url });
        await new Promise(r => setTimeout(r, 2000));
    }

    async screenshot(filepath) {
        const params = { format: 'png', quality: 100, captureBeyondViewport: false };
        const res = await this.send('Page.captureScreenshot', params);
        const buffer = Buffer.from(res.data, 'base64');
        fs.writeFileSync(filepath, buffer);
        console.log(`Saved screenshot: ${filepath} (${buffer.length} bytes)`);
    }

    async close() {
        if (this.ws) this.ws.close();
    }
}

async function run() {
    const chrome = await startChrome();
    try {
        const targetsRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
        const targets = await targetsRes.json();
        const pageTarget = targets.find(t => t.type === 'page');
        if (!pageTarget) throw new Error('No page target found');

        const cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
        await cdp.connect();
        console.log('Connected to target WebSocket');

        await cdp.send('Page.enable');
        await cdp.send('DOM.enable');
        await cdp.send('Runtime.enable');
        await cdp.send('Emulation.setDeviceMetricsOverride', {
            width: 1920,
            height: 1080,
            deviceScaleFactor: 2, // 2x Retina
            mobile: false
        });

        // 1. Initial navigation
        await cdp.navigate('http://localhost:4174/');

        // Setup mock database, active session, admin user, and personal goals
        await cdp.evaluate(`
            const userId = 'd8a1b2c3-4e5f-6a7b-8c9d-0e1f2a3b4c5d';
            const nowSec = Math.floor(Date.now() / 1000);
            const mockUser = {
                id: userId,
                aud: 'authenticated',
                role: 'authenticated',
                email: 'fsoyilov@gmail.com',
                email_confirmed_at: '2026-08-01T00:00:00.000Z',
                app_metadata: { provider: 'email', providers: ['email'] },
                user_metadata: {
                    name: 'Farhod (Admin)',
                    role: 'superadmin',
                    current_level_ja: 'N3',
                    target_level_ja: 'N2',
                    target_goal_ja: 'Pass JLPT N2 with 150+ score'
                }
            };
            const mockSession = {
                access_token: 'mock-valid-jwt-token-for-presentation',
                token_type: 'bearer',
                expires_in: 360000,
                expires_at: nowSec + 360000,
                refresh_token: 'mock-refresh-token',
                user: mockUser
            };
            localStorage.setItem('sb-qmuimxnknxwarvnkpnlo-auth-token', JSON.stringify(mockSession));
            localStorage.setItem('study_planner_user_cache', JSON.stringify(mockUser));
            localStorage.setItem('study_planner_user_email', 'fsoyilov@gmail.com');
            localStorage.setItem('study_planner_primary_language', 'ja');
            localStorage.setItem('study_planner_study_track', 'ja');
            localStorage.setItem('study_planner_theme', 'dark');
            localStorage.setItem('study_planner_show_furigana', 'true');
            localStorage.setItem('study_planner_level', '7');
            localStorage.setItem('study_planner_total_xp', '2850');
            localStorage.setItem('study_planner_streak', '14');
            // Suppress both PWA and push prompts permanently
            localStorage.setItem('pwa-prompt-last-shown', (Date.now() + 864000000).toString());
            localStorage.setItem('study_planner_push_prompt_dismissed', 'true');
            localStorage.setItem('push_notification_permission_dismissed', 'true');

            // Structured Goal
            const mockGoal = {
                id: 'goal-jlpt-n2-2026',
                userId: userId,
                language: 'ja',
                goalType: 'jlpt',
                currentLevel: 'N3',
                targetGoal: 'JLPT N2',
                targetLevel: 'N2',
                deadline: '2026-12-06T00:00:00.000Z',
                dailyMinutes: 60,
                totalWeeks: 24,
                currentWeek: 3,
                status: 'active',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem('study_planner_personal_goal_' + userId, JSON.stringify(mockGoal));

            // Structured Weekly Plan matching WeeklyLearningPlan interface
            const mockWeeklyPlan = {
                id: 'plan-week-3',
                goalId: 'goal-jlpt-n2-2026',
                userId: userId,
                weekNumber: 3,
                startDate: '2026-08-25',
                endDate: '2026-08-31',
                objectives: [
                    'Master 15 N2 Grammar patterns',
                    'Complete 3 AI speaking sessions with Japanese Teacher persona',
                    'Review 100 JLPT N2 Flashcards using Anki SM-2 algorithm'
                ],
                focusSkills: ['grammar', 'speaking', 'vocabulary'],
                days: [
                    {
                        day: 'monday',
                        tasks: [
                            { id: 't1', title: 'N2 Grammar: 〜に対して vs 〜にとって', type: 'grammar', estimatedMinutes: 20, completed: true, status: 'completed', sourceType: 'curriculum', route: '/jlpt?tab=kanji' },
                            { id: 't2', title: 'AI Speaking Coach: 自己紹介 & IT Mock', type: 'speaking', estimatedMinutes: 25, completed: true, status: 'completed', sourceType: 'ai_generated', route: '/speaking-coach' },
                            { id: 't3', title: 'SRS Flashcards: 25 N2 Tango Review', type: 'srs', estimatedMinutes: 15, completed: true, status: 'completed', sourceType: 'srs', route: '/flashcards' }
                        ]
                    },
                    {
                        day: 'tuesday',
                        tasks: [
                            { id: 't4', title: 'N2 Kanji: 10 ta yangi murakkab iyeroglif', type: 'vocabulary', estimatedMinutes: 20, completed: true, status: 'completed', sourceType: 'curriculum', route: '/jlpt?tab=kanji' },
                            { id: 't5', title: 'Dokkai: Qisqa matn tahlili va savollar', type: 'reading', estimatedMinutes: 25, completed: true, status: 'completed', sourceType: 'curriculum', route: '/jlpt?tab=reading' },
                            { id: 't6', title: 'SRS Flashcards: Takrorlash', type: 'srs', estimatedMinutes: 15, completed: true, status: 'completed', sourceType: 'srs', route: '/flashcards' }
                        ]
                    },
                    {
                        day: 'wednesday',
                        tasks: [
                            { id: 't7', title: 'Choukai: Quick Response tinglab tushunish', type: 'listening', estimatedMinutes: 30, completed: true, status: 'completed', sourceType: 'curriculum', route: '/jlpt?tab=listening' },
                            { id: 't8', title: 'AI Keigo Check: Biznes yapon tili', type: 'speaking', estimatedMinutes: 20, completed: false, status: 'in_progress', sourceType: 'ai_generated', route: '/speaking-coach' }
                        ]
                    },
                    {
                        day: 'thursday',
                        tasks: [
                            { id: 't9', title: 'N2 Grammar: 〜わけにはいかない', type: 'grammar', estimatedMinutes: 25, completed: false, status: 'pending', sourceType: 'curriculum', route: '/jlpt?tab=kanji' },
                            { id: 't10', title: 'SRS Flashcards: N2 Vocabulary', type: 'srs', estimatedMinutes: 20, completed: false, status: 'pending', sourceType: 'srs', route: '/flashcards' }
                        ]
                    },
                    {
                        day: 'friday',
                        tasks: [
                            { id: 't11', title: 'Speaking Scenarios: Mehmonxona & Do\\'kon', type: 'speaking', estimatedMinutes: 30, completed: false, status: 'pending', sourceType: 'ai_generated', route: '/scenarios' },
                            { id: 't12', title: 'Kanji Stroke Writer: Mashqlar', type: 'vocabulary', estimatedMinutes: 15, completed: false, status: 'pending', sourceType: 'curriculum', route: '/jlpt?tab=kanji' }
                        ]
                    },
                    {
                        day: 'saturday',
                        tasks: [
                            { id: 't13', title: 'Mini JLPT N2 Mock Exam (60 daqiqa)', type: 'mock_test', estimatedMinutes: 60, completed: false, status: 'pending', sourceType: 'exam_bank', route: '/jlpt?tab=mock' }
                        ]
                    },
                    {
                        day: 'sunday',
                        tasks: [
                            { id: 't14', title: 'Haftalik xatolar tahlili (Error Vault)', type: 'srs', estimatedMinutes: 30, completed: false, status: 'pending', sourceType: 'srs', route: '/flashcards' }
                        ]
                    }
                ],
                reasoning: 'Tailored for JLPT N2 preparation with balanced grammar, vocabulary SRS, and active speaking practice.',
                expectedOutcome: 'Achieve high retention on 100+ kanji/vocab cards and gain fluency in N2 conversational sentence structures.',
                aiGenerated: true,
                version: 1,
                status: 'active',
                createdAt: new Date().toISOString()
            };
            localStorage.setItem('study_planner_weekly_plans', JSON.stringify([mockWeeklyPlan]));

            // Admin Cache data
            const mockAdminUsers = [
                { id: 'u1', email: 'fsoyilov@gmail.com', full_name: 'Farhod Soyilov (Owner)', role: 'superadmin', created_at: '2026-08-03T00:00:00Z', last_sign_in_at: '2026-08-30T10:00:00Z' },
                { id: 'u2', email: 'tanaka.kenji@nihongo-talk.jp', full_name: 'Kenji Tanaka', role: 'admin', created_at: '2026-08-05T09:30:00Z', last_sign_in_at: '2026-08-30T09:15:00Z' },
                { id: 'u3', email: 'azizbek.karimov@gmail.com', full_name: 'Azizbek Karimov', role: 'student', created_at: '2026-08-10T14:20:00Z', last_sign_in_at: '2026-08-30T08:45:00Z' },
                { id: 'u4', email: 'madina.usmanova@mail.ru', full_name: 'Madina Usmanova', role: 'student', created_at: '2026-08-12T11:10:00Z', last_sign_in_at: '2026-08-29T19:20:00Z' },
                { id: 'u5', email: 'sato.yuki@university.edu', full_name: 'Yuki Sato', role: 'student', created_at: '2026-08-15T16:00:00Z', last_sign_in_at: '2026-08-29T21:00:00Z' }
            ];
            const mockDailyStats = [
                { activity_date: '2026-08-24', active_users: 18, total_duration_minutes: 240, total_sessions: 42, avg_score: 82 },
                { activity_date: '2026-08-25', active_users: 22, total_duration_minutes: 310, total_sessions: 56, avg_score: 84 },
                { activity_date: '2026-08-26', active_users: 25, total_duration_minutes: 380, total_sessions: 64, avg_score: 86 },
                { activity_date: '2026-08-27', active_users: 27, total_duration_minutes: 420, total_sessions: 71, avg_score: 88 },
                { activity_date: '2026-08-28', active_users: 29, total_duration_minutes: 450, total_sessions: 78, avg_score: 87 },
                { activity_date: '2026-08-29', active_users: 31, total_duration_minutes: 520, total_sessions: 89, avg_score: 90 },
                { activity_date: '2026-08-30', active_users: 35, total_duration_minutes: 590, total_sessions: 104, avg_score: 91 }
            ];
            localStorage.setItem('study_planner_admin_users_cache', JSON.stringify(mockAdminUsers));
            localStorage.setItem('study_planner_admin_stats_cache', JSON.stringify(mockDailyStats));
        `);

        console.log('Reloading to activate state...');
        await cdp.send('Page.reload');
        await new Promise(r => setTimeout(r, 2000));

        const outDir = '/Users/farhod/Documents/github/study_planner';
        const slideDir = path.join(outDir, 'presentation_screenshots');
        if (!fs.existsSync(slideDir)) fs.mkdirSync(slideDir, { recursive: true });

        const cleanOverlaysAndCapture = async (filename, waitMs = 2000) => {
            await new Promise(r => setTimeout(r, waitMs));
            await cdp.evaluate(`
                document.querySelectorAll('[data-sonner-toaster], .pwa-toast, #pwa-install-prompt, [role="alert"], div.fixed.bottom-24, div.fixed.bottom-8, div.fixed.bottom-6, .fixed.bottom-4').forEach(el => el.remove());
            `);
            const p1 = path.join(outDir, filename);
            const p2 = path.join(slideDir, filename);
            await cdp.screenshot(p1);
            fs.copyFileSync(p1, p2);
        };

        // 1. JLPT Master Hub
        console.log('1. Capturing 01_title_main_dashboard.png...');
        await cdp.navigate('http://localhost:4174/jlpt');
        await cleanOverlaysAndCapture('01_title_main_dashboard.png', 2500);

        // 2. Diagnostic & Skill Evaluation
        console.log('2. Capturing 02_problem_optional.png...');
        await cdp.navigate('http://localhost:4174/diagnostic');
        await cleanOverlaysAndCapture('02_problem_optional.png', 2000);

        // 3. Kanji & Grammar Master Library
        console.log('3. Capturing 03_system_overview.png...');
        await cdp.navigate('http://localhost:4174/jlpt?tab=kanji');
        await new Promise(r => setTimeout(r, 1500));
        await cdp.evaluate(`window.scrollTo({ top: 380, behavior: 'instant' });`);
        await cleanOverlaysAndCapture('03_system_overview.png', 1500);

        // 4.1 AI Speaking Coach
        console.log('4.1 Capturing 04_1_speaking_coach.png...');
        await cdp.navigate('http://localhost:4174/speaking-coach');
        await cleanOverlaysAndCapture('04_1_speaking_coach.png', 2500);

        // 4.2 Flashcards Standard Library
        console.log('4.2 Capturing 04_2_flashcards.png...');
        await cdp.navigate('http://localhost:4174/flashcards');
        await new Promise(r => setTimeout(r, 1500));
        await cdp.evaluate(`
            const buttons = Array.from(document.querySelectorAll('button'));
            const libBtn = buttons.find(b => b.textContent && b.textContent.includes('Standart Kutubxona'));
            if (libBtn) libBtn.click();
        `);
        await cleanOverlaysAndCapture('04_2_flashcards.png', 2000);

        // 4.3 JLPT Mock Exam Hub
        console.log('4.3 Capturing 04_3_jlpt_mock_exam.png...');
        await cdp.navigate('http://localhost:4174/jlpt?tab=mock');
        await cleanOverlaysAndCapture('04_3_jlpt_mock_exam.png', 2000);

        // 5.1 AI Feedback & Scenarios
        console.log('5.1 Capturing 05_1_ai_feedback.png...');
        await cdp.navigate('http://localhost:4174/scenarios');
        await cleanOverlaysAndCapture('05_1_ai_feedback.png', 2500);

        // 5.2 Personal Learning Plan
        console.log('5.2 Capturing 05_2_personal_learning_plan.png...');
        await cdp.navigate('http://localhost:4174/personal-plan');
        await cleanOverlaysAndCapture('05_2_personal_learning_plan.png', 2500);

        // 7. Admin Dashboard
        console.log('7. Capturing 07_test_admin_dashboard.png...');
        await cdp.navigate('http://localhost:4174/admin');
        await cleanOverlaysAndCapture('07_test_admin_dashboard.png', 3000);

        // 8. Roadmap Progression
        console.log('8. Capturing 08_demo_final.png...');
        await cdp.navigate('http://localhost:4174/roadmap');
        await cleanOverlaysAndCapture('08_demo_final.png', 2000);

        await cdp.close();
        console.log('All 10 presentation screenshots captured cleanly and verified!');
    } finally {
        chrome.kill();
        try { fs.rmSync(USER_DATA_DIR, { recursive: true, force: true }); } catch (e) {}
    }
}

run().catch(err => {
    console.error('Error capturing screenshots:', err);
    process.exit(1);
});
