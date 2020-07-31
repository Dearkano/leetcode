/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  if (maze.length === 0) return -1;
  const [dx, dy] = destination;
  const visited = new Map();
  let ans = Infinity;
  // dir 0 left 1 up 2 right 3 down
  const dfs = (i, j, dir, step) => {
    const key = `${i}-${j}`;
    if (visited.get(key)) return;
    visited.set(key, true);
    // hit the wall
    if (
      (dir === 0 && (j === 0 || maze[i][j - 1] === 1)) ||
      (dir === 1 && (i === 0 || maze[i - 1][j] === 1)) ||
      (dir === 2 && (j === maze[0].length - 1 || maze[i][j + 1] === 1)) ||
      (dir === 3 && (i === maze.length - 1 || maze[i + 1][j] === 1))
    ) {
      if (i === dx && j === dy) {
        if (ans > step) ans = step;
      }
      // left
      if (dir !== 0 && j > 0 && maze[i][j - 1] === 0) {
        dfs(i, j - 1, 0, step + 1);
      }
      // up
      if (dir !== 1 && m > 0 && maze[i - 1][j] === 0) {
        dfs(i - 1, j, 1, step + 1);
      }
      //right
      if (dir !== 2 && j < maze[0].length - 1 && maze[i][j + 1] === 0) {
        dfs(i, j + 1, 2, step + 1);
      }
      // down
      if (dir !== 3 && i < maze.length - 1 && maze[i + 1][j] === 0) {
        dfs(i + 1, j, 3, step + 1);
      }
    }
    // along the dir
    if (dir === 0 && j > 0) {
      dfs(i, j - 1, 0, step + 1);
    }
    if (dir === 1 && i > 0) {
      dfs(i - 1, j, 1, step + 1);
    }
    if (dir === 2 && j < maze.length - 1) {
      dfs(i, j + 1, 2, step + 1);
    }
    if (dir === 3 && i < maze.length - 1) {
      dir(i + 1, j, 3, step + 1);
    }
  };
};
