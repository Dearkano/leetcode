/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let _max = nums[0];
  let _min = nums[0];
  let ans = _max;
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    const temp = Math.max(n, n * _max, n * _min);
    _min = Math.min(n, n * _min, n * _max);
    _max = temp;
    ans = Math.max(ans, _max);
  }
  return ans;
};
console.log(maxProduct([-2, 0]));
