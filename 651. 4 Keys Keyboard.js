/**
 * @param {number} N
 * @return {number}
 */
var maxA = function (N) {
  const dp = [];
  for (let i = 0; i < N + 1; i++) {
    dp[i] = i;
    for (let j = 1; j <= i - 3; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }
  return dp[N];
};
