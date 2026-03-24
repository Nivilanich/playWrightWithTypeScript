import { Page, Locator } from 'playwright/test';

export class ModalDialogPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/modal-dialogs');
  }

  get smallModalButton(): Locator {
    return this.page.locator('#showSmallModal');
  }

  get largeModalButton(): Locator {
    return this.page.locator('#showLargeModal');
  }

  get modalContent(): Locator {
    return this.page.locator('.modal-content');
  }

  get smallTitle(): Locator {
    return this.page.locator('#example-modal-sizes-title-sm');
  }

  get largeTitle(): Locator {
    return this.page.locator('#example-modal-sizes-title-lg');
  }

  get modalBody(): Locator {
    return this.page.locator('.modal-body');
  }

  get closeSmallBtn(): Locator {
    return this.page.locator('#closeSmallModal');
  }

  get closeLargeBtn(): Locator {
    return this.page.locator('#closeLargeModal');
  }

  async openSmallModal() {
    await this.smallModalButton.click();
  }

  async openLargeModal() {
    await this.largeModalButton.click();
  }

  async closeSmall() {
    await this.closeSmallBtn.click();
  }

  async closeLarge() {
    await this.closeLargeBtn.click();
  }
}
