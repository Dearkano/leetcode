/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  let far = 0;
  for (let i = 0; i < len && i <= far; i++) {
    far = far > i + nums[i] ? far : i + nums[i];
    if(far >= len -1) return true
  }
  return false
};

console.log(canJump([3, 2, 1, 1, 4]));
