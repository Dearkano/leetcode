/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  for (let s = 0; s < Math.floor(n / 2); s++) {
    for (let i = s; i < n - s - 1; i++) {
      const tl = matrix[s][i];
      matrix[s][i] = matrix[n - i - 1][s];
      matrix[n - i - 1][s] =matrix[n - s - 1][n - i - 1] ;
      matrix[n - s - 1][n - i - 1] = matrix[i][n - s - 1];
      matrix[i][n - s - 1] = tl;
    }
  }
};
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))