// /**
//  * @param {number[][]} M
//  * @return {number}
//  */
// var longestLine = function (M) {
//   const m = M.length;
//   if (m === 0) return 0;
//   const n = M[0].length;
//   let ans = 0;
//   const dfs = (i, j) => {
//     // horizontal
//     let c = j;
//     while (c < n && M[i][c] === 1) {
//       c++;
//     }
//     ans = Math.max(ans, c - j);

//     // vertical
//     let r = i;
//     while (r < m && M[r][j] === 1) {
//       r++;
//     }
//     ans = Math.max(ans, r - i);

//     // diagonal
//     let t = 0;
//     while (i + t < m && j + t < n && M[i + t][j + t] === 1) {
//       t++;
//     }
//     ans = Math.max(ans, t);

//     // anti-diagonal
//     t = 0;
//     while (i + t < m && j - t >= 0 && M[i + t][j - t] === 1) {
//       t++;
//     }
//     ans = Math.max(ans, t);
//   };
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (M[i][j] === 1) dfs(i, j);
//     }
//   }
//   return ans;
// };



const longestLine = (M) => {
  const m = M.length;
  if (m === 0) return 0;
  const n = M[0].length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = [0, 0, 0, 0];
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 0) continue;
      for (let k = 0; k < 4; k++) dp[i][j][k] = 1;
      if (j > 0) dp[i][j][0] = dp[i][j - 1][0] + 1;
      if (i > 0) dp[i][j][1] = dp[i - 1][j][1] + 1;
      if (i > 0 && j > 0) dp[i][j][2] = dp[i - 1][j - 1][2] + 1;
      if (i > 0 && j < n - 1) dp[i][j][3] = dp[i - 1][j + 1][3] + 1;
      ans = Math.max(ans, dp[i][j][0], dp[i][j][1], dp[i][j][2], dp[i][j][3]);
    }
  }
  return ans;
};
