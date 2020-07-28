/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
  A.sort((a, b) => a - b);
  let max = A[A.length - 1];
  let min = A[0];
  let ans = max - min;
  for (let i = 0; i < A.length - 1; i++) {
    max = Math.max(max, A[i] + 2 * K);
    min = Math.min(A[0] + 2 * K, A[i + 1]);
    ans = Math.min(ans, max - min);
  }
  return ans;
};

console.log(smallestRangeII([1], 0));
