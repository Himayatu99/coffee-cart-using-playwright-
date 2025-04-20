import { test, expect } from "@playwright/test";
import { selectors } from "../selector/selector.js";

const luckyDayPopup =
  test("TC-06 - 'It's your lucky day! Get an extra cup' (Mocha) should be visible", async ({
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
    await expect(page.getByText("It's your lucky day!")).toBeVisible();
    await page.getByRole("button", { name: "Yes, of course!" }).click();

    // Verify there are 7 items in the cart and price added to total
    await expect(page.getByLabel("Cart page")).toHaveText("cart (7)");
    await page.hover(selectors.Total);
    await expect(page.getByText("(Discounted) Mocha x 1+-")).toBeVisible();
    await expect(page.getByText("Americano x 1+-")).toBeVisible();
    await expect(page.getByText("Espresso x 3+-")).toBeVisible();
    await expect(page.getByText("Mocha x 2+-")).toBeVisible();
    await expect(page.locator(selectors.Total)).toHaveText("Total: $57.00");
  })

module.exports = luckyDayPopup;
