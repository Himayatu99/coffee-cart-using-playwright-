import { test } from "@playwright/test";

test.describe("SCRUM-3 Coffee Cart- Add items to the cart and verify", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
    });
    require("../02__Regression/verifyAllProducts.js");
    require("../02__Regression/add_1_Mocha.js");
    require("../02__Regression/add_1_Americano.js");
    require("../02__Regression/hoverOverTotal_addMocha.js");
    require("../02__Regression/add3Espresso_verifyItems.js");
    require("../02__Regression/luckyDayPopup.js");
    require("../02__Regression/alertPaymentDetails.js");
  })