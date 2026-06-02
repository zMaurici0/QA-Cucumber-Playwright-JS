const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium, expect} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');

let browser;
let page; 

Given('O usuário está na página de um produto', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  login = new LoginPage(page);
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="item-4-title-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
})

Given('O usuário tem um produto no carrinho', async function () {
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.locator('.shopping_cart_link').click();
})

When('O usuário clica no botão "Add to Cart"', async function () {
  await page.locator('[data-test="add-to-cart"]').click();
})

When('O usuário clica no botão "Remove"', async function () {
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
})

Then('O produto deve ser adicionado ao carrinho', async function () {
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
})

Then('O produto deve ser removido do carrinho', async function () {
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(0);
  await browser.close();
})