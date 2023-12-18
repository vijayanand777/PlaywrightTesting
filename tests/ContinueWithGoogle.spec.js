const { POManager } = require('../PageObjects/POManager');
import { test, expect } from '@playwright/test';
const ProfileSet = JSON.parse(JSON.stringify(require("../Utils/ContinueWithGoogle.json")));

test('test', async ({ page }) => {

    const poManager = new POManager(page);
    const logIn = await poManager.getLoginPage();
    
    //open Browser

    await logIn.openBrowser(ProfileSet.URL);

    //Create Account

    await logIn.continueWithGoogle(ProfileSet.PageTitle, ProfileSet.email, ProfileSet.password);

   

});
