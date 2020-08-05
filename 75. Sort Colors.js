/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  let l = 0;
  let r = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === 2 && i < r) swap(i, r--);
    while (nums[i] === 0 && i > l) swap(l++, i);
  }
  return nums;
};
console.log(sortColors([1, 0, 2, 2, 2, 2, 1, 0, 0, 1, 1]));
