// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function (nums, k) {
//   const queue = [];
//   const ans = [];
//   let l = 0;
//   let r = 0;
//   for (; r < nums.length; r++) {
//     while (queue.length > 0 && nums[r] > queue[queue.length - 1]) queue.pop();
//     queue.push(nums[r]);
//     if (r - l + 1 > k) {
//       if (queue[0] === nums[l]) queue.shift();
//       l++;
//     }
//     if (r - l + 1 === k) {
//       ans.push(queue[0]);
//     }
//   }
//   return ans;
// };

const maxSlidingWindow = (nums, k) => {
  const deque = [];
  const ans = [];
  for (let r = 0, l = 0; r < nums.length; r++) {
    while (deque.length > 0 && deque[deque.length - 1] < nums[r]) deque.pop();
    deque.push(nums[r]);
    if (r - l + 1 > k) {
      if (deque[0] === nums[l]) deque.shift();
      l++;
    }
    if (r - l + 1 === k) ans.push(deque[0]);
  }
  return ans;
};
