const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium, _android} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');
const {CarrinhoPage} = require('../../pages/carrinhoPage');
const {CheckoutPage} = require('../../pages/checkoutPage');

// --- Adicionar produto ao carrinho 

Given('O usuário está na página de um produto', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('https://www.saucedemo.com/');
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
  let quantidade = 1
  await this.carrinhoPage.checkCartBadge(String(quantidade));
  await this.loginPage.goto('https://www.saucedemo.com/cart.html');
  await this.carrinhoPage.confirmCartPage();
  await this.carrinhoPage.confirmItemInCart();
})

// ───  Adicionar vários itens ao carrinho

Given('O usuário está na home page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('https://www.saucedemo.com/');
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();
})

When('O usuário adiciona 3 produtos diferentes ao carrinho', async function () {
  this.carrinhoPage = new CarrinhoPage(this.page);
  await this.carrinhoPage.addMultipleItemsToCart()
})

Then('A badge do carrinho deve mostrar 3', async function () {
  let quantidade = 3
  await this.carrinhoPage.checkCartBadge(String(quantidade))
})


// ───  Remover produto do carrinho

Given('O usuário tem um produto no carrinho', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto('https://www.saucedemo.com/');
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.loginPage.confirmHomePage();

  this.carrinhoPage = new CarrinhoPage(this.page);
  await this.carrinhoPage.addOneItemtoCart()

  let quantidade = 1
  await this.carrinhoPage.checkCartBadge(String(quantidade));
  await this.loginPage.goto('https://www.saucedemo.com/cart.html');
})

When('O usuário clica no botão "Remove"', async function () {
  await this.carrinhoPage.removeFromCart();
})

Then('O produto deve ser removido do carrinho', async function () {
  await this.carrinhoPage.checkCartEmpty();
})

// ───  Persistência do carrinho

Given('O usuário está na página do carrinho', async function () {
  await this.loginPage.goto('https://www.saucedemo.com/cart.html');
  await this.carrinhoPage.confirmCartPage()
})

When('O usuário navegar para a home page', async function () {
  await this.loginPage.goto('https://www.saucedemo.com/inventory.html')
})

When('E voltar para a página do carrinho', async function () {
  await this.loginPage.goto('https://www.saucedemo.com/cart.html');
})

Then('O item ainda deve estar presente no carrinho', async function(){
  await this.carrinhoPage.confirmItemInCart()
})
