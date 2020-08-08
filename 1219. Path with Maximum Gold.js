/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  const visited = [];
  for (let i = 0; i < m; i++) visited[i] = [];

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const dfs = (i, j, cur) => {
    visited[i][j] = true;
    cur += grid[i][j];
    for (const d of dir) {
      const x = i + d[0];
      const y = j + d[1];
      if (
        x >= 0 &&
        y >= 0 &&
        x < m &&
        y < n &&
        grid[x][y] > 0 &&
        !visited[x][y]
      ) {
        dfs(x, y, cur);
      }
    }
    max = Math.max(max, cur);
    visited[i][j] = false;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        dfs(i, j, 0);
      }
    }
  }
  return max;
};

console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ])
);
