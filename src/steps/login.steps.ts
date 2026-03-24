import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

//test("Open Elements section from Home page", async ({ page, pages })

Given("I open the DemoQA login page", async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.open();
});

When(
  "I login with username {string} and password {string}",
  async function (this: CustomWorld, username: string, password: string) {
    await loginPage.login(username, password);
  }
);

Then("I should see the successful login message", async function (this: CustomWorld) {
  await loginPage.verifyLoginSuccess();
});

Then("I logout from the application", async function (this: CustomWorld) {
  await loginPage.logout();
});
