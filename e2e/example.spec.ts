import { expect } from "@playwright/test";
import { test } from "../base";

test('basic test', async ({ myFixture }) => {
  expect(myFixture).toBeTruthy();
});
