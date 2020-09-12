/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  const dp = [];
  const m = A.length;
  const n = B.length;
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i] === B[j]) {
        const pre = i === 0 || j === 0 ? 0 : dp[i - 1][j - 1];
        dp[i][j] = pre + 1;
        ans = Math.max(dp[i][j], ans);
      }
    }
  }

  return ans;
};
