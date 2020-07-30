/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  if (m === 0) return 0;
  const n = grid[0].length;
  const p = [];
  const g = (i, j) => i * n + j;
  for (let i = 0; i < m * n; i++) {
    if (grid[Math.floor(i / n)][i % n] === "1") p[i] = i;
    else p[i] = -1;
  }
  const find = (i) => {
    if (p[i] === i) return i;
    p[i] = find(p[i]);
    return p[i];
  };
  const union = (p1, p2) => {
    if (p1 === p2) return;
    if (p1 < p2) p[p2] = p1;
    else p[p1] = p2;
  };
  const track = (i, j) => {
    let cur = find(g(i, j));
    if (j > 0 && grid[i][j - 1] === "1") {
      const left = find(g(i, j - 1));
      if (left !== cur) {
        union(left, cur);
      }
    }
    cur = find(g(i, j));
    if (j < n - 1 && grid[i][j + 1] === "1") {
      const right = find(g(i, j + 1));
      if (right !== cur) {
        union(cur, right);
      }
    }
    cur = find(g(i, j));
    if (i > 0 && grid[i - 1][j] === "1") {
      const top = find(g(i - 1, j));
      if (top !== cur) {
        union(top, cur);
      }
    }
    cur = find(g(i, j));
    if (i < m - 1 && grid[i + 1][j] === "1") {
      const bottom = find(g(i + 1, j));
      if (bottom !== cur) {
        union(cur, bottom);
      }
    }
  };
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        track(i, j);
      }
    }
  }
  let map = new Map();
  for (const pid of p) {
    if (pid >= 0 && !map.get(find(pid))) {
      map.set(find(pid), true);
      ans++;
    }
  }
  return ans;
};

console.log(
  numIslands([
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"],
  ])
);
