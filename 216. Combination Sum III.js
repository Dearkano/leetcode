/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [];
  const dfs = (start, path, cur) => {
    if (path.length === k && cur === n) {
      ans.push([].concat(path));
      return;
    } else if (path.length === k || cur > n) return;
    for (let i = start; i <= 9; i++) {
      path.push(i);
      dfs(i + 1, path, cur + i);
      path.pop();
    }
  };
  dfs(1, [], 0)
  return ans;
};
