import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { initErrorTracking } from './lib/errorTracking';
import { installConsoleShield } from './lib/consoleFilter';

import './index.css';

// Xavfsiz konsol filtri va Cookie tozalagichni faollashtirish
installConsoleShield();

// Sentry / Error tracking tizimini ishga tushirish
initErrorTracking();

// PWA service worker-ni ro'yxatdan o'tkazish
registerSW({
    immediate: true,
    onRegisterError(error) {
        console.warn('[PWA] ServiceWorker registration ignored:', error);
    }
});

// Yangi deploydan keyin keshdagi eski chunklar 404 berganda avtomatik yangilash
window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    console.warn('[Vite] Dynamic import preload error detected. Reloading page for latest assets...');
    window.location.reload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
