//frameworklevel
import { defineConfig, devices } from '@playwright/test';  //it provides: test runner, assertions, fixtures

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

export default defineConfig({
  
   timeout: 30000,
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 3,
  //reporting layers
  reporter: [
    ['html', { outputFolder: `playwright-report/${timestamp}`, open: 'never' }],
    ['list'],
    ['allure-playwright', { outputFolder: 'allure/allure-results' }]
    
  ],
  //test execution environment
  use: {
    trace: 'on',
    video: 'on-first-retry',
    headless: false,
    baseURL: 'https://demoqa.com',
  },
  
  projects: [
    // Define projects for different browsers
    {
      name: 'chromium',
      testMatch: /.*ui\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], headless: false },
    },
    // {
    //   name: 'firefox',
    //   testMatch: /.*ui\/.*\.spec\.ts/,
    //   use: { ...devices['Desktop Firefox'], headless: false },
    //   //Desktop Chrome,Desktop Firefox,Desktop Safari,iPhone 14,Pixel 7
    // },
    // {
    //   name: 'webkit',
    //   testMatch: /.*ui\/.*\.spec\.ts/,
    //   use: { ...devices['Desktop Safari'], headless: false },
    // },
    {
      name: 'API',
      testMatch: /.*api\/.*\.spec\.ts/,
      use: {
        headless: false,
        baseURL: 'https://jsonplaceholder.typicode.com',
        extraHTTPHeaders: {
          Authorization: 'Bearer fake_token_123', // Simulated token
          }
      },
    },
  ],
});
