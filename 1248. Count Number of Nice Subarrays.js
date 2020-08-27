/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
};
const atMost = (nums, k) => {
  if (k < 0) return 0;
  let ans = 0;
  for (let l = 0, r = 0; r < nums.length; r++) {
    if (nums[r] % 2 === 1) k--;
    while (k < 0) {
      if (nums[l++] % 2 === 1) k++;
    }
    ans += r - l + 1;
  }
  return ans;
};
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
