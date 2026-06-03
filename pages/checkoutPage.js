const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.chekoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async checkout(){
    await this.chekoutButton.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await this.firstNameInput.fill('Teste');
    await this.lastNameInput.fill('Automatizado');
    await this.postalCodeInput.fill('12345');
    await this.continueButton.click();
  }
}

module.exports = { CheckoutPage };