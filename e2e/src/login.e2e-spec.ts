import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Login flow', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display error', () => {
    // browser.get('/login').then(() => {
        const emailInput = element(by.name('email'));
        const passwordInput = element(by.name('password'));
        const submitBtn = element(by.id('submit'));

        emailInput.sendKeys('test@noemail.com');
        passwordInput.sendKeys('123');

        submitBtn.click();

        browser.wait(()=>{
            return element(by.id('errorMessage')).getText();
        },5000);

        expect(element(by.id('errorMessage')).getText()).toEqual('invalid credentials');

    // });
  });

  it('should login', () => {
    // browser.get('/login').then(() => {
        const emailInput = element(by.name('email'));
        const passwordInput = element(by.name('password'));
        const submitBtn = element(by.id('submit'));

        emailInput.sendKeys('test@noemail.com');
        passwordInput.sendKeys('123456');

        submitBtn.click();

        browser.wait(()=>{
            return element(by.id('welcome')).getText();
        },5000);

        expect(element(by.id('welcome')).getText()).toEqual('Welcome to MemeFlix!');

    // });
  });

  afterEach(async () => {
    
  });
});
