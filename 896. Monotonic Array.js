/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let inc = true;
  let dec = true;
  for (let i = 1; i < A.length; i++) {
    inc &= A[i] <= A[i - 1];
    dec &= A[i] >= A[i - 1];
  }
  return inc || dec;
};
