import { test, expect } from "@playwright/test";
import { expectedProducts } from "../selector/selector.js";

const verifyAllProducts =
  test("TC-01 - Verify all products in Coffee-Cart app", async ({ page }) => {
    for (const product of expectedProducts) {
      await expect(page.getByText(product)).toBeVisible();
    }

    // Verify cart has zero items added
    await expect(page.getByLabel("Cart page")).toHaveText("cart (0)");
  })

module.exports = verifyAllProducts;
