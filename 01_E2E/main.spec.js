import { test } from "@playwright/test";

test.describe("Coffee Cart - Add items to the cart and verify", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
    });
    require("../02_Regression/verifyAllProducts.js");
    require("../02_Regression/add_1_Mocha.js");
    require("../02_Regression/add_1_Americano.js");
    require("../02_Regression/hoverOverTotal_addMocha.js");
    require("../02_Regression/add3Espresso_verifyItems.js");
    require("../02_Regression/luckyDayPopup.js");
    require("../02_Regression/alertPaymentDetails.js");
  });