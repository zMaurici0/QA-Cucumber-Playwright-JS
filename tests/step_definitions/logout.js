const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/loginPage');
const { LogoutPage } = require('../../pages/logoutPage');

Given('O usuário está logado', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();
});

When('O usuário clica no botão de logout', async function () {
  this.logoutPage = new LogoutPage(this.page);
  await this.logoutPage.logout();
});

Then('O usuário deve ser redirecionado para a página de login', async function () {
  await this.loginPage.confirmLoginPage();
});

Given('o usuário fez o logout', async function () {
  this.loginPage = new LoginPage(this.page);
  this.logoutPage = new LogoutPage(this.page);

  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();
  await this.logoutPage.logout();
});

When('o usuário clica no botão de voltar', async function () {
  await this.page.goBack();
});

When('o usuário digita a url da home page', async function () {
  await this.page.goto('https://www.saucedemo.com/inventory.html');
});

Then('o usuário continua na página de login', async function () {
  await this.loginPage.confirmLoginPage();
});

Then('aparece um erro na tela', async function () {
  await this.loginPage.checkErrorMessage();
});