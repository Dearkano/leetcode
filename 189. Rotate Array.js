// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function (nums, k) {
//   if (k > nums.length) k = k % nums.length;
//   const arr = nums.slice(nums.length - k);
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i - k < 0) {
//       nums[i] = arr[i];
//     } else {
//       nums[i] = nums[i - k];
//     }
//   }
// };

const rotate = (nums, k) => {
  k = k % nums.length;
  const reverse = (l, r) => {
    while (l < r) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};
