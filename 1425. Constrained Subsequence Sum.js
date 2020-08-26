/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  const queue = [];
  let ans = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (queue.length > 0) nums[i] += queue[0];
    ans = Math.max(ans, nums[i]);

    while (queue.length > 0 && nums[i] > queue[queue.length - 1]) queue.pop();

    // if nums[i] is a negative number, then there's no need to add it in to the answer
    if (nums[i] > 0) queue.push(nums[i]);

    // deal with the k, the distance between any two elements shoule be less than or equal to k
    if (i > k && queue.length > 0 && queue[0] === nums[i - k]) queue.shift();
  }
  return ans;
};
