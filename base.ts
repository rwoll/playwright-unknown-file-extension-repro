import { test as base } from '@playwright/test';
import fetch from "node-fetch"; // this line breaks it!

export const test = base.extend<{ myFixture: string }>({
  myFixture: async ({}, use) => {
    await use("it's a fixture!")
  }
})
