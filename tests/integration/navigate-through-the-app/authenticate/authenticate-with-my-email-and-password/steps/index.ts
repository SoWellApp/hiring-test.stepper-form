import { expect } from "@playwright/test"
import { createBdd } from "playwright-bdd"

import { test } from "tests/base-fixtures"

const { Given, When, Then } = createBdd(test)

Given("the user {string} exists", ({ }, email: string) => {
  // NOTE: Do nothing
})

Given(
  "I am on the Admin Login page",
  async ({ pageObjects: { loginPage } }) => {
    await loginPage.visit()
  }
)

Then(
  "I can see an empty Authentication form",
  async ({ pageObjects: { loginPage } }) => {
    await expect(loginPage.getInput("email")).toBeEmpty()
    await expect(loginPage.getInput("password")).toBeEmpty()
  }
)

When(
  "I click on the Sign-in button",
  async ({ pageObjects: { loginPage } }) => {
    // TODO: implement
  }
)

Then(
  "I'm redirected to the Admin Manage users page",
  async ({ page, pageObjects: { } }) => {
    // TODO: implement
  }
)

Then(
  "the following Error message is displayed : {string}",
  async ({ pageObjects: { loginPage } }, message: string) => {
    await expect(loginPage.page.locator(".q-notification__message")).toHaveText(
      new RegExp(message)
    )
  }
)

Then("I'm not redirected", async ({ page, pageObjects: { loginPage } }) => {
  await expect(page).toHaveURL(loginPage.url)
})

When(
  "I type {string} on the {string} input",
  async ({ }, arg: string, arg1: string) => {
    // ...
  }
)

Then("I am redirected to the Admin Login page", async ({ }) => {
  // ...
})



Given("my authentication expired", async ({ }) => {
  // ...
})
