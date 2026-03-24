import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

let homePage: HomePage;
let elementsPage: ElementsPage;

Given('user is on DemoQA home page', async function () {
  await this.page.goto('https://demoqa.com/');
  homePage = new HomePage(this.page);
  elementsPage = new ElementsPage(this.page);
});

When('user opens Elements section', async function () {
  await homePage.openElementsSection();
});

Then('Elements section should be displayed with left menu items', async function () {
  await expect(homePage.elementsCard).toBeVisible();
  await expect(this.page).toHaveURL(/elements/);
  await expect(elementsPage.textBox).toBeVisible();
  await expect(elementsPage.checkBox).toBeVisible();
  await expect(elementsPage.links).toBeVisible();
  await expect(elementsPage.buttons).toBeVisible();
  await expect(elementsPage.textBox).toContainText('Text Box');
});

When('user opens Forms section', async function () {
  await homePage.openFormsSection();
});

Then('Forms section should be displayed', async function () {
  await expect(this.page).toHaveURL(/forms/);
});
