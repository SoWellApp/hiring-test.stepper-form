import { expect } from "@playwright/test"
import { createBdd } from "playwright-bdd"
import { DataTable } from "@cucumber/cucumber"

import { test } from "tests/base-fixtures"
import { users } from "../fixture/users"
import { Promise } from "bluebird"

const { Given, When, Then } = createBdd(test)

// 1. Missing step definition for "tests/integration/view-users-list/index.feature:4:9"
Given(
  "I am authenticated as an {string}",
  async ({ page }, username: string) => {
    await page.goto("#/")
    await page.evaluate((value) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.UserStore.setConnectedUser(value)
    }, username)
  }
)

// 2. Missing step definition for "tests/integration/view-users-list/index.feature:5:9"
Given("I am on the user page", async ({ page }) => {
  await page.route("**/users", (route) =>
    route.fulfill({
      status: 200,
      json: users
    })
  )
  await page.goto("#/user")
})

// 3. Missing step definition for "tests/integration/view-users-list/index.feature:6:9"
Given(
  "I see the page title is {string}",
  async ({ page }, titlePage: string) => {
    await expect(page.getByTestId("page-title")).toHaveText(titlePage)
  }
)

// 4. Missing step definition for "tests/integration/view-users-list/index.feature:9:9"
Then("I see {int} users", async ({ page }, usersCount: number) => {
  // ...
  await expect(
    page.getByTestId("users-list").locator(".user-item")
  ).toHaveCount(usersCount)
})

// 5. Missing step definition for "tests/integration/view-users-list/index.feature:10:9"
Then(
  "I see a search form with label {string}",
  async ({ page }, labelInput: string) => {
    // ...
    await expect(page.getByLabel(labelInput)).toBeVisible()
  }
)

// 6. Missing step definition for "tests/integration/view-users-list/index.feature:11:9"
Then(
  "I see the following users list:",
  async ({ page }, dataTable: DataTable) => {
    const rows = dataTable.hashes()
    await Promise.each(rows, async (row, index) => {
      const element = page
        .getByTestId("users-list")
        .locator(".user-item")
        .nth(index)
      await expect(element.getByTestId("label-item")).toHaveText(row["user name"])
      await expect(element.getByTestId("caption-item")).toHaveText(row.email)
    })
    // ...
  }
)

// 7. Missing step definition for "tests/integration/view-users-list/index.feature:20:9"
When(
  "I fill the search form with {string}",
  async ({ page }, search: string) => {
    await page.getByTestId("search-input").pressSequentially(search)
    // ...
  }
)
