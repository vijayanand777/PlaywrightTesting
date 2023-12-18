// const a={
//   addTechnologiesField:'Test, Test1',
//   technologyName:[React, ReactNative],
// responsibilitiesField:''
// }

// for(let key in a){
//   // addTechnologiesField
//   if(Array.isArray(a[key])){
//     for(let i=0; i< a[key].length; i++){
//       ProjectTab[key].getByText{a[key][i]
//       }
//     }
//   }
//   else
//   ProjectTab[key].getByText{a[key]}
//   // technologyName
//   // responsibilitiesField
// }

class ProjectTab {
  constructor(page) {
    this.page = page;
    this.addProjectBtn = page.locator("#addProjectBtn");
    this.projectNameField = page.locator("#projectTitle");
    this.addTechnologiesField = page.getByText('Click Here to Add Technologies');
    this.technologyName = page.getByPlaceholder('Add project technologies...');
    this.responsibilitiesField = page.getByText('Click Here to Add Responsibilities');
    this.addResponsibilitiesName = page.getByPlaceholder('Add project responsibilities');
    this.descriptionField = page.getByText('Click Here to Add Description');
    this.addDescriptionName = page.getByPlaceholder('Add project description...');
    this.durationField = page.getByText('Click Here to Add Durationoptional');
    this.durationtextClick = page.getByText('Click Here to Add Duration');
    this.durationTime = page.getByPlaceholder('Ex - 3 Months');
    this.addEducation = page.locator("#addDetailsBtn");
    this.educationDetails = page.getByPlaceholder('Add your education...');
    this.addButton = page.getByRole('button', { name: 'add' });
    this.saveBtn = page.getByRole('button', { name: 'SAVE' });
  }

  


  async projectTitle(projectName) {
    await this.addProjectBtn.click();
    await this.projectNameField.fill(projectName);
  }

  async addtechnologies(technologyName) {
    await this.addTechnologiesField.click();
    await this.technologyName.fill(technologyName);
    await this.addButton.click();
  }

  async addResponsibilities(responsibilities1) {
    await this.responsibilitiesField.click();
    await this.addResponsibilitiesName.fill(responsibilities1);
    await this.addButton.click();
  }

  async addDescription(descriptions1) {
    await this.descriptionField.click();
    await this.addDescriptionName.fill(descriptions1);
    await this.addButton.click();
  }

  async addProjectDuration(duration) {
    await this.durationField.click();
    await this.durationtextClick.click();
    await this.durationTime.fill(duration);
    await this.addButton.click();
  }

  async saveProject() {
    await this.saveBtn.click();
    await this.page.waitForLoadState("networkidle");
    await this.page.pause();
  }

  async exportPDF() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.saveBtn.click();
    const page1 = await page1Promise;
    await page1.waitForLoadState('networkidle');
    // await expect(await page1.screenshot()).toMatchSnapshot("profileVijay.png");
  }

}

module.exports = { ProjectTab };