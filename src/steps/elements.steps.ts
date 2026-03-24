import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ElementsPage } from '../pages/ElementsPage';
import { a } from '../../playwright-report/trace/assets/defaultSettingsView-BEpdCv1S';


let elementsPage: ElementsPage;


Given('user is on DemoQA Elements page', async function () {
await this.page.goto('https://demoqa.com/elements');
elementsPage = new ElementsPage(this.page);
});


When('user opens Text Box', async function () {
await elementsPage.openTextBox();
});


Then('Text Box page should be displayed', async function () {
await expect(this.page).toHaveURL(/text-box/);
});


When('user opens Check Box', async function () {
await elementsPage.openCheckBox();
});


Then('Check Box page should be displayed', async function () {
await expect(this.page).toHaveURL(/checkbox/);
});


When('user opens Radio Button', async function () {
await elementsPage.openRadioButton();
});


Then('Radio Button page should be displayed', async function () {
await expect(this.page).toHaveURL(/radio-button/);
});


When('user opens Web Tables', async function () {
  await elementsPage.openWebTables();
});
Then('Web Tables page should be displayed', async function () {
  await expect(this.page).toHaveURL(/webtables/);
});