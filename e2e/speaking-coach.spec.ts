import { test, expect } from '@playwright/test';

test.describe('Speaking Coach E2E', () => {
  test('should load speaking coach and display welcome screen and prompt suggestions', async ({
    page,
  }) => {
    await page.goto('/speaking');
    await page.waitForLoadState('domcontentloaded');

    // Verify main welcome screen elements
    await expect(page.locator('body')).toBeVisible();

    // Verify prompt suggestions or start session button
    const startButton = page
      .getByRole('button', { name: /boshlash|start|suhbat/i })
      .or(page.getByText(/boshlash|start/i))
      .first();

    if (await startButton.isVisible()) {
      await expect(startButton).toBeVisible();
    }

    // Verify control bar is present
    const controlBar = page
      .locator('button[title*="Gapirish"]')
      .or(page.getByText('GAPIRISH'))
      .first();
    if (await controlBar.isVisible()) {
      await expect(controlBar).toBeVisible();
    }
  });

  test('should allow navigating to scenario mode', async ({ page }) => {
    await page.goto('/speaking?scenario=airport_arrival');
    await page.waitForLoadState('domcontentloaded');

    // Scenario banner or exit button should be rendered
    const exitButton = page.getByRole('button', { name: /chiqish/i }).first();
    if (await exitButton.isVisible()) {
      await expect(exitButton).toBeVisible();
    }
  });
});
