/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  const dfs = (start, path) => {
    if (path.length === k) {
      ans.push([].concat(path));
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(i + 1);
      dfs(i + 1, path);
      path.pop();
    }
  };
  dfs(0, []);
  return ans;
};
