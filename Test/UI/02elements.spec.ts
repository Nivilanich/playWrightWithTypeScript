import { test, expect } from "../../src/pages/fixtures";

test.beforeEach(async ({ page, pages }) => {
  console.log("Starting Elements Page Tests");

  
  await page.goto('/elements', { waitUntil: 'domcontentloaded' });

  //await pages.homePage.openElementsSection(); 
});

test('Open Text Box page', async ({ page, pages }) => {
  await pages.elementsPage.openTextBox();
  await expect(page).toHaveURL(/text-box/);
});

test('Open Check Box page', async ({ page, pages }) => {
  await pages.elementsPage.openCheckBox();
  await expect(page).toHaveURL(/checkbox/);
});

test('Open Radio Button page', async ({ page, pages }) => {
  await pages.elementsPage.openRadioButton();
  await expect(page).toHaveURL(/radio-button/);
});

test('Open Web Tables page', async ({ page, pages }) => {
  await pages.elementsPage.openWebTables();
  await expect(page).toHaveURL(/webtables/);
});

test('Open Buttons page', async ({ page, pages }) => {
  await pages.elementsPage.openButtons();
  await expect(page).toHaveURL(/buttons/);
});

test('Open Links page', async ({ page, pages }) => {
  await pages.elementsPage.openLinks();
  await expect(page).toHaveURL(/links/);
});

test('Open Broken Links - Images page', async ({ page, pages }) => {
  await pages.elementsPage.openBrokenLinksImages();
  await expect(page).toHaveURL(/broken/);
});

test('Open Upload and Download page', async ({ page, pages }) => {
  await pages.elementsPage.openUploadDownload();
  await expect(page).toHaveURL(/upload-download/);
});

test('Open Dynamic Properties page', async ({ page, pages }) => {
  await pages.elementsPage.openDynamicProperties();
  await expect(page).toHaveURL(/dynamic-properties/);
});
