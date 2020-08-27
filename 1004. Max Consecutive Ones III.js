/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let ans = 0;
  for (let l = 0, r = 0; r < A.length; r++) {
    if (A[r] === 0) K--;
    while (K < 0) {
      if (A[l++] === 0) K++;
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
