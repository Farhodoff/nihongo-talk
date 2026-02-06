import { supabase } from '../lib/supabase';

interface TelegramUser {
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
        try {
            // Check if user already has an active link
            const { data: existing } = await supabase
                .from('telegram_users')
                .select('*')
                .eq('user_id', userId)
                .single();

            if (existing) {
                throw new Error('Telegram already linked. Unlink first.');
            }

            // Generate unique code
            let code = this.generateCode();
            let attempts = 0;

            // Ensure code is unique
            while (attempts < 10) {
                const { data: existingCode } = await supabase
                    .from('telegram_link_codes')
                    .select('code')
                    .eq('code', code)
                    .eq('used', false)
                    .single();

                if (!existingCode) break;
                code = this.generateCode();
                attempts++;
            }

            // Create link code
            const { data, error } = await supabase
                .from('telegram_link_codes')
                .insert({
                    user_id: userId,
                    code: code,
                })
                .select()
                .single();

            if (error) throw error;

            return {
                code: data.code,
                expires_at: data.expires_at,
            };
        } catch (error) {
            console.error('Error generating link code:', error);
            return null;
        }
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
            // Find valid code
            const { data: linkCode, error: codeError } = await supabase
                .from('telegram_link_codes')
                .select('*')
                .eq('code', code)
                .eq('used', false)
                .gt('expires_at', new Date().toISOString())
                .single();

            if (codeError || !linkCode) {
                return null; // Invalid or expired code
            }

            // Create telegram_users record
            const { error: linkError } = await supabase
                .from('telegram_users')
                .insert({
                    user_id: linkCode.user_id,
                    telegram_id: telegramId,
                    telegram_username: username,
                    telegram_first_name: firstName,
                    telegram_last_name: lastName,
                    chat_id: chatId,
                });

            if (linkError) throw linkError;

            // Mark code as used
            await supabase
                .from('telegram_link_codes')
                .update({ used: true })
                .eq('id', linkCode.id);

            return linkCode.user_id;
        } catch (error) {
            console.error('Error verifying link code:', error);
            return null;
        }
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
                .single();

            if (error) return null;
            return data;
        } catch (error) {
            console.error('Error getting linked account:', error);
            return null;
        }
    }

    /**
     * Unlink Telegram account
     */
    async unlinkAccount(userId: string): Promise<boolean> {
        try {
            const { error } = await supabase
                .from('telegram_users')
                .delete()
                .eq('user_id', userId);

            return !error;
        } catch (error) {
            console.error('Error unlinking account:', error);
            return false;
        }
    }

    /**
     * Update notification settings
     */
    async updateNotificationSettings(
        userId: string,
        enabled: boolean
    ): Promise<boolean> {
        try {
            const { error } = await supabase
                .from('telegram_users')
                .update({ notifications_enabled: enabled })
                .eq('user_id', userId);

            return !error;
        } catch (error) {
            console.error('Error updating notification settings:', error);
            return false;
        }
    }

    /**
     * Send a notification to user via Telegram (future)
     */
    async sendNotification(userId: string, message: string): Promise<boolean> {
        // This will be implemented later when we add notification Edge Function
        console.log('Sending notification to user:', userId, message);
        return true;
    }
}

export const telegramService = new TelegramService();
export default telegramService;
