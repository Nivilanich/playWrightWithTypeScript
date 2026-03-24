import { Page, Locator } from "playwright/test";
import { LoginPage } from "./LoginPage";
export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get elementsCard(): Locator {

      this.page.locator('a').first();

      this.page.locator('.card-body').filter({ hasText: 'Elements' });
      this.page.locator('.card-body', { has: this.page.getByText('Elements') });
      this.page.locator('.card-body').filter({ visible: true, hasText: 'Elements' });
      this.page.getAttribute('a', 'href');
      this.page.getByRole('heading', { level: 2 });
    return this.page.getByRole('heading', { name: 'Elements' });
  }

  get formsCard(): Locator {
    return this.page.getByRole('heading', { name: 'Forms' });
  }
    get alertsCard(): Locator { 
    return this.page.getByRole('heading', { name: 'Alerts' });
  }
    get widgetsCard(): Locator { 
    return this.page.getByRole('heading', { name: 'Widgets' });
  }
    get interactionsCard(): Locator { 
    return this.page.getByRole('heading', { name: 'Interactions' });
  }
    get bookStoreCard(): Locator { 
    return this.page.getByRole('heading', { name: 'Book Store' });
  }

  async openElementsSection() {
    await this.elementsCard.click();
  }

  async openFormsSection() {
    await this.formsCard.click();
  }

  async openWidgetsSection() {
    await this.widgetsCard.click();
  }

}