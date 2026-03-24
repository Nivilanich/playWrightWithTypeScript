import { test, expect } from '@playwright/test';

test('multi-context alert and popup handling', async ({ browser }, testInfo) => {
  // --- Context 1: Handle Popup Window ---
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto('https://demoqa.com/browser-windows');
  await expect(page1).toHaveURL(/browser-windows/);
  await page1.screenshot({ path: `screenshots/context1_page1_${testInfo.title}.png` });

  const [popup] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.evaluate(() => {
      window.open('https://demoqa.com/sample', '_blank');
    }),
  ]);
  await popup.waitForLoadState();
  await expect(popup).toHaveURL(/sample/);
  await popup.screenshot({ path: `screenshots/context1_popup_${testInfo.title}.png` });
  await context1.close();

  // --- Context 2: Handle Delayed Alert ---
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page2.goto('https://demoqa.com/alerts');
  await expect(page2).toHaveURL(/alerts/);
  await page2.screenshot({ path: `screenshots/context2_alert_${testInfo.title}.png` });

  page2.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('This alert appeared after 5 seconds');
    await dialog.accept();
  });

  await page2.click('#timerAlertButton');
  await page2.waitForTimeout(6000); // let alert appear
  await context2.close();

  // --- Context 3: Handle Confirm Alert ---
  const context3 = await browser.newContext();
  const page3 = await context3.newPage();

  await page3.goto('https://demoqa.com/alerts');
  await expect(page3).toHaveURL(/alerts/);
  await page3.screenshot({ path: `screenshots/context3_confirm_${testInfo.title}.png` });

  page3.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.accept(); // or dialog.dismiss() for Cancel
  });

  await page3.click('#confirmButton');
  await expect(page3.locator('#confirmResult')).toContainText('You selected Ok');
  await context3.close();
});
