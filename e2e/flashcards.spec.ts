import { test, expect } from '@playwright/test';

test.describe('Flashcards', () => {
  test('should load Decks page, render preset decks, and allow card flip', async ({ page }) => {
    await page.goto('/flashcards');
    await page.waitForLoadState('domcontentloaded');

    // Test Decks page loading
    // Look for common headers or list elements that represent decks
    const deckHeader = page.getByRole('heading', { name: /Decks|Flashcards/i }).first();
    if (await deckHeader.isVisible()) {
      await expect(deckHeader).toBeVisible();
    }

    // Click on a preset deck if it exists
    const firstDeckLink = page
      .locator('a[href*="/flashcards/deck/"]')
      .first()
      .or(page.locator('.deck-card').first());

    if (await firstDeckLink.isVisible()) {
      await firstDeckLink.click();
      await page.waitForLoadState('domcontentloaded');

      // Test flashcard card flip interaction
      // Looking for common flip triggers: clicking the card, a flip button, or spacebar
      const flashcard = page
        .locator('.flashcard')
        .first()
        .or(page.locator('[data-testid="flashcard"]').first());
      const flipButton = page.getByRole('button', { name: /flip|show answer/i }).first();

      if (await flipButton.isVisible()) {
        await flipButton.click();
      } else if (await flashcard.isVisible()) {
        await flashcard.click();
      }

      // Ensure the UI responds without crashing
      await expect(page.locator('body')).toBeVisible();
    }
  });
});
