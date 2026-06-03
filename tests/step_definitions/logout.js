const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');
const {LogoutPage} = require('../../pages/logoutPage');

let browser;
let page;
let loginPage;
let logoutPage;

Given('O usuário está logado', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.confirmHomePage();
});

When('O usuário clica no botão de logout', async function () {
  logoutPage = new LogoutPage(page);
  await logoutPage.logout();
});

Then('O usuário deve ser redirecionado para a página de login', async function () {
  await loginPage.confirmLoginPage();
  await browser.close();
}) ;