/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;
  const map = new Map();
  for (const n of nums) {
    if (!map.get(n)) map.set(n, 0);
    map.set(n, map.get(n) + 1);
  }
  let ans = 0;
  for (const item of map.keys()) {
    if (k > 0 && map.get(item + k)) {
      ans++;
    } else if (k === 0 && map.get(item) > 1) {
      ans++;
    }
  }
  return ans;
};
