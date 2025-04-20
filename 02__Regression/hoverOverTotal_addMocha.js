import { test, expect } from "@playwright/test";
import { selectors } from "../selector/selector.js";

const hoverOverTotal =
  test("TC-04 - Hover over Total and add 1 more Mocha", async ({ page }) => {
    await page.click(selectors.Mocha);
    await page.click(selectors.Americano);
    // Hover of the Total on the bottom right
    await page.hover(selectors.Total);

    // Add 1 more Mocha to the cart
    await expect(page.locator(selectors.Mocha)).toBeVisible();
    await page.click(selectors.Mocha);
    await expect(page.getByLabel("Cart page")).toHaveText("cart (3)");
    await expect(page.locator(selectors.Total)).toHaveText("Total: $23.00");
  })

module.exports = hoverOverTotal;
