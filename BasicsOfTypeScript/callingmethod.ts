import { HomePage } from "./inheritance";

async function testHomePage() {
    const homePage = new HomePage();
    await homePage.getTitle();
    await homePage.navigate();
}

testHomePage();
