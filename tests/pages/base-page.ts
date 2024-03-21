import { config } from "../support/config"
import { Page, BrowserContext } from "playwright"
import { join } from "path"

export abstract class BasePage {
  page: Page
  context: BrowserContext
  customContext: Record<string, any>

  public get commonElements() {
    return {
      navigation: {
        users: "users",
        sectors: "sectors"
      }
    }
  }

  constructor(page: Page, context: BrowserContext) {
    this.page = page
    this.context = context
    this.customContext = {}
  }

  public abstract get relativeUrl(): string
  public get url() {
    return `${config.APP_URL}${this.relativeUrl}`
  }

  public visit(optionalUrl?: string) {
    const pageToGoTo = optionalUrl
      ? `${config.APP_URL}${optionalUrl}`
      : config.APP_URL

    return this.page.goto(pageToGoTo)
  }

  public getHeader() {
    return this.page.getByTestId("header")
  }

  public isCurrentPage(): boolean {
    return this.url === this.page.url()
  }

  public screenshot(name: string): Promise<Buffer> | undefined {
    return this.page.screenshot({ path: join("screenshots", `${name}.png`) })
  }

  public getNavigationButton(
    btnName: keyof typeof this.commonElements.navigation
  ) {
    return this.page.getByTestId(this.commonElements.navigation[btnName])
  }

  public getConfirmButton(btnName: string) {
    if (btnName === "yes") {
      return this.page.getByTestId("btn-yes")
    } else if (btnName === "no") {
      return this.page.getByTestId("btn-no")
    } else {
      throw "Unknown confirm button name"
    }
  }
}
