const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium, expect} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');

let browser;
let page;

Given('O usuário está logado', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

When('O usuário clica no botão de logout', async function () {
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
})

Then('O usuário deve ser redirecionado para a página de login', async function () {
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await browser.close();
})  