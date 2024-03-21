import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test"
import { DataTable } from "@cucumber/cucumber"
import Promise from "bluebird"

import { test } from "tests/base-fixtures"

const { Given, Then, When } = createBdd(test)

Given("I am authenticated as {string}", async ({ page }, username: string) => {
    await page.goto("");
    await page.evaluate((usernameValue) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.UserStore.setConnectedUser(usernameValue);
    }, username)
})

Given("I am on the {string} page", async ({ page, usersFixture }, pageName: string) => {
    if (pageName == "Users list") {
        await page.route("**/users", route => route.fulfill({
            status: 200,
            json: usersFixture
        }));
        await page.goto("#/list");
    } else {
        throw "Unknown page"
    }

});

Then("I can see the page header {string}", async ({ page }, headerText: string) => {
    await expect(page.getByTestId("page-title")).toHaveText(headerText);
});

Then("I see a searchbar", async ({ page }) => {
    await expect(page.getByTestId("searchbar")).toBeVisible()
});

Then("I see {int} users on the page", async ({ page }, userCount: number) => {
    await expect(page.getByTestId("users-list").locator(".user-item")).toHaveCount(userCount);
});

Then("I see the following details for each user", async ({ page }, usersDataTable: DataTable) => {
    const rows = usersDataTable.hashes()
    await Promise.each(rows, async (row, index) => {
        const element = page.getByTestId("users-list").locator(".user-item").nth(index);
        await expect(element.getByTestId("user-firstname")).toHaveText(row["first name"]);
        await expect(element.getByTestId("user-lastname")).toHaveText(row["last name"]);
        await expect(element.getByTestId("user-email")).toHaveText(row.email);
        await expect(element.getByTestId("user-city")).toHaveText(row.city);
    })
});

When("I write {string} on the searchbar", async ({ page }, searchKeyword: string) => {
    await page.getByTestId("searchbar").pressSequentially(searchKeyword)
});