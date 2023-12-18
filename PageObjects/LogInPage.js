import { expect } from '@playwright/test';
class LogInPage {


    constructor(page) {
        this.page = page;
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.signInButton = page.locator("#authActionButton");
        this.createAccountBtn=page.locator("#createNewUserButton");
        this.firstName=page.locator("#firstName");
        this.lastName=page.locator("#lastName");
        this.userEmail=page.locator("#userEmail");
        this.passwordField=page.locator("#userPassword");
        this.confirmPasswordField=page.locator("#userConfirmPassword");
        this.registerBtn=page.locator("#authActionButton");

    }
    async openBrowser(URL) {
        await this.page.goto(URL);
        await this.page.waitForLoadState("networkidle");
    }

    async enterValidLogIn(email, password,PageTitle) {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.getByText("Login").first()).toBeVisible();
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle(PageTitle); 
        await this.userName.click();       
        await this.userName.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForLoadState();
    }
    async createAccount(PageTitle,FirstName,LastName,email,password,confirmPassword)
    {
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle(PageTitle);
        await this.createAccountBtn.click();
        await this.firstName.fill(FirstName);
        await this.lastName.fill(LastName);
        await this.userEmail.fill(email);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(confirmPassword);
        await this.registerBtn.click();
        const message=await this.page.locator("//p").textContent();
        console.log(message);
        await expect(thi.page).toHaveText(message);
    }

    async continueWithGoogle(PageTitle,email,password)
    {
     
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle(PageTitle);
const page1Promise = this.page.waitForEvent('popup');
await this.page.getByRole('button', { name: 'Login With Google' }).click();
const page1 = await page1Promise;
await page1.getByLabel('Email or phone').fill(email);
await page1.getByRole('button', { name: 'Next' }).click();
await page1.getByLabel('Enter your password').fill(password);
await page1.getByRole('button', { name: 'Next' }).click();

    }

}
module.exports = { LogInPage };