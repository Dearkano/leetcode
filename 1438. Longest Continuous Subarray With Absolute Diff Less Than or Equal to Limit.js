/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const max = [];
  const min = [];
  let l = 0;
  let r = 0;
  for (r = 0; r < nums.length; r++) {
    while (max.length > 0 && nums[r] > max[max.length - 1]) max.pop();
    while (min.length > 0 && nums[r] < min[min.length - 1]) min.pop();
    max.push(nums[r]);
    min.push(nums[r]);
    if (max[0] - min[0] > limit) {
      if (max[0] === nums[l]) max.shift();
      if (min[0] === nums[l]) min.shift();
      l++;
    }
  }
  return r - l;
};
console.log(longestSubarray([8, 2, 4, 7], 4));
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
