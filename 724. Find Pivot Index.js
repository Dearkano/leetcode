/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  const sums = [nums[0]];
  for (let i = 1; i < nums.length; i++) sums[i] = sums[i - 1] + nums[i];
  if (sums[sums.length - 1] - sums[0] === 0) return 0;
  for (let i = 1; i < nums.length; i++) {
    if (sums[i - 1] === sums[sums.length - 1] - sums[i]) return i;
  }
  return -1;
};
