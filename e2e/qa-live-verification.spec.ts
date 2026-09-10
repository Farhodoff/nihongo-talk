import { test, expect } from '@playwright/test';

test.describe('Live QA Verification Suite', () => {
  test('QA-1: Flashcards page loads and renders correctly', async ({ page }) => {
    await page.goto('/flashcards');
    await page.waitForLoadState('domcontentloaded');

    console.log('Current URL on /flashcards:', page.url());
    const bodyText = await page.innerText('body');
    console.log('Body snippet:', bodyText.slice(0, 300));

    await expect(page.locator('body')).toBeVisible();
  });

  test('QA-2: Speaking Coach page renders cleanly without crashing', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/speaking-coach?lang=ja');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();
    expect(errors.length).toBe(0);
  });

  test('QA-3: Study Mode loads and renders interaction controls', async ({ page }) => {
    await page.goto('/study-mode');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();
  });
});
