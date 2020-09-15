/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const swap = (i, j) => {
    nums[i] ^= nums[j];
    nums[j] ^= nums[i];
    nums[i] ^= nums[j];
  };
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1);
      }
    } else {
      if (nums[i] < nums[i + 1]) {
        swap(i, i + 1);
      }
    }
  }
};

var a = 6;
console.log(a | 1);
