import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { ElementsPage } from "./ElementsPage";
import { TextBoxPage } from "./TextBox";

export class PageManager {
  constructor(private readonly page: Page) {}

  get homePage(): HomePage {
    return new HomePage(this.page);
  }

  get elementsPage(): ElementsPage {
    return new ElementsPage(this.page);
  }

  get textBoxPage(): TextBoxPage {
    return new TextBoxPage(this.page);
  }
}