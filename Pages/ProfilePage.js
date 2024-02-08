import { test, expect } from '@playwright/test';
class ProfilePage {
   constructor(page) {
      this.page = page;
      this.FirstName = page.getByPlaceholder('Please enter your first name');
      this.SecondName = page.getByPlaceholder('Please enter your last name');
      this.ExperianceField = page.locator('.css-qbdosj-Input').first();//await page.locator('.css-qbdosj-Input').first().click();
      this.ExperianceTextField = page.locator('#react-select-2-input');// css-166bipr-Input//div[text()='Select...']
      this.NamesList = page.locator(".css-148snee-option");// css-148snee-option//.css-qbdosj-Input input// css-148snee-option
      this.addNewName = page.locator("//div[@class='css-11py24w']");//css-11py24w
      this.RoleField = page.locator('.css-4gi536-control > .css-bbf1rh-ValueContainer > .css-qbdosj-Input');
      this.roleTextField = page.locator('#react-select-3-input');
      this.summaryPoint = page.getByPlaceholder('Please enter the summary');
      this.nextButton = page.getByRole('button', { name: 'Next' });
      this.addPlusButton = page.getByRole('button', { name: '+ Add' });
      this.addButton = page.getByRole('button', { name: 'Add' });

      this.techSkillField = page.locator('.css-qbdosj-Input').first();
      this.techSkillTextField = page.locator('#react-select-4-input');

      this.DataBaseField = page.locator('.css-bbf1rh-ValueContainer > .css-qbdosj-Input').first();
      this.DataBaseTextField = page.locator('#react-select-5-input');

      this.AWSField = page.locator('.css-bbf1rh-ValueContainer > .css-qbdosj-Input').first();
      this.AWSTextField = page.locator('#react-select-6-input');

      this.projectManagementListField = page.locator('.css-bbf1rh-ValueContainer > .css-qbdosj-Input').first();
      this.projectManagementTextField = page.locator('#react-select-7-input');

      this.sourceControllField = page.locator('.css-bbf1rh-ValueContainer > .css-qbdosj-Input');
      this.sourceControllTextField = page.locator('#react-select-8-input');

      this.addProjectField = page.getByText('Add Project');
      this.projectName = page.getByPlaceholder('Please enter the project name');

      this.addTechnologiesField = page.locator('.css-qbdosj-Input');
      this.addTechnologiesTextField = page.locator('#react-select-9-input');

      this.addDurationField = page.getByPlaceholder('Ex: 1 year 2 months');
      this.addDurationTextField = page.getByPlaceholder('Ex: 1 year 2 months');

      this.addDescriptionTextField = page.getByPlaceholder('Please enter the summary');

      this.addResponsibilitiesField=page.getByPlaceholder('Please enter the summary');

      this.saveButton=page.getByRole('button', { name: 'Save', exact: true });


   }
   async basicTab(FirstName, SecondName) {
      await this.FirstName.click();
      await this.FirstName.fill(FirstName);
      await this.SecondName.click();
      await this.SecondName.fill(SecondName);
   }
   async setExperiance(Experiance) {
      await this.ExperianceField.click();
      await this.ExperianceTextField.fill(Experiance);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === Experiance?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   async setRole(Role) {
      await this.RoleField.click();
      await this.roleTextField.fill(Role);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === Role?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   async tabOnNext() {
      this.nextButton.click();
   }
   async setSummaryDetails(SummaryPoints) {
      await this.addPlusButton.click();
      await this.summaryPoint.fill(SummaryPoints);
      await this.addButton.click();
      await this.nextButton.click();
   }
   async setEducation() {
      await this.nextButton.click();
   }
   async addTechSkills(TechSkillNames) {
      await this.techSkillField.click();
      await this.techSkillTextField.fill(TechSkillNames);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === TechSkillNames?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   async addDataBase(DataBaseName) {
      await this.DataBaseField.click();
      await this.DataBaseTextField.fill(DataBaseName);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === DataBaseName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   async addAWS(AWSName) {
      await this.AWSField.click();
      await this.AWSTextField.fill(AWSName);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === AWSName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   async addProjectManagementList(Trello) {
      await this.projectManagementListField.click();
      await this.projectManagementTextField.fill(Trello);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === Trello?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }

   }
   async addSourceControll(SourceControllName) {
      await this.sourceControllField.click();
      await this.sourceControllTextField.fill(SourceControllName);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === SourceControllName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }

   }
   async addProjectName(ProjectName) {
      await this.addProjectField.click();
      await this.projectName.fill(ProjectName);
   }
   async addTechnologies(TechnologyName) {
      await this.addTechnologiesField.click();
      await this.addTechnologiesTextField.fill(TechnologyName);
      const names = this.NamesList;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewName.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === TechnologyName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   async projectDuration(Duration) {
      await this.addDurationField.click();
      await this.addDurationTextField.fill(Duration);
   }
   async addDescription(Description) {
      await this.addPlusButton.first().click();
      await this.addDescriptionTextField.fill(Description);
      await this.addButton.click();
   }
   async addResponsibilities(Responsibilities)
   {
      await this.addPlusButton.nth(1).click();
      await this.addResponsibilitiesField.fill(Responsibilities);
      await this.addButton.click();
   }
   async addProject()
   {
      // await this.addButton.nth(2).click();
      await this.page.getByRole('button', { name: 'Add', exact: true }).click();
   }
   async saveProject()
   {
      const page1Promise = this.page.waitForEvent('popup');
      await this.saveButton.click();
      await this.saveButton.click();
      const page1 = await page1Promise;
   }
}
module.exports = { ProfilePage };