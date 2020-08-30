/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  if (m === 0) return;
  const n = matrix[0].length;
  let firstRow = false;
  let firstCol = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
      break;
    }
  }
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) {
      firstRow = true;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = m - 1; i > 0; i--) {
    for (let j = n - 1; j > 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }
  if (firstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRow) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
};
console.log(
  setZeroes([
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
  ])
);
