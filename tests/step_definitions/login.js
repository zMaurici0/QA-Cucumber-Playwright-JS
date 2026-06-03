const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

let browser;
let page;
let loginPage;

// ─── Login Válido ─────────────────────

Given('O usuário está na página de login', async function () {
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

// ─── Login Inválido ─────────────────────

When('e insere um "username" e um "password" inválidos', async function () {
  await loginPage.login('invalid_user', 'invalid_password');
});

Then('o login falha e uma mensagem de erro é exibida', async function () {
  await loginPage.checkErrorMessage();
  await browser.close()
});

// --- Login com username vazio

When('deixa o campo "username" vazio e insere um "password" válido', async function (){
   await loginPage.login('', 'secret_sauce');
})


// ─── Login com senha vazia ─────────────────────

When('e insere um "username" válido e deixa o campo "password" vazio', async function () {
  await loginPage.login('standard_user', '');
});

//--- Login com usuário bloqueado

When('e insere um "username" bloqueado e uma senha válida', async function () {
  await loginPage.login('locked_out_user', 'secret_sauce');
})