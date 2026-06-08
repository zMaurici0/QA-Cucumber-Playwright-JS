const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');
const {CarrinhoPage} = require('../../pages/carrinhoPage');
const {CheckoutPage} = require('../../pages/checkoutPage');

let browser;
let page;
let loginPage;
let carrinhoPage;
let checkoutPage;

// ─── Adicionar produto ao carrinho ───────────────────

Given('O usuário está na página de um produto', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.confirmHomePage();

  carrinhoPage = new CarrinhoPage(page);
  await carrinhoPage.gotoProductPage();
  await carrinhoPage.confirmProductPage();
})

When('O usuário clica no botão "Add to Cart"', async function () {
  await carrinhoPage.addToCart();
})

Then('O produto deve ser adicionado ao carrinho', async function () {
  await carrinhoPage.checkCartBadge();
  await carrinhoPage.gotoCart();
  await carrinhoPage.confirmCartPage();
  await carrinhoPage.confirmItemInCart();
})

// ───  Remover produto do carrinho ─────────────────────

Given('O usuário tem um produto no carrinho', async function () {
  await carrinhoPage.checkCartBadge();
  await carrinhoPage.gotoCart();
})

When('O usuário clica no botão "Remove"', async function () {
  await carrinhoPage.removeFromCart();
})

Then('O produto deve ser removido do carrinho', async function () {
  await carrinhoPage.checkCartEmpty();
  await browser.close()
})