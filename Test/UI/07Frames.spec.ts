import { test, expect } from "@playwright/test";

test.describe("DemoQA Frames Handling", () => {
  test("Validate text inside frame1 and frame2", async ({ page }) => {
    // Step 1: Open DemoQA Frames page
    await page.goto("https://demoqa.com/frames");

    // -----------------------------
    // Frame 1 Validation
    // -----------------------------
    const frame1 = page.frameLocator("#frame1");
//page.frameLocator("#frame1");

    // Validate the heading text inside frame1
    await expect(frame1.locator("#sampleHeading")).toHaveText(
      "This is a sample page"
    );

    // -----------------------------
    // Frame 2 Validation
    // -----------------------------
    const frame2 = page.frameLocator("#frame2");

    // Validate the heading text inside frame2
    await expect(frame2.locator("#sampleHeading")).toHaveText(
      "This is a sample page"
    );
  });
});
