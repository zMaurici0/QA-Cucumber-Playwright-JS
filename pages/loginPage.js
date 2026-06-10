const { expect } = require('@playwright/test'); 

class LoginPage {
  constructor(page){
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(username, password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async goto(){
    await this.page.goto('https://www.saucedemo.com/');
  }

  async confirmLoginPage(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }

  async confirmHomePage(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }

  async checkErrorMessage(){
    await expect(this.errorMessage).toBeVisible();
  }

  async checkAllImages(){
    const images = await this.page.locator('.inventory_item_img img');
    const count = await images.count()
    const firstImage = await images.nth(0).getAttribute('src');

    for(let i = 1; i < count; i++){
      const currentImage = await images.nth(i).getAttribute('src');
      expect(currentImage).toBe(firstImage)
    }
  }

}

module.exports = { LoginPage };