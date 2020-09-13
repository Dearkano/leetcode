/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  if (mat.length === 0) return -1;
  const count = new Array(10001).fill(0);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      count[mat[i][j]]++;
      if (mat.length === count[mat[i][j]]) return mat[i][j];
    }
  }
  return -1;
};
