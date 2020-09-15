/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
  let count = 0;
  for (const num of data) {
    if (num === 1) count++;
  }

  if (count === 0 || count === data.length) return 0;

  let l = 0;
  let r = 0;
  let max = 0;
  let ans = 0;
  for (; r < data.length; r++) {
    if (data[r] === 1) max++;
    if (r - l + 1 > count) {
      if (data[l] === 1) max--;
      l++;
    }
    ans = Math.max(ans, max);
  }

  return count - ans;
};
