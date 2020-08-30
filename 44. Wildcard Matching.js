/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = [];
  for (let i = 0; i < s.length; i++) dp[i] = [];
  const helper = (i, j) => {
    if (j === p.length && i === s.length) return true;
    if (j === p.length) return false;
    if (i === s.length) return p[j] === "*" && helper(i, j + 1);
    if (dp[i][j] !== undefined) return dp[i][j];
    let ans = false;
    if (s[i] === p[j] || p[j] === "?") ans = helper(i + 1, j + 1);
    else if (p[j] === "*") ans = helper(i, j + 1) || helper(i + 1, j);
    else ans = false;
    dp[i][j] = ans;
    return ans;
  };
  return helper(0, 0);
};
console.log(isMatch("acdcb", "*"));
