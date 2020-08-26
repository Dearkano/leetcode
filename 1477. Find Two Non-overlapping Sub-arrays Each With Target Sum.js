/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  if (arr.length < 2) return -1;
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    map.set(sum, i);
  }
  sum = 0;
  let firstLen = Infinity;
  let ans = Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.get(sum - target) !== undefined) {
      firstLen = Math.min(firstLen, i - map.get(sum - target));
    }
    if (map.get(sum + target) !== undefined && firstLen < Infinity) {
      ans = Math.min(ans, firstLen + map.get(sum + target) - i);
    }
  }
  return ans === Infinity ? -1 : ans;
};
console.log(minSumOfLengths([1, 1, 1, 2, 2, 2, 4, 4], 6));
console.log(minSumOfLengths([3, 2, 2, 4, 3], 3));
