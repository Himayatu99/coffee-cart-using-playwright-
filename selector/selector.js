const selectors = {
  Mocha: '[data-test="Mocha"]',
  Americano: '[data-test="Americano"]',
  Espresso: '[data-test="Espresso"]',
  Total: '[data-test="checkout"]',
};
const expectedProducts = [
  "Espresso $10.00espresso",
  "Espresso Macchiato $12.00espressomilk foam",
  "Cappuccino $19.00espressosteamed milkmilk foam",
  "Mocha $8.00espressochocolate",
  "Flat White $18.00espressosteamed milk",
  "Americano $7.00espressowater",
  "Cafe Latte $16.00espressosteamed milkmilk foam",
  "Espresso Con Panna $14.00espressowhipped cream",
  "Cafe Breve $15.00espressosteamed milksteamed creammilk foam",
];
module.exports = { selectors, expectedProducts };
