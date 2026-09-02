import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to key pages', async ({ page }) => {
    // Navigate to Landing Page
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Define the key routes to test
    const routes = [
      { path: '/jlpt', name: 'JLPT Hub' },
      { path: '/flashcards', name: 'Flashcard Decks' },
      { path: '/speaking', name: 'Speaking Coach' },
      { path: '/settings', name: 'Settings' },
      { path: '/leaderboard', name: 'Leaderboard' },
    ];

    for (const route of routes) {
      await page.goto(route.path);
      // Wait for the page to be reasonably loaded without relying purely on networkidle
      // which might hang if there are polling requests.
      await page.waitForLoadState('domcontentloaded');

      // Basic check that we don't have a crash (like a blank page or 404 text)
      // Since we don't know the exact UI, we ensure the URL changed correctly.
      await expect(page).toHaveURL(new RegExp(`.*${route.path}.*`));
    }
  });
});
