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

    //Basic Details

    const profileCreation = await poManager.getProfileCreationPage();
    await profileCreation.basicInfo(ProfileSet.BasicInfo.userFirstName, ProfileSet.BasicInfo.userSecondName, ProfileSet.BasicInfo.experiance);
    const jobdetails = await poManager.getJobRole();
    await jobdetails.setJobRole(ProfileSet.BasicInfo.role);
    //Switch To Summary Tab
    await profileCreation.switchToSummaryTab();
    //SummaryTab

    for (let key in ProfileSet.SummaryPoint) {
        await profileCreation.summaryTab(ProfileSet.SummaryPoint[key]);
    }

    //educationTab

    await profileCreation.switchEducationTab();

    for (let key in ProfileSet.EducationData) {
        await profileCreation.education(ProfileSet.EducationData[key]);
    }
    //techSkillsTab

    await profileCreation.switchToTechskillsTab();

    const techSkillsTab = await poManager.getTechSkillsTab();
    for( let key in ProfileSet.TechSkills.techName){
    await techSkillsTab.fillTechSkills(ProfileSet.TechSkills.techName[key]);
    }
    await techSkillsTab.fillDataBase(ProfileSet.TechSkills.dataBaseName);
    await techSkillsTab.fillAWS(ProfileSet.TechSkills.AWSName);

    for( let key in ProfileSet.TechSkills.ProjectManagementToolName){
        await techSkillsTab.fillProjectManagement(ProfileSet.TechSkills.ProjectManagementToolName[key]);
        }
    
        for( let key in ProfileSet.TechSkills.sourceControllName){
    await techSkillsTab.fillSourceControll(ProfileSet.TechSkills.sourceControllName[key]);
        }
    // Switch to Project Tab

    await profileCreation.switchToProjectTab();

    // project 

    const project = await poManager.getProjectTab();


    await project.projectTitle(ProfileSet.ProjectName.projectName);
    await project.addtechnologies(ProfileSet.ProjectName.technologyName);

    for (let key in ProfileSet.Responsibilities) {
        await project.addResponsibilities(ProfileSet.Responsibilities[key]);
    }

    for (let key in ProfileSet.Descriptions) {
        await project.addDescription(ProfileSet.Descriptions[key]);
    }
    await project.addProjectDuration(ProfileSet.Duration.months);
    await project.saveProject();

    //Project2
    const project1 = await poManager.getProjectTab();


    await project1.projectTitle(ProfileSet.ProjectName1.projectName);
    await project1.addtechnologies(ProfileSet.ProjectName1.technologyName);

    for (let key in ProfileSet.Responsibilities1) {
        await project1.addResponsibilities(ProfileSet.Responsibilities1[key]);
    }

    for (let key in ProfileSet.Descriptions1) {
        await project1.addDescription(ProfileSet.Descriptions1[key]);
    }
    await project1.addProjectDuration(ProfileSet.Duration1.months);
    await project1.saveProject();

    //export/view PDF

    await project.exportPDF();
    const logout= await poManager.getLogoutTab();
    await logout.LogOutUser();

});
