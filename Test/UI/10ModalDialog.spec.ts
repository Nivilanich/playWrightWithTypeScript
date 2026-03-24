import { test, expect } from "@playwright/test";

test.describe("DemoQA Modal Dialogs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/modal-dialogs");
  });

  test("Handle Small Modal", async ({ page }) => {
    // Open Small Modal
    await page.click("#showSmallModal");

    // Validate modal is visible
    const modal = page.locator(".modal-content");
    await expect(modal).toBeVisible();

    // Validate title
    await expect(page.locator("#example-modal-sizes-title-sm")).toHaveText(
      "Small Modal"
    );

    // Validate body text (partial check)
    await expect(page.locator(".modal-body")).toContainText(
      "This is a small modal"
    );

    // Close modal
    await page.click("#closeSmallModal");

    // Validate modal closed
    await expect(modal).toBeHidden();
  });

  test("Handle Large Modal", async ({ page }) => {
    // Open Large Modal
    await page.click("#showLargeModal");

    // Validate title
    await expect(page.locator("#example-modal-sizes-title-lg")).toHaveText(
      "Large Modal"
    );

    // Validate modal is visible
    const modal = page.locator(".modal-content");
    await expect(modal).toBeVisible();

    // Close modal (Large modal close button)
    await page.click("#closeLargeModal");

    // Validate modal closed
    await expect(modal).toBeHidden();
  });
});
