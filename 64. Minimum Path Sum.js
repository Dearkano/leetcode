/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  if (m === 0) return 0;
  const n = grid[0].length;
  let x = 0;
  let y = 0;
  let shortest = [];
  for (let i = 0; i < m; i++) {
    shortest[i] = [];
  }
  let dp = function (x, y) {
    if (shortest[x][y]) return shortest[x][y];
    if (x != m - 1 && y != n - 1) {
      let s1 = dp(x + 1, y);
      let s2 = dp(x, y + 1);
      shortest[x][y] = s1 < s2 ? s1 + grid[x][y] : s2 + grid[x][y];
    } else if (x != m - 1) {
      shortest[x][y] = dp(x + 1, y) + grid[x][y];
    } else if (y != n - 1) {
      shortest[x][y] = dp(x, y + 1) + grid[x][y];
    } else {
      shortest[x][y] = grid[x][y];
    }
    return shortest[x][y];
  };
  shortest[0][0] = dp(0, 0);

  return shortest[0][0];
};

console.log(
  minPathSum([
    [1, 2, 5],
    [3, 2, 1],
  ])
);
