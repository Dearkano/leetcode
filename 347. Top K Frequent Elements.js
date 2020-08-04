/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    if (map.get(num) === undefined) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }
  const ans = [];
  const arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) ans.push(arr[i][0]);
  return ans;
};
