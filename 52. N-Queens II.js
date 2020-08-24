/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function (n) {
  let ans = 0;

  const check = (c, path) => {
    const r = path.length;
    for (let i = 0; i < path.length; i++) {
      if (path[i] === c || r - i === c - path[i] || r - i === path[i] - c)
        return false;
    }
    return true;
  };

  const dfs = (path) => {
    if (path.length === n) {
      ans++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (check(i, path)) {
        path.push(i);
        dfs(path);
        path.pop();
      }
    }
  };

  dfs([]);
  return ans;
};
console.log(solveNQueens(4));
