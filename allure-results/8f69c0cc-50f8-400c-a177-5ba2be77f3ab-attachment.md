# Test info

- Name: Coffee Cart - Add items to the cart and verify >> TC-06 - 'It's your lucky day! Get an extra cup' (Mocha) should be visible
- Location: D:\himayat\Testing\TestSolz_Project\coffeeCart_Playwright\02__Regression\luckyDayPopup.js:5:7

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\Himayat\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import { selectors } from "../selector/selector.js";
   3 |
   4 | const luckyDayPopup =
>  5 |   test("TC-06 - 'It's your lucky day! Get an extra cup' (Mocha) should be visible", async ({
     |       ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Himayat\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
   6 |     page,
   7 |   }) => {
   8 |     const mochaSelector = selectors.Mocha;
   9 |     for (let i = 0; i < 2; i++) {
  10 |       await page.click(mochaSelector);
  11 |     }
  12 |     await page.click(selectors.Americano);
  13 |     await expect(page.locator(selectors.Espresso)).toBeVisible();
  14 |
  15 |     // Using loop to click on Espress 3 times
  16 |     const espressoSelector = selectors.Espresso;
  17 |     for (let i = 0; i < 3; i++) {
  18 |       await page.click(espressoSelector);
  19 |     }
  20 |     await expect(page.getByText("It's your lucky day!")).toBeVisible();
  21 |     await page.getByRole("button", { name: "Yes, of course!" }).click();
  22 |
  23 |     // Verify there are 7 items in the cart and price added to total
  24 |     await expect(page.getByLabel("Cart page")).toHaveText("cart (7)");
  25 |     await page.hover(selectors.Total);
  26 |     await expect(page.getByText("(Discounted) Mocha x 1+-")).toBeVisible();
  27 |     await expect(page.getByText("Americano x 1+-")).toBeVisible();
  28 |     await expect(page.getByText("Espresso x 3+-")).toBeVisible();
  29 |     await expect(page.getByText("Mocha x 2+-")).toBeVisible();
  30 |     await expect(page.locator(selectors.Total)).toHaveText("Total: $57.00");
  31 |   })
  32 |
  33 | module.exports = luckyDayPopup;
  34 |
```