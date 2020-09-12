/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  const dp = [];
  for (let i = 0; i < 4; i++) {
    dp[i] = [];
    for (let j = 0; j < 3; j++) {
      dp[i][j] = new Array(n + 1).fill(0);
    }
  }
  const path = (x, y, len) => {
    if (x < 0 || y < 0 || x > 3 || y > 2 || (x === 3 && y !== 1)) return 0;
    if (len === 1) return 1;
    if (dp[x][y][len]) return dp[x][y][len];
    dp[x][y][len] =
      (path(x - 2, y - 1, len - 1) +
        path(x - 2, y + 1, len - 1) +
        path(x + 2, y - 1, len - 1) +
        path(x + 2, y + 1, len - 1) +
        path(x - 1, y - 2, len - 1) +
        path(x - 1, y + 2, len - 1) +
        path(x + 1, y - 2, len - 1) +
        path(x + 1, y + 2, len - 1)) %
      (10 ** 9 + 7);
    return dp[x][y][len];
  };
  let ans = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ans = (ans + path(i, j, n)) % (10 ** 9 + 7);
    }
  }
  return ans;
};
console.log(knightDialer(2));
