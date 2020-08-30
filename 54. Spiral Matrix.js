/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let d = 0;
  const ans = [];
  const run = (i, j) => {
    ans.push(matrix[i][j]);
    matrix[i][j] = "#";
    let x = i + dir[d % 4][0];
    let y = j + dir[d % 4][1];
    if (!(x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] !== "#")) {
      d++;
      x = i + dir[d % 4][0];
      y = j + dir[d % 4][1];
      if (!(x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] !== "#")) return;
    }
    run(x, y);
  };
  run(0, 0);
  return ans;
};
