/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  const m = grid.length;
  if (m === 0) return 0;
  const n = grid[0].length;
  let ans = 0;
  let rowHit = 0;
  let colHit = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // row
      if (j === 0 || grid[i][j - 1] === "W") {
        rowHit = 0;
        for (let k = j; k < n && grid[i][k] !== "W"; k++) {
          if (grid[i][k] === "E") rowHit++;
        }
      }
      // col
      if (i === 0 || grid[i - 1][j] === "W") {
        colHit[j] = 0;
        for (let k = i; k < m && grid[k][j] !== "W"; k++) {
          if (grid[k][j] === "E") colHit[j]++;
        }
      }
      if (grid[i][j] === "0") ans = Math.max(ans, rowHit + colHit[j]);
    }
  }
  return ans;
};
