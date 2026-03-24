import {test,expect, selectors} from "@playwright/test";
import { a } from "../../playwright-report/trace/assets/defaultSettingsView-BEpdCv1S";


test("Action", async ({page})=>{
    await page.getByPlaceholder('Full Name').fill('Laksha');
    await page.getByPlaceholder('Full Name').clear();
    await page.getByPlaceholder('Full Name').fill('');
    await page.locator("#userName").type("Laksha", { delay: 50 });
    await page.getByPlaceholder('checkbox').check();
    await page.mouse.move(0,0);
    await page.mouse.down();
    await page.mouse.move(0,100);
    await page.mouse.up();
    await page.keyboard.press('CapsLock');
    await page.keyboard.type('hello');
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.dragAndDrop("#draggable", "#droppable");
    await page.hover("#droppable");
    await page.setInputFiles('#uploadFile', 'src/pages/ElementsPage.ts');
    (await page.waitForEvent('download')).saveAs('downloadedFile.txt');

    //ul>li:nth-child(3).click();

    await page.selectOption('#selectMenu', 'audi');


    //Built in assertions
    await expect(page).toHaveTitle(/.*Action.*/);
    await expect(page).toHaveURL(/.*action.*/);
    await expect(page.getByText('Action')).toBeVisible();

    await page.getByText('Submit', { exact: true }).click()

    await expect.soft(page.getByText('#draggable',{exact: true})).toHaveAttribute('id', 'draggable')
});     