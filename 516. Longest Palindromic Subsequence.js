/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dp = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = 1;
  }
  for (let r = 1; r < n; r++) {
    for (let l = r - 1; l >= 0; l--) {
      if (s[l] === s[r]) {
        dp[l][r] = dp[l + 1][r - 1] + 2;
      } else {
        dp[l][r] = Math.max(dp[l + 1][r], dp[l][r - 1]);
      }
    }
  }
  return dp[0][n - 1];
};
