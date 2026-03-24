import { test, expect } from '@playwright/test';

test('Context 1: open page and popup', async ({ page }, testInfo) => {
  // Navigate to the main page
  await page.goto('https://demoqa.com/browser-windows');
  await expect(page).toHaveURL(/browser-windows/);

  // Take screenshot
  await page.screenshot({ path: `screenshots/context1_page1_${testInfo.title}.png` });

  let popup;
  try {
    [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.evaluate(() => {
        window.open('https://demoqa.com/sample', '_blank');
      }),
    ]);

    await popup.waitForLoadState();
    await expect(popup).toHaveURL(/sample/);
    await popup.screenshot({ path: `screenshots/context1_popup_${testInfo.title}.png` });
  } catch (err) {
    console.error('Popup failed:', err);
    throw err;
  }
});

test('Context 2: open automation practice form', async ({ page }, testInfo) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await expect(page).toHaveURL(/automation-practice-form/);
  await page.screenshot({ path: `screenshots/context2_page2_${testInfo.title}.png` });
});

test('Context 3: Handle Alert', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  await expect(page).toHaveURL(/alerts/);

  page.once('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept(); // Accept the alert
  });

  // Trigger the alert
  await page.click('#alertButton');
});
