import path from 'path';
import { generate } from 'cucumber-html-reporter';

const options: any = {
  theme: 'bootstrap',
  jsonFile: path.join(process.cwd(), 'src/reports/cucumber-report.json'),
  output: path.join(process.cwd(), 'src/reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "QA",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

generate(options);
