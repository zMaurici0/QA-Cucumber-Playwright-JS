const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { CheckoutPage } = require('../../pages/checkoutPage');
const { CarrinhoPage } = require('../../pages/carrinhoPage');

Given('O usuário tem dois produtos no carrinho', async function () {

  this.loginPage = new LoginPage(this.page)

  await this.loginPage.goto();
  await this.loginPage.confirmLoginPage();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();

  this.carrinhoPage = new CarrinhoPage(this.page)

  await this.carrinhoPage.addTwoItemsToCart();
  await this.carrinhoPage.gotoCart();
})

When('O usuário segue para o checkout e preenche com os dados válidos', async function () {
  await this.carrinhoPage.confirmCartPage();
  this.checkoutPage = new CheckoutPage(this.page);

  await this.checkoutPage.checkout();
})

Then('O total deve ser a soma dos preços dos produtos', async function () {
  await this.checkoutPage.verifyTotal();
});

Then('A compra deve ser concluída com sucesso', async function () {
  await this.checkoutPage.finishCheckout();
  await this.checkoutPage.confirmOrderComplete();
});