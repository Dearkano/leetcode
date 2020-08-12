/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const g = (i, j) => i * n + j;
  const visited = [];
  const isSameSet = (set1, set2) =>
    [...set1].every((o) => set2.has(o)) && [...set2].every((o) => set1.has(o));
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (oi, oj, i, j, set) => {
    visited[g(i, j)] = true;
    set.add(`(${i - oi},${j - oj})`);
    for (const dir of dirs) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (
        x >= 0 &&
        y >= 0 &&
        x < m &&
        y < n &&
        grid[x][y] === 1 &&
        !visited[g(x, y)]
      ) {
        dfs(oi, oj, x, y, set);
      }
    }
  };

  const sets = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[g(i, j)]) {
        const set = new Set();
        dfs(i, j, i, j, set);
        let flag = false;
        for (const s of sets) {
          if (isSameSet(s, set)) {
            flag = true;
            break;
          }
        }
        if (!flag) sets.push(set);
      }
    }
  }

  return sets.length;
};

console.log(
  numDistinctIslands([
    [0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ])
);
