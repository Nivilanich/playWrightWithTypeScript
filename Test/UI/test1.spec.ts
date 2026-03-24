import {test,expect} from '@playwright/test';

test.describe.serial('My first test suite', () => {
  test.beforeAll(async ({ browser }) => {
    console.log('Setup before all tests');
    // Setup for all tests in this suite
  });

  test.beforeEach('Verify page title', async ({ page }) => {
    await page.goto('https://demoqa.com');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await expect(page).toHaveTitle(/DEMOQA/);
    //console.log('Page title verified');
  });


test('Homepage', async ({page}) => {
    console.log('Click Elements');
    await test.step('Click Elements', async () => {
        await page.getByRole('heading', { name: 'Elements' }).click();
        await expect(page).toHaveURL(/.*elements/);
    });

    await test.step('Click Forms', async () => {
        console.log('Click Forms');
        await page.getByText('Text Box').click();
        const title = await page.title();
    console.log(`Page title is: ${title}`);
    });
});

test.afterEach(async ({ page }) => {
    await page.screenshot({ path: `screenshot-${Date.now()}.png`, fullPage: true });
    console.log('Screenshot taken after each test');
});
test.afterAll(async () => {
    // Cleanup for all tests
    console.log('Cleanup after all tests');
});
});

