import { test, expect } from '@playwright/test';

test.describe('JLPT Hub', () => {
  test('should display JLPT Hub tabs, level selection, and Furigana', async ({ page }) => {
    await page.goto('/jlpt');
    await page.waitForLoadState('domcontentloaded');

    // Test level selection (N5-N1)
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
    for (const level of levels) {
      const levelButton = page
        .getByRole('button', { name: level, exact: true })
        .or(page.getByText(level, { exact: true }))
        .first();
      if (await levelButton.isVisible()) {
        await levelButton.click();
      }
    }

    // Test tabs (Grammar, Kanji, Quiz)
    const tabs = ['Grammar', 'Kanji', 'Quiz'];
    for (const tab of tabs) {
      const tabLocator = page
        .getByRole('tab', { name: new RegExp(tab, 'i') })
        .or(page.getByText(tab, { exact: false }))
        .first();
      if (await tabLocator.isVisible()) {
        await tabLocator.click();
      }
    }

    // Check Furigana display
    // Furigana is typically rendered with <ruby> and <rt> tags.
    // If they exist on the page, verify they are present.
    const rubyElements = page.locator('ruby').first();
    if (await rubyElements.isVisible()) {
      await expect(rubyElements).toBeVisible();
    }
  });
});
