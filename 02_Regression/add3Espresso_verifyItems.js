import { test, expect } from "@playwright/test";
import { selectors } from "../selectors/selectors.js";

const add3Espresso =
  test("TC-05 - Add 3 Espresso and verify items in the cart", async ({
    page,
  }) => {
    const mochaSelector = selectors.Mocha;
    for (let i = 0; i < 2; i++) {
      await page.click(mochaSelector);
    }
    await page.click(selectors.Americano);
    await expect(page.locator(selectors.Espresso)).toBeVisible();

    // Using loop to click on Espress 3 times
    const espressoSelector = selectors.Espresso;
    for (let i = 0; i < 3; i++) {
      await page.click(espressoSelector);
    }

    // Verify there are 6 items in the cart and price added to total
    await expect(page.getByLabel("Cart page")).toHaveText("cart (6)");
    await page.hover(selectors.Total);
    await expect(page.locator(selectors.Total)).toHaveText("Total: $53.00");
  });

module.exports = add3Espresso;
