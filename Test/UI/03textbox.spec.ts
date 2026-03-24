import { test, expect } from "../../src/pages/fixtures";

test.beforeEach(async ({ page }) => {
  console.log("Starting Text Box Page Tests");
  await page.goto('/text-box', { waitUntil: 'domcontentloaded' });
});


// 1. Verify Text Box page loads
test('Text Box page should load successfully', async ({ page }) => {
  await expect(page).toHaveURL(/text-box/);
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
});


// 2. Fill form with valid data and submit
test('Submit Text Box form with valid data', async ({ pages }) => {
  const textBox = pages.textBoxPage;

  await textBox.fillForm(
    'Laksha',
    'laksha@test.com',
    'Chennai',
    'Tamil Nadu'
  );

  await textBox.submit();
  await textBox.expectOutputVisible();
  await textBox.expectNameInOutput('Laksha');
});


// 3. Verify output contains email
test('Output should display submitted email', async ({ pages }) => {
  const textBox = pages.textBoxPage;

  await textBox.fillForm(
    'Laksha',
    'laksha@test.com',
    'Chennai',
    'Tamil Nadu'
  );

  await textBox.submit();
  await expect(textBox.output).toContainText('laksha@test.com');
});


// 4. Submit form without filling mandatory fields
test('Submit empty form should not show output', async ({ pages }) => {
  const textBox = pages.textBoxPage;

  await textBox.submit();
  await expect(textBox.output).not.toBeVisible();
});


// 5. Invalid email should prevent submission
test('Invalid email should not allow form submission', async ({ pages }) => {
  const textBox = pages.textBoxPage;

  await textBox.fillForm(
    'Laksha',
    'invalid-email',
    'Chennai',
    'Tamil Nadu'
  );

  await textBox.submit();
  await expect(textBox.output).not.toBeVisible();
});


// 6. Verify only name is filled
test('Submit form with only Full Name filled', async ({ pages }) => {
  const textBox = pages.textBoxPage;

  await textBox.fullNameInput.fill('Laksha');
  await textBox.submit();

  await expect(textBox.output).toBeVisible();
  await expect(textBox.output).toContainText('Laksha');
});


// 7. Verify Current Address output
test('Current Address should appear in output', async ({ pages }) => {
  const textBox = pages.textBoxPage;

  await textBox.fillForm(
    'Laksha',
    'laksha@test.com',
    'Chennai',
    ''
  );

  await textBox.submit();
  await expect(textBox.output).toContainText('Chennai');
  //await expect(textBox.output).tocustomnNText('Chennai');
});

expect.extend({
  tocustomnNText(received: any, expected: string) {
    const pass = received && received.includes(expected); 
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to contain text ${expected}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to contain text ${expected}`,
        pass: false,
      };
    }
  },
});
