/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  let ans = 0;
  const n = scores.length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({ age: ages[i], score: scores[i] });
  }
  arr.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    } else if (a.age > b.age) {
      return -1;
    } else {
      return a.score < b.score ? 1 : -1;
    }
  });
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = arr[i].score;
    for (let j = 0; j < i; j++) {
      if (arr[j].score >= arr[i].score) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i].score);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]));
