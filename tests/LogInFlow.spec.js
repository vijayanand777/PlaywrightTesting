const { POManager } = require('../PageObjects/POManager');
import { test, expect } from '@playwright/test';
const ProfileSet = JSON.parse(JSON.stringify(require("../Utils/CreateProfileLogInData.json")));

test('test', async ({ page }) => {

    const poManager = new POManager(page);
    const logIn = await poManager.getLoginPage();
    
    //open Browser

    await logIn.openBrowser(ProfileSet.URL);

    //LogInToTheApplication

    await logIn.enterValidLogIn(ProfileSet.LogInCredentials.email,ProfileSet.LogInCredentials.password,ProfileSet.LogInCredentials.PageTitle);
    
});
