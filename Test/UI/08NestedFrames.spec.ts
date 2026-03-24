import { test, expect } from "@playwright/test";

test.describe("DemoQA Nested Frames Handling", () => {
  test("Validate text inside Parent Frame and Child Frame", async ({ page }) => {
    // Step 1: Navigate to Nested Frames page
    await page.goto("https://demoqa.com/nestedframes");
    await page.frameLocator("#frame1").frameLocator("iframe2").getByPlaceholder("Type your name").fill("Laksha");
    
    //await page.locator("input >>> span").click();

  
    
  
    // -----------------------------
    // Parent Frame Validation
    // -----------------------------
    const parentFrame = page.frameLocator("#frame1");

    // Parent frame has text: "Parent frame"
    await expect(parentFrame.locator("body")).toContainText("Parent frame");

    // -----------------------------
    // Child Frame Validation
    // -----------------------------
    // Child iframe exists inside the parent iframe
    const childFrame = parentFrame.frameLocator("iframe");

    // Child frame has text: "Child Iframe"
    await expect(childFrame.locator("body")).toContainText("Child Iframe");
  });
});
