/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0 || nums[0] > lower) nums.unshift(lower - 1);
  if (nums[nums.length - 1] < upper) nums.push(upper + 1);
  let pre = nums[0];
  const ans = [];
  let start = 0;
  let end = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pre + 1) {
      pre = nums[i];
      continue;
    }
    start = pre + 1;
    end = nums[i] - 1;
    if (start === end) ans.push(`${start}`);
    else ans.push(`${start}->${end}`);
    pre = nums[i];
  }
  return ans;
};
