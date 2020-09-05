/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  const ans = [];
  for (const n of nums1) {
    if (!map.get(n)) map.set(n, 0);
    map.set(n, map.get(n) + 1);
  }

  for (const n of nums2) {
    if (map.get(n)) {
      ans.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return ans;
};
