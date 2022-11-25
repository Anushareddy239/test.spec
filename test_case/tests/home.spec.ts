import { test, expect, Page } from '@playwright/test';
import {stdLocator} from "../locators/studentloc";
import { pObj } from '../pageobject/student.po';

test.describe('home', () => {
    
     let Locator: pObj;
     let stdLocator: { goto: () => any; fill: () => any; click: () => any; };


    test('open Mhe', async ({ page }) => {
        Locator = new pObj(page);

    
        await Locator.navigate();
        //console.log(await page.title());
        //await expect(page).toHaveTitle("McGraw Hill Education");
        await Locator.fill();
        await Locator.click();
   
    })

    
    
})
