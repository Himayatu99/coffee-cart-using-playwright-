# Test info

- Name: Coffee Cart - Add items to the cart and verify >> TC-01 - Verify all products in Coffee-Cart app
- Location: D:\himayat\Testing\TestSolz_Project\coffeeCart_Playwright\02__Regression\verifyAllProducts.js:5:7

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
   2 | import { expectedProducts } from "../selector/selector.js";
   3 |
   4 | const verifyAllProducts =
>  5 |   test("TC-01 - Verify all products in Coffee-Cart app", async ({ page }) => {
     |       ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Himayat\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
   6 |     for (const product of expectedProducts) {
   7 |       await expect(page.getByText(product)).toBeVisible();
   8 |     }
   9 |
  10 |     // Verify cart has zero items added
  11 |     await expect(page.getByLabel("Cart page")).toHaveText("cart (0)");
  12 |   })
  13 |
  14 | module.exports = verifyAllProducts;
  15 |
```