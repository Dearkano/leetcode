/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;
  const queue = [];
  const ans = [];
  let idx = 0;
  for (let i = 0; i < m; i++) {
    ans[i] = [];
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        queue.push({ i, j });
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }
  while (idx < queue.length) {
    const { i, j } = queue[idx++];
    if (j > 0 && matrix[i][j - 1] > matrix[i][j]) {
      matrix[i][j - 1] = matrix[i][j] + 1;
      queue.push({ i, j: j - 1 });
    }
    if (j < n - 1 && matrix[i][j + 1] > matrix[i][j]) {
      matrix[i][j + 1] = matrix[i][j] + 1;
      queue.push({ i, j: j + 1 });
    }
    if (i > 0 && matrix[i - 1][j] > matrix[i][j]) {
      matrix[i - 1][j] = matrix[i][j] + 1;
      queue.push({ i: i - 1, j });
    }
    if (i < m - 1 && matrix[i + 1][j] > matrix[i][j]) {
      matrix[i + 1][j] = matrix[i][j] + 1;
      queue.push({ i: i + 1, j });
    }
  }
  return matrix;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
