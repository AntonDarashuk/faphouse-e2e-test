import { test } from "../baseTest";

test.describe("Best Videos", () => {
  test("Verify auto-play with muted sound for 'Best Videos' opened from the home page", async ({
    homePage,
    videoPage,
  }) => {
    await test.step("- Open random video from the 'Best Videos' section on the home page", async () => {
      await homePage.openViaUrl();
      await homePage.clickOnRandomVideoFromBestVideos();
    });

    await test.step("- Verify video is opened with auto-play", async () => {
      await videoPage.verifyPageLoaded();
      await videoPage.verifyGetFullVideoSectionIsClosed();
      await videoPage.verifyVideoIsPlaying();
    });

    await test.step("- Verify video is muted", async () => {
      await videoPage.verifyVideoIsMuted();
    });
  });
});
