/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  const dp = [];
  for (let i = 0; i <= n; i++) dp[i] = new Array(n + 1).fill(0);

  for (let r = 2; r <= n; r++) {
    for (let l = r - 1; l >= 1; l--) {
      let min = Infinity;
      for (let i = l + 1; i < r; i++) {
        min = Math.min(min, i + Math.max(dp[l][i - 1], dp[i + 1][r]));
      }
      dp[l][r] = l === r - 1 ? l : min;
    }
  }

  return dp[1][n];
};
console.log(getMoneyAmount(3));
