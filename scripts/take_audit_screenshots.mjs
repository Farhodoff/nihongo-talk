import { createClient } from '@supabase/supabase-js';
import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const url = process.env.VITE_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
const serviceKey = process.env.SERVICE_ROLE || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const anonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_6g0Ei_1Cw46e1mJLKj_1Ug_sOmhlgoI';

const adminClient = createClient(url, serviceKey);
const anonClient = createClient(url, anonKey);

async function getLiveSession() {
  console.log('Generating live Supabase session for fsoyilov@gmail.com...');
  const { data: linkData, error: linkErr } = await adminClient.auth.admin.generateLink({
    type: 'magiclink',
    email: 'fsoyilov@gmail.com',
  });
  if (linkErr) throw new Error('Magic link error: ' + linkErr.message);

  const tokenHash = linkData?.properties?.hashed_token;
  const { data: sessionData, error: verifyErr } = await anonClient.auth.verifyOtp({
    token_hash: tokenHash,
    type: 'magiclink',
  });
  if (verifyErr || !sessionData?.session) {
    throw new Error('Verify OTP error: ' + (verifyErr?.message || 'No session'));
  }
  console.log('Got live session! Access token prefix:', sessionData.session.access_token.slice(0, 15));
  return sessionData.session;
}

function startVitePreview(port = 5179) {
  return new Promise((resolve, reject) => {
    console.log(`Starting vite preview on port ${port}...`);
    const proc = spawn('npx', ['vite', 'preview', '--outDir', 'build', '--port', String(port), '--strictPort'], {
      stdio: 'pipe',
      shell: true,
    });

    proc.stdout.on('data', (d) => {
      const str = d.toString();
      if (str.includes('Local:') || str.includes(`:${port}`)) {
        resolve(proc);
      }
    });

    proc.stderr.on('data', (d) => {
      // ignore
    });

    proc.on('error', reject);
    setTimeout(() => resolve(proc), 3500);
  });
}

async function run() {
  const reportDir = path.resolve('report');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const session = await getLiveSession();
  const viteProcess = await startVitePreview(5179);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 950 },
    deviceScaleFactor: 2,
  });

  await context.addInitScript((sessionData) => {
    const storageKey = 'sb-qmuimxnknxwarvnkpnlo-auth-token';
    window.localStorage.setItem(storageKey, JSON.stringify(sessionData));
    window.localStorage.setItem('study_planner_user_cache', JSON.stringify(sessionData.user));
    window.localStorage.setItem('study_planner_theme', 'dark');
    document.documentElement.classList.add('dark');
  }, session);

  const page = await context.newPage();

  try {
    console.log('Navigating to http://localhost:5179/admin ...');
    await page.goto('http://localhost:5179/admin', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    // 1. Admin Overview & KPIs & DB Registry
    console.log('Capturing 01_admin_overview_kpis.png ...');
    await page.screenshot({
      path: path.join(reportDir, '01_admin_overview_kpis.png'),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });

    // 2. Admin Users Table
    console.log('Capturing 02_admin_users_table.png ...');
    await page.evaluate(() => window.scrollTo(0, 680));
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(reportDir, '02_admin_users_table.png'),
      clip: { x: 0, y: 0, width: 1440, height: 950 },
    });

    // 3. User Detail Modal
    console.log('Opening User Detail Drawer...');
    const detailBtn = await page.$('button:has(svg.lucide-eye)');
    if (detailBtn) {
      await detailBtn.click();
      await page.waitForTimeout(1000);
      console.log('Capturing 03_admin_user_detail_drawer.png ...');
      await page.screenshot({
        path: path.join(reportDir, '03_admin_user_detail_drawer.png'),
        fullPage: false,
      });

      // Close modal by clicking the close X button
      const closeBtn = await page.$('.fixed button:has(svg.lucide-x)');
      if (closeBtn) {
        await closeBtn.click();
      } else {
        await page.mouse.click(50, 50); // Click backdrop
      }
      await page.waitForTimeout(800);
    }

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // 4. Tab 2: Speech Analytics
    console.log('Navigating to Speech Analytics tab...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const b = btns.find(el => el.textContent.includes('AI Coach Natijalari') || el.textContent.includes('AI会話ログ'));
      if (b) b.click();
    });
    await page.waitForTimeout(2500);
    console.log('Capturing 04_admin_speech_analytics.png ...');
    await page.screenshot({
      path: path.join(reportDir, '04_admin_speech_analytics.png'),
      fullPage: false,
    });

    // 5. Tab 3: Scenarios Manager
    console.log('Navigating to Scenarios tab...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const b = btns.find(el => el.textContent.includes('Yaponcha Ssenariylar') || el.textContent.includes('シナリオ管理'));
      if (b) b.click();
    });
    await page.waitForTimeout(2500);
    console.log('Capturing 05_admin_scenarios.png ...');
    await page.screenshot({
      path: path.join(reportDir, '05_admin_scenarios.png'),
      fullPage: false,
    });

    // 6. Tab 4: Content Studio
    console.log('Navigating to Content Studio tab...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const b = btns.find(el => el.textContent.includes('Kontent') || el.textContent.includes('コンテンツ'));
      if (b) b.click();
    });
    await page.waitForTimeout(2500);
    console.log('Capturing 06_admin_content_studio.png ...');
    await page.screenshot({
      path: path.join(reportDir, '06_admin_content_studio.png'),
      fullPage: false,
    });

    // 7. Exams Manager (/admin/exams)
    console.log('Navigating to /admin/exams ...');
    await page.goto('http://localhost:5179/admin/exams', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2500);
    console.log('Capturing 07_admin_exams_manager.png ...');
    await page.screenshot({
      path: path.join(reportDir, '07_admin_exams_manager.png'),
      fullPage: false,
    });

    // 8. Global Broadcast Modal
    console.log('Navigating back to /admin for Broadcast Modal...');
    await page.goto('http://localhost:5179/admin', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    const broadcastBtn = await page.$('button:has-text("Xabar yuborish"), button:has(svg.lucide-radio)');
    if (broadcastBtn) {
      await broadcastBtn.click();
      await page.waitForTimeout(1000);
      console.log('Capturing 08_admin_broadcast_modal.png ...');
      await page.screenshot({
        path: path.join(reportDir, '08_admin_broadcast_modal.png'),
        fullPage: false,
      });
      const closeBtn = await page.$('.fixed button:has(svg.lucide-x)');
      if (closeBtn) await closeBtn.click();
      await page.waitForTimeout(500);
    }

    // 9. AI Cleaner Modal
    console.log('Opening AI Cleaner Modal...');
    const cleanerBtn = await page.$('button:has-text("AI Cleaner")');
    if (cleanerBtn) {
      await cleanerBtn.click();
      await page.waitForTimeout(1000);
      console.log('Capturing 09_admin_ai_cleaner_modal.png ...');
      await page.screenshot({
        path: path.join(reportDir, '09_admin_ai_cleaner_modal.png'),
        fullPage: false,
      });
      const closeBtn = await page.$('.fixed button:has(svg.lucide-x)');
      if (closeBtn) await closeBtn.click();
      await page.waitForTimeout(500);
    }

    // 10. Student Dashboard (/dashboard)
    console.log('Navigating to /dashboard ...');
    await page.goto('http://localhost:5179/dashboard', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2500);
    console.log('Capturing 10_student_dashboard.png ...');
    await page.screenshot({
      path: path.join(reportDir, '10_student_dashboard.png'),
      clip: { x: 0, y: 0, width: 1440, height: 950 },
    });

    console.log('ALL SCREENSHOTS CAPTURED SUCCESSFULLY!');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  } finally {
    await browser.close();
    viteProcess.kill('SIGTERM');
    process.exit(0);
  }
}

run();
