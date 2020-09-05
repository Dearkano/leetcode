/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  for (let i = 0; i <= nums.length; i++) {
    sum -= i;
  }
  return -sum;
};
