/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  if (m === 0) return false;
  let n = matrix[0].length;
  // choose the row
  for (let i = 0; i < m; i++) {
    if (matrix[i][n - 1] >= target && matrix[i][0] <= target) {
      let left = 0;
      let right = n - 1;
      while (left <= right) {
        let m = Math.floor((left + right) / 2);
        if (matrix[i][m] === target) return true;
        else if (matrix[i][m] > target) {
          right = m - 1;
        } else {
          left = m + 1;
        }
      }
    }
  }
  return false;
};
