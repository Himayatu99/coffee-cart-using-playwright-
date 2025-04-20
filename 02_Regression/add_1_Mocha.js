import { test, expect } from "@playwright/test";
import { selectors } from "../selectors/selectors.js";

const add_1_Mocha =
  test("TC-02 - Add 1 Mocha to the cart by clicking on it", async ({ page }) => {
    await expect(page.locator(selectors.Mocha)).toBeVisible();
    await page.click(selectors.Mocha);
    await expect(page.getByLabel("Cart page")).toHaveText("cart (1)");
    await expect(page.locator(selectors.Total)).toHaveText("Total: $8.00");
    await page.hover(selectors.Total);
    await expect(page.getByText("Mocha x 1+-")).toBeVisible();
  });

module.exports = add_1_Mocha;
