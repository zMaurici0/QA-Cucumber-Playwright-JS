const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

let browser;
let page;

Given('O osuário está na página de login', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.confirmLoginPage();
});

When('e insere um "username" e um "password" válidos', async function () {
  await loginPage.login('standard_user', 'secret_sauce');
});

Then('o login é bem-sucedido e o usuário é redirecionado para a página inicial', async function () {
  await loginPage.confirmHomePage();
  await browser.close();
});


When('e insere um "username" e um "password" inválidos', async function () {
  await loginPage.login('invalid_user', 'invalid_password');
});

Then('o login falha e uma mensagem de erro é exibida', async function () {
  await loginPage.checkErrorMessage();
  await browser.close();
});