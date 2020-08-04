/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  if (nums.length === 1 && nums[0] === k) return 1;
  let ans = 0;
  const map = new Map();
  let sum = 0;
  map.set(0, 0);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) ans = i + 1;
    if (map.get(sum - k) !== undefined)
      ans = Math.max(ans, i - map.get(sum - k));
    if (map.get(sum) === undefined) map.set(sum, i);
  }
  return ans;
};
