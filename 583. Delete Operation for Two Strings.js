/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(n + 1).fill(0);
  let pre = 0;
  for (let i = 1; i <= m; i++) {
    pre = 0;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      if (word1[i - 1] === word2[j - 1]) {
        dp[j] = pre + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = temp;
    }
  }
  return m + n - 2 * dp[n];
};
console.log(minDistance("a", "b"));
