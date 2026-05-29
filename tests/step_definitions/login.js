const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

Given('estou na página de login', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
});

When('eu insiro meu {string} e um {string}', async function (username, password) {
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
});

Then('eu tenho um login com sucesso', async function () {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await browser.close();
});

Then('eu vejo uma mensagem de erro indicando falha no login', async function () {
  const MensagemErro = await page.locator('[data-test="error"]').textContent();
  await expect(MensagemErro).toContain('Epic sadface: Username and password do not match any user in this service');
  await browser.close();
});