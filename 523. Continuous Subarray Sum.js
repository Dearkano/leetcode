/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const sums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
    if (sums[i] !== 0 && sums[i] % k === 0) return true;
    if (nums[i] === 0 && nums[i - 1] === 0) return true;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (sums[i] !== sums[j] && (sums[i] - sums[j]) % k === 0) return true;
      if (k === 0 && sums[i] === sums[j]) return true;
    }
  }
  return false;
};

console.log(checkSubarraySum([1, 2, 12], 6));
