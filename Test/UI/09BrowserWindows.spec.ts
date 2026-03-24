import { test, expect } from "@playwright/test";

test.describe("DemoQA Browser Windows Handling", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows");
  });

  test("Handle New Tab", async ({ page, context }) => {
    // Wait for new tab to open
    const [newTab] = await Promise.all([
      context.waitForEvent("page"),           // listens for new page (tab)
      page.click("#tabButton"),               // click opens new tab
    ]);

    // Wait until new tab loads
    await newTab.waitForLoadState();
    // page.locator("input >>> span").click();
    // newTab.locator("input >>> span").click();
    // newTab.bringToFront();
    // Validate the heading inside new tab
    await expect(newTab.locator("#sampleHeading")).toHaveText(
      "This is a sample page"
    );

    // Optional: close tab
    await newTab.close();
  });

  test("Handle New Window", async ({ page, context }) => {
    const [newWindow] = await Promise.all([
      context.waitForEvent("page"),           // listens for new window (still page)
      page.click("#windowButton"),            // click opens new window
    ]);

    await newWindow.waitForLoadState();

    await expect(newWindow.locator("#sampleHeading")).toHaveText(
      "This is a sample page"
    );

    await newWindow.close();
  });

  test("Handle New Window Message", async ({ page, context }) => {
    const [messageWindow] = await Promise.all([
      context.waitForEvent("page"),
      page.click("#messageWindowButton"),
    ]);

    await messageWindow.waitForLoadState();

    // This window shows plain text in the body
    const bodyText = await messageWindow.locator("body").innerText();

    console.log("Message window text:", bodyText);

    // Validate it contains expected text
    expect(bodyText).toContain("Knowledge increases by sharing");

    await messageWindow.close();
  });
});
