/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) return [map[target - nums[i]], i];
    map[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11], 9));