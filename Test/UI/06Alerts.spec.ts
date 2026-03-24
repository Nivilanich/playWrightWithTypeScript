import { test, expect } from "@playwright/test";

test.describe("DemoQA Alerts Handling", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
  });

  test("Handle Simple Alert (Click OK)", async ({ page }) => {
    page.once("dialog", async (dialog) => {
      console.log("Alert text:", dialog.message());
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toContain("You clicked a button");

      await dialog.accept(); // OK
    });

    await page.click("#alertButton");
  });

  test("Handle Timed Alert (Appears after 5 seconds)", async ({ page }) => {
    page.once("dialog", async (dialog) => {
      console.log("Timed alert text:", dialog.message());
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toContain("This alert appeared after 5 seconds");

      await dialog.accept(); // OK
    });

    await page.click("#timerAlertButton");
  });

  test("Handle Confirm Alert - Click OK", async ({ page }) => {
    page.once("dialog", async (dialog) => {
      console.log("Confirm text:", dialog.message());
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toContain("Do you confirm action?");

      await dialog.accept(); // OK
    });

    await page.click("#confirmButton");

    // Result validation
    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok");
  });

  test("Handle Confirm Alert - Click Cancel", async ({ page }) => {
    page.once("dialog", async (dialog) => {
      console.log("Confirm text:", dialog.message());
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toContain("Do you confirm action?");

      await dialog.dismiss(); // Cancel
    });

    await page.click("#confirmButton");

    // Result validation
    await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel");
  });

  test("Handle Prompt Alert - Enter Text and Click OK", async ({ page }) => {
    const inputText = "Laksha";

    page.once("dialog", async (dialog) => {
      console.log("Prompt text:", dialog.message());
      expect(dialog.type()).toBe("prompt");
      expect(dialog.message()).toContain("Please enter your name");

      await dialog.accept(inputText); // enter text + OK
    });

    await page.click("#promtButton");

    // Result validation
    await expect(page.locator("#promptResult")).toHaveText(
      `You entered ${inputText}`
    );
  });
});

test("Understand alert event properties", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");
  //page.on("dialog",)
  // dialog.message();
  // dialog.type();
  // dialog.defaultValue();
  // dialog.accept();
  // dialog.dismiss();
  // dialog.prompt();

}