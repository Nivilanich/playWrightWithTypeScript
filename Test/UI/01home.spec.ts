//import { a } from "../../playwright-report/trace/assets/defaultSettingsView-BEpdCv1S";
import { test, expect } from "../../src/pages/fixtures";
test.beforeEach(async ({page}) => {
  console.log("Starting Home Page Tests");
  await page.goto('/');
});
test("Open Elements section from Home page", async ({ page, pages }) => {
  await pages.homePage.openElementsSection();
  // primary card on Home page should be visible (soft assertion)
  await expect.soft(pages.homePage.elementsCard).toBeVisible();

  // navigation: URL should include 'elements'
  await expect.soft(page).toHaveURL(/elements/);

  // Elements left menu items should be visible
  await expect.soft(pages.elementsPage.textBox).toBeVisible();
  await expect.soft(pages.elementsPage.checkBox).toBeVisible();
  await expect.soft(pages.elementsPage.links).toBeVisible();
  await expect.soft(pages.elementsPage.buttons).toBeVisible();

  // ensure at least one left-menu item contains expected text
  await expect.soft(pages.elementsPage.textBox).toContainText('Text Box');

});

test("Open Forms section from Home page", async ({ pages }) => {
  await pages.homePage.openFormsSection();
});
