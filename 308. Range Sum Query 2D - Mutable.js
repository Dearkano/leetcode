/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
  if (matrix.length === 0) return;
  this.sum = [];
  for (let i = 0; i < matrix.length + 1; i++) {
    this.sum[i] = new Array(matrix[0].length + 1).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      this.sum[i + 1][j + 1] =
        this.matrix[i][j] +
        this.sum[i][j + 1] +
        this.sum[i + 1][j] -
        this.sum[i][j];
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
  const diff = val - this.matrix[row][col];
  this.matrix[row][col] = val;
  for (let i = row; i < this.matrix.length; i++) {
    for (let j = col; j < this.matrix[0].length; j++) {
      this.sum[i + 1][j + 1] += diff;
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.sum[row2 + 1][col2 + 1] -
    this.sum[row2 + 1][col1] -
    this.sum[row1][col2 + 1] +
    this.sum[row1][col1]
  );
};

