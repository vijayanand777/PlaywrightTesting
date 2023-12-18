class JobRole {
   constructor(page) {
      this.page = page;
      this.roleField = page.locator('.css-qbdosj-Input');
      this.jobRoleNames = page.locator(".css-rmrg4r-option div");
      // this.rolesNames=page.locator(" .css-bfm9va-option");
      this.roleNameInputField = page.locator('#react-select-2-input');
      this.addNewRole = page.getByText("Add New Role ....");
   }

   async setJobRole(role) {
      await this.roleField.click();
      await this.roleNameInputField.fill(role);
      const names = this.jobRoleNames;
      const roleNames = await names.allTextContents();
      console.log(roleNames);
      const count = await names.count();
      console.log(count);
      if (count === 0) {
         await this.addNewRole.click();
      }
      for (let i = 0; i < count; ++i) {
         const name=await names.nth(i).textContent();
         if ( name?.toLowerCase()=== role?.toLowerCase()) {
            await names.nth(i).click();
            break;
         }

      }

   }
}
module.exports = { JobRole };