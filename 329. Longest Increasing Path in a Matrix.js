/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0].length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(1);
  }

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let ans = 1;
  const dfs = (x, y) => {
    if (dp[x][y] > 1) return dp[x][y];
    let max = 0;
    for (const dir of dirs) {
      const xx = x + dir[0];
      const yy = y + dir[1];
      if (
        xx >= 0 &&
        yy >= 0 &&
        xx < m &&
        yy < n &&
        matrix[xx][yy] > matrix[x][y]
      ) {
        max = Math.max(max, dfs(xx, yy));
      }
    }
    dp[x][y] = max + 1;
    return dp[x][y];
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }
  return ans;
};
