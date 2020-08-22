/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s || s === "0") return 0;
  const dp = [];
  const dfs = (cur) => {
    if (s[cur] === "0") return 0;
    if (cur >= s.length - 1) return 1;
    if (dp[cur]) return dp[cur];
    let cnt = 0;
    cnt += dfs(cur + 1);
    if (Number(s[cur] + s[cur + 1]) <= 26) cnt += dfs(cur + 2);

    dp[cur] = cnt;
    return cnt;
  };
  return dfs(0);
};

console.log(numDecodings("2101"));
