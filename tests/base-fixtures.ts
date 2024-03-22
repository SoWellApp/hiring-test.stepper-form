import { test as base } from "playwright-bdd"
import { mergeTests } from "@playwright/test"
import { LoginPage } from "tests/pages/auth-page"
import { CommonPage } from "./pages/common-page"
import { Post } from "src/types/index"
import { posts } from "./integration/view-posts/fixture/posts"
// export custom test function
export const baseTest = base.extend<{
  pageObjects: {
    loginPage: LoginPage
    commonPage: CommonPage
  }
  postsFixture: Post[]
}>({
  pageObjects: async ({ page, context }, use) => {
    await use({
      loginPage: new LoginPage(page, context),
      commonPage: new CommonPage(page, context)
    })
  },
  postsFixture: async ({}, use) => {
    await use(posts)
  }
})

export const test = mergeTests(baseTest)
