/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
  const left = [];
  const right = [];
  let min = [];
  let ans = 0;
  for (let r = 0; r < A.length; r++) {
    while (min.length > 0 && A[min[min.length - 1]] > A[r]) min.pop();
    const l = min.length === 0 ? -1 : min[min.length - 1];
    left[r] = r - l;
    min.push(r);
  }
  min = [];
  for (let l = A.length - 1; l >= 0; l--) {
    while (min.length > 0 && A[min[min.length - 1]] >= A[l]) min.pop();
    const r = min.length === 0 ? A.length : min[min.length - 1];
    right[l] = r - l;
    min.push(l);
  }
  for (let i = 0; i < A.length; i++) {
    ans = (ans + A[i] * left[i] * right[i]) % (10 ** 9 + 7);
  }
  return ans;
};
console.log(sumSubarrayMins([3, 2, 1, 4]));
