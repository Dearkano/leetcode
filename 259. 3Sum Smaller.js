/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  return kSumSmaller(nums, 0, 3, target);
};

const kSumSmaller = (nums, start, k, target) => {
  let ans = 0;
  if (k === 2) {
    let l = start;
    let r = nums.length - 1;
    while (l < r) {
      const temp = l;
      while (nums[l] + nums[r] < target && l < r) {
        ans++;
        l++;
      }
      r--;
      l = temp;
    }
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      ans += kSumSmaller(nums, i + 1, k - 1, target - nums[i]);
    }
  }
  return ans;
};

console.log(threeSumSmaller([-2, 0, 1, 3], 2));
