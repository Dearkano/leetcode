/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function (A, B) {
  const C = [];
  const m = A.length;
  const n = A[0].length;
  const k = B[0].length;
  for (let i = 0; i < m; i++) {
    C[i] = [];
    for (let j = 0; j < k; j++) {
      C[i][j] = 0;
      // A row i x B col j
      for (let c = 0; c < n; c++) {
        C[i][j] += A[i][c] * B[c][j];
      }
    }
  }
  return C;
};
