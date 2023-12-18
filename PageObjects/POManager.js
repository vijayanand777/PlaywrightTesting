const { LogInPage } = require('./LogInPage');
const { ProfileCreationPage } = require('./ProfilCreationPage');
const { JobRole } = require('./JobRole');
const { TechSkillsTab } = require('./TechSkillsTab');
const { ProjectTab } = require('./ProjectTab');
const { LogOut } = require('./LogOut');
const {EditPDF} = require ('./EditPDF');

class POManager {
  constructor(page) {
    this.page = page;
    this.LogInPage = new LogInPage(this.page);
    this.ProfileCreationPage = new ProfileCreationPage(this.page);
    this.JobRole = new JobRole(this.page);
    this.TechSkillsTab = new TechSkillsTab(this.page);
    this.ProjectTab = new ProjectTab(this.page);
    this.LogOutTab = new LogOut(this.page);
    this.EditPDFPage= new EditPDF(this.page);
  }
  async getLoginPage() {
    return this.LogInPage;
  }

  async getProfileCreationPage() {
    return this.ProfileCreationPage;
  }
  async getJobRole() {
    return this.JobRole;
  }
  async getTechSkillsTab() {
    return this.TechSkillsTab;
  }

  async getProjectTab() {
    return this.ProjectTab;
  }
  async getLogoutTab() {
    return this.LogOutTab;
  }
  async getEditPDF() {
    return this.EditPDFPage;
  }
}
module.exports = { POManager };