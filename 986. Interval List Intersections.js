/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let i = 0;
  let j = 0;
  const ans = [];
  while (i < A.length && j < B.length) {
    const curA = A[i];
    const curB = B[j];
    if (curA[0] > curB[1]) {
      j++;
      continue;
    } else if (curB[0] > curA[1]) {
      i++;
      continue;
    }
    const arr = [Math.max(curA[0], curB[0]), Math.min(curA[1], curB[1])];
    ans.push(arr);
    if (arr[1] === curA[1]) i++;
    if (arr[1] === curB[1]) j++;
  }
  return ans;
};
