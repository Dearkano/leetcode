/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const dfs = (l, r, cur) => {
    if (l === 0 && r === 0) ans.push(cur);
    if (l > 0) dfs(l - 1, r, cur + "(");
    if (r > l) dfs(l, r - 1, cur + ")");
  };
  dfs(n, n, "");
  return ans;
};
console.log(generateParenthesis(3));
