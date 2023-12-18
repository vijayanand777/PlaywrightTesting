class EditPDF{

    constructor(page)
    {
      this.page=page;
      this.editBtn= page.locator("[data-testid='EditIcon']").first();
      this.clearSelection= page.getByText("CLEAR SELECTION");
    }
    
    async clickOnEditBtn()
    {
       await this.editBtn.click();
       await this.page.waitForLoadState('networkidle');
    }

    async clearExistingData()
    {
        await this.clearSelection.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports={EditPDF};