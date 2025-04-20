import { test, expect } from "@playwright/test";
import { selectors } from "../selectors/selectors.js";

const alertPaymentDetails =
  test("TC-07 -  Payment Details Popup should be visible", async ({ page }) => {
    // Click on the Total
    await expect(page.locator(selectors.Total)).toBeVisible();
    await page.click(selectors.Total);

    // Payment Details Popup should be visible
    await expect(page.getByText("Payment details×We will send")).toBeVisible();
    await expect(page.locator("h1")).toHaveText("Payment details");
  });

module.exports = alertPaymentDetails;
