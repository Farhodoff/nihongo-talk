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

/**
 * TelegramService — uses local /api/telegram/* endpoints to communicate with Supabase
 * server-side, bypassing any browser-level network restrictions (adblockers, VPN, CORS).
 */
class TelegramService {
    private async apiCall<T>(endpoint: string, body: Record<string, unknown>): Promise<T> {
        const response = await fetch(`/api/telegram/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        return response.json();
    }

    /**
     * Generate a linking code for a user (server-side via local API)
     */
    async generateLinkCode(userId: string): Promise<{ code: string; expires_at: string } | null> {
        try {
            const result = await this.apiCall<{
                code?: string;
                expires_at?: string;
                error?: string;
                linked?: boolean;
                account?: TelegramUser;
            }>('generate-code', { userId });

            if (result.linked && result.account) {
                throw new Error('Telegram akkaunti allaqachon ulangan. Avval uzing.');
            }

            if (result.code && result.expires_at) {
                return { code: result.code, expires_at: result.expires_at };
            }

            console.warn('Code generation failed:', result.error);
            return null;
        } catch (err: unknown) {
            if (err instanceof Error && err.message.includes('allaqachon ulangan')) {
                throw err;
            }
            console.error('generateLinkCode error:', err);
            return null;
        }
    }

    /**
     * Check if user has a linked Telegram account (server-side)
     */
    async getLinkedAccount(userId: string): Promise<TelegramUser | null> {
        try {
            const result = await this.apiCall<{
                linked: boolean;
                account: TelegramUser | null;
            }>('check-link', { userId });

            return result.account || null;
        } catch (err) {
            console.error('getLinkedAccount error:', err);
            return null;
        }
    }

    /**
     * Unlink Telegram account
     */
    async unlinkAccount(userId: string): Promise<boolean> {
        try {
            const result = await this.apiCall<{ success: boolean }>('unlink', { userId });
            return result.success;
        } catch (err) {
            console.error('unlinkAccount error:', err);
            return false;
        }
    }

    /**
     * Update notification settings
     */
    async updateNotificationSettings(userId: string, enabled: boolean): Promise<boolean> {
        try {
            const result = await this.apiCall<{ success: boolean }>('toggle-notifications', { userId, enabled });
            return result.success;
        } catch (err) {
            console.error('updateNotificationSettings error:', err);
            return false;
        }
    }

    /**
     * Send a test notification via Telegram
     */
    async sendNotification(userId: string, text: string): Promise<boolean> {
        try {
            const result = await this.apiCall<{ ok: boolean }>('send-test', { userId, text });
            return result.ok;
        } catch (err) {
            console.error('sendNotification error:', err);
            return false;
        }
    }
}

export const telegramService = new TelegramService();
export default telegramService;
