import test, { Locator, Page, expect } from "@playwright/test";
import { getRandomIntInRange } from "../helpers/mathHelper";
import { AgeAndCookiesConsent } from "../pageElements/ageAndCookiesConsent";

export class HomePage {
  private bestVideosSection: Locator;
  private allBestVideos: Locator;
  private URL = "/";
  ageAndCookiesConsent: AgeAndCookiesConsent;

  constructor(private page: Page) {
    this.bestVideosSection = this.page.locator("div[data-el-block=best]");
    this.allBestVideos = this.page.locator("a[data-veb=best]");
    this.ageAndCookiesConsent = new AgeAndCookiesConsent(page);
  }

  async openViaUrl() {
    await test.step("Opening home page via url", async () => {
      await this.page.goto(this.URL);
    });
  }

  async verifyPageLoaded() {
    await test.step("Verifying that home page has loaded", async () => {
      await expect(this.bestVideosSection).toBeVisible();
    });
  }

  async clickOnRandomVideoFromBestVideos() {
    await test.step("Clicking on a random video in the 'best videos' section", async () => {
      await test.step("Waiting for the videos in the section to be loaded", async () => {
        await expect(this.allBestVideos.first()).toBeVisible();
      });
      await test.step("Clicking on a random video", async () => {
        const allVideos = await this.allBestVideos.all();
        const videoIndex = getRandomIntInRange(0, allVideos.length - 1);
        await test.step(`Clicking on the video with index ${videoIndex}`, async () => {
          allVideos[videoIndex].click();
        });
      });
    });
  }
}
