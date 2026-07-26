import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN || '';
const ENV = import.meta.env.MODE || 'development';

export const initErrorTracking = () => {
    if (!SENTRY_DSN) {
        console.info('ℹ️ Sentry DSN topilmadi. Xatoliklarni kuzatish faqat mahalliy konsol orqali ishlaydi.');
        return;
    }

    try {
        Sentry.init({
            dsn: SENTRY_DSN,
            environment: ENV,
            integrations: [
                Sentry.browserTracingIntegration(),
                Sentry.replayIntegration(),
            ],
            // Performance Monitoring
            tracesSampleRate: 1.0, 
            tracePropagationTargets: ["localhost", /^\//],
            // Session Replay
            replaysSessionSampleRate: 0.1,
            replaysOnErrorSampleRate: 1.0, 
        });
        console.log('🚀 Sentry xatoliklarni kuzatish tizimi muvaffaqiyatli ishga tushdi.');
    } catch (e) {
        console.warn('⚠️ Sentry-ni ishga tushirishda xatolik yuz berdi:', e);
    }
};

/**
 * Capture and log an exception manually to Sentry and console
 */
export const captureException = (error: any, context?: Record<string, any>) => {
    console.error('❌ [Kuzatilgan Xatolik]:', error, context || '');
    
    if (SENTRY_DSN) {
        Sentry.captureException(error, {
            extra: context
        });
    }
};

/**
 * Capture custom breadcrumb or info logs
 */
export const logBreadcrumb = (message: string, category?: string, data?: Record<string, any>) => {
    if (SENTRY_DSN) {
        Sentry.addBreadcrumb({
            category: category || 'app',
            message: message,
            data: data,
            level: 'info'
        });
    } else {
        console.debug(`[Info]: ${message}`, data || '');
    }
};
