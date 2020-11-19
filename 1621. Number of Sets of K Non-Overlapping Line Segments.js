/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= k; j++) {
      dp[i][j] = [0, 0];
    }
  }

  const helper = (i, k1, isStart) => {
    if (dp[i][k1][isStart]) return dp[i][k1][isStart];
    if (k1 === 0) return 1;
    if (i === n) return 0;

    let cnt = helper(i + 1, k1, isStart);
    if (isStart === 1) {
      cnt += helper(i + 1, k1, 0);
    } else {
      cnt += helper(i, k1 - 1, 1);
    }
    dp[i][k1][isStart] = cnt % (10 ** 9 + 7);
    return dp[i][k1][isStart];
  };

  return helper(0, k, 1);
};

console.log(numberOfSets(23, 20));
