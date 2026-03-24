import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  await this.init();   // this creates browser, context, page
});

After(async function (scenario) {
  try {
    if (scenario.result?.status === 'FAILED' && this.page) {
      const name = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
      await this.page.screenshot({ path: `reports/${name}.png` });
    }
  } finally {
    if (this.close) {
      await this.close();
    }
  }
});
