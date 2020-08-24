/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0].length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(n);
  const height = new Array(n).fill(0);
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") height[j]++;
      else height[j] = 0;
    }

    let curLeft = 0;
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") left[j] = Math.max(left[j], curLeft);
      else {
        curLeft = j + 1;
        left[j] = 0;
      }
    }

    let curRight = n;
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === "1") right[j] = Math.min(right[j], curRight);
      else {
        curRight = j;
        right[j] = n;
      }
    }

    for (let j = 0; j < n; j++)
      ans = Math.max(ans, (right[j] - left[j]) * height[j]);
  }

  return ans;
};
