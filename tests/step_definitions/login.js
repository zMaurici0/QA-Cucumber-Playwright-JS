const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

// Login Válido 

Given('O usuário está na página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('https://www.saucedemo.com/');
  await this.loginPage.confirmLoginPage();
});

When('e insere um "username" e um "password" válidos', async function () {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

Then('o login é bem-sucedido e o usuário é redirecionado para a página inicial', async function () {
  await this.loginPage.confirmHomePage();
});

//  Login Inválido

When('e insere um "username" e um "password" inválidos', async function () {
  await this.loginPage.login('invalid_user', 'invalid_password');
});

Then('o login falha e uma mensagem de erro é exibida', async function () {
  await this.loginPage.checkErrorMessage();
});

// Login com username vazio

When('deixa o campo "username" vazio e insere um "password" válido', async function (){
   await this.loginPage.login('', 'secret_sauce');
})

// Login com senha vazia

When('e insere um "username" válido e deixa o campo "password" vazio', async function () {
  await this.loginPage.login('standard_user', '');
});

// Login com locked_out_user

When('e insere um "username" bloqueado e uma senha válida', async function () {
  await this.loginPage.login('locked_out_user', 'secret_sauce');
})

// Login com problem_user

When('e insere um "username" com problema e um "password" válido', async function () {
  await this.loginPage.login('problem_user', 'secret_sauce');
});

Then('o login é bem-sucedido', async function () {
 await this.loginPage.confirmHomePage();
});

Then('as imagens dos produtos são todas iguais', async function () {
 await this.loginPage.checkAllImages();
});
