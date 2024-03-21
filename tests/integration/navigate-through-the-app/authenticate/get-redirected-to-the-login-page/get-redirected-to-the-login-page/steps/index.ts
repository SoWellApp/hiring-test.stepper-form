import { expect } from "@playwright/test"
import { createBdd } from "playwright-bdd"
import { DataTable } from "@cucumber/cucumber"
import Promise from "bluebird"

import { test } from "tests/base-fixtures"

const { Given, Then } = createBdd(test)

Given("the App is closed", () => {
  // NOTE: Do nothing
})

Then("I open the App", async ({ page }) => {
  await page.goto("/")
})

Then(
  "I can't go to any page except the following ones :",
  async ({ page, pageObjects }, table: DataTable) => {
    const exceptions = table.hashes().map((row) => row.Name)
    const pages = Object.values(pageObjects)
    await Promise.each(pages, async (currentPage) => {
      if (exceptions.includes(currentPage.getName())) return
      await currentPage.visit()
      await expect(currentPage.page).toHaveURL(pageObjects.loginPage.url)
    })
  }
)
