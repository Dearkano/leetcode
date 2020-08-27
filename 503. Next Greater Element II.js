/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ans = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n * 2; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i % n]) {
      ans[stack.pop()] = nums[i % n];
    }
    if (i < n || nums[i % n] === -1) stack.push(i % n);
  }
  return ans;
};
console.log(nextGreaterElements([100, 1, 11, 1, 120, 111, 123, 1, -1, -100]));
console.log(nextGreaterElements([5, 4, 3, 2, 1]));
