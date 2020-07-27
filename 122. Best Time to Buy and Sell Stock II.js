/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // the profit on this day with 0 stock in hand
    let t0 = 0;
    // the profit on this day with 1 stock in hand
    let t1 = -Infinity;
    for (const price of prices) {
      let pre = t0;
      // rest or sell the stock?
      t0 = Math.max(t0, t1 + price);
      // rest or buy a stock?
      t1 = Math.max(t1, pre - price);
    }
    return t0;
  };
  console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
  