/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length < 2) return 0;
  let n = k < prices.length ? k : prices.length;
  let t0 = [];
  t0[-1] = 0;
  let t1 = [];
  for (let i = 0; i < n; i++) {
    t0[i] = 0;
    t1[i] = -Infinity;
  }
  for (const price of prices) {
    for (let i = prices.length - 1; i >= 0; i--) {
      t0[i] = Math.max(t0[i], t1[i] + price);
      t1[i] = Math.max(t1[i], t0[i - 1] - price);
    }
  }
  return t0[n - 1];
};

console.log(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]));
