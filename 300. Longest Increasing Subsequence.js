/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const dp = [1];
  let ans = 1;
  for (let i = 1; i < nums.length; i++) {
    if (!dp[i]) dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if (ans < dp[i]) ans = dp[i];
      }
    }
  }
  return ans;
};

console.log(lengthOfLIS([1, 2]));
