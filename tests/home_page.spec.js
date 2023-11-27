// @ts-check
const { test, expect } = require('@playwright/test');

test('has main h1', async ({ page }) => {
  await page.goto('/');

  // has first h1 containing text "Lower Your Shipping Costs"
  const mainHeading = await page.textContent('h1');
  expect(mainHeading).toContain('Lower Your Shipping Costs');
});
