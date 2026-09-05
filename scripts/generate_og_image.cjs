const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

async function generateOgImage() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });

  const htmlContent = `
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800;900&family=Noto+Sans+JP:wght@700;900&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 1200px;
      height: 630px;
      background-color: #0c1017;
      background-image: 
        radial-gradient(circle at 15% 20%, rgba(232, 72, 58, 0.22) 0%, transparent 45%),
        radial-gradient(circle at 85% 80%, rgba(99, 102, 241, 0.20) 0%, transparent 45%),
        radial-gradient(circle at 50% 50%, rgba(201, 169, 97, 0.10) 0%, transparent 60%);
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 56px 64px;
      overflow: hidden;
      position: relative;
    }

    body::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 20px;
      position: relative;
      z-index: 10;
    }

    .logo-box {
      width: 76px;
      height: 76px;
      border-radius: 20px;
      background: linear-gradient(135deg, #1e2632 0%, #11161d 100%);
      border: 2px solid rgba(232, 72, 58, 0.45);
      box-shadow: 0 12px 32px rgba(232, 72, 58, 0.3), 0 2px 8px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-box svg {
      width: 48px;
      height: 48px;
    }

    .brand-names {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-title-wrap {
      display: flex;
      align-items: baseline;
      gap: 14px;
    }

    .brand-title {
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.03em;
      background: linear-gradient(to right, #ffffff, #f1f5f9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .jp-sub {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #e8483a;
      letter-spacing: 0.05em;
    }

    .brand-tagline {
      font-size: 15px;
      font-weight: 600;
      color: #94a3b8;
      letter-spacing: 0.02em;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 900px;
      margin-top: 10px;
    }

    .headline {
      font-size: 50px;
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 16px;
      color: #ffffff;
    }

    .headline span.highlight {
      background: linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #fb7185 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .headline span.gold {
      background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subheadline {
      font-size: 20px;
      font-weight: 500;
      color: #94a3b8;
      line-height: 1.45;
    }

    .cards-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      position: relative;
      z-index: 10;
    }

    .card {
      background: rgba(22, 27, 34, 0.85);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    }

    .card-icon {
      font-size: 26px;
      margin-bottom: 2px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.01em;
    }

    .card-desc {
      font-size: 13px;
      font-weight: 500;
      color: #94a3b8;
      line-height: 1.35;
    }

    .card-badge {
      display: inline-block;
      align-self: flex-start;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    .badge-rose {
      background: rgba(244, 63, 94, 0.15);
      color: #fb7185;
      border: 1px solid rgba(244, 63, 94, 0.3);
    }

    .badge-amber {
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }

    .badge-indigo {
      background: rgba(99, 102, 241, 0.15);
      color: #818cf8;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }

    .badge-emerald {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 16px;
      font-size: 13px;
      font-weight: 600;
      color: #64748b;
      position: relative;
      z-index: 10;
    }

    .url-chip {
      background: rgba(255, 255, 255, 0.06);
      padding: 6px 14px;
      border-radius: 999px;
      color: #e2e8f0;
      font-family: monospace;
      font-size: 13px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-box">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10C14 8.5 34 8.5 44 10C45.5 10.2 45.5 12.5 44 13C34 11.5 14 11.5 4 13C2.5 12.5 2.5 10.2 4 10Z" fill="#E8483A"/>
        <path d="M7 14H41V16.8H7V14Z" fill="#E8483A"/>
        <rect x="22" y="16.8" width="4" height="5.2" rx="0.6" fill="#C9A961"/>
        <path d="M5 22H43V24.8H5V22Z" fill="#E8483A"/>
        <path d="M12.5 16.8L11 41H15L16 16.8H12.5Z" fill="#E8483A"/>
        <path d="M32 16.8L33 41H37L35.5 16.8H32Z" fill="#E8483A"/>
        <rect x="9" y="40" width="7" height="3.2" rx="1" fill="#C9A961"/>
        <rect x="32" y="40" width="7" height="3.2" rx="1" fill="#C9A961"/>
      </svg>
    </div>
    <div class="brand-names">
      <div class="brand-title-wrap">
        <span class="brand-title">Nihongo Talk</span>
        <span class="jp-sub">日本語トーク</span>
      </div>
      <span class="brand-tagline">Yapon Tilini AI Yordamida Tizimli O'rganish Platformasi</span>
    </div>
  </div>

  <div class="hero-content">
    <h1 class="headline">
      <span class="highlight">JLPT N5–N1</span> Imtihoniga Tayyorlaning & <br/>
      <span class="gold">AI Speaking Coach</span> Bilan Erkin Gapiring
    </h1>
    <p class="subheadline">
      Interaktiv ovozli suhbatlar, Anki SM-2 oraliq takrorlash fleshkartalari va to'liq JLPT imtihon simulyatsiyasi.
    </p>
  </div>

  <div class="cards-row">
    <div class="card">
      <div class="card-icon">🗣️</div>
      <div class="card-title">AI Speaking</div>
      <div class="card-desc">Jonli ovozli suhbat, talaffuz va xatolar tahlili</div>
      <span class="card-badge badge-rose">Yuki-Sensei</span>
    </div>
    <div class="card">
      <div class="card-icon">⛩️</div>
      <div class="card-title">JLPT N5–N1</div>
      <div class="card-desc">Lug'at, grammatika, dokkai va choukai testlari</div>
      <span class="card-badge badge-amber">Mock Exam</span>
    </div>
    <div class="card">
      <div class="card-icon">🎴</div>
      <div class="card-title">Fleshkartalar</div>
      <div class="card-desc">Anki SM-2 algoritmi va 10 000+ so'zlar bazasi</div>
      <span class="card-badge badge-indigo">Spaced Repetition</span>
    </div>
    <div class="card">
      <div class="card-icon">⚡</div>
      <div class="card-title">Telegram App</div>
      <div class="card-desc">To'g'ridan-to'g'ri Telegram ichida qulay mashqlar</div>
      <span class="card-badge badge-emerald">TWA Support</span>
    </div>
  </div>

  <div class="footer">
    <span>© 2026 Nihongo Talk. Barcha huquqlar himoyalangan.</span>
    <span class="url-chip">nihon-talk.vercel.app</span>
  </div>
</body>
</html>
  `;

  await page.setContent(htmlContent);
  await page.waitForLoadState('networkidle');

  const publicDir = path.resolve(__dirname, '../public');
  const jpgPath = path.join(publicDir, 'og-image.jpg');
  const pngPath = path.join(publicDir, 'og-image.png');

  await page.screenshot({ path: jpgPath, type: 'jpeg', quality: 95 });
  await page.screenshot({ path: pngPath, type: 'png' });

  console.log('✅ Generated og-image.jpg and og-image.png successfully in:', publicDir);
  await browser.close();
}

generateOgImage().catch((err) => {
  console.error('Error generating og image:', err);
  process.exit(1);
});
