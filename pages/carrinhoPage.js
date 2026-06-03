const {expect} = require('@playwright/test');

class CarrinhoPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('.inventory_item_name').nth(0);
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.itemInCart = page.locator('[data-test="inventory-item"]');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.addToCartItem1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addToCartItem2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.precoItem1 = page.locator('[data-test="inventory-item-price"]').nth(0);
    this.precoItem2 = page.locator('[data-test="inventory-item-price"]').nth(1);
    this.subtotal = page.locator('.summary_subtotal_label');
  }

  async gotoProductPage() {
    await this.productTitle.click();
  }

  async confirmProductPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
  }

  async addToCart(){
    await this.addToCartButton.click();
  }

  async checkCartBadge(){
    await expect(this.cartBadge).toHaveText('1');
  }

  async gotoCart(){
    await this.cartLink.click();
  }

  async confirmCartPage(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
  }

  async confirmItemInCart(){
    await expect(this.itemInCart).toBeVisible();
  }

  async removeFromCart(){
    await this.removeButton.click();
  }

  async checkCartEmpty(){
    await expect(this.cartBadge).toHaveCount(0);
    await expect(this.itemInCart).toHaveCount(0);
  }

  async gotoHomePage(){
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addTwoItemsToCart(){
    await this.addToCartItem1.click();
    await this.addToCartItem2.click();
  }

  async verifyTotal(){
    let preco1 = await this.precoItem1.textContent();
    let preco2 = await this.precoItem2.textContent();

    preco1 = preco1.replace('$', '')
    preco2 = preco2.replace('$', '')

    let total = parseFloat(preco1) + parseFloat(preco2);
    let subtotalText = await this.subtotal.textContent();
    let subtotal = parseFloat(subtotalText.replace('Item total: $', ''));

    expect(subtotal).toBe(total);
  }

}

module.exports = { CarrinhoPage };