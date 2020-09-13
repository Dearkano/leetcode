/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  const m = maze.length;
  if (m === 0) return false;
  const n = maze[0].length;
  const dp = [];
  for (let i = 0; i < m; i++) dp[i] = new Array(n).fill(0);
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [start];
  let idx = 0;
  dp[start[0]][start[1]] = 1;
  while (idx < queue.length) {
    const [x, y] = queue[idx++];
    if (x === destination[0] && y === destination[1]) continue;
    for (const dir of dirs) {
      let xx = x;
      let yy = y;
      let temp = dp[x][y];
      while (
        xx + dir[0] >= 0 &&
        xx + dir[0] < m &&
        yy + dir[1] >= 0 &&
        yy + dir[1] < n &&
        maze[xx + dir[0]][yy + dir[1]] === 0
      ) {
        xx += dir[0];
        yy += dir[1];
        temp++;
      }
      if (dp[xx][yy] > 0 && temp >= dp[xx][yy]) continue;
      dp[xx][yy] = temp;
      queue.push([xx, yy]);
    }
  }
  return dp[destination[0]][destination[1]] - 1;
};
