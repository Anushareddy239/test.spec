import { test, expect} from '@playwright/test';
import PractisePage from "../pages/practise.page";
import {faker} from '@faker-js/faker';


test.describe('practise', () => {
    let practisePage: PractisePage;

    test('', async ({ page }) => {
        const randName=faker.name.firstName()
        const randMail=faker.internet.email()
        console.log(randName);
        console.log(randMail);
        
    })
    

    test('open Mhe', async ({ page }) => {

        practisePage=new PractisePage(page);

        await page.goto('/');
        //await page.pause();
        await practisePage.mail.fill("gaayathrim@connect.com");
        await practisePage.pwd.fill("Connect5");
        await practisePage.btn.click();
        //  await page.locator("text=My courses").waitFor({
        //      state:'visible',timeout:5000
        //  })
    
        await expect(practisePage.head).toBeVisible({timeout:30000});
        console.log(practisePage.head);
        

    })
    test('open Mhe visible', async ({ page }) => {

        await page.goto("https://accounts.mheducation.com/login?app=connect.mheducation.com");
        const hedding= await page.locator('text=connect');
        await expect(hedding).toBeVisible();

    })

})