import { test as base } from "@playwright/test";
import { HomePage } from "./pages/homePage";
import { VideoPage } from "./pages/videoPage";

type PomFixtures = {
  homePage: HomePage;
  videoPage: VideoPage;
};

export const test = base.extend<PomFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  videoPage: async ({ page }, use) => {
    const videoPage = new VideoPage(page);
    await use(videoPage);
  },
});

export { expect } from "@playwright/test";
