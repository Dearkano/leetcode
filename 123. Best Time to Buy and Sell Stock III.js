/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let t10 = 0;
  let t21 = -Infinity;
  let t20 = 0;
  let t21 = -Infinity;
  for (const price of prices) {
    // make two txs, based on the result of the first tx
    t20 = Math.max(t20, t21 + price);
    t21 = Math.max(t21, t10 - price);
    // make only one tx
    t10 = Math.max(t10, t11 + price);
    t11 = Math.max(t11, -price);
  }
  return t20;
};
