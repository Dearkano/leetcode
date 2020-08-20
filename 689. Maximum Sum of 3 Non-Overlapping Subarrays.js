/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  const sums = [0];
  for (let i = 0; i < k; i++) {
    sums[0] += nums[i];
  }
  for (let i = 1; i < nums.length - k + 1; i++) {
    sums[i] = sums[i - 1] - nums[i - 1] + nums[i + k - 1];
  }

  let ans = [-1, -1, -1];
  const left = [];
  const right = [];
  let max = 0;
  for (let i = 0; i < sums.length; i++) {
    if (sums[i] > sums[max]) max = i;
    left[i] = max;
  }
  max = sums.length - 1;
  for (let i = sums.length - 1; i >= 0; i--) {
    if (sums[i] >= sums[max]) max = i;
    right[i] = max;
  }
  for (let m = k; m < nums.length - 2 * k + 1; m++) {
    const l = left[m - k];
    const r = right[m + k];
    if (
      ans[0] === -1 ||
      sums[l] + sums[m] + sums[r] > sums[ans[0]] + sums[ans[1]] + sums[ans[2]]
    ) {
      ans[0] = l;
      ans[1] = m;
      ans[2] = r;
    }
  }
  return ans;
};

console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2));
console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2));
console.log(maxSumOfThreeSubarrays([7, 13, 20, 19, 19, 2, 10, 1, 1, 19], 3));
