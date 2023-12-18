class TechSkillsTab {

   constructor(page) {
      this.page = page;

      this.techSkillsField = page.locator('#techSkills').nth(1);
      this.techNameInputField = page.locator('#react-select-3-input');
      this.addNewTechSkill = page.getByText("Add New Tech Skill Set");
      this.skillNames = page.locator('.css-rmrg4r-option div');

      this.dataBaseField = page.locator("#database");
      this.dataBaseNameInputField = page.locator('#react-select-4-input');
      this.addNewDataBase = page.getByText('Add New Database');
      this.dataBaseNames = page.locator('.css-rmrg4r-option div');

      this.awsField = page.locator('#aws');
      this.AWSInputField = page.locator('#react-select-5-input');
      this.addNewAWS = page.getByText('Add New AWS');
      this.AWSNames = page.locator('.css-rmrg4r-option div');

      this.projectManagementToolField = page.locator("#projectManageMentList");
      this.PMTInputField = page.locator('#react-select-6-input');
      this.addNewPMT = page.getByText('Add New Type');
      this.PMTNames = page.locator('.css-rmrg4r-option div');

      this.sourceControllField = page.locator("#sourceControll");
      this.sourceControllInputField = page.locator('#react-select-7-input');
      this.addNewSourceControll = page.getByText('Add New Source Control');
      this.sourceControllNames = page.locator('.css-rmrg4r-option div');

   }

   async fillTechSkills(techName) {
      await this.techSkillsField.click();
      await this.techNameInputField.fill(techName);
      const names = this.skillNames;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);

      if (count === 0) {
         await this.addNewTechSkill.click();
      }

      for (let i = 0; i < count; ++i) {
         const name=await names.nth(i).textContent();
         if ( name?.toLowerCase()=== techName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }

   async fillDataBase(dataBaseName) {
      await this.dataBaseField.click();
      await this.dataBaseNameInputField.fill(dataBaseName);
      const names = this.dataBaseNames;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);

      if (count === 0) {
         await this.addNewDataBase.click();
      }

      for (let i = 0; i < count; ++i) {
          const name=await names.nth(i).textContent();
         if ( name?.toLowerCase()=== dataBaseName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }

      }

   }
   async fillAWS(AWSName) {
      await this.awsField.click();
      await this.AWSInputField.fill(AWSName);
      const names = this.AWSNames;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewAWS.click();
      }
      for (let i = 0; i < count; ++i) {  
         const name =await names.nth(i).textContent()
         if (name?.toLowerCase() === AWSName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
   
   async fillProjectManagement(ProjectManagementToolName) {
      await this.projectManagementToolField.click();
      await this.PMTInputField.fill(ProjectManagementToolName);
      const names = this.PMTNames;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewPMT.click();
      }
      for (let i = 0; i < count; ++i) {
         const name =await names.nth(i).textContent()
         if (await name?.toLowerCase() === ProjectManagementToolName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }

   async fillSourceControll(sourceControllName) {
      await this.sourceControllField.click();
      await this.sourceControllInputField.fill(sourceControllName);
      const names = this.sourceControllNames;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewSourceControll.click();
      }
      for (let i = 0; i < count; ++i) {
         const name = await names.nth(i).textContent();
         if (name?.toLowerCase() === sourceControllName?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }
      }
   }
}
module.exports = { TechSkillsTab };