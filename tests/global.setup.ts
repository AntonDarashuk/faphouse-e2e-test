import { test as setup } from "../baseTest";

setup(
  "open home page and accept cookies and age consent",
  async ({ homePage, page }) => {
    await homePage.openViaUrl();
    await homePage.ageAndCookiesConsent.accept();
    await page.context().storageState({ path: "../storage.json" });
  }
);
