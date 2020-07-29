/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (nums.length === 0) return 0;
    if (nums[0] >= s) return 1;
    if (nums.length === 1) return 0;
    let ans = Infinity;
    let sum = 0;
    let l = 0;
    let r = 0;
    while (r < nums.length) {
      sum+=nums[r++]
      while (sum >= s) {
        sum -= nums[l++];
        ans = Math.min(ans, r - l + 1);
      }
    }
    return ans === Infinity ? 0 : ans;
  };