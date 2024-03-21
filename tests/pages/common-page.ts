import { BrowserContext, Page } from "@playwright/test"
import { BasePage } from "./base-page"

export class CommonPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context)
  }
  public get relativeUrl() {
    return ""
  }

  public getName() {
    return ""
  }

  public getInputField() {
    return this.page.getByTestId("input-field")
  }

  public getNotification() {
    return this.page.locator(".q-notification__message")
  }

  public getSaveButton() {
    return this.page.getByTestId("save-button").locator("svg")
  }

  public getDialog(dialogName: string) {
    if (dialogName === "confirm") {
      return this.page.getByTestId("confirm-dialog")
    } else {
      throw "Unknown dialog name"
    }
  }
}
