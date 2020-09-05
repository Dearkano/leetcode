/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  let r = 0;
  while (true) {
    while (r < nums.length && nums[r] !== 0) r++;
    l = r;
    while (l < nums.length && nums[l] === 0) l++;
    if (r === nums.length || l === nums.length) return;
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
  }
};
