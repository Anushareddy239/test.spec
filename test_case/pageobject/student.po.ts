import { Page } from "@playwright/test";
import { stdLocator } from "../locators/studentloc";


export class pObj{
    page: Page;

    private stdLocator:stdLocator;
   // stdlocator: pObj;
  //  static goto: any;
  //  static stdLocator: any;

    async navigate(){
        await this.page.goto("https://accounts.mheducation.com/login?app=connect.mheducation.com&redirectUrl=https:%2F%2Fcaas.mheducation.com%2Fcaas%2Fheclr%2FlaunchConnect");
        await this.page.waitForTimeout(2000);
    }
   async fill(){
    // await this.stdLocator.stdlocator.email.fill("gaayathrim@connect.com"); //page.locator(#login-email).fill
    // await this.stdLocator.stdlocator.pwd.fill("Connect5");
        console.log("I am here");
        // console.log(this.stdLocator.stdlocator.email);
        // console.log(this.stdLocator.stdlocator.pwd);
        // console.log(this.stdLocator.stdlocator.loginBtn);
        
        // await this.page.locator('#login-email').type("gaayathrim@connect.com");
        // await this.page.locator('#login-password').type("Connect5");
        

         await this.page.locator(this.stdLocator.stdlocator.email).fill("gaayathrim@connect.com");
         await this.page.locator(this.stdLocator.stdlocator.pwd).fill("Connect5");

   }
   async click(){
    //await this.stdLocator.stdlocator.loginBtn.click();
    await this.page.locator(this.stdLocator.stdlocator.loginBtn).click();
   }
    
    constructor(page) {
    
        this.page=page;
        this.stdLocator =new stdLocator;
    

        }
    }
    