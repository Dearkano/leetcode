/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0) return -1;
  const n = grid.length;
  const queue = [];
  const visited = [];
  for (let i = 0; i < n; i++) visited[i] = [];
  let idx = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  let ans = 1;
  queue.push([0, 0]);
  visited[0][0] = true;
  let len = queue.length;
  while (idx < queue.length) {
    while (idx < len) {
      const [x, y] = queue[idx++];
      if (x === n - 1 && y === n - 1) return ans;
      for (const dir of dirs) {
        const xx = x + dir[0];
        const yy = y + dir[1];
        if (
          xx >= 0 &&
          yy >= 0 &&
          xx < n &&
          yy < n &&
          grid[xx][yy] === 0 &&
          !visited[xx][yy]
        ) {
          queue.push([xx, yy]);
          visited[xx][yy] = true;
        }
      }
    }
    len = queue.length;
    ans++;
  }
  return -1;
};

console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);
