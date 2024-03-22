import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test"
import { DataTable } from "@cucumber/cucumber"
import Promise from "bluebird"

import { test } from "tests/base-fixtures"

const { Given, Then, When } = createBdd(test)

Given('I am on the Login page', async ({ page }) => {
    await page.goto("");
});

Then('I can see {string} on the page title', async ({ page }, pageTitle: string) => {
    await expect(page.getByTestId("page-title")).toHaveText(pageTitle);
});

Then('I can see the following inputs:', async ({ page }, inputDataTable: DataTable) => {
    const rows = inputDataTable.hashes()
    await Promise.each(rows, async (row) => {
        await expect(page.getByTestId("login-form").locator(`.${row.input}-input`)).toBeVisible();
    })
});

Then('I can see a login button', async ({ page }) => {
    await expect(page.getByTestId('login-btn')).toBeVisible();
});

Then('the login button is {string}', async ({ page }, loginButtonState: string) => {
    if (loginButtonState == 'disabled') {
        await expect(page.getByTestId("login-btn")).toBeDisabled();
    } else if (loginButtonState == 'enabled') {
        await expect(page.getByTestId("login-btn")).toBeEnabled();
    } else {
        throw 'Unknown button state';
    }
});

When('I type {string} on the Username input', async ({ page }, username: string) => {
    await page.getByTestId("username-input").pressSequentially(username)
});

When('I type {string} on the Password input', async ({ page }, password: string) => {
    await page.getByTestId("password-input").pressSequentially(password)
});

When('I click on the login button', async ({ page }) => {
    await page.getByTestId("login-btn").click();
});

Then('I am redirected to the Main page', async ({ page }) => {
    await page.goto("#/list");
});

Then('I can see a toggle button on the Password input', async ({ page }) => {
    await expect(page.getByTestId("password-toggle-btn")).toBeVisible()
});

When('I click on the toggle button on the Password input', async ({ page }) => {
    await page.getByTestId("password-toggle-btn").click();
});

Then('I can see the {string} typed on the Password input', async ({ page }, password: string) => {
    await expect(page.getByTestId("password-toggle-btn")).toHaveValue(password);
});

When('I focus on the Username input', async ({ page }) => {
    await page.getByTestId("username-input").focus();
});

When('I focus out of the Username input', async ({ page }) => {
    await page.getByTestId("username-input").blur();
});

Then('I see an error message for the Username input saying {string}', async ({ page }, errorMessage: string) => {
    await expect(page.locator(".username-input").getByRole('alert')).toHaveText(errorMessage);
});

Then('the error message is no longer visible', async ({ page }) => {
    await expect(page.getByTestId("username-input").getByRole('alert')).not.toBeVisible();

});

Then('I see an error message for the Password input saying {string}', async ({ page }, errorMessage: string) => {
    await expect(page.getByTestId("password-hint")).toHaveClass('text-negative');
    await expect(page.getByTestId("password-hint")).toHaveText(errorMessage);
});

Then('I see a warning message saying {string}', async ({ page }, warningMessage: string) => {
    await expect(page.getByTestId("password-hint")).toHaveClass('text-warning');
    await expect(page.getByTestId("password-hint")).toHaveText(warningMessage);
});

Then('I see a message saying {string}', async ({ page }, message: string) => {
    await expect(page.getByTestId("password-hint")).toHaveText(message);
});