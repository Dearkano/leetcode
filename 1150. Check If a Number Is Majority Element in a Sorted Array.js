/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  if (nums.length === 0) return false;
  const N = nums.length;
  let i = 0;
  while (i < nums.length && nums[i] !== target) i++;
  let count = 0;
  while (i < nums.length && nums[i] === target) {
    i++;
    count++;
  }
  return count > Math.floor(N / 2);
};
