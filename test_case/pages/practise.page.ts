import { Locator, Page } from "@playwright/test";
class PractisePage{
    page: Page;
    mail: Locator;
    pwd: Locator;
    btn: Locator;
    head:Locator;

    constructor(page){

        this.page=page;
        this.mail=page.locator("#login-email");
        this.pwd=page.locator('#login-password');
        this.btn=page.locator('#login-submit-btn');
        this.head=page.locator('text=Tips and Tutorials');

    }
 

}
export default PractisePage;