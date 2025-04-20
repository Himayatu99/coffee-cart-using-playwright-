# Test info

- Name: Coffee Cart - Add items to the cart and verify >> TC-04 - Hover over Total and add 1 more Mocha
- Location: D:\himayat\Testing\TestSolz_Project\coffeeCart_Playwright\02__Regression\hoverOverTotal_addMocha.js:5:7

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
   4 | const hoverOverTotal =
>  5 |   test("TC-04 - Hover over Total and add 1 more Mocha", async ({ page }) => {
     |       ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Himayat\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
   6 |     await page.click(selectors.Mocha);
   7 |     await page.click(selectors.Americano);
   8 |     // Hover of the Total on the bottom right
   9 |     await page.hover(selectors.Total);
  10 |
  11 |     // Add 1 more Mocha to the cart
  12 |     await expect(page.locator(selectors.Mocha)).toBeVisible();
  13 |     await page.click(selectors.Mocha);
  14 |     await expect(page.getByLabel("Cart page")).toHaveText("cart (3)");
  15 |     await expect(page.locator(selectors.Total)).toHaveText("Total: $23.00");
  16 |   })
  17 |
  18 | module.exports = hoverOverTotal;
  19 |
```