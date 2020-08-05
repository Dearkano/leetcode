/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function (nums) {
//   let l = 0;
//   let count = 0;
//   let ans = 0;
//   for (let r = 0; r < nums.length; r++) {
//     if (nums[r] === 1) count++;
//     while (r - l + 1 - count > 1) {
//       if (nums[l] === 1) count--;
//       l++;
//     }
//     ans = Math.max(ans, r - l + 1);
//   }
//   return ans;
// };

const findMaxConsecutiveOnes = (nums) => {
  let l = 0;
  let ans = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      for (let i = l; i < r; i++) {
        if (nums[i] === 0) {
          l = i + 1;
          break;
        }
      }
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
