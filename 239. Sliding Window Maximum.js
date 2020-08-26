/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const ans = [];
  let l = 0;
  let r = 0;
  for (; r < nums.length; r++) {
    while (queue.length > 0 && nums[r] > queue[queue.length - 1]) queue.pop();
    queue.push(nums[r]);
    if (r - l + 1 > k) {
      if (queue[0] === nums[l]) queue.shift();
      l++;
    }
    if (r - l + 1 === k) {
      ans.push(queue[0]);
    }
  }
  return ans;
};
