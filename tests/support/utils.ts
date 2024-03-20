import { expect } from "@playwright/test"
import { Page } from "playwright/test"
import { parsedTypeCheck } from "type-check"
import queryString from "query-string"

export interface Intercept {
  method: "GET" | "POST" | "PATCH" | "DELETE"
  url: string
  payload?: object
  query?: Record<string, string | string[]>
}

export const sanitizePayload = (payload: any) =>
  JSON.parse(JSON.stringify(payload))

export const generateIntercept = async (
  page: Page,
  intercept: Intercept,
  response: any,
  unroute = true
) => {
  const url = queryString
    .stringifyUrl(
      { url: intercept.url, query: intercept.query },
      {
        arrayFormat: "comma",
        encode: false,
        sort: false
      }
    )
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/(\s)/g, "%20")

  if (unroute) {
    await page.unroute(url)
  }
  page.route(url, async (route) => {
    expect(route.request().method()).toBe(intercept.method)
    if (intercept.payload) {
      await expect(
        parsedTypeCheck(intercept.payload, route.request().postDataJSON())
      ).toBeTruthy()
    }
    await route.fulfill(response)
  })
  return url
}

export const generateRelationship = (
  type: string,
  id: string,
  included = false
) => {
  return {
    links: {
      related: `/${type}/${id}`
    },
    data: included
      ? {
          type,
          id: String(id)
        }
      : undefined
  }
}

export const deepClone = <T>(payload: T): T => {
  return JSON.parse(JSON.stringify(payload))
}
