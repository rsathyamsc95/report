import {test,expect} from '@playwright/test'
test('test home page',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    // const name=page.locator("#name");
    // await page.waitForTimeout(2000);
    // await name.fill('sathya');
    // const email=await page.locator('#email');
    // await page.waitForTimeout(2000);
    // await email.fill('sathya@gamil.com');
    // const phone=await page.locator('#phone');
    // await page.waitForTimeout(2000);
    // await phone.fill('8765432345');
    // const address=await page.locator('#textarea');
    // await page.waitForTimeout(2000);
    // await address.fill('hosur');
    // await page.waitForTimeout(2000);
    // await page.locator('#male').check();
    //  await page.waitForTimeout(2000);
    const checkbox=await page.locator('//input[@value="sunday"]');
   await checkbox.check();

    
})