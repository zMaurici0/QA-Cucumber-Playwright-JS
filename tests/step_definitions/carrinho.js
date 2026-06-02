const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium, expect} = require('@playwright/test');
const {LoginPage} = require('../../pages/loginPage');

let browser;
let page; 

// ─── Cenário: Adicionar produto ao carrinho ───────────────────

Given('O usuário está na página de um produto', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  login = new LoginPage(page);
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="item-4-title-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
})

When('O usuário clica no botão "Add to Cart"', async function () {
  await page.locator('[data-test="add-to-cart"]').click();
})

Then('O produto deve ser adicionado ao carrinho', async function () {
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
})

// ─── Cenário: Remover produto do carrinho ─────────────────────

Given('O usuário tem um produto no carrinho', async function () {
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.locator('.shopping_cart_link').click();
})

When('O usuário clica no botão "Remove"', async function () {
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
})

Then('O produto deve ser removido do carrinho', async function () {
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(0);
})

// ─── Cenário: Verificar o total do carrinho ─────────────────────

Given('O usuário tem dois produtos no carrinho', async function () {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('.shopping_cart_link').click();
})

When('O usuário visualiza o total do carrinho', async function () {
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  await page.locator('[data-test="firstName"]').fill('Teste');
  await page.locator('[data-test="lastName"]').fill('Automatizado');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
})

Then('O total deve ser a soma dos preços dos produtos no carrinho', async function () {
  let preco1 = await page.locator('[data-test="inventory-item-price"]').nth(0).textContent();
  let preco2 = await page.locator('[data-test="inventory-item-price"]').nth(1).textContent();

  preco1 = preco1.replace('$', '')
  preco2 = preco2.replace('$', '')
  let total = parseFloat(preco1) + parseFloat(preco2);

  let totalExibido = await page.locator('.summary_subtotal_label').textContent();
  totalExibido = parseFloat(totalExibido.replace('Item total: $', ''));

  expect(totalExibido).toBe(total);
  await browser.close();
})