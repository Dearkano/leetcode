/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [1];
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  let R = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = R * ans[i];
    R = R * nums[i];
  }
  return ans;
};
