import { expect } from "@playwright/test"
import { createBdd } from "playwright-bdd"

import { test } from "tests/base-fixtures"

const { Given, When, Then } = createBdd(test)

// 1. Missing step definition for "tests/integration/view-posts/index.feature:3:9"
Given("I am authenticated as {string}", async ({ page }, username: string) => {
  await page.goto("")
  await page.evaluate((usernameValue) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.PostStore.setConnectedUser(usernameValue)
  }, username)
})

// 2. Missing step definition for "tests/integration/view-posts/index.feature:4:9"
Given("I am on the post page", async ({ page, postsFixture }) => {
  await page.route("*/", (route) =>
    route.fulfill({
      status: 200,
      json: postsFixture
    })
  )
  await page.goto("")
})

// 3. Missing step definition for "tests/integration/view-posts/index.feature:7:9"
Then("I see the page title {string}", async ({ page }, pageTitle: string) => {
  await expect(page.getByTestId("page-title")).toHaveText(pageTitle)
})

// 4. Missing step definition for "tests/integration/view-posts/index.feature:8:9"
Then(
  "I see a searchbar with label {string}",
  async ({ page }, labelInput: string) => {
    await expect(page.getByLabel(labelInput)).toBeVisible()
  }
)

// 5. Missing step definition for "tests/integration/view-posts/index.feature:9:9"
Then(
  "I see {int} posts on the {string} page",
  async ({ page }, postsCount: number) => {
    await expect(
      page.getByTestId("posts-list").locator(".post-item")
    ).toHaveCount(postsCount)
  }
)

// 6. Missing step definition for "tests/integration/view-posts/index.feature:10:9"
Then("I see the {string} button", async ({ page }, buttonName: string) => {
  if (buttonName == "LOAD MORE POST") {
    await expect(page.getByTestId("button-text")).toBeVisible()
  } else {
    throw "Button not found"
  }
})

// 7. Missing step definition for "tests/integration/view-posts/index.feature:11:9"
When("I click on the {string} button", async ({ page }) => {
  await page.getByTestId("button-text").click()
})

// 8. Missing step definition for "tests/integration/view-posts/index.feature:13:9"
When(
  "I fill the search form with {string}",
  async ({ page }, searchValue: string) => {
    await page.getByTestId("search-post").fill(searchValue)
  }
)

// 9. Missing step definition for "tests/integration/view-posts/index.feature:15:9"
Then(
  "The first post should be titled {string}",
  async ({ page }, firstTitle: string) => {
    await expect(
      page
        .getByTestId("posts-list")
        .locator(".post-item")
        .first()
        .locator(".post-title")
    ).toHaveText(firstTitle)
  }
)
