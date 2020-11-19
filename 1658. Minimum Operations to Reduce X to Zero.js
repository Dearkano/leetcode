/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let ans = Infinity;
  const map = new Map();
  for (let l = 0, sum = 0; l < nums.length && sum <= x; l++) {
    map.set(sum, l);
    sum += nums[l];
  }
  for (let r = nums.length - 1, sum = 0; r >= 0 && sum <= x; r--) {
    const residual = x - sum;
    if (map.get(residual) !== undefined) {
      ans = Math.min(ans, map.get(residual) + nums.length - r - 1);
    }
    sum += nums[r];
  }
  return ans === Infinity ? -1 : ans;
};
console.log(minOperations([1, 1, 4, 2, 3], 5));
