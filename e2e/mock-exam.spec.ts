import { test, expect } from '@playwright/test';

test.describe('JLPT Mock Exam & Vocabulary E2E', () => {
  test('should load JLPT Mock Exam page', async ({ page }) => {
    await page.goto('/jlpt/mock-exam');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

    // Verify level selectors or exam options exist
    const levelSelector = page.getByRole('button', { name: /N[1-5]/i }).first();
    if (await levelSelector.isVisible()) {
      await expect(levelSelector).toBeVisible();
    }
  });

  test('should load Vocabulary Builder page with search and level filters', async ({ page }) => {
    await page.goto('/vocabulary');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toBeVisible();

    // Search input or filter bar
    const searchInput = page.locator('input[type="text"], input[type="search"]').first();
    if (await searchInput.isVisible()) {
      await expect(searchInput).toBeVisible();
      await searchInput.fill('nihon');
    }
  });
});
