/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [];
  const dfs = (cur) => {
    if (cur === n) {
      return 1;
    }
    if (cur > n) return 0;
    if (dp[cur] > 0) return dp[cur];
    dp[cur] = dfs(cur + 1) + dfs(cur + 2);
    return dp[cur];
  };
  return dfs(0);
};
