const { Given, When, Then} = require('@cucumber/cucumber')
const { LoginPage } = require('../../pages/loginPage');
const {CarrinhoPage} = require('../../pages/carrinhoPage');
const {NavigationPage} = require('../../pages/NavigationPage');

Given('o usuário está na página do carrinho', async function(){
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('https://www.saucedemo.com/');
  await this.loginPage.login('standard_user','secret_sauce');
  await this.loginPage.confirmHomePage();

  await this.loginPage.goto('https://www.saucedemo.com/cart.html');
  this.cartPage = new CarrinhoPage(this.page);
  await this.cartPage.confirmCartPage()
})

When('o usuário seleciona a opção "All Items" no menu', async function(){
  this.navigationPage = new NavigationPage(this.page);
  await this.navigationPage.openMenuHamburguer();
  await this.navigationPage.clickAllItens();
})

Then('o usuário deve ser redirecionado para a página do inventário', async function (){
  await this.navigationPage.confirmUrlPage('https://www.saucedemo.com/inventory.html');
})

// --- Navegar para About

Given('que o usuário está logado', async function (){
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('https://www.saucedemo.com/');
  await this.loginPage.login('standard_user','secret_sauce');
  await this.loginPage.confirmHomePage();

  this.navigationPage = new NavigationPage(this.page);
})

When('o usuário seleciona a opção "About" no menu', async function(){
  await this.navigationPage.openMenuHamburguer();
  await this.navigationPage.clickAbout()
})

Then('o usuário deve ser redirecionado para o site da Sauce Labs', async function (){
  await this.navigationPage.confirmUrlPage('https://saucelabs.com/');
})

// --- Validar link do Twitter

When('o usuário clicar no link do twitter', async function (){
  await this.navigationPage.clickTwitterLink();
})

Then('o link deve abrir em outra página', async function () {
  await this.navigationPage.verifyTwitterTargetBlank();
})

Then('o usuário deve ser redirecionado para o twitter da Sauce Labs', async function () {
  await this.navigationPage.confirmUrlPage('https://x.com/saucelabs');
})

