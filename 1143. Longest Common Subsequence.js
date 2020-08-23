/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(n + 1).fill(0);
  let pre = 0;
  for (let i = 1; i <= m; i++) {
    pre = 0;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      if (text1[i - 1] === text2[j - 1]) {
        dp[j] = pre + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = temp;
    }
  }
  return dp[n];
};
