import { test, expect } from "@playwright/test";
import { selectors, expectedProducts } from "../selectors/selectors.js";

test.describe("Coffee Cart App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    expect(page.url()).toBe("https://coffee-cart.app/");
  });

  test("Complete Scenario - Add items to the cart and verify", async ({
    page,
  }) => {
    // Verify all products in Coffee-Cart app
    for (const product of expectedProducts) {
      await expect(page.getByText(product)).toBeVisible();
    }

    // Verify cart has zero items added
    await expect(page.getByLabel("Cart page")).toHaveText("cart (0)");

    // Add 1 Mocha to the cart by clicking on it
    await expect(page.locator(selectors.Mocha)).toBeVisible();
    await page.click(selectors.Mocha);
    await expect(page.getByLabel("Cart page")).toHaveText("cart (1)");
    await expect(page.locator(selectors.Total)).toHaveText("Total: $8.00");
    await page.hover(selectors.Total);
    await expect(page.getByText("Mocha x 1+-")).toBeVisible();

    // Add 1 Americano to the cart by clicking on it
    await expect(page.locator(selectors.Americano)).toBeVisible();
    await page.click(selectors.Americano);
    await expect(page.getByLabel("Cart page")).toHaveText("cart (2)");
    await expect(page.locator(selectors.Total)).toHaveText("Total: $15.00");
    await page.hover(selectors.Total);
    await expect(page.getByText("Americano x 1+-")).toBeVisible();

    // Hover of the Total on the bottom right
    await page.hover(selectors.Total);

    // Add 1 more Mocha to the cart
    await expect(page.locator(selectors.Mocha)).toBeVisible();
    await page.click(selectors.Mocha);
    await expect(page.getByLabel("Cart page")).toHaveText("cart (3)");
    await expect(page.locator(selectors.Total)).toHaveText("Total: $23.00");

    // Add 3 Espresso to the cart by clicking on it
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

    // The Alert saying 'It's your lucky day! Get an extra cup' (Mocha) should be visible
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

    // Click on the Total
    await expect(page.locator(selectors.Total)).toBeVisible();
    await page.click(selectors.Total);

    // Payment Details Popup should be visible
    await expect(page.getByText("Payment details×We will send")).toBeVisible();
    await expect(page.locator("h1")).toHaveText("Payment details");
  });
});
