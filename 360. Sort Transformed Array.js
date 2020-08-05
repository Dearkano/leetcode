/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function (nums, a, b, c) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    arr[i] = a * x ** 2 + b * x + c;
  }
  let l = 0;
  let r = nums.length - 1;
  const ans = [];
  let i = a > 0 ? r : l;
  while (l <= r) {
    if (a > 0) {
      ans[i--] = arr[l] < arr[r] ? arr[r--] : arr[l++];
    } else {
      ans[i++] = arr[l] < arr[r] ? arr[l++] : arr[r--];
    }
  }
  return ans;
};
