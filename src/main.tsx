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
registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
