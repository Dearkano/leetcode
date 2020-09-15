/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
  if (k === 0 || n === 0) return 0;
  if (n === 1) return k;
  if (n === 2) return k * k;
  let pre1 = k * k;
  let pre2 = k;
  for (let i = 3; i <= n; i++) {
    const cur = (pre1 + pre2) * (k - 1);
    pre2 = pre1;
    pre1 = cur;
  }
  return pre1;
};
