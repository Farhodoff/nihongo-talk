import { supabase } from '../lib/supabase';

export interface TelegramUser {
    id: string;
    user_id: string;
    telegram_id: number;
    telegram_username?: string;
    telegram_first_name?: string;
    telegram_last_name?: string;
    chat_id: number;
    is_active: boolean;
    notifications_enabled: boolean;
}

class TelegramService {
    /**
     * Generate a unique 6-character linking code
     */
    private generateCode(): string {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude similar chars
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    /**
     * Generate a linking code for a user
     * Returns the code that user will enter in Telegram bot
     */
    async generateLinkCode(userId: string): Promise<{ code: string; expires_at: string } | null> {
        // 1. Check if user already has an active link
        try {
            const { data: existing } = await supabase
                .from('telegram_users')
                .select('*')
                .eq('user_id', userId)
                .maybeSingle();

            if (existing) {
                throw new Error('Telegram akkaunti allaqachon ulangan. Avval uzing.');
            }
        } catch (err: any) {
            if (err?.message?.includes('allaqachon ulangan')) {
                throw err;
            }
        }

        // Also check local cache if linked
        const localAccountStr = localStorage.getItem(`study_planner_telegram_user_${userId}`);
        if (localAccountStr) {
            try {
                const localAccount = JSON.parse(localAccountStr);
                if (localAccount && localAccount.is_active) {
                    throw new Error('Telegram akkaunti allaqachon ulangan. Avval uzing.');
                }
            } catch (e) {}
        }

        // 2. Generate unique code and attempt insertion into Supabase
        let code = this.generateCode();

        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const { data, error } = await supabase
                    .from('telegram_link_codes')
                    .insert({
                        user_id: userId,
                        code: code,
                    })
                    .select()
                    .maybeSingle();

                if (!error && data) {
                    return {
                        code: data.code,
                        expires_at: data.expires_at,
                    };
                }

                if (error) {
                    console.warn(`Supabase link code creation attempt ${attempt + 1} notice:`, error.message || error);
                }
            } catch (err) {
                console.warn(`Link code creation network attempt ${attempt + 1} notice:`, err);
            }
            code = this.generateCode();
        }

        // 3. Resilient Fallback: Generate local 6-digit code valid for 15 minutes
        const fallbackCode = this.generateCode();
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

        try {
            const localCodes = JSON.parse(localStorage.getItem('study_planner_telegram_codes') || '[]');
            localCodes.push({ userId, code: fallbackCode, expires_at: expiresAt, used: false });
            localStorage.setItem('study_planner_telegram_codes', JSON.stringify(localCodes));
        } catch (e) {}

        return {
            code: fallbackCode,
            expires_at: expiresAt,
        };
    }

    /**
     * Verify and use a linking code (called by Telegram bot)
     * Returns user_id if valid
     */
    async verifyLinkCode(
        code: string,
        telegramId: number,
        chatId: number,
        username?: string,
        firstName?: string,
        lastName?: string
    ): Promise<string | null> {
        try {
            const cleanCode = (code || '').trim().toUpperCase();
            // Find valid code in Supabase
            const { data: linkCode, error: codeError } = await supabase
                .from('telegram_link_codes')
                .select('*')
                .ilike('code', cleanCode)
                .eq('used', false)
                .gt('expires_at', new Date().toISOString())
                .maybeSingle();

            if (!codeError && linkCode) {
                // Create or update telegram_users record in Supabase
                await supabase
                    .from('telegram_users')
                    .upsert({
                        user_id: linkCode.user_id,
                        telegram_id: telegramId,
                        telegram_username: username,
                        telegram_first_name: firstName,
                        telegram_last_name: lastName,
                        chat_id: chatId,
                        is_active: true,
                        notifications_enabled: true,
                        updated_at: new Date().toISOString()
                    }, { onConflict: 'telegram_id' });

                // Mark code as used
                await supabase
                    .from('telegram_link_codes')
                    .update({ used: true })
                    .eq('id', linkCode.id);

                return linkCode.user_id;
            }
        } catch (error) {
            console.error('Error verifying link code via Supabase:', error);
        }

        // Local codes fallback check
        try {
            const localCodes = JSON.parse(localStorage.getItem('study_planner_telegram_codes') || '[]');
            const foundIndex = localCodes.findIndex((c: any) => c.code === code && !c.used && new Date(c.expires_at).getTime() > Date.now());
            if (foundIndex !== -1) {
                const item = localCodes[foundIndex];
                item.used = true;
                localStorage.setItem('study_planner_telegram_codes', JSON.stringify(localCodes));

                const localAccount: TelegramUser = {
                    id: `tg_${Date.now()}`,
                    user_id: item.userId,
                    telegram_id: telegramId,
                    telegram_username: username,
                    telegram_first_name: firstName,
                    telegram_last_name: lastName,
                    chat_id: chatId,
                    is_active: true,
                    notifications_enabled: true
                };
                localStorage.setItem(`study_planner_telegram_user_${item.userId}`, JSON.stringify(localAccount));
                return item.userId;
            }
        } catch (e) {}

        return null;
    }

    /**
     * Get linked Telegram account for a user
     */
    async getLinkedAccount(userId: string): Promise<TelegramUser | null> {
        try {
            const { data, error } = await supabase
                .from('telegram_users')
                .select('*')
                .eq('user_id', userId)
                .maybeSingle();

            if (!error && data) {
                localStorage.setItem(`study_planner_telegram_user_${userId}`, JSON.stringify(data));
                return data;
            }
        } catch (error) {
            console.error('Error getting linked account via Supabase:', error);
        }

        // Fallback to local storage
        try {
            const localStr = localStorage.getItem(`study_planner_telegram_user_${userId}`);
            if (localStr) {
                return JSON.parse(localStr);
            }
        } catch (err) {
            console.error('Error reading local telegram user:', err);
        }

        return null;
    }

    /**
     * Unlink Telegram account for a user
     */
    async unlinkAccount(userId: string): Promise<boolean> {
        try {
            await supabase
                .from('telegram_users')
                .delete()
                .eq('user_id', userId);
        } catch (error) {
            console.error('Error unlinking account via Supabase:', error);
        }

        try {
            localStorage.removeItem(`study_planner_telegram_user_${userId}`);
        } catch (e) {
            console.error('Error clearing local telegram user:', e);
        }

        return true;
    }

    /**
     * Update notification settings
     */
    async updateNotificationSettings(userId: string, enabled: boolean): Promise<boolean> {
        try {
            await supabase
                .from('telegram_users')
                .update({ notifications_enabled: enabled })
                .eq('user_id', userId);
        } catch (error) {
            console.error('Error updating notification settings via Supabase:', error);
        }

        try {
            const localStr = localStorage.getItem(`study_planner_telegram_user_${userId}`);
            if (localStr) {
                const account = JSON.parse(localStr);
                account.notifications_enabled = enabled;
                localStorage.setItem(`study_planner_telegram_user_${userId}`, JSON.stringify(account));
            }
        } catch (e) {
            console.error('Error updating local notification settings:', e);
        }

        return true;
    }

    /**
     * Send a notification message to a user via Telegram
     */
    async sendNotification(userId: string, text: string): Promise<boolean> {
        try {
            const account = await this.getLinkedAccount(userId);
            if (!account || !account.is_active || !account.notifications_enabled) {
                return false;
            }

            const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
            if (!botToken) {
                console.warn('VITE_TELEGRAM_BOT_TOKEN is not set');
                return false;
            }

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: account.chat_id,
                    text: text,
                    parse_mode: 'HTML',
                }),
            });

            const data = await response.json();
            return data.ok;
        } catch (error) {
            console.error('Error sending Telegram notification:', error);
            return false;
        }
    }
}

export const telegramService = new TelegramService();
export default telegramService;
