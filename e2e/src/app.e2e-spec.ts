import * as puppeteer from 'puppeteer';

describe('workspace-project App', () => {
  it('Test Puppeteer select nth element', async () => {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: false,
      timeout: 60000,
      slowMo: 300
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:4200');

    await page.click('#container input:nth-of-type(1)');
    await page.click('#container input:nth-of-type(2)');
    await page.click('#container input:nth-of-type(3)');
    await page.click('#container input:nth-of-type(4)');
    await page.click('#container input:nth-of-type(5)');

    await page.click('#container input[name="checkbox6"]');
    await page.click('#container input[name="checkbox7"]');

    await page.type('input[type=text]', 'Hello 123');

    await browser.close();
  });
});
