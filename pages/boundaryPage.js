const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const { CarrinhoPage } = require('../../pages/CarrinhoPage');

