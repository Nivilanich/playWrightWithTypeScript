import { Page, Locator, expect } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;
  readonly form: Locator;

  constructor(page: Page) {
    this.page = page;

    // Parent locator (scope everything inside the form)
    this.form = page.locator('#userForm');
  }

  // ===== Input fields (chained) =====

  get fullNameInput(): Locator {
    return this.form.getByPlaceholder('Full Name');
  }

  get emailInput(): Locator {
    return this.form.getByPlaceholder('name@example.com');
  }

  get currentAddressInput(): Locator {
    return this.form.getByPlaceholder('Current Address');
  }

  get permanentAddressInput(): Locator {
    return this.form.locator('#permanentAddress');
  }

  // ===== Action buttons =====

  get submitButton(): Locator {
    return this.form.getByRole('button', { name: 'Submit' });
  }

  // ===== Output section =====

  get output(): Locator {
    return this.page.locator('#output');
  }

  // ===== Actions =====

  async fillForm(
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string
  ) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);
  }

  async submit() {
    await this.submitButton.click();
  }

  // ===== Assertions =====

  async expectOutputVisible() {
    await expect(this.output).toBeVisible();
  }

  async expectNameInOutput(name: string) {
    await expect(this.output).toContainText(name);
  }
}
