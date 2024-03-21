import { defineConfig, devices } from "@playwright/test"
import { defineBddConfig } from "playwright-bdd"

const testDir = defineBddConfig({
  importTestFrom: "./tests/base-fixtures.ts",
  paths: ["./tests/integration/**/*.feature"],
  require: ["tests/integration/**/steps/*.ts"],
  quotes: "backtick",
  featuresRoot: "./tests/integration"
})

export default defineConfig({
  testDir,
  reporter: [["html", { outputFolder: "tests/playwright-report" }]],
  use: {
    screenshot: "only-on-failure",
    baseURL: "http://127.0.0.1:8080"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  webServer: {
    command: "yarn dev:test",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe"
  },
  workers: process.env.CI ? 1 : 4,
  fullyParallel: true,
  maxFailures: 1
})
