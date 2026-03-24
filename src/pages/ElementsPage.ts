import { Page, Locator } from "playwright/test";

export class ElementsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Left menu items
  get textBox(): Locator {

    this.page.getByText('Text Box');

    this.page.locator('.element-list').getByText('Text Box');
    return this.page.locator('.element-list').getByText('Text Box');


  }

  get checkBox(): Locator {
    return this.page.locator('.element-list').getByText('Check Box');
  }

  get radioButton(): Locator {
    return this.page.locator('.element-list').getByText('Radio Button');
  }

  get webTables(): Locator {
    return this.page.locator('.element-list').getByText('Web Tables');
  }

  get buttons(): Locator {
    return this.page.locator('.element-list').getByText('Buttons');
  }

  get links(): Locator {
    this.page.getByText('Links', { exact: true });
    this.page.getByPlaceholder('FullName')
    return this.page.locator('.element-list').getByText(/\bLinks\b/);
  }

  get brokenLinksImages(): Locator {
    return this.page.locator('.menu-list').getByText('Broken Links - Images');
  }

  get uploadDownload(): Locator {
    return this.page.locator('.element-list').getByText('Upload and Download');
  }

  get dynamicProperties(): Locator {
    return this.page.locator('.element-list').getByText('Dynamic Properties');
  }

  // Actions
  async openTextBox() {
    await this.textBox.click();
  }

  async openCheckBox() {
    await this.checkBox.click();
  }

  async openRadioButton() {
    await this.radioButton.click();
  }

  async openWebTables() {
    await this.webTables.click();
  }

  async openButtons() {
    await this.buttons.click();
  }

  async openLinks() {
    await this.links.click();
  }

  async openBrokenLinksImages() {
    await this.brokenLinksImages.click();
  }

  async openUploadDownload() {
    await this.uploadDownload.click();
  }

  async openDynamicProperties() {
    await this.dynamicProperties.click();
  }
}
