import { test as base } from "playwright-bdd"
import { mergeTests } from "@playwright/test"
import { LoginPage } from "tests/pages/auth-page"
import { CommonPage } from "./pages/common-page"
import { User } from "src/types/interfaces"
import { users } from "./integration/view-users-list/fixture/users"

// export custom test function
export const baseTest = base.extend<{
  pageObjects: {
    loginPage: LoginPage
    commonPage: CommonPage
  },
  usersFixture: User[]
}>({
  pageObjects: async ({ page, context }, use) => {
    await use({
      loginPage: new LoginPage(page, context),
      commonPage: new CommonPage(page, context)
    })
  },
  usersFixture: async ({ }, use) => {
    await use(users)
  }
})

export const test = mergeTests(baseTest)
