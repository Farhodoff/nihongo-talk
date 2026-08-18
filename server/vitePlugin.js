/**
 * Vite plugin that adds server-side API middleware for Telegram operations.
 * Routes /api/telegram/* requests to the local API handler instead of the browser
 * trying to reach Supabase directly (which may be blocked by adblockers/VPN).
 */
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnv() {
    try {
        const envPath = resolve(process.cwd(), '.env');
        const envContent = readFileSync(envPath, 'utf-8');
        const envVars = {};
        for (const line of envContent.split('\n')) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) continue;
            const eqIndex = trimmed.indexOf('=');
            if (eqIndex === -1) continue;
            const key = trimmed.slice(0, eqIndex).trim();
            const value = trimmed.slice(eqIndex + 1).trim();
            envVars[key] = value;
        }
        return envVars;
    } catch (e) {
        console.warn('Could not load .env:', e.message);
        return {};
    }
}

function isValidUuid(id) {
    if (!id || typeof id !== 'string') return false;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
}

function generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

export function telegramApiPlugin() {
    return {
        name: 'telegram-api',
        configureServer(server) {
            // Load env INSIDE configureServer so it runs at server start time
            const env = loadEnv();
            const supabaseUrl = env.VITE_SUPABASE_URL || 'https://qmuimxnknxwarvnkpnlo.supabase.co';
            const serviceRole = env.SERVICE_ROLE;
            const botToken = env.TELEGRAM_BOT_TOKEN || env.VITE_TELEGRAM_BOT_TOKEN;

            if (!serviceRole) {
                console.error('⚠️  SERVICE_ROLE not found in .env — Telegram API routes will not work');
                return;
            }

            const supabase = createClient(supabaseUrl, serviceRole);
            console.log('✅ Telegram API plugin loaded (SERVICE_ROLE found)');

            server.middlewares.use(async (req, res, next) => {
                const url = new URL(req.url, `http://${req.headers.host}`);
                const pathname = url.pathname;

                // Handle CORS preflight for all /api/
                if (pathname.startsWith('/api/')) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Kaizen-Key');
                    if (req.method === 'OPTIONS') {
                        res.statusCode = 204;
                        res.end();
                        return;
                    }
                }

                // Handle /api/v1/srs
                if (pathname === '/api/v1/srs') {
                    let quality = url.searchParams.get('quality');
                    let repetitions = url.searchParams.get('repetitions') || 0;
                    let interval = url.searchParams.get('interval') || 1;
                    let easeFactor = url.searchParams.get('easeFactor') || 2.5;

                    if (req.method === 'POST') {
                        try {
                            const chunks = [];
                            for await (const chunk of req) chunks.push(chunk);
                            const raw = Buffer.concat(chunks).toString();
                            if (raw) {
                                const b = JSON.parse(raw);
                                quality = b.quality;
                                repetitions = b.repetitions ?? repetitions;
                                interval = b.interval ?? interval;
                                easeFactor = b.easeFactor ?? easeFactor;
                            }
                        } catch {}
                    }

                    const q = Math.max(0, Math.min(5, Number(quality) || 0));
                    let newRep = Number(repetitions) || 0;
                    let newInt = Number(interval) || 1;
                    let newEF = Number(easeFactor) || 2.5;

                    if (q >= 3) {
                        if (newRep === 0) newInt = 1;
                        else if (newRep === 1) newInt = 6;
                        else newInt = Math.round(newInt * newEF);
                        newRep += 1;
                    } else {
                        newRep = 0;
                        newInt = 1;
                    }
                    newEF = Math.max(1.3, newEF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
                    const nextDate = new Date();
                    nextDate.setDate(nextDate.getDate() + newInt);

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({
                        success: true,
                        data: {
                            repetitions: newRep,
                            interval: newInt,
                            easeFactor: Math.round(newEF * 100) / 100,
                            nextReviewDate: nextDate.toISOString(),
                            dueInDays: newInt
                        }
                    }));
                    return;
                }

                // Handle /api/v1/flashcards-generate
                if (pathname === '/api/v1/flashcards-generate') {
                    res.setHeader('Content-Type', 'application/json');
                    try {
                        const chunks = [];
                        for await (const chunk of req) chunks.push(chunk);
                        const raw = Buffer.concat(chunks).toString();
                        const b = raw ? JSON.parse(raw) : {};
                        const topic = b.topic || 'General Topic';
                        const count = b.count || 3;

                        const mockCards = [
                            { front: `${topic} - Term 1`, back: `${topic} bo'yicha asosiy tushuncha va ta'rif`, example: `Sample sentence for ${topic}.` },
                            { front: `${topic} - Term 2`, back: `Amaliy qo'llanilishi va misol`, example: `Practical application of ${topic}.` },
                            { front: `${topic} - Term 3`, back: `Muhim qoida yoki qonuniyat`, example: `Key principle of ${topic}.` }
                        ].slice(0, count);

                        res.end(JSON.stringify({ success: true, count: mockCards.length, data: mockCards }));
                    } catch {
                        res.end(JSON.stringify({ success: true, data: [] }));
                    }
                    return;
                }

                // Handle /api/v1/ielts-evaluate
                if (pathname === '/api/v1/ielts-evaluate') {
                    res.setHeader('Content-Type', 'application/json');
                    try {
                        const chunks = [];
                        for await (const chunk of req) chunks.push(chunk);
                        const raw = Buffer.concat(chunks).toString();
                        const b = raw ? JSON.parse(raw) : {};
                        const essay = b.essay || '';

                        const words = essay.trim().split(/\s+/).filter(Boolean).length;
                        const band = words > 150 ? 7.5 : words > 80 ? 6.5 : 5.5;

                        res.end(JSON.stringify({
                            success: true,
                            data: {
                                overallBand: band,
                                scores: {
                                    taskAchievement: band,
                                    coherenceAndCohesion: band,
                                    lexicalResource: band,
                                    grammaticalRange: band
                                },
                                summary: "Well-structured essay with cohesive paragraph transitions and appropriate academic vocabulary.",
                                strengths: ["Good topic progression", "Relevant contextual arguments"],
                                improvements: ["Consider expanding on complex compound sentences"],
                                correctedEssay: essay
                            }
                        }));
                    } catch {
                        res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
                    }
                    return;
                }

                if (!url.pathname.startsWith('/api/telegram')) {
                    return next();
                }

                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Method not allowed' }));
                    return;
                }

                // Parse body
                let body = {};
                try {
                    const chunks = [];
                    for await (const chunk of req) {
                        chunks.push(chunk);
                    }
                    const raw = Buffer.concat(chunks).toString();
                    if (raw) body = JSON.parse(raw);
                } catch {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Invalid JSON body' }));
                    return;
                }

                const sendJson = (status, data) => {
                    res.statusCode = status;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                };

                try {
                    const { pathname } = url;
                    let userId = body.userId;

                    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
                    if (authHeader && authHeader.startsWith('Bearer ')) {
                        const token = authHeader.substring(7).trim();
                        try {
                            const { data: { user } } = await supabase.auth.getUser(token);
                            if (user?.id) userId = user.id;
                        } catch {}
                    }

                    if (!isValidUuid(userId)) {
                        return sendJson(400, { error: 'Invalid or missing user ID / authentication token' });
                    }

                    // POST /api/telegram/generate-code
                    if (pathname.includes('generate-code')) {
                        // Check if already linked
                        const { data: existing } = await supabase
                            .from('telegram_users')
                            .select('*')
                            .eq('user_id', userId)
                            .maybeSingle();

                        if (existing) {
                            return sendJson(200, { error: 'Telegram allaqachon ulangan', linked: true, account: existing });
                        }

                        // Delete old unused codes
                        await supabase.from('telegram_link_codes').delete().eq('user_id', userId).eq('used', false);

                        // Generate and insert
                        const code = generateCode();
                        const { data, error } = await supabase
                            .from('telegram_link_codes')
                            .insert({ user_id: userId, code })
                            .select()
                            .maybeSingle();

                        if (error || !data) {
                            console.error('Code insert error:', error);
                            return sendJson(500, { error: 'Kod yaratishda xatolik', details: error?.message });
                        }

                        return sendJson(200, { code: data.code, expires_at: data.expires_at });
                    }

                    // POST /api/telegram/check-link
                    if (pathname.includes('check-link')) {
                        try {
                            const { data, error } = await supabase
                                .from('telegram_users')
                                .select('*')
                                .eq('user_id', userId)
                                .maybeSingle();

                            if (error) {
                                return sendJson(200, { linked: false, account: null });
                            }
                            return sendJson(200, { linked: !!data, account: data });
                        } catch {
                            return sendJson(200, { linked: false, account: null });
                        }
                    }

                    // POST /api/telegram/unlink
                    if (pathname.includes('unlink')) {
                        await supabase.from('telegram_users').delete().eq('user_id', userId);
                        return sendJson(200, { success: true });
                    }

                    // POST /api/telegram/toggle-notifications
                    if (pathname.includes('toggle-notifications')) {
                        const { enabled } = body;
                        await supabase
                            .from('telegram_users')
                            .update({ notifications_enabled: enabled })
                            .eq('user_id', userId);

                        return sendJson(200, { success: true });
                    }

                    // POST /api/telegram/send-test
                    if (pathname.includes('send-test')) {
                        const { text } = body;
                        const { data: account } = await supabase
                            .from('telegram_users')
                            .select('*')
                            .eq('user_id', userId)
                            .maybeSingle();

                        if (!account || !account.chat_id) {
                            return sendJson(404, { error: 'Telegram akkaunt topilmadi' });
                        }

                        if (!botToken) {
                            return sendJson(500, { error: 'Bot token sozlanmagan' });
                        }

                        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                chat_id: account.chat_id,
                                text: text || '🔔 Test xabarnomasi',
                                parse_mode: 'HTML',
                                ...(body.reply_markup ? { reply_markup: body.reply_markup } : {})
                            }),
                        });
                        const result = await response.json();
                        return sendJson(200, { ok: result.ok, result });
                    }

                    // Unknown route
                    return next();

                } catch (err) {
                    console.error('Telegram API error:', err);
                    sendJson(500, { error: 'Internal server error' });
                }
            });
        },
    };
}
