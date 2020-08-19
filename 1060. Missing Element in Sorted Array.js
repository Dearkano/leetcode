/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  let cnt = 0;
  let pre = 0;
  for (const n of nums) {
    if (pre === 0) {
      pre = n;
      continue;
    }
    const interval = n - pre - 1;
    if (cnt + interval >= k) {
      return pre + k - cnt;
    }
    cnt += interval;
    pre = n;
  }
  return pre + k - cnt
};

console.log(missingElement([1, 2, 4], 3));
