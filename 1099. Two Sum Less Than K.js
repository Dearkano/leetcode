/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function (A, K) {
  A.sort((a, b) => a - b);
  let l = 0;
  let r = A.length - 1;
  let max = -Infinity;
  while (l < r) {
    if (A[l] + A[r] >= K) r--;
    else {
      max = Math.max(max, A[l] + A[r]);
      l++;
    }
  }
  return max === -Infinity ? -1 : max;
};
