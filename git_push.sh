#!/bin/bash
set -e

# 1. Assets and PWA
git add index.html vite.config.ts public/ src/components/GlobalAudioPlayer.tsx
git commit -m "refactor(assets): optimize assets, remove large audio, update PWA config"

# 2. Dead Code Removal
git add src/components/ResourceRecommendations.tsx src/components/UserRankBadge.tsx src/components/settings/PasswordChangeSection.tsx src/types/ErrorTypes.ts src/utils/aiAnalytics.ts src/utils/storage.ts src/utils/storage.test.ts src/pages/SettingsPage.tsx src/components/settings/AccountSection.tsx src/types/index.ts src/utils/notifications.ts src/services/NotificationManager.ts
git commit -m "refactor: remove unused dead code and clean up types" || true

# 3. Kanban Native DnD
git add src/pages/kanban/KanbanBoard.tsx package.json package-lock.json
git commit -m "refactor(kanban): replace external dnd library with native HTML5 drag and drop" || true

# 4. Japanese Mock Interview Simulator + Secure API Proxy
git add api/ src/utils/deepseek.ts src/utils/ai.ts .env.example src/App.tsx src/components/Layout.tsx src/pages/MockInterviewPage.tsx src/utils/interviewPrompts.ts
git commit -m "feat: add AI Japanese Mock Interview Simulator and secure Vercel edge proxy" || true

# 5. General UI, Accessibility and Remaining fixes
git add src/
git commit -m "fix: address general UI/UX, accessibility and calendar bugs from audit" || true

# Finally, push
git push origin main
