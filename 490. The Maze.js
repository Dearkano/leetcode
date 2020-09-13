/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  const m = maze.length;
  if (m === 0) return false;
  const n = maze[0].length;
  const visited = [];
  for (let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (cur) => {
    const [x, y] = cur;
    if (x === destination[0] && y === destination[1]) {
      return true;
    }

    visited[x][y] = true;
    for (const dir of dirs) {
      let xx = x;
      let yy = y;
      while (
        xx + dir[0] >= 0 &&
        xx + dir[0] < m &&
        yy + dir[1] >= 0 &&
        yy + dir[1] < n &&
        maze[xx + dir[0]][yy + dir[1]] === 0
      ) {
        xx += dir[0];
        yy += dir[1];
      }
      if (
        xx >= 0 &&
        xx < m &&
        yy >= 0 &&
        yy < n &&
        maze[xx][yy] === 0 &&
        !visited[xx][yy] &&
        dfs([xx, yy])
      )
        return true;
    }
    return false;
  };

  return dfs(start);
};

console.log(
  hasPath(
    [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ],
    [0, 4],
    [4, 1]
  )
);

console.log(
  hasPath(
    [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 1, 0, 0, 0],
    ],
    [4, 3],
    [0, 1]
  )
);
console.log(
  hasPath(
    [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ],
    [0, 4],
    [4, 4]
  )
);
