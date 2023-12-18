import { expect } from '@playwright/test';
class ProfileCreationPage
{

    constructor (page)
    {
      this.nextButton= page.getByRole('button', { name: 'NEXT' });
      this.addButton=page.getByRole('button', { name: 'add' });
      this.saveBtn=page.getByRole('button', { name: 'SAVE' });

      this.page=page;
      this.firstName=page.getByPlaceholder('Enter First Name...');
      this.lastName= page.getByPlaceholder('Enter Last Name...');
      this.experiance=page.getByPlaceholder('Ex - 3 years');
      this.roleField= page.locator('.css-qbdosj-Input');
      this.jobRoleName=page.locator('React Native');
      
      this.addSummary=page.getByText('Click Here to Add Summary');
      this.enterSummary=page.getByPlaceholder('Add your summary...');

      this.techSkillsField=page.locator('#techSkills').nth(1);
      this.skillName=page.getByText('script').nth(1);
      this.dataBaseField=page.locator("#database");
      this.dataBaseName=page.getByText("mysql");
      this.awsField=page.locator('#aws');
      this.awsName=page.getByText("lamda");
      this.projectManagementToolField=page.locator("#projectManageMentList");
      this.toolName=page.getByText("rello");
      this.sourceControlField=page.locator("#sourceControll");
      this.sourceControlName=page.getByText("Git").first();

      this.addProjectBtn=page.locator("#addProjectBtn");
      this.projectNameField=page.locator("#projectTitle");
      this.addTechnologiesField=page.getByText('Click Here to Add Technologies');
      this.technologyName=page.getByPlaceholder('Add project technologies...');
      this.responsibilitiesField=page.getByText('Click Here to Add Responsibilities');
      this.addResponsibilitiesName=page.getByPlaceholder('Add project responsibilities');
      this.descriptionField=page.getByText('Click Here to Add Description');
      this.addDescriptionName= page.getByPlaceholder('Add project description...');
      this.durationField=page.getByText('Click Here to Add Durationoptional');
      this.durationtextClick=page.getByText('Click Here to Add Duration');
      this.durationTime= page.getByPlaceholder('Ex - 3 Months');
      this.addEducation= page.locator("#addDetailsBtn");
      this.educationDetails= page.getByPlaceholder('Add your education...');


    }

    async basicInfo (firstName,secondName,experiance)
    {
      await this.firstName.fill(firstName);
      await this.lastName.fill(secondName);
      await this.experiance.fill(experiance);
    }
    
    async switchToSummaryTab()
    {
      await this.nextButton.click();
    }

    async summaryTab(summaryPoint)
    {
      await this.addSummary.click();
      await this.enterSummary.fill(summaryPoint);
      await this.addButton.click();
    }

    async switchEducationTab()
    {
      await this.nextButton.click();
    }

    async education(educationName)
    {
      await this.addEducation.click();
      await this.educationDetails.fill(educationName);
      await this.addButton.click();
    }
    async switchToTechskillsTab()
    {
      await this.nextButton.click();
    }

    async techSkills()
    {
      await this.techSkillsField.click();
      await this.skillName.click();
    }

    async dataBase()
    {
      await this.dataBaseField.click();
      await this.dataBaseName.click();
    }

    async aws()
    {
      await this.awsField.click();
      await this.awsName.click();
    }

    async projectManagementTool()
    {
      await this.projectManagementToolField.click();
      await this.toolName.click();
    }

    async sourceControll()
    {
      await this.sourceControlField.click();
      await this.sourceControlName.click();
    }

    async switchToProjectTab()
    {
      await this.nextButton.click();
    }

    async projectTitle(projectName)
    {
      await this.addProjectBtn.click();
      await this.projectNameField.fill(projectName);
    }

    async addtechnologies(techName)
    {
      await this.addTechnologiesField.click();
      await this.technologyName.fill(techName);
      await this.addButton.click();
    }

    async addResponsibilities(responsibilities)
    {
      await this.responsibilitiesField.click();
      await this.addResponsibilitiesName.fill(responsibilities);
      await this.addButton.click();
    }

    async addDescription(descriptions)
    {
      await this.descriptionField.click();
      await this.addDescriptionName.fill(descriptions);
      await this.addButton.click();
    }

    async addProjectDuration(duration)
    {
      await this.durationField.click();
      await this.durationtextClick.click();
      await this.durationTime.fill(duration);
      await this.addButton.click();
    }
     
    async saveProject()
    {
      await this.saveBtn.click();
      await this.page.waitForLoadState("networkidle");
    }

    async exportPDF()
    {
      const page1Promise = this.page.waitForEvent('popup');
      await this.saveBtn.click();
      const page1 = await page1Promise;
      await page1.waitForLoadState('networkidle');
      // expect(await page1.screenshot()).toMatchSnapshot("profileVijay1.png");



      // // const downloadPromise = page1.waitForEvent('download');
      // await page1.getByText('//*[@id="icon"]/iron-icon/svg').click();
      // const download = await downloadPromise; 

      // const page1Promise = this.page.waitForEvent('popup');
      // const downloadPromise = this.page.waitForEvent('download');
      // await this.page.getByRole('button', { name: 'SAVE' }).click();
      // const page1 = await page1Promise;
      // await page1.getByRole('icon',{ name: 'Download' }).click();
      // const download = await downloadPromise;
      // Wait for the download process to complete and save the downloaded file somewhere.
      // await download.saveAs('C:\Users\Softsuave Vijay\Documents' + download.suggestedFilename());
      // await this.page.projectTitle()
    }
  }
module.exports={ProfileCreationPage}; 