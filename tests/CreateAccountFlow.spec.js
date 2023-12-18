const { POManager } = require('../PageObjects/POManager');
import { test, expect } from '@playwright/test';
const ProfileSet = JSON.parse(JSON.stringify(require("../Utils/CreateAccountFlowData.json")));

test('test', async ({ page }) => {

    const poManager = new POManager(page);
    const logIn = await poManager.getLoginPage();
    
    //open Browser

    await logIn.openBrowser(ProfileSet.URL);

    //Create Account

    await logIn.createAccount(ProfileSet.CreateAccount.PageTitle,ProfileSet.CreateAccount.FirstName,ProfileSet.CreateAccount.LastName,
        ProfileSet.CreateAccount.email,ProfileSet.CreateAccount.password,ProfileSet.CreateAccount.confirmPassword);

   

});
