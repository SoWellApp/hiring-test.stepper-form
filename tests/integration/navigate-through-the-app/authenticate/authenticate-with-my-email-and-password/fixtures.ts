import { test as base } from "playwright-bdd"
import { parseType } from "type-check"
import { LoginPage } from "tests/pages/auth-page"
import { Intercept } from "tests/support/utils"

// export custom test function
export const test = base.extend<{
  pageObjects: { loginPage: LoginPage }
  authIntercepts: Record<string, Intercept>
}>({
  authIntercepts: async ({}, use) => {
    await use({
      signin: {
        method: "POST",
        url: "**/sign-in",
        payload: parseType(`
        {
          auth: {
            email: String,
            password: String
          }
        }
        `)
      }
    })
  }
})
