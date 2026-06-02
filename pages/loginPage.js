class LoginPage {
  constructor(page){
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(username, password){
    await this.page.goto('https://www.saucedemo.com/');
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
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}

module.exports = { LoginPage };