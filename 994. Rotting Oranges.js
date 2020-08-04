/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  if (m === 0) return -1;
  const n = grid[0].length;
  const g = (i, j) => i * n + j;
  const get = (g) => {
    return { i: Math.floor(g / n), j: g % n };
  };
  const queue = [];
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push(g(i, j));
      if (grid[i][j] === 1) count++;
    }
  }
  let idx = 0;
  let len = queue.length;
  let ans = 0;
  if (count === 0) return 0;
  while (idx < queue.length) {
    while (idx < len) {
      const id = queue[idx++];
      const { i, j } = get(id);
      if (i > 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j] = 2;
        queue.push(g(i - 1, j));
        count--;
      }
      if (j > 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1] = 2;
        queue.push(g(i, j - 1));
        count--;
      }
      if (i < m - 1 && grid[i + 1][j] === 1) {
        grid[i + 1][j] = 2;
        queue.push(g(i + 1, j));
        count--;
      }
      if (j < n - 1 && grid[i][j + 1] === 1) {
        grid[i][j + 1] = 2;
        queue.push(g(i, j + 1));
        count--;
      }
    }
    len = queue.length;
    ans++;
  }
  return count === 0 ? ans - 1 : -1;
};

console.log(orangesRotting([[0, 2]]));
