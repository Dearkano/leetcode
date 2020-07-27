/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let t0 = 0;
  let t1 = -Infinity;
  let pre2 = 0;
  let pre1 = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    pre2 = pre1;
    pre1 = t0;
    t0 = Math.max(t0, t1 + price);
    t1 = Math.max(t1, pre2 - price);
  }
  return t0;
};
