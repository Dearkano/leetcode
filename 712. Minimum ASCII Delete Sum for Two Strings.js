/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const m = s1.length;
  const n = s2.length;
  let pre = 0;
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    pre = 0;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      if (s1[i - 1] === s2[j - 1]) {
        dp[j] = pre + s1.charCodeAt(i - 1);
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = temp;
    }
  }
  let total = 0;
  for (let i = 0; i < m; i++) total += s1.charCodeAt(i);
  for (let i = 0; i < n; i++) total += s2.charCodeAt(i);
  return total - dp[n];
};
