const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');
const {CarrinhoPage} = require('../../pages/carrinhoPage');
const {CheckoutPage} = require('../../pages/checkoutPage');

// ─── Adicionar produto ao carrinho ───────────────────

Given('O usuário está na página de um produto', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();

  this.carrinhoPage = new CarrinhoPage(this.page);
  await this.carrinhoPage.gotoProductPage();
  await this.carrinhoPage.confirmProductPage();
})

When('O usuário clica no botão "Add to Cart"', async function () {
  await this.carrinhoPage.addToCart();
})

Then('O produto deve ser adicionado ao carrinho', async function () {
  await this.carrinhoPage.checkCartBadge();
  await this.carrinhoPage.gotoCart();
  await this.carrinhoPage.confirmCartPage();
  await this.carrinhoPage.confirmItemInCart();
})

// ───  Remover produto do carrinho ─────────────────────

Given('O usuário tem um produto no carrinho', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();

  this.carrinhoPage = new CarrinhoPage(this.page);
  this.carrinhoPage.addOneItemtoCart()
  await this.carrinhoPage.checkCartBadge();
  await this.carrinhoPage.gotoCart();
})

When('O usuário clica no botão "Remove"', async function () {
  await this.carrinhoPage.removeFromCart();
})

Then('O produto deve ser removido do carrinho', async function () {
  await this.carrinhoPage.checkCartEmpty();
})