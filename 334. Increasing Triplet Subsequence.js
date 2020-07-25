/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function (nums) {
//   if (nums.length === 0) return 0;
//   // dp[i] records the amount of points that are smaller than i
//   const dp = [1];
//   for (let i = 1; i < nums.length; i++) {
//     if (!dp[i]) dp[i] = 1;
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[i] > nums[j]) {
//         dp[i] = dp[j] + 1;
//         if (dp[i] === 3) return true;
//       }
//     }
//   }
//   return false;
// };

const increasingTriplet = (nums) => {
  let _1st = Infinity;
  let _2nd = Infinity;
  for (const num of nums) {
    if (num <= _1st) {
      _1st = num;
    } else if (num <= _2nd) {
      _2nd = num;
    } else return true;
  }
  return false;
};
console.log(increasingTriplet([1, 2, -10, -8, -7]));
