import { expect } from "@playwright/test"
import { createBdd } from "playwright-bdd"
import { DataTable } from "@cucumber/cucumber"
import Promise from "bluebird"

import { test } from "tests/base-fixtures"

const { Given, Then, When } = createBdd(test)

Given("I am on the Login page", async ({ page }) => {
  await page.goto("#/login")
})

Then(
  "I can see {string} on the page title",
  async ({ page }, pageTitle: string) => {
    await expect(page.getByTestId("page-title")).toHaveText(pageTitle)
  }
)

Then(
  "I can see the following inputs:",
  async ({ page }, dataTable: DataTable) => {
    const rows = dataTable.hashes()

    await Promise.each(rows, async (row) => {
      await expect(page.locator(`.input-${row.input}`)).toBeVisible()
    })
  }
)

Then("I can see a login button", async ({ page }) => {
  await expect(page.getByTestId("btn-log-in")).toBeVisible()
})

Then("the login button is {string}", async ({ page }, btnState: string) => {
  const btnLogIn = page.getByTestId("btn-log-in")
  switch (btnState) {
    case "disabled":
      await expect(btnLogIn).toBeDisabled()
      break
    case "enabled":
      await expect(btnLogIn).toBeEnabled()
    default:
      await expect(btnLogIn).toBeVisible()
      break
  }
})

When(
  "I type {string} on the Username input",
  async ({ page }, username: string) => {
    await page.locator(".input-username").fill(username)
  }
)

When(
  "I type {string} on the Password input",
  async ({ page }, password: string) => {
    await page.locator(".input-password").pressSequentially(password)
  }
)

When("I click on the login button", async ({ page }) => {
  await page.getByTestId("btn-log-in").click()
})

Then("I am redirected to the Main page", async ({ page }) => {
  await expect(page).toHaveURL("#/user")
})


Then("I can see a toggle button on the Password input", async ({ page }) => {
  await expect(page.getByTestId("icon-eye")).toBeVisible()
  await expect(page.getByTestId("icon-eye")).toBeInViewport()
})

When("I click on the toggle button on the Password input", async ({ page }) => {
  await page.getByTestId("icon-eye").click()
})

Then(
  "I can see the {string} typed on the Password input",
  async ({ page }, password: string) => {

    await expect(page.locator(".input-password")).toHaveValue(password)
  }
)

When("I focus on the Username input", async ({ page }) => {
  await page.locator(".input-username").focus()
})


When("I focus out of the Username input", async ({ page }) => {
  await page.locator(".input-password").focus()
})

Then(
  "I see an error message saying {string} on the Username input",
  async ({ page }, hintMessage: string) => {
    await expect(page.locator(".input-username").getByRole("alert")).toHaveText(
      hintMessage
    )
  }
)

Then("the error message is no longer visible", async ({ page }) => {
  await expect(
    page.locator(".input-username").getByRole("alert")
  ).not.toBeVisible()
})

Then(
  "I see an error message saying {string} on the Password input",
  async ({ page }, message: string) => {
    await expect(page.getByTestId("password-hint")).toHaveText(message)
  }
)

Then(
  "I see a warning message saying {string} on the Password input",
  async ({ page }, message: string) => {
    await expect(page.getByTestId("password-hint")).toHaveText(message)
  }
)

Then("I see a message saying {string}", async ({ page }, message: string) => {
  await expect(page.getByTestId("password-hint")).toHaveText(message)
})
