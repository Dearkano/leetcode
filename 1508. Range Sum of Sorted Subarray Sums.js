/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  if (n === 1) return nums[0];
  const sumArray = [];
  const map = new Map();
  for (let i = 0; i < n; i++) {
    sumArray.push(nums[i]);
    map.set(i, [0, nums[i]]);
  }
  for (let len = 2; len <= n; len++) {
    for (let i = len - 1; i < n; i++) {
      const cache = map.get(i - 1);
      const sum = cache[len - 1] + nums[i];
      sumArray.push(Number(sum));
      const curCache = map.get(i);
      curCache.push(sum);
      map.set(i, curCache);
    }
  }
  sumArray.sort((a, b) => a - b);
  let ans = 0;
  for (let i = left - 1; i <= right - 1; i++) {
    ans += sumArray[i];
  }
  return ans % Math.pow(10, 9) + 7;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
