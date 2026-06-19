const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const { CarrinhoPage } = require('../../pages/CarrinhoPage');

Given('O usuário tem dois produtos no carrinho', async function () {

  this.loginPage = new LoginPage(this.page)

  await this.loginPage.goto('https://www.saucedemo.com/');
  await this.loginPage.confirmLoginPage();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();

  this.carrinhoPage = new CarrinhoPage(this.page)

  await this.carrinhoPage.addTwoItemsToCart();
  await this.loginPage.goto('https://www.saucedemo.com/cart.html');
})

When('O usuário segue para o checkout e preenche com os dados válidos', async function () {
  await this.carrinhoPage.confirmCartPage();
  this.checkoutPage = new CheckoutPage(this.page);

  await this.checkoutPage.gotoCheckout();
  await this.checkoutPage.checkout('Mauricio', 'Mota', '123321');
})

Then('O total deve ser a soma dos preços dos produtos', async function () {
  await this.checkoutPage.verifyTotal();
});

Then('A compra deve ser concluída com sucesso', async function () {
  await this.checkoutPage.finishCheckout();
  await this.checkoutPage.confirmOrderComplete();
});

// -- Checkout com campo First Name vazio

Given('está na página de checkout', async function () {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.gotoCheckout();
})

When('deixa o campo First Name vazio e preenche os demais campos obrigatórios', async function () {
  await this.checkoutPage.checkout('', 'Mota', '1232312');
})

Then('deve ser exibida uma mensagem de erro informando que o First Name é obrigatório', async function () {
  await this.checkoutPage.checkErrorMessage();
})

// -- Checkout com campo Last Name vazio

When('deixa o campo Last Name vazio e preenche os demais campos obrigatórios', async function () {
  await this.checkoutPage.checkout('Mauricio', '', '1232312');
})

Then('deve ser exibida uma mensagem de erro informando que o Last Name é obrigatório', async function () {
  await this.checkoutPage.checkErrorMessage();
})

// -- Checkout com campo Postal Code vazio

When('deixa o campo Postal Code vazio e preenche os demais campos obrigatórios', async function () {
  await this.checkoutPage.checkout('Mauricio', 'Mota', '');
})

Then('deve ser exibida uma mensagem de erro informando que o Postal Code é obrigatório', async function () {
  await this.checkoutPage.checkErrorMessage();
})