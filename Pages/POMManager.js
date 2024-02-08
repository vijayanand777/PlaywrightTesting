const {LogInPage} = require("./LogInPage.js");
const {ProfilePage} =require("./ProfilePage.js")
class POMManager
{
    constructor(page)
    {
        this.page= page;
        this.LogInPages= new LogInPage(this.page);
        this.ProfilePage= new ProfilePage(this.page);
    }

    async getLogInPage()
    {
        return this.LogInPages;
    }
    async getProfilePage()
    {
        return this.ProfilePage;
    }

}
module.exports={POMManager}