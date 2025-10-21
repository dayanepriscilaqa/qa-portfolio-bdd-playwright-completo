const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(20 * 1000); // aumenta o tempo limite para 20 segundos

Before(async function () {
  console.log('🔹 Abrindo navegador...');
  await this.openBrowser();
});

After(async function (scenario) {
  console.log('🔹 Fechando navegador...');
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshotPath = path.join('reports', `ERROR_${Date.now()}.png`);
    await this.page.screenshot({ path: screenshotPath });
  }
  await this.closeBrowser();
});
