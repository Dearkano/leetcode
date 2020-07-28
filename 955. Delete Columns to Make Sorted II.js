/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  const m = A.length;
  const n = A[0].length;
  const sort = [];
  let ans = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m - 1; i++) {
      if (!sort[i] && A[i].charCodeAt(j) > A[i + 1].charCodeAt(j)) {
        ans++;
        break;
      }
      if (i === m - 2) {
        for (let k = 0; k < m - 1; k++) {
          sort[k] = sort[k] || A[k].charCodeAt(j) < A[k + 1].charCodeAt(j);
        }
      }
    }
  }
  return ans;
};

console.log(minDeletionSize(["zyx","wvu","tsr"]));
