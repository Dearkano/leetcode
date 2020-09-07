/**
 * @param {string} s
 * @return {string}
 */
var encode = function (s) {
  const n = s.length;
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }
  for (let l = 0; l < n; l++) {
    for (let i = 0; i < n - l; i++) {
      j = i + l;
      const str = s.substring(i, j + 1);
      dp[i][j] = str;
      // j-i < 4 no need to compress, because aa -> 2[a] len: 2->4, only aaaaa 5[a] 5->4 worth
      if (j - i >= 4) {
        // check if a better solution exists
        for (let k = i; k < j; k++) {
          if (dp[i][j].length > dp[i][k].length + dp[k + 1][j].length) {
            dp[i][j] = dp[i][k] + dp[k + 1][j];
          }
        }

        // check if str is repeatable
        for (let len = 1; len < str.length; len++) {
          const pattern = str.substr(0, len);
          const regex = new RegExp(pattern, "g");
          if (
            str.length % pattern.length === 0 &&
            str.replace(regex, "") === ""
          ) {
            const ss =
              str.length / pattern.length + "[" + dp[i][i + len - 1] + "]";
            if (ss.length < dp[i][j].length) {
              dp[i][j] = ss;
            }
          }
        }
      }
    }
  }

  return dp[0][n - 1];
};
