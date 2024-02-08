import { expect } from '@playwright/test';
class LogInPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.getByPlaceholder('Enter email address');
        this.passwordField = page.getByPlaceholder('Enter Password');
        this.loginButton = page.getByRole('button', { name: 'Sign in' });
    }
    async openBrowser(URL) {
        await this.page.goto(URL);
        await this.page.waitForLoadState("networkidle");
    }
    async login(UserName,Password) {
        await this.page.waitForLoadState("networkidle");
        await this.emailField.click();
        await this.emailField.fill(UserName);
        await this.passwordField.fill(Password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}
module.exports={LogInPage};