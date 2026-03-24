import { Page, Locator, expect } from "playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginSuccessMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator("#userName");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login");

    this.loginSuccessMessage = page.locator("#userName-value"); 
    this.logoutButton = page.locator("button:has-text('Log out')");
  }

  async open() {
    await this.page.goto("https://demoqa.com/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    // After successful login, userName-value is displayed
    await expect(this.loginSuccessMessage).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.page.locator("#login")).toBeVisible();
  }
}
