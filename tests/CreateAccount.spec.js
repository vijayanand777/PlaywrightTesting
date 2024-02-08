const {POMManager} = require('../Pages/POMManager.js');//../Pages/LogInPage.js
import { test, expect } from '@playwright/test';
import Data from "../Utils/LogInCredentials.json";//../Utils/LogInCredentials.json

test('test', async ({ page }) => {
     const pom= new POMManager(page);
    const LogIn= await pom.getLogInPage();
    await LogIn.openBrowser(Data.URL);
    await LogIn.login(Data.email,Data.password);
    
    const profile= await pom.getProfilePage();
    await profile.basicTab(Data.BasicInfo.userFirstName,Data.BasicInfo.userSecondName);
    await profile.setExperiance(Data.BasicInfo.experiance);
    await profile.setRole(Data.BasicInfo.role);
    await profile.tabOnNext();
    await profile.setSummaryDetails(Data.SummaryPoints.summary1);
    await profile.setEducation();
    await profile.addTechSkills("vijay");
    await profile.addDataBase("DataBaseName");
    await profile.addAWS("AWSName"); 
    await profile.addProjectManagementList("Trello");
    await profile.addSourceControll("SourceControllName");  
    await profile.tabOnNext();
    await profile.addProjectName("ProjectName");
    await profile.addTechnologies("TechnologyName");
    await profile.projectDuration("Duration");
    await profile.addDescription("Description");
    await profile.addResponsibilities("Responsibilities");
    await profile.addProject();
    await page.pause();
    await profile.saveProject();
});