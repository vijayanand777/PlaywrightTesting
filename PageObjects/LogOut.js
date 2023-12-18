class LogOut {
    constructor(page) {
        this.page = page;
        this.ProfileDropDown = page.locator("#arrowDropDownIcon");
        this.LogOutButton = page.locator("#logout");

    }

    async LogOutUser() {
        await this.ProfileDropDown.click();
        await this.LogOutButton.click();
    }
}
module.exports = { LogOut };