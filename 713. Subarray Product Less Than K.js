/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let ans = 0;
  let product = 1;
  for (let r = 0, l = 0; r < nums.length; r++) {
    product = product * nums[r];
    while (l <= r && product >= k) {
      product /= nums[l];
      l++;
    }
    ans += r - l + 1;
  }
  return ans;
};

console.log(numSubarrayProductLessThanK([1, 1, 1, 1], 100));
