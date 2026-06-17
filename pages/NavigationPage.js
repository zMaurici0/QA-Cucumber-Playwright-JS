const { expect } = require("@playwright/test")

class NavigationPage{
  constructor(page){
    this.page = page
    this.menuHamburguer = page.locator('#react-burger-menu-btn')
    this.allItensLink = page.locator('[data-test="inventory-sidebar-link"]')
    this.aboutLink = page.locator('[data-test="about-sidebar-link"]')
    this.twitterLink = page.locator('a[data-test="social-twitter"]');
  }

  async openMenuHamburguer(){
    await this.menuHamburguer.click();
  }

  async clickAllItens(){
    await this.allItensLink.click();
  }

  async clickAbout(){
    await this.aboutLink.click();
  }

  async confirmUrlPage(url){
    await expect(this.page).toHaveURL(url);
  }

  async clickTwitterLink(){
    await this.twitterLink.click();
  }

  async verifyTwitterTargetBlank(){
    await expect(this.twitterLink).toHaveAttribute('target', '_blank');
  }
}

module.exports = { NavigationPage };