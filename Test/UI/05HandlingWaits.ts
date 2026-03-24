import {test,expect} from "@playwright/test";

test("Handling waits example", async ({page}) => {
    await page.goto("https://demoqa.com/dynamic-properties");
    await page.waitForSelector("#visibleAfter",{timeout:7000});
    await page.waitForSelector("#successMessage", { state: "visible" });
    await page.waitForSelector("#enableAfter", { state: "attached" });
    await page.waitForEvent('load');
    await page.waitForLoadState('networkidle');
    await page.waitForRequest(request => request.url() === 'https://demoqa.com/dynamic-properties' && request.method() === 'GET');
    await page.waitForResponse(response => response.url() === 'https://demoqa.com/dynamic-properties' && response.status() === 200);
    await page.waitForSelector("#status");
    await page.waitForTimeout(2000);


});