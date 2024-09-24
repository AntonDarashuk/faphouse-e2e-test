import test, { Locator, Page, expect } from "@playwright/test";

export class VideoPage {
  video: Locator;
  muteButton: Locator;
  fullVideoSectionClosed: Locator;

  constructor(private page: Page) {
    this.video = this.page.locator(".video-purchase video");
    this.fullVideoSectionClosed = this.page.locator(
      ".video-purchase__menu_closed"
    );
    this.muteButton = this.page.locator(
      "div[data-el-block=best] [data-el=Thumb]"
    );
  }

  async verifyPageLoaded() {
    await test.step("Verifying that video page has loaded", async () => {
      await expect(this.video).toBeVisible();
    });
  }

  async verifyGetFullVideoSectionIsClosed() {
    await test.step("Verifying that 'get full video' section on the right of the video is disappearing", async () => {
      await expect(this.fullVideoSectionClosed).toBeVisible();
    });
  }

  async verifyVideoIsPlaying() {
    await test.step("Verifying that video is playing", async () => {
      await expect(this.video).toHaveJSProperty("paused", false);
    });
  }

  async verifyVideoIsMuted() {
    await test.step("Verifying that video is muted", async () => {
      await expect(this.video).toHaveJSProperty("muted", true);
    });
  }
}
