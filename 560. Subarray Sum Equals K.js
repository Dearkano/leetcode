/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let ans = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    const a = map.get(sum - k);
    if (map.get(sum - k) !== undefined) {
      ans += map.get(sum - k);
    }
    map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1);
  }
  return ans;
};

console.log(subarraySum([-1, -1, 1], 0));
