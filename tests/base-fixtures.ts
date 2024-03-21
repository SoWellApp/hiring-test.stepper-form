import { test as base } from "playwright-bdd"
import { mergeTests } from "@playwright/test"
import { LoginPage } from "tests/pages/auth-page"
import { CommonPage } from "./pages/common-page"

// export custom test function
export const baseTest = base.extend<{
  pageObjects: {
    loginPage: LoginPage
    commonPage: CommonPage
  }
}>({
  pageObjects: async ({ page, context }, use) => {
    await use({
      loginPage: new LoginPage(page, context),
      commonPage: new CommonPage(page, context)
    })
  }
})

export const test = mergeTests(baseTest)
