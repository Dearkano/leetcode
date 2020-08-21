/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (const n of nums) {
    if (map.get(n) === undefined) map.set(n, 0);
    const k = map.get(n);
    map.set(n, k + 1);
    if (k + 1 > Math.floor(nums.length / 2)) return n;
  }
};
