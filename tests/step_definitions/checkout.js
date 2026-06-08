const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { CheckoutPage } = require('../../pages/checkoutPage');
const { CarrinhoPage } = require('../../pages/carrinhoPage');

let browser;
let page;
let loginPage;
let carrinhoPage;
let checkoutPage;

Given('O usuário tem dois produtos no carrinho', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page)

  await loginPage.goto();
  await loginPage.confirmLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.confirmHomePage();

  carrinhoPage = new CarrinhoPage(page)

  await carrinhoPage.addTwoItemsToCart();
  await carrinhoPage.gotoCart();
})

When('O usuário segue para o checkout e preenche com os dados válidos', async function () {
  await carrinhoPage.confirmCartPage();
  checkoutPage = new CheckoutPage(page);

  await checkoutPage.checkout();
})

Then('O total deve ser a soma dos preços dos produtos', async function () {
  await checkoutPage.verifyTotal();
  await browser.close()
});

Then('A compra deve ser concluída com sucesso', async function () {
  await checkoutPage.finishCheckout();
  await checkoutPage.confirmOrderComplete();
  await browser.close()
});