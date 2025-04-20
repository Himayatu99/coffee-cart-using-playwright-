import { test, expect } from "@playwright/test";
import { selectors } from "../selector/selector.js";

const add_1_Americano =
  test("TC-03 - Add 1 Americano to the cart by clicking on it", async ({ page }) => {
    await page.click(selectors.Mocha);
    await expect(page.locator(selectors.Americano)).toBeVisible();
    await page.click(selectors.Americano);
    await expect(page.getByLabel("Cart page")).toHaveText("cart (2)");
    await expect(page.locator(selectors.Total)).toHaveText("Total: $15.00");
    await page.hover(selectors.Total);
    await expect(page.getByText("Americano x 1+-")).toBeVisible();
  })

module.exports = add_1_Americano;