import { Locator, Page, expect } from "@playwright/test";

export class AgeAndCookiesConsent {
  acceptButton: Locator;

  constructor(private page: Page) {
    this.acceptButton = this.page.locator("#cwc-accept");
  }

  async accept() {
    await expect(this.acceptButton).toBeVisible();
    await this.acceptButton.click();
    await expect(this.acceptButton).not.toBeVisible();
  }
}
