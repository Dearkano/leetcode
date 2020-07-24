/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // there are only two possible scenarios
  // up-down-up-down... or down-up-down-up
  // the problem is to decide which is longer and calculate it
  // use extra space to store the result on every point
  if(nums.length === 0) return 0
  const up_down = [1];
  const down_up = [1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) {
      up_down[i] = down_up[i - 1] + 1;
      down_up[i] = down_up[i - 1];
    } else if (nums[i] - nums[i - 1] < 0) {
      down_up[i] = up_down[i - 1] + 1;
      up_down[i] = up_down[i - 1];
    } else {
      down_up[i] = down_up[i - 1];
      up_down[i] = up_down[i - 1];
    }
  }
  return Math.max(down_up[nums.length - 1], up_down[nums.length - 1]);
};

console.log(wiggleMaxLength([1, 2, 4, 3, 7, 6, 9, 8]));
