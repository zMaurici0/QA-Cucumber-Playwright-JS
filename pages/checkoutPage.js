const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.chekoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.precoItem1 = page.locator('[data-test="inventory-item-price"]').nth(0);
    this.precoItem2 = page.locator('[data-test="inventory-item-price"]').nth(1);
    this.subtotal = page.locator('.summary_subtotal_label');
    this.finishButton = page.locator('[data-test="finish"]');
    this.checkoutComplete = page.locator('[data-test="checkout-complete-container"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async gotoCheckout(){
    await this.chekoutButton.click();
  }

  async checkout(firstName,lastName, postalCode){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout(){
    await this.finishButton.click();
  }

  async confirmOrderComplete() {
    await expect(this.checkoutComplete).toBeVisible();
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

  async checkErrorMessage(){
    await expect(this.errorMessage).toBeVisible();
  } 
}

module.exports = { CheckoutPage };