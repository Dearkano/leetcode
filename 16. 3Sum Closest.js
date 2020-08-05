/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  return kSumClosest(nums, 0, 3, target);
};

const kSumClosest = (nums, start, k, target) => {
  let ans = Infinity;
  if (k === 2) {
    let l = start;
    let r = nums.length - 1;
    let diff = Infinity;
    while (l < r) {
      const sum = nums[l] + nums[r];
      const curDiff = target - sum;
      if (curDiff < 0) r--;
      else l++;
      if (Math.abs(curDiff) < diff) {
        diff = Math.abs(curDiff);
        ans = sum;
      }
    }
  } else {
    let diff = Infinity;
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      const sum = nums[i] + kSumClosest(nums, i + 1, k - 1, target - nums[i]);
      if (Math.abs(sum - target) < diff) {
        diff = Math.abs(sum - target);
        ans = sum;
      }
    }
  }
  return ans;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
