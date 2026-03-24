import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ModalDialogPage } from '../pages/ModalDialogPage';

let modalPage: ModalDialogPage;

Given('user is on DemoQA Modal Dialogs page', async function () {
  await this.page.goto('https://demoqa.com/modal-dialogs');
  modalPage = new ModalDialogPage(this.page);
});

When('user opens Small Modal', async function () {
  await modalPage.openSmallModal();
});

Then('Small Modal should be visible with title {string} and body contains {string}', async function (title: string, bodyText: string) {
  await expect(modalPage.modalContent).toBeVisible();
  await expect(modalPage.smallTitle).toHaveText(title);
  await expect(modalPage.modalBody).toContainText(bodyText);
});

When('user closes Small Modal', async function () {
  await modalPage.closeSmall();
});

Then('Small Modal should be closed', async function () {
  await expect(modalPage.modalContent).toBeHidden();
});

When('user opens Large Modal', async function () {
  await modalPage.openLargeModal();
});

Then('Large Modal should be visible with title {string}', async function (title: string) {
  await expect(modalPage.modalContent).toBeVisible();
  await expect(modalPage.largeTitle).toHaveText(title);
});

When('user closes Large Modal', async function () {
  await modalPage.closeLarge();
});

Then('Large Modal should be closed', async function () {
  await expect(modalPage.modalContent).toBeHidden();
});
