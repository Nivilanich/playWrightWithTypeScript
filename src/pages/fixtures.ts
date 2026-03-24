import { test as base } from "@playwright/test";
import { PageManager } from "./PageManager";

export const test = base.extend<{
  pages: PageManager;
}>({
  pages: async ({ page }, use) => {
    await use(new PageManager(page));
  },
});

export { expect } from "@playwright/test";
