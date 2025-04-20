# Test info

- Name: Coffee Cart - Add items to the cart and verify >> TC-03 - Add 1 Americano to the cart by clicking on it
- Location: D:\himayat\Testing\TestSolz_Project\coffeeCart_Playwright\02__Regression\add_1_Americano.js:5:7

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
   4 | const add_1_Americano =
>  5 |   test("TC-03 - Add 1 Americano to the cart by clicking on it", async ({ page }) => {
     |       ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Himayat\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
   6 |     await page.click(selectors.Mocha);
   7 |     await expect(page.locator(selectors.Americano)).toBeVisible();
   8 |     await page.click(selectors.Americano);
   9 |     await expect(page.getByLabel("Cart page")).toHaveText("cart (2)");
  10 |     await expect(page.locator(selectors.Total)).toHaveText("Total: $15.00");
  11 |     await page.hover(selectors.Total);
  12 |     await expect(page.getByText("Americano x 1+-")).toBeVisible();
  13 |   })
  14 |
  15 | module.exports = add_1_Americano;
```