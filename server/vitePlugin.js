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

                if (!url.pathname.startsWith('/api/telegram/')) {
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

                    // POST /api/telegram/generate-code
                    if (pathname === '/api/telegram/generate-code') {
                        const { userId } = body;
                        if (!userId) return sendJson(400, { error: 'userId is required' });

                        // Check if already linked
                        const { data: existing } = await supabase
                            .from('telegram_users')
                            .select('*')
                            .eq('user_id', userId)
                            .maybeSingle();

                        if (existing) {
                            return sendJson(409, { error: 'Telegram allaqachon ulangan', linked: true, account: existing });
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
                    if (pathname === '/api/telegram/check-link') {
                        const { userId } = body;
                        if (!userId) return sendJson(400, { error: 'userId is required' });

                        const { data } = await supabase
                            .from('telegram_users')
                            .select('*')
                            .eq('user_id', userId)
                            .maybeSingle();

                        return sendJson(200, { linked: !!data, account: data });
                    }

                    // POST /api/telegram/unlink
                    if (pathname === '/api/telegram/unlink') {
                        const { userId } = body;
                        if (!userId) return sendJson(400, { error: 'userId is required' });

                        await supabase.from('telegram_users').delete().eq('user_id', userId);
                        return sendJson(200, { success: true });
                    }

                    // POST /api/telegram/toggle-notifications
                    if (pathname === '/api/telegram/toggle-notifications') {
                        const { userId, enabled } = body;
                        if (!userId) return sendJson(400, { error: 'userId is required' });

                        await supabase
                            .from('telegram_users')
                            .update({ notifications_enabled: enabled })
                            .eq('user_id', userId);

                        return sendJson(200, { success: true });
                    }

                    // POST /api/telegram/send-test
                    if (pathname === '/api/telegram/send-test') {
                        const { userId, text } = body;
                        if (!userId) return sendJson(400, { error: 'userId is required' });

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
                            }),
                        });
                        const result = await response.json();
                        return sendJson(200, { ok: result.ok });
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
